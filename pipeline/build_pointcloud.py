"""swissSURFACE3D-Punktwolke im Korridor in kompakte LOD-Kacheln für den Browser umwandeln.

Pro Unterkachel (Standard 250 m) entstehen Dateien <id>_L<k>.bin. Stufe 0 ist am
gröbsten, jede weitere Stufe ergänzt die vorherigen (additiv).

Binärformat pro Datei (N Punkte, little endian):
  N*3 uint16  Position, quantisiert auf die Kachel-Box
  N*3 uint8   Farbe RGB
  N   uint8   Klasse
  N   uint16  Intensität (roh)
"""
from __future__ import annotations

import shutil
import zipfile
from pathlib import Path

import laspy
import numpy as np
import rasterio
from rasterio.enums import Resampling
from shapely import contains_xy
from shapely.geometry import box

from common import CACHE, download, latest_per_tile, item_year, log, pick_asset, stac_items

PC_COLLECTION = "ch.swisstopo.swisssurface3d"
ORTHO_COLLECTION = "ch.swisstopo.swissimage-dop10"


def _open_las(path: Path) -> Path:
    if path.suffix == ".zip":
        out = path.with_suffix("")
        if not out.exists():
            with zipfile.ZipFile(path) as z:
                name = next(n for n in z.namelist() if n.lower().endswith((".las", ".laz")))
                with z.open(name) as src, open(out, "wb") as dst:
                    shutil.copyfileobj(src, dst)
        return out
    return path


def _voxel_first(x, y, z, cell, origin):
    ix = np.floor((x - origin[0]) / cell).astype(np.int64)
    iy = np.floor((y - origin[1]) / cell).astype(np.int64)
    iz = np.floor((z - origin[2]) / cell).astype(np.int64)
    key = (ix << 42) ^ (iy << 21) ^ (iz & ((1 << 21) - 1))
    _, idx = np.unique(key, return_index=True)
    return np.sort(idx), key


def assign_levels(x, y, z, voxels, origin):
    """Weist jedem Punkt eine LOD-Stufe zu (-1 = verworfen)."""
    level = np.full(x.shape, -1, dtype=np.int8)
    for L, cell in enumerate(voxels):
        ix = np.floor((x - origin[0]) / cell).astype(np.int64)
        iy = np.floor((y - origin[1]) / cell).astype(np.int64)
        iz = np.floor((z - origin[2]) / cell).astype(np.int64)
        key = (ix << 42) ^ (iy << 21) ^ (iz & ((1 << 21) - 1))
        taken = np.unique(key[level >= 0])
        cand = np.where((level < 0) & ~np.isin(key, taken))[0]
        if cand.size == 0:
            continue
        _, first = np.unique(key[cand], return_index=True)
        level[cand[first]] = L
    return level


def corridor_mask_grid(area, e0, n0, size=1000.0, cell=2.0):
    n = int(size / cell)
    cx = e0 + (np.arange(n) + 0.5) * cell
    cy = n0 + (np.arange(n) + 0.5) * cell
    gx, gy = np.meshgrid(cx, cy)
    return contains_xy(area, gx.ravel(), gy.ravel()).reshape(n, n)


def ortho_colors(key, bbox_wgs84, x, y):
    """Farben aus SWISSIMAGE (0.1 m, beim Lesen auf 0.5 m reduziert)."""
    items = latest_per_tile(stac_items(ORTHO_COLLECTION, bbox_wgs84))
    it = items.get(key)
    if not it:
        return None
    href = pick_asset(it, ["_0.1_2056.tif", "_0.1_", "_2_2056.tif"], must=[".tif"])
    if not href:
        return None
    path = download(href, CACHE / "ortho" / href.rsplit("/", 1)[-1])
    try:
        with rasterio.open(path) as ds:
            out_n = 2000
            data = ds.read([1, 2, 3], out_shape=(3, out_n, out_n), resampling=Resampling.average)
            b = ds.bounds
        cell = (b.right - b.left) / out_n
        col = np.clip(((x - b.left) / cell).astype(int), 0, out_n - 1)
        row = np.clip(((b.top - y) / cell).astype(int), 0, out_n - 1)
        rgb = np.stack([data[0][row, col], data[1][row, col], data[2][row, col]], axis=1)
        return rgb.astype(np.uint8)
    finally:
        path.unlink(missing_ok=True)


