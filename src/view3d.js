import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { cssVar } from './util.js';

// Farben unverändert als sRGB durchreichen (Punktfarben kommen schon als sRGB aus den Daten)
THREE.ColorManagement.enabled = false;

// Klassen nach ASPRS/LAS-Standard, wie sie swisstopo verwendet.
// Unbekannte Klassen erscheinen grau mit ihrer Nummer.
export const CLASSES = {
  1: ['Nicht klassiert', '#9aa3a6'],
  2: ['Boden', '#b48a4c'],
  3: ['Vegetation niedrig', '#a9c97a'],
  4: ['Vegetation mittel', '#6fa64e'],
  5: ['Vegetation hoch', '#3f7a3a'],
  6: ['Gebäude', '#c4553f'],
  7: ['Rauschen', '#ff00ff'],
  9: ['Wasser', '#3d8fd1'],
  11: ['Strasse', '#6b6b6b'],
  13: ['Leitungsschutz', '#e0b400'],
  14: ['Leiter', '#e0b400'],
  15: ['Mast', '#8a6d3b'],
  17: ['Brücke', '#d68f2b'],
  18: ['Rauschen hoch', '#ff00ff'],
};

const VERT = /* glsl */`
  precision highp float;
  attribute vec3 rgb;
  attribute float cls;
  attribute float inten;
  uniform vec3 uTileMin;   // relativ zum Ursprung, z absolut
  uniform vec3 uTileSize;
  uniform float uBaseZ;
  uniform float uEx;
  uniform float uSpacing;
  uniform float uSize;
  uniform float uProj;
  uniform int uMode;
  uniform vec2 uInt;
  uniform vec2 uZRange;
  uniform sampler2D uPal;
  varying vec3 vColor;
  varying float vVisible;

  vec3 ramp(float t) {
    t = clamp(t, 0.0, 1.0);
    vec3 a = vec3(0.12, 0.25, 0.42), b = vec3(0.35, 0.62, 0.55), c = vec3(0.86, 0.80, 0.52), d = vec3(0.62, 0.36, 0.22);
    if (t < 0.33) return mix(a, b, t / 0.33);
    if (t < 0.66) return mix(b, c, (t - 0.33) / 0.33);
    return mix(c, d, (t - 0.66) / 0.34);
  }

  void main() {
    vec3 p = uTileMin + position * uTileSize;
    vec3 world = vec3(p.x, (p.z - uBaseZ) * uEx, -p.y);
    vec4 mv = modelViewMatrix * vec4(world, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(uSpacing * uSize * uProj / max(1.0, -mv.z), 1.5, 28.0);
    vec4 pal = texture2D(uPal, vec2((cls + 0.5) / 256.0, 0.5));
    vVisible = pal.a;
    if (uMode == 0) vColor = rgb;
    else if (uMode == 1) vColor = pal.rgb;
    else if (uMode == 2) { float v = clamp((inten - uInt.x) / max(1e-5, uInt.y - uInt.x), 0.0, 1.0); vColor = vec3(pow(v, 0.8)); }
    else vColor = ramp((p.z - uZRange.x) / max(0.1, uZRange.y - uZRange.x));
  }
`;

