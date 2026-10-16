import { cssVar, fmt, font, niceStep, setupCanvas } from './util.js';

// Zeichnet ein Querprofil im Stil eines Vermessungsplans.
// Blickrichtung flussabwärts: links im Bild = linkes Ufer.
export function drawSection(canvas, prof, p, st, opts = {}) {
  const { ctx, w, h } = setupCanvas(canvas);
  if (!prof || !p) return;
  const C = {
    ink: cssVar('--ink'), soft: cssVar('--ink-soft'), grid: cssVar('--grid'),
    earth: cssVar('--earth'), earthFill: cssVar('--earth-fill'), veg: cssVar('--veg'),
    water: cssVar('--water'), waterFill: cssVar('--water-fill'), bed: cssVar('--bed'),
    warn: cssVar('--warn'), over: cssVar('--over'), paper: cssVar('--panel'),
  };
  const o0 = prof.offset0, step = prof.step;
  const g = p.dtm, s = p.dsm;
  const off = (i) => o0 + i * step;

  // sichtbarer Bereich
  let xmin = o0, xmax = o0 + (g.length - 1) * step;
  if (opts.zoom === 'channel') {
    const span = st?.wet ? Math.max(80, (st.oR - st.oL) / 2 + 60) : 120;
    const mid = st?.wet ? (st.oL + st.oR) / 2 : p.ch;
    xmin = Math.max(xmin, mid - span);
    xmax = Math.min(xmax, mid + span);
  }
  let zmin = Infinity, zmax = -Infinity;
  const inX = (o) => o >= xmin && o <= xmax;
  g.forEach((v, i) => { if (v != null && inX(off(i))) { zmin = Math.min(zmin, v); zmax = Math.max(zmax, v); } });
  if (opts.showDsm !== false) s.forEach((v, i) => { if (v != null && inX(off(i))) zmax = Math.max(zmax, Math.min(v, zmin + 40)); });
  if (p.svy) p.svy.z.forEach((v, k) => { if (inX(p.svy.o[k])) zmin = Math.min(zmin, v); });
  if (st?.wse != null) { zmin = Math.min(zmin, st.wse - 1); zmax = Math.max(zmax, st.wse + 0.5); }
  if (!Number.isFinite(zmin)) return;
  const zr = Math.max(4, zmax - zmin);
  zmin -= zr * 0.08; zmax += zr * 0.12;

  const pad = { l: 58, r: 16, t: 18, b: 30 };
  const X = (o) => pad.l + (o - xmin) / (xmax - xmin) * (w - pad.l - pad.r);
  const Z = (z) => h - pad.b - (z - zmin) / (zmax - zmin) * (h - pad.t - pad.b);

  // Raster
  ctx.font = font(11);
  ctx.fillStyle = C.soft;
  ctx.strokeStyle = C.grid;
  ctx.lineWidth = 1;
  const zs = niceStep(zmax - zmin, 5);
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let z = Math.ceil(zmin / zs) * zs; z <= zmax; z += zs) {
    ctx.beginPath(); ctx.moveTo(pad.l, Z(z)); ctx.lineTo(w - pad.r, Z(z)); ctx.stroke();
    ctx.fillText(fmt(z, zs < 1 ? 1 : 0), pad.l - 6, Z(z));
  }
  const xs = niceStep(xmax - xmin, 8);
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let o = Math.ceil(xmin / xs) * xs; o <= xmax; o += xs) {
    ctx.beginPath(); ctx.moveTo(X(o), pad.t); ctx.lineTo(X(o), h - pad.b); ctx.stroke();
    ctx.fillText(`${o > 0 ? '+' : ''}${Math.round(o)}`, X(o), h - pad.b + 6);
  }
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.fillText('linkes Ufer', pad.l + 6, pad.t + 4);
  ctx.textAlign = 'right';
  ctx.fillText('rechtes Ufer', w - pad.r - 6, pad.t + 4);

  const visible = [];
  g.forEach((v, i) => { const o = off(i); if (o >= xmin - step && o <= xmax + step) visible.push(i); });

  // Wasser (zwischen Gelände und Spiegel, nur im benetzten Bereich)
  if (st?.wet) {
    ctx.fillStyle = C.waterFill;
    ctx.beginPath();
    let started = false;
    for (let i = st.L; i <= st.R; i++) {
      const o = off(i);
      if (o < xmin || o > xmax) continue;
      const gz = Math.min(g[i] ?? st.wse, st.wse);
      if (!started) { ctx.moveTo(X(o), Z(st.wse)); started = true; }
      ctx.lineTo(X(o), Z(gz));
    }
    if (started) {
      ctx.lineTo(X(Math.min(xmax, off(st.R))), Z(st.wse));
      ctx.closePath();
      ctx.fill();
    }
  }

  // Oberflächenmodell (Vegetation, Bauten)
  if (opts.showDsm !== false) {
    ctx.strokeStyle = C.veg; ctx.lineWidth = 1.2;
    ctx.beginPath();
    let pen = false;
    for (const i of visible) {
      const v = s[i], gv = g[i];
      if (v == null || gv == null || v - gv < 0.5) { pen = false; continue; }
      if (!pen) { ctx.moveTo(X(off(i)), Z(v)); pen = true; } else ctx.lineTo(X(off(i)), Z(v));
    }
    ctx.stroke();
  }

  // Gelände (Terrainmodell)
  const pts = visible.filter((i) => g[i] != null);
  if (pts.length) {
    ctx.beginPath();
    ctx.moveTo(X(off(pts[0])), h - pad.b);
    for (const i of pts) ctx.lineTo(X(off(i)), Z(g[i]));
    ctx.lineTo(X(off(pts[pts.length - 1])), h - pad.b);
    ctx.closePath();
    ctx.fillStyle = C.earthFill; ctx.fill();
  }
  ctx.beginPath();
  let first = true;
  for (const i of visible) {
    if (g[i] == null) { first = true; continue; }
    if (first) { ctx.moveTo(X(off(i)), Z(g[i])); first = false; } else ctx.lineTo(X(off(i)), Z(g[i]));
  }
  ctx.strokeStyle = C.earth; ctx.lineWidth = 1.8; ctx.stroke();

  // Vermessene Sohle (BAFU)
  if (p.svy) {
    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = C.bed; ctx.lineWidth = 1.6;
    ctx.beginPath();
    p.svy.o.forEach((o, k) => { const x = X(o), y = Z(p.svy.z[k]); k ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Referenzlinie zur Befliegungszeit
  if (p.wl0 != null && opts.showRef !== false) {
    ctx.setLineDash([2, 4]); ctx.strokeStyle = C.soft; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(X(Math.max(xmin, p.ch - 60)), Z(p.wl0)); ctx.lineTo(X(Math.min(xmax, p.ch + 60)), Z(p.wl0)); ctx.stroke();
    ctx.setLineDash([]);
  }

  // Wasserspiegel
  if (st?.wet) {
    const a = Math.max(xmin, st.oL), b = Math.min(xmax, st.oR);
    ctx.strokeStyle = C.water; ctx.lineWidth = 2.2;
    ctx.beginPath(); ctx.moveTo(X(a), Z(st.wse)); ctx.lineTo(X(b), Z(st.wse)); ctx.stroke();
    // Spiegel-Symbol (Dreieck) wie in Plänen üblich
    const mx = X((a + b) / 2), my = Z(st.wse);
    ctx.fillStyle = C.water;
    ctx.beginPath(); ctx.moveTo(mx - 6, my - 10); ctx.lineTo(mx + 6, my - 10); ctx.lineTo(mx, my - 1); ctx.closePath(); ctx.fill();
    ctx.font = font(12, 600);
    ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
    const label = `${fmt(st.wse, 2)} m ü.M.`;
    ctx.lineWidth = 4; ctx.strokeStyle = C.paper; ctx.lineJoin = 'round';
    ctx.strokeText(label, mx + 10, my - 14);
    ctx.fillText(label, mx + 10, my - 14);
  }

  // Uferkronen und Freibord
  const crestMark = (c, side) => {
    if (!c) return;
    const o = off(c.i);
    if (o < xmin || o > xmax) return;
    const x = X(o), y = Z(c.z);
    const fb = st?.wse != null ? c.z - st.wse : null;
    ctx.fillStyle = fb != null && fb < 0.3 ? C.over : C.earth;
    ctx.beginPath(); ctx.moveTo(x, y - 2); ctx.lineTo(x - 5, y - 10); ctx.lineTo(x + 5, y - 10); ctx.closePath(); ctx.fill();
    ctx.font = font(11);
    ctx.textAlign = side < 0 ? 'right' : 'left'; ctx.textBaseline = 'bottom';
    ctx.fillStyle = C.ink;
    ctx.lineWidth = 3; ctx.strokeStyle = C.paper; ctx.lineJoin = 'round';
    ctx.strokeText(`${fmt(c.z, 2)}${fb != null ? `  (${fb >= 0 ? '+' : ''}${fmt(fb, 2)})` : ''}`, x + side * 8, y - 11);
    ctx.fillText(`${fmt(c.z, 2)}${fb != null ? `  (${fb >= 0 ? '+' : ''}${fmt(fb, 2)})` : ''}`, x + side * 8, y - 11);
  };
  if (st) { crestMark(st.crestL, -1); crestMark(st.crestR, 1); }

  // Achsenbeschriftung
  ctx.save();
  ctx.translate(14, (pad.t + h - pad.b) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = C.soft; ctx.font = font(11);
  ctx.fillText('m ü.M.', 0, 0);
  ctx.restore();
}
