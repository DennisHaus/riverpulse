import { HOUR } from './util.js';

const CFG = window.LINTH_CONFIG || {};

async function getJson(url) {
  const r = await fetch(url, { cache: 'no-cache' });
  if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
  return r.json();
}

export async function loadStatic() {
  const meta = await getJson('data/meta.json');
  const [axis, stations, pc, ...profs] = await Promise.all([
    getJson('data/axis.json'),
    getJson('data/stations.json').catch(() => ({ stations: [] })),
    getJson('data/pc/index.json').catch(() => null),
    ...meta.reaches.map((r) => getJson(`data/profiles_${r.id}.json`).catch(() => null)),
  ]);
  const profiles = {};
  meta.reaches.forEach((r, i) => { profiles[r.id] = profs[i]; });
  return { meta, axis, stations: stations.stations || [], profiles, pc };
}

// ------------------------------------------------------------------ BAFU

const iso = (t) => new Date(t).toISOString().replace(/\.\d{3}Z$/, 'Z');

async function bafu(query) {
  const r = await fetch(CFG.bafuApi || 'https://data.bafu.admin.ch/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  if (!r.ok) throw new Error(`BAFU-Schnittstelle: HTTP ${r.status}`);
  const js = await r.json();
  if (js.errors) throw new Error('BAFU-Schnittstelle: ' + js.errors.map((e) => e.message).join('; '));
  return js.data;
}

function push(store, no, p, t, v) {
  if (v == null || !Number.isFinite(v)) return;
  const s = (store[no] ||= {});
  (s[p] ||= []).push({ t, v });
}

function sortStore(store) {
  for (const st of Object.values(store)) {
    for (const p of Object.keys(st)) {
      const arr = st[p].sort((a, b) => a.t - b.t);
      st[p] = arr.filter((x, i) => i === 0 || x.t !== arr[i - 1].t);
    }
  }
  return store;
}

// Stundenmittel der letzten `days` Tage, in 10-Tages-Fenstern (Limit 10 000 Zeilen pro Abfrage)
export async function loadHydroHistory(stationNos, days) {
  const store = {};
  if (!stationNos.length) return store;
  const end = Math.floor(Date.now() / HOUR) * HOUR + HOUR;
  const start = end - days * 24 * HOUR;
  const win = 10 * 24 * HOUR;
  const list = JSON.stringify(stationNos.map(String));
  const jobs = [];
  for (let a = start; a < end; a += win) {
    const b = Math.min(end, a + win);
    const q = `{ water { observations { data_1hour_mean(where: {
      station: { no: { _in: ${list} } }, parameterName: { _in: ["W","Q"] },
      timestamp: { _gte: "${iso(a)}", _lt: "${iso(b)}" } }) {
      parameterName timestamp value station { no } } } } }`;
    jobs.push(bafu(q).then((d) => {
      for (const row of d.water.observations.data_1hour_mean) {
        // Stundenmittel: Zeitstempel = Intervallbeginn, dargestellt in der Intervallmitte
        push(store, String(row.station.no), row.parameterName, Date.parse(row.timestamp) + HOUR / 2, row.value);
      }
    }));
  }
  await Promise.all(jobs);
  return sortStore(store);
}

// Live-Feed: unkorrigierte Werte der letzten 12 Stunden, ca. alle 10 Minuten
export async function loadHydroLive(stationNos) {
  const store = {};
  if (!stationNos.length) return store;
  const list = JSON.stringify(stationNos.map(String));
  const q = `{ water { observations { data_live(where: {
    stationNo: { _in: ${list} }, parameterName: { _in: ["W","Q"] } }) {
    stationNo parameterName timestamp value } } } }`;
  const d = await bafu(q);
  for (const row of d.water.observations.data_live) {
    push(store, String(row.stationNo), row.parameterName, Date.parse(row.timestamp), row.value);
  }
  return sortStore(store);
}

// Live-Werte an den Stundenverlauf anhängen (nur jüngere Zeitpunkte)
export function mergeHydro(history, live) {
  const out = {};
  const nos = new Set([...Object.keys(history), ...Object.keys(live)]);
  for (const no of nos) {
    out[no] = {};
    for (const p of ['W', 'Q']) {
      const h = history[no]?.[p] || [];
      const l = live[no]?.[p] || [];
      const lastH = h.length ? h[h.length - 1].t : -Infinity;
      out[no][p] = h.concat(l.filter((x) => x.t > lastH));
    }
  }
  return out;
}

// ------------------------------------------------------------------ MeteoSchweiz

export function meteoUrls() {
  const urls = [];
  if (CFG.meteoUrl) urls.push(CFG.meteoUrl);
  const host = location.hostname;
  if (host.endsWith('.github.io')) {
    const owner = host.split('.')[0];
    const repo = location.pathname.split('/').filter(Boolean)[0] || `${owner}.github.io`;
    urls.push(`https://raw.githubusercontent.com/${owner}/${repo}/live-data/meteo.json`);
  }
  urls.push('live/meteo.json');
  return urls;
}

export async function loadMeteo() {
  for (const url of meteoUrls()) {
    try {
      const js = await getJson(`${url}${url.includes('?') ? '&' : '?'}v=${Math.floor(Date.now() / 300000)}`);
      for (const st of js.stations || []) {
        const p = st.precip_h;
        const t0 = Date.parse(p.start);
        // Stundensumme gilt für [t, t+1h) – dargestellt am Intervallende
        st.series = p.values.map((v, i) => ({ t: t0 + (i + 1) * p.step_s * 1000, v })).filter((x) => x.v != null);
      }
      return { ...js, url };
    } catch (e) {
      /* nächste Quelle versuchen */
    }
  }
  return null;
}

// ------------------------------------------------------------------ Demo

// Künstliche Daten für die Vorschau mit Demodaten (meta.demo = true)
export function demoHydro(stations, days) {
  const store = {};
  const end = Math.floor(Date.now() / HOUR) * HOUR;
  const start = end - days * 24 * HOUR;
  const peak = end - 40 * HOUR;
  for (const st of stations) {
    const s0 = st.reaches[0]?.s || 0;
    const lag = s0 / 1000 * 0.6 * HOUR;
    const base = st.demo_base ?? 420;
    for (let t = start; t <= end; t += HOUR) {
      const x = (t - peak - lag) / (14 * HOUR);
      const wave = Math.exp(-x * x);
      const daily = 0.05 * Math.sin((t / HOUR) * Math.PI / 12);
      push(store, st.no, 'W', t, base + 2.6 * wave + daily);
      push(store, st.no, 'Q', t, 60 + 420 * wave + 5 * daily);
    }
  }
  return sortStore(store);
}

export function demoMeteo(meta) {
  const end = Math.floor(Date.now() / HOUR) * HOUR;
  const peak = end - 52 * HOUR;
  const [e, n] = meta.origin;
  const names = [['DEM', 'Demo Glarus', 2000, -6000], ['DEW', 'Demo Weesen', 1500, 2500], ['DES', 'Demo Schänis', -1500, 5000]];
  const stations = names.map(([abbr, name, de, dn], k) => {
    const series = [];
    for (let t = end - 30 * 24 * HOUR; t <= end; t += HOUR) {
      const x = (t - peak) / (10 * HOUR);
      const v = Math.max(0, 9 * Math.exp(-x * x) * (1 + 0.3 * Math.sin(t / HOUR + k)) - 0.4);
      series.push({ t, v: Math.round(v * 10) / 10 });
    }
    return { abbr, name, e: e + de, n: n + dn, series, demo: true };
  });
  return { generated: new Date().toISOString(), stations, url: 'demo' };
}