const FRAG = /* glsl */`
  precision highp float;
  varying vec3 vColor;
  varying float vVisible;
  void main() {
    if (vVisible < 0.5) discard;
    vec2 d = gl_PointCoord - 0.5;
    if (dot(d, d) > 0.25) discard;
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

export class View3D {
  constructor(container, data, { onPick, onStats }) {
    this.data = data;
    this.onPick = onPick;
    this.onStats = onStats || (() => {});
    this.origin = data.meta.origin;
    this.ex = 2;
    const wl0s = Object.values(data.profiles).flatMap((p) => (p ? p.profiles.map((x) => x.wl0) : [])).filter((v) => v != null);
    this.baseZ = wl0s.length ? Math.min(...wl0s) - 5 : 400;

    const renderer = (this.renderer = new THREE.WebGLRenderer({ antialias: true }));
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    container.appendChild(renderer.domElement);
    this.container = container;
    const scene = (this.scene = new THREE.Scene());
    this.camera = new THREE.PerspectiveCamera(50, 1, 5, 60000);
    this.controls = new MapControls(this.camera, renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.maxPolarAngle = Math.PI * 0.49;
    this.controls.addEventListener('change', () => this.requestRender(true));

    // gemeinsame Uniforms (ein Objekt pro Wert, von allen Kacheln geteilt)
    this.palette = new Uint8Array(256 * 4);
    this.palTex = new THREE.DataTexture(this.palette, 256, 1, THREE.RGBAFormat);
    this.hidden = new Set([7, 18]);
    this.buildPalette();
    this.shared = {
      uBaseZ: { value: this.baseZ }, uEx: { value: this.ex }, uSize: { value: 1.0 }, uProj: { value: 800 },
      uMode: { value: 0 }, uPal: { value: this.palTex }, uZRange: { value: new THREE.Vector2(0, 1) },
    };

    this.tiles = [];
    this.classCounts = {};
    this.budget = (window.LINTH_CONFIG || {}).pointBudget || 8e6;
    this.loading = 0;
    if (data.pc) this.initTiles(data.pc);

    this.water = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({
      color: new THREE.Color(cssVar('--water')), transparent: true, opacity: 0.5,
      side: THREE.DoubleSide, depthWrite: false,
    }));
    this.water.renderOrder = 2;
    scene.add(this.water);
    this.selLine = new THREE.Group();
    scene.add(this.selLine);
    this.axisLines = new THREE.Group();
    scene.add(this.axisLines);
    this.buildAxis();

    renderer.domElement.addEventListener('pointerdown', (e) => { this.down = [e.clientX, e.clientY]; });
    renderer.domElement.addEventListener('pointerup', (e) => {
      if (this.down && Math.hypot(e.clientX - this.down[0], e.clientY - this.down[1]) < 4) this.pick(e);
    });

    this.resizeObs = new ResizeObserver(() => this.resize());
    this.resizeObs.observe(container);
    this.resize();
    this.home();
    this.active = true;
    this.loop();
  }

  // ---------------------------------------------------------- Koordinaten
  toWorld(e, n, z) {
    return new THREE.Vector3(e - this.origin[0], (z - this.baseZ) * this.ex, -(n - this.origin[1]));
  }

  // ---------------------------------------------------------- Palette
  buildPalette() {
    for (let c = 0; c < 256; c++) {
      const hex = CLASSES[c]?.[1] || '#8f9799';
      const col = new THREE.Color(hex);
      this.palette.set([col.r * 255, col.g * 255, col.b * 255, this.hidden.has(c) ? 0 : 255], c * 4);
    }
    this.palTex.needsUpdate = true;
    this.requestRender();
  }

  setClassVisible(c, visible) {
    if (visible) this.hidden.delete(c); else this.hidden.add(c);
    this.buildPalette();
  }

  // ---------------------------------------------------------- Punktwolke
  initTiles(pc) {
    let zmin = Infinity, zmax = -Infinity;
    for (const t of pc.tiles) {
      zmin = Math.min(zmin, t.min[2]);
      zmax = Math.max(zmax, t.min[2] + t.size[2]);
      this.tiles.push({
        ...t,
        center: null,
        levels: t.counts.map(() => ({ state: 'none', obj: null })),
      });
    }
    // Höhenfarben auf den Talboden konzentrieren
    this.shared.uZRange.value.set(this.baseZ, Math.min(zmax, this.baseZ + 40));
    this.pcLevels = pc.levels;
  }

  tileCenter(t) {
    return this.toWorld(t.min[0] + t.size[0] / 2, t.min[1] + t.size[1] / 2, t.min[2] + t.size[2] / 4);
  }

  async loadLevel(t, L) {
    const lv = t.levels[L];
    lv.state = 'loading';
    this.loading++;
    try {
      const r = await fetch(`data/pc/${t.id}_L${L}.bin`);
      if (!r.ok) throw new Error(r.status);
      const buf = await r.arrayBuffer();
      const n = t.counts[L];
      const pos = new Uint16Array(buf, 0, n * 3);
      const rgb = new Uint8Array(buf, n * 6, n * 3);
      const cls = new Uint8Array(buf, n * 9, n);
      const inten = new Uint16Array(buf, n * 10, n);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3, true));
      g.setAttribute('rgb', new THREE.BufferAttribute(rgb, 3, true));
      g.setAttribute('cls', new THREE.BufferAttribute(cls, 1, false));
      g.setAttribute('inten', new THREE.BufferAttribute(inten, 1, true));
      g.boundingSphere = new THREE.Sphere(this.tileCenter(t), Math.hypot(t.size[0], t.size[1]));
      for (let i = 0; i < n; i++) this.classCounts[cls[i]] = (this.classCounts[cls[i]] || 0) + 1;
      const mat = new THREE.ShaderMaterial({
        vertexShader: VERT, fragmentShader: FRAG,
        uniforms: {
          ...this.shared,
          uTileMin: { value: new THREE.Vector3(t.min[0] - this.origin[0], t.min[1] - this.origin[1], t.min[2]) },
          uTileSize: { value: new THREE.Vector3(...t.size) },
          uSpacing: { value: this.pcLevels[L] },
          uInt: { value: new THREE.Vector2(t.int[0] / 65535, t.int[1] / 65535) },
        },
      });
      const obj = new THREE.Points(g, mat);
      obj.frustumCulled = true;
      if (lv.state === 'loading') {
        lv.obj = obj; lv.state = 'ready';
        this.scene.add(obj);
      } else {
        g.dispose(); mat.dispose();
      }
    } catch (e) {
      lv.state = 'error';
    } finally {
      this.loading--;
      this.requestRender(true);
    }
  }

  unloadLevel(t, L) {
    const lv = t.levels[L];
    if (lv.obj) {
      this.scene.remove(lv.obj);
      lv.obj.geometry.dispose();
      lv.obj.material.dispose();
    }
    lv.obj = null;
    lv.state = 'none';
  }

  updateLod() {
    if (!this.tiles.length) return;
    const cam = this.camera.position;
    const frustum = new THREE.Frustum().setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse));
    const scale = (this.data.pc.subtile || 250) / 250;
    const reach = [Infinity, 3200, 1500, 650].map((d) => d * scale);
    const wants = [];
    let loaded = 0;
    for (const t of this.tiles) {
      t.center ||= this.tileCenter(t);
      const d = cam.distanceTo(t.center);
      const vis = frustum.intersectsSphere(new THREE.Sphere(t.center, 260 * scale));
      t.levels.forEach((lv, L) => {
        const want = L === 0 || (vis && d < reach[Math.min(L, reach.length - 1)]);
        if (want) wants.push({ t, L, d: L === 0 ? -1 : d, n: t.counts[L] });
        else if (lv.state === 'ready' && d > reach[Math.min(L, reach.length - 1)] * 1.4) this.unloadLevel(t, L);
        if (lv.state === 'ready') loaded += t.counts[L];
      });
    }
    wants.sort((a, b) => a.L - b.L || a.d - b.d);
    let planned = 0;
    for (const w of wants) {
      planned += w.n;
      if (planned > this.budget) break;
      const lv = w.t.levels[w.L];
      if (lv.state === 'none' && this.loading < 6) this.loadLevel(w.t, w.L);
    }
    this.onStats({ loaded, loading: this.loading, classes: this.classCounts });
  }

  // ---------------------------------------------------------- Achsen, Wasser, Auswahl
  buildAxis() {
    const mat = new THREE.LineBasicMaterial({ color: new THREE.Color(cssVar('--water')) });
    for (const r of this.data.meta.reaches) {
      const prof = this.data.profiles[r.id];
      if (!prof) continue;
      const pts = prof.profiles.filter((p) => p.wl0 != null).map((p) => this.toWorld(p.c[0], p.c[1], p.wl0 + 0.05));
      this.axisLines.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
    }
  }

  setWater(water) {
    const pos = [];
    const idx = [];
    for (const r of this.data.meta.reaches) {
      const prof = this.data.profiles[r.id];
      const wl = water[r.id];
      if (!prof || !wl) continue;
      let prev = -1;
      prof.profiles.forEach((p, i) => {
        const s = wl.states[i];
        if (!s.wet) { prev = -1; return; }
        const base = pos.length / 3;
        for (const o of [s.oL, s.oR]) {
          const v = this.toWorld(p.c[0] + o * p.n[0], p.c[1] + o * p.n[1], s.wse);
          pos.push(v.x, v.y, v.z);
        }
        if (prev >= 0) idx.push(prev, prev + 1, base, prev + 1, base + 1, base);
        prev = base;
      });
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    this.water.geometry.dispose();
    this.water.geometry = g;
    this.requestRender();
  }

  setSelection(reach, index, state) {
    this.selLine.clear();
    const prof = this.data.profiles[reach];
    const p = prof?.profiles[index];
    if (!p) return;
    const pts = [];
    p.dtm.forEach((z, i) => {
      if (z == null) return;
      const o = prof.offset0 + i * prof.step;
      pts.push(this.toWorld(p.c[0] + o * p.n[0], p.c[1] + o * p.n[1], z + 0.3));
    });
    const col = new THREE.Color(cssVar('--accent'));
    this.selLine.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: col, depthTest: false })));
    if (state?.wet) {
      const a = this.toWorld(p.c[0] + state.oL * p.n[0], p.c[1] + state.oL * p.n[1], state.wse);
      const b = this.toWorld(p.c[0] + state.oR * p.n[0], p.c[1] + state.oR * p.n[1], state.wse);
      this.selLine.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]),
        new THREE.LineBasicMaterial({ color: new THREE.Color(cssVar('--water')), depthTest: false })));
    }
    this.selLine.renderOrder = 5;
    this.requestRender();
  }

  focusProfile(reach, index) {
    const p = this.data.profiles[reach]?.profiles[index];
    if (!p) return;
    const target = this.toWorld(p.c[0], p.c[1], p.wl0 ?? this.baseZ);
    // schräg von flussaufwärts und vom linken Ufer her auf das Profil blicken
    const tangent = new THREE.Vector3(-p.n[1], 0, -p.n[0]);
    const right = new THREE.Vector3(p.n[0], 0, -p.n[1]);
    const cam = target.clone().addScaledVector(tangent, -520).addScaledVector(right, -320).add(new THREE.Vector3(0, 380, 0));
    this.controls.target.copy(target);
    this.camera.position.copy(cam);
    this.controls.update();
    this.requestRender(true);
  }

  home() {
    const b = this.data.meta.bounds;
    const c = this.toWorld((b[0] + b[2]) / 2, (b[1] + b[3]) / 2, this.baseZ + 5);
    const span = Math.max(b[2] - b[0], b[3] - b[1]);
    this.controls.target.copy(c);
    this.camera.position.set(c.x, c.y + span * 0.55, c.z + span * 0.55);
    this.controls.update();
    this.requestRender(true);
  }

  pick(e) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -this.controls.target.y);
    const hit = new THREE.Vector3();
    if (!ray.ray.intersectPlane(plane, hit)) return;
    const e0 = hit.x + this.origin[0], n0 = -hit.z + this.origin[1];
    let best = null, bd = 400;
    for (const r of this.data.meta.reaches) {
      (this.data.profiles[r.id]?.profiles || []).forEach((p, i) => {
        const d = Math.hypot(p.c[0] - e0, p.c[1] - n0);
        if (d < bd) { bd = d; best = [r.id, i]; }
      });
    }
    if (best) this.onPick(...best);
  }

  // ---------------------------------------------------------- Einstellungen
  setMode(m) { this.shared.uMode.value = m; this.requestRender(); }
  setPointSize(s) { this.shared.uSize.value = s; this.requestRender(); }
  setExaggeration(ex) {
    const target = this.controls.target.clone();
    const tz = target.y / this.ex;
    this.ex = ex;
    this.shared.uEx.value = ex;
    for (const t of this.tiles) t.center = null;
    this.axisLines.clear();
    this.buildAxis();
    this.controls.target.y = tz * ex;
    this.controls.update();
    this.onExChange?.();
    this.requestRender(true);
  }

  // ---------------------------------------------------------- Rendering
  resize() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.shared.uProj.value = h * this.renderer.getPixelRatio() / (2 * Math.tan((this.camera.fov * Math.PI) / 360));
    this.requestRender(true);
  }

  requestRender(lod = false) {
    this.dirty = true;
    if (lod) this.lodDirty = true;
  }

  setActive(a) {
    this.active = a;
    if (a) { this.resize(); this.requestRender(true); }
  }

  loop() {
    requestAnimationFrame(() => this.loop());
    if (!this.active) return;
    this.controls.update();
    const now = performance.now();
    if (this.lodDirty && (!this.lastLod || now - this.lastLod > 250)) {
      this.lastLod = now;
      this.lodDirty = this.loading > 0;
      this.updateLod();
    }
    if (this.dirty) {
      this.dirty = false;
      this.renderer.setClearColor(new THREE.Color(cssVar('--viewport')));
      this.renderer.render(this.scene, this.camera);
    }
  }
}
