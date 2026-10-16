// Wasserspiegel entlang eines Abschnitts zum Zeitpunkt t.
//
// Ansatz: Die Referenz-Wasserlinie wl0 (Spiegel zur Befliegungszeit, aus dem
// Terrainmodell geschätzt) gibt das Gefälle vor. An jedem Pegel wird die
// Abweichung W(t) - wl0 bestimmt und zwischen den Pegeln linear interpoliert,
// ausserhalb konstant fortgesetzt. So stimmt der Spiegel an den Pegeln exakt
// und folgt dazwischen dem natürlichen Gefälle.
//
// Ausdehnung im Querprofil: vom Gerinne aus seitwärts, solange das Gelände
// unter dem Wasserspiegel liegt (statische Näherung, keine Hydraulik).

import { interp1, valueAt } from './util.js';

export function reachWaterline(reachId, prof, stations, hydro, t) {
  const profs = prof.profiles;
  const ss = profs.map((p) => p.s);
  const wl0 = profs.map((p) => p.wl0);
  const anchors = [];
  for (const st of stations) {
    const hit = st.reaches.find((h) => h.reach === reachId);
    if (!hit || !st.params?.W?.absolute) continue;
    const w = valueAt(hydro[st.no]?.W, t);
    if (w == null) continue;
    const ref = interp1(ss, wl0, hit.s);
    if (ref == null) continue;
    anchors.push({ s: hit.s, d: w - ref, w, no: st.no, name: st.name, kind: hit.kind });
  }
  anchors.sort((a, b) => a.s - b.s);
  const xs = anchors.map((a) => a.s);
  const ds = anchors.map((a) => a.d);
  const wse = profs.map((p, i) => {
    if (p.wl0 == null) return null;
    return anchors.length ? p.wl0 + interp1(xs, ds, p.s) : p.wl0;
  });
  return { wse, anchors, estimated: anchors.length === 0 };
}

// Uferkrone: vom Wasserrand nach aussen steigen, solange das Gelände ansteigt
function crest(g, start, dir) {
  let best = null;
  let bi = -1;
  for (let i = start; i >= 0 && i < g.length; i += dir) {
    const v = g[i];
    if (v == null) continue;
    if (best == null || v > best) { best = v; bi = i; }
    else if (v < best - 0.4) break;
  }
  return bi >= 0 ? { i: bi, z: best } : null;
}

export function sectionState(prof, p, wse) {
  const g = p.dtm;
  const o0 = prof.offset0, step = prof.step;
  const n = g.length;
  let c = Math.round((p.ch - o0) / step);
  c = Math.max(0, Math.min(n - 1, c));
  if (wse == null) return { wet: false };
  // Im Gerinne zeigt das Terrainmodell die Wasseroberfläche zur Befliegungszeit,
  // nicht die Sohle. Darum gilt das Gerinne immer als benetzt, mit kleiner Toleranz.
  const extent = (lim) => {
    let L = c, R = c;
    while (L > 0 && (g[L - 1] == null || g[L - 1] < lim)) L--;
    while (R < n - 1 && (g[R + 1] == null || g[R + 1] < lim)) R++;
    return [L, R];
  };
  const [L, R] = extent(wse + 0.1);
  // Uferkronen unabhängig vom aktuellen Stand suchen: ab dem Gerinnerand bei
  // Referenzwasserstand. So bleiben sie auch bei Überflutung bestimmbar.
  const [L0, R0] = extent(Math.min(wse, p.wl0 ?? wse) + 0.1);
  const cl = crest(g, L0 - 1, -1);
  const cr = crest(g, R0 + 1, 1);
  const edge = L === 0 || R === n - 1;
  const crests = [cl?.z, cr?.z].filter((v) => v != null);
  const freeboard = crests.length ? Math.min(...crests) - wse : null;
  // Mittlere Tiefe im Gerinne relativ zum tiefsten Geländepunkt
  let zmin = Infinity;
  for (let i = L; i <= R; i++) if (g[i] != null && g[i] < zmin) zmin = g[i];
  return {
    wet: true, wse, c, L, R,
    oL: o0 + (L - 0.5) * step, oR: o0 + (R + 0.5) * step,
    width: (R - L + 1) * step,
    crestL: cl, crestR: cr,
    freeboard: edge && (freeboard == null || freeboard >= 0) ? -0.01 : freeboard,
    edge,
    depth: Number.isFinite(zmin) ? wse - zmin : null,
  };
}

// Klassen für die Farbgebung (Freibord in Metern)
export function freeboardClass(st) {
  if (!st || !st.wet) return 'dry';
  if (st.edge || (st.freeboard != null && st.freeboard < 0)) return 'over';
  if (st.freeboard == null) return 'unknown';
  if (st.freeboard < 0.3) return 'crit';
  if (st.freeboard < 1.0) return 'warn';
  return 'ok';
}

export function computeAll(data, hydro, t) {
  const out = {};
  for (const r of data.meta.reaches) {
    const prof = data.profiles[r.id];
    if (!prof) continue;
    const wl = reachWaterline(r.id, prof, data.stations, hydro, t);
    const states = prof.profiles.map((p, i) => sectionState(prof, p, wl.wse[i]));
    out[r.id] = { ...wl, states };
  }
  return out;
}
