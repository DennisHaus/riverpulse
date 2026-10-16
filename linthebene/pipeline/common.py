"""Gemeinsame Hilfsfunktionen: Konfiguration, HTTP, STAC, Koordinaten."""
from __future__ import annotations

import json
import math
import os
import re
import sys
import time
from pathlib import Path

import requests
from pyproj import Transformer

STAC_API = "https://data.geo.admin.ch/api/stac/v1"
BAFU_API = "https://data.bafu.admin.ch/api"
OVERPASS = "https://overpass-api.de/api/interpreter"

ROOT = Path(__file__).resolve().parent.parent
CACHE = Path(os.environ.get("LINTH_CACHE", ROOT / ".cache"))

_to_wgs = Transformer.from_crs("EPSG:2056", "EPSG:4326", always_xy=True)
_to_lv95 = Transformer.from_crs("EPSG:4326", "EPSG:2056", always_xy=True)

SESSION = requests.Session()
SESSION.headers["User-Agent"] = "linthebene-viewer/1.0 (+github)"


def log(*args):
    print(time.strftime("%H:%M:%S"), *args, flush=True)


def load_config(path: str | Path) -> dict:
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def lv95_to_wgs84(e, n):
    return _to_wgs.transform(e, n)


def wgs84_to_lv95(lon, lat):
    return _to_lv95.transform(lon, lat)


def write_json(path: Path, obj, compact=True):
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        if compact:
            json.dump(obj, f, ensure_ascii=False, separators=(",", ":"), allow_nan=False)
        else:
            json.dump(obj, f, ensure_ascii=False, indent=2, allow_nan=False)


def read_json(path: Path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def http_get(url, params=None, timeout=120, retries=4, stream=False):
    for attempt in range(retries):
        try:
            r = SESSION.get(url, params=params, timeout=timeout, stream=stream)
            if r.status_code in (429, 502, 503, 504):
                raise requests.HTTPError(f"HTTP {r.status_code}")
            r.raise_for_status()
            return r
        except requests.RequestException as exc:
            if attempt == retries - 1:
                raise
            wait = 5 * (attempt + 1)
            log(f"  Fehler bei {url}: {exc} – neuer Versuch in {wait}s")
            time.sleep(wait)


def download(url: str, dest: Path) -> Path:
    """Lädt eine Datei herunter, falls sie noch nicht im Cache liegt."""
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    tmp = dest.with_suffix(dest.suffix + ".part")
    r = http_get(url, stream=True, timeout=600)
    with open(tmp, "wb") as f:
        for chunk in r.iter_content(chunk_size=1 << 20):
            f.write(chunk)
    tmp.rename(dest)
    return dest


# ---------------------------------------------------------------- STAC

def stac_items(collection: str, bbox_wgs84) -> list[dict]:
    """Alle Items einer swisstopo-STAC-Collection in einer Bounding Box."""
    url = f"{STAC_API}/collections/{collection}/items"
    params = {"bbox": ",".join(f"{v:.6f}" for v in bbox_wgs84), "limit": 100}
    items = []
    while url:
        r = http_get(url, params=params)
        js = r.json()
        items.extend(js.get("features", []))
        url = None
        params = None
        for link in js.get("links", []):
            if link.get("rel") == "next":
                url = link["href"]
    return items


TILE_RE = re.compile(r"(\d{4})-(\d{4})")
YEAR_RE = re.compile(r"_(\d{4})_")


def tile_key(item_id: str):
    """Kachel '2722-1220' aus einer Item-ID wie 'swissalti3d_2019_2722-1220'."""
    m = TILE_RE.findall(item_id)
    if not m:
        return None
    e, n = m[-1]
    return int(e), int(n)


def item_year(item: dict) -> int:
    m = YEAR_RE.search(item["id"] + "_")
    if m:
        return int(m.group(1))
    dt = (item.get("properties") or {}).get("datetime") or ""
    return int(dt[:4]) if dt[:4].isdigit() else 0


def latest_per_tile(items: list[dict]) -> dict:
    """Pro 1-km-Kachel nur den neuesten Stand behalten."""
    best = {}
    for it in items:
        k = tile_key(it["id"])
        if k is None:
            continue
        if k not in best or item_year(it) > item_year(best[k]):
            best[k] = it
    return best


def pick_asset(item: dict, prefer: list[str], must: list[str] | None = None):
    """Wählt eine Asset-URL anhand bevorzugter Teilstrings im Dateinamen."""
    assets = item.get("assets", {})
    hrefs = [a["href"] for a in assets.values() if "href" in a]
    if must:
        hrefs = [h for h in hrefs if all(m in h for m in must)]
    for p in prefer:
        for h in hrefs:
            if p in h:
                return h
    return hrefs[0] if hrefs else None


# ---------------------------------------------------------------- BAFU GraphQL

def bafu_query(query: str, timeout=90):
    r = SESSION.post(BAFU_API, json={"query": query}, timeout=timeout)
    r.raise_for_status()
    js = r.json()
    if "errors" in js:
        raise RuntimeError("; ".join(e.get("message", "?") for e in js["errors"]))
    return js["data"]


def gql_list(values) -> str:
    return json.dumps([str(v) for v in values])


def finite(v, nd=2):
    if v is None:
        return None
    try:
        f = float(v)
    except (TypeError, ValueError):
        return None
    if math.isnan(f) or math.isinf(f):
        return None
    return round(f, nd)


def die(msg):
    log("ABBRUCH:", msg)
    sys.exit(1)
