import { cssVar, fmt, font, setupCanvas } from './util.js';

// Kleiner Verlauf mit Zeitmarke. kind: 'line' (Pegel, Abfluss) oder 'bars' (Niederschlag)
export function drawSpark(canvas, series, t, range, opts = {}) {
  const { ctx, w, h } = setupCanvas(canvas);
  const [t0, t1] = range;
  const data = (series || []).filter((p) => p.t >= t0 && p.t <= t1);
  const color = opts.color || cssVar('--water');
  ctx.strokeStyle = cssVar('--grid'); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, h - 0.5); ctx.lineTo(w, h - 0.5); ctx.stroke();
  if (!data.length) {
    ctx.fillStyle = cssVar('--ink-soft'); ctx.font = font(10);
    ctx.textBaseline = 'middle'; ctx.fillText('keine Daten im Zeitraum', 4, h / 2);
    return;
  }
  const X = (tt) => (tt - t0) / (t1 - t0) * w;
  if (opts.kind === 'bars') {
    const vmax = Math.max(2, ...data.map((p) => p.v));
    const bw = Math.max(1, w / ((t1 - t0) / 3600000) - 0.5);
    ctx.fillStyle = color;
    for (const p of data) {
      const bh = p.v / vmax * (h - 4);
      ctx.fillRect(X(p.t) - bw, h - bh, bw, bh);
    }
    ctx.fillStyle = cssVar('--ink-soft'); ctx.font = font(10);
    ctx.textAlign = 'right'; ctx.textBaseline = 'top';
    ctx.fillText(`max ${fmt(vmax, 1)} mm/h`, w - 2, 1);
  } else {
    let vmin = Infinity, vmax = -Infinity;
    for (const p of data) { vmin = Math.min(vmin, p.v); vmax = Math.max(vmax, p.v); }
    const r = Math.max(opts.minRange || 0.2, vmax - vmin);
    const mid = (vmin + vmax) / 2;
    vmin = mid - r * 0.6; vmax = mid + r * 0.6;
    const Y = (v) => h - 2 - (v - vmin) / (vmax - vmin) * (h - 4);
    ctx.strokeStyle = color; ctx.lineWidth = 1.5;
    ctx.beginPath();
    let prev = null;
    for (const p of data) {
      const x = X(p.t), y = Y(p.v);
      if (prev && p.t - prev.t > 3 * 3600000) ctx.moveTo(x, y); else if (prev) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      prev = p;
    }
    ctx.stroke();
  }
  if (t >= t0 && t <= t1) {
    ctx.strokeStyle = cssVar('--accent'); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(X(t), 0); ctx.lineTo(X(t), h); ctx.stroke();
  }
}
