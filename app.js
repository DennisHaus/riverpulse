// Linthebene – gebündelt aus src/ (esbuild). Kleine Änderungen können direkt hier gemacht werden.
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/util.js
function lv95ToWgs84(e, n) {
  const y = (e - 26e5) / 1e6;
  const x = (n - 12e5) / 1e6;
  const lam = 2.6779094 + 4.728982 * y + 0.791484 * y * x + 0.1306 * y * x * x - 0.0436 * y * y * y;
  const phi = 16.9023892 + 3.238272 * x - 0.270978 * y * y - 2528e-6 * x * x - 0.0447 * y * y * x - 0.014 * x * x * x;
  return [phi * 100 / 36, lam * 100 / 36];
}
function fmt(v, digits = 2, unit = "") {
  if (v == null || !Number.isFinite(v)) return "\u2013";
  const s = v.toLocaleString("de-CH", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  return unit ? `${s} ${unit}` : s;
}
function valueAt(series, t, maxGap = 3 * HOUR) {
  if (!series || !series.length) return null;
  if (t < series[0].t - maxGap || t > series[series.length - 1].t + maxGap) return null;
  let lo = 0, hi = series.length - 1;
  if (t <= series[0].t) return series[0].v;
  if (t >= series[hi].t) return series[hi].v;
  while (hi - lo > 1) {
    const mid = lo + hi >> 1;
    if (series[mid].t <= t) lo = mid;
    else hi = mid;
  }
  const a = series[lo], b = series[hi];
  if (b.t - a.t > maxGap) return null;
  return a.v + (b.v - a.v) * (t - a.t) / (b.t - a.t);
}
function interp1(xs, ys, x) {
  if (!xs.length) return null;
  if (x <= xs[0]) return ys[0];
  if (x >= xs[xs.length - 1]) return ys[ys.length - 1];
  let i = 1;
  while (xs[i] < x) i++;
  const f = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
  return ys[i - 1] + f * (ys[i] - ys[i - 1]);
}
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return node;
}
function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
function setupCanvas(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  return { ctx, w, h };
}
function niceStep(range, target = 6) {
  const raw = range / target;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const f = raw / p;
  return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p;
}
function font(size, weight = 400) {
  const fam = cssVar("--font-ui") || "sans-serif";
  return `${weight} ${size}px ${fam}`;
}
var HOUR, fmtDate, fmtShort, fmtDay, formatTime, formatShort, km;
var init_util = __esm({
  "src/util.js"() {
    HOUR = 3600 * 1e3;
    fmtDate = new Intl.DateTimeFormat("de-CH", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Zurich"
    });
    fmtShort = new Intl.DateTimeFormat("de-CH", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Zurich"
    });
    fmtDay = new Intl.DateTimeFormat("de-CH", { day: "2-digit", month: "2-digit", timeZone: "Europe/Zurich" });
    formatTime = (t) => fmtDate.format(new Date(t));
    formatShort = (t) => fmtShort.format(new Date(t));
    km = (s) => `km ${(s / 1e3).toLocaleString("de-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
});

// site/vendor/OrbitControls.js
import {
  EventDispatcher,
  MOUSE,
  Quaternion,
  Spherical,
  TOUCH,
  Vector2,
  Vector3,
  Plane,
  Ray,
  MathUtils
} from "three";
var _changeEvent, _startEvent, _endEvent, _ray, _plane, TILT_LIMIT, OrbitControls;
var init_OrbitControls = __esm({
  "site/vendor/OrbitControls.js"() {
    _changeEvent = { type: "change" };
    _startEvent = { type: "start" };
    _endEvent = { type: "end" };
    _ray = new Ray();
    _plane = new Plane();
    TILT_LIMIT = Math.cos(70 * MathUtils.DEG2RAD);
    OrbitControls = class extends EventDispatcher {
      constructor(object, domElement) {
        super();
        this.object = object;
        this.domElement = domElement;
        this.domElement.style.touchAction = "none";
        this.enabled = true;
        this.target = new Vector3();
        this.cursor = new Vector3();
        this.minDistance = 0;
        this.maxDistance = Infinity;
        this.minZoom = 0;
        this.maxZoom = Infinity;
        this.minTargetRadius = 0;
        this.maxTargetRadius = Infinity;
        this.minPolarAngle = 0;
        this.maxPolarAngle = Math.PI;
        this.minAzimuthAngle = -Infinity;
        this.maxAzimuthAngle = Infinity;
        this.enableDamping = false;
        this.dampingFactor = 0.05;
        this.enableZoom = true;
        this.zoomSpeed = 1;
        this.enableRotate = true;
        this.rotateSpeed = 1;
        this.enablePan = true;
        this.panSpeed = 1;
        this.screenSpacePanning = true;
        this.keyPanSpeed = 7;
        this.zoomToCursor = false;
        this.autoRotate = false;
        this.autoRotateSpeed = 2;
        this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" };
        this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };
        this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };
        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.zoom0 = this.object.zoom;
        this._domElementKeyEvents = null;
        this.getPolarAngle = function() {
          return spherical.phi;
        };
        this.getAzimuthalAngle = function() {
          return spherical.theta;
        };
        this.getDistance = function() {
          return this.object.position.distanceTo(this.target);
        };
        this.listenToKeyEvents = function(domElement2) {
          domElement2.addEventListener("keydown", onKeyDown);
          this._domElementKeyEvents = domElement2;
        };
        this.stopListenToKeyEvents = function() {
          this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
          this._domElementKeyEvents = null;
        };
        this.saveState = function() {
          scope.target0.copy(scope.target);
          scope.position0.copy(scope.object.position);
          scope.zoom0 = scope.object.zoom;
        };
        this.reset = function() {
          scope.target.copy(scope.target0);
          scope.object.position.copy(scope.position0);
          scope.object.zoom = scope.zoom0;
          scope.object.updateProjectionMatrix();
          scope.dispatchEvent(_changeEvent);
          scope.update();
          state2 = STATE.NONE;
        };
        this.update = function() {
          const offset = new Vector3();
          const quat = new Quaternion().setFromUnitVectors(object.up, new Vector3(0, 1, 0));
          const quatInverse = quat.clone().invert();
          const lastPosition = new Vector3();
          const lastQuaternion = new Quaternion();
          const lastTargetPosition = new Vector3();
          const twoPI = 2 * Math.PI;
          return function update(deltaTime = null) {
            const position = scope.object.position;
            offset.copy(position).sub(scope.target);
            offset.applyQuaternion(quat);
            spherical.setFromVector3(offset);
            if (scope.autoRotate && state2 === STATE.NONE) {
              rotateLeft(getAutoRotationAngle(deltaTime));
            }
            if (scope.enableDamping) {
              spherical.theta += sphericalDelta.theta * scope.dampingFactor;
              spherical.phi += sphericalDelta.phi * scope.dampingFactor;
            } else {
              spherical.theta += sphericalDelta.theta;
              spherical.phi += sphericalDelta.phi;
            }
            let min = scope.minAzimuthAngle;
            let max = scope.maxAzimuthAngle;
            if (isFinite(min) && isFinite(max)) {
              if (min < -Math.PI) min += twoPI;
              else if (min > Math.PI) min -= twoPI;
              if (max < -Math.PI) max += twoPI;
              else if (max > Math.PI) max -= twoPI;
              if (min <= max) {
                spherical.theta = Math.max(min, Math.min(max, spherical.theta));
              } else {
                spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
              }
            }
            spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
            spherical.makeSafe();
            if (scope.enableDamping === true) {
              scope.target.addScaledVector(panOffset, scope.dampingFactor);
            } else {
              scope.target.add(panOffset);
            }
            scope.target.sub(scope.cursor);
            scope.target.clampLength(scope.minTargetRadius, scope.maxTargetRadius);
            scope.target.add(scope.cursor);
            if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) {
              spherical.radius = clampDistance(spherical.radius);
            } else {
              spherical.radius = clampDistance(spherical.radius * scale);
            }
            offset.setFromSpherical(spherical);
            offset.applyQuaternion(quatInverse);
            position.copy(scope.target).add(offset);
            scope.object.lookAt(scope.target);
            if (scope.enableDamping === true) {
              sphericalDelta.theta *= 1 - scope.dampingFactor;
              sphericalDelta.phi *= 1 - scope.dampingFactor;
              panOffset.multiplyScalar(1 - scope.dampingFactor);
            } else {
              sphericalDelta.set(0, 0, 0);
              panOffset.set(0, 0, 0);
            }
            let zoomChanged = false;
            if (scope.zoomToCursor && performCursorZoom) {
              let newRadius = null;
              if (scope.object.isPerspectiveCamera) {
                const prevRadius = offset.length();
                newRadius = clampDistance(prevRadius * scale);
                const radiusDelta = prevRadius - newRadius;
                scope.object.position.addScaledVector(dollyDirection, radiusDelta);
                scope.object.updateMatrixWorld();
              } else if (scope.object.isOrthographicCamera) {
                const mouseBefore = new Vector3(mouse.x, mouse.y, 0);
                mouseBefore.unproject(scope.object);
                scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                scope.object.updateProjectionMatrix();
                zoomChanged = true;
                const mouseAfter = new Vector3(mouse.x, mouse.y, 0);
                mouseAfter.unproject(scope.object);
                scope.object.position.sub(mouseAfter).add(mouseBefore);
                scope.object.updateMatrixWorld();
                newRadius = offset.length();
              } else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
                scope.zoomToCursor = false;
              }
              if (newRadius !== null) {
                if (this.screenSpacePanning) {
                  scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
                } else {
                  _ray.origin.copy(scope.object.position);
                  _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
                  if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) {
                    object.lookAt(scope.target);
                  } else {
                    _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                    _ray.intersectPlane(_plane, scope.target);
                  }
                }
              }
            } else if (scope.object.isOrthographicCamera) {
              scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
              scope.object.updateProjectionMatrix();
              zoomChanged = true;
            }
            scale = 1;
            performCursorZoom = false;
            if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS || lastTargetPosition.distanceToSquared(scope.target) > 0) {
              scope.dispatchEvent(_changeEvent);
              lastPosition.copy(scope.object.position);
              lastQuaternion.copy(scope.object.quaternion);
              lastTargetPosition.copy(scope.target);
              return true;
            }
            return false;
          };
        }();
        this.dispose = function() {
          scope.domElement.removeEventListener("contextmenu", onContextMenu);
          scope.domElement.removeEventListener("pointerdown", onPointerDown);
          scope.domElement.removeEventListener("pointercancel", onPointerUp);
          scope.domElement.removeEventListener("wheel", onMouseWheel);
          scope.domElement.removeEventListener("pointermove", onPointerMove);
          scope.domElement.removeEventListener("pointerup", onPointerUp);
          if (scope._domElementKeyEvents !== null) {
            scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
            scope._domElementKeyEvents = null;
          }
        };
        const scope = this;
        const STATE = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_PAN: 4,
          TOUCH_DOLLY_PAN: 5,
          TOUCH_DOLLY_ROTATE: 6
        };
        let state2 = STATE.NONE;
        const EPS = 1e-6;
        const spherical = new Spherical();
        const sphericalDelta = new Spherical();
        let scale = 1;
        const panOffset = new Vector3();
        const rotateStart = new Vector2();
        const rotateEnd = new Vector2();
        const rotateDelta = new Vector2();
        const panStart = new Vector2();
        const panEnd = new Vector2();
        const panDelta = new Vector2();
        const dollyStart = new Vector2();
        const dollyEnd = new Vector2();
        const dollyDelta = new Vector2();
        const dollyDirection = new Vector3();
        const mouse = new Vector2();
        let performCursorZoom = false;
        const pointers = [];
        const pointerPositions = {};
        function getAutoRotationAngle(deltaTime) {
          if (deltaTime !== null) {
            return 2 * Math.PI / 60 * scope.autoRotateSpeed * deltaTime;
          } else {
            return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
          }
        }
        function getZoomScale(delta) {
          const normalized_delta = Math.abs(delta) / (100 * (window.devicePixelRatio | 0));
          return Math.pow(0.95, scope.zoomSpeed * normalized_delta);
        }
        function rotateLeft(angle) {
          sphericalDelta.theta -= angle;
        }
        function rotateUp(angle) {
          sphericalDelta.phi -= angle;
        }
        const panLeft = function() {
          const v = new Vector3();
          return function panLeft2(distance, objectMatrix) {
            v.setFromMatrixColumn(objectMatrix, 0);
            v.multiplyScalar(-distance);
            panOffset.add(v);
          };
        }();
        const panUp = function() {
          const v = new Vector3();
          return function panUp2(distance, objectMatrix) {
            if (scope.screenSpacePanning === true) {
              v.setFromMatrixColumn(objectMatrix, 1);
            } else {
              v.setFromMatrixColumn(objectMatrix, 0);
              v.crossVectors(scope.object.up, v);
            }
            v.multiplyScalar(distance);
            panOffset.add(v);
          };
        }();
        const pan = function() {
          const offset = new Vector3();
          return function pan2(deltaX, deltaY) {
            const element = scope.domElement;
            if (scope.object.isPerspectiveCamera) {
              const position = scope.object.position;
              offset.copy(position).sub(scope.target);
              let targetDistance = offset.length();
              targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
              panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
              panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
            } else if (scope.object.isOrthographicCamera) {
              panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
              panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
            } else {
              console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
              scope.enablePan = false;
            }
          };
        }();
        function dollyOut(dollyScale) {
          if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) {
            scale /= dollyScale;
          } else {
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
            scope.enableZoom = false;
          }
        }
        function dollyIn(dollyScale) {
          if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) {
            scale *= dollyScale;
          } else {
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
            scope.enableZoom = false;
          }
        }
        function updateZoomParameters(x, y) {
          if (!scope.zoomToCursor) {
            return;
          }
          performCursorZoom = true;
          const rect = scope.domElement.getBoundingClientRect();
          const dx = x - rect.left;
          const dy = y - rect.top;
          const w = rect.width;
          const h = rect.height;
          mouse.x = dx / w * 2 - 1;
          mouse.y = -(dy / h) * 2 + 1;
          dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
        }
        function clampDistance(dist) {
          return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
        }
        function handleMouseDownRotate(event) {
          rotateStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownDolly(event) {
          updateZoomParameters(event.clientX, event.clientX);
          dollyStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownPan(event) {
          panStart.set(event.clientX, event.clientY);
        }
        function handleMouseMoveRotate(event) {
          rotateEnd.set(event.clientX, event.clientY);
          rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
          const element = scope.domElement;
          rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
          rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
          rotateStart.copy(rotateEnd);
          scope.update();
        }
        function handleMouseMoveDolly(event) {
          dollyEnd.set(event.clientX, event.clientY);
          dollyDelta.subVectors(dollyEnd, dollyStart);
          if (dollyDelta.y > 0) {
            dollyOut(getZoomScale(dollyDelta.y));
          } else if (dollyDelta.y < 0) {
            dollyIn(getZoomScale(dollyDelta.y));
          }
          dollyStart.copy(dollyEnd);
          scope.update();
        }
        function handleMouseMovePan(event) {
          panEnd.set(event.clientX, event.clientY);
          panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
          pan(panDelta.x, panDelta.y);
          panStart.copy(panEnd);
          scope.update();
        }
        function handleMouseWheel(event) {
          updateZoomParameters(event.clientX, event.clientY);
          if (event.deltaY < 0) {
            dollyIn(getZoomScale(event.deltaY));
          } else if (event.deltaY > 0) {
            dollyOut(getZoomScale(event.deltaY));
          }
          scope.update();
        }
        function handleKeyDown(event) {
          let needsUpdate = false;
          switch (event.code) {
            case scope.keys.UP:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                rotateUp(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
              } else {
                pan(0, scope.keyPanSpeed);
              }
              needsUpdate = true;
              break;
            case scope.keys.BOTTOM:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                rotateUp(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
              } else {
                pan(0, -scope.keyPanSpeed);
              }
              needsUpdate = true;
              break;
            case scope.keys.LEFT:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                rotateLeft(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
              } else {
                pan(scope.keyPanSpeed, 0);
              }
              needsUpdate = true;
              break;
            case scope.keys.RIGHT:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                rotateLeft(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
              } else {
                pan(-scope.keyPanSpeed, 0);
              }
              needsUpdate = true;
              break;
          }
          if (needsUpdate) {
            event.preventDefault();
            scope.update();
          }
        }
        function handleTouchStartRotate(event) {
          if (pointers.length === 1) {
            rotateStart.set(event.pageX, event.pageY);
          } else {
            const position = getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            rotateStart.set(x, y);
          }
        }
        function handleTouchStartPan(event) {
          if (pointers.length === 1) {
            panStart.set(event.pageX, event.pageY);
          } else {
            const position = getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            panStart.set(x, y);
          }
        }
        function handleTouchStartDolly(event) {
          const position = getSecondPointerPosition(event);
          const dx = event.pageX - position.x;
          const dy = event.pageY - position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          dollyStart.set(0, distance);
        }
        function handleTouchStartDollyPan(event) {
          if (scope.enableZoom) handleTouchStartDolly(event);
          if (scope.enablePan) handleTouchStartPan(event);
        }
        function handleTouchStartDollyRotate(event) {
          if (scope.enableZoom) handleTouchStartDolly(event);
          if (scope.enableRotate) handleTouchStartRotate(event);
        }
        function handleTouchMoveRotate(event) {
          if (pointers.length == 1) {
            rotateEnd.set(event.pageX, event.pageY);
          } else {
            const position = getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            rotateEnd.set(x, y);
          }
          rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
          const element = scope.domElement;
          rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
          rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
          rotateStart.copy(rotateEnd);
        }
        function handleTouchMovePan(event) {
          if (pointers.length === 1) {
            panEnd.set(event.pageX, event.pageY);
          } else {
            const position = getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            panEnd.set(x, y);
          }
          panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
          pan(panDelta.x, panDelta.y);
          panStart.copy(panEnd);
        }
        function handleTouchMoveDolly(event) {
          const position = getSecondPointerPosition(event);
          const dx = event.pageX - position.x;
          const dy = event.pageY - position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          dollyEnd.set(0, distance);
          dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
          dollyOut(dollyDelta.y);
          dollyStart.copy(dollyEnd);
          const centerX = (event.pageX + position.x) * 0.5;
          const centerY = (event.pageY + position.y) * 0.5;
          updateZoomParameters(centerX, centerY);
        }
        function handleTouchMoveDollyPan(event) {
          if (scope.enableZoom) handleTouchMoveDolly(event);
          if (scope.enablePan) handleTouchMovePan(event);
        }
        function handleTouchMoveDollyRotate(event) {
          if (scope.enableZoom) handleTouchMoveDolly(event);
          if (scope.enableRotate) handleTouchMoveRotate(event);
        }
        function onPointerDown(event) {
          if (scope.enabled === false) return;
          if (pointers.length === 0) {
            scope.domElement.setPointerCapture(event.pointerId);
            scope.domElement.addEventListener("pointermove", onPointerMove);
            scope.domElement.addEventListener("pointerup", onPointerUp);
          }
          addPointer(event);
          if (event.pointerType === "touch") {
            onTouchStart(event);
          } else {
            onMouseDown(event);
          }
        }
        function onPointerMove(event) {
          if (scope.enabled === false) return;
          if (event.pointerType === "touch") {
            onTouchMove(event);
          } else {
            onMouseMove(event);
          }
        }
        function onPointerUp(event) {
          removePointer(event);
          if (pointers.length === 0) {
            scope.domElement.releasePointerCapture(event.pointerId);
            scope.domElement.removeEventListener("pointermove", onPointerMove);
            scope.domElement.removeEventListener("pointerup", onPointerUp);
          }
          scope.dispatchEvent(_endEvent);
          state2 = STATE.NONE;
        }
        function onMouseDown(event) {
          let mouseAction;
          switch (event.button) {
            case 0:
              mouseAction = scope.mouseButtons.LEFT;
              break;
            case 1:
              mouseAction = scope.mouseButtons.MIDDLE;
              break;
            case 2:
              mouseAction = scope.mouseButtons.RIGHT;
              break;
            default:
              mouseAction = -1;
          }
          switch (mouseAction) {
            case MOUSE.DOLLY:
              if (scope.enableZoom === false) return;
              handleMouseDownDolly(event);
              state2 = STATE.DOLLY;
              break;
            case MOUSE.ROTATE:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                if (scope.enablePan === false) return;
                handleMouseDownPan(event);
                state2 = STATE.PAN;
              } else {
                if (scope.enableRotate === false) return;
                handleMouseDownRotate(event);
                state2 = STATE.ROTATE;
              }
              break;
            case MOUSE.PAN:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                if (scope.enableRotate === false) return;
                handleMouseDownRotate(event);
                state2 = STATE.ROTATE;
              } else {
                if (scope.enablePan === false) return;
                handleMouseDownPan(event);
                state2 = STATE.PAN;
              }
              break;
            default:
              state2 = STATE.NONE;
          }
          if (state2 !== STATE.NONE) {
            scope.dispatchEvent(_startEvent);
          }
        }
        function onMouseMove(event) {
          switch (state2) {
            case STATE.ROTATE:
              if (scope.enableRotate === false) return;
              handleMouseMoveRotate(event);
              break;
            case STATE.DOLLY:
              if (scope.enableZoom === false) return;
              handleMouseMoveDolly(event);
              break;
            case STATE.PAN:
              if (scope.enablePan === false) return;
              handleMouseMovePan(event);
              break;
          }
        }
        function onMouseWheel(event) {
          if (scope.enabled === false || scope.enableZoom === false || state2 !== STATE.NONE) return;
          event.preventDefault();
          scope.dispatchEvent(_startEvent);
          handleMouseWheel(event);
          scope.dispatchEvent(_endEvent);
        }
        function onKeyDown(event) {
          if (scope.enabled === false || scope.enablePan === false) return;
          handleKeyDown(event);
        }
        function onTouchStart(event) {
          trackPointer(event);
          switch (pointers.length) {
            case 1:
              switch (scope.touches.ONE) {
                case TOUCH.ROTATE:
                  if (scope.enableRotate === false) return;
                  handleTouchStartRotate(event);
                  state2 = STATE.TOUCH_ROTATE;
                  break;
                case TOUCH.PAN:
                  if (scope.enablePan === false) return;
                  handleTouchStartPan(event);
                  state2 = STATE.TOUCH_PAN;
                  break;
                default:
                  state2 = STATE.NONE;
              }
              break;
            case 2:
              switch (scope.touches.TWO) {
                case TOUCH.DOLLY_PAN:
                  if (scope.enableZoom === false && scope.enablePan === false) return;
                  handleTouchStartDollyPan(event);
                  state2 = STATE.TOUCH_DOLLY_PAN;
                  break;
                case TOUCH.DOLLY_ROTATE:
                  if (scope.enableZoom === false && scope.enableRotate === false) return;
                  handleTouchStartDollyRotate(event);
                  state2 = STATE.TOUCH_DOLLY_ROTATE;
                  break;
                default:
                  state2 = STATE.NONE;
              }
              break;
            default:
              state2 = STATE.NONE;
          }
          if (state2 !== STATE.NONE) {
            scope.dispatchEvent(_startEvent);
          }
        }
        function onTouchMove(event) {
          trackPointer(event);
          switch (state2) {
            case STATE.TOUCH_ROTATE:
              if (scope.enableRotate === false) return;
              handleTouchMoveRotate(event);
              scope.update();
              break;
            case STATE.TOUCH_PAN:
              if (scope.enablePan === false) return;
              handleTouchMovePan(event);
              scope.update();
              break;
            case STATE.TOUCH_DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false) return;
              handleTouchMoveDollyPan(event);
              scope.update();
              break;
            case STATE.TOUCH_DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false) return;
              handleTouchMoveDollyRotate(event);
              scope.update();
              break;
            default:
              state2 = STATE.NONE;
          }
        }
        function onContextMenu(event) {
          if (scope.enabled === false) return;
          event.preventDefault();
        }
        function addPointer(event) {
          pointers.push(event.pointerId);
        }
        function removePointer(event) {
          delete pointerPositions[event.pointerId];
          for (let i = 0; i < pointers.length; i++) {
            if (pointers[i] == event.pointerId) {
              pointers.splice(i, 1);
              return;
            }
          }
        }
        function trackPointer(event) {
          let position = pointerPositions[event.pointerId];
          if (position === void 0) {
            position = new Vector2();
            pointerPositions[event.pointerId] = position;
          }
          position.set(event.pageX, event.pageY);
        }
        function getSecondPointerPosition(event) {
          const pointerId = event.pointerId === pointers[0] ? pointers[1] : pointers[0];
          return pointerPositions[pointerId];
        }
        scope.domElement.addEventListener("contextmenu", onContextMenu);
        scope.domElement.addEventListener("pointerdown", onPointerDown);
        scope.domElement.addEventListener("pointercancel", onPointerUp);
        scope.domElement.addEventListener("wheel", onMouseWheel, { passive: false });
        this.update();
      }
    };
  }
});

// site/vendor/MapControls.js
import { MOUSE as MOUSE2, TOUCH as TOUCH2 } from "three";
var MapControls;
var init_MapControls = __esm({
  "site/vendor/MapControls.js"() {
    init_OrbitControls();
    MapControls = class extends OrbitControls {
      constructor(object, domElement) {
        super(object, domElement);
        this.screenSpacePanning = false;
        this.mouseButtons = { LEFT: MOUSE2.PAN, MIDDLE: MOUSE2.DOLLY, RIGHT: MOUSE2.ROTATE };
        this.touches = { ONE: TOUCH2.PAN, TWO: TOUCH2.DOLLY_ROTATE };
      }
    };
  }
});

// src/view3d.js
var view3d_exports = {};
__export(view3d_exports, {
  CLASSES: () => CLASSES,
  View3D: () => View3D
});
import * as THREE from "three";
var CLASSES, VERT, FRAG, View3D;
var init_view3d = __esm({
  "src/view3d.js"() {
    init_MapControls();
    init_util();
    THREE.ColorManagement.enabled = false;
    CLASSES = {
      1: ["Nicht klassiert", "#9aa3a6"],
      2: ["Boden", "#b48a4c"],
      3: ["Vegetation niedrig", "#a9c97a"],
      4: ["Vegetation mittel", "#6fa64e"],
      5: ["Vegetation hoch", "#3f7a3a"],
      6: ["Geb\xE4ude", "#c4553f"],
      7: ["Rauschen", "#ff00ff"],
      9: ["Wasser", "#3d8fd1"],
      11: ["Strasse", "#6b6b6b"],
      13: ["Leitungsschutz", "#e0b400"],
      14: ["Leiter", "#e0b400"],
      15: ["Mast", "#8a6d3b"],
      17: ["Br\xFCcke", "#d68f2b"],
      18: ["Rauschen hoch", "#ff00ff"]
    };
    VERT = /* glsl */
    `
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
    FRAG = /* glsl */
    `
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
    View3D = class {
      constructor(container, data, { onPick, onStats }) {
        this.data = data;
        this.onPick = onPick;
        this.onStats = onStats || (() => {
        });
        this.origin = data.meta.origin;
        this.ex = 2;
        const wl0s = Object.values(data.profiles).flatMap((p) => p ? p.profiles.map((x) => x.wl0) : []).filter((v) => v != null);
        this.baseZ = wl0s.length ? Math.min(...wl0s) - 5 : 400;
        const renderer = this.renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
        container.appendChild(renderer.domElement);
        this.container = container;
        const scene = this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, 1, 5, 6e4);
        this.controls = new MapControls(this.camera, renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.maxPolarAngle = Math.PI * 0.49;
        this.controls.addEventListener("change", () => this.requestRender(true));
        this.palette = new Uint8Array(256 * 4);
        this.palTex = new THREE.DataTexture(this.palette, 256, 1, THREE.RGBAFormat);
        this.hidden = /* @__PURE__ */ new Set([7, 18]);
        this.buildPalette();
        this.shared = {
          uBaseZ: { value: this.baseZ },
          uEx: { value: this.ex },
          uSize: { value: 1 },
          uProj: { value: 800 },
          uMode: { value: 0 },
          uPal: { value: this.palTex },
          uZRange: { value: new THREE.Vector2(0, 1) }
        };
        this.tiles = [];
        this.classCounts = {};
        this.budget = (window.LINTH_CONFIG || {}).pointBudget || 8e6;
        this.loading = 0;
        if (data.pc) this.initTiles(data.pc);
        this.water = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({
          color: new THREE.Color(cssVar("--water")),
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide,
          depthWrite: false
        }));
        this.water.renderOrder = 2;
        scene.add(this.water);
        this.selLine = new THREE.Group();
        scene.add(this.selLine);
        this.axisLines = new THREE.Group();
        scene.add(this.axisLines);
        this.buildAxis();
        renderer.domElement.addEventListener("pointerdown", (e) => {
          this.down = [e.clientX, e.clientY];
        });
        renderer.domElement.addEventListener("pointerup", (e) => {
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
          const hex = CLASSES[c]?.[1] || "#8f9799";
          const col = new THREE.Color(hex);
          this.palette.set([col.r * 255, col.g * 255, col.b * 255, this.hidden.has(c) ? 0 : 255], c * 4);
        }
        this.palTex.needsUpdate = true;
        this.requestRender();
      }
      setClassVisible(c, visible) {
        if (visible) this.hidden.delete(c);
        else this.hidden.add(c);
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
            levels: t.counts.map(() => ({ state: "none", obj: null }))
          });
        }
        this.shared.uZRange.value.set(this.baseZ, Math.min(zmax, this.baseZ + 40));
        this.pcLevels = pc.levels;
      }
      tileCenter(t) {
        return this.toWorld(t.min[0] + t.size[0] / 2, t.min[1] + t.size[1] / 2, t.min[2] + t.size[2] / 4);
      }
      async loadLevel(t, L2) {
        const lv = t.levels[L2];
        lv.state = "loading";
        this.loading++;
        try {
          const r = await fetch(`data/pc/${t.id}_L${L2}.bin`);
          if (!r.ok) throw new Error(r.status);
          const buf = await r.arrayBuffer();
          const n = t.counts[L2];
          const pos = new Uint16Array(buf, 0, n * 3);
          const rgb = new Uint8Array(buf, n * 6, n * 3);
          const cls = new Uint8Array(buf, n * 9, n);
          const inten = new Uint16Array(buf, n * 10, n);
          const g = new THREE.BufferGeometry();
          g.setAttribute("position", new THREE.BufferAttribute(pos, 3, true));
          g.setAttribute("rgb", new THREE.BufferAttribute(rgb, 3, true));
          g.setAttribute("cls", new THREE.BufferAttribute(cls, 1, false));
          g.setAttribute("inten", new THREE.BufferAttribute(inten, 1, true));
          g.boundingSphere = new THREE.Sphere(this.tileCenter(t), Math.hypot(t.size[0], t.size[1]));
          for (let i = 0; i < n; i++) this.classCounts[cls[i]] = (this.classCounts[cls[i]] || 0) + 1;
          const mat = new THREE.ShaderMaterial({
            vertexShader: VERT,
            fragmentShader: FRAG,
            uniforms: {
              ...this.shared,
              uTileMin: { value: new THREE.Vector3(t.min[0] - this.origin[0], t.min[1] - this.origin[1], t.min[2]) },
              uTileSize: { value: new THREE.Vector3(...t.size) },
              uSpacing: { value: this.pcLevels[L2] },
              uInt: { value: new THREE.Vector2(t.int[0] / 65535, t.int[1] / 65535) }
            }
          });
          const obj = new THREE.Points(g, mat);
          obj.frustumCulled = true;
          if (lv.state === "loading") {
            lv.obj = obj;
            lv.state = "ready";
            this.scene.add(obj);
          } else {
            g.dispose();
            mat.dispose();
          }
        } catch (e) {
          lv.state = "error";
        } finally {
          this.loading--;
          this.requestRender(true);
        }
      }
      unloadLevel(t, L2) {
        const lv = t.levels[L2];
        if (lv.obj) {
          this.scene.remove(lv.obj);
          lv.obj.geometry.dispose();
          lv.obj.material.dispose();
        }
        lv.obj = null;
        lv.state = "none";
      }
      updateLod() {
        if (!this.tiles.length) return;
        const cam = this.camera.position;
        const frustum = new THREE.Frustum().setFromProjectionMatrix(
          new THREE.Matrix4().multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse)
        );
        const scale = (this.data.pc.subtile || 250) / 250;
        const reach = [Infinity, 3200, 1500, 650].map((d) => d * scale);
        const wants = [];
        let loaded = 0;
        for (const t of this.tiles) {
          t.center || (t.center = this.tileCenter(t));
          const d = cam.distanceTo(t.center);
          const vis = frustum.intersectsSphere(new THREE.Sphere(t.center, 260 * scale));
          t.levels.forEach((lv, L2) => {
            const want = L2 === 0 || vis && d < reach[Math.min(L2, reach.length - 1)];
            if (want) wants.push({ t, L: L2, d: L2 === 0 ? -1 : d, n: t.counts[L2] });
            else if (lv.state === "ready" && d > reach[Math.min(L2, reach.length - 1)] * 1.4) this.unloadLevel(t, L2);
            if (lv.state === "ready") loaded += t.counts[L2];
          });
        }
        wants.sort((a, b) => a.L - b.L || a.d - b.d);
        let planned = 0;
        for (const w of wants) {
          planned += w.n;
          if (planned > this.budget) break;
          const lv = w.t.levels[w.L];
          if (lv.state === "none" && this.loading < 6) this.loadLevel(w.t, w.L);
        }
        this.onStats({ loaded, loading: this.loading, classes: this.classCounts });
      }
      // ---------------------------------------------------------- Achsen, Wasser, Auswahl
      buildAxis() {
        const mat = new THREE.LineBasicMaterial({ color: new THREE.Color(cssVar("--water")) });
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
            if (!s.wet) {
              prev = -1;
              return;
            }
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
        g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
        g.setIndex(idx);
        this.water.geometry.dispose();
        this.water.geometry = g;
        this.requestRender();
      }
      setSelection(reach, index, state2) {
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
        const col = new THREE.Color(cssVar("--accent"));
        this.selLine.add(new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: col, depthTest: false })
        ));
        if (state2?.wet) {
          const a = this.toWorld(p.c[0] + state2.oL * p.n[0], p.c[1] + state2.oL * p.n[1], state2.wse);
          const b = this.toWorld(p.c[0] + state2.oR * p.n[0], p.c[1] + state2.oR * p.n[1], state2.wse);
          this.selLine.add(new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([a, b]),
            new THREE.LineBasicMaterial({ color: new THREE.Color(cssVar("--water")), depthTest: false })
          ));
        }
        this.selLine.renderOrder = 5;
        this.requestRender();
      }
      focusProfile(reach, index) {
        const p = this.data.profiles[reach]?.profiles[index];
        if (!p) return;
        const target = this.toWorld(p.c[0], p.c[1], p.wl0 ?? this.baseZ);
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
        const ndc = new THREE.Vector2((e.clientX - rect.left) / rect.width * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
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
            if (d < bd) {
              bd = d;
              best = [r.id, i];
            }
          });
        }
        if (best) this.onPick(...best);
      }
      // ---------------------------------------------------------- Einstellungen
      setMode(m) {
        this.shared.uMode.value = m;
        this.requestRender();
      }
      setPointSize(s) {
        this.shared.uSize.value = s;
        this.requestRender();
      }
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
        this.renderer.domElement.style.width = "100%";
        this.renderer.domElement.style.height = "100%";
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.shared.uProj.value = h * this.renderer.getPixelRatio() / (2 * Math.tan(this.camera.fov * Math.PI / 360));
        this.requestRender(true);
      }
      requestRender(lod = false) {
        this.dirty = true;
        if (lod) this.lodDirty = true;
      }
      setActive(a) {
        this.active = a;
        if (a) {
          this.resize();
          this.requestRender(true);
        }
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
          this.renderer.setClearColor(new THREE.Color(cssVar("--viewport")));
          this.renderer.render(this.scene, this.camera);
        }
      }
    };
  }
});

// src/charts.js
init_util();
function drawSpark(canvas, series, t, range, opts = {}) {
  const { ctx, w, h } = setupCanvas(canvas);
  const [t0, t1] = range;
  const data = (series || []).filter((p) => p.t >= t0 && p.t <= t1);
  const color = opts.color || cssVar("--water");
  ctx.strokeStyle = cssVar("--grid");
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, h - 0.5);
  ctx.lineTo(w, h - 0.5);
  ctx.stroke();
  if (!data.length) {
    ctx.fillStyle = cssVar("--ink-soft");
    ctx.font = font(10);
    ctx.textBaseline = "middle";
    ctx.fillText("keine Daten im Zeitraum", 4, h / 2);
    return;
  }
  const X = (tt) => (tt - t0) / (t1 - t0) * w;
  if (opts.kind === "bars") {
    const vmax = Math.max(2, ...data.map((p) => p.v));
    const bw = Math.max(1, w / ((t1 - t0) / 36e5) - 0.5);
    ctx.fillStyle = color;
    for (const p of data) {
      const bh = p.v / vmax * (h - 4);
      ctx.fillRect(X(p.t) - bw, h - bh, bw, bh);
    }
    ctx.fillStyle = cssVar("--ink-soft");
    ctx.font = font(10);
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText(`max ${fmt(vmax, 1)} mm/h`, w - 2, 1);
  } else {
    let vmin = Infinity, vmax = -Infinity;
    for (const p of data) {
      vmin = Math.min(vmin, p.v);
      vmax = Math.max(vmax, p.v);
    }
    const r = Math.max(opts.minRange || 0.2, vmax - vmin);
    const mid = (vmin + vmax) / 2;
    vmin = mid - r * 0.6;
    vmax = mid + r * 0.6;
    const Y = (v) => h - 2 - (v - vmin) / (vmax - vmin) * (h - 4);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    let prev = null;
    for (const p of data) {
      const x = X(p.t), y = Y(p.v);
      if (prev && p.t - prev.t > 3 * 36e5) ctx.moveTo(x, y);
      else if (prev) ctx.lineTo(x, y);
      else ctx.moveTo(x, y);
      prev = p;
    }
    ctx.stroke();
  }
  if (t >= t0 && t <= t1) {
    ctx.strokeStyle = cssVar("--accent");
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(X(t), 0);
    ctx.lineTo(X(t), h);
    ctx.stroke();
  }
}

// src/data.js
init_util();
var CFG = window.LINTH_CONFIG || {};
async function getJson(url) {
  const r = await fetch(url, { cache: "no-cache" });
  if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
  return r.json();
}
async function loadStatic() {
  const meta = await getJson("data/meta.json");
  const [axis, stations, pc, ...profs] = await Promise.all([
    getJson("data/axis.json"),
    getJson("data/stations.json").catch(() => ({ stations: [] })),
    getJson("data/pc/index.json").catch(() => null),
    ...meta.reaches.map((r) => getJson(`data/profiles_${r.id}.json`).catch(() => null))
  ]);
  const profiles = {};
  meta.reaches.forEach((r, i) => {
    profiles[r.id] = profs[i];
  });
  return { meta, axis, stations: stations.stations || [], profiles, pc };
}
var iso = (t) => new Date(t).toISOString().replace(/\.\d{3}Z$/, "Z");
async function bafu(query) {
  const r = await fetch(CFG.bafuApi || "https://data.bafu.admin.ch/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
  if (!r.ok) throw new Error(`BAFU-Schnittstelle: HTTP ${r.status}`);
  const js = await r.json();
  if (js.errors) throw new Error("BAFU-Schnittstelle: " + js.errors.map((e) => e.message).join("; "));
  return js.data;
}
function push(store, no, p, t, v) {
  if (v == null || !Number.isFinite(v)) return;
  const s = store[no] || (store[no] = {});
  (s[p] || (s[p] = [])).push({ t, v });
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
async function loadHydroHistory(stationNos, days) {
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
        push(store, String(row.station.no), row.parameterName, Date.parse(row.timestamp) + HOUR / 2, row.value);
      }
    }));
  }
  await Promise.all(jobs);
  return sortStore(store);
}
async function loadHydroLive(stationNos) {
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
function mergeHydro(history, live) {
  const out = {};
  const nos = /* @__PURE__ */ new Set([...Object.keys(history), ...Object.keys(live)]);
  for (const no of nos) {
    out[no] = {};
    for (const p of ["W", "Q"]) {
      const h = history[no]?.[p] || [];
      const l = live[no]?.[p] || [];
      const lastH = h.length ? h[h.length - 1].t : -Infinity;
      out[no][p] = h.concat(l.filter((x) => x.t > lastH));
    }
  }
  return out;
}
function meteoUrls() {
  const urls = [];
  if (CFG.meteoUrl) urls.push(CFG.meteoUrl);
  const host = location.hostname;
  if (host.endsWith(".github.io")) {
    const owner = host.split(".")[0];
    const repo = location.pathname.split("/").filter(Boolean)[0] || `${owner}.github.io`;
    urls.push(`https://raw.githubusercontent.com/${owner}/${repo}/live-data/meteo.json`);
  }
  urls.push("live/meteo.json");
  return urls;
}
async function loadMeteo() {
  for (const url of meteoUrls()) {
    try {
      const js = await getJson(`${url}${url.includes("?") ? "&" : "?"}v=${Math.floor(Date.now() / 3e5)}`);
      for (const st of js.stations || []) {
        const p = st.precip_h;
        const t0 = Date.parse(p.start);
        st.series = p.values.map((v, i) => ({ t: t0 + (i + 1) * p.step_s * 1e3, v })).filter((x) => x.v != null);
      }
      return { ...js, url };
    } catch (e) {
    }
  }
  return null;
}
function demoHydro(stations, days) {
  const store = {};
  const end = Math.floor(Date.now() / HOUR) * HOUR;
  const start = end - days * 24 * HOUR;
  const peak = end - 40 * HOUR;
  for (const st of stations) {
    const s0 = st.reaches[0]?.s || 0;
    const lag = s0 / 1e3 * 0.6 * HOUR;
    const base = st.demo_base ?? 420;
    for (let t = start; t <= end; t += HOUR) {
      const x = (t - peak - lag) / (14 * HOUR);
      const wave = Math.exp(-x * x);
      const daily = 0.05 * Math.sin(t / HOUR * Math.PI / 12);
      push(store, st.no, "W", t, base + 2.6 * wave + daily);
      push(store, st.no, "Q", t, 60 + 420 * wave + 5 * daily);
    }
  }
  return sortStore(store);
}
function demoMeteo(meta) {
  const end = Math.floor(Date.now() / HOUR) * HOUR;
  const peak = end - 52 * HOUR;
  const [e, n] = meta.origin;
  const names = [["DEM", "Demo Glarus", 2e3, -6e3], ["DEW", "Demo Weesen", 1500, 2500], ["DES", "Demo Sch\xE4nis", -1500, 5e3]];
  const stations = names.map(([abbr, name, de, dn], k) => {
    const series = [];
    for (let t = end - 30 * 24 * HOUR; t <= end; t += HOUR) {
      const x = (t - peak) / (10 * HOUR);
      const v = Math.max(0, 9 * Math.exp(-x * x) * (1 + 0.3 * Math.sin(t / HOUR + k)) - 0.4);
      series.push({ t, v: Math.round(v * 10) / 10 });
    }
    return { abbr, name, e: e + de, n: n + dn, series, demo: true };
  });
  return { generated: (/* @__PURE__ */ new Date()).toISOString(), stations, url: "demo" };
}