def process_tile(key, item, area, cfg_pc, bbox_wgs84, out_dir: Path):
    e0, n0 = key[0] * 1000.0, key[1] * 1000.0
    href = pick_asset(item, [".copc.laz", ".las.zip", ".laz", ".las"])
    if not href:
        log(f"  {key}: keine Punktwolken-Datei")
        return []
    mask = corridor_mask_grid(area, e0, n0)
    finest = cfg_pc["levels_voxel_m"][-1]
    drop = np.array(cfg_pc.get("drop_classes", []), dtype=np.uint8)

    src = download(href, CACHE / "pc" / href.rsplit("/", 1)[-1])
    las_path = _open_las(src)
    parts = []
    has_rgb = False
    try:
        with laspy.open(las_path) as reader:
            dims = set(reader.header.point_format.dimension_names)
            has_rgb = {"red", "green", "blue"} <= dims
            for chunk in reader.chunk_iterator(3_000_000):
                x = np.asarray(chunk.x)
                y = np.asarray(chunk.y)
                z = np.asarray(chunk.z)
                c = np.asarray(chunk.classification).astype(np.uint8)
                col = np.clip(((x - e0) / 2.0).astype(int), 0, mask.shape[1] - 1)
                row = np.clip(((y - n0) / 2.0).astype(int), 0, mask.shape[0] - 1)
                keep = mask[row, col] & ~np.isin(c, drop)
                if not keep.any():
                    continue
                x, y, z, c = x[keep], y[keep], z[keep], c[keep]
                it = np.asarray(chunk.intensity)[keep].astype(np.uint16)
                if has_rgb:
                    rgb = np.stack([np.asarray(chunk.red)[keep], np.asarray(chunk.green)[keep],
                                    np.asarray(chunk.blue)[keep]], axis=1)
                    rgb = (rgb >> 8).astype(np.uint8) if rgb.max() > 255 else rgb.astype(np.uint8)
                else:
                    rgb = np.zeros((x.size, 3), dtype=np.uint8)
                idx, _ = _voxel_first(x, y, z, finest, (e0, n0, 0.0))
                parts.append((x[idx], y[idx], z[idx], c[idx], it[idx], rgb[idx]))
    finally:
        las_path.unlink(missing_ok=True)
        src.unlink(missing_ok=True)

    if not parts:
        return []
    x, y, z, c, it, rgb = (np.concatenate(p) for p in zip(*parts))
    idx, _ = _voxel_first(x, y, z, finest, (e0, n0, 0.0))
    x, y, z, c, it, rgb = x[idx], y[idx], z[idx], c[idx], it[idx], rgb[idx]

    mode = cfg_pc.get("colorize_from_ortho", "auto")
    if mode is True or (mode == "auto" and (not has_rgb or rgb.max() == 0)):
        ortho = ortho_colors(key, bbox_wgs84, x, y)
        if ortho is not None:
            rgb = ortho

    sub = cfg_pc["subtile_m"]
    nsub = int(round(1000 / sub))
    year = item_year(item)
    tiles = []
    for sx in range(nsub):
        for sy in range(nsub):
            te, tn = e0 + sx * sub, n0 + sy * sub
            m = (x >= te) & (x < te + sub) & (y >= tn) & (y < tn + sub)
            if m.sum() < 50:
                continue
            tx, ty, tz = x[m], y[m], z[m]
            zmin, zmax = float(tz.min()), float(tz.max())
            zmax = max(zmax, zmin + 1.0)
            lev = assign_levels(tx, ty, tz, cfg_pc["levels_voxel_m"], (te, tn, zmin))
            tid = f"{key[0]}-{key[1]}_{sx}{sy}"
            counts = []
            for L in range(len(cfg_pc["levels_voxel_m"])):
                sel = np.where(lev == L)[0]
                counts.append(int(sel.size))
                qx = np.round((tx[sel] - te) / sub * 65535).astype(np.uint16)
                qy = np.round((ty[sel] - tn) / sub * 65535).astype(np.uint16)
                qz = np.round((tz[sel] - zmin) / (zmax - zmin) * 65535).astype(np.uint16)
                pos = np.stack([qx, qy, qz], axis=1).astype("<u2")
                buf = (pos.tobytes() + rgb[m][sel].astype(np.uint8).tobytes()
                       + c[m][sel].astype(np.uint8).tobytes() + it[m][sel].astype("<u2").tobytes())
                (out_dir / f"{tid}_L{L}.bin").write_bytes(buf)
            ints = it[m]
            lo, hi = np.percentile(ints, [2, 98]) if ints.size else (0, 65535)
            tiles.append({"id": tid, "min": [te, tn, round(zmin, 2)], "size": [sub, sub, round(zmax - zmin, 2)],
                          "counts": counts, "int": [int(lo), int(max(hi, lo + 1))], "year": year})
    log(f"  {key}: {x.size:,} Punkte -> {len(tiles)} Unterkacheln ({year})")
    return tiles


def build_pointcloud(area, bbox_wgs84, cfg_pc, out_dir: Path):
    out_dir.mkdir(parents=True, exist_ok=True)
    items = latest_per_tile(stac_items(PC_COLLECTION, bbox_wgs84))
    keys = [k for k in sorted(items)
            if box(k[0] * 1000, k[1] * 1000, k[0] * 1000 + 1000, k[1] * 1000 + 1000).intersects(area)]
    log(f"  Punktwolke: {len(keys)} Kacheln im Korridor")
    tiles = []
    for i, key in enumerate(keys, 1):
        log(f"  [{i}/{len(keys)}] Kachel {key}")
        try:
            tiles += process_tile(key, items[key], area, cfg_pc, bbox_wgs84, out_dir)
        except Exception as exc:  # eine defekte Kachel soll nicht alles stoppen
            log(f"  {key}: übersprungen ({exc})")
    total = sum(sum(t["counts"]) for t in tiles)
    log(f"  Punktwolke fertig: {total:,} Punkte, ca. {total * 12 / 1e6:.0f} MB")
    return {"levels": cfg_pc["levels_voxel_m"], "subtile": cfg_pc["subtile_m"], "tiles": tiles}
