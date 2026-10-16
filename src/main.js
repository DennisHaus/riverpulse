import { drawSpark } from './charts.js';
import { demoHydro, demoMeteo, loadHydroHistory, loadHydroLive, loadMeteo, loadStatic, mergeHydro } from './data.js';
import { drawLongProfile } from './longprofile.js';
import { Map2D } from './map2d.js';
import { drawSection } from './section.js';
import { HOUR, el, fmt, formatShort, formatTime, km, valueAt } from './util.js';
import { computeAll, freeboardClass } from './water.js';

const CFG = window.LINTH_CONFIG || {};
const $ = (id) => document.getElementById(id);

const state = {
  data: null,
  hydro: {},
  history: {},
  meteo: null,
  days: CFG.historyDays || 7,
  t: Date.now(),
  live: true,
  sel: null,
  water: {},
  view: 'map',
  zoom: 'channel',
  playing: null,
};

let map2d = null;
let view3d = null;
let longPick = () => null;

// ------------------------------------------------------------------ Hinweise
function notice(msg, kind = 'info') {
  const box = $('notice');
  if (!msg) { box.hidden = true; box.textContent = ''; return; }
  box.hidden = false;
  box.dataset.kind = kind;
  box.textContent = msg;
}

// ------------------------------------------------------------------ Zeit
function timeRange() {
  const end = Math.ceil(Date.now() / (10 * 60000)) * 10 * 60000;
  return [end - state.days * 24 * HOUR, end];
}

function latestDataTime() {
  let t = 0;
  for (const st of Object.values(state.hydro)) {
    for (const s of Object.values(st)) if (s.length) t = Math.max(t, s[s.length - 1].t);
  }
  return t || Date.now();
}

function syncSlider() {
  const [a, b] = timeRange();
  const r = $('time');
  r.min = Math.floor(a / 60000);
  r.max = Math.floor(b / 60000);
  r.step = 10;
  r.value = Math.floor(state.t / 60000);
  $('time-label').textContent = formatTime(state.t);
  $('btn-live').setAttribute('aria-pressed', String(state.live));
  $('time-mode').textContent = state.live ? 'Live-Stand' : 'Rückblick';
}

function setTime(t, live = false) {
  state.t = t;
  state.live = live;
  renderTime();
}

function goLive() {
  stopPlay();
  setTime(latestDataTime(), true);
}

function stopPlay() {
  if (state.playing) { clearInterval(state.playing); state.playing = null; }
  $('btn-play').setAttribute('aria-pressed', 'false');
  $('btn-play').textContent = 'Abspielen';
}

function togglePlay() {
  if (state.playing) { stopPlay(); return; }
  const [a] = timeRange();
  let t = state.live ? a : state.t;
  $('btn-play').setAttribute('aria-pressed', 'true');
  $('btn-play').textContent = 'Anhalten';
  state.playing = setInterval(() => {
    t += HOUR;
    const end = latestDataTime();
    if (t >= end) { goLive(); return; }
    setTime(t, false);
  }, 220);
}

// ------------------------------------------------------------------ Daten
async function refreshHydro(full) {
  const d = state.data;
  if (d.meta.demo) {
    state.hydro = demoHydro(d.stations, 30);
    return;
  }
  const nos = d.stations.map((s) => s.no);
  if (!nos.length) return;
  try {
    if (full) state.history = await loadHydroHistory(nos, state.days);
    const live = await loadHydroLive(nos).catch(() => ({}));
    state.hydro = mergeHydro(state.history, live);
    notice(null);
  } catch (e) {
    notice(`Pegeldaten konnten nicht geladen werden: ${e.message}. Die Ansicht zeigt den Referenzwasserspiegel.`, 'warn');
  }
}

async function refreshMeteo() {
  state.meteo = state.data.meta.demo ? demoMeteo(state.data.meta) : await loadMeteo();
  map2d?.setMeteo(state.meteo);
}

