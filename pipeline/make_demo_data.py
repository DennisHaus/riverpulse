"""Künstliche Demodaten für eine lokale Vorschau – ohne Internet.

Erzeugt ein Gelände mit Kanal, Dämmen, Bäumen und Häusern als GeoTIFF- und
LAS-Kacheln und schickt sie durch dieselben Funktionen wie die echte Pipeline.
So lässt sich die Web-App ansehen, bevor die echten Daten aufbereitet sind:

  python pipeline/make_demo_data.py --out site/data
  python -m http.server -d site 8000
"""
from __future__ import annotations

import argparse
import tempfile
from datetime import datetime, timezone
from pathlib import Path

import laspy
import numpy as np
import rasterio
from rasterio.transform import from_origin
from shapely.geometry import LineString

import build_pointcloud as bpc
import build_profiles as bpr
from build_axis import axes_to_json, corridor, densify
from common import write_json

RNG = np.random.default_rng(7)
AXIS = LineString([(2721600, 1222900), (2720900, 1223700), (2720400, 1224300),
                   (2719600, 1225100), (2718900, 1225700), (2718200, 1226500)])
AXIS_RAW = AXIS
AXIS = densify(AXIS, 10)
Z_UP, Z_DOWN = 419.0, 416.5


def wl_at(s):
    return Z_UP + (Z_DOWN - Z_UP) * s / AXIS.length


def terrain(e, n, with_objects=False):
    """Gelände (DTM) und optional Oberfläche (DSM) an Punkten e, n."""
    from shapely import distance, line_locate_point, points
    pts = points(e, n)
    d = distance(AXIS_RAW, pts)
    s = line_locate_point(AXIS_RAW, pts)
    wl = wl_at(s)
    plain = wl - 1.2 + 0.4 * np.sin(e / 300.0) * np.cos(n / 410.0)
    z = plain.copy()
    crest = wl + 3.2 + 0.6 * np.sin(s / 700.0)
    ch = d < 22
    z[ch] = wl[ch]                                  # Wasseroberfläche im DTM
    bank = (d >= 22) & (d < 28)
    z[bank] = wl[bank] + (crest[bank] - wl[bank]) * (d[bank] - 22) / 6
    top = (d >= 28) & (d < 32)
    z[top] = crest[top]
    out = (d >= 32) & (d < 40)
    z[out] = crest[out] + (plain[out] - crest[out]) * (d[out] - 32) / 8
    # eine Schwachstelle im rechten Damm
    weak = (np.abs(s - 2600) < 60) & (d >= 26) & (d < 40)
    z[weak] -= 1.6 * (1 - np.abs(s[weak] - 2600) / 60)
    if not with_objects:
        return z
    dsm = z.copy()
    trees = (d > 45) & (d < 70) & ((np.sin(s / 37.0) + np.cos(e / 23.0)) > 1.1)
    dsm[trees] += 12 + 4 * np.sin(e[trees] / 5.0)
    hx, hy = np.floor(e / 90.0), np.floor(n / 90.0)
    house = ((hx * 7 + hy * 13) % 11 == 0) & (d > 90) & ((e % 90) < 18) & ((n % 90) < 14)
    dsm[house] += 7.0
    return z, dsm, trees, house


def make_rasters(tmp: Path, keys):
    files = {"dtm": {}, "dsm": {}}
    for key in keys:
        e0, n0 = key[0] * 1000, key[1] * 1000
        cell = 2.0  # Demo: 2 m statt 0.5 m, damit es schnell geht
        cx = e0 + (np.arange(500) + 0.5) * cell
        cy = n0 + 1000 - (np.arange(500) + 0.5) * cell
        gx, gy = np.meshgrid(cx, cy)
        z, dsm, _, _ = terrain(gx.ravel(), gy.ravel(), True)
        for kind, arr in (("dtm", z), ("dsm", dsm)):
            p = tmp / f"{kind}_{key[0]}_{key[1]}.tif"
            with rasterio.open(p, "w", driver="GTiff", width=500, height=500, count=1, dtype="float32",
                               crs="EPSG:2056", transform=from_origin(e0, n0 + 1000, cell, cell), nodata=-9999) as ds:
                ds.write(arr.reshape(500, 500).astype("float32"), 1)
            files[kind][key] = p
    return files


