"""Gesamte Aufbereitung: Achsen, Querprofile, Vermessung, Stationen, Punktwolke.

  python pipeline/build_all.py --config config/linthebene.json --out build/data
  python pipeline/build_all.py ... --skip pointcloud     # schneller Testlauf
"""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
from pathlib import Path

from build_axis import axes_from_json, axes_to_json, build_axes, corridor
from build_pointcloud import build_pointcloud
from build_profiles import TileRaster, build_reach_profiles, corridor_bbox_wgs84, fetch_raster_tiles
from build_stations import build_stations
from build_surveys import attach_surveys
from common import load_config, log, read_json, write_json


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default="config/linthebene.json")
    ap.add_argument("--out", default="build/data")
    ap.add_argument("--skip", nargs="*", default=[], choices=["profiles", "surveys", "stations", "pointcloud"])
    args = ap.parse_args()

    cfg = load_config(args.config)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    log("1/5 Flussachsen")
    axes = build_axes(cfg)

    hw = max(cfg["profiles"]["half_width_m"], cfg["pointcloud"]["corridor_half_width_m"])
    area = corridor(axes, hw + 20)
    bbox = corridor_bbox_wgs84(area)

    profiles = {}
    if "profiles" not in args.skip:
        log("2/5 Querprofile (swissALTI3D, swissSURFACE3D Raster)")
        dtm = TileRaster(fetch_raster_tiles("dtm", area, bbox))
        dsm = TileRaster(fetch_raster_tiles("dsm", area, bbox))
        for r in cfg["reaches"]:
            axes[r["id"]], profiles[r["id"]] = build_reach_profiles(r["id"], axes[r["id"]], dtm, dsm, cfg["profiles"])
            log(f"  {r['id']}: {len(profiles[r['id']]['profiles'])} Querprofile")
    else:
        for r in cfg["reaches"]:
            p = out / f"profiles_{r['id']}.json"
            if p.exists():
                profiles[r["id"]] = read_json(p)
        if (out / "axis.json").exists():
            axes = axes_from_json(read_json(out / "axis.json"))

    if profiles and "surveys" not in args.skip:
        log("3/5 BAFU-Flussvermessung")
        attach_surveys(area, axes, profiles)

    write_json(out / "axis.json", axes_to_json(cfg, axes))
    for rid, prof in profiles.items():
        write_json(out / f"profiles_{rid}.json", prof)

    if "stations" not in args.skip:
        log("4/5 BAFU-Messstationen")
        write_json(out / "stations.json", build_stations(cfg, axes))

    if "pointcloud" not in args.skip:
        log("5/5 Punktwolke swissSURFACE3D")
        pc_area = corridor(axes, cfg["pointcloud"]["corridor_half_width_m"])
        index = build_pointcloud(pc_area, bbox, cfg["pointcloud"], out / "pc")
        write_json(out / "pc" / "index.json", index)

    minx, miny, maxx, maxy = area.bounds
    write_json(out / "meta.json", {
        "title": cfg["title"],
        "built": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "origin": [round((minx + maxx) / 2), round((miny + maxy) / 2)],
        "bounds": [round(minx), round(miny), round(maxx), round(maxy)],
        "reaches": [{"id": r["id"], "name": r["name"], "description": r.get("description", "")}
                    for r in cfg["reaches"]],
        "demo": False,
    }, compact=False)
    log("Fertig:", out.resolve())


if __name__ == "__main__":
    main()
