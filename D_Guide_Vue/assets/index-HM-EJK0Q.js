(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vs(e){const t=Object.create(null);for(const a of e.split(","))t[a]=1;return a=>a in t}const ve={},Yt=[],st=()=>{},ar=()=>!1,pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ms=e=>e.startsWith("onUpdate:"),Se=Object.assign,gs=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},Ji=Object.prototype.hasOwnProperty,de=(e,t)=>Ji.call(e,t),z=Array.isArray,Xt=e=>La(e)==="[object Map]",fn=e=>La(e)==="[object Set]",Os=e=>La(e)==="[object Date]",G=e=>typeof e=="function",xe=e=>typeof e=="string",ct=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",nr=e=>(me(e)||G(e))&&G(e.then)&&G(e.catch),sr=Object.prototype.toString,La=e=>sr.call(e),Yi=e=>La(e).slice(8,-1),or=e=>La(e)==="[object Object]",hs=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ga=vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=e=>{const t=Object.create(null);return(a=>t[a]||(t[a]=e(a)))},Xi=/-(\w)/g,We=vn(e=>e.replace(Xi,(t,a)=>a?a.toUpperCase():"")),Zi=/\B([A-Z])/g,jt=vn(e=>e.replace(Zi,"-$1").toLowerCase()),mn=vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tn=vn(e=>e?`on${mn(e)}`:""),Et=(e,t)=>!Object.is(e,t),Ga=(e,...t)=>{for(let a=0;a<e.length;a++)e[a](...t)},rr=(e,t,a,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:a})},Kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ec=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let Ds;const gn=()=>Ds||(Ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Va(e){if(z(e)){const t={};for(let a=0;a<e.length;a++){const n=e[a],s=xe(n)?sc(n):Va(n);if(s)for(const o in s)t[o]=s[o]}return t}else if(xe(e)||me(e))return e}const tc=/;(?![^(]*\))/g,ac=/:([^]+)/,nc=/\/\*[^]*?\*\//g;function sc(e){const t={};return e.replace(nc,"").split(tc).forEach(a=>{if(a){const n=a.split(ac);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ot(e){let t="";if(xe(e))t=e;else if(z(e))for(let a=0;a<e.length;a++){const n=ot(e[a]);n&&(t+=n+" ")}else if(me(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}function oc(e){if(!e)return null;let{class:t,style:a}=e;return t&&!xe(t)&&(e.class=ot(t)),a&&(e.style=Va(a)),e}const rc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ic=vs(rc);function ir(e){return!!e||e===""}function cc(e,t){if(e.length!==t.length)return!1;let a=!0;for(let n=0;a&&n<e.length;n++)a=hn(e[n],t[n]);return a}function hn(e,t){if(e===t)return!0;let a=Os(e),n=Os(t);if(a||n)return a&&n?e.getTime()===t.getTime():!1;if(a=ct(e),n=ct(t),a||n)return e===t;if(a=z(e),n=z(t),a||n)return a&&n?cc(e,t):!1;if(a=me(e),n=me(t),a||n){if(!a||!n)return!1;const s=Object.keys(e).length,o=Object.keys(t).length;if(s!==o)return!1;for(const r in e){const i=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(i&&!l||!i&&l||!hn(e[r],t[r]))return!1}}return String(e)===String(t)}function cr(e,t){return e.findIndex(a=>hn(a,t))}const lr=e=>!!(e&&e.__v_isRef===!0),T=e=>xe(e)?e:e==null?"":z(e)||me(e)&&(e.toString===sr||!G(e.toString))?lr(e)?T(e.value):JSON.stringify(e,dr,2):String(e),dr=(e,t)=>lr(t)?dr(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[n,s],o)=>(a[jn(n,o)+" =>"]=s,a),{})}:fn(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>jn(a))}:ct(t)?jn(t):me(t)&&!z(t)&&!or(t)?String(t):t,jn=(e,t="")=>{var a;return ct(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class ur{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].pause();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].resume();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].resume()}}run(t){if(this._active){const a=Oe;try{return Oe=this,t()}finally{Oe=a}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){this._on>0&&--this._on===0&&(Oe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let a,n;for(a=0,n=this.effects.length;a<n;a++)this.effects[a].stop();for(this.effects.length=0,a=0,n=this.cleanups.length;a<n;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,n=this.scopes.length;a<n;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lc(e){return new ur(e)}function dc(){return Oe}let ye;const Mn=new WeakSet;class pr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mn.has(this)&&(Mn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ns(this),mr(this);const t=ye,a=Ke;ye=this,Ke=!0;try{return this.fn()}finally{gr(this),ye=t,Ke=a,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Cs(t);this.deps=this.depsTail=void 0,Ns(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gn(this)&&this.run()}get dirty(){return Gn(this)}}let fr=0,ha,ba;function vr(e,t=!1){if(e.flags|=8,t){e.next=ba,ba=e;return}e.next=ha,ha=e}function bs(){fr++}function ys(){if(--fr>0)return;if(ba){let t=ba;for(ba=void 0;t;){const a=t.next;t.next=void 0,t.flags&=-9,t=a}}let e;for(;ha;){let t=ha;for(ha=void 0;t;){const a=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=a}}if(e)throw e}function mr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function gr(e){let t,a=e.depsTail,n=a;for(;n;){const s=n.prevDep;n.version===-1?(n===a&&(a=s),Cs(n),uc(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=a}function Gn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pa)||(e.globalVersion=Pa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gn(e))))return;e.flags|=2;const t=e.dep,a=ye,n=Ke;ye=e,Ke=!0;try{mr(e);const s=e.fn(e._value);(t.version===0||Et(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ye=a,Ke=n,gr(e),e.flags&=-3}}function Cs(e,t=!1){const{dep:a,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),a.subs===e&&(a.subs=n,!n&&a.computed)){a.computed.flags&=-5;for(let o=a.computed.deps;o;o=o.nextDep)Cs(o,!0)}!t&&!--a.sc&&a.map&&a.map.delete(a.key)}function uc(e){const{prevDep:t,nextDep:a}=e;t&&(t.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=t,e.nextDep=void 0)}let Ke=!0;const br=[];function ht(){br.push(Ke),Ke=!1}function bt(){const e=br.pop();Ke=e===void 0?!0:e}function Ns(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const a=ye;ye=void 0;try{t()}finally{ye=a}}}let Pa=0;class pc{constructor(t,a){this.sub=t,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!Ke||ye===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==ye)a=this.activeLink=new pc(ye,this),ye.deps?(a.prevDep=ye.depsTail,ye.depsTail.nextDep=a,ye.depsTail=a):ye.deps=ye.depsTail=a,yr(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const n=a.nextDep;n.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=n),a.prevDep=ye.depsTail,a.nextDep=void 0,ye.depsTail.nextDep=a,ye.depsTail=a,ye.deps===a&&(ye.deps=n)}return a}trigger(t){this.version++,Pa++,this.notify(t)}notify(t){bs();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{ys()}}}function yr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)yr(n)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const Jn=new WeakMap,Nt=Symbol(""),Yn=Symbol(""),qa=Symbol("");function qe(e,t,a){if(Ke&&ye){let n=Jn.get(e);n||Jn.set(e,n=new Map);let s=n.get(a);s||(n.set(a,s=new xs),s.map=n,s.key=a),s.track()}}function mt(e,t,a,n,s,o){const r=Jn.get(e);if(!r){Pa++;return}const i=l=>{l&&l.trigger()};if(bs(),t==="clear")r.forEach(i);else{const l=z(e),p=l&&hs(a);if(l&&a==="length"){const d=Number(n);r.forEach((f,u)=>{(u==="length"||u===qa||!ct(u)&&u>=d)&&i(f)})}else switch((a!==void 0||r.has(void 0))&&i(r.get(a)),p&&i(r.get(qa)),t){case"add":l?p&&i(r.get("length")):(i(r.get(Nt)),Xt(e)&&i(r.get(Yn)));break;case"delete":l||(i(r.get(Nt)),Xt(e)&&i(r.get(Yn)));break;case"set":Xt(e)&&i(r.get(Nt));break}}ys()}function Ft(e){const t=ie(e);return t===e?t:(qe(t,"iterate",qa),Qe(e)?t:t.map(ke))}function bn(e){return qe(e=ie(e),"iterate",qa),e}const fc={__proto__:null,[Symbol.iterator](){return $n(this,Symbol.iterator,ke)},concat(...e){return Ft(this).concat(...e.map(t=>z(t)?Ft(t):t))},entries(){return $n(this,"entries",e=>(e[1]=ke(e[1]),e))},every(e,t){return dt(this,"every",e,t,void 0,arguments)},filter(e,t){return dt(this,"filter",e,t,a=>a.map(ke),arguments)},find(e,t){return dt(this,"find",e,t,ke,arguments)},findIndex(e,t){return dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return dt(this,"findLast",e,t,ke,arguments)},findLastIndex(e,t){return dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return In(this,"includes",e)},indexOf(...e){return In(this,"indexOf",e)},join(e){return Ft(this).join(e)},lastIndexOf(...e){return In(this,"lastIndexOf",e)},map(e,t){return dt(this,"map",e,t,void 0,arguments)},pop(){return da(this,"pop")},push(...e){return da(this,"push",e)},reduce(e,...t){return Bs(this,"reduce",e,t)},reduceRight(e,...t){return Bs(this,"reduceRight",e,t)},shift(){return da(this,"shift")},some(e,t){return dt(this,"some",e,t,void 0,arguments)},splice(...e){return da(this,"splice",e)},toReversed(){return Ft(this).toReversed()},toSorted(e){return Ft(this).toSorted(e)},toSpliced(...e){return Ft(this).toSpliced(...e)},unshift(...e){return da(this,"unshift",e)},values(){return $n(this,"values",ke)}};function $n(e,t,a){const n=bn(e),s=n[t]();return n!==e&&!Qe(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=a(o.value)),o}),s}const vc=Array.prototype;function dt(e,t,a,n,s,o){const r=bn(e),i=r!==e&&!Qe(e),l=r[t];if(l!==vc[t]){const f=l.apply(e,o);return i?ke(f):f}let p=a;r!==e&&(i?p=function(f,u){return a.call(this,ke(f),u,e)}:a.length>2&&(p=function(f,u){return a.call(this,f,u,e)}));const d=l.call(r,p,n);return i&&s?s(d):d}function Bs(e,t,a,n){const s=bn(e);let o=a;return s!==e&&(Qe(e)?a.length>3&&(o=function(r,i,l){return a.call(this,r,i,l,e)}):o=function(r,i,l){return a.call(this,r,ke(i),l,e)}),s[t](o,...n)}function In(e,t,a){const n=ie(e);qe(n,"iterate",qa);const s=n[t](...a);return(s===-1||s===!1)&&ks(a[0])?(a[0]=ie(a[0]),n[t](...a)):s}function da(e,t,a=[]){ht(),bs();const n=ie(e)[t].apply(e,a);return ys(),bt(),n}const mc=vs("__proto__,__v_isRef,__isVue"),Cr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ct));function gc(e){ct(e)||(e=String(e));const t=ie(this);return qe(t,"has",e),t.hasOwnProperty(e)}class xr{constructor(t=!1,a=!1){this._isReadonly=t,this._isShallow=a}get(t,a,n){if(a==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return o;if(a==="__v_raw")return n===(s?o?Pc:wr:o?kr:Sr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const r=z(t);if(!s){let l;if(r&&(l=fc[a]))return l;if(a==="hasOwnProperty")return gc}const i=Reflect.get(t,a,Re(t)?t:n);return(ct(a)?Cr.has(a):mc(a))||(s||qe(t,"get",a),o)?i:Re(i)?r&&hs(a)?i:i.value:me(i)?s?qr(i):yt(i):i}}class _r extends xr{constructor(t=!1){super(!1,t)}set(t,a,n,s){let o=t[a];if(!this._isShallow){const l=Rt(o);if(!Qe(n)&&!Rt(n)&&(o=ie(o),n=ie(n)),!z(t)&&Re(o)&&!Re(n))return l||(o.value=n),!0}const r=z(t)&&hs(a)?Number(a)<t.length:de(t,a),i=Reflect.set(t,a,n,Re(t)?t:s);return t===ie(s)&&(r?Et(n,o)&&mt(t,"set",a,n):mt(t,"add",a,n)),i}deleteProperty(t,a){const n=de(t,a);t[a];const s=Reflect.deleteProperty(t,a);return s&&n&&mt(t,"delete",a,void 0),s}has(t,a){const n=Reflect.has(t,a);return(!ct(a)||!Cr.has(a))&&qe(t,"has",a),n}ownKeys(t){return qe(t,"iterate",z(t)?"length":Nt),Reflect.ownKeys(t)}}class hc extends xr{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const bc=new _r,yc=new hc,Cc=new _r(!0);const Xn=e=>e,Fa=e=>Reflect.getPrototypeOf(e);function xc(e,t,a){return function(...n){const s=this.__v_raw,o=ie(s),r=Xt(o),i=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,p=s[e](...n),d=a?Xn:t?en:ke;return!t&&qe(o,"iterate",l?Yn:Nt),{next(){const{value:f,done:u}=p.next();return u?{value:f,done:u}:{value:i?[d(f[0]),d(f[1])]:d(f),done:u}},[Symbol.iterator](){return this}}}}function Ha(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function _c(e,t){const a={get(s){const o=this.__v_raw,r=ie(o),i=ie(s);e||(Et(s,i)&&qe(r,"get",s),qe(r,"get",i));const{has:l}=Fa(r),p=t?Xn:e?en:ke;if(l.call(r,s))return p(o.get(s));if(l.call(r,i))return p(o.get(i));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&qe(ie(s),"iterate",Nt),s.size},has(s){const o=this.__v_raw,r=ie(o),i=ie(s);return e||(Et(s,i)&&qe(r,"has",s),qe(r,"has",i)),s===i?o.has(s):o.has(s)||o.has(i)},forEach(s,o){const r=this,i=r.__v_raw,l=ie(i),p=t?Xn:e?en:ke;return!e&&qe(l,"iterate",Nt),i.forEach((d,f)=>s.call(o,p(d),p(f),r))}};return Se(a,e?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(s){!t&&!Qe(s)&&!Rt(s)&&(s=ie(s));const o=ie(this);return Fa(o).has.call(o,s)||(o.add(s),mt(o,"add",s,s)),this},set(s,o){!t&&!Qe(o)&&!Rt(o)&&(o=ie(o));const r=ie(this),{has:i,get:l}=Fa(r);let p=i.call(r,s);p||(s=ie(s),p=i.call(r,s));const d=l.call(r,s);return r.set(s,o),p?Et(o,d)&&mt(r,"set",s,o):mt(r,"add",s,o),this},delete(s){const o=ie(this),{has:r,get:i}=Fa(o);let l=r.call(o,s);l||(s=ie(s),l=r.call(o,s)),i&&i.call(o,s);const p=o.delete(s);return l&&mt(o,"delete",s,void 0),p},clear(){const s=ie(this),o=s.size!==0,r=s.clear();return o&&mt(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{a[s]=xc(s,e,t)}),a}function _s(e,t){const a=_c(e,t);return(n,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(de(a,s)&&s in n?a:n,s,o)}const Sc={get:_s(!1,!1)},kc={get:_s(!1,!0)},wc={get:_s(!0,!1)};const Sr=new WeakMap,kr=new WeakMap,wr=new WeakMap,Pc=new WeakMap;function qc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ec(e){return e.__v_skip||!Object.isExtensible(e)?0:qc(Yi(e))}function yt(e){return Rt(e)?e:Ss(e,!1,bc,Sc,Sr)}function Pr(e){return Ss(e,!1,Cc,kc,kr)}function qr(e){return Ss(e,!0,yc,wc,wr)}function Ss(e,t,a,n,s){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Ec(e);if(o===0)return e;const r=s.get(e);if(r)return r;const i=new Proxy(e,o===2?n:a);return s.set(e,i),i}function Zt(e){return Rt(e)?Zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Qe(e){return!!(e&&e.__v_isShallow)}function ks(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function yn(e){return!de(e,"__v_skip")&&Object.isExtensible(e)&&rr(e,"__v_skip",!0),e}const ke=e=>me(e)?yt(e):e,en=e=>me(e)?qr(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function U(e){return Er(e,!1)}function Ac(e){return Er(e,!0)}function Er(e,t){return Re(e)?e:new Rc(e,t)}class Rc{constructor(t,a){this.dep=new xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?t:ie(t),this._value=a?t:ke(t),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(t){const a=this._rawValue,n=this.__v_isShallow||Qe(t)||Rt(t);t=n?t:ie(t),Et(t,a)&&(this._rawValue=t,this._value=n?t:ke(t),this.dep.trigger())}}function ea(e){return Re(e)?e.value:e}const Tc={get:(e,t,a)=>t==="__v_raw"?e:ea(Reflect.get(e,t,a)),set:(e,t,a,n)=>{const s=e[t];return Re(s)&&!Re(a)?(s.value=a,!0):Reflect.set(e,t,a,n)}};function Ar(e){return Zt(e)?e:new Proxy(e,Tc)}class jc{constructor(t,a,n){this.fn=t,this.setter=a,this._value=void 0,this.dep=new xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return vr(this,!0),!0}get value(){const t=this.dep.track();return hr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Mc(e,t,a=!1){let n,s;return G(e)?n=e:(n=e.get,s=e.set),new jc(n,s,a)}const Qa={},tn=new WeakMap;let Vt;function $c(e,t=!1,a=Vt){if(a){let n=tn.get(a);n||tn.set(a,n=[]),n.push(e)}}function Ic(e,t,a=ve){const{immediate:n,deep:s,once:o,scheduler:r,augmentJob:i,call:l}=a,p=b=>s?b:Qe(b)||s===!1||s===0?gt(b,1):gt(b);let d,f,u,v,h=!1,S=!1;if(Re(e)?(f=()=>e.value,h=Qe(e)):Zt(e)?(f=()=>p(e),h=!0):z(e)?(S=!0,h=e.some(b=>Zt(b)||Qe(b)),f=()=>e.map(b=>{if(Re(b))return b.value;if(Zt(b))return p(b);if(G(b))return l?l(b,2):b()})):G(e)?t?f=l?()=>l(e,2):e:f=()=>{if(u){ht();try{u()}finally{bt()}}const b=Vt;Vt=d;try{return l?l(e,3,[v]):e(v)}finally{Vt=b}}:f=st,t&&s){const b=f,P=s===!0?1/0:s;f=()=>gt(b(),P)}const q=dc(),j=()=>{d.stop(),q&&q.active&&gs(q.effects,d)};if(o&&t){const b=t;t=(...P)=>{b(...P),j()}}let M=S?new Array(e.length).fill(Qa):Qa;const A=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(t){const P=d.run();if(s||h||(S?P.some((K,J)=>Et(K,M[J])):Et(P,M))){u&&u();const K=Vt;Vt=d;try{const J=[P,M===Qa?void 0:S&&M[0]===Qa?[]:M,v];M=P,l?l(t,3,J):t(...J)}finally{Vt=K}}}else d.run()};return i&&i(A),d=new pr(f),d.scheduler=r?()=>r(A,!1):A,v=b=>$c(b,!1,d),u=d.onStop=()=>{const b=tn.get(d);if(b){if(l)l(b,4);else for(const P of b)P();tn.delete(d)}},t?n?A(!0):M=d.run():r?r(A.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function gt(e,t=1/0,a){if(t<=0||!me(e)||e.__v_skip||(a=a||new Set,a.has(e)))return e;if(a.add(e),t--,Re(e))gt(e.value,t,a);else if(z(e))for(let n=0;n<e.length;n++)gt(e[n],t,a);else if(fn(e)||Xt(e))e.forEach(n=>{gt(n,t,a)});else if(or(e)){for(const n in e)gt(e[n],t,a);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&gt(e[n],t,a)}return e}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oa(e,t,a,n){try{return n?e(...n):e()}catch(s){Cn(s,t,a)}}function Ge(e,t,a,n){if(G(e)){const s=Oa(e,t,a,n);return s&&nr(s)&&s.catch(o=>{Cn(o,t,a)}),s}if(z(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Ge(e[o],t,a,n));return s}}function Cn(e,t,a,n=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||ve;if(t){let i=t.parent;const l=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const d=i.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,l,p)===!1)return}i=i.parent}if(o){ht(),Oa(o,null,10,[e,l,p]),bt();return}}Lc(e,a,s,n,r)}function Lc(e,t,a,n=!0,s=!1){if(s)throw e;console.error(e)}const Me=[];let at=-1;const ta=[];let kt=null,Gt=0;const Rr=Promise.resolve();let an=null;function Tr(e){const t=an||Rr;return e?t.then(this?e.bind(this):e):t}function Vc(e){let t=at+1,a=Me.length;for(;t<a;){const n=t+a>>>1,s=Me[n],o=Ea(s);o<e||o===e&&s.flags&2?t=n+1:a=n}return t}function ws(e){if(!(e.flags&1)){const t=Ea(e),a=Me[Me.length-1];!a||!(e.flags&2)&&t>=Ea(a)?Me.push(e):Me.splice(Vc(t),0,e),e.flags|=1,jr()}}function jr(){an||(an=Rr.then($r))}function Oc(e){z(e)?ta.push(...e):kt&&e.id===-1?kt.splice(Gt+1,0,e):e.flags&1||(ta.push(e),e.flags|=1),jr()}function Us(e,t,a=at+1){for(;a<Me.length;a++){const n=Me[a];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Me.splice(a,1),a--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Mr(e){if(ta.length){const t=[...new Set(ta)].sort((a,n)=>Ea(a)-Ea(n));if(ta.length=0,kt){kt.push(...t);return}for(kt=t,Gt=0;Gt<kt.length;Gt++){const a=kt[Gt];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}kt=null,Gt=0}}const Ea=e=>e.id==null?e.flags&2?-1:1/0:e.id;function $r(e){try{for(at=0;at<Me.length;at++){const t=Me[at];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Oa(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;at<Me.length;at++){const t=Me[at];t&&(t.flags&=-2)}at=-1,Me.length=0,Mr(),an=null,(Me.length||ta.length)&&$r()}}let Be=null,Ir=null;function nn(e){const t=Be;return Be=e,Ir=e&&e.type.__scopeId||null,t}function At(e,t=Be,a){if(!t||e._n)return e;const n=(...s)=>{n._d&&on(-1);const o=nn(t);let r;try{r=e(...s)}finally{nn(o),n._d&&on(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function _e(e,t){if(Be===null)return e;const a=Pn(Be),n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,i,l=ve]=t[s];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&gt(r),n.push({dir:o,instance:a,value:r,oldValue:void 0,arg:i,modifiers:l}))}return e}function Mt(e,t,a,n){const s=e.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const i=s[r];o&&(i.oldValue=o[r].value);let l=i.dir[n];l&&(ht(),Ge(l,a,8,[e.el,i,e,t]),bt())}}const Dc=Symbol("_vte"),Lr=e=>e.__isTeleport,vt=Symbol("_leaveCb"),Wa=Symbol("_enterCb");function Nc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Da(()=>{e.isMounted=!0}),Sn(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],Vr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},Or=e=>{const t=e.subTree;return t.component?Or(t.component):t},Bc={name:"BaseTransition",props:Vr,setup(e,{slots:t}){const a=Na(),n=Nc();return()=>{const s=t.default&&Br(t.default(),!0);if(!s||!s.length)return;const o=Dr(s),r=ie(e),{mode:i}=r;if(n.isLeaving)return Ln(o);const l=zs(o);if(!l)return Ln(o);let p=Zn(l,r,n,a,f=>p=f);l.type!==$e&&Aa(l,p);let d=a.subTree&&zs(a.subTree);if(d&&d.type!==$e&&!Ot(l,d)&&Or(a).type!==$e){let f=Zn(d,r,n,a);if(Aa(d,f),i==="out-in"&&l.type!==$e)return n.isLeaving=!0,f.afterLeave=()=>{n.isLeaving=!1,a.job.flags&8||a.update(),delete f.afterLeave,d=void 0},Ln(o);i==="in-out"&&l.type!==$e?f.delayLeave=(u,v,h)=>{const S=Nr(n,d);S[String(d.key)]=d,u[vt]=()=>{v(),u[vt]=void 0,delete p.delayedLeave,d=void 0},p.delayedLeave=()=>{h(),delete p.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Dr(e){let t=e[0];if(e.length>1){for(const a of e)if(a.type!==$e){t=a;break}}return t}const Uc=Bc;function Nr(e,t){const{leavingVNodes:a}=e;let n=a.get(t.type);return n||(n=Object.create(null),a.set(t.type,n)),n}function Zn(e,t,a,n,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:p,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:u,onLeave:v,onAfterLeave:h,onLeaveCancelled:S,onBeforeAppear:q,onAppear:j,onAfterAppear:M,onAppearCancelled:A}=t,b=String(e.key),P=Nr(a,e),K=(F,ae)=>{F&&Ge(F,n,9,ae)},J=(F,ae)=>{const te=ae[1];K(F,ae),z(F)?F.every(V=>V.length<=1)&&te():F.length<=1&&te()},ge={mode:r,persisted:i,beforeEnter(F){let ae=l;if(!a.isMounted)if(o)ae=q||l;else return;F[vt]&&F[vt](!0);const te=P[b];te&&Ot(e,te)&&te.el[vt]&&te.el[vt](),K(ae,[F])},enter(F){let ae=p,te=d,V=f;if(!a.isMounted)if(o)ae=j||p,te=M||d,V=A||f;else return;let ne=!1;const O=F[Wa]=se=>{ne||(ne=!0,se?K(V,[F]):K(te,[F]),ge.delayedLeave&&ge.delayedLeave(),F[Wa]=void 0)};ae?J(ae,[F,O]):O()},leave(F,ae){const te=String(e.key);if(F[Wa]&&F[Wa](!0),a.isUnmounting)return ae();K(u,[F]);let V=!1;const ne=F[vt]=O=>{V||(V=!0,ae(),O?K(S,[F]):K(h,[F]),F[vt]=void 0,P[te]===e&&delete P[te])};P[te]=e,v?J(v,[F,ne]):ne()},clone(F){const ae=Zn(F,t,a,n,s);return s&&s(ae),ae}};return ge}function Ln(e){if(xn(e))return e=Tt(e),e.children=null,e}function zs(e){if(!xn(e))return Lr(e.type)&&e.children?Dr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:a}=e;if(a){if(t&16)return a[0];if(t&32&&G(a.default))return a.default()}}function Aa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Aa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Br(e,t=!1,a){let n=[],s=0;for(let o=0;o<e.length;o++){let r=e[o];const i=a==null?r.key:String(a)+String(r.key!=null?r.key:o);r.type===Ee?(r.patchFlag&128&&s++,n=n.concat(Br(r.children,t,i))):(t||r.type!==$e)&&n.push(i!=null?Tt(r,{key:i}):r)}if(s>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Ps(e,t){return G(e)?Se({name:e.name},t,{setup:e}):e}function Ur(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ya(e,t,a,n,s=!1){if(z(e)){e.forEach((h,S)=>ya(h,t&&(z(t)?t[S]:t),a,n,s));return}if(Ca(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&ya(e,t,a,n.component.subTree);return}const o=n.shapeFlag&4?Pn(n.component):n.el,r=s?null:o,{i,r:l}=e,p=t&&t.r,d=i.refs===ve?i.refs={}:i.refs,f=i.setupState,u=ie(f),v=f===ve?ar:h=>de(u,h);if(p!=null&&p!==l){if(xe(p))d[p]=null,v(p)&&(f[p]=null);else if(Re(p)){p.value=null;const h=t;h.k&&(d[h.k]=null)}}if(G(l))Oa(l,i,12,[r,d]);else{const h=xe(l),S=Re(l);if(h||S){const q=()=>{if(e.f){const j=h?v(l)?f[l]:d[l]:l.value;if(s)z(j)&&gs(j,o);else if(z(j))j.includes(o)||j.push(o);else if(h)d[l]=[o],v(l)&&(f[l]=d[l]);else{const M=[o];l.value=M,e.k&&(d[e.k]=M)}}else h?(d[l]=r,v(l)&&(f[l]=r)):S&&(l.value=r,e.k&&(d[e.k]=r))};r?(q.id=-1,Ne(q,a)):q()}}}gn().requestIdleCallback;gn().cancelIdleCallback;const Ca=e=>!!e.type.__asyncLoader,xn=e=>e.type.__isKeepAlive;function zr(e,t){Hr(e,"a",t)}function Fr(e,t){Hr(e,"da",t)}function Hr(e,t,a=Ae){const n=e.__wdc||(e.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(_n(t,n,a),a){let s=a.parent;for(;s&&s.parent;)xn(s.parent.vnode)&&zc(n,t,a,s),s=s.parent}}function zc(e,t,a,n){const s=_n(t,e,n,!0);qs(()=>{gs(n[t],s)},a)}function _n(e,t,a=Ae,n=!1){if(a){const s=a[e]||(a[e]=[]),o=t.__weh||(t.__weh=(...r)=>{ht();const i=Ba(a),l=Ge(t,a,e,r);return i(),bt(),l});return n?s.unshift(o):s.push(o),o}}const Ct=e=>(t,a=Ae)=>{(!Ta||e==="sp")&&_n(e,(...n)=>t(...n),a)},Qr=Ct("bm"),Da=Ct("m"),Wr=Ct("bu"),Kr=Ct("u"),Sn=Ct("bum"),qs=Ct("um"),Fc=Ct("sp"),Hc=Ct("rtg"),Qc=Ct("rtc");function Wc(e,t=Ae){_n("ec",e,t)}const Gr="components";function oa(e,t){return Yr(Gr,e,!0,t)||e}const Jr=Symbol.for("v-ndc");function Kc(e){return xe(e)?Yr(Gr,e,!1)||e:e||Jr}function Yr(e,t,a=!0,n=!1){const s=Be||Ae;if(s){const o=s.type;{const i=Ml(o,!1);if(i&&(i===t||i===We(t)||i===mn(We(t))))return o}const r=Fs(s[e]||o[e],t)||Fs(s.appContext[e],t);return!r&&n?o:r}}function Fs(e,t){return e&&(e[t]||e[We(t)]||e[mn(We(t))])}function ca(e,t,a,n){let s;const o=a,r=z(e);if(r||xe(e)){const i=r&&Zt(e);let l=!1,p=!1;i&&(l=!Qe(e),p=Rt(e),e=bn(e)),s=new Array(e.length);for(let d=0,f=e.length;d<f;d++)s[d]=t(l?p?en(ke(e[d])):ke(e[d]):e[d],d,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,o)}else if(me(e))if(e[Symbol.iterator])s=Array.from(e,(i,l)=>t(i,l,void 0,o));else{const i=Object.keys(e);s=new Array(i.length);for(let l=0,p=i.length;l<p;l++){const d=i[l];s[l]=t(e[d],d,l,o)}}else s=[];return s}const es=e=>e?bi(e)?Pn(e):es(e.parent):null,xa=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Zr(e),$forceUpdate:e=>e.f||(e.f=()=>{ws(e.update)}),$nextTick:e=>e.n||(e.n=Tr.bind(e.proxy)),$watch:e=>ml.bind(e)}),Vn=(e,t)=>e!==ve&&!e.__isScriptSetup&&de(e,t),Gc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:a,setupState:n,data:s,props:o,accessCache:r,type:i,appContext:l}=e;let p;if(t[0]!=="$"){const v=r[t];if(v!==void 0)switch(v){case 1:return n[t];case 2:return s[t];case 4:return a[t];case 3:return o[t]}else{if(Vn(n,t))return r[t]=1,n[t];if(s!==ve&&de(s,t))return r[t]=2,s[t];if((p=e.propsOptions[0])&&de(p,t))return r[t]=3,o[t];if(a!==ve&&de(a,t))return r[t]=4,a[t];ts&&(r[t]=0)}}const d=xa[t];let f,u;if(d)return t==="$attrs"&&qe(e.attrs,"get",""),d(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(a!==ve&&de(a,t))return r[t]=4,a[t];if(u=l.config.globalProperties,de(u,t))return u[t]},set({_:e},t,a){const{data:n,setupState:s,ctx:o}=e;return Vn(s,t)?(s[t]=a,!0):n!==ve&&de(n,t)?(n[t]=a,!0):de(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:n,appContext:s,propsOptions:o,type:r}},i){let l,p;return!!(a[i]||e!==ve&&i[0]!=="$"&&de(e,i)||Vn(t,i)||(l=o[0])&&de(l,i)||de(n,i)||de(xa,i)||de(s.config.globalProperties,i)||(p=r.__cssModules)&&p[i])},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:de(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};function Hs(e){return z(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}let ts=!0;function Jc(e){const t=Zr(e),a=e.proxy,n=e.ctx;ts=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:i,provide:l,inject:p,created:d,beforeMount:f,mounted:u,beforeUpdate:v,updated:h,activated:S,deactivated:q,beforeDestroy:j,beforeUnmount:M,destroyed:A,unmounted:b,render:P,renderTracked:K,renderTriggered:J,errorCaptured:ge,serverPrefetch:F,expose:ae,inheritAttrs:te,components:V,directives:ne,filters:O}=t;if(p&&Yc(p,n,null),r)for(const pe in r){const ce=r[pe];G(ce)&&(n[pe]=ce.bind(a))}if(s){const pe=s.call(a,a);me(pe)&&(e.data=yt(pe))}if(ts=!0,o)for(const pe in o){const ce=o[pe],lt=G(ce)?ce.bind(a,a):G(ce.get)?ce.get.bind(a,a):st,xt=!G(ce)&&G(ce.set)?ce.set.bind(a):st,Ye=Q({get:lt,set:xt});Object.defineProperty(n,pe,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ie=>Ye.value=Ie})}if(i)for(const pe in i)Xr(i[pe],n,a,pe);if(l){const pe=G(l)?l.call(a):l;Reflect.ownKeys(pe).forEach(ce=>{Ja(ce,pe[ce])})}d&&Qs(d,e,"c");function he(pe,ce){z(ce)?ce.forEach(lt=>pe(lt.bind(a))):ce&&pe(ce.bind(a))}if(he(Qr,f),he(Da,u),he(Wr,v),he(Kr,h),he(zr,S),he(Fr,q),he(Wc,ge),he(Qc,K),he(Hc,J),he(Sn,M),he(qs,b),he(Fc,F),z(ae))if(ae.length){const pe=e.exposed||(e.exposed={});ae.forEach(ce=>{Object.defineProperty(pe,ce,{get:()=>a[ce],set:lt=>a[ce]=lt,enumerable:!0})})}else e.exposed||(e.exposed={});P&&e.render===st&&(e.render=P),te!=null&&(e.inheritAttrs=te),V&&(e.components=V),ne&&(e.directives=ne),F&&Ur(e)}function Yc(e,t,a=st){z(e)&&(e=as(e));for(const n in e){const s=e[n];let o;me(s)?"default"in s?o=rt(s.from||n,s.default,!0):o=rt(s.from||n):o=rt(s),Re(o)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[n]=o}}function Qs(e,t,a){Ge(z(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,a)}function Xr(e,t,a,n){let s=n.includes(".")?pi(a,n):()=>a[n];if(xe(e)){const o=t[e];G(o)&&_a(s,o)}else if(G(e))_a(s,e.bind(a));else if(me(e))if(z(e))e.forEach(o=>Xr(o,t,a,n));else{const o=G(e.handler)?e.handler.bind(a):t[e.handler];G(o)&&_a(s,o,e)}}function Zr(e){const t=e.type,{mixins:a,extends:n}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,i=o.get(t);let l;return i?l=i:!s.length&&!a&&!n?l=t:(l={},s.length&&s.forEach(p=>sn(l,p,r,!0)),sn(l,t,r)),me(t)&&o.set(t,l),l}function sn(e,t,a,n=!1){const{mixins:s,extends:o}=t;o&&sn(e,o,a,!0),s&&s.forEach(r=>sn(e,r,a,!0));for(const r in t)if(!(n&&r==="expose")){const i=Xc[r]||a&&a[r];e[r]=i?i(e[r],t[r]):t[r]}return e}const Xc={data:Ws,props:Ks,emits:Ks,methods:va,computed:va,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:va,directives:va,watch:el,provide:Ws,inject:Zc};function Ws(e,t){return t?e?function(){return Se(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Zc(e,t){return va(as(e),as(t))}function as(e){if(z(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function va(e,t){return e?Se(Object.create(null),e,t):t}function Ks(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:Se(Object.create(null),Hs(e),Hs(t??{})):t}function el(e,t){if(!e)return t;if(!t)return e;const a=Se(Object.create(null),e);for(const n in t)a[n]=Te(e[n],t[n]);return a}function ei(){return{app:null,config:{isNativeTag:ar,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tl=0;function al(e,t){return function(n,s=null){G(n)||(n=Se({},n)),s!=null&&!me(s)&&(s=null);const o=ei(),r=new WeakSet,i=[];let l=!1;const p=o.app={_uid:tl++,_component:n,_props:s,_container:null,_context:o,_instance:null,version:Il,get config(){return o.config},set config(d){},use(d,...f){return r.has(d)||(d&&G(d.install)?(r.add(d),d.install(p,...f)):G(d)&&(r.add(d),d(p,...f))),p},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),p},component(d,f){return f?(o.components[d]=f,p):o.components[d]},directive(d,f){return f?(o.directives[d]=f,p):o.directives[d]},mount(d,f,u){if(!l){const v=p._ceVNode||re(n,s);return v.appContext=o,u===!0?u="svg":u===!1&&(u=void 0),e(v,d,u),l=!0,p._container=d,d.__vue_app__=p,Pn(v.component)}},onUnmount(d){i.push(d)},unmount(){l&&(Ge(i,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,f){return o.provides[d]=f,p},runWithContext(d){const f=aa;aa=p;try{return d()}finally{aa=f}}};return p}}let aa=null;function Ja(e,t){if(Ae){let a=Ae.provides;const n=Ae.parent&&Ae.parent.provides;n===a&&(a=Ae.provides=Object.create(n)),a[e]=t}}function rt(e,t,a=!1){const n=Na();if(n||aa){let s=aa?aa._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return a&&G(t)?t.call(n&&n.proxy):t}}const ti={},ai=()=>Object.create(ti),ni=e=>Object.getPrototypeOf(e)===ti;function nl(e,t,a,n=!1){const s={},o=ai();e.propsDefaults=Object.create(null),si(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);a?e.props=n?s:Pr(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function sl(e,t,a,n){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,i=ie(s),[l]=e.propsOptions;let p=!1;if((n||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let u=d[f];if(kn(e.emitsOptions,u))continue;const v=t[u];if(l)if(de(o,u))v!==o[u]&&(o[u]=v,p=!0);else{const h=We(u);s[h]=ns(l,i,h,v,e,!1)}else v!==o[u]&&(o[u]=v,p=!0)}}}else{si(e,t,s,o)&&(p=!0);let d;for(const f in i)(!t||!de(t,f)&&((d=jt(f))===f||!de(t,d)))&&(l?a&&(a[f]!==void 0||a[d]!==void 0)&&(s[f]=ns(l,i,f,void 0,e,!0)):delete s[f]);if(o!==i)for(const f in o)(!t||!de(t,f))&&(delete o[f],p=!0)}p&&mt(e.attrs,"set","")}function si(e,t,a,n){const[s,o]=e.propsOptions;let r=!1,i;if(t)for(let l in t){if(ga(l))continue;const p=t[l];let d;s&&de(s,d=We(l))?!o||!o.includes(d)?a[d]=p:(i||(i={}))[d]=p:kn(e.emitsOptions,l)||(!(l in n)||p!==n[l])&&(n[l]=p,r=!0)}if(o){const l=ie(a),p=i||ve;for(let d=0;d<o.length;d++){const f=o[d];a[f]=ns(s,l,f,p[f],e,!de(p,f))}}return r}function ns(e,t,a,n,s,o){const r=e[a];if(r!=null){const i=de(r,"default");if(i&&n===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&G(l)){const{propsDefaults:p}=s;if(a in p)n=p[a];else{const d=Ba(s);n=p[a]=l.call(null,t),d()}}else n=l;s.ce&&s.ce._setProp(a,n)}r[0]&&(o&&!i?n=!1:r[1]&&(n===""||n===jt(a))&&(n=!0))}return n}const ol=new WeakMap;function oi(e,t,a=!1){const n=a?ol:t.propsCache,s=n.get(e);if(s)return s;const o=e.props,r={},i=[];let l=!1;if(!G(e)){const d=f=>{l=!0;const[u,v]=oi(f,t,!0);Se(r,u),v&&i.push(...v)};!a&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return me(e)&&n.set(e,Yt),Yt;if(z(o))for(let d=0;d<o.length;d++){const f=We(o[d]);Gs(f)&&(r[f]=ve)}else if(o)for(const d in o){const f=We(d);if(Gs(f)){const u=o[d],v=r[f]=z(u)||G(u)?{type:u}:Se({},u),h=v.type;let S=!1,q=!0;if(z(h))for(let j=0;j<h.length;++j){const M=h[j],A=G(M)&&M.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(q=!1)}else S=G(h)&&h.name==="Boolean";v[0]=S,v[1]=q,(S||de(v,"default"))&&i.push(f)}}const p=[r,i];return me(e)&&n.set(e,p),p}function Gs(e){return e[0]!=="$"&&!ga(e)}const Es=e=>e==="_"||e==="_ctx"||e==="$stable",As=e=>z(e)?e.map(nt):[nt(e)],rl=(e,t,a)=>{if(t._n)return t;const n=At((...s)=>As(t(...s)),a);return n._c=!1,n},ri=(e,t,a)=>{const n=e._ctx;for(const s in e){if(Es(s))continue;const o=e[s];if(G(o))t[s]=rl(s,o,n);else if(o!=null){const r=As(o);t[s]=()=>r}}},ii=(e,t)=>{const a=As(t);e.slots.default=()=>a},ci=(e,t,a)=>{for(const n in t)(a||!Es(n))&&(e[n]=t[n])},il=(e,t,a)=>{const n=e.slots=ai();if(e.vnode.shapeFlag&32){const s=t._;s?(ci(n,t,a),a&&rr(n,"_",s,!0)):ri(t,n)}else t&&ii(e,t)},cl=(e,t,a)=>{const{vnode:n,slots:s}=e;let o=!0,r=ve;if(n.shapeFlag&32){const i=t._;i?a&&i===1?o=!1:ci(s,t,a):(o=!t.$stable,ri(t,s)),r=t}else t&&(ii(e,t),r={default:1});if(o)for(const i in s)!Es(i)&&r[i]==null&&delete s[i]},Ne=_l;function ll(e){return dl(e)}function dl(e,t){const a=gn();a.__VUE__=!0;const{insert:n,remove:s,patchProp:o,createElement:r,createText:i,createComment:l,setText:p,setElementText:d,parentNode:f,nextSibling:u,setScopeId:v=st,insertStaticContent:h}=e,S=(m,g,y,x=null,k=null,C=null,$=void 0,R=null,E=!!g.dynamicChildren)=>{if(m===g)return;m&&!Ot(m,g)&&(x=_(m),Ie(m,k,C,!0),m=null),g.patchFlag===-2&&(E=!1,g.dynamicChildren=null);const{type:w,ref:H,shapeFlag:L}=g;switch(w){case wn:q(m,g,y,x);break;case $e:j(m,g,y,x);break;case Ya:m==null&&M(g,y,x,$);break;case Ee:V(m,g,y,x,k,C,$,R,E);break;default:L&1?P(m,g,y,x,k,C,$,R,E):L&6?ne(m,g,y,x,k,C,$,R,E):(L&64||L&128)&&w.process(m,g,y,x,k,C,$,R,E,N)}H!=null&&k?ya(H,m&&m.ref,C,g||m,!g):H==null&&m&&m.ref!=null&&ya(m.ref,null,C,m,!0)},q=(m,g,y,x)=>{if(m==null)n(g.el=i(g.children),y,x);else{const k=g.el=m.el;g.children!==m.children&&p(k,g.children)}},j=(m,g,y,x)=>{m==null?n(g.el=l(g.children||""),y,x):g.el=m.el},M=(m,g,y,x)=>{[m.el,m.anchor]=h(m.children,g,y,x,m.el,m.anchor)},A=({el:m,anchor:g},y,x)=>{let k;for(;m&&m!==g;)k=u(m),n(m,y,x),m=k;n(g,y,x)},b=({el:m,anchor:g})=>{let y;for(;m&&m!==g;)y=u(m),s(m),m=y;s(g)},P=(m,g,y,x,k,C,$,R,E)=>{g.type==="svg"?$="svg":g.type==="math"&&($="mathml"),m==null?K(g,y,x,k,C,$,R,E):F(m,g,k,C,$,R,E)},K=(m,g,y,x,k,C,$,R)=>{let E,w;const{props:H,shapeFlag:L,transition:B,dirs:W}=m;if(E=m.el=r(m.type,C,H&&H.is,H),L&8?d(E,m.children):L&16&&ge(m.children,E,null,x,k,On(m,C),$,R),W&&Mt(m,null,x,"created"),J(E,m,m.scopeId,$,x),H){for(const be in H)be!=="value"&&!ga(be)&&o(E,be,null,H[be],C,x);"value"in H&&o(E,"value",null,H.value,C),(w=H.onVnodeBeforeMount)&&tt(w,x,m)}W&&Mt(m,null,x,"beforeMount");const oe=ul(k,B);oe&&B.beforeEnter(E),n(E,g,y),((w=H&&H.onVnodeMounted)||oe||W)&&Ne(()=>{w&&tt(w,x,m),oe&&B.enter(E),W&&Mt(m,null,x,"mounted")},k)},J=(m,g,y,x,k)=>{if(y&&v(m,y),x)for(let C=0;C<x.length;C++)v(m,x[C]);if(k){let C=k.subTree;if(g===C||vi(C.type)&&(C.ssContent===g||C.ssFallback===g)){const $=k.vnode;J(m,$,$.scopeId,$.slotScopeIds,k.parent)}}},ge=(m,g,y,x,k,C,$,R,E=0)=>{for(let w=E;w<m.length;w++){const H=m[w]=R?wt(m[w]):nt(m[w]);S(null,H,g,y,x,k,C,$,R)}},F=(m,g,y,x,k,C,$)=>{const R=g.el=m.el;let{patchFlag:E,dynamicChildren:w,dirs:H}=g;E|=m.patchFlag&16;const L=m.props||ve,B=g.props||ve;let W;if(y&&$t(y,!1),(W=B.onVnodeBeforeUpdate)&&tt(W,y,g,m),H&&Mt(g,m,y,"beforeUpdate"),y&&$t(y,!0),(L.innerHTML&&B.innerHTML==null||L.textContent&&B.textContent==null)&&d(R,""),w?ae(m.dynamicChildren,w,R,y,x,On(g,k),C):$||ce(m,g,R,null,y,x,On(g,k),C,!1),E>0){if(E&16)te(R,L,B,y,k);else if(E&2&&L.class!==B.class&&o(R,"class",null,B.class,k),E&4&&o(R,"style",L.style,B.style,k),E&8){const oe=g.dynamicProps;for(let be=0;be<oe.length;be++){const ue=oe[be],Le=L[ue],Ve=B[ue];(Ve!==Le||ue==="value")&&o(R,ue,Le,Ve,k,y)}}E&1&&m.children!==g.children&&d(R,g.children)}else!$&&w==null&&te(R,L,B,y,k);((W=B.onVnodeUpdated)||H)&&Ne(()=>{W&&tt(W,y,g,m),H&&Mt(g,m,y,"updated")},x)},ae=(m,g,y,x,k,C,$)=>{for(let R=0;R<g.length;R++){const E=m[R],w=g[R],H=E.el&&(E.type===Ee||!Ot(E,w)||E.shapeFlag&198)?f(E.el):y;S(E,w,H,null,x,k,C,$,!0)}},te=(m,g,y,x,k)=>{if(g!==y){if(g!==ve)for(const C in g)!ga(C)&&!(C in y)&&o(m,C,g[C],null,k,x);for(const C in y){if(ga(C))continue;const $=y[C],R=g[C];$!==R&&C!=="value"&&o(m,C,R,$,k,x)}"value"in y&&o(m,"value",g.value,y.value,k)}},V=(m,g,y,x,k,C,$,R,E)=>{const w=g.el=m?m.el:i(""),H=g.anchor=m?m.anchor:i("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:W}=g;W&&(R=R?R.concat(W):W),m==null?(n(w,y,x),n(H,y,x),ge(g.children||[],y,H,k,C,$,R,E)):L>0&&L&64&&B&&m.dynamicChildren?(ae(m.dynamicChildren,B,y,k,C,$,R),(g.key!=null||k&&g===k.subTree)&&li(m,g,!0)):ce(m,g,y,H,k,C,$,R,E)},ne=(m,g,y,x,k,C,$,R,E)=>{g.slotScopeIds=R,m==null?g.shapeFlag&512?k.ctx.activate(g,y,x,$,E):O(g,y,x,k,C,$,E):se(m,g,E)},O=(m,g,y,x,k,C,$)=>{const R=m.component=El(m,x,k);if(xn(m)&&(R.ctx.renderer=N),Al(R,!1,$),R.asyncDep){if(k&&k.registerDep(R,he,$),!m.el){const E=R.subTree=re($e);j(null,E,g,y),m.placeholder=E.el}}else he(R,m,g,y,k,C,$)},se=(m,g,y)=>{const x=g.component=m.component;if(Cl(m,g,y))if(x.asyncDep&&!x.asyncResolved){pe(x,g,y);return}else x.next=g,x.update();else g.el=m.el,x.vnode=g},he=(m,g,y,x,k,C,$)=>{const R=()=>{if(m.isMounted){let{next:L,bu:B,u:W,parent:oe,vnode:be}=m;{const Ze=di(m);if(Ze){L&&(L.el=be.el,pe(m,L,$)),Ze.asyncDep.then(()=>{m.isUnmounted||R()});return}}let ue=L,Le;$t(m,!1),L?(L.el=be.el,pe(m,L,$)):L=be,B&&Ga(B),(Le=L.props&&L.props.onVnodeBeforeUpdate)&&tt(Le,oe,L,be),$t(m,!0);const Ve=Ys(m),Xe=m.subTree;m.subTree=Ve,S(Xe,Ve,f(Xe.el),_(Xe),m,k,C),L.el=Ve.el,ue===null&&xl(m,Ve.el),W&&Ne(W,k),(Le=L.props&&L.props.onVnodeUpdated)&&Ne(()=>tt(Le,oe,L,be),k)}else{let L;const{el:B,props:W}=g,{bm:oe,m:be,parent:ue,root:Le,type:Ve}=m,Xe=Ca(g);$t(m,!1),oe&&Ga(oe),!Xe&&(L=W&&W.onVnodeBeforeMount)&&tt(L,ue,g),$t(m,!0);{Le.ce&&Le.ce._def.shadowRoot!==!1&&Le.ce._injectChildStyle(Ve);const Ze=m.subTree=Ys(m);S(null,Ze,y,x,m,k,C),g.el=Ze.el}if(be&&Ne(be,k),!Xe&&(L=W&&W.onVnodeMounted)){const Ze=g;Ne(()=>tt(L,ue,Ze),k)}(g.shapeFlag&256||ue&&Ca(ue.vnode)&&ue.vnode.shapeFlag&256)&&m.a&&Ne(m.a,k),m.isMounted=!0,g=y=x=null}};m.scope.on();const E=m.effect=new pr(R);m.scope.off();const w=m.update=E.run.bind(E),H=m.job=E.runIfDirty.bind(E);H.i=m,H.id=m.uid,E.scheduler=()=>ws(H),$t(m,!0),w()},pe=(m,g,y)=>{g.component=m;const x=m.vnode.props;m.vnode=g,m.next=null,sl(m,g.props,x,y),cl(m,g.children,y),ht(),Us(m),bt()},ce=(m,g,y,x,k,C,$,R,E=!1)=>{const w=m&&m.children,H=m?m.shapeFlag:0,L=g.children,{patchFlag:B,shapeFlag:W}=g;if(B>0){if(B&128){xt(w,L,y,x,k,C,$,R,E);return}else if(B&256){lt(w,L,y,x,k,C,$,R,E);return}}W&8?(H&16&&ze(w,k,C),L!==w&&d(y,L)):H&16?W&16?xt(w,L,y,x,k,C,$,R,E):ze(w,k,C,!0):(H&8&&d(y,""),W&16&&ge(L,y,x,k,C,$,R,E))},lt=(m,g,y,x,k,C,$,R,E)=>{m=m||Yt,g=g||Yt;const w=m.length,H=g.length,L=Math.min(w,H);let B;for(B=0;B<L;B++){const W=g[B]=E?wt(g[B]):nt(g[B]);S(m[B],W,y,null,k,C,$,R,E)}w>H?ze(m,k,C,!0,!1,L):ge(g,y,x,k,C,$,R,E,L)},xt=(m,g,y,x,k,C,$,R,E)=>{let w=0;const H=g.length;let L=m.length-1,B=H-1;for(;w<=L&&w<=B;){const W=m[w],oe=g[w]=E?wt(g[w]):nt(g[w]);if(Ot(W,oe))S(W,oe,y,null,k,C,$,R,E);else break;w++}for(;w<=L&&w<=B;){const W=m[L],oe=g[B]=E?wt(g[B]):nt(g[B]);if(Ot(W,oe))S(W,oe,y,null,k,C,$,R,E);else break;L--,B--}if(w>L){if(w<=B){const W=B+1,oe=W<H?g[W].el:x;for(;w<=B;)S(null,g[w]=E?wt(g[w]):nt(g[w]),y,oe,k,C,$,R,E),w++}}else if(w>B)for(;w<=L;)Ie(m[w],k,C,!0),w++;else{const W=w,oe=w,be=new Map;for(w=oe;w<=B;w++){const De=g[w]=E?wt(g[w]):nt(g[w]);De.key!=null&&be.set(De.key,w)}let ue,Le=0;const Ve=B-oe+1;let Xe=!1,Ze=0;const la=new Array(Ve);for(w=0;w<Ve;w++)la[w]=0;for(w=W;w<=L;w++){const De=m[w];if(Le>=Ve){Ie(De,k,C,!0);continue}let et;if(De.key!=null)et=be.get(De.key);else for(ue=oe;ue<=B;ue++)if(la[ue-oe]===0&&Ot(De,g[ue])){et=ue;break}et===void 0?Ie(De,k,C,!0):(la[et-oe]=w+1,et>=Ze?Ze=et:Xe=!0,S(De,g[et],y,null,k,C,$,R,E),Le++)}const Is=Xe?pl(la):Yt;for(ue=Is.length-1,w=Ve-1;w>=0;w--){const De=oe+w,et=g[De],Ls=g[De+1],Vs=De+1<H?Ls.el||Ls.placeholder:x;la[w]===0?S(null,et,y,Vs,k,C,$,R,E):Xe&&(ue<0||w!==Is[ue]?Ye(et,y,Vs,2):ue--)}}},Ye=(m,g,y,x,k=null)=>{const{el:C,type:$,transition:R,children:E,shapeFlag:w}=m;if(w&6){Ye(m.component.subTree,g,y,x);return}if(w&128){m.suspense.move(g,y,x);return}if(w&64){$.move(m,g,y,N);return}if($===Ee){n(C,g,y);for(let L=0;L<E.length;L++)Ye(E[L],g,y,x);n(m.anchor,g,y);return}if($===Ya){A(m,g,y);return}if(x!==2&&w&1&&R)if(x===0)R.beforeEnter(C),n(C,g,y),Ne(()=>R.enter(C),k);else{const{leave:L,delayLeave:B,afterLeave:W}=R,oe=()=>{m.ctx.isUnmounted?s(C):n(C,g,y)},be=()=>{C._isLeaving&&C[vt](!0),L(C,()=>{oe(),W&&W()})};B?B(C,oe,be):be()}else n(C,g,y)},Ie=(m,g,y,x=!1,k=!1)=>{const{type:C,props:$,ref:R,children:E,dynamicChildren:w,shapeFlag:H,patchFlag:L,dirs:B,cacheIndex:W}=m;if(L===-2&&(k=!1),R!=null&&(ht(),ya(R,null,y,m,!0),bt()),W!=null&&(g.renderCache[W]=void 0),H&256){g.ctx.deactivate(m);return}const oe=H&1&&B,be=!Ca(m);let ue;if(be&&(ue=$&&$.onVnodeBeforeUnmount)&&tt(ue,g,m),H&6)za(m.component,y,x);else{if(H&128){m.suspense.unmount(y,x);return}oe&&Mt(m,null,g,"beforeUnmount"),H&64?m.type.remove(m,g,y,N,x):w&&!w.hasOnce&&(C!==Ee||L>0&&L&64)?ze(w,g,y,!1,!0):(C===Ee&&L&384||!k&&H&16)&&ze(E,g,y),x&&Ut(m)}(be&&(ue=$&&$.onVnodeUnmounted)||oe)&&Ne(()=>{ue&&tt(ue,g,m),oe&&Mt(m,null,g,"unmounted")},y)},Ut=m=>{const{type:g,el:y,anchor:x,transition:k}=m;if(g===Ee){zt(y,x);return}if(g===Ya){b(m);return}const C=()=>{s(y),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:$,delayLeave:R}=k,E=()=>$(y,C);R?R(m.el,C,E):E()}else C()},zt=(m,g)=>{let y;for(;m!==g;)y=u(m),s(m),m=y;s(g)},za=(m,g,y)=>{const{bum:x,scope:k,job:C,subTree:$,um:R,m:E,a:w}=m;Js(E),Js(w),x&&Ga(x),k.stop(),C&&(C.flags|=8,Ie($,m,g,y)),R&&Ne(R,g),Ne(()=>{m.isUnmounted=!0},g)},ze=(m,g,y,x=!1,k=!1,C=0)=>{for(let $=C;$<m.length;$++)Ie(m[$],g,y,x,k)},_=m=>{if(m.shapeFlag&6)return _(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const g=u(m.anchor||m.el),y=g&&g[Dc];return y?u(y):g};let D=!1;const I=(m,g,y)=>{m==null?g._vnode&&Ie(g._vnode,null,null,!0):S(g._vnode||null,m,g,null,null,null,y),g._vnode=m,D||(D=!0,Us(),Mr(),D=!1)},N={p:S,um:Ie,m:Ye,r:Ut,mt:O,mc:ge,pc:ce,pbc:ae,n:_,o:e};return{render:I,hydrate:void 0,createApp:al(I)}}function On({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function $t({effect:e,job:t},a){a?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ul(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function li(e,t,a=!1){const n=e.children,s=t.children;if(z(n)&&z(s))for(let o=0;o<n.length;o++){const r=n[o];let i=s[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[o]=wt(s[o]),i.el=r.el),!a&&i.patchFlag!==-2&&li(r,i)),i.type===wn&&i.patchFlag!==-1&&(i.el=r.el),i.type===$e&&!i.el&&(i.el=r.el)}}function pl(e){const t=e.slice(),a=[0];let n,s,o,r,i;const l=e.length;for(n=0;n<l;n++){const p=e[n];if(p!==0){if(s=a[a.length-1],e[s]<p){t[n]=s,a.push(n);continue}for(o=0,r=a.length-1;o<r;)i=o+r>>1,e[a[i]]<p?o=i+1:r=i;p<e[a[o]]&&(o>0&&(t[n]=a[o-1]),a[o]=n)}}for(o=a.length,r=a[o-1];o-- >0;)a[o]=r,r=t[r];return a}function di(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:di(t)}function Js(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fl=Symbol.for("v-scx"),vl=()=>rt(fl);function _a(e,t,a){return ui(e,t,a)}function ui(e,t,a=ve){const{immediate:n,deep:s,flush:o,once:r}=a,i=Se({},a),l=t&&n||!t&&o!=="post";let p;if(Ta){if(o==="sync"){const v=vl();p=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=st,v.resume=st,v.pause=st,v}}const d=Ae;i.call=(v,h,S)=>Ge(v,d,h,S);let f=!1;o==="post"?i.scheduler=v=>{Ne(v,d&&d.suspense)}:o!=="sync"&&(f=!0,i.scheduler=(v,h)=>{h?v():ws(v)}),i.augmentJob=v=>{t&&(v.flags|=4),f&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const u=Ic(e,t,i);return Ta&&(p?p.push(u):l&&u()),u}function ml(e,t,a){const n=this.proxy,s=xe(e)?e.includes(".")?pi(n,e):()=>n[e]:e.bind(n,n);let o;G(t)?o=t:(o=t.handler,a=t);const r=Ba(this),i=ui(s,o.bind(n),a);return r(),i}function pi(e,t){const a=t.split(".");return()=>{let n=e;for(let s=0;s<a.length&&n;s++)n=n[a[s]];return n}}const gl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function hl(e,t,...a){if(e.isUnmounted)return;const n=e.vnode.props||ve;let s=a;const o=t.startsWith("update:"),r=o&&gl(n,t.slice(7));r&&(r.trim&&(s=a.map(d=>xe(d)?d.trim():d)),r.number&&(s=a.map(Kn)));let i,l=n[i=Tn(t)]||n[i=Tn(We(t))];!l&&o&&(l=n[i=Tn(jt(t))]),l&&Ge(l,e,6,s);const p=n[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Ge(p,e,6,s)}}function fi(e,t,a=!1){const n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;const o=e.emits;let r={},i=!1;if(!G(e)){const l=p=>{const d=fi(p,t,!0);d&&(i=!0,Se(r,d))};!a&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!i?(me(e)&&n.set(e,null),null):(z(o)?o.forEach(l=>r[l]=null):Se(r,o),me(e)&&n.set(e,r),r)}function kn(e,t){return!e||!pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),de(e,t[0].toLowerCase()+t.slice(1))||de(e,jt(t))||de(e,t))}function Ys(e){const{type:t,vnode:a,proxy:n,withProxy:s,propsOptions:[o],slots:r,attrs:i,emit:l,render:p,renderCache:d,props:f,data:u,setupState:v,ctx:h,inheritAttrs:S}=e,q=nn(e);let j,M;try{if(a.shapeFlag&4){const b=s||n,P=b;j=nt(p.call(P,b,d,f,v,u,h)),M=i}else{const b=t;j=nt(b.length>1?b(f,{attrs:i,slots:r,emit:l}):b(f,null)),M=t.props?i:bl(i)}}catch(b){Sa.length=0,Cn(b,e,1),j=re($e)}let A=j;if(M&&S!==!1){const b=Object.keys(M),{shapeFlag:P}=A;b.length&&P&7&&(o&&b.some(ms)&&(M=yl(M,o)),A=Tt(A,M,!1,!0))}return a.dirs&&(A=Tt(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(a.dirs):a.dirs),a.transition&&Aa(A,a.transition),j=A,nn(q),j}const bl=e=>{let t;for(const a in e)(a==="class"||a==="style"||pn(a))&&((t||(t={}))[a]=e[a]);return t},yl=(e,t)=>{const a={};for(const n in e)(!ms(n)||!(n.slice(9)in t))&&(a[n]=e[n]);return a};function Cl(e,t,a){const{props:n,children:s,component:o}=e,{props:r,children:i,patchFlag:l}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return n?Xs(n,r,p):!!r;if(l&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const u=d[f];if(r[u]!==n[u]&&!kn(p,u))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:n===r?!1:n?r?Xs(n,r,p):!0:!!r;return!1}function Xs(e,t,a){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const o=n[s];if(t[o]!==e[o]&&!kn(a,o))return!0}return!1}function xl({vnode:e,parent:t},a){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=a,t=t.parent;else break}}const vi=e=>e.__isSuspense;function _l(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Oc(e)}const Ee=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Ya=Symbol.for("v-stc"),Sa=[];let Ue=null;function Y(e=!1){Sa.push(Ue=e?null:[])}function Sl(){Sa.pop(),Ue=Sa[Sa.length-1]||null}let Ra=1;function on(e,t=!1){Ra+=e,e<0&&Ue&&t&&(Ue.hasOnce=!0)}function mi(e){return e.dynamicChildren=Ra>0?Ue||Yt:null,Sl(),Ra>0&&Ue&&Ue.push(e),e}function ee(e,t,a,n,s,o){return mi(c(e,t,a,n,s,o,!0))}function ss(e,t,a,n,s){return mi(re(e,t,a,n,s,!0))}function rn(e){return e?e.__v_isVNode===!0:!1}function Ot(e,t){return e.type===t.type&&e.key===t.key}const gi=({key:e})=>e??null,Xa=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||Re(e)||G(e)?{i:Be,r:e,k:t,f:!!a}:e:null);function c(e,t=null,a=null,n=0,s=null,o=e===Ee?0:1,r=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gi(t),ref:t&&Xa(t),scopeId:Ir,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Be};return i?(Rs(l,a),o&128&&e.normalize(l)):a&&(l.shapeFlag|=xe(a)?8:16),Ra>0&&!r&&Ue&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ue.push(l),l}const re=kl;function kl(e,t=null,a=null,n=0,s=null,o=!1){if((!e||e===Jr)&&(e=$e),rn(e)){const i=Tt(e,t,!0);return a&&Rs(i,a),Ra>0&&!o&&Ue&&(i.shapeFlag&6?Ue[Ue.indexOf(e)]=i:Ue.push(i)),i.patchFlag=-2,i}if($l(e)&&(e=e.__vccOpts),t){t=hi(t);let{class:i,style:l}=t;i&&!xe(i)&&(t.class=ot(i)),me(l)&&(ks(l)&&!z(l)&&(l=Se({},l)),t.style=Va(l))}const r=xe(e)?1:vi(e)?128:Lr(e)?64:me(e)?4:G(e)?2:0;return c(e,t,a,n,s,r,o,!0)}function hi(e){return e?ks(e)||ni(e)?Se({},e):e:null}function Tt(e,t,a=!1,n=!1){const{props:s,ref:o,patchFlag:r,children:i,transition:l}=e,p=t?wl(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&gi(p),ref:t&&t.ref?a&&o?z(o)?o.concat(Xa(t)):[o,Xa(t)]:Xa(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Aa(d,l.clone(d)),d}function Z(e=" ",t=0){return re(wn,null,e,t)}function X(e,t){const a=re(Ya,null,e);return a.staticCount=t,a}function na(e="",t=!1){return t?(Y(),ss($e,null,e)):re($e,null,e)}function nt(e){return e==null||typeof e=="boolean"?re($e):z(e)?re(Ee,null,e.slice()):rn(e)?wt(e):re(wn,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function Rs(e,t){let a=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(z(t))a=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Rs(e,s()),s._c&&(s._d=!0));return}else{a=32;const s=t._;!s&&!ni(t)?t._ctx=Be:s===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Be},a=32):(t=String(t),n&64?(a=16,t=[Z(t)]):a=8);e.children=t,e.shapeFlag|=a}function wl(...e){const t={};for(let a=0;a<e.length;a++){const n=e[a];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=ot([t.class,n.class]));else if(s==="style")t.style=Va([t.style,n.style]);else if(pn(s)){const o=t[s],r=n[s];r&&o!==r&&!(z(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=n[s])}return t}function tt(e,t,a,n=null){Ge(e,t,7,[a,n])}const Pl=ei();let ql=0;function El(e,t,a){const n=e.type,s=(t?t.appContext:e.appContext)||Pl,o={uid:ql++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ur(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(n,s),emitsOptions:fi(n,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:n.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=hl.bind(null,o),e.ce&&e.ce(o),o}let Ae=null;const Na=()=>Ae||Be;let cn,os;{const e=gn(),t=(a,n)=>{let s;return(s=e[a])||(s=e[a]=[]),s.push(n),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};cn=t("__VUE_INSTANCE_SETTERS__",a=>Ae=a),os=t("__VUE_SSR_SETTERS__",a=>Ta=a)}const Ba=e=>{const t=Ae;return cn(e),e.scope.on(),()=>{e.scope.off(),cn(t)}},Zs=()=>{Ae&&Ae.scope.off(),cn(null)};function bi(e){return e.vnode.shapeFlag&4}let Ta=!1;function Al(e,t=!1,a=!1){t&&os(t);const{props:n,children:s}=e.vnode,o=bi(e);nl(e,n,o,t),il(e,s,a||t);const r=o?Rl(e,t):void 0;return t&&os(!1),r}function Rl(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gc);const{setup:n}=a;if(n){ht();const s=e.setupContext=n.length>1?jl(e):null,o=Ba(e),r=Oa(n,e,0,[e.props,s]),i=nr(r);if(bt(),o(),(i||e.sp)&&!Ca(e)&&Ur(e),i){if(r.then(Zs,Zs),t)return r.then(l=>{eo(e,l)}).catch(l=>{Cn(l,e,0)});e.asyncDep=r}else eo(e,r)}else yi(e)}function eo(e,t,a){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Ar(t)),yi(e)}function yi(e,t,a){const n=e.type;e.render||(e.render=n.render||st);{const s=Ba(e);ht();try{Jc(e)}finally{bt(),s()}}}const Tl={get(e,t){return qe(e,"get",""),e[t]}};function jl(e){const t=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,Tl),slots:e.slots,emit:e.emit,expose:t}}function Pn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ar(yn(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in xa)return xa[a](e)},has(t,a){return a in t||a in xa}})):e.proxy}function Ml(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function $l(e){return G(e)&&"__vccOpts"in e}const Q=(e,t)=>Mc(e,t,Ta);function Ce(e,t,a){const n=arguments.length;return n===2?me(t)&&!z(t)?rn(t)?re(e,null,[t]):re(e,t):re(e,null,t):(n>3?a=Array.prototype.slice.call(arguments,2):n===3&&rn(a)&&(a=[a]),re(e,t,a))}const Il="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rs;const to=typeof window<"u"&&window.trustedTypes;if(to)try{rs=to.createPolicy("vue",{createHTML:e=>e})}catch{}const Ci=rs?e=>rs.createHTML(e):e=>e,Ll="http://www.w3.org/2000/svg",Vl="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,ao=ft&&ft.createElement("template"),Ol={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,n)=>{const s=t==="svg"?ft.createElementNS(Ll,e):t==="mathml"?ft.createElementNS(Vl,e):a?ft.createElement(e,{is:a}):ft.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,n,s,o){const r=a?a.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),a),!(s===o||!(s=s.nextSibling)););else{ao.innerHTML=Ci(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const i=ao.content;if(n==="svg"||n==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,a)}return[r?r.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},_t="transition",ua="animation",ja=Symbol("_vtc"),xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dl=Se({},Vr,xi),Nl=e=>(e.displayName="Transition",e.props=Dl,e),Bl=Nl((e,{slots:t})=>Ce(Uc,Ul(e),t)),It=(e,t=[])=>{z(e)?e.forEach(a=>a(...t)):e&&e(...t)},no=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function Ul(e){const t={};for(const V in e)V in xi||(t[V]=e[V]);if(e.css===!1)return t;const{name:a="v",type:n,duration:s,enterFromClass:o=`${a}-enter-from`,enterActiveClass:r=`${a}-enter-active`,enterToClass:i=`${a}-enter-to`,appearFromClass:l=o,appearActiveClass:p=r,appearToClass:d=i,leaveFromClass:f=`${a}-leave-from`,leaveActiveClass:u=`${a}-leave-active`,leaveToClass:v=`${a}-leave-to`}=e,h=zl(s),S=h&&h[0],q=h&&h[1],{onBeforeEnter:j,onEnter:M,onEnterCancelled:A,onLeave:b,onLeaveCancelled:P,onBeforeAppear:K=j,onAppear:J=M,onAppearCancelled:ge=A}=t,F=(V,ne,O,se)=>{V._enterCancelled=se,Lt(V,ne?d:i),Lt(V,ne?p:r),O&&O()},ae=(V,ne)=>{V._isLeaving=!1,Lt(V,f),Lt(V,v),Lt(V,u),ne&&ne()},te=V=>(ne,O)=>{const se=V?J:M,he=()=>F(ne,V,O);It(se,[ne,he]),so(()=>{Lt(ne,V?l:o),ut(ne,V?d:i),no(se)||oo(ne,n,S,he)})};return Se(t,{onBeforeEnter(V){It(j,[V]),ut(V,o),ut(V,r)},onBeforeAppear(V){It(K,[V]),ut(V,l),ut(V,p)},onEnter:te(!1),onAppear:te(!0),onLeave(V,ne){V._isLeaving=!0;const O=()=>ae(V,ne);ut(V,f),V._enterCancelled?(ut(V,u),co()):(co(),ut(V,u)),so(()=>{V._isLeaving&&(Lt(V,f),ut(V,v),no(b)||oo(V,n,q,O))}),It(b,[V,O])},onEnterCancelled(V){F(V,!1,void 0,!0),It(A,[V])},onAppearCancelled(V){F(V,!0,void 0,!0),It(ge,[V])},onLeaveCancelled(V){ae(V),It(P,[V])}})}function zl(e){if(e==null)return null;if(me(e))return[Dn(e.enter),Dn(e.leave)];{const t=Dn(e);return[t,t]}}function Dn(e){return ec(e)}function ut(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[ja]||(e[ja]=new Set)).add(t)}function Lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const a=e[ja];a&&(a.delete(t),a.size||(e[ja]=void 0))}function so(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Fl=0;function oo(e,t,a,n){const s=e._endId=++Fl,o=()=>{s===e._endId&&n()};if(a!=null)return setTimeout(o,a);const{type:r,timeout:i,propCount:l}=Hl(e,t);if(!r)return n();const p=r+"end";let d=0;const f=()=>{e.removeEventListener(p,u),o()},u=v=>{v.target===e&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},i+1),e.addEventListener(p,u)}function Hl(e,t){const a=window.getComputedStyle(e),n=h=>(a[h]||"").split(", "),s=n(`${_t}Delay`),o=n(`${_t}Duration`),r=ro(s,o),i=n(`${ua}Delay`),l=n(`${ua}Duration`),p=ro(i,l);let d=null,f=0,u=0;t===_t?r>0&&(d=_t,f=r,u=o.length):t===ua?p>0&&(d=ua,f=p,u=l.length):(f=Math.max(r,p),d=f>0?r>p?_t:ua:null,u=d?d===_t?o.length:l.length:0);const v=d===_t&&/\b(transform|all)(,|$)/.test(n(`${_t}Property`).toString());return{type:d,timeout:f,propCount:u,hasTransform:v}}function ro(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,n)=>io(a)+io(e[n])))}function io(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function co(){return document.body.offsetHeight}function Ql(e,t,a){const n=e[ja];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const ln=Symbol("_vod"),_i=Symbol("_vsh"),Wl={name:"show",beforeMount(e,{value:t},{transition:a}){e[ln]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):pa(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:n}){!t!=!a&&(n?t?(n.beforeEnter(e),pa(e,!0),n.enter(e)):n.leave(e,()=>{pa(e,!1)}):pa(e,t))},beforeUnmount(e,{value:t}){pa(e,t)}};function pa(e,t){e.style.display=t?e[ln]:"none",e[_i]=!t}const Kl=Symbol(""),Gl=/(^|;)\s*display\s*:/;function Jl(e,t,a){const n=e.style,s=xe(a);let o=!1;if(a&&!s){if(t)if(xe(t))for(const r of t.split(";")){const i=r.slice(0,r.indexOf(":")).trim();a[i]==null&&Za(n,i,"")}else for(const r in t)a[r]==null&&Za(n,r,"");for(const r in a)r==="display"&&(o=!0),Za(n,r,a[r])}else if(s){if(t!==a){const r=n[Kl];r&&(a+=";"+r),n.cssText=a,o=Gl.test(a)}}else t&&e.removeAttribute("style");ln in e&&(e[ln]=o?n.display:"",e[_i]&&(n.display="none"))}const lo=/\s*!important$/;function Za(e,t,a){if(z(a))a.forEach(n=>Za(e,t,n));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const n=Yl(e,t);lo.test(a)?e.setProperty(jt(n),a.replace(lo,""),"important"):e[n]=a}}const uo=["Webkit","Moz","ms"],Nn={};function Yl(e,t){const a=Nn[t];if(a)return a;let n=We(t);if(n!=="filter"&&n in e)return Nn[t]=n;n=mn(n);for(let s=0;s<uo.length;s++){const o=uo[s]+n;if(o in e)return Nn[t]=o}return t}const po="http://www.w3.org/1999/xlink";function fo(e,t,a,n,s,o=ic(t)){n&&t.startsWith("xlink:")?a==null?e.removeAttributeNS(po,t.slice(6,t.length)):e.setAttributeNS(po,t,a):a==null||o&&!ir(a)?e.removeAttribute(t):e.setAttribute(t,o?"":ct(a)?String(a):a)}function vo(e,t,a,n,s){if(t==="innerHTML"||t==="textContent"){a!=null&&(e[t]=t==="innerHTML"?Ci(a):a);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=a==null?e.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in e))&&(e.value=l),a==null&&e.removeAttribute(t),e._value=a;return}let r=!1;if(a===""||a==null){const i=typeof e[t];i==="boolean"?a=ir(a):a==null&&i==="string"?(a="",r=!0):i==="number"&&(a=0,r=!0)}try{e[t]=a}catch{}r&&e.removeAttribute(s||t)}function Dt(e,t,a,n){e.addEventListener(t,a,n)}function Xl(e,t,a,n){e.removeEventListener(t,a,n)}const mo=Symbol("_vei");function Zl(e,t,a,n,s=null){const o=e[mo]||(e[mo]={}),r=o[t];if(n&&r)r.value=n;else{const[i,l]=ed(t);if(n){const p=o[t]=nd(n,s);Dt(e,i,p,l)}else r&&(Xl(e,i,r,l),o[t]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function ed(e){let t;if(go.test(e)){t={};let n;for(;n=e.match(go);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Bn=0;const td=Promise.resolve(),ad=()=>Bn||(td.then(()=>Bn=0),Bn=Date.now());function nd(e,t){const a=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=a.attached)return;Ge(sd(n,a.value),t,5,[n])};return a.value=e,a.attached=ad(),a}function sd(e,t){if(z(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,od=(e,t,a,n,s,o)=>{const r=s==="svg";t==="class"?Ql(e,n,r):t==="style"?Jl(e,a,n):pn(t)?ms(t)||Zl(e,t,a,n,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rd(e,t,n,r))?(vo(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fo(e,t,n,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(n))?vo(e,We(t),n,o,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),fo(e,t,n,r))};function rd(e,t,a,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&ho(t)&&G(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ho(t)&&xe(a)?!1:t in e}const dn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?a=>Ga(t,a):t};function id(e){e.target.composing=!0}function bo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const sa=Symbol("_assign"),je={created(e,{modifiers:{lazy:t,trim:a,number:n}},s){e[sa]=dn(s);const o=n||s.props&&s.props.type==="number";Dt(e,t?"change":"input",r=>{if(r.target.composing)return;let i=e.value;a&&(i=i.trim()),o&&(i=Kn(i)),e[sa](i)}),a&&Dt(e,"change",()=>{e.value=e.value.trim()}),t||(Dt(e,"compositionstart",id),Dt(e,"compositionend",bo),Dt(e,"change",bo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:a,modifiers:{lazy:n,trim:s,number:o}},r){if(e[sa]=dn(r),e.composing)return;const i=(o||e.type==="number")&&!/^0\d/.test(e.value)?Kn(e.value):e.value,l=t??"";i!==l&&(document.activeElement===e&&e.type!=="range"&&(n&&t===a||s&&e.value.trim()===l)||(e.value=l))}},Ts={deep:!0,created(e,t,a){e[sa]=dn(a),Dt(e,"change",()=>{const n=e._modelValue,s=cd(e),o=e.checked,r=e[sa];if(z(n)){const i=cr(n,s),l=i!==-1;if(o&&!l)r(n.concat(s));else if(!o&&l){const p=[...n];p.splice(i,1),r(p)}}else if(fn(n)){const i=new Set(n);o?i.add(s):i.delete(s),r(i)}else r(Si(e,o))})},mounted:yo,beforeUpdate(e,t,a){e[sa]=dn(a),yo(e,t,a)}};function yo(e,{value:t,oldValue:a},n){e._modelValue=t;let s;if(z(t))s=cr(t,n.props.value)>-1;else if(fn(t))s=t.has(n.props.value);else{if(t===a)return;s=hn(t,Si(e,!0))}e.checked!==s&&(e.checked=s)}function cd(e){return"_value"in e?e._value:e.value}function Si(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const ld={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ki=(e,t)=>{const a=e._withKeys||(e._withKeys={}),n=t.join(".");return a[n]||(a[n]=(s=>{if(!("key"in s))return;const o=jt(s.key);if(t.some(r=>r===o||ld[r]===o))return e(s)}))},dd=Se({patchProp:od},Ol);let Co;function ud(){return Co||(Co=ll(dd))}const pd=((...e)=>{const t=ud().createApp(...e),{mount:a}=t;return t.mount=n=>{const s=vd(n);if(!s)return;const o=t._component;!G(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=a(s,!1,fd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t});function fd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vd(e){return xe(e)?document.querySelector(e):e}const we=(e,t)=>{const a=e.__vccOpts||e;for(const[n,s]of t)a[n]=s;return a},md={class:"header"},gd={class:"header-left"},hd={__name:"App",setup(e){return(t,a)=>{const n=oa("router-link"),s=oa("router-view");return Y(),ee("div",null,[c("header",md,[c("div",gd,[re(n,{to:"/",class:"tolink"},{default:At(()=>[...a[0]||(a[0]=[c("div",{class:"logo-container"},[c("svg",{class:"logo-svg",fill:"none",viewBox:"0 0 256 198",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M204.8 0H256L128 197.12L0 0H101.12L128 44.48L154.88 0H204.8Z",fill:"#42b883"}),c("path",{d:"M0 0L128 197.12L256 0H204.8L128 123.2L51.2 0H0Z",fill:"#35495e"}),c("path",{d:"M51.2 0L128 123.2L204.8 0H154.88L128 44.48L101.12 0H51.2Z",fill:"#42b883"})]),c("h1",{class:"title"},"Vue.js Manual")],-1)])]),_:1}),a[1]||(a[1]=X('<nav class="nav-links" data-v-3f0f9dbd><a class="nav-link" href="#" data-v-3f0f9dbd>Guide</a><a class="nav-link" href="#" data-v-3f0f9dbd>API</a><a class="nav-link" href="#" data-v-3f0f9dbd>Examples</a><a class="nav-link" href="#" data-v-3f0f9dbd>Ecosystem</a></nav>',1))]),a[2]||(a[2]=X('<div class="header-right" data-v-3f0f9dbd><button class="icon-button" data-v-3f0f9dbd><span class="material-symbols-outlined" data-v-3f0f9dbd>help</span></button><button class="icon-button" data-v-3f0f9dbd><span class="material-symbols-outlined" data-v-3f0f9dbd>dark_mode</span></button><div class="user-avatar-container" data-v-3f0f9dbd><div class="user-avatar" style="background-image:url(&#39;https://lh3.googleusercontent.com/a/ACg8ocJ_6i7a_2l3m-3E0x0v8z-3z0q-5yGg4A3d2D1J8c=s96-c&#39;);" data-v-3f0f9dbd></div></div></div>',1))]),re(s)])}}},bd=we(hd,[["__scopeId","data-v-3f0f9dbd"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Jt=typeof document<"u";function wi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function yd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&wi(e.default)}const le=Object.assign;function Un(e,t){const a={};for(const n in t){const s=t[n];a[n]=Je(s)?s.map(e):e(s)}return a}const ka=()=>{},Je=Array.isArray,Pi=/#/g,Cd=/&/g,xd=/\//g,_d=/=/g,Sd=/\?/g,qi=/\+/g,kd=/%5B/g,wd=/%5D/g,Ei=/%5E/g,Pd=/%60/g,Ai=/%7B/g,qd=/%7C/g,Ri=/%7D/g,Ed=/%20/g;function js(e){return encodeURI(""+e).replace(qd,"|").replace(kd,"[").replace(wd,"]")}function Ad(e){return js(e).replace(Ai,"{").replace(Ri,"}").replace(Ei,"^")}function is(e){return js(e).replace(qi,"%2B").replace(Ed,"+").replace(Pi,"%23").replace(Cd,"%26").replace(Pd,"`").replace(Ai,"{").replace(Ri,"}").replace(Ei,"^")}function Rd(e){return is(e).replace(_d,"%3D")}function Td(e){return js(e).replace(Pi,"%23").replace(Sd,"%3F")}function jd(e){return e==null?"":Td(e).replace(xd,"%2F")}function Ma(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Md=/\/$/,$d=e=>e.replace(Md,"");function zn(e,t,a="/"){let n,s={},o="",r="";const i=t.indexOf("#");let l=t.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(n=t.slice(0,l),o=t.slice(l+1,i>-1?i:t.length),s=e(o)),i>-1&&(n=n||t.slice(0,i),r=t.slice(i,t.length)),n=Od(n??t,a),{fullPath:n+(o&&"?")+o+r,path:n,query:s,hash:Ma(r)}}function Id(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function xo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ld(e,t,a){const n=t.matched.length-1,s=a.matched.length-1;return n>-1&&n===s&&ra(t.matched[n],a.matched[s])&&Ti(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function ra(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ti(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!Vd(e[a],t[a]))return!1;return!0}function Vd(e,t){return Je(e)?_o(e,t):Je(t)?_o(t,e):e===t}function _o(e,t){return Je(t)?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Od(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),n=e.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let o=a.length-1,r,i;for(r=0;r<n.length;r++)if(i=n[r],i!==".")if(i==="..")o>1&&o--;else break;return a.slice(0,o).join("/")+"/"+n.slice(r).join("/")}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $a;(function(e){e.pop="pop",e.push="push"})($a||($a={}));var wa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wa||(wa={}));function Dd(e){if(!e)if(Jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$d(e)}const Nd=/^[^#]+#/;function Bd(e,t){return e.replace(Nd,"#")+t}function Ud(e,t){const a=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-a.left-(t.left||0),top:n.top-a.top-(t.top||0)}}const qn=()=>({left:window.scrollX,top:window.scrollY});function zd(e){let t;if("el"in e){const a=e.el,n=typeof a=="string"&&a.startsWith("#"),s=typeof a=="string"?n?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!s)return;t=Ud(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function So(e,t){return(history.state?history.state.position-t:-1)+e}const cs=new Map;function Fd(e,t){cs.set(e,t)}function Hd(e){const t=cs.get(e);return cs.delete(e),t}let Qd=()=>location.protocol+"//"+location.host;function ji(e,t){const{pathname:a,search:n,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,l=s.slice(i);return l[0]!=="/"&&(l="/"+l),xo(l,"")}return xo(a,e)+n+s}function Wd(e,t,a,n){let s=[],o=[],r=null;const i=({state:u})=>{const v=ji(e,location),h=a.value,S=t.value;let q=0;if(u){if(a.value=v,t.value=u,r&&r===h){r=null;return}q=S?u.position-S.position:0}else n(v);s.forEach(j=>{j(a.value,h,{delta:q,type:$a.pop,direction:q?q>0?wa.forward:wa.back:wa.unknown})})};function l(){r=a.value}function p(u){s.push(u);const v=()=>{const h=s.indexOf(u);h>-1&&s.splice(h,1)};return o.push(v),v}function d(){const{history:u}=window;u.state&&u.replaceState(le({},u.state,{scroll:qn()}),"")}function f(){for(const u of o)u();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:p,destroy:f}}function ko(e,t,a,n=!1,s=!1){return{back:e,current:t,forward:a,replaced:n,position:window.history.length,scroll:s?qn():null}}function Kd(e){const{history:t,location:a}=window,n={value:ji(e,a)},s={value:t.state};s.value||o(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,p,d){const f=e.indexOf("#"),u=f>-1?(a.host&&document.querySelector("base")?e:e.slice(f))+l:Qd()+e+l;try{t[d?"replaceState":"pushState"](p,"",u),s.value=p}catch(v){console.error(v),a[d?"replace":"assign"](u)}}function r(l,p){const d=le({},t.state,ko(s.value.back,l,s.value.forward,!0),p,{position:s.value.position});o(l,d,!0),n.value=l}function i(l,p){const d=le({},s.value,t.state,{forward:l,scroll:qn()});o(d.current,d,!0);const f=le({},ko(n.value,l,null),{position:d.position+1},p);o(l,f,!1),n.value=l}return{location:n,state:s,push:i,replace:r}}function Gd(e){e=Dd(e);const t=Kd(e),a=Wd(e,t.state,t.location,t.replace);function n(o,r=!0){r||a.pauseListeners(),history.go(o)}const s=le({location:"",base:e,go:n,createHref:Bd.bind(null,e)},t,a);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Jd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Gd(e)}function Yd(e){return typeof e=="string"||e&&typeof e=="object"}function Mi(e){return typeof e=="string"||typeof e=="symbol"}const $i=Symbol("");var wo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wo||(wo={}));function ia(e,t){return le(new Error,{type:e,[$i]:!0},t)}function pt(e,t){return e instanceof Error&&$i in e&&(t==null||!!(e.type&t))}const Po="[^/]+?",Xd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function eu(e,t){const a=le({},Xd,t),n=[];let s=a.start?"^":"";const o=[];for(const p of e){const d=p.length?[]:[90];a.strict&&!p.length&&(s+="/");for(let f=0;f<p.length;f++){const u=p[f];let v=40+(a.sensitive?.25:0);if(u.type===0)f||(s+="/"),s+=u.value.replace(Zd,"\\$&"),v+=40;else if(u.type===1){const{value:h,repeatable:S,optional:q,regexp:j}=u;o.push({name:h,repeatable:S,optional:q});const M=j||Po;if(M!==Po){v+=10;try{new RegExp(`(${M})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${h}" (${M}): `+b.message)}}let A=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(A=q&&p.length<2?`(?:/${A})`:"/"+A),q&&(A+="?"),s+=A,v+=20,q&&(v+=-8),S&&(v+=-20),M===".*"&&(v+=-50)}d.push(v)}n.push(d)}if(a.strict&&a.end){const p=n.length-1;n[p][n[p].length-1]+=.7000000000000001}a.strict||(s+="/?"),a.end?s+="$":a.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const r=new RegExp(s,a.sensitive?"":"i");function i(p){const d=p.match(r),f={};if(!d)return null;for(let u=1;u<d.length;u++){const v=d[u]||"",h=o[u-1];f[h.name]=v&&h.repeatable?v.split("/"):v}return f}function l(p){let d="",f=!1;for(const u of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const v of u)if(v.type===0)d+=v.value;else if(v.type===1){const{value:h,repeatable:S,optional:q}=v,j=h in p?p[h]:"";if(Je(j)&&!S)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const M=Je(j)?j.join("/"):j;if(!M)if(q)u.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);d+=M}}return d||"/"}return{re:r,score:n,keys:o,parse:i,stringify:l}}function tu(e,t){let a=0;for(;a<e.length&&a<t.length;){const n=t[a]-e[a];if(n)return n;a++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ii(e,t){let a=0;const n=e.score,s=t.score;for(;a<n.length&&a<s.length;){const o=tu(n[a],s[a]);if(o)return o;a++}if(Math.abs(s.length-n.length)===1){if(qo(n))return 1;if(qo(s))return-1}return s.length-n.length}function qo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const au={type:0,value:""},nu=/[a-zA-Z0-9_]/;function su(e){if(!e)return[[]];if(e==="/")return[[au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${a})/"${p}": ${v}`)}let a=0,n=a;const s=[];let o;function r(){o&&s.push(o),o=[]}let i=0,l,p="",d="";function f(){p&&(a===0?o.push({type:0,value:p}):a===1||a===2||a===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),p="")}function u(){p+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&a!==2){n=a,a=4;continue}switch(a){case 0:l==="/"?(p&&f(),r()):l===":"?(f(),a=1):u();break;case 4:u(),a=n;break;case 1:l==="("?a=2:nu.test(l)?u():(f(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:a=3:d+=l;break;case 3:f(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),r(),s}function ou(e,t,a){const n=eu(su(e.path),a),s=le(n,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function ru(e,t){const a=[],n=new Map;t=To({strict:!1,end:!0,sensitive:!1},t);function s(f){return n.get(f)}function o(f,u,v){const h=!v,S=Ao(f);S.aliasOf=v&&v.record;const q=To(t,f),j=[S];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of b)j.push(Ao(le({},S,{components:v?v.record.components:S.components,path:P,aliasOf:v?v.record:S})))}let M,A;for(const b of j){const{path:P}=b;if(u&&P[0]!=="/"){const K=u.record.path,J=K[K.length-1]==="/"?"":"/";b.path=u.record.path+(P&&J+P)}if(M=ou(b,u,q),v?v.alias.push(M):(A=A||M,A!==M&&A.alias.push(M),h&&f.name&&!Ro(M)&&r(f.name)),Li(M)&&l(M),S.children){const K=S.children;for(let J=0;J<K.length;J++)o(K[J],M,v&&v.children[J])}v=v||M}return A?()=>{r(A)}:ka}function r(f){if(Mi(f)){const u=n.get(f);u&&(n.delete(f),a.splice(a.indexOf(u),1),u.children.forEach(r),u.alias.forEach(r))}else{const u=a.indexOf(f);u>-1&&(a.splice(u,1),f.record.name&&n.delete(f.record.name),f.children.forEach(r),f.alias.forEach(r))}}function i(){return a}function l(f){const u=lu(f,a);a.splice(u,0,f),f.record.name&&!Ro(f)&&n.set(f.record.name,f)}function p(f,u){let v,h={},S,q;if("name"in f&&f.name){if(v=n.get(f.name),!v)throw ia(1,{location:f});q=v.record.name,h=le(Eo(u.params,v.keys.filter(A=>!A.optional).concat(v.parent?v.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&Eo(f.params,v.keys.map(A=>A.name))),S=v.stringify(h)}else if(f.path!=null)S=f.path,v=a.find(A=>A.re.test(S)),v&&(h=v.parse(S),q=v.record.name);else{if(v=u.name?n.get(u.name):a.find(A=>A.re.test(u.path)),!v)throw ia(1,{location:f,currentLocation:u});q=v.record.name,h=le({},u.params,f.params),S=v.stringify(h)}const j=[];let M=v;for(;M;)j.unshift(M.record),M=M.parent;return{name:q,path:S,params:h,matched:j,meta:cu(j)}}e.forEach(f=>o(f));function d(){a.length=0,n.clear()}return{addRoute:o,resolve:p,removeRoute:r,clearRoutes:d,getRoutes:i,getRecordMatcher:s}}function Eo(e,t){const a={};for(const n of t)n in e&&(a[n]=e[n]);return a}function Ao(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:iu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function iu(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const n in e.components)t[n]=typeof a=="object"?a[n]:a;return t}function Ro(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cu(e){return e.reduce((t,a)=>le(t,a.meta),{})}function To(e,t){const a={};for(const n in e)a[n]=n in t?t[n]:e[n];return a}function lu(e,t){let a=0,n=t.length;for(;a!==n;){const o=a+n>>1;Ii(e,t[o])<0?n=o:a=o+1}const s=du(e);return s&&(n=t.lastIndexOf(s,n-1)),n}function du(e){let t=e;for(;t=t.parent;)if(Li(t)&&Ii(e,t)===0)return t}function Li({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function uu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(qi," "),r=o.indexOf("="),i=Ma(r<0?o:o.slice(0,r)),l=r<0?null:Ma(o.slice(r+1));if(i in t){let p=t[i];Je(p)||(p=t[i]=[p]),p.push(l)}else t[i]=l}return t}function jo(e){let t="";for(let a in e){const n=e[a];if(a=Rd(a),n==null){n!==void 0&&(t+=(t.length?"&":"")+a);continue}(Je(n)?n.map(o=>o&&is(o)):[n&&is(n)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+a,o!=null&&(t+="="+o))})}return t}function pu(e){const t={};for(const a in e){const n=e[a];n!==void 0&&(t[a]=Je(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const fu=Symbol(""),Mo=Symbol(""),En=Symbol(""),Vi=Symbol(""),ls=Symbol("");function fa(){let e=[];function t(n){return e.push(n),()=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)}}function a(){e=[]}return{add:t,list:()=>e.slice(),reset:a}}function Pt(e,t,a,n,s,o=r=>r()){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const p=u=>{u===!1?l(ia(4,{from:a,to:t})):u instanceof Error?l(u):Yd(u)?l(ia(2,{from:t,to:u})):(r&&n.enterCallbacks[s]===r&&typeof u=="function"&&r.push(u),i())},d=o(()=>e.call(n&&n.instances[s],t,a,p));let f=Promise.resolve(d);e.length<3&&(f=f.then(p)),f.catch(u=>l(u))})}function Fn(e,t,a,n,s=o=>o()){const o=[];for(const r of e)for(const i in r.components){let l=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(wi(l)){const d=(l.__vccOpts||l)[t];d&&o.push(Pt(d,a,n,r,i,s))}else{let p=l();o.push(()=>p.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${r.path}"`);const f=yd(d)?d.default:d;r.mods[i]=d,r.components[i]=f;const v=(f.__vccOpts||f)[t];return v&&Pt(v,a,n,r,i,s)()}))}}return o}function $o(e){const t=rt(En),a=rt(Vi),n=Q(()=>{const l=ea(e.to);return t.resolve(l)}),s=Q(()=>{const{matched:l}=n.value,{length:p}=l,d=l[p-1],f=a.matched;if(!d||!f.length)return-1;const u=f.findIndex(ra.bind(null,d));if(u>-1)return u;const v=Io(l[p-2]);return p>1&&Io(d)===v&&f[f.length-1].path!==v?f.findIndex(ra.bind(null,l[p-2])):u}),o=Q(()=>s.value>-1&&bu(a.params,n.value.params)),r=Q(()=>s.value>-1&&s.value===a.matched.length-1&&Ti(a.params,n.value.params));function i(l={}){if(hu(l)){const p=t[ea(e.replace)?"replace":"push"](ea(e.to)).catch(ka);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:n,href:Q(()=>n.value.href),isActive:o,isExactActive:r,navigate:i}}function vu(e){return e.length===1?e[0]:e}const mu=Ps({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$o,setup(e,{slots:t}){const a=yt($o(e)),{options:n}=rt(En),s=Q(()=>({[Lo(e.activeClass,n.linkActiveClass,"router-link-active")]:a.isActive,[Lo(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const o=t.default&&vu(t.default(a));return e.custom?o:Ce("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:s.value},o)}}}),gu=mu;function hu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bu(e,t){for(const a in t){const n=t[a],s=e[a];if(typeof n=="string"){if(n!==s)return!1}else if(!Je(s)||s.length!==n.length||n.some((o,r)=>o!==s[r]))return!1}return!0}function Io(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lo=(e,t,a)=>e??t??a,yu=Ps({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){const n=rt(ls),s=Q(()=>e.route||n.value),o=rt(Mo,0),r=Q(()=>{let p=ea(o);const{matched:d}=s.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),i=Q(()=>s.value.matched[r.value]);Ja(Mo,Q(()=>r.value+1)),Ja(fu,i),Ja(ls,s);const l=U();return _a(()=>[l.value,i.value,e.name],([p,d,f],[u,v,h])=>{d&&(d.instances[f]=p,v&&v!==d&&p&&p===u&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),p&&d&&(!v||!ra(d,v)||!u)&&(d.enterCallbacks[f]||[]).forEach(S=>S(p))},{flush:"post"}),()=>{const p=s.value,d=e.name,f=i.value,u=f&&f.components[d];if(!u)return Vo(a.default,{Component:u,route:p});const v=f.props[d],h=v?v===!0?p.params:typeof v=="function"?v(p):v:null,q=Ce(u,le({},h,t,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(f.instances[d]=null)},ref:l}));return Vo(a.default,{Component:q,route:p})||q}}});function Vo(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const Cu=yu;function xu(e){const t=ru(e.routes,e),a=e.parseQuery||uu,n=e.stringifyQuery||jo,s=e.history,o=fa(),r=fa(),i=fa(),l=Ac(St);let p=St;Jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Un.bind(null,_=>""+_),f=Un.bind(null,jd),u=Un.bind(null,Ma);function v(_,D){let I,N;return Mi(_)?(I=t.getRecordMatcher(_),N=D):N=_,t.addRoute(N,I)}function h(_){const D=t.getRecordMatcher(_);D&&t.removeRoute(D)}function S(){return t.getRoutes().map(_=>_.record)}function q(_){return!!t.getRecordMatcher(_)}function j(_,D){if(D=le({},D||l.value),typeof _=="string"){const y=zn(a,_,D.path),x=t.resolve({path:y.path},D),k=s.createHref(y.fullPath);return le(y,x,{params:u(x.params),hash:Ma(y.hash),redirectedFrom:void 0,href:k})}let I;if(_.path!=null)I=le({},_,{path:zn(a,_.path,D.path).path});else{const y=le({},_.params);for(const x in y)y[x]==null&&delete y[x];I=le({},_,{params:f(y)}),D.params=f(D.params)}const N=t.resolve(I,D),fe=_.hash||"";N.params=d(u(N.params));const m=Id(n,le({},_,{hash:Ad(fe),path:N.path})),g=s.createHref(m);return le({fullPath:m,hash:fe,query:n===jo?pu(_.query):_.query||{}},N,{redirectedFrom:void 0,href:g})}function M(_){return typeof _=="string"?zn(a,_,l.value.path):le({},_)}function A(_,D){if(p!==_)return ia(8,{from:D,to:_})}function b(_){return J(_)}function P(_){return b(le(M(_),{replace:!0}))}function K(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:I}=D;let N=typeof I=="function"?I(_):I;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=M(N):{path:N},N.params={}),le({query:_.query,hash:_.hash,params:N.path!=null?{}:_.params},N)}}function J(_,D){const I=p=j(_),N=l.value,fe=_.state,m=_.force,g=_.replace===!0,y=K(I);if(y)return J(le(M(y),{state:typeof y=="object"?le({},fe,y.state):fe,force:m,replace:g}),D||I);const x=I;x.redirectedFrom=D;let k;return!m&&Ld(n,N,I)&&(k=ia(16,{to:x,from:N}),Ye(N,N,!0,!1)),(k?Promise.resolve(k):ae(x,N)).catch(C=>pt(C)?pt(C,2)?C:xt(C):ce(C,x,N)).then(C=>{if(C){if(pt(C,2))return J(le({replace:g},M(C.to),{state:typeof C.to=="object"?le({},fe,C.to.state):fe,force:m}),D||x)}else C=V(x,N,!0,g,fe);return te(x,N,C),C})}function ge(_,D){const I=A(_,D);return I?Promise.reject(I):Promise.resolve()}function F(_){const D=zt.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(_):_()}function ae(_,D){let I;const[N,fe,m]=_u(_,D);I=Fn(N.reverse(),"beforeRouteLeave",_,D);for(const y of N)y.leaveGuards.forEach(x=>{I.push(Pt(x,_,D))});const g=ge.bind(null,_,D);return I.push(g),ze(I).then(()=>{I=[];for(const y of o.list())I.push(Pt(y,_,D));return I.push(g),ze(I)}).then(()=>{I=Fn(fe,"beforeRouteUpdate",_,D);for(const y of fe)y.updateGuards.forEach(x=>{I.push(Pt(x,_,D))});return I.push(g),ze(I)}).then(()=>{I=[];for(const y of m)if(y.beforeEnter)if(Je(y.beforeEnter))for(const x of y.beforeEnter)I.push(Pt(x,_,D));else I.push(Pt(y.beforeEnter,_,D));return I.push(g),ze(I)}).then(()=>(_.matched.forEach(y=>y.enterCallbacks={}),I=Fn(m,"beforeRouteEnter",_,D,F),I.push(g),ze(I))).then(()=>{I=[];for(const y of r.list())I.push(Pt(y,_,D));return I.push(g),ze(I)}).catch(y=>pt(y,8)?y:Promise.reject(y))}function te(_,D,I){i.list().forEach(N=>F(()=>N(_,D,I)))}function V(_,D,I,N,fe){const m=A(_,D);if(m)return m;const g=D===St,y=Jt?history.state:{};I&&(N||g?s.replace(_.fullPath,le({scroll:g&&y&&y.scroll},fe)):s.push(_.fullPath,fe)),l.value=_,Ye(_,D,I,g),xt()}let ne;function O(){ne||(ne=s.listen((_,D,I)=>{if(!za.listening)return;const N=j(_),fe=K(N);if(fe){J(le(fe,{replace:!0,force:!0}),N).catch(ka);return}p=N;const m=l.value;Jt&&Fd(So(m.fullPath,I.delta),qn()),ae(N,m).catch(g=>pt(g,12)?g:pt(g,2)?(J(le(M(g.to),{force:!0}),N).then(y=>{pt(y,20)&&!I.delta&&I.type===$a.pop&&s.go(-1,!1)}).catch(ka),Promise.reject()):(I.delta&&s.go(-I.delta,!1),ce(g,N,m))).then(g=>{g=g||V(N,m,!1),g&&(I.delta&&!pt(g,8)?s.go(-I.delta,!1):I.type===$a.pop&&pt(g,20)&&s.go(-1,!1)),te(N,m,g)}).catch(ka)}))}let se=fa(),he=fa(),pe;function ce(_,D,I){xt(_);const N=he.list();return N.length?N.forEach(fe=>fe(_,D,I)):console.error(_),Promise.reject(_)}function lt(){return pe&&l.value!==St?Promise.resolve():new Promise((_,D)=>{se.add([_,D])})}function xt(_){return pe||(pe=!_,O(),se.list().forEach(([D,I])=>_?I(_):D()),se.reset()),_}function Ye(_,D,I,N){const{scrollBehavior:fe}=e;if(!Jt||!fe)return Promise.resolve();const m=!I&&Hd(So(_.fullPath,0))||(N||!I)&&history.state&&history.state.scroll||null;return Tr().then(()=>fe(_,D,m)).then(g=>g&&zd(g)).catch(g=>ce(g,_,D))}const Ie=_=>s.go(_);let Ut;const zt=new Set,za={currentRoute:l,listening:!0,addRoute:v,removeRoute:h,clearRoutes:t.clearRoutes,hasRoute:q,getRoutes:S,resolve:j,options:e,push:b,replace:P,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:r.add,afterEach:i.add,onError:he.add,isReady:lt,install(_){const D=this;_.component("RouterLink",gu),_.component("RouterView",Cu),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ea(l)}),Jt&&!Ut&&l.value===St&&(Ut=!0,b(s.location).catch(fe=>{}));const I={};for(const fe in St)Object.defineProperty(I,fe,{get:()=>l.value[fe],enumerable:!0});_.provide(En,D),_.provide(Vi,Pr(I)),_.provide(ls,l);const N=_.unmount;zt.add(_),_.unmount=function(){zt.delete(_),zt.size<1&&(p=St,ne&&ne(),ne=null,l.value=St,Ut=!1,pe=!1),N()}}};function ze(_){return _.reduce((D,I)=>D.then(()=>F(I)),Promise.resolve())}return za}function _u(e,t){const a=[],n=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const i=t.matched[r];i&&(e.matched.find(p=>ra(p,i))?n.push(i):a.push(i));const l=e.matched[r];l&&(t.matched.find(p=>ra(p,l))||s.push(l))}return[a,n,s]}function Su(){return rt(En)}const ku={class:"page-container"},wu={class:"main-content"},Pu={class:"container"},qu={class:"cards-grid"},Eu={class:"material-symbols-outlined"},Au={class:"card-title"},Ru={class:"card-description"},Tu={__name:"topics",setup(e){const t=U([{title:"Que es vue",description:"Breve repaso de vue",icon:"auto_stories",colorClass:"color-green",tolink:"/whatIs"},{title:"Requisitos",description:"Que necesito para usar vue",icon:"code",colorClass:"color-blue",tolink:"/requirements"},{title:"Creacion de Proyecto",description:"Building blocks.",icon:"layers",colorClass:"color-purple",tolink:"/createProject"},{title:"Interpolacion",description:"The magic behind Vue.",icon:"psychology",colorClass:"color-yellow",tolink:"/interpolation"},{title:"Directivas de vue",description:"Out-of-the-box power.",icon:"view_cozy",colorClass:"color-red",tolink:"/directivesVue"},{title:"Options Api",description:"Declarative rendering.",icon:"terminal",colorClass:"color-indigo",tolink:"/optionsApi"},{title:"Composition api",description:"Detailed docs.",icon:"api",colorClass:"color-pink",tolink:"/compositionApi"},{title:"Ciclo de vida de vue",description:"See it in action.",icon:"integration_instructions",colorClass:"color-gray",tolink:"/cicleOfLife"},{title:"Componentes importacion",description:"Tools and libraries.",icon:"group_work",colorClass:"color-teal",tolink:"/importComponents"},{title:"Componetizacion Props",description:"From older versions.",icon:"upgrade",colorClass:"color-orange",tolink:"/props"},{title:"Creación de un proyecto template quasar",description:"Write better code.",icon:"thumb_up",colorClass:"color-cyan",tolink:"/templateQuasar"},{title:"Instalar Quasar en un proyecto ya creado",description:"Solve common issues.",icon:"build",colorClass:"color-lime",tolink:"/templateQuasarInstall"},{title:"Vue router",description:"Solve common issues.",icon:"route",colorClass:"color-red",tolink:"/vueRouter"},{title:"Pinia",description:"Solve common issues.",icon:"indeterminate_check_box",colorClass:"color-teal",tolink:"/pinia"},{title:"Pinia-plugin-presistedstate",description:"Solve common issues.",icon:"extension",colorClass:"color-indigo",tolink:"/piniaplugin"}]);return(a,n)=>{const s=oa("router-link");return Y(),ee("div",ku,[c("main",wu,[c("div",Pu,[n[0]||(n[0]=c("div",{class:"hero-section"},[c("h1",{class:"hero-title"},"Vue.js Manual"),c("p",{class:"hero-subtitle"}," Your comprehensive guide to building amazing web applications with Vue.js. ")],-1)),c("div",qu,[(Y(!0),ee(Ee,null,ca(t.value,o=>(Y(),ee("a",{key:o.title,class:"card"},[c("div",{class:ot(["card-icon-wrapper",o.colorClass])},[c("span",Eu,T(o.icon),1)],2),re(s,{class:"tolink",to:o.tolink},{default:At(()=>[c("div",null,[c("h2",Au,T(o.title),1),c("p",Ru,T(o.description),1)])]),_:2},1032,["to"])]))),128))])])])])}}},ju=we(Tu,[["__scopeId","data-v-550eae3b"]]),Mu={},$u={class:"father"};function Iu(e,t){return Y(),ee("div",$u,[...t[0]||(t[0]=[X('<section class="content" data-v-a4b06292><h1 class="title" data-v-a4b06292>¿Qué es Vue?</h1><p class="p" data-v-a4b06292> La palabra <strong data-v-a4b06292>Vue</strong> (pronunciado «viú») viene del francés y significa «view» (vista), la parte de la aplicación que los usuarios ven e interactúan. </p> --- <h2 class="subtitle" data-v-a4b06292>Vue: Un framework frontend</h2><p class="p" data-v-a4b06292> Vue.js es un <strong data-v-a4b06292>framework de JavaScript</strong> para el **frontend**. En términos sencillos, es una herramienta que nos ayuda a crear la parte visual de una página web de manera organizada y eficiente. A diferencia de un sitio web tradicional, las aplicaciones construidas con Vue se conocen como <strong data-v-a4b06292>SPA</strong> (Single Page Application), que significa que toda la aplicación se carga en una sola página, ofreciendo una experiencia rápida y fluida sin recargar el navegador. </p><p class="p" data-v-a4b06292> Una de las características más importantes de Vue es que es un <strong data-v-a4b06292>framework progresivo</strong>. Esto significa que puedes usarlo para proyectos pequeños, como añadir una funcionalidad interactiva a una página ya existente, o para construir aplicaciones web a gran escala. Vue es muy flexible y se adapta a tus necesidades. </p> --- <h2 class="subtitle" data-v-a4b06292>¿Por qué usar Vue para empezar?</h2><p class="p" data-v-a4b06292> Vue se ha vuelto muy popular para los principiantes por varias razones: </p><ul data-v-a4b06292><li class="p" data-v-a4b06292><strong data-v-a4b06292>Curva de Aprendizaje Sencilla:</strong> Es fácil de entender desde el principio, especialmente si ya sabes algo de HTML, CSS y JavaScript. </li><li class="p" data-v-a4b06292><strong data-v-a4b06292>Rendimiento:</strong> Vue es ligero y rápido, lo que hace que las aplicaciones se sientan ágiles y responsivas. </li><li class="p" data-v-a4b06292><strong data-v-a4b06292>Comunidad y Documentación:</strong> Tiene una comunidad activa y una documentación oficial excelente, lo que facilita encontrar ayuda y recursos. </li></ul></section>',1)])])}const Lu=we(Mu,[["render",Iu],["__scopeId","data-v-a4b06292"]]),Vu={},Ou={class:"father"};function Du(e,t){return Y(),ee("div",Ou,[...t[0]||(t[0]=[X('<section class="content" data-v-6c1fa768><h1 class="title" data-v-6c1fa768>Requisitos para tu Proyecto en Vue 3</h1><p class="p" data-v-6c1fa768> Para empezar a desarrollar con Vue, solo necesitas dos cosas principales: un entorno de desarrollo con las herramientas correctas y un buen editor de código. A continuación, te explicamos qué necesitas y por qué. </p> --- <h2 class="subtitle" data-v-6c1fa768>1. Node.js y NPM</h2><p class="p" data-v-6c1fa768> El requisito fundamental es tener **Node.js** instalado. Node.js es un entorno que permite ejecutar JavaScript fuera del navegador, lo cual es vital para Vue. Al instalarlo, se incluye automáticamente **NPM** (Node Package Manager), que es el gestor de paquetes que usaremos para instalar Vue y todas las librerías necesarias para nuestro proyecto. </p><p class="p" data-v-6c1fa768> Puedes verificar si ya los tienes instalados abriendo tu terminal y ejecutando los siguientes comandos. Si ves un número de versión, estás listo. </p><article class="code" data-v-6c1fa768><div data-v-6c1fa768><p class="p" data-v-6c1fa768>node -v</p></div></article><article class="code" data-v-6c1fa768><div data-v-6c1fa768><p class="p" data-v-6c1fa768>npm -v</p></div></article><p class="p" data-v-6c1fa768> Si alguno de estos comandos no funciona, significa que necesitas instalar Node.js. Puedes descargarlo desde su página web oficial. </p><h2 class="subtitle" data-v-6c1fa768>2. Editor de Código</h2><p class="p" data-v-6c1fa768> Se recomienda encarecidamente usar un editor de código moderno como **Visual Studio Code**. Es gratuito, tiene muchas funciones y es el editor estándar en la comunidad de Vue. </p><p class="p" data-v-6c1fa768> Además, instala la extensión **Volar** para Vue. Volar mejora tu experiencia de desarrollo ofreciéndote: </p><ul data-v-6c1fa768><li class="p" data-v-6c1fa768><strong data-v-6c1fa768>Resaltado de sintaxis:</strong> Para ver tu código con colores que facilitan la lectura. </li><li class="p" data-v-6c1fa768><strong data-v-6c1fa768>Autocompletado inteligente:</strong> Te sugiere código mientras escribes, ahorrándote tiempo y evitando errores. </li><li class="p" data-v-6c1fa768><strong data-v-6c1fa768>Análisis de errores:</strong> Te avisa sobre posibles errores en tu código en tiempo real. </li></ul><p class="p" data-v-6c1fa768> Con Node.js, NPM, un buen editor y la extensión Volar, tendrás todo lo que necesitas para comenzar tu viaje con Vue. </p></section>',1)])])}const Nu=we(Vu,[["render",Du],["__scopeId","data-v-6c1fa768"]]),Bu={class:"father"},Uu={__name:"createProject",setup(e){return(t,a)=>(Y(),ee("div",Bu,[...a[0]||(a[0]=[X('<section class="content" data-v-7a5c8004><h1 class="title" data-v-7a5c8004>Crear un Proyecto en Vue 3</h1><p class="p" data-v-7a5c8004> Para iniciar un nuevo proyecto en Vue 3, la forma más rápida y recomendada es usar <strong data-v-7a5c8004>Vite</strong>, una herramienta de compilación moderna que ofrece una experiencia de desarrollo ultrarrápida. Usaremos el comando <code data-v-7a5c8004>npm create vite@latest</code> para generar la estructura inicial del proyecto. </p><hr data-v-7a5c8004><h2 class="subtitle" data-v-7a5c8004>¿Cómo funciona?</h2><p class="p" data-v-7a5c8004> Al ejecutar este comando en tu terminal, se iniciará un asistente interactivo que te guiará paso a paso para configurar tu proyecto. Podrás elegir el <strong data-v-7a5c8004>nombre</strong> de tu proyecto, seleccionar <strong data-v-7a5c8004>Vue</strong> como framework y escoger una variante, como JavaScript o TypeScript. </p><div class="code-block" data-v-7a5c8004><h3 class="code-title" data-v-7a5c8004>Opciones de Configuración</h3><p class="p" data-v-7a5c8004> Durante la configuración, el asistente te mostrará una lista completa de frameworks. Puedes elegir el que prefieras a tu gusto, aunque para este tutorial nos enfocaremos en <strong data-v-7a5c8004>Vue</strong> con <strong data-v-7a5c8004>JavaScript</strong>. </p><article class="code" data-v-7a5c8004><div data-v-7a5c8004><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># Elige tu framework preferido...</span></p><p class="p-code" data-v-7a5c8004><span style="color:#22c55e;" data-v-7a5c8004>✔</span><span style="color:#e5e7eb;" data-v-7a5c8004> Select a framework: </span><span style="color:#8b949e;" data-v-7a5c8004>… Vue</span></p><div class="pl-4" data-v-7a5c8004><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Vanilla</p><p class="p-code" style="color:#42b883;" data-v-7a5c8004>❯ Vue</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>React</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Preact</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Lit</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Svelte</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Solid</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Qwik</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Others</p></div><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># ...y después una variante (JavaScript o TypeScript).</span></p><p class="p-code" data-v-7a5c8004><span style="color:#22c55e;" data-v-7a5c8004>✔</span><span style="color:#e5e7eb;" data-v-7a5c8004> Select a variant: </span><span style="color:#8b949e;" data-v-7a5c8004>… JavaScript</span></p><div class="pl-4" data-v-7a5c8004><p class="p-code" style="color:#42b883;" data-v-7a5c8004>❯ JavaScript</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>TypeScript</p></div></div></article></div><hr data-v-7a5c8004><h2 class="subtitle" data-v-7a5c8004>Proceso Completo de Creación</h2><p class="p" data-v-7a5c8004> Cuando ejecutes el comando, verás un proceso interactivo completo con todas las opciones disponibles. Aquí te mostramos cómo se ve típicamente el flujo completo: </p><div class="code-block" data-v-7a5c8004><h3 class="code-title" data-v-7a5c8004>Flujo Completo en Terminal</h3><article class="code" data-v-7a5c8004><div data-v-7a5c8004><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>&gt; proyecto@1.0.0 npx</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>&gt; create-vite</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Project name:</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>mi-proyecto-vue</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Select a framework:</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>Vue</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Select a variant:</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>JavaScript</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Use rolldown-vite (Experimental):</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>No</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Install with npm and start now?</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>Yes</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Scaffolding project in /ruta/de/tu/proyecto/mi-proyecto-vue...</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Installing dependencies with npm...</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>done.</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>¡Proyecto creado exitosamente! 🎉</span></p></div></article></div><div class="example" data-v-7a5c8004><h3 class="example-title" data-v-7a5c8004>💡 Nota Importante</h3><p class="p" data-v-7a5c8004> El asistente te preguntará si quieres instalar las dependencias inmediatamente. Si seleccionas &quot;Yes&quot;, Vite automáticamente ejecutará <code data-v-7a5c8004>npm install</code> por ti. Si seleccionas &quot;No&quot;, deberás instalar las dependencias manualmente después. </p></div><hr data-v-7a5c8004><h2 class="subtitle" data-v-7a5c8004>Ejemplo Práctico</h2><p class="p" data-v-7a5c8004> A continuación, te mostramos los comandos y los pasos que debes seguir en tu terminal para crear e iniciar tu nuevo proyecto Vue. </p><div class="example" data-v-7a5c8004><h3 class="example-title" data-v-7a5c8004>Proceso en la Terminal</h3><p class="p" data-v-7a5c8004> Sigue estos tres sencillos pasos para tener tu proyecto funcionando en minutos. </p></div><div class="code-block" data-v-7a5c8004><h3 class="code-title" data-v-7a5c8004>Comandos</h3><p class="p" data-v-7a5c8004> Estos son los comandos que necesitas ejecutar en orden. </p><article class="code" data-v-7a5c8004><div data-v-7a5c8004><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 1. Ejecuta el comando de creación y sigue las instrucciones</span></p><p class="p-code" data-v-7a5c8004>npm create vite@latest</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 2. Navega al directorio de tu nuevo proyecto</span></p><p class="p-code" data-v-7a5c8004>cd mi-proyecto-vue</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 3. Instala las dependencias necesarias (si no lo hiciste automáticamente)</span></p><p class="p-code" data-v-7a5c8004>npm install</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 4. Inicia el servidor de desarrollo</span></p><p class="p-code" data-v-7a5c8004>npm run dev</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 5. Abre tu navegador en la URL que aparece en la terminal</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># Normalmente: http://localhost:5173</span></p></div></article></div><div class="example" data-v-7a5c8004><h3 class="example-title" data-v-7a5c8004>✅ Listo para Empezar</h3><p class="p" data-v-7a5c8004> Una vez que completes estos pasos, tendrás un proyecto Vue 3 completamente funcional con hot-reload, build optimizado y todas las características modernas de Vite. ¡Ahora puedes comenzar a desarrollar tu aplicación! </p></div></section>',1)])]))}},zu=we(Uu,[["__scopeId","data-v-7a5c8004"]]),Fu={class:"father"},Hu={class:"content"},Qu={class:"p"},Wu={class:"example"},Ku={class:"p"},Gu={__name:"interpolation",setup(e){const t=U("Hola, soy un valor interpolado!");return(a,n)=>(Y(),ee("div",Fu,[c("section",Hu,[n[6]||(n[6]=c("h1",{class:"title"},"Interpolación",-1)),c("p",Qu,[n[0]||(n[0]=Z(" La interpolación es la forma más sencilla y común de mostrar datos dinámicos en la interfaz de usuario de Vue. Usamos la sintaxis de ",-1)),n[1]||(n[1]=c("strong",null,"doble bigote",-1)),n[2]||(n[2]=Z(" (",-1)),c("code",null,T(),1),n[3]||(n[3]=Z(") para incrustar valores directamente en la plantilla HTML. ",-1))]),n[7]||(n[7]=c("hr",null,null,-1)),n[8]||(n[8]=c("h2",{class:"subtitle"},"¿Cómo funciona?",-1)),n[9]||(n[9]=c("p",{class:"p"},[Z(" Cuando Vue procesa tu plantilla, reemplaza la expresión dentro de los bigotes con el valor de la propiedad correspondiente. La clave de la interpolación es su "),c("strong",null,"reactividad"),Z(": si el valor de la variable cambia en tu script, la vista se actualizará de forma automática, sin que necesites hacer nada. ")],-1)),n[10]||(n[10]=c("hr",null,null,-1)),n[11]||(n[11]=c("h2",{class:"subtitle"},"Ejemplo Práctico",-1)),n[12]||(n[12]=c("p",{class:"p"}," A continuación, te mostramos cómo la variable `mensaje` se inserta directamente en la plantilla. ",-1)),c("div",Wu,[n[5]||(n[5]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",Ku,[n[4]||(n[4]=Z(" Mensaje: ",-1)),c("strong",null,T(t.value),1)])]),n[13]||(n[13]=c("div",{class:"code-block"},[c("h3",{class:"code-title"},"Código"),c("p",{class:"p"}," Así es como se vería el código en tu archivo `.vue`: "),c("pre",{class:"code"},[c("code",null,`
<template>
  <p>Mensaje: <strong> {{mensaje}} </strong></p>
</template>

<script setup>
import { ref } from 'vue';
const mensaje = ref('Hola, soy un valor interpolado!');
<\/script>
        `)])],-1))])]))}},Ju=we(Gu,[["__scopeId","data-v-eb8a5b80"]]),Yu={class:"father"},Xu={class:"content"},Zu={class:"example"},ep=["textContent"],tp={class:"example"},ap=["innerHTML"],np={class:"example"},sp={class:"p"},op={class:"p"},rp={class:"code-block"},ip={class:"code"},cp={class:"example"},lp={class:"p"},dp={class:"p"},up={class:"example"},pp={class:"p"},fp={key:0,class:"p"},vp={key:1,class:"p"},mp={key:2,class:"p"},gp={class:"code-block"},hp={class:"code"},bp={class:"example"},yp={class:"code-block"},Cp={class:"code"},xp={class:"example"},_p={class:"p"},Sp={class:"p"},kp=["disabled"],wp={class:"code-block"},Pp={class:"code"},qp={class:"example"},Ep={class:"p"},Ap={class:"p"},Rp={class:"p"},Tp={class:"p"},jp={class:"code-block"},Mp={class:"code"},$p={class:"code-block"},Ip={class:"code"},Lp={class:"example"},Vp={class:"p"},Op={class:"p"},Dp={class:"code-block"},Np={class:"code"},Bp={__name:"directivesVue",setup(e){const t=U("¡Hola desde v-text!"),a=U("<strong>Texto en negrita</strong> con <em>énfasis</em>"),n=U(!0),s=U("activo"),o=U(["Aprender Vue.js","Practicar directivas","Crear una aplicación"]),r=U(0),i=U(""),l=Q(()=>i.value||"black"),p=U(""),d=U(!1),f=U(0);function u(){s.value=s.value==="activo"?"inactivo":"activo"}return(v,h)=>(Y(),ee("div",Yu,[c("section",Xu,[h[25]||(h[25]=X('<h1 class="title" data-v-100ce31c>Directivas de Vue</h1><p class="p" data-v-100ce31c> Las directivas son instrucciones especiales en el DOM que Vue.js utiliza para aplicar comportamientos reactivos a los elementos. Se reconocen por el prefijo <code data-v-100ce31c>v-</code> y son una parte fundamental del poder de Vue. </p><hr data-v-100ce31c><h2 class="subtitle" data-v-100ce31c>Directivas Básicas</h2><p class="p" data-v-100ce31c> Vue incluye un conjunto de directivas integradas que cubren los casos de uso más comunes en el desarrollo de aplicaciones. </p><h3 class="subtitle-sm" data-v-100ce31c>v-text</h3><p class="p" data-v-100ce31c> Actualiza el <code data-v-100ce31c>textContent</code> del elemento. Similar a la interpolación pero reemplaza todo el contenido. </p>',7)),c("div",Zu,[h[8]||(h[8]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",{class:"p",textContent:T(t.value)},null,8,ep)]),h[26]||(h[26]=X(`<div class="code-block" data-v-100ce31c><h3 class="code-title" data-v-100ce31c>Código</h3><article class="code" data-v-100ce31c><pre data-v-100ce31c><code data-v-100ce31c>&lt;template&gt;
  &lt;p v-text=&quot;mensaje&quot;&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
const mensaje = ref(&#39;¡Hola desde v-text!&#39;);
&lt;/script&gt;</code></pre></article></div><h3 class="subtitle-sm" data-v-100ce31c>v-html</h3><p class="p" data-v-100ce31c> Actualiza el <code data-v-100ce31c>innerHTML</code> del elemento. Úsalo con precaución ya que puede exponerte a ataques XSS. </p>`,3)),c("div",tp,[h[9]||(h[9]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",{class:"p",innerHTML:a.value},null,8,ap)]),h[27]||(h[27]=X(`<div class="code-block" data-v-100ce31c><h3 class="code-title" data-v-100ce31c>Código</h3><article class="code" data-v-100ce31c><pre data-v-100ce31c><code data-v-100ce31c>&lt;template&gt;
  &lt;p v-html=&quot;htmlContent&quot;&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
const htmlContent = ref(&#39;&lt;strong&gt;Texto en negrita&lt;/strong&gt; con &lt;em&gt;énfasis&lt;/em&gt;&#39;);
&lt;/script&gt;</code></pre></article></div><h3 class="subtitle-sm" data-v-100ce31c>v-on</h3><p class="p" data-v-100ce31c> Escucha eventos del DOM y ejecuta algún código cuando son disparados. Se puede usar la forma abreviada <code data-v-100ce31c>@</code>. </p>`,3)),c("div",np,[h[10]||(h[10]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",sp,[c("button",{onClick:h[0]||(h[0]=S=>r.value++),class:"demo-button"}," Incrementar (v-on:click) "),c("button",{onClick:h[1]||(h[1]=S=>r.value--),class:"demo-button"}," Decrementar (@click) ")]),c("p",op,"Contador: "+T(r.value),1)]),c("div",rp,[h[11]||(h[11]=c("h3",{class:"code-title"},"Código",-1)),c("article",ip,[c("pre",null,[c("code",null,`<template>
  <button v-on:click="contador++">Incrementar (v-on:click)</button>
  <button @click="contador--">Decrementar (@click)</button>
  <p>Contador: `+T(r.value)+`</p>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);
<\/script>`,1)])])]),h[28]||(h[28]=c("h3",{class:"subtitle-sm"},"v-show",-1)),h[29]||(h[29]=c("p",{class:"p"},[Z(" Alterna la visibilidad del elemento usando CSS ("),c("code",null,"display: none"),Z("). El elemento siempre se renderiza en el DOM. ")],-1)),c("div",cp,[h[12]||(h[12]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",lp,[c("button",{onClick:h[2]||(h[2]=S=>n.value=!n.value),class:"demo-button"}," Alternar visibilidad ")]),_e(c("p",dp,"¡Este elemento se muestra u oculta!",512),[[Wl,n.value]])]),h[30]||(h[30]=X(`<div class="code-block" data-v-100ce31c><h3 class="code-title" data-v-100ce31c>Código</h3><article class="code" data-v-100ce31c><pre data-v-100ce31c><code data-v-100ce31c>&lt;template&gt;
  &lt;button @click=&quot;mostrar = !mostrar&quot;&gt;Alternar visibilidad&lt;/button&gt;
  &lt;p v-show=&quot;mostrar&quot;&gt;¡Este elemento se muestra u oculta!&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
const mostrar = ref(true);
&lt;/script&gt;</code></pre></article></div><h3 class="subtitle-sm" data-v-100ce31c>v-if, v-else-if, v-else</h3><p class="p" data-v-100ce31c> Renderiza condicionalmente un elemento basado en la veracidad de una expresión. A diferencia de v-show, estos elementos no se renderizan en el DOM si la condición es falsa. </p>`,3)),c("div",up,[h[13]||(h[13]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",pp,[c("button",{onClick:u,class:"demo-button"}," Cambiar estado ("+T(s.value)+") ",1)]),s.value==="activo"?(Y(),ee("p",fp,"El sistema está ACTIVO")):s.value==="inactivo"?(Y(),ee("p",vp," El sistema está INACTIVO ")):(Y(),ee("p",mp,"Estado desconocido"))]),c("div",gp,[h[14]||(h[14]=c("h3",{class:"code-title"},"Código",-1)),c("article",hp,[c("pre",null,[c("code",null,`<template>
  <button @click="cambiarEstado">Cambiar estado (`+T(s.value)+`)</button>
  <p v-if="estado === 'activo'">El sistema está ACTIVO</p>
  <p v-else-if="estado === 'inactivo'">El sistema está INACTIVO</p>
  <p v-else>Estado desconocido</p>
</template>

<script setup>
import { ref } from 'vue';
const estado = ref('activo');

function cambiarEstado() {
  estado.value = estado.value === 'activo' ? 'inactivo' : 'activo';
}
<\/script>`,1)])])]),h[31]||(h[31]=c("h3",{class:"subtitle-sm"},"v-for",-1)),h[32]||(h[32]=c("p",{class:"p"}," Renderiza una lista de elementos basados en un array u objeto. Es la forma de hacer bucles en las plantillas de Vue. ",-1)),c("div",bp,[h[15]||(h[15]=c("h3",{class:"example-title"},"Resultado",-1)),c("ul",null,[(Y(!0),ee(Ee,null,ca(o.value,(S,q)=>(Y(),ee("li",{key:q,class:"p"},T(q+1)+". "+T(S),1))),128))])]),c("div",yp,[h[16]||(h[16]=c("h3",{class:"code-title"},"Código",-1)),c("article",Cp,[c("pre",null,[c("code",null,`<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      `+T(v.index+1)+". "+T(v.tarea)+`
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
const tareas = ref([
  'Aprender Vue.js',
  'Practicar directivas',
  'Crear una aplicación'
]);
<\/script>`,1)])])]),h[33]||(h[33]=c("h3",{class:"subtitle-sm"},"v-bind",-1)),h[34]||(h[34]=c("p",{class:"p"},[Z(" Enlaza dinámicamente uno o más atributos, o una prop de componente a una expresión. Se puede usar la forma abreviada "),c("code",null,":"),Z(". ")],-1)),c("div",xp,[h[17]||(h[17]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",_p,[_e(c("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=S=>i.value=S),placeholder:"Escribe un color"},null,512),[[je,i.value]])]),c("p",{class:"p",style:Va({color:l.value})}," Este texto cambiará de color según tu entrada: "+T(i.value),5),c("p",Sp,[c("button",{disabled:!i.value,class:"demo-button"}," Botón "+T(i.value?"habilitado":"deshabilitado"),9,kp)])]),c("div",wp,[h[18]||(h[18]=c("h3",{class:"code-title"},"Código",-1)),c("article",Pp,[c("pre",null,[c("code",null,`<template>
  <input type="text" v-model="colorFavorito" placeholder="Escribe un color">
  <p :style="{ color: colorTexto }">
    Este texto cambiará de color según tu entrada: `+T(i.value)+`
  </p>
  <button :disabled="!colorFavorito">
    Botón `+T(i.value?"habilitado":"deshabilitado")+`
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';
const colorFavorito = ref('');
const colorTexto = computed(() => {
  return colorFavorito.value || 'black';
});
<\/script>`,1)])])]),h[35]||(h[35]=c("h3",{class:"subtitle-sm"},"v-model",-1)),h[36]||(h[36]=c("p",{class:"p"},' Crea un enlace bidireccional entre un elemento de formulario y el estado de la aplicación. Es la forma de implementar "two-way binding" en Vue. ',-1)),c("div",qp,[h[20]||(h[20]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",Ep,[_e(c("input",{type:"text","onUpdate:modelValue":h[4]||(h[4]=S=>p.value=S),placeholder:"Escribe tu nombre"},null,512),[[je,p.value]])]),c("p",Ap,"Hola, "+T(p.value||"desconocido")+"!",1),c("p",Rp,[_e(c("input",{type:"checkbox","onUpdate:modelValue":h[5]||(h[5]=S=>d.value=S),id:"aceptar"},null,512),[[Ts,d.value]]),h[19]||(h[19]=c("label",{for:"aceptar"},"Acepto los términos",-1))]),c("p",Tp,"Estado: "+T(d.value?"Aceptado":"No aceptado"),1)]),c("div",jp,[h[21]||(h[21]=c("h3",{class:"code-title"},"Código",-1)),c("article",Mp,[c("pre",null,[c("code",null,`<template>
  <input type="text" v-model="nombre" placeholder="Escribe tu nombre">
  <p>Hola, `+T(p.value||"desconocido")+`!</p>
  <input type="checkbox" v-model="aceptado" id="aceptar">
  <label for="aceptar">Acepto los términos</label>
  <p>Estado: `+T(d.value?"Aceptado":"No aceptado")+`</p>
</template>

<script setup>
import { ref } from 'vue';
const nombre = ref('');
const aceptado = ref(false);
<\/script>`,1)])])]),h[37]||(h[37]=X('<h3 class="subtitle-sm" data-v-100ce31c>v-pre</h3><p class="p" data-v-100ce31c> Omite la compilación para este elemento y todos sus hijos. Útil para mostrar mustaches crudos. </p><div class="example" data-v-100ce31c><h3 class="example-title" data-v-100ce31c>Resultado</h3><p class="p" data-v-100ce31c> Este contenido no será compilado: {{ estoNoSeRenderizará }} </p></div>',3)),c("div",$p,[h[22]||(h[22]=c("h3",{class:"code-title"},"Código",-1)),c("article",Ip,[c("pre",null,[c("code",null,`<template>
  <p v-pre>Este contenido no será compilado: `+T(v.estoNoSeRenderizará)+`</p>
</template>`,1)])])]),h[38]||(h[38]=c("h3",{class:"subtitle-sm"},"v-once",-1)),h[39]||(h[39]=c("p",{class:"p"}," Renderiza el elemento y el componente una sola vez. En las subsecuentes actualizaciones, el elemento/componente y todos sus hijos serán tratados como contenido estático. ",-1)),c("div",Lp,[h[23]||(h[23]=c("h3",{class:"example-title"},"Resultado",-1)),c("p",Vp,[c("button",{onClick:h[6]||(h[6]=S=>f.value++),class:"demo-button"}," Incrementar ")]),c("p",Op,"Valor normal: "+T(f.value),1),h[7]||(on(-1,!0),(h[7]=c("p",{class:"p"},[Z("Valor con v-once: "+T(f.value),1)])).cacheIndex=7,on(1),h[7])]),c("div",Dp,[h[24]||(h[24]=c("h3",{class:"code-title"},"Código",-1)),c("article",Np,[c("pre",null,[c("code",null,`<template>
  <button @click="contadorOnce++">Incrementar</button>
  <p>Valor normal: `+T(f.value)+`</p>
  <p v-once>Valor con v-once: `+T(f.value)+`</p>
</template>

<script setup>
import { ref } from 'vue';
const contadorOnce = ref(0);
<\/script>`,1)])])]),h[40]||(h[40]=X('<hr data-v-100ce31c><h2 class="subtitle" data-v-100ce31c>Resumen de Directivas</h2><div class="table-container" data-v-100ce31c><table class="directives-table" data-v-100ce31c><thead data-v-100ce31c><tr data-v-100ce31c><th data-v-100ce31c>Directiva</th><th data-v-100ce31c>Función</th><th data-v-100ce31c>Sintaxis Abreviada</th></tr></thead><tbody data-v-100ce31c><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-text</code></td><td data-v-100ce31c>Actualiza el textContent del elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-html</code></td><td data-v-100ce31c>Actualiza el innerHTML del elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-show</code></td><td data-v-100ce31c>Alterna visibilidad mediante CSS display</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-on</code></td><td data-v-100ce31c>Escucha eventos en el elemento</td><td data-v-100ce31c><code data-v-100ce31c>@</code></td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-if</code></td><td data-v-100ce31c>Renderiza condicionalmente un elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-else-if</code></td><td data-v-100ce31c>Representa el &quot;bloque else if&quot; para v-if</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-else</code></td><td data-v-100ce31c>Representa el &quot;bloque else&quot; para v-if</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-for</code></td><td data-v-100ce31c>Renderiza una lista de elementos</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-bind</code></td><td data-v-100ce31c>Enlaza dinámicamente un atributo</td><td data-v-100ce31c><code data-v-100ce31c>:</code></td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-model</code></td><td data-v-100ce31c>Crea un enlace bidireccional en formularios</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-pre</code></td><td data-v-100ce31c>Omite la compilación en este elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-once</code></td><td data-v-100ce31c>Renderiza el elemento una sola vez</td><td data-v-100ce31c>-</td></tr></tbody></table></div>',3))])]))}},Up=we(Bp,[["__scopeId","data-v-100ce31c"]]),zp={name:"OptionsApi",data(){return{nombre:"",apellido:"",busqueda:"",cargando:!1,nuevaTarea:"",tareas:[{texto:"Aprender Options API",completada:!0},{texto:"Practicar con ejemplos",completada:!1},{texto:"Crear componentes",completada:!1}],filtro:"todas"}},computed:{nombreCompleto(){return this.nombre+" "+this.apellido},tareasFiltradas(){switch(this.filtro){case"pendientes":return this.tareas.filter(e=>!e.completada);case"completadas":return this.tareas.filter(e=>e.completada);default:return this.tareas}},totalTareas(){return this.tareas.length},tareasPendientes(){return this.tareas.filter(e=>!e.completada).length},tareasCompletadas(){return this.tareas.filter(e=>e.completada).length}},watch:{busqueda(e){e&&(this.cargando=!0,setTimeout(()=>{this.cargando=!1},500))}},methods:{agregarTarea(){this.nuevaTarea.trim()&&(this.tareas.push({texto:this.nuevaTarea.trim(),completada:!1}),this.nuevaTarea="")},eliminarTarea(e){this.tareas.splice(e,1)}},mounted(){console.log("Componente Options API montado")}},Fp={class:"father"},Hp={class:"content"},Qp={class:"code-block"},Wp={class:"code"},Kp={class:"example"},Gp={class:"p"},Jp={class:"tareas-lista"},Yp=["onUpdate:modelValue"],Xp=["onClick"],Zp={class:"filtros"};function ef(e,t,a,n,s,o){return Y(),ee("div",Fp,[c("section",Hp,[t[8]||(t[8]=X('<h1 class="title" data-v-9e737933>Options API</h1><p class="p" data-v-9e737933> La <strong data-v-9e737933>Options API</strong> es el estilo original de Vue para definir componentes. Organiza la lógica del componente en varias opciones como <code data-v-9e737933>data</code>, <code data-v-9e737933>methods</code>, <code data-v-9e737933>computed</code>, etc. Es muy intuitiva para desarrolladores que vienen de la programación orientada a objetos. </p><hr data-v-9e737933><h2 class="subtitle" data-v-9e737933>¿Qué es la Options API?</h2><p class="p" data-v-9e737933> En la Options API, definimos un componente usando un objeto de opciones. Cada opción tiene un propósito específico: </p><ul data-v-9e737933><li class="p" data-v-9e737933><strong data-v-9e737933>data:</strong> Define las variables reactivas del componente</li><li class="p" data-v-9e737933><strong data-v-9e737933>methods:</strong> Contiene las funciones del componente</li><li class="p" data-v-9e737933><strong data-v-9e737933>computed:</strong> Propiedades calculadas que se actualizan automáticamente</li><li class="p" data-v-9e737933><strong data-v-9e737933>watch:</strong> Observa cambios en las variables y ejecuta código</li><li class="p" data-v-9e737933><strong data-v-9e737933>lifecycle hooks:</strong> Funciones que se ejecutan en momentos específicos del ciclo de vida</li></ul><hr data-v-9e737933><h2 class="subtitle" data-v-9e737933>Estructura Básica</h2><p class="p" data-v-9e737933> Un componente usando Options API se estructura de la siguiente manera: </p>',9)),c("div",Qp,[t[6]||(t[6]=c("h3",{class:"code-title"},"Código de Ejemplo",-1)),c("pre",Wp,[c("code",null,`
<template>
  <div>
    <h1>`+T(e.titulo)+`</h1>
    <p>Contador: `+T(e.contador)+`</p>
    <button @click="incrementar">Incrementar</button>
    <p>Doble: `+T(e.dobleContador)+`</p>
  </div>
</template>

<script>
export default {
  name: 'MiComponente',
  data() {
    return {
      titulo: 'Mi Componente',
      contador: 0
    }
  },
  computed: {
    dobleContador() {
      return this.contador * 2;
    }
  },
  methods: {
    incrementar() {
      this.contador++;
    }
  },
  mounted() {
    console.log('Componente montado');
  }
}
<\/script>
        `,1)])]),t[9]||(t[9]=c("hr",null,null,-1)),t[10]||(t[10]=c("h2",{class:"subtitle"},"Ejemplo Completo",-1)),t[11]||(t[11]=c("p",{class:"p"}," Aquí tienes un ejemplo completo de un componente usando Options API: ",-1)),c("div",Kp,[t[7]||(t[7]=c("h3",{class:"example-title"},"Lista de Tareas",-1)),c("div",Gp,[_e(c("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>s.nuevaTarea=r),onKeyup:t[1]||(t[1]=ki((...r)=>o.agregarTarea&&o.agregarTarea(...r),["enter"])),placeholder:"Nueva tarea",class:"demo-input"},null,544),[[je,s.nuevaTarea]]),c("button",{onClick:t[2]||(t[2]=(...r)=>o.agregarTarea&&o.agregarTarea(...r)),class:"demo-button"},"Agregar"),c("ul",Jp,[(Y(!0),ee(Ee,null,ca(o.tareasFiltradas,(r,i)=>(Y(),ee("li",{key:i,class:"tarea-item"},[_e(c("input",{type:"checkbox","onUpdate:modelValue":l=>r.completada=l},null,8,Yp),[[Ts,r.completada]]),c("span",{class:ot({completada:r.completada})},T(r.texto),3),c("button",{onClick:l=>o.eliminarTarea(i),class:"demo-button small"},"Eliminar",8,Xp)]))),128))]),c("div",Zp,[c("button",{onClick:t[3]||(t[3]=r=>s.filtro="todas"),class:"demo-button small"},"Todas ("+T(o.totalTareas)+")",1),c("button",{onClick:t[4]||(t[4]=r=>s.filtro="pendientes"),class:"demo-button small"},"Pendientes ("+T(o.tareasPendientes)+")",1),c("button",{onClick:t[5]||(t[5]=r=>s.filtro="completadas"),class:"demo-button small"},"Completadas ("+T(o.tareasCompletadas)+")",1)])])])])])}const tf=we(zp,[["render",ef],["__scopeId","data-v-9e737933"]]),af={class:"father"},nf={class:"content"},sf={class:"example"},of={class:"p"},rf={class:"example"},cf={class:"p"},lf={class:"example"},df={class:"p"},uf={class:"example"},pf={class:"p"},ff={key:0},vf={key:1},mf={class:"example"},gf={class:"p"},hf={class:"tareas-lista"},bf=["onUpdate:modelValue"],yf=["onClick"],Cf={class:"filtros"},xf={__name:"compositionApi",setup(e){const t=U(""),a=U(0),n=yt({nombre:"",edad:0}),s=U(0),o=U(0),r=U(""),i=U(!1),l=U(""),p=U([{id:1,texto:"Aprender Composition API",completada:!0},{id:2,texto:"Practicar con ejemplos",completada:!1},{id:3,texto:"Crear composables",completada:!1}]),d=U("todas"),f=Q(()=>s.value*o.value),u=Q(()=>{switch(d.value){case"pendientes":return p.value.filter(A=>!A.completada);case"completadas":return p.value.filter(A=>A.completada);default:return p.value}}),v=Q(()=>p.value.length),h=Q(()=>p.value.filter(A=>!A.completada).length),S=Q(()=>p.value.filter(A=>A.completada).length),q=()=>{a.value++},j=()=>{l.value.trim()&&(p.value.push({id:Date.now(),texto:l.value.trim(),completada:!1}),l.value="")},M=A=>{p.value.splice(A,1)};return _a(r,A=>{A&&(i.value=!0,setTimeout(()=>{i.value=!1},500))}),Da(()=>{console.log("Componente Composition API montado")}),(A,b)=>(Y(),ee("div",af,[c("section",nf,[b[24]||(b[24]=X(`<h1 class="title" data-v-1f2c92e0>Composition API</h1><p class="p" data-v-1f2c92e0> La <strong data-v-1f2c92e0>Composition API</strong> es una nueva forma de organizar la lógica en componentes Vue. Introducida en Vue 3, permite agrupar código por funcionalidad en lugar de por opciones, haciendo que los componentes complejos sean más fáciles de entender y mantener. </p><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>¿Por qué Composition API?</h2><p class="p" data-v-1f2c92e0> Mientras la Options API organiza el código por tipo (data, methods, computed), la Composition API permite agrupar toda la lógica relacionada en una misma sección. Esto es especialmente útil en componentes grandes donde la lógica relacionada puede estar dispersa en diferentes opciones. </p><div class="example" data-v-1f2c92e0><h3 class="example-title" data-v-1f2c92e0>Comparación Visual</h3><div class="comparison" data-v-1f2c92e0><div class="approach" data-v-1f2c92e0><h4 data-v-1f2c92e0>Options API</h4><p class="p" data-v-1f2c92e0>Lógica dispersa por tipo</p><pre class="code-small" data-v-1f2c92e0><code data-v-1f2c92e0>
export default {
    data() {
      return {
        usuarios: [],
        filtro: &#39;&#39;,
        cargando: false
      }
    },
    computed: {
      usuariosFiltrados() {
        // Filtrado aquí
      }
    },
    methods: {
      cargarUsuarios() {
        // Carga aquí
      }
    },
    mounted() {
      // Inicialización aquí
    }
}

            </code></pre></div><div class="approach" data-v-1f2c92e0><h4 data-v-1f2c92e0>Composition API</h4><p class="p" data-v-1f2c92e0>Lógica agrupada por funcionalidad</p><pre class="code-small" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { ref, reactive } from &#39;vue&#39;;

// Ejemplo con \`ref\` para un valor primitivo
const contador = ref(0);

// Ejemplo con \`reactive\` para un objeto
const estado = reactive({
  mensaje: &#39;¡Hola, Vue!&#39;,
  nombre: &#39;Usuario&#39;
});

function incrementarContador() {
  contador.value++;
}

function cambiarMensaje() {
  estado.mensaje = &#39;¡Mensaje actualizado!&#39;;
}
&lt;/script&gt;
            </code></pre></div></div></div><hr data-v-1f2c92e0><p class="p" data-v-1f2c92e0> la reactividad en vue ha pasado por varias fases en el ejemplo anterior veras que el options api es diferente al ejemplo que veras a continuacion, pero por que como ves la cantidad de cantidad de codigo que hay que escribir llegar a tomar un tiempo considerable entonces se ha tomado ciertas soluciones. El ejemplo que acabas de ver es de Vue2 y a continuacion la explicacion que ves de la funcion <code data-v-1f2c92e0>setup()</code> es una solucion que implemento vue 3 como veras a continuacion: </p><h2 class="subtitle" data-v-1f2c92e0>setup() Function</h2><p class="p" data-v-1f2c92e0> El corazón de la Composition API es la función <code data-v-1f2c92e0>setup()</code>. Esta función se ejecuta antes de que el componente sea creado y es donde declaramos toda la reactividad y lógica del componente. </p><div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Estructura Básica</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ titulo }}&lt;/h1&gt;
    &lt;p&gt;Contador: {{ contador }}&lt;/p&gt;
    &lt;button @click=&quot;incrementar&quot;&gt;Incrementar&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from &#39;vue&#39;