// ------------------------------------------------------------------ Panels
function stationBlock(st) {
  const hit = st.reaches[0];
  const canvas = el('canvas', { class: 'spark', 'aria-hidden': 'true' });
  const block = el('button', { class: 'station', type: 'button', onclick: () => selectNear(hit.reach, hit.s) },
    el('span', { class: 'st-name' }, st.name || st.no),
    el('span', { class: 'st-meta' }, `${st.river || ''}${hit.kind === 'see' ? ', Seepegel' : ''}, ${km(hit.s)}`),
    el('span', { class: 'st-vals' },
      el('span', { class: 'v-w' }, '–'),
      el('span', { class: 'v-q' }, '')),
    canvas);
  block._st = st;
  block._canvas = canvas;
  return block;
}

function buildStationList() {
  const box = $('station-list');
  box.replaceChildren();
  if (!state.data.stations.length) {
    box.append(el('p', { class: 'empty' }, 'Keine BAFU-Stationen zugeordnet. Prüfe in config/linthebene.json die Einträge unter "stations".'));
    return;
  }
  for (const st of state.data.stations) box.append(stationBlock(st));
}

function renderStations() {
  const range = timeRange();
  for (const block of $('station-list').querySelectorAll('.station')) {
    const st = block._st;
    const h = state.hydro[st.no] || {};
    const w = valueAt(h.W, state.t);
    const q = valueAt(h.Q, state.t);
    block.querySelector('.v-w').textContent = w != null ? `${fmt(w, 2)} ${st.params?.W?.unit || 'm'}` : 'kein Pegel';
    block.querySelector('.v-q').textContent = q != null ? `${fmt(q, q < 10 ? 1 : 0)} m³/s` : '';
    drawSpark(block._canvas, h.W?.length ? h.W : h.Q, state.t, range, { minRange: 0.3 });
  }
}

function renderMeteo() {
  const box = $('meteo-list');
  box.replaceChildren();
  const m = state.meteo;
  if (!m || !m.stations?.length) {
    box.append(el('p', { class: 'empty' },
      'Noch keine Niederschlagsdaten. Sie erscheinen, sobald der Workflow "Niederschlag aktualisieren" einmal gelaufen ist.'));
    return;
  }
  const range = timeRange();
  for (const st of m.stations) {
    const now = valueAt(st.series, state.t, 2 * HOUR);
    let sum24 = 0;
    for (const p of st.series) if (p.t > state.t - 24 * HOUR && p.t <= state.t) sum24 += p.v;
    const c = el('canvas', { class: 'spark', 'aria-hidden': 'true' });
    box.append(el('div', { class: 'station meteo' },
      el('span', { class: 'st-name' }, st.name),
      el('span', { class: 'st-meta' }, st.abbr ? `MeteoSchweiz ${st.abbr}` : ''),
      el('span', { class: 'st-vals' },
        el('span', {}, now != null ? `${fmt(now, 1)} mm/h` : '–'),
        el('span', { class: 'v-q' }, `${fmt(sum24, 1)} mm in 24 h`)),
      c));
    drawSpark(c, st.series, state.t, range, { kind: 'bars', color: getComputedStyle(document.documentElement).getPropertyValue('--rain') });
  }
  if (m.generated && !m.stations[0]?.demo) {
    box.append(el('p', { class: 'source' }, `Stand der Niederschlagsdaten: ${formatShort(Date.parse(m.generated))}`));
  }
}

const STATUS_TEXT = {
  ok: 'Freibord über 1 m',
  warn: 'Freibord unter 1 m',
  crit: 'Freibord unter 30 cm',
  over: 'Wasser über Uferkrone (statische Näherung)',
  unknown: 'Uferkrone nicht bestimmbar',
  dry: 'Kein Wasserspiegel berechnet',
};

