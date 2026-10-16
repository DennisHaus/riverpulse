"""Vermessene BAFU-Querprofile (mit Flusssohle unter Wasser) den erzeugten Profilen zuordnen.

Die Kategorie in der GraphQL-API wird per Introspektion gesucht, damit eine
Umbenennung auf BAFU-Seite nicht sofort alles bricht.
"""
from __future__ import annotations

from collections import defaultdict

import numpy as np
from shapely.geometry import LineString

from common import bafu_query, log

FIELDS = "gwlNo riverName sectionName gewissAddress crossDistance easting northing height surveyDate pointRole"


def _type_fields(name):
    q = '{ __type(name: "%s") { fields { name type { name kind ofType { name kind ofType { name } } } } } }' % name
    t = bafu_query(q)["__type"]
    return t["fields"] if t else []


def _named(t):
    while t and not t.get("name"):
        t = t.get("ofType")
    return t.get("name") if t else None


def find_cross_section_path():
    root = bafu_query("{ __schema { queryType { name } } }")["__schema"]["queryType"]["name"]
    water = next((f for f in _type_fields(root) if f["name"] == "water"), None)
    if not water:
        return None
    for cat in _type_fields(_named(water["type"])):
        n = cat["name"].lower()
        if any(k in n for k in ("profile", "river", "survey", "vermess")):
            tables = [f["name"] for f in _type_fields(_named(cat["type"]))]
            if "cross_sections" in tables:
                return cat["name"]
    return None


def fetch_window(cat, e0, n0, e1, n1, depth=0):
    q = f"""{{ water {{ {cat} {{ cross_sections(where: {{
        easting: {{ _gte: {e0}, _lt: {e1} }}, northing: {{ _gte: {n0}, _lt: {n1} }} }}) {{ {FIELDS} }} }} }} }}"""
    try:
        return bafu_query(q)["water"][cat]["cross_sections"]
    except RuntimeError as exc:
        if depth > 6:
            raise
        log(f"    Fenster zu gross, wird geteilt ({exc})")
        em, nm = (e0 + e1) / 2, (n0 + n1) / 2
        rows = []
        for a, b, c, d in ((e0, n0, em, nm), (em, n0, e1, nm), (e0, nm, em, n1), (em, nm, e1, n1)):
            rows += fetch_window(cat, a, b, c, d, depth + 1)
        return rows


def attach_surveys(area, axes, profiles_by_reach, max_dist=30.0):
    try:
        cat = find_cross_section_path()
    except Exception as exc:
        log(f"  Flussvermessung nicht erreichbar: {exc}")
        return 0
    if not cat:
        log("  Flussvermessung: Kategorie in der API nicht gefunden – übersprungen")
        return 0
    minx, miny, maxx, maxy = area.bounds
    rows = []
    step = 4000
    for e in np.arange(np.floor(minx), maxx, step):
        for n in np.arange(np.floor(miny), maxy, step):
            rows += fetch_window(cat, int(e), int(n), int(e + step), int(n + step))
    log(f"  Flussvermessung: {len(rows)} Messpunkte im Korridor")

    groups = defaultdict(list)
    seen = set()
    for r in rows:
        if r.get("height") is None or r.get("easting") is None:
            continue
        key = (r["gwlNo"], r["gewissAddress"], (r.get("surveyDate") or "")[:10])
        uid = key + (round(r["easting"], 2), round(r["northing"], 2), round(r["height"], 3))
        if uid in seen:  # Punkte auf Fenstergrenzen nicht doppelt
            continue
        seen.add(uid)
        groups[key].append(r)
    latest = {}
    for (gwl, addr, date), pts in groups.items():
        if len(pts) < 5:
            continue
        k = (gwl, addr)
        if k not in latest or date > latest[k][0]:
            latest[k] = (date, pts)

    attached = 0
    for reach_id, prof in profiles_by_reach.items():
        ax = axes[reach_id]
        ss = np.array([p["s"] for p in prof["profiles"]])
        best = {}
        for (gwl, addr), (date, pts) in latest.items():
            pts = sorted(pts, key=lambda r: r.get("crossDistance") or 0)
            line = LineString([(p["easting"], p["northing"]) for p in pts])
            inter = line.intersection(ax)
            if inter.is_empty:
                continue
            ip = inter if inter.geom_type == "Point" else inter.centroid
            s = ax.project(ip)
            i = int(np.argmin(np.abs(ss - s)))
            d = abs(ss[i] - s)
            if d > max_dist or (i in best and best[i][0] <= d):
                continue
            p = prof["profiles"][i]
            cx, cy = p["c"]
            nx, ny = p["n"]
            offs = [round((r["easting"] - cx) * nx + (r["northing"] - cy) * ny, 2) for r in pts]
            hs = [round(float(r["height"]), 2) for r in pts]
            best[i] = (d, {"date": date, "addr": addr, "river": pts[0].get("riverName"),
                           "section": pts[0].get("sectionName"), "dist": round(d, 1), "o": offs, "z": hs})
        for i, (_, svy) in best.items():
            prof["profiles"][i]["svy"] = svy
            attached += 1
        log(f"  {reach_id}: {len(best)} vermessene Querprofile zugeordnet")
    return attached
