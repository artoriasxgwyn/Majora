(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vs(e){const t=Object.create(null);for(const a of e.split(","))t[a]=1;return a=>a in t}const fe={},Xt=[],st=()=>{},ar=()=>!1,un=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ms=e=>e.startsWith("onUpdate:"),_e=Object.assign,gs=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},Gi=Object.prototype.hasOwnProperty,le=(e,t)=>Gi.call(e,t),z=Array.isArray,Zt=e=>La(e)==="[object Map]",pn=e=>La(e)==="[object Set]",Vs=e=>La(e)==="[object Date]",G=e=>typeof e=="function",xe=e=>typeof e=="string",ct=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",nr=e=>(me(e)||G(e))&&G(e.then)&&G(e.catch),sr=Object.prototype.toString,La=e=>sr.call(e),Ji=e=>La(e).slice(8,-1),or=e=>La(e)==="[object Object]",hs=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ga=vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fn=e=>{const t=Object.create(null);return(a=>t[a]||(t[a]=e(a)))},Yi=/-(\w)/g,We=fn(e=>e.replace(Yi,(t,a)=>a?a.toUpperCase():"")),Xi=/\B([A-Z])/g,jt=fn(e=>e.replace(Xi,"-$1").toLowerCase()),vn=fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=fn(e=>e?`on${vn(e)}`:""),Pt=(e,t)=>!Object.is(e,t),Ka=(e,...t)=>{for(let a=0;a<e.length;a++)e[a](...t)},rr=(e,t,a,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:a})},Kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Zi=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let Ds;const mn=()=>Ds||(Ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(e){if(z(e)){const t={};for(let a=0;a<e.length;a++){const n=e[a],s=xe(n)?nc(n):gn(n);if(s)for(const o in s)t[o]=s[o]}return t}else if(xe(e)||me(e))return e}const ec=/;(?![^(]*\))/g,tc=/:([^]+)/,ac=/\/\*[^]*?\*\//g;function nc(e){const t={};return e.replace(ac,"").split(ec).forEach(a=>{if(a){const n=a.split(tc);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ot(e){let t="";if(xe(e))t=e;else if(z(e))for(let a=0;a<e.length;a++){const n=ot(e[a]);n&&(t+=n+" ")}else if(me(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}const sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oc=vs(sc);function ir(e){return!!e||e===""}function rc(e,t){if(e.length!==t.length)return!1;let a=!0;for(let n=0;a&&n<e.length;n++)a=hn(e[n],t[n]);return a}function hn(e,t){if(e===t)return!0;let a=Vs(e),n=Vs(t);if(a||n)return a&&n?e.getTime()===t.getTime():!1;if(a=ct(e),n=ct(t),a||n)return e===t;if(a=z(e),n=z(t),a||n)return a&&n?rc(e,t):!1;if(a=me(e),n=me(t),a||n){if(!a||!n)return!1;const s=Object.keys(e).length,o=Object.keys(t).length;if(s!==o)return!1;for(const r in e){const i=e.hasOwnProperty(r),c=t.hasOwnProperty(r);if(i&&!c||!i&&c||!hn(e[r],t[r]))return!1}}return String(e)===String(t)}function cr(e,t){return e.findIndex(a=>hn(a,t))}const lr=e=>!!(e&&e.__v_isRef===!0),M=e=>xe(e)?e:e==null?"":z(e)||me(e)&&(e.toString===sr||!G(e.toString))?lr(e)?M(e.value):JSON.stringify(e,dr,2):String(e),dr=(e,t)=>lr(t)?dr(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[n,s],o)=>(a[Tn(n,o)+" =>"]=s,a),{})}:pn(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>Tn(a))}:ct(t)?Tn(t):me(t)&&!z(t)&&!or(t)?String(t):t,Tn=(e,t="")=>{var a;return ct(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class ur{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].pause();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].resume();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].resume()}}run(t){if(this._active){const a=Oe;try{return Oe=this,t()}finally{Oe=a}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){this._on>0&&--this._on===0&&(Oe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let a,n;for(a=0,n=this.effects.length;a<n;a++)this.effects[a].stop();for(this.effects.length=0,a=0,n=this.cleanups.length;a<n;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,n=this.scopes.length;a<n;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ic(e){return new ur(e)}function cc(){return Oe}let ye;const Mn=new WeakSet;class pr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mn.has(this)&&(Mn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ns(this),mr(this);const t=ye,a=Ke;ye=this,Ke=!0;try{return this.fn()}finally{gr(this),ye=t,Ke=a,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Cs(t);this.deps=this.depsTail=void 0,Ns(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gn(this)&&this.run()}get dirty(){return Gn(this)}}let fr=0,ha,ba;function vr(e,t=!1){if(e.flags|=8,t){e.next=ba,ba=e;return}e.next=ha,ha=e}function bs(){fr++}function ys(){if(--fr>0)return;if(ba){let t=ba;for(ba=void 0;t;){const a=t.next;t.next=void 0,t.flags&=-9,t=a}}let e;for(;ha;){let t=ha;for(ha=void 0;t;){const a=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=a}}if(e)throw e}function mr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function gr(e){let t,a=e.depsTail,n=a;for(;n;){const s=n.prevDep;n.version===-1?(n===a&&(a=s),Cs(n),lc(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=a}function Gn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qa)||(e.globalVersion=qa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gn(e))))return;e.flags|=2;const t=e.dep,a=ye,n=Ke;ye=e,Ke=!0;try{mr(e);const s=e.fn(e._value);(t.version===0||Pt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ye=a,Ke=n,gr(e),e.flags&=-3}}function Cs(e,t=!1){const{dep:a,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),a.subs===e&&(a.subs=n,!n&&a.computed)){a.computed.flags&=-5;for(let o=a.computed.deps;o;o=o.nextDep)Cs(o,!0)}!t&&!--a.sc&&a.map&&a.map.delete(a.key)}function lc(e){const{prevDep:t,nextDep:a}=e;t&&(t.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=t,e.nextDep=void 0)}let Ke=!0;const br=[];function ht(){br.push(Ke),Ke=!1}function bt(){const e=br.pop();Ke=e===void 0?!0:e}function Ns(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const a=ye;ye=void 0;try{t()}finally{ye=a}}}let qa=0;class dc{constructor(t,a){this.sub=t,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!Ke||ye===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==ye)a=this.activeLink=new dc(ye,this),ye.deps?(a.prevDep=ye.depsTail,ye.depsTail.nextDep=a,ye.depsTail=a):ye.deps=ye.depsTail=a,yr(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const n=a.nextDep;n.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=n),a.prevDep=ye.depsTail,a.nextDep=void 0,ye.depsTail.nextDep=a,ye.depsTail=a,ye.deps===a&&(ye.deps=n)}return a}trigger(t){this.version++,qa++,this.notify(t)}notify(t){bs();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{ys()}}}function yr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)yr(n)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const Jn=new WeakMap,Dt=Symbol(""),Yn=Symbol(""),Pa=Symbol("");function Pe(e,t,a){if(Ke&&ye){let n=Jn.get(e);n||Jn.set(e,n=new Map);let s=n.get(a);s||(n.set(a,s=new xs),s.map=n,s.key=a),s.track()}}function mt(e,t,a,n,s,o){const r=Jn.get(e);if(!r){qa++;return}const i=c=>{c&&c.trigger()};if(bs(),t==="clear")r.forEach(i);else{const c=z(e),u=c&&hs(a);if(c&&a==="length"){const d=Number(n);r.forEach((p,m)=>{(m==="length"||m===Pa||!ct(m)&&m>=d)&&i(p)})}else switch((a!==void 0||r.has(void 0))&&i(r.get(a)),u&&i(r.get(Pa)),t){case"add":c?u&&i(r.get("length")):(i(r.get(Dt)),Zt(e)&&i(r.get(Yn)));break;case"delete":c||(i(r.get(Dt)),Zt(e)&&i(r.get(Yn)));break;case"set":Zt(e)&&i(r.get(Dt));break}}ys()}function Ht(e){const t=re(e);return t===e?t:(Pe(t,"iterate",Pa),Qe(e)?t:t.map(ke))}function bn(e){return Pe(e=re(e),"iterate",Pa),e}const uc={__proto__:null,[Symbol.iterator](){return In(this,Symbol.iterator,ke)},concat(...e){return Ht(this).concat(...e.map(t=>z(t)?Ht(t):t))},entries(){return In(this,"entries",e=>(e[1]=ke(e[1]),e))},every(e,t){return dt(this,"every",e,t,void 0,arguments)},filter(e,t){return dt(this,"filter",e,t,a=>a.map(ke),arguments)},find(e,t){return dt(this,"find",e,t,ke,arguments)},findIndex(e,t){return dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return dt(this,"findLast",e,t,ke,arguments)},findLastIndex(e,t){return dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return $n(this,"includes",e)},indexOf(...e){return $n(this,"indexOf",e)},join(e){return Ht(this).join(e)},lastIndexOf(...e){return $n(this,"lastIndexOf",e)},map(e,t){return dt(this,"map",e,t,void 0,arguments)},pop(){return da(this,"pop")},push(...e){return da(this,"push",e)},reduce(e,...t){return Bs(this,"reduce",e,t)},reduceRight(e,...t){return Bs(this,"reduceRight",e,t)},shift(){return da(this,"shift")},some(e,t){return dt(this,"some",e,t,void 0,arguments)},splice(...e){return da(this,"splice",e)},toReversed(){return Ht(this).toReversed()},toSorted(e){return Ht(this).toSorted(e)},toSpliced(...e){return Ht(this).toSpliced(...e)},unshift(...e){return da(this,"unshift",e)},values(){return In(this,"values",ke)}};function In(e,t,a){const n=bn(e),s=n[t]();return n!==e&&!Qe(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=a(o.value)),o}),s}const pc=Array.prototype;function dt(e,t,a,n,s,o){const r=bn(e),i=r!==e&&!Qe(e),c=r[t];if(c!==pc[t]){const p=c.apply(e,o);return i?ke(p):p}let u=a;r!==e&&(i?u=function(p,m){return a.call(this,ke(p),m,e)}:a.length>2&&(u=function(p,m){return a.call(this,p,m,e)}));const d=c.call(r,u,n);return i&&s?s(d):d}function Bs(e,t,a,n){const s=bn(e);let o=a;return s!==e&&(Qe(e)?a.length>3&&(o=function(r,i,c){return a.call(this,r,i,c,e)}):o=function(r,i,c){return a.call(this,r,ke(i),c,e)}),s[t](o,...n)}function $n(e,t,a){const n=re(e);Pe(n,"iterate",Pa);const s=n[t](...a);return(s===-1||s===!1)&&ks(a[0])?(a[0]=re(a[0]),n[t](...a)):s}function da(e,t,a=[]){ht(),bs();const n=re(e)[t].apply(e,a);return ys(),bt(),n}const fc=vs("__proto__,__v_isRef,__isVue"),Cr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ct));function vc(e){ct(e)||(e=String(e));const t=re(this);return Pe(t,"has",e),t.hasOwnProperty(e)}class xr{constructor(t=!1,a=!1){this._isReadonly=t,this._isShallow=a}get(t,a,n){if(a==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return o;if(a==="__v_raw")return n===(s?o?kc:wr:o?kr:Sr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const r=z(t);if(!s){let c;if(r&&(c=uc[a]))return c;if(a==="hasOwnProperty")return vc}const i=Reflect.get(t,a,Re(t)?t:n);return(ct(a)?Cr.has(a):fc(a))||(s||Pe(t,"get",a),o)?i:Re(i)?r&&hs(a)?i:i.value:me(i)?s?Pr(i):Ut(i):i}}class _r extends xr{constructor(t=!1){super(!1,t)}set(t,a,n,s){let o=t[a];if(!this._isShallow){const c=At(o);if(!Qe(n)&&!At(n)&&(o=re(o),n=re(n)),!z(t)&&Re(o)&&!Re(n))return c||(o.value=n),!0}const r=z(t)&&hs(a)?Number(a)<t.length:le(t,a),i=Reflect.set(t,a,n,Re(t)?t:s);return t===re(s)&&(r?Pt(n,o)&&mt(t,"set",a,n):mt(t,"add",a,n)),i}deleteProperty(t,a){const n=le(t,a);t[a];const s=Reflect.deleteProperty(t,a);return s&&n&&mt(t,"delete",a,void 0),s}has(t,a){const n=Reflect.has(t,a);return(!ct(a)||!Cr.has(a))&&Pe(t,"has",a),n}ownKeys(t){return Pe(t,"iterate",z(t)?"length":Dt),Reflect.ownKeys(t)}}class mc extends xr{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const gc=new _r,hc=new mc,bc=new _r(!0);const Xn=e=>e,za=e=>Reflect.getPrototypeOf(e);function yc(e,t,a){return function(...n){const s=this.__v_raw,o=re(s),r=Zt(o),i=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,u=s[e](...n),d=a?Xn:t?Za:ke;return!t&&Pe(o,"iterate",c?Yn:Dt),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:i?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Fa(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Cc(e,t){const a={get(s){const o=this.__v_raw,r=re(o),i=re(s);e||(Pt(s,i)&&Pe(r,"get",s),Pe(r,"get",i));const{has:c}=za(r),u=t?Xn:e?Za:ke;if(c.call(r,s))return u(o.get(s));if(c.call(r,i))return u(o.get(i));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Pe(re(s),"iterate",Dt),s.size},has(s){const o=this.__v_raw,r=re(o),i=re(s);return e||(Pt(s,i)&&Pe(r,"has",s),Pe(r,"has",i)),s===i?o.has(s):o.has(s)||o.has(i)},forEach(s,o){const r=this,i=r.__v_raw,c=re(i),u=t?Xn:e?Za:ke;return!e&&Pe(c,"iterate",Dt),i.forEach((d,p)=>s.call(o,u(d),u(p),r))}};return _e(a,e?{add:Fa("add"),set:Fa("set"),delete:Fa("delete"),clear:Fa("clear")}:{add(s){!t&&!Qe(s)&&!At(s)&&(s=re(s));const o=re(this);return za(o).has.call(o,s)||(o.add(s),mt(o,"add",s,s)),this},set(s,o){!t&&!Qe(o)&&!At(o)&&(o=re(o));const r=re(this),{has:i,get:c}=za(r);let u=i.call(r,s);u||(s=re(s),u=i.call(r,s));const d=c.call(r,s);return r.set(s,o),u?Pt(o,d)&&mt(r,"set",s,o):mt(r,"add",s,o),this},delete(s){const o=re(this),{has:r,get:i}=za(o);let c=r.call(o,s);c||(s=re(s),c=r.call(o,s)),i&&i.call(o,s);const u=o.delete(s);return c&&mt(o,"delete",s,void 0),u},clear(){const s=re(this),o=s.size!==0,r=s.clear();return o&&mt(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{a[s]=yc(s,e,t)}),a}function _s(e,t){const a=Cc(e,t);return(n,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(le(a,s)&&s in n?a:n,s,o)}const xc={get:_s(!1,!1)},_c={get:_s(!1,!0)},Sc={get:_s(!0,!1)};const Sr=new WeakMap,kr=new WeakMap,wr=new WeakMap,kc=new WeakMap;function wc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qc(e){return e.__v_skip||!Object.isExtensible(e)?0:wc(Ji(e))}function Ut(e){return At(e)?e:Ss(e,!1,gc,xc,Sr)}function qr(e){return Ss(e,!1,bc,_c,kr)}function Pr(e){return Ss(e,!0,hc,Sc,wr)}function Ss(e,t,a,n,s){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=qc(e);if(o===0)return e;const r=s.get(e);if(r)return r;const i=new Proxy(e,o===2?n:a);return s.set(e,i),i}function ea(e){return At(e)?ea(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function Qe(e){return!!(e&&e.__v_isShallow)}function ks(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function yn(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&rr(e,"__v_skip",!0),e}const ke=e=>me(e)?Ut(e):e,Za=e=>me(e)?Pr(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function U(e){return Er(e,!1)}function Pc(e){return Er(e,!0)}function Er(e,t){return Re(e)?e:new Ec(e,t)}class Ec{constructor(t,a){this.dep=new xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?t:re(t),this._value=a?t:ke(t),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(t){const a=this._rawValue,n=this.__v_isShallow||Qe(t)||At(t);t=n?t:re(t),Pt(t,a)&&(this._rawValue=t,this._value=n?t:ke(t),this.dep.trigger())}}function ta(e){return Re(e)?e.value:e}const Ac={get:(e,t,a)=>t==="__v_raw"?e:ta(Reflect.get(e,t,a)),set:(e,t,a,n)=>{const s=e[t];return Re(s)&&!Re(a)?(s.value=a,!0):Reflect.set(e,t,a,n)}};function Ar(e){return ea(e)?e:new Proxy(e,Ac)}class Rc{constructor(t,a,n){this.fn=t,this.setter=a,this._value=void 0,this.dep=new xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return vr(this,!0),!0}get value(){const t=this.dep.track();return hr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jc(e,t,a=!1){let n,s;return G(e)?n=e:(n=e.get,s=e.set),new Rc(n,s,a)}const Ha={},en=new WeakMap;let Lt;function Tc(e,t=!1,a=Lt){if(a){let n=en.get(a);n||en.set(a,n=[]),n.push(e)}}function Mc(e,t,a=fe){const{immediate:n,deep:s,once:o,scheduler:r,augmentJob:i,call:c}=a,u=b=>s?b:Qe(b)||s===!1||s===0?gt(b,1):gt(b);let d,p,m,f,h=!1,S=!1;if(Re(e)?(p=()=>e.value,h=Qe(e)):ea(e)?(p=()=>u(e),h=!0):z(e)?(S=!0,h=e.some(b=>ea(b)||Qe(b)),p=()=>e.map(b=>{if(Re(b))return b.value;if(ea(b))return u(b);if(G(b))return c?c(b,2):b()})):G(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){ht();try{m()}finally{bt()}}const b=Lt;Lt=d;try{return c?c(e,3,[f]):e(f)}finally{Lt=b}}:p=st,t&&s){const b=p,q=s===!0?1/0:s;p=()=>gt(b(),q)}const P=cc(),j=()=>{d.stop(),P&&P.active&&gs(P.effects,d)};if(o&&t){const b=t;t=(...q)=>{b(...q),j()}}let T=S?new Array(e.length).fill(Ha):Ha;const A=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(t){const q=d.run();if(s||h||(S?q.some((K,J)=>Pt(K,T[J])):Pt(q,T))){m&&m();const K=Lt;Lt=d;try{const J=[q,T===Ha?void 0:S&&T[0]===Ha?[]:T,f];T=q,c?c(t,3,J):t(...J)}finally{Lt=K}}}else d.run()};return i&&i(A),d=new pr(p),d.scheduler=r?()=>r(A,!1):A,f=b=>Tc(b,!1,d),m=d.onStop=()=>{const b=en.get(d);if(b){if(c)c(b,4);else for(const q of b)q();en.delete(d)}},t?n?A(!0):T=d.run():r?r(A.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function gt(e,t=1/0,a){if(t<=0||!me(e)||e.__v_skip||(a=a||new Set,a.has(e)))return e;if(a.add(e),t--,Re(e))gt(e.value,t,a);else if(z(e))for(let n=0;n<e.length;n++)gt(e[n],t,a);else if(pn(e)||Zt(e))e.forEach(n=>{gt(n,t,a)});else if(or(e)){for(const n in e)gt(e[n],t,a);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&gt(e[n],t,a)}return e}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oa(e,t,a,n){try{return n?e(...n):e()}catch(s){Cn(s,t,a)}}function Ge(e,t,a,n){if(G(e)){const s=Oa(e,t,a,n);return s&&nr(s)&&s.catch(o=>{Cn(o,t,a)}),s}if(z(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Ge(e[o],t,a,n));return s}}function Cn(e,t,a,n=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||fe;if(t){let i=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const d=i.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,u)===!1)return}i=i.parent}if(o){ht(),Oa(o,null,10,[e,c,u]),bt();return}}Ic(e,a,s,n,r)}function Ic(e,t,a,n=!0,s=!1){if(s)throw e;console.error(e)}const Te=[];let at=-1;const aa=[];let St=null,Jt=0;const Rr=Promise.resolve();let tn=null;function jr(e){const t=tn||Rr;return e?t.then(this?e.bind(this):e):t}function $c(e){let t=at+1,a=Te.length;for(;t<a;){const n=t+a>>>1,s=Te[n],o=Ea(s);o<e||o===e&&s.flags&2?t=n+1:a=n}return t}function ws(e){if(!(e.flags&1)){const t=Ea(e),a=Te[Te.length-1];!a||!(e.flags&2)&&t>=Ea(a)?Te.push(e):Te.splice($c(t),0,e),e.flags|=1,Tr()}}function Tr(){tn||(tn=Rr.then(Ir))}function Lc(e){z(e)?aa.push(...e):St&&e.id===-1?St.splice(Jt+1,0,e):e.flags&1||(aa.push(e),e.flags|=1),Tr()}function Us(e,t,a=at+1){for(;a<Te.length;a++){const n=Te[a];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Te.splice(a,1),a--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Mr(e){if(aa.length){const t=[...new Set(aa)].sort((a,n)=>Ea(a)-Ea(n));if(aa.length=0,St){St.push(...t);return}for(St=t,Jt=0;Jt<St.length;Jt++){const a=St[Jt];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}St=null,Jt=0}}const Ea=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ir(e){try{for(at=0;at<Te.length;at++){const t=Te[at];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Oa(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;at<Te.length;at++){const t=Te[at];t&&(t.flags&=-2)}at=-1,Te.length=0,Mr(),tn=null,(Te.length||aa.length)&&Ir()}}let Ne=null,$r=null;function an(e){const t=Ne;return Ne=e,$r=e&&e.type.__scopeId||null,t}function Et(e,t=Ne,a){if(!t||e._n)return e;const n=(...s)=>{n._d&&sn(-1);const o=an(t);let r;try{r=e(...s)}finally{an(o),n._d&&sn(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function Se(e,t){if(Ne===null)return e;const a=qn(Ne),n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,i,c=fe]=t[s];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&gt(r),n.push({dir:o,instance:a,value:r,oldValue:void 0,arg:i,modifiers:c}))}return e}function Tt(e,t,a,n){const s=e.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const i=s[r];o&&(i.oldValue=o[r].value);let c=i.dir[n];c&&(ht(),Ge(c,a,8,[e.el,i,e,t]),bt())}}const Oc=Symbol("_vte"),Lr=e=>e.__isTeleport,vt=Symbol("_leaveCb"),Qa=Symbol("_enterCb");function Vc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Va(()=>{e.isMounted=!0}),Sn(()=>{e.isUnmounting=!0}),e}const ze=[Function,Array],Or={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},Vr=e=>{const t=e.subTree;return t.component?Vr(t.component):t},Dc={name:"BaseTransition",props:Or,setup(e,{slots:t}){const a=Da(),n=Vc();return()=>{const s=t.default&&Br(t.default(),!0);if(!s||!s.length)return;const o=Dr(s),r=re(e),{mode:i}=r;if(n.isLeaving)return Ln(o);const c=zs(o);if(!c)return Ln(o);let u=Zn(c,r,n,a,p=>u=p);c.type!==Me&&Aa(c,u);let d=a.subTree&&zs(a.subTree);if(d&&d.type!==Me&&!Ot(c,d)&&Vr(a).type!==Me){let p=Zn(d,r,n,a);if(Aa(d,p),i==="out-in"&&c.type!==Me)return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,a.job.flags&8||a.update(),delete p.afterLeave,d=void 0},Ln(o);i==="in-out"&&c.type!==Me?p.delayLeave=(m,f,h)=>{const S=Nr(n,d);S[String(d.key)]=d,m[vt]=()=>{f(),m[vt]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{h(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Dr(e){let t=e[0];if(e.length>1){for(const a of e)if(a.type!==Me){t=a;break}}return t}const Nc=Dc;function Nr(e,t){const{leavingVNodes:a}=e;let n=a.get(t.type);return n||(n=Object.create(null),a.set(t.type,n)),n}function Zn(e,t,a,n,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:S,onBeforeAppear:P,onAppear:j,onAfterAppear:T,onAppearCancelled:A}=t,b=String(e.key),q=Nr(a,e),K=(F,ae)=>{F&&Ge(F,n,9,ae)},J=(F,ae)=>{const te=ae[1];K(F,ae),z(F)?F.every(O=>O.length<=1)&&te():F.length<=1&&te()},ge={mode:r,persisted:i,beforeEnter(F){let ae=c;if(!a.isMounted)if(o)ae=P||c;else return;F[vt]&&F[vt](!0);const te=q[b];te&&Ot(e,te)&&te.el[vt]&&te.el[vt](),K(ae,[F])},enter(F){let ae=u,te=d,O=p;if(!a.isMounted)if(o)ae=j||u,te=T||d,O=A||p;else return;let ne=!1;const V=F[Qa]=se=>{ne||(ne=!0,se?K(O,[F]):K(te,[F]),ge.delayedLeave&&ge.delayedLeave(),F[Qa]=void 0)};ae?J(ae,[F,V]):V()},leave(F,ae){const te=String(e.key);if(F[Qa]&&F[Qa](!0),a.isUnmounting)return ae();K(m,[F]);let O=!1;const ne=F[vt]=V=>{O||(O=!0,ae(),V?K(S,[F]):K(h,[F]),F[vt]=void 0,q[te]===e&&delete q[te])};q[te]=e,f?J(f,[F,ne]):ne()},clone(F){const ae=Zn(F,t,a,n,s);return s&&s(ae),ae}};return ge}function Ln(e){if(xn(e))return e=Rt(e),e.children=null,e}function zs(e){if(!xn(e))return Lr(e.type)&&e.children?Dr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:a}=e;if(a){if(t&16)return a[0];if(t&32&&G(a.default))return a.default()}}function Aa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Aa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Br(e,t=!1,a){let n=[],s=0;for(let o=0;o<e.length;o++){let r=e[o];const i=a==null?r.key:String(a)+String(r.key!=null?r.key:o);r.type===Ee?(r.patchFlag&128&&s++,n=n.concat(Br(r.children,t,i))):(t||r.type!==Me)&&n.push(i!=null?Rt(r,{key:i}):r)}if(s>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function qs(e,t){return G(e)?_e({name:e.name},t,{setup:e}):e}function Ur(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ya(e,t,a,n,s=!1){if(z(e)){e.forEach((h,S)=>ya(h,t&&(z(t)?t[S]:t),a,n,s));return}if(Ca(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&ya(e,t,a,n.component.subTree);return}const o=n.shapeFlag&4?qn(n.component):n.el,r=s?null:o,{i,r:c}=e,u=t&&t.r,d=i.refs===fe?i.refs={}:i.refs,p=i.setupState,m=re(p),f=p===fe?ar:h=>le(m,h);if(u!=null&&u!==c){if(xe(u))d[u]=null,f(u)&&(p[u]=null);else if(Re(u)){u.value=null;const h=t;h.k&&(d[h.k]=null)}}if(G(c))Oa(c,i,12,[r,d]);else{const h=xe(c),S=Re(c);if(h||S){const P=()=>{if(e.f){const j=h?f(c)?p[c]:d[c]:c.value;if(s)z(j)&&gs(j,o);else if(z(j))j.includes(o)||j.push(o);else if(h)d[c]=[o],f(c)&&(p[c]=d[c]);else{const T=[o];c.value=T,e.k&&(d[e.k]=T)}}else h?(d[c]=r,f(c)&&(p[c]=r)):S&&(c.value=r,e.k&&(d[e.k]=r))};r?(P.id=-1,De(P,a)):P()}}}mn().requestIdleCallback;mn().cancelIdleCallback;const Ca=e=>!!e.type.__asyncLoader,xn=e=>e.type.__isKeepAlive;function zr(e,t){Hr(e,"a",t)}function Fr(e,t){Hr(e,"da",t)}function Hr(e,t,a=Ae){const n=e.__wdc||(e.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(_n(t,n,a),a){let s=a.parent;for(;s&&s.parent;)xn(s.parent.vnode)&&Bc(n,t,a,s),s=s.parent}}function Bc(e,t,a,n){const s=_n(t,e,n,!0);Ps(()=>{gs(n[t],s)},a)}function _n(e,t,a=Ae,n=!1){if(a){const s=a[e]||(a[e]=[]),o=t.__weh||(t.__weh=(...r)=>{ht();const i=Na(a),c=Ge(t,a,e,r);return i(),bt(),c});return n?s.unshift(o):s.push(o),o}}const yt=e=>(t,a=Ae)=>{(!ja||e==="sp")&&_n(e,(...n)=>t(...n),a)},Qr=yt("bm"),Va=yt("m"),Wr=yt("bu"),Kr=yt("u"),Sn=yt("bum"),Ps=yt("um"),Uc=yt("sp"),zc=yt("rtg"),Fc=yt("rtc");function Hc(e,t=Ae){_n("ec",e,t)}const Gr="components";function oa(e,t){return Yr(Gr,e,!0,t)||e}const Jr=Symbol.for("v-ndc");function Qc(e){return xe(e)?Yr(Gr,e,!1)||e:e||Jr}function Yr(e,t,a=!0,n=!1){const s=Ne||Ae;if(s){const o=s.type;{const i=Tl(o,!1);if(i&&(i===t||i===We(t)||i===vn(We(t))))return o}const r=Fs(s[e]||o[e],t)||Fs(s.appContext[e],t);return!r&&n?o:r}}function Fs(e,t){return e&&(e[t]||e[We(t)]||e[vn(We(t))])}function ca(e,t,a,n){let s;const o=a,r=z(e);if(r||xe(e)){const i=r&&ea(e);let c=!1,u=!1;i&&(c=!Qe(e),u=At(e),e=bn(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=t(c?u?Za(ke(e[d])):ke(e[d]):e[d],d,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,o)}else if(me(e))if(e[Symbol.iterator])s=Array.from(e,(i,c)=>t(i,c,void 0,o));else{const i=Object.keys(e);s=new Array(i.length);for(let c=0,u=i.length;c<u;c++){const d=i[c];s[c]=t(e[d],d,c,o)}}else s=[];return s}const es=e=>e?hi(e)?qn(e):es(e.parent):null,xa=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Zr(e),$forceUpdate:e=>e.f||(e.f=()=>{ws(e.update)}),$nextTick:e=>e.n||(e.n=jr.bind(e.proxy)),$watch:e=>fl.bind(e)}),On=(e,t)=>e!==fe&&!e.__isScriptSetup&&le(e,t),Wc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:a,setupState:n,data:s,props:o,accessCache:r,type:i,appContext:c}=e;let u;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return n[t];case 2:return s[t];case 4:return a[t];case 3:return o[t]}else{if(On(n,t))return r[t]=1,n[t];if(s!==fe&&le(s,t))return r[t]=2,s[t];if((u=e.propsOptions[0])&&le(u,t))return r[t]=3,o[t];if(a!==fe&&le(a,t))return r[t]=4,a[t];ts&&(r[t]=0)}}const d=xa[t];let p,m;if(d)return t==="$attrs"&&Pe(e.attrs,"get",""),d(e);if((p=i.__cssModules)&&(p=p[t]))return p;if(a!==fe&&le(a,t))return r[t]=4,a[t];if(m=c.config.globalProperties,le(m,t))return m[t]},set({_:e},t,a){const{data:n,setupState:s,ctx:o}=e;return On(s,t)?(s[t]=a,!0):n!==fe&&le(n,t)?(n[t]=a,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:n,appContext:s,propsOptions:o,type:r}},i){let c,u;return!!(a[i]||e!==fe&&i[0]!=="$"&&le(e,i)||On(t,i)||(c=o[0])&&le(c,i)||le(n,i)||le(xa,i)||le(s.config.globalProperties,i)||(u=r.__cssModules)&&u[i])},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:le(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};function Hs(e){return z(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}let ts=!0;function Kc(e){const t=Zr(e),a=e.proxy,n=e.ctx;ts=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:i,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:f,updated:h,activated:S,deactivated:P,beforeDestroy:j,beforeUnmount:T,destroyed:A,unmounted:b,render:q,renderTracked:K,renderTriggered:J,errorCaptured:ge,serverPrefetch:F,expose:ae,inheritAttrs:te,components:O,directives:ne,filters:V}=t;if(u&&Gc(u,n,null),r)for(const ue in r){const ie=r[ue];G(ie)&&(n[ue]=ie.bind(a))}if(s){const ue=s.call(a,a);me(ue)&&(e.data=Ut(ue))}if(ts=!0,o)for(const ue in o){const ie=o[ue],lt=G(ie)?ie.bind(a,a):G(ie.get)?ie.get.bind(a,a):st,Ct=!G(ie)&&G(ie.set)?ie.set.bind(a):st,Ye=Q({get:lt,set:Ct});Object.defineProperty(n,ue,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ie=>Ye.value=Ie})}if(i)for(const ue in i)Xr(i[ue],n,a,ue);if(c){const ue=G(c)?c.call(a):c;Reflect.ownKeys(ue).forEach(ie=>{Ga(ie,ue[ie])})}d&&Qs(d,e,"c");function he(ue,ie){z(ie)?ie.forEach(lt=>ue(lt.bind(a))):ie&&ue(ie.bind(a))}if(he(Qr,p),he(Va,m),he(Wr,f),he(Kr,h),he(zr,S),he(Fr,P),he(Hc,ge),he(Fc,K),he(zc,J),he(Sn,T),he(Ps,b),he(Uc,F),z(ae))if(ae.length){const ue=e.exposed||(e.exposed={});ae.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>a[ie],set:lt=>a[ie]=lt,enumerable:!0})})}else e.exposed||(e.exposed={});q&&e.render===st&&(e.render=q),te!=null&&(e.inheritAttrs=te),O&&(e.components=O),ne&&(e.directives=ne),F&&Ur(e)}function Gc(e,t,a=st){z(e)&&(e=as(e));for(const n in e){const s=e[n];let o;me(s)?"default"in s?o=rt(s.from||n,s.default,!0):o=rt(s.from||n):o=rt(s),Re(o)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[n]=o}}function Qs(e,t,a){Ge(z(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,a)}function Xr(e,t,a,n){let s=n.includes(".")?pi(a,n):()=>a[n];if(xe(e)){const o=t[e];G(o)&&_a(s,o)}else if(G(e))_a(s,e.bind(a));else if(me(e))if(z(e))e.forEach(o=>Xr(o,t,a,n));else{const o=G(e.handler)?e.handler.bind(a):t[e.handler];G(o)&&_a(s,o,e)}}function Zr(e){const t=e.type,{mixins:a,extends:n}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,i=o.get(t);let c;return i?c=i:!s.length&&!a&&!n?c=t:(c={},s.length&&s.forEach(u=>nn(c,u,r,!0)),nn(c,t,r)),me(t)&&o.set(t,c),c}function nn(e,t,a,n=!1){const{mixins:s,extends:o}=t;o&&nn(e,o,a,!0),s&&s.forEach(r=>nn(e,r,a,!0));for(const r in t)if(!(n&&r==="expose")){const i=Jc[r]||a&&a[r];e[r]=i?i(e[r],t[r]):t[r]}return e}const Jc={data:Ws,props:Ks,emits:Ks,methods:va,computed:va,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:va,directives:va,watch:Xc,provide:Ws,inject:Yc};function Ws(e,t){return t?e?function(){return _e(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Yc(e,t){return va(as(e),as(t))}function as(e){if(z(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function je(e,t){return e?[...new Set([].concat(e,t))]:t}function va(e,t){return e?_e(Object.create(null),e,t):t}function Ks(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:_e(Object.create(null),Hs(e),Hs(t??{})):t}function Xc(e,t){if(!e)return t;if(!t)return e;const a=_e(Object.create(null),e);for(const n in t)a[n]=je(e[n],t[n]);return a}function ei(){return{app:null,config:{isNativeTag:ar,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zc=0;function el(e,t){return function(n,s=null){G(n)||(n=_e({},n)),s!=null&&!me(s)&&(s=null);const o=ei(),r=new WeakSet,i=[];let c=!1;const u=o.app={_uid:Zc++,_component:n,_props:s,_container:null,_context:o,_instance:null,version:Il,get config(){return o.config},set config(d){},use(d,...p){return r.has(d)||(d&&G(d.install)?(r.add(d),d.install(u,...p)):G(d)&&(r.add(d),d(u,...p))),u},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),u},component(d,p){return p?(o.components[d]=p,u):o.components[d]},directive(d,p){return p?(o.directives[d]=p,u):o.directives[d]},mount(d,p,m){if(!c){const f=u._ceVNode||ve(n,s);return f.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(f,d,m),c=!0,u._container=d,d.__vue_app__=u,qn(f.component)}},onUnmount(d){i.push(d)},unmount(){c&&(Ge(i,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return o.provides[d]=p,u},runWithContext(d){const p=na;na=u;try{return d()}finally{na=p}}};return u}}let na=null;function Ga(e,t){if(Ae){let a=Ae.provides;const n=Ae.parent&&Ae.parent.provides;n===a&&(a=Ae.provides=Object.create(n)),a[e]=t}}function rt(e,t,a=!1){const n=Da();if(n||na){let s=na?na._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return a&&G(t)?t.call(n&&n.proxy):t}}const ti={},ai=()=>Object.create(ti),ni=e=>Object.getPrototypeOf(e)===ti;function tl(e,t,a,n=!1){const s={},o=ai();e.propsDefaults=Object.create(null),si(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);a?e.props=n?s:qr(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function al(e,t,a,n){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,i=re(s),[c]=e.propsOptions;let u=!1;if((n||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(kn(e.emitsOptions,m))continue;const f=t[m];if(c)if(le(o,m))f!==o[m]&&(o[m]=f,u=!0);else{const h=We(m);s[h]=ns(c,i,h,f,e,!1)}else f!==o[m]&&(o[m]=f,u=!0)}}}else{si(e,t,s,o)&&(u=!0);let d;for(const p in i)(!t||!le(t,p)&&((d=jt(p))===p||!le(t,d)))&&(c?a&&(a[p]!==void 0||a[d]!==void 0)&&(s[p]=ns(c,i,p,void 0,e,!0)):delete s[p]);if(o!==i)for(const p in o)(!t||!le(t,p))&&(delete o[p],u=!0)}u&&mt(e.attrs,"set","")}function si(e,t,a,n){const[s,o]=e.propsOptions;let r=!1,i;if(t)for(let c in t){if(ga(c))continue;const u=t[c];let d;s&&le(s,d=We(c))?!o||!o.includes(d)?a[d]=u:(i||(i={}))[d]=u:kn(e.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,r=!0)}if(o){const c=re(a),u=i||fe;for(let d=0;d<o.length;d++){const p=o[d];a[p]=ns(s,c,p,u[p],e,!le(u,p))}}return r}function ns(e,t,a,n,s,o){const r=e[a];if(r!=null){const i=le(r,"default");if(i&&n===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&G(c)){const{propsDefaults:u}=s;if(a in u)n=u[a];else{const d=Na(s);n=u[a]=c.call(null,t),d()}}else n=c;s.ce&&s.ce._setProp(a,n)}r[0]&&(o&&!i?n=!1:r[1]&&(n===""||n===jt(a))&&(n=!0))}return n}const nl=new WeakMap;function oi(e,t,a=!1){const n=a?nl:t.propsCache,s=n.get(e);if(s)return s;const o=e.props,r={},i=[];let c=!1;if(!G(e)){const d=p=>{c=!0;const[m,f]=oi(p,t,!0);_e(r,m),f&&i.push(...f)};!a&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return me(e)&&n.set(e,Xt),Xt;if(z(o))for(let d=0;d<o.length;d++){const p=We(o[d]);Gs(p)&&(r[p]=fe)}else if(o)for(const d in o){const p=We(d);if(Gs(p)){const m=o[d],f=r[p]=z(m)||G(m)?{type:m}:_e({},m),h=f.type;let S=!1,P=!0;if(z(h))for(let j=0;j<h.length;++j){const T=h[j],A=G(T)&&T.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(P=!1)}else S=G(h)&&h.name==="Boolean";f[0]=S,f[1]=P,(S||le(f,"default"))&&i.push(p)}}const u=[r,i];return me(e)&&n.set(e,u),u}function Gs(e){return e[0]!=="$"&&!ga(e)}const Es=e=>e==="_"||e==="_ctx"||e==="$stable",As=e=>z(e)?e.map(nt):[nt(e)],sl=(e,t,a)=>{if(t._n)return t;const n=Et((...s)=>As(t(...s)),a);return n._c=!1,n},ri=(e,t,a)=>{const n=e._ctx;for(const s in e){if(Es(s))continue;const o=e[s];if(G(o))t[s]=sl(s,o,n);else if(o!=null){const r=As(o);t[s]=()=>r}}},ii=(e,t)=>{const a=As(t);e.slots.default=()=>a},ci=(e,t,a)=>{for(const n in t)(a||!Es(n))&&(e[n]=t[n])},ol=(e,t,a)=>{const n=e.slots=ai();if(e.vnode.shapeFlag&32){const s=t._;s?(ci(n,t,a),a&&rr(n,"_",s,!0)):ri(t,n)}else t&&ii(e,t)},rl=(e,t,a)=>{const{vnode:n,slots:s}=e;let o=!0,r=fe;if(n.shapeFlag&32){const i=t._;i?a&&i===1?o=!1:ci(s,t,a):(o=!t.$stable,ri(t,s)),r=t}else t&&(ii(e,t),r={default:1});if(o)for(const i in s)!Es(i)&&r[i]==null&&delete s[i]},De=Cl;function il(e){return cl(e)}function cl(e,t){const a=mn();a.__VUE__=!0;const{insert:n,remove:s,patchProp:o,createElement:r,createText:i,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:f=st,insertStaticContent:h}=e,S=(v,g,y,x=null,k=null,C=null,I=void 0,R=null,E=!!g.dynamicChildren)=>{if(v===g)return;v&&!Ot(v,g)&&(x=_(v),Ie(v,k,C,!0),v=null),g.patchFlag===-2&&(E=!1,g.dynamicChildren=null);const{type:w,ref:H,shapeFlag:L}=g;switch(w){case wn:P(v,g,y,x);break;case Me:j(v,g,y,x);break;case Ja:v==null&&T(g,y,x,I);break;case Ee:O(v,g,y,x,k,C,I,R,E);break;default:L&1?q(v,g,y,x,k,C,I,R,E):L&6?ne(v,g,y,x,k,C,I,R,E):(L&64||L&128)&&w.process(v,g,y,x,k,C,I,R,E,N)}H!=null&&k?ya(H,v&&v.ref,C,g||v,!g):H==null&&v&&v.ref!=null&&ya(v.ref,null,C,v,!0)},P=(v,g,y,x)=>{if(v==null)n(g.el=i(g.children),y,x);else{const k=g.el=v.el;g.children!==v.children&&u(k,g.children)}},j=(v,g,y,x)=>{v==null?n(g.el=c(g.children||""),y,x):g.el=v.el},T=(v,g,y,x)=>{[v.el,v.anchor]=h(v.children,g,y,x,v.el,v.anchor)},A=({el:v,anchor:g},y,x)=>{let k;for(;v&&v!==g;)k=m(v),n(v,y,x),v=k;n(g,y,x)},b=({el:v,anchor:g})=>{let y;for(;v&&v!==g;)y=m(v),s(v),v=y;s(g)},q=(v,g,y,x,k,C,I,R,E)=>{g.type==="svg"?I="svg":g.type==="math"&&(I="mathml"),v==null?K(g,y,x,k,C,I,R,E):F(v,g,k,C,I,R,E)},K=(v,g,y,x,k,C,I,R)=>{let E,w;const{props:H,shapeFlag:L,transition:B,dirs:W}=v;if(E=v.el=r(v.type,C,H&&H.is,H),L&8?d(E,v.children):L&16&&ge(v.children,E,null,x,k,Vn(v,C),I,R),W&&Tt(v,null,x,"created"),J(E,v,v.scopeId,I,x),H){for(const be in H)be!=="value"&&!ga(be)&&o(E,be,null,H[be],C,x);"value"in H&&o(E,"value",null,H.value,C),(w=H.onVnodeBeforeMount)&&tt(w,x,v)}W&&Tt(v,null,x,"beforeMount");const oe=ll(k,B);oe&&B.beforeEnter(E),n(E,g,y),((w=H&&H.onVnodeMounted)||oe||W)&&De(()=>{w&&tt(w,x,v),oe&&B.enter(E),W&&Tt(v,null,x,"mounted")},k)},J=(v,g,y,x,k)=>{if(y&&f(v,y),x)for(let C=0;C<x.length;C++)f(v,x[C]);if(k){let C=k.subTree;if(g===C||vi(C.type)&&(C.ssContent===g||C.ssFallback===g)){const I=k.vnode;J(v,I,I.scopeId,I.slotScopeIds,k.parent)}}},ge=(v,g,y,x,k,C,I,R,E=0)=>{for(let w=E;w<v.length;w++){const H=v[w]=R?kt(v[w]):nt(v[w]);S(null,H,g,y,x,k,C,I,R)}},F=(v,g,y,x,k,C,I)=>{const R=g.el=v.el;let{patchFlag:E,dynamicChildren:w,dirs:H}=g;E|=v.patchFlag&16;const L=v.props||fe,B=g.props||fe;let W;if(y&&Mt(y,!1),(W=B.onVnodeBeforeUpdate)&&tt(W,y,g,v),H&&Tt(g,v,y,"beforeUpdate"),y&&Mt(y,!0),(L.innerHTML&&B.innerHTML==null||L.textContent&&B.textContent==null)&&d(R,""),w?ae(v.dynamicChildren,w,R,y,x,Vn(g,k),C):I||ie(v,g,R,null,y,x,Vn(g,k),C,!1),E>0){if(E&16)te(R,L,B,y,k);else if(E&2&&L.class!==B.class&&o(R,"class",null,B.class,k),E&4&&o(R,"style",L.style,B.style,k),E&8){const oe=g.dynamicProps;for(let be=0;be<oe.length;be++){const de=oe[be],$e=L[de],Le=B[de];(Le!==$e||de==="value")&&o(R,de,$e,Le,k,y)}}E&1&&v.children!==g.children&&d(R,g.children)}else!I&&w==null&&te(R,L,B,y,k);((W=B.onVnodeUpdated)||H)&&De(()=>{W&&tt(W,y,g,v),H&&Tt(g,v,y,"updated")},x)},ae=(v,g,y,x,k,C,I)=>{for(let R=0;R<g.length;R++){const E=v[R],w=g[R],H=E.el&&(E.type===Ee||!Ot(E,w)||E.shapeFlag&198)?p(E.el):y;S(E,w,H,null,x,k,C,I,!0)}},te=(v,g,y,x,k)=>{if(g!==y){if(g!==fe)for(const C in g)!ga(C)&&!(C in y)&&o(v,C,g[C],null,k,x);for(const C in y){if(ga(C))continue;const I=y[C],R=g[C];I!==R&&C!=="value"&&o(v,C,R,I,k,x)}"value"in y&&o(v,"value",g.value,y.value,k)}},O=(v,g,y,x,k,C,I,R,E)=>{const w=g.el=v?v.el:i(""),H=g.anchor=v?v.anchor:i("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:W}=g;W&&(R=R?R.concat(W):W),v==null?(n(w,y,x),n(H,y,x),ge(g.children||[],y,H,k,C,I,R,E)):L>0&&L&64&&B&&v.dynamicChildren?(ae(v.dynamicChildren,B,y,k,C,I,R),(g.key!=null||k&&g===k.subTree)&&li(v,g,!0)):ie(v,g,y,H,k,C,I,R,E)},ne=(v,g,y,x,k,C,I,R,E)=>{g.slotScopeIds=R,v==null?g.shapeFlag&512?k.ctx.activate(g,y,x,I,E):V(g,y,x,k,C,I,E):se(v,g,E)},V=(v,g,y,x,k,C,I)=>{const R=v.component=Pl(v,x,k);if(xn(v)&&(R.ctx.renderer=N),El(R,!1,I),R.asyncDep){if(k&&k.registerDep(R,he,I),!v.el){const E=R.subTree=ve(Me);j(null,E,g,y),v.placeholder=E.el}}else he(R,v,g,y,k,C,I)},se=(v,g,y)=>{const x=g.component=v.component;if(bl(v,g,y))if(x.asyncDep&&!x.asyncResolved){ue(x,g,y);return}else x.next=g,x.update();else g.el=v.el,x.vnode=g},he=(v,g,y,x,k,C,I)=>{const R=()=>{if(v.isMounted){let{next:L,bu:B,u:W,parent:oe,vnode:be}=v;{const Ze=di(v);if(Ze){L&&(L.el=be.el,ue(v,L,I)),Ze.asyncDep.then(()=>{v.isUnmounted||R()});return}}let de=L,$e;Mt(v,!1),L?(L.el=be.el,ue(v,L,I)):L=be,B&&Ka(B),($e=L.props&&L.props.onVnodeBeforeUpdate)&&tt($e,oe,L,be),Mt(v,!0);const Le=Ys(v),Xe=v.subTree;v.subTree=Le,S(Xe,Le,p(Xe.el),_(Xe),v,k,C),L.el=Le.el,de===null&&yl(v,Le.el),W&&De(W,k),($e=L.props&&L.props.onVnodeUpdated)&&De(()=>tt($e,oe,L,be),k)}else{let L;const{el:B,props:W}=g,{bm:oe,m:be,parent:de,root:$e,type:Le}=v,Xe=Ca(g);Mt(v,!1),oe&&Ka(oe),!Xe&&(L=W&&W.onVnodeBeforeMount)&&tt(L,de,g),Mt(v,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(Le);const Ze=v.subTree=Ys(v);S(null,Ze,y,x,v,k,C),g.el=Ze.el}if(be&&De(be,k),!Xe&&(L=W&&W.onVnodeMounted)){const Ze=g;De(()=>tt(L,de,Ze),k)}(g.shapeFlag&256||de&&Ca(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&De(v.a,k),v.isMounted=!0,g=y=x=null}};v.scope.on();const E=v.effect=new pr(R);v.scope.off();const w=v.update=E.run.bind(E),H=v.job=E.runIfDirty.bind(E);H.i=v,H.id=v.uid,E.scheduler=()=>ws(H),Mt(v,!0),w()},ue=(v,g,y)=>{g.component=v;const x=v.vnode.props;v.vnode=g,v.next=null,al(v,g.props,x,y),rl(v,g.children,y),ht(),Us(v),bt()},ie=(v,g,y,x,k,C,I,R,E=!1)=>{const w=v&&v.children,H=v?v.shapeFlag:0,L=g.children,{patchFlag:B,shapeFlag:W}=g;if(B>0){if(B&128){Ct(w,L,y,x,k,C,I,R,E);return}else if(B&256){lt(w,L,y,x,k,C,I,R,E);return}}W&8?(H&16&&Ue(w,k,C),L!==w&&d(y,L)):H&16?W&16?Ct(w,L,y,x,k,C,I,R,E):Ue(w,k,C,!0):(H&8&&d(y,""),W&16&&ge(L,y,x,k,C,I,R,E))},lt=(v,g,y,x,k,C,I,R,E)=>{v=v||Xt,g=g||Xt;const w=v.length,H=g.length,L=Math.min(w,H);let B;for(B=0;B<L;B++){const W=g[B]=E?kt(g[B]):nt(g[B]);S(v[B],W,y,null,k,C,I,R,E)}w>H?Ue(v,k,C,!0,!1,L):ge(g,y,x,k,C,I,R,E,L)},Ct=(v,g,y,x,k,C,I,R,E)=>{let w=0;const H=g.length;let L=v.length-1,B=H-1;for(;w<=L&&w<=B;){const W=v[w],oe=g[w]=E?kt(g[w]):nt(g[w]);if(Ot(W,oe))S(W,oe,y,null,k,C,I,R,E);else break;w++}for(;w<=L&&w<=B;){const W=v[L],oe=g[B]=E?kt(g[B]):nt(g[B]);if(Ot(W,oe))S(W,oe,y,null,k,C,I,R,E);else break;L--,B--}if(w>L){if(w<=B){const W=B+1,oe=W<H?g[W].el:x;for(;w<=B;)S(null,g[w]=E?kt(g[w]):nt(g[w]),y,oe,k,C,I,R,E),w++}}else if(w>B)for(;w<=L;)Ie(v[w],k,C,!0),w++;else{const W=w,oe=w,be=new Map;for(w=oe;w<=B;w++){const Ve=g[w]=E?kt(g[w]):nt(g[w]);Ve.key!=null&&be.set(Ve.key,w)}let de,$e=0;const Le=B-oe+1;let Xe=!1,Ze=0;const la=new Array(Le);for(w=0;w<Le;w++)la[w]=0;for(w=W;w<=L;w++){const Ve=v[w];if($e>=Le){Ie(Ve,k,C,!0);continue}let et;if(Ve.key!=null)et=be.get(Ve.key);else for(de=oe;de<=B;de++)if(la[de-oe]===0&&Ot(Ve,g[de])){et=de;break}et===void 0?Ie(Ve,k,C,!0):(la[et-oe]=w+1,et>=Ze?Ze=et:Xe=!0,S(Ve,g[et],y,null,k,C,I,R,E),$e++)}const $s=Xe?dl(la):Xt;for(de=$s.length-1,w=Le-1;w>=0;w--){const Ve=oe+w,et=g[Ve],Ls=g[Ve+1],Os=Ve+1<H?Ls.el||Ls.placeholder:x;la[w]===0?S(null,et,y,Os,k,C,I,R,E):Xe&&(de<0||w!==$s[de]?Ye(et,y,Os,2):de--)}}},Ye=(v,g,y,x,k=null)=>{const{el:C,type:I,transition:R,children:E,shapeFlag:w}=v;if(w&6){Ye(v.component.subTree,g,y,x);return}if(w&128){v.suspense.move(g,y,x);return}if(w&64){I.move(v,g,y,N);return}if(I===Ee){n(C,g,y);for(let L=0;L<E.length;L++)Ye(E[L],g,y,x);n(v.anchor,g,y);return}if(I===Ja){A(v,g,y);return}if(x!==2&&w&1&&R)if(x===0)R.beforeEnter(C),n(C,g,y),De(()=>R.enter(C),k);else{const{leave:L,delayLeave:B,afterLeave:W}=R,oe=()=>{v.ctx.isUnmounted?s(C):n(C,g,y)},be=()=>{C._isLeaving&&C[vt](!0),L(C,()=>{oe(),W&&W()})};B?B(C,oe,be):be()}else n(C,g,y)},Ie=(v,g,y,x=!1,k=!1)=>{const{type:C,props:I,ref:R,children:E,dynamicChildren:w,shapeFlag:H,patchFlag:L,dirs:B,cacheIndex:W}=v;if(L===-2&&(k=!1),R!=null&&(ht(),ya(R,null,y,v,!0),bt()),W!=null&&(g.renderCache[W]=void 0),H&256){g.ctx.deactivate(v);return}const oe=H&1&&B,be=!Ca(v);let de;if(be&&(de=I&&I.onVnodeBeforeUnmount)&&tt(de,g,v),H&6)Ua(v.component,y,x);else{if(H&128){v.suspense.unmount(y,x);return}oe&&Tt(v,null,g,"beforeUnmount"),H&64?v.type.remove(v,g,y,N,x):w&&!w.hasOnce&&(C!==Ee||L>0&&L&64)?Ue(w,g,y,!1,!0):(C===Ee&&L&384||!k&&H&16)&&Ue(E,g,y),x&&zt(v)}(be&&(de=I&&I.onVnodeUnmounted)||oe)&&De(()=>{de&&tt(de,g,v),oe&&Tt(v,null,g,"unmounted")},y)},zt=v=>{const{type:g,el:y,anchor:x,transition:k}=v;if(g===Ee){Ft(y,x);return}if(g===Ja){b(v);return}const C=()=>{s(y),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(v.shapeFlag&1&&k&&!k.persisted){const{leave:I,delayLeave:R}=k,E=()=>I(y,C);R?R(v.el,C,E):E()}else C()},Ft=(v,g)=>{let y;for(;v!==g;)y=m(v),s(v),v=y;s(g)},Ua=(v,g,y)=>{const{bum:x,scope:k,job:C,subTree:I,um:R,m:E,a:w}=v;Js(E),Js(w),x&&Ka(x),k.stop(),C&&(C.flags|=8,Ie(I,v,g,y)),R&&De(R,g),De(()=>{v.isUnmounted=!0},g)},Ue=(v,g,y,x=!1,k=!1,C=0)=>{for(let I=C;I<v.length;I++)Ie(v[I],g,y,x,k)},_=v=>{if(v.shapeFlag&6)return _(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const g=m(v.anchor||v.el),y=g&&g[Oc];return y?m(y):g};let D=!1;const $=(v,g,y)=>{v==null?g._vnode&&Ie(g._vnode,null,null,!0):S(g._vnode||null,v,g,null,null,null,y),g._vnode=v,D||(D=!0,Us(),Mr(),D=!1)},N={p:S,um:Ie,m:Ye,r:zt,mt:V,mc:ge,pc:ie,pbc:ae,n:_,o:e};return{render:$,hydrate:void 0,createApp:el($)}}function Vn({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function Mt({effect:e,job:t},a){a?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ll(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function li(e,t,a=!1){const n=e.children,s=t.children;if(z(n)&&z(s))for(let o=0;o<n.length;o++){const r=n[o];let i=s[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[o]=kt(s[o]),i.el=r.el),!a&&i.patchFlag!==-2&&li(r,i)),i.type===wn&&i.patchFlag!==-1&&(i.el=r.el),i.type===Me&&!i.el&&(i.el=r.el)}}function dl(e){const t=e.slice(),a=[0];let n,s,o,r,i;const c=e.length;for(n=0;n<c;n++){const u=e[n];if(u!==0){if(s=a[a.length-1],e[s]<u){t[n]=s,a.push(n);continue}for(o=0,r=a.length-1;o<r;)i=o+r>>1,e[a[i]]<u?o=i+1:r=i;u<e[a[o]]&&(o>0&&(t[n]=a[o-1]),a[o]=n)}}for(o=a.length,r=a[o-1];o-- >0;)a[o]=r,r=t[r];return a}function di(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:di(t)}function Js(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ul=Symbol.for("v-scx"),pl=()=>rt(ul);function _a(e,t,a){return ui(e,t,a)}function ui(e,t,a=fe){const{immediate:n,deep:s,flush:o,once:r}=a,i=_e({},a),c=t&&n||!t&&o!=="post";let u;if(ja){if(o==="sync"){const f=pl();u=f.__watcherHandles||(f.__watcherHandles=[])}else if(!c){const f=()=>{};return f.stop=st,f.resume=st,f.pause=st,f}}const d=Ae;i.call=(f,h,S)=>Ge(f,d,h,S);let p=!1;o==="post"?i.scheduler=f=>{De(f,d&&d.suspense)}:o!=="sync"&&(p=!0,i.scheduler=(f,h)=>{h?f():ws(f)}),i.augmentJob=f=>{t&&(f.flags|=4),p&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const m=Mc(e,t,i);return ja&&(u?u.push(m):c&&m()),m}function fl(e,t,a){const n=this.proxy,s=xe(e)?e.includes(".")?pi(n,e):()=>n[e]:e.bind(n,n);let o;G(t)?o=t:(o=t.handler,a=t);const r=Na(this),i=ui(s,o.bind(n),a);return r(),i}function pi(e,t){const a=t.split(".");return()=>{let n=e;for(let s=0;s<a.length&&n;s++)n=n[a[s]];return n}}const vl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function ml(e,t,...a){if(e.isUnmounted)return;const n=e.vnode.props||fe;let s=a;const o=t.startsWith("update:"),r=o&&vl(n,t.slice(7));r&&(r.trim&&(s=a.map(d=>xe(d)?d.trim():d)),r.number&&(s=a.map(Kn)));let i,c=n[i=jn(t)]||n[i=jn(We(t))];!c&&o&&(c=n[i=jn(jt(t))]),c&&Ge(c,e,6,s);const u=n[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Ge(u,e,6,s)}}function fi(e,t,a=!1){const n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;const o=e.emits;let r={},i=!1;if(!G(e)){const c=u=>{const d=fi(u,t,!0);d&&(i=!0,_e(r,d))};!a&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!i?(me(e)&&n.set(e,null),null):(z(o)?o.forEach(c=>r[c]=null):_e(r,o),me(e)&&n.set(e,r),r)}function kn(e,t){return!e||!un(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,jt(t))||le(e,t))}function Ys(e){const{type:t,vnode:a,proxy:n,withProxy:s,propsOptions:[o],slots:r,attrs:i,emit:c,render:u,renderCache:d,props:p,data:m,setupState:f,ctx:h,inheritAttrs:S}=e,P=an(e);let j,T;try{if(a.shapeFlag&4){const b=s||n,q=b;j=nt(u.call(q,b,d,p,f,m,h)),T=i}else{const b=t;j=nt(b.length>1?b(p,{attrs:i,slots:r,emit:c}):b(p,null)),T=t.props?i:gl(i)}}catch(b){Sa.length=0,Cn(b,e,1),j=ve(Me)}let A=j;if(T&&S!==!1){const b=Object.keys(T),{shapeFlag:q}=A;b.length&&q&7&&(o&&b.some(ms)&&(T=hl(T,o)),A=Rt(A,T,!1,!0))}return a.dirs&&(A=Rt(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(a.dirs):a.dirs),a.transition&&Aa(A,a.transition),j=A,an(P),j}const gl=e=>{let t;for(const a in e)(a==="class"||a==="style"||un(a))&&((t||(t={}))[a]=e[a]);return t},hl=(e,t)=>{const a={};for(const n in e)(!ms(n)||!(n.slice(9)in t))&&(a[n]=e[n]);return a};function bl(e,t,a){const{props:n,children:s,component:o}=e,{props:r,children:i,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&c>=0){if(c&1024)return!0;if(c&16)return n?Xs(n,r,u):!!r;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(r[m]!==n[m]&&!kn(u,m))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:n===r?!1:n?r?Xs(n,r,u):!0:!!r;return!1}function Xs(e,t,a){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const o=n[s];if(t[o]!==e[o]&&!kn(a,o))return!0}return!1}function yl({vnode:e,parent:t},a){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=a,t=t.parent;else break}}const vi=e=>e.__isSuspense;function Cl(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Lc(e)}const Ee=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),Me=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),Sa=[];let Be=null;function Y(e=!1){Sa.push(Be=e?null:[])}function xl(){Sa.pop(),Be=Sa[Sa.length-1]||null}let Ra=1;function sn(e,t=!1){Ra+=e,e<0&&Be&&t&&(Be.hasOnce=!0)}function mi(e){return e.dynamicChildren=Ra>0?Be||Xt:null,xl(),Ra>0&&Be&&Be.push(e),e}function ee(e,t,a,n,s,o){return mi(l(e,t,a,n,s,o,!0))}function ss(e,t,a,n,s){return mi(ve(e,t,a,n,s,!0))}function on(e){return e?e.__v_isVNode===!0:!1}function Ot(e,t){return e.type===t.type&&e.key===t.key}const gi=({key:e})=>e??null,Ya=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||Re(e)||G(e)?{i:Ne,r:e,k:t,f:!!a}:e:null);function l(e,t=null,a=null,n=0,s=null,o=e===Ee?0:1,r=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gi(t),ref:t&&Ya(t),scopeId:$r,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return i?(Rs(c,a),o&128&&e.normalize(c)):a&&(c.shapeFlag|=xe(a)?8:16),Ra>0&&!r&&Be&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Be.push(c),c}const ve=_l;function _l(e,t=null,a=null,n=0,s=null,o=!1){if((!e||e===Jr)&&(e=Me),on(e)){const i=Rt(e,t,!0);return a&&Rs(i,a),Ra>0&&!o&&Be&&(i.shapeFlag&6?Be[Be.indexOf(e)]=i:Be.push(i)),i.patchFlag=-2,i}if(Ml(e)&&(e=e.__vccOpts),t){t=Sl(t);let{class:i,style:c}=t;i&&!xe(i)&&(t.class=ot(i)),me(c)&&(ks(c)&&!z(c)&&(c=_e({},c)),t.style=gn(c))}const r=xe(e)?1:vi(e)?128:Lr(e)?64:me(e)?4:G(e)?2:0;return l(e,t,a,n,s,r,o,!0)}function Sl(e){return e?ks(e)||ni(e)?_e({},e):e:null}function Rt(e,t,a=!1,n=!1){const{props:s,ref:o,patchFlag:r,children:i,transition:c}=e,u=t?kl(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&gi(u),ref:t&&t.ref?a&&o?z(o)?o.concat(Ya(t)):[o,Ya(t)]:Ya(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&Aa(d,c.clone(d)),d}function Z(e=" ",t=0){return ve(wn,null,e,t)}function X(e,t){const a=ve(Ja,null,e);return a.staticCount=t,a}function Nt(e="",t=!1){return t?(Y(),ss(Me,null,e)):ve(Me,null,e)}function nt(e){return e==null||typeof e=="boolean"?ve(Me):z(e)?ve(Ee,null,e.slice()):on(e)?kt(e):ve(wn,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function Rs(e,t){let a=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(z(t))a=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Rs(e,s()),s._c&&(s._d=!0));return}else{a=32;const s=t._;!s&&!ni(t)?t._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Ne},a=32):(t=String(t),n&64?(a=16,t=[Z(t)]):a=8);e.children=t,e.shapeFlag|=a}function kl(...e){const t={};for(let a=0;a<e.length;a++){const n=e[a];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=ot([t.class,n.class]));else if(s==="style")t.style=gn([t.style,n.style]);else if(un(s)){const o=t[s],r=n[s];r&&o!==r&&!(z(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=n[s])}return t}function tt(e,t,a,n=null){Ge(e,t,7,[a,n])}const wl=ei();let ql=0;function Pl(e,t,a){const n=e.type,s=(t?t.appContext:e.appContext)||wl,o={uid:ql++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ur(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(n,s),emitsOptions:fi(n,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:n.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ml.bind(null,o),e.ce&&e.ce(o),o}let Ae=null;const Da=()=>Ae||Ne;let rn,os;{const e=mn(),t=(a,n)=>{let s;return(s=e[a])||(s=e[a]=[]),s.push(n),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};rn=t("__VUE_INSTANCE_SETTERS__",a=>Ae=a),os=t("__VUE_SSR_SETTERS__",a=>ja=a)}const Na=e=>{const t=Ae;return rn(e),e.scope.on(),()=>{e.scope.off(),rn(t)}},Zs=()=>{Ae&&Ae.scope.off(),rn(null)};function hi(e){return e.vnode.shapeFlag&4}let ja=!1;function El(e,t=!1,a=!1){t&&os(t);const{props:n,children:s}=e.vnode,o=hi(e);tl(e,n,o,t),ol(e,s,a||t);const r=o?Al(e,t):void 0;return t&&os(!1),r}function Al(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Wc);const{setup:n}=a;if(n){ht();const s=e.setupContext=n.length>1?jl(e):null,o=Na(e),r=Oa(n,e,0,[e.props,s]),i=nr(r);if(bt(),o(),(i||e.sp)&&!Ca(e)&&Ur(e),i){if(r.then(Zs,Zs),t)return r.then(c=>{eo(e,c)}).catch(c=>{Cn(c,e,0)});e.asyncDep=r}else eo(e,r)}else bi(e)}function eo(e,t,a){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Ar(t)),bi(e)}function bi(e,t,a){const n=e.type;e.render||(e.render=n.render||st);{const s=Na(e);ht();try{Kc(e)}finally{bt(),s()}}}const Rl={get(e,t){return Pe(e,"get",""),e[t]}};function jl(e){const t=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,Rl),slots:e.slots,emit:e.emit,expose:t}}function qn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ar(yn(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in xa)return xa[a](e)},has(t,a){return a in t||a in xa}})):e.proxy}function Tl(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function Ml(e){return G(e)&&"__vccOpts"in e}const Q=(e,t)=>jc(e,t,ja);function Ce(e,t,a){const n=arguments.length;return n===2?me(t)&&!z(t)?on(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(n>3?a=Array.prototype.slice.call(arguments,2):n===3&&on(a)&&(a=[a]),ve(e,t,a))}const Il="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rs;const to=typeof window<"u"&&window.trustedTypes;if(to)try{rs=to.createPolicy("vue",{createHTML:e=>e})}catch{}const yi=rs?e=>rs.createHTML(e):e=>e,$l="http://www.w3.org/2000/svg",Ll="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,ao=ft&&ft.createElement("template"),Ol={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,n)=>{const s=t==="svg"?ft.createElementNS($l,e):t==="mathml"?ft.createElementNS(Ll,e):a?ft.createElement(e,{is:a}):ft.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,n,s,o){const r=a?a.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),a),!(s===o||!(s=s.nextSibling)););else{ao.innerHTML=yi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const i=ao.content;if(n==="svg"||n==="mathml"){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,a)}return[r?r.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},xt="transition",ua="animation",Ta=Symbol("_vtc"),Ci={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vl=_e({},Or,Ci),Dl=e=>(e.displayName="Transition",e.props=Vl,e),Nl=Dl((e,{slots:t})=>Ce(Nc,Bl(e),t)),It=(e,t=[])=>{z(e)?e.forEach(a=>a(...t)):e&&e(...t)},no=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function Bl(e){const t={};for(const O in e)O in Ci||(t[O]=e[O]);if(e.css===!1)return t;const{name:a="v",type:n,duration:s,enterFromClass:o=`${a}-enter-from`,enterActiveClass:r=`${a}-enter-active`,enterToClass:i=`${a}-enter-to`,appearFromClass:c=o,appearActiveClass:u=r,appearToClass:d=i,leaveFromClass:p=`${a}-leave-from`,leaveActiveClass:m=`${a}-leave-active`,leaveToClass:f=`${a}-leave-to`}=e,h=Ul(s),S=h&&h[0],P=h&&h[1],{onBeforeEnter:j,onEnter:T,onEnterCancelled:A,onLeave:b,onLeaveCancelled:q,onBeforeAppear:K=j,onAppear:J=T,onAppearCancelled:ge=A}=t,F=(O,ne,V,se)=>{O._enterCancelled=se,$t(O,ne?d:i),$t(O,ne?u:r),V&&V()},ae=(O,ne)=>{O._isLeaving=!1,$t(O,p),$t(O,f),$t(O,m),ne&&ne()},te=O=>(ne,V)=>{const se=O?J:T,he=()=>F(ne,O,V);It(se,[ne,he]),so(()=>{$t(ne,O?c:o),ut(ne,O?d:i),no(se)||oo(ne,n,S,he)})};return _e(t,{onBeforeEnter(O){It(j,[O]),ut(O,o),ut(O,r)},onBeforeAppear(O){It(K,[O]),ut(O,c),ut(O,u)},onEnter:te(!1),onAppear:te(!0),onLeave(O,ne){O._isLeaving=!0;const V=()=>ae(O,ne);ut(O,p),O._enterCancelled?(ut(O,m),co()):(co(),ut(O,m)),so(()=>{O._isLeaving&&($t(O,p),ut(O,f),no(b)||oo(O,n,P,V))}),It(b,[O,V])},onEnterCancelled(O){F(O,!1,void 0,!0),It(A,[O])},onAppearCancelled(O){F(O,!0,void 0,!0),It(ge,[O])},onLeaveCancelled(O){ae(O),It(q,[O])}})}function Ul(e){if(e==null)return null;if(me(e))return[Dn(e.enter),Dn(e.leave)];{const t=Dn(e);return[t,t]}}function Dn(e){return Zi(e)}function ut(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[Ta]||(e[Ta]=new Set)).add(t)}function $t(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const a=e[Ta];a&&(a.delete(t),a.size||(e[Ta]=void 0))}function so(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let zl=0;function oo(e,t,a,n){const s=e._endId=++zl,o=()=>{s===e._endId&&n()};if(a!=null)return setTimeout(o,a);const{type:r,timeout:i,propCount:c}=Fl(e,t);if(!r)return n();const u=r+"end";let d=0;const p=()=>{e.removeEventListener(u,m),o()},m=f=>{f.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},i+1),e.addEventListener(u,m)}function Fl(e,t){const a=window.getComputedStyle(e),n=h=>(a[h]||"").split(", "),s=n(`${xt}Delay`),o=n(`${xt}Duration`),r=ro(s,o),i=n(`${ua}Delay`),c=n(`${ua}Duration`),u=ro(i,c);let d=null,p=0,m=0;t===xt?r>0&&(d=xt,p=r,m=o.length):t===ua?u>0&&(d=ua,p=u,m=c.length):(p=Math.max(r,u),d=p>0?r>u?xt:ua:null,m=d?d===xt?o.length:c.length:0);const f=d===xt&&/\b(transform|all)(,|$)/.test(n(`${xt}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:f}}function ro(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,n)=>io(a)+io(e[n])))}function io(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function co(){return document.body.offsetHeight}function Hl(e,t,a){const n=e[Ta];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const cn=Symbol("_vod"),xi=Symbol("_vsh"),Ql={name:"show",beforeMount(e,{value:t},{transition:a}){e[cn]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):pa(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:n}){!t!=!a&&(n?t?(n.beforeEnter(e),pa(e,!0),n.enter(e)):n.leave(e,()=>{pa(e,!1)}):pa(e,t))},beforeUnmount(e,{value:t}){pa(e,t)}};function pa(e,t){e.style.display=t?e[cn]:"none",e[xi]=!t}const Wl=Symbol(""),Kl=/(^|;)\s*display\s*:/;function Gl(e,t,a){const n=e.style,s=xe(a);let o=!1;if(a&&!s){if(t)if(xe(t))for(const r of t.split(";")){const i=r.slice(0,r.indexOf(":")).trim();a[i]==null&&Xa(n,i,"")}else for(const r in t)a[r]==null&&Xa(n,r,"");for(const r in a)r==="display"&&(o=!0),Xa(n,r,a[r])}else if(s){if(t!==a){const r=n[Wl];r&&(a+=";"+r),n.cssText=a,o=Kl.test(a)}}else t&&e.removeAttribute("style");cn in e&&(e[cn]=o?n.display:"",e[xi]&&(n.display="none"))}const lo=/\s*!important$/;function Xa(e,t,a){if(z(a))a.forEach(n=>Xa(e,t,n));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const n=Jl(e,t);lo.test(a)?e.setProperty(jt(n),a.replace(lo,""),"important"):e[n]=a}}const uo=["Webkit","Moz","ms"],Nn={};function Jl(e,t){const a=Nn[t];if(a)return a;let n=We(t);if(n!=="filter"&&n in e)return Nn[t]=n;n=vn(n);for(let s=0;s<uo.length;s++){const o=uo[s]+n;if(o in e)return Nn[t]=o}return t}const po="http://www.w3.org/1999/xlink";function fo(e,t,a,n,s,o=oc(t)){n&&t.startsWith("xlink:")?a==null?e.removeAttributeNS(po,t.slice(6,t.length)):e.setAttributeNS(po,t,a):a==null||o&&!ir(a)?e.removeAttribute(t):e.setAttribute(t,o?"":ct(a)?String(a):a)}function vo(e,t,a,n,s){if(t==="innerHTML"||t==="textContent"){a!=null&&(e[t]=t==="innerHTML"?yi(a):a);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,c=a==null?e.type==="checkbox"?"on":"":String(a);(i!==c||!("_value"in e))&&(e.value=c),a==null&&e.removeAttribute(t),e._value=a;return}let r=!1;if(a===""||a==null){const i=typeof e[t];i==="boolean"?a=ir(a):a==null&&i==="string"?(a="",r=!0):i==="number"&&(a=0,r=!0)}try{e[t]=a}catch{}r&&e.removeAttribute(s||t)}function Vt(e,t,a,n){e.addEventListener(t,a,n)}function Yl(e,t,a,n){e.removeEventListener(t,a,n)}const mo=Symbol("_vei");function Xl(e,t,a,n,s=null){const o=e[mo]||(e[mo]={}),r=o[t];if(n&&r)r.value=n;else{const[i,c]=Zl(t);if(n){const u=o[t]=ad(n,s);Vt(e,i,u,c)}else r&&(Yl(e,i,r,c),o[t]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function Zl(e){let t;if(go.test(e)){t={};let n;for(;n=e.match(go);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Bn=0;const ed=Promise.resolve(),td=()=>Bn||(ed.then(()=>Bn=0),Bn=Date.now());function ad(e,t){const a=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=a.attached)return;Ge(nd(n,a.value),t,5,[n])};return a.value=e,a.attached=td(),a}function nd(e,t){if(z(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sd=(e,t,a,n,s,o)=>{const r=s==="svg";t==="class"?Hl(e,n,r):t==="style"?Gl(e,a,n):un(t)?ms(t)||Xl(e,t,a,n,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):od(e,t,n,r))?(vo(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fo(e,t,n,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(n))?vo(e,We(t),n,o,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),fo(e,t,n,r))};function od(e,t,a,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&ho(t)&&G(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ho(t)&&xe(a)?!1:t in e}const ln=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?a=>Ka(t,a):t};function rd(e){e.target.composing=!0}function bo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const sa=Symbol("_assign"),He={created(e,{modifiers:{lazy:t,trim:a,number:n}},s){e[sa]=ln(s);const o=n||s.props&&s.props.type==="number";Vt(e,t?"change":"input",r=>{if(r.target.composing)return;let i=e.value;a&&(i=i.trim()),o&&(i=Kn(i)),e[sa](i)}),a&&Vt(e,"change",()=>{e.value=e.value.trim()}),t||(Vt(e,"compositionstart",rd),Vt(e,"compositionend",bo),Vt(e,"change",bo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:a,modifiers:{lazy:n,trim:s,number:o}},r){if(e[sa]=ln(r),e.composing)return;const i=(o||e.type==="number")&&!/^0\d/.test(e.value)?Kn(e.value):e.value,c=t??"";i!==c&&(document.activeElement===e&&e.type!=="range"&&(n&&t===a||s&&e.value.trim()===c)||(e.value=c))}},js={deep:!0,created(e,t,a){e[sa]=ln(a),Vt(e,"change",()=>{const n=e._modelValue,s=id(e),o=e.checked,r=e[sa];if(z(n)){const i=cr(n,s),c=i!==-1;if(o&&!c)r(n.concat(s));else if(!o&&c){const u=[...n];u.splice(i,1),r(u)}}else if(pn(n)){const i=new Set(n);o?i.add(s):i.delete(s),r(i)}else r(_i(e,o))})},mounted:yo,beforeUpdate(e,t,a){e[sa]=ln(a),yo(e,t,a)}};function yo(e,{value:t,oldValue:a},n){e._modelValue=t;let s;if(z(t))s=cr(t,n.props.value)>-1;else if(pn(t))s=t.has(n.props.value);else{if(t===a)return;s=hn(t,_i(e,!0))}e.checked!==s&&(e.checked=s)}function id(e){return"_value"in e?e._value:e.value}function _i(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const cd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Si=(e,t)=>{const a=e._withKeys||(e._withKeys={}),n=t.join(".");return a[n]||(a[n]=(s=>{if(!("key"in s))return;const o=jt(s.key);if(t.some(r=>r===o||cd[r]===o))return e(s)}))},ld=_e({patchProp:sd},Ol);let Co;function dd(){return Co||(Co=il(ld))}const ud=((...e)=>{const t=dd().createApp(...e),{mount:a}=t;return t.mount=n=>{const s=fd(n);if(!s)return;const o=t._component;!G(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=a(s,!1,pd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t});function pd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function fd(e){return xe(e)?document.querySelector(e):e}const we=(e,t)=>{const a=e.__vccOpts||e;for(const[n,s]of t)a[n]=s;return a},vd={class:"header"},md={class:"header-left"},gd={__name:"App",setup(e){return(t,a)=>{const n=oa("router-link"),s=oa("router-view");return Y(),ee("div",null,[l("header",vd,[l("div",md,[ve(n,{to:"/",class:"tolink"},{default:Et(()=>[...a[0]||(a[0]=[l("div",{class:"logo-container"},[l("svg",{class:"logo-svg",fill:"none",viewBox:"0 0 256 198",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M204.8 0H256L128 197.12L0 0H101.12L128 44.48L154.88 0H204.8Z",fill:"#42b883"}),l("path",{d:"M0 0L128 197.12L256 0H204.8L128 123.2L51.2 0H0Z",fill:"#35495e"}),l("path",{d:"M51.2 0L128 123.2L204.8 0H154.88L128 44.48L101.12 0H51.2Z",fill:"#42b883"})]),l("h1",{class:"title"},"Vue.js Manual")],-1)])]),_:1}),a[1]||(a[1]=X('<nav class="nav-links" data-v-3f0f9dbd><a class="nav-link" href="#" data-v-3f0f9dbd>Guide</a><a class="nav-link" href="#" data-v-3f0f9dbd>API</a><a class="nav-link" href="#" data-v-3f0f9dbd>Examples</a><a class="nav-link" href="#" data-v-3f0f9dbd>Ecosystem</a></nav>',1))]),a[2]||(a[2]=X('<div class="header-right" data-v-3f0f9dbd><button class="icon-button" data-v-3f0f9dbd><span class="material-symbols-outlined" data-v-3f0f9dbd>help</span></button><button class="icon-button" data-v-3f0f9dbd><span class="material-symbols-outlined" data-v-3f0f9dbd>dark_mode</span></button><div class="user-avatar-container" data-v-3f0f9dbd><div class="user-avatar" style="background-image:url(&#39;https://lh3.googleusercontent.com/a/ACg8ocJ_6i7a_2l3m-3E0x0v8z-3z0q-5yGg4A3d2D1J8c=s96-c&#39;);" data-v-3f0f9dbd></div></div></div>',1))]),ve(s)])}}},hd=we(gd,[["__scopeId","data-v-3f0f9dbd"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof document<"u";function ki(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ki(e.default)}const ce=Object.assign;function Un(e,t){const a={};for(const n in t){const s=t[n];a[n]=Je(s)?s.map(e):e(s)}return a}const ka=()=>{},Je=Array.isArray,wi=/#/g,yd=/&/g,Cd=/\//g,xd=/=/g,_d=/\?/g,qi=/\+/g,Sd=/%5B/g,kd=/%5D/g,Pi=/%5E/g,wd=/%60/g,Ei=/%7B/g,qd=/%7C/g,Ai=/%7D/g,Pd=/%20/g;function Ts(e){return encodeURI(""+e).replace(qd,"|").replace(Sd,"[").replace(kd,"]")}function Ed(e){return Ts(e).replace(Ei,"{").replace(Ai,"}").replace(Pi,"^")}function is(e){return Ts(e).replace(qi,"%2B").replace(Pd,"+").replace(wi,"%23").replace(yd,"%26").replace(wd,"`").replace(Ei,"{").replace(Ai,"}").replace(Pi,"^")}function Ad(e){return is(e).replace(xd,"%3D")}function Rd(e){return Ts(e).replace(wi,"%23").replace(_d,"%3F")}function jd(e){return e==null?"":Rd(e).replace(Cd,"%2F")}function Ma(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Td=/\/$/,Md=e=>e.replace(Td,"");function zn(e,t,a="/"){let n,s={},o="",r="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(n=t.slice(0,c),o=t.slice(c+1,i>-1?i:t.length),s=e(o)),i>-1&&(n=n||t.slice(0,i),r=t.slice(i,t.length)),n=Od(n??t,a),{fullPath:n+(o&&"?")+o+r,path:n,query:s,hash:Ma(r)}}function Id(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function xo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function $d(e,t,a){const n=t.matched.length-1,s=a.matched.length-1;return n>-1&&n===s&&ra(t.matched[n],a.matched[s])&&Ri(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function ra(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ri(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!Ld(e[a],t[a]))return!1;return!0}function Ld(e,t){return Je(e)?_o(e,t):Je(t)?_o(t,e):e===t}function _o(e,t){return Je(t)?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Od(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),n=e.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let o=a.length-1,r,i;for(r=0;r<n.length;r++)if(i=n[r],i!==".")if(i==="..")o>1&&o--;else break;return a.slice(0,o).join("/")+"/"+n.slice(r).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ia;(function(e){e.pop="pop",e.push="push"})(Ia||(Ia={}));var wa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wa||(wa={}));function Vd(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Md(e)}const Dd=/^[^#]+#/;function Nd(e,t){return e.replace(Dd,"#")+t}function Bd(e,t){const a=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-a.left-(t.left||0),top:n.top-a.top-(t.top||0)}}const Pn=()=>({left:window.scrollX,top:window.scrollY});function Ud(e){let t;if("el"in e){const a=e.el,n=typeof a=="string"&&a.startsWith("#"),s=typeof a=="string"?n?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!s)return;t=Bd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function So(e,t){return(history.state?history.state.position-t:-1)+e}const cs=new Map;function zd(e,t){cs.set(e,t)}function Fd(e){const t=cs.get(e);return cs.delete(e),t}let Hd=()=>location.protocol+"//"+location.host;function ji(e,t){const{pathname:a,search:n,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,c=s.slice(i);return c[0]!=="/"&&(c="/"+c),xo(c,"")}return xo(a,e)+n+s}function Qd(e,t,a,n){let s=[],o=[],r=null;const i=({state:m})=>{const f=ji(e,location),h=a.value,S=t.value;let P=0;if(m){if(a.value=f,t.value=m,r&&r===h){r=null;return}P=S?m.position-S.position:0}else n(f);s.forEach(j=>{j(a.value,h,{delta:P,type:Ia.pop,direction:P?P>0?wa.forward:wa.back:wa.unknown})})};function c(){r=a.value}function u(m){s.push(m);const f=()=>{const h=s.indexOf(m);h>-1&&s.splice(h,1)};return o.push(f),f}function d(){const{history:m}=window;m.state&&m.replaceState(ce({},m.state,{scroll:Pn()}),"")}function p(){for(const m of o)m();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function ko(e,t,a,n=!1,s=!1){return{back:e,current:t,forward:a,replaced:n,position:window.history.length,scroll:s?Pn():null}}function Wd(e){const{history:t,location:a}=window,n={value:ji(e,a)},s={value:t.state};s.value||o(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,u,d){const p=e.indexOf("#"),m=p>-1?(a.host&&document.querySelector("base")?e:e.slice(p))+c:Hd()+e+c;try{t[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(f){console.error(f),a[d?"replace":"assign"](m)}}function r(c,u){const d=ce({},t.state,ko(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});o(c,d,!0),n.value=c}function i(c,u){const d=ce({},s.value,t.state,{forward:c,scroll:Pn()});o(d.current,d,!0);const p=ce({},ko(n.value,c,null),{position:d.position+1},u);o(c,p,!1),n.value=c}return{location:n,state:s,push:i,replace:r}}function Kd(e){e=Vd(e);const t=Wd(e),a=Qd(e,t.state,t.location,t.replace);function n(o,r=!0){r||a.pauseListeners(),history.go(o)}const s=ce({location:"",base:e,go:n,createHref:Nd.bind(null,e)},t,a);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Gd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Kd(e)}function Jd(e){return typeof e=="string"||e&&typeof e=="object"}function Ti(e){return typeof e=="string"||typeof e=="symbol"}const Mi=Symbol("");var wo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wo||(wo={}));function ia(e,t){return ce(new Error,{type:e,[Mi]:!0},t)}function pt(e,t){return e instanceof Error&&Mi in e&&(t==null||!!(e.type&t))}const qo="[^/]+?",Yd={sensitive:!1,strict:!1,start:!0,end:!0},Xd=/[.+*?^${}()[\]/\\]/g;function Zd(e,t){const a=ce({},Yd,t),n=[];let s=a.start?"^":"";const o=[];for(const u of e){const d=u.length?[]:[90];a.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let f=40+(a.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Xd,"\\$&"),f+=40;else if(m.type===1){const{value:h,repeatable:S,optional:P,regexp:j}=m;o.push({name:h,repeatable:S,optional:P});const T=j||qo;if(T!==qo){f+=10;try{new RegExp(`(${T})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${h}" (${T}): `+b.message)}}let A=S?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;p||(A=P&&u.length<2?`(?:/${A})`:"/"+A),P&&(A+="?"),s+=A,f+=20,P&&(f+=-8),S&&(f+=-20),T===".*"&&(f+=-50)}d.push(f)}n.push(d)}if(a.strict&&a.end){const u=n.length-1;n[u][n[u].length-1]+=.7000000000000001}a.strict||(s+="/?"),a.end?s+="$":a.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const r=new RegExp(s,a.sensitive?"":"i");function i(u){const d=u.match(r),p={};if(!d)return null;for(let m=1;m<d.length;m++){const f=d[m]||"",h=o[m-1];p[h.name]=f&&h.repeatable?f.split("/"):f}return p}function c(u){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const f of m)if(f.type===0)d+=f.value;else if(f.type===1){const{value:h,repeatable:S,optional:P}=f,j=h in u?u[h]:"";if(Je(j)&&!S)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const T=Je(j)?j.join("/"):j;if(!T)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${h}"`);d+=T}}return d||"/"}return{re:r,score:n,keys:o,parse:i,stringify:c}}function eu(e,t){let a=0;for(;a<e.length&&a<t.length;){const n=t[a]-e[a];if(n)return n;a++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ii(e,t){let a=0;const n=e.score,s=t.score;for(;a<n.length&&a<s.length;){const o=eu(n[a],s[a]);if(o)return o;a++}if(Math.abs(s.length-n.length)===1){if(Po(n))return 1;if(Po(s))return-1}return s.length-n.length}function Po(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const tu={type:0,value:""},au=/[a-zA-Z0-9_]/;function nu(e){if(!e)return[[]];if(e==="/")return[[tu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${a})/"${u}": ${f}`)}let a=0,n=a;const s=[];let o;function r(){o&&s.push(o),o=[]}let i=0,c,u="",d="";function p(){u&&(a===0?o.push({type:0,value:u}):a===1||a===2||a===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&a!==2){n=a,a=4;continue}switch(a){case 0:c==="/"?(u&&p(),r()):c===":"?(p(),a=1):m();break;case 4:m(),a=n;break;case 1:c==="("?a=2:au.test(c)?m():(p(),a=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:a=3:d+=c;break;case 3:p(),a=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),r(),s}function su(e,t,a){const n=Zd(nu(e.path),a),s=ce(n,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function ou(e,t){const a=[],n=new Map;t=jo({strict:!1,end:!0,sensitive:!1},t);function s(p){return n.get(p)}function o(p,m,f){const h=!f,S=Ao(p);S.aliasOf=f&&f.record;const P=jo(t,p),j=[S];if("alias"in p){const b=typeof p.alias=="string"?[p.alias]:p.alias;for(const q of b)j.push(Ao(ce({},S,{components:f?f.record.components:S.components,path:q,aliasOf:f?f.record:S})))}let T,A;for(const b of j){const{path:q}=b;if(m&&q[0]!=="/"){const K=m.record.path,J=K[K.length-1]==="/"?"":"/";b.path=m.record.path+(q&&J+q)}if(T=su(b,m,P),f?f.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),h&&p.name&&!Ro(T)&&r(p.name)),$i(T)&&c(T),S.children){const K=S.children;for(let J=0;J<K.length;J++)o(K[J],T,f&&f.children[J])}f=f||T}return A?()=>{r(A)}:ka}function r(p){if(Ti(p)){const m=n.get(p);m&&(n.delete(p),a.splice(a.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=a.indexOf(p);m>-1&&(a.splice(m,1),p.record.name&&n.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function i(){return a}function c(p){const m=cu(p,a);a.splice(m,0,p),p.record.name&&!Ro(p)&&n.set(p.record.name,p)}function u(p,m){let f,h={},S,P;if("name"in p&&p.name){if(f=n.get(p.name),!f)throw ia(1,{location:p});P=f.record.name,h=ce(Eo(m.params,f.keys.filter(A=>!A.optional).concat(f.parent?f.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),p.params&&Eo(p.params,f.keys.map(A=>A.name))),S=f.stringify(h)}else if(p.path!=null)S=p.path,f=a.find(A=>A.re.test(S)),f&&(h=f.parse(S),P=f.record.name);else{if(f=m.name?n.get(m.name):a.find(A=>A.re.test(m.path)),!f)throw ia(1,{location:p,currentLocation:m});P=f.record.name,h=ce({},m.params,p.params),S=f.stringify(h)}const j=[];let T=f;for(;T;)j.unshift(T.record),T=T.parent;return{name:P,path:S,params:h,matched:j,meta:iu(j)}}e.forEach(p=>o(p));function d(){a.length=0,n.clear()}return{addRoute:o,resolve:u,removeRoute:r,clearRoutes:d,getRoutes:i,getRecordMatcher:s}}function Eo(e,t){const a={};for(const n of t)n in e&&(a[n]=e[n]);return a}function Ao(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ru(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ru(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const n in e.components)t[n]=typeof a=="object"?a[n]:a;return t}function Ro(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function iu(e){return e.reduce((t,a)=>ce(t,a.meta),{})}function jo(e,t){const a={};for(const n in e)a[n]=n in t?t[n]:e[n];return a}function cu(e,t){let a=0,n=t.length;for(;a!==n;){const o=a+n>>1;Ii(e,t[o])<0?n=o:a=o+1}const s=lu(e);return s&&(n=t.lastIndexOf(s,n-1)),n}function lu(e){let t=e;for(;t=t.parent;)if($i(t)&&Ii(e,t)===0)return t}function $i({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function du(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(qi," "),r=o.indexOf("="),i=Ma(r<0?o:o.slice(0,r)),c=r<0?null:Ma(o.slice(r+1));if(i in t){let u=t[i];Je(u)||(u=t[i]=[u]),u.push(c)}else t[i]=c}return t}function To(e){let t="";for(let a in e){const n=e[a];if(a=Ad(a),n==null){n!==void 0&&(t+=(t.length?"&":"")+a);continue}(Je(n)?n.map(o=>o&&is(o)):[n&&is(n)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+a,o!=null&&(t+="="+o))})}return t}function uu(e){const t={};for(const a in e){const n=e[a];n!==void 0&&(t[a]=Je(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const pu=Symbol(""),Mo=Symbol(""),En=Symbol(""),Li=Symbol(""),ls=Symbol("");function fa(){let e=[];function t(n){return e.push(n),()=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)}}function a(){e=[]}return{add:t,list:()=>e.slice(),reset:a}}function wt(e,t,a,n,s,o=r=>r()){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((i,c)=>{const u=m=>{m===!1?c(ia(4,{from:a,to:t})):m instanceof Error?c(m):Jd(m)?c(ia(2,{from:t,to:m})):(r&&n.enterCallbacks[s]===r&&typeof m=="function"&&r.push(m),i())},d=o(()=>e.call(n&&n.instances[s],t,a,u));let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Fn(e,t,a,n,s=o=>o()){const o=[];for(const r of e)for(const i in r.components){let c=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(ki(c)){const d=(c.__vccOpts||c)[t];d&&o.push(wt(d,a,n,r,i,s))}else{let u=c();o.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${r.path}"`);const p=bd(d)?d.default:d;r.mods[i]=d,r.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&wt(f,a,n,r,i,s)()}))}}return o}function Io(e){const t=rt(En),a=rt(Li),n=Q(()=>{const c=ta(e.to);return t.resolve(c)}),s=Q(()=>{const{matched:c}=n.value,{length:u}=c,d=c[u-1],p=a.matched;if(!d||!p.length)return-1;const m=p.findIndex(ra.bind(null,d));if(m>-1)return m;const f=$o(c[u-2]);return u>1&&$o(d)===f&&p[p.length-1].path!==f?p.findIndex(ra.bind(null,c[u-2])):m}),o=Q(()=>s.value>-1&&hu(a.params,n.value.params)),r=Q(()=>s.value>-1&&s.value===a.matched.length-1&&Ri(a.params,n.value.params));function i(c={}){if(gu(c)){const u=t[ta(e.replace)?"replace":"push"](ta(e.to)).catch(ka);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:n,href:Q(()=>n.value.href),isActive:o,isExactActive:r,navigate:i}}function fu(e){return e.length===1?e[0]:e}const vu=qs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Io,setup(e,{slots:t}){const a=Ut(Io(e)),{options:n}=rt(En),s=Q(()=>({[Lo(e.activeClass,n.linkActiveClass,"router-link-active")]:a.isActive,[Lo(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const o=t.default&&fu(t.default(a));return e.custom?o:Ce("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:s.value},o)}}}),mu=vu;function gu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function hu(e,t){for(const a in t){const n=t[a],s=e[a];if(typeof n=="string"){if(n!==s)return!1}else if(!Je(s)||s.length!==n.length||n.some((o,r)=>o!==s[r]))return!1}return!0}function $o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lo=(e,t,a)=>e??t??a,bu=qs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){const n=rt(ls),s=Q(()=>e.route||n.value),o=rt(Mo,0),r=Q(()=>{let u=ta(o);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),i=Q(()=>s.value.matched[r.value]);Ga(Mo,Q(()=>r.value+1)),Ga(pu,i),Ga(ls,s);const c=U();return _a(()=>[c.value,i.value,e.name],([u,d,p],[m,f,h])=>{d&&(d.instances[p]=u,f&&f!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),u&&d&&(!f||!ra(d,f)||!m)&&(d.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,d=e.name,p=i.value,m=p&&p.components[d];if(!m)return Oo(a.default,{Component:m,route:u});const f=p.props[d],h=f?f===!0?u.params:typeof f=="function"?f(u):f:null,P=Ce(m,ce({},h,t,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Oo(a.default,{Component:P,route:u})||P}}});function Oo(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const yu=bu;function Cu(e){const t=ou(e.routes,e),a=e.parseQuery||du,n=e.stringifyQuery||To,s=e.history,o=fa(),r=fa(),i=fa(),c=Pc(_t);let u=_t;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Un.bind(null,_=>""+_),p=Un.bind(null,jd),m=Un.bind(null,Ma);function f(_,D){let $,N;return Ti(_)?($=t.getRecordMatcher(_),N=D):N=_,t.addRoute(N,$)}function h(_){const D=t.getRecordMatcher(_);D&&t.removeRoute(D)}function S(){return t.getRoutes().map(_=>_.record)}function P(_){return!!t.getRecordMatcher(_)}function j(_,D){if(D=ce({},D||c.value),typeof _=="string"){const y=zn(a,_,D.path),x=t.resolve({path:y.path},D),k=s.createHref(y.fullPath);return ce(y,x,{params:m(x.params),hash:Ma(y.hash),redirectedFrom:void 0,href:k})}let $;if(_.path!=null)$=ce({},_,{path:zn(a,_.path,D.path).path});else{const y=ce({},_.params);for(const x in y)y[x]==null&&delete y[x];$=ce({},_,{params:p(y)}),D.params=p(D.params)}const N=t.resolve($,D),pe=_.hash||"";N.params=d(m(N.params));const v=Id(n,ce({},_,{hash:Ed(pe),path:N.path})),g=s.createHref(v);return ce({fullPath:v,hash:pe,query:n===To?uu(_.query):_.query||{}},N,{redirectedFrom:void 0,href:g})}function T(_){return typeof _=="string"?zn(a,_,c.value.path):ce({},_)}function A(_,D){if(u!==_)return ia(8,{from:D,to:_})}function b(_){return J(_)}function q(_){return b(ce(T(_),{replace:!0}))}function K(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:$}=D;let N=typeof $=="function"?$(_):$;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=T(N):{path:N},N.params={}),ce({query:_.query,hash:_.hash,params:N.path!=null?{}:_.params},N)}}function J(_,D){const $=u=j(_),N=c.value,pe=_.state,v=_.force,g=_.replace===!0,y=K($);if(y)return J(ce(T(y),{state:typeof y=="object"?ce({},pe,y.state):pe,force:v,replace:g}),D||$);const x=$;x.redirectedFrom=D;let k;return!v&&$d(n,N,$)&&(k=ia(16,{to:x,from:N}),Ye(N,N,!0,!1)),(k?Promise.resolve(k):ae(x,N)).catch(C=>pt(C)?pt(C,2)?C:Ct(C):ie(C,x,N)).then(C=>{if(C){if(pt(C,2))return J(ce({replace:g},T(C.to),{state:typeof C.to=="object"?ce({},pe,C.to.state):pe,force:v}),D||x)}else C=O(x,N,!0,g,pe);return te(x,N,C),C})}function ge(_,D){const $=A(_,D);return $?Promise.reject($):Promise.resolve()}function F(_){const D=Ft.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(_):_()}function ae(_,D){let $;const[N,pe,v]=xu(_,D);$=Fn(N.reverse(),"beforeRouteLeave",_,D);for(const y of N)y.leaveGuards.forEach(x=>{$.push(wt(x,_,D))});const g=ge.bind(null,_,D);return $.push(g),Ue($).then(()=>{$=[];for(const y of o.list())$.push(wt(y,_,D));return $.push(g),Ue($)}).then(()=>{$=Fn(pe,"beforeRouteUpdate",_,D);for(const y of pe)y.updateGuards.forEach(x=>{$.push(wt(x,_,D))});return $.push(g),Ue($)}).then(()=>{$=[];for(const y of v)if(y.beforeEnter)if(Je(y.beforeEnter))for(const x of y.beforeEnter)$.push(wt(x,_,D));else $.push(wt(y.beforeEnter,_,D));return $.push(g),Ue($)}).then(()=>(_.matched.forEach(y=>y.enterCallbacks={}),$=Fn(v,"beforeRouteEnter",_,D,F),$.push(g),Ue($))).then(()=>{$=[];for(const y of r.list())$.push(wt(y,_,D));return $.push(g),Ue($)}).catch(y=>pt(y,8)?y:Promise.reject(y))}function te(_,D,$){i.list().forEach(N=>F(()=>N(_,D,$)))}function O(_,D,$,N,pe){const v=A(_,D);if(v)return v;const g=D===_t,y=Yt?history.state:{};$&&(N||g?s.replace(_.fullPath,ce({scroll:g&&y&&y.scroll},pe)):s.push(_.fullPath,pe)),c.value=_,Ye(_,D,$,g),Ct()}let ne;function V(){ne||(ne=s.listen((_,D,$)=>{if(!Ua.listening)return;const N=j(_),pe=K(N);if(pe){J(ce(pe,{replace:!0,force:!0}),N).catch(ka);return}u=N;const v=c.value;Yt&&zd(So(v.fullPath,$.delta),Pn()),ae(N,v).catch(g=>pt(g,12)?g:pt(g,2)?(J(ce(T(g.to),{force:!0}),N).then(y=>{pt(y,20)&&!$.delta&&$.type===Ia.pop&&s.go(-1,!1)}).catch(ka),Promise.reject()):($.delta&&s.go(-$.delta,!1),ie(g,N,v))).then(g=>{g=g||O(N,v,!1),g&&($.delta&&!pt(g,8)?s.go(-$.delta,!1):$.type===Ia.pop&&pt(g,20)&&s.go(-1,!1)),te(N,v,g)}).catch(ka)}))}let se=fa(),he=fa(),ue;function ie(_,D,$){Ct(_);const N=he.list();return N.length?N.forEach(pe=>pe(_,D,$)):console.error(_),Promise.reject(_)}function lt(){return ue&&c.value!==_t?Promise.resolve():new Promise((_,D)=>{se.add([_,D])})}function Ct(_){return ue||(ue=!_,V(),se.list().forEach(([D,$])=>_?$(_):D()),se.reset()),_}function Ye(_,D,$,N){const{scrollBehavior:pe}=e;if(!Yt||!pe)return Promise.resolve();const v=!$&&Fd(So(_.fullPath,0))||(N||!$)&&history.state&&history.state.scroll||null;return jr().then(()=>pe(_,D,v)).then(g=>g&&Ud(g)).catch(g=>ie(g,_,D))}const Ie=_=>s.go(_);let zt;const Ft=new Set,Ua={currentRoute:c,listening:!0,addRoute:f,removeRoute:h,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:S,resolve:j,options:e,push:b,replace:q,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:r.add,afterEach:i.add,onError:he.add,isReady:lt,install(_){const D=this;_.component("RouterLink",mu),_.component("RouterView",yu),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ta(c)}),Yt&&!zt&&c.value===_t&&(zt=!0,b(s.location).catch(pe=>{}));const $={};for(const pe in _t)Object.defineProperty($,pe,{get:()=>c.value[pe],enumerable:!0});_.provide(En,D),_.provide(Li,qr($)),_.provide(ls,c);const N=_.unmount;Ft.add(_),_.unmount=function(){Ft.delete(_),Ft.size<1&&(u=_t,ne&&ne(),ne=null,c.value=_t,zt=!1,ue=!1),N()}}};function Ue(_){return _.reduce((D,$)=>D.then(()=>F($)),Promise.resolve())}return Ua}function xu(e,t){const a=[],n=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const i=t.matched[r];i&&(e.matched.find(u=>ra(u,i))?n.push(i):a.push(i));const c=e.matched[r];c&&(t.matched.find(u=>ra(u,c))||s.push(c))}return[a,n,s]}function _u(){return rt(En)}const Su={class:"page-container"},ku={class:"main-content"},wu={class:"container"},qu={class:"cards-grid"},Pu={class:"material-symbols-outlined"},Eu={class:"card-title"},Au={class:"card-description"},Ru={__name:"topics",setup(e){const t=U([{title:"Que es vue",description:"Breve repaso de vue",icon:"auto_stories",colorClass:"color-green",tolink:"/whatIs"},{title:"Requisitos",description:"Que necesito para usar vue",icon:"code",colorClass:"color-blue",tolink:"/requirements"},{title:"Creacion de Proyecto",description:"Building blocks.",icon:"layers",colorClass:"color-purple",tolink:"/createProject"},{title:"Interpolacion",description:"The magic behind Vue.",icon:"psychology",colorClass:"color-yellow",tolink:"/interpolation"},{title:"Directivas de vue",description:"Out-of-the-box power.",icon:"view_cozy",colorClass:"color-red",tolink:"/directivesVue"},{title:"Options Api",description:"Declarative rendering.",icon:"terminal",colorClass:"color-indigo",tolink:"/optionsApi"},{title:"Composition api",description:"Detailed docs.",icon:"api",colorClass:"color-pink",tolink:"/compositionApi"},{title:"Ciclo de vida de vue",description:"See it in action.",icon:"integration_instructions",colorClass:"color-gray",tolink:"/cicleOfLife"},{title:"Componentes importacion",description:"Tools and libraries.",icon:"group_work",colorClass:"color-teal",tolink:"/importComponents"},{title:"Componetizacion Props",description:"From older versions.",icon:"upgrade",colorClass:"color-orange",tolink:"/props"},{title:"Creación de un proyecto template quasar",description:"Write better code.",icon:"thumb_up",colorClass:"color-cyan",tolink:"/templateQuasar"},{title:"Instalar Quasar en un proyecto ya creado",description:"Solve common issues.",icon:"build",colorClass:"color-lime",tolink:"/templateQuasarInstall"},{title:"Vue router",description:"Solve common issues.",icon:"route",colorClass:"color-red",tolink:"/vueRouter"},{title:"Pinia",description:"Solve common issues.",icon:"indeterminate_check_box",colorClass:"color-teal",tolink:"/pinia"},{title:"Pinia-plugin-presistedstate",description:"Solve common issues.",icon:"extension",colorClass:"color-indigo",tolink:"/piniaplugin"}]);return(a,n)=>{const s=oa("router-link");return Y(),ee("div",Su,[l("main",ku,[l("div",wu,[n[0]||(n[0]=l("div",{class:"hero-section"},[l("h1",{class:"hero-title"},"Vue.js Manual"),l("p",{class:"hero-subtitle"}," Your comprehensive guide to building amazing web applications with Vue.js. ")],-1)),l("div",qu,[(Y(!0),ee(Ee,null,ca(t.value,o=>(Y(),ee("a",{key:o.title,class:"card"},[l("div",{class:ot(["card-icon-wrapper",o.colorClass])},[l("span",Pu,M(o.icon),1)],2),ve(s,{class:"tolink",to:o.tolink},{default:Et(()=>[l("div",null,[l("h2",Eu,M(o.title),1),l("p",Au,M(o.description),1)])]),_:2},1032,["to"])]))),128))])])])])}}},ju=we(Ru,[["__scopeId","data-v-550eae3b"]]),Tu={},Mu={class:"father"};function Iu(e,t){return Y(),ee("div",Mu,[...t[0]||(t[0]=[X('<section class="content" data-v-a4b06292><h1 class="title" data-v-a4b06292>¿Qué es Vue?</h1><p class="p" data-v-a4b06292> La palabra <strong data-v-a4b06292>Vue</strong> (pronunciado «viú») viene del francés y significa «view» (vista), la parte de la aplicación que los usuarios ven e interactúan. </p> --- <h2 class="subtitle" data-v-a4b06292>Vue: Un framework frontend</h2><p class="p" data-v-a4b06292> Vue.js es un <strong data-v-a4b06292>framework de JavaScript</strong> para el **frontend**. En términos sencillos, es una herramienta que nos ayuda a crear la parte visual de una página web de manera organizada y eficiente. A diferencia de un sitio web tradicional, las aplicaciones construidas con Vue se conocen como <strong data-v-a4b06292>SPA</strong> (Single Page Application), que significa que toda la aplicación se carga en una sola página, ofreciendo una experiencia rápida y fluida sin recargar el navegador. </p><p class="p" data-v-a4b06292> Una de las características más importantes de Vue es que es un <strong data-v-a4b06292>framework progresivo</strong>. Esto significa que puedes usarlo para proyectos pequeños, como añadir una funcionalidad interactiva a una página ya existente, o para construir aplicaciones web a gran escala. Vue es muy flexible y se adapta a tus necesidades. </p> --- <h2 class="subtitle" data-v-a4b06292>¿Por qué usar Vue para empezar?</h2><p class="p" data-v-a4b06292> Vue se ha vuelto muy popular para los principiantes por varias razones: </p><ul data-v-a4b06292><li class="p" data-v-a4b06292><strong data-v-a4b06292>Curva de Aprendizaje Sencilla:</strong> Es fácil de entender desde el principio, especialmente si ya sabes algo de HTML, CSS y JavaScript. </li><li class="p" data-v-a4b06292><strong data-v-a4b06292>Rendimiento:</strong> Vue es ligero y rápido, lo que hace que las aplicaciones se sientan ágiles y responsivas. </li><li class="p" data-v-a4b06292><strong data-v-a4b06292>Comunidad y Documentación:</strong> Tiene una comunidad activa y una documentación oficial excelente, lo que facilita encontrar ayuda y recursos. </li></ul></section>',1)])])}const $u=we(Tu,[["render",Iu],["__scopeId","data-v-a4b06292"]]),Lu={},Ou={class:"father"};function Vu(e,t){return Y(),ee("div",Ou,[...t[0]||(t[0]=[X('<section class="content" data-v-6c1fa768><h1 class="title" data-v-6c1fa768>Requisitos para tu Proyecto en Vue 3</h1><p class="p" data-v-6c1fa768> Para empezar a desarrollar con Vue, solo necesitas dos cosas principales: un entorno de desarrollo con las herramientas correctas y un buen editor de código. A continuación, te explicamos qué necesitas y por qué. </p> --- <h2 class="subtitle" data-v-6c1fa768>1. Node.js y NPM</h2><p class="p" data-v-6c1fa768> El requisito fundamental es tener **Node.js** instalado. Node.js es un entorno que permite ejecutar JavaScript fuera del navegador, lo cual es vital para Vue. Al instalarlo, se incluye automáticamente **NPM** (Node Package Manager), que es el gestor de paquetes que usaremos para instalar Vue y todas las librerías necesarias para nuestro proyecto. </p><p class="p" data-v-6c1fa768> Puedes verificar si ya los tienes instalados abriendo tu terminal y ejecutando los siguientes comandos. Si ves un número de versión, estás listo. </p><article class="code" data-v-6c1fa768><div data-v-6c1fa768><p class="p" data-v-6c1fa768>node -v</p></div></article><article class="code" data-v-6c1fa768><div data-v-6c1fa768><p class="p" data-v-6c1fa768>npm -v</p></div></article><p class="p" data-v-6c1fa768> Si alguno de estos comandos no funciona, significa que necesitas instalar Node.js. Puedes descargarlo desde su página web oficial. </p><h2 class="subtitle" data-v-6c1fa768>2. Editor de Código</h2><p class="p" data-v-6c1fa768> Se recomienda encarecidamente usar un editor de código moderno como **Visual Studio Code**. Es gratuito, tiene muchas funciones y es el editor estándar en la comunidad de Vue. </p><p class="p" data-v-6c1fa768> Además, instala la extensión **Volar** para Vue. Volar mejora tu experiencia de desarrollo ofreciéndote: </p><ul data-v-6c1fa768><li class="p" data-v-6c1fa768><strong data-v-6c1fa768>Resaltado de sintaxis:</strong> Para ver tu código con colores que facilitan la lectura. </li><li class="p" data-v-6c1fa768><strong data-v-6c1fa768>Autocompletado inteligente:</strong> Te sugiere código mientras escribes, ahorrándote tiempo y evitando errores. </li><li class="p" data-v-6c1fa768><strong data-v-6c1fa768>Análisis de errores:</strong> Te avisa sobre posibles errores en tu código en tiempo real. </li></ul><p class="p" data-v-6c1fa768> Con Node.js, NPM, un buen editor y la extensión Volar, tendrás todo lo que necesitas para comenzar tu viaje con Vue. </p></section>',1)])])}const Du=we(Lu,[["render",Vu],["__scopeId","data-v-6c1fa768"]]),Nu={class:"father"},Bu={__name:"createProject",setup(e){return(t,a)=>(Y(),ee("div",Nu,[...a[0]||(a[0]=[X('<section class="content" data-v-7a5c8004><h1 class="title" data-v-7a5c8004>Crear un Proyecto en Vue 3</h1><p class="p" data-v-7a5c8004> Para iniciar un nuevo proyecto en Vue 3, la forma más rápida y recomendada es usar <strong data-v-7a5c8004>Vite</strong>, una herramienta de compilación moderna que ofrece una experiencia de desarrollo ultrarrápida. Usaremos el comando <code data-v-7a5c8004>npm create vite@latest</code> para generar la estructura inicial del proyecto. </p><hr data-v-7a5c8004><h2 class="subtitle" data-v-7a5c8004>¿Cómo funciona?</h2><p class="p" data-v-7a5c8004> Al ejecutar este comando en tu terminal, se iniciará un asistente interactivo que te guiará paso a paso para configurar tu proyecto. Podrás elegir el <strong data-v-7a5c8004>nombre</strong> de tu proyecto, seleccionar <strong data-v-7a5c8004>Vue</strong> como framework y escoger una variante, como JavaScript o TypeScript. </p><div class="code-block" data-v-7a5c8004><h3 class="code-title" data-v-7a5c8004>Opciones de Configuración</h3><p class="p" data-v-7a5c8004> Durante la configuración, el asistente te mostrará una lista completa de frameworks. Puedes elegir el que prefieras a tu gusto, aunque para este tutorial nos enfocaremos en <strong data-v-7a5c8004>Vue</strong> con <strong data-v-7a5c8004>JavaScript</strong>. </p><article class="code" data-v-7a5c8004><div data-v-7a5c8004><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># Elige tu framework preferido...</span></p><p class="p-code" data-v-7a5c8004><span style="color:#22c55e;" data-v-7a5c8004>✔</span><span style="color:#e5e7eb;" data-v-7a5c8004> Select a framework: </span><span style="color:#8b949e;" data-v-7a5c8004>… Vue</span></p><div class="pl-4" data-v-7a5c8004><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Vanilla</p><p class="p-code" style="color:#42b883;" data-v-7a5c8004>❯ Vue</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>React</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Preact</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Lit</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Svelte</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Solid</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Qwik</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>Others</p></div><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># ...y después una variante (JavaScript o TypeScript).</span></p><p class="p-code" data-v-7a5c8004><span style="color:#22c55e;" data-v-7a5c8004>✔</span><span style="color:#e5e7eb;" data-v-7a5c8004> Select a variant: </span><span style="color:#8b949e;" data-v-7a5c8004>… JavaScript</span></p><div class="pl-4" data-v-7a5c8004><p class="p-code" style="color:#42b883;" data-v-7a5c8004>❯ JavaScript</p><p class="p-code" style="color:#8b949e;" data-v-7a5c8004>TypeScript</p></div></div></article></div><hr data-v-7a5c8004><h2 class="subtitle" data-v-7a5c8004>Proceso Completo de Creación</h2><p class="p" data-v-7a5c8004> Cuando ejecutes el comando, verás un proceso interactivo completo con todas las opciones disponibles. Aquí te mostramos cómo se ve típicamente el flujo completo: </p><div class="code-block" data-v-7a5c8004><h3 class="code-title" data-v-7a5c8004>Flujo Completo en Terminal</h3><article class="code" data-v-7a5c8004><div data-v-7a5c8004><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>&gt; proyecto@1.0.0 npx</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>&gt; create-vite</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Project name:</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>mi-proyecto-vue</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Select a framework:</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>Vue</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Select a variant:</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>JavaScript</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Use rolldown-vite (Experimental):</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>No</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Install with npm and start now?</span></p><p class="p-code" data-v-7a5c8004><span style="color:#e5e7eb;" data-v-7a5c8004>Yes</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Scaffolding project in /ruta/de/tu/proyecto/mi-proyecto-vue...</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>Installing dependencies with npm...</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>done.</span></p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004>¡Proyecto creado exitosamente! 🎉</span></p></div></article></div><div class="example" data-v-7a5c8004><h3 class="example-title" data-v-7a5c8004>💡 Nota Importante</h3><p class="p" data-v-7a5c8004> El asistente te preguntará si quieres instalar las dependencias inmediatamente. Si seleccionas &quot;Yes&quot;, Vite automáticamente ejecutará <code data-v-7a5c8004>npm install</code> por ti. Si seleccionas &quot;No&quot;, deberás instalar las dependencias manualmente después. </p></div><hr data-v-7a5c8004><h2 class="subtitle" data-v-7a5c8004>Ejemplo Práctico</h2><p class="p" data-v-7a5c8004> A continuación, te mostramos los comandos y los pasos que debes seguir en tu terminal para crear e iniciar tu nuevo proyecto Vue. </p><div class="example" data-v-7a5c8004><h3 class="example-title" data-v-7a5c8004>Proceso en la Terminal</h3><p class="p" data-v-7a5c8004> Sigue estos tres sencillos pasos para tener tu proyecto funcionando en minutos. </p></div><div class="code-block" data-v-7a5c8004><h3 class="code-title" data-v-7a5c8004>Comandos</h3><p class="p" data-v-7a5c8004> Estos son los comandos que necesitas ejecutar en orden. </p><article class="code" data-v-7a5c8004><div data-v-7a5c8004><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 1. Ejecuta el comando de creación y sigue las instrucciones</span></p><p class="p-code" data-v-7a5c8004>npm create vite@latest</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 2. Navega al directorio de tu nuevo proyecto</span></p><p class="p-code" data-v-7a5c8004>cd mi-proyecto-vue</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 3. Instala las dependencias necesarias (si no lo hiciste automáticamente)</span></p><p class="p-code" data-v-7a5c8004>npm install</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 4. Inicia el servidor de desarrollo</span></p><p class="p-code" data-v-7a5c8004>npm run dev</p><p class="p-code" data-v-7a5c8004></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># 5. Abre tu navegador en la URL que aparece en la terminal</span></p><p class="p-code" data-v-7a5c8004><span style="color:#8b949e;" data-v-7a5c8004># Normalmente: http://localhost:5173</span></p></div></article></div><div class="example" data-v-7a5c8004><h3 class="example-title" data-v-7a5c8004>✅ Listo para Empezar</h3><p class="p" data-v-7a5c8004> Una vez que completes estos pasos, tendrás un proyecto Vue 3 completamente funcional con hot-reload, build optimizado y todas las características modernas de Vite. ¡Ahora puedes comenzar a desarrollar tu aplicación! </p></div></section>',1)])]))}},Uu=we(Bu,[["__scopeId","data-v-7a5c8004"]]),zu={class:"father"},Fu={class:"content"},Hu={class:"p"},Qu={class:"example"},Wu={class:"p"},Ku={__name:"interpolation",setup(e){const t=U("Hola, soy un valor interpolado!");return(a,n)=>(Y(),ee("div",zu,[l("section",Fu,[n[6]||(n[6]=l("h1",{class:"title"},"Interpolación",-1)),l("p",Hu,[n[0]||(n[0]=Z(" La interpolación es la forma más sencilla y común de mostrar datos dinámicos en la interfaz de usuario de Vue. Usamos la sintaxis de ",-1)),n[1]||(n[1]=l("strong",null,"doble bigote",-1)),n[2]||(n[2]=Z(" (",-1)),l("code",null,M(),1),n[3]||(n[3]=Z(") para incrustar valores directamente en la plantilla HTML. ",-1))]),n[7]||(n[7]=l("hr",null,null,-1)),n[8]||(n[8]=l("h2",{class:"subtitle"},"¿Cómo funciona?",-1)),n[9]||(n[9]=l("p",{class:"p"},[Z(" Cuando Vue procesa tu plantilla, reemplaza la expresión dentro de los bigotes con el valor de la propiedad correspondiente. La clave de la interpolación es su "),l("strong",null,"reactividad"),Z(": si el valor de la variable cambia en tu script, la vista se actualizará de forma automática, sin que necesites hacer nada. ")],-1)),n[10]||(n[10]=l("hr",null,null,-1)),n[11]||(n[11]=l("h2",{class:"subtitle"},"Ejemplo Práctico",-1)),n[12]||(n[12]=l("p",{class:"p"}," A continuación, te mostramos cómo la variable `mensaje` se inserta directamente en la plantilla. ",-1)),l("div",Qu,[n[5]||(n[5]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",Wu,[n[4]||(n[4]=Z(" Mensaje: ",-1)),l("strong",null,M(t.value),1)])]),n[13]||(n[13]=l("div",{class:"code-block"},[l("h3",{class:"code-title"},"Código"),l("p",{class:"p"}," Así es como se vería el código en tu archivo `.vue`: "),l("pre",{class:"code"},[l("code",null,`
<template>
  <p>Mensaje: <strong> {{mensaje}} </strong></p>
</template>

<script setup>
import { ref } from 'vue';
const mensaje = ref('Hola, soy un valor interpolado!');
<\/script>
        `)])],-1))])]))}},Gu=we(Ku,[["__scopeId","data-v-eb8a5b80"]]),Ju={class:"father"},Yu={class:"content"},Xu={class:"example"},Zu=["textContent"],ep={class:"example"},tp=["innerHTML"],ap={class:"example"},np={class:"p"},sp={class:"p"},op={class:"code-block"},rp={class:"code"},ip={class:"example"},cp={class:"p"},lp={class:"p"},dp={class:"example"},up={class:"p"},pp={key:0,class:"p"},fp={key:1,class:"p"},vp={key:2,class:"p"},mp={class:"code-block"},gp={class:"code"},hp={class:"example"},bp={class:"code-block"},yp={class:"code"},Cp={class:"example"},xp={class:"p"},_p={class:"p"},Sp=["disabled"],kp={class:"code-block"},wp={class:"code"},qp={class:"example"},Pp={class:"p"},Ep={class:"p"},Ap={class:"p"},Rp={class:"p"},jp={class:"code-block"},Tp={class:"code"},Mp={class:"code-block"},Ip={class:"code"},$p={class:"example"},Lp={class:"p"},Op={class:"p"},Vp={class:"code-block"},Dp={class:"code"},Np={__name:"directivesVue",setup(e){const t=U("¡Hola desde v-text!"),a=U("<strong>Texto en negrita</strong> con <em>énfasis</em>"),n=U(!0),s=U("activo"),o=U(["Aprender Vue.js","Practicar directivas","Crear una aplicación"]),r=U(0),i=U(""),c=Q(()=>i.value||"black"),u=U(""),d=U(!1),p=U(0);function m(){s.value=s.value==="activo"?"inactivo":"activo"}return(f,h)=>(Y(),ee("div",Ju,[l("section",Yu,[h[25]||(h[25]=X('<h1 class="title" data-v-100ce31c>Directivas de Vue</h1><p class="p" data-v-100ce31c> Las directivas son instrucciones especiales en el DOM que Vue.js utiliza para aplicar comportamientos reactivos a los elementos. Se reconocen por el prefijo <code data-v-100ce31c>v-</code> y son una parte fundamental del poder de Vue. </p><hr data-v-100ce31c><h2 class="subtitle" data-v-100ce31c>Directivas Básicas</h2><p class="p" data-v-100ce31c> Vue incluye un conjunto de directivas integradas que cubren los casos de uso más comunes en el desarrollo de aplicaciones. </p><h3 class="subtitle-sm" data-v-100ce31c>v-text</h3><p class="p" data-v-100ce31c> Actualiza el <code data-v-100ce31c>textContent</code> del elemento. Similar a la interpolación pero reemplaza todo el contenido. </p>',7)),l("div",Xu,[h[8]||(h[8]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",{class:"p",textContent:M(t.value)},null,8,Zu)]),h[26]||(h[26]=X(`<div class="code-block" data-v-100ce31c><h3 class="code-title" data-v-100ce31c>Código</h3><article class="code" data-v-100ce31c><pre data-v-100ce31c><code data-v-100ce31c>&lt;template&gt;
  &lt;p v-text=&quot;mensaje&quot;&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
const mensaje = ref(&#39;¡Hola desde v-text!&#39;);
&lt;/script&gt;</code></pre></article></div><h3 class="subtitle-sm" data-v-100ce31c>v-html</h3><p class="p" data-v-100ce31c> Actualiza el <code data-v-100ce31c>innerHTML</code> del elemento. Úsalo con precaución ya que puede exponerte a ataques XSS. </p>`,3)),l("div",ep,[h[9]||(h[9]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",{class:"p",innerHTML:a.value},null,8,tp)]),h[27]||(h[27]=X(`<div class="code-block" data-v-100ce31c><h3 class="code-title" data-v-100ce31c>Código</h3><article class="code" data-v-100ce31c><pre data-v-100ce31c><code data-v-100ce31c>&lt;template&gt;
  &lt;p v-html=&quot;htmlContent&quot;&gt;&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
const htmlContent = ref(&#39;&lt;strong&gt;Texto en negrita&lt;/strong&gt; con &lt;em&gt;énfasis&lt;/em&gt;&#39;);
&lt;/script&gt;</code></pre></article></div><h3 class="subtitle-sm" data-v-100ce31c>v-on</h3><p class="p" data-v-100ce31c> Escucha eventos del DOM y ejecuta algún código cuando son disparados. Se puede usar la forma abreviada <code data-v-100ce31c>@</code>. </p>`,3)),l("div",ap,[h[10]||(h[10]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",np,[l("button",{onClick:h[0]||(h[0]=S=>r.value++),class:"demo-button"}," Incrementar (v-on:click) "),l("button",{onClick:h[1]||(h[1]=S=>r.value--),class:"demo-button"}," Decrementar (@click) ")]),l("p",sp,"Contador: "+M(r.value),1)]),l("div",op,[h[11]||(h[11]=l("h3",{class:"code-title"},"Código",-1)),l("article",rp,[l("pre",null,[l("code",null,`<template>
  <button v-on:click="contador++">Incrementar (v-on:click)</button>
  <button @click="contador--">Decrementar (@click)</button>
  <p>Contador: `+M(r.value)+`</p>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);
<\/script>`,1)])])]),h[28]||(h[28]=l("h3",{class:"subtitle-sm"},"v-show",-1)),h[29]||(h[29]=l("p",{class:"p"},[Z(" Alterna la visibilidad del elemento usando CSS ("),l("code",null,"display: none"),Z("). El elemento siempre se renderiza en el DOM. ")],-1)),l("div",ip,[h[12]||(h[12]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",cp,[l("button",{onClick:h[2]||(h[2]=S=>n.value=!n.value),class:"demo-button"}," Alternar visibilidad ")]),Se(l("p",lp,"¡Este elemento se muestra u oculta!",512),[[Ql,n.value]])]),h[30]||(h[30]=X(`<div class="code-block" data-v-100ce31c><h3 class="code-title" data-v-100ce31c>Código</h3><article class="code" data-v-100ce31c><pre data-v-100ce31c><code data-v-100ce31c>&lt;template&gt;
  &lt;button @click=&quot;mostrar = !mostrar&quot;&gt;Alternar visibilidad&lt;/button&gt;
  &lt;p v-show=&quot;mostrar&quot;&gt;¡Este elemento se muestra u oculta!&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
const mostrar = ref(true);
&lt;/script&gt;</code></pre></article></div><h3 class="subtitle-sm" data-v-100ce31c>v-if, v-else-if, v-else</h3><p class="p" data-v-100ce31c> Renderiza condicionalmente un elemento basado en la veracidad de una expresión. A diferencia de v-show, estos elementos no se renderizan en el DOM si la condición es falsa. </p>`,3)),l("div",dp,[h[13]||(h[13]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",up,[l("button",{onClick:m,class:"demo-button"}," Cambiar estado ("+M(s.value)+") ",1)]),s.value==="activo"?(Y(),ee("p",pp,"El sistema está ACTIVO")):s.value==="inactivo"?(Y(),ee("p",fp," El sistema está INACTIVO ")):(Y(),ee("p",vp,"Estado desconocido"))]),l("div",mp,[h[14]||(h[14]=l("h3",{class:"code-title"},"Código",-1)),l("article",gp,[l("pre",null,[l("code",null,`<template>
  <button @click="cambiarEstado">Cambiar estado (`+M(s.value)+`)</button>
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
<\/script>`,1)])])]),h[31]||(h[31]=l("h3",{class:"subtitle-sm"},"v-for",-1)),h[32]||(h[32]=l("p",{class:"p"}," Renderiza una lista de elementos basados en un array u objeto. Es la forma de hacer bucles en las plantillas de Vue. ",-1)),l("div",hp,[h[15]||(h[15]=l("h3",{class:"example-title"},"Resultado",-1)),l("ul",null,[(Y(!0),ee(Ee,null,ca(o.value,(S,P)=>(Y(),ee("li",{key:P,class:"p"},M(P+1)+". "+M(S),1))),128))])]),l("div",bp,[h[16]||(h[16]=l("h3",{class:"code-title"},"Código",-1)),l("article",yp,[l("pre",null,[l("code",null,`<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      `+M(f.index+1)+". "+M(f.tarea)+`
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
<\/script>`,1)])])]),h[33]||(h[33]=l("h3",{class:"subtitle-sm"},"v-bind",-1)),h[34]||(h[34]=l("p",{class:"p"},[Z(" Enlaza dinámicamente uno o más atributos, o una prop de componente a una expresión. Se puede usar la forma abreviada "),l("code",null,":"),Z(". ")],-1)),l("div",Cp,[h[17]||(h[17]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",xp,[Se(l("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=S=>i.value=S),placeholder:"Escribe un color"},null,512),[[He,i.value]])]),l("p",{class:"p",style:gn({color:c.value})}," Este texto cambiará de color según tu entrada: "+M(i.value),5),l("p",_p,[l("button",{disabled:!i.value,class:"demo-button"}," Botón "+M(i.value?"habilitado":"deshabilitado"),9,Sp)])]),l("div",kp,[h[18]||(h[18]=l("h3",{class:"code-title"},"Código",-1)),l("article",wp,[l("pre",null,[l("code",null,`<template>
  <input type="text" v-model="colorFavorito" placeholder="Escribe un color">
  <p :style="{ color: colorTexto }">
    Este texto cambiará de color según tu entrada: `+M(i.value)+`
  </p>
  <button :disabled="!colorFavorito">
    Botón `+M(i.value?"habilitado":"deshabilitado")+`
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';
const colorFavorito = ref('');
const colorTexto = computed(() => {
  return colorFavorito.value || 'black';
});
<\/script>`,1)])])]),h[35]||(h[35]=l("h3",{class:"subtitle-sm"},"v-model",-1)),h[36]||(h[36]=l("p",{class:"p"},' Crea un enlace bidireccional entre un elemento de formulario y el estado de la aplicación. Es la forma de implementar "two-way binding" en Vue. ',-1)),l("div",qp,[h[20]||(h[20]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",Pp,[Se(l("input",{type:"text","onUpdate:modelValue":h[4]||(h[4]=S=>u.value=S),placeholder:"Escribe tu nombre"},null,512),[[He,u.value]])]),l("p",Ep,"Hola, "+M(u.value||"desconocido")+"!",1),l("p",Ap,[Se(l("input",{type:"checkbox","onUpdate:modelValue":h[5]||(h[5]=S=>d.value=S),id:"aceptar"},null,512),[[js,d.value]]),h[19]||(h[19]=l("label",{for:"aceptar"},"Acepto los términos",-1))]),l("p",Rp,"Estado: "+M(d.value?"Aceptado":"No aceptado"),1)]),l("div",jp,[h[21]||(h[21]=l("h3",{class:"code-title"},"Código",-1)),l("article",Tp,[l("pre",null,[l("code",null,`<template>
  <input type="text" v-model="nombre" placeholder="Escribe tu nombre">
  <p>Hola, `+M(u.value||"desconocido")+`!</p>
  <input type="checkbox" v-model="aceptado" id="aceptar">
  <label for="aceptar">Acepto los términos</label>
  <p>Estado: `+M(d.value?"Aceptado":"No aceptado")+`</p>
</template>

<script setup>
import { ref } from 'vue';
const nombre = ref('');
const aceptado = ref(false);
<\/script>`,1)])])]),h[37]||(h[37]=X('<h3 class="subtitle-sm" data-v-100ce31c>v-pre</h3><p class="p" data-v-100ce31c> Omite la compilación para este elemento y todos sus hijos. Útil para mostrar mustaches crudos. </p><div class="example" data-v-100ce31c><h3 class="example-title" data-v-100ce31c>Resultado</h3><p class="p" data-v-100ce31c> Este contenido no será compilado: {{ estoNoSeRenderizará }} </p></div>',3)),l("div",Mp,[h[22]||(h[22]=l("h3",{class:"code-title"},"Código",-1)),l("article",Ip,[l("pre",null,[l("code",null,`<template>
  <p v-pre>Este contenido no será compilado: `+M(f.estoNoSeRenderizará)+`</p>
</template>`,1)])])]),h[38]||(h[38]=l("h3",{class:"subtitle-sm"},"v-once",-1)),h[39]||(h[39]=l("p",{class:"p"}," Renderiza el elemento y el componente una sola vez. En las subsecuentes actualizaciones, el elemento/componente y todos sus hijos serán tratados como contenido estático. ",-1)),l("div",$p,[h[23]||(h[23]=l("h3",{class:"example-title"},"Resultado",-1)),l("p",Lp,[l("button",{onClick:h[6]||(h[6]=S=>p.value++),class:"demo-button"}," Incrementar ")]),l("p",Op,"Valor normal: "+M(p.value),1),h[7]||(sn(-1,!0),(h[7]=l("p",{class:"p"},[Z("Valor con v-once: "+M(p.value),1)])).cacheIndex=7,sn(1),h[7])]),l("div",Vp,[h[24]||(h[24]=l("h3",{class:"code-title"},"Código",-1)),l("article",Dp,[l("pre",null,[l("code",null,`<template>
  <button @click="contadorOnce++">Incrementar</button>
  <p>Valor normal: `+M(p.value)+`</p>
  <p v-once>Valor con v-once: `+M(p.value)+`</p>
</template>

<script setup>
import { ref } from 'vue';
const contadorOnce = ref(0);
<\/script>`,1)])])]),h[40]||(h[40]=X('<hr data-v-100ce31c><h2 class="subtitle" data-v-100ce31c>Resumen de Directivas</h2><div class="table-container" data-v-100ce31c><table class="directives-table" data-v-100ce31c><thead data-v-100ce31c><tr data-v-100ce31c><th data-v-100ce31c>Directiva</th><th data-v-100ce31c>Función</th><th data-v-100ce31c>Sintaxis Abreviada</th></tr></thead><tbody data-v-100ce31c><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-text</code></td><td data-v-100ce31c>Actualiza el textContent del elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-html</code></td><td data-v-100ce31c>Actualiza el innerHTML del elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-show</code></td><td data-v-100ce31c>Alterna visibilidad mediante CSS display</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-on</code></td><td data-v-100ce31c>Escucha eventos en el elemento</td><td data-v-100ce31c><code data-v-100ce31c>@</code></td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-if</code></td><td data-v-100ce31c>Renderiza condicionalmente un elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-else-if</code></td><td data-v-100ce31c>Representa el &quot;bloque else if&quot; para v-if</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-else</code></td><td data-v-100ce31c>Representa el &quot;bloque else&quot; para v-if</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-for</code></td><td data-v-100ce31c>Renderiza una lista de elementos</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-bind</code></td><td data-v-100ce31c>Enlaza dinámicamente un atributo</td><td data-v-100ce31c><code data-v-100ce31c>:</code></td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-model</code></td><td data-v-100ce31c>Crea un enlace bidireccional en formularios</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-pre</code></td><td data-v-100ce31c>Omite la compilación en este elemento</td><td data-v-100ce31c>-</td></tr><tr data-v-100ce31c><td data-v-100ce31c><code data-v-100ce31c>v-once</code></td><td data-v-100ce31c>Renderiza el elemento una sola vez</td><td data-v-100ce31c>-</td></tr></tbody></table></div>',3))])]))}},Bp=we(Np,[["__scopeId","data-v-100ce31c"]]),Up={name:"OptionsApi",data(){return{nombre:"",apellido:"",busqueda:"",cargando:!1,nuevaTarea:"",tareas:[{texto:"Aprender Options API",completada:!0},{texto:"Practicar con ejemplos",completada:!1},{texto:"Crear componentes",completada:!1}],filtro:"todas"}},computed:{nombreCompleto(){return this.nombre+" "+this.apellido},tareasFiltradas(){switch(this.filtro){case"pendientes":return this.tareas.filter(e=>!e.completada);case"completadas":return this.tareas.filter(e=>e.completada);default:return this.tareas}},totalTareas(){return this.tareas.length},tareasPendientes(){return this.tareas.filter(e=>!e.completada).length},tareasCompletadas(){return this.tareas.filter(e=>e.completada).length}},watch:{busqueda(e){e&&(this.cargando=!0,setTimeout(()=>{this.cargando=!1},500))}},methods:{agregarTarea(){this.nuevaTarea.trim()&&(this.tareas.push({texto:this.nuevaTarea.trim(),completada:!1}),this.nuevaTarea="")},eliminarTarea(e){this.tareas.splice(e,1)}},mounted(){console.log("Componente Options API montado")}},zp={class:"father"},Fp={class:"content"},Hp={class:"code-block"},Qp={class:"code"},Wp={class:"example"},Kp={class:"p"},Gp={class:"tareas-lista"},Jp=["onUpdate:modelValue"],Yp=["onClick"],Xp={class:"filtros"};function Zp(e,t,a,n,s,o){return Y(),ee("div",zp,[l("section",Fp,[t[8]||(t[8]=X('<h1 class="title" data-v-9e737933>Options API</h1><p class="p" data-v-9e737933> La <strong data-v-9e737933>Options API</strong> es el estilo original de Vue para definir componentes. Organiza la lógica del componente en varias opciones como <code data-v-9e737933>data</code>, <code data-v-9e737933>methods</code>, <code data-v-9e737933>computed</code>, etc. Es muy intuitiva para desarrolladores que vienen de la programación orientada a objetos. </p><hr data-v-9e737933><h2 class="subtitle" data-v-9e737933>¿Qué es la Options API?</h2><p class="p" data-v-9e737933> En la Options API, definimos un componente usando un objeto de opciones. Cada opción tiene un propósito específico: </p><ul data-v-9e737933><li class="p" data-v-9e737933><strong data-v-9e737933>data:</strong> Define las variables reactivas del componente</li><li class="p" data-v-9e737933><strong data-v-9e737933>methods:</strong> Contiene las funciones del componente</li><li class="p" data-v-9e737933><strong data-v-9e737933>computed:</strong> Propiedades calculadas que se actualizan automáticamente</li><li class="p" data-v-9e737933><strong data-v-9e737933>watch:</strong> Observa cambios en las variables y ejecuta código</li><li class="p" data-v-9e737933><strong data-v-9e737933>lifecycle hooks:</strong> Funciones que se ejecutan en momentos específicos del ciclo de vida</li></ul><hr data-v-9e737933><h2 class="subtitle" data-v-9e737933>Estructura Básica</h2><p class="p" data-v-9e737933> Un componente usando Options API se estructura de la siguiente manera: </p>',9)),l("div",Hp,[t[6]||(t[6]=l("h3",{class:"code-title"},"Código de Ejemplo",-1)),l("pre",Qp,[l("code",null,`
<template>
  <div>
    <h1>`+M(e.titulo)+`</h1>
    <p>Contador: `+M(e.contador)+`</p>
    <button @click="incrementar">Incrementar</button>
    <p>Doble: `+M(e.dobleContador)+`</p>
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
        `,1)])]),t[9]||(t[9]=l("hr",null,null,-1)),t[10]||(t[10]=l("h2",{class:"subtitle"},"Ejemplo Completo",-1)),t[11]||(t[11]=l("p",{class:"p"}," Aquí tienes un ejemplo completo de un componente usando Options API: ",-1)),l("div",Wp,[t[7]||(t[7]=l("h3",{class:"example-title"},"Lista de Tareas",-1)),l("div",Kp,[Se(l("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>s.nuevaTarea=r),onKeyup:t[1]||(t[1]=Si((...r)=>o.agregarTarea&&o.agregarTarea(...r),["enter"])),placeholder:"Nueva tarea",class:"demo-input"},null,544),[[He,s.nuevaTarea]]),l("button",{onClick:t[2]||(t[2]=(...r)=>o.agregarTarea&&o.agregarTarea(...r)),class:"demo-button"},"Agregar"),l("ul",Gp,[(Y(!0),ee(Ee,null,ca(o.tareasFiltradas,(r,i)=>(Y(),ee("li",{key:i,class:"tarea-item"},[Se(l("input",{type:"checkbox","onUpdate:modelValue":c=>r.completada=c},null,8,Jp),[[js,r.completada]]),l("span",{class:ot({completada:r.completada})},M(r.texto),3),l("button",{onClick:c=>o.eliminarTarea(i),class:"demo-button small"},"Eliminar",8,Yp)]))),128))]),l("div",Xp,[l("button",{onClick:t[3]||(t[3]=r=>s.filtro="todas"),class:"demo-button small"},"Todas ("+M(o.totalTareas)+")",1),l("button",{onClick:t[4]||(t[4]=r=>s.filtro="pendientes"),class:"demo-button small"},"Pendientes ("+M(o.tareasPendientes)+")",1),l("button",{onClick:t[5]||(t[5]=r=>s.filtro="completadas"),class:"demo-button small"},"Completadas ("+M(o.tareasCompletadas)+")",1)])])])])])}const ef=we(Up,[["render",Zp],["__scopeId","data-v-9e737933"]]),tf={class:"father"},af={class:"content"},nf={class:"example"},sf={class:"p"},of={class:"example"},rf={class:"p"},cf={class:"example"},lf={class:"p"},df={class:"example"},uf={class:"p"},pf={key:0},ff={key:1},vf={class:"example"},mf={class:"p"},gf={class:"tareas-lista"},hf=["onUpdate:modelValue"],bf=["onClick"],yf={class:"filtros"},Cf={__name:"compositionApi",setup(e){const t=U(""),a=U(0),n=Ut({nombre:"",edad:0}),s=U(0),o=U(0),r=U(""),i=U(!1),c=U(""),u=U([{id:1,texto:"Aprender Composition API",completada:!0},{id:2,texto:"Practicar con ejemplos",completada:!1},{id:3,texto:"Crear composables",completada:!1}]),d=U("todas"),p=Q(()=>s.value*o.value),m=Q(()=>{switch(d.value){case"pendientes":return u.value.filter(A=>!A.completada);case"completadas":return u.value.filter(A=>A.completada);default:return u.value}}),f=Q(()=>u.value.length),h=Q(()=>u.value.filter(A=>!A.completada).length),S=Q(()=>u.value.filter(A=>A.completada).length),P=()=>{a.value++},j=()=>{c.value.trim()&&(u.value.push({id:Date.now(),texto:c.value.trim(),completada:!1}),c.value="")},T=A=>{u.value.splice(A,1)};return _a(r,A=>{A&&(i.value=!0,setTimeout(()=>{i.value=!1},500))}),Va(()=>{console.log("Componente Composition API montado")}),(A,b)=>(Y(),ee("div",tf,[l("section",af,[b[24]||(b[24]=X(`<h1 class="title" data-v-1f2c92e0>Composition API</h1><p class="p" data-v-1f2c92e0> La <strong data-v-1f2c92e0>Composition API</strong> es una nueva forma de organizar la lógica en componentes Vue. Introducida en Vue 3, permite agrupar código por funcionalidad en lugar de por opciones, haciendo que los componentes complejos sean más fáciles de entender y mantener. </p><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>¿Por qué Composition API?</h2><p class="p" data-v-1f2c92e0> Mientras la Options API organiza el código por tipo (data, methods, computed), la Composition API permite agrupar toda la lógica relacionada en una misma sección. Esto es especialmente útil en componentes grandes donde la lógica relacionada puede estar dispersa en diferentes opciones. </p><div class="example" data-v-1f2c92e0><h3 class="example-title" data-v-1f2c92e0>Comparación Visual</h3><div class="comparison" data-v-1f2c92e0><div class="approach" data-v-1f2c92e0><h4 data-v-1f2c92e0>Options API</h4><p class="p" data-v-1f2c92e0>Lógica dispersa por tipo</p><pre class="code-small" data-v-1f2c92e0><code data-v-1f2c92e0>
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
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Reactividad Fundamental</h2><h3 class="subtitle-sm" data-v-1f2c92e0>ref()</h3><p class="p" data-v-1f2c92e0><code data-v-1f2c92e0>ref()</code> crea una referencia reactiva para valores primitivos. Para acceder al valor, usamos <code data-v-1f2c92e0>.value</code>. </p>`,15)),l("div",nf,[b[13]||(b[13]=l("h3",{class:"example-title"},"Ejemplo Interactivo con ref()",-1)),l("div",sf,[Se(l("input",{"onUpdate:modelValue":b[0]||(b[0]=q=>t.value=q),placeholder:"Escribe tu nombre",class:"demo-input"},null,512),[[He,t.value]]),l("p",null,[b[10]||(b[10]=Z("Hola, ",-1)),l("strong",null,M(t.value),1),b[11]||(b[11]=Z("!",-1))]),l("p",null,[b[12]||(b[12]=Z("Contador: ",-1)),l("strong",null,M(a.value),1)]),l("button",{onClick:P,class:"demo-button"},"Incrementar")])]),b[25]||(b[25]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código ref()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
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
        </code></pre></div><h3 class="subtitle-sm" data-v-1f2c92e0>reactive()</h3><p class="p" data-v-1f2c92e0><code data-v-1f2c92e0>reactive()</code> crea un objeto reactivo. Ideal para objetos y arrays, no requiere <code data-v-1f2c92e0>.value</code> para acceder a las propiedades. </p>`,3)),l("div",of,[b[16]||(b[16]=l("h3",{class:"example-title"},"Ejemplo Interactivo con reactive()",-1)),l("div",rf,[Se(l("input",{"onUpdate:modelValue":b[1]||(b[1]=q=>n.nombre=q),placeholder:"Nombre",class:"demo-input"},null,512),[[He,n.nombre]]),Se(l("input",{"onUpdate:modelValue":b[2]||(b[2]=q=>n.edad=q),type:"number",placeholder:"Edad",class:"demo-input"},null,512),[[He,n.edad]]),l("p",null,[b[14]||(b[14]=Z("Usuario: ",-1)),l("strong",null,M(n.nombre),1),b[15]||(b[15]=Z(", Edad: ",-1)),l("strong",null,M(n.edad),1)])])]),b[26]||(b[26]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código reactive()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { reactive } from &#39;vue&#39;

// Objeto reactivo
const usuario = reactive({
  nombre: &#39;&#39;,
  edad: 0
})
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Computed Properties</h2><p class="p" data-v-1f2c92e0> Las propiedades computadas se crean con <code data-v-1f2c92e0>computed()</code>. Se actualizan automáticamente cuando sus dependencias cambian. </p>`,4)),l("div",cf,[b[20]||(b[20]=l("h3",{class:"example-title"},"Ejemplo Computed",-1)),l("div",lf,[Se(l("input",{"onUpdate:modelValue":b[3]||(b[3]=q=>s.value=q),type:"number",placeholder:"Precio",class:"demo-input"},null,512),[[He,s.value]]),Se(l("input",{"onUpdate:modelValue":b[4]||(b[4]=q=>o.value=q),type:"number",placeholder:"Cantidad",class:"demo-input"},null,512),[[He,o.value]]),l("p",null,[b[17]||(b[17]=Z("Precio unitario: $",-1)),l("strong",null,M(s.value),1)]),l("p",null,[b[18]||(b[18]=Z("Cantidad: ",-1)),l("strong",null,M(o.value),1)]),l("p",null,[b[19]||(b[19]=Z("Total: $",-1)),l("strong",null,M(p.value),1)])])]),b[27]||(b[27]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código computed()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
&lt;script setup&gt;
import { ref, computed } from &#39;vue&#39;

const precio = ref(0)
const cantidad = ref(0)

// Propiedad computada
const total = computed(() =&gt; {
  return precio.value * cantidad.value
})
&lt;/script&gt;
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Watchers</h2><p class="p" data-v-1f2c92e0> Los watchers observan cambios en las variables reactivas y ejecutan código cuando cambian. </p>`,4)),l("div",df,[b[22]||(b[22]=l("h3",{class:"example-title"},"Ejemplo Watch",-1)),l("div",uf,[Se(l("input",{"onUpdate:modelValue":b[5]||(b[5]=q=>r.value=q),placeholder:"Buscar...",class:"demo-input"},null,512),[[He,r.value]]),i.value?(Y(),ee("p",pf,"Buscando... ⏳")):(Y(),ee("p",ff,[b[21]||(b[21]=Z("Resultados para: ",-1)),l("strong",null,'"'+M(r.value)+'"',1)]))])]),b[28]||(b[28]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código watch()</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
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
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>&lt;script setup&gt; Syntax Sugar</h2><p class="p" data-v-1f2c92e0> Vue 3.2 introdujo <code data-v-1f2c92e0>&lt;script setup&gt;</code>, una sintaxis más concisa que elimina la necesidad de usar <code data-v-1f2c92e0>setup()</code> y <code data-v-1f2c92e0>return</code>. </p>`,8)),l("div",vf,[b[23]||(b[23]=l("h3",{class:"example-title"},"Ejemplo Completo con <script setup>",-1)),l("div",mf,[Se(l("input",{"onUpdate:modelValue":b[6]||(b[6]=q=>c.value=q),onKeyup:Si(j,["enter"]),placeholder:"Nueva tarea",class:"demo-input"},null,544),[[He,c.value]]),l("button",{onClick:j,class:"demo-button"},"Agregar"),l("ul",gf,[(Y(!0),ee(Ee,null,ca(m.value,(q,K)=>(Y(),ee("li",{key:q.id,class:"tarea-item"},[Se(l("input",{type:"checkbox","onUpdate:modelValue":J=>q.completada=J},null,8,hf),[[js,q.completada]]),l("span",{class:ot({completada:q.completada})},M(q.texto),3),l("button",{onClick:J=>T(K),class:"demo-button small"},"Eliminar",8,bf)]))),128))]),l("div",yf,[l("button",{onClick:b[7]||(b[7]=q=>d.value="todas"),class:"demo-button small"},"Todas ("+M(f.value)+")",1),l("button",{onClick:b[8]||(b[8]=q=>d.value="pendientes"),class:"demo-button small"},"Pendientes ("+M(h.value)+")",1),l("button",{onClick:b[9]||(b[9]=q=>d.value="completadas"),class:"demo-button small"},"Completadas ("+M(S.value)+")",1)])])]),b[29]||(b[29]=X(`<div class="code-block" data-v-1f2c92e0><h3 class="code-title" data-v-1f2c92e0>Código Completo</h3><pre class="code" data-v-1f2c92e0><code data-v-1f2c92e0>
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
        </code></pre></div><hr data-v-1f2c92e0><h2 class="subtitle" data-v-1f2c92e0>Ventajas de Composition API</h2><ul data-v-1f2c92e0><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Mejor organización:</strong> Lógica relacionada agrupada</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Reutilización:</strong> Composables para lógica reusable</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>TypeScript:</strong> Mejor soporte para TypeScript</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Flexibilidad:</strong> Más control sobre la reactividad</li><li class="p" data-v-1f2c92e0><strong data-v-1f2c92e0>Mantenimiento:</strong> Más fácil de mantener en componentes grandes</li></ul>`,8))])]))}},xf=we(Cf,[["__scopeId","data-v-1f2c92e0"]]),_f={class:"father"},Sf={class:"content"},kf={class:"example"},wf={class:"p"},qf={class:"logs-container"},Pf={class:"example"},Ef={class:"p"},Af={class:"example"},Rf={class:"p"},jf={class:"example"},Tf={class:"p"},Mf={key:0},If={class:"example"},$f={class:"p"},Lf={__name:"cicleOfLife",setup(e){const t=U("created"),a=U([]),n=U(0),s=U(null),o=U(0),r=U(0),i=U(0),c=U(!0),u=U(0),d=U("A"),p=U(0),m=U(0),f=A=>{a.value.push(`[${new Date().toLocaleTimeString()}] ${A}`)};Qr(()=>{t.value="beforeMount",f("beforeMount ejecutado")}),Va(()=>{t.value="mounted",f("mounted ejecutado")}),Wr(()=>{r.value=o.value,f(`beforeUpdate: contador cambiará a ${o.value+1}`)}),Kr(()=>{i.value++,f(`updated: contador actualizado a ${o.value}`)}),Sn(()=>{f("beforeUnmount: componente se prepara para destruir")}),Ps(()=>{f("unmounted: componente destruido")}),zr(()=>{p.value++,f("activated: componente activado desde cache")}),Fr(()=>{m.value++,f("deactivated: componente desactivado a cache")});const h=()=>{s.value&&(n.value=s.value.offsetHeight,f(`Elemento medido: ${n.value}px`))},S=()=>{o.value++},P=()=>{o.value=0,i.value=0,f("Contador reiniciado")},j=()=>{c.value=!c.value,f(`Componente ${c.value?"montado":"destruido"}`)},T=()=>{d.value=d.value==="A"?"B":"A"};return f("created: componente inicializado"),(A,b)=>(Y(),ee("div",_f,[l("section",Sf,[b[16]||(b[16]=X(`<h1 class="title" data-v-17910c99>Ciclo de Vida de Vue</h1><p class="p" data-v-17910c99> El <strong data-v-17910c99>ciclo de vida</strong> de un componente Vue representa las diferentes etapas por las que pasa desde su creación hasta su destrucción. Comprender estos hooks es esencial para ejecutar código en el momento adecuado. </p><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>¿Qué son los Hooks del Ciclo de Vida?</h2><p class="p" data-v-17910c99> Los hooks son funciones especiales que Vue ejecuta automáticamente en momentos específicos del ciclo de vida del componente. Permiten ejecutar código en fases clave como la creación, actualización y destrucción del componente. </p><div class="example" data-v-17910c99><h3 class="example-title" data-v-17910c99>Diagrama del Ciclo de Vida</h3><div class="lifecycle-diagram" data-v-17910c99><div class="phase creation" data-v-17910c99><h4 data-v-17910c99>Fase de Creación</h4><div class="hooks" data-v-17910c99><span class="hook setup" data-v-17910c99>setup</span><span class="arrow" data-v-17910c99>→</span><span class="hook before-create" data-v-17910c99>beforeCreate</span><span class="arrow" data-v-17910c99>→</span><span class="hook created" data-v-17910c99>created</span></div></div><div class="phase mounting" data-v-17910c99><h4 data-v-17910c99>Fase de Montaje</h4><div class="hooks" data-v-17910c99><span class="hook before-mount" data-v-17910c99>beforeMount</span><span class="arrow" data-v-17910c99>→</span><span class="hook mounted" data-v-17910c99>mounted</span></div></div><div class="phase updating" data-v-17910c99><h4 data-v-17910c99>Fase de Actualización</h4><div class="hooks" data-v-17910c99><span class="hook before-update" data-v-17910c99>beforeUpdate</span><span class="arrow" data-v-17910c99>→</span><span class="hook updated" data-v-17910c99>updated</span></div></div><div class="phase unmounting" data-v-17910c99><h4 data-v-17910c99>Fase de Desmontaje</h4><div class="hooks" data-v-17910c99><span class="hook before-unmount" data-v-17910c99>beforeUnmount</span><span class="arrow" data-v-17910c99>→</span><span class="hook unmounted" data-v-17910c99>unmounted</span></div></div><div class="phase activation" data-v-17910c99><h4 data-v-17910c99>Fase de Activación (KeepAlive)</h4><div class="hooks" data-v-17910c99><span class="hook activated" data-v-17910c99>activated</span><span class="arrow" data-v-17910c99>→</span><span class="hook deactivated" data-v-17910c99>deactivated</span></div></div></div></div><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Hooks Principales</h2><h3 class="subtitle-sm" data-v-17910c99>1. setup (Composition API)</h3><p class="p" data-v-17910c99> El hook <code data-v-17910c99>setup</code> es el punto de entrada para la Composition API en Vue 3. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Composition API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>&lt;script setup&gt;
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
}</code></pre></div>`,14)),l("div",kf,[b[2]||(b[2]=l("h3",{class:"example-title"},"Ejemplo Práctico",-1)),l("div",wf,[l("p",null,[b[0]||(b[0]=l("strong",null,"Fase actual:",-1)),Z(" "+M(t.value),1)]),b[1]||(b[1]=l("p",null,[l("strong",null,"Logs:")],-1)),l("div",qf,[(Y(!0),ee(Ee,null,ca(a.value,(q,K)=>(Y(),ee("div",{key:K,class:"log-entry"},M(q),1))),128))])])]),b[17]||(b[17]=X(`<h3 class="subtitle-sm" data-v-17910c99>3. beforeMount y mounted</h3><p class="p" data-v-17910c99> Estos hooks se ejecutan durante la <strong data-v-17910c99>fase de montaje en el DOM</strong>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  beforeMount() {
    console.log(&amp;apos;beforeMount - Antes del montaje&amp;apos;)
  },
  mounted() {
    console.log(&amp;apos;mounted - Componente montado&amp;apos;)
    this.cargarDatos()
  }
}</code></pre></div>`,3)),l("div",Pf,[b[4]||(b[4]=l("h3",{class:"example-title"},"Ejemplo: Acceso al DOM",-1)),l("div",Ef,[l("div",{ref_key:"demoElement",ref:s,class:"demo-box"},[b[3]||(b[3]=l("p",null,"Este es un elemento del DOM",-1)),l("p",null,"Altura: "+M(n.value)+"px",1)],512),l("button",{onClick:h,class:"demo-button"},"Medir Elemento")])]),b[18]||(b[18]=X(`<h3 class="subtitle-sm" data-v-17910c99>4. beforeUpdate y updated</h3><p class="p" data-v-17910c99> Estos hooks se ejecutan cuando el componente <strong data-v-17910c99>se actualiza</strong>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
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
}</code></pre></div>`,3)),l("div",Af,[b[8]||(b[8]=l("h3",{class:"example-title"},"Ejemplo: Seguimiento de Actualizaciones",-1)),l("div",Rf,[l("p",null,[b[5]||(b[5]=Z("Contador: ",-1)),l("strong",null,M(o.value),1)]),l("p",null,[b[6]||(b[6]=Z("Valor anterior: ",-1)),l("strong",null,M(r.value),1)]),l("p",null,[b[7]||(b[7]=Z("Actualizaciones: ",-1)),l("strong",null,M(i.value),1)]),l("button",{onClick:S,class:"demo-button"},"Incrementar"),l("button",{onClick:P,class:"demo-button"},"Reiniciar")])]),b[19]||(b[19]=X(`<h3 class="subtitle-sm" data-v-17910c99>5. beforeUnmount y unmounted</h3><p class="p" data-v-17910c99> Estos hooks se ejecutan cuando el componente <strong data-v-17910c99>se destruye</strong>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
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
}</code></pre></div>`,3)),l("div",jf,[b[11]||(b[11]=l("h3",{class:"example-title"},"Ejemplo: Gestión de Recursos",-1)),l("div",Tf,[c.value?(Y(),ee("p",Mf,[b[9]||(b[9]=l("strong",null,"Componente Montado",-1)),b[10]||(b[10]=l("br",null,null,-1)),Z(" Ticks del intervalo: "+M(u.value),1)])):Nt("",!0),l("button",{onClick:j,class:"demo-button"},M(c.value?"Destruir":"Montar")+" Componente ",1)])]),b[20]||(b[20]=X(`<hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Hooks de Keep-Alive</h2><h3 class="subtitle-sm" data-v-17910c99>6. activated y deactivated</h3><p class="p" data-v-17910c99> Estos hooks son específicos para componentes envueltos en <code data-v-17910c99>&lt;KeepAlive&gt;</code>. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
  activated() {
    console.log(&amp;apos;activated - Componente activado&amp;apos;)
    this.reanudarActividad()
  },
  deactivated() {
    console.log(&amp;apos;deactivated - Componente desactivado&amp;apos;)
    this.pausarActividad()
  }
}</code></pre></div>`,5)),l("div",If,[b[15]||(b[15]=l("h3",{class:"example-title"},"Ejemplo: KeepAlive en Acción",-1)),l("div",$f,[l("p",null,[b[12]||(b[12]=l("strong",null,"Componente actual:",-1)),Z(" "+M(d.value),1)]),l("p",null,[b[13]||(b[13]=l("strong",null,"Activaciones:",-1)),Z(" "+M(p.value),1)]),l("p",null,[b[14]||(b[14]=l("strong",null,"Desactivaciones:",-1)),Z(" "+M(m.value),1)]),l("button",{onClick:T,class:"demo-button"}," Cambiar a "+M(d.value==="A"?"B":"A"),1)])]),b[21]||(b[21]=X(`<hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Hooks de Manejo de Errores</h2><h3 class="subtitle-sm" data-v-17910c99>7. errorCaptured</h3><p class="p" data-v-17910c99> Captura errores de componentes hijos. </p><div class="code-block" data-v-17910c99><h3 class="code-title" data-v-17910c99>Options API</h3><pre class="code" data-v-17910c99><code data-v-17910c99>export default {
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
&lt;/script&gt;</code></pre></div><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Flujo Completo del Ciclo de Vida</h2><div class="lifecycle-flow" data-v-17910c99><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>1</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Inicialización (Setup)</h4><p data-v-17910c99><code data-v-17910c99>setup</code> → <code data-v-17910c99>beforeCreate</code> → <code data-v-17910c99>created</code></p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>2</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Compilación del Template</h4><p data-v-17910c99>Vue compila el template a funciones render</p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>3</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Montaje en DOM</h4><p data-v-17910c99><code data-v-17910c99>beforeMount</code> → <code data-v-17910c99>mounted</code></p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>4</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Actualizaciones (Reactividad)</h4><p data-v-17910c99><code data-v-17910c99>beforeUpdate</code> → <code data-v-17910c99>updated</code></p></div></div><div class="flow-step" data-v-17910c99><div class="step-number" data-v-17910c99>5</div><div class="step-content" data-v-17910c99><h4 data-v-17910c99>Destrucción</h4><p data-v-17910c99><code data-v-17910c99>beforeUnmount</code> → <code data-v-17910c99>unmounted</code></p></div></div></div><hr data-v-17910c99><h2 class="subtitle" data-v-17910c99>Mejores Prácticas</h2><ul data-v-17910c99><li class="p" data-v-17910c99><strong data-v-17910c99>created/mounted:</strong> Usar para llamadas API e inicialización</li><li class="p" data-v-17910c99><strong data-v-17910c99>updated:</strong> Evitar modificar datos reactivos aquí</li><li class="p" data-v-17910c99><strong data-v-17910c99>unmounted:</strong> Siempre limpiar intervals y event listeners</li><li class="p" data-v-17910c99><strong data-v-17910c99>errorCaptured:</strong> Implementar para manejo de errores</li></ul>`,16))])]))}},Of=we(Lf,[["__scopeId","data-v-17910c99"]]),Vf={template:`
    <button class="boton-ejemplo" @click="$emit('click')">
      <slot></slot>
    </button>
  `,emits:["click"]},Df={template:`
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
  `,props:{titulo:String,contenido:String,mostrarEliminar:{type:Boolean,default:!1}},emits:["eliminar"]},Nf={template:`
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
  `,emits:["cerrar"]},Bf={setup(){const e=U(0),t=U(!1),a=U(!1),n=U(!1),s=U([{titulo:"Widget Principal",contenido:"Este es un widget de ejemplo"},{titulo:"Estadísticas",contenido:"Datos importantes del sistema"}]),o=async()=>{n.value=!0,await new Promise(u=>setTimeout(u,1500)),a.value=!0,n.value=!1,t.value=!0},r=()=>{s.value.push({titulo:`Widget ${s.value.length+1}`,contenido:"Nuevo widget agregado dinámicamente"})},i=u=>{s.value.splice(u,1)},c=U(new Date().toLocaleTimeString());return{BotonEjemplo:Vf,TarjetaEjemplo:Df,ModalDinamicoComponent:Nf,contadorBasico:e,mostrarModalDinamico:t,modalCargado:a,cargando:n,widgets:s,cargarModalDinamico:o,agregarWidget:r,eliminarWidget:i,ultimaActualizacion:c}}},Uf={class:"father"},zf={class:"content"},Ff={class:"example"},Hf={class:"component-demo"},Qf={class:"example"},Wf={class:"p"},Kf={key:0,class:"mensaje-carga"},Gf={class:"example"},Jf={class:"dashboard-demo"},Yf={class:"dashboard-header"},Xf={class:"widgets-grid"},Zf={class:"dashboard-stats"};function ev(e,t,a,n,s,o){const r=oa("BotonEjemplo"),i=oa("TarjetaEjemplo");return Y(),ee("div",Uf,[l("section",zf,[t[10]||(t[10]=X(`<h1 class="title" data-v-ac797753>Importación de Componentes en Vue.js</h1><p class="p" data-v-ac797753> Aprender a <strong data-v-ac797753>importar componentes</strong> correctamente es esencial para construir aplicaciones Vue.js modulares y mantenibles. Esta guía te mostrará los diferentes métodos de importación y cuándo usar cada uno. </p><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Métodos de Importación</h2><h3 class="subtitle-sm" data-v-ac797753>1. Importación Básica (Estática)</h3><p class="p" data-v-ac797753> La forma más común de importar componentes. El componente se carga inmediatamente con la aplicación. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Composition API con &lt;script setup&gt;</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
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
        </code></pre></div>`,8)),l("div",Ff,[t[3]||(t[3]=l("h3",{class:"example-title"},"Demo: Componentes Básicos",-1)),l("div",Hf,[ve(r,{onClick:t[0]||(t[0]=c=>n.contadorBasico++)},{default:Et(()=>[Z(" Clics: "+M(n.contadorBasico),1)]),_:1}),ve(i,{titulo:"Tarjeta de Ejemplo",contenido:`Este componente fue importado estáticamente. Clics: ${n.contadorBasico}`},null,8,["contenido"])])]),t[11]||(t[11]=X(`<h3 class="subtitle-sm" data-v-ac797753>2. Importación con Alias</h3><p class="p" data-v-ac797753> Usa alias para evitar rutas relativas complejas como <code data-v-ac797753>../../../components</code>. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>vite.config.js</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
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
        </code></pre></div>`,7)),l("div",Qf,[t[4]||(t[4]=l("h3",{class:"example-title"},"Demo: Carga Dinámica",-1)),l("div",Wf,[l("button",{onClick:t[1]||(t[1]=(...c)=>n.cargarModalDinamico&&n.cargarModalDinamico(...c)),class:"demo-button"}," Cargar Modal Dinámicamente "),n.cargando?(Y(),ee("p",Kf,"⏳ Cargando componente...")):Nt("",!0),n.modalCargado&&n.mostrarModalDinamico?(Y(),ss(Qc(n.ModalDinamicoComponent),{key:1,onCerrar:t[2]||(t[2]=c=>n.mostrarModalDinamico=!1)},null,32)):Nt("",!0)])]),t[12]||(t[12]=X(`<h3 class="subtitle-sm" data-v-ac797753>4. Registro Global de Componentes</h3><p class="p" data-v-ac797753> Para componentes que se usan en toda la aplicación. </p><div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>main.js</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
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
        </code></pre></div><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Ejemplo Práctico: Dashboard</h2>`,13)),l("div",Gf,[t[9]||(t[9]=l("h3",{class:"example-title"},"Dashboard con Múltiples Componentes",-1)),l("div",Jf,[l("div",Yf,[t[6]||(t[6]=l("h3",null,"Mi Dashboard",-1)),ve(r,{onClick:n.agregarWidget},{default:Et(()=>[...t[5]||(t[5]=[Z(" Agregar Widget ",-1)])]),_:1},8,["onClick"])]),l("div",Xf,[(Y(!0),ee(Ee,null,ca(n.widgets,(c,u)=>(Y(),ss(i,{key:u,titulo:c.titulo,contenido:c.contenido,onEliminar:d=>n.eliminarWidget(u)},null,8,["titulo","contenido","onEliminar"]))),128))]),l("div",Zf,[l("p",null,[t[7]||(t[7]=Z("Total de widgets: ",-1)),l("strong",null,M(n.widgets.length),1)]),l("p",null,[t[8]||(t[8]=Z("Última actualización: ",-1)),l("strong",null,M(n.ultimaActualizacion),1)])])])]),t[13]||(t[13]=X(`<div class="code-block" data-v-ac797753><h3 class="code-title" data-v-ac797753>Código del Dashboard</h3><pre class="code" data-v-ac797753><code data-v-ac797753>
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
          </code></pre><p class="solution" data-v-ac797753><strong data-v-ac797753>Solución:</strong> Usar nombres diferentes o alias en la importación</p></div></div><hr data-v-ac797753><h2 class="subtitle" data-v-ac797753>Mejores Prácticas</h2><ul data-v-ac797753><li class="p" data-v-ac797753><strong data-v-ac797753>Usar PascalCase:</strong> Nombres de componentes en PascalCase (MiComponente.vue)</li><li class="p" data-v-ac797753><strong data-v-ac797753>Alias para rutas:</strong> Usar @/ para rutas absolutas</li><li class="p" data-v-ac797753><strong data-v-ac797753>Lazy loading:</strong> Para componentes pesados o poco usados</li><li class="p" data-v-ac797753><strong data-v-ac797753>Exportación consolidada:</strong> Usar archivos index.js para grupos de componentes</li><li class="p" data-v-ac797753><strong data-v-ac797753>Registro global mínimo:</strong> Solo componentes realmente globales</li><li class="p" data-v-ac797753><strong data-v-ac797753>Organización lógica:</strong> Agrupar componentes por funcionalidad</li></ul>`,7))])])}const tv=we(Bf,[["render",ev],["__scopeId","data-v-ac797753"]]),av={class:"father"},nv={class:"content"},sv={class:"example"},ov={class:"demo-container"},rv={key:0,class:"premium-badge"},iv={class:"demo-controls"},cv={class:"example"},lv={class:"demo-container"},dv={class:"reactive-demo"},uv={class:"demo-controls"},pv={__name:"props",setup(e){const t=U({name:"Carlos López",age:30,email:"carlos@example.com",isPremium:!1}),a=U("Texto dinámico"),n=()=>{t.value.isPremium=!t.value.isPremium},s=()=>{t.value.age+=1};return(o,r)=>(Y(),ee("div",av,[l("section",nv,[r[6]||(r[6]=X(`<h1 class="title" data-v-82554015>Manual de Props y Componentización</h1><p class="p" data-v-82554015> Los <strong data-v-82554015>props</strong> son atributos personalizados que permiten pasar datos de componentes padres a componentes hijos. Son fundamentales para crear componentes reutilizables en Vue.js. </p><hr data-v-82554015><h2 class="subtitle" data-v-82554015>¿Qué son los Props?</h2><p class="p" data-v-82554015> Los props son la forma principal de comunicación entre componentes en Vue. Permiten que los componentes padres pasen datos a sus componentes hijos, manteniendo un flujo de datos unidireccional. </p><div class="example" data-v-82554015><h3 class="example-title" data-v-82554015>Flujo de Props</h3><div class="flow-diagram" data-v-82554015><div class="component parent" data-v-82554015><h4 data-v-82554015>Componente Padre</h4><div class="data-flow" data-v-82554015><span class="data" data-v-82554015>datos</span><span class="arrow" data-v-82554015>↓</span><code data-v-82554015>&lt;MiComponente :prop=&quot;valor&quot; /&gt;</code></div></div><div class="component child" data-v-82554015><h4 data-v-82554015>Componente Hijo</h4><div class="data-flow" data-v-82554015><code data-v-82554015>defineProps({ prop: Type })</code><span class="arrow" data-v-82554015>↓</span><span class="data" data-v-82554015>{{ prop }}</span></div></div></div></div><div class="tip-box" data-v-82554015><strong data-v-82554015>💡 Tip:</strong> Los props siguen el principio de &quot;propiedades hacia abajo, eventos hacia arriba&quot; </div><hr data-v-82554015><h2 class="subtitle" data-v-82554015>Sintaxis Básica</h2><div class="api-comparison" data-v-82554015><div class="api-option" data-v-82554015><h3 class="code-title" data-v-82554015>Composition API (Recomendado)</h3><div class="code-block" data-v-82554015><pre class="code" data-v-82554015><code data-v-82554015>&lt;template&gt;
  &lt;div class=&quot;user-card&quot;&gt;
    &lt;h3&gt;{{ name }}&lt;/h3&gt;
    &lt;p&gt;Edad: {{ age }}&lt;/p&gt;
    &lt;p&gt;Email: {{ email }}&lt;/p&gt;
    &lt;p v-if=&quot;isPremium&quot; class=&quot;premium&quot;&gt;⭐ Premium&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
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
&lt;/script&gt;</code></pre></div></div><div class="api-option" data-v-82554015><h3 class="code-title" data-v-82554015>Options API</h3><div class="code-block" data-v-82554015><pre class="code" data-v-82554015><code data-v-82554015>&lt;script&gt;
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
&lt;/script&gt;</code></pre></div></div></div><h3 class="subtitle-sm" data-v-82554015>Uso en Componente Padre</h3><div class="code-block" data-v-82554015><h3 class="code-title" data-v-82554015>Pasando Props al Componente Hijo</h3><pre class="code" data-v-82554015><code data-v-82554015>&lt;template&gt;
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
&lt;/template&gt;</code></pre></div>`,12)),l("div",sv,[r[1]||(r[1]=l("h3",{class:"example-title"},"Demo: Tarjetas de Usuario",-1)),l("div",ov,[l("div",{class:ot(["user-card-demo",{premium:t.value.isPremium}])},[l("h4",null,M(t.value.name),1),l("p",null,"Edad: "+M(t.value.age)+" años",1),l("p",null,"Email: "+M(t.value.email),1),t.value.isPremium?(Y(),ee("p",rv,"⭐ Usuario Premium")):Nt("",!0)],2),l("div",iv,[l("button",{onClick:n,class:"demo-button"},M(t.value.isPremium?"Quitar Premium":"Hacer Premium"),1),l("button",{onClick:s,class:"demo-button secondary"}," Incrementar Edad ")])])]),r[7]||(r[7]=X(`<hr data-v-82554015><h2 class="subtitle" data-v-82554015>Tipos y Validación de Props</h2><div class="code-block" data-v-82554015><h3 class="code-title" data-v-82554015>Validación Completa de Props</h3><pre class="code" data-v-82554015><code data-v-82554015>&lt;script setup&gt;
defineProps({
  // Tipo básico
  title: String,
  
  // Múltiples tipos posibles
  id: [String, Number],
  
  // Requerido con validación
  username: {
    type: String,
    required: true,
    validator: (value) =&gt; value.length &gt;= 3
  },
  
  // Valor por defecto
  score: {
    type: Number,
    default: 0
  },
  
  // Validación personalizada
  rating: {
    type: Number,
    validator: (value) =&gt; value &gt;= 1 &amp;&amp; value &lt;= 5
  },
  
  // Array con valor por defecto
  tags: {
    type: Array,
    default: () =&gt; []
  },
  
  // Objeto con valor por defecto
  config: {
    type: Object,
    default: () =&gt; ({
      color: &#39;blue&#39;,
      size: &#39;medium&#39;
    })
  },
  
  // Función como prop
  onSuccess: {
    type: Function,
    default: () =&gt; {}
  }
})
&lt;/script&gt;</code></pre></div><div class="example" data-v-82554015><h3 class="example-title" data-v-82554015>Tipos de Props Disponibles</h3><div class="type-grid" data-v-82554015><div class="type-item" data-v-82554015><span class="type-badge" data-v-82554015>String</span><span data-v-82554015>Cadenas de texto</span></div><div class="type-item" data-v-82554015><span class="type-badge" data-v-82554015>Number</span><span data-v-82554015>Números</span></div><div class="type-item" data-v-82554015><span class="type-badge" data-v-82554015>Boolean</span><span data-v-82554015>Valores verdadero/falso</span></div><div class="type-item" data-v-82554015><span class="type-badge" data-v-82554015>Array</span><span data-v-82554015>Arreglos</span></div><div class="type-item" data-v-82554015><span class="type-badge" data-v-82554015>Object</span><span data-v-82554015>Objetos</span></div><div class="type-item" data-v-82554015><span class="type-badge" data-v-82554015>Date</span><span data-v-82554015>Fechas</span></div><div class="type-item" data-v-82554015><span class="type-badge" data-v-82554015>Function</span><span data-v-82554015>Funciones</span></div></div></div><hr data-v-82554015><h2 class="subtitle" data-v-82554015>Props Reactivos vs No Reactivos</h2><div class="code-block" data-v-82554015><h3 class="code-title" data-v-82554015>Diferencia en el Comportamiento</h3><pre class="code" data-v-82554015><code data-v-82554015>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- No reactivo (string estático) --&gt;
    &lt;MyComponent static-prop=&quot;valor estático&quot; /&gt;
    
    &lt;!-- Reactivo (vinculado a variable) --&gt;
    &lt;MyComponent :dynamic-prop=&quot;miVariable&quot; /&gt;
    
    &lt;!-- Número como string vs número --&gt;
    &lt;MyComponent number-as-string=&quot;42&quot; /&gt;      &lt;!-- String &quot;42&quot; --&gt;
    &lt;MyComponent :number-as-number=&quot;42&quot; /&gt;     &lt;!-- Number 42 --&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>`,7)),l("div",cv,[r[5]||(r[5]=l("h3",{class:"example-title"},"Demo: Reactividad de Props",-1)),l("div",lv,[l("div",dv,[r[3]||(r[3]=l("p",null,[l("strong",null,"Prop estático:"),Z(' "Este texto es estático"')],-1)),l("p",null,[r[2]||(r[2]=l("strong",null,"Prop dinámico:",-1)),Z(' "'+M(a.value)+'"',1)])]),l("div",uv,[Se(l("input",{"onUpdate:modelValue":r[0]||(r[0]=i=>a.value=i),placeholder:"Escribe algo...",class:"demo-input"},null,512),[[He,a.value]]),r[4]||(r[4]=l("p",{class:"demo-hint"},"El texto se actualiza en tiempo real gracias a la reactividad",-1))])])]),r[8]||(r[8]=X(`<hr data-v-82554015><h2 class="subtitle" data-v-82554015>Patrones Avanzados</h2><div class="pattern-grid" data-v-82554015><div class="pattern-item" data-v-82554015><h3 class="code-title" data-v-82554015>v-bind con Objetos</h3><div class="code-block" data-v-82554015><pre class="code" data-v-82554015><code data-v-82554015>&lt;!-- Forma tradicional --&gt;
&lt;UserProfile 
  :name=&quot;user.name&quot; 
  :age=&quot;user.age&quot; 
  :email=&quot;user.email&quot; 
/&gt;

&lt;!-- Con v-bind (más conciso) --&gt;
&lt;UserProfile v-bind=&quot;user&quot; /&gt;

&lt;!-- Combinando con otros props --&gt;
&lt;UserProfile v-bind=&quot;user&quot; :is-verified=&quot;true&quot; /&gt;</code></pre></div></div><div class="pattern-item" data-v-82554015><h3 class="code-title" data-v-82554015>Props con Valores Computados</h3><div class="code-block" data-v-82554015><pre class="code" data-v-82554015><code data-v-82554015>&lt;template&gt;
  &lt;ProductCard 
    :product=&quot;product&quot;
    :discounted-price=&quot;discountedPrice&quot;
    :is-on-sale=&quot;isOnSale&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const discountedPrice = computed(() =&gt; 
  product.price * 0.8
)

const isOnSale = computed(() =&gt; 
  product.stock &gt; 0 &amp;&amp; product.price &lt; 100
)
&lt;/script&gt;</code></pre></div></div></div><hr data-v-82554015><h2 class="subtitle" data-v-82554015>Buenas Prácticas</h2><div class="best-practices" data-v-82554015><div class="practice-item" data-v-82554015><h4 data-v-82554015>Usar camelCase en JavaScript</h4><pre class="code-small" data-v-82554015><code data-v-82554015>defineProps({
  userName: String,    // ✅ Bueno
  user_name: String    // ❌ Evitar
})</code></pre></div><div class="practice-item" data-v-82554015><h4 data-v-82554015>Usar kebab-case en Templates</h4><pre class="code-small" data-v-82554015><code data-v-82554015>&lt;!-- ✅ Bueno --&gt;
&lt;MyComponent user-name=&quot;Ana&quot; /&gt;

&lt;!-- ❌ No recomendado --&gt;
&lt;MyComponent userName=&quot;Ana&quot; /&gt;</code></pre></div><div class="practice-item" data-v-82554015><h4 data-v-82554015>Validar Props Importantes</h4><pre class="code-small" data-v-82554015><code data-v-82554015>defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  email: {
    type: String,
    validator: (email) =&gt; isValidEmail(email)
  }
})</code></pre></div><div class="practice-item" data-v-82554015><h4 data-v-82554015>Proporcionar Valores por Defecto</h4><pre class="code-small" data-v-82554015><code data-v-82554015>defineProps({
  count: {
    type: Number,
    default: 0
  },
  items: {
    type: Array,
    default: () =&gt; []  // ✅ Usar función para objetos/arrays
  }
})</code></pre></div></div><hr data-v-82554015><h2 class="subtitle" data-v-82554015>Errores Comunes</h2><div class="error-examples" data-v-82554015><div class="error-item" data-v-82554015><h4 data-v-82554015>Mutación Directa de Props</h4><pre class="code-error" data-v-82554015><code data-v-82554015>&lt;script setup&gt;
defineProps({ count: Number })

