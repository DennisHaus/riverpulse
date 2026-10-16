"""Flussachsen der Abschnitte bestimmen.

Quelle: OpenStreetMap (Wasserläufe sind dort in Fliessrichtung digitalisiert).
Eigene Achsen haben Vorrang: config/axis/<reach-id>.geojson (LineString,
Koordinaten in LV95 oder WGS84, in Fliessrichtung).
"""
from __future__ import annotations

from pathlib import Path

import shapely
from shapely.geometry import LineString, MultiLineString, shape

from common import OVERPASS, ROOT, SESSION, log, wgs84_to_lv95


def _to_lv95_coords(coords):
    out = []
    for x, y, *_ in coords:
        if abs(x) < 400 and abs(y) < 400:  # WGS84
            e, n = wgs84_to_lv95(x, y)
        else:
            e, n = x, y
        out.append((e, n))
    return out


def axis_from_override(reach_id: str):
    import json

    p = ROOT / "config" / "axis" / f"{reach_id}.geojson"
    if not p.exists():
        return None
    gj = json.loads(p.read_text(encoding="utf-8"))
    geom = gj
    if gj.get("type") == "FeatureCollection":
        geom = gj["features"][0]["geometry"]
    elif gj.get("type") == "Feature":
        geom = gj["geometry"]
    g = shape(geom)
    if isinstance(g, MultiLineString):
        g = max(g.geoms, key=lambda l: l.length)
    log(f"  Achse {reach_id}: eigene Datei {p.name}")
    return LineString(_to_lv95_coords(g.coords))


def axis_from_osm(reach: dict, bbox):
    w, s, e, n = bbox
    q = f"""
[out:json][timeout:120];
way["waterway"]["name"~"{reach['osm_name_regex']}"]({s},{w},{n},{e});
out geom;
"""
    r = SESSION.post(OVERPASS, data={"data": q}, timeout=180)
    r.raise_for_status()
    ways = [el for el in r.json().get("elements", []) if el.get("type") == "way"]
    if not ways:
        raise RuntimeError(f"Keine OSM-Wasserläufe für '{reach['osm_name_regex']}' gefunden")
    lines = []
    for wy in ways:
        pts = [wgs84_to_lv95(p["lon"], p["lat"]) for p in wy.get("geometry", [])]
        if len(pts) >= 2:
            lines.append(LineString(pts))
    merged = shapely.line_merge(MultiLineString(lines), directed=True)
    if isinstance(merged, MultiLineString):
        merged = max(merged.geoms, key=lambda l: l.length)
    log(f"  Achse {reach['id']}: {len(ways)} OSM-Wege, Länge {merged.length/1000:.2f} km")
    return merged


def densify(line: LineString, step=10.0) -> LineString:
    n = max(2, int(line.length // step) + 1)
    pts = [line.interpolate(i * line.length / (n - 1)) for i in range(n)]
    return LineString([(p.x, p.y) for p in pts])


def build_axes(cfg: dict) -> dict:
    axes = {}
    for reach in cfg["reaches"]:
        line = axis_from_override(reach["id"]) or axis_from_osm(reach, cfg["bbox_wgs84"])
        # leicht glätten: Douglas-Peucker gegen Zickzack, dann gleichmässig verdichten
        line = densify(line.simplify(2.0), 10.0)
        axes[reach["id"]] = line
    return axes


def axes_to_json(cfg, axes):
    return {
        "reaches": [
            {
                "id": r["id"],
                "name": r["name"],
                "description": r.get("description", ""),
                "length": round(axes[r["id"]].length, 1),
                "coords": [[round(x, 2), round(y, 2)] for x, y in axes[r["id"]].coords],
            }
            for r in cfg["reaches"]
        ]
    }


def axes_from_json(js) -> dict:
    return {r["id"]: LineString(r["coords"]) for r in js["reaches"]}


def corridor(axes: dict, half_width: float):
    return shapely.union_all([a.buffer(half_width, cap_style="flat") for a in axes.values()])
