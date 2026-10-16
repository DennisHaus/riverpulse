// Kleine Hilfsfunktionen und Koordinatenumrechnung LV95 <-> WGS84
// (Näherungsformeln von swisstopo, Genauigkeit ca. 1 m – genügt für die Karte).

export function lv95ToWgs84(e, n) {
  const y = (e - 2600000) / 1e6;
  const x = (n - 1200000) / 1e6;
  const lam = 2.6779094 + 4.728982 * y + 0.791484 * y * x + 0.1306 * y * x * x - 0.0436 * y * y * y;
  const phi = 16.9023892 + 3.238272 * x - 0.270978 * y * y - 0.002528 * x * x - 0.0447 * y * y * x - 0.014 * x * x * x;
  return [phi * 100 / 36, lam * 100 / 36]; // [lat, lon]
}

export function wgs84ToLv95(lat, lon) {
  const p = (lat * 3600 - 169028.66) / 10000;
  const l = (lon * 3600 - 26782.5) / 10000;
  const e = 2600072.37 + 211455.93 * l - 10938.51 * l * p - 0.36 * l * p * p - 44.54 * l * l * l;
  const n = 1200147.07 + 308807.95 * p + 3745.25 * l * l + 76.63 * p * p - 194.56 * l * l * p + 119.79 * p * p * p;
  return [e, n];
}

export const HOUR = 3600 * 1000;

const fmtDate = new Intl.DateTimeFormat('de-CH', {
  weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric',
  hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zurich',
});
const fmtShort = new Intl.DateTimeFormat('de-CH', {
  day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zurich',
});
const fmtDay = new Intl.DateTimeFormat('de-CH', { day: '2-digit', month: '2-digit', timeZone: 'Europe/Zurich' });

export const formatTime = (t) => fmtDate.format(new Date(t));
export const formatShort = (t) => fmtShort.format(new Date(t));
export const formatDay = (t) => fmtDay.format(new Date(t));

export function fmt(v, digits = 2, unit = '') {
  if (v == null || !Number.isFinite(v)) return '–';
  const s = v.toLocaleString('de-CH', { minimumFractionDigits: digits, maximumFractionDigits: digits });
  return unit ? `${s} ${unit}` : s;
}

export const km = (s) => `km ${(s / 1000).toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Lineare Interpolation in einer sortierten Zeitreihe [{t, v}]
export function valueAt(series, t, maxGap = 3 * HOUR) {
  if (!series || !series.length) return null;
  if (t < series[0].t - maxGap || t > series[series.length - 1].t + maxGap) return null;
  let lo = 0, hi = series.length - 1;
  if (t <= series[0].t) return series[0].v;
  if (t >= series[hi].t) return series[hi].v;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (series[mid].t <= t) lo = mid; else hi = mid;
  }
  const a = series[lo], b = series[hi];
  if (b.t - a.t > maxGap) return null;
  return a.v + (b.v - a.v) * (t - a.t) / (b.t - a.t);
}

// Lineare Interpolation über sortierte Stützstellen xs/ys mit konstanter Fortsetzung
export function interp1(xs, ys, x) {
  if (!xs.length) return null;
  if (x <= xs[0]) return ys[0];
  if (x >= xs[xs.length - 1]) return ys[ys.length - 1];
  let i = 1;
  while (xs[i] < x) i++;
  const f = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
  return ys[i - 1] + f * (ys[i] - ys[i - 1]);
}

export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return node;
}

export function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// Canvas auf Gerätepixel einstellen, liefert Kontext und logische Grösse
export function setupCanvas(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  return { ctx, w, h };
}

export function niceStep(range, target = 6) {
  const raw = range / target;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const f = raw / p;
  return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p;
}

export function font(size, weight = 400) {
  const fam = cssVar('--font-ui') || 'sans-serif';
  return `${weight} ${size}px ${fam}`;
}