function renderDetails() {
  const box = $('details');
  box.replaceChildren();
  const sel = state.sel;
  if (!sel) return;
  const prof = state.data.profiles[sel.reach];
  const p = prof.profiles[sel.index];
  const wl = state.water[sel.reach];
  const st = wl?.states[sel.index];
  const reach = state.data.meta.reaches.find((r) => r.id === sel.reach);
  const cls = freeboardClass(st);

  let basis = 'Referenz zur Befliegung, keine Pegeldaten zum gewählten Zeitpunkt';
  if (wl && wl.anchors.length) {
    const before = [...wl.anchors].reverse().find((a) => a.s <= p.s);
    const after = wl.anchors.find((a) => a.s > p.s);
    if (before && after) basis = `Interpoliert zwischen ${before.name} und ${after.name}`;
    else basis = `Fortgesetzt von ${(before || after).name}`;
  }
  const row = (k, v) => el('div', { class: 'row' }, el('dt', {}, k), el('dd', {}, v));
  const bedMin = p.svy ? Math.min(...p.svy.z) : null;

  box.append(
    el('h2', {}, `${reach?.name || sel.reach}, ${km(p.s)}`),
    el('p', { class: `status s-${cls}` }, STATUS_TEXT[cls]),
    el('dl', {},
      row('Wasserspiegel', st?.wse != null ? `${fmt(st.wse, 2)} m ü.M.` : '–'),
      row('Grundlage', basis),
      row('Benetzte Breite', st?.wet ? `${fmt(st.width, 0)} m` : '–'),
      bedMin != null
        ? row('Tiefe über vermessener Sohle', st?.wse != null ? fmt(st.wse - bedMin, 2, 'm') : '–')
        : row('Über Stand der Befliegung', st?.wse != null && p.wl0 != null ? fmt(st.wse - p.wl0, 2, 'm') : '–'),
      row('Uferkrone links', st?.crestL ? `${fmt(st.crestL.z, 2)} m ü.M., Freibord ${fmt(st.crestL.z - st.wse, 2)} m` : '–'),
      row('Uferkrone rechts', st?.crestR ? `${fmt(st.crestR.z, 2)} m ü.M., Freibord ${fmt(st.crestR.z - st.wse, 2)} m` : '–'),
      row('Referenz Befliegung', p.wl0 != null ? `${fmt(p.wl0, 2)} m ü.M.` : '–'),
      row('Vermessung BAFU', p.svy ? `${p.svy.date}, ${p.svy.section || p.svy.river || ''} (${fmt(p.svy.dist, 0)} m entfernt)` : 'Keine Vermessung zugeordnet'),
    ),
  );
  if (!p.svy) {
    box.append(el('p', { class: 'hint' },
      'Ohne Vermessung zeigt das Terrainmodell im Gerinne die Wasseroberfläche zur Befliegung, nicht die Sohle.'));
  }
}

function renderProfiles() {
  const sel = state.sel;
  if (!sel) return;
  const prof = state.data.profiles[sel.reach];
  const p = prof.profiles[sel.index];
  const wl = state.water[sel.reach];
  drawSection($('section'), prof, p, wl?.states[sel.index], { zoom: state.zoom, showDsm: $('opt-dsm').checked });
  longPick = drawLongProfile($('long'), prof, wl, state.data.stations, sel.reach, sel.index);
  $('prof-label').textContent = km(p.s);
}

function renderTime() {
  state.water = computeAll(state.data, state.hydro, state.t);
  syncSlider();
  renderStations();
  renderMeteo();
  map2d?.update(state.water, state.hydro, state.meteo, state.t, state.sel);
  if (view3d) {
    view3d.setWater(state.water);
    if (state.sel) view3d.setSelection(state.sel.reach, state.sel.index, state.water[state.sel.reach]?.states[state.sel.index]);
  }
  renderDetails();
  renderProfiles();
}

// ------------------------------------------------------------------ Auswahl
function select(reach, index, { fly = false } = {}) {
  const prof = state.data.profiles[reach];
  if (!prof) return;
  index = Math.max(0, Math.min(prof.profiles.length - 1, index));
  state.sel = { reach, index };
  $('reach').value = reach;
  if (fly) {
    map2d?.flyToProfile(reach, index);
    view3d?.focusProfile(reach, index);
  }
  map2d?.update(state.water, state.hydro, state.meteo, state.t, state.sel);
  view3d?.setSelection(reach, index, state.water[reach]?.states[index]);
  renderDetails();
  renderProfiles();
}