// ❌ ERROR: No mutar props directamente
props.count++

// ✅ SOLUCIÓN: Usar emits
const emit = defineEmits([&#39;update:count&#39;])
const updateCount = () =&gt; emit(&#39;update:count&#39;, props.count + 1)
&lt;/script&gt;</code></pre></div><div class="error-item" data-v-82554015><h4 data-v-82554015>Falta de Validación</h4><pre class="code-error" data-v-82554015><code data-v-82554015>// ❌ Peligroso sin validación
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
})</code></pre></div></div><div class="summary" data-v-82554015><h3 class="subtitle-sm" data-v-82554015>Resumen Clave</h3><div class="summary-grid" data-v-82554015><div class="summary-item" data-v-82554015><p data-v-82554015>Los props permiten comunicación padre-hijo</p></div><div class="summary-item" data-v-82554015><p data-v-82554015>Siempre valida props importantes</p></div><div class="summary-item" data-v-82554015><p data-v-82554015>Nunca mutes props directamente</p></div><div class="summary-item" data-v-82554015><p data-v-82554015>Usa valores por defecto apropiados</p></div></div></div>`,10))])]))}},fv=we(pv,[["__scopeId","data-v-82554015"]]),ds={xs:18,sm:24,md:32,lg:38,xl:46},Oi={size:String};function Vi(e,t=ds){return Q(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function Ms(e,t,a,n){return Object.defineProperty(e,t,{get:a,set:n,enumerable:!0}),e}function Is(e){return yn(qs(e))}function vv(e){return yn(e)}const An=(e,t)=>{const a=Ut(e);for(const n in e)Ms(t,n,()=>a[n],s=>{a[n]=s});return t};function mv(e,t){return e!==void 0&&e()||t}function ma(e,t){return e!==void 0?t.concat(e()):t}const Vo="0 0 24 24",Hn=e=>e,Qn=e=>`ionicons ${e}`,Di={"mdi-":e=>`mdi ${e}`,"icon-":Hn,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Qn,"ion-ios":Qn,"ion-logo":Qn,"iconfont ":Hn,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":Hn},Ni={o_:"-outlined",r_:"-round",s_:"-sharp"},Bi={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},gv=new RegExp("^("+Object.keys(Di).join("|")+")"),hv=new RegExp("^("+Object.keys(Ni).join("|")+")"),Do=new RegExp("^("+Object.keys(Bi).join("|")+")"),bv=/^[Mm]\s?[-+]?\.?\d/,yv=/^img:/,Cv=/^svguse:/,xv=/^ion-/,_v=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,No=Is({name:"QIcon",props:{...Oi,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=Da(),n=Vi(e),s=Q(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=Q(()=>{let r,i=e.name;if(i==="none"||!i)return{none:!0};if(a.iconMapFn!==null){const d=a.iconMapFn(i);if(d!==void 0)if(d.icon!==void 0){if(i=d.icon,i==="none"||!i)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(bv.test(i)===!0){const[d,p=Vo]=i.split("|");return{svg:!0,viewBox:p,nodes:d.split("&&").map(m=>{const[f,h,S]=m.split("@@");return Ce("path",{style:h,d:f,transform:S})})}}if(yv.test(i)===!0)return{img:!0,src:i.substring(4)};if(Cv.test(i)===!0){const[d,p=Vo]=i.split("|");return{svguse:!0,src:d.substring(7),viewBox:p}}let c=" ";const u=i.match(gv);if(u!==null)r=Di[u[1]](i);else if(_v.test(i)===!0)r=i;else if(xv.test(i)===!0)r=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(Do.test(i)===!0){r="notranslate material-symbols";const d=i.match(Do);d!==null&&(i=i.substring(6),r+=Bi[d[1]]),c=i}else{r="notranslate material-icons";const d=i.match(hv);d!==null&&(i=i.substring(2),r+=Ni[d[1]]),c=i}return{cls:r,content:c}});return()=>{const r={class:s.value,style:n.value,"aria-hidden":"true"};return o.value.none===!0?Ce(e.tag,r,mv(t.default)):o.value.img===!0?Ce(e.tag,r,ma(t.default,[Ce("img",{src:o.value.src})])):o.value.svg===!0?Ce(e.tag,r,ma(t.default,[Ce("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?Ce(e.tag,r,ma(t.default,[Ce("svg",{viewBox:o.value.viewBox},[Ce("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(r.class+=" "+o.value.cls),Ce(e.tag,r,ma(t.default,[o.value.content])))}}}),Sv={size:{type:[String,Number],default:"1em"},color:String};function kv(e){return{cSize:Q(()=>e.size in ds?`${ds[e.size]}px`:e.size),classes:Q(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const wv=Is({name:"QSpinner",props:{...Sv,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=kv(e);return()=>Ce("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[Ce("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function qv(e,t){const a=e.style;for(const n in t)a[n]=t[n]}const Ba={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(Ba,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function $a(){}function Pv(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function Ui(e){e.stopPropagation()}function Ev(e){e.cancelable!==!1&&e.preventDefault()}function Qt(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Av(e,t,a){const n=`__q_${t}_evt`;e[n]=e[n]!==void 0?e[n].concat(a):a,a.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],Ba[s[3]])})}function Rv(e,t){const a=`__q_${t}_evt`;e[a]!==void 0&&(e[a].forEach(n=>{n[0].removeEventListener(n[1],e[n[2]],Ba[n[3]])}),e[a]=void 0)}let zi=!1;function jv(e){zi=e.isComposing===!0}function Tv(e){return zi===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function us(e,t){return Tv(e)===!0?!1:[].concat(t).includes(e.keyCode)}function Mv(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function Bo(e,t,a,n){a.modifiers.stop===!0&&Ui(e);const s=a.modifiers.color;let o=a.modifiers.center;o=o===!0||n===!0;const r=document.createElement("span"),i=document.createElement("span"),c=Pv(e),{left:u,top:d,width:p,height:m}=t.getBoundingClientRect(),f=Math.sqrt(p*p+m*m),h=f/2,S=`${(p-f)/2}px`,P=o?S:`${c.left-u-h}px`,j=`${(m-f)/2}px`,T=o?j:`${c.top-d-h}px`;i.className="q-ripple__inner",qv(i,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${P},${T},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${s?" text-"+s:""}`,r.setAttribute("dir","ltr"),r.appendChild(i),t.appendChild(r);const A=()=>{r.remove(),clearTimeout(b)};a.abort.push(A);let b=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${S},${j},0) scale3d(1,1,1)`,i.style.opacity=.2,b=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,b=setTimeout(()=>{r.remove(),a.abort.splice(a.abort.indexOf(A),1)},275)},250)},50)}function Uo(e,{modifiers:t,value:a,arg:n}){const s=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||n,keyCodes:[].concat(s.keyCodes||13)}}const Iv=vv({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(s){n.enabled===!0&&s.qSkipRipple!==!0&&s.type===(n.modifiers.early===!0?"pointerdown":"click")&&Bo(s,e,n,s.qKeyEvent===!0)},keystart:Mv(s=>{n.enabled===!0&&s.qSkipRipple!==!0&&us(s,n.modifiers.keyCodes)===!0&&s.type===`key${n.modifiers.early===!0?"down":"up"}`&&Bo(s,e,n,!0)},300)};Uo(n,t),e.__qripple=n,Av(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Uo(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),Rv(t,"main"),delete e._qripple)}}),Fi={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},$v=Object.keys(Fi),Lv={align:{type:String,validator:e=>$v.includes(e)}};function Ov(e){return Q(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Fi[t]}`})}function Vv(e){return e.appContext.config.globalProperties.$router!==void 0}function zo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Fo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Dv(e,t){for(const a in t){const n=t[a],s=e[a];if(typeof n=="string"){if(n!==s)return!1}else if(Array.isArray(s)===!1||s.length!==n.length||n.some((o,r)=>o!==s[r]))return!1}return!0}function Ho(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Nv(e,t){return Array.isArray(e)===!0?Ho(e,t):Array.isArray(t)===!0?Ho(t,e):e===t}function Bv(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Nv(e[a],t[a])===!1)return!1;return!0}const Uv={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function zv({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=Da(),{props:n,proxy:s,emit:o}=a,r=Vv(a),i=Q(()=>n.disable!==!0&&n.href!==void 0),c=Q(t===!0?()=>r===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!=="":()=>r===!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),u=Q(()=>c.value===!0?T(n.to):null),d=Q(()=>u.value!==null),p=Q(()=>i.value===!0||d.value===!0),m=Q(()=>n.type==="a"||p.value===!0?"a":n.tag||e||"div"),f=Q(()=>i.value===!0?{href:n.href,target:n.target}:d.value===!0?{href:u.value.href,target:n.target}:{}),h=Q(()=>{if(d.value===!1)return-1;const{matched:q}=u.value,{length:K}=q,J=q[K-1];if(J===void 0)return-1;const ge=s.$route.matched;if(ge.length===0)return-1;const F=ge.findIndex(Fo.bind(null,J));if(F!==-1)return F;const ae=zo(q[K-2]);return K>1&&zo(J)===ae&&ge[ge.length-1].path!==ae?ge.findIndex(Fo.bind(null,q[K-2])):F}),S=Q(()=>d.value===!0&&h.value!==-1&&Dv(s.$route.params,u.value.params)),P=Q(()=>S.value===!0&&h.value===s.$route.matched.length-1&&Bv(s.$route.params,u.value.params)),j=Q(()=>d.value===!0?P.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":S.value===!0?` ${n.activeClass}`:"":"");function T(q){try{return s.$router.resolve(q)}catch{}return null}function A(q,{returnRouterError:K,to:J=n.to,replace:ge=n.replace}={}){if(n.disable===!0)return q.preventDefault(),Promise.resolve(!1);if(q.metaKey||q.altKey||q.ctrlKey||q.shiftKey||q.button!==void 0&&q.button!==0||n.target==="_blank")return Promise.resolve(!1);q.preventDefault();const F=s.$router[ge===!0?"replace":"push"](J);return K===!0?F:F.then(()=>{}).catch(()=>{})}function b(q){if(d.value===!0){const K=J=>A(q,J);o("click",q,K),q.defaultPrevented!==!0&&K()}else o("click",q)}return{hasRouterLink:d,hasHrefLink:i,hasLink:p,linkTag:m,resolvedLink:u,linkIsActive:S,linkIsExactActive:P,linkClass:j,linkAttrs:f,getLink:T,navigateToRouterLink:A,navigateOnClick:b}}const Qo={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Fv={xs:8,sm:10,md:14,lg:20,xl:24},Hv=["button","submit","reset"],Qv=/[^\s]\/[^\s]/,Wv=["flat","outline","push","unelevated"];function Kv(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Gv={...Oi,...Uv,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Wv.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Lv.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Jv={...Gv,round:Boolean};function Yv(e){const t=Vi(e,Fv),a=Ov(e),{hasRouterLink:n,hasLink:s,linkTag:o,linkAttrs:r,navigateOnClick:i}=zv({fallbackTag:"button"}),c=Q(()=>{const P=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},P,{padding:e.padding.split(/\s+/).map(j=>j in Qo?Qo[j]+"px":j).join(" "),minWidth:"0",minHeight:"0"}):P}),u=Q(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=Q(()=>e.disable!==!0&&e.loading!==!0),p=Q(()=>d.value===!0?e.tabindex||0:-1),m=Q(()=>Kv(e,"standard")),f=Q(()=>{const P={tabindex:p.value};return s.value===!0?Object.assign(P,r.value):Hv.includes(e.type)===!0&&(P.type=e.type),o.value==="a"?(e.disable===!0?P["aria-disabled"]="true":P.href===void 0&&(P.role="button"),n.value!==!0&&Qv.test(e.type)===!0&&(P.type=e.type)):e.disable===!0&&(P.disabled="",P["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(P,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),P}),h=Q(()=>{let P;e.color!==void 0?e.flat===!0||e.outline===!0?P=`text-${e.textColor||e.color}`:P=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(P=`text-${e.textColor}`);const j=e.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${m.value} q-btn--${j}`+(P!==void 0?" "+P:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),S=Q(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:c,innerClasses:S,attributes:f,hasLink:s,linkTag:o,navigateOnClick:i,isActionable:d}}const{passiveCapture:Fe}=Ba;let Wt=null,Kt=null,Gt=null;const Wa=Is({name:"QBtn",props:{...Jv,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=Da(),{classes:s,style:o,innerClasses:r,attributes:i,hasLink:c,linkTag:u,navigateOnClick:d,isActionable:p}=Yv(e),m=U(null),f=U(null);let h=null,S,P=null;const j=Q(()=>e.label!==void 0&&e.label!==null&&e.label!==""),T=Q(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),A=Q(()=>({center:e.round})),b=Q(()=>{const V=Math.max(0,Math.min(100,e.percentage));return V>0?{transition:"transform 0.6s",transform:`translateX(${V-100}%)`}:{}}),q=Q(()=>{if(e.loading===!0)return{onMousedown:ne,onTouchstart:ne,onClick:ne,onKeydown:ne,onKeyup:ne};if(p.value===!0){const V={onClick:J,onKeydown:ge,onMousedown:ae};if(n.$q.platform.has.touch===!0){const se=e.onTouchstart!==void 0?"":"Passive";V[`onTouchstart${se}`]=F}return V}return{onClick:Qt}}),K=Q(()=>({ref:m,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:o.value,...i.value,...q.value}));function J(V){if(m.value!==null){if(V!==void 0){if(V.defaultPrevented===!0)return;const se=document.activeElement;if(e.type==="submit"&&se!==document.body&&m.value.contains(se)===!1&&se.contains(m.value)===!1){V.qAvoidFocus!==!0&&m.value.focus();const he=()=>{document.removeEventListener("keydown",Qt,!0),document.removeEventListener("keyup",he,Fe),m.value?.removeEventListener("blur",he,Fe)};document.addEventListener("keydown",Qt,!0),document.addEventListener("keyup",he,Fe),m.value.addEventListener("blur",he,Fe)}}d(V)}}function ge(V){m.value!==null&&(a("keydown",V),us(V,[13,32])===!0&&Kt!==m.value&&(Kt!==null&&O(),V.defaultPrevented!==!0&&(V.qAvoidFocus!==!0&&m.value.focus(),Kt=m.value,m.value.classList.add("q-btn--active"),document.addEventListener("keyup",te,!0),m.value.addEventListener("blur",te,Fe)),Qt(V)))}function F(V){m.value!==null&&(a("touchstart",V),V.defaultPrevented!==!0&&(Wt!==m.value&&(Wt!==null&&O(),Wt=m.value,h=V.target,h.addEventListener("touchcancel",te,Fe),h.addEventListener("touchend",te,Fe)),S=!0,P!==null&&clearTimeout(P),P=setTimeout(()=>{P=null,S=!1},200)))}function ae(V){m.value!==null&&(V.qSkipRipple=S===!0,a("mousedown",V),V.defaultPrevented!==!0&&Gt!==m.value&&(Gt!==null&&O(),Gt=m.value,m.value.classList.add("q-btn--active"),document.addEventListener("mouseup",te,Fe)))}function te(V){if(m.value!==null&&!(V?.type==="blur"&&document.activeElement===m.value)){if(V?.type==="keyup"){if(Kt===m.value&&us(V,[13,32])===!0){const se=new MouseEvent("click",V);se.qKeyEvent=!0,V.defaultPrevented===!0&&Ev(se),V.cancelBubble===!0&&Ui(se),m.value.dispatchEvent(se),Qt(V),V.qKeyEvent=!0}a("keyup",V)}O()}}function O(V){const se=f.value;V!==!0&&(Wt===m.value||Gt===m.value)&&se!==null&&se!==document.activeElement&&(se.setAttribute("tabindex",-1),se.focus()),Wt===m.value&&(h!==null&&(h.removeEventListener("touchcancel",te,Fe),h.removeEventListener("touchend",te,Fe)),Wt=h=null),Gt===m.value&&(document.removeEventListener("mouseup",te,Fe),Gt=null),Kt===m.value&&(document.removeEventListener("keyup",te,!0),m.value?.removeEventListener("blur",te,Fe),Kt=null),m.value?.classList.remove("q-btn--active")}function ne(V){Qt(V),V.qSkipRipple=!0}return Sn(()=>{O(!0)}),Object.assign(n,{click:V=>{p.value===!0&&J(V)}}),()=>{let V=[];e.icon!==void 0&&V.push(Ce(No,{name:e.icon,left:e.stack!==!0&&j.value===!0,role:"img"})),j.value===!0&&V.push(Ce("span",{class:"block"},[e.label])),V=ma(t.default,V),e.iconRight!==void 0&&e.round===!1&&V.push(Ce(No,{name:e.iconRight,right:e.stack!==!0&&j.value===!0,role:"img"}));const se=[Ce("span",{class:"q-focus-helper",ref:f})];return e.loading===!0&&e.percentage!==void 0&&se.push(Ce("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[Ce("span",{class:"q-btn__progress-indicator fit block",style:b.value})])),se.push(Ce("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},V)),e.loading!==null&&se.push(Ce(Nl,{name:"q-transition--fade"},()=>e.loading===!0?[Ce("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[Ce(wv)])]:null)),Se(Ce(u.value,K.value,se),[[Iv,T.value,void 0,A.value]])}}}),Xv={class:"father"},Zv={class:"content"},em={class:"code-block"},tm={class:"code"},am={class:"example"},nm={class:"p"},sm={class:"q-pa-md demo-quasar"},om={__name:"templateQuasar",setup(e){return U(!0),(t,a)=>(Y(),ee("div",Xv,[l("section",Zv,[a[3]||(a[3]=X(`<h1 class="title" data-v-4ba04cb9>Crear un Proyecto con Quasar Framework</h1><p class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Quasar Framework</strong> es un framework de Vue.js de código abierto que permite desarrollar aplicaciones web responsive, PWA, aplicaciones móviles y de escritorio con una sola base de código. </p><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>¿Qué es Quasar Framework?</h2><p class="p" data-v-4ba04cb9> Quasar es más que un simple framework de UI - es un framework completo que proporciona: </p><ul data-v-4ba04cb9><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Componentes UI</strong> de alta calidad</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Build system</strong> configurado y optimizado</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Multiplataforma</strong>: Web, Mobile, Desktop, PWA</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Performance</strong> optimizado por defecto</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>TypeScript</strong> soporte nativo</li></ul><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>🚀 Características Principales</h3><p class="p" data-v-4ba04cb9> Quasar permite desarrollar una vez y desplegar en múltiples plataformas sin necesidad de cambiar el código. </p></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Requisitos Previos</h2><p class="p" data-v-4ba04cb9> Antes de instalar Quasar, asegúrate de tener lo siguiente en tu sistema: </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Verificar Instalaciones</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9># Verificar versi&amp;oacute;n de Node.js (requerido 14+)
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

# Esto crea: src/components/MiBoton.vue</code></pre></div>`,40)),l("div",em,[a[0]||(a[0]=l("h3",{class:"code-title"},"Componente Quasar Básico",-1)),l("pre",tm,[l("code",null,`<template>
  <div class="q-pa-md">
    <q-btn 
      color="primary"
      label="Mi Bot&oacute;n Quasar"
      @click="handleClick"
      icon="favorite"
    />
    
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">`+M(t.title)+`</div>
        <div class="text-subtitle2">`+M(t.subtitle)+`</div>
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
`,1)])]),l("div",am,[a[2]||(a[2]=l("h3",{class:"example-title"},"Demo: Componentes Quasar",-1)),l("div",nm,[l("div",sm,[ve(Wa,{color:"primary",label:"Botón Primario",class:"q-mr-sm"}),ve(Wa,{color:"secondary",label:"Botón Secundario",class:"q-mr-sm"}),ve(Wa,{color:"positive",label:"Éxito",class:"q-mr-sm"}),ve(Wa,{color:"negative",label:"Error"})]),a[1]||(a[1]=l("p",{class:"q-mt-md"},"Estos son ejemplos de componentes Quasar integrados.",-1))])]),a[4]||(a[4]=X(`<hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Configuración: quasar.conf.js</h2><p class="p" data-v-4ba04cb9> El archivo <code data-v-4ba04cb9>quasar.conf.js</code> es el corazón de la configuración de Quasar. </p><div class="code-block" data-v-4ba04cb9><h3 class="code-title" data-v-4ba04cb9>Configuración Básica</h3><pre class="code" data-v-4ba04cb9><code data-v-4ba04cb9>module.exports = function (ctx) {
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
# Archivos en src-cordova/platforms/android/app/build/outputs/</code></pre></div><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>🌐 Plataformas de Despliegue</h3><ul data-v-4ba04cb9><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>SPA:</strong> Netlify, Vercel, GitHub Pages, Firebase Hosting</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>PWA:</strong> Mismas que SPA + App Stores (via TWA)</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>SSR:</strong> Servidor Node.js, VPS, Cloud</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Mobile:</strong> Google Play Store, Apple App Store</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>Desktop:</strong> Distribución directa o stores</li></ul></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Flujo de Trabajo Recomendado</h2><div class="lifecycle-flow" data-v-4ba04cb9><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>1</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Instalación</h4><p data-v-4ba04cb9>Instalar Quasar CLI globalmente</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>2</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Creación</h4><p data-v-4ba04cb9><code data-v-4ba04cb9>quasar create mi-proyecto</code></p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>3</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Desarrollo</h4><p data-v-4ba04cb9><code data-v-4ba04cb9>quasar dev</code> con hot-reload</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>4</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Testing</h4><p data-v-4ba04cb9>Probar en diferentes modos y plataformas</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>5</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Build</h4><p data-v-4ba04cb9><code data-v-4ba04cb9>quasar build</code> para producción</p></div></div><div class="flow-step" data-v-4ba04cb9><div class="step-number" data-v-4ba04cb9>6</div><div class="step-content" data-v-4ba04cb9><h4 data-v-4ba04cb9>Despliegue</h4><p data-v-4ba04cb9>Desplegar en la plataforma elegida</p></div></div></div><hr data-v-4ba04cb9><h2 class="subtitle" data-v-4ba04cb9>Ventajas de Usar Quasar</h2><ul data-v-4ba04cb9><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>🚀 Productividad:</strong> Desarrollo rápido con componentes pre-construidos</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>📱 Multiplataforma:</strong> Un código para web, mobile y desktop</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>🎨 Diseño Consistente:</strong> Material Design por defecto</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>⚡ Performance:</strong> Optimizado y tree-shaking automático</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>🛠️ Tooling Completo:</strong> CLI poderosa con todos los modos integrados</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>📚 Documentación Excelente:</strong> Guías completas y ejemplos</li><li class="p" data-v-4ba04cb9><strong data-v-4ba04cb9>👥 Comunidad Activa:</strong> Soporte y plugins de la comunidad</li></ul><div class="example" data-v-4ba04cb9><h3 class="example-title" data-v-4ba04cb9>✅ Listo para Empezar</h3><p class="p" data-v-4ba04cb9> Con Quasar tienes todo lo necesario para crear aplicaciones modernas, responsive y multiplataforma. ¡Es hora de empezar tu primer proyecto! </p></div>`,16))])]))}},rm=we(om,[["__scopeId","data-v-4ba04cb9"]]),im={class:"father"},cm={__name:"templateQuasarInstallVue",setup(e){return(t,a)=>(Y(),ee("div",im,[...a[0]||(a[0]=[X(`<section class="content" data-v-0c929ac5><h1 class="title" data-v-0c929ac5>Instalar Quasar en Proyecto Vite Existente</h1><p class="p" data-v-0c929ac5> Si ya tienes un proyecto Vue creado con <strong data-v-0c929ac5>Vite</strong> y quieres integrar <strong data-v-0c929ac5>Quasar Framework</strong>, este manual te guiará paso a paso en el proceso de instalación y configuración. </p><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>⚠️ Consideraciones Previas</h3><p class="p" data-v-0c929ac5> Esta guía asume que tienes un proyecto Vue 3 funcionando creado con <code data-v-0c929ac5>npm create vite@latest</code> y deseas añadir Quasar sin empezar desde cero. </p></div><hr data-v-0c929ac5><h2 class="subtitle" data-v-0c929ac5>Requisitos del Proyecto</h2><p class="p" data-v-0c929ac5> Verifica que tu proyecto cumple con los siguientes requisitos: </p><div class="code-block" data-v-0c929ac5><h3 class="code-title" data-v-0c929ac5>Verificar Versiones</h3><pre class="code" data-v-0c929ac5><code data-v-0c929ac5># Verificar Vue 3
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
└── quasar.config.js         # Configuraci&amp;oacute;n de Quasar</code></pre></div><div class="example" data-v-0c929ac5><h3 class="example-title" data-v-0c929ac5>🎉 ¡Listo!</h3><p class="p" data-v-0c929ac5> Ahora tienes Quasar Framework completamente integrado en tu proyecto Vite existente. Puedes comenzar a usar todos los componentes y características de Quasar mientras mantienes tu configuración personalizada de Vite. </p></div></section>`,1)])]))}},lm=we(cm,[["__scopeId","data-v-0c929ac5"]]),dm={class:"father"},um={class:"content"},pm={class:"example"},fm={class:"p"},vm={class:"demo-nav"},mm={class:"demo-text"},gm={class:"example"},hm={class:"p"},bm={class:"demo-text"},ym={class:"example"},Cm={class:"dashboard-demo"},xm={class:"sidebar-demo"},_m={class:"content-demo"},Sm={key:0},km={key:1},wm={key:2},qm={class:"example"},Pm={class:"p"},Em={class:"demo-text"},Am={__name:"vueRouter",setup(e){const t=U("123"),a=U("Usuario Demo"),n=U("inicio"),s=U(!1),o=U("");_u();const r=()=>{t.value&&(a.value=`Usuario ${t.value}`,o.value=`Navegando al perfil del usuario ${t.value}`)},i=()=>{o.value="Navegando a la página de inicio"},c=()=>{o.value="Navegando a la página Acerca De"},u=()=>{o.value="Navegando hacia atrás en el historial"},d=()=>{o.value="Navegando hacia adelante en el historial"},p=()=>{s.value?confirm("Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?")?(o.value="Navegación permitida - cambios descartados",s.value=!1):o.value="Navegación cancelada por el usuario":o.value="Navegación permitida - sin cambios pendientes"};return Va(()=>{console.log("Componente Vue Router montado")}),(m,f)=>{const h=oa("router-link");return Y(),ee("div",dm,[l("section",um,[f[20]||(f[20]=X(`<h1 class="title" data-v-3a50ee9c>Vue Router</h1><p class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Vue Router</strong> es la librería oficial de enrutamiento para Vue.js. Permite crear aplicaciones de una sola página (SPA) con múltiples vistas y navegación entre ellas sin recargar la página completa. </p><hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>¿Por qué usar Vue Router?</h2><p class="p" data-v-3a50ee9c> Vue Router proporciona una experiencia de usuario fluida al permitir la navegación entre diferentes vistas manteniendo el estado de la aplicación. Es esencial para construir aplicaciones Vue complejas con múltiples páginas. </p><div class="example" data-v-3a50ee9c><h3 class="example-title" data-v-3a50ee9c>Características Principales</h3><ul data-v-3a50ee9c><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Navegación declarativa:</strong> Usa componentes router-link para navegación</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Rutas anidadas:</strong> Soporte para layouts complejos</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Navegación programática:</strong> Control de navegación desde el código</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Protección de rutas:</strong> Guards para control de acceso</li><li class="p" data-v-3a50ee9c><strong data-v-3a50ee9c>Modos de historia:</strong> Hash mode y HTML5 history mode</li></ul></div><hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Instalación y Configuración</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Instalación</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
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
        </code></pre></div>`,13)),l("div",pm,[f[9]||(f[9]=l("h3",{class:"example-title"},"Navegación Activa",-1)),l("div",fm,[l("nav",vm,[ve(h,{to:"/",class:"router-link","active-class":"active"},{default:Et(()=>[...f[5]||(f[5]=[Z("Inicio",-1)])]),_:1}),ve(h,{to:"/about",class:"router-link","active-class":"active"},{default:Et(()=>[...f[6]||(f[6]=[Z("Acerca de",-1)])]),_:1}),ve(h,{to:"/contact",class:"router-link","active-class":"active"},{default:Et(()=>[...f[7]||(f[7]=[Z("Contacto",-1)])]),_:1})]),l("p",mm,[f[8]||(f[8]=Z("Ruta actual: ",-1)),l("strong",null,M(m.$route.path),1)])])]),f[21]||(f[21]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Rutas Dinámicas y Parámetros</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Definición de Rutas con Parámetros</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
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
        </code></pre></div>`,4)),l("div",gm,[f[11]||(f[11]=l("h3",{class:"example-title"},"Ejemplo de Ruta Dinámica",-1)),l("div",hm,[Se(l("input",{"onUpdate:modelValue":f[0]||(f[0]=S=>t.value=S),placeholder:"ID de usuario",class:"demo-input"},null,512),[[He,t.value]]),l("button",{onClick:r,class:"demo-button"},"Ver Perfil"),l("p",bm,[f[10]||(f[10]=Z("Usuario actual: ",-1)),l("strong",null,M(a.value),1)])])]),f[22]||(f[22]=l("hr",null,null,-1)),f[23]||(f[23]=l("h2",{class:"subtitle"},"Navegación Programática",-1)),f[24]||(f[24]=l("div",{class:"code-block"},[l("h3",{class:"code-title"},"Usando useRouter"),l("pre",{class:"code"},[l("code",null,`
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
        `)])],-1)),l("div",{class:"example"},[f[13]||(f[13]=l("h3",{class:"example-title"},"Ejemplo de Navegación",-1)),l("div",{class:"p"},[l("button",{onClick:i,class:"demo-button"},"Ir a Inicio"),l("button",{onClick:c,class:"demo-button"},"Ir a Acerca De"),l("button",{onClick:u,class:"demo-button"},"← Atrás"),l("button",{onClick:d,class:"demo-button"},"Adelante →"),f[12]||(f[12]=l("p",{class:"demo-text"},"Historial de navegación simulado",-1))])]),f[25]||(f[25]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Rutas Anidadas (Nested Routes)</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Configuración de Rutas Anidadas</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
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
        </code></pre></div>`,4)),l("div",ym,[f[18]||(f[18]=l("h3",{class:"example-title"},"Ejemplo de Dashboard",-1)),l("div",Cm,[l("div",xm,[f[14]||(f[14]=l("h4",null,"Dashboard",-1)),l("button",{onClick:f[1]||(f[1]=S=>n.value="inicio"),class:ot([{active:n.value==="inicio"},"nav-button"])}," Inicio ",2),l("button",{onClick:f[2]||(f[2]=S=>n.value="perfil"),class:ot([{active:n.value==="perfil"},"nav-button"])}," Perfil ",2),l("button",{onClick:f[3]||(f[3]=S=>n.value="configuracion"),class:ot([{active:n.value==="configuracion"},"nav-button"])}," Configuración ",2)]),l("div",_m,[n.value==="inicio"?(Y(),ee("div",Sm,[...f[15]||(f[15]=[l("h4",null,"Bienvenido al Dashboard",-1),l("p",null,"Esta es la página de inicio del dashboard.",-1)])])):Nt("",!0),n.value==="perfil"?(Y(),ee("div",km,[...f[16]||(f[16]=[l("h4",null,"Perfil de Usuario",-1),l("p",null,"Gestiona tu información personal aquí.",-1)])])):Nt("",!0),n.value==="configuracion"?(Y(),ee("div",wm,[...f[17]||(f[17]=[l("h4",null,"Configuración",-1),l("p",null,"Ajusta las preferencias de tu cuenta.",-1)])])):Nt("",!0)])])]),f[26]||(f[26]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Router Guards - Protección de Rutas</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Guards Globales</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
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
        </code></pre></div>`,5)),l("div",qm,[f[19]||(f[19]=l("h3",{class:"example-title"},"Ejemplo de Guard de Navegación",-1)),l("div",Pm,[l("p",null,"¿Tienes cambios sin guardar? "+M(s.value?"Sí":"No"),1),l("button",{onClick:f[4]||(f[4]=S=>s.value=!s.value),class:"demo-button"},M(s.value?"Descartar Cambios":"Hacer Cambios"),1),l("button",{onClick:p,class:"demo-button"},"Intentar Navegar"),l("p",Em,M(o.value),1)])]),f[27]||(f[27]=X(`<hr data-v-3a50ee9c><h2 class="subtitle" data-v-3a50ee9c>Lazy Loading de Rutas</h2><div class="code-block" data-v-3a50ee9c><h3 class="code-title" data-v-3a50ee9c>Carga Diferida con Vue 3</h3><pre class="code" data-v-3a50ee9c><code data-v-3a50ee9c>
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
        </code></pre></div>`,11))])])}}},Rm=we(Am,[["__scopeId","data-v-3a50ee9c"]]),jm={class:"father"},Tm={__name:"pinia",setup(e){return(t,a)=>(Y(),ee("div",jm,[...a[0]||(a[0]=[X(`<section class="content" data-v-75747352><h1 class="title" data-v-75747352>Pinia</h1><p class="p" data-v-75747352><strong data-v-75747352>Pinia</strong> es la librería oficial de gestión de estado para Vue.js. Es el reemplazo moderno de Vuex, diseñado específicamente para aprovechar al máximo la Composition API de Vue 3. </p><hr data-v-75747352><h2 class="subtitle" data-v-75747352>¿Por qué Pinia?</h2><p class="p" data-v-75747352> Pinia simplifica la gestión de estado eliminando conceptos complejos como mutations y proporcionando una API más directa y type-safe. </p><div class="example" data-v-75747352><h3 class="example-title" data-v-75747352>Ventajas sobre Vuex</h3><div class="comparison" data-v-75747352><div class="approach" data-v-75747352><h4 data-v-75747352>Vuex</h4><ul data-v-75747352><li class="p" data-v-75747352>Mutations, Actions, Getters</li><li class="p" data-v-75747352>Estructura más compleja</li><li class="p" data-v-75747352>Single store global</li></ul></div><div class="approach" data-v-75747352><h4 data-v-75747352>Pinia</h4><ul data-v-75747352><li class="p" data-v-75747352>Solo Actions y Getters</li><li class="p" data-v-75747352>API más simple e intuitiva</li><li class="p" data-v-75747352>Múltiples stores modulares</li></ul></div></div></div><hr data-v-75747352><h2 class="subtitle" data-v-75747352>Instalación</h2><div class="code-block" data-v-75747352><h3 class="code-title" data-v-75747352>Comandos de instalación</h3><pre class="code" data-v-75747352><code data-v-75747352>
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
        </code></pre></div></section>`,1)])]))}},Mm=we(Tm,[["__scopeId","data-v-75747352"]]),Im={class:"father"},$m={__name:"piniaPlugin",setup(e){return(t,a)=>(Y(),ee("div",Im,[...a[0]||(a[0]=[X(`<section class="content" data-v-6be88151><h1 class="title" data-v-6be88151>Pinia Plugin Persist</h1><p class="p" data-v-6be88151><strong data-v-6be88151>Pinia Plugin Persist</strong> es un plugin oficial que permite persistir el estado de tus stores en localStorage, sessionStorage u otros almacenamientos, manteniendo los datos entre sesiones del navegador. </p><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>¿Por qué usar persistencia?</h2><p class="p" data-v-6be88151> La persistencia de estado es crucial para mantener la experiencia del usuario. Permite que la aplicación recuerde preferencias, carritos de compra, datos de formularios y más, incluso después de recargar la página. </p><div class="example" data-v-6be88151><h3 class="example-title" data-v-6be88151>Casos de uso comunes</h3><ul data-v-6be88151><li class="p" data-v-6be88151><strong data-v-6be88151>Preferencias de usuario:</strong> Tema, idioma, configuraciones</li><li class="p" data-v-6be88151><strong data-v-6be88151>Carritos de compra:</strong> Items seleccionados por el usuario</li><li class="p" data-v-6be88151><strong data-v-6be88151>Datos de autenticación:</strong> Tokens e información de sesión</li><li class="p" data-v-6be88151><strong data-v-6be88151>Formularios:</strong> Datos parcialmente completados</li></ul></div><hr data-v-6be88151><h2 class="subtitle" data-v-6be88151>Instalación</h2><div class="code-block" data-v-6be88151><h3 class="code-title" data-v-6be88151>Instalación del plugin</h3><pre class="code" data-v-6be88151><code data-v-6be88151>
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
        </code></pre></div></section>`,1)])]))}},Lm=we($m,[["__scopeId","data-v-6be88151"]]),Om=[{path:"/",component:ju},{path:"/whatIs",component:$u},{path:"/requirements",component:Du},{path:"/createProject",component:Uu},{path:"/interpolation",component:Gu},{path:"/directivesVue",component:Bp},{path:"/optionsApi",component:ef},{path:"/compositionApi",component:xf},{path:"/cicleOfLife",component:Of},{path:"/importComponents",component:tv},{path:"/props",component:fv},{path:"/templateQuasar",component:rm},{path:"/templateQuasarInstall",component:lm},{path:"/vueRouter",component:Rm},{path:"/pinia",component:Mm},{path:"/piniaplugin",component:Lm}],Vm=Cu({history:Gd(),routes:Om}),Bt=U(!1);let ps;function Dm(e,t){const a=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:a[5]||a[3]||a[1]||"",version:a[4]||a[2]||"0",platform:t[0]||""}}function Nm(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const Hi="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Bm(e){const t=e.toLowerCase(),a=Nm(t),n=Dm(t,a),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};n.browser&&(s[n.browser]=!0,s.version=n.version,s.versionNumber=parseInt(n.version,10)),n.platform&&(s[n.platform]=!0);const o=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(o===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,n.browser="edge"):s.crios?(s.chrome=!0,n.browser="chrome"):s.fxios&&(s.firefox=!0,n.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(n.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&o!==!0)&&(s.webkit=!0),s.opr&&(n.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(n.browser="blackberry",s.blackberry=!0):s.playbook?(n.browser="playbook",s.playbook=!0):s.android?(n.browser="android",s.android=!0):s.kindle?(n.browser="kindle",s.kindle=!0):s.silk&&(n.browser="silk",s.silk=!0)),s.name=n.browser,s.platform=n.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Bt.value===!0&&(ps={is:{...s}}),Hi===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const r=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:r,[r]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Wo=navigator.userAgent||navigator.vendor||window.opera,Um={has:{touch:!1,webStorage:!1},within:{iframe:!1}},it={userAgent:Wo,is:Bm(Wo),has:{touch:Hi},within:{iframe:window.self!==window.top}},fs={install(e){const{$q:t}=e;Bt.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,it),Bt.value=!1}),t.platform=Ut(this)):t.platform=this}};{let e;Ms(it.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(fs,it),Bt.value===!0&&(Object.assign(fs,ps,Um),ps=null)}function zm(e,t=250,a){let n=null;function s(){const o=arguments,r=()=>{n=null,e.apply(this,o)};n!==null&&clearTimeout(n),n=setTimeout(r,t)}return s.cancel=()=>{n!==null&&clearTimeout(n)},s}const Wn=["sm","md","lg","xl"],{passive:Ko}=Ba,Fm=An({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:$a,setDebounce:$a,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:a}=window,n=a||window,s=document.scrollingElement||document.documentElement,o=a===void 0||it.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[a.width*a.scale+window.innerWidth-s.clientWidth,a.height*a.scale+window.innerHeight-s.clientHeight],r=e.config.screen?.bodyClasses===!0;this.__update=p=>{const[m,f]=o();if(f!==this.height&&(this.height=f),m!==this.width)this.width=m;else if(p!==!0)return;let h=this.sizes;this.gt.xs=m>=h.sm,this.gt.sm=m>=h.md,this.gt.md=m>=h.lg,this.gt.lg=m>=h.xl,this.lt.sm=m<h.sm,this.lt.md=m<h.md,this.lt.lg=m<h.lg,this.lt.xl=m<h.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,h=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",h!==this.name&&(r===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${h}`)),this.name=h)};let i,c={},u=16;this.setSizes=p=>{Wn.forEach(m=>{p[m]!==void 0&&(c[m]=p[m])})},this.setDebounce=p=>{u=p};const d=()=>{const p=getComputedStyle(document.body);p.getPropertyValue("--q-size-sm")&&Wn.forEach(m=>{this.sizes[m]=parseInt(p.getPropertyValue(`--q-size-${m}`),10)}),this.setSizes=m=>{Wn.forEach(f=>{m[f]&&(this.sizes[f]=m[f])}),this.__update(!0)},this.setDebounce=m=>{i!==void 0&&n.removeEventListener("resize",i,Ko),i=m>0?zm(this.__update,m):this.__update,n.addEventListener("resize",i,Ko)},this.setDebounce(u),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),r===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Bt.value===!0?t.push(d):d()}}),qe=An({isActive:!1,mode:!1},{__media:void 0,set(e){qe.mode=e,e==="auto"?(qe.__media===void 0&&(qe.__media=window.matchMedia("(prefers-color-scheme: dark)"),qe.__updateMedia=()=>{qe.set("auto")},qe.__media.addListener(qe.__updateMedia)),e=qe.__media.matches):qe.__media!==void 0&&(qe.__media.removeListener(qe.__updateMedia),qe.__media=void 0),qe.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){qe.set(qe.isActive===!1)},install({$q:e,ssrContext:t}){const a=e.config.dark;e.dark=this,this.__installed!==!0&&this.set(a!==void 0?a:!1)}});function Hm(e,t,a=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(a instanceof Element))throw new TypeError("Expected a DOM element");a.style.setProperty(`--q-${e}`,t)}function Qi(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function Qm({is:e,has:t,within:a},n){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const o=Qi(e);o!==void 0&&s.push("platform-"+o)}if(e.nativeMobile===!0){const o=e.nativeMobileWrapper;s.push(o),s.push("native-mobile"),e.ios===!0&&(n[o]===void 0||n[o].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return a.iframe===!0&&s.push("within-iframe"),s}function Wm(){const{is:e}=it,t=document.body.className,a=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)a.delete("mobile"),a.delete("platform-ios"),a.delete("platform-android"),a.add("desktop");else if(e.mobile===!0){a.delete("desktop"),a.add("mobile"),a.delete("platform-ios"),a.delete("platform-android");const s=Qi(e);s!==void 0&&a.add(`platform-${s}`)}}it.has.touch===!0&&(a.delete("no-touch"),a.add("touch")),it.within.iframe===!0&&a.add("within-iframe");const n=Array.from(a).join(" ");t!==n&&(document.body.className=n)}function Km(e){for(const t in e)Hm(t,e[t])}const Gm={install(e){if(this.__installed!==!0){if(Bt.value===!0)Wm();else{const{$q:t}=e;t.config.brand!==void 0&&Km(t.config.brand);const a=Qm(it,t.config);document.body.classList.add.apply(document.body.classList,a)}it.is.ios===!0&&document.body.addEventListener("touchstart",$a),window.addEventListener("keydown",jv,!0)}}},Wi=()=>!0;function Jm(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function Ym(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function Xm(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return Wi;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(Jm).map(Ym)),()=>t.includes(window.location.hash)}const Zm={__history:[],add:$a,remove:$a,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:a}=it.is;if(t!==!0&&a!==!0)return;const n=e.config[t===!0?"cordova":"capacitor"];if(n?.backButton===!1||a===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=r=>{r.condition===void 0&&(r.condition=Wi),this.__history.push(r)},this.remove=r=>{const i=this.__history.indexOf(r);i>=0&&this.__history.splice(i,1)};const s=Xm(Object.assign({backButtonExit:!0},n)),o=()=>{if(this.__history.length){const r=this.__history[this.__history.length-1];r.condition()===!0&&(this.__history.pop(),r.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",o,!1)}):window.Capacitor.Plugins.App.addListener("backButton",o)}},Go={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,a)=>e+"-"+t+" of "+a,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Jo(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,a)=>a===0?t.toLowerCase():a>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const qt=An({__qLang:{}},{getLocale:Jo,set(e=Go,t){const a={...e,rtl:e.rtl===!0,getLocale:Jo};{if(a.set=qt.set,qt.__langConfig===void 0||qt.__langConfig.noHtmlAttrs!==!0){const n=document.documentElement;n.setAttribute("dir",a.rtl===!0?"rtl":"ltr"),n.setAttribute("lang",a.isoName)}Object.assign(qt.__qLang,a)}},install({$q:e,lang:t,ssrContext:a}){e.lang=qt.__qLang,qt.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(n){return Reflect.ownKeys(n).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||Go))}}),eg={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},dn=An({iconMapFn:null,__qIconSet:{}},{set(e,t){const a={...e};a.set=dn.set,Object.assign(dn.__qIconSet,a)},install({$q:e,iconSet:t,ssrContext:a}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Ms(e,"iconMapFn",()=>this.iconMapFn,n=>{this.iconMapFn=n}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(n){return Reflect.ownKeys(n).filter(s=>s!=="set")}}),this.set(t||eg))}}),tg="_q_",Yo={};let Ki=!1;function ag(){Ki=!0}function Xo(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const Zo=[fs,Gm,qe,Fm,Zm,qt,dn];function er(e,t){t.forEach(a=>{a.install(e),a.__installed=!0})}function ng(e,t,a){e.config.globalProperties.$q=a.$q,e.provide(tg,a.$q),er(a,Zo),t.components!==void 0&&Object.values(t.components).forEach(n=>{Xo(n)===!0&&n.name!==void 0&&e.component(n.name,n)}),t.directives!==void 0&&Object.values(t.directives).forEach(n=>{Xo(n)===!0&&n.name!==void 0&&e.directive(n.name,n)}),t.plugins!==void 0&&er(a,Object.values(t.plugins).filter(n=>typeof n.install=="function"&&Zo.includes(n)===!1)),Bt.value===!0&&(a.$q.onSSRHydrated=()=>{a.onSSRHydrated.forEach(n=>{n()}),a.$q.onSSRHydrated=()=>{}})}const sg=function(e,t={}){const a={version:"2.18.2"};Ki===!1?(t.config!==void 0&&Object.assign(Yo,t.config),a.config={...Yo},ag()):a.config=t.config||{},ng(e,t,{parentApp:e,$q:a,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},og={name:"Quasar",version:"2.18.2",install:sg,lang:qt,iconSet:dn};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const rg=Symbol();var tr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(tr||(tr={}));function ig(){const e=ic(!0),t=e.run(()=>U({}));let a=[],n=[];const s=yn({install(o){s._a=o,o.provide(rg,s),o.config.globalProperties.$pinia=s,n.forEach(r=>a.push(r)),n=[]},use(o){return this._a?a.push(o):n.push(o),this},_p:a,_a:null,_e:e,_s:new Map,state:t});return s}const Rn=ud(hd),cg=ig();Rn.use(og,{plugins:{}});Rn.use(Vm);Rn.use(cg);Rn.mount("#app");