// src/longprofile.js
init_util();
function drawLongProfile(canvas, prof, wl, stations, reachId, selIndex) {
  const { ctx, w, h } = setupCanvas(canvas);
  if (!prof || !wl) return () => null;
  const C = {
    ink: cssVar("--ink"),
    soft: cssVar("--ink-soft"),
    grid: cssVar("--grid"),
    earth: cssVar("--earth"),
    water: cssVar("--water"),
    waterFill: cssVar("--water-fill"),
    bed: cssVar("--bed"),
    over: cssVar("--over"),
    sel: cssVar("--accent")
  };
  const P = prof.profiles;
  const smax = P[P.length - 1].s || 1;
  const crestL = wl.states.map((s) => s.crestL?.z ?? null);
  const crestR = wl.states.map((s) => s.crestR?.z ?? null);
  const bed = P.map((p) => p.svy ? Math.min(...p.svy.z) : null);
  let zmin = Infinity, zmax = -Infinity;
  const take = (v) => {
    if (v != null && Number.isFinite(v)) {
      zmin = Math.min(zmin, v);
      zmax = Math.max(zmax, v);
    }
  };
  P.forEach((p, i) => {
    take(p.wl0);
    take(wl.wse[i]);
    take(crestL[i]);
    take(crestR[i]);
    take(bed[i]);
  });
  if (!Number.isFinite(zmin)) return () => null;
  const zr = Math.max(3, zmax - zmin);
  zmin -= zr * 0.08;
  zmax += zr * 0.1;
  const pad = { l: 58, r: 16, t: 14, b: 26 };
  const X = (s) => pad.l + s / smax * (w - pad.l - pad.r);
  const Z = (z) => h - pad.b - (z - zmin) / (zmax - zmin) * (h - pad.t - pad.b);
  ctx.font = font(11);
  ctx.strokeStyle = C.grid;
  ctx.fillStyle = C.soft;
  ctx.lineWidth = 1;
  const zs = niceStep(zmax - zmin, 4);
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let z = Math.ceil(zmin / zs) * zs; z <= zmax; z += zs) {
    ctx.beginPath();
    ctx.moveTo(pad.l, Z(z));
    ctx.lineTo(w - pad.r, Z(z));
    ctx.stroke();
    ctx.fillText(fmt(z, zs < 1 ? 1 : 0), pad.l - 6, Z(z));
  }
  const ks = niceStep(smax / 1e3, 8);
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (let k = 0; k <= smax / 1e3 + 1e-6; k += ks) {
    ctx.beginPath();
    ctx.moveTo(X(k * 1e3), pad.t);
    ctx.lineTo(X(k * 1e3), h - pad.b);
    ctx.stroke();
    ctx.fillText(`km ${fmt(k, ks < 1 ? 1 : 0)}`, X(k * 1e3), h - pad.b + 5);
  }
  const line = (vals, color, width, dash) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash(dash || []);
    ctx.beginPath();
    let pen = false;
    vals.forEach((v, i) => {
      if (v == null) {
        pen = false;
        return;
      }
      const x = X(P[i].s), y = Z(v);
      pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      pen = true;
    });
    ctx.stroke();
    ctx.setLineDash([]);
  };
  ctx.fillStyle = C.waterFill;
  ctx.beginPath();
  P.forEach((p, i) => {
    const v = wl.wse[i] ?? p.wl0;
    i ? ctx.lineTo(X(p.s), Z(v)) : ctx.moveTo(X(p.s), Z(v));
  });
  for (let i = P.length - 1; i >= 0; i--) {
    const v = wl.wse[i] ?? P[i].wl0;
    ctx.lineTo(X(P[i].s), Z(Math.min(P[i].wl0 ?? v, v)));
  }
  ctx.closePath();
  ctx.fill();
  line(crestL, C.earth, 1.2);
  line(crestR, C.earth, 1.2, [6, 3]);
  line(bed, C.bed, 1.2, [3, 3]);
  line(P.map((p) => p.wl0), C.soft, 1, [2, 4]);
  line(wl.wse, C.water, 2);
  ctx.fillStyle = C.over;
  wl.states.forEach((s, i) => {
    if (s.wet && s.freeboard != null && s.freeboard < 0.3) ctx.fillRect(X(P[i].s) - 1.5, h - pad.b - 5, 3, 5);
  });
  ctx.font = font(11, 600);
  for (const st of stations) {
    const hit = st.reaches.find((r) => r.reach === reachId);
    if (!hit) continue;
    const a = wl.anchors.find((x2) => x2.no === st.no);
    const x = X(hit.s);
    ctx.strokeStyle = C.ink;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, pad.t);
    ctx.lineTo(x, pad.t + 8);
    ctx.stroke();
    if (a) {
      ctx.fillStyle = C.water;
      ctx.beginPath();
      ctx.arc(x, Z(a.w), 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = C.ink;
    ctx.textAlign = hit.s < smax * 0.1 ? "left" : hit.s > smax * 0.9 ? "right" : "center";
    ctx.textBaseline = "top";
    ctx.fillText(st.name || st.no, x, pad.t + 10);
  }
  if (selIndex != null && P[selIndex]) {
    const x = X(P[selIndex].s);
    ctx.strokeStyle = C.sel;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, pad.t);
    ctx.lineTo(x, h - pad.b);
    ctx.stroke();
  }
  return (px) => {
    const s = (px - pad.l) / (w - pad.l - pad.r) * smax;
    let best = 0, bd = Infinity;
    P.forEach((p, i) => {
      const d = Math.abs(p.s - s);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    return best;
  };
}

// src/map2d.js
init_util();

// src/water.js
init_util();
function reachWaterline(reachId, prof, stations, hydro, t) {
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
function crest(g, start, dir) {
  let best = null;
  let bi = -1;
  for (let i = start; i >= 0 && i < g.length; i += dir) {
    const v = g[i];
    if (v == null) continue;
    if (best == null || v > best) {
      best = v;
      bi = i;
    } else if (v < best - 0.4) break;
  }
  return bi >= 0 ? { i: bi, z: best } : null;
}
function sectionState(prof, p, wse) {
  const g = p.dtm;
  const o0 = prof.offset0, step = prof.step;
  const n = g.length;
  let c = Math.round((p.ch - o0) / step);
  c = Math.max(0, Math.min(n - 1, c));
  if (wse == null) return { wet: false };
  const extent = (lim) => {
    let L3 = c, R2 = c;
    while (L3 > 0 && (g[L3 - 1] == null || g[L3 - 1] < lim)) L3--;
    while (R2 < n - 1 && (g[R2 + 1] == null || g[R2 + 1] < lim)) R2++;
    return [L3, R2];
  };
  const [L2, R] = extent(wse + 0.1);
  const [L0, R0] = extent(Math.min(wse, p.wl0 ?? wse) + 0.1);
  const cl = crest(g, L0 - 1, -1);
  const cr = crest(g, R0 + 1, 1);
  const edge = L2 === 0 || R === n - 1;
  const crests = [cl?.z, cr?.z].filter((v) => v != null);
  const freeboard = crests.length ? Math.min(...crests) - wse : null;
  let zmin = Infinity;
  for (let i = L2; i <= R; i++) if (g[i] != null && g[i] < zmin) zmin = g[i];
  return {
    wet: true,
    wse,
    c,
    L: L2,
    R,
    oL: o0 + (L2 - 0.5) * step,
    oR: o0 + (R + 0.5) * step,
    width: (R - L2 + 1) * step,
    crestL: cl,
    crestR: cr,
    freeboard: edge && (freeboard == null || freeboard >= 0) ? -0.01 : freeboard,
    edge,
    depth: Number.isFinite(zmin) ? wse - zmin : null
  };
}
function freeboardClass(st) {
  if (!st || !st.wet) return "dry";
  if (st.edge || st.freeboard != null && st.freeboard < 0) return "over";
  if (st.freeboard == null) return "unknown";
  if (st.freeboard < 0.3) return "crit";
  if (st.freeboard < 1) return "warn";
  return "ok";
}
function computeAll(data, hydro, t) {
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

// src/map2d.js
var WMTS = (layer, fmt2 = "jpeg") => `https://wmts.geo.admin.ch/1.0.0/${layer}/default/current/3857/{z}/{x}/{y}.${fmt2}`;
var CLASS_COLOR = () => ({
  ok: cssVar("--fb-ok"),
  warn: cssVar("--fb-warn"),
  crit: cssVar("--fb-crit"),
  over: cssVar("--over"),
  unknown: cssVar("--ink-soft"),
  dry: cssVar("--ink-soft")
});
var Map2D = class {
  constructor(el2, data, { onSelect }) {
    this.data = data;
    this.onSelect = onSelect;
    const map = this.map = L.map(el2, { zoomControl: true, attributionControl: true, preferCanvas: true });
    const attr = '\xA9 <a href="https://www.swisstopo.admin.ch" target="_blank" rel="noopener">swisstopo</a>';
    const bases = {
      Luftbild: L.tileLayer(WMTS("ch.swisstopo.swissimage"), { maxZoom: 20, maxNativeZoom: 19, attribution: attr }),
      Landeskarte: L.tileLayer(WMTS("ch.swisstopo.pixelkarte-farbe"), { maxZoom: 20, maxNativeZoom: 18, attribution: attr }),
      "Landeskarte grau": L.tileLayer(WMTS("ch.swisstopo.pixelkarte-grau"), { maxZoom: 20, maxNativeZoom: 18, attribution: attr })
    };
    bases.Luftbild.addTo(map);
    const hillshade = L.tileLayer(
      WMTS("ch.swisstopo.swissalti3d-reliefschattierung", "png"),
      { maxZoom: 20, maxNativeZoom: 18, opacity: 0.45, attribution: attr }
    );
    L.control.layers(bases, { "Relief (swissALTI3D)": hillshade }, { position: "topright" }).addTo(map);
    this.layers = {
      flood: L.layerGroup().addTo(map),
      axis: L.layerGroup().addTo(map),
      ticks: L.layerGroup().addTo(map),
      sel: L.layerGroup().addTo(map),
      stations: L.layerGroup().addTo(map),
      meteo: L.layerGroup().addTo(map)
    };
    const ll = (e, n) => lv95ToWgs84(e, n);
    for (const r of data.axis.reaches) {
      L.polyline(r.coords.map(([e, n]) => ll(e, n)), { color: cssVar("--water"), weight: 2, opacity: 0.9 }).addTo(this.layers.axis);
    }
    this.ticks = {};
    for (const r of data.meta.reaches) {
      const prof = data.profiles[r.id];
      if (!prof) continue;
      this.ticks[r.id] = prof.profiles.map((p, i) => {
        const a = this.profPoint(p, p.ch - 45), b2 = this.profPoint(p, p.ch + 45);
        const line = L.polyline([a, b2], { weight: 3, opacity: 0.9, color: cssVar("--ink-soft") });
        line.on("click", () => this.onSelect(r.id, i));
        line.addTo(this.layers.ticks);
        return line;
      });
    }
    this.stationMarkers = data.stations.map((st) => {
      const m = L.circleMarker(ll(st.e, st.n), {
        radius: 6,
        weight: 2,
        color: cssVar("--paper"),
        fillColor: cssVar("--water"),
        fillOpacity: 1
      }).addTo(this.layers.stations);
      m.bindTooltip("", { permanent: true, direction: "right", className: "map-label", offset: [8, 0] });
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
        radius: 4,
        weight: 1.5,
        color: cssVar("--rain"),
        fillColor: cssVar("--rain"),
        fillOpacity: 0.35
      }).addTo(this.layers.meteo);
      m.bindTooltip("", { direction: "top", className: "map-label" });
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
      let left = [], right = [];
      const flush = () => {
        if (left.length > 1) {
          L.polygon(left.concat(right.reverse()), {
            stroke: false,
            fillColor: cssVar("--water"),
            fillOpacity: 0.45,
            interactive: false
          }).addTo(this.layers.flood);
        }
        left = [];
        right = [];
      };
      prof.profiles.forEach((p, i) => {
        const s = wl.states[i];
        const tick = this.ticks[r.id][i];
        tick.setStyle({ color: colors[freeboardClass(s)] });
        if (!s.wet) {
          flush();
          return;
        }
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
        L.polyline([a, b], { color: cssVar("--accent"), weight: 3, dashArray: "6 4" }).addTo(this.layers.sel);
      }
    }
    for (const { st, m } of this.stationMarkers) {
      const w = valueAt(hydro[st.no]?.W, t);
      const q = valueAt(hydro[st.no]?.Q, t);
      const parts = [st.name || st.no];
      if (w != null) parts.push(`${fmt(w, 2)} ${st.params?.W?.unit || "m"}`);
      if (q != null) parts.push(`${fmt(q, q < 10 ? 1 : 0)} m\xB3/s`);
      m.setTooltipContent(parts.join("<br>"));
      m.setStyle({ fillOpacity: w != null || q != null ? 1 : 0.3 });
    }
    for (const { st, m } of this.meteoMarkers) {
      const v = valueAt(st.series, t, 2 * 36e5) || 0;
      m.setRadius(4 + Math.min(18, v * 2.2));
      m.setTooltipContent(`${st.name}<br>${fmt(v, 1)} mm/h`);
    }
  }
  flyToProfile(reach, index) {
    const p = this.data.profiles[reach]?.profiles[index];
    if (p) this.map.panTo(lv95ToWgs84(p.c[0], p.c[1]));
  }
  invalidate() {
    this.map.invalidateSize();
  }
};

// src/section.js
init_util();
function drawSection(canvas, prof, p, st, opts = {}) {
  const { ctx, w, h } = setupCanvas(canvas);
  if (!prof || !p) return;
  const C = {
    ink: cssVar("--ink"),
    soft: cssVar("--ink-soft"),
    grid: cssVar("--grid"),
    earth: cssVar("--earth"),
    earthFill: cssVar("--earth-fill"),
    veg: cssVar("--veg"),
    water: cssVar("--water"),
    waterFill: cssVar("--water-fill"),
    bed: cssVar("--bed"),
    warn: cssVar("--warn"),
    over: cssVar("--over"),
    paper: cssVar("--panel")
  };
  const o0 = prof.offset0, step = prof.step;
  const g = p.dtm, s = p.dsm;
  const off = (i) => o0 + i * step;
  let xmin = o0, xmax = o0 + (g.length - 1) * step;
  if (opts.zoom === "channel") {
    const span = st?.wet ? Math.max(80, (st.oR - st.oL) / 2 + 60) : 120;
    const mid = st?.wet ? (st.oL + st.oR) / 2 : p.ch;
    xmin = Math.max(xmin, mid - span);
    xmax = Math.min(xmax, mid + span);
  }
  let zmin = Infinity, zmax = -Infinity;
  const inX = (o) => o >= xmin && o <= xmax;
  g.forEach((v, i) => {
    if (v != null && inX(off(i))) {
      zmin = Math.min(zmin, v);
      zmax = Math.max(zmax, v);
    }
  });
  if (opts.showDsm !== false) s.forEach((v, i) => {
    if (v != null && inX(off(i))) zmax = Math.max(zmax, Math.min(v, zmin + 40));
  });
  if (p.svy) p.svy.z.forEach((v, k) => {
    if (inX(p.svy.o[k])) zmin = Math.min(zmin, v);
  });
  if (st?.wse != null) {
    zmin = Math.min(zmin, st.wse - 1);
    zmax = Math.max(zmax, st.wse + 0.5);
  }
  if (!Number.isFinite(zmin)) return;
  const zr = Math.max(4, zmax - zmin);
  zmin -= zr * 0.08;
  zmax += zr * 0.12;
  const pad = { l: 58, r: 16, t: 18, b: 30 };
  const X = (o) => pad.l + (o - xmin) / (xmax - xmin) * (w - pad.l - pad.r);
  const Z = (z) => h - pad.b - (z - zmin) / (zmax - zmin) * (h - pad.t - pad.b);
  ctx.font = font(11);
  ctx.fillStyle = C.soft;
  ctx.strokeStyle = C.grid;
  ctx.lineWidth = 1;
  const zs = niceStep(zmax - zmin, 5);
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let z = Math.ceil(zmin / zs) * zs; z <= zmax; z += zs) {
    ctx.beginPath();
    ctx.moveTo(pad.l, Z(z));
    ctx.lineTo(w - pad.r, Z(z));
    ctx.stroke();
    ctx.fillText(fmt(z, zs < 1 ? 1 : 0), pad.l - 6, Z(z));
  }
  const xs = niceStep(xmax - xmin, 8);
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (let o = Math.ceil(xmin / xs) * xs; o <= xmax; o += xs) {
    ctx.beginPath();
    ctx.moveTo(X(o), pad.t);
    ctx.lineTo(X(o), h - pad.b);
    ctx.stroke();
    ctx.fillText(`${o > 0 ? "+" : ""}${Math.round(o)}`, X(o), h - pad.b + 6);
  }
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText("linkes Ufer", pad.l + 6, pad.t + 4);
  ctx.textAlign = "right";
  ctx.fillText("rechtes Ufer", w - pad.r - 6, pad.t + 4);
  const visible = [];
  g.forEach((v, i) => {
    const o = off(i);
    if (o >= xmin - step && o <= xmax + step) visible.push(i);
  });
  if (st?.wet) {
    ctx.fillStyle = C.waterFill;
    ctx.beginPath();
    let started = false;
    for (let i = st.L; i <= st.R; i++) {
      const o = off(i);
      if (o < xmin || o > xmax) continue;
      const gz = Math.min(g[i] ?? st.wse, st.wse);
      if (!started) {
        ctx.moveTo(X(o), Z(st.wse));
        started = true;
      }
      ctx.lineTo(X(o), Z(gz));
    }
    if (started) {
      ctx.lineTo(X(Math.min(xmax, off(st.R))), Z(st.wse));
      ctx.closePath();
      ctx.fill();
    }
  }
  if (opts.showDsm !== false) {
    ctx.strokeStyle = C.veg;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    let pen = false;
    for (const i of visible) {
      const v = s[i], gv = g[i];
      if (v == null || gv == null || v - gv < 0.5) {
        pen = false;
        continue;
      }
      if (!pen) {
        ctx.moveTo(X(off(i)), Z(v));
        pen = true;
      } else ctx.lineTo(X(off(i)), Z(v));
    }
    ctx.stroke();
  }
  const pts = visible.filter((i) => g[i] != null);
  if (pts.length) {
    ctx.beginPath();
    ctx.moveTo(X(off(pts[0])), h - pad.b);
    for (const i of pts) ctx.lineTo(X(off(i)), Z(g[i]));
    ctx.lineTo(X(off(pts[pts.length - 1])), h - pad.b);
    ctx.closePath();
    ctx.fillStyle = C.earthFill;
    ctx.fill();
  }
  ctx.beginPath();
  let first = true;
  for (const i of visible) {
    if (g[i] == null) {
      first = true;
      continue;
    }
    if (first) {
      ctx.moveTo(X(off(i)), Z(g[i]));
      first = false;
    } else ctx.lineTo(X(off(i)), Z(g[i]));
  }
  ctx.strokeStyle = C.earth;
  ctx.lineWidth = 1.8;
  ctx.stroke();
  if (p.svy) {
    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = C.bed;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    p.svy.o.forEach((o, k) => {
      const x = X(o), y = Z(p.svy.z[k]);
      k ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);
  }
  if (p.wl0 != null && opts.showRef !== false) {
    ctx.setLineDash([2, 4]);
    ctx.strokeStyle = C.soft;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(X(Math.max(xmin, p.ch - 60)), Z(p.wl0));
    ctx.lineTo(X(Math.min(xmax, p.ch + 60)), Z(p.wl0));
    ctx.stroke();
    ctx.setLineDash([]);
  }
  if (st?.wet) {
    const a = Math.max(xmin, st.oL), b = Math.min(xmax, st.oR);
    ctx.strokeStyle = C.water;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(X(a), Z(st.wse));
    ctx.lineTo(X(b), Z(st.wse));
    ctx.stroke();
    const mx = X((a + b) / 2), my = Z(st.wse);
    ctx.fillStyle = C.water;
    ctx.beginPath();
    ctx.moveTo(mx - 6, my - 10);
    ctx.lineTo(mx + 6, my - 10);
    ctx.lineTo(mx, my - 1);
    ctx.closePath();
    ctx.fill();
    ctx.font = font(12, 600);
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    const label = `${fmt(st.wse, 2)} m \xFC.M.`;
    ctx.lineWidth = 4;
    ctx.strokeStyle = C.paper;
    ctx.lineJoin = "round";
    ctx.strokeText(label, mx + 10, my - 14);
    ctx.fillText(label, mx + 10, my - 14);
  }
  const crestMark = (c, side) => {
    if (!c) return;
    const o = off(c.i);
    if (o < xmin || o > xmax) return;
    const x = X(o), y = Z(c.z);
    const fb = st?.wse != null ? c.z - st.wse : null;
    ctx.fillStyle = fb != null && fb < 0.3 ? C.over : C.earth;
    ctx.beginPath();
    ctx.moveTo(x, y - 2);
    ctx.lineTo(x - 5, y - 10);
    ctx.lineTo(x + 5, y - 10);
    ctx.closePath();
    ctx.fill();
    ctx.font = font(11);
    ctx.textAlign = side < 0 ? "right" : "left";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = C.ink;
    ctx.lineWidth = 3;
    ctx.strokeStyle = C.paper;
    ctx.lineJoin = "round";
    ctx.strokeText(`${fmt(c.z, 2)}${fb != null ? `  (${fb >= 0 ? "+" : ""}${fmt(fb, 2)})` : ""}`, x + side * 8, y - 11);
    ctx.fillText(`${fmt(c.z, 2)}${fb != null ? `  (${fb >= 0 ? "+" : ""}${fmt(fb, 2)})` : ""}`, x + side * 8, y - 11);
  };
  if (st) {
    crestMark(st.crestL, -1);
    crestMark(st.crestR, 1);
  }
  ctx.save();
  ctx.translate(14, (pad.t + h - pad.b) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = C.soft;
  ctx.font = font(11);
  ctx.fillText("m \xFC.M.", 0, 0);
  ctx.restore();
}

// src/main.js
init_util();
var CFG2 = window.LINTH_CONFIG || {};
var $ = (id) => document.getElementById(id);
var state = {
  data: null,
  hydro: {},
  history: {},
  meteo: null,
  days: CFG2.historyDays || 7,
  t: Date.now(),
  live: true,
  sel: null,
  water: {},
  view: "map",
  zoom: "channel",
  playing: null
};
var map2d = null;
var view3d = null;
var longPick = () => null;
function notice(msg, kind = "info") {
  const box = $("notice");
  if (!msg) {
    box.hidden = true;
    box.textContent = "";
    return;
  }
  box.hidden = false;
  box.dataset.kind = kind;
  box.textContent = msg;
}
function timeRange() {
  const end = Math.ceil(Date.now() / (10 * 6e4)) * 10 * 6e4;
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
  const r = $("time");
  r.min = Math.floor(a / 6e4);
  r.max = Math.floor(b / 6e4);
  r.step = 10;
  r.value = Math.floor(state.t / 6e4);
  $("time-label").textContent = formatTime(state.t);
  $("btn-live").setAttribute("aria-pressed", String(state.live));
  $("time-mode").textContent = state.live ? "Live-Stand" : "R\xFCckblick";
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
  if (state.playing) {
    clearInterval(state.playing);
    state.playing = null;
  }
  $("btn-play").setAttribute("aria-pressed", "false");
  $("btn-play").textContent = "Abspielen";
}
function togglePlay() {
  if (state.playing) {
    stopPlay();
    return;
  }
  const [a] = timeRange();
  let t = state.live ? a : state.t;
  $("btn-play").setAttribute("aria-pressed", "true");
  $("btn-play").textContent = "Anhalten";
  state.playing = setInterval(() => {
    t += HOUR;
    const end = latestDataTime();
    if (t >= end) {
      goLive();
      return;
    }
    setTime(t, false);
  }, 220);
}
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
    notice(`Pegeldaten konnten nicht geladen werden: ${e.message}. Die Ansicht zeigt den Referenzwasserspiegel.`, "warn");
  }
}
async function refreshMeteo() {
  state.meteo = state.data.meta.demo ? demoMeteo(state.data.meta) : await loadMeteo();
  map2d?.setMeteo(state.meteo);
}
function stationBlock(st) {
  const hit = st.reaches[0];
  const canvas = el("canvas", { class: "spark", "aria-hidden": "true" });
  const block = el(
    "button",
    { class: "station", type: "button", onclick: () => selectNear(hit.reach, hit.s) },
    el("span", { class: "st-name" }, st.name || st.no),
    el("span", { class: "st-meta" }, `${st.river || ""}${hit.kind === "see" ? ", Seepegel" : ""}, ${km(hit.s)}`),
    el(
      "span",
      { class: "st-vals" },
      el("span", { class: "v-w" }, "\u2013"),
      el("span", { class: "v-q" }, "")
    ),
    canvas
  );
  block._st = st;
  block._canvas = canvas;
  return block;
}
function buildStationList() {
  const box = $("station-list");
  box.replaceChildren();
  if (!state.data.stations.length) {
    box.append(el("p", { class: "empty" }, 'Keine BAFU-Stationen zugeordnet. Pr\xFCfe in config/linthebene.json die Eintr\xE4ge unter "stations".'));
    return;
  }
  for (const st of state.data.stations) box.append(stationBlock(st));
}
function renderStations() {
  const range = timeRange();
  for (const block of $("station-list").querySelectorAll(".station")) {
    const st = block._st;
    const h = state.hydro[st.no] || {};
    const w = valueAt(h.W, state.t);
    const q = valueAt(h.Q, state.t);
    block.querySelector(".v-w").textContent = w != null ? `${fmt(w, 2)} ${st.params?.W?.unit || "m"}` : "kein Pegel";
    block.querySelector(".v-q").textContent = q != null ? `${fmt(q, q < 10 ? 1 : 0)} m\xB3/s` : "";
    drawSpark(block._canvas, h.W?.length ? h.W : h.Q, state.t, range, { minRange: 0.3 });
  }
}
function renderMeteo() {
  const box = $("meteo-list");
  box.replaceChildren();
  const m = state.meteo;
  if (!m || !m.stations?.length) {
    box.append(el(
      "p",
      { class: "empty" },
      'Noch keine Niederschlagsdaten. Sie erscheinen, sobald der Workflow "Niederschlag aktualisieren" einmal gelaufen ist.'
    ));
    return;
  }
  const range = timeRange();
  for (const st of m.stations) {
    const now = valueAt(st.series, state.t, 2 * HOUR);
    let sum24 = 0;
    for (const p of st.series) if (p.t > state.t - 24 * HOUR && p.t <= state.t) sum24 += p.v;
    const c = el("canvas", { class: "spark", "aria-hidden": "true" });
    box.append(el(
      "div",
      { class: "station meteo" },
      el("span", { class: "st-name" }, st.name),
      el("span", { class: "st-meta" }, st.abbr ? `MeteoSchweiz ${st.abbr}` : ""),
      el(
        "span",
        { class: "st-vals" },
        el("span", {}, now != null ? `${fmt(now, 1)} mm/h` : "\u2013"),
        el("span", { class: "v-q" }, `${fmt(sum24, 1)} mm in 24 h`)
      ),
      c
    ));
    drawSpark(c, st.series, state.t, range, { kind: "bars", color: getComputedStyle(document.documentElement).getPropertyValue("--rain") });
  }
  if (m.generated && !m.stations[0]?.demo) {
    box.append(el("p", { class: "source" }, `Stand der Niederschlagsdaten: ${formatShort(Date.parse(m.generated))}`));
  }
}
var STATUS_TEXT = {
  ok: "Freibord \xFCber 1 m",
  warn: "Freibord unter 1 m",
  crit: "Freibord unter 30 cm",
  over: "Wasser \xFCber Uferkrone (statische N\xE4herung)",
  unknown: "Uferkrone nicht bestimmbar",
  dry: "Kein Wasserspiegel berechnet"
};
function renderDetails() {
  const box = $("details");
  box.replaceChildren();
  const sel = state.sel;
  if (!sel) return;
  const prof = state.data.profiles[sel.reach];
  const p = prof.profiles[sel.index];
  const wl = state.water[sel.reach];
  const st = wl?.states[sel.index];
  const reach = state.data.meta.reaches.find((r) => r.id === sel.reach);
  const cls = freeboardClass(st);
  let basis = "Referenz zur Befliegung, keine Pegeldaten zum gew\xE4hlten Zeitpunkt";
  if (wl && wl.anchors.length) {
    const before = [...wl.anchors].reverse().find((a) => a.s <= p.s);
    const after = wl.anchors.find((a) => a.s > p.s);
    if (before && after) basis = `Interpoliert zwischen ${before.name} und ${after.name}`;
    else basis = `Fortgesetzt von ${(before || after).name}`;
  }
  const row = (k, v) => el("div", { class: "row" }, el("dt", {}, k), el("dd", {}, v));
  const bedMin = p.svy ? Math.min(...p.svy.z) : null;
  box.append(
    el("h2", {}, `${reach?.name || sel.reach}, ${km(p.s)}`),
    el("p", { class: `status s-${cls}` }, STATUS_TEXT[cls]),
    el(
      "dl",
      {},
      row("Wasserspiegel", st?.wse != null ? `${fmt(st.wse, 2)} m \xFC.M.` : "\u2013"),
      row("Grundlage", basis),
      row("Benetzte Breite", st?.wet ? `${fmt(st.width, 0)} m` : "\u2013"),
      bedMin != null ? row("Tiefe \xFCber vermessener Sohle", st?.wse != null ? fmt(st.wse - bedMin, 2, "m") : "\u2013") : row("\xDCber Stand der Befliegung", st?.wse != null && p.wl0 != null ? fmt(st.wse - p.wl0, 2, "m") : "\u2013"),
      row("Uferkrone links", st?.crestL ? `${fmt(st.crestL.z, 2)} m \xFC.M., Freibord ${fmt(st.crestL.z - st.wse, 2)} m` : "\u2013"),
      row("Uferkrone rechts", st?.crestR ? `${fmt(st.crestR.z, 2)} m \xFC.M., Freibord ${fmt(st.crestR.z - st.wse, 2)} m` : "\u2013"),
      row("Referenz Befliegung", p.wl0 != null ? `${fmt(p.wl0, 2)} m \xFC.M.` : "\u2013"),
      row("Vermessung BAFU", p.svy ? `${p.svy.date}, ${p.svy.section || p.svy.river || ""} (${fmt(p.svy.dist, 0)} m entfernt)` : "Keine Vermessung zugeordnet")
    )
  );
  if (!p.svy) {
    box.append(el(
      "p",
      { class: "hint" },
      "Ohne Vermessung zeigt das Terrainmodell im Gerinne die Wasseroberfl\xE4che zur Befliegung, nicht die Sohle."
    ));
  }
}
function renderProfiles() {
  const sel = state.sel;
  if (!sel) return;
  const prof = state.data.profiles[sel.reach];
  const p = prof.profiles[sel.index];
  const wl = state.water[sel.reach];
  drawSection($("section"), prof, p, wl?.states[sel.index], { zoom: state.zoom, showDsm: $("opt-dsm").checked });
  longPick = drawLongProfile($("long"), prof, wl, state.data.stations, sel.reach, sel.index);
  $("prof-label").textContent = km(p.s);
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
function select(reach, index, { fly = false } = {}) {
  const prof = state.data.profiles[reach];
  if (!prof) return;
  index = Math.max(0, Math.min(prof.profiles.length - 1, index));
  state.sel = { reach, index };
  $("reach").value = reach;
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
  prof.profiles.forEach((p, i) => {
    const d = Math.abs(p.s - s);
    if (d < bd) {
      bd = d;
      best = i;
    }
  });
  select(reach, best, { fly: true });
}
async function ensure3D() {
  if (view3d) return view3d;
  if (!state.data.pc) {
    $("three").replaceChildren(el(
      "p",
      { class: "empty center" },
      'Keine Punktwolke vorhanden. Der Workflow "Daten aufbereiten" erzeugt sie aus swissSURFACE3D.'
    ));
    return null;
  }
  const { View3D: View3D2, CLASSES: CLASSES2 } = await Promise.resolve().then(() => (init_view3d(), view3d_exports));
  view3d = new View3D2($("three"), state.data, {
    onPick: (r, i) => select(r, i),
    onStats: ({ loaded, loading, classes }) => {
      const n = loaded >= 1e6 ? `${(loaded / 1e6).toLocaleString("de-CH", { maximumFractionDigits: 1 })} Mio. Punkte` : `${Math.round(loaded / 1e3).toLocaleString("de-CH")} Tsd. Punkte`;
      $("pc-stats").textContent = `${n}${loading ? ", l\xE4dt \u2026" : ""}`;
      updateClassLegend(classes, CLASSES2);
    }
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
var legendKey = "";
function updateClassLegend(counts, CLASSES2) {
  const present = Object.keys(counts).map(Number).sort((a, b) => a - b);
  const key = present.join(",");
  if (key === legendKey) return;
  legendKey = key;
  const box = $("class-legend");
  box.replaceChildren(...present.map((c) => {
    const [name, color] = CLASSES2[c] || [`Klasse ${c}`, "#8f9799"];
    const id = `cls-${c}`;
    const cb = el("input", { type: "checkbox", id, checked: !view3d.hidden.has(c) });
    cb.addEventListener("change", () => view3d.setClassVisible(c, cb.checked));
    return el("label", { for: id, class: "cls" }, cb, el("span", { class: "swatch", style: `background:${color}` }), `${name}`);
  }));
}
async function setView(v) {
  state.view = v;
  for (const b of document.querySelectorAll("[data-view]")) b.setAttribute("aria-pressed", String(b.dataset.view === v));
  $("map").hidden = v !== "map";
  $("three").hidden = v !== "3d";
  $("tools3d").hidden = v !== "3d";
  $("legend2d").hidden = v !== "map";
  $("pc-stats").hidden = v !== "3d";
  if (v === "map") {
    map2d?.invalidate();
    view3d?.setActive(false);
  } else {
    try {
      const v3 = await ensure3D();
      v3?.setActive(true);
    } catch (e) {
      console.error(e);
      notice(`Die 3D-Ansicht konnte nicht gestartet werden: ${e.message}`, "warn");
    }
  }
}
function wire() {
  $("time").addEventListener("input", (e) => {
    stopPlay();
    setTime(Number(e.target.value) * 6e4, false);
  });
  $("btn-live").addEventListener("click", goLive);
  $("btn-play").addEventListener("click", togglePlay);
  $("range-days").value = String(state.days);
  $("range-days").addEventListener("change", async (e) => {
    state.days = Number(e.target.value);
    notice("Verlauf wird geladen \u2026");
    await refreshHydro(true);
    notice(null);
    if (state.live) goLive();
    else renderTime();
  });
  for (const b of document.querySelectorAll("[data-view]")) b.addEventListener("click", () => setView(b.dataset.view));
  $("reach").addEventListener("change", (e) => {
    const prof = state.data.profiles[e.target.value];
    select(e.target.value, Math.floor((prof?.profiles.length || 1) / 2), { fly: true });
  });
  $("prev").addEventListener("click", () => select(state.sel.reach, state.sel.index - 1, { fly: true }));
  $("next").addEventListener("click", () => select(state.sel.reach, state.sel.index + 1, { fly: true }));
  for (const b of document.querySelectorAll("[data-zoom]")) {
    b.addEventListener("click", () => {
      state.zoom = b.dataset.zoom;
      for (const x of document.querySelectorAll("[data-zoom]")) x.setAttribute("aria-pressed", String(x === b));
      renderProfiles();
    });
  }
  $("opt-dsm").addEventListener("change", renderProfiles);
  $("long").addEventListener("click", (e) => {
    const r = e.target.getBoundingClientRect();
    const i = longPick(e.clientX - r.left);
    if (i != null) select(state.sel.reach, i, { fly: true });
  });
  for (const b of document.querySelectorAll("[data-mode]")) {
    b.addEventListener("click", () => {
      for (const x of document.querySelectorAll("[data-mode]")) x.setAttribute("aria-pressed", String(x === b));
      view3d?.setMode(Number(b.dataset.mode));
      $("class-legend").hidden = b.dataset.mode !== "1";
    });
  }
  $("pt-size").addEventListener("input", (e) => view3d?.setPointSize(Number(e.target.value)));
  $("exag").addEventListener("input", (e) => {
    $("exag-out").textContent = `${e.target.value}\xD7`;
    view3d?.setExaggeration(Number(e.target.value));
  });
  $("btn-home").addEventListener("click", () => view3d?.home());
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, select, textarea") || !state.sel) return;
    if (e.key === "ArrowLeft") select(state.sel.reach, state.sel.index - 1, { fly: true });
    if (e.key === "ArrowRight") select(state.sel.reach, state.sel.index + 1, { fly: true });
  });
  let rt;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(renderProfiles, 120);
  });
}
async function main() {
  wire();
  try {
    state.data = await loadStatic();
  } catch (e) {
    notice('Noch keine aufbereiteten Daten gefunden. Starte auf GitHub unter "Actions" den Workflow "Daten aufbereiten".', "warn");
    return;
  }
  const d = state.data;
  document.title = `${d.meta.title}: Pegel und Gel\xE4nde`;
  $("title").textContent = d.meta.title;
  $("reach").replaceChildren(...d.meta.reaches.filter((r) => d.profiles[r.id]).map((r) => el("option", { value: r.id }, `${r.name}${r.description ? `: ${r.description}` : ""}`)));
  if (d.meta.demo) $("demo-flag").hidden = false;
  $("built").textContent = `Gel\xE4nde aufbereitet ${formatShort(Date.parse(d.meta.built))}`;
  buildStationList();
  map2d = new Map2D($("map"), d, { onSelect: (r, i) => select(r, i) });
  notice("Pegeldaten werden geladen \u2026");
  await Promise.all([refreshHydro(true), refreshMeteo()]);
  if ($("notice").textContent.startsWith("Pegeldaten werden")) notice(null);
  const first = d.meta.reaches.find((r) => d.profiles[r.id]);
  if (first) {
    const st = d.stations.find((s2) => s2.reaches.some((h) => h.reach === first.id && h.kind === "fluss"));
    const prof = d.profiles[first.id];
    const s = st ? st.reaches.find((h) => h.reach === first.id).s : prof.profiles[Math.floor(prof.profiles.length / 2)].s;
    let best = 0, bd = Infinity;
    prof.profiles.forEach((p, i) => {
      const dd = Math.abs(p.s - s);
      if (dd < bd) {
        bd = dd;
        best = i;
      }
    });
    state.sel = { reach: first.id, index: best };
  }
  goLive();
  if (!d.meta.demo) {
    setInterval(async () => {
      await refreshHydro(false);
      if (state.live) goLive();
      else renderTime();
    }, 5 * 6e4);
    setInterval(async () => {
      await refreshHydro(true);
      if (state.live) goLive();
    }, 30 * 6e4);
    setInterval(async () => {
      await refreshMeteo();
      renderMeteo();
    }, 10 * 6e4);
  }
}
window.linth = { state, get view3d() {
  return view3d;
}, get map2d() {
  return map2d;
} };
main();