function selectNear(reach, s) {
  const prof = state.data.profiles[reach];
  if (!prof) return;
  let best = 0, bd = Infinity;
  prof.profiles.forEach((p, i) => { const d = Math.abs(p.s - s); if (d < bd) { bd = d; best = i; } });
  select(reach, best, { fly: true });
}

// ------------------------------------------------------------------ 3D
async function ensure3D() {
  if (view3d) return view3d;
  if (!state.data.pc) {
    $('three').replaceChildren(el('p', { class: 'empty center' },
      'Keine Punktwolke vorhanden. Der Workflow "Daten aufbereiten" erzeugt sie aus swissSURFACE3D.'));
    return null;
  }
  const { View3D, CLASSES } = await import('./view3d.js');
  view3d = new View3D($('three'), state.data, {
    onPick: (r, i) => select(r, i),
    onStats: ({ loaded, loading, classes }) => {
      const n = loaded >= 1e6
        ? `${(loaded / 1e6).toLocaleString('de-CH', { maximumFractionDigits: 1 })} Mio. Punkte`
        : `${Math.round(loaded / 1000).toLocaleString('de-CH')} Tsd. Punkte`;
      $('pc-stats').textContent = `${n}${loading ? ', lädt …' : ''}`;
      updateClassLegend(classes, CLASSES);
    },
  });
  view3d.onExChange = () => {
    view3d.setWater(state.water);
    if (state.sel) view3d.setSelection(state.sel.reach, state.sel.index, state.water[state.sel.reach]?.states[state.sel.index]);
  };
  view3d.setWater(state.water);
  if (state.sel) {
    view3d.setSelection(state.sel.reach, state.sel.index, state.water[state.sel.reach]?.states[state.sel.index]);
    view3d.focusProfile(state.sel.reach, state.sel.index);
  }
  return view3d;
}

let legendKey = '';
function updateClassLegend(counts, CLASSES) {
  const present = Object.keys(counts).map(Number).sort((a, b) => a - b);
  const key = present.join(',');
  if (key === legendKey) return;
  legendKey = key;
  const box = $('class-legend');
  box.replaceChildren(...present.map((c) => {
    const [name, color] = CLASSES[c] || [`Klasse ${c}`, '#8f9799'];
    const id = `cls-${c}`;
    const cb = el('input', { type: 'checkbox', id, checked: !view3d.hidden.has(c) });
    cb.addEventListener('change', () => view3d.setClassVisible(c, cb.checked));
    return el('label', { for: id, class: 'cls' }, cb, el('span', { class: 'swatch', style: `background:${color}` }), `${name}`);
  }));
}

async function setView(v) {
  state.view = v;
  for (const b of document.querySelectorAll('[data-view]')) b.setAttribute('aria-pressed', String(b.dataset.view === v));
  $('map').hidden = v !== 'map';
  $('three').hidden = v !== '3d';
  $('tools3d').hidden = v !== '3d';
  $('legend2d').hidden = v !== 'map';
  $('pc-stats').hidden = v !== '3d';
  if (v === 'map') { map2d?.invalidate(); view3d?.setActive(false); }
  else {
    try {
      const v3 = await ensure3D();
      v3?.setActive(true);
    } catch (e) {
      console.error(e);
      notice(`Die 3D-Ansicht konnte nicht gestartet werden: ${e.message}`, 'warn');
    }
  }
}

