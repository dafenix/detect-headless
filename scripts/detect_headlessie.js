//POLYFILLS START HERE
/*
 * Polyfill service v4.8.0
 * Disable minification (remove `.min` from URL path) for more info
*/

(function(self, undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}CreateMethodProperty(Object,"keys",function(){"use strict";function t(){var t;try{t=Object.create({})}catch(t){return!0}return o.call(t,"__proto__")}function r(t){var r=n.call(t),e="[object Arguments]"===r;return e||(e="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),e}var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=Object.prototype.propertyIsEnumerable,c=!o.call({toString:null},"toString"),l=o.call(function(){},"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var r=t.constructor;return r&&r.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!a["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),p=function(t){if("undefined"==typeof window||!f)return u(t);try{return u(t)}catch(t){return!1}};return function o(u){var a="[object Function]"===n.call(u),f=r(u),s="[object String]"===n.call(u),y=[];if(void 0===u||null===u)throw new TypeError("Cannot convert undefined or null to object");var h=l&&a;if(s&&u.length>0&&!e.call(u,0))for(var g=0;g<u.length;++g)y.push(String(g));if(f&&u.length>0)for(var w=0;w<u.length;++w)y.push(String(w));else for(var $ in u)t()&&"__proto__"===$||h&&"prototype"===$||!e.call(u,$)||y.push(String($));if(c)for(var d=p(u),b=0;b<i.length;++b)d&&"constructor"===i[b]||!e.call(u,i[b])||y.push(i[b]);return y}}());function Get(n,t){return n[t]}function IsCallable(n){return"function"==typeof n}function SameValueNonNumber(e,n){return e===n}function ToObject(r){if(null===r||void 0===r)throw TypeError();return Object(r)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,l){var t=GetV(e,l);if(null!==t&&void 0!==t){if(!1===IsCallable(t))throw new TypeError("Method not callable: "+l);return t}}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function SameValueZero(e,a){return Type(e)===Type(a)&&("number"===Type(e)?!(!isNaN(e)||!isNaN(a))||(1/e==1/0&&1/a==-1/0||(1/e==-1/0&&1/a==1/0||e===a)):SameValueNonNumber(e,a))}function ToInteger(r){if("symbol"===Type(r))throw new TypeError("Cannot convert a Symbol value to a number");var o=Number(r);return isNaN(o)?0:1/o==1/0||1/o==-1/0||o===1/0||o===-1/0?o:(o<0?-1:1)*Math.floor(Math.abs(o))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:void 0;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):void 0;if(void 0!==r){var o=Call(r,e,[i]);if("object"!==Type(o))return o;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}CreateMethodProperty(Array.prototype,"includes",function e(r){"use strict";var t=ToObject(this),o=ToLength(Get(t,"length"));if(0===o)return!1;var n=ToInteger(arguments[1]);if(n>=0)var a=n;else(a=o+n)<0&&(a=0);for(;a<o;){var i=Get(t,ToString(a));if(SameValueZero(r,i))return!0;a+=1}return!1});!function(){var t={}.toString,e="".split,r=[].concat,o=Object.prototype.hasOwnProperty,c=Object.getOwnPropertyNames||Object.keys,n="object"==typeof self?c(self):[];CreateMethodProperty(Object,"getOwnPropertyNames",function l(a){var p=ToObject(a);if("[object Window]"===t.call(p))try{return c(p)}catch(t){return r.call([],n)}p="[object String]"==t.call(p)?e.call(p,""):Object(p);for(var i=c(p),s=["length","prototype"],O=0;O<s.length;O++){var b=s[O];o.call(p,b)&&!i.includes(b)&&i.push(b)}if(i.includes("__proto__")){var f=i.indexOf("__proto__");i.splice(f,1)}return i})}();function ToPropertyKey(r){var i=ToPrimitive(r,String);return"symbol"===Type(i)?i:ToString(i)}!function(){var t=Object.getOwnPropertyDescriptor,r={}.toString,e="".split;CreateMethodProperty(Object,"getOwnPropertyDescriptor",function o(n,c){var i=ToObject(n);i=("string"===Type(i)||i instanceof String)&&"[object String]"==r.call(n)?e.call(n,""):Object(n);var p=ToPropertyKey(c);return t(i,p)})}();!function(r,t,n){"use strict";function e(r){if("symbol"===Type(r))return r;throw TypeError(r+" is not a symbol")}var o,u=0,i=""+Math.random(),a="__symbol:",l=a.length,c="__symbol@@"+i,f={},s="defineProperty",v="defineProperties",y="getOwnPropertyNames",b="getOwnPropertyDescriptor",h="propertyIsEnumerable",p=r.prototype,m=p.hasOwnProperty,g=p[h],d=p.toString,w=Array.prototype.concat,S=r.getOwnPropertyNames?r.getOwnPropertyNames(self):[],P=r[y],O=function r(t){if("[object Window]"===d.call(t))try{return P(t)}catch(r){return w.call([],S)}return P(t)},j=r[b],E=r.create,N=r.keys,T=r.freeze||r,_=r[s],k=r[v],F=j(r,y),I=function(r,t,n){if(!m.call(r,c))try{_(r,c,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(t){r[c]={}}r[c]["@@"+t]=n},x=function(r,t){var n=E(r);return O(t).forEach(function(r){W.call(t,r)&&K(n,r,t[r])}),n},z=function(r){var t=E(r);return t.enumerable=!1,t},A=function r(){},D=function(r){return r!=c&&!m.call(G,r)},M=function(r){return r!=c&&m.call(G,r)},W=function r(t){var n=""+t;return M(n)?m.call(this,n)&&this[c]&&this[c]["@@"+n]:g.call(this,t)},q=function(t){var n={enumerable:!1,configurable:!0,get:A,set:function(r){o(this,t,{enumerable:!1,configurable:!0,writable:!0,value:r}),I(this,t,!0)}};try{_(p,t,n)}catch(r){p[t]=n.value}G[t]=_(r(t),"constructor",H);var e=j(C.prototype,"description");return e&&_(G[t],"description",e),T(G[t])},B=function(r){var t=e(r);if(X){var n=U(t);if(""!==n)return n.slice(1,-1)}if(void 0!==f[t])return f[t];var o=t.toString(),u=o.lastIndexOf("0.");return""!==(o=o.slice(10,u))?o:void 0},C=function r(){var t=arguments[0];if(this instanceof r)throw new TypeError("Symbol is not a constructor");var n=a.concat(t||"",i,++u);return void 0===t||null!==t&&!isNaN(t)&&""!==String(t)||(f[n]=String(t)),q(n)},G=E(null),H={value:C},J=function(r){return G[r]},K=function r(t,n,e){var u=""+n;return M(u)?(o(t,u,e.enumerable?z(e):e),I(t,u,!!e.enumerable)):_(t,n,e),t},L=function(r){return function(t){return m.call(r,c)&&m.call(r[c],"@@"+t)}},Q=function r(t){return O(t).filter(t===p?L(t):M).map(J)};F.value=K,_(r,s,F),F.value=Q,_(r,"getOwnPropertySymbols",F),F.value=function r(t){return O(t).filter(D)},_(r,y,F),F.value=function r(t,n){var e=Q(n);return e.length?N(n).concat(e).forEach(function(r){W.call(n,r)&&K(t,r,n[r])}):k(t,n),t},_(r,v,F),F.value=W,_(p,h,F),F.value=C,_(n,"Symbol",F),F.value=function(r){var t=a.concat(a,r,i);return t in p?G[t]:q(t)},_(C,"for",F),F.value=function(r){if(D(r))throw new TypeError(r+" is not a symbol");return m.call(G,r)?r.slice(2*l,-i.length):void 0},_(C,"keyFor",F),F.value=function r(t,n){var e=j(t,n);return e&&M(n)&&(e.enumerable=W.call(t,n)),e},_(r,b,F),F.value=function r(t,n){return 1===arguments.length||void 0===n?E(t):x(t,n)},_(r,"create",F);var R=null===function(){return this}.call(null);if(F.value=R?function(){var r=d.call(this);return"[object String]"===r&&M(this)?"[object Symbol]":r}:function(){if(this===window)return"[object Null]";var r=d.call(this);return"[object String]"===r&&M(this)?"[object Symbol]":r},_(p,"toString",F),o=function(r,t,n){var e=j(p,t);delete p[t],_(r,t,n),r!==p&&_(p,t,e)},function(){try{var t={};return r.defineProperty(t,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:void 0}),!!t.t}catch(r){return!1}}()){var U;try{U=Function("s","var v = s.valueOf(); return { [v]() {} }[v].name;")}catch(r){}var V=function(){},X=U&&"inferred"===V.name?U:null;r.defineProperty(n.Symbol.prototype,"description",{configurable:!0,enumerable:!1,get:function(){return B(this)}})}}(Object,0,self);Object.defineProperty(Symbol,"toStringTag",{value:Symbol("toStringTag")});!function(){"use strict";function n(){return tn[q][B]||D}function t(n){return n&&"object"==typeof n}function e(n){return"function"==typeof n}function r(n,t){return n instanceof t}function o(n){return r(n,O)}function i(n,t,e){if(!t(n))throw a(e)}function u(){try{return T.apply(S,arguments)}catch(n){return Y.e=n,Y}}function c(n,t){return T=n,S=t,u}function f(n,t){function e(){for(var e=0;e<o;)t(r[e],r[e+1]),r[e++]=x,r[e++]=x;o=0,r.length>n&&(r.length=n)}var r=L(n),o=0;return function(n,t){r[o++]=n,r[o++]=t,2===o&&tn.nextTick(e)}}function s(n,t){var o,i,u,f,s=0;if(!n)throw a(N);var l=n[tn[q][z]];if(e(l))i=l.call(n);else{if(!e(n.next)){if(r(n,L)){for(o=n.length;s<o;)t(n[s],s++);return s}throw a(N)}i=n}for(;!(u=i.next()).done;)if((f=c(t)(u.value,s++))===Y)throw e(i[G])&&i[G](),f.e;return s}function a(n){return new TypeError(n)}function l(n){return(n?"":Q)+(new O).stack}function h(n,t){var e="on"+n.toLowerCase(),r=C[e];E&&E.listeners(n).length?n===X?E.emit(n,t._v,t):E.emit(n,t):r?r({reason:t._v,promise:t}):tn[n](t._v,t)}function v(n){return n&&n._s}function _(n){if(v(n))return new n(Z);var t,r,o;return t=new n(function(n,e){if(t)throw a();r=n,o=e}),i(r,e),i(o,e),t}function d(n,t){var e=!1;return function(r){e||(e=!0,I&&(n[M]=l(!0)),t===U?j(n,r):w(n,t,r))}}function p(n,t,r,o){return e(r)&&(t._onFulfilled=r),e(o)&&(n[J]&&h(W,n),t._onRejected=o),I&&(t._p=n),n[n._c++]=t,n._s!==$&&rn(n,t),t}function m(n){if(n._umark)return!0;n._umark=!0;for(var t,e=0,r=n._c;e<r;)if(t=n[e++],t._onRejected||m(t))return!0}function y(n,t){function e(n){return r.push(n.replace(/^\s+|\s+$/g,""))}var r=[];return I&&(t[M]&&e(t[M]),function n(t){t&&K in t&&(n(t._next),e(t[K]+""),n(t._p))}(t)),(n&&n.stack?n.stack:n)+("\n"+r.join("\n")).replace(nn,"")}function g(n,t){return n(t)}function w(n,t,e){var r=0,i=n._c;if(n._s===$)for(n._s=t,n._v=e,t===A&&(I&&o(e)&&(e.longStack=y(e,n)),on(n));r<i;)rn(n,n[r++]);return n}function j(n,r){if(r===n&&r)return w(n,A,a(V)),n;if(r!==P&&(e(r)||t(r))){var o=c(k)(r);if(o===Y)return w(n,A,o.e),n;e(o)?(I&&v(r)&&(n._next=r),v(r)?b(n,r,o):tn.nextTick(function(){b(n,r,o)})):w(n,U,r)}else w(n,U,r);return n}function k(n){return n.then}function b(n,t,e){var r=c(e,t)(function(e){t&&(t=P,j(n,e))},function(e){t&&(t=P,w(n,A,e))});r===Y&&t&&(w(n,A,r.e),t=P)}var x,T,S,P=null,R="object"==typeof self,C=self,F=C.Promise,E=C.process,H=C.console,I=!0,L=Array,O=Error,A=1,U=2,$=3,q="Symbol",z="iterator",B="species",D=q+"("+B+")",G="return",J="_uh",K="_pt",M="_st",N="Invalid argument",Q="\nFrom previous ",V="Chaining cycle detected for promise",W="rejectionHandled",X="unhandledRejection",Y={e:P},Z=function(){},nn=/^.+\/node_modules\/yaku\/.+\n?/gm,tn=function(n){var r,o=this;if(!t(o)||o._s!==x)throw a("Invalid this");if(o._s=$,I&&(o[K]=l()),n!==Z){if(!e(n))throw a(N);r=c(n)(d(o,U),d(o,A)),r===Y&&w(o,A,r.e)}};tn.default=tn,function en(n,t){for(var e in t)n[e]=t[e]}(tn.prototype,{then:function(n,t){if(void 0===this._s)throw a();return p(this,_(tn.speciesConstructor(this,tn)),n,t)},catch:function(n){return this.then(x,n)},finally:function(n){return this.then(function(t){return tn.resolve(n()).then(function(){return t})},function(t){return tn.resolve(n()).then(function(){throw t})})},_c:0,_p:P}),tn.resolve=function(n){return v(n)?n:j(_(this),n)},tn.reject=function(n){return w(_(this),A,n)},tn.race=function(n){var t=this,e=_(t),r=function(n){w(e,U,n)},o=function(n){w(e,A,n)},i=c(s)(n,function(n){t.resolve(n).then(r,o)});return i===Y?t.reject(i.e):e},tn.all=function(n){function t(n){w(o,A,n)}var e,r=this,o=_(r),i=[];return(e=c(s)(n,function(n,u){r.resolve(n).then(function(n){i[u]=n,--e||w(o,U,i)},t)}))===Y?r.reject(e.e):(e||w(o,U,[]),o)},tn.Symbol=C[q]||{},c(function(){Object.defineProperty(tn,n(),{get:function(){return this}})})(),tn.speciesConstructor=function(t,e){var r=t.constructor;return r?r[n()]||e:e},tn.unhandledRejection=function(n,t){H&&H.error("Uncaught (in promise)",I?t.longStack:y(n,t))},tn.rejectionHandled=Z,tn.enableLongStackTrace=function(){I=!0},tn.nextTick=R?function(n){F?new F(function(n){n()}).then(n):setTimeout(n)}:E.nextTick,tn._s=1;var rn=f(999,function(n,t){var e,r;return(r=n._s!==A?t._onFulfilled:t._onRejected)===x?void w(t,n._s,n._v):(e=c(g)(r,n._v))===Y?void w(t,A,e.e):void j(t,e)}),on=f(9,function(n){m(n)||(n[J]=1,h(X,n))});Object.defineProperty(tn.prototype,tn.Symbol.toStringTag,{value:"Promise",writable:!1,enumerable:!1,configurable:!0}),C.Promise=tn}();})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
//POLYFILLS END HERE
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  var HEADLESS = 1;
  var HEADFUL = 0;
  var UNDEFINED = -1;

  /* This is a generic function that verify if the browswer is headless or not
   * @param name (string): name of the test (same as the id name for the row corresponding)
   *                         to the test in HTML)
   * @param testFunction (function): function that checks if the browser is headless or not
   *
   * OBS: the test function return 1 if it's headless, 0 if it's normal, or -1 if it's undefined
   *      and every test function calls a write result function to assign a brief description
   *      of the result
   */
  function testBrowser(_x, _x2) {
    return _testBrowser.apply(this, arguments);
  }
  function _testBrowser() {
    _testBrowser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, testFunction) {
      var row, resultBlock;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            row = document.getElementById(name);
            resultBlock = document.getElementById("".concat(name, "-result"));
            _context.next = 4;
            return testFunction(resultBlock);
          case 4:
            result = _context.sent;
            if (result == HEADLESS) row.classList.add("headless");else if (result == HEADFUL) row.classList.add("headful");else row.classList.add("undefined");
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _testBrowser.apply(this, arguments);
  }
  function writeToBlock(block, text) {
    block.innerHTML = text;
    generateComment(block.id, text);
  }

  // Test for user agent
  function testUserAgent(resultBlock) {
    var agent = navigator.userAgent;
    writeToBlock(resultBlock, agent);
    return /headless/i.test(agent);
  }

  // Test for app version (almost equal to user agent)
  function testAppVersion(resultBlock) {
    var appVersion = navigator.appVersion;
    writeToBlock(resultBlock, appVersion);
    return /headless/i.test(appVersion);
  }

  // Test for plugins
  function testPlugins(resultBlock) {
    var length = navigator.plugins.length;
    writeToBlock(resultBlock, "Detected ".concat(length, " plugins"));
    return length === 0 ? UNDEFINED : HEADFUL;
  }

  // Tests for plugins prototype
  function testPluginsPrototype(resultBlock) {
    var correctPrototypes = PluginArray.prototype === navigator.plugins.__proto__;
    if (navigator.plugins.length > 0) correctPrototypes &= Plugin.prototype === navigator.plugins[0].__proto__;
    writePluginsPrototypeResult(resultBlock, correctPrototypes);
    return correctPrototypes ? HEADFUL : HEADLESS;
  }
  function writePluginsPrototypeResult(resultBlock, correctPrototypes) {
    if (correctPrototypes) writeToBlock(resultBlock, "PluginArray and Plugin prototype are consistent");else writeToBlock(resultBlock, "PluginArray or Plugin prototype aren't consistent");
  }

  // Test for mime type
  function testMime(resultBlock) {
    var length = navigator.mimeTypes.length;
    writeToBlock(resultBlock, "Detected ".concat(length, " mime types"));
    return length === 0 ? UNDEFINED : HEADFUL;
  }

  // Tests for mime types prototype
  function testMimePrototype(resultBlock) {
    var correctPrototypes = MimeTypeArray.prototype === navigator.mimeTypes.__proto__;
    if (navigator.mimeTypes.length > 0) correctPrototypes &= MimeType.prototype === navigator.mimeTypes[0].__proto__;
    writeMimePrototypeResult(resultBlock, correctPrototypes);
    return correctPrototypes ? HEADFUL : HEADLESS;
  }
  function writeMimePrototypeResult(resultBlock, correctPrototypes) {
    if (correctPrototypes) writeToBlock(resultBlock, "MimeTypeArray and MimeType prototype are consistent");else writeToBlock(resultBlock, "MimeTypeArray or MimeType prototype aren't consistent");
  }
  function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }

  // Test for languages
  function testLanguages(resultBlock) {
    var language = navigator.language;
    // FIX for IE 11 where navigator.languages is undefined
    var languagesLength = navigator.languages ? navigator.languages.length : 0;
    writeToBlock(resultBlock, "Detected ".concat(languagesLength, " languages and using ").concat(language));
    if (isIE11()) {
      return HEADFUL;
    }
    if (!language || languagesLength === 0) return HEADLESS;
    return HEADFUL;
  }

  // Test for webdriver (headless browser has this flag true)
  function testWebdriver(resultBlock) {
    var webdriver = navigator.webdriver;
    webdriverWriteResult(resultBlock, webdriver);
    return webdriver ? HEADLESS : HEADFUL;
  }
  function webdriverWriteResult(resultBlock, webdriver) {
    if (webdriver) writeToBlock(resultBlock, "Webdriver present");else writeToBlock(resultBlock, "Missing webdriver");
  }

  // Test for time elapsed after alert(). If it's closed too fast (< 30ms), it means
  // the browser is headless
  function testTimeElapse(resultBlock) {
    var start = Date.now();
    alert("Press OK");
    var elapse = Date.now() - start;
    timeElapseWriteResult(resultBlock, elapse);
    return elapse < 30;
  }
  function timeElapseWriteResult(resultBlock, elapse) {
    var signal = elapse < 30 ? "<" : ">";
    writeToBlock(resultBlock, "Time elapsed to close alert: ".concat(elapse, " (").concat(signal, " 30)"));
  }

  // Test for chrome element (especific for google chrome browser)
  function testChrome(resultBlock) {
    var chrome = window.chrome;
    chromeWriteResult(resultBlock, chrome);
    return chrome ? HEADFUL : UNDEFINED;
  }
  function chromeWriteResult(resultBlock, chrome) {
    if (chrome) writeToBlock(resultBlock, "Chrome element present");else writeToBlock(resultBlock, "Chrome element not present");
  }

  // Test for permission
  function testPermission(_x3) {
    return _testPermission.apply(this, arguments);
  }
  function _testPermission() {
    _testPermission = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resultBlock) {
      var permissionStatus, notificationPermission;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (navigator.permissions) {
              _context2.next = 3;
              break;
            }
            permissionWriteResult(resultBlock, permissionStatus, notificationPermission);
            return _context2.abrupt("return", UNDEFINED);
          case 3:
            _context2.next = 5;
            return navigator.permissions.query({
              name: "notifications"
            });
          case 5:
            permissionStatus = _context2.sent;
            notificationPermission = Notification.permission;
            permissionWriteResult(resultBlock, permissionStatus, notificationPermission);
            if (!(notificationPermission === "denied" && permissionStatus.state === "prompt")) {
              _context2.next = 10;
              break;
            }
            return _context2.abrupt("return", HEADLESS);
          case 10:
            return _context2.abrupt("return", HEADFUL);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _testPermission.apply(this, arguments);
  }
  function permissionWriteResult(resultBlock, permissionStatus, notificationPermission) {
    if (permissionStatus && notificationPermission) {
      writeToBlock(resultBlock, "Permission stauts is \"".concat(permissionStatus.state, "\" and notification\n                              permission is \"").concat(notificationPermission, "\""));
    } else {
      writeToBlock(resultBlock, "Object navigator.permissions is undefined");
    }
  }

  // Test for devtools protocol
  function testDevtool(resultBlock) {
    var any = /./;
    var count = 0;
    var oldToString = any.toString;
    any.toString = function () {
      count++;
      return "any";
    };
    console.debug(any);
    var usingDevTools = count > 1;
    devtoolWriteResult(resultBlock, usingDevTools);
    any.toString = oldToString;
    return usingDevTools ? UNDEFINED : HEADFUL;
  }
  function devtoolWriteResult(resultBlock, usingDevTools) {
    if (usingDevTools) writeToBlock(resultBlock, "Using devtools protocol");else writeToBlock(resultBlock, "Not using devtools protocol");
  }

  // Test for broken image
  function testImage(resultBlock) {
    var div = document.createElement("div-image-result");
    var image = document.createElement("img");
    image.src = "fake_image.png";
    document.body.appendChild(div);
    div.appendChild(image);
    image.onerror = function () {
      resultBlock.parentElement.classList.remove("undefined");
      if (image.width === 0 && image.height === 0) resultBlock.parentElement.classList.add("headless");else resultBlock.parentElement.classList.add("headful");
      writeToBlock(resultBlock, "Broken image has width ".concat(image.width, " and height ").concat(image.height));
      document.body.removeChild(div);
    };
  }

  // Test for outerHeight and outerWidth
  function testOuter(resultBlock) {
    var outerHeight = window.outerHeight;
    var outerWidth = window.outerWidth;
    writeToBlock(resultBlock, "Outerheight: ".concat(outerHeight, " and outerwidth: ").concat(outerWidth));
    return outerHeight === 0 && outerWidth === 0 ? HEADLESS : HEADFUL;
  }

  // Test for connection-rtt
  function testConnectionRtt(resultBlock) {
    var connection = navigator.connection;
    var connectionRtt = connection ? connection.rtt : undefined;
    connectionRttWriteResult(resultBlock, connectionRtt);
    if (connectionRtt === undefined) {
      return UNDEFINED;
    } else {
      return connectionRtt === 0 ? HEADLESS : HEADFUL;
    }
  }
  function connectionRttWriteResult(resultBlock, connectionRtt) {
    if (connectionRtt === undefined) writeToBlock(resultBlock, "Connection-rtt not defined");else writeToBlock(resultBlock, "Connection-rtt: ".concat(connectionRtt));
  }

  // Test for mouse event (we're going to analyze attributes movementX and movementY)
  function testMouseMove(resultBlock) {
    var zeroMovement = true;
    var mouseEventCounter = 0;

    // set mousemove listener to body
    document.getElementsByTagName("body")[0].addEventListener("mousemove", mouseEvent);
    writeToBlock(resultBlock, "Move your mouse");
    function mouseEvent(event) {
      zeroMovement = zeroMovement && event.movementX === 0 && event.movementY === 0;

      // Analyze 50 mouse events until give result
      if (mouseEventCounter > 50) {
        document.getElementsByTagName("body")[0].removeEventListener("mousemove", mouseEvent);
        mouseMoveWriteResult(resultBlock, zeroMovement);
        resultBlock.parentElement.classList.remove("undefined");
        if (zeroMovement) resultBlock.parentElement.classList.add("headless");else resultBlock.parentElement.classList.add("headful");
      }
      mouseEventCounter++;
    }
  }
  function testFonts(resultBlock) {
    /**
     * JavaScript code to detect available availability of a
     * particular font in a browser using JavaScript and CSS.
     *
     * Author : Lalit Patel
     * Website: http://www.lalit.org/lab/javascript-css-font-detect/
     * License: Apache Software License 2.0
     *          http://www.apache.org/licenses/LICENSE-2.0
     * Version: 0.15 (21 Sep 2009)
     *          Changed comparision font to default from sans-default-default,
     *          as in FF3.0 font of child element didn't fallback
     *          to parent element if the font is missing.
     * Version: 0.2 (04 Mar 2012)
     *          Comparing font against all the 3 generic font families ie,
     *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
     *          then that font is 100% not available in the system
     * Version: 0.3 (24 Mar 2012)
     *          Replaced sans with serif in the list of baseFonts
     */

    /**
     * Usage: d = new Detector();
     *        d.detect('font name');
     */
    var Detector = function Detector() {
      // a font will be compared against all the three default fonts.
      // and if it doesn't match all 3 then that font is not available.
      var baseFonts = ['monospace', 'sans-serif', 'serif'];

      //we use m or w because these two characters take up the maximum width.
      // And we use a LLi so that the same matching fonts can get separated
      var testString = "mmmmmmmmmmlli";

      //we test using 72px font size, we may use any size. I guess larger the better.
      var testSize = '72px';
      var h = document.getElementsByTagName("body")[0];

      // create a SPAN in the document to get the width of the text we use to test
      var s = document.createElement("span");
      s.style.fontSize = testSize;
      s.innerHTML = testString;
      var defaultWidth = {};
      var defaultHeight = {};
      for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
      }
      function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
          s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
          h.appendChild(s);
          var matched = s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]];
          h.removeChild(s);
          detected = detected || matched;
        }
        return detected;
      }
      this.detect = detect;
    };
    var fontList = [
    // This is android-specific font from "Roboto" family
    'sans-serif-thin', 'ARNO PRO', 'Agency FB', 'Arabic Typesetting', 'Arial Unicode MS', 'AvantGarde Bk BT', 'BankGothic Md BT', 'Batang', 'Bitstream Vera Sans Mono', 'Calibri', 'Century', 'Century Gothic', 'Clarendon', 'EUROSTILE', 'Franklin Gothic', 'Futura Bk BT', 'Futura Md BT', 'GOTHAM', 'Gill Sans', 'HELV', 'Haettenschweiler', 'Helvetica Neue', 'Humanst521 BT', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'Lucida Bright', 'Lucida Sans', 'Menlo', 'MS Mincho', 'MS Outlook', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MYRIAD PRO', 'Marlett', 'Meiryo UI', 'Microsoft Uighur', 'Minion Pro', 'Monotype Corsiva', 'PMingLiU', 'Pristina', 'SCRIPTINA', 'Segoe UI Light', 'Serifa', 'SimHei', 'Small Fonts', 'Staccato222 BT', 'TRAJAN PRO', 'Univers CE 55 Medium', 'Vrinda', 'ZWAdobeF'];
    var detective = new Detector();
    //for (const font of fontList.filter(p => detective.detect(p) === true)) { console.log(''+font); }
    var matchedFonts = [];
    for (var i = 0; i < fontList.length; i++) {
      if (detective.detect(fontList[i])) {
        matchedFonts.push(fontList[i]);
      }
    }
    writeToBlock(resultBlock, "Detected fonts: ".concat(matchedFonts.join(', ')));
    return HEADFUL;
  }
  function mouseMoveWriteResult(resultBlock, zeroMovement) {
    if (zeroMovement) writeToBlock(resultBlock, "MovementX and movementY are 0 in every mouse event");else writeToBlock(resultBlock, "MovementX and movementY vary in mouse events");
  }

  /*
   *  Here is where we execute all the tests specified above
   */
  var tests = [{
    name: "User Agent",
    id: "user-agent",
    testFunction: testUserAgent
  }, {
    name: "App Version",
    id: "app-version",
    testFunction: testAppVersion
  }, {
    name: "Plugins",
    id: "plugins",
    testFunction: testPlugins
  }, {
    name: "Plugins Prototype",
    id: "plugins-prototype",
    testFunction: testPluginsPrototype
  }, {
    name: "Mime",
    id: "mime",
    testFunction: testMime
  }, {
    name: "Mime Prototype",
    id: "mime-prototype",
    testFunction: testMimePrototype
  }, {
    name: "Languages",
    id: "languages",
    testFunction: testLanguages
  }, {
    name: "Webdriver",
    id: "webdriver",
    testFunction: testWebdriver
  },
  //{ name: "Time Elapse",       id: "time-elapse",       testFunction: testTimeElapse       },
  {
    name: "Chrome",
    id: "chrome-element",
    testFunction: testChrome
  }, {
    name: "Permission",
    id: "permission",
    testFunction: testPermission
  }, {
    name: "Devtool Protocol",
    id: "devtool",
    testFunction: testDevtool
  }, {
    name: "Broken Image",
    id: "image",
    testFunction: testImage
  }, {
    name: "Outer dimensions",
    id: "outer",
    testFunction: testOuter
  }, {
    name: "Connection Rtt",
    id: "connection-rtt",
    testFunction: testConnectionRtt
  }, {
    name: "Mouse Move",
    id: "mouse-move",
    testFunction: testMouseMove
  }, {
    name: "Find Fonts",
    id: "find-fonts",
    testFunction: testFonts
  }];
  tests.forEach(function (test) {
    generateTableRow(test.name, test.id);
    testBrowser(test.id, test.testFunction, test.resultFunction);
  });
  function runTestsAndCollectResults() {
    return _runTestsAndCollectResults.apply(this, arguments);
  }
  /*(async function() {
   const results = await runTestsAndCollectResults(['time-elapse']);
   console.log("results:", results);  
  })();*/
  function _runTestsAndCollectResults() {
    _runTestsAndCollectResults = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var testsToSkip,
        overallResult,
        i,
        mappedResult,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            testsToSkip = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
            overallResult = [];
            throwawayBlock = document.createElement("div").appendChild(document.createElement("div"));
            i = 0;
          case 4:
            if (!(i < tests.length)) {
              _context3.next = 17;
              break;
            }
            if (!testsToSkip.includes(tests[i].id)) {
              _context3.next = 8;
              break;
            }
            console.log('Skipping test:', tests[i].name);
            return _context3.abrupt("continue", 14);
          case 8:
            _context3.next = 10;
            return tests[i].testFunction(throwawayBlock);
          case 10:
            result = _context3.sent;
            mappedResult = void 0;
            if (result == HEADLESS) mappedResult = "headless";else if (result == HEADFUL) mappedResult = "headful";else mappedResult = "unknown";
            overallResult.push({
              name: tests[i].name,
              result: mappedResult
            });
          case 14:
            i++;
            _context3.next = 4;
            break;
          case 17:
            return _context3.abrupt("return", overallResult);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _runTestsAndCollectResults.apply(this, arguments);
  }
  function generateComment(test, result) {
    if (/.*-result/.test(test)) {
      var comment = document.createComment("".concat(test, ": ").concat(result));
      document.body.appendChild(comment);
    }
  }

  // Generate a row for each test
  function generateTableRow(name, id) {
    var table = document.getElementsByTagName("table")[0];

    // Insert a test row and set its id
    var row = table.insertRow();
    row.id = id;

    // Insert the name and result cell to the row
    var nameBlock = row.insertCell();
    var resultBlock = row.insertCell();
    writeToBlock(nameBlock, name);
    resultBlock.id = "".concat(id, "-result");
  }
  var methods = {
    'runTestsAndCollectResults': runTestsAndCollectResults
  };
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = methods;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return methods;
      });
    } else {
      window.detectionUtils = methods;
    }
  }
})();