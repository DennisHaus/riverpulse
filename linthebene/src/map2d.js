import * as L from 'leaflet';
import { cssVar, fmt, lv95ToWgs84, valueAt } from './util.js';
import { freeboardClass } from './water.js';

const WMTS = (layer, fmt = 'jpeg') =>
  `https://wmts.geo.admin.ch/1.0.0/${layer}/default/current/3857/{z}/{x}/{y}.${fmt}`;

const CLASS_COLOR = () => ({
  ok: cssVar('--fb-ok'), warn: cssVar('--fb-warn'), crit: cssVar('--fb-crit'),
  over: cssVar('--over'), unknown: cssVar('--ink-soft'), dry: cssVar('--ink-soft'),
});

export class Map2D {
  constructor(el, data, { onSelect }) {
    this.data = data;
    this.onSelect = onSelect;
    const map = (this.map = L.map(el, { zoomControl: true, attributionControl: true, preferCanvas: true }));
    const attr = '© <a href="https://www.swisstopo.admin.ch" target="_blank" rel="noopener">swisstopo</a>';
    const bases = {
      Luftbild: L.tileLayer(WMTS('ch.swisstopo.swissimage'), { maxZoom: 20, maxNativeZoom: 19, attribution: attr }),
      Landeskarte: L.tileLayer(WMTS('ch.swisstopo.pixelkarte-farbe'), { maxZoom: 20, maxNativeZoom: 18, attribution: attr }),
      'Landeskarte grau': L.tileLayer(WMTS('ch.swisstopo.pixelkarte-grau'), { maxZoom: 20, maxNativeZoom: 18, attribution: attr }),
    };
    bases.Luftbild.addTo(map);
    const hillshade = L.tileLayer(WMTS('ch.swisstopo.swissalti3d-reliefschattierung', 'png'),
      { maxZoom: 20, maxNativeZoom: 18, opacity: 0.45, attribution: attr });
    L.control.layers(bases, { 'Relief (swissALTI3D)': hillshade }, { position: 'topright' }).addTo(map);

    this.layers = {
      flood: L.layerGroup().addTo(map),
      axis: L.layerGroup().addTo(map),
      ticks: L.layerGroup().addTo(map),
      sel: L.layerGroup().addTo(map),
      stations: L.layerGroup().addTo(map),
      meteo: L.layerGroup().addTo(map),
    };

    const ll = (e, n) => lv95ToWgs84(e, n);
    for (const r of data.axis.reaches) {
      L.polyline(r.coords.map(([e, n]) => ll(e, n)), { color: cssVar('--water'), weight: 2, opacity: 0.9 })
        .addTo(this.layers.axis);
    }

    this.ticks = {};
    for (const r of data.meta.reaches) {
      const prof = data.profiles[r.id];
      if (!prof) continue;
      this.ticks[r.id] = prof.profiles.map((p, i) => {
        const a = this.profPoint(p, p.ch - 45), b = this.profPoint(p, p.ch + 45);
        const line = L.polyline([a, b], { weight: 3, opacity: 0.9, color: cssVar('--ink-soft') });
        line.on('click', () => this.onSelect(r.id, i));
        line.addTo(this.layers.ticks);
        return line;
      });
    }

    this.stationMarkers = data.stations.map((st) => {
      const m = L.circleMarker(ll(st.e, st.n), {
        radius: 6, weight: 2, color: cssVar('--paper'), fillColor: cssVar('--water'), fillOpacity: 1,
      }).addTo(this.layers.stations);
      m.bindTooltip('', { permanent: true, direction: 'right', className: 'map-label', offset: [8, 0] });
      return { st, m };
    });

    const b = data.meta.bounds;
    map.fitBounds([ll(b[0], b[1]), ll(b[2], b[3])], { padding: [10, 10] });
    this.meteoMarkers = [];
  }

  profPoint(p, o) {
    return lv95ToWgs84(p.c[0] + o * p.n[0], p.c[1] + o * p.n[1]);
  }

  setMeteo(meteo) {
    this.layers.meteo.clearLayers();
    this.meteoMarkers = (meteo?.stations || []).map((st) => {
      const m = L.circleMarker(lv95ToWgs84(st.e, st.n), {
        radius: 4, weight: 1.5, color: cssVar('--rain'), fillColor: cssVar('--rain'), fillOpacity: 0.35,
      }).addTo(this.layers.meteo);
      m.bindTooltip('', { direction: 'top', className: 'map-label' });
      return { st, m };
    });
  }

  update(water, hydro, meteo, t, sel) {
    const colors = CLASS_COLOR();
    this.layers.flood.clearLayers();
    for (const r of this.data.meta.reaches) {
      const prof = this.data.profiles[r.id];
      const wl = water[r.id];
      if (!prof || !wl) continue;
      // Wasserfläche: zusammenhängende Läufe benetzter Profile
      let left = [], right = [];
      const flush = () => {
        if (left.length > 1) {
          L.polygon(left.concat(right.reverse()), {
            stroke: false, fillColor: cssVar('--water'), fillOpacity: 0.45, interactive: false,
          }).addTo(this.layers.flood);
        }
        left = []; right = [];
      };
      prof.profiles.forEach((p, i) => {
        const s = wl.states[i];
        const tick = this.ticks[r.id][i];
        tick.setStyle({ color: colors[freeboardClass(s)] });
        if (!s.wet) { flush(); return; }
        left.push(this.profPoint(p, s.oL));
        right.push(this.profPoint(p, s.oR));
      });
      flush();
    }

    this.layers.sel.clearLayers();
    if (sel) {
      const p = this.data.profiles[sel.reach]?.profiles[sel.index];
      if (p) {
        const prof = this.data.profiles[sel.reach];
        const a = this.profPoint(p, prof.offset0);
        const b = this.profPoint(p, prof.offset0 + (p.dtm.length - 1) * prof.step);
        L.polyline([a, b], { color: cssVar('--accent'), weight: 3, dashArray: '6 4' }).addTo(this.layers.sel);
      }
    }

    for (const { st, m } of this.stationMarkers) {
      const w = valueAt(hydro[st.no]?.W, t);
      const q = valueAt(hydro[st.no]?.Q, t);
      const parts = [st.name || st.no];
      if (w != null) parts.push(`${fmt(w, 2)} ${st.params?.W?.unit || 'm'}`);
      if (q != null) parts.push(`${fmt(q, q < 10 ? 1 : 0)} m³/s`);
      m.setTooltipContent(parts.join('<br>'));
      m.setStyle({ fillOpacity: w != null || q != null ? 1 : 0.3 });
    }
    for (const { st, m } of this.meteoMarkers) {
      const v = valueAt(st.series, t, 2 * 3600000) || 0;
      m.setRadius(4 + Math.min(18, v * 2.2));
      m.setTooltipContent(`${st.name}<br>${fmt(v, 1)} mm/h`);
    }
  }

  flyToProfile(reach, index) {
    const p = this.data.profiles[reach]?.profiles[index];
    if (p) this.map.panTo(lv95ToWgs84(p.c[0], p.c[1]));
  }

  invalidate() { this.map.invalidateSize(); }
}
