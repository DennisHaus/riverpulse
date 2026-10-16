"""Querprofile entlang der Achsen aus Terrainmodell (DTM) und Oberflächenmodell (DSM).

DTM: swissALTI3D 0.5 m   (ch.swisstopo.swissalti3d)
DSM: swissSURFACE3D Raster 0.5 m (ch.swisstopo.swisssurface3d-raster)
Höhen in LN02, wie die BAFU-Pegel in m ü.M.
"""
from __future__ import annotations

from collections import OrderedDict

import numpy as np
import rasterio
from shapely.geometry import LineString, box

from common import CACHE, download, finite, latest_per_tile, log, lv95_to_wgs84, pick_asset, stac_items

RASTERS = {
    "dtm": ("ch.swisstopo.swissalti3d", ["_0.5_2056_5728.tif", "_0.5_"]),
    "dsm": ("ch.swisstopo.swisssurface3d-raster", ["_0.5_2056_5728.tif", "_0.5_"]),
}


class TileRaster:
    """Liest 1-km-Rasterkacheln bei Bedarf, mit kleinem Zwischenspeicher."""

    def __init__(self, files: dict, keep=8):
        self.files = files  # (e_km, n_km) -> Path
        self.cache: OrderedDict = OrderedDict()
        self.keep = keep

    def _load(self, key):
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        path = self.files.get(key)
        if path is None:
            arr = None
        else:
            with rasterio.open(path) as ds:
                band = ds.read(1, masked=True).astype("float32").filled(np.nan)
                arr = (band, ds.transform)
        self.cache[key] = arr
        if len(self.cache) > self.keep:
            self.cache.popitem(last=False)
        return arr

    def sample(self, e: np.ndarray, n: np.ndarray) -> np.ndarray:
        out = np.full(e.shape, np.nan, dtype="float32")
        ke = np.floor(e / 1000).astype(int)
        kn = np.floor(n / 1000).astype(int)
        keys = set(zip(ke.tolist(), kn.tolist()))
        for key in keys:
            data = self._load(key)
            if data is None:
                continue
            band, tr = data
            m = (ke == key[0]) & (kn == key[1])
            inv = ~tr
            cols, rows = inv * (e[m], n[m])
            cols = np.floor(cols).astype(int)
            rows = np.floor(rows).astype(int)
            ok = (rows >= 0) & (rows < band.shape[0]) & (cols >= 0) & (cols < band.shape[1])
            vals = np.full(rows.shape, np.nan, dtype="float32")
            vals[ok] = band[rows[ok], cols[ok]]
            out[m] = vals
        return out


def fetch_raster_tiles(kind: str, area, bbox_wgs84) -> dict:
    collection, prefer = RASTERS[kind]
    items = latest_per_tile(stac_items(collection, bbox_wgs84))
    files = {}
    for key, it in sorted(items.items()):
        if not box(key[0] * 1000, key[1] * 1000, key[0] * 1000 + 1000, key[1] * 1000 + 1000).intersects(area):
            continue
        href = pick_asset(it, prefer, must=[".tif"])
        if not href:
            continue
        files[key] = download(href, CACHE / kind / href.rsplit("/", 1)[-1])
    log(f"  {kind.upper()}: {len(files)} Kacheln")
    return files


def corridor_bbox_wgs84(area, pad=200):
    minx, miny, maxx, maxy = area.bounds
    lon0, lat0 = lv95_to_wgs84(minx - pad, miny - pad)
    lon1, lat1 = lv95_to_wgs84(maxx + pad, maxy + pad)
    return [lon0, lat0, lon1, lat1]


def _median_filter(a: np.ndarray, w: int) -> np.ndarray:
    out = a.copy()
    h = w // 2
    for i in range(len(a)):
        seg = a[max(0, i - h): i + h + 1]
        seg = seg[np.isfinite(seg)]
        out[i] = np.median(seg) if seg.size else np.nan
    return out


def reference_waterline(zmin: np.ndarray) -> np.ndarray:
    """Wasserspiegel zur Befliegungszeit, geschätzt aus dem tiefsten Punkt im Gerinne.

    Geglättet und in Fliessrichtung nicht ansteigend erzwungen.
    """
    z = _median_filter(zmin, 7)
    if np.isnan(z).all():
        return z
    idx = np.arange(len(z))
    good = np.isfinite(z)
    z = np.interp(idx, idx[good], z[good])
    return np.minimum.accumulate(z)


def build_reach_profiles(reach_id: str, axis: LineString, dtm: TileRaster, dsm: TileRaster, pcfg: dict):
    spacing = pcfg["spacing_m"]
    hw = pcfg["half_width_m"]
    step = pcfg["step_m"]
    search = pcfg["channel_search_m"]
    offsets = np.arange(-hw, hw + step / 2, step)

    def compute(line):
        L = line.length
        stations = np.arange(0, L + 0.01, spacing)
        profs, zmins = [], []
        for s in stations:
            p = line.interpolate(s)
            a = line.interpolate(max(0, s - 10))
            b = line.interpolate(min(L, s + 10))
            tx, ty = b.x - a.x, b.y - a.y
            tl = (tx * tx + ty * ty) ** 0.5 or 1.0
            tx, ty = tx / tl, ty / tl
            nx, ny = ty, -tx  # nach rechts (in Fliessrichtung)
            e = p.x + offsets * nx
            n = p.y + offsets * ny
            zt = dtm.sample(e, n)
            zs = dsm.sample(e, n) if dsm else np.full_like(zt, np.nan)
            ch = np.abs(offsets) <= search
            seg = zt[ch]
            if np.isfinite(seg).any():
                zmin = float(np.nanmin(seg))
                near = np.where(np.isfinite(seg) & (seg <= zmin + 0.05))[0]
                ch_offs = offsets[ch]
                ch_off = float(ch_offs[near[np.argmin(np.abs(ch_offs[near]))]])
                zmins.append(zmin)
            else:
                zmins.append(np.nan)
                ch_off = 0.0
            profs.append({"s": round(float(s), 1), "c": [round(p.x, 2), round(p.y, 2)],
                          "n": [round(nx, 5), round(ny, 5)], "ch": round(ch_off, 1),
                          "dtm": [finite(v) for v in zt], "dsm": [finite(v) for v in zs]})
        return profs, np.array(zmins, dtype="float64")

    profs, zmins = compute(axis)
    good = zmins[np.isfinite(zmins)]
    if good.size > 10:
        k = max(3, good.size // 10)
        if np.mean(good[:k]) + 0.5 < np.mean(good[-k:]):
            log(f"  {reach_id}: Achse zeigt bergauf – Richtung wird umgedreht")
            axis = LineString(list(axis.coords)[::-1])
            profs, zmins = compute(axis)
    wl0 = reference_waterline(zmins)
    for p, w in zip(profs, wl0):
        p["wl0"] = finite(w)
    return axis, {
        "reach": reach_id,
        "spacing": spacing,
        "half_width": hw,
        "step": step,
        "offset0": float(offsets[0]),
        "count": len(offsets),
        "profiles": profs,
    }