def make_las(path: Path, key, area):
    e0, n0 = key[0] * 1000, key[1] * 1000
    n = 700_000
    e = e0 + RNG.random(n) * 1000
    nn = n0 + RNG.random(n) * 1000
    from shapely import contains_xy
    m = contains_xy(area, e, nn)
    e, nn = e[m], nn[m]
    if e.size == 0:
        return False
    z, dsm, trees, house = terrain(e, nn, True)
    from shapely import distance, points
    d = distance(AXIS_RAW, points(e, nn))
    cls = np.full(e.size, 2, dtype=np.uint8)
    zz = z.copy()
    veg = trees & (RNG.random(e.size) < 0.7)
    zz[veg] = z[veg] + (dsm[veg] - z[veg]) * RNG.random(veg.sum())
    cls[veg] = 5
    cls[house] = 6
    zz[house] = dsm[house]
    water = d < 22
    cls[water] = 9
    keep = ~(water & (RNG.random(e.size) < 0.85))  # Wasser liefert wenige Echos
    hdr = laspy.LasHeader(point_format=7, version="1.4")
    hdr.scales = [0.01, 0.01, 0.01]
    hdr.offsets = [e0, n0, 0]
    las = laspy.LasData(hdr)
    las.x, las.y, las.z = e[keep], nn[keep], zz[keep]
    las.classification = cls[keep]
    inten = np.where(cls == 9, 300, np.where(cls == 5, 1800, np.where(cls == 6, 2600, 1300)))
    las.intensity = (inten + RNG.normal(0, 250, e.size)).clip(0, 65535).astype(np.uint16)[keep]
    base = np.array([[128, 124, 92]] * e.size)
    base[cls == 5] = [62, 98, 52]
    base[cls == 6] = [170, 82, 60]
    base[cls == 9] = [52, 88, 98]
    field = ((np.floor(e / 120) + np.floor(nn / 80)) % 3 == 0) & (cls == 2) & (d > 40)
    base[field] = [150, 160, 90]
    rgb = (base + RNG.normal(0, 10, base.shape)).clip(0, 255).astype(np.uint16) * 256
    las.red, las.green, las.blue = rgb[keep, 0], rgb[keep, 1], rgb[keep, 2]
    las.write(path)
    return True


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="site/data")
    args = ap.parse_args()
    out = Path(args.out)
    tmp = Path(tempfile.mkdtemp())

    axes = {"linthkanal": AXIS}
    pcfg = {"spacing_m": 50, "half_width_m": 300, "step_m": 1.0, "channel_search_m": 20}
    pc_cfg = {"corridor_half_width_m": 250, "subtile_m": 250, "levels_voxel_m": [8, 4, 2, 1],
              "drop_classes": [7, 18], "colorize_from_ortho": "auto"}
    area = corridor(axes, 320)
    minx, miny, maxx, maxy = area.bounds
    keys = [(i, j) for i in range(int(minx // 1000), int(maxx // 1000) + 1)
            for j in range(int(miny // 1000), int(maxy // 1000) + 1)]

    print("Raster …", len(keys), "Kacheln", flush=True)
    from shapely.geometry import box as _box
    keys = [k for k in keys if _box(k[0] * 1000, k[1] * 1000, k[0] * 1000 + 1000, k[1] * 1000 + 1000).intersects(area)]
    files = make_rasters(tmp, keys)
    dtm, dsm = bpr.TileRaster(files["dtm"]), bpr.TileRaster(files["dsm"])
    axis, prof = bpr.build_reach_profiles("linthkanal", AXIS, dtm, dsm, pcfg)
    print(f"  {len(prof['profiles'])} Querprofile")

    # künstliche Vermessung mit Sohle bei jedem 6. Profil
    for i, p in enumerate(prof["profiles"]):
        if i % 6:
            continue
        offs = list(range(-40, 41, 2))
        zs = []
        for o in offs:
            g = p["dtm"][int(round((o - prof["offset0"]) / prof["step"]))]
            zs.append(round((p["wl0"] - 3.6 + 0.0015 * o * o) if abs(o) < 22 else g, 2))
        p["svy"] = {"date": "2019-09-12", "addr": 1000 + i, "river": "Linth", "section": "Demo-Abschnitt",
                    "dist": 0.0, "o": offs, "z": zs}

    print("Punktwolke …")
    pc_area = corridor(axes, pc_cfg["corridor_half_width_m"])
    las_files = {}
    for k in keys:
        p = tmp / f"pc_{k[0]}_{k[1]}.las"
        if make_las(p, k, pc_area):
            las_files[k] = p
    bpc.download = lambda url, dest: Path(url)       # lokale Dateien statt Download
    bpc._open_las = lambda path: path
    tiles = []
    (out / "pc").mkdir(parents=True, exist_ok=True)
    for k, p in las_files.items():
        item = {"id": f"swisssurface3d_2023_{k[0]}-{k[1]}", "assets": {"a": {"href": str(p)}}}
        tiles += bpc.process_tile(k, item, pc_area, pc_cfg, None, out / "pc")
    write_json(out / "pc" / "index.json", {"levels": pc_cfg["levels_voxel_m"], "subtile": 250, "tiles": tiles})

    cfg = {"reaches": [{"id": "linthkanal", "name": "Demo-Kanal", "description": "künstliches Gelände"}]}
    write_json(out / "axis.json", axes_to_json(cfg, {"linthkanal": axis}))
    write_json(out / f"profiles_linthkanal.json", prof)
    st = []
    for no, name, s, kind in (("D001", "Demo Oberwasser", 0.0, "see"), ("D002", "Demo Mitte", 2300.0, "fluss"),
                              ("D003", "Demo Unterwasser", round(axis.length, 1), "see")):
        pt = axis.interpolate(s)
        st.append({"no": no, "name": name, "river": "Demo", "e": round(pt.x, 1), "n": round(pt.y, 1),
                   "params": {"W": {"unit": "m ü.M.", "absolute": True}, "Q": {"unit": "m³/s"}},
                   "reaches": [{"reach": "linthkanal", "s": s, "kind": kind, "dist": 0}],
                   "demo_base": round(wl_at(s), 2)})
    write_json(out / "stations.json", {"stations": st})
    write_json(out / "meta.json", {
        "title": "Linthebene (Demo)",
        "built": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "origin": [round((minx + maxx) / 2), round((miny + maxy) / 2)],
        "bounds": [round(minx), round(miny), round(maxx), round(maxy)],
        "reaches": cfg["reaches"],
        "demo": True,
    }, compact=False)
    total = sum(sum(t["counts"]) for t in tiles)
    print(f"Fertig: {len(tiles)} Kacheln, {total:,} Punkte -> {out}")


if __name__ == "__main__":
    main()