// ------------------------------------------------------------------ Start
function wire() {
  $('time').addEventListener('input', (e) => { stopPlay(); setTime(Number(e.target.value) * 60000, false); });
  $('btn-live').addEventListener('click', goLive);
  $('btn-play').addEventListener('click', togglePlay);
  $('range-days').value = String(state.days);
  $('range-days').addEventListener('change', async (e) => {
    state.days = Number(e.target.value);
    notice('Verlauf wird geladen …');
    await refreshHydro(true);
    notice(null);
    if (state.live) goLive(); else renderTime();
  });
  for (const b of document.querySelectorAll('[data-view]')) b.addEventListener('click', () => setView(b.dataset.view));
  $('reach').addEventListener('change', (e) => {
    const prof = state.data.profiles[e.target.value];
    select(e.target.value, Math.floor((prof?.profiles.length || 1) / 2), { fly: true });
  });
  $('prev').addEventListener('click', () => select(state.sel.reach, state.sel.index - 1, { fly: true }));
  $('next').addEventListener('click', () => select(state.sel.reach, state.sel.index + 1, { fly: true }));
  for (const b of document.querySelectorAll('[data-zoom]')) {
    b.addEventListener('click', () => {
      state.zoom = b.dataset.zoom;
      for (const x of document.querySelectorAll('[data-zoom]')) x.setAttribute('aria-pressed', String(x === b));
      renderProfiles();
    });
  }
  $('opt-dsm').addEventListener('change', renderProfiles);
  $('long').addEventListener('click', (e) => {
    const r = e.target.getBoundingClientRect();
    const i = longPick(e.clientX - r.left);
    if (i != null) select(state.sel.reach, i, { fly: true });
  });
  for (const b of document.querySelectorAll('[data-mode]')) {
    b.addEventListener('click', () => {
      for (const x of document.querySelectorAll('[data-mode]')) x.setAttribute('aria-pressed', String(x === b));
      view3d?.setMode(Number(b.dataset.mode));
      $('class-legend').hidden = b.dataset.mode !== '1';
    });
  }
  $('pt-size').addEventListener('input', (e) => view3d?.setPointSize(Number(e.target.value)));
  $('exag').addEventListener('input', (e) => {
    $('exag-out').textContent = `${e.target.value}×`;
    view3d?.setExaggeration(Number(e.target.value));
  });
  $('btn-home').addEventListener('click', () => view3d?.home());
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, select, textarea') || !state.sel) return;
    if (e.key === 'ArrowLeft') select(state.sel.reach, state.sel.index - 1, { fly: true });
    if (e.key === 'ArrowRight') select(state.sel.reach, state.sel.index + 1, { fly: true });
  });
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(renderProfiles, 120); });
}

async function main() {
  wire();
  try {
    state.data = await loadStatic();
  } catch (e) {
    notice('Noch keine aufbereiteten Daten gefunden. Starte auf GitHub unter "Actions" den Workflow "Daten aufbereiten".', 'warn');
    return;
  }
  const d = state.data;
  document.title = `${d.meta.title}: Pegel und Gelände`;
  $('title').textContent = d.meta.title;
  $('reach').replaceChildren(...d.meta.reaches.filter((r) => d.profiles[r.id])
    .map((r) => el('option', { value: r.id }, `${r.name}${r.description ? `: ${r.description}` : ''}`)));
  if (d.meta.demo) $('demo-flag').hidden = false;
  $('built').textContent = `Gelände aufbereitet ${formatShort(Date.parse(d.meta.built))}`;

  buildStationList();
  map2d = new Map2D($('map'), d, { onSelect: (r, i) => select(r, i) });

  notice('Pegeldaten werden geladen …');
  await Promise.all([refreshHydro(true), refreshMeteo()]);
  if ($('notice').textContent.startsWith('Pegeldaten werden')) notice(null);

  const first = d.meta.reaches.find((r) => d.profiles[r.id]);
  if (first) {
    const st = d.stations.find((s) => s.reaches.some((h) => h.reach === first.id && h.kind === 'fluss'));
    const prof = d.profiles[first.id];
    const s = st ? st.reaches.find((h) => h.reach === first.id).s : prof.profiles[Math.floor(prof.profiles.length / 2)].s;
    let best = 0, bd = Infinity;
    prof.profiles.forEach((p, i) => { const dd = Math.abs(p.s - s); if (dd < bd) { bd = dd; best = i; } });
    state.sel = { reach: first.id, index: best };
  }
  goLive();

  if (!d.meta.demo) {
    setInterval(async () => { await refreshHydro(false); if (state.live) goLive(); else renderTime(); }, 5 * 60000);
    setInterval(async () => { await refreshHydro(true); if (state.live) goLive(); }, 30 * 60000);
    setInterval(async () => { await refreshMeteo(); renderMeteo(); }, 10 * 60000);
  }
}

// Für Fehlersuche in der Browser-Konsole
window.linth = { state, get view3d() { return view3d; }, get map2d() { return map2d; } };

main();
