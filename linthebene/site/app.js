/* Linthebene – gebündelt aus src/ mit three.js r160 (MIT) und Leaflet 1.9.4 (BSD-2). */
var Jd=Object.create;var da=Object.defineProperty;var Kd=Object.getOwnPropertyDescriptor;var jd=Object.getOwnPropertyNames;var Qd=Object.getPrototypeOf,tf=Object.prototype.hasOwnProperty;var Ks=(s,t)=>()=>(s&&(t=s(s=0)),t);var ef=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),nf=(s,t)=>{for(var e in t)da(s,e,{get:t[e],enumerable:!0})},sf=(s,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of jd(t))!tf.call(s,o)&&o!==e&&da(s,o,{get:()=>t[o],enumerable:!(i=Kd(t,o))||i.enumerable});return s};var rf=(s,t,e)=>(e=s!=null?Jd(Qd(s)):{},sf(t||!s||!s.__esModule?da(e,"default",{value:s,enumerable:!0}):e,s));function js(s,t){let e=(s-26e5)/1e6,i=(t-12e5)/1e6,o=2.6779094+4.728982*e+.791484*e*i+.1306*e*i*i-.0436*e*e*e;return[(16.9023892+3.238272*i-.270978*e*e-.002528*i*i-.0447*e*e*i-.014*i*i*i)*100/36,o*100/36]}function ge(s,t=2,e=""){if(s==null||!Number.isFinite(s))return"\u2013";let i=s.toLocaleString("de-CH",{minimumFractionDigits:t,maximumFractionDigits:t});return e?`${i} ${e}`:i}function Vn(s,t,e=3*Me){if(!s||!s.length||t<s[0].t-e||t>s[s.length-1].t+e)return null;let i=0,o=s.length-1;if(t<=s[0].t)return s[0].v;if(t>=s[o].t)return s[o].v;for(;o-i>1;){let h=i+o>>1;s[h].t<=t?i=h:o=h}let a=s[i],c=s[o];return c.t-a.t>e?null:a.v+(c.v-a.v)*(t-a.t)/(c.t-a.t)}function pa(s,t,e){if(!s.length)return null;if(e<=s[0])return t[0];if(e>=s[s.length-1])return t[t.length-1];let i=1;for(;s[i]<e;)i++;let o=(e-s[i-1])/(s[i]-s[i-1]);return t[i-1]+o*(t[i]-t[i-1])}function _e(s,t={},...e){let i=document.createElement(s);for(let[o,a]of Object.entries(t))o==="class"?i.className=a:o.startsWith("on")?i.addEventListener(o.slice(2),a):a!==!1&&a!=null&&i.setAttribute(o,a===!0?"":a);for(let o of e.flat())o==null||o===!1||i.append(o instanceof Node?o:document.createTextNode(String(o)));return i}function Ht(s){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()}function ns(s){let t=window.devicePixelRatio||1,e=s.clientWidth,i=s.clientHeight;(s.width!==Math.round(e*t)||s.height!==Math.round(i*t))&&(s.width=Math.round(e*t),s.height=Math.round(i*t));let o=s.getContext("2d");return o.setTransform(t,0,0,t,0,0),o.clearRect(0,0,e,i),{ctx:o,w:e,h:i}}function is(s,t=6){let e=s/t,i=Math.pow(10,Math.floor(Math.log10(e))),o=e/i;return(o<1.5?1:o<3?2:o<7?5:10)*i}function Pn(s,t=400){let e=Ht("--font-ui")||"sans-serif";return`${t} ${s}px ${e}`}var Me,of,af,X0,Rc,fa,Ir,jn=Ks(()=>{Me=3600*1e3,of=new Intl.DateTimeFormat("de-CH",{weekday:"short",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Zurich"}),af=new Intl.DateTimeFormat("de-CH",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Zurich"}),X0=new Intl.DateTimeFormat("de-CH",{day:"2-digit",month:"2-digit",timeZone:"Europe/Zurich"}),Rc=s=>of.format(new Date(s)),fa=s=>af.format(new Date(s));Ir=s=>`km ${(s/1e3).toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2})}`});var Vc=ef((Nr,Hc)=>{(function(s,t){typeof Nr=="object"&&typeof Hc!="undefined"?t(Nr):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis!="undefined"?globalThis:s||self,t(s.leaflet={}))})(Nr,function(s){"use strict";var t="1.9.4";function e(n){var r,l,d,v;for(l=1,d=arguments.length;l<d;l++){v=arguments[l];for(r in v)n[r]=v[r]}return n}var i=Object.create||function(){function n(){}return function(r){return n.prototype=r,new n}}();function o(n,r){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var d=l.call(arguments,2);return function(){return n.apply(r,d.length?d.concat(l.call(arguments)):arguments)}}var a=0;function c(n){return"_leaflet_id"in n||(n._leaflet_id=++a),n._leaflet_id}function h(n,r,l){var d,v,S,U;return U=function(){d=!1,v&&(S.apply(l,v),v=!1)},S=function(){d?v=arguments:(n.apply(l,arguments),setTimeout(U,r),d=!0)},S}function u(n,r,l){var d=r[1],v=r[0],S=d-v;return n===d&&l?n:((n-v)%S+S)%S+v}function f(){return!1}function p(n,r){if(r===!1)return n;var l=Math.pow(10,r===void 0?6:r);return Math.round(n*l)/l}function g(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function m(n){return g(n).split(/\s+/)}function y(n,r){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?i(n.options):{});for(var l in r)n.options[l]=r[l];return n.options}function M(n,r,l){var d=[];for(var v in n)d.push(encodeURIComponent(l?v.toUpperCase():v)+"="+encodeURIComponent(n[v]));return(!r||r.indexOf("?")===-1?"?":"&")+d.join("&")}var b=/\{ *([\w_ -]+) *\}/g;function x(n,r){return n.replace(b,function(l,d){var v=r[d];if(v===void 0)throw new Error("No value provided for variable "+l);return typeof v=="function"&&(v=v(r)),v})}var _=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function I(n,r){for(var l=0;l<n.length;l++)if(n[l]===r)return l;return-1}var w="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function D(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var B=0;function O(n){var r=+new Date,l=Math.max(0,16-(r-B));return B=r+l,window.setTimeout(n,l)}var F=window.requestAnimationFrame||D("RequestAnimationFrame")||O,st=window.cancelAnimationFrame||D("CancelAnimationFrame")||D("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function E(n,r,l){if(l&&F===O)n.call(r);else return F.call(window,o(n,r))}function R(n){n&&st.call(window,n)}var k={__proto__:null,extend:e,create:i,bind:o,get lastId(){return a},stamp:c,throttle:h,wrapNum:u,falseFn:f,formatNum:p,trim:g,splitWords:m,setOptions:y,getParamString:M,template:x,isArray:_,indexOf:I,emptyImageUrl:w,requestFn:F,cancelFn:st,requestAnimFrame:E,cancelAnimFrame:R};function tt(){}tt.extend=function(n){var r=function(){y(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=r.__super__=this.prototype,d=i(l);d.constructor=r,r.prototype=d;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(r[v]=this[v]);return n.statics&&e(r,n.statics),n.includes&&(ht(n.includes),e.apply(null,[d].concat(n.includes))),e(d,n),delete d.statics,delete d.includes,d.options&&(d.options=l.options?i(l.options):{},e(d.options,n.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,U=d._initHooks.length;S<U;S++)d._initHooks[S].call(this)}},r},tt.include=function(n){var r=this.prototype.options;return e(this.prototype,n),n.options&&(this.prototype.options=r,this.mergeOptions(n.options)),this},tt.mergeOptions=function(n){return e(this.prototype.options,n),this},tt.addInitHook=function(n){var r=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function ht(n){if(!(typeof L=="undefined"||!L||!L.Mixin)){n=_(n)?n:[n];for(var r=0;r<n.length;r++)n[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var C={on:function(n,r,l){if(typeof n=="object")for(var d in n)this._on(d,n[d],r);else{n=m(n);for(var v=0,S=n.length;v<S;v++)this._on(n[v],r,l)}return this},off:function(n,r,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var d in n)this._off(d,n[d],r);else{n=m(n);for(var v=arguments.length===1,S=0,U=n.length;S<U;S++)v?this._off(n[S]):this._off(n[S],r,l)}return this},_on:function(n,r,l,d){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(n,r,l)===!1){l===this&&(l=void 0);var v={fn:r,ctx:l};d&&(v.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(v)}},_off:function(n,r,l){var d,v,S;if(this._events&&(d=this._events[n],!!d)){if(arguments.length===1){if(this._firingCount)for(v=0,S=d.length;v<S;v++)d[v].fn=f;delete this._events[n];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var U=this._listens(n,r,l);if(U!==!1){var X=d[U];this._firingCount&&(X.fn=f,this._events[n]=d=d.slice()),d.splice(U,1)}}},fire:function(n,r,l){if(!this.listens(n,l))return this;var d=e({},r,{type:n,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var v=this._events[n];if(v){this._firingCount=this._firingCount+1||1;for(var S=0,U=v.length;S<U;S++){var X=v[S],j=X.fn;X.once&&this.off(n,j,X.ctx),j.call(X.ctx||this,d)}this._firingCount--}}return l&&this._propagateEvent(d),this},listens:function(n,r,l,d){typeof n!="string"&&console.warn('"string" type argument expected');var v=r;typeof r!="function"&&(d=!!r,v=void 0,l=void 0);var S=this._events&&this._events[n];if(S&&S.length&&this._listens(n,v,l)!==!1)return!0;if(d){for(var U in this._eventParents)if(this._eventParents[U].listens(n,r,l,d))return!0}return!1},_listens:function(n,r,l){if(!this._events)return!1;var d=this._events[n]||[];if(!r)return!!d.length;l===this&&(l=void 0);for(var v=0,S=d.length;v<S;v++)if(d[v].fn===r&&d[v].ctx===l)return v;return!1},once:function(n,r,l){if(typeof n=="object")for(var d in n)this._on(d,n[d],r,!0);else{n=m(n);for(var v=0,S=n.length;v<S;v++)this._on(n[v],r,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[c(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[c(n)],this},_propagateEvent:function(n){for(var r in this._eventParents)this._eventParents[r].fire(n.type,e({layer:n.target,propagatedFrom:n.target},n),!0)}};C.addEventListener=C.on,C.removeEventListener=C.clearAllEventListeners=C.off,C.addOneTimeEventListener=C.once,C.fireEvent=C.fire,C.hasEventListeners=C.listens;var H=tt.extend(C);function V(n,r,l){this.x=l?Math.round(n):n,this.y=l?Math.round(r):r}var it=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};V.prototype={clone:function(){return new V(this.x,this.y)},add:function(n){return this.clone()._add(W(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(W(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new V(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new V(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=it(this.x),this.y=it(this.y),this},distanceTo:function(n){n=W(n);var r=n.x-this.x,l=n.y-this.y;return Math.sqrt(r*r+l*l)},equals:function(n){return n=W(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=W(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function W(n,r,l){return n instanceof V?n:_(n)?new V(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new V(n.x,n.y):new V(n,r,l)}function Y(n,r){if(n)for(var l=r?[n,r]:n,d=0,v=l.length;d<v;d++)this.extend(l[d])}Y.prototype={extend:function(n){var r,l;if(!n)return this;if(n instanceof V||typeof n[0]=="number"||"x"in n)r=l=W(n);else if(n=rt(n),r=n.min,l=n.max,!r||!l)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=l.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return W((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return W(this.min.x,this.max.y)},getTopRight:function(){return W(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var r,l;return typeof n[0]=="number"||n instanceof V?n=W(n):n=rt(n),n instanceof Y?(r=n.min,l=n.max):r=l=n,r.x>=this.min.x&&l.x<=this.max.x&&r.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=rt(n);var r=this.min,l=this.max,d=n.min,v=n.max,S=v.x>=r.x&&d.x<=l.x,U=v.y>=r.y&&d.y<=l.y;return S&&U},overlaps:function(n){n=rt(n);var r=this.min,l=this.max,d=n.min,v=n.max,S=v.x>r.x&&d.x<l.x,U=v.y>r.y&&d.y<l.y;return S&&U},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var r=this.min,l=this.max,d=Math.abs(r.x-l.x)*n,v=Math.abs(r.y-l.y)*n;return rt(W(r.x-d,r.y-v),W(l.x+d,l.y+v))},equals:function(n){return n?(n=rt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function rt(n,r){return!n||n instanceof Y?n:new Y(n,r)}function at(n,r){if(n)for(var l=r?[n,r]:n,d=0,v=l.length;d<v;d++)this.extend(l[d])}at.prototype={extend:function(n){var r=this._southWest,l=this._northEast,d,v;if(n instanceof q)d=n,v=n;else if(n instanceof at){if(d=n._southWest,v=n._northEast,!d||!v)return this}else return n?this.extend(nt(n)||gt(n)):this;return!r&&!l?(this._southWest=new q(d.lat,d.lng),this._northEast=new q(v.lat,v.lng)):(r.lat=Math.min(d.lat,r.lat),r.lng=Math.min(d.lng,r.lng),l.lat=Math.max(v.lat,l.lat),l.lng=Math.max(v.lng,l.lng)),this},pad:function(n){var r=this._southWest,l=this._northEast,d=Math.abs(r.lat-l.lat)*n,v=Math.abs(r.lng-l.lng)*n;return new at(new q(r.lat-d,r.lng-v),new q(l.lat+d,l.lng+v))},getCenter:function(){return new q((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new q(this.getNorth(),this.getWest())},getSouthEast:function(){return new q(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof q||"lat"in n?n=nt(n):n=gt(n);var r=this._southWest,l=this._northEast,d,v;return n instanceof at?(d=n.getSouthWest(),v=n.getNorthEast()):d=v=n,d.lat>=r.lat&&v.lat<=l.lat&&d.lng>=r.lng&&v.lng<=l.lng},intersects:function(n){n=gt(n);var r=this._southWest,l=this._northEast,d=n.getSouthWest(),v=n.getNorthEast(),S=v.lat>=r.lat&&d.lat<=l.lat,U=v.lng>=r.lng&&d.lng<=l.lng;return S&&U},overlaps:function(n){n=gt(n);var r=this._southWest,l=this._northEast,d=n.getSouthWest(),v=n.getNorthEast(),S=v.lat>r.lat&&d.lat<l.lat,U=v.lng>r.lng&&d.lng<l.lng;return S&&U},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,r){return n?(n=gt(n),this._southWest.equals(n.getSouthWest(),r)&&this._northEast.equals(n.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function gt(n,r){return n instanceof at?n:new at(n,r)}function q(n,r,l){if(isNaN(n)||isNaN(r))throw new Error("Invalid LatLng object: ("+n+", "+r+")");this.lat=+n,this.lng=+r,l!==void 0&&(this.alt=+l)}q.prototype={equals:function(n,r){if(!n)return!1;n=nt(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(r===void 0?1e-9:r)},toString:function(n){return"LatLng("+p(this.lat,n)+", "+p(this.lng,n)+")"},distanceTo:function(n){return At.distance(this,nt(n))},wrap:function(){return At.wrapLatLng(this)},toBounds:function(n){var r=180*n/40075017,l=r/Math.cos(Math.PI/180*this.lat);return gt([this.lat-r,this.lng-l],[this.lat+r,this.lng+l])},clone:function(){return new q(this.lat,this.lng,this.alt)}};function nt(n,r,l){return n instanceof q?n:_(n)&&typeof n[0]!="object"?n.length===3?new q(n[0],n[1],n[2]):n.length===2?new q(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new q(n.lat,"lng"in n?n.lng:n.lon,n.alt):r===void 0?null:new q(n,r,l)}var Mt={latLngToPoint:function(n,r){var l=this.projection.project(n),d=this.scale(r);return this.transformation._transform(l,d)},pointToLatLng:function(n,r){var l=this.scale(r),d=this.transformation.untransform(n,l);return this.projection.unproject(d)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var r=this.projection.bounds,l=this.scale(n),d=this.transformation.transform(r.min,l),v=this.transformation.transform(r.max,l);return new Y(d,v)},infinite:!1,wrapLatLng:function(n){var r=this.wrapLng?u(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?u(n.lat,this.wrapLat,!0):n.lat,d=n.alt;return new q(l,r,d)},wrapLatLngBounds:function(n){var r=n.getCenter(),l=this.wrapLatLng(r),d=r.lat-l.lat,v=r.lng-l.lng;if(d===0&&v===0)return n;var S=n.getSouthWest(),U=n.getNorthEast(),X=new q(S.lat-d,S.lng-v),j=new q(U.lat-d,U.lng-v);return new at(X,j)}},At=e({},Mt,{wrapLng:[-180,180],R:6371e3,distance:function(n,r){var l=Math.PI/180,d=n.lat*l,v=r.lat*l,S=Math.sin((r.lat-n.lat)*l/2),U=Math.sin((r.lng-n.lng)*l/2),X=S*S+Math.cos(d)*Math.cos(v)*U*U,j=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*j}}),Lt=6378137,Zt={R:Lt,MAX_LATITUDE:85.0511287798,project:function(n){var r=Math.PI/180,l=this.MAX_LATITUDE,d=Math.max(Math.min(l,n.lat),-l),v=Math.sin(d*r);return new V(this.R*n.lng*r,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(n){var r=180/Math.PI;return new q((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*r,n.x*r/this.R)},bounds:function(){var n=Lt*Math.PI;return new Y([-n,-n],[n,n])}()};function qt(n,r,l,d){if(_(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=r,this._c=l,this._d=d}qt.prototype={transform:function(n,r){return this._transform(n.clone(),r)},_transform:function(n,r){return r=r||1,n.x=r*(this._a*n.x+this._b),n.y=r*(this._c*n.y+this._d),n},untransform:function(n,r){return r=r||1,new V((n.x/r-this._b)/this._a,(n.y/r-this._d)/this._c)}};function Ft(n,r,l,d){return new qt(n,r,l,d)}var oe=e({},At,{code:"EPSG:3857",projection:Zt,transformation:function(){var n=.5/(Math.PI*Zt.R);return Ft(n,.5,-n,.5)}()}),$=e({},oe,{code:"EPSG:900913"});function Re(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Bt(n,r){var l="",d,v,S,U,X,j;for(d=0,S=n.length;d<S;d++){for(X=n[d],v=0,U=X.length;v<U;v++)j=X[v],l+=(v?"L":"M")+j.x+" "+j.y;l+=r?It.svg?"z":"x":""}return l||"M0 0"}var Gt=document.documentElement.style,Pt="ActiveXObject"in window,be=Pt&&!document.addEventListener,Jt="msLaunchUri"in navigator&&!("documentMode"in document),P=Le("webkit"),T=Le("android"),J=Le("android 2")||Le("android 3"),pt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),dt=T&&Le("Google")&&pt<537&&!("AudioNode"in window),ft=!!window.opera,Rt=!Jt&&Le("chrome"),St=Le("gecko")&&!P&&!ft&&!Pt,Et=!Rt&&Le("safari"),zt=Le("phantom"),jt="OTransition"in Gt,ut=navigator.platform.indexOf("Win")===0,le=Pt&&"transition"in Gt,N="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!J,ct="MozPerspective"in Gt,xt=!window.L_DISABLE_3D&&(le||N||ct)&&!jt&&!zt,mt=typeof orientation!="undefined"||Le("mobile"),Dt=mt&&P,se=mt&&N,ce=!window.PointerEvent&&window.MSPointerEvent,ee=!!(window.PointerEvent||ce),yt="ontouchstart"in window||!!window.TouchEvent,z=!window.L_NO_TOUCH&&(yt||ee),_t=mt&&ft,vt=mt&&St,kt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Nt=function(){var n=!1;try{var r=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",f,r),window.removeEventListener("testPassiveEventSupport",f,r)}catch{}return n}(),pe=function(){return!!document.createElement("canvas").getContext}(),fe=!!(document.createElementNS&&Re("svg").createSVGRect),De=!!fe&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ve=!fe&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var r=n.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}}(),xe=navigator.platform.indexOf("Mac")===0,Ge=navigator.platform.indexOf("Linux")===0;function Le(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var It={ie:Pt,ielt9:be,edge:Jt,webkit:P,android:T,android23:J,androidStock:dt,opera:ft,chrome:Rt,gecko:St,safari:Et,phantom:zt,opera12:jt,win:ut,ie3d:le,webkit3d:N,gecko3d:ct,any3d:xt,mobile:mt,mobileWebkit:Dt,mobileWebkit3d:se,msPointer:ce,pointer:ee,touch:z,touchNative:yt,mobileOpera:_t,mobileGecko:vt,retina:kt,passiveEvents:Nt,canvas:pe,svg:fe,vml:Ve,inlineSvg:De,mac:xe,linux:Ge},gr=It.msPointer?"MSPointerDown":"pointerdown",Pi=It.msPointer?"MSPointerMove":"pointermove",zs=It.msPointer?"MSPointerUp":"pointerup",Ci=It.msPointer?"MSPointerCancel":"pointercancel",Yi={touchstart:gr,touchmove:Pi,touchend:zs,touchcancel:Ci},ks={touchstart:Ot,touchmove:wt,touchend:wt,touchcancel:wt},ci={},_r=!1;function Go(n,r,l){return r==="touchstart"&&K(),ks[r]?(l=ks[r].bind(this,l),n.addEventListener(Yi[r],l,!1),l):(console.warn("wrong event specified:",r),f)}function A(n,r,l){if(!Yi[r]){console.warn("wrong event specified:",r);return}n.removeEventListener(Yi[r],l,!1)}function Z(n){ci[n.pointerId]=n}function Q(n){ci[n.pointerId]&&(ci[n.pointerId]=n)}function et(n){delete ci[n.pointerId]}function K(){_r||(document.addEventListener(gr,Z,!0),document.addEventListener(Pi,Q,!0),document.addEventListener(zs,et,!0),document.addEventListener(Ci,et,!0),_r=!0)}function wt(n,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var l in ci)r.touches.push(ci[l]);r.changedTouches=[r],n(r)}}function Ot(n,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&We(r),wt(n,r)}function Vt(n){var r={},l,d;for(d in n)l=n[d],r[d]=l&&l.bind?l.bind(n):l;return n=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var Yt=200;function ie(n,r){n.addEventListener("dblclick",r);var l=0,d;function v(S){if(S.detail!==1){d=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var U=Xl(S);if(!(U.some(function(j){return j instanceof HTMLLabelElement&&j.attributes.for})&&!U.some(function(j){return j instanceof HTMLInputElement||j instanceof HTMLSelectElement}))){var X=Date.now();X-l<=Yt?(d++,d===2&&r(Vt(S))):d=1,l=X}}}return n.addEventListener("click",v),{dblclick:r,simDblclick:v}}function Qt(n,r){n.removeEventListener("dblclick",r.dblclick),n.removeEventListener("click",r.simDblclick)}var Kt=ui(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Se=ui(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Je=Se==="webkitTransition"||Se==="OTransition"?Se+"End":"transitionend";function Ie(n){return typeof n=="string"?document.getElementById(n):n}function nn(n,r){var l=n.style[r]||n.currentStyle&&n.currentStyle[r];if((!l||l==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(n,null);l=d?d[r]:null}return l==="auto"?null:l}function Ut(n,r,l){var d=document.createElement(n);return d.className=r||"",l&&l.appendChild(d),d}function Ct(n){var r=n.parentNode;r&&r.removeChild(n)}function hi(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function ye(n){var r=n.parentNode;r&&r.lastChild!==n&&r.appendChild(n)}function ln(n){var r=n.parentNode;r&&r.firstChild!==n&&r.insertBefore(n,r.firstChild)}function $i(n,r){if(n.classList!==void 0)return n.classList.contains(r);var l=_n(n);return l.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(l)}function $t(n,r){if(n.classList!==void 0)for(var l=m(r),d=0,v=l.length;d<v;d++)n.classList.add(l[d]);else if(!$i(n,r)){var S=_n(n);Ne(n,(S?S+" ":"")+r)}}function Te(n,r){n.classList!==void 0?n.classList.remove(r):Ne(n,g((" "+_n(n)+" ").replace(" "+r+" "," ")))}function Ne(n,r){n.className.baseVal===void 0?n.className=r:n.className.baseVal=r}function _n(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function Ke(n,r){"opacity"in n.style?n.style.opacity=r:"filter"in n.style&&cn(n,r)}function cn(n,r){var l=!1,d="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(d)}catch{if(r===1)return}r=Math.round(r*100),l?(l.Enabled=r!==100,l.Opacity=r):n.style.filter+=" progid:"+d+"(opacity="+r+")"}function ui(n){for(var r=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in r)return n[l];return!1}function qn(n,r,l){var d=r||new V(0,0);n.style[Kt]=(It.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(l?" scale("+l+")":"")}function Ce(n,r){n._leaflet_pos=r,It.any3d?qn(n,r):(n.style.left=r.x+"px",n.style.top=r.y+"px")}function Ri(n){return n._leaflet_pos||new V(0,0)}var Hs,Vs,Wo;if("onselectstart"in document)Hs=function(){ne(window,"selectstart",We)},Vs=function(){we(window,"selectstart",We)};else{var Gs=ui(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Hs=function(){if(Gs){var n=document.documentElement.style;Wo=n[Gs],n[Gs]="none"}},Vs=function(){Gs&&(document.documentElement.style[Gs]=Wo,Wo=void 0)}}function Zo(){ne(window,"dragstart",We)}function Xo(){we(window,"dragstart",We)}var vr,qo;function Yo(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(yr(),vr=n,qo=n.style.outlineStyle,n.style.outlineStyle="none",ne(window,"keydown",yr))}function yr(){vr&&(vr.style.outlineStyle=qo,vr=void 0,qo=void 0,we(window,"keydown",yr))}function Wl(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function $o(n){var r=n.getBoundingClientRect();return{x:r.width/n.offsetWidth||1,y:r.height/n.offsetHeight||1,boundingClientRect:r}}var nd={__proto__:null,TRANSFORM:Kt,TRANSITION:Se,TRANSITION_END:Je,get:Ie,getStyle:nn,create:Ut,remove:Ct,empty:hi,toFront:ye,toBack:ln,hasClass:$i,addClass:$t,removeClass:Te,setClass:Ne,getClass:_n,setOpacity:Ke,testProp:ui,setTransform:qn,setPosition:Ce,getPosition:Ri,get disableTextSelection(){return Hs},get enableTextSelection(){return Vs},disableImageDrag:Zo,enableImageDrag:Xo,preventOutline:Yo,restoreOutline:yr,getSizedParentNode:Wl,getScale:$o};function ne(n,r,l,d){if(r&&typeof r=="object")for(var v in r)Ko(n,v,r[v],l);else{r=m(r);for(var S=0,U=r.length;S<U;S++)Ko(n,r[S],l,d)}return this}var zn="_leaflet_events";function we(n,r,l,d){if(arguments.length===1)Zl(n),delete n[zn];else if(r&&typeof r=="object")for(var v in r)jo(n,v,r[v],l);else if(r=m(r),arguments.length===2)Zl(n,function(X){return I(r,X)!==-1});else for(var S=0,U=r.length;S<U;S++)jo(n,r[S],l,d);return this}function Zl(n,r){for(var l in n[zn]){var d=l.split(/\d/)[0];(!r||r(d))&&jo(n,d,null,null,l)}}var Jo={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ko(n,r,l,d){var v=r+c(l)+(d?"_"+c(d):"");if(n[zn]&&n[zn][v])return this;var S=function(X){return l.call(d||n,X||window.event)},U=S;!It.touchNative&&It.pointer&&r.indexOf("touch")===0?S=Go(n,r,S):It.touch&&r==="dblclick"?S=ie(n,S):"addEventListener"in n?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?n.addEventListener(Jo[r]||r,S,It.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(S=function(X){X=X||window.event,ta(n,X)&&U(X)},n.addEventListener(Jo[r],S,!1)):n.addEventListener(r,U,!1):n.attachEvent("on"+r,S),n[zn]=n[zn]||{},n[zn][v]=S}function jo(n,r,l,d,v){v=v||r+c(l)+(d?"_"+c(d):"");var S=n[zn]&&n[zn][v];if(!S)return this;!It.touchNative&&It.pointer&&r.indexOf("touch")===0?A(n,r,S):It.touch&&r==="dblclick"?Qt(n,S):"removeEventListener"in n?n.removeEventListener(Jo[r]||r,S,!1):n.detachEvent("on"+r,S),n[zn][v]=null}function Li(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Qo(n){return Ko(n,"wheel",Li),this}function Ws(n){return ne(n,"mousedown touchstart dblclick contextmenu",Li),n._leaflet_disable_click=!0,this}function We(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Ii(n){return We(n),Li(n),this}function Xl(n){if(n.composedPath)return n.composedPath();for(var r=[],l=n.target;l;)r.push(l),l=l.parentNode;return r}function ql(n,r){if(!r)return new V(n.clientX,n.clientY);var l=$o(r),d=l.boundingClientRect;return new V((n.clientX-d.left)/l.x-r.clientLeft,(n.clientY-d.top)/l.y-r.clientTop)}var id=It.linux&&It.chrome?window.devicePixelRatio:It.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Yl(n){return It.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/id:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ta(n,r){var l=r.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var sd={__proto__:null,on:ne,off:we,stopPropagation:Li,disableScrollPropagation:Qo,disableClickPropagation:Ws,preventDefault:We,stop:Ii,getPropagationPath:Xl,getMousePosition:ql,getWheelDelta:Yl,isExternalTarget:ta,addListener:ne,removeListener:we},$l=H.extend({run:function(n,r,l,d){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=Ri(n),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=E(this._animate,this),this._step()},_step:function(n){var r=+new Date-this._startTime,l=this._duration*1e3;r<l?this._runFrame(this._easeOut(r/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,r){var l=this._startPos.add(this._offset.multiplyBy(n));r&&l._round(),Ce(this._el,l),this.fire("step")},_complete:function(){R(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),me=H.extend({options:{crs:oe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,r){r=y(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(nt(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Se&&It.any3d&&!It.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ne(this._proxy,Je,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,r,l){if(r=r===void 0?this._zoom:this._limitZoom(r),n=this._limitCenter(nt(n),r,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var d=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,r,l.zoom):this._tryAnimatedPan(n,l.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(n,r,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,r){return this._loaded?this.setView(this.getCenter(),n,{zoom:r}):(this._zoom=n,this)},zoomIn:function(n,r){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,r)},zoomOut:function(n,r){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,r)},setZoomAround:function(n,r,l){var d=this.getZoomScale(r),v=this.getSize().divideBy(2),S=n instanceof V?n:this.latLngToContainerPoint(n),U=S.subtract(v).multiplyBy(1-1/d),X=this.containerPointToLatLng(v.add(U));return this.setView(X,r,{zoom:l})},_getBoundsCenterZoom:function(n,r){r=r||{},n=n.getBounds?n.getBounds():gt(n);var l=W(r.paddingTopLeft||r.padding||[0,0]),d=W(r.paddingBottomRight||r.padding||[0,0]),v=this.getBoundsZoom(n,!1,l.add(d));if(v=typeof r.maxZoom=="number"?Math.min(r.maxZoom,v):v,v===1/0)return{center:n.getCenter(),zoom:v};var S=d.subtract(l).divideBy(2),U=this.project(n.getSouthWest(),v),X=this.project(n.getNorthEast(),v),j=this.unproject(U.add(X).divideBy(2).add(S),v);return{center:j,zoom:v}},fitBounds:function(n,r){if(n=gt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,r);return this.setView(l.center,l.zoom,r)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,r){return this.setView(n,this._zoom,{pan:r})},panBy:function(n,r){if(n=W(n).round(),r=r||{},!n.x&&!n.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new $l,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){$t(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,r.duration||.25,r.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,r,l){if(l=l||{},l.animate===!1||!It.any3d)return this.setView(n,r,l);this._stop();var d=this.project(this.getCenter()),v=this.project(n),S=this.getSize(),U=this._zoom;n=nt(n),r=r===void 0?U:r;var X=Math.max(S.x,S.y),j=X*this.getZoomScale(U,r),lt=v.distanceTo(d)||1,Tt=1.42,Wt=Tt*Tt;function he(Oe){var Lr=Oe?-1:1,Xd=Oe?j:X,qd=j*j-X*X+Lr*Wt*Wt*lt*lt,Yd=2*Xd*Wt*lt,ua=qd/Yd,Cc=Math.sqrt(ua*ua+1)-ua,$d=Cc<1e-9?-18:Math.log(Cc);return $d}function sn(Oe){return(Math.exp(Oe)-Math.exp(-Oe))/2}function ke(Oe){return(Math.exp(Oe)+Math.exp(-Oe))/2}function yn(Oe){return sn(Oe)/ke(Oe)}var hn=he(0);function es(Oe){return X*(ke(hn)/ke(hn+Tt*Oe))}function Vd(Oe){return X*(ke(hn)*yn(hn+Tt*Oe)-sn(hn))/Wt}function Gd(Oe){return 1-Math.pow(1-Oe,1.5)}var Wd=Date.now(),Ac=(he(1)-hn)/Tt,Zd=l.duration?1e3*l.duration:1e3*Ac*.8;function Pc(){var Oe=(Date.now()-Wd)/Zd,Lr=Gd(Oe)*Ac;Oe<=1?(this._flyToFrame=E(Pc,this),this._move(this.unproject(d.add(v.subtract(d).multiplyBy(Vd(Lr)/lt)),U),this.getScaleZoom(X/es(Lr),U),{flyTo:!0})):this._move(n,r)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Pc.call(this),this},flyToBounds:function(n,r){var l=this._getBoundsCenterZoom(n,r);return this.flyTo(l.center,l.zoom,r)},setMaxBounds:function(n){return n=gt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var r=this.options.minZoom;return this.options.minZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var r=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,r){this._enforcingBounds=!0;var l=this.getCenter(),d=this._limitCenter(l,this._zoom,gt(n));return l.equals(d)||this.panTo(d,r),this._enforcingBounds=!1,this},panInside:function(n,r){r=r||{};var l=W(r.paddingTopLeft||r.padding||[0,0]),d=W(r.paddingBottomRight||r.padding||[0,0]),v=this.project(this.getCenter()),S=this.project(n),U=this.getPixelBounds(),X=rt([U.min.add(l),U.max.subtract(d)]),j=X.getSize();if(!X.contains(S)){this._enforcingBounds=!0;var lt=S.subtract(X.getCenter()),Tt=X.extend(S).getSize().subtract(j);v.x+=lt.x<0?-Tt.x:Tt.x,v.y+=lt.y<0?-Tt.y:Tt.y,this.panTo(this.unproject(v),r),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=e({animate:!1,pan:!0},n===!0?{animate:!0}:n);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),d=r.divideBy(2).round(),v=l.divideBy(2).round(),S=d.subtract(v);return!S.x&&!S.y?this:(n.animate&&n.pan?this.panBy(S):(n.pan&&this._rawPanBy(S),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=e({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=o(this._handleGeolocationResponse,this),l=o(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,l,n):navigator.geolocation.getCurrentPosition(r,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var r=n.code,l=n.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var r=n.coords.latitude,l=n.coords.longitude,d=new q(r,l),v=d.toBounds(n.coords.accuracy*2),S=this._locateOptions;if(S.setView){var U=this.getBoundsZoom(v);this.setView(d,S.maxZoom?Math.min(U,S.maxZoom):U)}var X={latlng:d,bounds:v,timestamp:n.timestamp};for(var j in n.coords)typeof n.coords[j]=="number"&&(X[j]=n.coords[j]);this.fire("locationfound",X)}},addHandler:function(n,r){if(!r)return this;var l=this[n]=new r(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ct(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(R(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Ct(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,r){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),d=Ut("div",l,r||this._mapPane);return n&&(this._panes[n]=d),d},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),r=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new at(r,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,r,l){n=gt(n),l=W(l||[0,0]);var d=this.getZoom()||0,v=this.getMinZoom(),S=this.getMaxZoom(),U=n.getNorthWest(),X=n.getSouthEast(),j=this.getSize().subtract(l),lt=rt(this.project(X,d),this.project(U,d)).getSize(),Tt=It.any3d?this.options.zoomSnap:1,Wt=j.x/lt.x,he=j.y/lt.y,sn=r?Math.max(Wt,he):Math.min(Wt,he);return d=this.getScaleZoom(sn,d),Tt&&(d=Math.round(d/(Tt/100))*(Tt/100),d=r?Math.ceil(d/Tt)*Tt:Math.floor(d/Tt)*Tt),Math.max(v,Math.min(S,d))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new V(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,r){var l=this._getTopLeftPoint(n,r);return new Y(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,r){var l=this.options.crs;return r=r===void 0?this._zoom:r,l.scale(n)/l.scale(r)},getScaleZoom:function(n,r){var l=this.options.crs;r=r===void 0?this._zoom:r;var d=l.zoom(n*l.scale(r));return isNaN(d)?1/0:d},project:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(nt(n),r)},unproject:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(W(n),r)},layerPointToLatLng:function(n){var r=W(n).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(n){var r=this.project(nt(n))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(nt(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(gt(n))},distance:function(n,r){return this.options.crs.distance(nt(n),nt(r))},containerPointToLayerPoint:function(n){return W(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return W(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var r=this.containerPointToLayerPoint(W(n));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(nt(n)))},mouseEventToContainerPoint:function(n){return ql(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var r=this._container=Ie(n);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ne(r,"scroll",this._onScroll,this),this._containerId=c(r)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&It.any3d,$t(n,"leaflet-container"+(It.touch?" leaflet-touch":"")+(It.retina?" leaflet-retina":"")+(It.ielt9?" leaflet-oldie":"")+(It.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=nn(n,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ce(this._mapPane,new V(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||($t(n.markerPane,"leaflet-zoom-hide"),$t(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,r,l){Ce(this._mapPane,new V(0,0));var d=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var v=this._zoom!==r;this._moveStart(v,l)._move(n,r)._moveEnd(v),this.fire("viewreset"),d&&this.fire("load")},_moveStart:function(n,r){return n&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(n,r,l,d){r===void 0&&(r=this._zoom);var v=this._zoom!==r;return this._zoom=r,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),d?l&&l.pinch&&this.fire("zoom",l):((v||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return R(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Ce(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[c(this._container)]=this;var r=n?we:ne;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),It.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){R(this._resizeRequest),this._resizeRequest=E(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,r){for(var l=[],d,v=r==="mouseout"||r==="mouseover",S=n.target||n.srcElement,U=!1;S;){if(d=this._targets[c(S)],d&&(r==="click"||r==="preclick")&&this._draggableMoved(d)){U=!0;break}if(d&&d.listens(r,!0)&&(v&&!ta(S,n)||(l.push(d),v))||S===this._container)break;S=S.parentNode}return!l.length&&!U&&!v&&this.listens(r,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var r=n.target||n.srcElement;if(!(!this._loaded||r._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(r))){var l=n.type;l==="mousedown"&&Yo(r),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,r,l){if(n.type==="click"){var d=e({},n);d.type="preclick",this._fireDOMEvent(d,d.type,l)}var v=this._findEventTargets(n,r);if(l){for(var S=[],U=0;U<l.length;U++)l[U].listens(r,!0)&&S.push(l[U]);v=S.concat(v)}if(v.length){r==="contextmenu"&&We(n);var X=v[0],j={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var lt=X.getLatLng&&(!X._radius||X._radius<=10);j.containerPoint=lt?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(n),j.layerPoint=this.containerPointToLayerPoint(j.containerPoint),j.latlng=lt?X.getLatLng():this.layerPointToLatLng(j.layerPoint)}for(U=0;U<v.length;U++)if(v[U].fire(r,j,!0),j.originalEvent._stopped||v[U].options.bubblingMouseEvents===!1&&I(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,r=this._handlers.length;n<r;n++)this._handlers[n].disable()},whenReady:function(n,r){return this._loaded?n.call(r||this,{target:this}):this.on("load",n,r),this},_getMapPanePos:function(){return Ri(this._mapPane)||new V(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,r){var l=n&&r!==void 0?this._getNewPixelOrigin(n,r):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,r){var l=this.getSize()._divideBy(2);return this.project(n,r)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,r,l){var d=this._getNewPixelOrigin(l,r);return this.project(n,r)._subtract(d)},_latLngBoundsToNewLayerBounds:function(n,r,l){var d=this._getNewPixelOrigin(l,r);return rt([this.project(n.getSouthWest(),r)._subtract(d),this.project(n.getNorthWest(),r)._subtract(d),this.project(n.getSouthEast(),r)._subtract(d),this.project(n.getNorthEast(),r)._subtract(d)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,r,l){if(!l)return n;var d=this.project(n,r),v=this.getSize().divideBy(2),S=new Y(d.subtract(v),d.add(v)),U=this._getBoundsOffset(S,l,r);return Math.abs(U.x)<=1&&Math.abs(U.y)<=1?n:this.unproject(d.add(U),r)},_limitOffset:function(n,r){if(!r)return n;var l=this.getPixelBounds(),d=new Y(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(d,r))},_getBoundsOffset:function(n,r,l){var d=rt(this.project(r.getNorthEast(),l),this.project(r.getSouthWest(),l)),v=d.min.subtract(n.min),S=d.max.subtract(n.max),U=this._rebound(v.x,-S.x),X=this._rebound(v.y,-S.y);return new V(U,X)},_rebound:function(n,r){return n+r>0?Math.round(n-r)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(r))},_limitZoom:function(n){var r=this.getMinZoom(),l=this.getMaxZoom(),d=It.any3d?this.options.zoomSnap:1;return d&&(n=Math.round(n/d)*d),Math.max(r,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Te(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,r){var l=this._getCenterOffset(n)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,r),!0)},_createAnimProxy:function(){var n=this._proxy=Ut("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(r){var l=Kt,d=this._proxy.style[l];qn(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),d===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ct(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),r=this.getZoom();qn(this._proxy,this.project(n,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,r,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(r),v=this._getCenterOffset(n)._divideBy(1-1/d);return l.animate!==!0&&!this.getSize().contains(v)?!1:(E(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,r,!0)},this),!0)},_animateZoom:function(n,r,l,d){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=r,$t(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:r,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Te(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function rd(n,r){return new me(n,r)}var En=tt.extend({options:{position:"topright"},initialize:function(n){y(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var r=this._map;return r&&r.removeControl(this),this.options.position=n,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var r=this._container=this.onAdd(n),l=this.getPosition(),d=n._controlCorners[l];return $t(r,"leaflet-control"),l.indexOf("bottom")!==-1?d.insertBefore(r,d.firstChild):d.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ct(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Zs=function(n){return new En(n)};me.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},r="leaflet-",l=this._controlContainer=Ut("div",r+"control-container",this._container);function d(v,S){var U=r+v+" "+r+S;n[v+S]=Ut("div",U,l)}d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Ct(this._controlCorners[n]);Ct(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Jl=En.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,r,l,d){return l<d?-1:d<l?1:0}},initialize:function(n,r,l){y(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in n)this._addLayer(n[d],d);for(d in r)this._addLayer(r[d],d,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return En.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,r){return this._addLayer(n,r),this._map?this._update():this},addOverlay:function(n,r){return this._addLayer(n,r,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var r=this._getLayer(c(n));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){$t(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?($t(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Te(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Te(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",r=this._container=Ut("div",n),l=this.options.collapsed;r.setAttribute("aria-haspopup",!0),Ws(r),Qo(r);var d=this._section=Ut("section",n+"-list");l&&(this._map.on("click",this.collapse,this),ne(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Ut("a",n+"-toggle",r);v.href="#",v.title="Layers",v.setAttribute("role","button"),ne(v,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){We(S),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=Ut("div",n+"-base",d),this._separator=Ut("div",n+"-separator",d),this._overlaysList=Ut("div",n+"-overlays",d),r.appendChild(d)},_getLayer:function(n){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&c(this._layers[r].layer)===n)return this._layers[r]},_addLayer:function(n,r,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:r,overlay:l}),this.options.sortLayers&&this._layers.sort(o(function(d,v){return this.options.sortFunction(d.layer,v.layer,d.name,v.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;hi(this._baseLayersList),hi(this._overlaysList),this._layerControlInputs=[];var n,r,l,d,v=0;for(l=0;l<this._layers.length;l++)d=this._layers[l],this._addItem(d),r=r||d.overlay,n=n||!d.overlay,v+=d.overlay?0:1;return this.options.hideSingleBase&&(n=n&&v>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=r&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var r=this._getLayer(c(n.target)),l=r.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,r)},_createRadioElement:function(n,r){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(r?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=l,d.firstChild},_addItem:function(n){var r=document.createElement("label"),l=this._map.hasLayer(n.layer),d;n.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=l):d=this._createRadioElement("leaflet-base-layers_"+c(this),l),this._layerControlInputs.push(d),d.layerId=c(n.layer),ne(d,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+n.name;var S=document.createElement("span");r.appendChild(S),S.appendChild(d),S.appendChild(v);var U=n.overlay?this._overlaysList:this._baseLayersList;return U.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,r,l,d=[],v=[];this._handlingClick=!0;for(var S=n.length-1;S>=0;S--)r=n[S],l=this._getLayer(r.layerId).layer,r.checked?d.push(l):r.checked||v.push(l);for(S=0;S<v.length;S++)this._map.hasLayer(v[S])&&this._map.removeLayer(v[S]);for(S=0;S<d.length;S++)this._map.hasLayer(d[S])||this._map.addLayer(d[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,r,l,d=this._map.getZoom(),v=n.length-1;v>=0;v--)r=n[v],l=this._getLayer(r.layerId).layer,r.disabled=l.options.minZoom!==void 0&&d<l.options.minZoom||l.options.maxZoom!==void 0&&d>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,ne(n,"click",We),this.expand();var r=this;setTimeout(function(){we(n,"click",We),r._preventClick=!1})}}),od=function(n,r,l){return new Jl(n,r,l)},ea=En.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var r="leaflet-control-zoom",l=Ut("div",r+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,r+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,r+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,r,l,d,v){var S=Ut("a",l,d);return S.innerHTML=n,S.href="#",S.title=r,S.setAttribute("role","button"),S.setAttribute("aria-label",r),Ws(S),ne(S,"click",Ii),ne(S,"click",v,this),ne(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var n=this._map,r="leaflet-disabled";Te(this._zoomInButton,r),Te(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&($t(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&($t(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});me.mergeOptions({zoomControl:!0}),me.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ea,this.addControl(this.zoomControl))});var ad=function(n){return new ea(n)},Kl=En.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var r="leaflet-control-scale",l=Ut("div",r),d=this.options;return this._addScales(d,r+"-line",l),n.on(d.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,r,l){n.metric&&(this._mScale=Ut("div",r,l)),n.imperial&&(this._iScale=Ut("div",r,l))},_update:function(){var n=this._map,r=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,r]),n.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var r=this._getRoundNum(n),l=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,l,r/n)},_updateImperial:function(n){var r=n*3.2808399,l,d,v;r>5280?(l=r/5280,d=this._getRoundNum(l),this._updateScale(this._iScale,d+" mi",d/l)):(v=this._getRoundNum(r),this._updateScale(this._iScale,v+" ft",v/r))},_updateScale:function(n,r,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=r},_getRoundNum:function(n){var r=Math.pow(10,(Math.floor(n)+"").length-1),l=n/r;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,r*l}}),ld=function(n){return new Kl(n)},cd='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',na=En.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(It.inlineSvg?cd+" ":"")+"Leaflet</a>"},initialize:function(n){y(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Ut("div","leaflet-control-attribution"),Ws(this._container);for(var r in n._layers)n._layers[r].getAttribution&&this.addAttribution(n._layers[r].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var r in this._attributions)this._attributions[r]&&n.push(r);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});me.mergeOptions({attributionControl:!0}),me.addInitHook(function(){this.options.attributionControl&&new na().addTo(this)});var hd=function(n){return new na(n)};En.Layers=Jl,En.Zoom=ea,En.Scale=Kl,En.Attribution=na,Zs.layers=od,Zs.zoom=ad,Zs.scale=ld,Zs.attribution=hd;var kn=tt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});kn.addTo=function(n,r){return n.addHandler(r,this),this};var ud={Events:C},jl=It.touch?"touchstart mousedown":"mousedown",di=H.extend({options:{clickTolerance:3},initialize:function(n,r,l,d){y(this,d),this._element=n,this._dragStartTarget=r||n,this._preventOutline=l},enable:function(){this._enabled||(ne(this._dragStartTarget,jl,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(di._dragging===this&&this.finishDrag(!0),we(this._dragStartTarget,jl,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!$i(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){di._dragging===this&&this.finishDrag();return}if(!(di._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(di._dragging=this,this._preventOutline&&Yo(this._element),Zo(),Hs(),!this._moving)){this.fire("down");var r=n.touches?n.touches[0]:n,l=Wl(this._element);this._startPoint=new V(r.clientX,r.clientY),this._startPos=Ri(this._element),this._parentScale=$o(l);var d=n.type==="mousedown";ne(document,d?"mousemove":"touchmove",this._onMove,this),ne(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var r=n.touches&&n.touches.length===1?n.touches[0]:n,l=new V(r.clientX,r.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,We(n),this._moved||(this.fire("dragstart"),this._moved=!0,$t(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),$t(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Ce(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Te(document.body,"leaflet-dragging"),this._lastTarget&&(Te(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),we(document,"mousemove touchmove",this._onMove,this),we(document,"mouseup touchend touchcancel",this._onUp,this),Xo(),Vs();var r=this._moved&&this._moving;this._moving=!1,di._dragging=!1,r&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Ql(n,r,l){var d,v=[1,4,2,8],S,U,X,j,lt,Tt,Wt,he;for(S=0,Tt=n.length;S<Tt;S++)n[S]._code=Di(n[S],r);for(X=0;X<4;X++){for(Wt=v[X],d=[],S=0,Tt=n.length,U=Tt-1;S<Tt;U=S++)j=n[S],lt=n[U],j._code&Wt?lt._code&Wt||(he=xr(lt,j,Wt,r,l),he._code=Di(he,r),d.push(he)):(lt._code&Wt&&(he=xr(lt,j,Wt,r,l),he._code=Di(he,r),d.push(he)),d.push(j));n=d}return n}function tc(n,r){var l,d,v,S,U,X,j,lt,Tt;if(!n||n.length===0)throw new Error("latlngs not passed");vn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Wt=nt([0,0]),he=gt(n),sn=he.getNorthWest().distanceTo(he.getSouthWest())*he.getNorthEast().distanceTo(he.getNorthWest());sn<1700&&(Wt=ia(n));var ke=n.length,yn=[];for(l=0;l<ke;l++){var hn=nt(n[l]);yn.push(r.project(nt([hn.lat-Wt.lat,hn.lng-Wt.lng])))}for(X=j=lt=0,l=0,d=ke-1;l<ke;d=l++)v=yn[l],S=yn[d],U=v.y*S.x-S.y*v.x,j+=(v.x+S.x)*U,lt+=(v.y+S.y)*U,X+=U*3;X===0?Tt=yn[0]:Tt=[j/X,lt/X];var es=r.unproject(W(Tt));return nt([es.lat+Wt.lat,es.lng+Wt.lng])}function ia(n){for(var r=0,l=0,d=0,v=0;v<n.length;v++){var S=nt(n[v]);r+=S.lat,l+=S.lng,d++}return nt([r/d,l/d])}var dd={__proto__:null,clipPolygon:Ql,polygonCenter:tc,centroid:ia};function ec(n,r){if(!r||!n.length)return n.slice();var l=r*r;return n=md(n,l),n=pd(n,l),n}function nc(n,r,l){return Math.sqrt(Xs(n,r,l,!0))}function fd(n,r,l){return Xs(n,r,l)}function pd(n,r){var l=n.length,d=typeof Uint8Array!="undefined"?Uint8Array:Array,v=new d(l);v[0]=v[l-1]=1,sa(n,v,r,0,l-1);var S,U=[];for(S=0;S<l;S++)v[S]&&U.push(n[S]);return U}function sa(n,r,l,d,v){var S=0,U,X,j;for(X=d+1;X<=v-1;X++)j=Xs(n[X],n[d],n[v],!0),j>S&&(U=X,S=j);S>l&&(r[U]=1,sa(n,r,l,d,U),sa(n,r,l,U,v))}function md(n,r){for(var l=[n[0]],d=1,v=0,S=n.length;d<S;d++)gd(n[d],n[v])>r&&(l.push(n[d]),v=d);return v<S-1&&l.push(n[S-1]),l}var ic;function sc(n,r,l,d,v){var S=d?ic:Di(n,l),U=Di(r,l),X,j,lt;for(ic=U;;){if(!(S|U))return[n,r];if(S&U)return!1;X=S||U,j=xr(n,r,X,l,v),lt=Di(j,l),X===S?(n=j,S=lt):(r=j,U=lt)}}function xr(n,r,l,d,v){var S=r.x-n.x,U=r.y-n.y,X=d.min,j=d.max,lt,Tt;return l&8?(lt=n.x+S*(j.y-n.y)/U,Tt=j.y):l&4?(lt=n.x+S*(X.y-n.y)/U,Tt=X.y):l&2?(lt=j.x,Tt=n.y+U*(j.x-n.x)/S):l&1&&(lt=X.x,Tt=n.y+U*(X.x-n.x)/S),new V(lt,Tt,v)}function Di(n,r){var l=0;return n.x<r.min.x?l|=1:n.x>r.max.x&&(l|=2),n.y<r.min.y?l|=4:n.y>r.max.y&&(l|=8),l}function gd(n,r){var l=r.x-n.x,d=r.y-n.y;return l*l+d*d}function Xs(n,r,l,d){var v=r.x,S=r.y,U=l.x-v,X=l.y-S,j=U*U+X*X,lt;return j>0&&(lt=((n.x-v)*U+(n.y-S)*X)/j,lt>1?(v=l.x,S=l.y):lt>0&&(v+=U*lt,S+=X*lt)),U=n.x-v,X=n.y-S,d?U*U+X*X:new V(v,S)}function vn(n){return!_(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]!="undefined"}function rc(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),vn(n)}function oc(n,r){var l,d,v,S,U,X,j,lt;if(!n||n.length===0)throw new Error("latlngs not passed");vn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Tt=nt([0,0]),Wt=gt(n),he=Wt.getNorthWest().distanceTo(Wt.getSouthWest())*Wt.getNorthEast().distanceTo(Wt.getNorthWest());he<1700&&(Tt=ia(n));var sn=n.length,ke=[];for(l=0;l<sn;l++){var yn=nt(n[l]);ke.push(r.project(nt([yn.lat-Tt.lat,yn.lng-Tt.lng])))}for(l=0,d=0;l<sn-1;l++)d+=ke[l].distanceTo(ke[l+1])/2;if(d===0)lt=ke[0];else for(l=0,S=0;l<sn-1;l++)if(U=ke[l],X=ke[l+1],v=U.distanceTo(X),S+=v,S>d){j=(S-d)/v,lt=[X.x-j*(X.x-U.x),X.y-j*(X.y-U.y)];break}var hn=r.unproject(W(lt));return nt([hn.lat+Tt.lat,hn.lng+Tt.lng])}var _d={__proto__:null,simplify:ec,pointToSegmentDistance:nc,closestPointOnSegment:fd,clipSegment:sc,_getEdgeIntersection:xr,_getBitCode:Di,_sqClosestPointOnSegment:Xs,isFlat:vn,_flat:rc,polylineCenter:oc},ra={project:function(n){return new V(n.lng,n.lat)},unproject:function(n){return new q(n.y,n.x)},bounds:new Y([-180,-90],[180,90])},oa={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Y([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var r=Math.PI/180,l=this.R,d=n.lat*r,v=this.R_MINOR/l,S=Math.sqrt(1-v*v),U=S*Math.sin(d),X=Math.tan(Math.PI/4-d/2)/Math.pow((1-U)/(1+U),S/2);return d=-l*Math.log(Math.max(X,1e-10)),new V(n.lng*r*l,d)},unproject:function(n){for(var r=180/Math.PI,l=this.R,d=this.R_MINOR/l,v=Math.sqrt(1-d*d),S=Math.exp(-n.y/l),U=Math.PI/2-2*Math.atan(S),X=0,j=.1,lt;X<15&&Math.abs(j)>1e-7;X++)lt=v*Math.sin(U),lt=Math.pow((1-lt)/(1+lt),v/2),j=Math.PI/2-2*Math.atan(S*lt)-U,U+=j;return new q(U*r,n.x*r/l)}},vd={__proto__:null,LonLat:ra,Mercator:oa,SphericalMercator:Zt},yd=e({},At,{code:"EPSG:3395",projection:oa,transformation:function(){var n=.5/(Math.PI*oa.R);return Ft(n,.5,-n,.5)}()}),ac=e({},At,{code:"EPSG:4326",projection:ra,transformation:Ft(1/180,1,-1/180,.5)}),xd=e({},Mt,{projection:ra,transformation:Ft(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,r){var l=r.lng-n.lng,d=r.lat-n.lat;return Math.sqrt(l*l+d*d)},infinite:!0});Mt.Earth=At,Mt.EPSG3395=yd,Mt.EPSG3857=oe,Mt.EPSG900913=$,Mt.EPSG4326=ac,Mt.Simple=xd;var An=H.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[c(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[c(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var r=n.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var l=this.getEvents();r.on(l,this),this.once("remove",function(){r.off(l,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});me.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var r=c(n);return this._layers[r]?this:(this._layers[r]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var r=c(n);return this._layers[r]?(this._loaded&&n.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return c(n)in this._layers},eachLayer:function(n,r){for(var l in this._layers)n.call(r,this._layers[l]);return this},_addLayers:function(n){n=n?_(n)?n:[n]:[];for(var r=0,l=n.length;r<l;r++)this.addLayer(n[r])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[c(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var r=c(n);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,r=-1/0,l=this._getZoomSpan();for(var d in this._zoomBoundLayers){var v=this._zoomBoundLayers[d].options;n=v.minZoom===void 0?n:Math.min(n,v.minZoom),r=v.maxZoom===void 0?r:Math.max(r,v.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ji=An.extend({initialize:function(n,r){y(this,r),this._layers={};var l,d;if(n)for(l=0,d=n.length;l<d;l++)this.addLayer(n[l])},addLayer:function(n){var r=this.getLayerId(n);return this._layers[r]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var r=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(n){var r=typeof n=="number"?n:this.getLayerId(n);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var r=Array.prototype.slice.call(arguments,1),l,d;for(l in this._layers)d=this._layers[l],d[n]&&d[n].apply(d,r);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,r){for(var l in this._layers)n.call(r,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return c(n)}}),Md=function(n,r){return new Ji(n,r)},Yn=Ji.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Ji.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Ji.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new at;for(var r in this._layers){var l=this._layers[r];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),bd=function(n,r){return new Yn(n,r)},Ki=tt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){y(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,r){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(l,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(d,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},_setIconStyles:function(n,r){var l=this.options,d=l[r+"Size"];typeof d=="number"&&(d=[d,d]);var v=W(d),S=W(r==="shadow"&&l.shadowAnchor||l.iconAnchor||v&&v.divideBy(2,!0));n.className="leaflet-marker-"+r+" "+(l.className||""),S&&(n.style.marginLeft=-S.x+"px",n.style.marginTop=-S.y+"px"),v&&(n.style.width=v.x+"px",n.style.height=v.y+"px")},_createImg:function(n,r){return r=r||document.createElement("img"),r.src=n,r},_getIconUrl:function(n){return It.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Sd(n){return new Ki(n)}var qs=Ki.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof qs.imagePath!="string"&&(qs.imagePath=this._detectIconPath()),(this.options.imagePath||qs.imagePath)+Ki.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var r=function(l,d,v){var S=d.exec(l);return S&&S[v]};return n=r(n,/^url\((['"])?(.+)\1\)$/,2),n&&r(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Ut("div","leaflet-default-icon-path",document.body),r=nn(n,"background-image")||nn(n,"backgroundImage");if(document.body.removeChild(n),r=this._stripUrl(r),r)return r;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),lc=kn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new di(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),$t(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Te(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var r=this._marker,l=r._map,d=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,S=Ri(r._icon),U=l.getPixelBounds(),X=l.getPixelOrigin(),j=rt(U.min._subtract(X).add(v),U.max._subtract(X).subtract(v));if(!j.contains(S)){var lt=W((Math.max(j.max.x,S.x)-j.max.x)/(U.max.x-j.max.x)-(Math.min(j.min.x,S.x)-j.min.x)/(U.min.x-j.min.x),(Math.max(j.max.y,S.y)-j.max.y)/(U.max.y-j.max.y)-(Math.min(j.min.y,S.y)-j.min.y)/(U.min.y-j.min.y)).multiplyBy(d);l.panBy(lt,{animate:!1}),this._draggable._newPos._add(lt),this._draggable._startPos._add(lt),Ce(r._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=E(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(R(this._panRequest),this._panRequest=E(this._adjustPan.bind(this,n)))},_onDrag:function(n){var r=this._marker,l=r._shadow,d=Ri(r._icon),v=r._map.layerPointToLatLng(d);l&&Ce(l,d),r._latlng=v,n.latlng=v,n.oldLatLng=this._oldLatLng,r.fire("move",n).fire("drag",n)},_onDragEnd:function(n){R(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Mr=An.extend({options:{icon:new qs,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,r){y(this,r),this._latlng=nt(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var r=this._latlng;return this._latlng=nt(n),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),d=!1;l!==this._icon&&(this._icon&&this._removeIcon(),d=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),$t(l,r),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ne(l,"focus",this._panOnFocus,this);var v=n.icon.createShadow(this._shadow),S=!1;v!==this._shadow&&(this._removeShadow(),S=!0),v&&($t(v,r),v.alt=""),this._shadow=v,n.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&S&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&we(this._icon,"focus",this._panOnFocus,this),Ct(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ct(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Ce(this._icon,n),this._shadow&&Ce(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&($t(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),lc)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new lc(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&Ke(this._icon,n),this._shadow&&Ke(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var r=this.options.icon.options,l=r.iconSize?W(r.iconSize):W(0,0),d=r.iconAnchor?W(r.iconAnchor):W(0,0);n.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:l.subtract(d)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function wd(n,r){return new Mr(n,r)}var fi=An.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return y(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),br=fi.extend({options:{fill:!0,radius:10},initialize:function(n,r){y(this,r),this._latlng=nt(n),this._radius=this.options.radius},setLatLng:function(n){var r=this._latlng;return this._latlng=nt(n),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var r=n&&n.radius||this._radius;return fi.prototype.setStyle.call(this,n),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,r=this._radiusY||n,l=this._clickTolerance(),d=[n+l,r+l];this._pxBounds=new Y(this._point.subtract(d),this._point.add(d))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Td(n,r){return new br(n,r)}var aa=br.extend({initialize:function(n,r,l){if(typeof r=="number"&&(r=e({},l,{radius:r})),y(this,r),this._latlng=nt(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new at(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:fi.prototype.setStyle,_project:function(){var n=this._latlng.lng,r=this._latlng.lat,l=this._map,d=l.options.crs;if(d.distance===At.distance){var v=Math.PI/180,S=this._mRadius/At.R/v,U=l.project([r+S,n]),X=l.project([r-S,n]),j=U.add(X).divideBy(2),lt=l.unproject(j).lat,Tt=Math.acos((Math.cos(S*v)-Math.sin(r*v)*Math.sin(lt*v))/(Math.cos(r*v)*Math.cos(lt*v)))/v;(isNaN(Tt)||Tt===0)&&(Tt=S/Math.cos(Math.PI/180*r)),this._point=j.subtract(l.getPixelOrigin()),this._radius=isNaN(Tt)?0:j.x-l.project([lt,n-Tt]).x,this._radiusY=j.y-U.y}else{var Wt=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(Wt).x}this._updateBounds()}});function Ed(n,r,l){return new aa(n,r,l)}var $n=fi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,r){y(this,r),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var r=1/0,l=null,d=Xs,v,S,U=0,X=this._parts.length;U<X;U++)for(var j=this._parts[U],lt=1,Tt=j.length;lt<Tt;lt++){v=j[lt-1],S=j[lt];var Wt=d(n,v,S,!0);Wt<r&&(r=Wt,l=d(n,v,S))}return l&&(l.distance=Math.sqrt(r)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return oc(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,r){return r=r||this._defaultShape(),n=nt(n),r.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new at,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return vn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var r=[],l=vn(n),d=0,v=n.length;d<v;d++)l?(r[d]=nt(n[d]),this._bounds.extend(r[d])):r[d]=this._convertLatLngs(n[d]);return r},_project:function(){var n=new Y;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),r=new V(n,n);this._rawPxBounds&&(this._pxBounds=new Y([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(n,r,l){var d=n[0]instanceof q,v=n.length,S,U;if(d){for(U=[],S=0;S<v;S++)U[S]=this._map.latLngToLayerPoint(n[S]),l.extend(U[S]);r.push(U)}else for(S=0;S<v;S++)this._projectLatlngs(n[S],r,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,l,d,v,S,U,X,j;for(l=0,v=0,S=this._rings.length;l<S;l++)for(j=this._rings[l],d=0,U=j.length;d<U-1;d++)X=sc(j[d],j[d+1],n,d,!0),X&&(r[v]=r[v]||[],r[v].push(X[0]),(X[1]!==j[d+1]||d===U-2)&&(r[v].push(X[1]),v++))}},_simplifyPoints:function(){for(var n=this._parts,r=this.options.smoothFactor,l=0,d=n.length;l<d;l++)n[l]=ec(n[l],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,r){var l,d,v,S,U,X,j=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,S=this._parts.length;l<S;l++)for(X=this._parts[l],d=0,U=X.length,v=U-1;d<U;v=d++)if(!(!r&&d===0)&&nc(n,X[v],X[d])<=j)return!0;return!1}});function Ad(n,r){return new $n(n,r)}$n._flat=rc;var ji=$n.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return tc(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var r=$n.prototype._convertLatLngs.call(this,n),l=r.length;return l>=2&&r[0]instanceof q&&r[0].equals(r[l-1])&&r.pop(),r},_setLatLngs:function(n){$n.prototype._setLatLngs.call(this,n),vn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return vn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,r=this.options.weight,l=new V(r,r);if(n=new Y(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,v=this._rings.length,S;d<v;d++)S=Ql(this._rings[d],n,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var r=!1,l,d,v,S,U,X,j,lt;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(S=0,j=this._parts.length;S<j;S++)for(l=this._parts[S],U=0,lt=l.length,X=lt-1;U<lt;X=U++)d=l[U],v=l[X],d.y>n.y!=v.y>n.y&&n.x<(v.x-d.x)*(n.y-d.y)/(v.y-d.y)+d.x&&(r=!r);return r||$n.prototype._containsPoint.call(this,n,!0)}});function Pd(n,r){return new ji(n,r)}var Jn=Yn.extend({initialize:function(n,r){y(this,r),this._layers={},n&&this.addData(n)},addData:function(n){var r=_(n)?n:n.features,l,d,v;if(r){for(l=0,d=r.length;l<d;l++)v=r[l],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var S=this.options;if(S.filter&&!S.filter(n))return this;var U=Sr(n,S);return U?(U.feature=Er(n),U.defaultOptions=U.options,this.resetStyle(U),S.onEachFeature&&S.onEachFeature(n,U),this.addLayer(U)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=e({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(r){this._setLayerStyle(r,n)},this)},_setLayerStyle:function(n,r){n.setStyle&&(typeof r=="function"&&(r=r(n.feature)),n.setStyle(r))}});function Sr(n,r){var l=n.type==="Feature"?n.geometry:n,d=l?l.coordinates:null,v=[],S=r&&r.pointToLayer,U=r&&r.coordsToLatLng||la,X,j,lt,Tt;if(!d&&!l)return null;switch(l.type){case"Point":return X=U(d),cc(S,n,X,r);case"MultiPoint":for(lt=0,Tt=d.length;lt<Tt;lt++)X=U(d[lt]),v.push(cc(S,n,X,r));return new Yn(v);case"LineString":case"MultiLineString":return j=wr(d,l.type==="LineString"?0:1,U),new $n(j,r);case"Polygon":case"MultiPolygon":return j=wr(d,l.type==="Polygon"?1:2,U),new ji(j,r);case"GeometryCollection":for(lt=0,Tt=l.geometries.length;lt<Tt;lt++){var Wt=Sr({geometry:l.geometries[lt],type:"Feature",properties:n.properties},r);Wt&&v.push(Wt)}return new Yn(v);case"FeatureCollection":for(lt=0,Tt=l.features.length;lt<Tt;lt++){var he=Sr(l.features[lt],r);he&&v.push(he)}return new Yn(v);default:throw new Error("Invalid GeoJSON object.")}}function cc(n,r,l,d){return n?n(r,l):new Mr(l,d&&d.markersInheritOptions&&d)}function la(n){return new q(n[1],n[0],n[2])}function wr(n,r,l){for(var d=[],v=0,S=n.length,U;v<S;v++)U=r?wr(n[v],r-1,l):(l||la)(n[v]),d.push(U);return d}function ca(n,r){return n=nt(n),n.alt!==void 0?[p(n.lng,r),p(n.lat,r),p(n.alt,r)]:[p(n.lng,r),p(n.lat,r)]}function Tr(n,r,l,d){for(var v=[],S=0,U=n.length;S<U;S++)v.push(r?Tr(n[S],vn(n[S])?0:r-1,l,d):ca(n[S],d));return!r&&l&&v.length>0&&v.push(v[0].slice()),v}function Qi(n,r){return n.feature?e({},n.feature,{geometry:r}):Er(r)}function Er(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var ha={toGeoJSON:function(n){return Qi(this,{type:"Point",coordinates:ca(this.getLatLng(),n)})}};Mr.include(ha),aa.include(ha),br.include(ha),$n.include({toGeoJSON:function(n){var r=!vn(this._latlngs),l=Tr(this._latlngs,r?1:0,!1,n);return Qi(this,{type:(r?"Multi":"")+"LineString",coordinates:l})}}),ji.include({toGeoJSON:function(n){var r=!vn(this._latlngs),l=r&&!vn(this._latlngs[0]),d=Tr(this._latlngs,l?2:r?1:0,!0,n);return r||(d=[d]),Qi(this,{type:(l?"Multi":"")+"Polygon",coordinates:d})}}),Ji.include({toMultiPoint:function(n){var r=[];return this.eachLayer(function(l){r.push(l.toGeoJSON(n).geometry.coordinates)}),Qi(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(n){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(n);var l=r==="GeometryCollection",d=[];return this.eachLayer(function(v){if(v.toGeoJSON){var S=v.toGeoJSON(n);if(l)d.push(S.geometry);else{var U=Er(S);U.type==="FeatureCollection"?d.push.apply(d,U.features):d.push(U)}}}),l?Qi(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}}});function hc(n,r){return new Jn(n,r)}var Cd=hc,Ar=An.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,r,l){this._url=n,this._bounds=gt(r),y(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&($t(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ct(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&ye(this._image),this},bringToBack:function(){return this._map&&ln(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=gt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",r=this._image=n?this._url:Ut("img");if($t(r,"leaflet-image-layer"),this._zoomAnimated&&$t(r,"leaflet-zoom-animated"),this.options.className&&$t(r,this.options.className),r.onselectstart=f,r.onmousemove=f,r.onload=o(this.fire,this,"load"),r.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(n){var r=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;qn(this._image,l,r)},_reset:function(){var n=this._image,r=new Y(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=r.getSize();Ce(n,r.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){Ke(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Rd=function(n,r,l){return new Ar(n,r,l)},uc=Ar.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",r=this._image=n?this._url:Ut("video");if($t(r,"leaflet-image-layer"),this._zoomAnimated&&$t(r,"leaflet-zoom-animated"),this.options.className&&$t(r,this.options.className),r.onselectstart=f,r.onmousemove=f,r.onloadeddata=o(this.fire,this,"load"),n){for(var l=r.getElementsByTagName("source"),d=[],v=0;v<l.length;v++)d.push(l[v].src);this._url=l.length>0?d:[r.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var U=Ut("source");U.src=this._url[S],r.appendChild(U)}}});function Ld(n,r,l){return new uc(n,r,l)}var dc=Ar.extend({_initImage:function(){var n=this._image=this._url;$t(n,"leaflet-image-layer"),this._zoomAnimated&&$t(n,"leaflet-zoom-animated"),this.options.className&&$t(n,this.options.className),n.onselectstart=f,n.onmousemove=f}});function Id(n,r,l){return new dc(n,r,l)}var Hn=An.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,r){n&&(n instanceof q||_(n))?(this._latlng=nt(n),y(this,r)):(y(this,n),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&Ke(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&Ke(this._container,1),this.bringToFront(),this.options.interactive&&($t(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(Ke(this._container,0),this._removeTimeout=setTimeout(o(Ct,void 0,this._container),200)):Ct(this._container),this.options.interactive&&(Te(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=nt(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ye(this._container),this},bringToBack:function(){return this._map&&ln(this._container),this},_prepareOpen:function(n){var r=this._source;if(!r._map)return!1;if(r instanceof Yn){r=null;var l=this._source._layers;for(var d in l)if(l[d]._map){r=l[d];break}if(!r)return!1;this._source=r}if(!n)if(r.getCenter)n=r.getCenter();else if(r.getLatLng)n=r.getLatLng();else if(r.getBounds)n=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")n.innerHTML=r;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),r=W(this.options.offset),l=this._getAnchor();this._zoomAnimated?Ce(this._container,n.add(l)):r=r.add(n).add(l);var d=this._containerBottom=-r.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=d+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});me.include({_initOverlay:function(n,r,l,d){var v=r;return v instanceof n||(v=new n(d).setContent(r)),l&&v.setLatLng(l),v}}),An.include({_initOverlay:function(n,r,l,d){var v=l;return v instanceof n?(y(v,d),v._source=this):(v=r&&!d?r:new n(d,this),v.setContent(l)),v}});var Pr=Hn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Hn.prototype.openOn.call(this,n)},onAdd:function(n){Hn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof fi||this._source.on("preclick",Li))},onRemove:function(n){Hn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof fi||this._source.off("preclick",Li))},getEvents:function(){var n=Hn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",r=this._container=Ut("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=Ut("div",n+"-content-wrapper",r);if(this._contentNode=Ut("div",n+"-content",l),Ws(r),Qo(this._contentNode),ne(r,"contextmenu",Li),this._tipContainer=Ut("div",n+"-tip-container",r),this._tip=Ut("div",n+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=Ut("a",n+"-close-button",r);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',ne(d,"click",function(v){We(v),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,r=n.style;r.width="",r.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),r.width=l+1+"px",r.whiteSpace="",r.height="";var d=n.offsetHeight,v=this.options.maxHeight,S="leaflet-popup-scrolled";v&&d>v?(r.height=v+"px",$t(n,S)):Te(n,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Ce(this._container,r.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,r=parseInt(nn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+r,d=this._containerWidth,v=new V(this._containerLeft,-l-this._containerBottom);v._add(Ri(this._container));var S=n.layerPointToContainerPoint(v),U=W(this.options.autoPanPadding),X=W(this.options.autoPanPaddingTopLeft||U),j=W(this.options.autoPanPaddingBottomRight||U),lt=n.getSize(),Tt=0,Wt=0;S.x+d+j.x>lt.x&&(Tt=S.x+d-lt.x+j.x),S.x-Tt-X.x<0&&(Tt=S.x-X.x),S.y+l+j.y>lt.y&&(Wt=S.y+l-lt.y+j.y),S.y-Wt-X.y<0&&(Wt=S.y-X.y),(Tt||Wt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Tt,Wt]))}},_getAnchor:function(){return W(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Dd=function(n,r){return new Pr(n,r)};me.mergeOptions({closePopupOnClick:!0}),me.include({openPopup:function(n,r,l){return this._initOverlay(Pr,n,r,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),An.include({bindPopup:function(n,r){return this._popup=this._initOverlay(Pr,this._popup,n,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Yn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Ii(n);var r=n.layer||n.target;if(this._popup._source===r&&!(r instanceof fi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=r,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Cr=Hn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Hn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Hn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Hn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",r=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ut("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+c(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var r,l,d=this._map,v=this._container,S=d.latLngToContainerPoint(d.getCenter()),U=d.layerPointToContainerPoint(n),X=this.options.direction,j=v.offsetWidth,lt=v.offsetHeight,Tt=W(this.options.offset),Wt=this._getAnchor();X==="top"?(r=j/2,l=lt):X==="bottom"?(r=j/2,l=0):X==="center"?(r=j/2,l=lt/2):X==="right"?(r=0,l=lt/2):X==="left"?(r=j,l=lt/2):U.x<S.x?(X="right",r=0,l=lt/2):(X="left",r=j+(Tt.x+Wt.x)*2,l=lt/2),n=n.subtract(W(r,l,!0)).add(Tt).add(Wt),Te(v,"leaflet-tooltip-right"),Te(v,"leaflet-tooltip-left"),Te(v,"leaflet-tooltip-top"),Te(v,"leaflet-tooltip-bottom"),$t(v,"leaflet-tooltip-"+X),Ce(v,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&Ke(this._container,n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(r)},_getAnchor:function(){return W(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Nd=function(n,r){return new Cr(n,r)};me.include({openTooltip:function(n,r,l){return this._initOverlay(Cr,n,r,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),An.include({bindTooltip:function(n,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Cr,this._tooltip,n,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var r=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[r](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Yn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&(ne(r,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),ne(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var r=n.latlng,l,d;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),d=this._map.containerPointToLayerPoint(l),r=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(r)}});var fc=Ki.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var r=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(hi(r),r.appendChild(l.html)):r.innerHTML=l.html!==!1?l.html:"",l.bgPos){var d=W(l.bgPos);r.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function Od(n){return new fc(n)}Ki.Default=qs;var Ys=An.extend({options:{tileSize:256,opacity:1,updateWhenIdle:It.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){y(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Ct(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ye(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ln(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof V?n:new V(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var r=this.getPane().children,l=-n(-1/0,1/0),d=0,v=r.length,S;d<v;d++)S=r[d].style.zIndex,r[d]!==this._container&&S&&(l=n(l,+S));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!It.ielt9){Ke(this._container,this.options.opacity);var n=+new Date,r=!1,l=!1;for(var d in this._tiles){var v=this._tiles[d];if(!(!v.current||!v.loaded)){var S=Math.min(1,(n-v.loaded)/200);Ke(v.el,S),S<1?r=!0:(v.active?l=!0:this._onOpaqueTile(v),v.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),r&&(R(this._fadeFrame),this._fadeFrame=E(this._updateOpacity,this))}},_onOpaqueTile:f,_initContainer:function(){this._container||(this._container=Ut("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,r=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=r-Math.abs(n-l),this._onUpdateLevel(l)):(Ct(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var d=this._levels[n],v=this._map;return d||(d=this._levels[n]={},d.el=Ut("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=r,d.origin=v.project(v.unproject(v.getPixelOrigin()),n).round(),d.zoom=n,this._setZoomTransform(d,v.getCenter(),v.getZoom()),f(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},_onUpdateLevel:f,_onRemoveLevel:f,_onCreateLevel:f,_pruneTiles:function(){if(this._map){var n,r,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)r=this._tiles[n],r.retain=r.current;for(n in this._tiles)if(r=this._tiles[n],r.current&&!r.active){var d=r.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var r in this._tiles)this._tiles[r].coords.z===n&&this._removeTile(r)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Ct(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,r,l,d){var v=Math.floor(n/2),S=Math.floor(r/2),U=l-1,X=new V(+v,+S);X.z=+U;var j=this._tileCoordsToKey(X),lt=this._tiles[j];return lt&&lt.active?(lt.retain=!0,!0):(lt&&lt.loaded&&(lt.retain=!0),U>d?this._retainParent(v,S,U,d):!1)},_retainChildren:function(n,r,l,d){for(var v=2*n;v<2*n+2;v++)for(var S=2*r;S<2*r+2;S++){var U=new V(v,S);U.z=l+1;var X=this._tileCoordsToKey(U),j=this._tiles[X];if(j&&j.active){j.retain=!0;continue}else j&&j.loaded&&(j.retain=!0);l+1<d&&this._retainChildren(v,S,l+1,d)}},_resetView:function(n){var r=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var r=this.options;return r.minNativeZoom!==void 0&&n<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<n?r.maxNativeZoom:n},_setView:function(n,r,l,d){var v=Math.round(r);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var S=this.options.updateWhenZooming&&v!==this._tileZoom;(!d||S)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,r)},_setZoomTransforms:function(n,r){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,r)},_setZoomTransform:function(n,r,l){var d=this._map.getZoomScale(l,n.zoom),v=n.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(r,l)).round();It.any3d?qn(n.el,v,d):Ce(n.el,v)},_resetGrid:function(){var n=this._map,r=n.options.crs,l=this._tileSize=this.getTileSize(),d=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,r.wrapLng[0]],d).x/l.x),Math.ceil(n.project([0,r.wrapLng[1]],d).x/l.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([r.wrapLat[0],0],d).y/l.x),Math.ceil(n.project([r.wrapLat[1],0],d).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var r=this._map,l=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),d=r.getZoomScale(l,this._tileZoom),v=r.project(n,this._tileZoom).floor(),S=r.getSize().divideBy(d*2);return new Y(v.subtract(S),v.add(S))},_update:function(n){var r=this._map;if(r){var l=this._clampZoom(r.getZoom());if(n===void 0&&(n=r.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(n),v=this._pxBoundsToTileRange(d),S=v.getCenter(),U=[],X=this.options.keepBuffer,j=new Y(v.getBottomLeft().subtract([X,-X]),v.getTopRight().add([X,-X]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var lt in this._tiles){var Tt=this._tiles[lt].coords;(Tt.z!==this._tileZoom||!j.contains(new V(Tt.x,Tt.y)))&&(this._tiles[lt].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var Wt=v.min.y;Wt<=v.max.y;Wt++)for(var he=v.min.x;he<=v.max.x;he++){var sn=new V(he,Wt);if(sn.z=this._tileZoom,!!this._isValidTile(sn)){var ke=this._tiles[this._tileCoordsToKey(sn)];ke?ke.current=!0:U.push(sn)}}if(U.sort(function(hn,es){return hn.distanceTo(S)-es.distanceTo(S)}),U.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var yn=document.createDocumentFragment();for(he=0;he<U.length;he++)this._addTile(U[he],yn);this._level.el.appendChild(yn)}}}},_isValidTile:function(n){var r=this._map.options.crs;if(!r.infinite){var l=this._globalTileRange;if(!r.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!r.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(n);return gt(this.options.bounds).overlaps(d)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var r=this._map,l=this.getTileSize(),d=n.scaleBy(l),v=d.add(l),S=r.unproject(d,n.z),U=r.unproject(v,n.z);return[S,U]},_tileCoordsToBounds:function(n){var r=this._tileCoordsToNwSe(n),l=new at(r[0],r[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var r=n.split(":"),l=new V(+r[0],+r[1]);return l.z=+r[2],l},_removeTile:function(n){var r=this._tiles[n];r&&(Ct(r.el),delete this._tiles[n],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){$t(n,"leaflet-tile");var r=this.getTileSize();n.style.width=r.x+"px",n.style.height=r.y+"px",n.onselectstart=f,n.onmousemove=f,It.ielt9&&this.options.opacity<1&&Ke(n,this.options.opacity)},_addTile:function(n,r){var l=this._getTilePos(n),d=this._tileCoordsToKey(n),v=this.createTile(this._wrapCoords(n),o(this._tileReady,this,n));this._initTile(v),this.createTile.length<2&&E(o(this._tileReady,this,n,null,v)),Ce(v,l),this._tiles[d]={el:v,coords:n,current:!0},r.appendChild(v),this.fire("tileloadstart",{tile:v,coords:n})},_tileReady:function(n,r,l){r&&this.fire("tileerror",{error:r,tile:l,coords:n});var d=this._tileCoordsToKey(n);l=this._tiles[d],l&&(l.loaded=+new Date,this._map._fadeAnimated?(Ke(l.el,0),R(this._fadeFrame),this._fadeFrame=E(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),r||($t(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),It.ielt9||!this._map._fadeAnimated?E(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var r=new V(this._wrapX?u(n.x,this._wrapX):n.x,this._wrapY?u(n.y,this._wrapY):n.y);return r.z=n.z,r},_pxBoundsToTileRange:function(n){var r=this.getTileSize();return new Y(n.min.unscaleBy(r).floor(),n.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Ud(n){return new Ys(n)}var ts=Ys.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,r){this._url=n,r=y(this,r),r.detectRetina&&It.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,r){return this._url===n&&r===void 0&&(r=!0),this._url=n,r||this.redraw(),this},createTile:function(n,r){var l=document.createElement("img");return ne(l,"load",o(this._tileOnLoad,this,r,l)),ne(l,"error",o(this._tileOnError,this,r,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var r={r:It.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(r.y=l),r["-y"]=l}return x(this._url,e(r,this.options))},_tileOnLoad:function(n,r){It.ielt9?setTimeout(o(n,this,null,r),0):n(null,r)},_tileOnError:function(n,r,l){var d=this.options.errorTileUrl;d&&r.getAttribute("src")!==d&&(r.src=d),n(l,r)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,r=this.options.maxZoom,l=this.options.zoomReverse,d=this.options.zoomOffset;return l&&(n=r-n),n+d},_getSubdomain:function(n){var r=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var n,r;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(r=this._tiles[n].el,r.onload=f,r.onerror=f,!r.complete)){r.src=w;var l=this._tiles[n].coords;Ct(r),delete this._tiles[n],this.fire("tileabort",{tile:r,coords:l})}},_removeTile:function(n){var r=this._tiles[n];if(r)return r.el.setAttribute("src",w),Ys.prototype._removeTile.call(this,n)},_tileReady:function(n,r,l){if(!(!this._map||l&&l.getAttribute("src")===w))return Ys.prototype._tileReady.call(this,n,r,l)}});function pc(n,r){return new ts(n,r)}var mc=ts.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,r){this._url=n;var l=e({},this.defaultWmsParams);for(var d in r)d in this.options||(l[d]=r[d]);r=y(this,r);var v=r.detectRetina&&It.retina?2:1,S=this.getTileSize();l.width=S.x*v,l.height=S.y*v,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,ts.prototype.onAdd.call(this,n)},getTileUrl:function(n){var r=this._tileCoordsToNwSe(n),l=this._crs,d=rt(l.project(r[0]),l.project(r[1])),v=d.min,S=d.max,U=(this._wmsVersion>=1.3&&this._crs===ac?[v.y,v.x,S.y,S.x]:[v.x,v.y,S.x,S.y]).join(","),X=ts.prototype.getTileUrl.call(this,n);return X+M(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+U},setParams:function(n,r){return e(this.wmsParams,n),r||this.redraw(),this}});function Fd(n,r){return new mc(n,r)}ts.WMS=mc,pc.wms=Fd;var Kn=An.extend({options:{padding:.1},initialize:function(n){y(this,n),c(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),$t(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,r){var l=this._map.getZoomScale(r,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,r),S=d.multiplyBy(-l).add(v).subtract(this._map._getNewPixelOrigin(n,r));It.any3d?qn(this._container,S,l):Ce(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,r=this._map.getSize(),l=this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();this._bounds=new Y(l,l.add(r.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),gc=Kn.extend({options:{tolerance:0},getEvents:function(){var n=Kn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Kn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");ne(n,"mousemove",this._onMouseMove,this),ne(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ne(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){R(this._redrawRequest),delete this._ctx,Ct(this._container),we(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var r in this._layers)n=this._layers[r],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kn.prototype._update.call(this);var n=this._bounds,r=this._container,l=n.getSize(),d=It.retina?2:1;Ce(r,n.min),r.width=d*l.x,r.height=d*l.y,r.style.width=l.x+"px",r.style.height=l.y+"px",It.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Kn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[c(n)]=n;var r=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var r=n._order,l=r.next,d=r.prev;l?l.prev=d:this._drawLast=d,d?d.next=l:this._drawFirst=l,delete n._order,delete this._layers[c(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var r=n.options.dashArray.split(/[, ]+/),l=[],d,v;for(v=0;v<r.length;v++){if(d=Number(r[v]),isNaN(d))return;l.push(d)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||E(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var r=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Y,this._redrawBounds.extend(n._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(n._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var r=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,r=this._redrawBounds;if(this._ctx.save(),r){var l=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)n=d.layer,(!r||n._pxBounds&&n._pxBounds.intersects(r))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,r){if(this._drawing){var l,d,v,S,U=n._parts,X=U.length,j=this._ctx;if(X){for(j.beginPath(),l=0;l<X;l++){for(d=0,v=U[l].length;d<v;d++)S=U[l][d],j[d?"lineTo":"moveTo"](S.x,S.y);r&&j.closePath()}this._fillStroke(j,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var r=n._point,l=this._ctx,d=Math.max(Math.round(n._radius),1),v=(Math.max(Math.round(n._radiusY),1)||d)/d;v!==1&&(l.save(),l.scale(1,v)),l.beginPath(),l.arc(r.x,r.y/v,d,0,Math.PI*2,!1),v!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,r){var l=r.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(r.options&&r.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var r=this._map.mouseEventToLayerPoint(n),l,d,v=this._drawFirst;v;v=v.next)l=v.layer,l.options.interactive&&l._containsPoint(r)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(d=l);this._fireEvent(d?[d]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,r)}},_handleMouseOut:function(n){var r=this._hoveredLayer;r&&(Te(this._container,"leaflet-interactive"),this._fireEvent([r],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,r){if(!this._mouseHoverThrottled){for(var l,d,v=this._drawFirst;v;v=v.next)l=v.layer,l.options.interactive&&l._containsPoint(r)&&(d=l);d!==this._hoveredLayer&&(this._handleMouseOut(n),d&&($t(this._container,"leaflet-interactive"),this._fireEvent([d],n,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,r,l){this._map._fireDOMEvent(r,l||r.type,n)},_bringToFront:function(n){var r=n._order;if(r){var l=r.next,d=r.prev;if(l)l.prev=d;else return;d?d.next=l:l&&(this._drawFirst=l),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(n)}},_bringToBack:function(n){var r=n._order;if(r){var l=r.next,d=r.prev;if(d)d.next=l;else return;l?l.prev=d:d&&(this._drawLast=d),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(n)}}});function _c(n){return It.canvas?new gc(n):null}var $s=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Bd={_initContainer:function(){this._container=Ut("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Kn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var r=n._container=$s("shape");$t(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",n._path=$s("path"),r.appendChild(n._path),this._updateStyle(n),this._layers[c(n)]=n},_addPath:function(n){var r=n._container;this._container.appendChild(r),n.options.interactive&&n.addInteractiveTarget(r)},_removePath:function(n){var r=n._container;Ct(r),n.removeInteractiveTarget(r),delete this._layers[c(n)]},_updateStyle:function(n){var r=n._stroke,l=n._fill,d=n.options,v=n._container;v.stroked=!!d.stroke,v.filled=!!d.fill,d.stroke?(r||(r=n._stroke=$s("stroke")),v.appendChild(r),r.weight=d.weight+"px",r.color=d.color,r.opacity=d.opacity,d.dashArray?r.dashStyle=_(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=d.lineCap.replace("butt","flat"),r.joinstyle=d.lineJoin):r&&(v.removeChild(r),n._stroke=null),d.fill?(l||(l=n._fill=$s("fill")),v.appendChild(l),l.color=d.fillColor||d.color,l.opacity=d.fillOpacity):l&&(v.removeChild(l),n._fill=null)},_updateCircle:function(n){var r=n._point.round(),l=Math.round(n._radius),d=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+r.x+","+r.y+" "+l+","+d+" 0,"+65535*360)},_setPath:function(n,r){n._path.v=r},_bringToFront:function(n){ye(n._container)},_bringToBack:function(n){ln(n._container)}},Rr=It.vml?$s:Re,Js=Kn.extend({_initContainer:function(){this._container=Rr("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Rr("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ct(this._container),we(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kn.prototype._update.call(this);var n=this._bounds,r=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,l.setAttribute("width",r.x),l.setAttribute("height",r.y)),Ce(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(n){var r=n._path=Rr("path");n.options.className&&$t(r,n.options.className),n.options.interactive&&$t(r,"leaflet-interactive"),this._updateStyle(n),this._layers[c(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Ct(n._path),n.removeInteractiveTarget(n._path),delete this._layers[c(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var r=n._path,l=n.options;r&&(l.stroke?(r.setAttribute("stroke",l.color),r.setAttribute("stroke-opacity",l.opacity),r.setAttribute("stroke-width",l.weight),r.setAttribute("stroke-linecap",l.lineCap),r.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?r.setAttribute("stroke-dasharray",l.dashArray):r.removeAttribute("stroke-dasharray"),l.dashOffset?r.setAttribute("stroke-dashoffset",l.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),l.fill?(r.setAttribute("fill",l.fillColor||l.color),r.setAttribute("fill-opacity",l.fillOpacity),r.setAttribute("fill-rule",l.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(n,r){this._setPath(n,Bt(n._parts,r))},_updateCircle:function(n){var r=n._point,l=Math.max(Math.round(n._radius),1),d=Math.max(Math.round(n._radiusY),1)||l,v="a"+l+","+d+" 0 1,0 ",S=n._empty()?"M0 0":"M"+(r.x-l)+","+r.y+v+l*2+",0 "+v+-l*2+",0 ";this._setPath(n,S)},_setPath:function(n,r){n._path.setAttribute("d",r)},_bringToFront:function(n){ye(n._path)},_bringToBack:function(n){ln(n._path)}});It.vml&&Js.include(Bd);function vc(n){return It.svg||It.vml?new Js(n):null}me.include({getRenderer:function(n){var r=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var r=this._paneRenderers[n];return r===void 0&&(r=this._createRenderer({pane:n}),this._paneRenderers[n]=r),r},_createRenderer:function(n){return this.options.preferCanvas&&_c(n)||vc(n)}});var yc=ji.extend({initialize:function(n,r){ji.prototype.initialize.call(this,this._boundsToLatLngs(n),r)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=gt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function zd(n,r){return new yc(n,r)}Js.create=Rr,Js.pointsToPath=Bt,Jn.geometryToLayer=Sr,Jn.coordsToLatLng=la,Jn.coordsToLatLngs=wr,Jn.latLngToCoords=ca,Jn.latLngsToCoords=Tr,Jn.getFeature=Qi,Jn.asFeature=Er,me.mergeOptions({boxZoom:!0});var xc=kn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){ne(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){we(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ct(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Hs(),Zo(),this._startPoint=this._map.mouseEventToContainerPoint(n),ne(document,{contextmenu:Ii,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Ut("div","leaflet-zoom-box",this._container),$t(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var r=new Y(this._point,this._startPoint),l=r.getSize();Ce(this._box,r.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Ct(this._box),Te(this._container,"leaflet-crosshair")),Vs(),Xo(),we(document,{contextmenu:Ii,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var r=new at(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});me.addInitHook("addHandler","boxZoom",xc),me.mergeOptions({doubleClickZoom:!0});var Mc=kn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var r=this._map,l=r.getZoom(),d=r.options.zoomDelta,v=n.originalEvent.shiftKey?l-d:l+d;r.options.doubleClickZoom==="center"?r.setZoom(v):r.setZoomAround(n.containerPoint,v)}});me.addInitHook("addHandler","doubleClickZoom",Mc),me.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var bc=kn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new di(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}$t(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Te(this._map._container,"leaflet-grab"),Te(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=gt(this._map.options.maxBounds);this._offsetLimit=rt(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var r=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(r),this._prunePositions(r)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,r){return n-(n-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;n.x<r.min.x&&(n.x=this._viscousLimit(n.x,r.min.x)),n.y<r.min.y&&(n.y=this._viscousLimit(n.y,r.min.y)),n.x>r.max.x&&(n.x=this._viscousLimit(n.x,r.max.x)),n.y>r.max.y&&(n.y=this._viscousLimit(n.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,r=Math.round(n/2),l=this._initialWorldOffset,d=this._draggable._newPos.x,v=(d-r+l)%n+r-l,S=(d+r+l)%n-r-l,U=Math.abs(v+l)<Math.abs(S+l)?v:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=U},_onDragEnd:function(n){var r=this._map,l=r.options,d=!l.inertia||n.noInertia||this._times.length<2;if(r.fire("dragend",n),d)r.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,U=l.easeLinearity,X=v.multiplyBy(U/S),j=X.distanceTo([0,0]),lt=Math.min(l.inertiaMaxSpeed,j),Tt=X.multiplyBy(lt/j),Wt=lt/(l.inertiaDeceleration*U),he=Tt.multiplyBy(-Wt/2).round();!he.x&&!he.y?r.fire("moveend"):(he=r._limitOffset(he,r.options.maxBounds),E(function(){r.panBy(he,{duration:Wt,easeLinearity:U,noMoveStart:!0,animate:!0})}))}}});me.addInitHook("addHandler","dragging",bc),me.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Sc=kn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),ne(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),we(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,r=document.documentElement,l=n.scrollTop||r.scrollTop,d=n.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(d,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var r=this._panKeys={},l=this.keyCodes,d,v;for(d=0,v=l.left.length;d<v;d++)r[l.left[d]]=[-1*n,0];for(d=0,v=l.right.length;d<v;d++)r[l.right[d]]=[n,0];for(d=0,v=l.down.length;d<v;d++)r[l.down[d]]=[0,n];for(d=0,v=l.up.length;d<v;d++)r[l.up[d]]=[0,-1*n]},_setZoomDelta:function(n){var r=this._zoomKeys={},l=this.keyCodes,d,v;for(d=0,v=l.zoomIn.length;d<v;d++)r[l.zoomIn[d]]=n;for(d=0,v=l.zoomOut.length;d<v;d++)r[l.zoomOut[d]]=-n},_addHooks:function(){ne(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){we(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var r=n.keyCode,l=this._map,d;if(r in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(d=this._panKeys[r],n.shiftKey&&(d=W(d).multiplyBy(3)),l.options.maxBounds&&(d=l._limitOffset(W(d),l.options.maxBounds)),l.options.worldCopyJump){var v=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(d)));l.panTo(v)}else l.panBy(d)}else if(r in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Ii(n)}}});me.addInitHook("addHandler","keyboard",Sc),me.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var wc=kn.extend({addHooks:function(){ne(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){we(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var r=Yl(n),l=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var d=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),d),Ii(n)},_performZoom:function(){var n=this._map,r=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,S=l?Math.ceil(v/l)*l:v,U=n._limitZoom(r+(this._delta>0?S:-S))-r;this._delta=0,this._startTime=null,U&&(n.options.scrollWheelZoom==="center"?n.setZoom(r+U):n.setZoomAround(this._lastMousePos,r+U))}});me.addInitHook("addHandler","scrollWheelZoom",wc);var kd=600;me.mergeOptions({tapHold:It.touchNative&&It.safari&&It.mobile,tapTolerance:15});var Tc=kn.extend({addHooks:function(){ne(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){we(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var r=n.touches[0];this._startPos=this._newPos=new V(r.clientX,r.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(ne(document,"touchend",We),ne(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),kd),ne(document,"touchend touchcancel contextmenu",this._cancel,this),ne(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){we(document,"touchend",We),we(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),we(document,"touchend touchcancel contextmenu",this._cancel,this),we(document,"touchmove",this._onMove,this)},_onMove:function(n){var r=n.touches[0];this._newPos=new V(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,r){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});l._simulated=!0,r.target.dispatchEvent(l)}});me.addInitHook("addHandler","tapHold",Tc),me.mergeOptions({touchZoom:It.touch,bounceAtZoomLimits:!0});var Ec=kn.extend({addHooks:function(){$t(this._map._container,"leaflet-touch-zoom"),ne(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Te(this._map._container,"leaflet-touch-zoom"),we(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var r=this._map;if(!(!n.touches||n.touches.length!==2||r._animatingZoom||this._zooming)){var l=r.mouseEventToContainerPoint(n.touches[0]),d=r.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(l.add(d)._divideBy(2))),this._startDist=l.distanceTo(d),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),ne(document,"touchmove",this._onTouchMove,this),ne(document,"touchend touchcancel",this._onTouchEnd,this),We(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var r=this._map,l=r.mouseEventToContainerPoint(n.touches[0]),d=r.mouseEventToContainerPoint(n.touches[1]),v=l.distanceTo(d)/this._startDist;if(this._zoom=r.getScaleZoom(v,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&v<1||this._zoom>r.getMaxZoom()&&v>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var S=l._add(d)._divideBy(2)._subtract(this._centerPoint);if(v===1&&S.x===0&&S.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),R(this._animRequest);var U=o(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=E(U,this,!0),We(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,R(this._animRequest),we(document,"touchmove",this._onTouchMove,this),we(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});me.addInitHook("addHandler","touchZoom",Ec),me.BoxZoom=xc,me.DoubleClickZoom=Mc,me.Drag=bc,me.Keyboard=Sc,me.ScrollWheelZoom=wc,me.TapHold=Tc,me.TouchZoom=Ec,s.Bounds=Y,s.Browser=It,s.CRS=Mt,s.Canvas=gc,s.Circle=aa,s.CircleMarker=br,s.Class=tt,s.Control=En,s.DivIcon=fc,s.DivOverlay=Hn,s.DomEvent=sd,s.DomUtil=nd,s.Draggable=di,s.Evented=H,s.FeatureGroup=Yn,s.GeoJSON=Jn,s.GridLayer=Ys,s.Handler=kn,s.Icon=Ki,s.ImageOverlay=Ar,s.LatLng=q,s.LatLngBounds=at,s.Layer=An,s.LayerGroup=Ji,s.LineUtil=_d,s.Map=me,s.Marker=Mr,s.Mixin=ud,s.Path=fi,s.Point=V,s.PolyUtil=dd,s.Polygon=ji,s.Polyline=$n,s.Popup=Pr,s.PosAnimation=$l,s.Projection=vd,s.Rectangle=yc,s.Renderer=Kn,s.SVG=Js,s.SVGOverlay=dc,s.TileLayer=ts,s.Tooltip=Cr,s.Transformation=qt,s.Util=k,s.VideoOverlay=uc,s.bind=o,s.bounds=rt,s.canvas=_c,s.circle=Ed,s.circleMarker=Td,s.control=Zs,s.divIcon=Od,s.extend=e,s.featureGroup=bd,s.geoJSON=hc,s.geoJson=Cd,s.gridLayer=Ud,s.icon=Sd,s.imageOverlay=Rd,s.latLng=nt,s.latLngBounds=gt,s.layerGroup=Md,s.map=rd,s.marker=wd,s.point=W,s.polygon=Pd,s.polyline=Ad,s.popup=Dd,s.rectangle=zd,s.setOptions=y,s.stamp=c,s.svg=vc,s.svgOverlay=Id,s.tileLayer=pc,s.tooltip=Nd,s.transformation=Ft,s.version=t,s.videoOverlay=Ld;var Hd=window.L;s.noConflict=function(){return window.L=Hd,this},window.L=s})});function Us(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function tn(s,t,e){return Math.max(t,Math.min(e,s))}function Ol(s,t){return(s%t+t)%t}function dp(s,t,e,i,o){return i+(s-t)*(o-i)/(e-t)}function fp(s,t,e){return s!==t?(e-s)/(t-s):0}function sr(s,t,e){return(1-e)*s+e*t}function pp(s,t,e,i){return sr(s,t,1-Math.exp(-e*i))}function mp(s,t=1){return t-Math.abs(Ol(s,t*2)-t)}function gp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function _p(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function vp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function yp(s,t){return s+Math.random()*(t-s)}function xp(s){return s*(.5-Math.random())}function Mp(s){s!==void 0&&(Rh=s);let t=Rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bp(s){return s*ir}function Sp(s){return s*cr}function el(s){return(s&s-1)===0&&s!==0}function wp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tp(s,t,e,i,o){let a=Math.cos,c=Math.sin,h=a(e/2),u=c(e/2),f=a((t+i)/2),p=c((t+i)/2),g=a((t-i)/2),m=c((t-i)/2),y=a((i-t)/2),M=c((i-t)/2);switch(o){case"XYX":s.set(h*p,u*g,u*m,h*f);break;case"YZY":s.set(u*m,h*p,u*g,h*f);break;case"ZXZ":s.set(u*g,u*m,h*p,h*f);break;case"XZX":s.set(h*p,u*M,u*y,h*f);break;case"YXY":s.set(u*y,h*p,u*M,h*f);break;case"ZYZ":s.set(u*M,u*y,h*p,h*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ms(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}function Du(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ep(){let s=yo("canvas");return s.style.display="block",s}function rr(s){s in Lh||(Lh[s]=!0,console.warn(s))}function Es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ea(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Aa(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?xo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ca(s,t,e,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){Oi.fromArray(s,a);let h=o.x*Math.abs(Oi.x)+o.y*Math.abs(Oi.y)+o.z*Math.abs(Oi.z),u=t.dot(Oi),f=e.dot(Oi),p=i.dot(Oi);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>h)return!1}return!0}function Ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function kp(s,t,e,i,o,a,c,h){let u;if(t.side===un?u=i.intersectTriangle(c,a,o,!0,h):u=i.intersectTriangle(o,a,c,t.side===wi,h),u===null)return null;eo.copy(h),eo.applyMatrix4(s.matrixWorld);let f=e.ray.origin.distanceTo(eo);return f<e.near||f>e.far?null:{distance:f,point:eo.clone(),object:s}}function no(s,t,e,i,o,a,c,h,u,f){s.getVertexPosition(h,ms),s.getVertexPosition(u,gs),s.getVertexPosition(f,_s);let p=kp(s,t,e,i,ms,gs,_s,to);if(p){o&&(Kr.fromBufferAttribute(o,h),jr.fromBufferAttribute(o,u),Qr.fromBufferAttribute(o,f),p.uv=bs.getInterpolation(to,ms,gs,_s,Kr,jr,Qr,new te)),a&&(Kr.fromBufferAttribute(a,h),jr.fromBufferAttribute(a,u),Qr.fromBufferAttribute(a,f),p.uv1=bs.getInterpolation(to,ms,gs,_s,Kr,jr,Qr,new te),p.uv2=p.uv1),c&&(Wh.fromBufferAttribute(c,h),Zh.fromBufferAttribute(c,u),Xh.fromBufferAttribute(c,f),p.normal=bs.getInterpolation(to,ms,gs,_s,Wh,Zh,Xh,new G),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let g={a:h,b:u,c:f,normal:new G,materialIndex:0};bs.getNormal(ms,gs,_s,g.normal),p.face=g}return p}function Is(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let o=s[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function on(s){let t={};for(let e=0;e<s.length;e++){let i=Is(s[e]);for(let o in i)t[o]=i[o]}return t}function Hp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ou(s){return s.getRenderTarget()===null?s.outputColorSpace:ve.workingColorSpace}function Uu(){let s=null,t=!1,e=null,i=null;function o(a,c){e(a,c),i=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function qp(s,t){let e=t.isWebGL2,i=new WeakMap;function o(f,p){let g=f.array,m=f.usage,y=g.byteLength,M=s.createBuffer();s.bindBuffer(p,M),s.bufferData(p,g,m),f.onUploadCallback();let b;if(g instanceof Float32Array)b=s.FLOAT;else if(g instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(e)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=s.SHORT;else if(g instanceof Uint32Array)b=s.UNSIGNED_INT;else if(g instanceof Int32Array)b=s.INT;else if(g instanceof Int8Array)b=s.BYTE;else if(g instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:y}}function a(f,p,g){let m=p.array,y=p._updateRange,M=p.updateRanges;if(s.bindBuffer(g,f),y.count===-1&&M.length===0&&s.bufferSubData(g,0,m),M.length!==0){for(let b=0,x=M.length;b<x;b++){let _=M[b];e?s.bufferSubData(g,_.start*m.BYTES_PER_ELEMENT,m,_.start,_.count):s.bufferSubData(g,_.start*m.BYTES_PER_ELEMENT,m.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}y.count!==-1&&(e?s.bufferSubData(g,y.offset*m.BYTES_PER_ELEMENT,m,y.offset,y.count):s.bufferSubData(g,y.offset*m.BYTES_PER_ELEMENT,m.subarray(y.offset,y.offset+y.count)),y.count=-1),p.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),i.get(f)}function h(f){f.isInterleavedBufferAttribute&&(f=f.data);let p=i.get(f);p&&(s.deleteBuffer(p.buffer),i.delete(f))}function u(f,p){if(f.isGLBufferAttribute){let m=i.get(f);(!m||m.version<f.version)&&i.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);let g=i.get(f);if(g===void 0)i.set(f,o(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(g.buffer,f,p),g.version=f.version}}return{get:c,remove:h,update:u}}function A_(s,t,e,i,o,a,c){let h=new ae(0),u=a===!0?0:1,f,p,g=null,m=0,y=null;function M(x,_){let I=!1,w=_.isScene===!0?_.background:null;w&&w.isTexture&&(w=(_.backgroundBlurriness>0?e:t).get(w)),w===null?b(h,u):w&&w.isColor&&(b(w,1),I=!0);let D=s.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===No)?(p===void 0&&(p=new Sn(new ur(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Is(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=ve.getTransfer(w.colorSpace)!==Ae,(g!==w||m!==w.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=w,m=w.version,y=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new Sn(new ol(2,2),new Un({name:"BackgroundMaterial",uniforms:Is(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=ve.getTransfer(w.colorSpace)!==Ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||m!==w.version||y!==s.toneMapping)&&(f.material.needsUpdate=!0,g=w,m=w.version,y=s.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null))}function b(x,_){x.getRGB(so,Ou(s)),i.buffers.color.setClear(so.r,so.g,so.b,_,c)}return{getClearColor:function(){return h},setClearColor:function(x,_=1){h.set(x),u=_,b(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(x){u=x,b(h,u)},render:M}}function P_(s,t,e,i){let o=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),c=i.isWebGL2||a!==null,h={},u=x(null),f=u,p=!1;function g(C,H,V,it,W){let Y=!1;if(c){let rt=b(it,V,H);f!==rt&&(f=rt,y(f.object)),Y=_(C,it,V,W),Y&&I(C,it,V,W)}else{let rt=H.wireframe===!0;(f.geometry!==it.id||f.program!==V.id||f.wireframe!==rt)&&(f.geometry=it.id,f.program=V.id,f.wireframe=rt,Y=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||p)&&(p=!1,st(C,H,V,it),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function m(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function y(C){return i.isWebGL2?s.bindVertexArray(C):a.bindVertexArrayOES(C)}function M(C){return i.isWebGL2?s.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function b(C,H,V){let it=V.wireframe===!0,W=h[C.id];W===void 0&&(W={},h[C.id]=W);let Y=W[H.id];Y===void 0&&(Y={},W[H.id]=Y);let rt=Y[it];return rt===void 0&&(rt=x(m()),Y[it]=rt),rt}function x(C){let H=[],V=[],it=[];for(let W=0;W<o;W++)H[W]=0,V[W]=0,it[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:it,object:C,attributes:{},index:null}}function _(C,H,V,it){let W=f.attributes,Y=H.attributes,rt=0,at=V.getAttributes();for(let gt in at)if(at[gt].location>=0){let nt=W[gt],Mt=Y[gt];if(Mt===void 0&&(gt==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),gt==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),nt===void 0||nt.attribute!==Mt||Mt&&nt.data!==Mt.data)return!0;rt++}return f.attributesNum!==rt||f.index!==it}function I(C,H,V,it){let W={},Y=H.attributes,rt=0,at=V.getAttributes();for(let gt in at)if(at[gt].location>=0){let nt=Y[gt];nt===void 0&&(gt==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),gt==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor));let Mt={};Mt.attribute=nt,nt&&nt.data&&(Mt.data=nt.data),W[gt]=Mt,rt++}f.attributes=W,f.attributesNum=rt,f.index=it}function w(){let C=f.newAttributes;for(let H=0,V=C.length;H<V;H++)C[H]=0}function D(C){B(C,0)}function B(C,H){let V=f.newAttributes,it=f.enabledAttributes,W=f.attributeDivisors;V[C]=1,it[C]===0&&(s.enableVertexAttribArray(C),it[C]=1),W[C]!==H&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,H),W[C]=H)}function O(){let C=f.newAttributes,H=f.enabledAttributes;for(let V=0,it=H.length;V<it;V++)H[V]!==C[V]&&(s.disableVertexAttribArray(V),H[V]=0)}function F(C,H,V,it,W,Y,rt){rt===!0?s.vertexAttribIPointer(C,H,V,W,Y):s.vertexAttribPointer(C,H,V,it,W,Y)}function st(C,H,V,it){if(i.isWebGL2===!1&&(C.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();let W=it.attributes,Y=V.getAttributes(),rt=H.defaultAttributeValues;for(let at in Y){let gt=Y[at];if(gt.location>=0){let q=W[at];if(q===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){let nt=q.normalized,Mt=q.itemSize,At=e.get(q);if(At===void 0)continue;let Lt=At.buffer,Zt=At.type,qt=At.bytesPerElement,Ft=i.isWebGL2===!0&&(Zt===s.INT||Zt===s.UNSIGNED_INT||q.gpuType===Su);if(q.isInterleavedBufferAttribute){let oe=q.data,$=oe.stride,Re=q.offset;if(oe.isInstancedInterleavedBuffer){for(let Bt=0;Bt<gt.locationSize;Bt++)B(gt.location+Bt,oe.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Bt=0;Bt<gt.locationSize;Bt++)D(gt.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let Bt=0;Bt<gt.locationSize;Bt++)F(gt.location+Bt,Mt/gt.locationSize,Zt,nt,$*qt,(Re+Mt/gt.locationSize*Bt)*qt,Ft)}else{if(q.isInstancedBufferAttribute){for(let oe=0;oe<gt.locationSize;oe++)B(gt.location+oe,q.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<gt.locationSize;oe++)D(gt.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let oe=0;oe<gt.locationSize;oe++)F(gt.location+oe,Mt/gt.locationSize,Zt,nt,Mt*qt,Mt/gt.locationSize*oe*qt,Ft)}}else if(rt!==void 0){let nt=rt[at];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(gt.location,nt);break;case 3:s.vertexAttrib3fv(gt.location,nt);break;case 4:s.vertexAttrib4fv(gt.location,nt);break;default:s.vertexAttrib1fv(gt.location,nt)}}}}O()}function E(){tt();for(let C in h){let H=h[C];for(let V in H){let it=H[V];for(let W in it)M(it[W].object),delete it[W];delete H[V]}delete h[C]}}function R(C){if(h[C.id]===void 0)return;let H=h[C.id];for(let V in H){let it=H[V];for(let W in it)M(it[W].object),delete it[W];delete H[V]}delete h[C.id]}function k(C){for(let H in h){let V=h[H];if(V[C.id]===void 0)continue;let it=V[C.id];for(let W in it)M(it[W].object),delete it[W];delete V[C.id]}}function tt(){ht(),p=!0,f!==u&&(f=u,y(f.object))}function ht(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:g,reset:tt,resetDefaultState:ht,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:D,disableUnusedAttributes:O}}function C_(s,t,e,i){let o=i.isWebGL2,a;function c(p){a=p}function h(p,g){s.drawArrays(a,p,g),e.update(g,a,1)}function u(p,g,m){if(m===0)return;let y,M;if(o)y=s,M="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[M](a,p,g,m),e.update(g,a,m)}function f(p,g,m){if(m===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<m;M++)this.render(p[M],g[M]);else{y.multiDrawArraysWEBGL(a,p,0,g,0,m);let M=0;for(let b=0;b<m;b++)M+=g[b];e.update(M,a,1)}}this.setMode=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function R_(s,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",h=e.precision!==void 0?e.precision:"highp",u=a(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let f=c||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,D=c||t.has("OES_texture_float"),B=w&&D,O=c?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:f,getMaxAnisotropy:o,getMaxPrecision:a,precision:h,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:I,vertexTextures:w,floatFragmentTextures:D,floatVertexTextures:B,maxSamples:O}}function L_(s){let t=this,e=null,i=0,o=!1,a=!1,c=new pn,h=new ue,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){let y=g.length!==0||m||i!==0||o;return o=m,i=g.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){e=p(g,m,0)},this.setState=function(g,m,y){let M=g.clippingPlanes,b=g.clipIntersection,x=g.clipShadows,_=s.get(g);if(!o||M===null||M.length===0||a&&!x)a?p(null):f();else{let I=a?0:i,w=I*4,D=_.clippingState||null;u.value=D,D=p(M,m,w,y);for(let B=0;B!==w;++B)D[B]=e[B];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(g,m,y,M){let b=g!==null?g.length:0,x=null;if(b!==0){if(x=u.value,M!==!0||x===null){let _=y+b*4,I=m.matrixWorldInverse;h.getNormalMatrix(I),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,D=y;w!==b;++w,D+=4)c.copy(g[w]).applyMatrix4(I,h),c.normal.toArray(x,D),x[D+3]=c.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function I_(s){let t=new WeakMap;function e(c,h){return h===Ja?c.mapping=Ps:h===Ka&&(c.mapping=Cs),c}function i(c){if(c&&c.isTexture){let h=c.mapping;if(h===Ja||h===Ka)if(t.has(c)){let u=t.get(c).texture;return e(u,c.mapping)}else{let u=c.image;if(u&&u.height>0){let f=new rl(u.height/2);return f.fromEquirectangularTexture(s,c),t.set(c,f),c.addEventListener("dispose",o),e(f.texture,c.mapping)}else return null}}return c}function o(c){let h=c.target;h.removeEventListener("dispose",o);let u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}function D_(s){let t=[],e=[],i=[],o=s,a=s-Ss+1+qh.length;for(let c=0;c<a;c++){let h=Math.pow(2,o);e.push(h);let u=1/h;c>s-Ss?u=qh[c-s+Ss-1]:c===0&&(u=0),i.push(u);let f=1/(h-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,M=6,b=3,x=2,_=1,I=new Float32Array(b*M*y),w=new Float32Array(x*M*y),D=new Float32Array(_*M*y);for(let O=0;O<y;O++){let F=O%3*2/3-1,st=O>2?0:-1,E=[F,st,0,F+2/3,st,0,F+2/3,st+1,0,F,st,0,F+2/3,st+1,0,F,st+1,0];I.set(E,b*M*O),w.set(m,x*M*O);let R=[O,O,O,O,O,O];D.set(R,_*M*O)}let B=new en;B.setAttribute("position",new Ye(I,b)),B.setAttribute("uv",new Ye(w,x)),B.setAttribute("faceIndex",new Ye(D,_)),t.push(B),o>Ss&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jh(s,t,e){let i=new ai(s,t,e);return i.texture.mapping=No,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(s,t,e,i,o){s.viewport.set(t,e,i,o),s.scissor.set(t,e,i,o)}function N_(s,t,e){let i=new Float32Array(ki),o=new G(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Kh(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jh(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O_(s){let t=new WeakMap,e=null;function i(h){if(h&&h.isTexture){let u=h.mapping,f=u===Ja||u===Ka,p=u===Ps||u===Cs;if(f||p)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let g=t.get(h);return e===null&&(e=new Po(s)),g=f?e.fromEquirectangular(h,g):e.fromCubemap(h,g),t.set(h,g),g.texture}else{if(t.has(h))return t.get(h).texture;{let g=h.image;if(f&&g&&g.height>0||p&&g&&o(g)){e===null&&(e=new Po(s));let m=f?e.fromEquirectangular(h):e.fromCubemap(h);return t.set(h,m),h.addEventListener("dispose",a),m.texture}else return null}}}return h}function o(h){let u=0,f=6;for(let p=0;p<f;p++)h[p]!==void 0&&u++;return u===f}function a(h){let u=h.target;u.removeEventListener("dispose",a);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function U_(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function F_(s,t,e,i){let o={},a=new WeakMap;function c(g){let m=g.target;m.index!==null&&t.remove(m.index);for(let M in m.attributes)t.remove(m.attributes[M]);for(let M in m.morphAttributes){let b=m.morphAttributes[M];for(let x=0,_=b.length;x<_;x++)t.remove(b[x])}m.removeEventListener("dispose",c),delete o[m.id];let y=a.get(m);y&&(t.remove(y),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function h(g,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,e.memory.geometries++),m}function u(g){let m=g.attributes;for(let M in m)t.update(m[M],s.ARRAY_BUFFER);let y=g.morphAttributes;for(let M in y){let b=y[M];for(let x=0,_=b.length;x<_;x++)t.update(b[x],s.ARRAY_BUFFER)}}function f(g){let m=[],y=g.index,M=g.attributes.position,b=0;if(y!==null){let I=y.array;b=y.version;for(let w=0,D=I.length;w<D;w+=3){let B=I[w+0],O=I[w+1],F=I[w+2];m.push(B,O,O,F,F,B)}}else if(M!==void 0){let I=M.array;b=M.version;for(let w=0,D=I.length/3-1;w<D;w+=3){let B=w+0,O=w+1,F=w+2;m.push(B,O,O,F,F,B)}}else return;let x=new(Du(m)?To:wo)(m,1);x.version=b;let _=a.get(g);_&&t.remove(_),a.set(g,x)}function p(g){let m=a.get(g);if(m){let y=g.index;y!==null&&m.version<y.version&&f(g)}else f(g);return a.get(g)}return{get:h,update:u,getWireframeAttribute:p}}function B_(s,t,e,i){let o=i.isWebGL2,a;function c(y){a=y}let h,u;function f(y){h=y.type,u=y.bytesPerElement}function p(y,M){s.drawElements(a,M,h,y*u),e.update(M,a,1)}function g(y,M,b){if(b===0)return;let x,_;if(o)x=s,_="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](a,M,h,y*u,b),e.update(M,a,b)}function m(y,M,b){if(b===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<b;_++)this.render(y[_]/u,M[_]);else{x.multiDrawElementsWEBGL(a,M,0,h,y,0,b);let _=0;for(let I=0;I<b;I++)_+=M[I];e.update(_,a,1)}}this.setMode=c,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=m}function z_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,h){switch(e.calls++,c){case s.TRIANGLES:e.triangles+=h*(a/3);break;case s.LINES:e.lines+=h*(a/2);break;case s.LINE_STRIP:e.lines+=h*(a-1);break;case s.LINE_LOOP:e.lines+=h*a;break;case s.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function k_(s,t){return s[0]-t[0]}function H_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function V_(s,t,e){let i={},o=new Float32Array(8),a=new WeakMap,c=new qe,h=[];for(let f=0;f<8;f++)h[f]=[f,0];function u(f,p,g){let m=f.morphTargetInfluences;if(t.isWebGL2===!0){let y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=y!==void 0?y.length:0,b=a.get(p);if(b===void 0||b.count!==M){let C=function(){tt.dispose(),a.delete(p),p.removeEventListener("dispose",C)};b!==void 0&&b.texture.dispose();let I=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,D=p.morphAttributes.color!==void 0,B=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],F=p.morphAttributes.color||[],st=0;I===!0&&(st=1),w===!0&&(st=2),D===!0&&(st=3);let E=p.attributes.position.count*st,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let k=new Float32Array(E*R*4*M),tt=new bo(k,E,R,M);tt.type=xi,tt.needsUpdate=!0;let ht=st*4;for(let H=0;H<M;H++){let V=B[H],it=O[H],W=F[H],Y=E*R*4*H;for(let rt=0;rt<V.count;rt++){let at=rt*ht;I===!0&&(c.fromBufferAttribute(V,rt),k[Y+at+0]=c.x,k[Y+at+1]=c.y,k[Y+at+2]=c.z,k[Y+at+3]=0),w===!0&&(c.fromBufferAttribute(it,rt),k[Y+at+4]=c.x,k[Y+at+5]=c.y,k[Y+at+6]=c.z,k[Y+at+7]=0),D===!0&&(c.fromBufferAttribute(W,rt),k[Y+at+8]=c.x,k[Y+at+9]=c.y,k[Y+at+10]=c.z,k[Y+at+11]=W.itemSize===4?c.w:1)}}b={count:M,texture:tt,size:new te(E,R)},a.set(p,b),p.addEventListener("dispose",C)}let x=0;for(let I=0;I<m.length;I++)x+=m[I];let _=p.morphTargetsRelative?1:1-x;g.getUniforms().setValue(s,"morphTargetBaseInfluence",_),g.getUniforms().setValue(s,"morphTargetInfluences",m),g.getUniforms().setValue(s,"morphTargetsTexture",b.texture,e),g.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let y=m===void 0?0:m.length,M=i[p.id];if(M===void 0||M.length!==y){M=[];for(let w=0;w<y;w++)M[w]=[w,0];i[p.id]=M}for(let w=0;w<y;w++){let D=M[w];D[0]=w,D[1]=m[w]}M.sort(H_);for(let w=0;w<8;w++)w<y&&M[w][1]?(h[w][0]=M[w][0],h[w][1]=M[w][1]):(h[w][0]=Number.MAX_SAFE_INTEGER,h[w][1]=0);h.sort(k_);let b=p.morphAttributes.position,x=p.morphAttributes.normal,_=0;for(let w=0;w<8;w++){let D=h[w],B=D[0],O=D[1];B!==Number.MAX_SAFE_INTEGER&&O?(b&&p.getAttribute("morphTarget"+w)!==b[B]&&p.setAttribute("morphTarget"+w,b[B]),x&&p.getAttribute("morphNormal"+w)!==x[B]&&p.setAttribute("morphNormal"+w,x[B]),o[w]=O,_+=O):(b&&p.hasAttribute("morphTarget"+w)===!0&&p.deleteAttribute("morphTarget"+w),x&&p.hasAttribute("morphNormal"+w)===!0&&p.deleteAttribute("morphNormal"+w),o[w]=0)}let I=p.morphTargetsRelative?1:1-_;g.getUniforms().setValue(s,"morphTargetBaseInfluence",I),g.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:u}}function G_(s,t,e,i){let o=new WeakMap;function a(u){let f=i.render.frame,p=u.geometry,g=t.get(u,p);if(o.get(g)!==f&&(t.update(g),o.set(g,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),o.get(u)!==f&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),o.set(u,f))),u.isSkinnedMesh){let m=u.skeleton;o.get(m)!==f&&(m.update(),o.set(m,f))}return g}function c(){o=new WeakMap}function h(u){let f=u.target;f.removeEventListener("dispose",h),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:c}}function Fs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let o=t*e,a=Qh[o];if(a===void 0&&(a=new Float32Array(o),Qh[o]=a),t!==0){i.toArray(a,0);for(let c=1,h=0;c!==t;++c)h+=e,s[c].toArray(a,h)}return a}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Uo(s,t){let e=tu[t];e===void 0&&(e=new Int32Array(t),tu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function W_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Z_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function X_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function q_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function Y_(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;iu.set(i),s.uniformMatrix2fv(this.addr,!1,iu),ze(e,i)}}function $_(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;nu.set(i),s.uniformMatrix3fv(this.addr,!1,nu),ze(e,i)}}function J_(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;eu.set(i),s.uniformMatrix4fv(this.addr,!1,eu),ze(e,i)}}function K_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function j_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function Q_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function tv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function ev(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function nv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function iv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function sv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function rv(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a=this.type===s.SAMPLER_2D_SHADOW?Bu:Fu;e.setTexture2D(t||a,o)}function ov(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||ku,o)}function av(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||Hu,o)}function lv(s,t,e){let i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||zu,o)}function cv(s){switch(s){case 5126:return W_;case 35664:return Z_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return $_;case 35676:return J_;case 5124:case 35670:return K_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(s,t){s.uniform1fv(this.addr,t)}function uv(s,t){let e=Fs(t,this.size,2);s.uniform2fv(this.addr,e)}function dv(s,t){let e=Fs(t,this.size,3);s.uniform3fv(this.addr,e)}function fv(s,t){let e=Fs(t,this.size,4);s.uniform4fv(this.addr,e)}function pv(s,t){let e=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mv(s,t){let e=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gv(s,t){let e=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _v(s,t){s.uniform1iv(this.addr,t)}function vv(s,t){s.uniform2iv(this.addr,t)}function yv(s,t){s.uniform3iv(this.addr,t)}function xv(s,t){s.uniform4iv(this.addr,t)}function Mv(s,t){s.uniform1uiv(this.addr,t)}function bv(s,t){s.uniform2uiv(this.addr,t)}function Sv(s,t){s.uniform3uiv(this.addr,t)}function wv(s,t){s.uniform4uiv(this.addr,t)}function Tv(s,t,e){let i=this.cache,o=t.length,a=Uo(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ze(i,a));for(let c=0;c!==o;++c)e.setTexture2D(t[c]||Fu,a[c])}function Ev(s,t,e){let i=this.cache,o=t.length,a=Uo(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ze(i,a));for(let c=0;c!==o;++c)e.setTexture3D(t[c]||ku,a[c])}function Av(s,t,e){let i=this.cache,o=t.length,a=Uo(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ze(i,a));for(let c=0;c!==o;++c)e.setTextureCube(t[c]||Hu,a[c])}function Pv(s,t,e){let i=this.cache,o=t.length,a=Uo(e,o);Be(i,a)||(s.uniform1iv(this.addr,a),ze(i,a));for(let c=0;c!==o;++c)e.setTexture2DArray(t[c]||zu,a[c])}function Cv(s){switch(s){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return vv;case 35668:case 35672:return yv;case 35669:case 35673:return xv;case 5125:return Mv;case 36294:return bv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Pv}}function su(s,t){s.seq.push(t),s.map[t.id]=t}function Rv(s,t,e){let i=s.name,o=i.length;for(Xa.lastIndex=0;;){let a=Xa.exec(i),c=Xa.lastIndex,h=a[1],u=a[2]==="]",f=a[3];if(u&&(h=h|0),f===void 0||f==="["&&c+2===o){su(e,f===void 0?new ll(h,s,t):new cl(h,s,t));break}else{let g=e.map[h];g===void 0&&(g=new hl(h),su(e,g)),e=g}}}function ru(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}function Dv(s,t){let e=s.split(`
`),i=[],o=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=o;c<a;c++){let h=c+1;i.push(`${h===t?">":" "} ${h}: ${e[c]}`)}return i.join(`
`)}function Nv(s){let t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(s),i;switch(t===e?i="":t===go&&e===mo?i="LinearDisplayP3ToLinearSRGB":t===mo&&e===go&&(i="LinearSRGBToLinearDisplayP3"),s){case Nn:case Oo:return[i,"LinearTransferOETF"];case Xe:case Nl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function ou(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(i&&o==="")return"";let a=/ERROR: 0:(\d+)/.exec(o);if(a){let c=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+Dv(s.getShaderSource(t),c)}else return o}function Ov(s,t){let e=Nv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Uv(s,t){let e;switch(t){case kf:e="Linear";break;case Hf:e="Reinhard";break;case Vf:e="OptimizedCineon";break;case Gf:e="ACESFilmic";break;case Zf:e="AgX";break;case Wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Fv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function Bv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ws).join(`
`)}function zv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kv(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){let a=s.getActiveAttrib(t,o),c=a.name,h=1;a.type===s.FLOAT_MAT2&&(h=2),a.type===s.FLOAT_MAT3&&(h=3),a.type===s.FLOAT_MAT4&&(h=4),e[c]={type:a.type,location:s.getAttribLocation(t,c),locationSize:h}}return e}function ws(s){return s!==""}function au(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function ul(s){return s.replace(Hv,Gv)}function Gv(s,t){let e=re[t];if(e===void 0){let i=Vv.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}function cu(s){return s.replace(Wv,Zv)}function Zv(s,t,e,i){let o="";for(let a=parseInt(t);a<parseInt(e);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function hu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===pf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function qv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Cs:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function $v(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mu:t="ENVMAP_BLENDING_MULTIPLY";break;case Bf:t="ENVMAP_BLENDING_MIX";break;case zf:t="ENVMAP_BLENDING_ADD";break}return t}function Jv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Kv(s,t,e,i){let o=s.getContext(),a=e.defines,c=e.vertexShader,h=e.fragmentShader,u=Xv(e),f=qv(e),p=Yv(e),g=$v(e),m=Jv(e),y=e.isWebGL2?"":Fv(e),M=Bv(e),b=zv(a),x=o.createProgram(),_,I,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(ws).join(`
`),_.length>0&&(_+=`
`),I=[y,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(ws).join(`
`),I.length>0&&(I+=`
`)):(_=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),I=[y,hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?re.tonemapping_pars_fragment:"",e.toneMapping!==bi?Uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Ov("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),c=ul(c),c=au(c,e),c=lu(c,e),h=ul(h),h=au(h,e),h=lu(h,e),c=cu(c),h=cu(h),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,I=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);let D=w+_+c,B=w+I+h,O=ru(o,o.VERTEX_SHADER,D),F=ru(o,o.FRAGMENT_SHADER,B);o.attachShader(x,O),o.attachShader(x,F),e.index0AttributeName!==void 0?o.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function st(tt){if(s.debug.checkShaderErrors){let ht=o.getProgramInfoLog(x).trim(),C=o.getShaderInfoLog(O).trim(),H=o.getShaderInfoLog(F).trim(),V=!0,it=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,x,O,F);else{let W=ou(o,O,"vertex"),Y=ou(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Program Info Log: `+ht+`
`+W+`
`+Y)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(C===""||H==="")&&(it=!1);it&&(tt.diagnostics={runnable:V,programLog:ht,vertexShader:{log:C,prefix:_},fragmentShader:{log:H,prefix:I}})}o.deleteShader(O),o.deleteShader(F),E=new As(o,x),R=kv(o,x)}let E;this.getUniforms=function(){return E===void 0&&st(this),E};let R;this.getAttributes=function(){return R===void 0&&st(this),R};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(x,Lv)),k},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=F,this}function Qv(s,t,e,i,o,a,c){let h=new hr,u=new dl,f=[],p=o.isWebGL2,g=o.logarithmicDepthBuffer,m=o.vertexTextures,y=o.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return E===0?"uv":`uv${E}`}function x(E,R,k,tt,ht){let C=tt.fog,H=ht.geometry,V=E.isMeshStandardMaterial?tt.environment:null,it=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),W=it&&it.mapping===No?it.image.height:null,Y=M[E.type];E.precision!==null&&(y=o.getMaxPrecision(E.precision),y!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",y,"instead."));let rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=rt!==void 0?rt.length:0,gt=0;H.morphAttributes.position!==void 0&&(gt=1),H.morphAttributes.normal!==void 0&&(gt=2),H.morphAttributes.color!==void 0&&(gt=3);let q,nt,Mt,At;if(Y){let Ve=Gn[Y];q=Ve.vertexShader,nt=Ve.fragmentShader}else q=E.vertexShader,nt=E.fragmentShader,u.update(E),Mt=u.getVertexShaderID(E),At=u.getFragmentShaderID(E);let Lt=s.getRenderTarget(),Zt=ht.isInstancedMesh===!0,qt=ht.isBatchedMesh===!0,Ft=!!E.map,oe=!!E.matcap,$=!!it,Re=!!E.aoMap,Bt=!!E.lightMap,Gt=!!E.bumpMap,Pt=!!E.normalMap,be=!!E.displacementMap,Jt=!!E.emissiveMap,P=!!E.metalnessMap,T=!!E.roughnessMap,J=E.anisotropy>0,pt=E.clearcoat>0,dt=E.iridescence>0,ft=E.sheen>0,Rt=E.transmission>0,St=J&&!!E.anisotropyMap,Et=pt&&!!E.clearcoatMap,zt=pt&&!!E.clearcoatNormalMap,jt=pt&&!!E.clearcoatRoughnessMap,ut=dt&&!!E.iridescenceMap,le=dt&&!!E.iridescenceThicknessMap,N=ft&&!!E.sheenColorMap,ct=ft&&!!E.sheenRoughnessMap,xt=!!E.specularMap,mt=!!E.specularColorMap,Dt=!!E.specularIntensityMap,se=Rt&&!!E.transmissionMap,ce=Rt&&!!E.thicknessMap,ee=!!E.gradientMap,yt=!!E.alphaMap,z=E.alphaTest>0,_t=!!E.alphaHash,vt=!!E.extensions,kt=!!H.attributes.uv1,Nt=!!H.attributes.uv2,pe=!!H.attributes.uv3,fe=bi;return E.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(fe=s.toneMapping),{isWebGL2:p,shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:nt,defines:E.defines,customVertexShaderID:Mt,customFragmentShaderID:At,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:y,batching:qt,instancing:Zt,instancingColor:Zt&&ht.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Nn,map:Ft,matcap:oe,envMap:$,envMapMode:$&&it.mapping,envMapCubeUVHeight:W,aoMap:Re,lightMap:Bt,bumpMap:Gt,normalMap:Pt,displacementMap:m&&be,emissiveMap:Jt,normalMapObjectSpace:Pt&&E.normalMapType===sp,normalMapTangentSpace:Pt&&E.normalMapType===ip,metalnessMap:P,roughnessMap:T,anisotropy:J,anisotropyMap:St,clearcoat:pt,clearcoatMap:Et,clearcoatNormalMap:zt,clearcoatRoughnessMap:jt,iridescence:dt,iridescenceMap:ut,iridescenceThicknessMap:le,sheen:ft,sheenColorMap:N,sheenRoughnessMap:ct,specularMap:xt,specularColorMap:mt,specularIntensityMap:Dt,transmission:Rt,transmissionMap:se,thicknessMap:ce,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Ts,alphaMap:yt,alphaTest:z,alphaHash:_t,combine:E.combine,mapUv:Ft&&b(E.map.channel),aoMapUv:Re&&b(E.aoMap.channel),lightMapUv:Bt&&b(E.lightMap.channel),bumpMapUv:Gt&&b(E.bumpMap.channel),normalMapUv:Pt&&b(E.normalMap.channel),displacementMapUv:be&&b(E.displacementMap.channel),emissiveMapUv:Jt&&b(E.emissiveMap.channel),metalnessMapUv:P&&b(E.metalnessMap.channel),roughnessMapUv:T&&b(E.roughnessMap.channel),anisotropyMapUv:St&&b(E.anisotropyMap.channel),clearcoatMapUv:Et&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:zt&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:le&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:N&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:ct&&b(E.sheenRoughnessMap.channel),specularMapUv:xt&&b(E.specularMap.channel),specularColorMapUv:mt&&b(E.specularColorMap.channel),specularIntensityMapUv:Dt&&b(E.specularIntensityMap.channel),transmissionMapUv:se&&b(E.transmissionMap.channel),thicknessMapUv:ce&&b(E.thicknessMap.channel),alphaMapUv:yt&&b(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||J),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:kt,vertexUv2s:Nt,vertexUv3s:pe,pointsUvs:ht.isPoints===!0&&!!H.attributes.uv&&(Ft||yt),fog:!!C,useFog:E.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:ht.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:gt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ft&&E.map.isVideoTexture===!0&&ve.getTransfer(E.map.colorSpace)===Ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===In,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:vt&&E.extensions.derivatives===!0,extensionFragDepth:vt&&E.extensions.fragDepth===!0,extensionDrawBuffers:vt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vt&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function _(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let k in E.defines)R.push(k),R.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(I(R,E),w(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function I(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function w(E,R){h.disableAll(),R.isWebGL2&&h.enable(0),R.supportsVertexTextures&&h.enable(1),R.instancing&&h.enable(2),R.instancingColor&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),E.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.skinning&&h.enable(4),R.morphTargets&&h.enable(5),R.morphNormals&&h.enable(6),R.morphColors&&h.enable(7),R.premultipliedAlpha&&h.enable(8),R.shadowMapEnabled&&h.enable(9),R.useLegacyLights&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),E.push(h.mask)}function D(E){let R=M[E.type],k;if(R){let tt=Gn[R];k=Vp.clone(tt.uniforms)}else k=E.uniforms;return k}function B(E,R){let k;for(let tt=0,ht=f.length;tt<ht;tt++){let C=f[tt];if(C.cacheKey===R){k=C,++k.usedTimes;break}}return k===void 0&&(k=new Kv(s,R,E,a),f.push(k)),k}function O(E){if(--E.usedTimes===0){let R=f.indexOf(E);f[R]=f[f.length-1],f.pop(),E.destroy()}}function F(E){u.remove(E)}function st(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:D,acquireProgram:B,releaseProgram:O,releaseShaderCache:F,programs:f,dispose:st}}function t0(){let s=new WeakMap;function t(a){let c=s.get(a);return c===void 0&&(c={},s.set(a,c)),c}function e(a){s.delete(a)}function i(a,c,h){s.get(a)[c]=h}function o(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function e0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function du(){let s=[],t=0,e=[],i=[],o=[];function a(){t=0,e.length=0,i.length=0,o.length=0}function c(g,m,y,M,b,x){let _=s[t];return _===void 0?(_={id:g.id,object:g,geometry:m,material:y,groupOrder:M,renderOrder:g.renderOrder,z:b,group:x},s[t]=_):(_.id=g.id,_.object=g,_.geometry=m,_.material=y,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=b,_.group=x),t++,_}function h(g,m,y,M,b,x){let _=c(g,m,y,M,b,x);y.transmission>0?i.push(_):y.transparent===!0?o.push(_):e.push(_)}function u(g,m,y,M,b,x){let _=c(g,m,y,M,b,x);y.transmission>0?i.unshift(_):y.transparent===!0?o.unshift(_):e.unshift(_)}function f(g,m){e.length>1&&e.sort(g||e0),i.length>1&&i.sort(m||uu),o.length>1&&o.sort(m||uu)}function p(){for(let g=t,m=s.length;g<m;g++){let y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:o,init:a,push:h,unshift:u,finish:p,sort:f}}function n0(){let s=new WeakMap;function t(i,o){let a=s.get(i),c;return a===void 0?(c=new du,s.set(i,[c])):o>=a.length?(c=new du,a.push(c)):c=a[o],c}function e(){s=new WeakMap}return{get:t,dispose:e}}function i0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new ae};break;case"SpotLight":e={position:new G,direction:new G,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=e,e}}}function s0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}function o0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function a0(s,t){let e=new i0,i=s0(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new G);let a=new G,c=new Fe,h=new Fe;function u(p,g){let m=0,y=0,M=0;for(let tt=0;tt<9;tt++)o.probe[tt].set(0,0,0);let b=0,x=0,_=0,I=0,w=0,D=0,B=0,O=0,F=0,st=0,E=0;p.sort(o0);let R=g===!0?Math.PI:1;for(let tt=0,ht=p.length;tt<ht;tt++){let C=p[tt],H=C.color,V=C.intensity,it=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)m+=H.r*V*R,y+=H.g*V*R,M+=H.b*V*R;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)o.probe[Y].addScaledVector(C.sh.coefficients[Y],V);E++}else if(C.isDirectionalLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*R),C.castShadow){let rt=C.shadow,at=i.get(C);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,o.directionalShadow[b]=at,o.directionalShadowMap[b]=W,o.directionalShadowMatrix[b]=C.shadow.matrix,D++}o.directional[b]=Y,b++}else if(C.isSpotLight){let Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(H).multiplyScalar(V*R),Y.distance=it,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,o.spot[_]=Y;let rt=C.shadow;if(C.map&&(o.spotLightMap[F]=C.map,F++,rt.updateMatrices(C),C.castShadow&&st++),o.spotLightMatrix[_]=rt.matrix,C.castShadow){let at=i.get(C);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,o.spotShadow[_]=at,o.spotShadowMap[_]=W,O++}_++}else if(C.isRectAreaLight){let Y=e.get(C);Y.color.copy(H).multiplyScalar(V),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),o.rectArea[I]=Y,I++}else if(C.isPointLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*R),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let rt=C.shadow,at=i.get(C);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,at.shadowCameraNear=rt.camera.near,at.shadowCameraFar=rt.camera.far,o.pointShadow[x]=at,o.pointShadowMap[x]=W,o.pointShadowMatrix[x]=C.shadow.matrix,B++}o.point[x]=Y,x++}else if(C.isHemisphereLight){let Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(V*R),Y.groundColor.copy(C.groundColor).multiplyScalar(V*R),o.hemi[w]=Y,w++}}I>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=bt.LTC_FLOAT_1,o.rectAreaLTC2=bt.LTC_FLOAT_2):(o.rectAreaLTC1=bt.LTC_HALF_1,o.rectAreaLTC2=bt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=bt.LTC_FLOAT_1,o.rectAreaLTC2=bt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=bt.LTC_HALF_1,o.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=m,o.ambient[1]=y,o.ambient[2]=M;let k=o.hash;(k.directionalLength!==b||k.pointLength!==x||k.spotLength!==_||k.rectAreaLength!==I||k.hemiLength!==w||k.numDirectionalShadows!==D||k.numPointShadows!==B||k.numSpotShadows!==O||k.numSpotMaps!==F||k.numLightProbes!==E)&&(o.directional.length=b,o.spot.length=_,o.rectArea.length=I,o.point.length=x,o.hemi.length=w,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=B,o.pointShadowMap.length=B,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=B,o.spotLightMatrix.length=O+F-st,o.spotLightMap.length=F,o.numSpotLightShadowsWithMaps=st,o.numLightProbes=E,k.directionalLength=b,k.pointLength=x,k.spotLength=_,k.rectAreaLength=I,k.hemiLength=w,k.numDirectionalShadows=D,k.numPointShadows=B,k.numSpotShadows=O,k.numSpotMaps=F,k.numLightProbes=E,o.version=r0++)}function f(p,g){let m=0,y=0,M=0,b=0,x=0,_=g.matrixWorldInverse;for(let I=0,w=p.length;I<w;I++){let D=p[I];if(D.isDirectionalLight){let B=o.directional[m];B.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(a),B.direction.transformDirection(_),m++}else if(D.isSpotLight){let B=o.spot[M];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(_),B.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(a),B.direction.transformDirection(_),M++}else if(D.isRectAreaLight){let B=o.rectArea[b];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(_),h.identity(),c.copy(D.matrixWorld),c.premultiply(_),h.extractRotation(c),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),B.halfWidth.applyMatrix4(h),B.halfHeight.applyMatrix4(h),b++}else if(D.isPointLight){let B=o.point[y];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(_),y++}else if(D.isHemisphereLight){let B=o.hemi[x];B.direction.setFromMatrixPosition(D.matrixWorld),B.direction.transformDirection(_),x++}}}return{setup:u,setupView:f,state:o}}function fu(s,t){let e=new a0(s,t),i=[],o=[];function a(){i.length=0,o.length=0}function c(g){i.push(g)}function h(g){o.push(g)}function u(g){e.setup(i,g)}function f(g){e.setupView(i,g)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:e},setupLights:u,setupLightsView:f,pushLight:c,pushShadow:h}}function l0(s,t){let e=new WeakMap;function i(a,c=0){let h=e.get(a),u;return h===void 0?(u=new fu(s,t),e.set(a,[u])):c>=h.length?(u=new fu(s,t),h.push(u)):u=h[c],u}function o(){e=new WeakMap}return{get:i,dispose:o}}function u0(s,t,e){let i=new Ds,o=new te,a=new te,c=new qe,h=new pl({depthPacking:np}),u=new ml,f={},p=e.maxTextureSize,g={[wi]:un,[un]:wi,[In]:In},m=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:c0,fragmentShader:h0}),y=m.clone();y.defines.HORIZONTAL_PASS=1;let M=new en;M.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Sn(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let _=this.type;this.render=function(O,F,st){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;let E=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),tt=s.state;tt.setBlending(Mi),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let ht=_!==si&&this.type===si,C=_===si&&this.type!==si;for(let H=0,V=O.length;H<V;H++){let it=O[H],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);let Y=W.getFrameExtents();if(o.multiply(Y),a.copy(W.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/Y.x),o.x=a.x*Y.x,W.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/Y.y),o.y=a.y*Y.y,W.mapSize.y=a.y)),W.map===null||ht===!0||C===!0){let at=this.type!==si?{minFilter:Ze,magFilter:Ze}:{};W.map!==null&&W.map.dispose(),W.map=new ai(o.x,o.y,at),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let rt=W.getViewportCount();for(let at=0;at<rt;at++){let gt=W.getViewport(at);c.set(a.x*gt.x,a.y*gt.y,a.x*gt.z,a.y*gt.w),tt.viewport(c),W.updateMatrices(it,at),i=W.getFrustum(),D(F,st,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===si&&I(W,st),W.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(E,R,k)};function I(O,F){let st=t.update(b);m.defines.VSM_SAMPLES!==O.blurSamples&&(m.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ai(o.x,o.y)),m.uniforms.shadow_pass.value=O.map.texture,m.uniforms.resolution.value=O.mapSize,m.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,st,m,b,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,st,y,b,null)}function w(O,F,st,E){let R=null,k=st.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=st.isPointLight===!0?u:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let tt=R.uuid,ht=F.uuid,C=f[tt];C===void 0&&(C={},f[tt]=C);let H=C[ht];H===void 0&&(H=R.clone(),C[ht]=H,F.addEventListener("dispose",B)),R=H}if(R.visible=F.visible,R.wireframe=F.wireframe,E===si?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,st.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let tt=s.properties.get(R);tt.light=st}return R}function D(O,F,st,E,R){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===si)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,O.matrixWorld);let ht=t.update(O),C=O.material;if(Array.isArray(C)){let H=ht.groups;for(let V=0,it=H.length;V<it;V++){let W=H[V],Y=C[W.materialIndex];if(Y&&Y.visible){let rt=w(O,Y,E,R);O.onBeforeShadow(s,O,F,st,ht,rt,W),s.renderBufferDirect(st,null,ht,rt,O,W),O.onAfterShadow(s,O,F,st,ht,rt,W)}}}else if(C.visible){let H=w(O,C,E,R);O.onBeforeShadow(s,O,F,st,ht,H,null),s.renderBufferDirect(st,null,ht,H,O,null),O.onAfterShadow(s,O,F,st,ht,H,null)}}let tt=O.children;for(let ht=0,C=tt.length;ht<C;ht++)D(tt[ht],F,st,E,R)}function B(O){O.target.removeEventListener("dispose",B);for(let st in f){let E=f[st],R=O.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function d0(s,t,e){let i=e.isWebGL2;function o(){let z=!1,_t=new qe,vt=null,kt=new qe(0,0,0,0);return{setMask:function(Nt){vt!==Nt&&!z&&(s.colorMask(Nt,Nt,Nt,Nt),vt=Nt)},setLocked:function(Nt){z=Nt},setClear:function(Nt,pe,fe,De,Ve){Ve===!0&&(Nt*=De,pe*=De,fe*=De),_t.set(Nt,pe,fe,De),kt.equals(_t)===!1&&(s.clearColor(Nt,pe,fe,De),kt.copy(_t))},reset:function(){z=!1,vt=null,kt.set(-1,0,0,0)}}}function a(){let z=!1,_t=null,vt=null,kt=null;return{setTest:function(Nt){Nt?qt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(Nt){_t!==Nt&&!z&&(s.depthMask(Nt),_t=Nt)},setFunc:function(Nt){if(vt!==Nt){switch(Nt){case Lf:s.depthFunc(s.NEVER);break;case If:s.depthFunc(s.ALWAYS);break;case Df:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case Nf:s.depthFunc(s.EQUAL);break;case Of:s.depthFunc(s.GEQUAL);break;case Uf:s.depthFunc(s.GREATER);break;case Ff:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=Nt}},setLocked:function(Nt){z=Nt},setClear:function(Nt){kt!==Nt&&(s.clearDepth(Nt),kt=Nt)},reset:function(){z=!1,_t=null,vt=null,kt=null}}}function c(){let z=!1,_t=null,vt=null,kt=null,Nt=null,pe=null,fe=null,De=null,Ve=null;return{setTest:function(xe){z||(xe?qt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(xe){_t!==xe&&!z&&(s.stencilMask(xe),_t=xe)},setFunc:function(xe,Ge,Le){(vt!==xe||kt!==Ge||Nt!==Le)&&(s.stencilFunc(xe,Ge,Le),vt=xe,kt=Ge,Nt=Le)},setOp:function(xe,Ge,Le){(pe!==xe||fe!==Ge||De!==Le)&&(s.stencilOp(xe,Ge,Le),pe=xe,fe=Ge,De=Le)},setLocked:function(xe){z=xe},setClear:function(xe){Ve!==xe&&(s.clearStencil(xe),Ve=xe)},reset:function(){z=!1,_t=null,vt=null,kt=null,Nt=null,pe=null,fe=null,De=null,Ve=null}}}let h=new o,u=new a,f=new c,p=new WeakMap,g=new WeakMap,m={},y={},M=new WeakMap,b=[],x=null,_=!1,I=null,w=null,D=null,B=null,O=null,F=null,st=null,E=new ae(0,0,0),R=0,k=!1,tt=null,ht=null,C=null,H=null,V=null,it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Y=0,rt=s.getParameter(s.VERSION);rt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(rt)[1]),W=Y>=1):rt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),W=Y>=2);let at=null,gt={},q=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),Mt=new qe().fromArray(q),At=new qe().fromArray(nt);function Lt(z,_t,vt,kt){let Nt=new Uint8Array(4),pe=s.createTexture();s.bindTexture(z,pe),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let fe=0;fe<vt;fe++)i&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(_t+fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return pe}let Zt={};Zt[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),Zt[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Zt[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Zt[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),u.setClear(1),f.setClear(0),qt(s.DEPTH_TEST),u.setFunc(ho),Jt(!1),P(Xc),qt(s.CULL_FACE),Pt(Mi);function qt(z){m[z]!==!0&&(s.enable(z),m[z]=!0)}function Ft(z){m[z]!==!1&&(s.disable(z),m[z]=!1)}function oe(z,_t){return y[z]!==_t?(s.bindFramebuffer(z,_t),y[z]=_t,i&&(z===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=_t),z===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function $(z,_t){let vt=b,kt=!1;if(z)if(vt=M.get(_t),vt===void 0&&(vt=[],M.set(_t,vt)),z.isWebGLMultipleRenderTargets){let Nt=z.texture;if(vt.length!==Nt.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,fe=Nt.length;pe<fe;pe++)vt[pe]=s.COLOR_ATTACHMENT0+pe;vt.length=Nt.length,kt=!0}}else vt[0]!==s.COLOR_ATTACHMENT0&&(vt[0]=s.COLOR_ATTACHMENT0,kt=!0);else vt[0]!==s.BACK&&(vt[0]=s.BACK,kt=!0);kt&&(e.isWebGL2?s.drawBuffers(vt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(vt))}function Re(z){return x!==z?(s.useProgram(z),x=z,!0):!1}let Bt={[zi]:s.FUNC_ADD,[gf]:s.FUNC_SUBTRACT,[_f]:s.FUNC_REVERSE_SUBTRACT};if(i)Bt[Jc]=s.MIN,Bt[Kc]=s.MAX;else{let z=t.get("EXT_blend_minmax");z!==null&&(Bt[Jc]=z.MIN_EXT,Bt[Kc]=z.MAX_EXT)}let Gt={[vf]:s.ZERO,[yf]:s.ONE,[xf]:s.SRC_COLOR,[Ya]:s.SRC_ALPHA,[Ef]:s.SRC_ALPHA_SATURATE,[wf]:s.DST_COLOR,[bf]:s.DST_ALPHA,[Mf]:s.ONE_MINUS_SRC_COLOR,[$a]:s.ONE_MINUS_SRC_ALPHA,[Tf]:s.ONE_MINUS_DST_COLOR,[Sf]:s.ONE_MINUS_DST_ALPHA,[Af]:s.CONSTANT_COLOR,[Pf]:s.ONE_MINUS_CONSTANT_COLOR,[Cf]:s.CONSTANT_ALPHA,[Rf]:s.ONE_MINUS_CONSTANT_ALPHA};function Pt(z,_t,vt,kt,Nt,pe,fe,De,Ve,xe){if(z===Mi){_===!0&&(Ft(s.BLEND),_=!1);return}if(_===!1&&(qt(s.BLEND),_=!0),z!==mf){if(z!==I||xe!==k){if((w!==zi||O!==zi)&&(s.blendEquation(s.FUNC_ADD),w=zi,O=zi),xe)switch(z){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFunc(s.ONE,s.ONE);break;case Yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $c:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $c:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}D=null,B=null,F=null,st=null,E.set(0,0,0),R=0,I=z,k=xe}return}Nt=Nt||_t,pe=pe||vt,fe=fe||kt,(_t!==w||Nt!==O)&&(s.blendEquationSeparate(Bt[_t],Bt[Nt]),w=_t,O=Nt),(vt!==D||kt!==B||pe!==F||fe!==st)&&(s.blendFuncSeparate(Gt[vt],Gt[kt],Gt[pe],Gt[fe]),D=vt,B=kt,F=pe,st=fe),(De.equals(E)===!1||Ve!==R)&&(s.blendColor(De.r,De.g,De.b,Ve),E.copy(De),R=Ve),I=z,k=!1}function be(z,_t){z.side===In?Ft(s.CULL_FACE):qt(s.CULL_FACE);let vt=z.side===un;_t&&(vt=!vt),Jt(vt),z.blending===Ts&&z.transparent===!1?Pt(Mi):Pt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),h.setMask(z.colorWrite);let kt=z.stencilWrite;f.setTest(kt),kt&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),J(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?qt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(z){tt!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),tt=z)}function P(z){z!==df?(qt(s.CULL_FACE),z!==ht&&(z===Xc?s.cullFace(s.BACK):z===ff?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),ht=z}function T(z){z!==C&&(W&&s.lineWidth(z),C=z)}function J(z,_t,vt){z?(qt(s.POLYGON_OFFSET_FILL),(H!==_t||V!==vt)&&(s.polygonOffset(_t,vt),H=_t,V=vt)):Ft(s.POLYGON_OFFSET_FILL)}function pt(z){z?qt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function dt(z){z===void 0&&(z=s.TEXTURE0+it-1),at!==z&&(s.activeTexture(z),at=z)}function ft(z,_t,vt){vt===void 0&&(at===null?vt=s.TEXTURE0+it-1:vt=at);let kt=gt[vt];kt===void 0&&(kt={type:void 0,texture:void 0},gt[vt]=kt),(kt.type!==z||kt.texture!==_t)&&(at!==vt&&(s.activeTexture(vt),at=vt),s.bindTexture(z,_t||Zt[z]),kt.type=z,kt.texture=_t)}function Rt(){let z=gt[at];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function St(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(z){Mt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Mt.copy(z))}function se(z){At.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),At.copy(z))}function ce(z,_t){let vt=g.get(_t);vt===void 0&&(vt=new WeakMap,g.set(_t,vt));let kt=vt.get(z);kt===void 0&&(kt=s.getUniformBlockIndex(_t,z.name),vt.set(z,kt))}function ee(z,_t){let kt=g.get(_t).get(z);p.get(_t)!==kt&&(s.uniformBlockBinding(_t,kt,z.__bindingPointIndex),p.set(_t,kt))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},at=null,gt={},y={},M=new WeakMap,b=[],x=null,_=!1,I=null,w=null,D=null,B=null,O=null,F=null,st=null,E=new ae(0,0,0),R=0,k=!1,tt=null,ht=null,C=null,H=null,V=null,Mt.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),h.reset(),u.reset(),f.reset()}return{buffers:{color:h,depth:u,stencil:f},enable:qt,disable:Ft,bindFramebuffer:oe,drawBuffers:$,useProgram:Re,setBlending:Pt,setMaterial:be,setFlipSided:Jt,setCullFace:P,setLineWidth:T,setPolygonOffset:J,setScissorTest:pt,activeTexture:dt,bindTexture:ft,unbindTexture:Rt,compressedTexImage2D:St,compressedTexImage3D:Et,texImage2D:xt,texImage3D:mt,updateUBOMapping:ce,uniformBlockBinding:ee,texStorage2D:N,texStorage3D:ct,texSubImage2D:zt,texSubImage3D:jt,compressedTexSubImage2D:ut,compressedTexSubImage3D:le,scissor:Dt,viewport:se,reset:yt}}function f0(s,t,e,i,o,a,c){let h=o.isWebGL2,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap,g,m=new WeakMap,y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,T){return y?new OffscreenCanvas(P,T):yo("canvas")}function b(P,T,J,pt){let dt=1;if((P.width>pt||P.height>pt)&&(dt=pt/Math.max(P.width,P.height)),dt<1||T===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){let ft=T?vo:Math.floor,Rt=ft(dt*P.width),St=ft(dt*P.height);g===void 0&&(g=M(Rt,St));let Et=J?M(Rt,St):g;return Et.width=Rt,Et.height=St,Et.getContext("2d").drawImage(P,0,0,Rt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Rt+"x"+St+")."),Et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return el(P.width)&&el(P.height)}function _(P){return h?!1:P.wrapS!==Dn||P.wrapT!==Dn||P.minFilter!==Ze&&P.minFilter!==Mn}function I(P,T){return P.generateMipmaps&&T&&P.minFilter!==Ze&&P.minFilter!==Mn}function w(P){s.generateMipmap(P)}function D(P,T,J,pt,dt=!1){if(h===!1)return T;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft=T;if(T===s.RED&&(J===s.FLOAT&&(ft=s.R32F),J===s.HALF_FLOAT&&(ft=s.R16F),J===s.UNSIGNED_BYTE&&(ft=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ft=s.R8UI),J===s.UNSIGNED_SHORT&&(ft=s.R16UI),J===s.UNSIGNED_INT&&(ft=s.R32UI),J===s.BYTE&&(ft=s.R8I),J===s.SHORT&&(ft=s.R16I),J===s.INT&&(ft=s.R32I)),T===s.RG&&(J===s.FLOAT&&(ft=s.RG32F),J===s.HALF_FLOAT&&(ft=s.RG16F),J===s.UNSIGNED_BYTE&&(ft=s.RG8)),T===s.RGBA){let Rt=dt?po:ve.getTransfer(pt);J===s.FLOAT&&(ft=s.RGBA32F),J===s.HALF_FLOAT&&(ft=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ft=Rt===Ae?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function B(P,T,J){return I(P,J)===!0||P.isFramebufferTexture&&P.minFilter!==Ze&&P.minFilter!==Mn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function O(P){return P===Ze||P===jc||P===va?s.NEAREST:s.LINEAR}function F(P){let T=P.target;T.removeEventListener("dispose",F),E(T),T.isVideoTexture&&p.delete(T)}function st(P){let T=P.target;T.removeEventListener("dispose",st),k(T)}function E(P){let T=i.get(P);if(T.__webglInit===void 0)return;let J=P.source,pt=m.get(J);if(pt){let dt=pt[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&R(P),Object.keys(pt).length===0&&m.delete(J)}i.remove(P)}function R(P){let T=i.get(P);s.deleteTexture(T.__webglTexture);let J=P.source,pt=m.get(J);delete pt[T.__cacheKey],c.memory.textures--}function k(P){let T=P.texture,J=i.get(P),pt=i.get(T);if(pt.__webglTexture!==void 0&&(s.deleteTexture(pt.__webglTexture),c.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(J.__webglFramebuffer[dt]))for(let ft=0;ft<J.__webglFramebuffer[dt].length;ft++)s.deleteFramebuffer(J.__webglFramebuffer[dt][ft]);else s.deleteFramebuffer(J.__webglFramebuffer[dt]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[dt])}else{if(Array.isArray(J.__webglFramebuffer))for(let dt=0;dt<J.__webglFramebuffer.length;dt++)s.deleteFramebuffer(J.__webglFramebuffer[dt]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let dt=0;dt<J.__webglColorRenderbuffer.length;dt++)J.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[dt]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let dt=0,ft=T.length;dt<ft;dt++){let Rt=i.get(T[dt]);Rt.__webglTexture&&(s.deleteTexture(Rt.__webglTexture),c.memory.textures--),i.remove(T[dt])}i.remove(T),i.remove(P)}let tt=0;function ht(){tt=0}function C(){let P=tt;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),tt+=1,P}function H(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function V(P,T){let J=i.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){let pt=P.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(J,P,T);return}}e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function it(P,T){let J=i.get(P);if(P.version>0&&J.__version!==P.version){Mt(J,P,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function W(P,T){let J=i.get(P);if(P.version>0&&J.__version!==P.version){Mt(J,P,T);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function Y(P,T){let J=i.get(P);if(P.version>0&&J.__version!==P.version){At(J,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}let rt={[ja]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[Qa]:s.MIRRORED_REPEAT},at={[Ze]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[va]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Xf]:s.LINEAR_MIPMAP_NEAREST,[ar]:s.LINEAR_MIPMAP_LINEAR},gt={[rp]:s.NEVER,[up]:s.ALWAYS,[op]:s.LESS,[Lu]:s.LEQUAL,[ap]:s.EQUAL,[hp]:s.GEQUAL,[lp]:s.GREATER,[cp]:s.NOTEQUAL};function q(P,T,J){if(J?(s.texParameteri(P,s.TEXTURE_WRAP_S,rt[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,rt[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,rt[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,at[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,at[T.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==Dn||T.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,O(T.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,O(T.minFilter)),T.minFilter!==Ze&&T.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,gt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let pt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ze||T.minFilter!==va&&T.minFilter!==ar||T.type===xi&&t.has("OES_texture_float_linear")===!1||h===!1&&T.type===lr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(s.texParameterf(P,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function nt(P,T){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",F));let pt=T.source,dt=m.get(pt);dt===void 0&&(dt={},m.set(pt,dt));let ft=H(T);if(ft!==P.__cacheKey){dt[ft]===void 0&&(dt[ft]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),dt[ft].usedTimes++;let Rt=dt[P.__cacheKey];Rt!==void 0&&(dt[P.__cacheKey].usedTimes--,Rt.usedTimes===0&&R(T)),P.__cacheKey=ft,P.__webglTexture=dt[ft].texture}return J}function Mt(P,T,J){let pt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=s.TEXTURE_3D);let dt=nt(P,T),ft=T.source;e.bindTexture(pt,P.__webglTexture,s.TEXTURE0+J);let Rt=i.get(ft);if(ft.version!==Rt.__version||dt===!0){e.activeTexture(s.TEXTURE0+J);let St=ve.getPrimaries(ve.workingColorSpace),Et=T.colorSpace===bn?null:ve.getPrimaries(T.colorSpace),zt=T.colorSpace===bn||St===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let jt=_(T)&&x(T.image)===!1,ut=b(T.image,jt,!1,o.maxTextureSize);ut=Jt(T,ut);let le=x(ut)||h,N=a.convert(T.format,T.colorSpace),ct=a.convert(T.type),xt=D(T.internalFormat,N,ct,T.colorSpace,T.isVideoTexture);q(pt,T,le);let mt,Dt=T.mipmaps,se=h&&T.isVideoTexture!==!0&&xt!==Cu,ce=Rt.__version===void 0||dt===!0,ee=B(T,ut,le);if(T.isDepthTexture)xt=s.DEPTH_COMPONENT,h?T.type===xi?xt=s.DEPTH_COMPONENT32F:T.type===yi?xt=s.DEPTH_COMPONENT24:T.type===Hi?xt=s.DEPTH24_STENCIL8:xt=s.DEPTH_COMPONENT16:T.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vi&&xt===s.DEPTH_COMPONENT&&T.type!==Dl&&T.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=yi,ct=a.convert(T.type)),T.format===Rs&&xt===s.DEPTH_COMPONENT&&(xt=s.DEPTH_STENCIL,T.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Hi,ct=a.convert(T.type))),ce&&(se?e.texStorage2D(s.TEXTURE_2D,1,xt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,xt,ut.width,ut.height,0,N,ct,null));else if(T.isDataTexture)if(Dt.length>0&&le){se&&ce&&e.texStorage2D(s.TEXTURE_2D,ee,xt,Dt[0].width,Dt[0].height);for(let yt=0,z=Dt.length;yt<z;yt++)mt=Dt[yt],se?e.texSubImage2D(s.TEXTURE_2D,yt,0,0,mt.width,mt.height,N,ct,mt.data):e.texImage2D(s.TEXTURE_2D,yt,xt,mt.width,mt.height,0,N,ct,mt.data);T.generateMipmaps=!1}else se?(ce&&e.texStorage2D(s.TEXTURE_2D,ee,xt,ut.width,ut.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,N,ct,ut.data)):e.texImage2D(s.TEXTURE_2D,0,xt,ut.width,ut.height,0,N,ct,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ee,xt,Dt[0].width,Dt[0].height,ut.depth);for(let yt=0,z=Dt.length;yt<z;yt++)mt=Dt[yt],T.format!==mn?N!==null?se?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,mt.width,mt.height,ut.depth,N,mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,yt,xt,mt.width,mt.height,ut.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,mt.width,mt.height,ut.depth,N,ct,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,yt,xt,mt.width,mt.height,ut.depth,0,N,ct,mt.data)}else{se&&ce&&e.texStorage2D(s.TEXTURE_2D,ee,xt,Dt[0].width,Dt[0].height);for(let yt=0,z=Dt.length;yt<z;yt++)mt=Dt[yt],T.format!==mn?N!==null?se?e.compressedTexSubImage2D(s.TEXTURE_2D,yt,0,0,mt.width,mt.height,N,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,yt,xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage2D(s.TEXTURE_2D,yt,0,0,mt.width,mt.height,N,ct,mt.data):e.texImage2D(s.TEXTURE_2D,yt,xt,mt.width,mt.height,0,N,ct,mt.data)}else if(T.isDataArrayTexture)se?(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ee,xt,ut.width,ut.height,ut.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,N,ct,ut.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,ut.width,ut.height,ut.depth,0,N,ct,ut.data);else if(T.isData3DTexture)se?(ce&&e.texStorage3D(s.TEXTURE_3D,ee,xt,ut.width,ut.height,ut.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,N,ct,ut.data)):e.texImage3D(s.TEXTURE_3D,0,xt,ut.width,ut.height,ut.depth,0,N,ct,ut.data);else if(T.isFramebufferTexture){if(ce)if(se)e.texStorage2D(s.TEXTURE_2D,ee,xt,ut.width,ut.height);else{let yt=ut.width,z=ut.height;for(let _t=0;_t<ee;_t++)e.texImage2D(s.TEXTURE_2D,_t,xt,yt,z,0,N,ct,null),yt>>=1,z>>=1}}else if(Dt.length>0&&le){se&&ce&&e.texStorage2D(s.TEXTURE_2D,ee,xt,Dt[0].width,Dt[0].height);for(let yt=0,z=Dt.length;yt<z;yt++)mt=Dt[yt],se?e.texSubImage2D(s.TEXTURE_2D,yt,0,0,N,ct,mt):e.texImage2D(s.TEXTURE_2D,yt,xt,N,ct,mt);T.generateMipmaps=!1}else se?(ce&&e.texStorage2D(s.TEXTURE_2D,ee,xt,ut.width,ut.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,N,ct,ut)):e.texImage2D(s.TEXTURE_2D,0,xt,N,ct,ut);I(T,le)&&w(pt),Rt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function At(P,T,J){if(T.image.length!==6)return;let pt=nt(P,T),dt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);let ft=i.get(dt);if(dt.version!==ft.__version||pt===!0){e.activeTexture(s.TEXTURE0+J);let Rt=ve.getPrimaries(ve.workingColorSpace),St=T.colorSpace===bn?null:ve.getPrimaries(T.colorSpace),Et=T.colorSpace===bn||Rt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let zt=T.isCompressedTexture||T.image[0].isCompressedTexture,jt=T.image[0]&&T.image[0].isDataTexture,ut=[];for(let yt=0;yt<6;yt++)!zt&&!jt?ut[yt]=b(T.image[yt],!1,!0,o.maxCubemapSize):ut[yt]=jt?T.image[yt].image:T.image[yt],ut[yt]=Jt(T,ut[yt]);let le=ut[0],N=x(le)||h,ct=a.convert(T.format,T.colorSpace),xt=a.convert(T.type),mt=D(T.internalFormat,ct,xt,T.colorSpace),Dt=h&&T.isVideoTexture!==!0,se=ft.__version===void 0||pt===!0,ce=B(T,le,N);q(s.TEXTURE_CUBE_MAP,T,N);let ee;if(zt){Dt&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,mt,le.width,le.height);for(let yt=0;yt<6;yt++){ee=ut[yt].mipmaps;for(let z=0;z<ee.length;z++){let _t=ee[z];T.format!==mn?ct!==null?Dt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,0,0,_t.width,_t.height,ct,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,mt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,0,0,_t.width,_t.height,ct,xt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,mt,_t.width,_t.height,0,ct,xt,_t.data)}}}else{ee=T.mipmaps,Dt&&se&&(ee.length>0&&ce++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,mt,ut[0].width,ut[0].height));for(let yt=0;yt<6;yt++)if(jt){Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ut[yt].width,ut[yt].height,ct,xt,ut[yt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,mt,ut[yt].width,ut[yt].height,0,ct,xt,ut[yt].data);for(let z=0;z<ee.length;z++){let vt=ee[z].image[yt].image;Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,0,0,vt.width,vt.height,ct,xt,vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,mt,vt.width,vt.height,0,ct,xt,vt.data)}}else{Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ct,xt,ut[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,mt,ct,xt,ut[yt]);for(let z=0;z<ee.length;z++){let _t=ee[z];Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,0,0,ct,xt,_t.image[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,mt,ct,xt,_t.image[yt])}}}I(T,N)&&w(s.TEXTURE_CUBE_MAP),ft.__version=dt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Lt(P,T,J,pt,dt,ft){let Rt=a.convert(J.format,J.colorSpace),St=a.convert(J.type),Et=D(J.internalFormat,Rt,St,J.colorSpace);if(!i.get(T).__hasExternalTextures){let jt=Math.max(1,T.width>>ft),ut=Math.max(1,T.height>>ft);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?e.texImage3D(dt,ft,Et,jt,ut,T.depth,0,Rt,St,null):e.texImage2D(dt,ft,Et,jt,ut,0,Rt,St,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Pt(T)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,dt,i.get(J).__webglTexture,0,Gt(T)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,dt,i.get(J).__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(P,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let pt=h===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(J||Pt(T)){let dt=T.depthTexture;dt&&dt.isDepthTexture&&(dt.type===xi?pt=s.DEPTH_COMPONENT32F:dt.type===yi&&(pt=s.DEPTH_COMPONENT24));let ft=Gt(T);Pt(T)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,pt,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,pt,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,pt,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){let pt=Gt(T);J&&Pt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,T.width,T.height):Pt(T)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{let pt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let dt=0;dt<pt.length;dt++){let ft=pt[dt],Rt=a.convert(ft.format,ft.colorSpace),St=a.convert(ft.type),Et=D(ft.internalFormat,Rt,St,ft.colorSpace),zt=Gt(T);J&&Pt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,Et,T.width,T.height):Pt(T)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,Et,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Et,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);let pt=i.get(T.depthTexture).__webglTexture,dt=Gt(T);if(T.depthTexture.format===Vi)Pt(T)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(T.depthTexture.format===Rs)Pt(T)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Ft(P){let T=i.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");qt(T.__webglFramebuffer,P)}else if(J){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]=s.createRenderbuffer(),Zt(T.__webglDepthbuffer[pt],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Zt(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(P,T,J){let pt=i.get(P);T!==void 0&&Lt(pt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ft(P)}function $(P){let T=P.texture,J=i.get(P),pt=i.get(T);P.addEventListener("dispose",st),P.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=T.version,c.memory.textures++);let dt=P.isWebGLCubeRenderTarget===!0,ft=P.isWebGLMultipleRenderTargets===!0,Rt=x(P)||h;if(dt){J.__webglFramebuffer=[];for(let St=0;St<6;St++)if(h&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[St]=[];for(let Et=0;Et<T.mipmaps.length;Et++)J.__webglFramebuffer[St][Et]=s.createFramebuffer()}else J.__webglFramebuffer[St]=s.createFramebuffer()}else{if(h&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let St=0;St<T.mipmaps.length;St++)J.__webglFramebuffer[St]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(ft)if(o.drawBuffers){let St=P.texture;for(let Et=0,zt=St.length;Et<zt;Et++){let jt=i.get(St[Et]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&P.samples>0&&Pt(P)===!1){let St=ft?T:[T];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Et=0;Et<St.length;Et++){let zt=St[Et];J.__webglColorRenderbuffer[Et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Et]);let jt=a.convert(zt.format,zt.colorSpace),ut=a.convert(zt.type),le=D(zt.internalFormat,jt,ut,zt.colorSpace,P.isXRRenderTarget===!0),N=Gt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,N,le,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,J.__webglColorRenderbuffer[Et])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(J.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),q(s.TEXTURE_CUBE_MAP,T,Rt);for(let St=0;St<6;St++)if(h&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)Lt(J.__webglFramebuffer[St][Et],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Et);else Lt(J.__webglFramebuffer[St],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);I(T,Rt)&&w(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){let St=P.texture;for(let Et=0,zt=St.length;Et<zt;Et++){let jt=St[Et],ut=i.get(jt);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),q(s.TEXTURE_2D,jt,Rt),Lt(J.__webglFramebuffer,P,jt,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,0),I(jt,Rt)&&w(s.TEXTURE_2D)}e.unbindTexture()}else{let St=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(h?St=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(St,pt.__webglTexture),q(St,T,Rt),h&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)Lt(J.__webglFramebuffer[Et],P,T,s.COLOR_ATTACHMENT0,St,Et);else Lt(J.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,St,0);I(T,Rt)&&w(St),e.unbindTexture()}P.depthBuffer&&Ft(P)}function Re(P){let T=x(P)||h,J=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pt=0,dt=J.length;pt<dt;pt++){let ft=J[pt];if(I(ft,T)){let Rt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=i.get(ft).__webglTexture;e.bindTexture(Rt,St),w(Rt),e.unbindTexture()}}}function Bt(P){if(h&&P.samples>0&&Pt(P)===!1){let T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],J=P.width,pt=P.height,dt=s.COLOR_BUFFER_BIT,ft=[],Rt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=i.get(P),Et=P.isWebGLMultipleRenderTargets===!0;if(Et)for(let zt=0;zt<T.length;zt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){ft.push(s.COLOR_ATTACHMENT0+zt),P.depthBuffer&&ft.push(Rt);let jt=St.__ignoreDepthValues!==void 0?St.__ignoreDepthValues:!1;if(jt===!1&&(P.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),Et&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[zt]),jt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Rt])),Et){let ut=i.get(T[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,J,pt,0,0,J,pt,dt,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Et)for(let zt=0;zt<T.length;zt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,St.__webglColorRenderbuffer[zt]);let jt=i.get(T[zt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}}function Gt(P){return Math.min(o.maxSamples,P.samples)}function Pt(P){let T=i.get(P);return h&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(P){let T=c.render.frame;p.get(P)!==T&&(p.set(P,T),P.update())}function Jt(P,T){let J=P.colorSpace,pt=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===tl||J!==Nn&&J!==bn&&(ve.getTransfer(J)===Ae?h===!1?t.has("EXT_sRGB")===!0&&pt===mn?(P.format=tl,P.minFilter=Mn,P.generateMipmaps=!1):T=xo.sRGBToLinear(T):(pt!==mn||dt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}this.allocateTextureUnit=C,this.resetTextureUnits=ht,this.setTexture2D=V,this.setTexture2DArray=it,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=oe,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Pt}function p0(s,t,e){let i=e.isWebGL2;function o(a,c=bn){let h,u=ve.getTransfer(c);if(a===Si)return s.UNSIGNED_BYTE;if(a===wu)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Tu)return s.UNSIGNED_SHORT_5_5_5_1;if(a===qf)return s.BYTE;if(a===Yf)return s.SHORT;if(a===Dl)return s.UNSIGNED_SHORT;if(a===Su)return s.INT;if(a===yi)return s.UNSIGNED_INT;if(a===xi)return s.FLOAT;if(a===lr)return i?s.HALF_FLOAT:(h=t.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(a===$f)return s.ALPHA;if(a===mn)return s.RGBA;if(a===Jf)return s.LUMINANCE;if(a===Kf)return s.LUMINANCE_ALPHA;if(a===Vi)return s.DEPTH_COMPONENT;if(a===Rs)return s.DEPTH_STENCIL;if(a===tl)return h=t.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(a===jf)return s.RED;if(a===Eu)return s.RED_INTEGER;if(a===Qf)return s.RG;if(a===Au)return s.RG_INTEGER;if(a===Pu)return s.RGBA_INTEGER;if(a===ya||a===xa||a===Ma||a===ba)if(u===Ae)if(h=t.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(a===ya)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===xa)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ma)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ba)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=t.get("WEBGL_compressed_texture_s3tc"),h!==null){if(a===ya)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===xa)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ma)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ba)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qc||a===th||a===eh||a===nh)if(h=t.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(a===Qc)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===th)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===eh)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===nh)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cu)return h=t.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ih||a===sh)if(h=t.get("WEBGL_compressed_texture_etc"),h!==null){if(a===ih)return u===Ae?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(a===sh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===rh||a===oh||a===ah||a===lh||a===ch||a===hh||a===uh||a===dh||a===fh||a===ph||a===mh||a===gh||a===_h||a===vh)if(h=t.get("WEBGL_compressed_texture_astc"),h!==null){if(a===rh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===oh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ah)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===lh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ch)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===hh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===uh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===fh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ph)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_h)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===vh)return u===Ae?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Sa||a===yh||a===xh)if(h=t.get("EXT_texture_compression_bptc"),h!==null){if(a===Sa)return u===Ae?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yh)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===xh)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===tp||a===Mh||a===bh||a===Sh)if(h=t.get("EXT_texture_compression_rgtc"),h!==null){if(a===Sa)return h.COMPRESSED_RED_RGTC1_EXT;if(a===Mh)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bh)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Sh)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Hi?i?s.UNSIGNED_INT_24_8:(h=t.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:o}}function g0(s,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,Ou(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,I,w,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(x,_):_.isMeshToonMaterial?(a(x,_),g(x,_)):_.isMeshPhongMaterial?(a(x,_),p(x,_)):_.isMeshStandardMaterial?(a(x,_),m(x,_),_.isMeshPhysicalMaterial&&y(x,_,D)):_.isMeshMatcapMaterial?(a(x,_),M(x,_)):_.isMeshDepthMaterial?a(x,_):_.isMeshDistanceMaterial?(a(x,_),b(x,_)):_.isMeshNormalMaterial?a(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&h(x,_)):_.isPointsMaterial?u(x,_,I,w):_.isSpriteMaterial?f(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===un&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===un&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let I=t.get(_).envMap;if(I&&(x.envMap.value=I,x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;let w=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*w,e(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function h(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,I,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*I,x.scale.value=w*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function g(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),t.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,I){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===un&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){let I=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function _0(s,t,e,i){let o={},a={},c=[],h=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(I,w){let D=w.program;i.uniformBlockBinding(I,D)}function f(I,w){let D=o[I.id];D===void 0&&(M(I),D=p(I),o[I.id]=D,I.addEventListener("dispose",x));let B=w.program;i.updateUBOMapping(I,B);let O=t.render.frame;a[I.id]!==O&&(m(I),a[I.id]=O)}function p(I){let w=g();I.__bindingPointIndex=w;let D=s.createBuffer(),B=I.__size,O=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,B,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,D),D}function g(){for(let I=0;I<h;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(I){let w=o[I.id],D=I.uniforms,B=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let O=0,F=D.length;O<F;O++){let st=Array.isArray(D[O])?D[O]:[D[O]];for(let E=0,R=st.length;E<R;E++){let k=st[E];if(y(k,O,E,B)===!0){let tt=k.__offset,ht=Array.isArray(k.value)?k.value:[k.value],C=0;for(let H=0;H<ht.length;H++){let V=ht[H],it=b(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,tt+C,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,C),C+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,tt,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(I,w,D,B){let O=I.value,F=w+"_"+D;if(B[F]===void 0)return typeof O=="number"||typeof O=="boolean"?B[F]=O:B[F]=O.clone(),!0;{let st=B[F];if(typeof O=="number"||typeof O=="boolean"){if(st!==O)return B[F]=O,!0}else if(st.equals(O)===!1)return st.copy(O),!0}return!1}function M(I){let w=I.uniforms,D=0,B=16;for(let F=0,st=w.length;F<st;F++){let E=Array.isArray(w[F])?w[F]:[w[F]];for(let R=0,k=E.length;R<k;R++){let tt=E[R],ht=Array.isArray(tt.value)?tt.value:[tt.value];for(let C=0,H=ht.length;C<H;C++){let V=ht[C],it=b(V),W=D%B;W!==0&&B-W<it.boundary&&(D+=B-W),tt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=D,D+=it.storage}}}let O=D%B;return O>0&&(D+=B-O),I.__size=D,I.__cache={},this}function b(I){let w={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function x(I){let w=I.target;w.removeEventListener("dispose",x);let D=c.indexOf(w.__bindingPointIndex);c.splice(D,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete a[w.id]}function _(){for(let I in o)s.deleteBuffer(o[I]);c=[],o={},a={}}return{bind:u,update:f,dispose:_}}function vu(s,t,e,i,o,a,c){let h=xl.distanceSqToPoint(s);if(h<e){let u=new G;xl.closestPointToPoint(s,u),u.applyMatrix4(i);let f=o.ray.origin.distanceTo(u);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,object:c})}}function co(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function v0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yu(s,t){return s.distance-t.distance}function Ll(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){let o=s.children;for(let a=0,c=o.length;a<c;a++)Ll(o[a],t,e,!0)}}var Il,Bn,Xn,df,Xc,ff,xu,pf,si,wi,un,In,Mi,Ts,qc,Yc,$c,mf,zi,gf,_f,Jc,Kc,vf,yf,xf,Mf,Ya,$a,bf,Sf,wf,Tf,Ef,Af,Pf,Cf,Rf,Lf,If,Df,ho,Nf,Of,Uf,Ff,Mu,Bf,zf,bi,kf,Hf,Vf,Gf,Wf,Zf,bu,Ps,Cs,Ja,Ka,No,ja,Dn,Qa,Ze,jc,va,Mn,Xf,ar,Si,qf,Yf,Dl,Su,yi,xi,lr,wu,Tu,Hi,$f,mn,Jf,Kf,Vi,Rs,jf,Eu,Qf,Au,Pu,ya,xa,Ma,ba,Qc,th,eh,nh,Cu,ih,sh,rh,oh,ah,lh,ch,hh,uh,dh,fh,ph,mh,gh,_h,vh,Sa,yh,xh,tp,Mh,bh,Sh,uo,fo,wa,wh,Th,Eh,Ru,Gi,ep,np,ip,sp,bn,Xe,Nn,Nl,Oo,po,Ae,mo,go,rs,Ah,rp,op,ap,Lu,lp,cp,hp,up,Ph,Ch,tl,ri,_o,Wn,je,Rh,ir,cr,Iu,te,ue,Ta,Lh,Ih,Dh,Br,Ap,ve,os,xo,Pp,Mo,Cp,Tn,qe,nl,ai,bo,il,On,G,Pa,Nh,Wi,Qn,Cn,zr,as,ls,cs,pi,mi,Ni,Qs,kr,Hr,Oi,Rp,tr,Ra,Zn,ti,La,Vr,gi,Ia,Gr,Da,Ti,Fe,hs,Rn,Lp,Ip,_i,Wr,dn,Oh,Uh,So,hr,Dp,Fh,us,ei,Zr,er,Np,Op,Bh,zh,kh,Up,Fp,gn,Ln,ni,Na,ii,ds,fs,Hh,Oa,Ua,Fa,Xr,bs,Nu,vi,qr,ae,Qe,Bp,Ei,Ls,Ue,Yr,Ye,wo,To,wn,zp,xn,za,ps,fn,nr,He,en,Vh,Ui,$r,Gh,ms,gs,_s,ka,Jr,Kr,jr,Qr,Wh,Zh,Xh,to,eo,Sn,ur,Vp,Gp,Wp,Un,Eo,an,vs,ys,sl,Ao,rl,Ha,Zp,Xp,pn,Fi,io,Ds,ol,Yp,$p,Jp,Kp,jp,Qp,tm,em,nm,im,sm,rm,om,am,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,vm,ym,xm,Mm,bm,Sm,wm,Tm,Em,Am,Pm,Cm,Rm,Lm,Im,Dm,Nm,Om,Um,Fm,Bm,zm,km,Hm,Vm,Gm,Wm,Zm,Xm,qm,Ym,$m,Jm,Km,jm,Qm,tg,eg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,vg,yg,xg,Mg,bg,Sg,wg,Tg,Eg,Ag,Pg,Cg,Rg,Lg,Ig,Dg,Ng,Og,Ug,Fg,Bg,zg,kg,Hg,Vg,Gg,Wg,Zg,Xg,qg,Yg,$g,Jg,Kg,jg,Qg,t_,e_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,v_,y_,x_,M_,b_,S_,w_,T_,E_,re,bt,Gn,so,al,Ss,qh,ki,Va,Yh,Ga,Wa,Za,Bi,xs,$h,Po,Co,Fu,Bu,zu,ku,Hu,Qh,tu,eu,nu,iu,ll,cl,hl,Xa,As,Lv,Iv,Hv,Vv,Wv,jv,dl,fl,r0,pl,ml,c0,h0,gl,oi,m0,or,_l,dr,vl,Ro,Lo,Zi,pu,mu,gu,qa,oo,Ns,yl,_u,xl,ao,lo,Io,Os,Ml,bl,Sl,Fn,Xi,wl,Tl,El,fr,qi,Al,Pl,y0,Cl,Fl,x0,Bl,M0,b0,S0,w0,T0,E0,A0,Rl,Pe,ay,Do,pr,Fo=Ks(()=>{Il="160",Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,Xc=1,ff=2,xu=1,pf=2,si=3,wi=0,un=1,In=2,Mi=0,Ts=1,qc=2,Yc=3,$c=4,mf=5,zi=100,gf=101,_f=102,Jc=103,Kc=104,vf=200,yf=201,xf=202,Mf=203,Ya=204,$a=205,bf=206,Sf=207,wf=208,Tf=209,Ef=210,Af=211,Pf=212,Cf=213,Rf=214,Lf=0,If=1,Df=2,ho=3,Nf=4,Of=5,Uf=6,Ff=7,Mu=0,Bf=1,zf=2,bi=0,kf=1,Hf=2,Vf=3,Gf=4,Wf=5,Zf=6,bu=300,Ps=301,Cs=302,Ja=303,Ka=304,No=306,ja=1e3,Dn=1001,Qa=1002,Ze=1003,jc=1004,va=1005,Mn=1006,Xf=1007,ar=1008,Si=1009,qf=1010,Yf=1011,Dl=1012,Su=1013,yi=1014,xi=1015,lr=1016,wu=1017,Tu=1018,Hi=1020,$f=1021,mn=1023,Jf=1024,Kf=1025,Vi=1026,Rs=1027,jf=1028,Eu=1029,Qf=1030,Au=1031,Pu=1033,ya=33776,xa=33777,Ma=33778,ba=33779,Qc=35840,th=35841,eh=35842,nh=35843,Cu=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,lh=37811,ch=37812,hh=37813,uh=37814,dh=37815,fh=37816,ph=37817,mh=37818,gh=37819,_h=37820,vh=37821,Sa=36492,yh=36494,xh=36495,tp=36283,Mh=36284,bh=36285,Sh=36286,uo=2300,fo=2301,wa=2302,wh=2400,Th=2401,Eh=2402,Ru=3e3,Gi=3001,ep=3200,np=3201,ip=0,sp=1,bn="",Xe="srgb",Nn="srgb-linear",Nl="display-p3",Oo="display-p3-linear",po="linear",Ae="srgb",mo="rec709",go="p3",rs=7680,Ah=519,rp=512,op=513,ap=514,Lu=515,lp=516,cp=517,hp=518,up=519,Ph=35044,Ch="300 es",tl=1035,ri=2e3,_o=2001,Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let o=this._listeners[t];if(o!==void 0){let a=o.indexOf(e);a!==-1&&o.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rh=1234567,ir=Math.PI/180,cr=180/Math.PI;Iu={DEG2RAD:ir,RAD2DEG:cr,generateUUID:Us,clamp:tn,euclideanModulo:Ol,mapLinear:dp,inverseLerp:fp,lerp:sr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:_p,randInt:vp,randFloat:yp,randFloatSpread:xp,seededRandom:Mp,degToRad:bp,radToDeg:Sp,isPowerOfTwo:el,ceilPowerOfTwo:wp,floorPowerOfTwo:vo,setQuaternionFromProperEuler:Tp,normalize:rn,denormalize:Ms},te=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),o=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*i-c*o+t.x,this.y=a*o+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ue=class s{constructor(t,e,i,o,a,c,h,u,f){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,c,h,u,f)}set(t,e,i,o,a,c,h,u,f){let p=this.elements;return p[0]=t,p[1]=o,p[2]=h,p[3]=e,p[4]=a,p[5]=u,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,o=e.elements,a=this.elements,c=i[0],h=i[3],u=i[6],f=i[1],p=i[4],g=i[7],m=i[2],y=i[5],M=i[8],b=o[0],x=o[3],_=o[6],I=o[1],w=o[4],D=o[7],B=o[2],O=o[5],F=o[8];return a[0]=c*b+h*I+u*B,a[3]=c*x+h*w+u*O,a[6]=c*_+h*D+u*F,a[1]=f*b+p*I+g*B,a[4]=f*x+p*w+g*O,a[7]=f*_+p*D+g*F,a[2]=m*b+y*I+M*B,a[5]=m*x+y*w+M*O,a[8]=m*_+y*D+M*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],h=t[5],u=t[6],f=t[7],p=t[8];return e*c*p-e*h*f-i*a*p+i*h*u+o*a*f-o*c*u}invert(){let t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],h=t[5],u=t[6],f=t[7],p=t[8],g=p*c-h*f,m=h*u-p*a,y=f*a-c*u,M=e*g+i*m+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/M;return t[0]=g*b,t[1]=(o*f-p*i)*b,t[2]=(h*i-o*c)*b,t[3]=m*b,t[4]=(p*e-o*u)*b,t[5]=(o*a-h*e)*b,t[6]=y*b,t[7]=(i*u-f*e)*b,t[8]=(c*e-i*a)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,a,c,h){let u=Math.cos(a),f=Math.sin(a);return this.set(i*u,i*f,-i*(u*c+f*h)+c+t,-o*f,o*u,-o*(-f*c+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(Ta.makeScale(t,e)),this}rotate(t){return this.premultiply(Ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ta=new ue;Lh={};Ih=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dh=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Nn]:{transfer:po,primaries:mo,toReference:s=>s,fromReference:s=>s},[Xe]:{transfer:Ae,primaries:mo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Oo]:{transfer:po,primaries:go,toReference:s=>s.applyMatrix3(Dh),fromReference:s=>s.applyMatrix3(Ih)},[Nl]:{transfer:Ae,primaries:go,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dh),fromReference:s=>s.applyMatrix3(Ih).convertLinearToSRGB()}},Ap=new Set([Nn,Oo]),ve={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ap.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=Br[t].toReference,o=Br[e].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Br[s].primaries},getTransfer:function(s){return s===bn?po:Br[s].transfer}};xo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=yo("canvas")),os.width=t.width,os.height=t.height;let i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=yo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let o=i.getImageData(0,0,t.width,t.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Es(a[c]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Es(e[i]/255)*255):e[i]=Es(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pp=0,Mo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Us(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?a.push(Aa(o[c].image)):a.push(Aa(o[c]))}else a=Aa(o);i.url=a}return e||(t.images[this.uuid]=i),i}};Cp=0,Tn=class s extends Wn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Dn,o=Dn,a=Mn,c=ar,h=mn,u=Si,f=s.DEFAULT_ANISOTROPY,p=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Us(),this.name="",this.source=new Mo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=u,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Gi?Xe:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?Gi:Ru}set encoding(t){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gi?Xe:bn}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=bu;Tn.DEFAULT_ANISOTROPY=1;qe=class s{constructor(t=0,e=0,i=0,o=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,o=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*e+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*e+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*e+c[7]*i+c[11]*o+c[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,a,u=t.elements,f=u[0],p=u[4],g=u[8],m=u[1],y=u[5],M=u[9],b=u[2],x=u[6],_=u[10];if(Math.abs(p-m)<.01&&Math.abs(g-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+b)<.1&&Math.abs(M+x)<.1&&Math.abs(f+y+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(f+1)/2,D=(y+1)/2,B=(_+1)/2,O=(p+m)/4,F=(g+b)/4,st=(M+x)/4;return w>D&&w>B?w<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(w),o=O/i,a=F/i):D>B?D<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(D),i=O/o,a=st/o):B<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),i=F/a,o=st/a),this.set(i,o,a,e),this}let I=Math.sqrt((x-M)*(x-M)+(g-b)*(g-b)+(m-p)*(m-p));return Math.abs(I)<.001&&(I=1),this.x=(x-M)/I,this.y=(g-b)/I,this.z=(m-p)/I,this.w=Math.acos((f+y+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends Wn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);let o={width:t,height:e,depth:1};i.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gi?Xe:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Mo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends nl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},bo=class extends Tn{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},il=class extends Tn{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},On=class{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,a,c,h){let u=i[o+0],f=i[o+1],p=i[o+2],g=i[o+3],m=a[c+0],y=a[c+1],M=a[c+2],b=a[c+3];if(h===0){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=g;return}if(h===1){t[e+0]=m,t[e+1]=y,t[e+2]=M,t[e+3]=b;return}if(g!==b||u!==m||f!==y||p!==M){let x=1-h,_=u*m+f*y+p*M+g*b,I=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){let B=Math.sqrt(w),O=Math.atan2(B,_*I);x=Math.sin(x*O)/B,h=Math.sin(h*O)/B}let D=h*I;if(u=u*x+m*D,f=f*x+y*D,p=p*x+M*D,g=g*x+b*D,x===1-h){let B=1/Math.sqrt(u*u+f*f+p*p+g*g);u*=B,f*=B,p*=B,g*=B}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,o,a,c){let h=i[o],u=i[o+1],f=i[o+2],p=i[o+3],g=a[c],m=a[c+1],y=a[c+2],M=a[c+3];return t[e]=h*M+p*g+u*y-f*m,t[e+1]=u*M+p*m+f*g-h*y,t[e+2]=f*M+p*y+h*m-u*g,t[e+3]=p*M-h*g-u*m-f*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,o=t._y,a=t._z,c=t._order,h=Math.cos,u=Math.sin,f=h(i/2),p=h(o/2),g=h(a/2),m=u(i/2),y=u(o/2),M=u(a/2);switch(c){case"XYZ":this._x=m*p*g+f*y*M,this._y=f*y*g-m*p*M,this._z=f*p*M+m*y*g,this._w=f*p*g-m*y*M;break;case"YXZ":this._x=m*p*g+f*y*M,this._y=f*y*g-m*p*M,this._z=f*p*M-m*y*g,this._w=f*p*g+m*y*M;break;case"ZXY":this._x=m*p*g-f*y*M,this._y=f*y*g+m*p*M,this._z=f*p*M+m*y*g,this._w=f*p*g-m*y*M;break;case"ZYX":this._x=m*p*g-f*y*M,this._y=f*y*g+m*p*M,this._z=f*p*M-m*y*g,this._w=f*p*g+m*y*M;break;case"YZX":this._x=m*p*g+f*y*M,this._y=f*y*g+m*p*M,this._z=f*p*M-m*y*g,this._w=f*p*g-m*y*M;break;case"XZY":this._x=m*p*g-f*y*M,this._y=f*y*g-m*p*M,this._z=f*p*M+m*y*g,this._w=f*p*g+m*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],o=e[4],a=e[8],c=e[1],h=e[5],u=e[9],f=e[2],p=e[6],g=e[10],m=i+h+g;if(m>0){let y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-u)*y,this._y=(a-f)*y,this._z=(c-o)*y}else if(i>h&&i>g){let y=2*Math.sqrt(1+i-h-g);this._w=(p-u)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+f)/y}else if(h>g){let y=2*Math.sqrt(1+h-i-g);this._w=(a-f)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(u+p)/y}else{let y=2*Math.sqrt(1+g-i-h);this._w=(c-o)/y,this._x=(a+f)/y,this._y=(u+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,o=t._y,a=t._z,c=t._w,h=e._x,u=e._y,f=e._z,p=e._w;return this._x=i*p+c*h+o*f-a*u,this._y=o*p+c*u+a*h-i*f,this._z=a*p+c*f+i*u-o*h,this._w=c*p-i*h-o*u-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,o=this._y,a=this._z,c=this._w,h=c*t._w+i*t._x+o*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;let u=1-h*h;if(u<=Number.EPSILON){let y=1-e;return this._w=y*c+e*this._w,this._x=y*i+e*this._x,this._y=y*o+e*this._y,this._z=y*a+e*this._z,this.normalize(),this}let f=Math.sqrt(u),p=Math.atan2(f,h),g=Math.sin((1-e)*p)/f,m=Math.sin(e*p)/f;return this._w=c*g+this._w*m,this._x=i*g+this._x*m,this._y=o*g+this._y*m,this._z=a*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(o),i*Math.sin(a),i*Math.cos(a),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*o,this.y=a[1]*e+a[4]*i+a[7]*o,this.z=a[2]*e+a[5]*i+a[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,o=this.z,a=t.elements,c=1/(a[3]*e+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*e+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*e+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(t){let e=this.x,i=this.y,o=this.z,a=t.x,c=t.y,h=t.z,u=t.w,f=2*(c*o-h*i),p=2*(h*e-a*o),g=2*(a*i-c*e);return this.x=e+u*f+c*g-h*p,this.y=i+u*p+h*f-a*g,this.z=o+u*g+a*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o,this.y=a[1]*e+a[5]*i+a[9]*o,this.z=a[2]*e+a[6]*i+a[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,o=t.y,a=t.z,c=e.x,h=e.y,u=e.z;return this.x=o*u-a*h,this.y=a*c-i*u,this.z=i*h-o*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new G,Nh=new On,Wi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Cn):Cn.fromBufferAttribute(a,c),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}let o=t.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),kr.subVectors(this.max,Qs),as.subVectors(t.a,Qs),ls.subVectors(t.b,Qs),cs.subVectors(t.c,Qs),pi.subVectors(ls,as),mi.subVectors(cs,ls),Ni.subVectors(as,cs);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!Ca(e,as,ls,cs,kr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,as,ls,cs,kr))?!1:(Hr.crossVectors(pi,mi),e=[Hr.x,Hr.y,Hr.z],Ca(e,as,ls,cs,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new G,new G,new G,new G,new G,new G,new G,new G],Cn=new G,zr=new Wi,as=new G,ls=new G,cs=new G,pi=new G,mi=new G,Ni=new G,Qs=new G,kr=new G,Hr=new G,Oi=new G;Rp=new Wi,tr=new G,Ra=new G,Zn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Rp.setFromPoints(t).getCenter(i);let o=0;for(let a=0,c=t.length;a<c;a++)o=Math.max(o,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(tr,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Ra)),this.expandByPoint(tr.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new G,La=new G,Vr=new G,gi=new G,Ia=new G,Gr=new G,Da=new G,Ti=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){La.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(La);let a=t.distanceTo(e)*.5,c=-this.direction.dot(Vr),h=gi.dot(this.direction),u=-gi.dot(Vr),f=gi.lengthSq(),p=Math.abs(1-c*c),g,m,y,M;if(p>0)if(g=c*u-h,m=c*h-u,M=a*p,g>=0)if(m>=-M)if(m<=M){let b=1/p;g*=b,m*=b,y=g*(g+c*m+2*h)+m*(c*g+m+2*u)+f}else m=a,g=Math.max(0,-(c*m+h)),y=-g*g+m*(m+2*u)+f;else m=-a,g=Math.max(0,-(c*m+h)),y=-g*g+m*(m+2*u)+f;else m<=-M?(g=Math.max(0,-(-c*a+h)),m=g>0?-a:Math.min(Math.max(-a,-u),a),y=-g*g+m*(m+2*u)+f):m<=M?(g=0,m=Math.min(Math.max(-a,-u),a),y=m*(m+2*u)+f):(g=Math.max(0,-(c*a+h)),m=g>0?a:Math.min(Math.max(-a,-u),a),y=-g*g+m*(m+2*u)+f);else m=c>0?-a:a,g=Math.max(0,-(c*m+h)),y=-g*g+m*(m+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(La).addScaledVector(Vr,m),y}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let i=ti.dot(this.direction),o=ti.dot(ti)-i*i,a=t.radius*t.radius;if(o>a)return null;let c=Math.sqrt(a-o),h=i-c,u=i+c;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,a,c,h,u,f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(t.min.x-m.x)*f,o=(t.max.x-m.x)*f):(i=(t.max.x-m.x)*f,o=(t.min.x-m.x)*f),p>=0?(a=(t.min.y-m.y)*p,c=(t.max.y-m.y)*p):(a=(t.max.y-m.y)*p,c=(t.min.y-m.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),g>=0?(h=(t.min.z-m.z)*g,u=(t.max.z-m.z)*g):(h=(t.max.z-m.z)*g,u=(t.min.z-m.z)*g),i>u||h>o)||((h>i||i!==i)&&(i=h),(u<o||o!==o)&&(o=u),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,o,a){Ia.subVectors(e,t),Gr.subVectors(i,t),Da.crossVectors(Ia,Gr);let c=this.direction.dot(Da),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;gi.subVectors(this.origin,t);let u=h*this.direction.dot(Gr.crossVectors(gi,Gr));if(u<0)return null;let f=h*this.direction.dot(Ia.cross(gi));if(f<0||u+f>c)return null;let p=-h*gi.dot(Da);return p<0?null:this.at(p/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class s{constructor(t,e,i,o,a,c,h,u,f,p,g,m,y,M,b,x){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,c,h,u,f,p,g,m,y,M,b,x)}set(t,e,i,o,a,c,h,u,f,p,g,m,y,M,b,x){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=o,_[1]=a,_[5]=c,_[9]=h,_[13]=u,_[2]=f,_[6]=p,_[10]=g,_[14]=m,_[3]=y,_[7]=M,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,o=1/hs.setFromMatrixColumn(t,0).length(),a=1/hs.setFromMatrixColumn(t,1).length(),c=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,o=t.y,a=t.z,c=Math.cos(i),h=Math.sin(i),u=Math.cos(o),f=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(t.order==="XYZ"){let m=c*p,y=c*g,M=h*p,b=h*g;e[0]=u*p,e[4]=-u*g,e[8]=f,e[1]=y+M*f,e[5]=m-b*f,e[9]=-h*u,e[2]=b-m*f,e[6]=M+y*f,e[10]=c*u}else if(t.order==="YXZ"){let m=u*p,y=u*g,M=f*p,b=f*g;e[0]=m+b*h,e[4]=M*h-y,e[8]=c*f,e[1]=c*g,e[5]=c*p,e[9]=-h,e[2]=y*h-M,e[6]=b+m*h,e[10]=c*u}else if(t.order==="ZXY"){let m=u*p,y=u*g,M=f*p,b=f*g;e[0]=m-b*h,e[4]=-c*g,e[8]=M+y*h,e[1]=y+M*h,e[5]=c*p,e[9]=b-m*h,e[2]=-c*f,e[6]=h,e[10]=c*u}else if(t.order==="ZYX"){let m=c*p,y=c*g,M=h*p,b=h*g;e[0]=u*p,e[4]=M*f-y,e[8]=m*f+b,e[1]=u*g,e[5]=b*f+m,e[9]=y*f-M,e[2]=-f,e[6]=h*u,e[10]=c*u}else if(t.order==="YZX"){let m=c*u,y=c*f,M=h*u,b=h*f;e[0]=u*p,e[4]=b-m*g,e[8]=M*g+y,e[1]=g,e[5]=c*p,e[9]=-h*p,e[2]=-f*p,e[6]=y*g+M,e[10]=m-b*g}else if(t.order==="XZY"){let m=c*u,y=c*f,M=h*u,b=h*f;e[0]=u*p,e[4]=-g,e[8]=f*p,e[1]=m*g+b,e[5]=c*p,e[9]=y*g-M,e[2]=M*g-y,e[6]=h*p,e[10]=b*g+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lp,t,Ip)}lookAt(t,e,i){let o=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),_i.crossVectors(i,dn),_i.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),_i.crossVectors(i,dn)),_i.normalize(),Wr.crossVectors(dn,_i),o[0]=_i.x,o[4]=Wr.x,o[8]=dn.x,o[1]=_i.y,o[5]=Wr.y,o[9]=dn.y,o[2]=_i.z,o[6]=Wr.z,o[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,o=e.elements,a=this.elements,c=i[0],h=i[4],u=i[8],f=i[12],p=i[1],g=i[5],m=i[9],y=i[13],M=i[2],b=i[6],x=i[10],_=i[14],I=i[3],w=i[7],D=i[11],B=i[15],O=o[0],F=o[4],st=o[8],E=o[12],R=o[1],k=o[5],tt=o[9],ht=o[13],C=o[2],H=o[6],V=o[10],it=o[14],W=o[3],Y=o[7],rt=o[11],at=o[15];return a[0]=c*O+h*R+u*C+f*W,a[4]=c*F+h*k+u*H+f*Y,a[8]=c*st+h*tt+u*V+f*rt,a[12]=c*E+h*ht+u*it+f*at,a[1]=p*O+g*R+m*C+y*W,a[5]=p*F+g*k+m*H+y*Y,a[9]=p*st+g*tt+m*V+y*rt,a[13]=p*E+g*ht+m*it+y*at,a[2]=M*O+b*R+x*C+_*W,a[6]=M*F+b*k+x*H+_*Y,a[10]=M*st+b*tt+x*V+_*rt,a[14]=M*E+b*ht+x*it+_*at,a[3]=I*O+w*R+D*C+B*W,a[7]=I*F+w*k+D*H+B*Y,a[11]=I*st+w*tt+D*V+B*rt,a[15]=I*E+w*ht+D*it+B*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],o=t[8],a=t[12],c=t[1],h=t[5],u=t[9],f=t[13],p=t[2],g=t[6],m=t[10],y=t[14],M=t[3],b=t[7],x=t[11],_=t[15];return M*(+a*u*g-o*f*g-a*h*m+i*f*m+o*h*y-i*u*y)+b*(+e*u*y-e*f*m+a*c*m-o*c*y+o*f*p-a*u*p)+x*(+e*f*g-e*h*y-a*c*g+i*c*y+a*h*p-i*f*p)+_*(-o*h*p-e*u*g+e*h*m+o*c*g-i*c*m+i*u*p)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],h=t[5],u=t[6],f=t[7],p=t[8],g=t[9],m=t[10],y=t[11],M=t[12],b=t[13],x=t[14],_=t[15],I=g*x*f-b*m*f+b*u*y-h*x*y-g*u*_+h*m*_,w=M*m*f-p*x*f-M*u*y+c*x*y+p*u*_-c*m*_,D=p*b*f-M*g*f+M*h*y-c*b*y-p*h*_+c*g*_,B=M*g*u-p*b*u-M*h*m+c*b*m+p*h*x-c*g*x,O=e*I+i*w+o*D+a*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/O;return t[0]=I*F,t[1]=(b*m*a-g*x*a-b*o*y+i*x*y+g*o*_-i*m*_)*F,t[2]=(h*x*a-b*u*a+b*o*f-i*x*f-h*o*_+i*u*_)*F,t[3]=(g*u*a-h*m*a-g*o*f+i*m*f+h*o*y-i*u*y)*F,t[4]=w*F,t[5]=(p*x*a-M*m*a+M*o*y-e*x*y-p*o*_+e*m*_)*F,t[6]=(M*u*a-c*x*a-M*o*f+e*x*f+c*o*_-e*u*_)*F,t[7]=(c*m*a-p*u*a+p*o*f-e*m*f-c*o*y+e*u*y)*F,t[8]=D*F,t[9]=(M*g*a-p*b*a-M*i*y+e*b*y+p*i*_-e*g*_)*F,t[10]=(c*b*a-M*h*a+M*i*f-e*b*f-c*i*_+e*h*_)*F,t[11]=(p*h*a-c*g*a-p*i*f+e*g*f+c*i*y-e*h*y)*F,t[12]=B*F,t[13]=(p*b*o-M*g*o+M*i*m-e*b*m-p*i*x+e*g*x)*F,t[14]=(M*h*o-c*b*o-M*i*u+e*b*u+c*i*x-e*h*x)*F,t[15]=(c*g*o-p*h*o+p*i*u-e*g*u-c*i*m+e*h*m)*F,this}scale(t){let e=this.elements,i=t.x,o=t.y,a=t.z;return e[0]*=i,e[4]*=o,e[8]*=a,e[1]*=i,e[5]*=o,e[9]*=a,e[2]*=i,e[6]*=o,e[10]*=a,e[3]*=i,e[7]*=o,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),o=Math.sin(e),a=1-i,c=t.x,h=t.y,u=t.z,f=a*c,p=a*h;return this.set(f*c+i,f*h-o*u,f*u+o*h,0,f*h+o*u,p*h+i,p*u-o*c,0,f*u-o*h,p*u+o*c,a*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,a,c){return this.set(1,i,a,0,t,1,c,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){let o=this.elements,a=e._x,c=e._y,h=e._z,u=e._w,f=a+a,p=c+c,g=h+h,m=a*f,y=a*p,M=a*g,b=c*p,x=c*g,_=h*g,I=u*f,w=u*p,D=u*g,B=i.x,O=i.y,F=i.z;return o[0]=(1-(b+_))*B,o[1]=(y+D)*B,o[2]=(M-w)*B,o[3]=0,o[4]=(y-D)*O,o[5]=(1-(m+_))*O,o[6]=(x+I)*O,o[7]=0,o[8]=(M+w)*F,o[9]=(x-I)*F,o[10]=(1-(m+b))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){let o=this.elements,a=hs.set(o[0],o[1],o[2]).length(),c=hs.set(o[4],o[5],o[6]).length(),h=hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),t.x=o[12],t.y=o[13],t.z=o[14],Rn.copy(this);let f=1/a,p=1/c,g=1/h;return Rn.elements[0]*=f,Rn.elements[1]*=f,Rn.elements[2]*=f,Rn.elements[4]*=p,Rn.elements[5]*=p,Rn.elements[6]*=p,Rn.elements[8]*=g,Rn.elements[9]*=g,Rn.elements[10]*=g,e.setFromRotationMatrix(Rn),i.x=a,i.y=c,i.z=h,this}makePerspective(t,e,i,o,a,c,h=ri){let u=this.elements,f=2*a/(e-t),p=2*a/(i-o),g=(e+t)/(e-t),m=(i+o)/(i-o),y,M;if(h===ri)y=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(h===_o)y=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return u[0]=f,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,o,a,c,h=ri){let u=this.elements,f=1/(e-t),p=1/(i-o),g=1/(c-a),m=(e+t)*f,y=(i+o)*p,M,b;if(h===ri)M=(c+a)*g,b=-2*g;else if(h===_o)M=a*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-y,u[2]=0,u[6]=0,u[10]=b,u[14]=-M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},hs=new G,Rn=new Fe,Lp=new G(0,0,0),Ip=new G(1,1,1),_i=new G,Wr=new G,dn=new G,Oh=new Fe,Uh=new On,So=class s{constructor(t=0,e=0,i=0,o=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let o=t.elements,a=o[0],c=o[4],h=o[8],u=o[1],f=o[5],p=o[9],g=o[2],m=o[6],y=o[10];switch(e){case"XYZ":this._y=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(tn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};So.DEFAULT_ORDER="XYZ";hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dp=0,Fh=new G,us=new On,ei=new Fe,Zr=new G,er=new G,Np=new G,Op=new On,Bh=new G(1,0,0),zh=new G(0,1,0),kh=new G(0,0,1),Up={type:"added"},Fp={type:"removed"},gn=class s extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new G,e=new So,i=new On,o=new G(1,1,1);function a(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ue}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zr.copy(t):Zr.set(t,e,i);let o=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(er,Zr,this.up):ei.lookAt(Zr,er,this.up),this.quaternion.setFromRotationMatrix(ei),o&&(ei.extractRotation(o.matrixWorld),us.setFromRotationMatrix(ei),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){let c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,o=e.length;i<o;i++){let a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let o=this.children;for(let a=0,c=o.length;a<c;a++){let h=o[a];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){let g=u[f];a(t.shapes,g)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,f=this.material.length;u<f;u++)h.push(a(t.materials,this.material[u]));o.material=h}else o.material=a(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];o.animations.push(a(t.animations,u))}}if(e){let h=c(t.geometries),u=c(t.materials),f=c(t.textures),p=c(t.images),g=c(t.shapes),m=c(t.skeletons),y=c(t.animations),M=c(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(h){let u=[];for(let f in h){let p=h[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let o=t.children[i];this.add(o.clone())}return this}};gn.DEFAULT_UP=new G(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ln=new G,ni=new G,Na=new G,ii=new G,ds=new G,fs=new G,Hh=new G,Oa=new G,Ua=new G,Fa=new G,Xr=!1,bs=class s{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),Ln.subVectors(t,e),o.cross(Ln);let a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(t,e,i,o,a){Ln.subVectors(o,e),ni.subVectors(i,e),Na.subVectors(t,e);let c=Ln.dot(Ln),h=Ln.dot(ni),u=Ln.dot(Na),f=ni.dot(ni),p=ni.dot(Na),g=c*f-h*h;if(g===0)return a.set(0,0,0),null;let m=1/g,y=(f*u-h*p)*m,M=(c*p-h*u)*m;return a.set(1-y-M,M,y)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(t,e,i,o,a,c,h,u){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(t,e,i,o,a,c,h,u)}static getInterpolation(t,e,i,o,a,c,h,u){return this.getBarycoord(t,e,i,o,ii)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,ii.x),u.addScaledVector(c,ii.y),u.addScaledVector(h,ii.z),u)}static isFrontFacing(t,e,i,o){return Ln.subVectors(i,e),ni.subVectors(t,e),Ln.cross(ni).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,o,a){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,i,o,a)}getInterpolation(t,e,i,o,a){return s.getInterpolation(t,this.a,this.b,this.c,e,i,o,a)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,o=this.b,a=this.c,c,h;ds.subVectors(o,i),fs.subVectors(a,i),Oa.subVectors(t,i);let u=ds.dot(Oa),f=fs.dot(Oa);if(u<=0&&f<=0)return e.copy(i);Ua.subVectors(t,o);let p=ds.dot(Ua),g=fs.dot(Ua);if(p>=0&&g<=p)return e.copy(o);let m=u*g-p*f;if(m<=0&&u>=0&&p<=0)return c=u/(u-p),e.copy(i).addScaledVector(ds,c);Fa.subVectors(t,a);let y=ds.dot(Fa),M=fs.dot(Fa);if(M>=0&&y<=M)return e.copy(a);let b=y*f-u*M;if(b<=0&&f>=0&&M<=0)return h=f/(f-M),e.copy(i).addScaledVector(fs,h);let x=p*M-y*g;if(x<=0&&g-p>=0&&y-M>=0)return Hh.subVectors(a,o),h=(g-p)/(g-p+(y-M)),e.copy(o).addScaledVector(Hh,h);let _=1/(x+b+m);return c=b*_,h=m*_,e.copy(i).addScaledVector(ds,c).addScaledVector(fs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},qr={h:0,s:0,l:0};ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=ve.workingColorSpace){if(t=Ol(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,c=2*i-a;this.r=Ba(c,a,t+1/3),this.g=Ba(c,a,t),this.b=Ba(c,a,t-1/3)}return ve.toWorkingColorSpace(this,o),this}setStyle(t,e=Xe){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=Nu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}copyLinearToSRGB(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ve.fromWorkingColorSpace(Qe.copy(this),t),Math.round(tn(Qe.r*255,0,255))*65536+Math.round(tn(Qe.g*255,0,255))*256+Math.round(tn(Qe.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(Qe.copy(this),e);let i=Qe.r,o=Qe.g,a=Qe.b,c=Math.max(i,o,a),h=Math.min(i,o,a),u,f,p=(h+c)/2;if(h===c)u=0,f=0;else{let g=c-h;switch(f=p<=.5?g/(c+h):g/(2-c-h),c){case i:u=(o-a)/g+(o<a?6:0);break;case o:u=(a-i)/g+2;break;case a:u=(i-o)/g+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Xe){ve.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,i=Qe.g,o=Qe.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(qr);let i=sr(vi.h,qr.h,e),o=sr(vi.s,qr.s,e),a=sr(vi.l,qr.l,e);return this.setHSL(i,o,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,o=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*o,this.g=a[1]*e+a[4]*i+a[7]*o,this.b=a[2]*e+a[5]*i+a[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new ae;ae.NAMES=Nu;Bp=0,Ei=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Ts,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=$a,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ya&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){let c=[];for(let h in a){let u=a[h];delete u.metadata,c.push(u)}return c}if(e){let a=o(t.textures),c=o(t.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let o=e.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ls=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ue=new G,Yr=new te,Ye=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),o=rn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),o=rn(o,this.array),a=rn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}},wo=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}},To=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}},wn=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},zp=0,xn=new Fe,za=new gn,ps=new G,fn=new Wi,nr=new Wi,He=new G,en=class s extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?To:wo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new ue().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=[];for(let i=0,o=t.length;i<o;i++){let a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new wn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){let a=e[i];fn.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){let h=e[a];nr.setFromBufferAttribute(h),this.morphTargetsRelative?(He.addVectors(fn.min,nr.min),fn.expandByPoint(He),He.addVectors(fn.max,nr.max),fn.expandByPoint(He)):(fn.expandByPoint(nr.min),fn.expandByPoint(nr.max))}fn.getCenter(i);let o=0;for(let a=0,c=t.count;a<c;a++)He.fromBufferAttribute(t,a),o=Math.max(o,i.distanceToSquared(He));if(e)for(let a=0,c=e.length;a<c;a++){let h=e[a],u=this.morphTargetsRelative;for(let f=0,p=h.count;f<p;f++)He.fromBufferAttribute(h,f),u&&(ps.fromBufferAttribute(t,f),He.add(ps)),o=Math.max(o,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,o=e.position.array,a=e.normal.array,c=e.uv.array,h=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*h),4));let u=this.getAttribute("tangent").array,f=[],p=[];for(let R=0;R<h;R++)f[R]=new G,p[R]=new G;let g=new G,m=new G,y=new G,M=new te,b=new te,x=new te,_=new G,I=new G;function w(R,k,tt){g.fromArray(o,R*3),m.fromArray(o,k*3),y.fromArray(o,tt*3),M.fromArray(c,R*2),b.fromArray(c,k*2),x.fromArray(c,tt*2),m.sub(g),y.sub(g),b.sub(M),x.sub(M);let ht=1/(b.x*x.y-x.x*b.y);isFinite(ht)&&(_.copy(m).multiplyScalar(x.y).addScaledVector(y,-b.y).multiplyScalar(ht),I.copy(y).multiplyScalar(b.x).addScaledVector(m,-x.x).multiplyScalar(ht),f[R].add(_),f[k].add(_),f[tt].add(_),p[R].add(I),p[k].add(I),p[tt].add(I))}let D=this.groups;D.length===0&&(D=[{start:0,count:i.length}]);for(let R=0,k=D.length;R<k;++R){let tt=D[R],ht=tt.start,C=tt.count;for(let H=ht,V=ht+C;H<V;H+=3)w(i[H+0],i[H+1],i[H+2])}let B=new G,O=new G,F=new G,st=new G;function E(R){F.fromArray(a,R*3),st.copy(F);let k=f[R];B.copy(k),B.sub(F.multiplyScalar(F.dot(k))).normalize(),O.crossVectors(st,k);let ht=O.dot(p[R])<0?-1:1;u[R*4]=B.x,u[R*4+1]=B.y,u[R*4+2]=B.z,u[R*4+3]=ht}for(let R=0,k=D.length;R<k;++R){let tt=D[R],ht=tt.start,C=tt.count;for(let H=ht,V=ht+C;H<V;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);let o=new G,a=new G,c=new G,h=new G,u=new G,f=new G,p=new G,g=new G;if(t)for(let m=0,y=t.count;m<y;m+=3){let M=t.getX(m+0),b=t.getX(m+1),x=t.getX(m+2);o.fromBufferAttribute(e,M),a.fromBufferAttribute(e,b),c.fromBufferAttribute(e,x),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),h.add(p),u.add(p),f.add(p),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(b,u.x,u.y,u.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,y=e.count;m<y;m+=3)o.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),c.fromBufferAttribute(e,m+2),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(h,u){let f=h.array,p=h.itemSize,g=h.normalized,m=new f.constructor(u.length*p),y=0,M=0;for(let b=0,x=u.length;b<x;b++){h.isInterleavedBufferAttribute?y=u[b]*h.data.stride+h.offset:y=u[b]*p;for(let _=0;_<p;_++)m[M++]=f[y++]}return new Ye(m,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,o=this.attributes;for(let h in o){let u=o[h],f=t(u,i);e.setAttribute(h,f)}let a=this.morphAttributes;for(let h in a){let u=[],f=a[h];for(let p=0,g=f.length;p<g;p++){let m=f[p],y=t(m,i);u.push(y)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let h=0,u=c.length;h<u;h++){let f=c[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let f=i[u];t.data.attributes[u]=f.toJSON(t.data)}let o={},a=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],p=[];for(let g=0,m=f.length;g<m;g++){let y=f[g];p.push(y.toJSON(t.data))}p.length>0&&(o[u]=p,a=!0)}a&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let o=t.attributes;for(let f in o){let p=o[f];this.setAttribute(f,p.clone(e))}let a=t.morphAttributes;for(let f in a){let p=[],g=a[f];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let f=0,p=c.length;f<p;f++){let g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vh=new Fe,Ui=new Ti,$r=new Zn,Gh=new G,ms=new G,gs=new G,_s=new G,ka=new G,Jr=new G,Kr=new te,jr=new te,Qr=new te,Wh=new G,Zh=new G,Xh=new G,to=new G,eo=new G,Sn=class extends gn{constructor(t=new en,e=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){let h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){let i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(o,t);let h=this.morphTargetInfluences;if(a&&h){Jr.set(0,0,0);for(let u=0,f=a.length;u<f;u++){let p=h[u],g=a[u];p!==0&&(ka.fromBufferAttribute(g,t),c?Jr.addScaledVector(ka,p):Jr.addScaledVector(ka.sub(e),p))}e.add(Jr)}return e}raycast(t,e){let i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(a),Ui.copy(t.ray).recast(t.near),!($r.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere($r,Gh)===null||Ui.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Vh.copy(a).invert(),Ui.copy(t.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,i){let o,a=this.geometry,c=this.material,h=a.index,u=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,m=a.groups,y=a.drawRange;if(h!==null)if(Array.isArray(c))for(let M=0,b=m.length;M<b;M++){let x=m[M],_=c[x.materialIndex],I=Math.max(x.start,y.start),w=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let D=I,B=w;D<B;D+=3){let O=h.getX(D),F=h.getX(D+1),st=h.getX(D+2);o=no(this,_,t,i,f,p,g,O,F,st),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{let M=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let x=M,_=b;x<_;x+=3){let I=h.getX(x),w=h.getX(x+1),D=h.getX(x+2);o=no(this,c,t,i,f,p,g,I,w,D),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(u!==void 0)if(Array.isArray(c))for(let M=0,b=m.length;M<b;M++){let x=m[M],_=c[x.materialIndex],I=Math.max(x.start,y.start),w=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let D=I,B=w;D<B;D+=3){let O=D,F=D+1,st=D+2;o=no(this,_,t,i,f,p,g,O,F,st),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{let M=Math.max(0,y.start),b=Math.min(u.count,y.start+y.count);for(let x=M,_=b;x<_;x+=3){let I=x,w=x+1,D=x+2;o=no(this,c,t,i,f,p,g,I,w,D),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}};ur=class s extends en{constructor(t=1,e=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};let h=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);let u=[],f=[],p=[],g=[],m=0,y=0;M("z","y","x",-1,-1,i,e,t,c,a,0),M("z","y","x",1,-1,i,e,-t,c,a,1),M("x","z","y",1,1,t,i,e,o,c,2),M("x","z","y",1,-1,t,i,-e,o,c,3),M("x","y","z",1,-1,t,e,i,o,a,4),M("x","y","z",-1,-1,t,e,-i,o,a,5),this.setIndex(u),this.setAttribute("position",new wn(f,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(g,2));function M(b,x,_,I,w,D,B,O,F,st,E){let R=D/F,k=B/st,tt=D/2,ht=B/2,C=O/2,H=F+1,V=st+1,it=0,W=0,Y=new G;for(let rt=0;rt<V;rt++){let at=rt*k-ht;for(let gt=0;gt<H;gt++){let q=gt*R-tt;Y[b]=q*I,Y[x]=at*w,Y[_]=C,f.push(Y.x,Y.y,Y.z),Y[b]=0,Y[x]=0,Y[_]=O>0?1:-1,p.push(Y.x,Y.y,Y.z),g.push(gt/F),g.push(1-rt/st),it+=1}}for(let rt=0;rt<st;rt++)for(let at=0;at<F;at++){let gt=m+at+H*rt,q=m+at+H*(rt+1),nt=m+(at+1)+H*(rt+1),Mt=m+(at+1)+H*rt;u.push(gt,q,Mt),u.push(q,nt,Mt),W+=6}h.addGroup(y,W,E),y+=W,m+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Vp={clone:Is,merge:on},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let o in this.uniforms){let c=this.uniforms[o].value;c&&c.isTexture?e.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[o]={type:"m4",value:c.toArray()}:e.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Eo=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},an=class extends Eo{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,o,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,a=-.5*o,c=this.view;if(this.view!==null&&this.view.enabled){let u=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/u,e-=c.offsetY*i/f,o*=c.width/u,i*=c.height/f}let h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,ys=1,sl=class extends gn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new an(vs,ys,t,e);o.layers=this.layers,this.add(o);let a=new an(vs,ys,t,e);a.layers=this.layers,this.add(a);let c=new an(vs,ys,t,e);c.layers=this.layers,this.add(c);let h=new an(vs,ys,t,e);h.layers=this.layers,this.add(h);let u=new an(vs,ys,t,e);u.layers=this.layers,this.add(u);let f=new an(vs,ys,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,o,a,c,h,u]=e;for(let f of e)this.remove(f);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,c,h,u,f,p]=this.children,g=t.getRenderTarget(),m=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,a),t.setRenderTarget(i,1,o),t.render(e,c),t.setRenderTarget(i,2,o),t.render(e,h),t.setRenderTarget(i,3,o),t.render(e,u),t.setRenderTarget(i,4,o),t.render(e,f),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,o),t.render(e,p),t.setRenderTarget(g,m,y),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},Ao=class extends Tn{constructor(t,e,i,o,a,c,h,u,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,i,o,a,c,h,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rl=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];e.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Gi?Xe:bn),this.texture=new Ao(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ur(5,5,5),a=new Un({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Mi});a.uniforms.tEquirect.value=e;let c=new Sn(o,a),h=e.minFilter;return e.minFilter===ar&&(e.minFilter=Mn),new sl(1,10,this).update(t,c),e.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,i,o){let a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,o);t.setRenderTarget(a)}},Ha=new G,Zp=new G,Xp=new ue,pn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let o=Ha.subVectors(i,e).cross(Zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ha),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Xp.getNormalMatrix(t),o=this.coplanarPoint(Ha).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Zn,io=new G,Ds=class{constructor(t=new pn,e=new pn,i=new pn,o=new pn,a=new pn,c=new pn){this.planes=[t,e,i,o,a,c]}set(t,e,i,o,a,c){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(o),h[4].copy(a),h[5].copy(c),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){let i=this.planes,o=t.elements,a=o[0],c=o[1],h=o[2],u=o[3],f=o[4],p=o[5],g=o[6],m=o[7],y=o[8],M=o[9],b=o[10],x=o[11],_=o[12],I=o[13],w=o[14],D=o[15];if(i[0].setComponents(u-a,m-f,x-y,D-_).normalize(),i[1].setComponents(u+a,m+f,x+y,D+_).normalize(),i[2].setComponents(u+c,m+p,x+M,D+I).normalize(),i[3].setComponents(u-c,m-p,x-M,D-I).normalize(),i[4].setComponents(u-h,m-g,x-b,D-w).normalize(),e===ri)i[5].setComponents(u+h,m+g,x+b,D+w).normalize();else if(e===_o)i[5].setComponents(h,g,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,i=t.center,o=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let o=e[i];if(io.x=o.normal.x>0?t.max.x:t.min.x,io.y=o.normal.y>0?t.max.y:t.min.y,io.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};ol=class s extends en{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};let a=t/2,c=e/2,h=Math.floor(i),u=Math.floor(o),f=h+1,p=u+1,g=t/h,m=e/u,y=[],M=[],b=[],x=[];for(let _=0;_<p;_++){let I=_*m-c;for(let w=0;w<f;w++){let D=w*g-a;M.push(D,-I,0),b.push(0,0,1),x.push(w/h),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let I=0;I<h;I++){let w=I+f*_,D=I+f*(_+1),B=I+1+f*(_+1),O=I+1+f*_;y.push(w,D,O),y.push(D,B,O)}this.setIndex(y),this.setAttribute("position",new wn(M,3)),this.setAttribute("normal",new wn(b,3)),this.setAttribute("uv",new wn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Um=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ig=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,e_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,T_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:Yp,alphahash_pars_fragment:$p,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:xm,displacementmap_vertex:Mm,emissivemap_fragment:bm,emissivemap_pars_fragment:Sm,colorspace_fragment:wm,colorspace_pars_fragment:Tm,envmap_fragment:Em,envmap_common_pars_fragment:Am,envmap_pars_fragment:Pm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Hm,envmap_vertex:Rm,fog_vertex:Lm,fog_pars_vertex:Im,fog_fragment:Dm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Om,lightmap_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:zm,lights_pars_begin:km,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Zm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:$m,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:tg,map_fragment:eg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:xg,opaque_fragment:Mg,packing:bg,premultiplied_alpha_fragment:Sg,project_vertex:wg,dithering_fragment:Tg,dithering_pars_fragment:Eg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ig,skinbase_vertex:Dg,skinning_pars_vertex:Ng,skinning_vertex:Og,skinnormal_vertex:Ug,specularmap_fragment:Fg,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:kg,transmission_fragment:Hg,transmission_pars_fragment:Vg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Zg,worldpos_vertex:Xg,background_vert:qg,background_frag:Yg,backgroundCube_vert:$g,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:jg,depth_vert:Qg,depth_frag:t_,distanceRGBA_vert:e_,distanceRGBA_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:o_,meshbasic_vert:a_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:h_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:__,meshphysical_frag:v_,meshtoon_vert:y_,meshtoon_frag:x_,points_vert:M_,points_frag:b_,shadow_vert:S_,shadow_frag:w_,sprite_vert:T_,sprite_frag:E_},bt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Gn={basic:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ae(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:on([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:on([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ae(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:on([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:on([bt.points,bt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:on([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:on([bt.common,bt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:on([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:on([bt.sprite,bt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:on([bt.common,bt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:on([bt.lights,bt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Gn.physical={uniforms:on([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};so={r:0,b:0,g:0};al=class extends Eo{constructor(t=-1,e=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2,a=i-t,c=i+t,h=o+e,u=o-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,h-=p*this.view.offsetY,u=h-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ss=4,qh=[.125,.215,.35,.446,.526,.582],ki=20,Va=new al,Yh=new ae,Ga=null,Wa=0,Za=0,Bi=(1+Math.sqrt(5))/2,xs=1/Bi,$h=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Bi,xs),new G(0,Bi,-xs),new G(xs,0,Bi),new G(-xs,0,Bi),new G(Bi,xs,0),new G(-Bi,xs,0)],Po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,o,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Wa,Za),t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:lr,format:mn,colorSpace:Nn,depthBuffer:!1},o=Jh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(a)),this._blurMaterial=N_(a,t,e)}return o}_compileMaterial(t){let e=new Sn(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,i,o){let h=new an(90,1,e,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(Yh),p.toneMapping=bi,p.autoClear=!1;let y=new Ls({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),M=new Sn(new ur,y),b=!1,x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,b=!0):(y.color.copy(Yh),b=!0);for(let _=0;_<6;_++){let I=_%3;I===0?(h.up.set(0,u[_],0),h.lookAt(f[_],0,0)):I===1?(h.up.set(0,0,u[_]),h.lookAt(0,f[_],0)):(h.up.set(0,u[_],0),h.lookAt(0,0,f[_]));let w=this._cubeSize;ro(o,I*w,_>2?w:0,w,w),p.setRenderTarget(o),b&&p.render(M,h),p.render(t,h)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=m,p.autoClear=g,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,o=t.mapping===Ps||t.mapping===Cs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let a=o?this._cubemapMaterial:this._equirectMaterial,c=new Sn(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;let u=this._cubeSize;ro(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(c,Va)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){let a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=$h[(o-1)%$h.length];this._blur(t,o-1,o,a,c)}e.autoClear=i}_blur(t,e,i,o,a){let c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,o,"latitudinal",a),this._halfBlur(c,t,i,i,o,"longitudinal",a)}_halfBlur(t,e,i,o,a,c,h){let u=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,g=new Sn(this._lodPlanes[o],f),m=f.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ki-1),b=a/M,x=isFinite(a)?1+Math.floor(p*b):ki;x>ki&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ki}`);let _=[],I=0;for(let F=0;F<ki;++F){let st=F/b,E=Math.exp(-st*st/2);_.push(E),F===0?I+=E:F<x&&(I+=2*E)}for(let F=0;F<_.length;F++)_[F]=_[F]/I;m.envMap.value=t.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=c==="latitudinal",h&&(m.poleAxis.value=h);let{_lodMax:w}=this;m.dTheta.value=M,m.mipInt.value=w-i;let D=this._sizeLods[o],B=3*D*(o>w-Ss?o-w+Ss:0),O=4*(this._cubeSize-D);ro(e,B,O,3*D,2*D),u.setRenderTarget(e),u.render(g,Va)}};Co=class extends Tn{constructor(t,e,i,o,a,c,h,u,f,p){if(p=p!==void 0?p:Vi,p!==Vi&&p!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Vi&&(i=yi),i===void 0&&p===Rs&&(i=Hi),super(null,o,a,c,h,u,p,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=h!==void 0?h:Ze,this.minFilter=u!==void 0?u:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fu=new Tn,Bu=new Co(1,1);Bu.compareFunction=Lu;zu=new bo,ku=new il,Hu=new Ao,Qh=[],tu=[],eu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);ll=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cv(e.type)}},cl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cv(e.type)}},hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let o=this.seq;for(let a=0,c=o.length;a!==c;++a){let h=o[a];h.setValue(t,e[h.id],i)}}},Xa=/(\w+)(\])?(\[|\.)?/g;As=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Rv(a,c,this)}}setValue(t,e,i,o){let a=this.map[e];a!==void 0&&a.setValue(t,i,o)}setOptional(t,e,i){let o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let a=0,c=e.length;a!==c;++a){let h=e[a],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,o)}}static seqWithValue(t,e){let i=[];for(let o=0,a=t.length;o!==a;++o){let c=t[o];c.id in e&&i.push(c)}return i}};Lv=37297,Iv=0;Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;Vv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;jv=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new fl(t),e.set(t,i)),i}},fl=class{constructor(t){this.id=jv++,this.code=t,this.usedTimes=0}};r0=0;pl=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ml=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;gl=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},oi=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},m0={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,a=null,c=null,h=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(let b of t.hand.values()){let x=e.getJointPose(b,i),_=this._getHandJoint(f,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,M=.005;f.inputState.pinching&&m>y+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&m<=y-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return h!==null&&(h.visible=o!==null),u!==null&&(u.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_l=class extends Wn{constructor(t,e){super();let i=this,o=null,a=1,c=null,h="local-floor",u=1,f=null,p=null,g=null,m=null,y=null,M=null,b=e.getContextAttributes(),x=null,_=null,I=[],w=[],D=new te,B=null,O=new an;O.layers.enable(1),O.viewport=new qe;let F=new an;F.layers.enable(2),F.viewport=new qe;let st=[O,F],E=new gl;E.layers.enable(1),E.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=I[q];return nt===void 0&&(nt=new or,I[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=I[q];return nt===void 0&&(nt=new or,I[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=I[q];return nt===void 0&&(nt=new or,I[q]=nt),nt.getHandSpace()};function tt(q){let nt=w.indexOf(q.inputSource);if(nt===-1)return;let Mt=I[nt];Mt!==void 0&&(Mt.update(q.inputSource,q.frame,f||c),Mt.dispatchEvent({type:q.type,data:q.inputSource}))}function ht(){o.removeEventListener("select",tt),o.removeEventListener("selectstart",tt),o.removeEventListener("selectend",tt),o.removeEventListener("squeeze",tt),o.removeEventListener("squeezestart",tt),o.removeEventListener("squeezeend",tt),o.removeEventListener("end",ht),o.removeEventListener("inputsourceschange",C);for(let q=0;q<I.length;q++){let nt=w[q];nt!==null&&(w[q]=null,I[q].disconnect(nt))}R=null,k=null,t.setRenderTarget(x),y=null,m=null,g=null,o=null,_=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(B),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(q){f=q},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",tt),o.addEventListener("selectstart",tt),o.addEventListener("selectend",tt),o.addEventListener("squeeze",tt),o.addEventListener("squeezestart",tt),o.addEventListener("squeezeend",tt),o.addEventListener("end",ht),o.addEventListener("inputsourceschange",C),b.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(D),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let nt={antialias:o.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,e,nt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),_=new ai(y.framebufferWidth,y.framebufferHeight,{format:mn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let nt=null,Mt=null,At=null;b.depth&&(At=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=b.stencil?Rs:Vi,Mt=b.stencil?Hi:yi);let Lt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:a};g=new XRWebGLBinding(o,e),m=g.createProjectionLayer(Lt),o.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),_=new ai(m.textureWidth,m.textureHeight,{format:mn,type:Si,depthTexture:new Co(m.textureWidth,m.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});let Zt=t.properties.get(_);Zt.__ignoreDepthValues=m.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await o.requestReferenceSpace(h),gt.setContext(o),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function C(q){for(let nt=0;nt<q.removed.length;nt++){let Mt=q.removed[nt],At=w.indexOf(Mt);At>=0&&(w[At]=null,I[At].disconnect(Mt))}for(let nt=0;nt<q.added.length;nt++){let Mt=q.added[nt],At=w.indexOf(Mt);if(At===-1){for(let Zt=0;Zt<I.length;Zt++)if(Zt>=w.length){w.push(Mt),At=Zt;break}else if(w[Zt]===null){w[Zt]=Mt,At=Zt;break}if(At===-1)break}let Lt=I[At];Lt&&Lt.connect(Mt)}}let H=new G,V=new G;function it(q,nt,Mt){H.setFromMatrixPosition(nt.matrixWorld),V.setFromMatrixPosition(Mt.matrixWorld);let At=H.distanceTo(V),Lt=nt.projectionMatrix.elements,Zt=Mt.projectionMatrix.elements,qt=Lt[14]/(Lt[10]-1),Ft=Lt[14]/(Lt[10]+1),oe=(Lt[9]+1)/Lt[5],$=(Lt[9]-1)/Lt[5],Re=(Lt[8]-1)/Lt[0],Bt=(Zt[8]+1)/Zt[0],Gt=qt*Re,Pt=qt*Bt,be=At/(-Re+Bt),Jt=be*-Re;nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Jt),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let P=qt+be,T=Ft+be,J=Gt-Jt,pt=Pt+(At-Jt),dt=oe*Ft/T*P,ft=$*Ft/T*P;q.projectionMatrix.makePerspective(J,pt,dt,ft,P,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function W(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;E.near=F.near=O.near=q.near,E.far=F.far=O.far=q.far,(R!==E.near||k!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,k=E.far);let nt=q.parent,Mt=E.cameras;W(E,nt);for(let At=0;At<Mt.length;At++)W(Mt[At],nt);Mt.length===2?it(E,O,F):E.projectionMatrix.copy(O.projectionMatrix),Y(q,E,nt)};function Y(q,nt,Mt){Mt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(Mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&y===null))return u},this.setFoveation=function(q){u=q,m!==null&&(m.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)};let rt=null;function at(q,nt){if(p=nt.getViewerPose(f||c),M=nt,p!==null){let Mt=p.views;y!==null&&(t.setRenderTargetFramebuffer(_,y.framebuffer),t.setRenderTarget(_));let At=!1;Mt.length!==E.cameras.length&&(E.cameras.length=0,At=!0);for(let Lt=0;Lt<Mt.length;Lt++){let Zt=Mt[Lt],qt=null;if(y!==null)qt=y.getViewport(Zt);else{let oe=g.getViewSubImage(m,Zt);qt=oe.viewport,Lt===0&&(t.setRenderTargetTextures(_,oe.colorTexture,m.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(_))}let Ft=st[Lt];Ft===void 0&&(Ft=new an,Ft.layers.enable(Lt),Ft.viewport=new qe,st[Lt]=Ft),Ft.matrix.fromArray(Zt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Zt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(qt.x,qt.y,qt.width,qt.height),Lt===0&&(E.matrix.copy(Ft.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),At===!0&&E.cameras.push(Ft)}}for(let Mt=0;Mt<I.length;Mt++){let At=w[Mt],Lt=I[Mt];At!==null&&Lt!==void 0&&Lt.update(At,nt,f||c)}rt&&rt(q,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),M=null}let gt=new Uu;gt.setAnimationLoop(at),this.setAnimationLoop=function(q){rt=q},this.dispose=function(){}}};dr=class{constructor(t={}){let{canvas:e=Ep(),context:i=null,depth:o=!0,stencil:a=!0,alpha:c=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=c;let y=new Uint32Array(4),M=new Int32Array(4),b=null,x=null,_=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;let w=this,D=!1,B=0,O=0,F=null,st=-1,E=null,R=new qe,k=new qe,tt=null,ht=new ae(0),C=0,H=e.width,V=e.height,it=1,W=null,Y=null,rt=new qe(0,0,H,V),at=new qe(0,0,H,V),gt=!1,q=new Ds,nt=!1,Mt=!1,At=null,Lt=new Fe,Zt=new te,qt=new G,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return F===null?it:1}let $=i;function Re(A,Z){for(let Q=0;Q<A.length;Q++){let et=A[Q],K=e.getContext(et,Z);if(K!==null)return K}return null}try{let A={alpha:!0,depth:o,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",_t,!1),$===null){let Z=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&Z.shift(),$=Re(Z,A),$===null)throw Re(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Bt,Gt,Pt,be,Jt,P,T,J,pt,dt,ft,Rt,St,Et,zt,jt,ut,le,N,ct,xt,mt,Dt,se;function ce(){Bt=new U_($),Gt=new R_($,Bt,t),Bt.init(Gt),mt=new p0($,Bt,Gt),Pt=new d0($,Bt,Gt),be=new z_($),Jt=new t0,P=new f0($,Bt,Pt,Jt,Gt,mt,be),T=new I_(w),J=new O_(w),pt=new qp($,Gt),Dt=new P_($,Bt,pt,Gt),dt=new F_($,pt,be,Dt),ft=new G_($,dt,pt,be),N=new V_($,Gt,P),jt=new L_(Jt),Rt=new Qv(w,T,J,Bt,Gt,Dt,jt),St=new g0(w,Jt),Et=new n0,zt=new l0(Bt,Gt),le=new A_(w,T,J,Pt,ft,m,u),ut=new u0(w,ft,Gt),se=new _0($,be,Gt,Pt),ct=new C_($,Bt,be,Gt),xt=new B_($,Bt,be,Gt),be.programs=Rt.programs,w.capabilities=Gt,w.extensions=Bt,w.properties=Jt,w.renderLists=Et,w.shadowMap=ut,w.state=Pt,w.info=be}ce();let ee=new _l(w,$);this.xr=ee,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let A=Bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(H,V,!1))},this.getSize=function(A){return A.set(H,V)},this.setSize=function(A,Z,Q=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,V=Z,e.width=Math.floor(A*it),e.height=Math.floor(Z*it),Q===!0&&(e.style.width=A+"px",e.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(H*it,V*it).floor()},this.setDrawingBufferSize=function(A,Z,Q){H=A,V=Z,it=Q,e.width=Math.floor(A*Q),e.height=Math.floor(Z*Q),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,Z,Q,et){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,Z,Q,et),Pt.viewport(R.copy(rt).multiplyScalar(it).floor())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,Z,Q,et){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,Z,Q,et),Pt.scissor(k.copy(at).multiplyScalar(it).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){Pt.setScissorTest(gt=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(A=!0,Z=!0,Q=!0){let et=0;if(A){let K=!1;if(F!==null){let wt=F.texture.format;K=wt===Pu||wt===Au||wt===Eu}if(K){let wt=F.texture.type,Ot=wt===Si||wt===yi||wt===Dl||wt===Hi||wt===wu||wt===Tu,Vt=le.getClearColor(),Yt=le.getClearAlpha(),ie=Vt.r,Qt=Vt.g,Kt=Vt.b;Ot?(y[0]=ie,y[1]=Qt,y[2]=Kt,y[3]=Yt,$.clearBufferuiv($.COLOR,0,y)):(M[0]=ie,M[1]=Qt,M[2]=Kt,M[3]=Yt,$.clearBufferiv($.COLOR,0,M))}else et|=$.COLOR_BUFFER_BIT}Z&&(et|=$.DEPTH_BUFFER_BIT),Q&&(et|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Et.dispose(),zt.dispose(),Jt.dispose(),T.dispose(),J.dispose(),ft.dispose(),Dt.dispose(),se.dispose(),Rt.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Ve),ee.removeEventListener("sessionend",xe),At&&(At.dispose(),At=null),Ge.stop()};function yt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let A=be.autoReset,Z=ut.enabled,Q=ut.autoUpdate,et=ut.needsUpdate,K=ut.type;ce(),be.autoReset=A,ut.enabled=Z,ut.autoUpdate=Q,ut.needsUpdate=et,ut.type=K}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vt(A){let Z=A.target;Z.removeEventListener("dispose",vt),kt(Z)}function kt(A){Nt(A),Jt.remove(A)}function Nt(A){let Z=Jt.get(A).programs;Z!==void 0&&(Z.forEach(function(Q){Rt.releaseProgram(Q)}),A.isShaderMaterial&&Rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,Q,et,K,wt){Z===null&&(Z=Ft);let Ot=K.isMesh&&K.matrixWorld.determinant()<0,Vt=ci(A,Z,Q,et,K);Pt.setMaterial(et,Ot);let Yt=Q.index,ie=1;if(et.wireframe===!0){if(Yt=dt.getWireframeAttribute(Q),Yt===void 0)return;ie=2}let Qt=Q.drawRange,Kt=Q.attributes.position,Se=Qt.start*ie,Je=(Qt.start+Qt.count)*ie;wt!==null&&(Se=Math.max(Se,wt.start*ie),Je=Math.min(Je,(wt.start+wt.count)*ie)),Yt!==null?(Se=Math.max(Se,0),Je=Math.min(Je,Yt.count)):Kt!=null&&(Se=Math.max(Se,0),Je=Math.min(Je,Kt.count));let Ie=Je-Se;if(Ie<0||Ie===1/0)return;Dt.setup(K,et,Vt,Q,Yt);let nn,Ut=ct;if(Yt!==null&&(nn=pt.get(Yt),Ut=xt,Ut.setIndex(nn)),K.isMesh)et.wireframe===!0?(Pt.setLineWidth(et.wireframeLinewidth*oe()),Ut.setMode($.LINES)):Ut.setMode($.TRIANGLES);else if(K.isLine){let Ct=et.linewidth;Ct===void 0&&(Ct=1),Pt.setLineWidth(Ct*oe()),K.isLineSegments?Ut.setMode($.LINES):K.isLineLoop?Ut.setMode($.LINE_LOOP):Ut.setMode($.LINE_STRIP)}else K.isPoints?Ut.setMode($.POINTS):K.isSprite&&Ut.setMode($.TRIANGLES);if(K.isBatchedMesh)Ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Ut.renderInstances(Se,Ie,K.count);else if(Q.isInstancedBufferGeometry){let Ct=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,hi=Math.min(Q.instanceCount,Ct);Ut.renderInstances(Se,Ie,hi)}else Ut.render(Se,Ie)};function pe(A,Z,Q){A.transparent===!0&&A.side===In&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,Ci(A,Z,Q),A.side=wi,A.needsUpdate=!0,Ci(A,Z,Q),A.side=In):Ci(A,Z,Q)}this.compile=function(A,Z,Q=null){Q===null&&(Q=A),x=zt.get(Q),x.init(),I.push(x),Q.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),A!==Q&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights(w._useLegacyLights);let et=new Set;return A.traverse(function(K){let wt=K.material;if(wt)if(Array.isArray(wt))for(let Ot=0;Ot<wt.length;Ot++){let Vt=wt[Ot];pe(Vt,Q,K),et.add(Vt)}else pe(wt,Q,K),et.add(wt)}),I.pop(),x=null,et},this.compileAsync=function(A,Z,Q=null){let et=this.compile(A,Z,Q);return new Promise(K=>{function wt(){if(et.forEach(function(Ot){Jt.get(Ot).currentProgram.isReady()&&et.delete(Ot)}),et.size===0){K(A);return}setTimeout(wt,10)}Bt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let fe=null;function De(A){fe&&fe(A)}function Ve(){Ge.stop()}function xe(){Ge.start()}let Ge=new Uu;Ge.setAnimationLoop(De),typeof self!="undefined"&&Ge.setContext(self),this.setAnimationLoop=function(A){fe=A,ee.setAnimationLoop(A),A===null?Ge.stop():Ge.start()},ee.addEventListener("sessionstart",Ve),ee.addEventListener("sessionend",xe),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(Z),Z=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Z,F),x=zt.get(A,I.length),x.init(),I.push(x),Lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),q.setFromProjectionMatrix(Lt),Mt=this.localClippingEnabled,nt=jt.init(this.clippingPlanes,Mt),b=Et.get(A,_.length),b.init(),_.push(b),Le(A,Z,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(W,Y),this.info.render.frame++,nt===!0&&jt.beginShadows();let Q=x.state.shadowsArray;if(ut.render(Q,A,Z),nt===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(b,A),x.setupLights(w._useLegacyLights),Z.isArrayCamera){let et=Z.cameras;for(let K=0,wt=et.length;K<wt;K++){let Ot=et[K];It(b,A,Ot,Ot.viewport)}}else It(b,A,Z);F!==null&&(P.updateMultisampleRenderTarget(F),P.updateRenderTargetMipmap(F)),A.isScene===!0&&A.onAfterRender(w,A,Z),Dt.resetDefaultState(),st=-1,E=null,I.pop(),I.length>0?x=I[I.length-1]:x=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Le(A,Z,Q,et){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){et&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);let Ot=ft.update(A),Vt=A.material;Vt.visible&&b.push(A,Ot,Vt,Q,qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){let Ot=ft.update(A),Vt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),qt.copy(Ot.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(Vt)){let Yt=Ot.groups;for(let ie=0,Qt=Yt.length;ie<Qt;ie++){let Kt=Yt[ie],Se=Vt[Kt.materialIndex];Se&&Se.visible&&b.push(A,Ot,Se,Q,qt.z,Kt)}}else Vt.visible&&b.push(A,Ot,Vt,Q,qt.z,null)}}let wt=A.children;for(let Ot=0,Vt=wt.length;Ot<Vt;Ot++)Le(wt[Ot],Z,Q,et)}function It(A,Z,Q,et){let K=A.opaque,wt=A.transmissive,Ot=A.transparent;x.setupLightsView(Q),nt===!0&&jt.setGlobalState(w.clippingPlanes,Q),wt.length>0&&gr(K,wt,Z,Q),et&&Pt.viewport(R.copy(et)),K.length>0&&Pi(K,Z,Q),wt.length>0&&Pi(wt,Z,Q),Ot.length>0&&Pi(Ot,Z,Q),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function gr(A,Z,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let wt=Gt.isWebGL2;At===null&&(At=new ai(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")?lr:Si,minFilter:ar,samples:wt?4:0})),w.getDrawingBufferSize(Zt),wt?At.setSize(Zt.x,Zt.y):At.setSize(vo(Zt.x),vo(Zt.y));let Ot=w.getRenderTarget();w.setRenderTarget(At),w.getClearColor(ht),C=w.getClearAlpha(),C<1&&w.setClearColor(16777215,.5),w.clear();let Vt=w.toneMapping;w.toneMapping=bi,Pi(A,Q,et),P.updateMultisampleRenderTarget(At),P.updateRenderTargetMipmap(At);let Yt=!1;for(let ie=0,Qt=Z.length;ie<Qt;ie++){let Kt=Z[ie],Se=Kt.object,Je=Kt.geometry,Ie=Kt.material,nn=Kt.group;if(Ie.side===In&&Se.layers.test(et.layers)){let Ut=Ie.side;Ie.side=un,Ie.needsUpdate=!0,zs(Se,Q,et,Je,Ie,nn),Ie.side=Ut,Ie.needsUpdate=!0,Yt=!0}}Yt===!0&&(P.updateMultisampleRenderTarget(At),P.updateRenderTargetMipmap(At)),w.setRenderTarget(Ot),w.setClearColor(ht,C),w.toneMapping=Vt}function Pi(A,Z,Q){let et=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,wt=A.length;K<wt;K++){let Ot=A[K],Vt=Ot.object,Yt=Ot.geometry,ie=et===null?Ot.material:et,Qt=Ot.group;Vt.layers.test(Q.layers)&&zs(Vt,Z,Q,Yt,ie,Qt)}}function zs(A,Z,Q,et,K,wt){A.onBeforeRender(w,Z,Q,et,K,wt),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(w,Z,Q,et,A,wt),K.transparent===!0&&K.side===In&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,w.renderBufferDirect(Q,Z,et,K,A,wt),K.side=wi,K.needsUpdate=!0,w.renderBufferDirect(Q,Z,et,K,A,wt),K.side=In):w.renderBufferDirect(Q,Z,et,K,A,wt),A.onAfterRender(w,Z,Q,et,K,wt)}function Ci(A,Z,Q){Z.isScene!==!0&&(Z=Ft);let et=Jt.get(A),K=x.state.lights,wt=x.state.shadowsArray,Ot=K.state.version,Vt=Rt.getParameters(A,K.state,wt,Z,Q),Yt=Rt.getProgramCacheKey(Vt),ie=et.programs;et.environment=A.isMeshStandardMaterial?Z.environment:null,et.fog=Z.fog,et.envMap=(A.isMeshStandardMaterial?J:T).get(A.envMap||et.environment),ie===void 0&&(A.addEventListener("dispose",vt),ie=new Map,et.programs=ie);let Qt=ie.get(Yt);if(Qt!==void 0){if(et.currentProgram===Qt&&et.lightsStateVersion===Ot)return ks(A,Vt),Qt}else Vt.uniforms=Rt.getUniforms(A),A.onBuild(Q,Vt,w),A.onBeforeCompile(Vt,w),Qt=Rt.acquireProgram(Vt,Yt),ie.set(Yt,Qt),et.uniforms=Vt.uniforms;let Kt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=jt.uniform),ks(A,Vt),et.needsLights=Go(A),et.lightsStateVersion=Ot,et.needsLights&&(Kt.ambientLightColor.value=K.state.ambient,Kt.lightProbe.value=K.state.probe,Kt.directionalLights.value=K.state.directional,Kt.directionalLightShadows.value=K.state.directionalShadow,Kt.spotLights.value=K.state.spot,Kt.spotLightShadows.value=K.state.spotShadow,Kt.rectAreaLights.value=K.state.rectArea,Kt.ltc_1.value=K.state.rectAreaLTC1,Kt.ltc_2.value=K.state.rectAreaLTC2,Kt.pointLights.value=K.state.point,Kt.pointLightShadows.value=K.state.pointShadow,Kt.hemisphereLights.value=K.state.hemi,Kt.directionalShadowMap.value=K.state.directionalShadowMap,Kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Kt.spotShadowMap.value=K.state.spotShadowMap,Kt.spotLightMatrix.value=K.state.spotLightMatrix,Kt.spotLightMap.value=K.state.spotLightMap,Kt.pointShadowMap.value=K.state.pointShadowMap,Kt.pointShadowMatrix.value=K.state.pointShadowMatrix),et.currentProgram=Qt,et.uniformsList=null,Qt}function Yi(A){if(A.uniformsList===null){let Z=A.currentProgram.getUniforms();A.uniformsList=As.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function ks(A,Z){let Q=Jt.get(A);Q.outputColorSpace=Z.outputColorSpace,Q.batching=Z.batching,Q.instancing=Z.instancing,Q.instancingColor=Z.instancingColor,Q.skinning=Z.skinning,Q.morphTargets=Z.morphTargets,Q.morphNormals=Z.morphNormals,Q.morphColors=Z.morphColors,Q.morphTargetsCount=Z.morphTargetsCount,Q.numClippingPlanes=Z.numClippingPlanes,Q.numIntersection=Z.numClipIntersection,Q.vertexAlphas=Z.vertexAlphas,Q.vertexTangents=Z.vertexTangents,Q.toneMapping=Z.toneMapping}function ci(A,Z,Q,et,K){Z.isScene!==!0&&(Z=Ft),P.resetTextureUnits();let wt=Z.fog,Ot=et.isMeshStandardMaterial?Z.environment:null,Vt=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Nn,Yt=(et.isMeshStandardMaterial?J:T).get(et.envMap||Ot),ie=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qt=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Kt=!!Q.morphAttributes.position,Se=!!Q.morphAttributes.normal,Je=!!Q.morphAttributes.color,Ie=bi;et.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ie=w.toneMapping);let nn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ut=nn!==void 0?nn.length:0,Ct=Jt.get(et),hi=x.state.lights;if(nt===!0&&(Mt===!0||A!==E)){let cn=A===E&&et.id===st;jt.setState(et,A,cn)}let ye=!1;et.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==hi.state.version||Ct.outputColorSpace!==Vt||K.isBatchedMesh&&Ct.batching===!1||!K.isBatchedMesh&&Ct.batching===!0||K.isInstancedMesh&&Ct.instancing===!1||!K.isInstancedMesh&&Ct.instancing===!0||K.isSkinnedMesh&&Ct.skinning===!1||!K.isSkinnedMesh&&Ct.skinning===!0||K.isInstancedMesh&&Ct.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ct.instancingColor===!1&&K.instanceColor!==null||Ct.envMap!==Yt||et.fog===!0&&Ct.fog!==wt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==jt.numPlanes||Ct.numIntersection!==jt.numIntersection)||Ct.vertexAlphas!==ie||Ct.vertexTangents!==Qt||Ct.morphTargets!==Kt||Ct.morphNormals!==Se||Ct.morphColors!==Je||Ct.toneMapping!==Ie||Gt.isWebGL2===!0&&Ct.morphTargetsCount!==Ut)&&(ye=!0):(ye=!0,Ct.__version=et.version);let ln=Ct.currentProgram;ye===!0&&(ln=Ci(et,Z,K));let $i=!1,$t=!1,Te=!1,Ne=ln.getUniforms(),_n=Ct.uniforms;if(Pt.useProgram(ln.program)&&($i=!0,$t=!0,Te=!0),et.id!==st&&(st=et.id,$t=!0),$i||E!==A){Ne.setValue($,"projectionMatrix",A.projectionMatrix),Ne.setValue($,"viewMatrix",A.matrixWorldInverse);let cn=Ne.map.cameraPosition;cn!==void 0&&cn.setValue($,qt.setFromMatrixPosition(A.matrixWorld)),Gt.logarithmicDepthBuffer&&Ne.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ne.setValue($,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,$t=!0,Te=!0)}if(K.isSkinnedMesh){Ne.setOptional($,K,"bindMatrix"),Ne.setOptional($,K,"bindMatrixInverse");let cn=K.skeleton;cn&&(Gt.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Ne.setValue($,"boneTexture",cn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Ne.setOptional($,K,"batchingTexture"),Ne.setValue($,"batchingTexture",K._matricesTexture,P));let Ke=Q.morphAttributes;if((Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0&&Gt.isWebGL2===!0)&&N.update(K,Q,ln),($t||Ct.receiveShadow!==K.receiveShadow)&&(Ct.receiveShadow=K.receiveShadow,Ne.setValue($,"receiveShadow",K.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(_n.envMap.value=Yt,_n.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),$t&&(Ne.setValue($,"toneMappingExposure",w.toneMappingExposure),Ct.needsLights&&_r(_n,Te),wt&&et.fog===!0&&St.refreshFogUniforms(_n,wt),St.refreshMaterialUniforms(_n,et,it,V,At),As.upload($,Yi(Ct),_n,P)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(As.upload($,Yi(Ct),_n,P),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ne.setValue($,"center",K.center),Ne.setValue($,"modelViewMatrix",K.modelViewMatrix),Ne.setValue($,"normalMatrix",K.normalMatrix),Ne.setValue($,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let cn=et.uniformsGroups;for(let ui=0,qn=cn.length;ui<qn;ui++)if(Gt.isWebGL2){let Ce=cn[ui];se.update(Ce,ln),se.bind(Ce,ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ln}function _r(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Go(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,Z,Q){Jt.get(A.texture).__webglTexture=Z,Jt.get(A.depthTexture).__webglTexture=Q;let et=Jt.get(A);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=Q===void 0,et.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Z){let Q=Jt.get(A);Q.__webglFramebuffer=Z,Q.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,Q=0){F=A,B=Z,O=Q;let et=!0,K=null,wt=!1,Ot=!1;if(A){let Yt=Jt.get(A);Yt.__useDefaultFramebuffer!==void 0?(Pt.bindFramebuffer($.FRAMEBUFFER,null),et=!1):Yt.__webglFramebuffer===void 0?P.setupRenderTarget(A):Yt.__hasExternalTextures&&P.rebindTextures(A,Jt.get(A.texture).__webglTexture,Jt.get(A.depthTexture).__webglTexture);let ie=A.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ot=!0);let Qt=Jt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[Z])?K=Qt[Z][Q]:K=Qt[Z],wt=!0):Gt.isWebGL2&&A.samples>0&&P.useMultisampledRTT(A)===!1?K=Jt.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?K=Qt[Q]:K=Qt,R.copy(A.viewport),k.copy(A.scissor),tt=A.scissorTest}else R.copy(rt).multiplyScalar(it).floor(),k.copy(at).multiplyScalar(it).floor(),tt=gt;if(Pt.bindFramebuffer($.FRAMEBUFFER,K)&&Gt.drawBuffers&&et&&Pt.drawBuffers(A,K),Pt.viewport(R),Pt.scissor(k),Pt.setScissorTest(tt),wt){let Yt=Jt.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Yt.__webglTexture,Q)}else if(Ot){let Yt=Jt.get(A.texture),ie=Z||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Yt.__webglTexture,Q||0,ie)}st=-1},this.readRenderTargetPixels=function(A,Z,Q,et,K,wt,Ot){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt){Pt.bindFramebuffer($.FRAMEBUFFER,Vt);try{let Yt=A.texture,ie=Yt.format,Qt=Yt.type;if(ie!==mn&&mt.convert(ie)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Kt=Qt===lr&&(Bt.has("EXT_color_buffer_half_float")||Gt.isWebGL2&&Bt.has("EXT_color_buffer_float"));if(Qt!==Si&&mt.convert(Qt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===xi&&(Gt.isWebGL2||Bt.has("OES_texture_float")||Bt.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-et&&Q>=0&&Q<=A.height-K&&$.readPixels(Z,Q,et,K,mt.convert(ie),mt.convert(Qt),wt)}finally{let Yt=F!==null?Jt.get(F).__webglFramebuffer:null;Pt.bindFramebuffer($.FRAMEBUFFER,Yt)}}},this.copyFramebufferToTexture=function(A,Z,Q=0){let et=Math.pow(2,-Q),K=Math.floor(Z.image.width*et),wt=Math.floor(Z.image.height*et);P.setTexture2D(Z,0),$.copyTexSubImage2D($.TEXTURE_2D,Q,0,0,A.x,A.y,K,wt),Pt.unbindTexture()},this.copyTextureToTexture=function(A,Z,Q,et=0){let K=Z.image.width,wt=Z.image.height,Ot=mt.convert(Q.format),Vt=mt.convert(Q.type);P.setTexture2D(Q,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Q.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Q.unpackAlignment),Z.isDataTexture?$.texSubImage2D($.TEXTURE_2D,et,A.x,A.y,K,wt,Ot,Vt,Z.image.data):Z.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,et,A.x,A.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ot,Z.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,et,A.x,A.y,Ot,Vt,Z.image),et===0&&Q.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,Q,et,K=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let wt=A.max.x-A.min.x+1,Ot=A.max.y-A.min.y+1,Vt=A.max.z-A.min.z+1,Yt=mt.convert(et.format),ie=mt.convert(et.type),Qt;if(et.isData3DTexture)P.setTexture3D(et,0),Qt=$.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)P.setTexture2DArray(et,0),Qt=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,et.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,et.unpackAlignment);let Kt=$.getParameter($.UNPACK_ROW_LENGTH),Se=$.getParameter($.UNPACK_IMAGE_HEIGHT),Je=$.getParameter($.UNPACK_SKIP_PIXELS),Ie=$.getParameter($.UNPACK_SKIP_ROWS),nn=$.getParameter($.UNPACK_SKIP_IMAGES),Ut=Q.isCompressedTexture?Q.mipmaps[K]:Q.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Ut.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ut.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,A.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,A.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?$.texSubImage3D(Qt,K,Z.x,Z.y,Z.z,wt,Ot,Vt,Yt,ie,Ut.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Qt,K,Z.x,Z.y,Z.z,wt,Ot,Vt,Yt,Ut.data)):$.texSubImage3D(Qt,K,Z.x,Z.y,Z.z,wt,Ot,Vt,Yt,ie,Ut),$.pixelStorei($.UNPACK_ROW_LENGTH,Kt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Se),$.pixelStorei($.UNPACK_SKIP_PIXELS,Je),$.pixelStorei($.UNPACK_SKIP_ROWS,Ie),$.pixelStorei($.UNPACK_SKIP_IMAGES,nn),K===0&&et.generateMipmaps&&$.generateMipmap(Qt),Pt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Pt.unbindTexture()},this.resetState=function(){B=0,O=0,F=null,Pt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Nl?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===Oo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?Gi:Ru}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Gi?Xe:Nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},vl=class extends dr{};vl.prototype.isWebGL1Renderer=!0;Ro=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Lo=class extends Tn{constructor(t=null,e=1,i=1,o,a,c,h,u,f=Ze,p=Ze,g,m){super(null,c,h,u,f,p,o,a,g,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zi=class extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pu=new G,mu=new G,gu=new Fe,qa=new Ti,oo=new Zn,Ns=class extends gn{constructor(t=new en,e=new Zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let o=1,a=e.count;o<a;o++)pu.fromBufferAttribute(e,o-1),mu.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=pu.distanceTo(mu);t.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,o=this.matrixWorld,a=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(o),oo.radius+=a,t.ray.intersectsSphere(oo)===!1)return;gu.copy(o).invert(),qa.copy(t.ray).applyMatrix4(gu);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=new G,p=new G,g=new G,m=new G,y=this.isLineSegments?2:1,M=i.index,x=i.attributes.position;if(M!==null){let _=Math.max(0,c.start),I=Math.min(M.count,c.start+c.count);for(let w=_,D=I-1;w<D;w+=y){let B=M.getX(w),O=M.getX(w+1);if(f.fromBufferAttribute(x,B),p.fromBufferAttribute(x,O),qa.distanceSqToSegment(f,p,m,g)>u)continue;m.applyMatrix4(this.matrixWorld);let st=t.ray.origin.distanceTo(m);st<t.near||st>t.far||e.push({distance:st,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{let _=Math.max(0,c.start),I=Math.min(x.count,c.start+c.count);for(let w=_,D=I-1;w<D;w+=y){if(f.fromBufferAttribute(x,w),p.fromBufferAttribute(x,w+1),qa.distanceSqToSegment(f,p,m,g)>u)continue;m.applyMatrix4(this.matrixWorld);let O=t.ray.origin.distanceTo(m);O<t.near||O>t.far||e.push({distance:O,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){let h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}},yl=class extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new Fe,xl=new Ti,ao=new Zn,lo=new G,Io=class extends gn{constructor(t=new en,e=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,o=this.matrixWorld,a=t.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(o),ao.radius+=a,t.ray.intersectsSphere(ao)===!1)return;_u.copy(o).invert(),xl.copy(t.ray).applyMatrix4(_u);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=i.index,g=i.attributes.position;if(f!==null){let m=Math.max(0,c.start),y=Math.min(f.count,c.start+c.count);for(let M=m,b=y;M<b;M++){let x=f.getX(M);lo.fromBufferAttribute(g,x),vu(lo,x,u,o,t,e,this)}}else{let m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=m,b=y;M<b;M++)lo.fromBufferAttribute(g,M),vu(lo,M,u,o,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){let h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};Os=class{constructor(t,e,i,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,o=e[i],a=e[i-1];n:{t:{let c;e:{i:if(!(t<o)){for(let h=i+2;;){if(o===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(a=o,o=e[++i],t<o)break t}c=e.length;break e}if(!(t>=a)){let h=e[1];t<h&&(i=2,a=h);for(let u=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(o=a,a=e[--i-1],t>=a)break t}c=i,i=0;break e}break n}for(;i<c;){let h=i+c>>>1;t<e[h]?c=h:i=h+1}if(o=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=t*o;for(let c=0;c!==o;++c)e[c]=i[a+c];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ml=class extends Os{constructor(t,e,i,o){super(t,e,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,i){let o=this.parameterPositions,a=t-2,c=t+1,h=o[a],u=o[c];if(h===void 0)switch(this.getSettings_().endingStart){case Th:a=t,h=2*e-i;break;case Eh:a=o.length-2,h=e+o[a]-o[a+1];break;default:a=t,h=i}if(u===void 0)switch(this.getSettings_().endingEnd){case Th:c=t,u=2*i-e;break;case Eh:c=1,u=i+o[1]-o[0];break;default:c=t-1,u=e}let f=(i-e)*.5,p=this.valueSize;this._weightPrev=f/(e-h),this._weightNext=f/(u-i),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(t,e,i,o){let a=this.resultBuffer,c=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,p=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,y=this._weightNext,M=(i-e)/(o-e),b=M*M,x=b*M,_=-m*x+2*m*b-m*M,I=(1+m)*x+(-1.5-2*m)*b+(-.5+m)*M+1,w=(-1-y)*x+(1.5+y)*b+.5*M,D=y*x-y*b;for(let B=0;B!==h;++B)a[B]=_*c[p+B]+I*c[f+B]+w*c[u+B]+D*c[g+B];return a}},bl=class extends Os{constructor(t,e,i,o){super(t,e,i,o)}interpolate_(t,e,i,o){let a=this.resultBuffer,c=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,p=(i-e)/(o-e),g=1-p;for(let m=0;m!==h;++m)a[m]=c[f+m]*g+c[u+m]*p;return a}},Sl=class extends Os{constructor(t,e,i,o){super(t,e,i,o)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,i,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let o=t.getInterpolation();o!==t.DefaultInterpolation&&(i.interpolation=o)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ml(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case uo:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,o=e.length;i!==o;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,o=e.length;i!==o;++i)e[i]*=t}return this}trim(t,e){let i=this.times,o=i.length,a=0,c=o-1;for(;a!==o&&i[a]<t;)++a;for(;c!==-1&&i[c]>e;)--c;if(++c,a!==0||c!==o){a>=c&&(c=Math.max(c,1),a=c-1);let h=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*h,c*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,o=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let h=0;h!==a;h++){let u=i[h];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(c!==null&&c>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,u,c),t=!1;break}c=u}if(o!==void 0&&v0(o))for(let h=0,u=o.length;h!==u;++h){let f=o[h];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===wa,a=t.length-1,c=1;for(let h=1;h<a;++h){let u=!1,f=t[h],p=t[h+1];if(f!==p&&(h!==1||f!==t[0]))if(o)u=!0;else{let g=h*i,m=g-i,y=g+i;for(let M=0;M!==i;++M){let b=e[g+M];if(b!==e[m+M]||b!==e[y+M]){u=!0;break}}}if(u){if(h!==c){t[c]=t[h];let g=h*i,m=c*i;for(let y=0;y!==i;++y)e[m+y]=e[g+y]}++c}}if(a>0){t[c]=t[a];for(let h=a*i,u=c*i,f=0;f!==i;++f)e[u+f]=e[h+f];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,o=new i(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=fo;Xi=class extends Fn{};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=uo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;wl=class extends Fn{};wl.prototype.ValueTypeName="color";Tl=class extends Fn{};Tl.prototype.ValueTypeName="number";El=class extends Os{constructor(t,e,i,o){super(t,e,i,o)}interpolate_(t,e,i,o){let a=this.resultBuffer,c=this.sampleValues,h=this.valueSize,u=(i-e)/(o-e),f=t*h;for(let p=f+h;f!==p;f+=4)On.slerpFlat(a,0,c,f-h,c,f,u);return a}},fr=class extends Fn{InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.DefaultInterpolation=fo;fr.prototype.InterpolantFactoryMethodSmooth=void 0;qi=class extends Fn{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=uo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;Al=class extends Fn{};Al.prototype.ValueTypeName="vector";Pl=class{constructor(t,e,i){let o=this,a=!1,c=0,h=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){h++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,h),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,h),c===h&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){let g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){let y=f[g],M=f[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return M}return null}}},y0=new Pl,Cl=class{constructor(t){this.manager=t!==void 0?t:y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(o,a){i.load(t,o,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";Fl="\\[\\]\\.:\\/",x0=new RegExp("["+Fl+"]","g"),Bl="[^"+Fl+"]",M0="[^"+Fl.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Bl),S0=/(WCOD+)?/.source.replace("WCOD",M0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),E0=new RegExp("^"+b0+S0+w0+T0+"$"),A0=["material","materials","bones","map"],Rl=class{constructor(t,e,i){let o=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(t){let e=E0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let a=i.nodeName.substring(o+1);A0.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let c=0;c<a.length;c++){let h=a[c];if(h.name===e||h.uuid===e)return h;let u=i(h.children);if(u)return u}return null},o=i(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)t[e++]=i[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,o=e.propertyName,a=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let c=t[o];if(c===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+o+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?h=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(u=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Rl;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ay=new Float32Array(1),Do=class{constructor(t,e,i=0,o=1/0){this.ray=new Ti(t,e),this.near=i,this.far=o,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ll(t,this,i,e),i.sort(yu),i}intersectObjects(t,e=!0,i=[]){for(let o=0,a=t.length;o<a;o++)Ll(t[o],this,i,e);return i.sort(yu),i}};pr=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(tn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il)});var Vu,zl,Gu,Bo,Wu,C0,zo,Zu=Ks(()=>{Fo();Vu={type:"change"},zl={type:"start"},Gu={type:"end"},Bo=new Ti,Wu=new pn,C0=Math.cos(70*Iu.DEG2RAD),zo=class extends Wn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:Xn.ROTATE,TWO:Xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",ft),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ft),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Vu),i.update(),a=o.NONE},this.update=function(){let N=new G,ct=new On().setFromUnitVectors(t.up,new G(0,1,0)),xt=ct.clone().invert(),mt=new G,Dt=new On,se=new G,ce=2*Math.PI;return function(yt=null){let z=i.object.position;N.copy(z).sub(i.target),N.applyQuaternion(ct),h.setFromVector3(N),i.autoRotate&&a===o.NONE&&k(E(yt)),i.enableDamping?(h.theta+=u.theta*i.dampingFactor,h.phi+=u.phi*i.dampingFactor):(h.theta+=u.theta,h.phi+=u.phi);let _t=i.minAzimuthAngle,vt=i.maxAzimuthAngle;isFinite(_t)&&isFinite(vt)&&(_t<-Math.PI?_t+=ce:_t>Math.PI&&(_t-=ce),vt<-Math.PI?vt+=ce:vt>Math.PI&&(vt-=ce),_t<=vt?h.theta=Math.max(_t,Math.min(vt,h.theta)):h.theta=h.theta>(_t+vt)/2?Math.max(_t,h.theta):Math.min(vt,h.theta)),h.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,h.phi)),h.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&O||i.object.isOrthographicCamera?h.radius=Y(h.radius):h.radius=Y(h.radius*f),N.setFromSpherical(h),N.applyQuaternion(xt),z.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(u.theta*=1-i.dampingFactor,u.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(u.set(0,0,0),p.set(0,0,0));let kt=!1;if(i.zoomToCursor&&O){let Nt=null;if(i.object.isPerspectiveCamera){let pe=N.length();Nt=Y(pe*f);let fe=pe-Nt;i.object.position.addScaledVector(D,fe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let pe=new G(B.x,B.y,0);pe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),kt=!0;let fe=new G(B.x,B.y,0);fe.unproject(i.object),i.object.position.sub(fe).add(pe),i.object.updateMatrixWorld(),Nt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Nt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Nt).add(i.object.position):(Bo.origin.copy(i.object.position),Bo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Bo.direction))<C0?t.lookAt(i.target):(Wu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Bo.intersectPlane(Wu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),kt=!0);return f=1,O=!1,kt||mt.distanceToSquared(i.object.position)>c||8*(1-Dt.dot(i.object.quaternion))>c||se.distanceToSquared(i.target)>0?(i.dispatchEvent(Vu),mt.copy(i.object.position),Dt.copy(i.object.quaternion),se.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Et),i.domElement.removeEventListener("pointerdown",Jt),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",dt),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",T),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ft),i._domElementKeyEvents=null)};let i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,c=1e-6,h=new pr,u=new pr,f=1,p=new G,g=new te,m=new te,y=new te,M=new te,b=new te,x=new te,_=new te,I=new te,w=new te,D=new G,B=new te,O=!1,F=[],st={};function E(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function R(N){let ct=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ct)}function k(N){u.theta-=N}function tt(N){u.phi-=N}let ht=function(){let N=new G;return function(xt,mt){N.setFromMatrixColumn(mt,0),N.multiplyScalar(-xt),p.add(N)}}(),C=function(){let N=new G;return function(xt,mt){i.screenSpacePanning===!0?N.setFromMatrixColumn(mt,1):(N.setFromMatrixColumn(mt,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(xt),p.add(N)}}(),H=function(){let N=new G;return function(xt,mt){let Dt=i.domElement;if(i.object.isPerspectiveCamera){let se=i.object.position;N.copy(se).sub(i.target);let ce=N.length();ce*=Math.tan(i.object.fov/2*Math.PI/180),ht(2*xt*ce/Dt.clientHeight,i.object.matrix),C(2*mt*ce/Dt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ht(xt*(i.object.right-i.object.left)/i.object.zoom/Dt.clientWidth,i.object.matrix),C(mt*(i.object.top-i.object.bottom)/i.object.zoom/Dt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?f/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function it(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?f*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(N,ct){if(!i.zoomToCursor)return;O=!0;let xt=i.domElement.getBoundingClientRect(),mt=N-xt.left,Dt=ct-xt.top,se=xt.width,ce=xt.height;B.x=mt/se*2-1,B.y=-(Dt/ce)*2+1,D.set(B.x,B.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function rt(N){g.set(N.clientX,N.clientY)}function at(N){W(N.clientX,N.clientX),_.set(N.clientX,N.clientY)}function gt(N){M.set(N.clientX,N.clientY)}function q(N){m.set(N.clientX,N.clientY),y.subVectors(m,g).multiplyScalar(i.rotateSpeed);let ct=i.domElement;k(2*Math.PI*y.x/ct.clientHeight),tt(2*Math.PI*y.y/ct.clientHeight),g.copy(m),i.update()}function nt(N){I.set(N.clientX,N.clientY),w.subVectors(I,_),w.y>0?V(R(w.y)):w.y<0&&it(R(w.y)),_.copy(I),i.update()}function Mt(N){b.set(N.clientX,N.clientY),x.subVectors(b,M).multiplyScalar(i.panSpeed),H(x.x,x.y),M.copy(b),i.update()}function At(N){W(N.clientX,N.clientY),N.deltaY<0?it(R(N.deltaY)):N.deltaY>0&&V(R(N.deltaY)),i.update()}function Lt(N){let ct=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?tt(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),ct=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?tt(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),ct=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),ct=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),ct=!0;break}ct&&(N.preventDefault(),i.update())}function Zt(N){if(F.length===1)g.set(N.pageX,N.pageY);else{let ct=le(N),xt=.5*(N.pageX+ct.x),mt=.5*(N.pageY+ct.y);g.set(xt,mt)}}function qt(N){if(F.length===1)M.set(N.pageX,N.pageY);else{let ct=le(N),xt=.5*(N.pageX+ct.x),mt=.5*(N.pageY+ct.y);M.set(xt,mt)}}function Ft(N){let ct=le(N),xt=N.pageX-ct.x,mt=N.pageY-ct.y,Dt=Math.sqrt(xt*xt+mt*mt);_.set(0,Dt)}function oe(N){i.enableZoom&&Ft(N),i.enablePan&&qt(N)}function $(N){i.enableZoom&&Ft(N),i.enableRotate&&Zt(N)}function Re(N){if(F.length==1)m.set(N.pageX,N.pageY);else{let xt=le(N),mt=.5*(N.pageX+xt.x),Dt=.5*(N.pageY+xt.y);m.set(mt,Dt)}y.subVectors(m,g).multiplyScalar(i.rotateSpeed);let ct=i.domElement;k(2*Math.PI*y.x/ct.clientHeight),tt(2*Math.PI*y.y/ct.clientHeight),g.copy(m)}function Bt(N){if(F.length===1)b.set(N.pageX,N.pageY);else{let ct=le(N),xt=.5*(N.pageX+ct.x),mt=.5*(N.pageY+ct.y);b.set(xt,mt)}x.subVectors(b,M).multiplyScalar(i.panSpeed),H(x.x,x.y),M.copy(b)}function Gt(N){let ct=le(N),xt=N.pageX-ct.x,mt=N.pageY-ct.y,Dt=Math.sqrt(xt*xt+mt*mt);I.set(0,Dt),w.set(0,Math.pow(I.y/_.y,i.zoomSpeed)),V(w.y),_.copy(I);let se=(N.pageX+ct.x)*.5,ce=(N.pageY+ct.y)*.5;W(se,ce)}function Pt(N){i.enableZoom&&Gt(N),i.enablePan&&Bt(N)}function be(N){i.enableZoom&&Gt(N),i.enableRotate&&Re(N)}function Jt(N){i.enabled!==!1&&(F.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",P),i.domElement.addEventListener("pointerup",T)),zt(N),N.pointerType==="touch"?Rt(N):J(N))}function P(N){i.enabled!==!1&&(N.pointerType==="touch"?St(N):pt(N))}function T(N){jt(N),F.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",T)),i.dispatchEvent(Gu),a=o.NONE}function J(N){let ct;switch(N.button){case 0:ct=i.mouseButtons.LEFT;break;case 1:ct=i.mouseButtons.MIDDLE;break;case 2:ct=i.mouseButtons.RIGHT;break;default:ct=-1}switch(ct){case Bn.DOLLY:if(i.enableZoom===!1)return;at(N),a=o.DOLLY;break;case Bn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;gt(N),a=o.PAN}else{if(i.enableRotate===!1)return;rt(N),a=o.ROTATE}break;case Bn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;rt(N),a=o.ROTATE}else{if(i.enablePan===!1)return;gt(N),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(zl)}function pt(N){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;q(N);break;case o.DOLLY:if(i.enableZoom===!1)return;nt(N);break;case o.PAN:if(i.enablePan===!1)return;Mt(N);break}}function dt(N){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(N.preventDefault(),i.dispatchEvent(zl),At(N),i.dispatchEvent(Gu))}function ft(N){i.enabled===!1||i.enablePan===!1||Lt(N)}function Rt(N){switch(ut(N),F.length){case 1:switch(i.touches.ONE){case Xn.ROTATE:if(i.enableRotate===!1)return;Zt(N),a=o.TOUCH_ROTATE;break;case Xn.PAN:if(i.enablePan===!1)return;qt(N),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case Xn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;oe(N),a=o.TOUCH_DOLLY_PAN;break;case Xn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$(N),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(zl)}function St(N){switch(ut(N),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Re(N),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;Bt(N),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pt(N),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(N),i.update();break;default:a=o.NONE}}function Et(N){i.enabled!==!1&&N.preventDefault()}function zt(N){F.push(N.pointerId)}function jt(N){delete st[N.pointerId];for(let ct=0;ct<F.length;ct++)if(F[ct]==N.pointerId){F.splice(ct,1);return}}function ut(N){let ct=st[N.pointerId];ct===void 0&&(ct=new te,st[N.pointerId]=ct),ct.set(N.pageX,N.pageY)}function le(N){let ct=N.pointerId===F[0]?F[1]:F[0];return st[ct]}i.domElement.addEventListener("contextmenu",Et),i.domElement.addEventListener("pointerdown",Jt),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",dt,{passive:!1}),this.update()}}});var ko,Xu=Ks(()=>{Fo();Zu();ko=class extends zo{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Bn.PAN,MIDDLE:Bn.DOLLY,RIGHT:Bn.ROTATE},this.touches={ONE:Xn.PAN,TWO:Xn.DOLLY_ROTATE}}}});var Yu={};nf(Yu,{CLASSES:()=>qu,View3D:()=>kl});var qu,R0,L0,kl,$u=Ks(()=>{Fo();Xu();jn();ve.enabled=!1;qu={1:["Nicht klassiert","#9aa3a6"],2:["Boden","#b48a4c"],3:["Vegetation niedrig","#a9c97a"],4:["Vegetation mittel","#6fa64e"],5:["Vegetation hoch","#3f7a3a"],6:["Geb\xE4ude","#c4553f"],7:["Rauschen","#ff00ff"],9:["Wasser","#3d8fd1"],11:["Strasse","#6b6b6b"],13:["Leitungsschutz","#e0b400"],14:["Leiter","#e0b400"],15:["Mast","#8a6d3b"],17:["Br\xFCcke","#d68f2b"],18:["Rauschen hoch","#ff00ff"]},R0=`
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
`,L0=`
  precision highp float;
  varying vec3 vColor;
  varying float vVisible;
  void main() {
    if (vVisible < 0.5) discard;
    vec2 d = gl_PointCoord - 0.5;
    if (dot(d, d) > 0.25) discard;
    gl_FragColor = vec4(vColor, 1.0);
  }
`,kl=class{constructor(t,e,{onPick:i,onStats:o}){this.data=e,this.onPick=i,this.onStats=o||(()=>{}),this.origin=e.meta.origin,this.ex=2;let a=Object.values(e.profiles).flatMap(u=>u?u.profiles.map(f=>f.wl0):[]).filter(u=>u!=null);this.baseZ=a.length?Math.min(...a)-5:400;let c=this.renderer=new dr({antialias:!0});c.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),c.outputColorSpace=Nn,t.appendChild(c.domElement),this.container=t;let h=this.scene=new Ro;this.camera=new an(50,1,5,6e4),this.controls=new ko(this.camera,c.domElement),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI*.49,this.controls.addEventListener("change",()=>this.requestRender(!0)),this.palette=new Uint8Array(256*4),this.palTex=new Lo(this.palette,256,1,mn),this.hidden=new Set([7,18]),this.buildPalette(),this.shared={uBaseZ:{value:this.baseZ},uEx:{value:this.ex},uSize:{value:1},uProj:{value:800},uMode:{value:0},uPal:{value:this.palTex},uZRange:{value:new te(0,1)}},this.tiles=[],this.classCounts={},this.budget=(window.LINTH_CONFIG||{}).pointBudget||8e6,this.loading=0,e.pc&&this.initTiles(e.pc),this.water=new Sn(new en,new Ls({color:new ae(Ht("--water")),transparent:!0,opacity:.5,side:In,depthWrite:!1})),this.water.renderOrder=2,h.add(this.water),this.selLine=new oi,h.add(this.selLine),this.axisLines=new oi,h.add(this.axisLines),this.buildAxis(),c.domElement.addEventListener("pointerdown",u=>{this.down=[u.clientX,u.clientY]}),c.domElement.addEventListener("pointerup",u=>{this.down&&Math.hypot(u.clientX-this.down[0],u.clientY-this.down[1])<4&&this.pick(u)}),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(t),this.resize(),this.home(),this.active=!0,this.loop()}toWorld(t,e,i){return new G(t-this.origin[0],(i-this.baseZ)*this.ex,-(e-this.origin[1]))}buildPalette(){var t;for(let e=0;e<256;e++){let i=((t=qu[e])==null?void 0:t[1])||"#8f9799",o=new ae(i);this.palette.set([o.r*255,o.g*255,o.b*255,this.hidden.has(e)?0:255],e*4)}this.palTex.needsUpdate=!0,this.requestRender()}setClassVisible(t,e){e?this.hidden.delete(t):this.hidden.add(t),this.buildPalette()}initTiles(t){let e=1/0,i=-1/0;for(let o of t.tiles)e=Math.min(e,o.min[2]),i=Math.max(i,o.min[2]+o.size[2]),this.tiles.push({...o,center:null,levels:o.counts.map(()=>({state:"none",obj:null}))});this.shared.uZRange.value.set(this.baseZ,Math.min(i,this.baseZ+40)),this.pcLevels=t.levels}tileCenter(t){return this.toWorld(t.min[0]+t.size[0]/2,t.min[1]+t.size[1]/2,t.min[2]+t.size[2]/4)}async loadLevel(t,e){let i=t.levels[e];i.state="loading",this.loading++;try{let o=await fetch(`data/pc/${t.id}_L${e}.bin`);if(!o.ok)throw new Error(o.status);let a=await o.arrayBuffer(),c=t.counts[e],h=new Uint16Array(a,0,c*3),u=new Uint8Array(a,c*6,c*3),f=new Uint8Array(a,c*9,c),p=new Uint16Array(a,c*10,c),g=new en;g.setAttribute("position",new Ye(h,3,!0)),g.setAttribute("rgb",new Ye(u,3,!0)),g.setAttribute("cls",new Ye(f,1,!1)),g.setAttribute("inten",new Ye(p,1,!0)),g.boundingSphere=new Zn(this.tileCenter(t),Math.hypot(t.size[0],t.size[1]));for(let M=0;M<c;M++)this.classCounts[f[M]]=(this.classCounts[f[M]]||0)+1;let m=new Un({vertexShader:R0,fragmentShader:L0,uniforms:{...this.shared,uTileMin:{value:new G(t.min[0]-this.origin[0],t.min[1]-this.origin[1],t.min[2])},uTileSize:{value:new G(...t.size)},uSpacing:{value:this.pcLevels[e]},uInt:{value:new te(t.int[0]/65535,t.int[1]/65535)}}}),y=new Io(g,m);y.frustumCulled=!0,i.state==="loading"?(i.obj=y,i.state="ready",this.scene.add(y)):(g.dispose(),m.dispose())}catch{i.state="error"}finally{this.loading--,this.requestRender(!0)}}unloadLevel(t,e){let i=t.levels[e];i.obj&&(this.scene.remove(i.obj),i.obj.geometry.dispose(),i.obj.material.dispose()),i.obj=null,i.state="none"}updateLod(){if(!this.tiles.length)return;let t=this.camera.position,e=new Ds().setFromProjectionMatrix(new Fe().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse)),i=(this.data.pc.subtile||250)/250,o=[1/0,3200,1500,650].map(u=>u*i),a=[],c=0;for(let u of this.tiles){u.center||(u.center=this.tileCenter(u));let f=t.distanceTo(u.center),p=e.intersectsSphere(new Zn(u.center,260*i));u.levels.forEach((g,m)=>{m===0||p&&f<o[Math.min(m,o.length-1)]?a.push({t:u,L:m,d:m===0?-1:f,n:u.counts[m]}):g.state==="ready"&&f>o[Math.min(m,o.length-1)]*1.4&&this.unloadLevel(u,m),g.state==="ready"&&(c+=u.counts[m])})}a.sort((u,f)=>u.L-f.L||u.d-f.d);let h=0;for(let u of a){if(h+=u.n,h>this.budget)break;u.t.levels[u.L].state==="none"&&this.loading<6&&this.loadLevel(u.t,u.L)}this.onStats({loaded:c,loading:this.loading,classes:this.classCounts})}buildAxis(){let t=new Zi({color:new ae(Ht("--water"))});for(let e of this.data.meta.reaches){let i=this.data.profiles[e.id];if(!i)continue;let o=i.profiles.filter(a=>a.wl0!=null).map(a=>this.toWorld(a.c[0],a.c[1],a.wl0+.05));this.axisLines.add(new Ns(new en().setFromPoints(o),t))}}setWater(t){let e=[],i=[];for(let a of this.data.meta.reaches){let c=this.data.profiles[a.id],h=t[a.id];if(!c||!h)continue;let u=-1;c.profiles.forEach((f,p)=>{let g=h.states[p];if(!g.wet){u=-1;return}let m=e.length/3;for(let y of[g.oL,g.oR]){let M=this.toWorld(f.c[0]+y*f.n[0],f.c[1]+y*f.n[1],g.wse);e.push(M.x,M.y,M.z)}u>=0&&i.push(u,u+1,m,u+1,m+1,m),u=m})}let o=new en;o.setAttribute("position",new wn(e,3)),o.setIndex(i),this.water.geometry.dispose(),this.water.geometry=o,this.requestRender()}setSelection(t,e,i){this.selLine.clear();let o=this.data.profiles[t],a=o==null?void 0:o.profiles[e];if(!a)return;let c=[];a.dtm.forEach((u,f)=>{if(u==null)return;let p=o.offset0+f*o.step;c.push(this.toWorld(a.c[0]+p*a.n[0],a.c[1]+p*a.n[1],u+.3))});let h=new ae(Ht("--accent"));if(this.selLine.add(new Ns(new en().setFromPoints(c),new Zi({color:h,depthTest:!1}))),i!=null&&i.wet){let u=this.toWorld(a.c[0]+i.oL*a.n[0],a.c[1]+i.oL*a.n[1],i.wse),f=this.toWorld(a.c[0]+i.oR*a.n[0],a.c[1]+i.oR*a.n[1],i.wse);this.selLine.add(new Ns(new en().setFromPoints([u,f]),new Zi({color:new ae(Ht("--water")),depthTest:!1})))}this.selLine.renderOrder=5,this.requestRender()}focusProfile(t,e){var u,f;let i=(u=this.data.profiles[t])==null?void 0:u.profiles[e];if(!i)return;let o=this.toWorld(i.c[0],i.c[1],(f=i.wl0)!=null?f:this.baseZ),a=new G(-i.n[1],0,-i.n[0]),c=new G(i.n[0],0,-i.n[1]),h=o.clone().addScaledVector(a,-520).addScaledVector(c,-320).add(new G(0,380,0));this.controls.target.copy(o),this.camera.position.copy(h),this.controls.update(),this.requestRender(!0)}home(){let t=this.data.meta.bounds,e=this.toWorld((t[0]+t[2])/2,(t[1]+t[3])/2,this.baseZ+5),i=Math.max(t[2]-t[0],t[3]-t[1]);this.controls.target.copy(e),this.camera.position.set(e.x,e.y+i*.55,e.z+i*.55),this.controls.update(),this.requestRender(!0)}pick(t){var g;let e=this.renderer.domElement.getBoundingClientRect(),i=new te((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),o=new Do;o.setFromCamera(i,this.camera);let a=new pn(new G(0,1,0),-this.controls.target.y),c=new G;if(!o.ray.intersectPlane(a,c))return;let h=c.x+this.origin[0],u=-c.z+this.origin[1],f=null,p=400;for(let m of this.data.meta.reaches)(((g=this.data.profiles[m.id])==null?void 0:g.profiles)||[]).forEach((y,M)=>{let b=Math.hypot(y.c[0]-h,y.c[1]-u);b<p&&(p=b,f=[m.id,M])});f&&this.onPick(...f)}setMode(t){this.shared.uMode.value=t,this.requestRender()}setPointSize(t){this.shared.uSize.value=t,this.requestRender()}setExaggeration(t){var o;let i=this.controls.target.clone().y/this.ex;this.ex=t,this.shared.uEx.value=t;for(let a of this.tiles)a.center=null;this.axisLines.clear(),this.buildAxis(),this.controls.target.y=i*t,this.controls.update(),(o=this.onExChange)==null||o.call(this),this.requestRender(!0)}resize(){let t=this.container.clientWidth,e=this.container.clientHeight;!t||!e||(this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.shared.uProj.value=e*this.renderer.getPixelRatio()/(2*Math.tan(this.camera.fov*Math.PI/360)),this.requestRender(!0))}requestRender(t=!1){this.dirty=!0,t&&(this.lodDirty=!0)}setActive(t){this.active=t,t&&(this.resize(),this.requestRender(!0))}loop(){if(requestAnimationFrame(()=>this.loop()),!this.active)return;this.controls.update();let t=performance.now();this.lodDirty&&(!this.lastLod||t-this.lastLod>250)&&(this.lastLod=t,this.lodDirty=this.loading>0,this.updateLod()),this.dirty&&(this.dirty=!1,this.renderer.setClearColor(new ae(Ht("--viewport"))),this.renderer.render(this.scene,this.camera))}}});jn();function ma(s,t,e,i,o={}){let{ctx:a,w:c,h}=ns(s),[u,f]=i,p=(t||[]).filter(y=>y.t>=u&&y.t<=f),g=o.color||Ht("--water");if(a.strokeStyle=Ht("--grid"),a.lineWidth=1,a.beginPath(),a.moveTo(0,h-.5),a.lineTo(c,h-.5),a.stroke(),!p.length){a.fillStyle=Ht("--ink-soft"),a.font=Pn(10),a.textBaseline="middle",a.fillText("keine Daten im Zeitraum",4,h/2);return}let m=y=>(y-u)/(f-u)*c;if(o.kind==="bars"){let y=Math.max(2,...p.map(b=>b.v)),M=Math.max(1,c/((f-u)/36e5)-.5);a.fillStyle=g;for(let b of p){let x=b.v/y*(h-4);a.fillRect(m(b.t)-M,h-x,M,x)}a.fillStyle=Ht("--ink-soft"),a.font=Pn(10),a.textAlign="right",a.textBaseline="top",a.fillText(`max ${ge(y,1)} mm/h`,c-2,1)}else{let y=1/0,M=-1/0;for(let w of p)y=Math.min(y,w.v),M=Math.max(M,w.v);let b=Math.max(o.minRange||.2,M-y),x=(y+M)/2;y=x-b*.6,M=x+b*.6;let _=w=>h-2-(w-y)/(M-y)*(h-4);a.strokeStyle=g,a.lineWidth=1.5,a.beginPath();let I=null;for(let w of p){let D=m(w.t),B=_(w.v);I&&w.t-I.t>3*36e5?a.moveTo(D,B):I?a.lineTo(D,B):a.moveTo(D,B),I=w}a.stroke()}e>=u&&e<=f&&(a.strokeStyle=Ht("--accent"),a.lineWidth=1.5,a.beginPath(),a.moveTo(m(e),0),a.lineTo(m(e),h),a.stroke())}jn();var ga=window.LINTH_CONFIG||{};async function ss(s){let t=await fetch(s,{cache:"no-cache"});if(!t.ok)throw new Error(`${s}: HTTP ${t.status}`);return t.json()}async function Ic(){let s=await ss("data/meta.json"),[t,e,i,...o]=await Promise.all([ss("data/axis.json"),ss("data/stations.json").catch(()=>({stations:[]})),ss("data/pc/index.json").catch(()=>null),...s.reaches.map(c=>ss(`data/profiles_${c.id}.json`).catch(()=>null))]),a={};return s.reaches.forEach((c,h)=>{a[c.id]=o[h]}),{meta:s,axis:t,stations:e.stations||[],profiles:a,pc:i}}var Lc=s=>new Date(s).toISOString().replace(/\.\d{3}Z$/,"Z");async function Dc(s){let t=await fetch(ga.bafuApi||"https://data.bafu.admin.ch/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s})});if(!t.ok)throw new Error(`BAFU-Schnittstelle: HTTP ${t.status}`);let e=await t.json();if(e.errors)throw new Error("BAFU-Schnittstelle: "+e.errors.map(i=>i.message).join("; "));return e.data}function Dr(s,t,e,i,o){if(o==null||!Number.isFinite(o))return;let a=s[t]||(s[t]={});(a[e]||(a[e]=[])).push({t:i,v:o})}function _a(s){for(let t of Object.values(s))for(let e of Object.keys(t)){let i=t[e].sort((o,a)=>o.t-a.t);t[e]=i.filter((o,a)=>a===0||o.t!==i[a-1].t)}return s}async function Nc(s,t){let e={};if(!s.length)return e;let i=Math.floor(Date.now()/Me)*Me+Me,o=i-t*24*Me,a=10*24*Me,c=JSON.stringify(s.map(String)),h=[];for(let u=o;u<i;u+=a){let f=Math.min(i,u+a),p=`{ water { observations { data_1hour_mean(where: {
      station: { no: { _in: ${c} } }, parameterName: { _in: ["W","Q"] },
      timestamp: { _gte: "${Lc(u)}", _lt: "${Lc(f)}" } }) {
      parameterName timestamp value station { no } } } } }`;h.push(Dc(p).then(g=>{for(let m of g.water.observations.data_1hour_mean)Dr(e,String(m.station.no),m.parameterName,Date.parse(m.timestamp)+Me/2,m.value)}))}return await Promise.all(h),_a(e)}async function Oc(s){let t={};if(!s.length)return t;let i=`{ water { observations { data_live(where: {
    stationNo: { _in: ${JSON.stringify(s.map(String))} }, parameterName: { _in: ["W","Q"] } }) {
    stationNo parameterName timestamp value } } } }`,o=await Dc(i);for(let a of o.water.observations.data_live)Dr(t,String(a.stationNo),a.parameterName,Date.parse(a.timestamp),a.value);return _a(t)}function Uc(s,t){var o,a;let e={},i=new Set([...Object.keys(s),...Object.keys(t)]);for(let c of i){e[c]={};for(let h of["W","Q"]){let u=((o=s[c])==null?void 0:o[h])||[],f=((a=t[c])==null?void 0:a[h])||[],p=u.length?u[u.length-1].t:-1/0;e[c][h]=u.concat(f.filter(g=>g.t>p))}}return e}function lf(){let s=[];ga.meteoUrl&&s.push(ga.meteoUrl);let t=location.hostname;if(t.endsWith(".github.io")){let e=t.split(".")[0],i=location.pathname.split("/").filter(Boolean)[0]||`${e}.github.io`;s.push(`https://raw.githubusercontent.com/${e}/${i}/live-data/meteo.json`)}return s.push("live/meteo.json"),s}async function Fc(){for(let s of lf())try{let t=await ss(`${s}${s.includes("?")?"&":"?"}v=${Math.floor(Date.now()/3e5)}`);for(let e of t.stations||[]){let i=e.precip_h,o=Date.parse(i.start);e.series=i.values.map((a,c)=>({t:o+(c+1)*i.step_s*1e3,v:a})).filter(a=>a.v!=null)}return{...t,url:s}}catch{}return null}function Bc(s,t){var c,h;let e={},i=Math.floor(Date.now()/Me)*Me,o=i-t*24*Me,a=i-40*Me;for(let u of s){let p=(((c=u.reaches[0])==null?void 0:c.s)||0)/1e3*.6*Me,g=(h=u.demo_base)!=null?h:420;for(let m=o;m<=i;m+=Me){let y=(m-a-p)/(14*Me),M=Math.exp(-y*y),b=.05*Math.sin(m/Me*Math.PI/12);Dr(e,u.no,"W",m,g+2.6*M+b),Dr(e,u.no,"Q",m,60+420*M+5*b)}}return _a(e)}function zc(s){let t=Math.floor(Date.now()/Me)*Me,e=t-52*Me,[i,o]=s.origin,c=[["DEM","Demo Glarus",2e3,-6e3],["DEW","Demo Weesen",1500,2500],["DES","Demo Sch\xE4nis",-1500,5e3]].map(([h,u,f,p],g)=>{let m=[];for(let y=t-30*24*Me;y<=t;y+=Me){let M=(y-e)/(10*Me),b=Math.max(0,9*Math.exp(-M*M)*(1+.3*Math.sin(y/Me+g))-.4);m.push({t:y,v:Math.round(b*10)/10})}return{abbr:h,name:u,e:i+f,n:o+p,series:m,demo:!0}});return{generated:new Date().toISOString(),stations:c,url:"demo"}}jn();function kc(s,t,e,i,o,a){var E,R;let{ctx:c,w:h,h:u}=ns(s);if(!t||!e)return()=>null;let f={ink:Ht("--ink"),soft:Ht("--ink-soft"),grid:Ht("--grid"),earth:Ht("--earth"),water:Ht("--water"),waterFill:Ht("--water-fill"),bed:Ht("--bed"),over:Ht("--over"),sel:Ht("--accent")},p=t.profiles,g=p[p.length-1].s||1,m=e.states.map(k=>{var tt,ht;return(ht=(tt=k.crestL)==null?void 0:tt.z)!=null?ht:null}),y=e.states.map(k=>{var tt,ht;return(ht=(tt=k.crestR)==null?void 0:tt.z)!=null?ht:null}),M=p.map(k=>k.svy?Math.min(...k.svy.z):null),b=1/0,x=-1/0,_=k=>{k!=null&&Number.isFinite(k)&&(b=Math.min(b,k),x=Math.max(x,k))};if(p.forEach((k,tt)=>{_(k.wl0),_(e.wse[tt]),_(m[tt]),_(y[tt]),_(M[tt])}),!Number.isFinite(b))return()=>null;let I=Math.max(3,x-b);b-=I*.08,x+=I*.1;let w={l:58,r:16,t:14,b:26},D=k=>w.l+k/g*(h-w.l-w.r),B=k=>u-w.b-(k-b)/(x-b)*(u-w.t-w.b);c.font=Pn(11),c.strokeStyle=f.grid,c.fillStyle=f.soft,c.lineWidth=1;let O=is(x-b,4);c.textAlign="right",c.textBaseline="middle";for(let k=Math.ceil(b/O)*O;k<=x;k+=O)c.beginPath(),c.moveTo(w.l,B(k)),c.lineTo(h-w.r,B(k)),c.stroke(),c.fillText(ge(k,O<1?1:0),w.l-6,B(k));let F=is(g/1e3,8);c.textAlign="center",c.textBaseline="top";for(let k=0;k<=g/1e3+1e-6;k+=F)c.beginPath(),c.moveTo(D(k*1e3),w.t),c.lineTo(D(k*1e3),u-w.b),c.stroke(),c.fillText(`km ${ge(k,F<1?1:0)}`,D(k*1e3),u-w.b+5);let st=(k,tt,ht,C)=>{c.strokeStyle=tt,c.lineWidth=ht,c.setLineDash(C||[]),c.beginPath();let H=!1;k.forEach((V,it)=>{if(V==null){H=!1;return}let W=D(p[it].s),Y=B(V);H?c.lineTo(W,Y):c.moveTo(W,Y),H=!0}),c.stroke(),c.setLineDash([])};c.fillStyle=f.waterFill,c.beginPath(),p.forEach((k,tt)=>{var C;let ht=(C=e.wse[tt])!=null?C:k.wl0;tt?c.lineTo(D(k.s),B(ht)):c.moveTo(D(k.s),B(ht))});for(let k=p.length-1;k>=0;k--){let tt=(E=e.wse[k])!=null?E:p[k].wl0;c.lineTo(D(p[k].s),B(Math.min((R=p[k].wl0)!=null?R:tt,tt)))}c.closePath(),c.fill(),st(m,f.earth,1.2),st(y,f.earth,1.2,[6,3]),st(M,f.bed,1.2,[3,3]),st(p.map(k=>k.wl0),f.soft,1,[2,4]),st(e.wse,f.water,2),c.fillStyle=f.over,e.states.forEach((k,tt)=>{k.wet&&k.freeboard!=null&&k.freeboard<.3&&c.fillRect(D(p[tt].s)-1.5,u-w.b-5,3,5)}),c.font=Pn(11,600);for(let k of i){let tt=k.reaches.find(H=>H.reach===o);if(!tt)continue;let ht=e.anchors.find(H=>H.no===k.no),C=D(tt.s);c.strokeStyle=f.ink,c.lineWidth=1,c.beginPath(),c.moveTo(C,w.t),c.lineTo(C,w.t+8),c.stroke(),ht&&(c.fillStyle=f.water,c.beginPath(),c.arc(C,B(ht.w),4,0,Math.PI*2),c.fill()),c.fillStyle=f.ink,c.textAlign=tt.s<g*.1?"left":tt.s>g*.9?"right":"center",c.textBaseline="top",c.fillText(k.name||k.no,C,w.t+10)}if(a!=null&&p[a]){let k=D(p[a].s);c.strokeStyle=f.sel,c.lineWidth=1.5,c.beginPath(),c.moveTo(k,w.t),c.lineTo(k,u-w.b),c.stroke()}return k=>{let tt=(k-w.l)/(h-w.l-w.r)*g,ht=0,C=1/0;return p.forEach((H,V)=>{let it=Math.abs(H.s-tt);it<C&&(C=it,ht=V)}),ht}}var Ee=rf(Vc());jn();jn();function cf(s,t,e,i,o){var m,y,M;let a=t.profiles,c=a.map(b=>b.s),h=a.map(b=>b.wl0),u=[];for(let b of e){let x=b.reaches.find(w=>w.reach===s);if(!x||!((y=(m=b.params)==null?void 0:m.W)!=null&&y.absolute))continue;let _=Vn((M=i[b.no])==null?void 0:M.W,o);if(_==null)continue;let I=pa(c,h,x.s);I!=null&&u.push({s:x.s,d:_-I,w:_,no:b.no,name:b.name,kind:x.kind})}u.sort((b,x)=>b.s-x.s);let f=u.map(b=>b.s),p=u.map(b=>b.d);return{wse:a.map((b,x)=>b.wl0==null?null:u.length?b.wl0+pa(f,p,b.s):b.wl0),anchors:u,estimated:u.length===0}}function Gc(s,t,e){let i=null,o=-1;for(let a=t;a>=0&&a<s.length;a+=e){let c=s[a];if(c!=null){if(i==null||c>i)i=c,o=a;else if(c<i-.4)break}}return o>=0?{i:o,z:i}:null}function hf(s,t,e){var w;let i=t.dtm,o=s.offset0,a=s.step,c=i.length,h=Math.round((t.ch-o)/a);if(h=Math.max(0,Math.min(c-1,h)),e==null)return{wet:!1};let u=D=>{let B=h,O=h;for(;B>0&&(i[B-1]==null||i[B-1]<D);)B--;for(;O<c-1&&(i[O+1]==null||i[O+1]<D);)O++;return[B,O]},[f,p]=u(e+.1),[g,m]=u(Math.min(e,(w=t.wl0)!=null?w:e)+.1),y=Gc(i,g-1,-1),M=Gc(i,m+1,1),b=f===0||p===c-1,x=[y==null?void 0:y.z,M==null?void 0:M.z].filter(D=>D!=null),_=x.length?Math.min(...x)-e:null,I=1/0;for(let D=f;D<=p;D++)i[D]!=null&&i[D]<I&&(I=i[D]);return{wet:!0,wse:e,c:h,L:f,R:p,oL:o+(f-.5)*a,oR:o+(p+.5)*a,width:(p-f+1)*a,crestL:y,crestR:M,freeboard:b&&(_==null||_>=0)?-.01:_,edge:b,depth:Number.isFinite(I)?e-I:null}}function Or(s){return!s||!s.wet?"dry":s.edge||s.freeboard!=null&&s.freeboard<0?"over":s.freeboard==null?"unknown":s.freeboard<.3?"crit":s.freeboard<1?"warn":"ok"}function Wc(s,t,e){let i={};for(let o of s.meta.reaches){let a=s.profiles[o.id];if(!a)continue;let c=cf(o.id,a,s.stations,t,e),h=a.profiles.map((u,f)=>hf(a,u,c.wse[f]));i[o.id]={...c,states:h}}return i}var Ur=(s,t="jpeg")=>`https://wmts.geo.admin.ch/1.0.0/${s}/default/current/3857/{z}/{x}/{y}.${t}`,uf=()=>({ok:Ht("--fb-ok"),warn:Ht("--fb-warn"),crit:Ht("--fb-crit"),over:Ht("--over"),unknown:Ht("--ink-soft"),dry:Ht("--ink-soft")}),Fr=class{constructor(t,e,{onSelect:i}){this.data=e,this.onSelect=i;let o=this.map=Ee.map(t,{zoomControl:!0,attributionControl:!0,preferCanvas:!0}),a='\xA9 <a href="https://www.swisstopo.admin.ch" target="_blank" rel="noopener">swisstopo</a>',c={Luftbild:Ee.tileLayer(Ur("ch.swisstopo.swissimage"),{maxZoom:20,maxNativeZoom:19,attribution:a}),Landeskarte:Ee.tileLayer(Ur("ch.swisstopo.pixelkarte-farbe"),{maxZoom:20,maxNativeZoom:18,attribution:a}),"Landeskarte grau":Ee.tileLayer(Ur("ch.swisstopo.pixelkarte-grau"),{maxZoom:20,maxNativeZoom:18,attribution:a})};c.Luftbild.addTo(o);let h=Ee.tileLayer(Ur("ch.swisstopo.swissalti3d-reliefschattierung","png"),{maxZoom:20,maxNativeZoom:18,opacity:.45,attribution:a});Ee.control.layers(c,{"Relief (swissALTI3D)":h},{position:"topright"}).addTo(o),this.layers={flood:Ee.layerGroup().addTo(o),axis:Ee.layerGroup().addTo(o),ticks:Ee.layerGroup().addTo(o),sel:Ee.layerGroup().addTo(o),stations:Ee.layerGroup().addTo(o),meteo:Ee.layerGroup().addTo(o)};let u=(p,g)=>js(p,g);for(let p of e.axis.reaches)Ee.polyline(p.coords.map(([g,m])=>u(g,m)),{color:Ht("--water"),weight:2,opacity:.9}).addTo(this.layers.axis);this.ticks={};for(let p of e.meta.reaches){let g=e.profiles[p.id];g&&(this.ticks[p.id]=g.profiles.map((m,y)=>{let M=this.profPoint(m,m.ch-45),b=this.profPoint(m,m.ch+45),x=Ee.polyline([M,b],{weight:3,opacity:.9,color:Ht("--ink-soft")});return x.on("click",()=>this.onSelect(p.id,y)),x.addTo(this.layers.ticks),x}))}this.stationMarkers=e.stations.map(p=>{let g=Ee.circleMarker(u(p.e,p.n),{radius:6,weight:2,color:Ht("--paper"),fillColor:Ht("--water"),fillOpacity:1}).addTo(this.layers.stations);return g.bindTooltip("",{permanent:!0,direction:"right",className:"map-label",offset:[8,0]}),{st:p,m:g}});let f=e.meta.bounds;o.fitBounds([u(f[0],f[1]),u(f[2],f[3])],{padding:[10,10]}),this.meteoMarkers=[]}profPoint(t,e){return js(t.c[0]+e*t.n[0],t.c[1]+e*t.n[1])}setMeteo(t){this.layers.meteo.clearLayers(),this.meteoMarkers=((t==null?void 0:t.stations)||[]).map(e=>{let i=Ee.circleMarker(js(e.e,e.n),{radius:4,weight:1.5,color:Ht("--rain"),fillColor:Ht("--rain"),fillOpacity:.35}).addTo(this.layers.meteo);return i.bindTooltip("",{direction:"top",className:"map-label"}),{st:e,m:i}})}update(t,e,i,o,a){var h,u,f,p,g;let c=uf();this.layers.flood.clearLayers();for(let m of this.data.meta.reaches){let y=this.data.profiles[m.id],M=t[m.id];if(!y||!M)continue;let b=[],x=[],_=()=>{b.length>1&&Ee.polygon(b.concat(x.reverse()),{stroke:!1,fillColor:Ht("--water"),fillOpacity:.45,interactive:!1}).addTo(this.layers.flood),b=[],x=[]};y.profiles.forEach((I,w)=>{let D=M.states[w];if(this.ticks[m.id][w].setStyle({color:c[Or(D)]}),!D.wet){_();return}b.push(this.profPoint(I,D.oL)),x.push(this.profPoint(I,D.oR))}),_()}if(this.layers.sel.clearLayers(),a){let m=(h=this.data.profiles[a.reach])==null?void 0:h.profiles[a.index];if(m){let y=this.data.profiles[a.reach],M=this.profPoint(m,y.offset0),b=this.profPoint(m,y.offset0+(m.dtm.length-1)*y.step);Ee.polyline([M,b],{color:Ht("--accent"),weight:3,dashArray:"6 4"}).addTo(this.layers.sel)}}for(let{st:m,m:y}of this.stationMarkers){let M=Vn((u=e[m.no])==null?void 0:u.W,o),b=Vn((f=e[m.no])==null?void 0:f.Q,o),x=[m.name||m.no];M!=null&&x.push(`${ge(M,2)} ${((g=(p=m.params)==null?void 0:p.W)==null?void 0:g.unit)||"m"}`),b!=null&&x.push(`${ge(b,b<10?1:0)} m\xB3/s`),y.setTooltipContent(x.join("<br>")),y.setStyle({fillOpacity:M!=null||b!=null?1:.3})}for(let{st:m,m:y}of this.meteoMarkers){let M=Vn(m.series,o,72e5)||0;y.setRadius(4+Math.min(18,M*2.2)),y.setTooltipContent(`${m.name}<br>${ge(M,1)} mm/h`)}}flyToProfile(t,e){var o;let i=(o=this.data.profiles[t])==null?void 0:o.profiles[e];i&&this.map.panTo(js(i.c[0],i.c[1]))}invalidate(){this.map.invalidateSize()}};jn();function Zc(s,t,e,i,o={}){var ht;let{ctx:a,w:c,h}=ns(s);if(!t||!e)return;let u={ink:Ht("--ink"),soft:Ht("--ink-soft"),grid:Ht("--grid"),earth:Ht("--earth"),earthFill:Ht("--earth-fill"),veg:Ht("--veg"),water:Ht("--water"),waterFill:Ht("--water-fill"),bed:Ht("--bed"),warn:Ht("--warn"),over:Ht("--over"),paper:Ht("--panel")},f=t.offset0,p=t.step,g=e.dtm,m=e.dsm,y=C=>f+C*p,M=f,b=f+(g.length-1)*p;if(o.zoom==="channel"){let C=i!=null&&i.wet?Math.max(80,(i.oR-i.oL)/2+60):120,H=i!=null&&i.wet?(i.oL+i.oR)/2:e.ch;M=Math.max(M,H-C),b=Math.min(b,H+C)}let x=1/0,_=-1/0,I=C=>C>=M&&C<=b;if(g.forEach((C,H)=>{C!=null&&I(y(H))&&(x=Math.min(x,C),_=Math.max(_,C))}),o.showDsm!==!1&&m.forEach((C,H)=>{C!=null&&I(y(H))&&(_=Math.max(_,Math.min(C,x+40)))}),e.svy&&e.svy.z.forEach((C,H)=>{I(e.svy.o[H])&&(x=Math.min(x,C))}),(i==null?void 0:i.wse)!=null&&(x=Math.min(x,i.wse-1),_=Math.max(_,i.wse+.5)),!Number.isFinite(x))return;let w=Math.max(4,_-x);x-=w*.08,_+=w*.12;let D={l:58,r:16,t:18,b:30},B=C=>D.l+(C-M)/(b-M)*(c-D.l-D.r),O=C=>h-D.b-(C-x)/(_-x)*(h-D.t-D.b);a.font=Pn(11),a.fillStyle=u.soft,a.strokeStyle=u.grid,a.lineWidth=1;let F=is(_-x,5);a.textAlign="right",a.textBaseline="middle";for(let C=Math.ceil(x/F)*F;C<=_;C+=F)a.beginPath(),a.moveTo(D.l,O(C)),a.lineTo(c-D.r,O(C)),a.stroke(),a.fillText(ge(C,F<1?1:0),D.l-6,O(C));let st=is(b-M,8);a.textAlign="center",a.textBaseline="top";for(let C=Math.ceil(M/st)*st;C<=b;C+=st)a.beginPath(),a.moveTo(B(C),D.t),a.lineTo(B(C),h-D.b),a.stroke(),a.fillText(`${C>0?"+":""}${Math.round(C)}`,B(C),h-D.b+6);a.textBaseline="top",a.textAlign="left",a.fillText("linkes Ufer",D.l+6,D.t+4),a.textAlign="right",a.fillText("rechtes Ufer",c-D.r-6,D.t+4);let E=[];if(g.forEach((C,H)=>{let V=y(H);V>=M-p&&V<=b+p&&E.push(H)}),i!=null&&i.wet){a.fillStyle=u.waterFill,a.beginPath();let C=!1;for(let H=i.L;H<=i.R;H++){let V=y(H);if(V<M||V>b)continue;let it=Math.min((ht=g[H])!=null?ht:i.wse,i.wse);C||(a.moveTo(B(V),O(i.wse)),C=!0),a.lineTo(B(V),O(it))}C&&(a.lineTo(B(Math.min(b,y(i.R))),O(i.wse)),a.closePath(),a.fill())}if(o.showDsm!==!1){a.strokeStyle=u.veg,a.lineWidth=1.2,a.beginPath();let C=!1;for(let H of E){let V=m[H],it=g[H];if(V==null||it==null||V-it<.5){C=!1;continue}C?a.lineTo(B(y(H)),O(V)):(a.moveTo(B(y(H)),O(V)),C=!0)}a.stroke()}let R=E.filter(C=>g[C]!=null);if(R.length){a.beginPath(),a.moveTo(B(y(R[0])),h-D.b);for(let C of R)a.lineTo(B(y(C)),O(g[C]));a.lineTo(B(y(R[R.length-1])),h-D.b),a.closePath(),a.fillStyle=u.earthFill,a.fill()}a.beginPath();let k=!0;for(let C of E){if(g[C]==null){k=!0;continue}k?(a.moveTo(B(y(C)),O(g[C])),k=!1):a.lineTo(B(y(C)),O(g[C]))}if(a.strokeStyle=u.earth,a.lineWidth=1.8,a.stroke(),e.svy&&(a.setLineDash([5,3]),a.strokeStyle=u.bed,a.lineWidth=1.6,a.beginPath(),e.svy.o.forEach((C,H)=>{let V=B(C),it=O(e.svy.z[H]);H?a.lineTo(V,it):a.moveTo(V,it)}),a.stroke(),a.setLineDash([])),e.wl0!=null&&o.showRef!==!1&&(a.setLineDash([2,4]),a.strokeStyle=u.soft,a.lineWidth=1,a.beginPath(),a.moveTo(B(Math.max(M,e.ch-60)),O(e.wl0)),a.lineTo(B(Math.min(b,e.ch+60)),O(e.wl0)),a.stroke(),a.setLineDash([])),i!=null&&i.wet){let C=Math.max(M,i.oL),H=Math.min(b,i.oR);a.strokeStyle=u.water,a.lineWidth=2.2,a.beginPath(),a.moveTo(B(C),O(i.wse)),a.lineTo(B(H),O(i.wse)),a.stroke();let V=B((C+H)/2),it=O(i.wse);a.fillStyle=u.water,a.beginPath(),a.moveTo(V-6,it-10),a.lineTo(V+6,it-10),a.lineTo(V,it-1),a.closePath(),a.fill(),a.font=Pn(12,600),a.textAlign="left",a.textBaseline="bottom";let W=`${ge(i.wse,2)} m \xFC.M.`;a.lineWidth=4,a.strokeStyle=u.paper,a.lineJoin="round",a.strokeText(W,V+10,it-14),a.fillText(W,V+10,it-14)}let tt=(C,H)=>{if(!C)return;let V=y(C.i);if(V<M||V>b)return;let it=B(V),W=O(C.z),Y=(i==null?void 0:i.wse)!=null?C.z-i.wse:null;a.fillStyle=Y!=null&&Y<.3?u.over:u.earth,a.beginPath(),a.moveTo(it,W-2),a.lineTo(it-5,W-10),a.lineTo(it+5,W-10),a.closePath(),a.fill(),a.font=Pn(11),a.textAlign=H<0?"right":"left",a.textBaseline="bottom",a.fillStyle=u.ink,a.lineWidth=3,a.strokeStyle=u.paper,a.lineJoin="round",a.strokeText(`${ge(C.z,2)}${Y!=null?`  (${Y>=0?"+":""}${ge(Y,2)})`:""}`,it+H*8,W-11),a.fillText(`${ge(C.z,2)}${Y!=null?`  (${Y>=0?"+":""}${ge(Y,2)})`:""}`,it+H*8,W-11)};i&&(tt(i.crestL,-1),tt(i.crestR,1)),a.save(),a.translate(14,(D.t+h-D.b)/2),a.rotate(-Math.PI/2),a.textAlign="center",a.textBaseline="middle",a.fillStyle=u.soft,a.font=Pn(11),a.fillText("m \xFC.M.",0,0),a.restore()}jn();var I0=window.LINTH_CONFIG||{},Xt=s=>document.getElementById(s),ot={data:null,hydro:{},history:{},meteo:null,days:I0.historyDays||7,t:Date.now(),live:!0,sel:null,water:{},view:"map",zoom:"channel",playing:null},$e=null,de=null,ju=()=>null;function Ai(s,t="info"){let e=Xt("notice");if(!s){e.hidden=!0,e.textContent="";return}e.hidden=!1,e.dataset.kind=t,e.textContent=s}function Vo(){let s=Math.ceil(Date.now()/6e5)*10*6e4;return[s-ot.days*24*Me,s]}function Qu(){let s=0;for(let t of Object.values(ot.hydro))for(let e of Object.values(t))e.length&&(s=Math.max(s,e[e.length-1].t));return s||Date.now()}function D0(){let[s,t]=Vo(),e=Xt("time");e.min=Math.floor(s/6e4),e.max=Math.floor(t/6e4),e.step=10,e.value=Math.floor(ot.t/6e4),Xt("time-label").textContent=Rc(ot.t),Xt("btn-live").setAttribute("aria-pressed",String(ot.live)),Xt("time-mode").textContent=ot.live?"Live-Stand":"R\xFCckblick"}function Hl(s,t=!1){ot.t=s,ot.live=t,Gl()}function Bs(){Vl(),Hl(Qu(),!0)}function Vl(){ot.playing&&(clearInterval(ot.playing),ot.playing=null),Xt("btn-play").setAttribute("aria-pressed","false"),Xt("btn-play").textContent="Abspielen"}function N0(){if(ot.playing){Vl();return}let[s]=Vo(),t=ot.live?s:ot.t;Xt("btn-play").setAttribute("aria-pressed","true"),Xt("btn-play").textContent="Anhalten",ot.playing=setInterval(()=>{t+=Me;let e=Qu();if(t>=e){Bs();return}Hl(t,!1)},220)}async function Ho(s){let t=ot.data;if(t.meta.demo){ot.hydro=Bc(t.stations,30);return}let e=t.stations.map(i=>i.no);if(e.length)try{s&&(ot.history=await Nc(e,ot.days));let i=await Oc(e).catch(()=>({}));ot.hydro=Uc(ot.history,i),Ai(null)}catch(i){Ai(`Pegeldaten konnten nicht geladen werden: ${i.message}. Die Ansicht zeigt den Referenzwasserspiegel.`,"warn")}}async function Ju(){ot.meteo=ot.data.meta.demo?zc(ot.data.meta):await Fc(),$e==null||$e.setMeteo(ot.meteo)}function O0(s){let t=s.reaches[0],e=_e("canvas",{class:"spark","aria-hidden":"true"}),i=_e("button",{class:"station",type:"button",onclick:()=>z0(t.reach,t.s)},_e("span",{class:"st-name"},s.name||s.no),_e("span",{class:"st-meta"},`${s.river||""}${t.kind==="see"?", Seepegel":""}, ${Ir(t.s)}`),_e("span",{class:"st-vals"},_e("span",{class:"v-w"},"\u2013"),_e("span",{class:"v-q"},"")),e);return i._st=s,i._canvas=e,i}function U0(){let s=Xt("station-list");if(s.replaceChildren(),!ot.data.stations.length){s.append(_e("p",{class:"empty"},'Keine BAFU-Stationen zugeordnet. Pr\xFCfe in config/linthebene.json die Eintr\xE4ge unter "stations".'));return}for(let t of ot.data.stations)s.append(O0(t))}function F0(){var t,e,i;let s=Vo();for(let o of Xt("station-list").querySelectorAll(".station")){let a=o._st,c=ot.hydro[a.no]||{},h=Vn(c.W,ot.t),u=Vn(c.Q,ot.t);o.querySelector(".v-w").textContent=h!=null?`${ge(h,2)} ${((e=(t=a.params)==null?void 0:t.W)==null?void 0:e.unit)||"m"}`:"kein Pegel",o.querySelector(".v-q").textContent=u!=null?`${ge(u,u<10?1:0)} m\xB3/s`:"",ma(o._canvas,(i=c.W)!=null&&i.length?c.W:c.Q,ot.t,s,{minRange:.3})}}function td(){var i,o;let s=Xt("meteo-list");s.replaceChildren();let t=ot.meteo;if(!t||!((i=t.stations)!=null&&i.length)){s.append(_e("p",{class:"empty"},'Noch keine Niederschlagsdaten. Sie erscheinen, sobald der Workflow "Niederschlag aktualisieren" einmal gelaufen ist.'));return}let e=Vo();for(let a of t.stations){let c=Vn(a.series,ot.t,2*Me),h=0;for(let f of a.series)f.t>ot.t-24*Me&&f.t<=ot.t&&(h+=f.v);let u=_e("canvas",{class:"spark","aria-hidden":"true"});s.append(_e("div",{class:"station meteo"},_e("span",{class:"st-name"},a.name),_e("span",{class:"st-meta"},a.abbr?`MeteoSchweiz ${a.abbr}`:""),_e("span",{class:"st-vals"},_e("span",{},c!=null?`${ge(c,1)} mm/h`:"\u2013"),_e("span",{class:"v-q"},`${ge(h,1)} mm in 24 h`)),u)),ma(u,a.series,ot.t,e,{kind:"bars",color:getComputedStyle(document.documentElement).getPropertyValue("--rain")})}t.generated&&!((o=t.stations[0])!=null&&o.demo)&&s.append(_e("p",{class:"source"},`Stand der Niederschlagsdaten: ${fa(Date.parse(t.generated))}`))}var B0={ok:"Freibord \xFCber 1 m",warn:"Freibord unter 1 m",crit:"Freibord unter 30 cm",over:"Wasser \xFCber Uferkrone (statische N\xE4herung)",unknown:"Uferkrone nicht bestimmbar",dry:"Kein Wasserspiegel berechnet"};function ed(){let s=Xt("details");s.replaceChildren();let t=ot.sel;if(!t)return;let i=ot.data.profiles[t.reach].profiles[t.index],o=ot.water[t.reach],a=o==null?void 0:o.states[t.index],c=ot.data.meta.reaches.find(g=>g.id===t.reach),h=Or(a),u="Referenz zur Befliegung, keine Pegeldaten zum gew\xE4hlten Zeitpunkt";if(o&&o.anchors.length){let g=[...o.anchors].reverse().find(y=>y.s<=i.s),m=o.anchors.find(y=>y.s>i.s);g&&m?u=`Interpoliert zwischen ${g.name} und ${m.name}`:u=`Fortgesetzt von ${(g||m).name}`}let f=(g,m)=>_e("div",{class:"row"},_e("dt",{},g),_e("dd",{},m)),p=i.svy?Math.min(...i.svy.z):null;s.append(_e("h2",{},`${(c==null?void 0:c.name)||t.reach}, ${Ir(i.s)}`),_e("p",{class:`status s-${h}`},B0[h]),_e("dl",{},f("Wasserspiegel",(a==null?void 0:a.wse)!=null?`${ge(a.wse,2)} m \xFC.M.`:"\u2013"),f("Grundlage",u),f("Benetzte Breite",a!=null&&a.wet?`${ge(a.width,0)} m`:"\u2013"),p!=null?f("Tiefe \xFCber vermessener Sohle",(a==null?void 0:a.wse)!=null?ge(a.wse-p,2,"m"):"\u2013"):f("\xDCber Stand der Befliegung",(a==null?void 0:a.wse)!=null&&i.wl0!=null?ge(a.wse-i.wl0,2,"m"):"\u2013"),f("Uferkrone links",a!=null&&a.crestL?`${ge(a.crestL.z,2)} m \xFC.M., Freibord ${ge(a.crestL.z-a.wse,2)} m`:"\u2013"),f("Uferkrone rechts",a!=null&&a.crestR?`${ge(a.crestR.z,2)} m \xFC.M., Freibord ${ge(a.crestR.z-a.wse,2)} m`:"\u2013"),f("Referenz Befliegung",i.wl0!=null?`${ge(i.wl0,2)} m \xFC.M.`:"\u2013"),f("Vermessung BAFU",i.svy?`${i.svy.date}, ${i.svy.section||i.svy.river||""} (${ge(i.svy.dist,0)} m entfernt)`:"Keine Vermessung zugeordnet"))),i.svy||s.append(_e("p",{class:"hint"},"Ohne Vermessung zeigt das Terrainmodell im Gerinne die Wasseroberfl\xE4che zur Befliegung, nicht die Sohle."))}function mr(){let s=ot.sel;if(!s)return;let t=ot.data.profiles[s.reach],e=t.profiles[s.index],i=ot.water[s.reach];Zc(Xt("section"),t,e,i==null?void 0:i.states[s.index],{zoom:ot.zoom,showDsm:Xt("opt-dsm").checked}),ju=kc(Xt("long"),t,i,ot.data.stations,s.reach,s.index),Xt("prof-label").textContent=Ir(e.s)}function Gl(){var s;ot.water=Wc(ot.data,ot.hydro,ot.t),D0(),F0(),td(),$e==null||$e.update(ot.water,ot.hydro,ot.meteo,ot.t,ot.sel),de&&(de.setWater(ot.water),ot.sel&&de.setSelection(ot.sel.reach,ot.sel.index,(s=ot.water[ot.sel.reach])==null?void 0:s.states[ot.sel.index])),ed(),mr()}function li(s,t,{fly:e=!1}={}){var o;let i=ot.data.profiles[s];i&&(t=Math.max(0,Math.min(i.profiles.length-1,t)),ot.sel={reach:s,index:t},Xt("reach").value=s,e&&($e==null||$e.flyToProfile(s,t),de==null||de.focusProfile(s,t)),$e==null||$e.update(ot.water,ot.hydro,ot.meteo,ot.t,ot.sel),de==null||de.setSelection(s,t,(o=ot.water[s])==null?void 0:o.states[t]),ed(),mr())}function z0(s,t){let e=ot.data.profiles[s];if(!e)return;let i=0,o=1/0;e.profiles.forEach((a,c)=>{let h=Math.abs(a.s-t);h<o&&(o=h,i=c)}),li(s,i,{fly:!0})}async function k0(){var e;if(de)return de;if(!ot.data.pc)return Xt("three").replaceChildren(_e("p",{class:"empty center"},'Keine Punktwolke vorhanden. Der Workflow "Daten aufbereiten" erzeugt sie aus swissSURFACE3D.')),null;let{View3D:s,CLASSES:t}=await Promise.resolve().then(()=>($u(),Yu));return de=new s(Xt("three"),ot.data,{onPick:(i,o)=>li(i,o),onStats:({loaded:i,loading:o,classes:a})=>{let c=i>=1e6?`${(i/1e6).toLocaleString("de-CH",{maximumFractionDigits:1})} Mio. Punkte`:`${Math.round(i/1e3).toLocaleString("de-CH")} Tsd. Punkte`;Xt("pc-stats").textContent=`${c}${o?", l\xE4dt \u2026":""}`,H0(a,t)}}),de.onExChange=()=>{var i;de.setWater(ot.water),ot.sel&&de.setSelection(ot.sel.reach,ot.sel.index,(i=ot.water[ot.sel.reach])==null?void 0:i.states[ot.sel.index])},de.setWater(ot.water),ot.sel&&(de.setSelection(ot.sel.reach,ot.sel.index,(e=ot.water[ot.sel.reach])==null?void 0:e.states[ot.sel.index]),de.focusProfile(ot.sel.reach,ot.sel.index)),de}var Ku="";function H0(s,t){let e=Object.keys(s).map(Number).sort((a,c)=>a-c),i=e.join(",");if(i===Ku)return;Ku=i,Xt("class-legend").replaceChildren(...e.map(a=>{let[c,h]=t[a]||[`Klasse ${a}`,"#8f9799"],u=`cls-${a}`,f=_e("input",{type:"checkbox",id:u,checked:!de.hidden.has(a)});return f.addEventListener("change",()=>de.setClassVisible(a,f.checked)),_e("label",{for:u,class:"cls"},f,_e("span",{class:"swatch",style:`background:${h}`}),`${c}`)}))}async function V0(s){ot.view=s;for(let t of document.querySelectorAll("[data-view]"))t.setAttribute("aria-pressed",String(t.dataset.view===s));if(Xt("map").hidden=s!=="map",Xt("three").hidden=s!=="3d",Xt("tools3d").hidden=s!=="3d",Xt("legend2d").hidden=s!=="map",Xt("pc-stats").hidden=s!=="3d",s==="map")$e==null||$e.invalidate(),de==null||de.setActive(!1);else try{let t=await k0();t==null||t.setActive(!0)}catch(t){console.error(t),Ai(`Die 3D-Ansicht konnte nicht gestartet werden: ${t.message}`,"warn")}}function G0(){Xt("time").addEventListener("input",t=>{Vl(),Hl(Number(t.target.value)*6e4,!1)}),Xt("btn-live").addEventListener("click",Bs),Xt("btn-play").addEventListener("click",N0),Xt("range-days").value=String(ot.days),Xt("range-days").addEventListener("change",async t=>{ot.days=Number(t.target.value),Ai("Verlauf wird geladen \u2026"),await Ho(!0),Ai(null),ot.live?Bs():Gl()});for(let t of document.querySelectorAll("[data-view]"))t.addEventListener("click",()=>V0(t.dataset.view));Xt("reach").addEventListener("change",t=>{let e=ot.data.profiles[t.target.value];li(t.target.value,Math.floor(((e==null?void 0:e.profiles.length)||1)/2),{fly:!0})}),Xt("prev").addEventListener("click",()=>li(ot.sel.reach,ot.sel.index-1,{fly:!0})),Xt("next").addEventListener("click",()=>li(ot.sel.reach,ot.sel.index+1,{fly:!0}));for(let t of document.querySelectorAll("[data-zoom]"))t.addEventListener("click",()=>{ot.zoom=t.dataset.zoom;for(let e of document.querySelectorAll("[data-zoom]"))e.setAttribute("aria-pressed",String(e===t));mr()});Xt("opt-dsm").addEventListener("change",mr),Xt("long").addEventListener("click",t=>{let e=t.target.getBoundingClientRect(),i=ju(t.clientX-e.left);i!=null&&li(ot.sel.reach,i,{fly:!0})});for(let t of document.querySelectorAll("[data-mode]"))t.addEventListener("click",()=>{for(let e of document.querySelectorAll("[data-mode]"))e.setAttribute("aria-pressed",String(e===t));de==null||de.setMode(Number(t.dataset.mode)),Xt("class-legend").hidden=t.dataset.mode!=="1"});Xt("pt-size").addEventListener("input",t=>de==null?void 0:de.setPointSize(Number(t.target.value))),Xt("exag").addEventListener("input",t=>{Xt("exag-out").textContent=`${t.target.value}\xD7`,de==null||de.setExaggeration(Number(t.target.value))}),Xt("btn-home").addEventListener("click",()=>de==null?void 0:de.home()),document.addEventListener("keydown",t=>{t.target.matches("input, select, textarea")||!ot.sel||(t.key==="ArrowLeft"&&li(ot.sel.reach,ot.sel.index-1,{fly:!0}),t.key==="ArrowRight"&&li(ot.sel.reach,ot.sel.index+1,{fly:!0}))});let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(mr,120)})}async function W0(){G0();try{ot.data=await Ic()}catch{Ai('Noch keine aufbereiteten Daten gefunden. Starte auf GitHub unter "Actions" den Workflow "Daten aufbereiten".',"warn");return}let s=ot.data;document.title=`${s.meta.title}: Pegel und Gel\xE4nde`,Xt("title").textContent=s.meta.title,Xt("reach").replaceChildren(...s.meta.reaches.filter(e=>s.profiles[e.id]).map(e=>_e("option",{value:e.id},`${e.name}${e.description?`: ${e.description}`:""}`))),s.meta.demo&&(Xt("demo-flag").hidden=!1),Xt("built").textContent=`Gel\xE4nde aufbereitet ${fa(Date.parse(s.meta.built))}`,U0(),$e=new Fr(Xt("map"),s,{onSelect:(e,i)=>li(e,i)}),Ai("Pegeldaten werden geladen \u2026"),await Promise.all([Ho(!0),Ju()]),Xt("notice").textContent.startsWith("Pegeldaten werden")&&Ai(null);let t=s.meta.reaches.find(e=>s.profiles[e.id]);if(t){let e=s.stations.find(h=>h.reaches.some(u=>u.reach===t.id&&u.kind==="fluss")),i=s.profiles[t.id],o=e?e.reaches.find(h=>h.reach===t.id).s:i.profiles[Math.floor(i.profiles.length/2)].s,a=0,c=1/0;i.profiles.forEach((h,u)=>{let f=Math.abs(h.s-o);f<c&&(c=f,a=u)}),ot.sel={reach:t.id,index:a}}Bs(),s.meta.demo||(setInterval(async()=>{await Ho(!1),ot.live?Bs():Gl()},5*6e4),setInterval(async()=>{await Ho(!0),ot.live&&Bs()},30*6e4),setInterval(async()=>{await Ju(),td()},10*6e4))}window.linth={state:ot,get view3d(){return de},get map2d(){return $e}};W0();
