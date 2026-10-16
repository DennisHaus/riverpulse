import { cssVar, fmt, font, niceStep, setupCanvas } from './util.js';

// Längenprofil eines Abschnitts. Gibt eine Funktion zurück, die eine
// Klickposition in einen Profilindex umrechnet.
export function drawLongProfile(canvas, prof, wl, stations, reachId, selIndex) {
  const { ctx, w, h } = setupCanvas(canvas);
  if (!prof || !wl) return () => null;
  const C = {
    ink: cssVar('--ink'), soft: cssVar('--ink-soft'), grid: cssVar('--grid'),
    earth: cssVar('--earth'), water: cssVar('--water'), waterFill: cssVar('--water-fill'),
    bed: cssVar('--bed'), over: cssVar('--over'), sel: cssVar('--accent'),
  };
  const P = prof.profiles;
  const smax = P[P.length - 1].s || 1;
  const crestL = wl.states.map((s) => s.crestL?.z ?? null);
  const crestR = wl.states.map((s) => s.crestR?.z ?? null);
  const bed = P.map((p) => (p.svy ? Math.min(...p.svy.z) : null));

  let zmin = Infinity, zmax = -Infinity;
  const take = (v) => { if (v != null && Number.isFinite(v)) { zmin = Math.min(zmin, v); zmax = Math.max(zmax, v); } };
  P.forEach((p, i) => { take(p.wl0); take(wl.wse[i]); take(crestL[i]); take(crestR[i]); take(bed[i]); });
  if (!Number.isFinite(zmin)) return () => null;
  const zr = Math.max(3, zmax - zmin);
  zmin -= zr * 0.08; zmax += zr * 0.1;

  const pad = { l: 58, r: 16, t: 14, b: 26 };
  const X = (s) => pad.l + s / smax * (w - pad.l - pad.r);
  const Z = (z) => h - pad.b - (z - zmin) / (zmax - zmin) * (h - pad.t - pad.b);

  ctx.font = font(11);
  ctx.strokeStyle = C.grid; ctx.fillStyle = C.soft; ctx.lineWidth = 1;
  const zs = niceStep(zmax - zmin, 4);
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let z = Math.ceil(zmin / zs) * zs; z <= zmax; z += zs) {
    ctx.beginPath(); ctx.moveTo(pad.l, Z(z)); ctx.lineTo(w - pad.r, Z(z)); ctx.stroke();
    ctx.fillText(fmt(z, zs < 1 ? 1 : 0), pad.l - 6, Z(z));
  }
  const ks = niceStep(smax / 1000, 8);
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let k = 0; k <= smax / 1000 + 1e-6; k += ks) {
    ctx.beginPath(); ctx.moveTo(X(k * 1000), pad.t); ctx.lineTo(X(k * 1000), h - pad.b); ctx.stroke();
    ctx.fillText(`km ${fmt(k, ks < 1 ? 1 : 0)}`, X(k * 1000), h - pad.b + 5);
  }

  const line = (vals, color, width, dash) => {
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash || []);
    ctx.beginPath();
    let pen = false;
    vals.forEach((v, i) => {
      if (v == null) { pen = false; return; }
      const x = X(P[i].s), y = Z(v);
      pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y); pen = true;
    });
    ctx.stroke(); ctx.setLineDash([]);
  };

  // Wasserkörper zwischen Referenz und aktuellem Spiegel
  ctx.fillStyle = C.waterFill;
  ctx.beginPath();
  P.forEach((p, i) => { const v = wl.wse[i] ?? p.wl0; i ? ctx.lineTo(X(p.s), Z(v)) : ctx.moveTo(X(p.s), Z(v)); });
  for (let i = P.length - 1; i >= 0; i--) {
    const v = wl.wse[i] ?? P[i].wl0;
    ctx.lineTo(X(P[i].s), Z(Math.min(P[i].wl0 ?? v, v)));
  }
  ctx.closePath(); ctx.fill();

  line(crestL, C.earth, 1.2);
  line(crestR, C.earth, 1.2, [6, 3]);
  line(bed, C.bed, 1.2, [3, 3]);
  line(P.map((p) => p.wl0), C.soft, 1, [2, 4]);
  line(wl.wse, C.water, 2);

  // Kritische Stellen: Freibord unter 30 cm
  ctx.fillStyle = C.over;
  wl.states.forEach((s, i) => {
    if (s.wet && s.freeboard != null && s.freeboard < 0.3) ctx.fillRect(X(P[i].s) - 1.5, h - pad.b - 5, 3, 5);
  });

  // Pegel
  ctx.font = font(11, 600);
  for (const st of stations) {
    const hit = st.reaches.find((r) => r.reach === reachId);
    if (!hit) continue;
    const a = wl.anchors.find((x) => x.no === st.no);
    const x = X(hit.s);
    ctx.strokeStyle = C.ink; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + 8); ctx.stroke();
    if (a) {
      ctx.fillStyle = C.water;
      ctx.beginPath(); ctx.arc(x, Z(a.w), 4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = C.ink;
    ctx.textAlign = hit.s < smax * 0.1 ? 'left' : hit.s > smax * 0.9 ? 'right' : 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(st.name || st.no, x, pad.t + 10);
  }

  // Auswahl
  if (selIndex != null && P[selIndex]) {
    const x = X(P[selIndex].s);
    ctx.strokeStyle = C.sel; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, h - pad.b); ctx.stroke();
  }

  return (px) => {
    const s = (px - pad.l) / (w - pad.l - pad.r) * smax;
    let best = 0, bd = Infinity;
    P.forEach((p, i) => { const d = Math.abs(p.s - s); if (d < bd) { bd = d; best = i; } });
    return best;
  };
}
