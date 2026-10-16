"""Stündlicher Niederschlag der MeteoSchweiz-Stationen rund um die Linthebene.

Läuft alle 30 Minuten als GitHub Action und schreibt live/meteo.json, das die
Web-App über raw.githubusercontent.com liest.
"""
from __future__ import annotations

import argparse
import csv
import io
import math
from datetime import datetime, timedelta, timezone
from pathlib import Path

from common import STAC_API, http_get, load_config, log, lv95_to_wgs84, write_json

PRECIP_10MIN = "rre150z0"


def _decode(raw: bytes) -> str:
    for enc in ("utf-8-sig", "cp1252", "latin-1"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return raw.decode("latin-1", errors="replace")


def _csv(url):
    text = _decode(http_get(url).content)
    return list(csv.DictReader(io.StringIO(text), delimiter=";"))


def _col(row, *needles):
    for k in row:
        kl = k.lower()
        if all(n in kl for n in needles):
            return k
    return None


def _time(s):
    for fmt in ("%d.%m.%Y %H:%M", "%Y-%m-%d %H:%M", "%Y-%m-%dT%H:%M:%SZ", "%Y%m%d%H%M"):
        try:
            return datetime.strptime(s.strip(), fmt).replace(tzinfo=timezone.utc)
        except ValueError:
            continue
    return None


def collection_assets(collection):
    js = http_get(f"{STAC_API}/collections/{collection}").json()
    return {k: v["href"] for k, v in (js.get("assets") or {}).items()}


def station_assets(collection, abbr):
    js = http_get(f"{STAC_API}/collections/{collection}/items/{abbr.lower()}").json()
    return {k: v["href"] for k, v in (js.get("assets") or {}).items()}


def select_stations(cfg, center):
    mcfg = cfg["meteo"]
    found = {}
    for coll in mcfg["collections"]:
        try:
            assets = collection_assets(coll)
            meta_url = next(h for k, h in assets.items() if "meta_stations" in k)
            rows = _csv(meta_url)
        except Exception as exc:
            log(f"  {coll}: Stationsliste nicht lesbar ({exc})")
            continue
        if not rows:
            continue
        ce, cn = _col(rows[0], "lv95", "east"), _col(rows[0], "lv95", "north")
        ca, cname = _col(rows[0], "station_abbr"), _col(rows[0], "station_name")
        ch = _col(rows[0], "height_masl") or _col(rows[0], "height")
        for r in rows:
            try:
                e, n = float(r[ce]), float(r[cn])
            except (TypeError, ValueError, KeyError):
                continue
            d = math.hypot(e - center[0], n - center[1]) / 1000
            if d <= mcfg["radius_km"]:
                abbr = r[ca]
                if abbr not in found or found[abbr]["dist_km"] > d:
                    found[abbr] = {"abbr": abbr, "name": r.get(cname, abbr), "e": e, "n": n,
                                   "elevation": r.get(ch), "collection": coll, "dist_km": round(d, 1)}
    sel = sorted(found.values(), key=lambda s: s["dist_km"])[: mcfg["max_stations"]]
    return sel


def hourly_series(st, days):
    assets = station_assets(st["collection"], st["abbr"])
    urls = [h for k, h in assets.items() if "_t_recent" in k] + [h for k, h in assets.items() if "_t_now" in k]
    end = datetime.now(timezone.utc).replace(minute=0, second=0, microsecond=0) + timedelta(hours=1)
    start = end - timedelta(days=days)
    n = int((end - start).total_seconds() // 3600)
    vals = [None] * n
    latest = None
    for url in urls:
        rows = _csv(url)
        if not rows or PRECIP_10MIN not in rows[0]:
            continue
        tcol = _col(rows[0], "timestamp") or _col(rows[0], "time")
        for r in rows:
            t = _time(r.get(tcol, ""))
            v = r.get(PRECIP_10MIN, "").strip()
            if t is None or v in ("", "-"):
                continue
            # Zehnminutensumme gehört zum Intervall, das zum Zeitstempel endet
            i = int(((t - timedelta(minutes=10)) - start).total_seconds() // 3600)
            if 0 <= i < n:
                vals[i] = round((vals[i] or 0) + float(v), 2)
            if latest is None or t > latest:
                latest = t
    return {"start": start.strftime("%Y-%m-%dT%H:%M:%SZ"), "step_s": 3600, "values": vals,
            "latest": latest.strftime("%Y-%m-%dT%H:%M:%SZ") if latest else None}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default="config/linthebene.json")
    ap.add_argument("--out", default="live")
    args = ap.parse_args()
    cfg = load_config(args.config)
    w, s, e, n = cfg["bbox_wgs84"]
    from common import wgs84_to_lv95
    center = wgs84_to_lv95((w + e) / 2, (s + n) / 2)

    stations = select_stations(cfg, center)
    log(f"{len(stations)} Niederschlagsstationen im Umkreis von {cfg['meteo']['radius_km']} km")
    out = []
    for st in stations:
        try:
            st["precip_h"] = hourly_series(st, cfg["meteo"]["days"])
            lon, lat = lv95_to_wgs84(st["e"], st["n"])
            st["lon"], st["lat"] = round(lon, 5), round(lat, 5)
            out.append(st)
            got = sum(v is not None for v in st["precip_h"]["values"])
            log(f"  {st['abbr']} {st['name']}: {got} Stundenwerte")
        except Exception as exc:
            log(f"  {st['abbr']}: übersprungen ({exc})")
    write_json(Path(args.out) / "meteo.json", {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "source": "MeteoSchweiz",
        "stations": out,
    })


if __name__ == "__main__":
    main()
