"""BAFU-Messstationen (Pegel, Abfluss) den Flussabschnitten zuordnen."""
from __future__ import annotations

import re
from datetime import datetime, timedelta, timezone

from shapely.geometry import Point

from common import bafu_query, gql_list, log


def _iso(dt):
    return dt.strftime("%Y-%m-%dT%H:%M:%SZ")


def fetch_stations():
    q = """{ water { observations { stations(where: { status: { _eq: "Aufgebaut" } }, limit: 2000) {
        no name siteName riverName localX localY latitude longitude elevation } } } }"""
    return bafu_query(q)["water"]["observations"]["stations"]


def _en(st):
    a, b = float(st.get("localX") or 0), float(st.get("localY") or 0)
    return (a, b) if a > b else (b, a)  # LV95: Ost ~2.6 Mio, Nord ~1.2 Mio


def assign(cfg, axes, stations):
    scfg = cfg["stations"]
    include = {str(s) for s in scfg.get("include", [])}
    exclude = {str(s) for s in scfg.get("exclude", [])}
    out = {}
    for st in stations:
        no = str(st["no"])
        if no in exclude or not st.get("localX"):
            continue
        e, n = _en(st)
        pt = Point(e, n)
        label = f"{st.get('riverName') or ''} {st.get('name') or ''}"
        for reach in cfg["reaches"]:
            ax = axes[reach["id"]]
            d = ax.distance(pt)
            hit = None
            if re.search(reach.get("lake_regex") or "$^", label, re.I):
                d0 = Point(ax.coords[0]).distance(pt)
                d1 = Point(ax.coords[-1]).distance(pt)
                if min(d0, d1) <= scfg["lake_snap_m"]:
                    hit = {"reach": reach["id"], "s": 0.0 if d0 < d1 else round(ax.length, 1),
                           "kind": "see", "dist": round(min(d0, d1))}
            elif (re.search(reach["river_regex"], label, re.I) and d <= scfg["river_buffer_m"]) or (
                    no in include and d <= scfg["lake_snap_m"]):
                hit = {"reach": reach["id"], "s": round(ax.project(pt), 1), "kind": "fluss", "dist": round(d)}
            if hit and hit["kind"] == "fluss":
                # Flusspegel nur dem nächstgelegenen Abschnitt zuordnen
                prev = out.get(no, {}).get("reaches", [])
                other = [h for h in prev if h["kind"] == "fluss"]
                if other and other[0]["dist"] <= hit["dist"]:
                    continue
                if other:
                    prev.remove(other[0])
            if hit:
                rec = out.setdefault(no, {"no": no, "name": st.get("name"), "river": st.get("riverName"),
                                          "site": st.get("siteName"), "e": round(e, 1), "n": round(n, 1),
                                          "elevation": st.get("elevation"), "reaches": []})
                rec["reaches"].append(hit)
    return list(out.values())


def parameter_units(stations):
    """Welche Grössen (W, Q) eine Station liefert und ob W absolut (m ü.M.) ist."""
    if not stations:
        return
    nos = [s["no"] for s in stations]
    to = datetime.now(timezone.utc).replace(minute=0, second=0, microsecond=0)
    fr = to - timedelta(days=2)
    q = f"""{{ water {{ observations {{ data_1hour_mean(where: {{
        station: {{ no: {{ _in: {gql_list(nos)} }} }},
        parameterName: {{ _in: ["W","Q","WT"] }},
        timestamp: {{ _gte: "{_iso(fr)}", _lt: "{_iso(to)}" }} }}) {{
        parameterName unitSymbol value station {{ no }} }} }} }} }}"""
    rows = bafu_query(q)["water"]["observations"]["data_1hour_mean"]
    by = {s["no"]: s for s in stations}
    for r in rows:
        st = by.get(str(r["station"]["no"]))
        if not st:
            continue
        p = r["parameterName"]
        unit = r.get("unitSymbol") or ""
        info = st.setdefault("params", {}).setdefault(p, {"unit": unit})
        if p == "W":
            v = r.get("value")
            info["absolute"] = ("ü" in unit or "M." in unit or (v is not None and v > 150))


def build_stations(cfg, axes):
    stations = fetch_stations()
    log(f"  BAFU: {len(stations)} aktive Stationen im Messnetz")
    sel = assign(cfg, axes, stations)
    try:
        parameter_units(sel)
    except Exception as exc:
        log(f"  Einheiten konnten nicht bestimmt werden: {exc}")
    for s in sel:
        s.setdefault("params", {})
        where = ", ".join(f"{h['reach']} km {h['s']/1000:.2f} ({h['kind']})" for h in s["reaches"])
        log(f"  Station {s['no']} {s['river']} – {s['name']}: {where}; Grössen {sorted(s['params'])}")
    return {"stations": sel}