export default {
  setup() {
    // Variables reactivas
    const titulo = ref(&#39;Mi Componente&#39;)
    const contador = ref(0)

    // Funciones
    const incrementar = () =&gt; {
      contador.value++
    }

    // Retornar lo que estará disponible en el template
    return {
      titulo,
      contador,
      incrementar
    }
  }
}
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Reactividad Fundamental</h2><h3 class="subtitle-sm" data-v-1f2c92e0>ref()</h3><p class="p" data-v-1f2c92e0><code data-v-1f2c92e0>ref()</code> crea una referencia reactiva para valores primitivos. Para acceder al valor, usamos <code data-v-1f2c92e0>.value</code>. </p>`,15)),c("div",sf,[b[13]||(b[13]=c("h3",{class:"example-title"},"Ejemplo Interactivo con ref()",-1)),c("div",of,[_e(c("input",{"onUpdate:modelValue":b[0]||(b[0]=P=>t.value=P),placeholder:"Escribe tu nombre",class:"demo-input"},null,512),[[je,t.value]]),c("p",null,[b[10]||(b[10]=Z("Hola, ",-1)),c("strong",null,T(t.value),1),b[11]||(b[11]=Z("!",-1))]),c("p",null,[b[12]||(b[12]=Z("Contador: ",-1)),c("strong",null,T(a.value),1)]),c("button",{onClick:q,class:"demo-button"},"Incrementar")])]),b[25]||(b[25]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código ref()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { ref } from &#39;vue&#39;

// Variables reactivas con ref
const nombre = ref(&#39;&#39;)
const contador = ref(0)

// Función para modificar el contador
const incrementar = () =&gt; {
  contador.value++
}
&lt;/script&gt;
        </code></pre></div><h3 class="subtitle-sm" data-v-1f2c92e0>reactive()</h3><p class="p" data-v-1f2c92e0><code data-v-1f2c92e0>reactive()</code> crea un objeto reactivo. Ideal para objetos y arrays, no requiere <code data-v-1f2c92e0>.value</code> para acceder a las propiedades. </p>`,3)),c("div",rf,[b[16]||(b[16]=c("h3",{class:"example-title"},"Ejemplo Interactivo con reactive()",-1)),c("div",cf,[_e(c("input",{"onUpdate:modelValue":b[1]||(b[1]=P=>n.nombre=P),placeholder:"Nombre",class:"demo-input"},null,512),[[je,n.nombre]]),_e(c("input",{"onUpdate:modelValue":b[2]||(b[2]=P=>n.edad=P),type:"number",placeholder:"Edad",class:"demo-input"},null,512),[[je,n.edad]]),c("p",null,[b[14]||(b[14]=Z("Usuario: ",-1)),c("strong",null,T(n.nombre),1),b[15]||(b[15]=Z(", Edad: ",-1)),c("strong",null,T(n.edad),1)])])]),b[26]||(b[26]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código reactive()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { reactive } from &#39;vue&#39;

// Objeto reactivo
const usuario = reactive({
  nombre: &#39;&#39;,
  edad: 0
})
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Computed Properties</h2><p class="p" data-v-1f2c92e0> Las propiedades computadas se crean con <code data-v-1f2c92e0>computed()</code>. Se actualizan automáticamente cuando sus dependencias cambian. </p>`,4)),c("div",lf,[b[20]||(b[20]=c("h3",{class:"example-title"},"Ejemplo Computed",-1)),c("div",df,[_e(c("input",{"onUpdate:modelValue":b[3]||(b[3]=P=>s.value=P),type:"number",placeholder:"Precio",class:"demo-input"},null,512),[[je,s.value]]),_e(c("input",{"onUpdate:modelValue":b[4]||(b[4]=P=>o.value=P),type:"number",placeholder:"Cantidad",class:"demo-input"},null,512),[[je,o.value]]),c("p",null,[b[17]||(b[17]=Z("Precio unitario: $",-1)),c("strong",null,T(s.value),1)]),c("p",null,[b[18]||(b[18]=Z("Cantidad: ",-1)),c("strong",null,T(o.value),1)]),c("p",null,[b[19]||(b[19]=Z("Total: $",-1)),c("strong",null,T(f.value),1)])])]),b[27]||(b[27]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código computed()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { ref, computed } from &#39;vue&#39;

const precio = ref(0)
const cantidad = ref(0)

// Propiedad computada
const total = computed(() =&gt; {
  return precio.value * cantidad.value
})
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Watchers</h2><p class="p" data-v-1f2c92e0> Los watchers observan cambios en las variables reactivas y ejecutan código cuando cambian. </p>`,4)),c("div",uf,[b[22]||(b[22]=c("h3",{class:"example-title"},"Ejemplo Watch",-1)),c("div",pf,[_e(c("input",{"onUpdate:modelValue":b[5]||(b[5]=P=>r.value=P),placeholder:"Buscar...",class:"demo-input"},null,512),[[je,r.value]]),i.value?(Y(),ee("p",ff,"Buscando... ⏳")):(Y(),ee("p",vf,[b[21]||(b[21]=Z("Resultados para: ",-1)),c("strong",null,'"'+T(r.value)+'"',1)]))])]),b[28]||(b[28]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código watch()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { ref, watch } from &#39;vue&#39;

const busqueda = ref(&#39;&#39;)
const cargando = ref(false)

// Watcher
watch(busqueda, (nuevoValor) =&gt; {
  if (nuevoValor) {
    cargando.value = true
    // Simular búsqueda asíncrona
    setTimeout(() =&gt; {
      cargando.value = false
    }, 500)
  }
})
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Lifecycle Hooks</h2><p class="p" data-v-1f2c92e0> Los hooks del ciclo de vida se importan y usan directamente en setup. </p><div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Hooks Disponibles</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { onMounted, onUpdated, onUnmounted } from &#39;vue&#39;

onMounted(() =&gt; {
  console.log(&#39;Componente montado&#39;)
  // Cargar datos iniciales
})

onUpdated(() =&gt; {
  console.log(&#39;Componente actualizado&#39;)
})

onUnmounted(() =&gt; {
  console.log(&#39;Componente desmontado&#39;)
  // Limpiar recursos
})
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>&lt;script setup&gt; Syntax Sugar</h2><p class="p" data-v-1f2c92e0> Vue 3.2 introdujo <code data-v-1f2c92e0>&lt;script setup&gt;</code>, una sintaxis más concisa que elimina la necesidad de usar <code data-v-1f2c92e0>setup()</code> y <code data-v-1f2c92e0>return</code>. </p>`,8)),c("div",mf,[b[23]||(b[23]=c("h3",{class:"example-title"},"Ejemplo Completo con <script setup>",-1)),c("div",gf,[_e(c("input",{"onUpdate:modelValue":b[6]||(b[6]=P=>l.value=P),onKeyup:ki(j,["enter"]),placeholder:"Nueva tarea",class:"demo-input"},null,544),[[je,l.value]]),c("button",{onClick:j,class:"demo-button"},"Agregar"),c("ul",hf,[(Y(!0),ee(Ee,null,ca(u.value,(P,K)=>(Y(),ee("li",{key:P.id,class:"tarea-item"},[_e(c("input",{type:"checkbox","onUpdate:modelValue":J=>P.completada=J},null,8,bf),[[Ts,P.completada]]),c("span",{class:ot({completada:P.completada})},T(P.texto),3),c("button",{onClick:J=>M(K),class:"demo-button small"},"Eliminar",8,yf)]))),128))]),c("div",Cf,[c("button",{onClick:b[7]||(b[7]=P=>d.value="todas"),class:"demo-button small"},"Todas ("+T(v.value)+")",1),c("button",{onClick:b[8]||(b[8]=P=>d.value="pendientes"),class:"demo-button small"},"Pendientes ("+T(h.value)+")",1),c("button",{onClick:b[9]||(b[9]=P=>d.value="completadas"),class:"demo-button small"},"Completadas ("+T(S.value)+")",1)])])]),b[29]||(b[29]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código Completo</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;nuevaTarea&quot; @keyup.enter=&quot;agregarTarea&quot; placeholder=&quot;Nueva tarea&quot;&gt;
    &lt;button @click=&quot;agregarTarea&quot;&gt;Agregar&lt;/button&gt;
    
    &lt;ul&gt;
      &lt;li v-for=&quot;(tarea, index) in tareasFiltradas&quot; :key=&quot;tarea.id&quot;&gt;
        &lt;input type=&quot;checkbox&quot; v-model=&quot;tarea.completada&quot;&gt;
        &lt;span :class=&quot;{ completada: tarea.completada }&quot;&gt;{{ tarea.texto }}&lt;/span&gt;
        &lt;button @click=&quot;eliminarTarea(index)&quot;&gt;Eliminar&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;div&gt;
      &lt;button @click=&quot;filtro = &#39;todas&#39;&quot;&gt;Todas ({{ totalTareas }})&lt;/button&gt;
      &lt;button @click=&quot;filtro = &#39;pendientes&#39;&quot;&gt;Pendientes ({{ tareasPendientes }})&lt;/button&gt;
      &lt;button @click=&quot;filtro = &#39;completadas&#39;&quot;&gt;Completadas ({{ tareasCompletadas }})&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, onMounted } from &#39;vue&#39;

// Estado reactivo
const nuevaTarea = ref(&#39;&#39;)
const tareas = ref([])
const filtro = ref(&#39;todas&#39;)

// Propiedades computadas
const tareasFiltradas = computed(() =&gt; {
  switch(filtro.value) {
    case &#39;pendientes&#39;: return tareas.value.filter(t =&gt; !t.completada)
    case &#39;completadas&#39;: return tareas.value.filter(t =&gt; t.completada)
    default: return tareas.value
  }
})

const totalTareas = computed(() =&gt; tareas.value.length)
const tareasPendientes = computed(() =&gt; tareas.value.filter(t =&gt; !t.completada).length)
const tareasCompletadas = computed(() =&gt; tareas.value.filter(t =&gt; t.completada).length)

// Métodos
const agregarTarea = () =&gt; {
  if (nuevaTarea.value.trim()) {
    tareas.value.push({
      id: Date.now(),
      texto: nuevaTarea.value.trim(),
      completada: false
    })
    nuevaTarea.value = &#39;&#39;
  }
}

const eliminarTarea = (index) =&gt; {
  tareas.value.splice(index, 1)
}

// Lifecycle hook
onMounted(() =&gt; {
  console.log(&#39;Componente de tareas montado&#39;)
})
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Composables - Reutilización de Lógica</h2><p class="p" data-v-1f2c92e0> Los composables son funciones que encapsulan lógica reusable. Es el equivalente a los mixins de Vue 2 pero más poderosos y type-safe. </p><div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Ejemplo de Composable</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
// composables/useCounter.js
import { ref } from &#39;vue&#39;

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () =&gt; count.value++
  const decrement = () =&gt; count.value--
  const reset = () =&gt; count.value = initialValue
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}

// En tu componente
&lt;script setup&gt;
import { useCounter } from &#39;@/composables/useCounter&#39;

const { count, increment, decrement } = useCounter(10)
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Ventajas de Composition API</h2><ul data-v-1f2c92e0><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Mejor organización:</strong> Lógica relacionada agrupada</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Reutilización:</strong> Composables para lógica reusable</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>TypeScript:</strong> Mejor soporte para TypeScript</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Flexibilidad:</strong> Más control sobre la reactividad</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Mantenimiento:</strong> Más fácil de mantener en componentes grandes</li></ul>`,8))])]))}},_f=we(xf,[["__scopeId","data-v-1f2c92e0"]]),Sf={class:"father"},kf={class:"content"},wf={class:"example"},Pf={class:"p"},qf={class:"logs-container"},Ef={class:"example"},Af={class:"p"},Rf={class:"example"},Tf={class:"p"},jf={class:"example"},Mf={class:"p"},$f={key:0},If={class:"example"},Lf={class:"p"},Vf={__name:"cicleOfLife",setup(e){const t=U("created"),a=U([]),n=U(0),s=U(null),o=U(0),r=U(0),i=U(0),l=U(!0),p=U(0),d=U("A"),f=U(0),u=U(0),v=A=>{a.value.push(`[${new Date().toLocaleTimeString()}] ${A}`)};Qr(()=>{t.value="beforeMount",v("beforeMount ejecutado")}),Da(()=>{t.value="mounted",v("mounted ejecutado")}),Wr(()=>{r.value=o.value,v(`beforeUpdate: contador cambiará a ${o.value+1}`)}),Kr(()=>{i.value++,v(`updated: contador actualizado a ${o.value}`)}),Sn(()=>{v("beforeUnmount: componente se prepara para destruir")}),qs(()=>{v("unmounted: componente destruido")}),zr(()=>{f.value++,v("activated: componente activado desde cache")}),Fr(()=>{u.value++,v("deactivated: componente desactivado a cache")});const h=()=>{s.value&&(n.value=s.value.offsetHeight,v(`Elemento medido: ${n.value}px`))},S=()=>{o.value++},q=()=>{o.value=0,i.value=0,v("Contador reiniciado")},j=()=>{l.value=!l.value,v(`Componente ${l.value?"montado":"destruido"}`)},M=()=>{d.value=d.value==="A"?"B":"A"};return v("created: componente inicializado"),(A,b)=>(Y(),ee("div",Sf,[c("section",kf,[b[16]||(b[16]=X(`<h1 class="title" data-v-17910c99>Ciclo de Vida de Vue</h1><p class="p" data-v-17910c99> El <strong data-v-17910c99>ciclo de vida</strong> de un componente Vue representa las diferentes etapas por las que pasa desde su creación hasta su destrucción. Comprender estos hooks es esencial para ejecutar código en el momento adecuado. </p><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>¿Qué son los Hooks del Ciclo de Vida?</h2><p class="p" data-v-17910c99> Los hooks son funciones especiales que Vue ejecuta automáticamente en momentos específicos del ciclo de vida del componente. Permiten ejecutar código en fases clave como la creación, actualización y destrucción del componente. </p><div class="example" data-v-17910c99><h3 class="example-title" data-v-17910c99>Diagrama del Ciclo de Vida</h3><div class="lifecycle-diagram" data-v-17910c99><div class="phase creation" data-v-17910c99><h4 data-v-17910c99>Fase de Creación</h4><div class="hooks" data-v-17910c99><span class="hook setup" data-v-17910c99>setup</span><span class="arrow" data-v-17910c99>→</span><span class="hook before-create" data-v-17910c99>beforeCreate</span><span class="arrow" data-v-17910c99>→</span><span class="hook created" data-v-17910c99>created</span></div></div><div class="phase mounting" data-v-17910c99><h4 data-v-17910c99>Fase de Montaje</h4><div class="hooks" data-v-17910c99><span class="hook before-mount" data-v-17910c99>beforeMount</span><span class="arrow" data-v-17910c99>→</span><span class="hook mounted" data-v-17910c99>mounted</span></div></div><div class="phase updating" data-v-17910c99><h4 data-v-17910c99>Fase de Actualización</h4><div class="hooks" data-v-17910c99><span class="hook before-update" data-v-17910c99>beforeUpdate</span><span class="arrow" data-v-17910c99>→</span><span class="hook updated" data-v-17910c99>updated</span></div></div><div class="phase unmounting" data-v-17910c99><h4 data-v-17910c99>Fase de Desmontaje</h4><div class="hooks" data-v-17910c99><span class="hook before-unmount" data-v-17910c99>beforeUnmount</span><span class="arrow" data-v-17910c99>→</span><span class="hook unmounted" data-v-17910c99>unmounted</span></div></div><div class="phase activation" data-v-17910c99><h4 data-v-17910c99>Fase de Activación (KeepAlive)</h4><div class="hooks" data-v-17910c99><span class="hook activated" data-v-17910c99>activated</span><span class="arrow" data-v-17910c99>→</span><span class="hook deactivated" data-v-17910c99>deactivated</span></div></div></div></div><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Hooks Principales</h2><h3 class="subtitle-sm" data-v-17910c99>1. setup (Composition API)</h3><p class="p" data-v-17910c99> El hook <code data-v-17910c99>setup</code> es el punto de entrada para la Composition API en Vue 3. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Composition API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>&lt;script setup&gt;
import { ref, reactive } from &amp;apos;vue&amp;apos;

const count = ref(0)
const state = reactive({ message: &amp;apos;Hola&amp;apos; })

console.log(&amp;apos;Setup ejecutado&amp;apos;)
&lt;/script&gt;</code></pre></div><h3 class="subtitle-sm" data-v-17910c99>2. beforeCreate y created</h3><p class="p" data-v-17910c99> Estos hooks se ejecutan durante la <strong data-v-17910c99>fase de inicialización</strong> del componente. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  beforeCreate() {
    console.log(&amp;apos;beforeCreate - Componente inicializ&amp;aacute;ndose&amp;apos;)
  },
  created() {
    console.log(&amp;apos;created - Componente creado&amp;apos;)
    console.log(&amp;apos;Mensaje:&amp;apos;, this.mensaje)
  },
  data() {
    return {
      mensaje: &amp;apos;Hola Vue!&amp;apos;
    }
  }
}</code></pre></div>`,14)),c("div",wf,[b[2]||(b[2]=c("h3",{class:"example-title"},"Ejemplo Práctico",-1)),c("div",Pf,[c("p",null,[b[0]||(b[0]=c("strong",null,"Fase actual:",-1)),Z(" "+T(t.value),1)]),b[1]||(b[1]=c("p",null,[c("strong",null,"Logs:")],-1)),c("div",qf,[(Y(!0),ee(Ee,null,ca(a.value,(P,K)=>(Y(),ee("div",{key:K,class:"log-entry"},T(P),1))),128))])])]),b[17]||(b[17]=X(`<h3 class="subtitle-sm" data-v-17910c99>3. beforeMount y mounted</h3><p class="p" data-v-17910c99> Estos hooks se ejecutan durante la <strong data-v-17910c99>fase de montaje en el DOM</strong>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  beforeMount() {
    console.log(&amp;apos;beforeMount - Antes del montaje&amp;apos;)
  },
  mounted() {
    console.log(&amp;apos;mounted - Componente montado&amp;apos;)
    this.cargarDatos()
  }
}</code></pre></div>`,3)),c("div",Ef,[b[4]||(b[4]=c("h3",{class:"example-title"},"Ejemplo: Acceso al DOM",-1)),c("div",Af,[c("div",{ref_key:"demoElement",ref:s,class:"demo-box"},[b[3]||(b[3]=c("p",null,"Este es un elemento del DOM",-1)),c("p",null,"Altura: "+T(n.value)+"px",1)],512),c("button",{onClick:h,class:"demo-button"},"Medir Elemento")])]),b[18]||(b[18]=X(`<h3 class="subtitle-sm" data-v-17910c99>4. beforeUpdate y updated</h3><p class="p" data-v-17910c99> Estos hooks se ejecutan cuando el componente <strong data-v-17910c99>se actualiza</strong>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  data() {
    return {
      contador: 0,
      anterior: 0
    }
  },
  beforeUpdate() {
    this.anterior = this.contador
  },
  updated() {
    console.log(&amp;apos;Cambio:&amp;apos;, this.anterior, &amp;apos;&amp;rarr;&amp;apos;, this.contador)
  }
}</code></pre></div>`,3)),c("div",Rf,[b[8]||(b[8]=c("h3",{class:"example-title"},"Ejemplo: Seguimiento de Actualizaciones",-1)),c("div",Tf,[c("p",null,[b[5]||(b[5]=Z("Contador: ",-1)),c("strong",null,T(o.value),1)]),c("p",null,[b[6]||(b[6]=Z("Valor anterior: ",-1)),c("strong",null,T(r.value),1)]),c("p",null,[b[7]||(b[7]=Z("Actualizaciones: ",-1)),c("strong",null,T(i.value),1)]),c("button",{onClick:S,class:"demo-button"},"Incrementar"),c("button",{onClick:q,class:"demo-button"},"Reiniciar")])]),b[19]||(b[19]=X(`<h3 class="subtitle-sm" data-v-17910c99>5. beforeUnmount y unmounted</h3><p class="p" data-v-17910c99> Estos hooks se ejecutan cuando el componente <strong data-v-17910c99>se destruye</strong>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  data() {
    return {
      intervalo: null
    }
  },
  mounted() {
    this.intervalo = setInterval(() =&amp;gt; {
      console.log(&amp;apos;Tick...&amp;apos;)
    }, 1000)
  },
  unmounted() {
    clearInterval(this.intervalo)
  }
}</code></pre></div>`,3)),c("div",jf,[b[11]||(b[11]=c("h3",{class:"example-title"},"Ejemplo: Gestión de Recursos",-1)),c("div",Mf,[l.value?(Y(),ee("p",$f,[b[9]||(b[9]=c("strong",null,"Componente Montado",-1)),b[10]||(b[10]=c("br",null,null,-1)),Z(" Ticks del intervalo: "+T(p.value),1)])):na("",!0),c("button",{onClick:j,class:"demo-button"},T(l.value?"Destruir":"Montar")+" Componente ",1)])]),b[20]||(b[20]=X(`<hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Hooks de Keep-Alive</h2><h3 class="subtitle-sm" data-v-17910c99>6. activated y deactivated</h3><p class="p" data-v-17910c99> Estos hooks son específicos para componentes envueltos en <code data-v-17910c99>&lt;KeepAlive&gt;</code>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  activated() {
    console.log(&amp;apos;activated - Componente activado&amp;apos;)
    this.reanudarActividad()
  },
  deactivated() {
    console.log(&amp;apos;deactivated - Componente desactivado&amp;apos;)
    this.pausarActividad()
  }
}</code></pre></div>`,5)),c("div",If,[b[15]||(b[15]=c("h3",{class:"example-title"},"Ejemplo: KeepAlive en Acción",-1)),c("div",Lf,[c("p",null,[b[12]||(b[12]=c("strong",null,"Componente actual:",-1)),Z(" "+T(d.value),1)]),c("p",null,[b[13]||(b[13]=c("strong",null,"Activaciones:",-1)),Z(" "+T(f.value),1)]),c("p",null,[b[14]||(b[14]=c("strong",null,"Desactivaciones:",-1)),Z(" "+T(u.value),1)]),c("button",{onClick:M,class:"demo-button"}," Cambiar a "+T(d.value==="A"?"B":"A"),1)])]),b[21]||(b[21]=X(`<hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Hooks de Manejo de Errores</h2><h3 class="subtitle-sm" data-v-17910c99>7. errorCaptured</h3><p class="p" data-v-17910c99> Captura errores de componentes hijos. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  errorCaptured(err, instance, info) {
    console.error(&amp;apos;Error capturado:&amp;apos;, err)
    this.error = err.message
    return false
  }
}</code></pre></div><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Hooks de Depuración</h2><h3 class="subtitle-sm" data-v-17910c99>8. renderTracked y renderTriggered</h3><p class="p" data-v-17910c99> Hooks de depuración que rastrean re-renderizados. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Composition API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>&lt;script setup&gt;
import { ref, onRenderTracked, onRenderTriggered } from &amp;apos;vue&amp;apos;

const contador = ref(0)

onRenderTracked((event) =&amp;gt; {
  console.log(&amp;apos;Dependencia rastreada:&amp;apos;, event)
})

onRenderTriggered((event) =&amp;gt; {
  console.log(&amp;apos;Re-render provocado por:&amp;apos;, event)
})
&lt;/script&gt;</code></pre></div><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Flujo Completo del Ciclo de Vida</h2><div class="lifecycle-flow" data-v-17910c99><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>1</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Inicialización (Setup)</h4><p data-v-17910c99><code data-v-17910c99>setup</code> → <code data-v-17910c99>beforeCreate</code> → <code data-v-17910c99>created</code></p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>2</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Compilación del Template</h4><p data-v-17910c99>Vue compila el template a funciones render</p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>3</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Montaje en DOM</h4><p data-v-17910c99><code data-v-17910c99>beforeMount</code> → <code data-v-17910c99>mounted</code></p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>4</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Actualizaciones (Reactividad)</h4><p data-v-17910c99><code data-v-17910c99>beforeUpdate</code> → <code data-v-17910c99>updated</code></p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>5</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Destrucción</h4><p data-v-17910c99><code data-v-17910c99>beforeUnmount</code> → <code data-v-17910c99>unmounted</code></p></div></div></div><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Mejores Prácticas</h2><ul data-v-17910c99><li class="p" data-v-17910c99><strong data-v-17910c99>created/mounted:</strong> Usar para llamadas API e inicialización</li><li class="p" data-v-17910c99><strong data-v-17910c99>updated:</strong> Evitar modificar datos reactivos aquí</li><li class="p" data-v-17910c99><strong data-v-17910c99>unmounted:</strong> Siempre limpiar intervals y event listeners</li><li class="p" data-v-17910c99><strong data-v-17910c99>errorCaptured:</strong> Implementar para manejo de errores</li></ul>`,16))])]))}},Of=we(Vf,[["__scopeId","data-v-17910c99"]]),Df={template:`
    <button class="boton-ejemplo" @click="$emit('click')">
      <slot></slot>
    </button>
  `,emits:["click"]},Nf={template:`
    <div class="tarjeta-ejemplo">
      <div class="tarjeta-header">
        <h4>{{ titulo }}</h4>
        <button v-if="mostrarEliminar" class="btn-eliminar" @click="$emit('eliminar')">
          ×
        </button>
      </div>
      <div class="tarjeta-contenido">
        {{ contenido }}
      </div>
    </div>
  `,props:{titulo:String,contenido:String,mostrarEliminar:{type:Boolean,default:!1}},emits:["eliminar"]},Bf={template:`
    <div class="modal-dinamico-overlay" @click.self="$emit('cerrar')">
      <div class="modal-dinamico-content">
        <h3>¡Modal Cargado Dinámicamente!</h3>
        <p>Este componente se cargó solo cuando fue necesario.</p>
        <p><strong>Mejora el performance de tu aplicación.</strong></p>
        <button @click="$emit('cerrar')" class="btn-cerrar">
          Cerrar Modal
        </button>
      </div>
    </div>
  `,emits:["cerrar"]},Uf={setup(){const e=U(0),t=U(!1),a=U(!1),n=U(!1),s=U([{titulo:"Widget Principal",contenido:"Este es un widget de ejemplo"},{titulo:"Estadísticas",contenido:"Datos importantes del sistema"}]),o=async()=>{n.value=!0,await new Promise(p=>setTimeout(p,1500)),a.value=!0,n.value=!1,t.value=!0},r=()=>{s.value.push({titulo:`Widget ${s.value.length+1}`,contenido:"Nuevo widget agregado dinámicamente"})},i=p=>{s.value.splice(p,1)},l=U(new Date().toLocaleTimeString());return{BotonEjemplo:Df,TarjetaEjemplo:Nf,ModalDinamicoComponent:Bf,contadorBasico:e,mostrarModalDinamico:t,modalCargado:a,cargando:n,widgets:s,cargarModalDinamico:o,agregarWidget:r,eliminarWidget:i,ultimaActualizacion:l}}},zf={class:"father"},Ff={class:"content"},Hf={class:"example"},Qf={class:"component-demo"},Wf={class:"example"},Kf={class:"p"},Gf={key:0,class:"mensaje-carga"},Jf={class:"example"},Yf={class:"dashboard-demo"},Xf={class:"dashboard-header"},Zf={class:"widgets-grid"},ev={class:"dashboard-stats"};function tv(e,t,a,n,s,o){const r=oa("BotonEjemplo"),i=oa("TarjetaEjemplo");return Y(),ee("div",zf,[c("section",Ff,[t[10]||(t[10]=X(`<h1 class="title" data-v-ac797753>Importación de Componentes en Vue.js</h1><p class="p" data-v-ac797753> Aprender a <strong data-v-ac797753>importar componentes</strong> correctamente es esencial para construir aplicaciones Vue.js modulares y mantenibles. Esta guía te mostrará los diferentes métodos de importación y cuándo usar cada uno. </p><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Métodos de Importación</h2><h3 class="subtitle-sm" data-v-ac797753>1. Importación Básica (Estática)</h3><p class="p" data-v-ac797753> La forma más común de importar componentes. El componente se carga inmediatamente con la aplicación. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Composition API con &lt;script setup&gt;</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Usar el componente importado --&gt;
    &lt;MiBoton @click=&quot;manejarClick&quot;&gt;
      Hacer clic
    &lt;/MiBoton&gt;
    &lt;MiTarjeta titulo=&quot;Ejemplo&quot; contenido=&quot;Contenido de prueba&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Importar componentes
import MiBoton from &#39;@/components/MiBoton.vue&#39;
import MiTarjeta from &#39;@/components/MiTarjeta.vue&#39;

const manejarClick = () =&gt; {
  console.log(&#39;Botón clickeado&#39;)
}
&lt;/script&gt;
        </code></pre></div><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Options API</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
&lt;template&gt;
  &lt;div&gt;
    &lt;MiBoton @click=&quot;manejarClick&quot;&gt;
      Hacer clic
    &lt;/MiBoton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import MiBoton from &#39;@/components/MiBoton.vue&#39;

export default {
  // Registrar componentes
  components: {
    MiBoton
  },
  methods: {
    manejarClick() {
      console.log(&#39;Botón clickeado&#39;)
    }
  }
}
&lt;/script&gt;
        </code></pre></div>`,8)),c("div",Hf,[t[3]||(t[3]=c("h3",{class:"example-title"},"Demo: Componentes Básicos",-1)),c("div",Qf,[re(r,{onClick:t[0]||(t[0]=l=>n.contadorBasico++)},{default:At(()=>[Z(" Clics: "+T(n.contadorBasico),1)]),_:1}),re(i,{titulo:"Tarjeta de Ejemplo",contenido:`Este componente fue importado estáticamente. Clics: ${n.contadorBasico}`},null,8,["contenido"])])]),t[11]||(t[11]=X(`<h3 class="subtitle-sm" data-v-ac797753>2. Importación con Alias</h3><p class="p" data-v-ac797753> Usa alias para evitar rutas relativas complejas como <code data-v-ac797753>../../../components</code>. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>vite.config.js</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import { fileURLToPath, URL } from &#39;node:url&#39;

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      &#39;@&#39;: fileURLToPath(new URL(&#39;./src&#39;, import.meta.url)),
      &#39;@components&#39;: fileURLToPath(new URL(&#39;./src/components&#39;, import.meta.url)),
      &#39;@views&#39;: fileURLToPath(new URL(&#39;./src/views&#39;, import.meta.url))
    }
  }
})
        </code></pre></div><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Uso con alias</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
&lt;script setup&gt;
// Con alias - más limpio
import MiBoton from &#39;@components/MiBoton.vue&#39;
import Header from &#39;@components/layout/Header.vue&#39;

// Sin alias - más complicado
import MiBoton from &#39;../../../components/MiBoton.vue&#39;
&lt;/script&gt;
        </code></pre></div><h3 class="subtitle-sm" data-v-ac797753>3. Importación Dinámica (Lazy Loading)</h3><p class="p" data-v-ac797753> Carga componentes solo cuando se necesitan, mejorando el performance. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Composition API</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;cargarModal&quot;&gt;Abrir Modal Pesado&lt;/button&gt;
    
    &lt;component
      :is=&quot;ModalDinamico&quot;
      v-if=&quot;mostrarModal&quot;
      @cerrar=&quot;mostrarModal = false&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, shallowRef, defineAsyncComponent } from &#39;vue&#39;

const mostrarModal = ref(false)
const ModalDinamico = shallowRef(null)

// Método 1: Usando defineAsyncComponent
const ModalAsync = defineAsyncComponent(() =&gt;
  import(&#39;@components/ModalPesado.vue&#39;)
)

// Método 2: Carga manual
const cargarModal = async () =&gt; {
  if (!ModalDinamico.value) {
    // El componente se carga solo cuando se necesita
    const modulo = await import(&#39;@components/ModalPesado.vue&#39;)
    ModalDinamico.value = modulo.default
  }
  mostrarModal.value = true
}
&lt;/script&gt;
        </code></pre></div>`,7)),c("div",Wf,[t[4]||(t[4]=c("h3",{class:"example-title"},"Demo: Carga Dinámica",-1)),c("div",Kf,[c("button",{onClick:t[1]||(t[1]=(...l)=>n.cargarModalDinamico&&n.cargarModalDinamico(...l)),class:"demo-button"}," Cargar Modal Dinámicamente "),n.cargando?(Y(),ee("p",Gf,"⏳ Cargando componente...")):na("",!0),n.modalCargado&&n.mostrarModalDinamico?(Y(),ss(Kc(n.ModalDinamicoComponent),{key:1,onCerrar:t[2]||(t[2]=l=>n.mostrarModalDinamico=!1)},null,32)):na("",!0)])]),t[12]||(t[12]=X(`<h3 class="subtitle-sm" data-v-ac797753>4. Registro Global de Componentes</h3><p class="p" data-v-ac797753> Para componentes que se usan en toda la aplicación. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>main.js</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;

// Importar componentes globales
import BaseButton from &#39;@components/ui/BaseButton.vue&#39;
import BaseInput from &#39;@components/ui/BaseInput.vue&#39;
import BaseModal from &#39;@components/ui/BaseModal.vue&#39;

const app = createApp(App)

// Registrar globalmente
app.component(&#39;BaseButton&#39;, BaseButton)
app.component(&#39;BaseInput&#39;, BaseInput)
app.component(&#39;BaseModal&#39;, BaseModal)

app.mount(&#39;#app&#39;)
        </code></pre></div><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Uso en cualquier componente</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- No necesita importación --&gt;
    &lt;BaseButton&gt;Botón Global&lt;/BaseButton&gt;
    &lt;BaseInput placeholder=&quot;Input global&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// No es necesario importar
&lt;/script&gt;
        </code></pre></div><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Estructura de Carpetas Recomendada</h2><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Organización de Componentes</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
src/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes de UI base
│   │   ├── Button.vue
│   │   ├── Input.vue
│   │   ├── Modal.vue
│   │   └── index.js      # Exportación consolidada
│   ├── forms/           # Componentes de formularios
│   │   ├── LoginForm.vue
│   │   └── ContactForm.vue
│   └── layout/          # Componentes de layout
│       ├── Header.vue
│       ├── Footer.vue
│       └── Sidebar.vue
├── views/               # Vistas/páginas
│   ├── Home.vue
│   ├── About.vue
│   └── Contact.vue
└── App.vue
        </code></pre></div><h3 class="subtitle-sm" data-v-ac797753>Exportación Consolidada</h3><p class="p" data-v-ac797753> Crea archivos <code data-v-ac797753>index.js</code> para exportar múltiples componentes. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>components/ui/index.js</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
// Exportar todos los componentes UI
export { default as Button } from &#39;./Button.vue&#39;
export { default as Input } from &#39;./Input.vue&#39;
export { default as Modal } from &#39;./Modal.vue&#39;
export { default as Card } from &#39;./Card.vue&#39;
        </code></pre></div><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Uso de exportación consolidada</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
&lt;script setup&gt;
// Importar múltiples componentes de una vez
import { Button, Input, Modal, Card } from &#39;@components/ui&#39;

// En lugar de:
// import Button from &#39;@components/ui/Button.vue&#39;
// import Input from &#39;@components/ui/Input.vue&#39;
// import Modal from &#39;@components/ui/Modal.vue&#39;
&lt;/script&gt;
        </code></pre></div><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Ejemplo Práctico: Dashboard</h2>`,13)),c("div",Jf,[t[9]||(t[9]=c("h3",{class:"example-title"},"Dashboard con Múltiples Componentes",-1)),c("div",Yf,[c("div",Xf,[t[6]||(t[6]=c("h3",null,"Mi Dashboard",-1)),re(r,{onClick:n.agregarWidget},{default:At(()=>[...t[5]||(t[5]=[Z(" Agregar Widget ",-1)])]),_:1},8,["onClick"])]),c("div",Zf,[(Y(!0),ee(Ee,null,ca(n.widgets,(l,p)=>(Y(),ss(i,{key:p,titulo:l.titulo,contenido:l.contenido,onEliminar:d=>n.eliminarWidget(p)},null,8,["titulo","contenido","onEliminar"]))),128))]),c("div",ev,[c("p",null,[t[7]||(t[7]=Z("Total de widgets: ",-1)),c("strong",null,T(n.widgets.length),1)]),c("p",null,[t[8]||(t[8]=Z("Última actualización: ",-1)),c("strong",null,T(n.ultimaActualizacion),1)])])])]),t[13]||(t[13]=X(`<div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Código del Dashboard</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    &lt;!-- Header --&gt;
    &lt;DashboardHeader
      titulo=&quot;Mi Dashboard&quot;
      @agregar-widget=&quot;agregarWidget&quot;
    /&gt;
    
    &lt;!-- Grid de widgets --&gt;
    &lt;div class=&quot;widgets-grid&quot;&gt;
      &lt;WidgetCard
        v-for=&quot;(widget, index) in widgets&quot;
        :key=&quot;widget.id&quot;
        :titulo=&quot;widget.titulo&quot;
        :contenido=&quot;widget.contenido&quot;
        @eliminar=&quot;eliminarWidget(index)&quot;
      /&gt;
    &lt;/div&gt;
    
    &lt;!-- Estadísticas --&gt;
    &lt;DashboardStats
      :total-widgets=&quot;widgets.length&quot;
      :ultima-actualizacion=&quot;ultimaActualizacion&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Importar componentes
import DashboardHeader from &#39;@components/dashboard/DashboardHeader.vue&#39;
import WidgetCard from &#39;@components/dashboard/WidgetCard.vue&#39;
import DashboardStats from &#39;@components/dashboard/DashboardStats.vue&#39;

import { ref, computed, onMounted } from &#39;vue&#39;

const widgets = ref([])
const ultimaActualizacion = ref(new Date())

const agregarWidget = () =&gt; {
  widgets.value.push({
    id: Date.now(),
    titulo: \`Widget \${widgets.value.length + 1}\`,
    contenido: &#39;Contenido del widget&#39;
  })
  ultimaActualizacion.value = new Date()
}

const eliminarWidget = (index) =&gt; {
  widgets.value.splice(index, 1)
  ultimaActualizacion.value = new Date()
}

onMounted(() =&gt; {
  // Cargar widgets iniciales
  widgets.value = [
    { id: 1, titulo: &#39;Widget 1&#39;, contenido: &#39;Widget inicial&#39; },
    { id: 2, titulo: &#39;Widget 2&#39;, contenido: &#39;Otro widget&#39; }
  ]
})
&lt;/script&gt;
        </code></pre></div><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Errores Comunes y Soluciones</h2><div class="error-examples" data-v-ac797753><div class="error-item" data-v-ac797753><h4 data-v-ac797753>❌ Error: Componente no registrado</h4><pre class="code-error" data-v-ac797753><code data-v-ac797753>
&lt;template&gt;
  &lt;MiComponente /&gt; &lt;!-- Error: Componente no registrado --&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Falta importar el componente
&lt;/script&gt;
          </code></pre><p class="solution" data-v-ac797753><strong data-v-ac797753>Solución:</strong> Importar y registrar el componente</p></div><div class="error-item" data-v-ac797753><h4 data-v-ac797753>❌ Error: Ruta incorrecta</h4><pre class="code-error" data-v-ac797753><code data-v-ac797753>
// Error: Ruta incorrecta
import MiComponente from &#39;./components/MiComponente.vue&#39;

// Si el archivo está en src/components/MiComponente.vue
          </code></pre><p class="solution" data-v-ac797753><strong data-v-ac797753>Solución:</strong> Usar alias @/ para rutas absolutas</p></div><div class="error-item" data-v-ac797753><h4 data-v-ac797753>❌ Error: Nombre duplicado</h4><pre class="code-error" data-v-ac797753><code data-v-ac797753>
&lt;script setup&gt;
import Button from &#39;@/components/Button.vue&#39;
import Button from &#39;@/components/ui/Button.vue&#39; // Error: Duplicado

// Solución: usar alias
import UIButton from &#39;@/components/ui/Button.vue&#39;
import FormButton from &#39;@/components/forms/Button.vue&#39;
&lt;/script&gt;
          </code></pre><p class="solution" data-v-ac797753><strong data-v-ac797753>Solución:</strong> Usar nombres diferentes o alias en la importación</p></div></div><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Mejores Prácticas</h2><ul data-v-ac797753><li class="p" data-v-ac797753><strong data-v-ac797753>Usar PascalCase:</strong> Nombres de componentes en PascalCase (MiComponente.vue)</li><li class="p" data-v-ac797753><strong data-v-ac797753>Alias para rutas:</strong> Usar @/ para rutas absolutas</li><li class="p" data-v-ac797753><strong data-v-ac797753>Lazy loading:</strong> Para componentes pesados o poco usados</li><li class="p" data-v-ac797753><strong data-v-ac797753>Exportación consolidada:</strong> Usar archivos index.js para grupos de componentes</li><li class="p" data-v-ac797753><strong data-v-ac797753>Registro global mínimo:</strong> Solo componentes realmente globales</li><li class="p" data-v-ac797753><strong data-v-ac797753>Organización lógica:</strong> Agrupar componentes por funcionalidad</li></ul>`,7))])])}const av=we(Uf,[["render",tv],["__scopeId","data-v-ac797753"]]),nv={class:"father"},sv={class:"content"},ov={class:"example"},rv={class:"flow-diagram"},iv={class:"component child"},cv={class:"data-flow"},lv={class:"data"},dv={class:"code-block"},uv={class:"code"},pv={class:"example"},fv={class:"demo-container"},vv={class:"example"},mv={class:"demo-container"},gv={class:"controls"},hv={class:"example"},bv={class:"demo-container"},yv={class:"example"},Cv={class:"demo-container"},xv={__name:"props",setup(e){const t=U({name:"Carlos López",age:30,email:"carlos@example.com",isPremium:!1}),a=yt({name:"Laptop Gaming",price:1200,rating:4}),n=U("Texto dinámico"),s=yt({name:"Ana García",age:25,email:"ana@example.com",city:"Madrid"}),o=()=>{t.value.isPremium=!t.value.isPremium},r=()=>{s.age+=1,s.city=s.city==="Madrid"?"Barcelona":"Madrid"},i={name:"UserCard",template:`
    <div class="user-card-demo" :class="{ premium: isPremium }">
      <h4>{{ name }}</h4>
      <p>Edad: {{ age }} años</p>
      <p>Email: {{ email }}</p>
      <p v-if="isPremium" class="premium-badge">⭐ Usuario Premium</p>
    </div>
  `,props:{name:{type:String,required:!0},age:{type:Number,default:18},email:{type:String,required:!0},isPremium:{type:Boolean,default:!1}}},l={name:"ProductCard",template:`
    <div class="product-card-demo">
      <h4>{{ product && product.name ? product.name : 'Producto' }}</h4>
      <p class="price">{{ product && product.price !== undefined ? product.price : 0 }}</p>
      <div class="rating">
        <span 
          v-for="n in 5" 
          :key="n" 
          class="star"
          :class="{ active: n <= (product && product.rating ? product.rating : 0) }"
        >★</span>
      </div>
    </div>
  `,props:{product:{type:Object,default:()=>({name:"Producto",price:0,rating:0})}}},p={name:"ReactiveDemo",template:`
    <div class="reactive-demo">
      <p><strong>Prop estático:</strong> {{ staticText }}</p>
      <p><strong>Prop dinámico:</strong> {{ dynamicText }}</p>
    </div>
  `,props:{staticText:String,dynamicText:String}},d={name:"UserProfile",template:`
    <div class="profile-demo">
      <h4>{{ name }}</h4>
      <p>Edad: {{ age }}</p>
      <p>Email: {{ email }}</p>
      <p>Ciudad: {{ city }}</p>
    </div>
  `,props:{name:String,age:Number,email:String,city:String}};return(f,u)=>(Y(),ee("div",nv,[c("section",sv,[u[14]||(u[14]=c("h1",{class:"title"},"Props y Componentización",-1)),u[15]||(u[15]=c("p",{class:"p"},[Z(" Los "),c("strong",null,"props"),Z(" son atributos personalizados que permiten pasar datos de componentes padres a componentes hijos. Son fundamentales para crear componentes reutilizables en Vue.js. ")],-1)),u[16]||(u[16]=c("hr",null,null,-1)),u[17]||(u[17]=c("h2",{class:"subtitle"},"¿Qué son los Props?",-1)),u[18]||(u[18]=c("p",{class:"p"}," Los props son la forma principal de comunicación entre componentes en Vue. Permiten que los componentes padres pasen datos a sus componentes hijos, manteniendo un flujo de datos unidireccional. ",-1)),c("div",ov,[u[8]||(u[8]=c("h3",{class:"example-title"},"Flujo de Props",-1)),c("div",rv,[u[7]||(u[7]=c("div",{class:"component parent"},[c("h4",null,"Componente Padre"),c("div",{class:"data-flow"},[c("span",{class:"data"},"datos"),c("span",{class:"arrow"},"↓"),c("code",null,'<MiComponente :prop="valor" />')])],-1)),c("div",iv,[u[6]||(u[6]=c("h4",null,"Componente Hijo",-1)),c("div",cv,[u[4]||(u[4]=c("code",null,"defineProps({'{'} prop: Type {'}'})",-1)),u[5]||(u[5]=c("span",{class:"arrow"},"↓",-1)),c("span",lv,T(f.prop),1)])])])]),u[19]||(u[19]=c("hr",null,null,-1)),u[20]||(u[20]=c("h2",{class:"subtitle"},"Sintaxis Básica",-1)),u[21]||(u[21]=c("h3",{class:"subtitle-sm"},"Declaración de Props en el Componente Hijo",-1)),c("div",dv,[u[9]||(u[9]=c("h3",{class:"code-title"},"Composition API (Recomendado)",-1)),c("pre",uv,[c("code",null,`
<template>
  <div class="user-card">
    <h3>`+T(f.name)+`</h3>
    <p>Edad: `+T(f.age)+`</p>
    <p>Email: `+T(f.email)+`</p>
    <p v-if="isPremium" class="premium">⭐ Premium</p>
  </div>
</template>

<script setup>
// Definir props con defineProps
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  email: {
    type: String,
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  }
})
<\/script>
        `,1)])]),u[22]||(u[22]=X(`<div class="code-block" data-v-b42ff192><h3 class="code-title" data-v-b42ff192>Options API</h3><pre class="code" data-v-b42ff192><code data-v-b42ff192>
&lt;script&gt;
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 18
    },
    email: {
      type: String,
      required: true
    },
    isPremium: {
      type: Boolean,
      default: false
    }
  }
}
&lt;/script&gt;
        </code></pre></div><h3 class="subtitle-sm" data-v-b42ff192>Uso en Componente Padre</h3><div class="code-block" data-v-b42ff192><h3 class="code-title" data-v-b42ff192>Pasando Props al Componente Hijo</h3><pre class="code" data-v-b42ff192><code data-v-b42ff192>
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Props estáticos --&gt;
    &lt;UserCard 
      name=&quot;Ana García&quot; 
      :age=&quot;25&quot; 
      email=&quot;ana@example.com&quot; 
      :is-premium=&quot;true&quot; 
    /&gt;
    
    &lt;!-- Props dinámicos --&gt;
    &lt;UserCard 
      :name=&quot;user.name&quot; 
      :age=&quot;user.age&quot; 
      :email=&quot;user.email&quot; 
      :is-premium=&quot;user.isPremium&quot; 
    /&gt;
    
    &lt;!-- Múltiples instancias --&gt;
    &lt;UserCard 
      v-for=&quot;user in users&quot; 
      :key=&quot;user.id&quot; 
      :name=&quot;user.name&quot; 
      :age=&quot;user.age&quot; 
      :email=&quot;user.email&quot; 
      :is-premium=&quot;user.isPremium&quot; 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre></div>`,3)),c("div",pv,[u[10]||(u[10]=c("h3",{class:"example-title"},"Demo: Tarjetas de Usuario",-1)),c("div",fv,[re(i,{name:"Ana García",age:25,email:"ana@example.com","is-premium":!0}),re(i,{name:t.value.name,age:t.value.age,email:t.value.email,"is-premium":t.value.isPremium},null,8,["name","age","email","is-premium"]),c("button",{onClick:o,class:"demo-button"},T(t.value.isPremium?"Quitar Premium":"Hacer Premium"),1)])]),u[23]||(u[23]=c("hr",null,null,-1)),u[24]||(u[24]=c("h2",{class:"subtitle"},"Tipos y Validación de Props",-1)),u[25]||(u[25]=c("div",{class:"code-block"},[c("h3",{class:"code-title"},"Validación Completa de Props"),c("pre",{class:"code"},[c("code",null,`
<script setup>
defineProps({
  // Tipo básico
  title: String,
  
  // Múltiples tipos posibles
  id: [String, Number],
  
  // Requerido con validación
  username: {
    type: String,
    required: true,
    validator: (value) => value.length >= 3
  },
  
  // Valor por defecto
  score: {
    type: Number,
    default: 0
  },
  
  // Validación personalizada
  rating: {
    type: Number,
    validator: (value) => value >= 1 && value <= 5
  },
  
  // Array con valor por defecto
  tags: {
    type: Array,
    default: () => []
  },
  
  // Objeto con valor por defecto
  config: {
    type: Object,
    default: () => ({
      color: 'blue',
      size: 'medium'
    })
  },
  
  // Función como prop
  onSuccess: {
    type: Function,
    default: () => {}
  }
})
<\/script>
  `)])],-1)),c("div",vv,[u[11]||(u[11]=c("h3",{class:"example-title"},"Demo: Producto con Validación",-1)),c("div",mv,[re(l,{product:a},null,8,["product"]),c("div",gv,[_e(c("input",{"onUpdate:modelValue":u[0]||(u[0]=v=>a.name=v),placeholder:"Nombre",class:"demo-input"},null,512),[[je,a.name]]),_e(c("input",{"onUpdate:modelValue":u[1]||(u[1]=v=>a.price=v),type:"number",placeholder:"Precio",class:"demo-input"},null,512),[[je,a.price,void 0,{number:!0}]]),_e(c("input",{"onUpdate:modelValue":u[2]||(u[2]=v=>a.rating=v),type:"range",min:"1",max:"5",class:"demo-slider"},null,512),[[je,a.rating,void 0,{number:!0}]]),c("span",null,"Calificación: "+T(a.rating)+"/5",1)])])]),u[26]||(u[26]=c("hr",null,null,-1)),u[27]||(u[27]=c("h2",{class:"subtitle"},"Props Reactivos vs No Reactivos",-1)),u[28]||(u[28]=c("div",{class:"code-block"},[c("h3",{class:"code-title"},"Diferencia en el Comportamiento"),c("pre",{class:"code"},[c("code",null,`
<template>
  <div>
    <!-- No reactivo (string estático) -->
    <MyComponent static-prop="valor estático" />
    
    <!-- Reactivo (vinculado a variable) -->
    <MyComponent :dynamic-prop="miVariable" />
    
    <!-- Número como string vs número -->
    <MyComponent number-as-string="42" />      <!-- String "42" -->
    <MyComponent :number-as-number="42" />     <!-- Number 42 -->
  </div>
</template>
        `)])],-1)),c("div",hv,[u[12]||(u[12]=c("h3",{class:"example-title"},"Demo: Reactividad de Props",-1)),c("div",bv,[re(p,{"static-text":"Este texto es estático","dynamic-text":n.value},null,8,["dynamic-text"]),_e(c("input",{"onUpdate:modelValue":u[3]||(u[3]=v=>n.value=v),placeholder:"Escribe algo...",class:"demo-input"},null,512),[[je,n.value]]),c("p",null,"Valor dinámico: "+T(n.value),1)])]),u[29]||(u[29]=X(`<hr data-v-b42ff192><h2 class="subtitle" data-v-b42ff192>Patrones Avanzados</h2><h3 class="subtitle-sm" data-v-b42ff192>v-bind con Objetos</h3><div class="code-block" data-v-b42ff192><h3 class="code-title" data-v-b42ff192>Pasar múltiples props con un objeto</h3><pre class="code" data-v-b42ff192><code data-v-b42ff192>
&lt;template&gt;
  &lt;!-- Forma tradicional --&gt;
  &lt;UserProfile 
    :name=&quot;user.name&quot; 
    :age=&quot;user.age&quot; 
    :email=&quot;user.email&quot; 
  /&gt;
  
  &lt;!-- Con v-bind (más conciso) --&gt;
  &lt;UserProfile v-bind=&quot;user&quot; /&gt;
  
  &lt;!-- Combinando con otros props --&gt;
  &lt;UserProfile v-bind=&quot;user&quot; :is-verified=&quot;true&quot; /&gt;
&lt;/template&gt;
        </code></pre></div><h3 class="subtitle-sm" data-v-b42ff192>Props con Valores Computados</h3><div class="code-block" data-v-b42ff192><h3 class="code-title" data-v-b42ff192>Usar computed properties como props</h3><pre class="code" data-v-b42ff192><code data-v-b42ff192>
&lt;template&gt;
  &lt;ProductCard 
    :product=&quot;product&quot;
    :discounted-price=&quot;discountedPrice&quot;
    :is-on-sale=&quot;isOnSale&quot;
  /&gt;
&lt;/template&gt;
        </code></pre></div>`,6)),c("div",yv,[u[13]||(u[13]=c("h3",{class:"example-title"},"Demo: v-bind con Objetos",-1)),c("div",Cv,[re(d,oc(hi(s)),null,16),c("button",{onClick:r,class:"demo-button"},"Actualizar Perfil")])]),u[30]||(u[30]=X(`<hr data-v-b42ff192><h2 class="subtitle" data-v-b42ff192>Buenas Prácticas</h2><div class="best-practices" data-v-b42ff192><div class="practice-item" data-v-b42ff192><h4 data-v-b42ff192>✅ Usar camelCase en JavaScript</h4><pre class="code-small" data-v-b42ff192><code data-v-b42ff192>defineProps({
  userName: String,    // ✅ Bueno
  user_name: String    // ❌ Evitar
})</code></pre></div><div class="practice-item" data-v-b42ff192><h4 data-v-b42ff192>✅ Usar kebab-case en Templates</h4><pre class="code-small" data-v-b42ff192><code data-v-b42ff192>&lt;!-- ✅ Bueno --&gt;
&lt;MyComponent user-name=&quot;Ana&quot; /&gt;

&lt;!-- ❌ No recomendado --&gt;
&lt;MyComponent userName=&quot;Ana&quot; /&gt;</code></pre></div><div class="practice-item" data-v-b42ff192><h4 data-v-b42ff192>✅ Validar Props Importantes</h4><pre class="code-small" data-v-b42ff192><code data-v-b42ff192>defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  email: {
    type: String,
    validator: (email) =&gt; isValidEmail(email)
  }
})</code></pre></div><div class="practice-item" data-v-b42ff192><h4 data-v-b42ff192>✅ Proporcionar Valores por Defecto</h4><pre class="code-small" data-v-b42ff192><code data-v-b42ff192>defineProps({
  count: {
    type: Number,
    default: 0
  },
  items: {
    type: Array,
    default: () =&gt; []  // ✅ Usar función para objetos/arrays
  }
})</code></pre></div></div><hr data-v-b42ff192><h2 class="subtitle" data-v-b42ff192>Errores Comunes</h2><div class="error-examples" data-v-b42ff192><div class="error-item" data-v-b42ff192><h4 data-v-b42ff192>❌ Mutar Props Directamente</h4><pre class="code-error" data-v-b42ff192><code data-v-b42ff192>&lt;script setup&gt;
defineProps({ count: Number })

// ❌ ERROR: No mutar props directamente
props.count++

// ✅ SOLUCIÓN: Usar emits o variables reactivas
const emit = defineEmits([&#39;update:count&#39;])
const updateCount = () =&gt; emit(&#39;update:count&#39;, props.count + 1)
&lt;/script&gt;</code></pre></div><div class="error-item" data-v-b42ff192><h4 data-v-b42ff192>❌ No Validar Props Críticos</h4><pre class="code-error" data-v-b42ff192><code data-v-b42ff192>// ❌ Peligroso sin validación
defineProps({
  userId: String
})

// ✅ Seguro con validación
defineProps({
  userId: {
    type: String,
    required: true,
    validator: (id) =&gt; id.length === 36
  }
})
</code></pre></div></div>`,6))])]))}},_v=we(xv,[["__scopeId","data-v-b42ff192"]]),ds={xs:18,sm:24,md:32,lg:38,xl:46},Oi={size:String};function Di(e,t=ds){return Q(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function Ms(e,t,a,n){return Object.defineProperty(e,t,{get:a,set:n,enumerable:!0}),e}function $s(e){return yn(Ps(e))}function Sv(e){return yn(e)}const An=(e,t)=>{const a=yt(e);for(const n in e)Ms(t,n,()=>a[n],s=>{a[n]=s});return t};function kv(e,t){return e!==void 0&&e()||t}function ma(e,t){return e!==void 0?t.concat(e()):t}const Oo="0 0 24 24",Hn=e=>e,Qn=e=>`ionicons ${e}`,Ni={"mdi-":e=>`mdi ${e}`,"icon-":Hn,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Qn,"ion-ios":Qn,"ion-logo":Qn,"iconfont ":Hn,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":Hn},Bi={o_:"-outlined",r_:"-round",s_:"-sharp"},Ui={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},wv=new RegExp("^("+Object.keys(Ni).join("|")+")"),Pv=new RegExp("^("+Object.keys(Bi).join("|")+")"),Do=new RegExp("^("+Object.keys(Ui).join("|")+")"),qv=/^[Mm]\s?[-+]?\.?\d/,Ev=/^img:/,Av=/^svguse:/,Rv=/^ion-/,Tv=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,No=$s({name:"QIcon",props:{...Oi,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=Na(),n=Di(e),s=Q(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=Q(()=>{let r,i=e.name;if(i==="none"||!i)return{none:!0};if(a.iconMapFn!==null){const d=a.iconMapFn(i);if(d!==void 0)if(d.icon!==void 0){if(i=d.icon,i==="none"||!i)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(qv.test(i)===!0){const[d,f=Oo]=i.split("|");return{svg:!0,viewBox:f,nodes:d.split("&&").map(u=>{const[v,h,S]=u.split("@@");return Ce("path",{style:h,d:v,transform:S})})}}if(Ev.test(i)===!0)return{img:!0,src:i.substring(4)};if(Av.test(i)===!0){const[d,f=Oo]=i.split("|");return{svguse:!0,src:d.substring(7),viewBox:f}}let l=" ";const p=i.match(wv);if(p!==null)r=Ni[p[1]](i);else if(Tv.test(i)===!0)r=i;else if(Rv.test(i)===!0)r=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(Do.test(i)===!0){r="notranslate material-symbols";const d=i.match(Do);d!==null&&(i=i.substring(6),r+=Ui[d[1]]),l=i}else{r="notranslate material-icons";const d=i.match(Pv);d!==null&&(i=i.substring(2),r+=Bi[d[1]]),l=i}return{cls:r,content:l}});return()=>{const r={class:s.value,style:n.value,"aria-hidden":"true"};return o.value.none===!0?Ce(e.tag,r,kv(t.default)):o.value.img===!0?Ce(e.tag,r,ma(t.default,[Ce("img",{src:o.value.src})])):o.value.svg===!0?Ce(e.tag,r,ma(t.default,[Ce("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?Ce(e.tag,r,ma(t.default,[Ce("svg",{viewBox:o.value.viewBox},[Ce("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(r.class+=" "+o.value.cls),Ce(e.tag,r,ma(t.default,[o.value.content])))}}}),jv={size:{type:[String,Number],default:"1em"},color:String};function Mv(e){return{cSize:Q(()=>e.size in ds?`${ds[e.size]}px`:e.size),classes:Q(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const $v=$s({name:"QSpinner",props:{...jv,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Mv(e);return()=>Ce("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[Ce("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Iv(e,t){const a=e.style;for(const n in t)a[n]=t[n]}const Ua={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(Ua,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Ia(){}function Lv(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function zi(e){e.stopPropagation()}function Vv(e){e.cancelable!==!1&&e.preventDefault()}function Ht(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Ov(e,t,a){const n=`__q_${t}_evt`;e[n]=e[n]!==void 0?e[n].concat(a):a,a.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],Ua[s[3]])})}function Dv(e,t){const a=`__q_${t}_evt`;e[a]!==void 0&&(e[a].forEach(n=>{n[0].removeEventListener(n[1],e[n[2]],Ua[n[3]])}),e[a]=void 0)}let Fi=!1;function Nv(e){Fi=e.isComposing===!0}function Bv(e){return Fi===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function us(e,t){return Bv(e)===!0?!1:[].concat(t).includes(e.keyCode)}function Uv(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function Bo(e,t,a,n){a.modifiers.stop===!0&&zi(e);const s=a.modifiers.color;let o=a.modifiers.center;o=o===!0||n===!0;const r=document.createElement("span"),i=document.createElement("span"),l=Lv(e),{left:p,top:d,width:f,height:u}=t.getBoundingClientRect(),v=Math.sqrt(f*f+u*u),h=v/2,S=`${(f-v)/2}px`,q=o?S:`${l.left-p-h}px`,j=`${(u-v)/2}px`,M=o?j:`${l.top-d-h}px`;i.className="q-ripple__inner",Iv(i,{height:`${v}px`,width:`${v}px`,transform:`translate3d(${q},${M},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${s?" text-"+s:""}`,r.setAttribute("dir","ltr"),r.appendChild(i),t.appendChild(r);const A=()=>{r.remove(),clearTimeout(b)};a.abort.push(A);let b=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${S},${j},0) scale3d(1,1,1)`,i.style.opacity=.2,b=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,b=setTimeout(()=>{r.remove(),a.abort.splice(a.abort.indexOf(A),1)},275)},250)},50)}function Uo(e,{modifiers:t,value:a,arg:n}){const s=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||n,keyCodes:[].concat(s.keyCodes||13)}}const zv=Sv({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(s){n.enabled===!0&&s.qSkipRipple!==!0&&s.type===(n.modifiers.early===!0?"pointerdown":"click")&&Bo(s,e,n,s.qKeyEvent===!0)},keystart:Uv(s=>{n.enabled===!0&&s.qSkipRipple!==!0&&us(s,n.modifiers.keyCodes)===!0&&s.type===`key${n.modifiers.early===!0?"down":"up"}`&&Bo(s,e,n,!0)},300)};Uo(n,t),e.__qripple=n,Ov(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Uo(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),Dv(t,"main"),delete e._qripple)}}),Hi={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Fv=Object.keys(Hi),Hv={align:{type:String,validator:e=>Fv.includes(e)}};function Qv(e){return Q(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Hi[t]}`})}function Wv(e){return e.appContext.config.globalProperties.$router!==void 0}function zo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Fo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Kv(e,t){for(const a in t){const n=t[a],s=e[a];if(typeof n=="string"){if(n!==s)return!1}else if(Array.isArray(s)===!1||s.length!==n.length||n.some((o,r)=>o!==s[r]))return!1}return!0}function Ho(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Gv(e,t){return Array.isArray(e)===!0?Ho(e,t):Array.isArray(t)===!0?Ho(t,e):e===t}function Jv(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Gv(e[a],t[a])===!1)return!1;return!0}const Yv={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Xv({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=Na(),{props:n,proxy:s,emit:o}=a,r=Wv(a),i=Q(()=>n.disable!==!0&&n.href!==void 0),l=Q(t===!0?()=>r===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!=="":()=>r===!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),p=Q(()=>l.value===!0?M(n.to):null),d=Q(()=>p.value!==null),f=Q(()=>i.value===!0||d.value===!0),u=Q(()=>n.type==="a"||f.value===!0?"a":n.tag||e||"div"),v=Q(()=>i.value===!0?{href:n.href,target:n.target}:d.value===!0?{href:p.value.href,target:n.target}:{}),h=Q(()=>{if(d.value===!1)return-1;const{matched:P}=p.value,{length:K}=P,J=P[K-1];if(J===void 0)return-1;const ge=s.$route.matched;if(ge.length===0)return-1;const F=ge.findIndex(Fo.bind(null,J));if(F!==-1)return F;const ae=zo(P[K-2]);return K>1&&zo(J)===ae&&ge[ge.length-1].path!==ae?ge.findIndex(Fo.bind(null,P[K-2])):F}),S=Q(()=>d.value===!0&&h.value!==-1&&Kv(s.$route.params,p.value.params)),q=Q(()=>S.value===!0&&h.value===s.$route.matched.length-1&&Jv(s.$route.params,p.value.params)),j=Q(()=>d.value===!0?q.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":S.value===!0?` ${n.activeClass}`:"":"");function M(P){try{return s.$router.resolve(P)}catch{}return null}function A(P,{returnRouterError:K,to:J=n.to,replace:ge=n.replace}={}){if(n.disable===!0)return P.preventDefault(),Promise.resolve(!1);if(P.metaKey||P.altKey||P.ctrlKey||P.shiftKey||P.button!==void 0&&P.button!==0||n.target==="_blank")return Promise.resolve(!1);P.preventDefault();const F=s.$router[ge===!0?"replace":"push"](J);return K===!0?F:F.then(()=>{}).catch(()=>{})}function b(P){if(d.value===!0){const K=J=>A(P,J);o("click",P,K),P.defaultPrevented!==!0&&K()}else o("click",P)}return{hasRouterLink:d,hasHrefLink:i,hasLink:f,linkTag:u,resolvedLink:p,linkIsActive:S,linkIsExactActive:q,linkClass:j,linkAttrs:v,getLink:M,navigateToRouterLink:A,navigateOnClick:b}}const Qo={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Zv={xs:8,sm:10,md:14,lg:20,xl:24},em=["button","submit","reset"],tm=/[^\s]\/[^\s]/,am=["flat","outline","push","unelevated"];function nm(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const sm={...Oi,...Yv,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...am.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Hv.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},om={...sm,round:Boolean};function rm(e){const t=Di(e,Zv),a=Qv(e),{hasRouterLink:n,hasLink:s,linkTag:o,linkAttrs:r,navigateOnClick:i}=Xv({fallbackTag:"button"}),l=Q(()=>{const q=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},q,{padding:e.padding.split(/\s+/).map(j=>j in Qo?Qo[j]+"px":j).join(" "),minWidth:"0",minHeight:"0"}):q}),p=Q(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=Q(()=>e.disable!==!0&&e.loading!==!0),f=Q(()=>d.value===!0?e.tabindex||0:-1),u=Q(()=>nm(e,"standard")),v=Q(()=>{const q={tabindex:f.value};return s.value===!0?Object.assign(q,r.value):em.includes(e.type)===!0&&(q.type=e.type),o.value==="a"?(e.disable===!0?q["aria-disabled"]="true":q.href===void 0&&(q.role="button"),n.value!==!0&&tm.test(e.type)===!0&&(q.type=e.type)):e.disable===!0&&(q.disabled="",q["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(q,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),q}),h=Q(()=>{let q;e.color!==void 0?e.flat===!0||e.outline===!0?q=`text-${e.textColor||e.color}`:q=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(q=`text-${e.textColor}`);const j=e.round===!0?"round":`rectangle${p.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${j}`+(q!==void 0?" "+q:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),S=Q(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:l,innerClasses:S,attributes:v,hasLink:s,linkTag:o,navigateOnClick:i,isActionable:d}}const{passiveCapture:He}=Ua;let Qt=null,Wt=null,Kt=null;const Ka=$s({name:"QBtn",props:{...om,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=Na(),{classes:s,style:o,innerClasses:r,attributes:i,hasLink:l,linkTag:p,navigateOnClick:d,isActionable:f}=rm(e),u=U(null),v=U(null);let h=null,S,q=null;const j=Q(()=>e.label!==void 0&&e.label!==null&&e.label!==""),M=Q(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),A=Q(()=>({center:e.round})),b=Q(()=>{const O=Math.max(0,Math.min(100,e.percentage));return O>0?{transition:"transform 0.6s",transform:`translateX(${O-100}%)`}:{}}),P=Q(()=>{if(e.loading===!0)return{onMousedown:ne,onTouchstart:ne,onClick:ne,onKeydown:ne,onKeyup:ne};if(f.value===!0){const O={onClick:J,onKeydown:ge,onMousedown:ae};if(n.$q.platform.has.touch===!0){const se=e.onTouchstart!==void 0?"":"Passive";O[`onTouchstart${se}`]=F}return O}return{onClick:Ht}}),K=Q(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:o.value,...i.value,...P.value}));function J(O){if(u.value!==null){if(O!==void 0){if(O.defaultPrevented===!0)return;const se=document.activeElement;if(e.type==="submit"&&se!==document.body&&u.value.contains(se)===!1&&se.contains(u.value)===!1){O.qAvoidFocus!==!0&&u.value.focus();const he=()=>{document.removeEventListener("keydown",Ht,!0),document.removeEventListener("keyup",he,He),u.value?.removeEventListener("blur",he,He)};document.addEventListener("keydown",Ht,!0),document.addEventListener("keyup",he,He),u.value.addEventListener("blur",he,He)}}d(O)}}function ge(O){u.value!==null&&(a("keydown",O),us(O,[13,32])===!0&&Wt!==u.value&&(Wt!==null&&V(),O.defaultPrevented!==!0&&(O.qAvoidFocus!==!0&&u.value.focus(),Wt=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",te,!0),u.value.addEventListener("blur",te,He)),Ht(O)))}function F(O){u.value!==null&&(a("touchstart",O),O.defaultPrevented!==!0&&(Qt!==u.value&&(Qt!==null&&V(),Qt=u.value,h=O.target,h.addEventListener("touchcancel",te,He),h.addEventListener("touchend",te,He)),S=!0,q!==null&&clearTimeout(q),q=setTimeout(()=>{q=null,S=!1},200)))}function ae(O){u.value!==null&&(O.qSkipRipple=S===!0,a("mousedown",O),O.defaultPrevented!==!0&&Kt!==u.value&&(Kt!==null&&V(),Kt=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",te,He)))}function te(O){if(u.value!==null&&!(O?.type==="blur"&&document.activeElement===u.value)){if(O?.type==="keyup"){if(Wt===u.value&&us(O,[13,32])===!0){const se=new MouseEvent("click",O);se.qKeyEvent=!0,O.defaultPrevented===!0&&Vv(se),O.cancelBubble===!0&&zi(se),u.value.dispatchEvent(se),Ht(O),O.qKeyEvent=!0}a("keyup",O)}V()}}function V(O){const se=v.value;O!==!0&&(Qt===u.value||Kt===u.value)&&se!==null&&se!==document.activeElement&&(se.setAttribute("tabindex",-1),se.focus()),Qt===u.value&&(h!==null&&(h.removeEventListener("touchcancel",te,He),h.removeEventListener("touchend",te,He)),Qt=h=null),Kt===u.value&&(document.removeEventListener("mouseup",te,He),Kt=null),Wt===u.value&&(document.removeEventListener("keyup",te,!0),u.value?.removeEventListener("blur",te,He),Wt=null),u.value?.classList.remove("q-btn--active")}function ne(O){Ht(O),O.qSkipRipple=!0}return Sn(()=>{V(!0)}),Object.assign(n,{click:O=>{f.value===!0&&J(O)}}),()=>{let O=[];e.icon!==void 0&&O.push(Ce(No,{name:e.icon,left:e.stack!==!0&&j.value===!0,role:"img"})),j.value===!0&&O.push(Ce("span",{class:"block"},[e.label])),O=ma(t.default,O),e.iconRight!==void 0&&e.round===!1&&O.push(Ce(No,{name:e.iconRight,right:e.stack!==!0&&j.value===!0,role:"img"}));const se=[Ce("span",{class:"q-focus-helper",ref:v})];return e.loading===!0&&e.percentage!==void 0&&se.push(Ce("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[Ce("span",{class:"q-btn__progress-indicator fit block",style:b.value})])),se.push(Ce("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},O)),e.loading!==null&&se.push(Ce(Bl,{name:"q-transition--fade"},()=>e.loading===!0?[Ce("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[Ce($v)])]:null)),_e(Ce(p.value,K.value,se),[[zv,M.value,void 0,A.value]])}}}),im={class:"father"},cm={class:"content"},lm={class:"code-block"},dm={class:"code"},um={class:"example"},pm={class:"p"},fm={class:"q-pa-md demo-quasar"},vm={__name:"templateQuasar",setup(e){return U(!0),(t,a)=>(Y(),ee("div",im,[c("section",cm,[a[3]||(a[3]=X(`<h1 class="title" data-v-4ba04cb9>Crear un Proyecto con Quasar Framework</h1><p class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Quasar Framework</strong> es un framework de Vue.js de código abierto que permite desarrollar aplicaciones web responsive, PWA, aplicaciones móviles y de escritorio con una sola base de código. </p><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>¿Qué es Quasar Framework?</h2><p class="p" data-v-4ba04cb9> Quasar es más que un simple framework de UI - es un framework completo que proporciona: </p><ul data-v-4ba04cb9><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Componentes UI</strong> de alta calidad</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Build system</strong> configurado y optimizado</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Multiplataforma</strong>: Web, Mobile, Desktop, PWA</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Performance</strong> optimizado por defecto</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>TypeScript</strong> soporte nativo</li></ul><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>🚀 Características Principales</h3><p class="p" data-v-4ba04cb9> Quasar permite desarrollar una vez y desplegar en múltiples plataformas sin necesidad de cambiar el código. </p></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Requisitos Previos</h2><p class="p" data-v-4ba04cb9> Antes de instalar Quasar, asegúrate de tener lo siguiente en tu sistema: </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Verificar Instalaciones</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Verificar versi&amp;oacute;n de Node.js (requerido 14+)
node --version

# Verificar npm
npm --version

# Verificar yarn (opcional)
yarn --version</code></pre></div><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>📋 Versiones Recomendadas</h3><ul data-v-4ba04cb9><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Node.js:</strong> 14.x o superior</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>npm:</strong> 6.x o superior</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>yarn:</strong> 1.x o superior (opcional)</li></ul></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Instalación de Quasar CLI</h2><p class="p" data-v-4ba04cb9> La CLI de Quasar es la herramienta principal para crear y gestionar proyectos. Se instala globalmente. </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Instalación Global</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Con npm
npm install -g @quasar/cli

# Con yarn
yarn global add @quasar/cli

# Verificar instalaci&amp;oacute;n
quasar --version</code></pre></div><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>💡 Nota Importante</h3><p class="p" data-v-4ba04cb9> En algunos sistemas, puede que necesites usar <code data-v-4ba04cb9>sudo</code> para instalar paquetes globalmente, o configurar correctamente los permisos de npm. </p></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Crear un Nuevo Proyecto</h2><p class="p" data-v-4ba04cb9> Una vez instalada la CLI, puedes crear un nuevo proyecto con el comando <code data-v-4ba04cb9>quasar create</code>. </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Comando de Creación</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Crear un nuevo proyecto
quasar create &amp;lt;nombre-del-proyecto&amp;gt;

# Ejemplo:
quasar create mi-aplicacion</code></pre></div><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>Asistente Interactivo</h3><p class="p" data-v-4ba04cb9> El comando <code data-v-4ba04cb9>quasar create</code> iniciará un asistente interactivo que te guiará en la configuración inicial del proyecto. </p></div><h3 class="subtitle-sm" data-v-4ba04cb9>Opciones del Asistente</h3><p class="p" data-v-4ba04cb9> Durante la creación, el asistente te preguntará sobre: </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Configuraciones Típicas</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9>? Project name (internal usage for dev) (mi-aplicacion)
? Project product name (must start with letter if building mobile apps) (Mi Aplicacion)
? Project description (A Quasar Project)
? Author (Tu Nombre &amp;lt;tu-email@ejemplo.com&amp;gt;)
? Pick your CSS preprocessor: (Use arrow keys)
❯ Sass with SCSS syntax 
  Sass with indented syntax 
  Stylus 
  None (the others will still be available)
? Check the features needed for your project:
 ◉ ESLint
 ◯ TypeScript
 ◯ Vuex
 ◯ Axios
 ◯ Vue-i18n
❯◉ Vuex
? Pick an ESLint preset: (Use arrow keys)
❯ Standard 
  Prettier 
? Continue to install project dependencies after the project has been created? (recommended) (Y/n)</code></pre></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Estructura del Proyecto</h2><p class="p" data-v-4ba04cb9> Un proyecto Quasar tiene una estructura organizada y clara: </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Estructura de Directorios</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9>mi-aplicacion/
├── public/                 # Archivos p&amp;uacute;blicos
├── src/
│   ├── assets/            # Recursos (im&amp;aacute;genes, fuentes)
│   ├── components/        # Componentes Vue
│   ├── css/               # Estilos globales
│   ├── layouts/           # Layouts de la aplicaci&amp;oacute;n
│   ├── pages/             # P&amp;aacute;ginas/vistas
│   ├── router/            # Configuraci&amp;oacute;n de rutas
│   ├── store/             # Estado global (Vuex)
│   ├── boot/              # Boot files (inicializaci&amp;oacute;n)
│   └── App.vue            # Componente ra&amp;iacute;z
├── quasar.conf.js         # Configuraci&amp;oacute;n de Quasar
├── package.json
└── ...otros archivos</code></pre></div><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>🏗️ Arquitectura Quasar</h3><p class="p" data-v-4ba04cb9> Quasar sigue una arquitectura bien definida que separa claramente las responsabilidades entre layouts, pages, components y stores. </p></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Comandos Principales</h2><p class="p" data-v-4ba04cb9> Quasar CLI proporciona varios comandos para diferentes tareas de desarrollo. </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Comandos de Desarrollo</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Desarrollo con hot-reload
quasar dev

# Desarrollo para mobile
quasar dev -m

# Desarrollo para desktop (con Electron)
quasar dev -m electron

# Desarrollo con modo PWA
quasar dev -m pwa</code></pre></div><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Comandos de Build</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Build para producción (SPA)
quasar build

# Build para PWA
quasar build -m pwa

# Build para Cordova (mobile)
quasar build -m cordova

# Build para Electron (desktop)
quasar build -m electron

# Build para SSR
quasar build -m ssr</code></pre></div><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Otros Comandos Útiles</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Agregar un modo (PWA, Cordova, Electron)
quasar mode add pwa

# Agregar un icono set
quasar ext add @quasar/icon-set

# Crear un nuevo componente
quasar new component MiComponente

# Crear un nuevo layout
quasar new layout MiLayout

# Crear una nueva p&amp;aacute;gina
quasar new page MiPagina

# Crear un store
quasar new store MiStore</code></pre></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Ejemplo Práctico: Primer Componente</h2><p class="p" data-v-4ba04cb9> Veamos cómo crear y usar componentes en Quasar: </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Crear un Componente</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Crear un nuevo componente
quasar new component MiBoton

# Esto crea: src/components/MiBoton.vue</code></pre></div>`,40)),c("div",lm,[a[0]||(a[0]=c("h3",{class:"code-title"},"Componente Quasar Básico",-1)),c("pre",dm,[c("code",null,`<template>
  <div class="q-pa-md">
    <q-btn 
      color="primary"
      label="Mi Bot&oacute;n Quasar"
      @click="handleClick"
      icon="favorite"
    />
    
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">`+T(t.title)+`</div>
        <div class="text-subtitle2">`+T(t.subtitle)+`</div>
      </q-card-section>
      
      <q-card-actions align="right">
        <q-btn flat label="Acci&oacute;n 1" color="primary" />
        <q-btn flat label="Acci&oacute;n 2" color="primary" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from &apos;vue&apos;
import { useQuasar } from &apos;quasar&apos;

const $q = useQuasar()

const title = ref(&apos;T&iacute;tulo de la Tarjeta&apos;)
const subtitle = ref(&apos;Subt&iacute;tulo descriptivo&apos;)

const handleClick = () =&gt; {
  $q.notify({
    message: &apos;&iexcl;Bot&oacute;n clickeado!&apos;,
    color: &apos;positive&apos;,
    position: &apos;top&apos;
  })
}
<\/script>

<style scoped>
/* Estilos personalizados */
`,1)])]),c("div",um,[a[2]||(a[2]=c("h3",{class:"example-title"},"Demo: Componentes Quasar",-1)),c("div",pm,[c("div",fm,[re(Ka,{color:"primary",label:"Botón Primario",class:"q-mr-sm"}),re(Ka,{color:"secondary",label:"Botón Secundario",class:"q-mr-sm"}),re(Ka,{color:"positive",label:"Éxito",class:"q-mr-sm"}),re(Ka,{color:"negative",label:"Error"})]),a[1]||(a[1]=c("p",{class:"q-mt-md"},"Estos son ejemplos de componentes Quasar integrados.",-1))])]),a[4]||(a[4]=X(`<hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Configuración: quasar.conf.js</h2><p class="p" data-v-4ba04cb9> El archivo <code data-v-4ba04cb9>quasar.conf.js</code> es el corazón de la configuración de Quasar. </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Configuración Básica</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9>module.exports = function (ctx) {
  return {
    // Application boot file
    boot: [
      &amp;apos;axios&amp;apos;,
      &amp;apos;i18n&amp;apos;
    ],

    // CSS framework
    framework: {
      iconSet: &amp;apos;material-icons&amp;apos;,
      lang: &amp;apos;es&amp;apos;,
      config: {
        dark: false // habilitar modo oscuro
      }
    },

    // Animaciones CSS
    animations: [],

    // Build configuration
    build: {
      vueRouterMode: &amp;apos;hash&amp;apos;, // o &amp;apos;history&amp;apos;
      extendWebpack (cfg) {
        // Extender webpack config
      }
    },

    // Dev server configuration
    devServer: {
      https: false,
      port: 8080,
      open: true // abrir navegador autom&amp;aacute;ticamente
    },

    // PWA configuration
    pwa: {
      workboxPluginMode: &amp;apos;GenerateSW&amp;apos;,
      workboxOptions: {},
      manifest: {
        name: &amp;apos;Mi Aplicaci&amp;oacute;n Quasar&amp;apos;,
        short_name: &amp;apos;MiApp&amp;apos;,
        description: &amp;apos;Una aplicaci&amp;oacute;n incre&amp;iacute;ble con Quasar&amp;apos;,
        display: &amp;apos;standalone&amp;apos;,
        orientation: &amp;apos;portrait&amp;apos;,
        background_color: &amp;apos;#ffffff&amp;apos;,
        theme_color: &amp;apos;#027be3&amp;apos;
      }
    }
  }
}</code></pre></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Despliegue en Producción</h2><p class="p" data-v-4ba04cb9> Quasar facilita el despliegue en diferentes entornos: </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Build para Producción</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Build para SPA (Single Page Application)
quasar build

# Los archivos se generan en dist/spa/
# Puedes desplegar en Netlify, Vercel, GitHub Pages, etc.

# Build para PWA
quasar build -m pwa
# Archivos en dist/pwa/

# Build para SSR
quasar build -m ssr
# Archivos en dist/ssr/

# Build para Cordova (Android/iOS)
quasar build -m cordova -T android
# Archivos en src-cordova/platforms/android/app/build/outputs/</code></pre></div><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>🌐 Plataformas de Despliegue</h3><ul data-v-4ba04cb9><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>SPA:</strong> Netlify, Vercel, GitHub Pages, Firebase Hosting</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>PWA:</strong> Mismas que SPA + App Stores (via TWA)</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>SSR:</strong> Servidor Node.js, VPS, Cloud</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Mobile:</strong> Google Play Store, Apple App Store</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Desktop:</strong> Distribución directa o stores</li></ul></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Flujo de Trabajo Recomendado</h2><div class="lifecycle-flow" data-v-4ba04cb9><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>1</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Instalación</h4><p data-v-4ba04cb9>Instalar Quasar CLI globalmente</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>2</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Creación</h4><p data-v-4ba04cb9><code data-v-4ba04cb9>quasar create mi-proyecto</code></p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>3</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Desarrollo</h4><p data-v-4ba04cb9><code data-v-4ba04cb9>quasar dev</code> con hot-reload</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>4</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Testing</h4><p data-v-4ba04cb9>Probar en diferentes modos y plataformas</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>5</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Build</h4><p data-v-4ba04cb9><code data-v-4ba04cb9>quasar build</code> para producción</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>6</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Despliegue</h4><p data-v-4ba04cb9>Desplegar en la plataforma elegida</p></div></div></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Ventajas de Usar Quasar</h2><ul data-v-4ba04cb9><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>🚀 Productividad:</strong> Desarrollo rápido con componentes pre-construidos</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>📱 Multiplataforma:</strong> Un código para web, mobile y desktop</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>🎨 Diseño Consistente:</strong> Material Design por defecto</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>⚡ Performance:</strong> Optimizado y tree-shaking automático</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>🛠️ Tooling Completo:</strong> CLI poderosa con todos los modos integrados</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>📚 Documentación Excelente:</strong> Guías completas y ejemplos</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>👥 Comunidad Activa:</strong> Soporte y plugins de la comunidad</li></ul><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>✅ Listo para Empezar</h3><p class="p" data-v-4ba04cb9> Con Quasar tienes todo lo necesario para crear aplicaciones modernas, responsive y multiplataforma. ¡Es hora de empezar tu primer proyecto! </p></div>`,16))])]))}},mm=we(vm,[["__scopeId","data-v-4ba04cb9"]]),gm={class:"father"},hm={__name:"templateQuasarInstallVue",setup(e){return(t,a)=>(Y(),ee("div",gm,[...a[0]||(a[0]=[X(`<section class="content" data-v-0c929ac5><h1 class="title" data-v-0c929ac5>Instalar Quasar en Proyecto Vite Existente</h1><p class="p" data-v-0c929ac5> Si ya tienes un proyecto Vue creado con <strong data-v-0c929ac5>Vite</strong> y quieres integrar <strong data-v-0c929ac5>Quasar Framework</strong>, este manual te guiará paso a paso en el proceso de instalación y configuración. </p><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>⚠️ Consideraciones Previas</h3><p class="p" data-v-0c929ac5> Esta guía asume que tienes un proyecto Vue 3 funcionando creado con <code data-v-0c929ac5>npm create vite@latest</code> y deseas añadir Quasar sin empezar desde cero. </p></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Requisitos del Proyecto</h2><p class="p" data-v-0c929ac5> Verifica que tu proyecto cumple con los siguientes requisitos: </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Verificar Versiones</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5># Verificar Vue 3
npm list vue

# Verificar Vite
npm list vite

# Estructura b&amp;aacute;sica esperada:
mi-proyecto-vite/
├── src/
│   ├── App.vue
│   ├── main.js
│   └── components/
├── package.json
└── vite.config.js</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>✅ Compatibilidad</h3><ul data-v-0c929ac5><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>Vue 3:</strong> Requerido (Composition API)</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>Vite 4+:</strong> Recomendado</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>Node.js 16+:</strong> Necesario</li></ul></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Paso 1: Instalar Quasar</h2><p class="p" data-v-0c929ac5> Comienza instalando Quasar y sus dependencias en tu proyecto existente. </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Instalación de Dependencias</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5># Navegar al directorio del proyecto
cd mi-proyecto-vite

# Instalar Quasar con sus dependencias principales
npm install quasar @quasar/vite-plugin
# o con yarn
yarn add quasar @quasar/vite-plugin

# Instalar iconos y fuentes (opcional pero recomendado)
npm install @quasar/extras
# o con yarn
yarn add @quasar/extras</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>📦 Paquetes Instalados</h3><ul data-v-0c929ac5><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>quasar:</strong> Framework principal</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>@quasar/vite-plugin:</strong> Plugin de Vite para Quasar</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>@quasar/extras:</strong> Iconos y fuentes adicionales</li></ul></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Paso 2: Configurar Vite</h2><p class="p" data-v-0c929ac5> Configura el plugin de Quasar en tu archivo <code data-v-0c929ac5>vite.config.js</code>. </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>vite.config.js</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>// vite.config.js
import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import { quasar, transformAssetUrls } from &#39;@quasar/vite-plugin&#39;

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    
    quasar({
      sassVariables: &#39;src/quasar-variables.sass&#39;
    })
  ]
})</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>🔧 Configuración Explicada</h3><p class="p" data-v-0c929ac5> El plugin de Quasar para Vite necesita: </p><ul data-v-0c929ac5><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>transformAssetUrls:</strong> Para procesar assets en templates Vue</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>sassVariables:</strong> Ruta a las variables Sass personalizadas (opcional)</li></ul></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Paso 3: Configurar Quasar</h2><p class="p" data-v-0c929ac5> Crea un archivo de configuración para Quasar en tu proyecto. </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>quasar.config.js</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>// quasar.config.js
export default {
  framework: {
    config: {
      dark: false, // modo oscuro
      brand: {
        primary: &#39;#1976d2&#39;,
        secondary: &#39;#26a69a&#39;,
        accent: &#39;#9c27b0&#39;,
        // ... m&amp;aacute;s colores personalizados
      }
    },
    iconSet: &#39;material-icons&#39;, // o &#39;mdi-v6&#39;, &#39;fontawesome-v6&#39;, etc.
    lang: &#39;es&#39; // idioma
  },
  plugins: [
    &#39;Notify&#39;,
    &#39;Dialog&#39;,
    &#39;Loading&#39;
    // ... otros plugins de Quasar
  ]
}</code></pre></div><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Alternativa: Configuración en main.js</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>// src/main.js
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;

// Quasar
import { Quasar, Notify, Dialog } from &#39;quasar&#39;
import quasarLang from &#39;quasar/lang/es&#39;
import quasarIconSet from &#39;quasar/icon-set/material-icons&#39;

// Estilos de Quasar
import &#39;quasar/src/css/index.sass&#39;
import &#39;@quasar/extras/material-icons/material-icons.css&#39;

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify, Dialog },
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    dark: false,
    brand: {
      primary: &#39;#1976d2&#39;,
      secondary: &#39;#26a69a&#39;,
      accent: &#39;#9c27b0&#39;
    }
  }
})

app.mount(&#39;#app&#39;)</code></pre></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Paso 4: Configurar Variables Sass (Opcional)</h2><p class="p" data-v-0c929ac5> Para personalizar los estilos de Quasar, crea un archivo de variables Sass. </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>src/quasar-variables.sass</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>// Variables Sass personalizadas para Quasar

// Colores principales
$primary   : #1976d2
$secondary : #26a69a
$accent    : #9c27b0

$dark      : #1d1d1d
$dark-page : #121212

$positive  : #21BA45
$negative  : #C10015
$info      : #31CCEC
$warning   : #F2C037

// Tipograf&amp;iacute;a
$typography-font-family : &#39;Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif&#39;

// Espaciado
$space-base : 16px
$space-x-base : $space-base
$space-y-base : $space-base

// Breakpoints
$breakpoint-xs: 599px
$breakpoint-sm: 1023px
$breakpoint-md: 1439px
$breakpoint-lg: 1919px</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>🎨 Personalización</h3><p class="p" data-v-0c929ac5> Las variables Sass te permiten personalizar completamente la apariencia de Quasar sin sobrescribir CSS. </p></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Paso 5: Actualizar App.vue</h2><p class="p" data-v-0c929ac5> Modifica tu componente principal para usar los componentes de Quasar. </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>App.vue Actualizado</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>&lt;template&gt;
  &lt;q-layout view=&quot;hHh lpR fFf&quot;&gt;
    &lt;q-header elevated class=&quot;bg-primary text-white&quot;&gt;
      &lt;q-toolbar&gt;
        &lt;q-btn 
          flat 
          @click=&quot;drawer = !drawer&quot; 
          round 
          dense 
          icon=&quot;menu&quot; 
        /&gt;
        &lt;q-toolbar-title&gt;
          Mi App con Quasar + Vite
        &lt;/q-toolbar-title&gt;
      &lt;/q-toolbar&gt;
    &lt;/q-header&gt;

    &lt;q-drawer 
      v-model=&quot;drawer&quot; 
      show-if-above 
      :width=&quot;200&quot; 
      :breakpoint=&quot;500&quot;
    &gt;
      &lt;q-scroll-area class=&quot;fit&quot;&gt;
        &lt;q-list padding&gt;
          &lt;q-item clickable v-ripple&gt;
            &lt;q-item-section avatar&gt;
              &lt;q-icon name=&quot;inbox&quot; /&gt;
            &lt;/q-item-section&gt;
            &lt;q-item-section&gt;
              Inicio
            &lt;/q-item-section&gt;
          &lt;/q-item&gt;
          
          &lt;q-item clickable v-ripple&gt;
            &lt;q-item-section avatar&gt;
              &lt;q-icon name=&quot;star&quot; /&gt;
            &lt;/q-item-section&gt;
            &lt;q-item-section&gt;
              Favoritos
            &lt;/q-item-section&gt;
          &lt;/q-item&gt;
        &lt;/q-list&gt;
      &lt;/q-scroll-area&gt;
    &lt;/q-drawer&gt;

    &lt;q-page-container&gt;
      &lt;router-view /&gt;
    &lt;/q-page-container&gt;
  &lt;/q-layout&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const drawer = ref(false)
&lt;/script&gt;

&lt;style&gt;
/* Estilos globales */
body {
  margin: 0;
}
&lt;/style&gt;</code></pre></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Paso 6: Usar Componentes Quasar</h2><p class="p" data-v-0c929ac5> Ahora puedes usar cualquier componente de Quasar en tu aplicación. </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Ejemplo de Componente</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>&lt;template&gt;
  &lt;div class=&quot;q-pa-md&quot;&gt;
    &lt;q-card class=&quot;my-card&quot;&gt;
      &lt;q-card-section&gt;
        &lt;div class=&quot;text-h6&quot;&gt;Mi Componente con Quasar&lt;/div&gt;
        &lt;div class=&quot;text-subtitle2&quot;&gt;Integrado en Vite&lt;/div&gt;
      &lt;/q-card-section&gt;

      &lt;q-card-section&gt;
        &lt;q-input 
          v-model=&quot;texto&quot; 
          label=&quot;Campo de texto&quot; 
          class=&quot;q-mb-md&quot;
        /&gt;
        
        &lt;q-btn 
          color=&quot;primary&quot; 
          label=&quot;Enviar&quot; 
          @click=&quot;mostrarNotificacion&quot;
          :disable=&quot;!texto&quot;
        /&gt;
        
        &lt;q-btn 
          color=&quot;secondary&quot; 
          label=&quot;Limpiar&quot; 
          @click=&quot;texto = &#39;&#39;&quot; 
          class=&quot;q-ml-sm&quot;
        /&gt;
      &lt;/q-card-section&gt;
    &lt;/q-card&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import { useQuasar } from &#39;quasar&#39;

const $q = useQuasar()
const texto = ref(&#39;&#39;)

const mostrarNotificacion = () =&gt; {
  $q.notify({
    message: \`Texto enviado: \${texto.value}\`,
    color: &#39;positive&#39;,
    position: &#39;top&#39;
  })
  texto.value = &#39;&#39;
}
&lt;/script&gt;

&lt;style scoped&gt;
.my-card {
  max-width: 400px;
  margin: 0 auto;
}
&lt;/style&gt;</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>🧩 Componentes Disponibles</h3><p class="p" data-v-0c929ac5> Con Quasar instalado, tienes acceso a más de 80 componentes listos para usar: </p><ul data-v-0c929ac5><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>Formularios:</strong> QInput, QSelect, QCheckbox, QToggle</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>Layout:</strong> QLayout, QHeader, QDrawer, QPage</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>Navegación:</strong> QTabs, QBreadcrumbs, QPagination</li><li class="p" data-v-0c929ac5><strong data-v-0c929ac5>Utilidades:</strong> QDialog, QNotify, QLoading, QAjaxBar</li></ul></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Paso 7: Configuración Avanzada</h2><p class="p" data-v-0c929ac5> Para proyectos más complejos, considera estas configuraciones adicionales. </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>vite.config.js Avanzado</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import { quasar, transformAssetUrls } from &#39;@quasar/vite-plugin&#39;

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    
    quasar({
      sassVariables: &#39;src/quasar-variables.sass&#39;,
      autoImportComponentCase: &#39;pascal&#39;, // &#39;kebab&#39; | &#39;pascal&#39; | &#39;combined&#39;
      
      // Tree shaking optimizado
      treeshake: {
        // Components to exclude from auto-import
        exclude: [
          &#39;QChatMessage&#39;,
          &#39;QColor&#39;
        ],
        
        // Components to include (even if not used)
        include: [
          &#39;QBtn&#39;,
          &#39;QCard&#39;
        ]
      }
    })
  ],
  
  // Optimizaciones para Quasar
  build: {
    target: &#39;esnext&#39;,
    minify: &#39;esbuild&#39;,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          quasar: [&#39;quasar&#39;]
        }
      }
    }
  },
  
  // Server configuration
  server: {
    port: 3000,
    open: true
  }
})</code></pre></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Resolución de Problemas Comunes</h2><h3 class="subtitle-sm" data-v-0c929ac5>Error: Cannot find module &#39;@quasar/vite-plugin&#39;</h3><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Solución</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5># Reinstalar el plugin
npm uninstall @quasar/vite-plugin
npm install @quasar/vite-plugin

# Verificar que est&amp;eacute; en dependencies
npm list @quasar/vite-plugin</code></pre></div><h3 class="subtitle-sm" data-v-0c929ac5>Error: Componentes no se renderizan</h3><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Solución</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>// Verificar que Quasar est&amp;eacute; correctamente inicializado
// en main.js o App.vue

import { Quasar } from &#39;quasar&#39;
import &#39;quasar/src/css/index.sass&#39;

app.use(Quasar, {
  // config necesaria
})</code></pre></div><h3 class="subtitle-sm" data-v-0c929ac5>Error: Estilos no se aplican</h3><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Solución</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>// Asegurar que los estilos de Quasar se importen
import &#39;quasar/src/css/index.sass&#39;
import &#39;@quasar/extras/material-icons/material-icons.css&#39;

// En vite.config.js, verificar transformAssetUrls
template: { transformAssetUrls }</code></pre></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Verificación Final</h2><p class="p" data-v-0c929ac5> Para confirmar que Quasar está correctamente instalado: </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Comandos de Verificación</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5># Iniciar servidor de desarrollo
npm run dev

# Verificar en el navegador
# Deber&amp;iacute;as ver componentes Quasar funcionando

# Verificar build de producci&amp;oacute;n
npm run build
npm run preview</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>✅ Indicadores de Éxito</h3><ul data-v-0c929ac5><li class="p" data-v-0c929ac5>Servidor se inicia sin errores</li><li class="p" data-v-0c929ac5>Componentes Quasar se renderizan correctamente</li><li class="p" data-v-0c929ac5>Estilos y temas se aplican</li><li class="p" data-v-0c929ac5>Build de producción funciona</li><li class="p" data-v-0c929ac5>Plugins (Notify, Dialog, etc.) funcionan</li></ul></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Estructura Final del Proyecto</h2><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Estructura con Quasar</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5>mi-proyecto-vite/
├── src/
│   ├── App.vue              # Actualizado con Quasar
│   ├── main.js              # Configuraci&amp;oacute;n de Quasar
│   ├── quasar-variables.sass # Variables personalizadas
│   └── components/
│       └── MiComponente.vue  # Usando componentes Quasar
├── node_modules/
│   └── quasar/              # Dependencias de Quasar
├── package.json             # Dependencias actualizadas
├── vite.config.js           # Plugin de Quasar configurado
└── quasar.config.js         # Configuraci&amp;oacute;n de Quasar</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>🎉 ¡Listo!</h3><p class="p" data-v-0c929ac5> Ahora tienes Quasar Framework completamente integrado en tu proyecto Vite existente. Puedes comenzar a usar todos los componentes y características de Quasar mientras mantienes tu configuración personalizada de Vite. </p></div></section>`,1)])]))}},bm=we(hm,[["__scopeId","data-v-0c929ac5"]]),ym={class:"father"},Cm={class:"content"},xm={class:"example"},_m={class:"p"},Sm={class:"demo-nav"},km={class:"demo-text"},wm={class:"example"},Pm={class:"p"},qm={class:"demo-text"},Em={class:"example"},Am={class:"dashboard-demo"},Rm={class:"sidebar-demo"},Tm={class:"content-demo"},jm={key:0},Mm={key:1},$m={key:2},Im={class:"example"},Lm={class:"p"},Vm={class:"demo-text"},Om={__name:"vueRouter",setup(e){const t=U("123"),a=U("Usuario Demo"),n=U("inicio"),s=U(!1),o=U("");Su();const r=()=>{t.value&&(a.value=`Usuario ${t.value}`,o.value=`Navegando al perfil del usuario ${t.value}`)},i=()=>{o.value="Navegando a la página de inicio"},l=()=>{o.value="Navegando a la página Acerca De"},p=()=>{o.value="Navegando hacia atrás en el historial"},d=()=>{o.value="Navegando hacia adelante en el historial"},f=()=>{s.value?confirm("Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?")?(o.value="Navegación permitida - cambios descartados",s.value=!1):o.value="Navegación cancelada por el usuario":o.value="Navegación permitida - sin cambios pendientes"};return Da(()=>{console.log("Componente Vue Router montado")}),(u,v)=>{const h=oa("router-link");return Y(),ee("div",ym,[c("section",Cm,[v[20]||(v[20]=X(`<h1 class="title" data-v-3a50ee9c>Vue Router</h1><p class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Vue Router</strong> es la librería oficial de enrutamiento para Vue.js. Permite crear aplicaciones de una sola página (SPA) con múltiples vistas y navegación entre ellas sin recargar la página completa. </p><hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>¿Por qué usar Vue Router?</h2><p class="p" data-v-3a50ee9c> Vue Router proporciona una experiencia de usuario fluida al permitir la navegación entre diferentes vistas manteniendo el estado de la aplicación. Es esencial para construir aplicaciones Vue complejas con múltiples páginas. </p><div class="example" data-v-3a50ee9c><h3 class="example-title" data-v-3a50ee9c>Características Principales</h3><ul data-v-3a50ee9c><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Navegación declarativa:</strong> Usa componentes router-link para navegación</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Rutas anidadas:</strong> Soporte para layouts complejos</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Navegación programática:</strong> Control de navegación desde el código</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Protección de rutas:</strong> Guards para control de acceso</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Modos de historia:</strong> Hash mode y HTML5 history mode</li></ul></div><hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Instalación y Configuración</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Instalación</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
// Usando npm
npm install vue-router@4

// Usando yarn
yarn add vue-router@4

// Usando pnpm
pnpm add vue-router@4
        </code></pre></div><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Configuración Básica</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
// router/index.js
import { createRouter, createWebHistory } from &#39;vue-router&#39;
import Home from &#39;../views/Home.vue&#39;
import About from &#39;../views/About.vue&#39;

const routes = [
  {
    path: &#39;/&#39;,
    name: &#39;Home&#39;,
    component: Home
  },
  {
    path: &#39;/about&#39;,
    name: &#39;About&#39;,
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

// main.js
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import router from &#39;./router&#39;

const app = createApp(App)
app.use(router)
app.mount(&#39;#app&#39;)
        </code></pre></div><hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>RouterView y RouterLink</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>App.vue - Componente Raíz</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;nav&gt;
      &lt;router-link to=&quot;/&quot;&gt;Inicio&lt;/router-link&gt; |
      &lt;router-link to=&quot;/about&quot;&gt;Acerca de&lt;/router-link&gt; |
      &lt;router-link :to=&quot;{ name: &#39;Usuario&#39;, params: { id: 123 }}&quot;&gt;Usuario 123&lt;/router-link&gt;
    &lt;/nav&gt;
    &lt;router-view /&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre></div>`,13)),c("div",xm,[v[9]||(v[9]=c("h3",{class:"example-title"},"Navegación Activa",-1)),c("div",_m,[c("nav",Sm,[re(h,{to:"/",class:"router-link","active-class":"active"},{default:At(()=>[...v[5]||(v[5]=[Z("Inicio",-1)])]),_:1}),re(h,{to:"/about",class:"router-link","active-class":"active"},{default:At(()=>[...v[6]||(v[6]=[Z("Acerca de",-1)])]),_:1}),re(h,{to:"/contact",class:"router-link","active-class":"active"},{default:At(()=>[...v[7]||(v[7]=[Z("Contacto",-1)])]),_:1})]),c("p",km,[v[8]||(v[8]=Z("Ruta actual: ",-1)),c("strong",null,T(u.$route.path),1)])])]),v[21]||(v[21]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Rutas Dinámicas y Parámetros</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Definición de Rutas con Parámetros</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
// router/index.js
const routes = [
  {
    path: &#39;/usuario/:id&#39;,
    name: &#39;Usuario&#39;,
    component: Usuario,
    props: true // Permite pasar params como props
  },
  {
    path: &#39;/producto/:categoria/:id&#39;,
    name: &#39;Producto&#39;,
    component: Producto
  }
]
        </code></pre></div><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Componente Usuario.vue</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Perfil del Usuario&lt;/h1&gt;
    &lt;p&gt;ID del usuario: {{ $route.params.id }}&lt;/p&gt;
    &lt;!-- O usando props --&gt;
    &lt;p&gt;ID del usuario (via props): {{ id }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useRoute } from &#39;vue-router&#39;

// Usando useRoute hook
const route = useRoute()
const userId = route.params.id

// O recibiendo como prop
defineProps({
  id: {
    type: String,
    required: true
  }
})
&lt;/script&gt;
        </code></pre></div>`,4)),c("div",wm,[v[11]||(v[11]=c("h3",{class:"example-title"},"Ejemplo de Ruta Dinámica",-1)),c("div",Pm,[_e(c("input",{"onUpdate:modelValue":v[0]||(v[0]=S=>t.value=S),placeholder:"ID de usuario",class:"demo-input"},null,512),[[je,t.value]]),c("button",{onClick:r,class:"demo-button"},"Ver Perfil"),c("p",qm,[v[10]||(v[10]=Z("Usuario actual: ",-1)),c("strong",null,T(a.value),1)])])]),v[22]||(v[22]=c("hr",null,null,-1)),v[23]||(v[23]=c("h2",{class:"subtitle"},"Navegación Programática",-1)),v[24]||(v[24]=c("div",{class:"code-block"},[c("h3",{class:"code-title"},"Usando useRouter"),c("pre",{class:"code"},[c("code",null,`
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Navegación básica
const irAInicio = () => {
  router.push('/')
}

// Navegación por nombre
const irAAcercaDe = () => {
  router.push({ name: 'About' })
}

// Navegación con parámetros
const irAUsuario = (id) => {
  router.push({ name: 'Usuario', params: { id } })
}

// Navegación con query
const buscar = (termino) => {
  router.push({ 
    path: '/buscar', 
    query: { q: termino } 
  })
}

// Reemplazar la entrada actual en el historial
const reemplazarRuta = () => {
  router.replace('/nueva-ruta')
}

// Navegación hacia atrás/adelante
const irAtras = () => {
  router.go(-1)
}

const irAdelante = () => {
  router.go(1)
}
<\/script>
        `)])],-1)),c("div",{class:"example"},[v[13]||(v[13]=c("h3",{class:"example-title"},"Ejemplo de Navegación",-1)),c("div",{class:"p"},[c("button",{onClick:i,class:"demo-button"},"Ir a Inicio"),c("button",{onClick:l,class:"demo-button"},"Ir a Acerca De"),c("button",{onClick:p,class:"demo-button"},"← Atrás"),c("button",{onClick:d,class:"demo-button"},"Adelante →"),v[12]||(v[12]=c("p",{class:"demo-text"},"Historial de navegación simulado",-1))])]),v[25]||(v[25]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Rutas Anidadas (Nested Routes)</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Configuración de Rutas Anidadas</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
const routes = [
  {
    path: &#39;/dashboard&#39;,
    component: Dashboard,
    children: [
      {
        path: &#39;&#39;,
        name: &#39;Dashboard&#39;,
        component: DashboardHome
      },
      {
        path: &#39;profile&#39;,
        name: &#39;DashboardProfile&#39;,
        component: DashboardProfile
      },
      {
        path: &#39;settings&#39;,
        name: &#39;DashboardSettings&#39;,
        component: DashboardSettings
      }
    ]
  }
]
        </code></pre></div><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Dashboard.vue - Layout Padre</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
&lt;template&gt;
  &lt;div class=&quot;dashboard&quot;&gt;
    &lt;aside class=&quot;sidebar&quot;&gt;
      &lt;h2&gt;Dashboard&lt;/h2&gt;
      &lt;nav&gt;
        &lt;router-link to=&quot;/dashboard&quot;&gt;Inicio&lt;/router-link&gt;
        &lt;router-link to=&quot;/dashboard/profile&quot;&gt;Perfil&lt;/router-link&gt;
        &lt;router-link to=&quot;/dashboard/settings&quot;&gt;Configuración&lt;/router-link&gt;
      &lt;/nav&gt;
    &lt;/aside&gt;
    &lt;main class=&quot;content&quot;&gt;
      &lt;router-view /&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre></div>`,4)),c("div",Em,[v[18]||(v[18]=c("h3",{class:"example-title"},"Ejemplo de Dashboard",-1)),c("div",Am,[c("div",Rm,[v[14]||(v[14]=c("h4",null,"Dashboard",-1)),c("button",{onClick:v[1]||(v[1]=S=>n.value="inicio"),class:ot([{active:n.value==="inicio"},"nav-button"])}," Inicio ",2),c("button",{onClick:v[2]||(v[2]=S=>n.value="perfil"),class:ot([{active:n.value==="perfil"},"nav-button"])}," Perfil ",2),c("button",{onClick:v[3]||(v[3]=S=>n.value="configuracion"),class:ot([{active:n.value==="configuracion"},"nav-button"])}," Configuración ",2)]),c("div",Tm,[n.value==="inicio"?(Y(),ee("div",jm,[...v[15]||(v[15]=[c("h4",null,"Bienvenido al Dashboard",-1),c("p",null,"Esta es la página de inicio del dashboard.",-1)])])):na("",!0),n.value==="perfil"?(Y(),ee("div",Mm,[...v[16]||(v[16]=[c("h4",null,"Perfil de Usuario",-1),c("p",null,"Gestiona tu información personal aquí.",-1)])])):na("",!0),n.value==="configuracion"?(Y(),ee("div",$m,[...v[17]||(v[17]=[c("h4",null,"Configuración",-1),c("p",null,"Ajusta las preferencias de tu cuenta.",-1)])])):na("",!0)])])]),v[26]||(v[26]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Router Guards - Protección de Rutas</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Guards Globales</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
// router/index.js
router.beforeEach((to, from, next) =&gt; {
  // Verificar autenticación
  if (to.meta.requiresAuth &amp;&amp; !store.state.usuario) {
    next(&#39;/login&#39;)
  } else {
    next()
  }
})

router.afterEach((to, from) =&gt; {
  // Analytics tracking
  ga(&#39;send&#39;, &#39;pageview&#39;, to.path)
})
        </code></pre></div><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Guards por Ruta</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
const routes = [
  {
    path: &#39;/admin&#39;,
    component: Admin,
    meta: { requiresAuth: true, requiresAdmin: true },
    beforeEnter: (to, from, next) =&gt; {
      // Lógica específica para esta ruta
      if (!usuarioEsAdmin()) {
        next(&#39;/acceso-denegado&#39;)
      } else {
        next()
      }
    }
  }
]
        </code></pre></div><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Guards en Componentes</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
&lt;script setup&gt;
import { onBeforeRouteLeave, onBeforeRouteUpdate } from &#39;vue-router&#39;

// Guard antes de salir del componente
onBeforeRouteLeave((to, from, next) =&gt; {
  if (formularioModificado) {
    const confirmar = window.confirm(
      &#39;Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?&#39;
    )
    if (confirmar) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})

// Guard cuando los parámetros de la ruta cambian
onBeforeRouteUpdate((to, from, next) =&gt; {
  // Recargar datos cuando el ID cambia
  cargarUsuario(to.params.id)
  next()
})
&lt;/script&gt;
        </code></pre></div>`,5)),c("div",Im,[v[19]||(v[19]=c("h3",{class:"example-title"},"Ejemplo de Guard de Navegación",-1)),c("div",Lm,[c("p",null,"¿Tienes cambios sin guardar? "+T(s.value?"Sí":"No"),1),c("button",{onClick:v[4]||(v[4]=S=>s.value=!s.value),class:"demo-button"},T(s.value?"Descartar Cambios":"Hacer Cambios"),1),c("button",{onClick:f,class:"demo-button"},"Intentar Navegar"),c("p",Vm,T(o.value),1)])]),v[27]||(v[27]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Lazy Loading de Rutas</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Carga Diferida con Vue 3</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
const routes = [
  {
    path: &#39;/&#39;,
    name: &#39;Home&#39;,
    component: () =&gt; import(&#39;../views/Home.vue&#39;)
  },
  {
    path: &#39;/about&#39;,
    name: &#39;About&#39;,
    // Lazy loading con comentario webpackChunkName
    component: () =&gt; import(/* webpackChunkName: &quot;about&quot; */ &#39;../views/About.vue&#39;)
  },
  {
    path: &#39;/admin&#39;,
    name: &#39;Admin&#39;,
    // Agrupando rutas en el mismo chunk
    component: () =&gt; import(/* webpackChunkName: &quot;admin&quot; */ &#39;../views/Admin.vue&#39;)
  }
]
        </code></pre></div><hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Composición con Composition API</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Composable useNavigation</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
// composables/useNavigation.js
import { useRouter, useRoute } from &#39;vue-router&#39;

export function useNavigation() {
  const router = useRouter()
  const route = useRoute()

  const navigateTo = (path, params = {}) =&gt; {
    router.push({ path, params })
  }

  const navigateByName = (name, params = {}) =&gt; {
    router.push({ name, params })
  }

  const getCurrentParam = (paramName) =&gt; {
    return route.params[paramName]
  }

  const getQueryParam = (queryName) =&gt; {
    return route.query[queryName]
  }

  const isCurrentRoute = (routeName) =&gt; {
    return route.name === routeName
  }

  return {
    navigateTo,
    navigateByName,
    getCurrentParam,
    getQueryParam,
    isCurrentRoute,
    currentRoute: route,
    router
  }
}
        </code></pre></div><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Uso en Componente</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
&lt;script setup&gt;
import { useNavigation } from &#39;@/composables/useNavigation&#39;

const {
  navigateTo,
  navigateByName,
  getCurrentParam,
  isCurrentRoute,
  currentRoute
} = useNavigation()

// Ejemplos de uso
const irAUsuario = (id) =&gt; {
  navigateByName(&#39;Usuario&#39;, { id })
}

const userId = getCurrentParam(&#39;id&#39;)
const esPaginaInicio = isCurrentRoute(&#39;Home&#39;)
&lt;/script&gt;
        </code></pre></div><hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Mejores Prácticas</h2><ul data-v-3a50ee9c><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Estructura consistente:</strong> Mantén una estructura clara de rutas</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Lazy loading:</strong> Usa carga diferida para rutas no críticas</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Validación de parámetros:</strong> Valida los params en beforeEnter</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Meta campos:</strong> Usa meta fields para información adicional</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Error handling:</strong> Implementa rutas para errores 404</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Scroll behavior:</strong> Configura el comportamiento del scroll</li></ul><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Ruta 404 y Scroll Behavior</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
const routes = [
  // ... otras rutas
  {
    path: &#39;/:pathMatch(.*)*&#39;,
    name: &#39;NotFound&#39;,
    component: () =&gt; import(&#39;../views/NotFound.vue&#39;)
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Volver a la posición guardada o al top
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
        </code></pre></div>`,11))])])}}},Dm=we(Om,[["__scopeId","data-v-3a50ee9c"]]),Nm={class:"father"},Bm={__name:"pinia",setup(e){return(t,a)=>(Y(),ee("div",Nm,[...a[0]||(a[0]=[X(`<section class="content" data-v-75747352><h1 class="title" data-v-75747352>Pinia</h1><p class="p" data-v-75747352><strong data-v-75747352>Pinia</strong> es la librería oficial de gestión de estado para Vue.js. Es el reemplazo moderno de Vuex, diseñado específicamente para aprovechar al máximo la Composition API de Vue 3. </p><hr data-v-75747352><h2 class="subtitle" data-v-75747352>¿Por qué Pinia?</h2><p class="p" data-v-75747352> Pinia simplifica la gestión de estado eliminando conceptos complejos como mutations y proporcionando una API más directa y type-safe. </p><div class="example" data-v-75747352><h3 class="example-title" data-v-75747352>Ventajas sobre Vuex</h3><div class="comparison" data-v-75747352><div class="approach" data-v-75747352><h4 data-v-75747352>Vuex</h4><ul data-v-75747352><li class="p" data-v-75747352>Mutations, Actions, Getters</li><li class="p" data-v-75747352>Estructura más compleja</li><li class="p" data-v-75747352>Single store global</li></ul></div><div class="approach" data-v-75747352><h4 data-v-75747352>Pinia</h4><ul data-v-75747352><li class="p" data-v-75747352>Solo Actions y Getters</li><li class="p" data-v-75747352>API más simple e intuitiva</li><li class="p" data-v-75747352>Múltiples stores modulares</li></ul></div></div></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Instalación</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Comandos de instalación</h3><pre class="code" data-v-75747352><code data-v-75747352>
npm install pinia

// o usando yarn
yarn add pinia

// o usando pnpm
pnpm add pinia
        </code></pre></div><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Configuración en main.js</h3><pre class="code" data-v-75747352><code data-v-75747352>
import { createApp } from &#39;vue&#39;
import { createPinia } from &#39;pinia&#39;
import App from &#39;./App.vue&#39;

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount(&#39;#app&#39;)
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Definiendo un Store</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Store Básico - Options Style</h3><pre class="code" data-v-75747352><code data-v-75747352>
import { defineStore } from &#39;pinia&#39;

export const useCounterStore = defineStore(&#39;counter&#39;, {
  state: () =&gt; ({
    count: 0,
    name: &#39;Mi Contador&#39;
  }),

  getters: {
    doubleCount: (state) =&gt; state.count * 2
  },

  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
        </code></pre></div><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Store - Composition API Style</h3><pre class="code" data-v-75747352><code data-v-75747352>
import { defineStore } from &#39;pinia&#39;
import { ref, computed } from &#39;vue&#39;

export const useCounterStore = defineStore(&#39;counter&#39;, () =&gt; {
  const count = ref(0)
  const name = ref(&#39;Mi Contador&#39;)

  const doubleCount = computed(() =&gt; count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    decrement
  }
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Usando Stores en Componentes</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Acceso Básico</h3><pre class="code" data-v-75747352><code data-v-75747352>
&lt;script setup&gt;
import { useCounterStore } from &#39;@/stores/counter&#39;

const counterStore = useCounterStore()
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Contador: {{ counterStore.count }}&lt;/p&gt;
    &lt;p&gt;Doble: {{ counterStore.doubleCount }}&lt;/p&gt;
    &lt;button @click=&quot;counterStore.increment&quot;&gt;+&lt;/button&gt;
    &amp;lt;button @click=&quot;counterStore.decrement&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code></pre></div><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Destructuring Reactivo</h3><pre class="code" data-v-75747352><code data-v-75747352>
&lt;script setup&gt;
import { useCounterStore } from &#39;@/stores/counter&#39;
import { storeToRefs } from &#39;pinia&#39;

const counterStore = useCounterStore()

// ✅ CORRECTO - Mantiene reactividad
const { count, doubleCount } = storeToRefs(counterStore)
const { increment, decrement } = counterStore

// ❌ INCORRECTO - Pierde reactividad
// const { count, doubleCount } = counterStore
&amp;lt;/script&amp;gt;
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Store de Usuario - Ejemplo Real</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>stores/user.js</h3><pre class="code" data-v-75747352><code data-v-75747352>
import { defineStore } from &#39;pinia&#39;
import { ref, computed } from &#39;vue&#39;

export const useUserStore = defineStore(&#39;user&#39;, () =&gt; {
  const user = ref(null)
  const isLoading = ref(false)

  const isLoggedIn = computed(() =&gt; user.value !== null)
  const userName = computed(() =&gt; user.value?.name || &#39;Invitado&#39;)

  async function login(credentials) {
    isLoading.value = true
    try {
      // Simular API call
      await new Promise(resolve =&gt; setTimeout(resolve, 1000))
      user.value = {
        id: 1,
        name: &#39;Juan Pérez&#39;,
        email: credentials.email
      }
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    user.value = null
  }

  return {
    user,
    isLoading,
    isLoggedIn,
    userName,
    login,
    logout
  }
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Múltiples Stores</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Comunicación entre Stores</h3><pre class="code" data-v-75747352><code data-v-75747352>
import { defineStore } from &#39;pinia&#39;
import { useUserStore } from &#39;./user&#39;

export const useCartStore = defineStore(&#39;cart&#39;, () =&gt; {
  const userStore = useUserStore()
  const items = ref([])

  function addItem(product) {
    if (!userStore.isLoggedIn) {
      throw new Error(&#39;Debe iniciar sesión&#39;)
    }
    items.value.push(product)
  }

  return {
    items,
    addItem
  }
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Persistencia de Estado</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Con pinia-plugin-persistedstate</h3><pre class="code" data-v-75747352><code data-v-75747352>
npm install pinia-plugin-persistedstate

// main.js
import piniaPluginPersistedstate from &#39;pinia-plugin-persistedstate&#39;

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// En el store
export const useUserStore = defineStore(&#39;user&#39;, {
  state: () =&gt; ({ user: null }),
  
  persist: true,
  
  // o con configuración
  persist: {
    key: &#39;user-storage&#39;,
    paths: [&#39;user&#39;]
  }
})
        </code></pre></div><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Plugin Personalizado</h3><pre class="code" data-v-75747352><code data-v-75747352>
const persistencePlugin = ({ store }) =&gt; {
  // Cargar del localStorage
  const stored = localStorage.getItem(\`pinia-\${store.$id}\`)
  if (stored) {
    store.$patch(JSON.parse(stored))
  }

  // Guardar cambios
  store.$subscribe((mutation, state) =&gt; {
    localStorage.setItem(\`pinia-\${store.$id}\`, JSON.stringify(state))
  })
}

pinia.use(persistencePlugin)
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Actions Asíncronas</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Ejemplo con Async/Await</h3><pre class="code" data-v-75747352><code data-v-75747352>
export const useProductsStore = defineStore(&#39;products&#39;, () =&gt; {
  const products = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  async function fetchProducts() {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(&#39;/api/products&#39;)
      products.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return {
    products,
    isLoading,
    error,
    fetchProducts
  }
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Getters Computados</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Getters con Parámetros</h3><pre class="code" data-v-75747352><code data-v-75747352>
export const useProductsStore = defineStore(&#39;products&#39;, {
  state: () =&gt; ({
    products: [],
    filter: &#39;&#39;
  }),

  getters: {
    // Getter sin parámetros
    availableProducts: (state) =&gt; 
      state.products.filter(p =&gt; p.stock &gt; 0),

    // Getter con parámetros (retornando función)
    productsByCategory: (state) =&gt; {
      return (category) =&gt; 
        state.products.filter(p =&gt; p.category === category)
    },

    // Getter que usa otro getter
    availableProductsCount() {
      return this.availableProducts.length
    }
  }
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Soporte para TypeScript</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Store Tipado</h3><pre class="code" data-v-75747352><code data-v-75747352>
interface User {
  id: number
  name: string
  email: string
}

interface UserState {
  user: User | null
  isLoading: boolean
}

export const useUserStore = defineStore(&#39;user&#39;, {
  state: (): UserState =&gt; ({
    user: null,
    isLoading: false
  }),

  getters: {
    isLoggedIn: (state): boolean =&gt; state.user !== null,
    userName: (state): string =&gt; state.user?.name || &#39;Invitado&#39;
  },

  actions: {
    async login(email: string, password: string): Promise&amp;lt;void&amp;gt; {
      this.isLoading = true
      // Lógica de login...
    }
  }
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Reset y Subscribe</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Métodos Útiles</h3><pre class="code" data-v-75747352><code data-v-75747352>
const userStore = useUserStore()

// Resetear al estado inicial
userStore.$reset()

// Suscribirse a cambios
userStore.$subscribe((mutation, state) =&gt; {
  console.log(&#39;Store cambió:&#39;, mutation.type, state)
})

// Suscribirse a actions
userStore.$onAction(({ name, store, args, after, onError }) =&gt; {
  console.log(\`Action \${name} ejecutada\`)

  after((result) =&gt; {
    console.log(\`Action \${name} completada\`)
  })

  onError((error) =&gt; {
    console.error(\`Action \${name} falló:\`, error)
  })
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Testing de Stores</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Tests con Vitest</h3><pre class="code" data-v-75747352><code data-v-75747352>
import { setActivePinia, createPinia } from &#39;pinia&#39;
import { useCounterStore } from &#39;./counter&#39;

describe(&#39;Counter Store&#39;, () =&gt; {
  beforeEach(() =&gt; {
    setActivePinia(createPinia())
  })

  it(&#39;increments count&#39;, () =&gt; {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it(&#39;calculates double count&#39;, () =&gt; {
    const counter = useCounterStore()
    counter.count = 5
    
    expect(counter.doubleCount).toBe(10)
  })
})
        </code></pre></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Mejores Prácticas</h2><ul data-v-75747352><li class="p" data-v-75747352><strong data-v-75747352>Nombres semánticos:</strong> Usa nombres descriptivos para stores</li><li class="p" data-v-75747352><strong data-v-75747352>Stores modulares:</strong> Divide la lógica en stores específicos</li><li class="p" data-v-75747352><strong data-v-75747352>Composition API:</strong> Prefiere setup stores para TypeScript</li><li class="p" data-v-75747352><strong data-v-75747352>storeToRefs:</strong> Siempre úsalo para destructuring</li><li class="p" data-v-75747352><strong data-v-75747352>Actions async:</strong> Maneja estados de loading y error</li><li class="p" data-v-75747352><strong data-v-75747352>Nomenclatura:</strong> Usa &quot;use&quot; prefix para stores (useUserStore)</li></ul><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Estructura Recomendada</h3><pre class="code" data-v-75747352><code data-v-75747352>
src/
├── stores/
│   ├── index.js          // Exportación centralizada
│   ├── auth.js          // Autenticación
│   ├── user.js          // Datos de usuario
│   ├── cart.js          // Carrito de compras
│   ├── products.js      // Productos
│   └── ui.js           // Estado de UI
└── components/
    └── ...
        </code></pre></div></section>`,1)])]))}},Um=we(Bm,[["__scopeId","data-v-75747352"]]),zm={class:"father"},Fm={__name:"piniaPlugin",setup(e){return(t,a)=>(Y(),ee("div",zm,[...a[0]||(a[0]=[X(`<section class="content" data-v-6be88151><h1 class="title" data-v-6be88151>Pinia Plugin Persist</h1><p class="p" data-v-6be88151><strong data-v-6be88151>Pinia Plugin Persist</strong> es un plugin oficial que permite persistir el estado de tus stores en localStorage, sessionStorage u otros almacenamientos, manteniendo los datos entre sesiones del navegador. </p><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>¿Por qué usar persistencia?</h2><p class="p" data-v-6be88151> La persistencia de estado es crucial para mantener la experiencia del usuario. Permite que la aplicación recuerde preferencias, carritos de compra, datos de formularios y más, incluso después de recargar la página. </p><div class="example" data-v-6be88151><h3 class="example-title" data-v-6be88151>Casos de uso comunes</h3><ul data-v-6be88151><li class="p" data-v-6be88151><strong data-v-6be88151>Preferencias de usuario:</strong> Tema, idioma, configuraciones</li><li class="p" data-v-6be88151><strong data-v-6be88151>Carritos de compra:</strong> Items seleccionados por el usuario</li><li class="p" data-v-6be88151><strong data-v-6be88151>Datos de autenticación:</strong> Tokens e información de sesión</li><li class="p" data-v-6be88151><strong data-v-6be88151>Formularios:</strong> Datos parcialmente completados</li></ul></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Instalación</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Instalación del plugin</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
npm install pinia-plugin-persistedstate

// o usando yarn
yarn add pinia-plugin-persistedstate

// o usando pnpm
pnpm add pinia-plugin-persistedstate
        </code></pre></div><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Configuración en main.js</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
import { createApp } from &#39;vue&#39;
import { createPinia } from &#39;pinia&#39;
import piniaPluginPersistedstate from &#39;pinia-plugin-persistedstate&#39;
import App from &#39;./App.vue&#39;

const pinia = createPinia()

// Usar el plugin
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.mount(&#39;#app&#39;)
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Uso Básico</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Persistencia Simple</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
import { defineStore } from &#39;pinia&#39;

export const useCounterStore = defineStore(&#39;counter&#39;, {
  state: () =&gt; ({
    count: 0,
    name: &#39;Mi Contador&#39;
  }),

  // Persistencia simple - todo el estado
  persist: true
})
        </code></pre></div><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Persistencia con Configuración</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
export const useUserStore = defineStore(&#39;user&#39;, {
  state: () =&gt; ({
    user: null,
    preferences: {
      theme: &#39;light&#39;,
      language: &#39;es&#39;
    },
    temporaryData: null
  }),

  persist: {
    key: &#39;user-storage&#39;,
    storage: localStorage,
    paths: [&#39;user&#39;, &#39;preferences.theme&#39;]
  }
})
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Opciones de Configuración</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Todas las opciones disponibles</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
persist: {
  // Clave personalizada en el storage
  key: &#39;custom-key&#39;,
  
  // Tipo de almacenamiento
  storage: localStorage, // o sessionStorage
  
  // Rutas específicas a persistir
  paths: [&#39;user&#39;, &#39;preferences.theme&#39;],
  
  // Hook antes de restaurar
  beforeRestore: (context) =&gt; {
    console.log(&#39;Antes de restaurar:&#39;, context)
  },
  
  // Hook después de restaurar
  afterRestore: (context) =&gt; {
    console.log(&#39;Después de restaurar:&#39;, context)
  }
}
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Persistencia Selectiva</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Persistir solo ciertas propiedades</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
export const useAuthStore = defineStore(&#39;auth&#39;, {
  state: () =&gt; ({
    user: null,
    token: null,
    isLoading: false,    // No persistir
    error: null         // No persistir
  }),

  persist: {
    // Solo persistir usuario y token
    paths: [&#39;user&#39;, &#39;token&#39;]
  }
})
        </code></pre></div><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Persistir propiedades anidadas</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
export const useAppStore = defineStore(&#39;app&#39;, {
  state: () =&gt; ({
    ui: {
      sidebar: {
        collapsed: false,
        width: 250
      },
      theme: &#39;dark&#39;
    },
    userData: {
      profile: {
        name: &#39;&#39;,
        email: &#39;&#39;
      }
    }
  }),

  persist: {
    paths: [
      &#39;ui.sidebar.collapsed&#39;,
      &#39;ui.theme&#39;,
      &#39;userData.profile&#39;
    ]
  }
})
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Diferentes Tipos de Almacenamiento</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Usando sessionStorage</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
export const useSessionStore = defineStore(&#39;session&#39;, {
  state: () =&gt; ({
    cart: [],
    recentSearches: [],
    currentFormData: null
  }),

  persist: {
    // sessionStorage se limpia al cerrar la pestaña
    storage: sessionStorage,
    paths: [&#39;cart&#39;, &#39;recentSearches&#39;]
  }
})
        </code></pre></div><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Almacenamiento personalizado</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
// Almacenamiento personalizado
const customStorage = {
  getItem: (key) =&gt; {
    return Promise.resolve(localStorage.getItem(key))
  },
  setItem: (key, value) =&gt; {
    return Promise.resolve(localStorage.setItem(key, value))
  }
}

export const useCustomStore = defineStore(&#39;custom&#39;, {
  state: () =&gt; ({ data: null }),
  
  persist: {
    storage: customStorage
  }
})
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Hooks y Eventos</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Hooks de ciclo de vida</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
export const useSecureStore = defineStore(&#39;secure&#39;, {
  state: () =&gt; ({
    userData: null,
    lastUpdated: null
  }),

  persist: {
    paths: [&#39;userData&#39;],
    
    beforeRestore: (ctx) =&gt; {
      console.log(&#39;Estado actual:&#39;, ctx.store.$state)
    },
    
    afterRestore: (ctx) =&gt; {
      console.log(&#39;Estado restaurado:&#39;, ctx.store.$state)
      // Validaciones o transformaciones aquí
    }
  }
})
        </code></pre></div><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Ejemplo con validación</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
export const useAuthStore = defineStore(&#39;auth&#39;, {
  state: () =&gt; ({
    user: null,
    token: null,
    expiresAt: null
  }),

  persist: {
    paths: [&#39;user&#39;, &#39;token&#39;, &#39;expiresAt&#39;],
    
    afterRestore: (ctx) =&gt; {
      // Validar que el token no haya expirado
      const { store } = ctx
      if (store.expiresAt &amp;&amp; new Date(store.expiresAt) &lt; new Date()) {
        console.log(&#39;Token expirado, limpiando estado&#39;)
        store.$patch({
          user: null,
          token: null,
          expiresAt: null
        })
      }
    }
  }
})
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Ejemplo Completo - Store de Usuario</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>stores/user.js</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
import { defineStore } from &#39;pinia&#39;

export const useUserStore = defineStore(&#39;user&#39;, {
  state: () =&gt; ({
    // Información de usuario
    profile: {
      id: null,
      name: &#39;&#39;,
      email: &#39;&#39;,
      avatar: &#39;&#39;
    },
    
    // Preferencias
    preferences: {
      theme: &#39;light&#39;,
      language: &#39;es&#39;,
      notifications: true
    },
    
    // Datos de sesión
    session: {
      lastLogin: null,
      loginCount: 0
    },
    
    // Estado temporal (no persistir)
    isLoading: false,
    error: null
  }),

  getters: {
    isLoggedIn: (state) =&gt; state.profile.id !== null
  },

  actions: {
    async login(credentials) {
      this.isLoading = true
      try {
        // Simular login
        this.profile = {
          id: 1,
          name: &#39;Juan Pérez&#39;,
          email: credentials.email
        }
        this.session.lastLogin = new Date().toISOString()
        this.session.loginCount += 1
      } finally {
        this.isLoading = false
      }
    }
  },

  // Persistir todo excepto estado temporal
  persist: {
    key: &#39;user-data&#39;,
    paths: [&#39;profile&#39;, &#39;preferences&#39;, &#39;session&#39;]
  }
})
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Múltiples Stores</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Comunicación entre Stores</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
import { defineStore } from &#39;pinia&#39;
import { useUserStore } from &#39;./user&#39;

export const useCartStore = defineStore(&#39;cart&#39;, () =&gt; {
  const userStore = useUserStore()
  const items = ref([])

  function addItem(product) {
    if (!userStore.isLoggedIn) {
      throw new Error(&#39;Debe iniciar sesión&#39;)
    }
    items.value.push(product)
  }

  return {
    items,
    addItem
  }
})
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Migración y Versionado</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Manejo de versiones</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
export const useVersionedStore = defineStore(&#39;versioned&#39;, {
  state: () =&gt; ({
    data: null,
    // Versión del esquema
    _version: 2
  }),

  persist: {
    key: &#39;myapp-store-v2&#39;,
    
    beforeRestore: (ctx) =&gt; {
      const stored = localStorage.getItem(&#39;myapp-store-v2&#39;)
      if (stored) {
        const parsed = JSON.parse(stored)
        // Migrar de v1 a v2
        if (parsed._version === 1) {
          parsed.data = migrateV1ToV2(parsed.data)
          parsed._version = 2
        }
      }
    }
  }
})

function migrateV1ToV2(v1Data) {
  // Transformar datos de v1 a v2
  return {
    ...v1Data,
    newField: &#39;default-value&#39;
  }
}
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Plugin Personalizado</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Creando tu propio plugin</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
// plugins/custom-persistence.js
export const customPersistencePlugin = ({ store, options }) =&gt; {
  if (!options.persist) return
  
  const key = \`persist-\${store.$id}\`
  
  // Cargar estado guardado
  const stored = localStorage.getItem(key)
  if (stored) {
    try {
      store.$patch(JSON.parse(stored))
    } catch (error) {
      console.warn(&#39;Error restoring state:&#39;, error)
    }
  }
  
  // Suscribirse a cambios
  store.$subscribe((mutation, state) =&gt; {
    localStorage.setItem(key, JSON.stringify(state))
  })
}

// En main.js
import { customPersistencePlugin } from &#39;./plugins/custom-persistence&#39;
pinia.use(customPersistencePlugin)
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Best Practices</h2><ul data-v-6be88151><li class="p" data-v-6be88151><strong data-v-6be88151>No persistir datos sensibles:</strong> Tokens sí, contraseñas no</li><li class="p" data-v-6be88151><strong data-v-6be88151>Usar paths selectivos:</strong> Solo persistir lo necesario</li><li class="p" data-v-6be88151><strong data-v-6be88151>Considerar el tamaño:</strong> localStorage tiene límite de ~5MB</li><li class="p" data-v-6be88151><strong data-v-6be88151>Manejar versiones:</strong> Para cambios en la estructura del estado</li><li class="p" data-v-6be88151><strong data-v-6be88151>Validar datos:</strong> Usar beforeRestore para validación</li><li class="p" data-v-6be88151><strong data-v-6be88151>Testing:</strong> Probar la persistencia en diferentes escenarios</li></ul><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Estructura Recomendada</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
src/
├── stores/
│   ├── index.js
│   ├── auth.js          // Persiste usuario/token
│   ├── user.js          // Persiste preferencias
│   ├── cart.js          // Persiste en sessionStorage
│   └── ui.js            // No persiste
├── plugins/
│   └── persistence.js   // Configuración global
└── main.js
        </code></pre></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Solución de Problemas</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Estado no se persiste</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
// Verificar que el plugin esté instalado
pinia.use(piniaPluginPersistedstate)

// Verificar la configuración del store
persist: true  // o con configuración

// Verificar paths
persist: {
  paths: [&#39;data&#39;] // Rutas correctas
}
        </code></pre></div><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Datos corruptos</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
persist: {
  beforeRestore: (ctx) =&gt; {
    const stored = localStorage.getItem(\`pinia-\${ctx.store.$id}\`)
    if (stored) {
      try {
        JSON.parse(stored) // Validar JSON
      } catch {
        // Limpiar si está corrupto
        localStorage.removeItem(\`pinia-\${ctx.store.$id}\`)
      }
    }
  }
}
        </code></pre></div></section>`,1)])]))}},Hm=we(Fm,[["__scopeId","data-v-6be88151"]]),Qm=[{path:"/",component:ju},{path:"/whatIs",component:Lu},{path:"/requirements",component:Nu},{path:"/createProject",component:zu},{path:"/interpolation",component:Ju},{path:"/directivesVue",component:Up},{path:"/optionsApi",component:tf},{path:"/compositionApi",component:_f},{path:"/cicleOfLife",component:Of},{path:"/importComponents",component:av},{path:"/props",component:_v},{path:"/templateQuasar",component:mm},{path:"/templateQuasarInstall",component:bm},{path:"/vueRouter",component:Dm},{path:"/pinia",component:Um},{path:"/piniaplugin",component:Hm}],Wm=xu({history:Jd(),routes:Qm}),Bt=U(!1);let ps;function Km(e,t){const a=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:a[5]||a[3]||a[1]||"",version:a[4]||a[2]||"0",platform:t[0]||""}}function Gm(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const Qi="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Jm(e){const t=e.toLowerCase(),a=Gm(t),n=Km(t,a),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};n.browser&&(s[n.browser]=!0,s.version=n.version,s.versionNumber=parseInt(n.version,10)),n.platform&&(s[n.platform]=!0);const o=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(o===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,n.browser="edge"):s.crios?(s.chrome=!0,n.browser="chrome"):s.fxios&&(s.firefox=!0,n.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(n.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&o!==!0)&&(s.webkit=!0),s.opr&&(n.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(n.browser="blackberry",s.blackberry=!0):s.playbook?(n.browser="playbook",s.playbook=!0):s.android?(n.browser="android",s.android=!0):s.kindle?(n.browser="kindle",s.kindle=!0):s.silk&&(n.browser="silk",s.silk=!0)),s.name=n.browser,s.platform=n.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Bt.value===!0&&(ps={is:{...s}}),Qi===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const r=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:r,[r]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Wo=navigator.userAgent||navigator.vendor||window.opera,Ym={has:{touch:!1,webStorage:!1},within:{iframe:!1}},it={userAgent:Wo,is:Jm(Wo),has:{touch:Qi},within:{iframe:window.self!==window.top}},fs={install(e){const{$q:t}=e;Bt.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,it),Bt.value=!1}),t.platform=yt(this)):t.platform=this}};{let e;Ms(it.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(fs,it),Bt.value===!0&&(Object.assign(fs,ps,Ym),ps=null)}function Xm(e,t=250,a){let n=null;function s(){const o=arguments,r=()=>{n=null,e.apply(this,o)};n!==null&&clearTimeout(n),n=setTimeout(r,t)}return s.cancel=()=>{n!==null&&clearTimeout(n)},s}const Wn=["sm","md","lg","xl"],{passive:Ko}=Ua,Zm=An({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Ia,setDebounce:Ia,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:a}=window,n=a||window,s=document.scrollingElement||document.documentElement,o=a===void 0||it.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[a.width*a.scale+window.innerWidth-s.clientWidth,a.height*a.scale+window.innerHeight-s.clientHeight],r=e.config.screen?.bodyClasses===!0;this.__update=f=>{const[u,v]=o();if(v!==this.height&&(this.height=v),u!==this.width)this.width=u;else if(f!==!0)return;let h=this.sizes;this.gt.xs=u>=h.sm,this.gt.sm=u>=h.md,this.gt.md=u>=h.lg,this.gt.lg=u>=h.xl,this.lt.sm=u<h.sm,this.lt.md=u<h.md,this.lt.lg=u<h.lg,this.lt.xl=u<h.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,h=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",h!==this.name&&(r===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${h}`)),this.name=h)};let i,l={},p=16;this.setSizes=f=>{Wn.forEach(u=>{f[u]!==void 0&&(l[u]=f[u])})},this.setDebounce=f=>{p=f};const d=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Wn.forEach(u=>{this.sizes[u]=parseInt(f.getPropertyValue(`--q-size-${u}`),10)}),this.setSizes=u=>{Wn.forEach(v=>{u[v]&&(this.sizes[v]=u[v])}),this.__update(!0)},this.setDebounce=u=>{i!==void 0&&n.removeEventListener("resize",i,Ko),i=u>0?Xm(this.__update,u):this.__update,n.addEventListener("resize",i,Ko)},this.setDebounce(p),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),r===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Bt.value===!0?t.push(d):d()}}),Pe=An({isActive:!1,mode:!1},{__media:void 0,set(e){Pe.mode=e,e==="auto"?(Pe.__media===void 0&&(Pe.__media=window.matchMedia("(prefers-color-scheme: dark)"),Pe.__updateMedia=()=>{Pe.set("auto")},Pe.__media.addListener(Pe.__updateMedia)),e=Pe.__media.matches):Pe.__media!==void 0&&(Pe.__media.removeListener(Pe.__updateMedia),Pe.__media=void 0),Pe.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){Pe.set(Pe.isActive===!1)},install({$q:e,ssrContext:t}){const a=e.config.dark;e.dark=this,this.__installed!==!0&&this.set(a!==void 0?a:!1)}});function eg(e,t,a=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(a instanceof Element))throw new TypeError("Expected a DOM element");a.style.setProperty(`--q-${e}`,t)}function Wi(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function tg({is:e,has:t,within:a},n){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const o=Wi(e);o!==void 0&&s.push("platform-"+o)}if(e.nativeMobile===!0){const o=e.nativeMobileWrapper;s.push(o),s.push("native-mobile"),e.ios===!0&&(n[o]===void 0||n[o].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return a.iframe===!0&&s.push("within-iframe"),s}function ag(){const{is:e}=it,t=document.body.className,a=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)a.delete("mobile"),a.delete("platform-ios"),a.delete("platform-android"),a.add("desktop");else if(e.mobile===!0){a.delete("desktop"),a.add("mobile"),a.delete("platform-ios"),a.delete("platform-android");const s=Wi(e);s!==void 0&&a.add(`platform-${s}`)}}it.has.touch===!0&&(a.delete("no-touch"),a.add("touch")),it.within.iframe===!0&&a.add("within-iframe");const n=Array.from(a).join(" ");t!==n&&(document.body.className=n)}function ng(e){for(const t in e)eg(t,e[t])}const sg={install(e){if(this.__installed!==!0){if(Bt.value===!0)ag();else{const{$q:t}=e;t.config.brand!==void 0&&ng(t.config.brand);const a=tg(it,t.config);document.body.classList.add.apply(document.body.classList,a)}it.is.ios===!0&&document.body.addEventListener("touchstart",Ia),window.addEventListener("keydown",Nv,!0)}}},Ki=()=>!0;function og(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function rg(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function ig(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return Ki;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(og).map(rg)),()=>t.includes(window.location.hash)}const cg={__history:[],add:Ia,remove:Ia,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:a}=it.is;if(t!==!0&&a!==!0)return;const n=e.config[t===!0?"cordova":"capacitor"];if(n?.backButton===!1||a===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=r=>{r.condition===void 0&&(r.condition=Ki),this.__history.push(r)},this.remove=r=>{const i=this.__history.indexOf(r);i>=0&&this.__history.splice(i,1)};const s=ig(Object.assign({backButtonExit:!0},n)),o=()=>{if(this.__history.length){const r=this.__history[this.__history.length-1];r.condition()===!0&&(this.__history.pop(),r.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",o,!1)}):window.Capacitor.Plugins.App.addListener("backButton",o)}},Go={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,a)=>e+"-"+t+" of "+a,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Jo(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,a)=>a===0?t.toLowerCase():a>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const qt=An({__qLang:{}},{getLocale:Jo,set(e=Go,t){const a={...e,rtl:e.rtl===!0,getLocale:Jo};{if(a.set=qt.set,qt.__langConfig===void 0||qt.__langConfig.noHtmlAttrs!==!0){const n=document.documentElement;n.setAttribute("dir",a.rtl===!0?"rtl":"ltr"),n.setAttribute("lang",a.isoName)}Object.assign(qt.__qLang,a)}},install({$q:e,lang:t,ssrContext:a}){e.lang=qt.__qLang,qt.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(n){return Reflect.ownKeys(n).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||Go))}}),lg={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},un=An({iconMapFn:null,__qIconSet:{}},{set(e,t){const a={...e};a.set=un.set,Object.assign(un.__qIconSet,a)},install({$q:e,iconSet:t,ssrContext:a}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Ms(e,"iconMapFn",()=>this.iconMapFn,n=>{this.iconMapFn=n}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(n){return Reflect.ownKeys(n).filter(s=>s!=="set")}}),this.set(t||lg))}}),dg="_q_",Yo={};let Gi=!1;function ug(){Gi=!0}function Xo(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const Zo=[fs,sg,Pe,Zm,cg,qt,un];function er(e,t){t.forEach(a=>{a.install(e),a.__installed=!0})}function pg(e,t,a){e.config.globalProperties.$q=a.$q,e.provide(dg,a.$q),er(a,Zo),t.components!==void 0&&Object.values(t.components).forEach(n=>{Xo(n)===!0&&n.name!==void 0&&e.component(n.name,n)}),t.directives!==void 0&&Object.values(t.directives).forEach(n=>{Xo(n)===!0&&n.name!==void 0&&e.directive(n.name,n)}),t.plugins!==void 0&&er(a,Object.values(t.plugins).filter(n=>typeof n.install=="function"&&Zo.includes(n)===!1)),Bt.value===!0&&(a.$q.onSSRHydrated=()=>{a.onSSRHydrated.forEach(n=>{n()}),a.$q.onSSRHydrated=()=>{}})}const fg=function(e,t={}){const a={version:"2.18.2"};Gi===!1?(t.config!==void 0&&Object.assign(Yo,t.config),a.config={...Yo},ug()):a.config=t.config||{},pg(e,t,{parentApp:e,$q:a,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},vg={name:"Quasar",version:"2.18.2",install:fg,lang:qt,iconSet:un};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const mg=Symbol();var tr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(tr||(tr={}));function gg(){const e=lc(!0),t=e.run(()=>U({}));let a=[],n=[];const s=yn({install(o){s._a=o,o.provide(mg,s),o.config.globalProperties.$pinia=s,n.forEach(r=>a.push(r)),n=[]},use(o){return this._a?a.push(o):n.push(o),this},_p:a,_a:null,_e:e,_s:new Map,state:t});return s}const Rn=pd(bd),hg=gg();Rn.use(vg,{plugins:{}});Rn.use(Wm);Rn.use(hg);Rn.mount("#app");
