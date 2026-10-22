var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var te=ee.prototype=new b;te.constructor=ee,_(te,y.prototype),te.isPureReactComponent=!0;var x=Array.isArray;function ne(){}var S={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return C(e.type,t,e.props)}function ae(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function oe(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var se=/\/+/g;function ce(e,t){return typeof e==`object`&&e&&e.key!=null?oe(``+e.key):t.toString(36)}function le(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ne,ne):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ue(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ue(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ce(e,0):a,x(o)?(i=``,c!=null&&(i=c.replace(se,`$&/`)+`/`),ue(o,r,i,``,function(e){return e})):o!=null&&(ae(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(se,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(x(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ce(a,u),c+=ue(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ce(a,u++),c+=ue(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ue(le(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function de(e,t,n){if(e==null)return e;var r=[],i=0;return ue(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function fe(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function me(e){var t=S.T,n={};n.types=t===null?null:t.types,S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ne,pe)}catch(e){pe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}}function he(e){var t=S.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else me(he.bind(null,e))}var ge={map:de,forEach:function(e,t,n){de(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return de(e,function(){t++}),t},toArray:function(e){return de(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ge,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.addTransitionType=he,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!re.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)re.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ae,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:fe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=me,e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.3.1`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,te||(te=!0,ie());else{var t=n(l);t!==null&&se(ee,t.startTime-e)}}}var te=!1,x=-1,ne=5,S=-1;function re(){return g?!0:!(e.unstable_now()-S<ne)}function C(){if(g=!1,te){var t=e.unstable_now();S=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(x),x=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():te=!1}}}var ie;if(typeof y==`function`)ie=function(){y(C)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=C,ie=function(){oe.postMessage(null)}}else ie=function(){_(C,0)};function se(t,n){x=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ne=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(x),x=-1):h=!0,se(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te||(te=!0,ie()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`),s=Symbol.for(`react.recoverable`),c=Symbol.for(`react.optimistic_key`);function l(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:r===c?c:``+r,children:e,containerInfo:t,implementation:n}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.browser=function(e){return{$$typeof:s,_reason:e}},e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return l(e,t,null,n)},e.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},e.useFormStatus=function(){return u.H.useHostTransitionStatus()},e.version=`19.3.1`})),o=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var ee=null,te=null;function x(e,t,n){return e===n||e===t&&(ee=e,!0)}function ne(e,t,n){return e===n?(te=e,!1):e===t&&(te!==null&&(ee=e),!0)}function S(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function re(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var C=Object.assign,ie=Symbol.for(`react.element`),ae=Symbol.for(`react.transitional.element`),oe=Symbol.for(`react.portal`),se=Symbol.for(`react.fragment`),ce=Symbol.for(`react.strict_mode`),le=Symbol.for(`react.profiler`),ue=Symbol.for(`react.consumer`),de=Symbol.for(`react.context`),fe=Symbol.for(`react.forward_ref`),pe=Symbol.for(`react.suspense`),me=Symbol.for(`react.suspense_list`),he=Symbol.for(`react.memo`),ge=Symbol.for(`react.lazy`),_e=Symbol.for(`react.activity`),ve=Symbol.for(`react.legacy_hidden`),ye=Symbol.for(`react.memo_cache_sentinel`),be=Symbol.for(`react.view_transition`),xe=Symbol.for(`react.recoverable`),Se=Symbol.iterator;function Ce(e){return typeof e!=`object`||!e?null:(e=Se&&e[Se]||e[`@@iterator`],typeof e==`function`?e:null)}var we=Symbol.for(`react.client.reference`);function Te(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case se:return`Fragment`;case le:return`Profiler`;case ce:return`StrictMode`;case pe:return`Suspense`;case me:return`SuspenseList`;case _e:return`Activity`;case be:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case oe:return`Portal`;case de:return e.displayName||`Context`;case ue:return(e._context.displayName||`Context`)+`.Consumer`;case fe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case he:return t=e.displayName||null,t===null?Te(e.type)||`Memo`:t;case ge:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}var Ee=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},Oe=[],ke=-1;function Ae(e){return{current:e}}function E(e){0>ke||(e.current=Oe[ke],Oe[ke]=null,ke--)}function D(e,t){ke++,Oe[ke]=e.current,e.current=t}var je=Ae(null),Me=Ae(null),Ne=Ae(null),Pe=Ae(null);function Fe(e,t){switch(D(Ne,t),D(Me,e),D(je,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(je),D(je,e)}function Ie(){E(je),E(Me),E(Ne)}function O(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,D(Pe,e)),t=je.current;var n=dp(t,e.type);t!==n&&(D(Me,e),D(je,n))}function Le(e){Me.current===e&&(E(je),E(Me)),Pe.current===e&&(E(Pe),sh._currentValue=De)}var Re,ze;function Be(e){if(Re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||``,ze=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Re+e+ze}var Ve=!1;function He(e,t){if(!e||Ve)return``;Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Be(n):``}function Ue(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be(`Lazy`);case 13:return e.child!==t&&t!==null?Be(`Suspense Fallback`):Be(`Suspense`);case 19:return Be(`SuspenseList`);case 0:case 15:return He(e.type,!1);case 11:return He(e.type.render,!1);case 1:return He(e.type,!0);case 31:return Be(`Activity`);case 30:return Be(`ViewTransition`);default:return``}}function We(e){try{var t=``,n=null;do t+=Ue(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ge=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,qe=t.unstable_cancelCallback,Je=t.unstable_shouldYield,Ye=t.unstable_requestPaint,Xe=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,Qe=t.unstable_ImmediatePriority,$e=t.unstable_UserBlockingPriority,et=t.unstable_NormalPriority,tt=t.unstable_LowPriority,nt=t.unstable_IdlePriority,rt=t.log,it=t.unstable_setDisableYieldValue,at=null,ot=null;function st(e){if(typeof rt==`function`&&it(e),ot&&typeof ot.setStrictMode==`function`)try{ot.setStrictMode(at,e)}catch{}}var ct=Math.clz32?Math.clz32:dt,lt=Math.log,ut=Math.LN2;function dt(e){return e>>>=0,e===0?32:31-(lt(e)/ut|0)|0}var ft=256,pt=262144,mt=4194304;function ht(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ht(n))):i=ht(o):i=ht(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ht(n))):i=ht(o)):i=ht(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function _t(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ct(n),i=1<<r;t|=e[r],n&=~i}return t}function yt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=mt;return mt<<=1,!(mt&62914560)&&(mt=4194304),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function St(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ct(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&wt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function wt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ct(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Et(e,t){var n=t&-t;return n=n&42?1:Dt(n),(n&(e.suspendedLanes|t))===0?n:0}function Dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function kt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function At(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var jt=Math.random().toString(36).slice(2),Mt=`__reactFiber$`+jt,Nt=`__reactProps$`+jt,Pt=`__reactContainer$`+jt,Ft=`__reactEvents$`+jt,It=`__reactListeners$`+jt,Lt=`__reactHandles$`+jt,Rt=`__reactResources$`+jt,zt=`__reactMarker$`+jt,Bt=`__reactLoad$`+jt;function Vt(e){delete e[Mt],delete e[Nt],delete e[It],delete e[Lt]}function Ht(e){var t;if(t=e[Mt])return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Mt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ut(e){if(e=e[Mt]||e[Pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Gt(e){var t=e[Rt];return t||=e[Rt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Kt(e){e[zt]=!0}function qt(e){e[Bt]=void 0}var Jt=new Set,Yt={};function Xt(e,t){Zt(e,t),Zt(e+`Capture`,t)}function Zt(e,t){for(Yt[e]=t,e=0;e<t.length;e++)Jt.add(t[e])}var Qt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),$t={},en={};function tn(e){return Ge.call(en,e)?!0:Ge.call($t,e)?!1:Qt.test(e)?en[e]=!0:($t[e]=!0,!1)}var k=!1;function nn(){var e=k;return k=!1,e}function rn(e,t,n){if(tn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function an(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function on(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function sn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function cn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ln(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function un(e){if(!e._valueTracker){var t=cn(e)?`checked`:`value`;e._valueTracker=ln(e,t,``+e[t])}}function dn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=cn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var fn=/[\n"\\]/g;function pn(e){return e.replace(fn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function mn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+sn(t)):e.value!==``+sn(t)&&(e.value=``+sn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):gn(e,sn(n)):o===`number`&&e.value==t?gn(e,sn(e.value)):gn(e,sn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+sn(s):e.removeAttribute(`name`)}function hn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){un(e);return}n=n==null?``:``+sn(n),t=t==null?n:``+sn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),un(e)}function gn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function _n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vn(e,t,n){t!=null&&(t=``+sn(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+sn(n)}function yn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Ee(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=sn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),un(e)}function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Sn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||xn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Cn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,k=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(Sn(e,i,r),k=!0)}else for(var a in t)t.hasOwnProperty(a)&&Sn(e,a,t[a])}function wn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),En=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function A(e){return En.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Dn(){}var On=null;function kn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var An=null,jn=null;function Mn(e){var t=Ut(e);if(t&&(e=t.stateNode)){var n=e[Nt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(mn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+pn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Nt]||null;if(!i)throw Error(s(90));mn(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&dn(r)}break a;case`textarea`:vn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}}}var Nn=!1;function Pn(e,t,n){if(Nn)return e(t,n);Nn=!0;try{return e(t)}finally{if(Nn=!1,(An!==null||jn!==null)&&(zd(),An&&(t=An,e=jn,jn=An=null,Mn(t),e)))for(t=0;t<e.length;t++)Mn(e[t])}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Nt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var In=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Ln=!1;if(In)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ln=!0}}),window.addEventListener(`test`,Rn,Rn),window.removeEventListener(`test`,Rn,Rn)}catch{Ln=!1}var zn=null,Bn=null,Vn=null;function Hn(){if(Vn)return Vn;var e,t=Bn,n=t.length,r,i=`value`in zn?zn.value:zn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Vn=i.slice(e,1<r?1-r:void 0)}function Un(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function Gn(){return!1}function Kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Wn:Gn,this.isPropagationStopped=Gn,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=Kn(qn),Yn=C({},qn,{view:0,detail:0}),Xn=Kn(Yn),Zn,Qn,$n,er=C({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==$n&&($n&&e.type===`mousemove`?(Zn=e.screenX-$n.screenX,Qn=e.screenY-$n.screenY):Qn=Zn=0,$n=e),Zn)},movementY:function(e){return`movementY`in e?e.movementY:Qn}}),tr=Kn(er),nr=Kn(C({},er,{dataTransfer:0})),rr=Kn(C({},Yn,{relatedTarget:0})),ir=Kn(C({},qn,{animationName:0,elapsedTime:0,pseudoElement:0})),ar=Kn(C({},qn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),or=Kn(C({},qn,{data:0})),sr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},cr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},lr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ur(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lr[e])?!!t[e]:!1}function dr(){return ur}var fr=Kn(C({},Yn,{key:function(e){if(e.key){var t=sr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Un(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?cr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type===`keypress`?Un(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Un(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),pr=Kn(C({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),mr=Kn(C({},qn,{submitter:0})),hr=Kn(C({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr})),gr=Kn(C({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0})),_r=Kn(C({},er,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),vr=Kn(C({},qn,{newState:0,oldState:0,source:0})),yr=[9,13,27,32],br=In&&`CompositionEvent`in window,xr=null;In&&`documentMode`in document&&(xr=document.documentMode);var Sr=In&&`TextEvent`in window&&!xr,Cr=In&&(!br||xr&&8<xr&&11>=xr),wr=` `,Tr=!1;function Er(e,t){switch(e){case`keyup`:return yr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Dr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Or=!1;function kr(e,t){switch(e){case`compositionend`:return Dr(t);case`keypress`:return t.which===32?(Tr=!0,wr):null;case`textInput`:return e=t.data,e===wr&&Tr?null:e;default:return null}}function Ar(e,t){if(Or)return e===`compositionend`||!br&&Er(e,t)?(e=Hn(),Vn=Bn=zn=null,Or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Cr&&t.locale!==`ko`?null:t.data;default:return null}}var jr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!jr[e.type]:t===`textarea`}function Nr(e,t,n,r){An?jn?jn.push(r):jn=[r]:An=r,t=Jf(t,`onChange`),0<t.length&&(n=new Jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Fr=null;function Ir(e){Vf(e,0)}function Lr(e){if(dn(Wt(e)))return e}function Rr(e,t){if(e===`change`)return t}var zr=!1;if(In){var Br;if(In){var Vr=`oninput`in document;if(!Vr){var Hr=document.createElement(`div`);Hr.setAttribute(`oninput`,`return;`),Vr=typeof Hr.oninput==`function`}Br=Vr}else Br=!1;zr=Br&&(!document.documentMode||9<document.documentMode)}function Ur(){Pr&&(Pr.detachEvent(`onpropertychange`,Wr),Fr=Pr=null)}function Wr(e){if(e.propertyName===`value`&&Lr(Fr)){var t=[];Nr(t,Fr,e,kn(e)),Pn(Ir,t)}}function Gr(e,t,n){e===`focusin`?(Ur(),Pr=t,Fr=n,Pr.attachEvent(`onpropertychange`,Wr)):e===`focusout`&&Ur()}function Kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Lr(Fr)}function qr(e,t){if(e===`click`)return Lr(t)}function Jr(e,t){if(e===`input`||e===`change`)return Lr(t)}function Yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Xr=typeof Object.is==`function`?Object.is:Yr;function Zr(e,t){if(Xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ge.call(t,i)||!Xr(e[i],t[i]))return!1}return!0}function Qr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function $r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ei(e,t){var n=$r(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=$r(n)}}function ti(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ti(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ni(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var ii=In&&`documentMode`in document&&11>=document.documentMode,ai=null,oi=null,si=null,ci=!1;function li(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ci||ai==null||ai!==Qr(r)||(r=ai,`selectionStart`in r&&ri(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&Zr(si,r)||(si=r,r=Jf(oi,`onSelect`),0<r.length&&(t=new Jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ai)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var di={animationend:ui(`Animation`,`AnimationEnd`),animationiteration:ui(`Animation`,`AnimationIteration`),animationstart:ui(`Animation`,`AnimationStart`),transitionrun:ui(`Transition`,`TransitionRun`),transitionstart:ui(`Transition`,`TransitionStart`),transitioncancel:ui(`Transition`,`TransitionCancel`),transitionend:ui(`Transition`,`TransitionEnd`)},fi={},pi={};In&&(pi=document.createElement(`div`).style,`AnimationEvent`in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),`TransitionEvent`in window||delete di.transitionend.transition);function mi(e){if(fi[e])return fi[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pi)return fi[e]=t[n];return e}var hi=mi(`animationend`),gi=mi(`animationiteration`),_i=mi(`animationstart`),vi=mi(`transitionrun`),yi=mi(`transitionstart`),bi=mi(`transitioncancel`),xi=mi(`transitionend`),Si=new Map,Ci=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ci.push(`scrollEnd`);function wi(e,t){Si.set(e,t),Xt(t,[e])}var Ti=0;function Ei(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=Ti++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Di(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Oi(e,t){return e=Di(e),t=Di(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var ki=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ai=[],ji=0,Mi=0;function Ni(){for(var e=ji,t=Mi=ji=0;t<e;){var n=Ai[t];Ai[t++]=null;var r=Ai[t];Ai[t++]=null;var i=Ai[t];Ai[t++]=null;var a=Ai[t];if(Ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Li(n,i,a)}}function Pi(e,t,n,r){Ai[ji++]=e,Ai[ji++]=t,Ai[ji++]=n,Ai[ji++]=r,Mi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Fi(e,t,n,r){return Pi(e,t,n,r),Ri(e)}function Ii(e,t){return Pi(e,null,null,t),Ri(e)}function Li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ct(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ri(e){if(50<kd)throw kd=0,Ad=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zi={};function Bi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(e,t,n,r){return new Bi(e,t,n,r)}function Hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ui(e,t){var n=e.alternate;return n===null?(n=Vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gi(e,t,n,r,i,a){var o=0;if(r=e,typeof r==`function`)Hi(r)&&(o=1);else if(typeof r==`string`)o=qm(e,n,je.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case _e:return e=Vi(31,n,t,i),e.elementType=_e,e.lanes=a,e;case se:return Ki(n.children,i,a,t);case ce:o=8,i|=24;break;case le:return e=Vi(12,n,t,i|2),e.elementType=le,e.lanes=a,e;case pe:return e=Vi(13,n,t,i),e.elementType=pe,e.lanes=a,e;case me:return e=Vi(19,n,t,i),e.elementType=me,e.lanes=a,e;case ve:case be:return e=i|32,e=Vi(30,n,t,e),e.elementType=be,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case de:o=10;break a;case ue:o=9;break a;case fe:o=11;break a;case he:o=14;break a;case ge:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=Vi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ki(e,t,n,r){return e=Vi(7,e,r,t),e.lanes=n,e}function qi(e,t,n){return e=Vi(6,e,null,t),e.lanes=n,e}function Ji(e){var t=Vi(18,null,null,0);return t.stateNode=e,t}function Yi(e,t,n){return t=Vi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xi=new WeakMap;function Zi(e,t){if(typeof e==`object`&&e){var n=Xi.get(e);return n===void 0?(t={value:e,source:t,stack:We(t)},Xi.set(e,t),t):n}return{value:e,source:t,stack:We(t)}}var Qi=[],$i=0,ea=null,ta=0,na=[],ra=0,ia=null,aa=1,oa=``;function sa(e,t){Qi[$i++]=ta,Qi[$i++]=ea,ea=e,ta=t}function ca(e,t,n){na[ra++]=aa,na[ra++]=oa,na[ra++]=ia,ia=e;var r=aa;e=oa;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var a=32-ct(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,aa=1<<32-ct(t)+i|n<<i|r,oa=a+e}else aa=1<<a|n<<i|r,oa=e}function la(e){e.return!==null&&(sa(e,1),ca(e,1,0))}function ua(e){for(;e===ea;)ea=Qi[--$i],Qi[$i]=null,ta=Qi[--$i],Qi[$i]=null;for(;e===ia;)ia=na[--ra],na[ra]=null,oa=na[--ra],na[ra]=null,aa=na[--ra],na[ra]=null}function da(e,t){na[ra++]=aa,na[ra++]=oa,na[ra++]=ia,aa=t.id,oa=t.overflow,ia=e}var fa=null,j=null,M=!1,pa=null,ma=!1,ha=Error(s(519));function ga(e){throw Sa(Zi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ha}function _a(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Mt]=e,t[Nt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),hn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),yn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Dn),t=!0):t=!1,t||ga(e,!0)}function va(e){for(fa=e.return;fa;)switch(fa.tag){case 5:case 31:case 13:ma=!1;return;case 27:case 3:ma=!0;return;default:fa=fa.return}}function ya(e){if(e!==fa)return!1;if(!M)return va(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&j&&ga(e),va(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=dm(e)}else t===27?(t=j,Sp(e.type)?(e=um,um=null,j=e):j=t):j=fa?lm(e.stateNode.nextSibling):null;return!0}function ba(){j=fa=null,M=!1}function xa(){var e=pa;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),pa=null),e}function Sa(e){pa===null?pa=[e]:pa.push(e)}var Ca=Ae(null),wa=null,Ta=null;function Ea(e,t,n){D(Ca,t._currentValue),t._currentValue=n}function Da(e){e._currentValue=Ca.current,E(Ca)}function Oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ka(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Oa(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Oa(o,n,e),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Oa(i.return,n,e),o=i.child,o=o===null?null:o.sibling):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Xr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===Pe.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}i=i.return}return e!==null&&ka(t,e,n,r),t.flags|=262144,e!==null}function ja(e){for(e=e.firstContext;e!==null;){if(!Xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){wa=e,Ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Na(e){return Fa(wa,e)}function Pa(e,t){return wa===null&&Ma(e),Fa(e,t)}function Fa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ta===null){if(e===null)throw Error(s(308));Ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ta=Ta.next=t;return n}var Ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},La=t.unstable_scheduleCallback,Ra=t.unstable_NormalPriority,N={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function za(){return{controller:new Ia,data:new Map,refCount:0}}function Ba(e){e.refCount--,e.refCount===0&&La(Ra,function(){e.controller.abort()})}function Va(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ha=null;function Ua(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Wa=null,Ga=0,Ka=0,qa=null;function Ja(e,t){if(Wa===null){var n=Wa=[];Ga=0,Ka=Pf(),qa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ga++,t.then(Ya,Ya),t}function Ya(){if(--Ga===0&&(Ha=null,Wa!==null)){qa!==null&&(qa.status=`fulfilled`);var e=Wa;Wa=null,Ka=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Za=w.S;w.S=function(e,t){if(gd=Xe(),typeof t==`object`&&t&&typeof t.then==`function`&&Ja(e,t),Ha!==null)for(var n=bf;n!==null;)Va(n,Ha),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Va(r,n),r=r.next;if(Ka!==0){r=Ha,r===null&&(r=Ha=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Za!==null&&Za(e,t)};var Qa=Ae(null);function $a(){var e=Qa.current;return e===null?G.pooledCache:e}function eo(e,t){t===null?D(Qa,Qa.current):D(Qa,t.pool)}function to(){var e=$a();return e===null?null:{parent:N._currentValue,pool:e}}var no=Error(s(460)),ro=Error(s(474)),io=Error(s(542)),ao={then:function(){}};function oo(e){return e=e.status,e===`fulfilled`||e===`rejected`}function so(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Dn,Dn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,fo(e),e===void 0&&!(`reason`in t)?Error(s(600)):e;default:if(typeof t.status==`string`)t.then(Dn,Dn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,fo(e),e}throw lo=t,no}}function co(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(lo=e,no):e}}var lo=null;function uo(){if(lo===null)throw Error(s(459));var e=lo;return lo=null,e}function fo(e){if(e===no||e===io)throw Error(s(483))}var po=null,mo=0;function ho(e){var t=mo;return mo+=1,po===null&&(po=[]),so(po,e,t)}function go(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function _o(e,t){throw t.$$typeof===ie?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function vo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Ui(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=qi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===se?(e=d(e,t,n.props.children,r,n.key),go(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ge&&co(a)===t.type)?(t=i(t,n.props),go(t,n),t.return=e,t):(t=Gi(n.type,n.key,n.props,null,e.mode,r),go(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Yi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Ki(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=qi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ae:return n=Gi(t.type,t.key,t.props,null,e.mode,n),go(n,t),n.return=e,n;case oe:return t=Yi(t,e.mode,n),t.return=e,t;case ge:return t=co(t),f(e,t,n)}if(Ee(t)||Ce(t))return t=Ki(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ho(t),n);if(t.$$typeof===de)return f(e,Pa(e,t),n);_o(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ae:return n.key===i?l(e,t,n,r):null;case oe:return n.key===i?u(e,t,n,r):null;case ge:return n=co(n),p(e,t,n,r)}if(Ee(n)||Ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ho(n),r);if(n.$$typeof===de)return p(e,t,Pa(e,n),r);_o(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ae:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case oe:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ge:return r=co(r),m(e,t,n,r,i)}if(Ee(r)||Ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ho(r),i);if(r.$$typeof===de)return m(e,t,n,Pa(t,r),i);_o(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&sa(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&sa(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&sa(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&sa(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&sa(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&sa(i,g),u}function _(e,r,a,c){if(typeof a==`object`&&a&&a.type===se&&a.key===null&&a.props.ref===void 0&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case ae:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===se){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),go(c,a),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ge&&co(l)===r.type){n(e,r.sibling),c=i(r,a.props),go(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===se?(c=Ki(a.props.children,e.mode,c,a.key),go(c,a),c.return=e,e=c):(c=Gi(a.type,a.key,a.props,null,e.mode,c),go(c,a),c.return=e,e=c)}return o(e);case oe:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Yi(a,e.mode,c),c.return=e,e=c}return o(e);case ge:return a=co(a),_(e,r,a,c)}if(Ee(a))return h(e,r,a,c);if(Ce(a)){if(l=Ce(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return _(e,r,ho(a),c);if(a.$$typeof===de)return _(e,r,Pa(e,a),c);_o(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=qi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{mo=0;var i=_(e,t,n,r);return po=null,i}catch(t){if(t===no||t===io)throw t;var a=Vi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var yo=vo(!0),bo=vo(!1),xo=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function To(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ri(e),Li(e,null,n),t}return Pi(e,r,t,n),Ri(e)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tt(e,n)}}function Do(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Oo=!1;function ko(){if(Oo){var e=qa;if(e!==null)throw e}}function Ao(e,t,n,r){Oo=!1;var i=e.updateQueue;xo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ka&&(Oo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=C({},d,f);break a;case 2:xo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function jo(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Mo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jo(n[e],t)}var No=Ae(null),Po=Ae(0);function Fo(e,t){e=od,D(Po,e),D(No,t),od=e|t.baseLanes}function Io(){D(Po,od),D(No,No.current)}function Lo(){od=Po.current,E(No),E(Po)}var Ro=Ae(null),zo=null;function Bo(e){var t=e.alternate;D(Go,Go.current&1),D(Ro,e),zo===null&&(t===null||No.current!==null||t.memoizedState!==null)&&(zo=e)}function Vo(e){D(Go,Go.current),D(Ro,e),zo===null&&(zo=e)}function Ho(e){e.tag===22?(D(Go,Go.current),D(Ro,e),zo===null&&(zo=e)):Uo()}function Uo(){D(Go,Go.current),D(Ro,Ro.current)}function Wo(e){E(Ro),zo===e&&(zo=null),E(Go)}var Go=Ae(0);function Ko(e,t){D(Ro,Ro.current),D(Go,t)}function qo(e){E(Go),E(Ro),zo===e&&(zo=null)}function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yo=0,P=null,F=null,I=null,Xo=!1,Zo=!1,Qo=!1,$o=0,es=0,ts=null,ns=0;function L(){throw Error(s(321))}function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xr(e[n],t[n]))return!1;return!0}function is(e,t,n,r,i,a){return Yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?bc:xc,Qo=!1,a=n(r,i),Qo=!1,Zo&&(a=os(t,n,r,i)),as(e),a}function as(e){w.H=yc;var t=F!==null&&F.next!==null;if(Yo=0,I=F=P=null,Xo=!1,es=0,ts=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&ja(e)&&(z=!0))}function os(e,t,n,r){P=e;var i=0;do{if(Zo&&(ts=null),es=0,Zo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}w.H=Sc,a=t(n,r)}while(Zo);return a}function ss(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?ps(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function cs(){var e=$o!==0;return $o=0,e}function ls(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function us(e){if(Xo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xo=!1}Yo=0,I=F=P=null,Zo=!1,es=$o=0,ts=null}function ds(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function fs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ps(e){var t=es;return es+=1,ts===null&&(ts=[]),e=so(ts,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?bc:xc),e}function ms(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ps(e);if(e.$$typeof===xe)return;if(e.$$typeof===de)return Na(e)}throw Error(s(438,String(e)))}function hs(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=fs(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ye;return t.index++,n}function gs(e,t){return typeof t==`function`?t(e):t}function _s(e){return vs(R(),F,e)}function vs(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ka&&(d=!0);else if((Yo&p)===p){u=u.next,p===Ka&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,sd|=p;f=u.action,Qo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Xr(a,e.memoizedState)&&(z=!0,d&&(n=qa,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ys(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Xr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function bs(e,t,n){var r=P,i=R(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Xr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,Gs(Cs.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||o||I!==null&&!!(I.memoizedState.tag&1),Bs(e?9:8,{destroy:void 0},Ss.bind(null,r,i,n,t),null),e){if(r.flags|=2048,G===null)throw Error(s(349));a||Yo&127||xs(r,t,n)}return n}function xs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=fs(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ss(e,t,n,r){t.value=n,t.getSnapshot=r,ws(t)&&Ts(e)}function Cs(e,t,n){return n(function(){ws(t)&&Ts(e)})}function ws(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xr(e,n)}catch{return!0}}function Ts(e){var t=Ii(e,2);t!==null&&Pd(t,e,2)}function Es(e){var t=ds();if(typeof e==`function`){var n=e;if(e=n(),Qo){st(!0);try{n()}finally{st(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e},t}function Ds(e,t,n,r){return e.baseState=n,vs(e,F,typeof r==`function`?r:gs)}function Os(e,t,n,r,i){if(gc(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};w.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,ks(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ks(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};o.types=a===null?null:a.types,w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),As(e,t,s)}catch(n){Ms(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),As(e,t,a)}catch(n){Ms(e,t,n)}}function As(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){js(e,t,n)},function(n){return Ms(e,t,n)}):js(e,t,n)}function js(e,t,n){t.status=`fulfilled`,t.value=n,Ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ks(e,n)))}function Ms(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ns(t),t=t.next;while(t!==r)}e.action=null}function Ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ps(e,t){return t}function Fs(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=P;if(M){if(j){b:{for(var i=j,a=ma;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=lm(i.nextSibling),r=i.data===`F!`;break a}}ga(r)}r=!1}r&&(t=n[0])}}return n=ds(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},n.queue=r,n=pc.bind(null,P,r),r.dispatch=n,r=Es(!1),a=hc.bind(null,P,!1,r.queue),r=ds(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Os.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Is(e){return Ls(R(),F,e)}function Ls(e,t,n){if(t=vs(e,t,Ps)[0],e=_s(gs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ps(t)}catch(e){throw e===no?io:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,Bs(9,{destroy:void 0},Rs.bind(null,i,n),null)),[r,a,e]}function Rs(e,t){e.action=t}function zs(e){var t=R(),n=F;if(n!==null)return Ls(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Bs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=fs(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Vs(){return R().memoizedState}function Hs(e,t,n,r){var i=ds();P.flags|=e,i.memoizedState=Bs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Us(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&rs(r,F.memoizedState.deps)?i.memoizedState=Bs(t,a,n,r):(P.flags|=e,i.memoizedState=Bs(1|t,a,n,r))}function Ws(e,t){Hs(8390656,8,e,t)}function Gs(e,t){Us(2048,8,e,t)}function Ks(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=fs(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function qs(e){var t=R().memoizedState;return Ks({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Js(e,t){return Us(4,2,e,t)}function Ys(e,t){return Us(4,4,e,t)}function Xs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zs(e,t,n){n=n==null?null:n.concat([e]),Us(4,4,Xs.bind(null,t,e),n)}function Qs(){}function $s(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&rs(t,r[1]))return r[0];if(r=e(),Qo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r}function tc(e,t,n){return n===void 0||Yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),P.lanes|=e,sd|=e,n)}function nc(e,t,n,r){return Xr(n,t)?n:No.current===null?!(Yo&106)||Yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=Md(),P.lanes|=e,sd|=e,t):(e=tc(e,n,r),Xr(e,t)||(z=!0),e)}function rc(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};s.types=o===null?null:o.types,w.T=s,hc(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?mc(e,t,Xa(c,r),jd(e)):mc(e,t,r,jd(e))}catch(n){mc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function ic(){}function ac(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=oc(e).queue;rc(e,i,t,De,n===null?ic:function(){return sc(e),n(r)})}function oc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:De},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sc(e){var t=oc(e);t.next===null&&(t=e.alternate.memoizedState),mc(e,t.next.queue,{},jd())}function cc(){return Na(sh)}function lc(){return R().memoizedState}function uc(){return R().memoizedState}function dc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=wo(n);var r=To(t,e,n);r!==null&&(Pd(r,t,n),Eo(r,t,n)),t={cache:za()},e.payload=t;return}t=t.return}}function fc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e)?_c(t,n):(n=Fi(e,t,n,r),n!==null&&(Pd(n,e,r),vc(n,t,r)))}function pc(e,t,n){mc(e,t,n,jd())}function mc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))_c(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Xr(s,o))return Pi(e,t,i,0),G===null&&Ni(),!1}catch{}if(n=Fi(e,t,i,r),n!==null)return Pd(n,e,r),vc(n,t,r),!0}return!1}function hc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gc(e)){if(t)throw Error(s(479))}else t=Fi(e,n,r,2),t!==null&&Pd(t,e,2)}function gc(e){var t=e.alternate;return e===P||t!==null&&t===P}function _c(e,t){Zo=Xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tt(e,n)}}var yc={readContext:Na,use:ms,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L,useEffectEvent:L},bc={readContext:Na,use:ms,useCallback:function(e,t){return ds().memoizedState=[e,t===void 0?null:t],e},useContext:Na,useEffect:Ws,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Hs(4194308,4,Xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hs(4194308,4,e,t)},useInsertionEffect:function(e,t){Hs(4,2,e,t)},useMemo:function(e,t){var n=ds();t=t===void 0?null:t;var r=e();if(Qo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ds();if(n!==void 0){var i=n(t);if(Qo){st(!0);try{n(t)}finally{st(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=fc.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=ds();return e={current:e},t.memoizedState=e},useState:function(e){e=Es(e);var t=e.queue,n=pc.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qs,useDeferredValue:function(e,t){return tc(ds(),e,t)},useTransition:function(){var e=Es(!1);return e=rc.bind(null,P,e.queue,!0,!1),ds().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=ds();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||xs(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ws(Cs.bind(null,r,a,e),[e]),r.flags|=2048,Bs(9,{destroy:void 0},Ss.bind(null,r,a,n,t),null),n},useId:function(){var e=ds(),t=G.identifierPrefix;if(M){var n=oa,r=aa;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=$o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=ns++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:cc,useFormState:Fs,useActionState:Fs,useOptimistic:function(e){var t=ds();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hc.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:hs,useCacheRefresh:function(){return ds().memoizedState=dc.bind(null,P)},useEffectEvent:function(e){var t=ds(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},xc={readContext:Na,use:ms,useCallback:$s,useContext:Na,useEffect:Gs,useImperativeHandle:Zs,useInsertionEffect:Js,useLayoutEffect:Ys,useMemo:ec,useReducer:_s,useRef:Vs,useState:function(){return _s(gs)},useDebugValue:Qs,useDeferredValue:function(e,t){return nc(R(),F.memoizedState,e,t)},useTransition:function(){var e=_s(gs)[0],t=R().memoizedState;return[typeof e==`boolean`?e:ps(e),t]},useSyncExternalStore:bs,useId:lc,useHostTransitionStatus:cc,useFormState:Is,useActionState:Is,useOptimistic:function(e,t){return Ds(R(),F,e,t)},useMemoCache:hs,useCacheRefresh:uc,useEffectEvent:qs},Sc={readContext:Na,use:ms,useCallback:$s,useContext:Na,useEffect:Gs,useImperativeHandle:Zs,useInsertionEffect:Js,useLayoutEffect:Ys,useMemo:ec,useReducer:ys,useRef:Vs,useState:function(){return ys(gs)},useDebugValue:Qs,useDeferredValue:function(e,t){var n=R();return F===null?tc(n,e,t):nc(n,F.memoizedState,e,t)},useTransition:function(){var e=ys(gs)[0],t=R().memoizedState;return[typeof e==`boolean`?e:ps(e),t]},useSyncExternalStore:bs,useId:lc,useHostTransitionStatus:cc,useFormState:zs,useActionState:zs,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Ds(n,F,e,t)},useMemoCache:hs,useCacheRefresh:uc,useEffectEvent:qs};function Cc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=wo(r);i.payload=t,n!=null&&(i.callback=n),t=To(e,i,r),t!==null&&(Pd(t,e,r),Eo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=wo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=To(e,i,r),t!==null&&(Pd(t,e,r),Eo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=wo(n);r.tag=2,t!=null&&(r.callback=t),t=To(e,r,n),t!==null&&(Pd(t,e,n),Eo(t,e,n))}};function Tc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(i,a):!0}function Ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wc.enqueueReplaceState(t,t.state,null)}function Dc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=C({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Oc(e){ki(e)}function kc(e){console.error(e)}function Ac(e){ki(e)}function jc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Mc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Nc(e,t,n){return n=wo(n),n.tag=3,n.payload={element:null},n.callback=function(){jc(e,t)},n}function Pc(e){return e=wo(e),e.tag=3,e}function Fc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Mc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Mc(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ic(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Aa(t,n,i,!0),n=Ro.current,n!==null){switch(n.tag){case 31:case 13:case 19:return zo===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ao?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,i)),!1;case 22:return n.flags|=65536,r===ao?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,i)),!1}throw Error(s(435,n.tag))}return mf(e,r,i),Kd(),!1}if(M)return t=Ro.current,t===null?(r!==ha&&(t=Error(s(423),{cause:r}),Sa(Zi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Zi(r,n),i=Nc(e.stateNode,r,i),Do(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==ha&&(e=Error(s(422),{cause:r}),Sa(Zi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Zi(a,n),fd===null?fd=[a]:fd.push(a),Y!==4&&(Y=2),t===null)return!0;r=Zi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Nc(n.stateNode,r,e),Do(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(yd===null||!yd.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Pc(i),Fc(i,e,n,r),Do(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Lc=Error(s(461)),z=!1;function B(e,t,n,r){t.child=e===null?bo(t,null,n,r):yo(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ma(t),r=is(e,t,n,o,a,i),s=cs(),e!==null&&!z?(ls(e,t,i),fl(e,t,i)):(M&&s&&la(t),t.flags|=1,B(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=Gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Zr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Ui(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Zr(a,r)&&e.ref===t.ref){if(z=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&eo(t,a===null?null:a.cachePool),a===null?Io():Fo(t,a),Ho(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&eo(t,null),Io(),Uo()):(eo(t,a.cachePool),Fo(t,a),Uo(),t.memoizedState=null);return B(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=$a();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&eo(t,null),Io(),Ho(t),e!==null&&Aa(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return yo(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,Wo(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(Vo(t),(e=j)?(e=am(e,ma),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia===null?null:{id:aa,overflow:oa},retryLane:536870912,hydrationErrors:null},n=Ji(e),n.return=t,t.child=n,fa=t,j=null)):e=null,e===null)throw ga(t);return t.lanes=536870912,null}return Wc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(Vo(t),i){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(z||Aa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(No.current===null){if(r=G,r!==null&&(o=Et(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,Ii(e,o),Pd(r,e,o),Lc;Kd()}t=Gc(e,t,n)}else e=a.treeContext,j=lm(o.nextSibling),fa=t,M=!0,pa=null,ma=!1,e!==null&&da(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Ui(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return Ma(t),n=is(e,t,n,r,void 0,i),r=cs(),e!==null&&!z?(ls(e,t,i),fl(e,t,i)):(M&&r&&la(t),t.flags|=1,B(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return Ma(t),t.updateQueue=null,n=os(t,r,n,i),as(e),r=cs(),e!==null&&!z?(ls(e,t,a),fl(e,t,a)):(M&&r&&la(t),t.flags|=1,B(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(Ma(t),t.stateNode===null){var a=zi,o=n.contextType;typeof o==`object`&&o&&(a=Na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=wc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},So(t),o=n.contextType,a.context=typeof o==`object`&&o?Na(o):zi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Cc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&wc.enqueueReplaceState(a,a.state,null),Ao(t,r,a,i),ko(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Dc(n,s);a.props=c;var l=a.context,u=n.contextType;o=zi,typeof u==`object`&&u&&(o=Na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ec(t,a,r,o),xo=!1;var f=t.memoizedState;a.state=f,Ao(t,r,a,i),ko(),l=t.memoizedState,s||f!==l||xo?(typeof d==`function`&&(Cc(t,n,d,r),l=t.memoizedState),(c=xo||Tc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Co(e,t),o=t.memoizedProps,u=Dc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=zi,typeof l==`object`&&l&&(c=Na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ec(t,a,r,c),xo=!1,f=t.memoizedState,a.state=f,Ao(t,r,a,i),ko();var p=t.memoizedState;o!==d||f!==p||xo||e!==null&&e.dependencies!==null&&ja(e.dependencies)?(typeof s==`function`&&(Cc(t,n,s,r),p=t.memoizedState),(u=xo||Tc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ja(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=yo(t,e.child,null,i),t.child=yo(t,null,n,i)):B(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return ba(),t.flags|=256,B(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:to()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Go.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(M){if(i?Bo(t):Uo(),(e=j)?(e=am(e,ma),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia===null?null:{id:aa,overflow:oa},retryLane:536870912,hydrationErrors:null},n=Ji(e),n.return=t,t.child=n,fa=t,j=null)):e=null,e===null)throw ga(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Uo(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Ki(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(null,r)):(Bo(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(Uo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ui(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ki(i,a,n,null),i.flags|=2):i=Ui(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=to():(s=N._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(e.child,r)):(Bo(t),n=e.child,e=n.sibling,n=Ui(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=Vi(22,e,null,t),e.lanes=0,e}function il(e,t,n){return yo(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,i,a,o,c){if(n)return t.flags&256?(Bo(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(Uo(),a=i.fallback,o=t.mode,i=rl({mode:`visible`,children:i.children},o),a=Ki(a,o,c,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,yo(t,e.child,null,c),i=t.child,i.memoizedState=$c(c),i.childLanes=el(e,r,c),t.memoizedState=Qc,Hc(null,i)):(Uo(),t.child=e.child,t.flags|=128,null);if(Bo(t),sm(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(s(419)),i.stack=``,i.digest=r,Sa({value:i,source:null,stack:null})),il(e,t,c)}if(z||Aa(e,t,c,!1),r=(c&e.childLanes)!==0,z||r){if(No.current!==null)return il(e,t,c);if(r=G,r!==null&&(i=Et(r,c),i!==0&&i!==o.retryLane))throw o.retryLane=i,Ii(e,i),Pd(r,e,i),Lc;return om(a)||Kd(),il(e,t,c)}return om(a)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,j=lm(a.nextSibling),fa=t,M=!0,pa=null,ma=!1,e!==null&&da(t,e),t=nl(t,i.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oa(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Jo(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Go.current;if(t.flags&128)return Ko(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ko(t,o),i===`backwards`&&e!==null?(ll(e),B(e,t,r,n),ll(e)):B(e,t,r,n),r=M?ta:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return Ea(t,t.type,r.value),B(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ja(e)))}function ml(e,t,n){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),Ea(t,N,e.memoizedState.cache),ba();break;case 27:case 5:O(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Bo(t),t.flags|=128,null;r=Aa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(Bo(t),e=fl(e,t,n),e===null?null:e.sibling)}Bo(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ko(t,Go.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:Ea(t,N,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!pl(e,n)&&!(t.flags&128))return z=!1,ml(e,t,n);z=!!(e.flags&131072)}}else z=!1,M&&t.flags&1048576&&ca(t,ta,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=co(t.elementType),t.type=e,typeof e==`function`)Hi(e)?(r=Dc(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===fe){t.tag=11,t=Rc(null,t,e,r,n);break a}if(i===he){t.tag=14,t=zc(null,t,e,r,n);break a}if(i===de){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=Te(e)||e,Error(s(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Dc(r,t.pendingProps),Xc(e,t,r,i,n);case 3:a:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Co(e,t),Ao(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Ea(t,N,r),r!==a.cache&&ka(t,[N],n,!0),ko(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==i){i=Zi(Error(s(424)),t),Sa(i),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=lm(e.firstChild),fa=t,M=!0,pa=null,ma=!0,n=bo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ba(),r===i){t=fl(e,t,n);break a}B(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(t.stateNode=fp(t.type,t.pendingProps,Ne.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return O(t),e===null&&M&&(r=t.stateNode=hm(t.type,t.pendingProps,Ne.current),fa=t,ma=!0,i=j,Sp(t.type)?(um=i,j=lm(r.firstChild)):j=i),B(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=rm(r,t.type,t.pendingProps,ma),r===null?i=!1:(t.stateNode=r,fa=t,j=lm(r.firstChild),ma=!1,i=!0)),i||ga(t)),O(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,pp(i,a)?r=null:o!==null&&pp(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=is(e,t,ss,null,null,n),sh._currentValue=i),qc(e,t),B(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=im(n,t.pendingProps,ma),n===null?e=!1:(t.stateNode=n,fa=t,j=null,e=!0)),e||ga(t)),null;case 13:return tl(e,t,n);case 4:return Fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yo(t,null,r,n):B(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),B(e,t,r,n),t.child;case 8:return B(e,t,t.pendingProps.children,n),t.child;case 12:return B(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,Ma(t),i=Na(i),r=r(i),t.flags|=1,B(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return Ma(t),r=Na(N),e===null?(i=$a(),i===null&&(i=G,a=za(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},So(t),Ea(t,N,i)):((e.lanes&n)!==0&&(Co(e,t),Ao(t,null,null,n),ko()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ea(t,N,r),r!==i.cache&&ka(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,N,r))),B(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:M&&la(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),B(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw lo=ao,ro}}else e.flags&=-16777217}function vl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw lo=ao,ro}}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:bt(),e.lanes|=t,dd|=t)}function bl(e,t){if(!M)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(ua(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Da(N),Ie(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ya(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xa())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(gl(t),a===null?(V(t),_l(t,i,null,r,n)):(V(t),vl(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(gl(t),V(t),vl(t,a)):(e=e.memoizedProps,e!==r&&gl(t),V(t),_l(t,i,e,r,n)),null;case 27:if(Le(t),n=Ne.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}e=je.current,ya(t)?_a(t,e):(e=hm(i,r,n),t.stateNode=e,gl(t))}return V(t),t.subtreeFlags&=-33554433,null;case 5:if(Le(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}if(a=je.current,ya(t))_a(t,a);else{var o=lp(Ne.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[Mt]=t,a[Nt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(np(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return V(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=Ne.current,ya(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=fa,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ga(t,!0)}else e=lp(e).createTextNode(r),e[Mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ya(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[Mt]=t}else ba(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=xa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wo(t),t):(Wo(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ya(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[Mt]=t}else ba(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=xa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Wo(t),t):(Wo(t),null)}return Wo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),V(t),null);case 4:return Ie(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,V(t),null;case 10:return Da(t.type),V(t),null;case 19:if(qo(t),r=t.memoizedState,r===null)return V(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)bl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Jo(e),a!==null){for(t.flags|=128,bl(r,!1),e=a.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wi(n,e),n=n.sibling;return Ko(t,Go.current&1|2),M&&sa(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Xe()>_d&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Jo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),bl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!a.alternate&&!M)return V(t),null}else 2*Xe()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,a=Go.current,a=i?a&1|2:a&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||M?Ko(t,a):(n=a,D(Ro,t),D(Go,n),zo===null&&(zo=t)),M&&sa(t,r.treeForkCount),e}return V(t),null;case 22:case 23:return Wo(t),Lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(Qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Da(N),V(t),null;case 25:return null;case 30:return t.flags|=33554432,V(t),null}throw Error(s(156,t.tag))}function Sl(e,t){switch(ua(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Da(N),Ie(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Le(t),null;case 31:if(t.memoizedState!==null){if(Wo(t),t.alternate===null)throw Error(s(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ie(),null;case 10:return Da(t.type),null;case 22:case 23:return Wo(t),Lo(),e!==null&&E(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Da(N),null;case 25:return null;default:return null}}function Cl(e,t){switch(ua(t),t.tag){case 3:Da(N),Ie();break;case 26:case 27:case 5:Le(t);break;case 4:Ie();break;case 31:t.memoizedState!==null&&Wo(t);break;case 13:Wo(t);break;case 19:qo(t);break;case 10:Da(t.type);break;case 22:case 23:Wo(t),Lo(),e!==null&&E(Qa);break;case 24:Da(N)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Mo(t,n)}catch(t){Z(e,e.return,t)}}}function Dl(e,t,n){n.props=Dc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=Ei(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&em(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&tm(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Nt]=t}catch(t){Z(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dn)),Al(e,r),k=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),k=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Mt]=e,t[Nt]=n}catch(t){Z(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Hl=!0,Tp(o,ql===0?t:t+`_`+ql,n),ql++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Xl(e.child,t)),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(s(544));var n=t.name;t=Oi(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=Ei(r,n),a=Oi(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Nd(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Oi(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=Ei(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=Oi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Nd(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ei(t,e.stateNode);t=Oi(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=Ei(n,r),a=Oi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=ni(e),ri(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var a=t.stateNode;try{var o=Dc(t.type,i);n=a.getSnapshotBeforeUpdate(o,r),a.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=Ei(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=Oi(i.default,i.update),i!==`none`&&Jl(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&wl(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Dc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Mo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),su=t,H=i}break;case 30:Lu(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,k=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount==`function`)try{ot.onCommitFiberUnmount(at,n)}catch{}switch(n.tag){case 26:H||kl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),k=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),k=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),wu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,wu(e,t,n),H=r;break;case 30:kl(n,t),wu(e,t,n);break;case 7:H||kl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(s(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i],o=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(s(160));Tu(o,c,a),U=null,Cu=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var a=0;a<r.length;a++){var o=r[a];o.ref.impl=o.nextImpl}Au(t,e,n),Nu(e),i&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),i&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=ju,Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=a.ownerDocument||a;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[zt]||r[Mt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),np(r,t,n),r[Mt]=e,Kt(r),t=r;break a;case`link`:if(a=Gm(`link`,`href`,i).get(t+(n.href||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;case`meta`:if(a=Gm(`meta`,`content`,i).get(t+(n.content||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){a.splice(o,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;default:throw Error(s(468,t))}r[Mt]=e,Kt(r),t=r}e.stateNode=t}}else su||Km(a,e.type,e.stateNode)}else e.stateNode=Bm(a,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):i.count--,n===null?su||Km(a,e.type,e.stateNode):Bm(a,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),r!==null&&i&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(a=cu,cu=!1,Au(t,e,n),cu=a,Nu(e),i&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{bn(t,``),k=!0}catch(t){Z(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),i&1024&&(lu=!0);break;case 6:if(Au(t,e,n),Nu(e),i&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,k=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(k=!1,Wm=null,a=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=a,Nu(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}lu&&(lu=!1,Pu(e)),k=!1;break;case 4:i=cu,cu=su,r=nn(),a=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=a,k&&pu&&(mu=!0),k=r,cu=i;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=Xe()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:a=e.memoizedState!==null,o=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||a,cu=u||a,H=l||o,Au(t,e,n),H=l,cu=u,su=c,Nu(e),i&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||r===null||o||su||H||(t=o||H,n=su,r=H,su=a||su,H=t,Ru(e,2),su=n,H=r),!a&&cu||yu(e,a)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:i&512&&(H||r===null||kl(r,r.return)),i=nn(),a=pu,o=(n&335544064)===n,c=e.memoizedProps,pu=o&&Oi(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),o&&r!==null&&k&&(e.flags|=4),pu=a,k=i;break;case 21:break;case 7:i&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(Pl(i)){var a=i.stateNode;r===null?r=[a]:r.push(a)}if(Nl(i))break;i=i.return}var o=r;if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,o);break;case 5:var l=n.stateNode;n.flags&32&&(bn(l,``),n.flags&=-33),Bl(e,Rl(e),l,o);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else ou(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Fu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=Ei(a,o),o=Ei(n.memoizedProps,o);var s=Oi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),Ru(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),Ru(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:kl(n,n.return),Ru(n,r);break;case 7:kl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),wl(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)jo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Ol(a,a.return);break;case 30:zu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ba(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ba(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ba(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ba(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var ed={getCacheForType:function(e){var t=Na(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Na(N).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:w.T===null?kt():Pf()}function Md(){if(ud===0){if(!(q&536870912)||M){var e=pt;pt<<=1,!(pt&3932160)&&(pt=262144),ud=e}else ud=536870912}return e=Ro.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(Ei(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),St(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||_t(e,t),i=r?Yd(e,t):qd(e,t,!0),a=r;do{if(i===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,a&&!Ld(n))i=qd(e,t,!1),a=!1;else{if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,o).flags|=256),o=qd(c,o,!1),o!==2&&o!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=a,cd|=a,i=4;break a}a=pd,pd=i,a!==null&&(pd===null?pd=a:pd.push.apply(pd,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=hd+300-Xe(),10<i)){if(Rd(r,t,ud,!rd),gt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,a,`Throttled`,-0,0),i);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,a,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dn},Ul=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-Xe():(a&4194048)===a?gd-Xe():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=vt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ct(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&wt(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,Ta=wa=null,us(e),po=null,mo=0,e=K;for(;e!==null;)Cl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Ui(e.current,null),q=t,J=0,nd=null,rd=!1,id=_t(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=vt(e,t),Ni(),n}function Hd(e,t){P=null,w.H=yc,t===no||t===io?(t=uo(),J=3):t===ro?(t=uo(),J=4):J=t===Lc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,jc(e,Zi(t,e.current)))}function Ud(){var e=Ro.current;return e===null?!0:(q&4194048)===q?zo===null:(q&62914560)===q||q&536870912?e===zo:!1}function Wd(){var e=w.H;return w.H=yc,e===null?yc:e}function Gd(){var e=w.A;return w.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&Ro.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Ro.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,Ta=wa=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,Ni()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),i=Gd();G!==e||q!==t?(vd=null,_d=Xe()+500,Vd(e,t)):id=_t(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,a,1);break;case 2:case 9:if(oo(a)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:oo(a)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Ym(o):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,a,5);break;case 6:J=0,nd=null,$d(e,t,a,6);break;case 8:Bd(),Y=6;break a;default:throw Error(s(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return Ta=wa=null,w.H=r,w.A=i,W=n,K===null?(G=null,q=0,Ni(),Y):0}function Xd(){for(;K!==null&&!Je();)Zd(K)}function Zd(e){var t=hl(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:us(t);var r=t;r===fa&&(M?(va(r),r.tag===5&&r.stateNode!=null&&(j=r.stateNode)):(va(r),M=!0));default:Cl(n,t),t=K=Wi(t,od),t=hl(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){Ta=wa=null,us(t),po=null,mo=0;var i=t.return;try{if(Ic(e,i,t,n,q)){Y=1,jc(e,Zi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,jc(e,Zi(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=xl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,i,a,o,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=i,Td=r,rf(e,t,n,o,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Mi,Ct(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ua(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(et,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,T.p=i,w.T=r}}X=1,Hl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=w.T,w.T=null;var i=T.p;T.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=ni(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ti(s.ownerDocument.documentElement,s)){if(c!==null&&ri(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=ei(s,h),v=ei(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,T.p=i,w.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,Ye();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),Ot(r),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot==`function`)try{ot.onCommitFiberRoot(at,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=w.T,a=T.p,T.p=2,w.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{w.T=n,T.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ba(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=Ot(Sd),r=w.T,i=T.p;try{T.p=32>n?32:n,w.T=null,n=wd,wd=null;var a=bd,o=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(s(331));var c=W;if(W|=4,Zu(a.current),Uu(a,a.current,o,n),W=c,Df(0,!1),ot&&typeof ot.onPostCommitFiberRoot==`function`)try{ot.onPostCommitFiberRoot(at,a)}catch{}return!0}finally{T.p=i,w.T=r,uf(e,t)}}function pf(e,t,n){t=Zi(n,t),t=Nc(e.stateNode,t,2),e=To(e,t,2),e!==null&&(St(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=Zi(n,e),n=Pc(2),r=To(t,n,2),r!==null&&(Fc(n,r,t,e),St(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Xe()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=bt()),e=Ii(e,t),e!==null&&(St(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ke(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ct(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=gt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||_t(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Xe(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ct(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=yt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=gt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&qe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||_t(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&qe(r),Ot(n)){case 2:case 8:n=$e;break;case 32:n=et;break;case 268435456:n=nt;break;default:n=et}return r=jf.bind(null,e),n=Ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&qe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=gt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Xe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Ke(Qe,Of):kf()})}function Pf(){if(Tf===0){var e=Ka;e===0&&(e=ft,ft<<=1,!(ft&261888)&&(ft=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:A(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Nt]||null).action),o=r.submitter;o&&(t=(t=o[Nt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);ac(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ac(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<Ci.length;Lf++){var Rf=Ci[Lf];wi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}wi(hi,`onAnimationEnd`),wi(gi,`onAnimationIteration`),wi(_i,`onAnimationStart`),wi(`dblclick`,`onDoubleClick`),wi(`focusin`,`onFocus`),wi(`focusout`,`onBlur`),wi(vi,`onTransitionRun`),wi(yi,`onTransitionStart`),wi(bi,`onTransitionCancel`),wi(xi,`onTransitionEnd`),Zt(`onMouseEnter`,[`mouseout`,`mouseover`]),Zt(`onMouseLeave`,[`mouseout`,`mouseover`]),Zt(`onPointerEnter`,[`pointerout`,`pointerover`]),Zt(`onPointerLeave`,[`pointerout`,`pointerover`]),Xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ki(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ki(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Ft];n===void 0&&(n=t[Ft]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Jt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ht(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}Pn(function(){var r=a,i=kn(n),o=[];a:{var s=Si.get(e);if(s!==void 0){var c=Jn,u=e;switch(e){case`keypress`:if(Un(n)===0)break a;case`keydown`:case`keyup`:c=fr;break;case`focusin`:u=`focus`,c=rr;break;case`focusout`:u=`blur`,c=rr;break;case`beforeblur`:case`afterblur`:c=rr;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=tr;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=nr;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=hr;break;case hi:case gi:case _i:c=ir;break;case xi:c=gr;break;case`scroll`:case`scrollend`:c=Xn;break;case`wheel`:c=_r;break;case`copy`:case`cut`:case`paste`:c=ar;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=pr;break;case`submit`:c=mr;break;case`toggle`:case`beforetoggle`:c=vr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Fn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,s=e===`mouseout`||e===`pointerout`,c&&n!==On&&(u=n.relatedTarget||n.fromElement)&&(Ht(u)||u[Pt]))break a;(s||c)&&(u=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,s?(c=n.relatedTarget||n.toElement,s=r,c=c?Ht(c):null,c!==null&&(f=l(c),d=c.tag,c!==f||d!==5&&d!==27&&d!==6)&&(c=null)):(s=null,c=r),s!==c&&(d=tr,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=pr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=s==null?u:Wt(s),h=c==null?u:Wt(c),u=new d(g,m+`leave`,s,n,i),u.target=f,u.relatedTarget=h,g=null,Ht(i)===r&&(d=new d(p,m+`enter`,c,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=s&&c?re(s,c,Yf):null,s!==null&&Xf(o,u,s,d,!1),c!==null&&f!==null&&Xf(o,f,c,d,!0)))}a:{if(s=r?Wt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var _=Rr;else if(Mr(s)){if(zr)_=Jr;else{_=Kr;var v=Gr}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&wn(r.elementType)&&(_=Rr):_=qr;if(_&&=_(e,r)){Nr(o,_,n,i);break a}v&&v(e,s,r)}switch(v=r?Wt(r):window,e){case`focusin`:(Mr(v)||v.contentEditable===`true`)&&(ai=v,oi=r,si=null);break;case`focusout`:si=oi=ai=null;break;case`mousedown`:ci=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ci=!1,li(o,n,i);break;case`selectionchange`:if(ii)break;case`keydown`:case`keyup`:li(o,n,i)}var y;if(br)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Or?Er(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Cr&&n.locale!==`ko`&&(Or||b!==`onCompositionStart`?b===`onCompositionEnd`&&Or&&(y=Hn()):(zn=i,Bn=`value`in zn?zn.value:zn.textContent,Or=!0)),v=Jf(r,b),0<v.length&&(b=new or(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=Dr(n),y!==null&&(b.data=y)))),(y=Sr?kr(e,n):Ar(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new or(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),If(o,e,r,n,i)}Vf(o,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Fn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Fn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Fn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Fn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||bn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&bn(e,``+r);else return;break;case`className`:an(e,`class`,r);break;case`tabIndex`:an(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:an(e,n,r);break;case`style`:Cn(e,r,a);return;case`data`:if(t!==`object`){an(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=A(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=A(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Dn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=A(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),rn(e,`popover`,r);break;case`xlinkActuate`:on(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:on(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:on(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:on(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:on(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:on(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:on(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:rn(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Tn.get(n)||n,rn(e,n,r);else return}k=!0}function tp(e,t,n,r,i,a){switch(n){case`style`:Cn(e,r,a);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)bn(e,r);else if(typeof r==`number`||typeof r==`bigint`)bn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=Dn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Yt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),a=n.slice(2,i?n.length-7:void 0),t=e[Nt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(a,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break a}k=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):rn(e,n,r)}return}k=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}hn(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&_n(e,!!r,n,!0):_n(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}yn(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(wn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(k=!0),a=m;break;case`name`:m!==f&&(k=!0),i=m;break;case`checked`:m!==f&&(k=!0),u=m;break;case`defaultChecked`:m!==f&&(k=!0),d=m;break;case`value`:m!==f&&(k=!0),o=m;break;case`defaultValue`:m!==f&&(k=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}mn(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:a!==l&&(k=!0),p=a;break;case`defaultValue`:a!==l&&(k=!0),c=a;break;case`multiple`:a!==l&&(k=!0),o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?_n(e,!!n,n?[]:``,!1):_n(e,!!n,t,!0)):_n(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:i!==a&&(k=!0),p=i;break;case`defaultValue`:i!==a&&(k=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}vn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(k=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(wn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Mt]=r,n[Nt]=t,np(n,e,t),Kt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[zt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:C({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Ht(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=re(n,a,S),t===null?t=!1:(h(t,!0,x,a,n),a=ee,ee=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=re(r,a,S),t===null?t=!1:(h(t,!0,ne,a,r),a=ee,te=ee=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(s(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=b(i),Zp(i,n)):b(i).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Vt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[zt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===Dn&&(e.onclick=null),Vt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=T.d;T.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Ut(e);t!==null&&t.tag===5&&t.type===`form`?sc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=pn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Kt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+pn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+pn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+pn(n.imageSizes)+`"]`)):i+=`[href="`+pn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=C({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Bt]=!0,o.onload=o.onerror=function(){qt(o)}),Kt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+pn(r)+`"][href="`+pn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=C({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Kt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Gt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=C({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Kt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Gt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Kt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Gt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=C({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Kt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var i=(i=Ne.current)?bm(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Gt(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var a=Gt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(Fm(e)))?a._p||(o.instance=a,o.state.loading=5):(a=vm.get(e),a||(a={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,a)),Lm(i,e,a,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Gt(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pm(e){return`href="`+pn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Bt]){r.loading=1;return}}else t=e.createElement(`link`),t[Bt]=!0,t.onload=t.onerror=qt.bind(null,t),np(t,`link`,n),Kt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+pn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+pn(n.href)+`"]`);if(r)return t.instance=r,Kt(r),r;var i=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Kt(r),np(r,`style`,i),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Pm(n.href);var a=e.querySelector(Fm(i));if(a)return t.state.loading|=4,t.instance=a,Kt(a),a;r=Im(n),(i=vm.get(i))&&Hm(r,i),a=(e.ownerDocument||e).createElement(`link`),Kt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),t.state.loading|=4,Vm(a,n.precedence,e),t.instance=a;case`script`:return a=Rm(n.src),(i=e.querySelector(zm(a)))?(t.instance=i,Kt(i),i):(r=n,(i=vm.get(a))&&(r=C({},n),Um(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Kt(i),np(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[zt]||a[Mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Kt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:de,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.hiddenUpdates=xt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Vi(3,null,null,t),e.current=a,a.stateNode=e,t=za(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},So(a),e}function uh(e){return e?(e=zi,e):zi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=wo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=To(e,r,t),n!==null&&(Pd(n,e,t),Eo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ii(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Dt(t);var n=Ii(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,yh(e,t,n,r)}finally{T.p=a,w.T=i}}function vh(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,yh(e,t,n,r)}finally{T.p=a,w.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ut(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ht(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ct(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=Xe()+500,Df(0,!1))}}break;case 31:case 13:s=Ii(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=kn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Ht(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ze()){case Qe:return 2;case $e:return 8;case et:case tt:return 32;case nt:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ut(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Ht(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,At(e.priority,function(){hh(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,At(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);On=r,n.target.dispatchEvent(r),On=null}else return t=Ut(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ut(n);a!==null&&(e.splice(t,3),t-=3,ac(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Nt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Nt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Pt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=r.version;if(Kh!==`19.3.1`)throw Error(s(527,Kh,`19.3.1`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{at=Jh.inject(qh),ot=Jh}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Oc,a=kc,o=Ac;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,i,a,o,Uh),e[Pt]=t.current,Wf(e),new Wh(t)}})),c=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function u(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:l(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var d=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},f=e=>{let t=d(e);return t.charAt(0).toUpperCase()+t.slice(1)},p=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),m={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function h(e){return e!=null}function g(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??m.width,a=e.size??e.height??m.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?p(...c):p(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??m[`stroke-width`])*Number(e.size??e.width??m.width)/Number(t.size??t.width??m.width):t.strokeWidth??m[`stroke-width`];return[`svg`,{...Object.entries(m).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&h(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&h(t.width)&&{[r(`width`)]:t.width},...`height`in t&&h(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function _(e,t={}){return g(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var v=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},y=n(),b=(0,y.createContext)({}),ee=()=>(0,y.useContext)(b),te=(0,y.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,nonScalingStroke:b=!1,color:te=`currentColor`,className:x=``}=ee()??{},ne=!!c||v(d),[S,re,C=[]]=_(u,{color:e??te,width:n??t??m,height:r??t??m,strokeWidth:i??h,absoluteStrokeWidth:a??g,nonScalingStroke:o??b,className:p(x,s),hasA11yProp:ne,attributes:d});return(0,y.createElement)(S,{ref:f,...re},[...C.map(([e,t])=>(0,y.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function x(e,t=[],n=[]){let r=typeof e==`string`?u(e,t,n):e,i=(0,y.forwardRef)(({className:e,...t},n)=>(0,y.createElement)(te,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=f(r.name)),i}var ne={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]};ne.node;var S=x(ne),re={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};re.node;var C=x(re),ie={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};ie.node;var ae=x(ie),oe={name:`chevron-down`,size:24,node:[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]};oe.node;var se=x(oe),ce={name:`clock`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]};ce.node;var le=x(ce),ue={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]};ue.node;var de=x(ue),fe={name:`flag`,size:24,node:[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]};fe.node;var pe=x(fe),me={name:`grid-3x3`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]],aliases:[`grid`,`grid-3-x-3`]};me.node;var he=x(me),ge={name:`list-checks`,size:24,node:[[`path`,{d:`M13 5h8`,key:`a7qcls`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 19h8`,key:`c3s6r1`}],[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}]]};ge.node;var _e=x(ge),ve={name:`log-out`,size:24,node:[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]};ve.node;var ye=x(ve),be={name:`rotate-ccw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]};be.node;var xe=x(be),Se={name:`send`,size:24,node:[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]};Se.node;var Ce=x(Se),we={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};we.node;var Te=x(we),Ee=c(),w=e=>Math.round(e*100)/100;function T(e){let t=[];for(let n of e.split(/^### /m).slice(1)){let e=n.match(/^(\d+)-(?:[A-Z]\s+)?(?:savol|topshiriq)/);if(!e)continue;let r=n.slice(n.indexOf(`
`)+1);r=r.split(/^---\s*$/m)[0].split(/^## /m)[0],r=r.replace(/^>\s?/gm,``),r=r.replace(/^\*\*Shart:\*\*[\s\S]*?(?=\n\s*\n)/m,``).trim(),t.push([Number(e[1]),r])}return t}function De(e,t){let n=String(t).match(/^(\d+)(?:-([A-Z]))?$/);if(!n)return;let r=Number(n[1]),i=n[2]?n[2].charCodeAt(0)-64:1;return e.filter(([e])=>e===r)[i-1]?.[1]}var Oe=e=>Math.round(e*10)/10;function ke(e,t){let n=t?T(t):[],r=new Map;for(let t of e.umumiy??[])for(let e of t.raqamlar)r.set(String(e),{shart:t.shart,variantlar:t.variantlar});let i=e.savollar.some(e=>e.turi===`yozma`&&e.ball===6),a=!1,o=e.savollar.filter(e=>!/^bonus/i.test(e.nuqson??``)).map(e=>{let t=r.get(String(e.raqam)),o=Number(String(e.raqam).match(/\d+/)?.[0]??0),s=e.ball;s??=(a=!0,e.turi===`yozma`?i&&o>=41?6:3.2:o<=10?1.3:2.2);let c;if(e.bandlar){let t=e.bandlar.filter(e=>e.ball==null),n=Math.max(0,s-e.bandlar.reduce((e,t)=>e+(t.ball??0),0));c=e.bandlar.map((e,r)=>{if(e.ball!=null)return e;let i=t.indexOf(e),a=Oe(n/t.length);return{...e,ball:i===t.length-1?Oe(n-a*(t.length-1)):a,band:e.band??String(r+1)}})}return{...e,ball:s,...c?{bandlar:c}:{},javob:(e.javob??``).replace(/\s+/g,``).toUpperCase(),qism:e.turi===`yozma`?3:t?2:1,...t?{umumiy:t}:{},variantlar:e.variantlar??t?.variantlar??null,yechim:De(n,e.raqam)}}),s={id:e.variant,nom:e.nom,betlar:e.betlar,savollar:o,maxBall:0,ballTaxminiy:a};return s.maxBall=Ne(s,{}).max,s}function Ae(e){let t=e.trim().replace(/[−–]/g,`-`).replace(/\s+/g,``).replace(`,`,`.`).match(/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?/i);return t?Number(t[0]):NaN}var E=e=>e.toLowerCase().replace(/[−–]/g,`-`).replace(/\s+/g,``).replace(/[ʻʼ‘’`']/g,`'`).replace(/,/g,`.`);function D(e,t){if(!t.trim()||!e.javob.trim())return!1;let n=Ae(e.javob);if(e.birlik!==`matn`&&Number.isFinite(n)&&/^[\s−–+-]*[\d.,]/.test(e.javob)){let r=Ae(t),i=e.javob.replace(/[−–]/g,`-`).match(/[.,](\d+)/)?.[1].length??0,a=Math.max(.5*10**-i,Math.abs(n)*.002);return Number.isFinite(r)&&Math.abs(r-n)<=a+1e-9}return E(t)===E(e.javob)}function je(e,t){return t===void 0?!1:typeof t==`string`?!!t:(e.bandlar??[]).some(e=>!!t[e.band]?.trim())}function Me(e,t){if(e.turi===`tanlov`){if(!e.javob)return{raqam:e.raqam,holat:`baholanmaydi`,ball:0,max:0};let n=typeof t==`string`?t:``;if(!n)return{raqam:e.raqam,holat:`bosh`,ball:0,max:e.ball};let r=e.javob.split(`,`).includes(n);return{raqam:e.raqam,holat:r?`togri`:`xato`,ball:r?e.ball:0,max:e.ball}}let n=(e.bandlar??[]).filter(e=>e.javob.trim());if(!n.length)return{raqam:e.raqam,holat:`baholanmaydi`,ball:0,max:0};let r=typeof t==`object`&&t?t:{},i=w(n.reduce((e,t)=>e+t.ball,0));if(!je(e,r))return{raqam:e.raqam,holat:`bosh`,ball:0,max:i};let a=w(n.reduce((e,t)=>e+(D(t,r[t.band]??``)?t.ball:0),0));return{raqam:e.raqam,holat:a>=i-1e-9?`togri`:a>0?`qisman`:`xato`,ball:a,max:i}}function Ne(e,t){let n={ball:0,max:0,togri:0,xato:0,bosh:0,qismlar:{1:{ball:0,max:0},2:{ball:0,max:0},3:{ball:0,max:0}},savollar:[]};for(let r of e.savollar){let e=Me(r,t[r.raqam]);n.savollar.push(e),n.ball+=e.ball,n.max+=e.max,n.qismlar[r.qism].ball+=e.ball,n.qismlar[r.qism].max+=e.max,e.holat===`togri`?n.togri++:e.holat===`xato`||e.holat===`qisman`?n.xato++:e.holat===`bosh`&&n.bosh++}n.ball=w(n.ball),n.max=w(n.max);for(let e of[1,2,3])n.qismlar[e]={ball:w(n.qismlar[e].ball),max:w(n.qismlar[e].max)};return n}var Pe=`MS1-`;function Fe(e){let t=new TextEncoder().encode(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function Ie(e){return Pe+Fe(JSON.stringify(e))}var O=e=>String(w(e)).replace(`.`,`,`),Le={variant:`01`,nom:`Sertifikat 02.04.2023`,betlar:`2–5`,umumiy:[{raqamlar:[33,34,35],shart:`Ketma ket ulangan eritmalar orqali bajarilgan elektroliz jarayoni ekanligi ma’lum bo’lsa…
Tok miqdori: 1F.
Eritmalar: 300 ml 2M li AgNO₃ | 250ml 3M li CuSO₄ | 500ml 0.5M li AuCl₃.
Katodda hosil bo’lgan moddalar massasi (g): mos ravishda a | b | c.`,variantlar:{A:`49,25`,B:`64,8`,C:`49,5`,D:`48`,E:`32`,F:`65,2`}}],savollar:[{raqam:1,ball:1.3,turi:`tanlov`,shart:`Harorat 10°C dan 30°C ga ko'tarilganda reaksiya tezligi 4 marta ortadi. Agar harorat 50°C dan 293°K ga o'zgartirilganda reaksiya tezligi qanday o'zgaradi.`,variantlar:{A:`8 marta kamayadi`,B:`16 marta kamayadi`,C:`16 marta ortadi`,D:`8 marta ortadi`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:1.3,turi:`tanlov`,shart:`Toģri javobni toping?
- Suvda yaxshi eriydi.
- Lakmus rangini o‘zgartiradi.
- Tarkibida kislorod 200/7 foizni tashkil etadi.`,variantlar:{A:`Ca(OH)₂`,B:`KOH`,C:`HNO₃`,D:`H₂SO₄`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:1.3,turi:`tanlov`,shart:`2 mol NaCl saqlagan eritma 4F tok bilan elektroliz qilinganda anodda va katodda necha grdan modda ajraladi?`,variantlar:{A:`71 va 2`,B:`87 va 4`,C:`87 va 2`,D:`71 va 4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:1.3,turi:`tanlov`,shart:`O → S → Se → Te qatorida qaysi xususiyat o‘zgarishi xato berilgan.`,variantlar:{A:`Elektromanfiylik kamayadi`,B:`Atom radius kamayadi`,C:`Metalik ortadi`,D:`Oksidlovchiligi kamayadi`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:1.3,turi:`tanlov`,shart:`0.1mol XH₃ dan 5.5gr X₂O₃ olindi HXO₃ ning molar massasini (g/mol) toping.`,variantlar:{A:`98`,B:`63`,C:`80`,D:`78`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:1.3,turi:`tanlov`,shart:`Na₂SO₄ tarkibida ion bog‘lanish qaysi atomlar o‘rtasida sodir bo'ladi?`,variantlar:{A:`oltingugurt va natriy`,B:`natriy va kislorod`,C:`natriy va oltingugurt`,D:`oltingugurt va kislorod`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:1.3,turi:`tanlov`,shart:`15% ertmadan 36 gr H₂O buglatildi va Tóyingan ertma (S=25) hosil bóldi.Ertma massasi 2 marta kamaydi chókmaga tushgan tuz massasini toping`,variantlar:{A:`1`,B:`2`,C:`4`,D:`5`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:1.3,turi:`tanlov`,shart:`Temir plastinka HCl eritmasiga tushirildi natijada 0,75 mol gaz ajtaldi. Olingan plastinka kumush nitrat eritmasiga tushirilganda ikkala holatda plastinka massasi 22g ortdi. plastinkaga o’tgan kumush miqdori (mol) topilsin.`,variantlar:{A:`0,8`,B:`0,6`,C:`0,4`,D:`1,6`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:1.3,turi:`tanlov`,shart:`Kaliy fosfat, alyuminiy sulfat, kalsiy atsetat tarkibidagi jami bog‘lar sonini toping?`,variantlar:{A:`39`,B:`36`,C:`42`,D:`48`},javob:`A`,tushmagan:!1,nuqson:`Ikki xil o'qilish: σ va π alohida sanalsa javob 48 (D) bo'ladi; rasmiy kalit 39 (A).`,rasm:null},{raqam:10,ball:1.3,turi:`tanlov`,shart:`Yopiq idishga atir sepildi. So'ngra o'g'zi berk holatida makkajo‘xori tushirildi. Birozdan so‘ng idishda hid yo‘qoldi. Bunda qanday jarayon sodir bo'lgan?`,variantlar:{A:`kimyoviy jarayon`,B:`Allatropiya`,C:`Adsorbsiya`,D:`Dekontatsiya`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:2.2,turi:`tanlov`,shart:`K₂Sₓ + (3x+1)K₂S₂O₈ + 4xH₂O → (3x+2)K₂SO₄ + 4xH₂SO₄ ushbu reaksiya uchun 180 g suv sarflanganda 1479 g tuz hosil bo’ldi. x ni qiymatini aniqlang.`,variantlar:{A:`5`,B:`6`,C:`4`,D:`3`},javob:`A`,tushmagan:!0,nuqson:null,rasm:null},{raqam:12,ball:2.2,turi:`tanlov`,shart:`Sun’iy radioaktivlik hodisasi bu - …`,variantlar:{A:`Radioaktiv elementlarni elementar zarrachalar (nurlar) bilan bombardimon qilib, yangi element izotopi olinishi;`,B:`Radioaktiv bo’lmagan elementlar yadrolarini radioaktiv nurlar bilan bombardimon qilib, yangi element izotopi yoki shu element izotopining hosil bo’lishi;`,C:`Radioaktiv xossali elementlarni barqaror holatga o’tishi;`,D:`Radioaktiv xossali bo’lmagan beqaror elementlarni radioaktiv nurlar bilan bombardimon qilib, yangi element izotoplarini hosil bo’lishi;`},javob:`B`,tushmagan:!0,nuqson:null,rasm:null},{raqam:13,ball:2.2,turi:`tanlov`,shart:`32% li CuSO₄ eritmasi noto’liq elektroliz qilinganda olingan eritmada massa jihatdan 16,7% sulfat kislota borligi aniqlandi. Elektroliz unumini (%) aniqlang?`,variantlar:{A:`80`,B:`50`,C:`60`,D:`75`},javob:`D`,tushmagan:!0,nuqson:null,rasm:null},{raqam:14,ball:2.2,turi:`tanlov`,shart:`Qaysi reaksiyada kislotali oksiddan yana kislotali oksid olinadi.`,variantlar:{A:`SiO₂ + C →`,B:`SO₂ + O₂ →`,C:`NO + O₂ →`,D:`CO₂ + C →`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:15,ball:2.2,turi:`tanlov`,shart:`NH₃ + CuO = A + B + C
m(A) – m(B) = 16,4 g. A modda nitrat kislota bilan ta’sirlashadi, B modda havo tarkibida bor, C modda Na bilan ta’sirlashib D molekular modda hosil qildi. Hosil bo‘lgan D modda molicha miqdordagi sianid kislota massasini toping.`,variantlar:{A:`2,7`,B:`5,4`,C:`8,1`,D:`4,05`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:2.2,turi:`tanlov`,shart:`Qishloq xo‘jaligida akaritsidlar qanday maqsadda ishlatiladi?`,variantlar:{A:`Begona o‘tlarga qarshi`,B:`Zararli kapalaklarga qarshi`,C:`Zamburug‘larga qarshi`,D:`Bargini to'kishda`},javob:`B`,tushmagan:!1,nuqson:`Savol nuqsonli: akaritsid kanalarga qarshi vosita (kapalaklarga qarshi — insektitsid); B — rasmiy kalit.`,rasm:null},{raqam:17,ball:2.2,turi:`tanlov`,shart:`Cl⁻ + MnO₄⁻ + H⁺ = o'ng tomondagi koeffitsienti aniqlang?`,variantlar:{A:`2`,B:`15`,C:`5`,D:`7`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:2.2,turi:`tanlov`,shart:`Qaysi brikmalarda C ni oksidlanish darajasi bir xil`,variantlar:{A:`Al₄C₃ va CH₄`,B:`CO va CO₂`,C:`CO₂ va CH₄`,D:`CH₃OH va HCOOH`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:2.2,turi:`tanlov`,shart:`Quyidagi ma’lumotlardan foydalanib hosil A va D modda molar massalari farqi (g/mol) topilsin.
A → B + NH₃ + H₂O
B + SiO₂ → E + Na₂SiO₃
E + C → D + CO`,variantlar:{A:`13`,B:`17`,C:`34`,D:`106`},javob:`D`,tushmagan:!0,nuqson:null,rasm:null},{raqam:20,ball:2.2,turi:`tanlov`,shart:`Geksaning barcha izomeriyalaridan to‘rtlamchi uglerod atomi nechta?`,variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:2.2,turi:`tanlov`,shart:`2-metilbutan kislotasining molekulasi asosiy zanjiridagi uglerod atomlarining (raqamlash bo’yicha)oksidlanish darajalarini mos ravishda toping ?`,variantlar:{A:`+3;-1;-2;-3`,B:`+3;-3;-2;-1`,C:`-3;-1;-2;-3`,D:`+2;-1;-2;-3`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:22,ball:2.2,turi:`tanlov`,shart:`"Makcofe" ning 100 g kuknini tarkibida 88,4 gramm uglevod, uglevod tarkibida 72,2 g shakar bor. 20 g kukun 180 g suvda eritilsa, eritmadagi shakarning massa ulushini aniqlang.`,variantlar:{A:`0,0722`,B:`7,22`,C:`8,84`,D:`0,0884`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:2.2,turi:`tanlov`,shart:`Nomalum alkanning ¾ qismi yondirilganda 1,8 mol CO₂ olindi, qolgani toʻliq xlorlanganda 64 gramm xlorli birikma olindi. Alkanni aniqlang?`,variantlar:{A:`metan`,B:`etan`,C:`propan`,D:`butan`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:2.2,turi:`tanlov`,shart:`30 g spirt ikkiga boʻlindi birinchi qismidan karbon kislota olindi va ikkinchi qismiga qo’shilib eterifikatsiya reaksiyasi natijasida 29 g modda hosil boʻldi. Dastlabki spirtni aniqlang?`,variantlar:{A:`Etanol`,B:`Propanol`,C:`Butanol-2`,D:`Metanol`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:2.2,turi:`tanlov`,shart:`Quyidagi reaksiya o’ng tomonida barcha koeffetsientlar yig’indisini aniqlang.
C₆H₅NO₂ + H₂ → C₆H₅NH₂ + …`,variantlar:{A:`5`,B:`2`,C:`3`,D:`4`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:2.2,turi:`tanlov`,shart:`Kislorod ozonotordan o‘tkazilganda hajm 20% ga kamaydi. Hosil bo'lgan gazlar aralashmasidagi kislorodlning massa (%) ulushini toping?`,variantlar:{A:`66.6`,B:`40`,C:`60`,D:`50`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:3.2,turi:`tanlov`,shart:`0,1 mol maltoza 0,4 mol saxaroza gidrolizlanganda hosil bòlgan moddalar Cu(OH)₂ eritmasiga yutirildi. Hosil bòlgan organik modda massasini toping?`,variantlar:{A:`117.6`,B:`120`,C:`78.4`,D:`58.8`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:3.2,turi:`tanlov`,shart:`200 ta (-CH₂-CH₂-)200 va 300ta (-CH₂-CH₂-)300 dan hosil bo'lgan aralashmaning o'rtacha molyar massasi?`,variantlar:{A:`7000`,B:`6720`,C:`8400`,D:`7280`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:3.2,turi:`tanlov`,shart:`Qaysi moddalar tarkibiga fenol yadrosi kirmaydi?
1. Geksaxloran 2. Pikrin kislota 3. Trotil 4. Tribrom anilin 5. Salitsil kislota 6. Pirokatexin 7. Benzil spirt`,variantlar:{A:`2,4,6,7`,B:`1,3,5`,C:`1,4,5`,D:`1,3,4,7`},javob:`D`,tushmagan:!0,nuqson:null,rasm:null},{raqam:30,ball:2.2,turi:`tanlov`,shart:`Pushti – siyohrangli kaliy permanganat eritmasini tayyorlab uchta probirkaga ajratamiz. So’ngra probirkalarga qaytaruvchilik xossasiga ega bo’lgan NaNO₂ moddasini solamiz. 1-probirkaga 1-2 tomchi sulfat kislota eritmasidan, 2- probirkaga 1-2 tomchi distillangan suv va 3-probirkaga kaliy gidroksid eritmasidan tomizamiz, ushbu tajriba orqali muhitda moddalarning xossalarini o’rganishimiz mumkin
Diqqat savol qaysi probirkaning rangi qoramtir-qo’ng’ir ranga kiradi?`,variantlar:{A:`3 raqamli`,B:`1 raqamli`,C:`2 raqamli`,D:`Hech qanday o’zgarish sodir bo’lmaydi`},javob:`C`,tushmagan:!0,nuqson:null,rasm:null},{raqam:31,ball:2.2,turi:`tanlov`,shart:`Qaysi belgi nomi noto’g’ri berilgan?`,variantlar:{A:`[belgi: radiatsiya trefoili, sariq uchburchak] - radioaktiv modda`,B:`[belgi: qizil chiziq bilan kesilgan stakan va vilka-pichoq] - kimyo xonasida ovqatlanish mumkin`,C:`[belgi: bosh suyagi va suyaklar, sariq uchburchak] - o’yuvchi modda`,D:`[belgi: alanga, sariq uchburchak] - yonuvchi modda`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:3,izoh:`Variantlar xavfsizlik belgilari (piktogrammalar) bilan berilgan: A — radiatsiya, B — ovqatlanish taqiqlangan (kesilgan stakan, vilka-pichoq), C — bosh suyagi (zaharli), D — alanga (4-betda)`}},{raqam:32,ball:2.2,turi:`tanlov`,shart:`Quyidagi rasmda moddalarni ajratishning qaysi usuli berilgan?`,variantlar:{A:`Distirlash`,B:`Haydash`,C:`Dekontatsiya`,D:`xromatografiya`},javob:`A`,tushmagan:!1,nuqson:`Distirlash va Haydash — bitta usulning ikki nomi; savol nuqsonli, B javobi ham bahsli deb hisoblansin.`,rasm:{bet:4,izoh:`Distillash qurilmasi: shtativdagi kolba va isitgich, suv sovutgich (xolodilnik), qabul qiluvchi kolba`}},{raqam:33,ball:2.2,turi:`tanlov`,shart:`a qiymati topilsin.`,variantlar:null,javob:`F`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:2.2,turi:`tanlov`,shart:`b qiymati topilsin`,variantlar:null,javob:`E`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:2.2,turi:`tanlov`,shart:`c qiymati topilsin`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`Xrom (II) va xrom (III) sulfidlarning massa farqi 4,8 g. Protonlar yig‘indisi 26,4·Nₐ bo‘lsa`,bandlar:[{band:`a`,savol:`Cr₂S₃ massasini toping.`,javob:`30`,birlik:`g`,ball:1.5},{band:`b`,savol:`shu arlashma HCl da eritilganda necha litr gaz ajraladi.`,javob:`16,8`,birlik:`l`,ball:1.7}],tushmagan:!1,nuqson:null,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`Propadiyen, propilen, pentadiyen−1,4 va vinil siklopentendan iborat aralashma toʻliq vodorod yordamida qaytarildi bunda sarflangan vodorod hajmi dastlabki uglevodorodlar yonishidan hosil boʻlgan CO₂ hajmidan ikki marta kam.`,bandlar:[{band:`a`,savol:`boshlangich aralashma 0.4 mol boʻlsa propadiyen massasini (g) toping`,javob:`8`,birlik:`g`,ball:1.5},{band:`b`,savol:`dastlabki aralashmada 10 g propadeyin bo’lsa necha mol gazlar aralashmasi bo’lgan ?`,javob:`0,5`,birlik:`mol`,ball:1.7}],tushmagan:!1,nuqson:`Shartda nomuvofiqlik: vinilsiklopenten uchun k−2p = +3 (+1 emas), javob bir qiymatli chiqmaydi; kalit uni +1 deb olgan (ehtimol vinilsiklopentadiyen nazarda tutilgan).`,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`Qaynoq kaliy gidroksid eritmasiga Cl₂ gazi yuttirildi ,olingan tuzlar qattiq qizdirilganda tuzlar aralashmasi tarkibida 2,3 mol KCl va 0,1mol bertole tuzi olindi.`,bandlar:[{band:`a`,savol:`tuzning parchalanish unumini (%) toping`,javob:`75`,birlik:`%`,ball:1.5},{band:`b`,savol:`reaksiyaga kirishgan xlor bilan qancha mol temir reaksiyaga kirisha oladi?`,javob:`0,8`,birlik:`mol`,ball:1.7}],tushmagan:!1,nuqson:null,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`Ikkita elektron pogʻonadagi maksimal elektron va yacheykalar soni 75 ta, bosh kvant soni katta boʻlgan pogʻonaga maksimal 32 ta elektron sigʻadi.`,bandlar:[{band:`a`,savol:`elektron pogʻonalar bosh kvant sonlari nisbatini belgilang?`,javob:`3 : 4`,birlik:`matn`,ball:1.5},{band:`b`,savol:`bosh kvant soni kichik pog'onada nechta elektron boʻladi?`,javob:`18`,birlik:`ta`,ball:1.7}],tushmagan:!1,nuqson:null,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`342gr 30%li bariy gidroksid eritmasi bilan karbonat angidridning to‘liq reaksiyasidan 39.4gr cho‘kma hosil bo‘ldi.`,bandlar:[{band:`a`,savol:`Reaksiyada qatnashga CO₂ molini`,javob:`1`,birlik:`mol`,ball:1.5},{band:`b`,savol:`Hosil bo‘lgan eritmadagi suv massasini aniqlang.`,javob:`243`,birlik:`g`,ball:1.7}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:3.2,turi:`yozma`,shart:`10A tok bilan 2,68 soat davomdida Na₂CO₃ eritmasi elektroliz qilindi. Bunda eritma massasi 2,8 marta kamaydi va 42,4% li eritma hosil bo’ldi. so’ngra eritmaga x g 2% li HBr eritmasi eritmasi bilan to’liq ta’sirlashdi.`,bandlar:[{band:`a`,savol:`dastlabki eritma massasi (g) topilsin.`,javob:`14`,birlik:`g`,ball:1.5},{band:`b`,savol:`x topilsin.`,javob:`162`,birlik:`g`,ball:1.7}],tushmagan:!1,nuqson:`Shart fizik jihatdan bahsli: sonlar matematik yopiladi, lekin Na₂CO₃ eruvchanligidan bir necha baravar yuqori konsentratsiya chiqadi.`,rasm:null},{raqam:42,ball:3.2,turi:`yozma`,shart:`44,2g o’simlik moyi tarkibida faqat bir xil kislota qoldiqlari mavjud, moyning ishqoriy sharoitda to’la gidrolizlanishidan 48g kaliyli tuz hosil bo’ldi.`,bandlar:[{band:`a`,savol:`xuddi shunday moy yo’liq gidrogenlanganda 89g maxsulot olish uchun sarflangan vodorod miqdori (mol)`,javob:`0,3`,birlik:`mol`,ball:1.5},{band:`b`,savol:`ushbu 44,2g yog’ni yondirish uchun zarur bo’lgan`,javob:`4`,birlik:`mol`,ball:1.7}],tushmagan:!1,nuqson:`b) bandi manbada chala ("zarur bo'lgan" da uzilgan); kislorod miqdori deb olingan: 4 mol O₂ (89,6 l yoki 128 g ham to'g'ri).`,rasm:null},{raqam:43,ball:3.2,turi:`yozma`,shart:`Metall juda suyultirilgan nitrat kislotada eritildi. Bunda 2,13% va 0,3% li tuzlar tutuvchi 800g eritma hosil bo’ldi.`,bandlar:[{band:`a`,savol:`metall massasi (g) topilsin`,javob:`2,16`,birlik:`g`,ball:1.5},{band:`b`,savol:`sarflangan nitrat kislota massasi (g) topilsin.`,javob:`18,9`,birlik:`g`,ball:1.7}],tushmagan:!1,nuqson:null,rasm:null},{raqam:44,ball:3.2,turi:`yozma`,shart:`Germetik yopiq idishga ikkita stakan joylashtirildi. Birinchisida mo‘l miqdorda fosfor (V)-oksid, ikkinchisida 60 g 8 %li NaOH eritmasi mavjud. Ma’lum vaqtdan so‘ng ikkinchi idishda ishqor konsentratsiyasi (%) 2 marta o‘zgardi. (Havodagi suv bug‘lari inobatga olinmasin.)`,bandlar:[{band:`a`,savol:`Birinchi idish massasi necha grammga o‘zgargan?`,javob:`30`,birlik:`g`,ball:1.5},{band:`b`,savol:`hosil bo’lgan kislota massasi (g) topilsin.`,javob:`108,9`,birlik:`g`,ball:1.7}],tushmagan:!0,nuqson:`a) massa 30 g ga ortgan (+30 g); b) ≈108,9 g H₃PO₄ (taxminiy).`,rasm:null},{raqam:45,ball:3.2,turi:`yozma`,shart:`0.8 mol KMnO₄ 29.2% li HCl eritmasi bilan qoldiqsiz ta’sirlashdi.`,bandlar:[{band:`a`,savol:`ajralgan gaz hajmi (l.n.sh.) topilsin.`,javob:`44,8`,birlik:`l`,ball:1.5},{band:`b`,savol:`hosil bo’lgan eritma massasi (g) topilsin.`,javob:`784,4`,birlik:`g`,ball:1.7}],tushmagan:!1,nuqson:null,rasm:null}]},Re={variant:`02`,nom:`Sertifikat 28.01.2024`,betlar:`6–9`,umumiy:[{raqamlar:[33,34,35],shart:`8,94 gr Kaliy galogenid oksidlash uchun 4 mol/l li 5ml kaliy dixromat eritmasi va H₂SO₄ sarflandi. (Berilgan javoblarni moslang!)`,variantlar:{A:`200`,B:`100`,C:`3060`,D:`1120`,E:`2240`,F:`1650`}}],savollar:[{raqam:1,ball:2.2,turi:`tanlov`,shart:`Ushu rasmda qanday moddalar guruhi tasvirlangan.`,variantlar:{A:`Zaxarli`,B:`O'yuvchi`,C:`Radiaktivlik`,D:`Portlovchi`},javob:`B`,tushmagan:!1,nuqson:`PDF da bu savol uchun ball ko'rsatilmagan; ball md bo'yicha (2,2).`,rasm:{bet:6,izoh:`Sariq uchburchak xavf belgisi: probirkadan quyilayotgan suyuqlik qo'l va sirtni yemirmoqda (o'yuvchi modda belgisi)`}},{raqam:2,ball:2.2,turi:`tanlov`,shart:`X₂H₆ 0,2 moli 12,4 gr bo'lsa, XH₄ ni 0,3 moli masasini (g) toping?`,variantlar:{A:`3,2`,B:`6,4`,C:`9,6`,D:`12,8`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:2.2,turi:`tanlov`,shart:`0,4 mol KCl eritmasi elektroliz qilindi va hosil bo'lgan eritma 100 gr 9,8% H₃PO₄ eritmasi va 7,1 g P₂O₅ yutirilganda necha gramm tuz hosil bo'ldi.`,variantlar:{A:`34,8`,B:`45,6`,C:`17,4`,D:`27,2`},javob:`A`,tushmagan:!1,nuqson:`Ball: PDF da [2.2 ball], md da 1,3 ball (3- va 4-savol ballari md da almashgan).`,rasm:null},{raqam:4,ball:1.3,turi:`tanlov`,shart:`Baliq moyidan chiqadigan hidli amini yo'qotish uchun oshpazlar qaysi moddadan foydalanadi.`,variantlar:{A:`KOH`,B:`Na₂CO₃`,C:`CH₃COOH`,D:`C₁₇H₃₁COONa`},javob:`C`,tushmagan:!1,nuqson:`Ball: PDF da [1.3 ball], md da 2,2 ball (3- va 4-savol ballari md da almashgan).`,rasm:null},{raqam:5,ball:2.2,turi:`tanlov`,shart:`Rasmda ko’rsatilga reaksiyalarni X va Y ga mos keladigan moddalar juftligini toping?`,variantlar:{A:`x-HCl; y-Ba(OH)₂`,B:`x-NaOH y-Fe(OH)₂`,C:`x-H₂S y-NaOH`,D:`x-NH₃ y-Ca(OH)₂`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:6,izoh:`Ikki juft probirka: KHCO₃ eritmasiga X qo'shilganda gaz pufakchalari ajraladi; KHCO₃ eritmasiga Y qo'shilganda cho'kma hosil bo'ladi`}},{raqam:6,ball:2.2,turi:`tanlov`,shart:`Kimyoviy reaksiya 10 °C dan 30°C ga o'zgarganda reaksiya tezligi 4 marta ortsa, 40 °C dan 343°K ga o'zgarsa, necha marta ortadi.`,variantlar:{A:`8`,B:`16`,C:`1/8`,D:`1/8`},javob:`A`,tushmagan:!1,nuqson:`C va D variantlari bir xil (1/8) — manbadagi terish xatosi.`,rasm:null},{raqam:7,ball:2.2,turi:`tanlov`,shart:`Teng mol nisbatda olingan SO₂ va N₂ gazlar aralashmasining neonga nisbatan zichligini aniqlang.`,variantlar:{A:`3,2`,B:`2,3`,C:`46`,D:`2,4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:2.2,turi:`tanlov`,shart:`Na₂SiO₃ →(η = 80%) SiO₂ →(η = 80%) Si →(η = 50%) Mg₂Si →(η = 75%) SiH₄
152.5g Na₂SiO₃ dan birinch va ikkinchi reaksiya unumi 80%, uchunchi reaksiya 50% to’rtinchi reaksiya 75 % unum bilan bordi. Ushbu reaksiya oxirida qancha hajm (n.sh) litr SiH₄ hosil boʻladi.`,variantlar:{A:`13,44`,B:`8,96`,C:`6,72`,D:`3,36`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:1.3,turi:`tanlov`,shart:`Sariq rangli asos ni toping?`,variantlar:{A:`KOH`,B:`Fe(OH)₂`,C:`CuOH`,D:`Ni(OH)₂`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:1.3,turi:`tanlov`,shart:`Tibbiyotda 0,9% li NaCl eritmasi fiziologik eritma hisoblanadi. 100 gr 18% li NaCl eritmasiga necha gramm suv qo'shilganda fiziologik eritma hosil bo’ladi.`,variantlar:{A:`200`,B:`1900`,C:`900`,D:`100`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:2.2,turi:`tanlov`,shart:`0,6 mol C₄Hₓ tarkibli modda tarkibida 18·Nₐ proton boʻlsa, xuddi shuncha miqdordagi moddani yoqish uchun qancha(mol) kislorod sarflanadi`,variantlar:{A:`3,6`,B:`0,9`,C:`2,2`,D:`3,3`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:1.3,turi:`tanlov`,shart:`S⁻² → S⁺⁴ ushbu jarayon uchun to‘g‘ri javobni aniqlang.`,variantlar:{A:`S⁻² ioni 6 ta elektron bergan`,B:`S⁻² ioni 6 ta elektron olgan`,C:`S⁻² ioni qaytarildi`,D:`S⁻² ioni oksidlovchi`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:2.2,turi:`tanlov`,shart:`MnSO₄ + KMnO₄ + H₂O = MnO₂ + K₂SO₄ + H₂SO₄
Amfoter oksid massasi 130,5 bo\`lsa, K₂SO₄ bilan H₂SO₄ massasi farqini toping.`,variantlar:{A:`22,2`,B:`11,1`,C:`6,6`,D:`5,4`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:1.3,turi:`tanlov`,shart:`Pentan kislota, Ca₃(PO₄)₂, Al₂(SO₄)₃ moddalar tarkibidagi σ − va π − bogʻlar soni yig’indisi qanday oʻzgaradi.`,variantlar:{A:`Kamayadi, Ortadi`,B:`Kamayadi, Kamayadi`,C:`O‘zgarmaydi, Ortadi`,D:`Ortadi, Ortadi`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:15,ball:2.2,turi:`tanlov`,shart:`202 gr KNO₃ 1000 gr suvda eritildi hosil bo'lgan eritma ( a=90% ) bilan dissotsiyalandi. Eritma tarkibidagi gidratlangan zarachalar sonini aniqlang.(gidroliz hisobga olinmasin)`,variantlar:{A:`1,6`,B:`3,2`,C:`4`,D:`3,6`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:1.3,turi:`tanlov`,shart:`Kvant son bo'yicha jadvalda xulosalardan qaysi birlari to‘g‘ri?
N: | Xulosa
1 | Uchinchi pog’onaga maksimal 18 ta elektron sig’adi
2 | l = 1 pog’onachaga 2 ta elektron sig’adi
3 | Magnit kvant son manfiy qiymatlarni ham qabul qiladi
4 | Spin kvant soni faqat musbat qiymatga ega bo’ladi`,variantlar:{A:`1,2`,B:`1,3`,C:`2,4`,D:`2,3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:2.2,turi:`tanlov`,shart:`Ikkinchi reaksiyada B modda 0,5 mol hosil bo’lgan bo’lsa, A va C moddalar massa farqini toping?
1) X → K₂MnO₄ + MnO₂ + O₂
2) X + E → A + C + B + H₂O
3) H₂ + B → E`,variantlar:{A:`5,15`,B:`30,9`,C:`20,6`,D:`10,3`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:2.2,turi:`tanlov`,shart:`X mol K₃PO₄ ( a=20% ) bo‘lsa, 2,408 · 10²³ ta ion bo'lsa x ni toping.`,variantlar:{A:`0,4`,B:`0,1`,C:`0,5`,D:`1`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:2.2,turi:`tanlov`,shart:`Vodorod, is gazi va metandan iborat aralashmaning 1 hajmini to’liq yondirish uchun 7 hajm havo sarflandi. Agar yonishdan so’ng hosil bo’lgan aralashmaning vodorodga nisbatan zichligini 15 ga (n.sh da) teng bo’lsa, dastlabki aralashmaning vodorodga nisbatan zichligini aniqlang.`,variantlar:{A:`10,2`,B:`8,4`,C:`7,8`,D:`12,4`},javob:`C`,tushmagan:!0,nuqson:null,rasm:null},{raqam:20,ball:2.2,turi:`tanlov`,shart:`Alkan tarkibida 7 ta uglerod tutgan va asosiy zanjirida 5 ta uglerod tutgan izomerida jami nechta ikkilamchi uglerod atomlari bor.`,variantlar:{A:`9`,B:`6`,C:`5`,D:`4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:2.2,turi:`tanlov`,shart:`1 moldan olingan etilen glikolga yetarli miqdor Natriy, kaliy va HCl qo'shildi. Qaysi javob to'g'ri`,variantlar:{A:`106 g Na glikolyat hosil boʻlgan`,B:`28 g C₂H₄ hosil boʻlgan`,C:`108 g K glikolyat hosil boʻlgan`,D:`69 gr dixloretan hosil boʻlgan`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:22,ball:2.2,turi:`tanlov`,shart:`1,77 gramm trimetilamin va x gramm ammoniy nitratdagi azot atomlari soni teng bo'lsa, x toping?`,variantlar:{A:`0,57`,B:`0,34`,C:`1,2`,D:`0,45`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:2.2,turi:`tanlov`,shart:`Toluol kislotali sharoitda kaliy permanganatda oksidlansa 1,5 mol MnSO₄ xosil bo'lsa, reaksiyaga kirishgan organik modda massasini toping`,variantlar:{A:`18,4`,B:`86`,C:`115`,D:`92`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:2.2,turi:`tanlov`,shart:`Berilgan moddaga hos hususiyatni toping
[–CH₂–C(CH₃)=CH–CH₂–]ₙ
1. Sis butadiyen 1,3 monomeri hisoblanadi
2. Poli 2 – metilbutadiyen – 1,3 ning sis - holati
3. Tabiiy kauchuk deyiladi
4. C₅H₁₀ tarkibiga ega`,variantlar:{A:`1,4`,B:`2,4`,C:`2,3`,D:`1,2`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:7,izoh:`Polimer zvenosining struktura formulasi: [–CH₂–C(CH₃)=CH–CH₂–]ₙ, CH₃ va H qo'sh bog'ning bir tomonida (sis-poliizopren)`}},{raqam:25,ball:1.3,turi:`tanlov`,shart:`Qaysi qatordagi barcha ma\`lumotlar to\`g\`ri.
N: | Nomi | Mr | Qutibsiz kovalent bog’lar soni | Gomologi
I | Valerian kislota | 102 | 4 | Butilformiat
II | Buten | 56 | 4 | Propen
III | pentanon | 86 | 5 | butanon`,variantlar:{A:`I,II`,B:`II`,C:`I, III`,D:`III`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:2.2,turi:`tanlov`,shart:`Maltoza gidrolizlandi olingan glukoza massasi dastlabki maltoza massasidan 3,6 gramga ko'p bo’lsa, hosil bo’lgan glukoza teng ikki qismga ajratildi. Birinchi qismi yangi tayyorlangan Cu(OH)₂ eritmasidan o'tkazildi. Ikkinchi qismi kumush oksidning ammiakdagi eritmasidan o'tkasildi. Ikkala jarayonda hosil bo'lgan cho'kmalar massa (g) farqini toping.`,variantlar:{A:`14,4`,B:`7,2`,C:`21,6`,D:`36`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:1.3,turi:`tanlov`,shart:`Quyidagi reaksiya tenglamasida n=3 bo‘lsa, qaytaruvchi yo‘qotgan elektronlar sonini aniqlang.
CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O`,variantlar:{A:`20`,B:`18`,C:`4`,D:`24`},javob:`A`,tushmagan:!0,nuqson:null,rasm:null},{raqam:28,ball:2.2,turi:`tanlov`,shart:`Aldegid qaytarilib 27,6 g spirt, oksidlanib 36 g kislota hosil qilsa, ushbu aldegid uchun to‘g‘ri javobni toping.`,variantlar:{A:`molekulasida 7 ta atomi bor`,B:`molekulasida 7 ta sigma bog‘ mavjud`,C:`formaldegid ham deyiladi`,D:`molekulasidagi C – C bog‘lar soni 3 ta`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:2.2,turi:`tanlov`,shart:`Noma’lum organik kislota va glitserin eterifikatsiyasi orqali olingan yog‘ning nisbiy molekulyar massasi 386 g/mol ga teng bo‘lsa, yog‘ni hosil qilish uchun reaksiyaga kirishgan karbon kislotaning molyar massasini (g/mol) toping.`,variantlar:{A:`102`,B:`116`,C:`130`,D:`88`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:2.2,turi:`tanlov`,shart:`Berilgan reagentlar ichida qaysi birlari Fe⁺³ kationini aniqlash uchun ishlatiladi?
I. Natriy gidroksid–NaOH
II. Kaliy nitrat–KNO₃
III. Fenol–C₆H₅OH
IV. Sariq qon tuzi–K₄[Fe(CN)₆]`,variantlar:{A:`I , II`,B:`Faqat – I`,C:`I, III, IV`,D:`II,IV`},javob:`C`,tushmagan:!0,nuqson:null,rasm:null},{raqam:31,ball:1.3,turi:`tanlov`,shart:`Quyidagi tajriba davomida olingan organic modda molar massasi (g/mol) topilsin.`,variantlar:{A:`62`,B:`60`,C:`90`,D:`44`},javob:`A`,tushmagan:!0,nuqson:null,rasm:{bet:8,izoh:`Tajriba qurilmasi: C₂H₅OH + H₂SO₄ solingan probirka spirt lampasida qizdirilmoqda, ajralgan gaz KMnO₄ eritmasi solingan probirkaga o'tkazilmoqda`}},{raqam:32,ball:2.2,turi:`tanlov`,shart:`Eritmada qanday modda mavjud bo’lgan?`,variantlar:{A:`H₂SO₄(kons)`,B:`NaOH`,C:`HNO₃`,D:`HCl`},javob:`D`,tushmagan:!0,nuqson:null,rasm:{bet:8,izoh:`To'rtta probirka bir xil sariq eritma bilan: Mg, Zn, Sn solinganlarida H₂ pufakchalari ajralmoqda (Mg da eng ko'p), Cu da o'zgarish yo'q`}},{raqam:33,ball:2.2,turi:`tanlov`,shart:`Dastlabki tuzlarning massa farqini (mg) toping`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:2.2,turi:`tanlov`,shart:`Kaliy dixromatning tarkibidagi atom soniga teng atom tutgan sirka kislota massasini (mg) toping`,variantlar:null,javob:`F`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:2.2,turi:`tanlov`,shart:`Reaksiyadan hosil boʻlgan K₂SO₄ va reaksiyaga kirishgan H₂SO₄ massa farqini (mg) toping`,variantlar:null,javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`198,08 g 25% li KMnO₄ eritmasiga 0,54 mol SO₂ va N₂ dan iborat (D(Ne) = 2,6) aralashmasi qo‘shilganda faqat yagona oksidlanish qaytarilish reaksiyasi sodir bo‘ldi.`,bandlar:[{band:`a`,savol:`Reaksiyaga kirishgan tuz miqdorini (mol) aniqlang.`,javob:`0,24`,birlik:`mol`,ball:1.7},{band:`b`,savol:`Ortib qolgan KMnO₄ ning massasi (g) aniqlang.`,javob:`11,6`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`x g 37,8 % li HNO₃ eritmasiga y g Cu bo‘lakchasi tashlandi. Reaksiyada 1,2 mol kislorod tutuvchi NO va NO₂ aralashmasi hosil bo‘ldi. Hosil bo‘lgan tuz termik parchalanganda 44 g qattiq qoldiq hosil bo‘ldi.`,bandlar:[{band:`a`,savol:`x ni toping.`,javob:`300`,birlik:`g`,ball:1.7},{band:`b`,savol:`Oxirgi aralashmadagi H₂O massasi (g) toping.`,javob:`202,8`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`Birikmalarida II valentlikni namoyon qiladigan metaldan yasalgan bir xil massadagi plastinkalarning biri FeSO₄ eritmasiga tushirilganda massasi 0,27 g ga kamaydi. Ikkinchisi esa SnBr2 eritmasiga tushirilganda 1,62 g ga ortdi.`,bandlar:[{band:`a`,savol:`Plastinka qaysi metaldan yasalgan?`,javob:`Rux (Zn)`,birlik:`matn`,ball:1.7},{band:`b`,savol:`Erigan metall bilan qancha 12% li HI eritmasi reaksiyaga kirishadi?`,javob:`64`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:`b) ikki xil o'qilishi mumkin: bitta plastinkadan erigan metall (0,03 mol) — 64 g; ikkalasidan (0,06 mol) — 128 g; ikkalasi ham qabul qilinsin.`,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`Magniy havoda qizdirilganda MgO oksidi massa ulushi 60% boʻlgan aralashma olindi. Olingan qattiq qoldiq suvda eritilganda 0,24 mol gaz ajraldi.`,bandlar:[{band:`a`,savol:`Sarflangan kislorod massasini (g) toping.`,javob:`7,2`,birlik:`g`,ball:1.7},{band:`b`,savol:`Magniy necha mol suv bilan tasirlashgan?`,javob:`1,17`,birlik:`mol`,ball:1.5}],tushmagan:!1,nuqson:`b) noaniq: aslida suv magniy birikmalari bilan ta'sirlashadi; faqat nitrid bilan deb olinsa 0,72 mol — ikkalasi ham qabul qilinsin.`,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`Toluolning gomologi kislorodda yondirilganda 0,48 mol kislorod sarflanadi va 4,32 g suv ajralib chiqdi.`,bandlar:[{band:`a`,savol:`toluol gomologi molekulasi tarkibidagi atomlar sonini yozing.`,javob:`21`,birlik:`ta`,ball:1.7},{band:`b`,savol:`organik modda tarkibidagi uglerod atomi massa ulushini aniqlang.`,javob:`90`,birlik:`%`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:3.2,turi:`yozma`,shart:`30,2 g 25% li MnSO₄ elektroliz qilinganda 0,085 mol gaz ajraldi va 25,93 g eritma hoqil bo‘ldi.`,bandlar:[{band:`a`,savol:`Necha farad (F) tok sarflangan?`,javob:`0,18`,birlik:`F`,ball:1.7},{band:`b`,savol:`Elektrolizdam so‘ng eritmada qancha (g) suv qoladi?`,javob:`21,03`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:42,ball:3.2,turi:`yozma`,shart:`10°C va 20°C li eritmalarning eruvchanliklari mos ravishda 15 va 40 ga teng. 10°C da suvga 12 g tuz qo‘shib eritma hosil qilindi (T = const). Hosil bo‘lgan eritma 20°C gacha qizdirildi va yana tuz qo‘shib to‘yintirildi. Olingan eritma 7°C gacha sovitilganda 27,2 g tuz cho‘kmaga tushdi.`,bandlar:[{band:`a`,savol:`7°C dagi ushbu tuzning eruvchaligini toping.`,javob:`6`,birlik:`g/100 g suv`,ball:1.7},{band:`b`,savol:`7°C da erituvchi va eruvchining massa farqini (g) toping.`,javob:`75,2`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:43,ball:3.2,turi:`yozma`,shart:`Siklobutanga alkan qo'shilganda uglerod atomlar soni 1,25 marta, vodorod atomlari soni 4/3 marta ortasa.`,bandlar:[{band:`a`,savol:`10,6 gr aralashmadagi alkan massasi (g) toping?`,javob:`2,2`,birlik:`g`,ball:1.7},{band:`b`,savol:`21,2 gr arashmadagi C masasini (g) toping?`,javob:`18`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:44,ball:3.2,turi:`yozma`,shart:`Gomologik qatorida ketma ket joylashgan 32,76 g karbon kislotalar aralashmasiga metanol qo'shildi. 27,24 gr murakkab efirlar aralashmasi olindi. Massasi kichik gomolog miqdori katta gomolog miqdoridan 2,5 marta katta. (Katta gomolog miqdori 0,12 mol, unum 80% va 50%)`,bandlar:[{band:`a`,savol:`Aralashma molini toping`,javob:`0,42`,birlik:`mol`,ball:1.7},{band:`b`,savol:`Kislotalar massa (g) farqi toping`,javob:`11,64`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:45,ball:3.2,turi:`yozma`,shart:`A+B ↔ C A modda konsentratsiyasi 2 marta kamayishiga uchun ketgan vaqt, 4 marta kamayishiga ketgan vaqtdan 10 sekga kam sarflansa,`,bandlar:[{band:`a`,savol:`A modda konsentratsiyasi 5 marta kamayishi uchun qancha vaqt (sekund) sarflaydi?`,javob:`23,2`,birlik:`s`,ball:1.7},{band:`b`,savol:`A modda konsentratsiyasi 2,5 marta kamayishi uchun qancha vaqt (minut) sarflaydi.`,javob:`0,22`,birlik:`min`,ball:1.5}],tushmagan:!1,nuqson:`Javoblar taxminiy: a) ≈23,2 s; b) ≈13,2 s ≈ 0,22 min.`,rasm:null}]},ze={variant:`03`,nom:`Sertifikat 26.05.2024, I smena`,betlar:`10–12`,umumiy:[{raqamlar:[33,34,35],shart:`P₄S₇ + HNO₃ + H₂O = PO₄³⁻ + SO₄²⁻ + NO + H⁺
Ushbu oksidlanish qaytarilish reaksiyasini tenglashtiring.`,variantlar:{A:`18`,B:`21`,C:`8`,D:`14`,E:`20`,F:`16`}}],savollar:[{raqam:1,ball:1.3,turi:`tanlov`,shart:`Tarozining ikkita pallasiga 5g dan ohaktosh joylashtirildi va tarozi pallalari tenglashdi. tarozining chap pallasi olinib doimiy massaga kelguncha qizdirildi. Tarozi pallalari qaytadan tenglashishi uchun chap pallaga qanday massada (g) modda qo’shish zarur?`,variantlar:{A:`4,4`,B:`2,2`,C:`2,8`,D:`2,5`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:1.3,turi:`tanlov`,shart:`Teng massada olingan geliy va azot aralashmasining 13,5litr miqdori 83,1kPa bosim va 42°C da qanday massali (g) bo’ladi?`,variantlar:{A:`4`,B:`3`,C:`3,5`,D:`4,2`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:1.3,turi:`tanlov`,shart:`Tartib raqami 3, 4, 12 bo’lgan elementlarni elektromanfiyligi ortib borish tartibida joylashtiring.`,variantlar:{A:`3,4,12`,B:`4,3,12`,C:`3,12,4`,D:`12,3,4`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:1.3,turi:`tanlov`,shart:`kumush, kalsiy va qo’rg’oshin ionlari saqlagan eritmaga qaysi modda qo’shilganda eritamda faqat kumush ionlari saqlanib qoladi?`,variantlar:{A:`NaF`,B:`Na₂CO₃`,C:`K₂SO₄`,D:`Na₃PO₄`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:1.3,turi:`tanlov`,shart:`Ammiak yonishida 2,04g ammiak va 0,105mol kislorod foydalanildi ajralgan suv massasi topilsin.`,variantlar:{A:`1,44`,B:`2,16`,C:`4,8`,D:`3,24`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:1.3,turi:`tanlov`,shart:`60,8 g Kalsiy karbid va kalsiy oksid aralashmasi 200 g suvda eritildi hosil bo’lgan eritmadagi kalsiy ionini to’liq cho’ktirish uchun 150 g kadmiy ftorid sarflandi.
Jarayon oxirida idishda qolgan modda massasi (g) topilsin.`,variantlar:{A:`164`,B:`192,4`,C:`171,2`,D:`182,7`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:1.3,turi:`tanlov`,shart:`Metan yonishida reaksiya tezligi 5mol/l·min. Sistema bosimi 2 marta oshirildi reaksiya tezligi qanday (mol/l·min( boʻladi?`,variantlar:{A:`32`,B:`8`,C:`40`,D:`10`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:1.3,turi:`tanlov`,shart:`Eritmaga xos malumotni toping degan
1) rangli boʻlishi mumkin
2) tarkibi bir xil moddadan iborat
3) eritma tayyorlashda hajm oʻzgarmaydi
4) temperaturani koʻtarib erituvchi va erigan moddaga ajratish mumkin`,variantlar:{A:`1,4`,B:`2,3`,C:`1,3`,D:`2,4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:1.3,turi:`tanlov`,shart:`Metan va silandan iborat gazlar aralashmasi yondirildi ( har ikkala gazning yonish unumi 80%). Hosil bo’lgan qattiq modda massasi gaz moddalar massasiga teng bo’ldi. Dastlabki aralashmada silan hajmiy ulushi topilsin.`,variantlar:{A:`0,48`,B:`0,45`,C:`0,52`,D:`0,55`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:1.3,turi:`tanlov`,shart:`Forfor barcha kislotalari tarkibida V valentli ekanligini bilgan holatda bariy gipofosfit molekulasida jami bog’lar soni topilsin.`,variantlar:{A:`6`,B:`12`,C:`10`,D:`8`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:2.2,turi:`tanlov`,shart:`1 · 10⁻⁸ M li HCl eritmasi pH qiymati topilsin.`,variantlar:{A:`7`,B:`6,98`,C:`8`,D:`7,02`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:2.2,turi:`tanlov`,shart:`300 g 4,5%li KNO₃ eritmasini 13,4 A tok kuchi bilan elektroliz qilib KNO₃ ning 30°C dagi toʻyingan eritmasi olindi. Eritma necha soat davomida elektroliz qilingan [S(30°C) = 45]`,variantlar:{A:`57`,B:`28,5`,C:`114`,D:`75`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:2.2,turi:`tanlov`,shart:`Dissosiyalishi natijasida zaryadi faqat 1 bo’lgan ionlar hosil qiladigan elektrolit moddalarni belgilang.`,variantlar:{A:`H₂O; LiOH`,B:`CaBr₂; KOH`,C:`NaCl; NaOH`,D:`H₂SO₄, Na₂CO₃`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:2.2,turi:`tanlov`,shart:`Tarkibida s va d elektronlari soni teng bo’lgan ionlarni ko’rsating.`,variantlar:{A:`Ni, Sr`,B:`Ni²⁺; Fe³⁺`,C:`Fe²⁺; Co³⁺`,D:`Ni³⁺; Fe²⁺`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:15,ball:2.2,turi:`tanlov`,shart:`2:1 mol nisbatda olingan alkanlar tarkibida ( n(C)/n(H)=7/20) vodorod atomlari soni 3:2 nisbatda bo’lsa, dastlabki aralashmaning asetilenga nisbatan zichligi topilsin.`,variantlar:{A:`1,25`,B:`1,33`,C:`2,2`,D:`1,5`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:2.2,turi:`tanlov`,shart:`CH₃−CH=CH−C≡CH modda uchun quyidagi berilgan jadvaldan qaysi birin tog’ri?
N: | σ | π | Uglerod atomlari gibridlanishi | Jami gibrid orbitallar
1 | 10 | 2 | sp;sp;sp²;sp²;sp³ | 16
2 | 11 | 3 | sp;sp;sp;sp³;sp² | 14
3 | 10 | 3 | sp²;sp;sp²;sp²;sp³ | 14
4 | 10 | 3 | sp;sp;sp²;sp²;sp³ | 14`,variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:2.2,turi:`tanlov`,shart:`Quyidagi jadvaldan foydalanib y ni aniqlang.
3A + xB → C
Reaksiya tezligi (mol/l·min) | A modda konsentratsiyasi | B modda konsentratsiyasi
16 | 2 | 1
216 | 3 | 2
y | 1 | 3`,variantlar:{A:`9`,B:`18`,C:`4,5`,D:`3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:2.2,turi:`tanlov`,shart:`Asetilen bilan X gaz aralashmasida X ni massa ulushi 48%, mol ulushi esa 60% bòlsa, X gazni toping.`,variantlar:{A:`O₂`,B:`CO`,C:`CH₄`,D:`NO`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:2.2,turi:`tanlov`,shart:`Quyidagi jadvalga mos keluvchi grafiklarni aniqlang.
Reaksiya uchun olingan moddalar | Massalari (g) | Boshlang’ich aralashmadagi molekulalar soni
H₂ | a | 17 Nₐ
O₂ | a |`,variantlar:{A:`faqat I`,B:`I,II`,C:`faqat II`,D:`I,II,III`},javob:``,tushmagan:!0,nuqson:`To'g'ri javob (md bo'yicha) — I va III grafiklar; bunday variant yo'q. Savol nuqsonli: O₂ to'liq sarflanadi, II grafik 0 ga tushishi kerak edi.`,rasm:{bet:11,izoh:`Uchta grafik (abssissa — vaqt): I — m(H₂), g: a dan 28 gacha kamayib, so'ng o'zgarmaydi; II — m(O₂), g: a dan 16 gacha kamayib, so'ng o'zgarmaydi; III — ν(H₂O), mol: 0 dan 2 gacha ortib, so'ng o'zgarmaydi (savol 10-betda boshlanadi)`}},{raqam:20,ball:2.2,turi:`tanlov`,shart:`Quyidagi jadvaldan foydalangan holda to’rtlamchi uglerod atomlari sonini aniqlang.
Alken | Molekuladagi uglerod atomlari soni: birlamchi | Ikkilamchi | uchlamchi | To’rtlamchi
x | y + 4 | y – 2 | y – 2 | ?`,variantlar:{A:`1`,B:`2`,C:`3`,D:`0`},javob:`B`,tushmagan:!0,nuqson:null,rasm:null},{raqam:21,ball:2.2,turi:`tanlov`,shart:`Etan degidrogenlanganda etilen, atsetilen va vodoroddan iborat aralashma olindi. Agar ushbu aralashmadan vodorod chiqarib yuborilganda, aralashma hajmi 1344 ml (n.sh.) massasi esa 1,62 g ni tashkil etdi. Degidrogenlanish jarayonida ajralgan vodorod hajmini (l n.sh.) aniqlang.`,variantlar:{A:`1,12`,B:`2,24`,C:`1,344`,D:`2,016`},javob:`D`,tushmagan:!0,nuqson:null,rasm:null},{raqam:22,ball:2.2,turi:`tanlov`,shart:"40 g dan olingan mis elektrodlari CuSO₄ eritmasiga tushurildi. Elektrolizdan keyin katod konsentrlangan sulfat kislotada eritildi. Natijada 22,4 litr (n.sh.) gaz ajraldi. Elektrolizdan so`ng anodning massasi necha gramm bo`lganini aniqlang. (katodda vodorod ajralmagan)",variantlar:{A:`8`,B:`4`,C:`6`,D:`16`},javob:`D`,tushmagan:!0,nuqson:null,rasm:null},{raqam:23,ball:2.2,turi:`tanlov`,shart:`xloropren kauchukning monomerini ko’rsating.`,variantlar:{A:`1 – xlorbutadien – 1,3`,B:`2 – xlorbutadien – 1,3`,C:`2 – xlorbutadien – 1,2`,D:`2 – metilbutadien – 1,3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:2.2,turi:`tanlov`,shart:`Atomlar soni teng boʻlgan 1,1-dixloretan va dixlormetandan iborat 70,5g aralashma gidrolizlandi hosil boʻlgan aldegidlarga kumush oksidning ammiakdagi eritmasi taʼsiri ettililganda choʻkmaga tushgan metall moli topilsin.`,variantlar:{A:`2,16`,B:`1,68`,C:`2,52`,D:`1,96`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:2.2,turi:`tanlov`,shart:`2:1 Nitroalkan bilan nitrobenzol aralashmasi qaytarilganda hosil bo’lgan aralashmada vodorod atomlari mol ulushi 29 : 46 nisbatda bo'lsa, alkilaminni aniqlang. ( testa nitoamin deb xato berilgan edi)`,variantlar:{A:`butilamin`,B:`etilamin`,C:`propilamin`,D:`pentilamin`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:2.2,turi:`tanlov`,shart:`2mol maltoza va saxarozadan iborat aralashma gidrolizlandi, gidrolizlanish maxsulotlari kumush oksidning ammiakdagi eritmasi orqali o’tkazilganda 691,2g metall cho’kmaga tushdi. Dastlabki aralashma tarkibida saxaroza massa ulushi (%) topilsin.`,variantlar:{A:`20`,B:`60`,C:`40`,D:`30`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:2.2,turi:`tanlov`,shart:`Benzolga 200 gr 37,2 % li nitrat kislotaning sulfat kislotali eritmasidan qoʻshilganda,eritmada nitrat kislota va nitrobenzollarning massa ulushi teng boʻldi, olingan nitrobenzoldan qancha massali (g) anilin olish mumkin.`,variantlar:{A:`37.2`,B:`27,9`,C:`32,55`,D:`18.6`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:2.2,turi:`tanlov`,shart:`Tog’ri fikrlarni aniqlang.`,variantlar:{A:`oddiy oqsillar proteinlar deb ataladi va ular gidrolizlanganda aminokislatalardan tashqari uglevod, yog’ va boshqa birikmalar hosil bo’ladi.`,B:`glitsin lakmusni qizartiradi.`,C:`alanin kislota xossali , lizin esa asos xossali aminokislota xisoblanadi.`,D:`oddiy oqsillar proteinlar deb ataladi va ular gidrolizlanganda faqat aminokislatalar hosil bo’ladi.`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:2.2,turi:`tanlov`,shart:`Suyultirilgan sulfat kislota qaysi moddalar bilan reaksiyaga kirishadi?
1) Na₂SO₄ 2) KOH 3) LiHCO₃ 4) KCl`,variantlar:{A:`1,2`,B:`2,3`,C:`2,4`,D:`2,3,4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:2.2,turi:`tanlov`,shart:`Qum hammomi nima maqsadda ishlatiladi?`,variantlar:{A:`tubi yumaloq kolbalarni va chinni kosalarni tutib turishda`,B:`tubi yassi va konussimon kolbalarni qizdirishda`,C:`Turli xil qaynash haroratidagi suyuqliklarni haydashda`,D:`tutqich va probirkalar suvutgichlarni qisib ushlab turish uchun`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:2.2,turi:`tanlov`,shart:`2 ta probirkada xlorid kislota eritmalari mavjud, birinchi eritmaga X modda qo’shilganda rangsiz gaz ajrali, ikkinchi probirkaga Y modda qo’shilganda rangli gaz ajraldi. X va Y moddalarni aniqlang.`,variantlar:{A:`Kaliy korbanat , temir`,B:`marganes (IV) – oksid, kalsiy korbanat`,C:`rux, natriy xlorid`,D:`kalsiy korbanat, kaliy permanganat`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:2.2,turi:`tanlov`,shart:`Rux gidroksid solingan 2 ta probirkaga birinchisiga kuchli X kislota va ikkinchisiga Y kuchli elektrolit solinganda rux gidroksid to’liq erib ketti. X va Y ni aniqlang.
1. sirka kislota 2. Xlorid kislota 3. Litiy gidroksid 4. Natriy xlor`,variantlar:{A:`2,3`,B:`1,3`,C:`2,4`,D:`1,2`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:33,ball:2.2,turi:`tanlov`,shart:`Sulfat anioning koeffetsenti topilsin`,variantlar:null,javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:2.2,turi:`tanlov`,shart:`Suv koeffetsienti topilsin`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:2.2,turi:`tanlov`,shart:`Vodorod kationlari oldi topilsin`,variantlar:null,javob:``,tushmagan:!1,nuqson:`To'g'ri javob 78 (3P₄S₇ + 62HNO₃ + 8H₂O → 12PO₄³⁻ + 21SO₄²⁻ + 62NO + 78H⁺); 78 variantlarda yo'q — ochiq javobli qilish tavsiya etiladi.`,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`2NO + Cl₂ = 2NOCl reaksiya boʻyicha muvozanat qaror topgan vaqtda ( Kₘ = 6 ) xlor va NOCl konsentratsiyasi teng boʻldi.`,bandlar:[{band:`a`,savol:`dastlabki aralashma vodorodga nisbatan zichligi topilsin`,javob:`26,8`,birlik:``,ball:1.7},{band:`b`,savol:`muvozanat holatda aralashmada 1,5 mol befarq oksid boʻlsa aralashmada xlor massasi (g) topilsin`,javob:`958,5`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:`Shart to'liq emas: a) mustaqil yechilmaydi (K ning o'lchov birligi bor), faqat b) dagi 1,5 mol va V = 1 l shartida aniqlanadi; a) javobi taxminiy (≈26,8).`,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`800g 13,1% li Sulfat kislota eritmasiga ma’lum massada bariy nitrid ta’sir ettirilganda eritmada tuz va kislota massa ulushlari teng bo’ldi.`,bandlar:[{band:`a`,savol:`qo’shilgan tuz massasi (g) topilsin.`,javob:`87,8`,birlik:`g`,ball:1.7},{band:`b`,savol:`hosil bo’lgan eritma massasi (g) topilsin.`,javob:`748`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`600 g 34% AgNO₃ eritmasiga NaBr qoʻshildi. Choʻkma ajratib olindi va 6,7A tok bilan 8 soat davomida elektroliz qilindi ( anodda faqat kislorod ajraldi) jarayon oxirida 458g eritma hosil boʻldi.`,bandlar:[{band:`a`,savol:`qoʻshilgan NaBr massasi (g) topilsin.`,javob:`20,6`,birlik:`g`,ball:1.7},{band:`b`,savol:`hosil boʻlgan nitrat kislota eritmasi konsentratsiyasi (mol/l) topilsin. ( p= 1,145g)`,javob:`2,5`,birlik:`mol/l`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`Cu₃P + HNO₃ = Cu(NO₃)₂ + H₃PO₄ + NO₂ + H₂O
Ushbu oksidlanish qaytarilish reaksiyasini tenglashtiring.`,bandlar:[{band:`a`,savol:`oʻng tomonda koeffitsienti topilsin`,javob:`22`,birlik:``,ball:1.7},{band:`b`,savol:`66,9 g Cu₃P reaksiyaga kirishgan boʻlsa ajralgan gaz topilsin`,javob:`3,3`,birlik:`mol`,ball:1.5}],tushmagan:!1,nuqson:`b) da so'ralgan kattalik ko'rsatilmagan: 3,3 mol NO₂ = 73,92 l (151,8 g) — har biri qabul qilinsin. a) — o'ng tomondagi koeffitsientlar yig'indisi.`,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`FeO va Cu dan iborat aralashma konsentrlangan nitrat kislotada eritilganda ( Fe(NO₃)₃ hosil bo’ldi) 0.5mol gaz ajraldi. Tuzlar parchalanganda eda 32 g qattiq qoldiq qoldi.`,bandlar:[{band:`a`,savol:`sarflangan nitrat kislota moli topilsin`,javob:`1,6`,birlik:`mol`,ball:1.7},{band:`b`,savol:`dastlabki aralashma massasi(g) topilsin`,javob:`28`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:3.2,turi:`yozma`,shart:`2:1 mol nisbatda olingan KMnO₄ va MnO₂ aralashmasi 400g 21,3% li HCl da eritildi. Ajratilgan gaz tarkibida 20,4·Nₐ ta neytron saqlagan gaz hosil boʻldi.`,bandlar:[{band:`a`,savol:`hosil boʻlgan marganetsli tuz massasi (g) topilsin`,javob:`37,8`,birlik:`g`,ball:1.7},{band:`b`,savol:`dastlabki aralashma massasi (g) topilsin`,javob:`40,3`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:`Shartda "neytron" xato: 20,4/34 = 0,6 mol Cl₂ — 34 protonlar soni; neytron bo'lsa 21,6·Nₐ bo'lardi. Javob 0,6 mol Cl₂ asosida.`,rasm:null},{raqam:`42-A`,ball:3.2,turi:`yozma`,shart:`Fisher - Topish usuli boʻyicha alkan olnishida ( CO + xH₂ = CₙH₂ₙ₊₂ + H₂O) reaksiya boʻyicha CO va H₂ gazlari 1:x nisbatda ta’sirlashganda 3:2:1 nisbatda butan propan va etan olindi.`,bandlar:[{band:`a`,savol:`163 g dastlabki aralashma moli topilsin`,javob:`16,5`,birlik:`mol`,ball:1.7},{band:`b`,savol:`63,2 aralashma sarflangan boʻlsa olingan suv massasi (g) topilsin.`,javob:`34,9`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:`Manbada 42-raqam ikki marta ishlatilgan (bu birinchisi). b) 63,2 g butun javob bermaydi (≈34,9 g); ehtimol 65,2 g bo'lgan — unda 36 g; ikkalasi qabul qilinsin.`,rasm:null},{raqam:`42-B`,ball:3.2,turi:`yozma`,shart:`Grafikdan foydalanib bog’liqlikni L → M ko’rinishda ifodalang.`,bandlar:[{band:`a`,savol:`desublimatlanish jarayoni`,javob:`Z → T`,birlik:`matn`,ball:1.7},{band:`b`,savol:`bug’lanish jarayoni`,javob:`Y → Z`,birlik:`matn`,ball:1.5}],tushmagan:!1,nuqson:`Manbada 42-raqam ikki marta ishlatilgan (bu ikkinchisi — holat diagrammasi).`,rasm:{bet:12,izoh:`P–T holat diagrammasi (P: 0–7, T: 0–500): qattiq, suyuq va gaz sohalari; T nuqta — qattiq sohada, Y — suyuq sohada, Z — gaz sohasida`}},{raqam:43,ball:3.2,turi:`yozma`,shart:`Murakab efir molar massasi va tarkibidagi atomlar soni nisbati 29/5 bo’lib, murakkab efir gidrolizlanishidan hosil bo’lgan maxsulotlar kumush oksidning ammiakdagi eritmasi bilan ta’sirlashganda 32,4g metall cho’kmaga tushdi.`,bandlar:[{band:`a`,savol:`hosil bo’lgan to’yingan bir atomli spirt massasi (g) topilsin.`,javob:`13,2`,birlik:`g`,ball:1.7},{band:`b`,savol:`Murakkab efir molekulasida sp³ orbitallar soni topilsin.`,javob:`24`,birlik:`ta`,ball:1.5}],tushmagan:!1,nuqson:`b) faqat uglerodlar hisoblansa 20 chiqadi; kislorod gibridlanishi bilan 24 — ikkalasi asoslansa qabul qilinsin.`,rasm:null},{raqam:44,ball:3.2,turi:`yozma`,shart:`Teng miqdordagi fenol va to‘yingan bir atomli spirt aralashmasida vodorod va kislorod atomlari son nisbati N(H)/N(O) = 12:1. Aralashma natriy bilan 0,4 mol gaz ajralib chiqdi, xuddi shunday tarkibli aralashma 0,2 mol NaOH bilan to’liq ta’sirlashadi.`,bandlar:[{band:`a`,savol:`Spirt molekulasidagi vodorod atomlari sonini aniqlang.`,javob:`14`,birlik:`ta`,ball:1.7},{band:`b`,savol:`Aralashma massasini (g) aniqlang.`,javob:`80`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:`"Teng miqdordagi" so'zi qolgan ma'lumotlarga zid; yechim fenol 0,2 mol, spirt 0,6 mol asosida.`,rasm:null},{raqam:45,ball:3.2,turi:`yozma`,shart:`Ketonlar oksidlanganda reaksiya odatda 2 xil yo’nalishda sodir bo’ladi.
CₙH₂ₙO + K₂Cr₂O₇ + H₂SO₄ = CₓH₂ₓ₊₁COOH + CᵧH₂ᵧ₊₁COOH
CₙH₂ₙO + K₂Cr₂O₇ + H₂SO₄ = CₐH₂ₐ₊₁COOH + C_bH_(2b+1)COOH
2 mol butanon oksidlanganda 88,8g propan kislota olingan bo’lsa`,bandlar:[{band:`a`,savol:`olingan sirka kislota moli`,javob:`1,6`,birlik:`mol`,ball:1.7},{band:`b`,savol:`olingan chumoli kislota massasi (g) topilsin`,javob:`55,2`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null}]},Be={variant:`04`,nom:`Sertifikat 2024 namunaviy`,betlar:`13–17`,umumiy:[{raqamlar:[33,34,35],shart:`267 g 20 % li temir (II) gidrokarbonat eritmasi suv va kislorod ishtirokida asta-sekin temir (III) gidroksidga aylanadi. Bu jarayonda gaz (n.sh.) ham ajraladi. Hosil bo‘lgan va sarf bo‘lgan gazlarning (n.sh.) massa farqi 16 g.`,variantlar:{A:`4,48`,B:`17,8`,C:`8,96`,D:`35,6`,E:`5,35`,F:`21,4`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`[Rasmda: H₂SO₄ (suyul.) uchta probirkadagi Na₂SO₃, FeS va Mg ga quyilmoqda.] Reaksiyalar natijasida hosil bo‘lgan gazlarning (n.sh.) nisbiy molekulyar massa yig‘indisini toping.`,variantlar:{A:`162`,B:`98`,C:`116`,D:`100`},javob:`D`,tushmagan:!1,nuqson:null,rasm:{bet:13,izoh:`Uchta probirka: Na₂SO₃, FeS, Mg; har biriga H₂SO₄ (suyul.) quyilmoqda`}},{raqam:2,ball:null,turi:`tanlov`,shart:`Grafik asosida X ning nisbiy atom massasini toping. (Ar(Y) = 16) [Grafikda: koordinata boshidan chiquvchi to‘g‘ri chiziq; m(XY₃) = 5 g bo‘lganda m(X) = 2 g.]`,variantlar:{A:`32`,B:`48`,C:`8`,D:`24`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:13,izoh:`m(X), g — m(XY₃), g grafigi: to‘g‘ri chiziq (0;0) dan (5;2) gacha`}},{raqam:3,ball:null,turi:`tanlov`,shart:`220 kPa bosimda, 167 °C haroratda 44 g gaz 16,62 litr hajmni egallaydi. Noma’lum gazning metanga nisbatan zichligini hisoblang.`,variantlar:{A:`1,65`,B:`2,325`,C:`2,75`,D:`1,375`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`Davriy jadvalning III-VIII (He dan tashqari) asosiy guruhcha elementlari qaysi elementlar oilasiga mansub?`,variantlar:{A:`p`,B:`f`,C:`s`,D:`d`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:null,turi:`tanlov`,shart:`4-davr yonaki guruhcha elementlarining umumiy elektron formulasi quyidagicha:
1s²2s²2p⁶3s²3p⁶3dᵃ4sᵇ
Berilganlardan to‘g‘ri ma’lumotlarni toping.
1) 8 ≤ a + b ≤ 12 bo‘lsa, element yonaki guruhchada joylashgan;
2) agar a + b < 8 bo‘lsa, a + b dan hosil bo‘lgan son elementning yonaki gurucha raqamini belgilaydi;
3) a = 10 bo‘lsa, b elementning tartib raqamini belgilaydi;
4) 8 ≤ a + b ≤ 10 bo‘lsa, element VIII guruhning yonaki guruhchasida joylashgan;
5) agar a + b = 8 bo‘lsa, element metallmas bo‘ladi;
6) a = 10 bo‘lsa, b yonaki guruhcha raqamini belgilaydi.`,variantlar:{A:`1, 3, 5`,B:`2, 3, 6`,C:`1, 2, 3`,D:`2, 4, 6`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`Qaysi qatordagi barcha ma’lumotlar to‘g‘ri?
№ | molekula yoki ion | bog‘lanish turi | donorning valentligi | donorning oksidlanish darajasi
1. | NH₄⁺ | qutbli kovalent, koordinatsion | IV | −4
2. | NH₃ | qutbli kovalent, ion | III | −3
3. | H₂O | qutbsiz kovalent, donor-akseptor | II | −2
4. | H₃O⁺ | qutbli kovalent, donor-akseptor | III | −2`,variantlar:{A:`4`,B:`3`,C:`2`,D:`1`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:13,izoh:`Jadval: molekula yoki ion, bog‘lanish turi, donorning valentligi, donorning oksidlanish darajasi (4 qator; shartda matn ko‘rinishida berilgan)`}},{raqam:7,ball:null,turi:`tanlov`,shart:`Hajmi 6 litr bo‘lgan reaktorda reaksiya natijasida 30 sekund davomida moddaning miqdori 65 moldan 35 molgacha kamaygan. Ushbu reaksiyaning o‘rtacha tezligini (mol/(litr·min)) aniqlang.`,variantlar:{A:`60`,B:`16,67`,C:`10`,D:`1,25`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`CO(g) + O₂(g) ↔ CO₂(g) reaksiyada CO va O₂ ning boshlang‘ich konsentratsiyalari mos ravishda 0,4 mol/l va 0,6 mol/l. Kislorodning 25 foizi reaksiyaga kirishganda muvozanat qaror topdi. Muvozanat konstantasini toping.`,variantlar:{A:`6,66`,B:`20`,C:`0,05`,D:`0,15`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`Dastlabki eritmaning massasi 200 g.
[Sxema: (HCOOH 5%, H₂O 95%) + (HCOOH 0%, H₂O 100%) → (HCOOH 1,25%, H₂O 98,75%)]
Hosil bo‘lgan eritmadagi suvning massasini (g) toping.`,variantlar:{A:`190`,B:`600`,C:`790`,D:`900`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:13,izoh:`Uchta jadvalcha: HCOOH 5% / H₂O 95% + HCOOH 0% / H₂O 100% → HCOOH 1,25% / H₂O 98,75% (shartda matn ko‘rinishida berilgan)`}},{raqam:10,ball:null,turi:`tanlov`,shart:`Sog‘lom odamning hazm jarayonida oshqozonining pH ko‘rsatkichi qanday bo‘lishi mumkin?`,variantlar:{A:`5−8`,B:`1,5−2`,C:`7`,D:`7,4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`100 ml qattiq suv tarkibida 4 mg Ca²⁺ va 3,6 mg Mg²⁺ ionlari bor.
Suvning umumiy qattiqligini yo‘qotish uchun 4 litr shunday qattiq suvga necha gramm natriy karbonat qo‘shilishini hisoblang.`,variantlar:{A:`10,6`,B:`4,24`,C:`1,06`,D:`6,36`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`Quyida elementlarning oksidlanish darajalarining o‘zgarishi berilgan.
[Son o‘qida (−4 … +7): +4 → −2: +6e⁻; 0 → −4: z e⁻; 0 → +3: −3e⁻; −2 → +4: x e⁻; −3 → +5: y e⁻]
x, y, z larning yig‘indisini toping.`,variantlar:{A:`+18`,B:`−10`,C:`+10`,D:`−14`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:13,izoh:`Oksidlanish darajalari son o‘qi (−4 dan +7 gacha) va strelkalar: +6e⁻ (+4→−2), z e⁻ (0→−4), −3e⁻ (0→+3), x e⁻ (−2→+4), y e⁻ (−3→+5)`}},{raqam:13,ball:null,turi:`tanlov`,shart:`400 ml 0,5 M li AgNO₃ eritmasiga 43,25 g rux plastinka tushirildi. Biroz vaqt o‘tishi bilan plastinka eritmadan olindi, yuvildi va quritildi. Reaksiya natijasida kumush nitratning miqdori 50% ga kamaydi. Eritmadan chiqarib olingan plastinkaning massasini (g) toping.`,variantlar:{A:`48`,B:`47,8`,C:`54,3`,D:`50,8`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:`[Rasmda laboratoriya tajribasi: FeCl₃ eritmasiga x qo‘shiladi → z cho‘kma hosil bo‘ladi (NaCl eritmada); z cho‘kma qizdiriladi (t°); y modda z bilan reaksiyaga kirishib Fe₂(SO₄)₃ eritmasi hosil bo‘ladi.]
Laboratoriya tajribasi asosida x va y moddalar eritmalari o‘zaro reaksiyaga kirishganda qanday modda hosil bo‘lishini aniqlang.`,variantlar:{A:`natriy gidrosulfid`,B:`natriy sulfat`,C:`natriy sulfit`,D:`kaliy sulfat`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:14,izoh:`Probirkalar sxemasi: FeCl₃ eritmasi + x → z cho‘kma (va NaCl); z cho‘kma + y → Fe₂(SO₄)₃ eritmasi; z cho‘kma spirt lampasida qizdirilmoqda (t°)`}},{raqam:15,ball:null,turi:`tanlov`,shart:`A + B → D
D + A → E
FeO + E → Fe + D
Noma’lum D moddaga mos javobni toping.`,variantlar:{A:`ohakli suvni loyqalantiradi`,B:`qora rangli oddiy modda`,C:`zaharli gaz`,D:`vodorodga nisbatan zichligi 8 ga teng`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:null,turi:`tanlov`,shart:`Qaysi asos och yashil cho‘kma bo‘lib, vaqt o‘tishi bilan qo‘ng‘ir rangli moddaga aylanadi?`,variantlar:{A:`Al(OH)₃`,B:`Fe(OH)₃`,C:`Fe(OH)₂`,D:`Cu(OH)₂`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`75 % li sirka kislota essensiyasidan shu kislotaning 3 % li eritmasini tayyorlash uchun 10 g essensiyaga qancha hajm (ml) suv qo‘shish kerak? (ρ(suv) = 1 g/ml).`,variantlar:{A:`240`,B:`160`,C:`250`,D:`200`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`Inson organizmini temir moddasi bilan ta’minlash maqsadida ozuqaviy qo‘shimcha sifatida temirning tuzi ishlatiladi. Bu tuz tarkibida Fe, S va O elementlarining massa nisbati mos ravishda 7 : 4 : 8. Inson organizmi bir kunda 0,0112 g temir moddasini talab etadi. Organizmda temirning o‘zlashtirilishi 10 %. Bir oy (30 kun) davomida inson qancha (mg) qo‘shimcha ozuqa (temir tuzi) qabul qilishini aniqlang.`,variantlar:{A:`15200`,B:`912`,C:`3040`,D:`9120`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:`O₃ va O₂ gazlari aralashmasi berilgan. Ozon to‘liq kislorodga aylantirilganda aralashmaning hajmi 28% ga oshadi. Agar 1 litr (n.sh.) dastlabki aralashma KI eritmasidan o‘tkazilsa, necha gramm yod cho‘kmaga tushishini toping.`,variantlar:{A:`6,35`,B:`2,54`,C:`12,7`,D:`1,27`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`Uglevodorodning azotga nisbatan zichligi 2 ga teng. U bromli suvni rangsizlantirmaydi. Uglevodorodning struktura formulasini toping.`,variantlar:{A:`H₂C = CH₂`,B:`H₂C = CH − CH₂ − CH₃`,C:`CH₃(H)C = C(H)CH₂ − CH₃ [ikkala H qo‘shbog‘ning bir tomonida]`,D:`[to‘rt a’zoli halqa: yuqorida H₂C − CH₂, pastda H₂C − CH₂, vertikal bog‘lar bilan ulangan]`},javob:`D`,tushmagan:!1,nuqson:null,rasm:{bet:14,izoh:`Variantlar struktura formulalari bilan berilgan: C) qo‘shbog‘da H, H yuqorida, CH₃ va CH₂−CH₃ pastda; D) to‘rtburchak halqa H₂C−CH₂ / H₂C−CH₂`}},{raqam:21,ball:null,turi:`tanlov`,shart:`[Sxema: C = C qo‘shbog‘i; chap uglerodda X (yuqorida) va Z (pastda), o‘ng uglerodda Y (yuqorida) va CH₂ − CH₃ (pastda); trans-izomer.]
Geksadiyen-1,3 moddasining qismlarini ajratilgan joylarga (X, Y, Z) mos ravishda tanlang.`,variantlar:{A:`X − CH₂ = CH; Y − H; Z − H`,B:`X − H; Y − H; Z − CH₂ = CH`,C:`X − CH₃ − CH₂; Y − CH₃; Z − H`,D:`X − CH₃ − CH₂; Y − H; Z − H`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:14,izoh:`C=C qo‘shbog‘i atrofida X (chap-yuqori), Z (chap-past), Y (o‘ng-yuqori), CH₂−CH₃ (o‘ng-past) kataklar; ostida «trans-izomer»`}},{raqam:22,ball:null,turi:`tanlov`,shart:`Avtomashina 100 km masofani bosib o‘tishi uchun 10 litr benzin sarf qiladi. Benzinning zichligi 0,72 kg/l. Benzin tarkibida uglerodning massa ulushi 85 % va vodorodning massa ulushi 15 %. Yuqorida talab etilgan benzin yonishi uchun sarf bo‘ladigan kislorodning miqdorini (mol) toping.`,variantlar:{A:`270`,B:`510`,C:`280`,D:`780`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`Sxemadagi oxirgi mahsulotning molekulasida sp² gibridlangan orbitallarning sonini toping
C₂H₅OH —(H₂SO₄(kons), t° > 140 °C)→ A —(+Br₂)→ B
B —(KOH(spirt) mo‘l)→ D —(C, akt, t°)→ E —(+D)→ F`,variantlar:{A:`18`,B:`21`,C:`32`,D:`24`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:`Berilgan ma’lumotlardan nechtasi to‘g‘ri ekanligini toping.
a) pentan kislota bilan valerian kislota bitta modda;
b) molekulyar massa ortishi bilan kislotalarning suvda eruvchanligi pasayadi;
c) propion kislota molekulasida 8 ta σ va 1 ta π bog‘ bor;
d) olein kislota bromli suvni rangsizlantiradi;
e) 270 g glukoza bijg‘ishi natijasida 1,806 · 10²³ kislorod atomi tutgan moy kislota hosil bo‘ladi.`,variantlar:{A:`2`,B:`5`,C:`4`,D:`3`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`Quyida umumiy formulasi keltirilgan, kosmetologiyada konservant sifatida ishlatiladigan moddaning molyar massasi 166 g/mol.
[Formula: HO − C₆H₄ − C(=O) − O − R (benzol halqasining para-holatida OH va COOR guruhlari)]
R ning nomini aniqlang.`,variantlar:{A:`propil`,B:`etil`,C:`metil`,D:`fenil`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:15,izoh:`Struktura formula: OH − (benzol halqasi) − C(=O)−O−R`}},{raqam:26,ball:null,turi:`tanlov`,shart:`200 g 34,2 % li maltoza eritmasi to‘liq gidrolizlandi. Hosil bo‘lgan eritmadagi uglevodning massa ulushini toping.`,variantlar:{A:`34,2`,B:`0,18`,C:`0,072`,D:`0,36`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:null,turi:`tanlov`,shart:`46,6 g Gli-Ala-Ser tripeptidi to‘liq gidrolizlanishi uchun necha gramm suv sarflanishini hisoblang.`,variantlar:{A:`1,8`,B:`7,2`,C:`10,8`,D:`4,5`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`[Rasmda: binafsharang lakmus eritmasi solingan 4 ta probirka; 1 — fenol, 2 — etilamin, 3 — anilin, 4 — sirka kislota qo‘shilmoqda.]
Qaysi raqamdagi probirkada tajriba bajarilgandan keyin lakmus eritmasi ko‘k rangga aylanishini toping.`,variantlar:{A:`1`,B:`3`,C:`4`,D:`2`},javob:`D`,tushmagan:!1,nuqson:null,rasm:{bet:15,izoh:`To‘rtta probirka (binafsharang lakmus eritmasi): 1 — fenol, 2 — etilamin, 3 — anilin, 4 — sirka kislota`}},{raqam:29,ball:null,turi:`tanlov`,shart:`Shinalar ishlab chiqarishda ishlatiladigan noma’lum polimerning nisbiy molekulyar massasi 513000. Polimer yondirilganda hosil bo‘lgan suvning massasi datlabki uglevodorodning massasiga teng. Polimer tarkibidagi monomerlarning sonini toping.`,variantlar:{A:`9000`,B:`9500`,C:`8600`,D:`9160`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`To‘rtta raqamlangan probirkalarda alohida a) SiO₃²⁻, b) Ca²⁺, c) NO₃⁻, d) CO₃²⁻ ionlar tutuvchi anorganik moddalar eritmalari bor. 1- va 4-probirkalardagi eritmalarga xlorid kislota eritmasi qo‘shilganda 1-probirkada rangsiz, hidsiz gaz (n.sh.) ajraldi, 4-probirkada esa gelsimon cho‘kma hosil bo‘ldi. 2- va 3-probirkadagi moddalarga Na₂CO₃ eritmasi qo‘shilganda 2-probirkada oq cho‘kma tushdi, 3-probirkada o‘zgarish kuzatilmadi. Ionlar (a-d) va probirka raqamlari to‘g‘ri moslangan javobni toping.`,variantlar:{A:`a-4, b-2, c-1, d-3`,B:`a-4, b-2, c-3, d-1`,C:`a-3, b-2, c-4, d-1`,D:`a-2, b-3, c-1, d-4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:`[Rasmda: shtativdagi probirkada suyuqlantirilgan x tuz spirt lampasida qizdirilmoqda; unga ko‘mir bo‘lagi tashlangan va u yonmoqda.]
Laboratoriya tajribasi asosida x tuzning formulasini aniqlang.`,variantlar:{A:`KHCO₃`,B:`Ca₃(PO₄)₂`,C:`CaCO₃`,D:`KNO₃`},javob:`D`,tushmagan:!1,nuqson:null,rasm:{bet:15,izoh:`Shtativdagi probirka: suyuqlantirilgan x tuz ichida yonayotgan ko‘mir bo‘lagi, ostida spirt lampasi`}},{raqam:32,ball:null,turi:`tanlov`,shart:`[Rasmda: CH₃COONa solingan probirkaga H₂SO₄ qo‘shilib qizdirilmoqda; hosil bo‘lgan modda gaz o‘tkazgich nay orqali ikkinchi (sovutilayotgan) probirkada yig‘ilmoqda.]
Laboratoriya tajribasi asosida hosil bo‘lgan organik modda uchun noto‘g‘ri ma’lumotni toping.`,variantlar:{A:`konservant modda sifatida ishlatiladi`,B:`uchta − Mg, CH₃OH, K₂SO₄ moddalaridan kerakli sharoitda faqat bittasi bilan reaksiyaga kirishadi`,C:`tarkibida uglerodning massa ulushi 40 %`,D:`molekulalari vodorod bog‘lari orqali dimerlarga bog‘langan`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:15,izoh:`Asbob: CH₃COONa + H₂SO₄ qizdirilayotgan probirka, gaz o‘tkazgich nay orqali ikkinchi probirkaga ulangan`}},{raqam:33,ball:2.2,turi:`tanlov`,shart:`Hosil bo‘lgan cho‘kmaning massasini (g) toping.`,variantlar:null,javob:`F`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:2.2,turi:`tanlov`,shart:`Hosil bo‘lgan gazning hajmini (l, n.sh.) toping.`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:2.2,turi:`tanlov`,shart:`Dastlabki tuzning necha grammi oksidlanmaganligini toping.`,variantlar:null,javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`61,5 g MgSO₄·7H₂O suvda eritilib 15 % li magniy sulfat eritmasi olindi. Eritma ikkita stakanga ajratildi. Birinchi stakandagi eritmaga SrCl₂ eritmasidan mo‘l miqdorda solinganda 18,4 g cho‘kma hosil bo‘ldi. Ikkinchi stakanga 212 g 20 % li kaliy fosfat eritmasi solindi.`,bandlar:[{band:`a`,savol:`Reaksiyadan so‘ng ikkinchi stakandagi eritmaning massasini (g) toping.`,javob:`318,9`,birlik:`g`,ball:1.7},{band:`b`,savol:`Ikkala stakanda hosil bo‘lgan cho‘kmalarning mol yig‘indisini toping.`,javob:`0,15`,birlik:`mol`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`31,4 g suvda 18,9 g HNO₃ eritildi. Eritmaga to‘la neytrallanguncha yetarli miqdordagi 33,6 % li KOH eritmasi asta-sekin quyildi. Ushbu eritma 15 °C gacha sovitildi. 15 °C da tuzning eruvchanligi 25 ga teng.`,bandlar:[{band:`a`,savol:`Cho‘kmaga tushadigan tuzning massasini (g) aniqlang.`,javob:`12,8`,birlik:`g`,ball:1.7},{band:`b`,savol:`Hosil bo‘lgan eritma massasini (g) aniqlang.`,javob:`87,5`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`kaliy nitrit + kaliy permanganat + suv →
Oksidlanish-qaytarilish reaksiyasi uchun yarim reaksiya usuli bo‘yicha:`,bandlar:[{band:`a`,savol:`oksidlanish tenglamasini yozing va tenglashtiring.`,javob:`NO₂⁻ + H₂O − 2e⁻ → NO₃⁻ + 2H⁺`,birlik:`matn`,ball:1.7},{band:`b`,savol:`qaytarilish tenglamasini yozing va tenglashtiring.`,javob:`MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻`,birlik:`matn`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`29,1 g ikki valentli metall tuzi ochiq havoda qizdirilganda ikkita oksid hosil bo‘ldi. Ulardan biri normal sharoitda gaz holatda bo‘ladi. Gaz holatdagi oksidni 19,2 g misning konsentrlangan sulfat kislota bilan reaksiyasidan ham olish mumkin. 24,3 g ikkinchi oksid xlorid kislota eritmasida eritildi. Eritmaga NaOH eritmasidan quyildi. Hosil bo‘lgan cho‘kma ikki probirkaga bo‘lindi va birinchisiga HCl, ikkinchisiga NaOH eritmalaridan qo‘shildi. Ikkala probirkada ham cho‘kma eridi.`,bandlar:[{band:`a`,savol:`Dastlabki tuzning nomini yozing.`,javob:`rux sulfid (ZnS)`,birlik:`matn`,ball:1.7},{band:`b`,savol:`Cho‘kma ishqor eritmasida erishidan hosil bo‘lgan kompleks tuzning formulasini yozing.`,javob:`Na₂[Zn(OH)₄]`,birlik:`matn`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`Mg₃N₂ —(+HBr(erit), mo‘l)→ ↗ A —(KOH, t°)→ … —(+H₂O)→ C —(AlCl₃)→ X₁
                              ↘ B(qat) —(+H₂SO₄(kons))→ D↑ —(+stirol)→ X₂
Berilgan sxema asosida:`,bandlar:[{band:`a`,savol:`Alyuminiy tutuvchi modda X₁ va organik modda X₂ ning molyar massalari yig‘indisini toping.`,javob:`263`,birlik:`g/mol`,ball:1.7},{band:`b`,savol:`X₂ moddaning nomini yozing.`,javob:`1-brom-1-feniletan`,birlik:`matn`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:3.2,turi:`yozma`,shart:`Birikmalarda oksidlanish darajasi +2 bo‘lgan metall va uning karbonati aralashmasining massasi 23,55 g. Aralashma mo‘l olingan xlorid kislota eritmasida eritildi va 3,36 litr (n.sh.) gaz ajraldi. Gaz ohakli suvdan o‘tkazilganda 5 g cho‘kma hosil bo‘ldi.`,bandlar:[{band:`a`,savol:`Metallning nisbiy atom massasini toping.`,javob:`137`,birlik:``,ball:1.7},{band:`b`,savol:`Sarflangan 10 % li xlorid kislota eritmasi massasini (g) toping.`,javob:`109,5`,birlik:`g`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:42,ball:3.2,turi:`yozma`,shart:`22,4 litr (n.sh.) NH₃ va H₂ aralashmasi qizdirilib, 112 g CuO solingan nay orqali o‘tkazildi. Nay ichidagi qattiq modda 50 g 14,6 % li HCl eritmasi bilan reaksiyaga kirishdi.`,bandlar:[{band:`a`,savol:`Dastlabki gazlar aralashmasining massasini (g) toping.`,javob:`11`,birlik:`g`,ball:1.7},{band:`b`,savol:`Nay ichida hosil bo‘lgan gaz hajmini (l, n.sh.) toping.`,javob:`6,72`,birlik:`l`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:43,ball:3.2,turi:`yozma`,shart:`Propan, butan va butilen gazlaridan iborat 5,6 litr (n.sh.) aralashma bromli suvdan o‘tkazilganda 12 g brom reaksiyaga kirishdi. Dastlabki gazlar aralashmasining vodorodga nisbatan zichligi 26,6 ga teng.`,bandlar:[{band:`a`,savol:`Reaksiyadan so‘ng gazlar aralashmasining o‘rtacha molyar massasini (g/mol) toping.`,javob:`52`,birlik:`g/mol`,ball:1.7},{band:`b`,savol:`Dastlabki aralashmadagi propan gazining mol ulushini toping.`,javob:`0,3`,birlik:``,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:44,ball:3.2,turi:`yozma`,shart:`Izopropanolning etilatsetatdagi 20 g eritmasiga 50 ml 5 mol/l li kaliy gidroksidning suvli eritmasi qo‘shildi. Reaksiyadan so‘ng hosil bo‘lgan aralashma bug‘latildi, quruq qoldiq qizdirildi. Reaksiya natijasida hosil bo‘lgan qattiq aralashmaning massasi 21,6 g.`,bandlar:[{band:`a`,savol:`Dastlabki organik moddalar eritmasidagi spirtning massa ulushini toping.`,javob:`12`,birlik:`%`,ball:1.7},{band:`b`,savol:`Hosil bo‘lgan gaz hajmini (l, n.sh.) toping.`,javob:`1,12`,birlik:`l`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null},{raqam:45,ball:3.2,turi:`yozma`,shart:`Texnik sirka kislotasi etil spirti va atsetaldegid bilan ifloslangan. Bu kislota namunasi teng uch qismga bo‘lindi. Birinchi namunaga mo‘l olingan natriy gidrokarbonat eritmasi qo‘shilganda 11,2 l (n.sh.) gaz ajraldi. Ikkinchi qismiga mo‘l olingan kumush oksidning ammiakli eritmasi solinganda 2,16 g cho‘kma hosil bo‘ldi. Uchinchi namunaga konsentrlangan sulfat kislotadan bir necha tomchi tomizilganda 0,88 g murakkab efir hosil bo‘ldi.`,bandlar:[{band:`a`,savol:`Texnik sirka kislotasining massasini (g) toping.`,javob:`92,7`,birlik:`g`,ball:1.7},{band:`b`,savol:`Berilgan texnik sirka kislotasi yondirilganda hosil bo‘lgan suvning miqdorini (mol) toping.`,javob:`3,15`,birlik:`mol`,ball:1.5}],tushmagan:!1,nuqson:null,rasm:null}]},Ve={variant:`05`,nom:`Sertifikat 22.09.2024 aprobatsiya`,betlar:`17–21`,umumiy:[{raqamlar:[33,34,35],shart:`[Sxema]
n-pentan → 2,3-dixlorpentan —(KOH, spirt)→ X —(KMnO₄, H⁺)→ Y + Z
n-pentan —(termik kreking)→ K —(H₂O, H₂O₂)→ T —(CuO)→ E —(Ag₂O, NH₃)→ Y
n-pentan —(termik kreking)→ C₂H₆ —(t°, −H₂)→ L —(H₂O, Hg²⁺)→ M —(Cu(OH)₂, −Cu₂O)→ Z
X modda alkin, T modda esa birlamchi spirt.`,variantlar:{A:`8`,B:`9`,C:`10`,D:`11`,E:`12`,F:`13`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`0,2 mol natriy tetragidoksoalyuminat tarkibidagi jami atom soni topilsin.`,variantlar:{A:`2·Nₐ`,B:`12,04·10²⁴`,C:`2 mol`,D:`10`},javob:`A,C`,tushmagan:!1,nuqson:`Ikkita to‘g‘ri javob: C («2 mol») ham aslida shu qiymat (0,2·10 = 2 mol atom = 2·Nₐ). Rasmiy kalit A («atom soni» so‘ralgani uchun).`,rasm:null},{raqam:2,ball:null,turi:`tanlov`,shart:`Quyidagi fikrlardan to‘g‘rilarini aniqlang.
1) Alyuminiy nitrat parchalanganda o‘rtacha molyar massasi 43,2 g/mol bo‘lgan gazlar aralashmasi hosil bo‘ladi;
2) Vodorod palladiyda eriganda atomar holatda bo‘ladi;
3) Bir xil sharoitda vodorod bilan to‘ldirilgan shar havo bilan to‘ldirilgan shu shardan tez uchadi;
4) Kislorod va metan aralashmasining o‘rtacha molyar massasi 32 g/mol dan katta, 16 g/mol dan kichik BO‘LMAYDI;
5) Teng hajmiy nisbatdagi gazlar aralashmasining o‘rtacha molyar massasi ikkala gazning molyar massasining 1/3 qismini tashkil etadi.`,variantlar:{A:`1,3,4`,B:`1,2,5`,C:`2,4,5`,D:`3,4,5`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`Kaliy gidroksid va ortofosfat kislota qanday mol nisbatda ta’sirlashsa hosil bo’lgan tuzning ekvivalent massasi 87 g/ekv ga teng bo’ladi?`,variantlar:{A:`3:1`,B:`1:1`,C:`3:2`,D:`2:1`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`Ionlarni elektron konfugratsiyalari bilan tog’ri moslang.
Ionlar: a. gidrid ioni; b. nitrid ioni; c. Zn²⁺ kationi; d. Fe³⁺ kationi
Elektron konfugratsiyasi: 1. 1s¹; 2. 1s²2s²3s²3p⁶3d¹⁰; 3. [Ar]3d⁵; 4. [Ar]3d⁶; 5. 1s²2s²2p⁶; 6. 1s²`,variantlar:{A:`a – 1; b – 5; c – 4; d – 3`,B:`a – 6; b – 4; c – 5; d – 1`,C:`a – 6; b – 5; c – 3; d – 2`,D:`a – 6; b – 5; c – 4; d – 3`},javob:`D`,tushmagan:!1,nuqson:`To‘g‘ri moslash a–6, b–5, c–2, d–3 — variantlar orasida yo‘q. Rasmiy kalit D (unda faqat c xato: 3d⁶ Fe²⁺ niki). md: saytga qo‘yishda D dagi c ni 2 ga tuzatish tavsiya etilgan. Shuningdek 2-konfiguratsiyada 2p⁶ tushib qolgan.`,rasm:{bet:17,izoh:`Jadval: Ionlar (a–d) va Elektron konfugratsiyasi (1–6); shartda matn ko‘rinishida berilgan`}},{raqam:5,ball:null,turi:`tanlov`,shart:`Elementning lektron tuzilishi [K L M N qavatlarda: 2 8 x y] bo‘lgan element atomida M va N qavatda elektronlar yigʻindisi 15 ta. Ushbu elementning eng yuqori oksidlanish darajali zarrachasining oxirgi elektron elektroni uchun magnit kvant soni qiymati topilsin.`,variantlar:{A:`+2`,B:`– 1`,C:`+1`,D:`0`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`Ammoniy ioni uchun toʻgʻri malumotlarni toping.
1. Elektronlari soni 10 ta, neytronlar soni 11 ta, protonlari soni 11 ta
2. Azot atomida bog’lanishda ishtirok etmagan elektron juft, vodorod ionida bo’sh elektron orbitall bo’ladi.
3. Azot atomi va bitta vodorod atomi orasida donor – akseptor bog’lanish mavjud.
4. Tuzlari suvda yaxshi eriydi`,variantlar:{A:`1,4`,B:`2,4`,C:`3,4`,D:`1,3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:null,turi:`tanlov`,shart:`A + B → C reaksiyaning 60 °C dagi tezligi 3,6 mol/l∙min bo’lib, 30 °C da 40 sekundda A modda konsentratsiyasi 0,6 mol/l dan 0,3 mol/l gacha kamaydi. Ushbu reaksiyaning temperatura koeffitsenti topilsin.`,variantlar:{A:`4`,B:`3`,C:`2`,D:`2,5`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`Reaksiyada is gazi hosil bo‘lish unumini oshirish uchun qaysi amallarni bajarish kerak?
CH₄(g) + H₂O(g) → CO(g) + H₂(g) – Q`,variantlar:{A:`bosimmi oshirish; temperaturani kamaytirish; metan konsentratsiyasini oshirish`,B:`bosimmi oshirish; temperaturani oshirish; vodorod konsentratsiyasini kamaytirish`,C:`bosimni kamaytirish; temperaturani oshirish; vodorod konsentratsiyasini oshirish`,D:`bosimni kamaytirish; temperaturani oshirish; metan konsentratsiyasini oshirish`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`Vodorod peroksid eritmasi qizdirilganda parchalandi va massasi 8% ga kamaydi. Shu jarayonda 10% li eritma hosil bo’lgan bo’lsa dastlabki eritma konsentratsiyasi (%) topilsin.`,variantlar:{A:`17`,B:`29,6`,C:`10`,D:`26,2`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`200 ml 0,5 M li natriy ortofosfat eritmasiga 50 ml 1 M li HCl eritmasi qo‘shildi. Natijada uch xil tuz saqlagan aralashma hosil qildi. Aralashma tarkibida qaysi tuz bo‘lmaydi?`,variantlar:{A:`natriy gidroortofosfat`,B:`natriy digidroortofosfat`,C:`natriy ortofosfat`,D:`natriy xlorid`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`60% chumoli kislota bo‘lgan ikkita bir xil suvli eritma mavjud. Birinchi eritmaga 200 ml suv qo‘shildi. Ikkinchi eritmaga esa 200 ml bromid kislota eritmasi quyildi. Olingan ikkala eritmalar hajmi teng. Ushbu jarayonlarni bilgan holda quyidagilardan nechtasi to‘g‘ri ekanligini aniqlang.
• Birinchi eritmadagi formiat ionlari miqdori ikkinchi eritmadagidan ko‘p;
• Ikkinchi eritmaning pH qiymati birinchi eritmanikidan kichik;
• Birinchi eritmada dissotsialanmagan chumoli kislota molekulalari ikkinchi eritmadagidan kamroq;
• Ikkinchi eritmadagi vodorod ionlari konsentrasiyasi birinchi eritmadagidan kamroq.`,variantlar:{A:`2`,B:`3`,C:`1`,D:`4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`Bo‘sh qoldirilgan o‘rinda javob yozing.
“Pushti — siyohrangli kaliy pemanganatning suvli eritmasiga kaliy sulfit ... modda bilan qo‘shilsa, eritma rangi... bo‘ladi. Va eritmadagi permanganat ioni ... ionigacha (moddagacha) qaytariladi”`,variantlar:{A:`H₂SO₄; rangsiz; MnO₂`,B:`KOH; rangsiz; Mn²⁺`,C:`KOH; yashil; MnO₄²⁻`,D:`H₂SO₄; sariq; Mn²⁺`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:`Natriy xlorid va kaliy xloriddan iborat 25 g aralashma suvda eritildi va hosil bo’lgan eritmaga 840 ml 0,5 molyarli AgNO₃ eritmasi qo’shildi. Hosil bo’lgan yangi eritmaga 100 g massali mis plastinka tushirildi va ma’lum vaqtdan so’ng qaytarib olindi va taroziga tortilganda massasi 101,52 g ekanligi ma’lum bo’ldi. Dastlabki aralashmada osh tuzi massa ulushi topilsin.`,variantlar:{A:`0,702`,B:`0,75`,C:`0.298`,D:`0,25`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:`Quyidagi suv solingan probirkalar turli xil moddalar qo‘shilishi tasvirlangan. Moddalar qo‘shilgach probirkaga binafsha rangli lakmus tomizildi.
[Rasmda: №1 — +SiO₂; №2 — KOH; №3 — +P₂O₅; №4 — +CuO]
Qaysi probirkada lakmus qizil rangga kiradi?`,variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:18,izoh:`Suv solingan 4 ta probirka: №1 ga SiO₂, №2 ga KOH, №3 ga P₂O₅, №4 ga CuO qo‘shilmoqda`}},{raqam:15,ball:null,turi:`tanlov`,shart:`Quyidagi reaksiya mahsuloti uchun to‘g‘ri fikrni aniqlang.
[Jadval: To‘liq reaksiyaga kirishuvchi moddalar — X: 4,96 g; O₂: 6,4 g. Reaksiya mahsuloti — XₐO_b]`,variantlar:{A:`amfoter oksid`,B:`tarkibidagi X ning oksidlanish darajasi +3`,C:`0,48 mol o‘yuvchi natriy bilan reaksiyaga kirishib o‘rta tuz hosil qiladi`,D:`suvda erib faqat bir xil kislota hosil qiladi`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:18,izoh:`Jadval: X — 4,96 g, O₂ — 6,4 g, mahsulot XₐO_b (shartda matn ko‘rinishida berilgan)`}},{raqam:16,ball:null,turi:`tanlov`,shart:`Metallga mos keluvchi javobni aniqlang.
[Struktura: Me atomiga uchta O—H guruhi bog‘langan — Me(O—H)₃]`,variantlar:{A:`Na`,B:`Cd`,C:`Mg`,D:`Fe`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`Aralashma tarkibidagi moddalarning mol nisbati 2:1:1 (berilgan tartibda) bo‘lgan temir qo‘sh oksid, uglerod va misdan iborat 54 g aralashmani to‘liq eritish (t °C) uchun necha gramm 80 % li sulfat kislota eritmasi kerak bo‘ladi? Barcha reaksiyalarda sulfat kislotaning qaytarilish mahsuloti SO₂ deb hisoblang.`,variantlar:{A:`196`,B:`137,2`,C:`171,5`,D:`147`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`Bir bosqichli o’zgarishlar sxemasi berilgan.
[Sxema (strelka ostida reaksiya raqami): Zn —(NaOH (mo‘l er.); 1)→ Z; Zn —(HCl (er.); 5)→ X; X —(NaOH (mo‘l er.); 6)→ Z; Z —(N; 2)→ X; X —(L; 3)→ Zn; Zn —(Y; 4)→ X]
( 4 – reaksiyada sariq – qizil rangli metall hosil bo’ladi)
Oddiy modda hosil bo’lishi bilan bradigan reaksiya tenglamalarini toping.`,variantlar:{A:`1, 3, 4, 5`,B:`1, 2, 4, 6`,C:`1, 2, 3, 5`,D:`3, 4, 5, 6`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:18,izoh:`O‘zgarishlar sxemasi: Z ←(NaOH mo‘l er., 1)— Zn —(HCl er., 5)→ X —(NaOH mo‘l er., 6)→ Z; Z —(N, 2)→ X(pastki); X —(L, 3)→ Zn —(Y, 4)→ X(yuqori)`}},{raqam:19,ball:null,turi:`tanlov`,shart:`1) C + H₂SO₄(kons) →
2) P + HNO₃(kons) →
Ikkala reaksiyada jami 18 g suv hosil bo‘ldi. Ikkinchi reaksiyada hosil bo‘lgan ortofosfat kislotaning miqdori (mol) birinchi reaksiyada hosil bo‘lgan gazlarning (n.sh.) umumiy miqdoriga teng (mol). Dastlabki metallmaslarning umumiy massasini (g) toping.`,variantlar:{A:`21`,B:`37`,C:`24,5`,D:`17,9`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`Noma’lum alkan yondirilganda 194,4 g CO va CO₂ aralashmasi hosil bo’ldi. Ushbu aralashmadagi CO ning miqdori (mol) CO₂ ning miqdoridan 10 marta ko’p ekanligi va alkan va kislorod 1,1:4 nisbatda ekanligi ma’lum bo’lsa, noma’lum alkanni toping.`,variantlar:{A:`butan`,B:`metan`,C:`etan`,D:`propan`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:`Uglerod va vodorod soni 2 taga farq qiladigan alkadien 200 g 3,2% li bromning tetraxlormetandagi eritmasi bilan ta’sirlashib teng miqdordagi dibrom va tetrabromalkan hosil qildi. Bunda qanday massadagi (g) alkadien sarflanadi?`,variantlar:{A:`1,08`,B:`2,16`,C:`3,24`,D:`4,32`},javob:``,tushmagan:!1,nuqson:`Hisoblangan to‘g‘ri javob 1,44 g — variantlarda yo‘q. Rasmiy kalit ehtimol B) 2,16 (barcha mahsulot dibromid deb olinganda chiqadi, shartga zid).`,rasm:null},{raqam:22,ball:null,turi:`tanlov`,shart:`Tabiiy gazni qayta ishlab ammiak ishlab chiqarish uchun xomashyo tayyorlashda qanday asosiy reaksiya amalga oshiriladi?`,variantlar:{A:`metanni suv bug‘i bilan konversiyasi: CH₄ + H₂O = CO + 3H₂ + Q`,B:`2CH₄ + O₂ = 2CO + 4H₂`,C:`CH₄ = C + 2H₂`,D:`2H₂O = 2H₂ + O₂`},javob:`A`,tushmagan:!1,nuqson:`A variantida «+ Q» yozilgan, aslida bu reaksiya endotermik (−Q).`,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`O‘rtacha molyar massasi 12 g/mol bo‘lgan formaldegid va vodorod aralashmasi qizdirilgan katalizator ustidan o‘tkazildi. Natijada metanol bug‘i hosil bo‘ldi va olingan gaz aralashmasining vodorodga nisbatan zichligi 8,4 g/mol bo‘ldi. Oxirgi gaz aralashmasidagi vodorodning mol ulushini (%) toping.`,variantlar:{A:`40`,B:`30`,C:`50`,D:`10`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:`44 g tarkibi C₄H₈O₂ bo‘lgan ikkita modda ikki qismga bo‘lindi. Birinchi qismi natriy gidrokarbonat bilan ta’sirlashib 4.48 litr (n.sh) gaz hosil qildi. Ikkinchi qismiga natriy gidroksid ta’sir ettirilganda spirt hosil bo‘ldi va 20% qismi bug‘landi. Bug‘langan spirt massasini (g) aniqlang.`,variantlar:{A:`4,6`,B:`2,76`,C:`2,3`,D:`3,68`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`Quyidagi moddaning 1 moli mo‘l miqdordagi natriy gidroksid bilan reaksiyaga kirishganda hosil bo‘ladigan organik moddaning molyar massasi?
[Struktura: benzol halqasida 1,3,5-holatlarda COOH, OH va HO—CH₂—CH₂— guruhlari]`,variantlar:{A:`226`,B:`204`,C:`230`,D:`248`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:19,izoh:`Benzol halqasi: COOH (yuqorida), OH va HO—CH₂—CH₂— (meta-holatlarda)`}},{raqam:26,ball:null,turi:`tanlov`,shart:`Berilgan ma’lumotlardan fruktozaga tegishlilarini toping.
1) geksoza; 2) molekulasining yopiq shakli besh atomni (kislorod bilan birga) o‘z ichiga oladi; 3) geterofunksional birikma molekulasida bitta aldegid guruh va beshta gidroksil guruhlar bor; 4) gidrolizlanadi; 5) ketoza; 6) aldoza.`,variantlar:{A:`3, 4, 6`,B:`1, 2, 5`,C:`2, 4, 5`,D:`1, 3, 6`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:null,turi:`tanlov`,shart:`2,4,6-tribromanilin molekulasidagi barcha uglerod atomlarining oksidlanish daraja yig‘indisini toping.`,variantlar:{A:`−3`,B:`+2`,C:`−2`,D:`+3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`Birlamchi aminlar nitrit kislota (NaNO₂ + H₂SO₄) bilan ta’sirlashib birlamchi spirt, azot va suv hosil qiladi (metil amin va aromatik aminlar bundan mustasno). 1–amino–3,4–dimetilpentan nitrit kislota bilan ta’sirlashishidan hosil bo‘lgan spirt molekulasida nechta ikkilamchi uglerod atomi mavjud?`,variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`3,01·10²¹ ta izoprenning makro molekulasi 600 g 3,2% li bromli suvni rangsizlatiradi (makro molekulada uzilish bo‘lmagan). Agar hosil bo‘lgan polimerda bromning massa ulushi 32% bo‘lsa, polimerlanish darajasini aniqlang.`,variantlar:{A:`120`,B:`200`,C:`100`,D:`240`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`To‘rtta raqamlangan probirkalarda quyidagi moddalarning suvli eritmalari bor: 1) oqsil; 2) metilamin; 3) glukoza; 4) sirka kislota.
Moddalarni aniqlab beruvchi reagentlarni aniqlang.`,variantlar:{A:`1 va 3 − CuSO₄ + NaOH; 2 va 4 − lakmus`,B:`1 va 3 − CuSO₄ + NaOH; 2 − bromli suv; 4) − Na`,C:`1 − KMnO₄; 2 − HNO₃; 3 − Ag₂O(NH₃); 4 − H₂O`,D:`1 − HNO₃; 2 − Ag₂O(NH₃); 3 va 4 − NaOH`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:`Reaksiya tenglamasi keltirilgan jarayon va X modda haqida to‘g‘ri fikrni tanlang.
CH₂O−CO−C₁₇H₃₃
|
CHO−CO−C₁₇H₃₃  + 3H₂O → 3X + HO−CH₂−CH(OH)−CH₂−OH
|
CH₂O−CO−C₁₇H₃₃`,variantlar:{A:`X modda qoldiqlari qattiq yog‘lar tarkibida uchraydi`,B:`X modda palmitin kislotadan farqli ravishda bromli suvni rangsizlantiradi`,C:`X modda molekulasi tarkibidagi barcha uglerod atomlari sp³ gibridlangan`,D:`moyning sovunlanish sxemasi keltirilgan.`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:`Quyidagi tajribada ohakli suv loyqalanib, havo rangli mis (II) sulfat ko‘kardi.
[Rasmda: CuO va X modda aralashmasi solingan probirka spirt lampasida qizdirilmoqda; probirka og‘zida CuSO₄ (suvsiz) bor; gaz o‘tkazgich nay ohakli suv solingan probirkaga tushirilgan.]
Tajribadan qanday asosiy xulosa qilinadi?`,variantlar:{A:`bu spirtning aldegidgacha oksidlanish reaksiyasi`,B:`mis (II) glitseratning olinishi`,C:`organik modda xloroform tarkibida xlor elementi bor`,D:`organik modda tarkibida uglerod va vodorod elementlari bor`},javob:`D`,tushmagan:!1,nuqson:null,rasm:{bet:19,izoh:`Asbob: CuO + X modda solingan probirka qizdirilmoqda, probirka og‘zida CuSO₄, gaz nay orqali ikkinchi probirkaga (ohakli suv) o‘tadi`}},{raqam:33,ball:2.2,turi:`tanlov`,shart:`Y modda molekulasidagi atomlar sonini toping.`,variantlar:null,javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:2.2,turi:`tanlov`,shart:`Z modda molekulasidagi atomlar sonini toping.`,variantlar:null,javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:2.2,turi:`tanlov`,shart:`E modda molekulasidagi atomlar sonini toping.`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`Kadmiy nitrat va temirdan iborat 97,6 g aralashma ochiq havoda qizdirildi. Bunda aralashma massasi oʻzgarmadi (temir oksidlanganda faqat Fe₂O₃ hosil boʻlgan). Reaksiya natijasida faqat metall oksidlari qolgan. Dastlabki aralashmadagi tuzning massasini (g) aniqlang?`,bandlar:[{band:``,savol:``,javob:`47,2`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`Quyidagi reaksiyani yarim reaksiyalar usulida tenglashtiring va barcha koeffitsientlar yig‘indisini aniqlang.
CH₃CH₂COCH₂CH₃ + MnO₄⁻ + H⁺ → CH₃CH₂COO⁻ + CH₃COO⁻ + Mn²⁺ + H₂O`,bandlar:[{band:``,savol:``,javob:`44`,birlik:``,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`Mis, uglerod va oltingugurtdan iborat 1,6 mol aralashma teng ikki qismga bo‘lindi. Birinchi qism mo‘l kislorodda yondirildi. Bunda 0,7 mol gazlar aralashmasi hosil bo‘ldi. Ikkinchi qism konsentrlangan sulfat kislotada eritildi. Bu jarayonda esa 136,8 gramm gazlar ajraldi (barcha gazlar miqdori va massasi normal sharoitda o‘lchangan). Olingan karbonat angidridning umumiy miqdorini (mol) toping.
(S + H₂SO₄(kons) → SO₂ + H₂O)`,bandlar:[{band:``,savol:``,javob:`0,4`,birlik:`mol`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`Organik modda tarkibida oltingugurt va azot borligini isbotlash uchun quruq probirkaga ozroq soch va jun tolasidan solindi. So‘ngra kerosindan tozalangan kaliy kichik bo‘lagi solib, qisqich yordamida spirt lampasida avval sekin, so‘ngra qattiq qizdirildi. Bunda X va Y moddalar hosil bo‘ladi. Aralashma qip-qizil bo‘lib cho‘g‘langach, probirka tegeldagi 10-15 ml sovuq suvga botiriladi. Bunda probirka sinib ketadi va ichidagi moddalar suvga o‘tib, eridi. So‘ngra aralashma filtrlandi va quyidagi tajribalar o‘tkazildi.
Filtratdan 2-3 ml olib, unga temir (II) sulfat eritmasidan 2-3 tomchi tomizilib, bir-ikki minut qizdirildi (bunda X temir (II) sulfat bilan ta’sirlashadi). So‘ngra unga temir (III) xlorid eritmasi tomizildi va xlorid kislota eritmasi bilan nordonlanganda, berlin lazurining to‘q ko‘k cho‘kmasi hosil bo‘ldi. Bu organik modda tarkibida azot borligini isbotlaydi. X modda formulasini yozing.`,bandlar:[{band:``,savol:``,javob:`KCN`,birlik:`matn`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`A va B to‘yingan monokarbon kislotalardan (gomologik qatorda A avvalroq keladi) iborat 48 g aralashma 160 g 28% li KOH eritmasi bilan ta’sirlashadi. Xuddi shunday 48 g A va B kislotalardan iborat aralashma “kumush ko‘zgu” reaksiyasiga kirishdi va reaksiyadan keyingi moddalar aralashmasi NaOH bilan ta’sirlashganda, 200 g 24 % li ishqor eritmasi sarflandi (nordon tuz hosil bo’lmagan).
Aralashmadagi A kislotaning massasini (g) toping.`,bandlar:[{band:``,savol:``,javob:`18,4`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:`Topshiriqni bajarish jarayonida barcha reaksiya tenglamalarini yozing. Miqdoriy va arifmetik hisoblashlarni (unga asos bo‘lgan usul yoki formulani ko‘rsatgan holda) uzviy ketma-ketlikda bajaring.
Zichliklari 1,2 g/ml va 1,5 g/ml bo‘lgan mis (II) sulfat eritmalari teng massada aralashtirilganda (hajm o‘zgarmagan deb hisoblang) “Eritma 1” deb nomlangan 300 ml 30 % li CuSO₄ eritmasi hosil bo‘ldi. Ushbu eritma 6,7 A tok kuchi bilan ma’lum vaqt elektroliz qilindi. Natijada, kislotaning miqdori (mol) tuznikidan 2 marta ko‘p bo‘lgan eritma hosil bo‘ldi. Hosil bo‘lgan eritmaga 20 % li NaOH eritmasi qo‘shilganda neytral muhitga ega “Eritma 2” olindi. Agar “Eritma 2” elektroliz qilinsa katodda faqat vodorod ajraladi.`,bandlar:[{band:`1`,savol:`“Eritma 1” necha soat davomida 6,7 A tok kuchi bilan elektroliz qilingan?`,javob:`4`,birlik:`soat`,ball:2.6},{band:`2`,savol:`Qo‘shilgan NaOH eritmasining massasini (g) toping.`,javob:`300`,birlik:`g`,ball:1.3},{band:`3`,savol:`Tarkibi Glauber tuzi bilan bir xil bo‘lgan eritma hosil qilish uchun “Eritma 2” tarkibidan necha gramm suv bug‘latilishi kerak?`,javob:`394`,birlik:`g`,ball:1.7},{band:`4`,savol:`“Eritma 2” tarkibidagi sulfat ionlarini to‘liq cho‘ktirish uchun sarflanadigan BaCl₂ massasini (g) toping.`,javob:`156`,birlik:`g`,ball:.4}],tushmagan:!1,nuqson:`Bandlar balli md dagi umumiy mezonlardan guruhlab olindi (manbada bandlar bo‘yicha ball yo‘q).`,rasm:null},{raqam:42,ball:6,turi:`yozma`,shart:`Organik moddalarning xossalarini bilgan holda reaksiya tenglamalarini tugallang va tenglashtiring. Hosil bo‘lgan barcha organik moddalarning tuzilish formulasini yozing. 1-, 2-, 5-reaksiyalarda hosil bo‘lgan organik mahsulotlarni sistematik nomenklatura bo‘yicha nomlang.`,bandlar:[{band:`1`,savol:`[siklopropan halqasi, uchala uglerodida CH₃ — rasmda] + H₂ →`,javob:`CH₃–CH(CH₃)–CH₂–CH₃ (2-metilbutan)`,birlik:`matn`,ball:.9},{band:`2`,savol:`CH₃─CH=CH─CH₃ + KMnO₄ + H₂O →`,javob:`3CH₃–CH=CH–CH₃ + 2KMnO₄ + 4H₂O → 3CH₃–CH(OH)–CH(OH)–CH₃ (butan-2,3-diol) + 2MnO₂↓ + 2KOH`,birlik:`matn`,ball:1},{band:`3`,savol:`CH₃─C≡C─CH₃ + KMnO₄ + H₂SO₄ →`,javob:`5CH₃–C≡C–CH₃ + 6KMnO₄ + 9H₂SO₄ → 10CH₃COOH + 6MnSO₄ + 3K₂SO₄ + 4H₂O`,birlik:`matn`,ball:1},{band:`4`,savol:`C₆H₁₂O₆ + Ag[(NH₃)₂]OH →`,javob:`CH₂OH(CHOH)₄CHO + 2[Ag(NH₃)₂]OH → CH₂OH(CHOH)₄COONH₄ + 2Ag↓ + 3NH₃ + H₂O`,birlik:`matn`,ball:.8},{band:`5`,savol:`CH₃─CH(CH₃)─CH₂─COONa + H₂O →(elektroliz)`,javob:`2CH₃–CH(CH₃)–CH₂–COONa + 2H₂O →(elektroliz) (CH₃)₂CH–CH₂–CH₂–CH(CH₃)₂ (2,5-dimetilgeksan) + 2CO₂↑ + H₂↑ + 2NaOH`,birlik:`matn`,ball:1},{band:`6`,savol:`C₆H₆ [benzol] + CH₃─CH═CH₂ →(AlCl₃)`,javob:`C₆H₆ + CH₃–CH=CH₂ →(AlCl₃) C₆H₅–CH(CH₃)₂ (kumol, izopropilbenzol)`,birlik:`matn`,ball:.7},{band:`7`,savol:`CH₃CCl₂CH₂CH₃ + KOH(suv) →`,javob:`CH₃CCl₂CH₂CH₃ + 2KOH(suv) → CH₃–CO–CH₂CH₃ (butanon) + 2KCl + H₂O`,birlik:`matn`,ball:.6}],tushmagan:!1,nuqson:`1-reaksiyada rasmda uchala halqa uglerodida CH₃ bor (1,2,3-trimetilsiklopropan → 2,3-dimetilbutan bo‘lishi kerak); md kaliti uni 1,2-dimetilsiklopropan deb olib 2-metilbutan bergan. Bandlar balli md mezonlaridan olindi.`,rasm:{bet:21,izoh:`1-reaksiyada siklopropan halqasi (uchala uglerodida CH₃), 6-reaksiyada benzol halqasi struktura ko‘rinishida`}},{raqam:43,ball:6,turi:`yozma`,shart:`Raqamlangan probirkalarda (1,2,3,4,5) turli moddalar eritmalari mavjud. 1-raqamli eritmaga 3-raqamli eritmadan quyish jarayonida avval cho‘kma hosil bo‘ldi, jarayon davom ettirilgach cho‘kma erib ketdi. 1-raqamli probirkadagi eritma tarkibida kationning elektron tuzilishi [Ar] 3d¹⁰4s⁰ va anioni esa bariy kationi bilan kislotalardan erimaydigan oq cho‘kma hosil qiladi. 3- va 4-raqamli probirkalardagi eritmalar aralashtirilganda metall oksidi cho‘kmaga tushdi (eritmada NaNO₃ hosil bo‘ldi) va bu eritma (idish tubidagi cho‘kma bilan birga) 6-raqamli bo‘sh probirkaga solindi. 3- va 5-raqamli probirkalardagi eritmalar aralashtirilganda ajralgan gaz 6-probirkaga yuttirilganda cho‘kma erib ketdi. 4- va 5-raqamli probirkalardagi eritmalar aralashtirilganda oq pag‘asimon, 2- va 4-raqamli eritmalar aralashtirilganda esa sarg‘ish cho‘kma olindi. 2- va 3-raqamli eritmalar aralashtirilganda “ohak suti” hosil bo‘ldi.`,bandlar:[{band:`1`,savol:`Berilgan barcha reaksiyalarning (shu jumladan 1-raqamli probirkadagi eritmaning bariy xlorid bilan reaksiyasini ham) molekulyar tenglamalarini yozing. 6-probirkadagi oksidning gaz ta’sirida erish reaksiya tenglamasi bundan mustasno.`,javob:`ZnSO₄ + BaCl₂ → BaSO₄↓ + ZnCl₂; ZnSO₄ + 2NaOH → Zn(OH)₂↓ + Na₂SO₄; Zn(OH)₂ + 2NaOH(mo‘l) → Na₂[Zn(OH)₄]; 2AgNO₃ + 2NaOH → Ag₂O↓ + 2NaNO₃ + H₂O; NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O; AgNO₃ + NH₄Cl → AgCl↓ + NH₄NO₃; 2AgNO₃ + CaBr₂ → 2AgBr↓ + Ca(NO₃)₂; CaBr₂ + 2NaOH → Ca(OH)₂↓ + 2NaBr`,birlik:`matn`,ball:1.2},{band:`2`,savol:`1-, 2-, 3-, 4-, 5-raqamli probirkalardagi noma’lum moddalarning kimyoviy formulasini probirka raqami bilan moslab yozing.`,javob:`1 − ZnSO₄; 2 − CaBr₂; 3 − NaOH; 4 − AgNO₃; 5 − NH₄Cl`,birlik:`matn`,ball:3.4},{band:`3`,savol:`2- va 3-; 2- va 4-; 3- va 4-; 3- va 5-; 4- va 5-raqamli probirkalardagi moddalar orasidagi reaksiyalarning to‘la ionli va qisqa ionli tenglamalarini yozing.`,javob:`2+3: Ca²⁺ + 2OH⁻ → Ca(OH)₂↓; 2+4: Ag⁺ + Br⁻ → AgBr↓; 3+4: 2Ag⁺ + 2OH⁻ → Ag₂O↓ + H₂O; 3+5: NH₄⁺ + OH⁻ → NH₃↑ + H₂O; 4+5: Ag⁺ + Cl⁻ → AgCl↓ (qisqa ionli)`,birlik:`matn`,ball:.8},{band:`4`,savol:`6-probirkadagi cho‘kma gaz orqali eritilganda olingan eritma qaysi sinf vakillarining barchasi uchun sifat reaksiyasini beradi? Shu sinfning gomologik qatoridagi ikkinchi vakili uchun ushbu sifat reaksiyasi tenglamasini yozing.`,javob:`aldegidlar; CH₃CHO + 2[Ag(NH₃)₂]OH → CH₃COONH₄ + 2Ag↓ + 3NH₃ + H₂O`,birlik:`matn`,ball:.6}],tushmagan:!1,nuqson:`Bandlar balli md dagi umumiy mezonlardan guruhlab olindi (manbada bandlar bo‘yicha ball yo‘q).`,rasm:null}]},He={variant:`06`,nom:`Sertifikat 25.01.2025 I smena`,betlar:`22–25`,umumiy:[{raqamlar:[33,34,35],shart:`5,6 litr fosfin gazi to’la yondirilishidan hosil bo’lgan fosfor oksidi kalsiy gidroksid eritmasidan o’tkazilganda hosil bo’lgan gidrofosfat tuzi massasi digidrofosfat tuzidan 16,6 gramm kam bo’ldi.`,variantlar:{A:`0.2`,B:`0,05`,C:`0,15`,D:`0.1`,E:`0,25`,F:`0.3`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`Kimyoviy xossalarni saqlaydigan strukturaviy birlikni belgilang.`,variantlar:{A:`molekula`,B:`atom`,C:`elektron`,D:`neytron`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:null,turi:`tanlov`,shart:`Linol kislotaning emperik formulasini ko’rsating.`,variantlar:{A:`CₙH₂ₙO₂`,B:`C₁₈H₃₂O₂`,C:`C₁₈H₃₀O₂`,D:`C₉H₁₆O`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`1/55 g Mn oksidida 5/515 g Mn bor. Oksid formulasini aniqlang.`,variantlar:{A:`MnO₃`,B:`Mn₂O₇`,C:`Mn₂O₃`,D:`MnO₂`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`A + B = C + D reaksiya bo’yicha dastlabki moddalar konsentratsiyasi reaksiyaga mos ravishda 6 va 4 mol/l dan olindi, muvozanat yuzaga kelganda B moddaning konsentratsiyasini aniqlang. (K_M = 1)`,variantlar:{A:`2,4`,B:`1,6`,C:`3,6`,D:`1,8`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:null,turi:`tanlov`,shart:`100 g 18% eritmadan 0,9% li eritma hosil qilish uchun, necha gramm suv bilan suyultirish kerak?`,variantlar:{A:`1900`,B:`190`,C:`2000`,D:`200`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`Metal va metalmas massasi 2 gr/mol ga farq qiluvchi tuzni aniqlang`,variantlar:{A:`K₂Cr₂O₇`,B:`LiMnO₄`,C:`K₂SO₄`,D:`NaNO₃`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:null,turi:`tanlov`,shart:`²¹⁰₈₆Rn → A + x ⁴₂α + y ⁰₊₁β
Yadro reaksiyadan 31.5 mg radon parchalanganda 54.18·10¹⁹ ta betta zarracha hosil bo'lgan bo'lsa A modda tarkibida proton bilan elektronlar yig'indisini toping. (Rn va A o\`zaro izaton)`,variantlar:{A:`158`,B:`148`,C:`164`,D:`172`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`Musbat zarrachani aniqlang
№ | Zarrachalar | Pratonlar soni | Elektron soni
1 | X | 20 | 18
2 | Y | 9 | 10
3 | Z | 18 | 19
4 | A | 8 | 10`,variantlar:{A:`1`,B:`2`,C:`3,4`,D:`1,4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:22,izoh:`Jadval: zarrachalar X, Y, Z, A — protonlar va elektronlar soni (shartda matn ko‘rinishida berilgan)`}},{raqam:9,ball:null,turi:`tanlov`,shart:`Ammoniy dixromat parchalanganda 0.1 mol gaz ajraldi, hosil boʻlgan qattiq qoldiq yetarli (0,2 mol) NaOH bilan reaksiyaga kirgizildi, hosil boʻlgan tuz massasini aniqlang`,variantlar:{A:`10,7`,B:`21,4`,C:`16,8`,D:`24,7`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`Reaksiya jarayonida kislorodning reaksiya tezligi 0.8 mol/l∙min ga teng. 2,5 l li idishda kislorod 128 gramdan 16 gramgacha kamaydi. reaksiya necha sekund davom etgan ?`,variantlar:{A:`210`,B:`0,075`,C:`0,5`,D:`105`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`Qaysi asos asosli tuz hosil qilmaydi?`,variantlar:{A:`KOH`,B:`Ca(OH)₂`,C:`Al(OH)₃`,D:`Fe(OH)₂`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`CuSO₄ eritmasi inert elektrodlar yordamida elektroliz qilinganda tuzning konsentratsiyasi 12.8 % gacha kamaydi, kislotaning konsentratsiyasi 4.9 % ga yetdi. Dastlabki tuzning konsentratsiyasini (%) toping`,variantlar:{A:`19,6`,B:`20`,C:`16,8`,D:`20,8`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:`KOH ning 168 gr 10% li eritmasi dissotsiyalanishidan hosil bo'lgan kation molini toping. (α=90%)`,variantlar:{A:`0,54`,B:`1`,C:`0,27`,D:`0,6`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:`Kalsiy pirofosfat, kalsiy digidroortofosfat, magniy gidroksokarbonat tuzlari tarkibidagi sigma bog’lar soni π bog’lar sonidan necha marta ko’p?`,variantlar:{A:`3`,B:`4`,C:`7`,D:`8`},javob:`C`,tushmagan:!1,nuqson:`Kalit ion bog‘larni ham σ qatoriga qo‘shgan (35/5 = 7); ion bog‘larsiz nisbat 5 chiqadi (variantlarda yo‘q).`,rasm:null},{raqam:15,ball:null,turi:`tanlov`,shart:`Seziy nitritning gidrolizini sekinlashtirish uchun nima qilish kerak.`,variantlar:{A:`suv`,B:`seziy nitrit`,C:`mis nitrat`,D:`rux xlorid`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:null,turi:`tanlov`,shart:`H₂S va O₂ aralashmasi 10 g to’liq reaksiyaga kirishdi. Hosil bo’lgan oddiy modda massasini aniqlang`,variantlar:{A:`3,2`,B:`1,6`,C:`4,8`,D:`6,4`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`Etan, propin va propilen aralashmasi 6:4:7 massa nisbatda, 255 g aralashma tarkibidagi propilen hajmini (litr, n.sh.) aniqlang.`,variantlar:{A:`44,8`,B:`56`,C:`67,2`,D:`33.6`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`C va H atomlari 1:18 nisbatda bo’lgan metan va suv aralashmasi ta’sirlashuvidan oddiy modda va kislorod saqlagan murakkab modda aralashmasi hosil bo’ldi. Aralashma tarkibida oddiy modda hajmiy ulushi (%) topilsin.`,variantlar:{A:`0,5`,B:`0,3`,C:`0,4`,D:`0,6`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:`Benzol gomologi yonganda 1,8 mol O₂ sarflandi, 0,8 mol suv hosil bo’ldi. Gomologni aniqlang.`,variantlar:{A:`C₆H₆`,B:`C₇H₈`,C:`C₈H₁₀`,D:`C₉H₁₂`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`Metanni 1500°C haroratda qizdirilishidan hosil bo'lgan gazlar aralashmasi simob(II)-sulfat eritmasiga yuttirilganda. Vodorodga nisbatan zichligi 3,8 bo'lgan 11,2 gaz aralashmasi yutilmay qolgan bo'lsa, metanning parchalanish`,variantlar:{A:`50`,B:`60`,C:`75`,D:`40`},javob:`A`,tushmagan:!1,nuqson:`Shart chala: savol «metanning parchalanish [darajasini (%) toping]» bilan tugamagan; 11,2 dan keyin birlik (l) yo‘q.`,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:`[Rasmda: 2 mol C₂H₅NH₂ solingan idishga HCl (yetarli) qo‘shiladi → 500 g eritma.]
Hosil bo'lgan eritmaning foiz konsentratsiyasini aniqlang.`,variantlar:{A:`16,3`,B:`19,2`,C:`32,6`,D:`38,4`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:22,izoh:`Idishda 2 mol C₂H₅NH₂, unga HCl (yetarli) qo‘shilmoqda; strelka → 500 g eritma`}},{raqam:22,ball:null,turi:`tanlov`,shart:`Tarkibidagi 5 ta atomi sp³ gibridlangan atomga ega moddani toping.`,variantlar:{A:`dietilamin`,B:`pentilamin`,C:`etilpropilamin`,D:`tetrametilamin`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`Propan xlorganlanda oksidlovchini toping`,variantlar:{A:`xlor`,B:`kislorod`,C:`Vodorod`,D:`uglerod`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:"4·Nₐ atom bolgan massasi 21.5 g bo`lgan aldegid uchun to'g'ri fikrni toping.",variantlar:{A:`modda 0.25 mol`,B:`molyar massa 74g/mol`,C:`izomeri butanon`,D:`gomologi pentanal`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`Qaysi qatorda barcha ma\`lumotlar to\`g\`ri.
№ | Moddalar | M (g/mol) | Qutubsiz bog’lar soni | gomologlari
1 | Valerian kislota | 102 | 4 | Butilformiat
2 | Buten | 56 | 4 | propen
3 | Pentanon | 86 | 5 | Butanon
4 | Alanin | 75 | 3 | Glitsin`,variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:23,izoh:`Jadval: moddalar, M, qutbsiz bog‘lar soni, gomologlari (shartda matn ko‘rinishida berilgan)`}},{raqam:26,ball:null,turi:`tanlov`,shart:`584 gr diaminomonokarbon kislota ikki qismga ajratildi. Birinchi qismiga xlorid kislota qo’shilganda 438 gr modda hosil bo’ldi. ikkinchi qismiga KOH qo’shilganda hosil bo’lgan modda massasini aniqlang.`,variantlar:{A:`184`,B:`368`,C:`298`,D:`304`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:null,turi:`tanlov`,shart:`10 gr RNK (Mr=81000) gidroliz qilinganda 10.4 gr nukliotid hosil bo‘ldi
RNK dagi Nukliotidlar sonini toping`,variantlar:{A:`179`,B:`181`,C:`3240`,D:`180`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`33.3 gr Oligosaxrid [(C₆H₁₀O₅)n·H₂O] suv gidrolizi 36 gr glukoza hosil boʻldi n ni aniqlng`,variantlar:{A:`3`,B:`5`,C:`6`,D:`4`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`Kriolitning tarkibida NaF va AlF₃ ning massa ulushi mos ravishda 0,6 va 0,4 bo’lsa, kriolitning formulasini ko’rsating.`,variantlar:{A:`3NaF · AlF₃`,B:`Na₃AlF₃`,C:`NaAlF₂`,D:`NaF · AlF₃`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`0,3 mol X va 0,2 mol Y ning massalari (g) yig’indisini toping.
( Barcha moddalar tarkivida uglerod mavjud)
[Sxema: Alkin → Aldegid; Alkin → X; Alkin → X —(H₂O)→ Y → Aldegid; Alkin —(2H₂)→ Z → D → Y → Aldegid]`,variantlar:{A:`17,6`,B:`24,6`,C:`16,6`,D:`27,8`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:23,izoh:`Strelkali sxema: Alkin → Aldegid; Alkin → X; Alkin → X —H₂O→ Y; Alkin —2H₂→ Z → D → Y; ikkala Y dan Aldegidga strelka`}},{raqam:31,ball:null,turi:`tanlov`,shart:"3 ta idishda 1 moldan olingan etilen glikolga yetarli miqdorda natriy, kaliy va HCl qo`shildi. Hosil bo`lgan moddalarning uchun qaysi to’g’ri ?",variantlar:{A:`108 g kaliy alkagolyat hosil bo’lgan`,B:`106 g natriy alkagolyat hosil bo’lgan`,C:`101 g dixlor etan hosil bo’lgan`,D:`128 g kaliy alkagolyat hosil bo’lgan`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:"132 kg Kuprit (Cu₂O) va Tenorit (CuO) (1:1.5 mol nisbatda) va 60% tarkibida mis bo`lmagan qoshimchadan necha kg mis ajratib olish mumkin?",variantlar:{A:`67,2`,B:`44,8`,C:`22,4`,D:`33,6`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:33,ball:2.2,turi:`tanlov`,shart:`Hosil bo’lgan CaHPO₄ miqdori (mol) topilsin.`,variantlar:null,javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:2.2,turi:`tanlov`,shart:`Hosil bo’lgan Ca(HPO₄)₂ miqdori (mol) topilsin.`,variantlar:null,javob:`D`,tushmagan:!1,nuqson:`Formula xato terilgan: «Ca(HPO₄)₂» — to‘g‘risi Ca(H₂PO₄)₂ (digidrofosfat).`,rasm:null},{raqam:35,ball:2.2,turi:`tanlov`,shart:`Sarflangan Ca(OH)₂ miqdori (mol) topilsin.`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`A + B ↔ C + D reaksiya bo’yicha muvozanatda turgan sistemada moddalarning muvozanat konsentratsiyalari 4:4:2:8 mol/l. Sistemaga C moddadan 2 mol qo’shildi. Yangi muvozanat holatda A va B moddalarning konsentratsiyalari yig’indisini aniqlang.`,bandlar:[{band:``,savol:``,javob:`9,6`,birlik:`mol/l`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob qavs ichida ochiq berilgan: «(9,6)» — shartdan olib tashlandi. Hajm berilmagan; kalit 2 mol/l qo‘shilgan deb olgan.`,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`458 g sulfat kislota eritmasiga Na₂O qoʻshilganda sulfat ionlarining massa ulushi 415/229 marta, suv massasi esa 5/4 marta kamaysa, hosil boʻlgan tuz massasi toping.`,bandlar:[{band:``,savol:``,javob:`142`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob qavs ichida ochiq berilgan: «(142)» — shartdan olib tashlandi.`,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`102,6 g III valentli A metall sulfati bilan 302,4 II valentli B metall perxlorati aralashtirildi. So’ngra 209,7 g B metall birikmasi hosil bo’ladi (qoldiqsiz reaksiyaga kirishgan). B metallni toping.`,bandlar:[{band:``,savol:``,javob:`Ba`,birlik:`matn`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob qavs ichida ochiq berilgan: «(Ba)» — shartdan olib tashlandi.`,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:"C₃H₈, C₂H₆ va CₓHᵧ gazlar aralashmasi yondirilganda 2.05 mol CO₂ va 2.4 mol suv hosil boʻldi. CₓHᵧ dan hosil bo`lgan suvning massasi propandan chiqqan suvning massasiga teng. CₓHᵧ dan hosil bo`lgan CO₂ ning hajmiy ulushi etandan chiqqan CO₂ ning hajmiy ulushiga teng n(CₓHᵧ)=n(C₂H₆)/2 ga teng bo`lsa, m(CₓHᵧ)-m(C₃H₈) qiymatini (g) toping.",bandlar:[{band:``,savol:``,javob:`4,2`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob qavs ichida ochiq berilgan: «(4,2)» — shartdan olib tashlandi.`,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`Molyar massasi 28,8 g/mol bo’lgan metan va metanol bug’laridan iborat aralashmani to’la yondirish uchun 4,8 mol kislorod sarflangan bo’lsa, aralashmadagi metanolning massasini (g) aniqlang.`,bandlar:[{band:``,savol:``,javob:`76,8`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob qavs ichida ochiq berilgan: «(76,8)» — shartdan olib tashlandi.`,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:`Topshiriqni bajarish jarayonida barcha reaksiya tenglamalarini yozing. Miqdoriy va arifmetik hisoblashlarni (unga asos bo‘lgan usul yoki formulani ko‘rsatgan holda) uzviy ketma-ketlikda bajaring.
X kation +1 oksidlanish darajaga ega bo’lgan 0,348 g sulfid tuzi 100 ml kaliy xromat eritmasi bilan sulfat kislotali sharoitda qoldiqsiz reaksiyaga kirishdi. Olingan xromli tuz KOH va H₂O₂ bilan (qoldiqsiz) reaksiyaga kirishadi (K₂CrO₄ hosil bo’ldi). Olingan xromli tuzga vodorod xlorid ta’sir ettirilganda 60 ml (124,65 kPa va 27 °C) gaz ajraldi.`,bandlar:[{band:`1`,savol:`Barcha oksidlanish – qaytarilish reaksiyalarini yozing.`,javob:`3(NH₄)₂SO₃ + K₂Cr₂O₇ + 4H₂SO₄ → 3(NH₄)₂SO₄ + Cr₂(SO₄)₃ + K₂SO₄ + 4H₂O; Cr₂(SO₄)₃ + 3H₂O₂ + 10KOH → 2K₂CrO₄ + 3K₂SO₄ + 8H₂O; 2K₂CrO₄ + 16HCl → 2CrCl₃ + 3Cl₂↑ + 4KCl + 8H₂O`,birlik:`matn`,ball:1.5},{band:`2`,savol:`X kationi aniqlang.`,javob:`NH₄⁺`,birlik:`matn`,ball:2.2},{band:`3`,savol:`Dastlabki eritmadagi K₂Cr₂O₇ va H₂SO₄ molar konsentratsiyalarini aniqlang;`,javob:`K₂Cr₂O₇ — 0,01 M; H₂SO₄ — 0,04 M`,birlik:`matn`,ball:.8},{band:`4`,savol:`Eritmada qolgan kaliyli tuzlarning massasini aniqlang.`,javob:`0,994`,birlik:`g`,ball:.8},{band:`5`,savol:`Oxirgi reaksiyadan so’ng hosil bo’lgan eritmadagi tuz(lar) bilan to’liq reaksiyaga kirishadigan KOH miqdori (mol) topilsin.`,javob:`0,012`,birlik:`mol`,ball:.7}],tushmagan:!1,nuqson:`PDF da shart ikki marta yozilgan: birinchisi chala («…0,348g sulfit tuzi 100 ml kaliy xromat eritmasi bilan sulfat kislo») va «sulfit» deydi, ikkinchisi «sulfid». Chala nusxa olib tashlandi; kalit sulfit ((NH₄)₂SO₃, M=116) bo‘yicha — «sulfid» xato. Bandlarda javoblar qavs ichida ochiq berilgan (olib tashlandi). Bandlar balli md mezonlaridan guruhlab olindi.`,rasm:null},{raqam:42,ball:6,turi:`yozma`,shart:`Organik moddalarning xossalarini bilgan holda reaksiya tenglamalarini tugallang va tenglashtiring. Hosil bo‘lgan barcha organik moddalarning tuzilish formulasini yozing. 2- va 4-reaksiyalarda hosil bo‘lgan organik mahsulotlarni sistematik nomenklatura bo‘yicha nomlang.`,bandlar:[{band:`1`,savol:`CH₃ − CH₂ − CH₂ − CH(CH₃) − CH₃ → (beshta yo‘nalish) CH₄ + … ; CH₄ + … ; CH₃ − CH₃ + … ; CH₂ = CH₂ + … ; CH₃ − CH = CH₂ + …`,javob:`CH₄ + CH₃–CH=CH–CH₂–CH₃ (penten-2); CH₄ + CH₂=C(CH₃)–CH₂–CH₃ (2-metilbuten-1); CH₃–CH₃ + CH₂=C(CH₃)–CH₃ (2-metilpropen); CH₂=CH₂ + CH₃–CH(CH₃)–CH₃ (izobutan); CH₃–CH=CH₂ + CH₃–CH₂–CH₃ (propan)`,birlik:`matn`,ball:1.2},{band:`2`,savol:`CH₃ − CH₂ − CH₂ − C(CH₃)₂ − CH(Cl) − CH₂ − C(CH₃)₂ − CH₃ + KOH →(spirtli eritma)`,javob:`CH₃CH₂CH₂–C(CH₃)₂–CH=CH–C(CH₃)₂–CH₃ (2,2,5,5-tetrametilokt-3-en) + KCl + H₂O`,birlik:`matn`,ball:1},{band:`3`,savol:`[benzol halqasi: CH₃ va qo‘shni (orto) holatda CH(CH₃) − CH₃] + KMnO₄ + H₂SO₄ →`,javob:`5C₁₀H₁₄ + 24KMnO₄ + 36H₂SO₄ → 5C₆H₄(COOH)₂ (ftal kislota) + 10CO₂↑ + 24MnSO₄ + 12K₂SO₄ + 56H₂O`,birlik:`matn`,ball:1},{band:`4`,savol:`CH₃ − C(CH₃)₂ − CH(OH) − CH₂ − CH₃ →(T > 140 °C, H₂SO₄)`,javob:`CH₃–C(CH₃)₂–CH=CH–CH₃ (4,4-dimetilpent-2-en) + H₂O`,birlik:`matn`,ball:1},{band:`5`,savol:`CH₃ − CH₂ − CH(CH₃) − CH₂ − COONa + NaOH →(T)`,javob:`CH₃CH₂CH(CH₃)CH₂COONa + NaOH →(t) CH₃CH₂CH(CH₃)CH₃ (2-metilbutan) + Na₂CO₃`,birlik:`matn`,ball:.7},{band:`6`,savol:`n C₆H₅OH [fenol] + n CH₂O →(− H₂O)`,javob:`nC₆H₅OH + nCH₂O → [–C₆H₃(OH)–CH₂–]ₙ (fenolformaldegid smolasi) + nH₂O`,birlik:`matn`,ball:.6},{band:`7`,savol:`C₆H₅NH₂ [anilin] + 3Br₂ →`,javob:`C₆H₅NH₂ + 3Br₂ → C₆H₂Br₃NH₂↓ (2,4,6-tribromanilin) + 3HBr`,birlik:`matn`,ball:.5}],tushmagan:!1,nuqson:`Bandlar balli md mezonlaridan olindi.`,rasm:{bet:25,izoh:`Reaksiyalar struktura formulalari bilan: 1 — 2-metilpentan krekingi (5 strelka), 3 — benzol halqasida CH₃ va izopropil, 6 — fenol, 7 — anilin`}},{raqam:43,ball:6,turi:`yozma`,shart:`Sanoatda sulfat kislota olish jarayoni uchun quyidagi savollarga muqobil javobarni yozing.`,bandlar:[{band:`1`,savol:`Piritdan SO₂ olish unumini oshirish uchun ( kamidan 2 ta ) taklif ayting.`,javob:`Piritni maydalash; qaynovchi qatlam usulini qo‘llash; havoni kislorod bilan boyitish; qarama-qarshi oqim va ortiqcha havo berish. 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂`,birlik:`matn`,ball:1.2},{band:`2`,savol:`oltingugurt (VI) oksiddan sulfat angidrid olish unumini oshirish uchun harorat (yoki harorat oralig’i)ni qanday o’zgartirish kerak va qaysi katalizatorladan ( kamida 2 ta ) foydalanish kerak ?`,javob:`400–500 °C (reaksiya ekzotermik); katalizatorlar: V₂O₅, Pt (yoki Fe₂O₃). 2SO₂ + O₂ ⇄ 2SO₃ + Q`,birlik:`matn`,ball:1.4},{band:`3`,savol:`Pirit yonidan qaynovchi qatlam qaysi asbobda hosil bo’ladi va qaynovchi qatlam deb nimaga aytiladi?`,javob:`KS pechida (qaynovchi qatlamli pech); qaynovchi qatlam — maydalangan pirit zarralarining pastdan puflanayotgan havo oqimida qaynayotgan suyuqlikdek muallaq harakatlanishi`,birlik:`matn`,ball:1},{band:`4`,savol:`Nima uchun sulfat angidrid suvda emas sulfat kislotaga yuttiriladi?`,javob:`SO₃ suvda yomon yutiladi va kuchli issiqlik ajralib kislota tumani (aerozol) hosil bo‘ladi; shuning uchun konsentrlangan H₂SO₄ ga yuttirilib oleum olinadi: nSO₃ + H₂SO₄ → H₂SO₄·nSO₃`,birlik:`matn`,ball:1},{band:`5`,savol:`Piritni konsentrlangan nitrat kislotada eritib sulfat kislota olish reaksiyasini yozing va elektron balans usulida tenglashtiring.`,javob:`FeS₂ + 18HNO₃ → Fe(NO₃)₃ + 2H₂SO₄ + 15NO₂↑ + 7H₂O; Fe⁺² − 1e⁻ → Fe⁺³, 2S⁻¹ − 14e⁻ → 2S⁺⁶ (jami 15e⁻); N⁺⁵ + 1e⁻ → N⁺⁴ (×15)`,birlik:`matn`,ball:1.4}],tushmagan:!1,nuqson:`2-bandda «oltingugurt (VI) oksiddan» deb yozilgan — to‘g‘risi oltingugurt (IV) oksid (SO₂). Bandlar balli md mezonlaridan olindi.`,rasm:null}]},Ue={variant:`07`,nom:`Sertifikat 25.01.2025 II smena`,betlar:`26–30`,umumiy:[{raqamlar:[33,34,35],shart:`Bertole tuzi va kaliy permanganatdan iborat aralashma teng ikki qismga ajratildi. Birinchi qism xlorid kislotada eritildi va 0,85 mol gaz ajraldi. Ikkinchi qismidagi kaliy permanganat termik qizdirildi va 1,12 litr gaz ajraldi.`,variantlar:{A:`45,2`,B:`80,6`,C:`25,2`,D:`18`,E:`13,6`,F:`49`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`Qaysi tuz tarkibidagi metallar va metallmasning massasi 18 ga farq qildi.`,variantlar:{A:`KMnO₄`,B:`NaAlO₂`,C:`BaSO₄`,D:`CaOCl₂`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:null,turi:`tanlov`,shart:`Magniy sulfat kristalgidrati tarkibida kislorodning massa ulushi 224/3 % bo’lsa. Kristalgidrat formulasini ko’rsating.`,variantlar:{A:`MgSO₄ · 3H₂O`,B:`MgSO₄ · 5H₂O`,C:`MgSO₄ · 7H₂O`,D:`MgSO₄ · 10H₂O`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`Tarkibida neytronlar barcha zarrachalarni 35% tashkil qilgan temir izotopini toping.`,variantlar:{A:`⁵⁷Fe`,B:`⁵⁶Fe`,C:`⁵⁴Fe`,D:`⁵⁸Fe`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`Nordon tuz (a) va asosli tuz (b) hosil qila olmaydigon moddalarni toping.`,variantlar:{A:`a)-H₄P₂O₇ va b)-Mg(OH)₂`,B:`a)-Al(OH)₃ va b)-H₂SO₄`,C:`a)-HCN va b)-RbOH`,D:`a)-NaOH va b)-HNO₃`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:null,turi:`tanlov`,shart:`Quyidagi jarayonlarning qaysi biriga tegishli qisqa ionli reaksiya uchun koeffisientlar yig’indisi 6 ga teng?
1. BaCl₂ + Na₂SO₄ →
2. CaCO₃ + HCl →
3. Na₂CO₃ + AlCl₃ + H₂O →`,variantlar:{A:`faqat 1`,B:`1 va 3`,C:`faqat 2`,D:`1,2,3`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`Quyidagi eritmaga oid qiymatlar asosida, undagi kalsiy ionlari massasini (mg) aniqlang.
(Rasmda eritma: (NO₃⁻ + Cl⁻) – 1,4 mol; Br⁻ – 0,6 mol; Al³⁺ – 0,2 mol; Fe²⁺ – 0,2 mol; Ca²⁺ – x mol)`,variantlar:{A:`20000 mg`,B:`8000 mg`,C:`32000 mg`,D:`40000 mg`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:26,izoh:`idish (stakan) sxemasi: ionlar va ularning miqdorlari strelkalar bilan ko‘rsatilgan — (NO₃⁻ + Cl⁻) 1,4 mol, Br⁻ 0,6 mol, Al³⁺ 0,2 mol, Fe²⁺ 0,2 mol, Ca²⁺ x mol`}},{raqam:7,ball:null,turi:`tanlov`,shart:`Alyuminiydigidrofosfat va kalsiygidroksokarbonatlarni sigma va pi bog‘lar yigindisi aniqlang.`,variantlar:{A:`30`,B:`36`,C:`32`,D:`34`},javob:`D`,tushmagan:!1,nuqson:`kalit (34) ion bog‘larni ham σ qatorida sanash konvensiyasiga asoslangan; ion bog‘larsiz 27 chiqadi`,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`10 gramm halqasimon oqsil (Mr = 81000) gidroliz qilinganda 10,4 gramm aminokislotalar aralashmasi hosil bo’ldi. Oqsil tarkibidagi aminokislotalar sonini toping.`,variantlar:{A:`180`,B:`181`,C:`178`,D:`179`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`Glyukoza 1:2 mol nisbatda ikki qismga bo’lindi. Birinchi qismi qaytarildi. Ikkinchi qismi yondirilganda 54 g suv hosil bo’ldi. Birinchi qismda hosil bo’lgan spirt massasini aniqlang. (η₁ = 60% va η₂ = 75%)`,variantlar:{A:`36,4 g`,B:`18,2 g`,C:`54,6 g`,D:`9,1 g`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`Qaysi kislota nordor tuz hosil qilmaydi ?`,variantlar:{A:`H₃PO₃`,B:`H₂CrO₄`,C:`H₃PO₂`,D:`barcha kislotalar nordon tuz hosil qiladi`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`Quyidagi jadvaldan foydalanib, noma’lum zarrachalarni anion, kation va neytral atomlarga ajrating.
Zarracha | Elektron soni | Proton soni
X | 18 | 19
Y | 20 | 20
Z | 18 | 17
T | 12 | 16`,variantlar:{A:`X – anion; Y – neytral; Z, T – kation`,B:`X – kation; Y – neytral; Z, T – anion`,C:`X, T – kation; Y – neytral; Z – anion`,D:`X, T – anion; Y – neytral; Z – kation`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:26,izoh:`jadval: zarracha, elektron soni, proton soni (X 18/19, Y 20/20, Z 18/17, T 12/16) — shartda matn bilan ham berilgan`}},{raqam:12,ball:null,turi:`tanlov`,shart:`Propin va propendan iborat aralashmaga yetarli miqdordagi bromli suv ta’sir ettirilganda olingan mahsulotning massasi dastlabki aralashma massasidan 191/31 marta katta bo’lsa, dastlabki aralashmadagi gazlarning mol nisbatini aniqlang.`,variantlar:{A:`1:1`,B:`1:2`,C:`2:3`,D:`1:3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:`11,6 g alkin va pentandan iborat aralashma maksimal 64 g bromni biriktiradi. Bu aralashmani yonishidan hosil bo’lgan gaz, 400 g 17% li NaOH eritmasini to’la neytrallash uchun yetarli bo’lsa, alkinni aniqlang.`,variantlar:{A:`C₃H₄`,B:`C₅H₈`,C:`C₆H₁₀`,D:`C₇H₁₂`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:`CₓH_y ning to’liq yonishi uchun 6,4 g kislorod sarflanib, 2,7 g suv hosil bo’ldi. CₓH_y ning nechta izomeri borligini aniqlang.`,variantlar:{A:`3`,B:`6`,C:`5`,D:`4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:15,ball:null,turi:`tanlov`,shart:`Natriy metali suv bilan tasirlashdi hosil bo’lgan eritmada qaysi sinf vakillari bor.`,variantlar:{A:`kislota`,B:`gidrid`,C:`oksid`,D:`tuz`},javob:`C`,tushmagan:!1,nuqson:`savol noaniq: eritmada asos (NaOH) bor, lekin variantlarda «asos» yo‘q; kalit erituvchi suvni (oksid) nazarda tutadi`,rasm:null},{raqam:16,ball:null,turi:`tanlov`,shart:`Fenol va noma’lum amin aralashmasining 15,95 g miqdori 1568 ml (n.sh) vodorod xlorid yoki 24 g 15% li natriy gidroksid eritmasi bilan ta’sirlasha oldi. Noma’lum amin formulasini aniqlang.`,variantlar:{A:`fenil amin`,B:`benzil amin`,C:`etil amin`,D:`metil amin`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`Mol nisbati 1:2:1 bo’lgan temir kuyundisi, uglerod va mis (I) oksididan iborat 4 g aralashmani eritish uchun 98% li sulfat kislotaning massasini (g) hisoblab toping. Reaksiya natijasida hosil bo’lgan oltingugurt (IV) oksidning hajmini (l. n. sh) aniqlang. (Barcha reaksiyalarda sulfat kislota SO₂ gacha qaytarilgan.)`,variantlar:{A:`7,17 g; 1,344 litr`,B:`10,7 g; 0,896 litr`,C:`12 g; 1,232 litr`,D:`15,9 g ; 1,568 litr`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`Platina zar suvi (nitrat va xlorid kislotalar aralashmasi) da eritilganda 2,24 litr (n.sh) da gaz ajraldi. Ushbu jarayonda oksidlovchi qaytaruvchidan nechta elektron olgan.`,variantlar:{A:`0,4·N_A`,B:`0,1·N_A`,C:`0,2·N_A`,D:`0,3·N_A`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:`Qaysi element qaytaruvchi bo’lolmaydi.`,variantlar:{A:`1s² / 2s² 2p⁶ / 3s² 3p⁴`,B:`1s² / 2s¹`,C:`1s² 2s² 2p⁵`,D:`1s² / 2s² 2p⁶ / 3s² 3p³`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`sp³ gibrid orbitallar soni 20 ta bo’lgan aminni toping`,variantlar:{A:`di etil amin`,B:`di metil amin`,C:`etil propil amin`,D:`izopropil amin`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:`x g fosfor ma’lum miqdor nitrat kisloda eriydi. y g oltingugurt ham shuncha miqdordagi kislotada eriydi. x g metannining molini toping. Ikki reaksiyada ham nitrat kislota NO₂ gacha qaytarilgan. (x–y=5,2)`,variantlar:{A:`2,7125`,B:`2,325`,C:`3,625`,D:`4,375`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:22,ball:null,turi:`tanlov`,shart:`Al(HEO₄)₃ tarkibli moddada, E ning konfiguratsiyasi 1s²2s²2p⁶ bo’lsa, elementni aniqlang?`,variantlar:{A:`P`,B:`Cl`,C:`Si`,D:`S`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`Qaysi element oksidlanganda massasi 40% ga ortadi.`,variantlar:{A:`Ca`,B:`Mg`,C:`C`,D:`Be`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:`Biror moddani yoqish uchun 22,4 litr ozon va kislorod aralashmasi yoki 134,4 litr havo (φ=0,2) sarflansa, dastlabki aralashmaning o’rtacha massasini hisoblang.`,variantlar:{A:`38,4`,B:`76,8`,C:`57,6`,D:`70,4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`O’zaro yaqin bo’lgan ikkita karbon kislota gomologlari aralashmasi 37,4 g keladi. Aralashma metanol ishtirokida qizdirildi. Natijada 30,3 g murakkab efirlar aralashmasi hosil bo’ldi. Agar bir efirning hosil bo’lish unumi 70%, ikkinchisiniki esa 50% bo’lsa, dastlabki aralashma tarkibidagi quyi gomologning miqdori yuqori gomologga nisbatan 5 marta ko’p va katta gomolog 0,1 mol bo’lsa, dastlabki aralashmadagi moddalarning formulasini aniqlang.`,variantlar:{A:`HCOOH; CH₃COOH`,B:`CH₃COOH; CH₃CH₂COOH`,C:`CH₃CH₂COOH; CH₃(CH₂)₂COOH`,D:`HCOOH; CH₃CH₂COOH`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:null,turi:`tanlov`,shart:`Uchinchi elektron pog’onada 14 ta elektron bo’lgan atom va ionlarni tanlang.
1) kobalt (III) kationi; 2) xrom; 3) temir (II) kationi; 4) nikel (III) kationi; 5) temir.`,variantlar:{A:`2, 4, 5`,B:`1, 3, 5`,C:`2, 4`,D:`1, 3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:null,turi:`tanlov`,shart:`11,5 mol ammiakning katalizator ishtirokida parchalanish reaksiyasida 150 sekundan so’ng ammiakning konsentratsiyasi 0,6 mol/l bo’lsa. Reaksiyani o’rtacha tezligini (mol/l·min) da toping. (V= 2,5 litr)`,variantlar:{A:`1,6`,B:`0,8`,C:`0,24`,D:`1,8`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`Ammiak katalizatorsiz yonish reaksiyasi muvozanatga kelganda suv va ammiakning konsentratsiyasi 3 mol/l dan bo’lsa, kislorodning dastlabki konsentratsiyasini aniqlang. (K_M = 1/3)`,variantlar:{A:`1,5`,B:`3`,C:`5`,D:`4,5`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`Sulfat kislotaning 490 g eritmasiga Na₂O qo’shilganda sulfat ionlarining massa ulushi 369/245 marta, suvning mol miqdori esa 49/43 marta kamaygan bo’lsa, hosil bo’lgan eritmadagi suv massasini (g) aniqlang?`,variantlar:{A:`441`,B:`495`,C:`432`,D:`387`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`11,4 g A metall sulfati bilan 33,6 g B metall perxlorati to’la reaksiyaga kirishganda 23,3 g B metall birikmasi hosil bo’ldi. A va B metallarni aniqlang.`,variantlar:{A:`Fe va Ca`,B:`Al va Ba`,C:`Al va Ca`,D:`Fe va Ba`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:`0,6 mol sulfit angidrid ishqor eritmasiga yuttirilganda 1:2 mol nisbatda 133,2 g nordon va o‘rta tuzlar aralashmasi hosil bo’ldi. Ishqor formulasini aniqlang.`,variantlar:{A:`LiOH`,B:`NaOH`,C:`KOH`,D:`RbOH`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:`Teng massada olingan sulfit angidrid va kislorod reaksiyasidan 20 g sulfat angidrid hosil bo’ldi. Ortib qolgan gaz takror reaksiyaga kirishishi uchun qaysi gazdan qanday massada (g) talab etiladi?`,variantlar:{A:`m (O₂) = 3 g`,B:`m (O₂) = 12 g`,C:`m (SO₂) = 48 g`,D:`m (SO₂) = 24 g`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:33,ball:null,turi:`tanlov`,shart:`Dastlabki aralashma massasini toping.`,variantlar:null,javob:``,tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); hisob bo‘yicha taxminiy javob: B (80,6)`,rasm:null},{raqam:34,ball:null,turi:`tanlov`,shart:`Birinchi qisimdan reaksiyada hosil bo’lgan suv massasini toping.`,variantlar:null,javob:``,tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); hisob bo‘yicha taxminiy javob: D (18)`,rasm:null},{raqam:35,ball:null,turi:`tanlov`,shart:`Dastlabki aralashmadagi Bertole tuzi massasini toping.`,variantlar:null,javob:``,tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); hisob bo‘yicha taxminiy javob: F (49)`,rasm:null},{raqam:36,ball:null,turi:`yozma`,shart:`Cu va Cu (I)-oksididan iborat 55,2 g aralashma 176,4 g 75% sulfat kislota eritmasiga solindi reaksiya natijasidan bir xil mahsulot olindi hosil bo’lgan eritmadagi suvni massasini toping.`,bandlar:[{band:``,savol:``,javob:``,birlik:``,ball:null}],tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); bitta javobli ochiq savol (a/b bandsiz); hisob bo‘yicha taxminiy javob: 68,4 g`,rasm:null},{raqam:37,ball:null,turi:`yozma`,shart:`Asetilen va vodorod aralashmasi nikel katalizator ustidan o’tkazilganda asetilen to’liq reaksiyaga kirishib, gazlar hajmi 2 marta kamaydi. Natijada 3 xil gazlar aralashmasi (neonga nisbatan zichligi 1,16) olingan bo‘lsa, ushbu gazlar aralashmasidagi vodorodning mol ulushini (%) toping.`,bandlar:[{band:``,savol:``,javob:``,birlik:``,ball:null}],tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); bitta javobli ochiq savol (a/b bandsiz); hisob bo‘yicha taxminiy javob: 20 %`,rasm:null},{raqam:38,ball:null,turi:`yozma`,shart:`Mis (II) xlorid eritmasiga teng massali A va B metal plastinkalar tushirildi. Ma’lum vaqtdan so’ng, A plastinka massasi 9,6 g kamaydi, B plastinka massasi 1,6 g ortdi. Agar metallarning ekvivalent massalari nisbati mos ravishda 2 : 1 bo’lsa, A va B metallarni mos ravishda toping.`,bandlar:[{band:``,savol:``,javob:``,birlik:``,ball:null}],tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); bitta javobli ochiq savol (a/b bandsiz); hisob bo‘yicha taxminiy javob: A – Cd, B – Fe (ikkala plastinkada teng miqdor mis ajralgan deb olinganda)`,rasm:null},{raqam:39,ball:null,turi:`yozma`,shart:`Alkan va kislorod aralashmasining geliyga nisbatan zichligi 8,4 ga teng. Ushbu aralashma yondirilgandan keyingi aralashma(suv bug’lari kondensatlangan)ning vodorodga nisbatan zichligi esa 20 ga teng. Ushbu alkanni Dyuma usulida olinishiga oid quyidagi reaksiyani tugallang.
R-COONa + NaOH →`,bandlar:[{band:``,savol:``,javob:``,birlik:``,ball:null}],tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); bitta javobli ochiq savol (a/b bandsiz); hisob bo‘yicha taxminiy javob: alkan C₃H₈; C₃H₇COONa + NaOH → C₃H₈ + Na₂CO₃`,rasm:null},{raqam:40,ball:null,turi:`yozma`,shart:`Bir – biriga izomer bo’lgan 43,2 g spirtlar aralashmasi sulfat kislota va mo’l miqdordagi sirka kislota ishtirokida qizdirildi. Reaksiya natijasida 52,02 g murakkab efirlar aralashmasi olindi. Agar birinchi efirning hosil bo’lish unumi 75%, ikkinchi efirniki esa 50% ni tashkil qilsa, hamda birinchi spirt massasi ikkinchi spirtning massasidan 5 marta kattaligi aniq bo’lsa, spirtlarning formulalarini aniqlang.`,bandlar:[{band:``,savol:``,javob:``,birlik:``,ball:null}],tushmagan:!1,nuqson:`md da kalit yo‘q (md bu savollarni manbada yo‘q deb hisoblagan, lekin 29-betning skan qismida bor); bitta javobli ochiq savol (a/b bandsiz); hisob bo‘yicha taxminiy javob: C₃H₇OH (propanol-1 va propanol-2), M = 60`,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:`Topshiriqni bajarish jarayonida barcha reaksiya tenglamalarini yozing. Miqdoriy va arifmetik hisoblashlarni (unga asos bo‘lgan usul yoki formulani ko‘rsatgan holda) uzviy ketma-ketlikda bajaring.
Molar konsentratsiyasi va zichliklari teng bo’lgan 300g CaBr₂ eritmasiga 200g Na₃PO₄ eritmasidna qo’shildi ( reaksiyadan so’ng eritmada faqat bir xil tuz mavjud bo’ldi) . Hosil bo’lgan eritmadagi brom ionlarini to’liq cho’ktirish uchun C%/C_M = 13,6 bo’lgan kumush nitrat eritmasidan yetarli miqdorida qo’shildi. Hosil bo’lgan eritma 856,2g bo’ldi va tuzning massa ulushi 6,8% bo’lguncha 5,36A tok bilan elektroliz qilindi. Hosil bo’lgan vodoroddan ( CO + 2H₂ ⇄ CH₄O ) foydalanib olingan organik modda konsentratsiyasi 1,7mol/l bo’ldi (K_M = 1/4, reaksiya 1 litr hajmli idishda bajarildi).`,bandlar:[{band:`1`,savol:`CaBr₂ eritmasining foiz konsentratsiyasi (%) topilsin.`,javob:`20`,birlik:`%`,ball:2.5},{band:`2`,savol:`AgNO₃ eritmasining hajmi (ml) topilsin.`,javob:`400`,birlik:`ml`,ball:.6},{band:`3`,savol:`Elektroliz necha soat davomida bajarilgan?`,javob:`59`,birlik:`soat`,ball:1.5},{band:`4`,savol:`Is gazning boshlang’ich konsentratsiyasi (mol/l) topisin.`,javob:`2,79`,birlik:`mol/l`,ball:1.4}],tushmagan:!1,nuqson:`3- va 4-band javoblari taxminiy (≈59 soat, ≈2,79 mol/l); band ballari md mezon jadvalidagi oraliq qadamlar bilan yig‘ilgan`,rasm:null},{raqam:42,ball:6,turi:`yozma`,shart:`Organik moddalarning xossalarini bilgan holda reaksiya tenglamalarini tugallang va tenglashtiring. Hosil bo‘lgan barcha organik moddalarning tuzilish formulasini yozing. 2- va 4-reaksiyalarda hosil bo‘lgan organik mahsulotlarni sistematik nomenklatura bo‘yicha nomlang.`,bandlar:[{band:`1`,savol:`CH₃–C(CH₃)₂–CH(CH₃)–COONa + NaOH →(T > 140°C, H₂SO₄)`,javob:`(CH₃)₃C–CH₂–CH₃ (2,2-dimetilbutan) + Na₂CO₃`,birlik:`matn`,ball:.8},{band:`2`,savol:`C₆H₅–ONa (natriy fenolyat) + CH₃–CH₂–Br →`,javob:`C₆H₅–O–C₂H₅ (etoksibenzol) + NaBr`,birlik:`matn`,ball:1},{band:`3`,savol:`CH₃–C(CH₃)=CH–CH(CH₃)–CH₃ + KMnO₄ + H₂SO₄ →`,javob:`5C₇H₁₄ + 6KMnO₄ + 9H₂SO₄ → 5CH₃COCH₃ + 5(CH₃)₂CHCOOH + 6MnSO₄ + 3K₂SO₄ + 9H₂O`,birlik:`matn`,ball:1.2},{band:`4`,savol:`CH₃ - C≡CH →(t°, aktiv ko’mir)`,javob:`3CH₃–C≡CH → 1,3,5-trimetilbenzol (mezitilen)`,birlik:`matn`,ball:1},{band:`5`,savol:`CH≡C–CH₂–C(CH₃)₂–CH₃ + H₂O →(Hg²⁺)`,javob:`CH₃–CO–CH₂–C(CH₃)₂–CH₃ (4,4-dimetilpentan-2-on)`,birlik:`matn`,ball:.8},{band:`6`,savol:`1mol glitserin + 3 mol margarin kislota →`,javob:`C₃H₅(OH)₃ + 3C₁₆H₃₃COOH → C₃H₅(OOC–C₁₆H₃₃)₃ + 3H₂O`,birlik:`matn`,ball:.7},{band:`7`,savol:`CO₂ + H₂O →(fotosintez, xloroplast)`,javob:`6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂`,birlik:`matn`,ball:.5}],tushmagan:!1,nuqson:`1-reaksiyada PDF dagi sharoit «T > 140°C, H₂SO₄» NaOH bilan mos emas; md dekarboksillanish (t°) deb yechgan`,rasm:{bet:30,izoh:`1-, 2-, 3-, 5-reaksiyalar strukturaviy formulalar bilan berilgan (2-da benzol halqasi, ONa o‘rinbosarli); bandlarda yarim-strukturaviy ko‘rinishda yozildi`}},{raqam:43,ball:6,turi:`yozma`,shart:`Teng moldan bo’lgan Fe₂(SO₄)₃ · 9H₂O va Al₂(SO₄)₃ · xH₂O dan iborat 56g aralashmasiga 300g 8% li NaOH eritmasi quyildi. Hosil bo’lgan qo’ng’ir rangli cho’kma qizdirildi va hosil bo’lgan oksid is gazi yordamida qaytarildi, so’ngra isitilgan 10% li nitrat kislota eritmasidan quyildi. Tuz termik parchalandi( oksidlanish darajalar o’zgardi)`,bandlar:[{band:`1`,savol:`X topilsin`,javob:`12`,birlik:``,ball:1.5},{band:`2`,savol:`Nitrat kislotada eritilishdan olingan tuzlar to’liq termik parchalanishidan hosil bo’lgan gazlarning massalari yig’indsi (g) topilsin. ( tuz tarkibidai metallning oksidlanish darajasi o’zgargan)`,javob:`16,2`,birlik:`g`,ball:2.8},{band:`3`,savol:`reaksiya uchun sarflangan nitrat kislota va hosil bo’lgan oddiy modda miqdorilari (mol) topilsin.`,javob:`0,4; 0,075`,birlik:`mol`,ball:.7},{band:`4`,savol:`Agar hosil bo’lgan Na₂SO₄ dissosiyaga uchrasa va hosil bo’lgan ionlar soni qolgan tuzdagi atomlar sonidan 0,6mol ko’p bo’lsa dissosiyalanish darajasi (%) topilsin.`,javob:`90`,birlik:`%`,ball:1}],tushmagan:!1,nuqson:`3-band: HNO₃ 0,4 mol; oddiy modda md da O₂ (0,075 mol) deb olingan, temir (0,1 mol) ham asosli javob deb izohlangan`,rasm:null}]},We={variant:`08`,nom:`Sertifikat 15.03.2025 I smena`,betlar:`31–34`,umumiy:[{raqamlar:[33,34,35],shart:`Ammoniy sulfat va natriy nitrit aralashmasi qizdirilganda A, B va D moddalar hosil bo'ldi.
• A - havoda eng ko'p miqdorda topiladigan modda.
• Etan yonganda X va B moddalari hosil bo'ladi.`,variantlar:{A:`1,44`,B:`2,88`,C:`2,74`,D:`2,64`,E:`2,52`,F:`6,9`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`N₂O va NO dan iborat aralashma 22,4 litr (n.sh.) bo’lib aralashmada azot va kislorod massalari teng bo’lsa azot monoksidning hajmi (litr, n.sh.) topilsin.`,variantlar:{A:`20,16`,B:`3,2`,C:`19,2`,D:`16,8`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:null,turi:`tanlov`,shart:`5.6 litr murakkab modda tarkibida 27.09 · 10²³ ta proton bo‘lsa murakkab moddani aniqlang.`,variantlar:{A:`SiH₄`,B:`Ar`,C:`H₂O`,D:`CH₄`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`Teng mol nisbatda olingan Ca, Me va Cu aralashmasi tarkibida noma’lum metall massasi kalsiy massasidan 3,2g og’ir, mis massasidan esa 1,6g kam bo’lsa metallni aniqlang.`,variantlar:{A:`Fe`,B:`Ti`,C:`Cr`,D:`Mg`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`Sublimatsiya hodisasini ko’rsating.
(Sxema: qattiq, suyuq va gaz holatlari; 1 – qattiq → suyuq, 2 – suyuq → qattiq, 3 – suyuq → gaz, 4 – gaz → suyuq, 5 – qattiq → gaz, 6 – gaz → qattiq)`,variantlar:{A:`1`,B:`6`,C:`5`,D:`4`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:31,izoh:`uchta doira (qattiq, suyuq, gaz) va ular orasidagi 1–6 raqamli strelkalar; yo‘nalishlar md yechimiga ko‘ra: 5 – qattiq → gaz, 6 – gaz → qattiq`}},{raqam:5,ball:null,turi:`tanlov`,shart:`Eritmaning ion tarkibi Fe²⁺ ionlari 0.05 mol, Al³⁺ ionlari 0.2 mol , Br⁻ ionlari 0.6mol, NO₃⁻ va Cl⁻ ionlari jami 0.14 mol bo’lsa shu eritmadagi Ca²⁺ ionlarining massasi (mg) topilsin.`,variantlar:{A:`600`,B:`800`,C:`200`,D:`400`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`Qaytaruvchilik qila olmaydigan elementning elektron konfugratsiyasini toping`,variantlar:{A:`1s²2s¹`,B:`1s²2s²2p⁵`,C:`1s²2s²2p⁶3s²p⁴`,D:`1s²2s²2p⁶3s²3p⁵`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:null,turi:`tanlov`,shart:`Berilgan elektron konfiguratsiyalardan qaysi birida elektron qo’zg’alish hodisasi kuzatilgan?`,variantlar:{A:`ns¹np³nd¹`,B:`ns¹np⁴nd¹`,C:`ns¹np⁴nd²`,D:`ns²np²nd²`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`Ti atomi va Fe³⁺ ionlari tarkibida nechta elektroning to’rtala kvant soni bir xil bo’ladi?`,variantlar:{A:`22`,B:`20`,C:`21`,D:`18`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`Mis kuporosi va FeSO₄ · 7H₂O ning 130,6 g aralashmasi suvda eritildi va BaCl₂ ta’sir ettirilganda 0,5 mol oq cho’kma hosil boldi. Dastlabki aralashmadagi mis kuporosining massasini (g) aniqlang`,variantlar:{A:`75`,B:`50`,C:`100`,D:`25`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`Quyida berilgan jadvaldan moddalarni tog’ri moslang.
N: | Dissosiyalanishdan hosil bo’lgan ionlar soni
1 | n(kation)=n(anion)
2 | n(kation)>n(anion)
3 | n(kation)<n(anion)
Moddalar: a-temir(II)gidrookosulfat; b-kaliy nitrat; c-alyuminiy xlorid; d-kaliy alyuminiy sulfat`,variantlar:{A:`1 – b,d; 2 – a; 3 – c`,B:`1 – b,c; 2 – a; 3 – d`,C:`1 – b,d; 2 – c; 3 – a`,D:`1 – a,c; 2 – b; 3 – d`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:31,izoh:`moslashtirish jadvali (ionlar soni nisbati ↔ moddalar) — shartda matn bilan ham berilgan`}},{raqam:11,ball:null,turi:`tanlov`,shart:`Hajmi 5 litr idishdagi modda 0,1 minutdan keyin 20 moldan 5 molgacha kamaydi. Reaksiya tezligi(mol/l·s)ni aniqlang.`,variantlar:{A:`3/4`,B:`1`,C:`1/3`,D:`1/2`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`Hajmi 10 l bo’lgan idishga noma’lum miqdorda CO₂ va 4 mol H₂ solindi va 72 sekunddan keyin (CO₂(g) + H₂(g) = CO(g) + H₂O(g) reaksiya bo’yicha) muvozanat qaror topdi (K_M=1). Reaksiyaning o’rtacha tezligi 0,25 mol/l·min bo’lsa, CO₂ ning dastlabki miqdorini (mol) aniqlang.`,variantlar:{A:`4`,B:`3`,C:`9`,D:`12`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:`Tarkibiida 0,3mol oltingugurt saqlagan oleumni neytrallash uchun 24% li NaOH eritmasi qo’shildi. Hosil bo’lgan eritmaga 174,2g suv qo’shilganda 14,2% li tuz eritmasi hosil bo’ldi. Dastlabi oleumdagi erituvchi va erigan modda mol nisbatini aniqlang.`,variantlar:{A:`2:3`,B:`1:5`,C:`3:5`,D:`1:2`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`Berilgan ma’lumotlardan foydalanib E moddani aniqlang.
· C moddadagi uglerod soni B moddadagi uglerodlar sonidan 2 marta ko’p
· barcha ( A, B,C ) moddalarga NaOH qo’shilganda E modda hosil bo’ladi.
· A, B va E moddada uglerodlar soni teng.
(Sxema: A →(HCl) B; A, B va C →(NaOH, −H₂O) E)`,variantlar:{A:``,B:``,C:``,D:``},javob:``,tushmagan:!1,nuqson:`PDF da A–D javob variantlari chiqmagan (bo‘sh); md: E — aminokislota, aniq variant tanlanmagan`,rasm:{bet:31,izoh:`sxema: A dan HCl bilan B ga strelka; A, B, C dan umumiy chiziq NaOH, −H₂O bilan E ga; A)–D) variantlari bo‘sh`}},{raqam:18,ball:null,turi:`tanlov`,shart:`CuO + NH₃ → hosil bolgan oddiy moddalar farqi 49,2 g bolsa, sarflangan ammiakning hajmini (l; n.sh.) toping.`,variantlar:{A:`11,2`,B:`6,72`,C:`13,44`,D:`20,16`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:`Glyukoza 1:2 nisbatda ikki qismiga ajratilgan birinchi qismi 60% unum bilan vodorod yordamida qaytarildi. Ikkinchi qismi yondirilganda 54 g suv hosil bo'lgan. Qaytarilishidan hosil bo’lgan mahsulotni massasini (g) toping.`,variantlar:{A:`109,2`,B:`27,3`,C:`182`,D:`54,6`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`200 gr 11,7% NaCl elektroliz qilindi 0.7 mol gazlar hosil bo‘ldi, O₂ massasini (g) toping.`,variantlar:{A:`1,6`,B:`6,4`,C:`3,2`,D:`9,6`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:`1 mol propilen gidrogenlandi natijada sp³ orbitallar soni 2.2 marta ortdi. Gidrogenlanish darajasini toping.`,variantlar:{A:`60`,B:`30`,C:`20`,D:`25`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:22,ball:null,turi:`tanlov`,shart:`0,2 mol nomalum alkan yondirilganda hosil bo’lgan mahsulotlar massa farqi 12g bo’lsa alkanni aniqlang.`,variantlar:{A:`metan`,B:`etan`,C:`propan`,D:`butan`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`0.5 mol kumol yonganda olsidlovchi qaytaruvchidan nechta (N_A) elektron oladi?`,variantlar:{A:`48`,B:`24`,C:`36`,D:`18`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:`E va F birikmalarning umumiy formulasi C₄H₈O₂. E moddaning ishqoriy gidrolizida ikkita organik modda G va H hosil bo'ldi. G modda ishqor bilan qizdirilganda metan hosil bo‘ldi. H modda natriy metali bilan ta'sirlashganda vodorod ajraldi. Fmodda "kumush ko'zgu" reaksiyasiga kirishib olingan I modda, kislotalar bilan ham, spirtlar bilan ham murakkab efir hosil qilishi mumkin. Eva F lar qanday moddalar bo‘lishi mumkin?
1) CH₃CH₂COOCH₃; 2) CH₃COOCH₂CH₃; 3) CH₃COOCH(CH₃)CH₃; 4) CH₃CH(OH)CH₂CHO; 5) CH₃C(O)CH₂CH₂OH; 6) CH₃C(CH₃)(OH)CH₂CHO.`,variantlar:{A:`E=2; 3 va F = 4; 6`,B:`E = 2 va F = 4`,C:`E = 1; 4 va F = 5; 6`,D:`E = 4 va F = 6`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`30 molekula glitsin 20ta alanin aminokislotalaridan iborat 1574g peptid gidroliziga necha mol suv ketadi?`,variantlar:{A:`50`,B:`49`,C:`25`,D:`24,5`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:null,turi:`tanlov`,shart:`Qaysi qatorda barchasi to’g’ri?
N: | Modda | Izomeri | Gomologi | polimerlanishi
1 | buten | penten | geksen | polimerlanadi
2 | etanol | dimetilefir | pentanol | polimerlanadi
3 | ksilol | etilbenzol | propilbenzol | polimerlanmaydi
4 | 2 – nitro propan | alanin | nitrometan | polimerlanmaydi`,variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`C,D`,tushmagan:!1,nuqson:`md kaliti D (4), lekin md izohiga ko‘ra 3-qator ham to‘liq to‘g‘ri — ikkala javob qabul qilinadi`,rasm:{bet:32,izoh:`jadval: modda, izomeri, gomologi, polimerlanishi (4 qator) — shartda matn bilan ham berilgan`}},{raqam:27,ball:null,turi:`tanlov`,shart:`4:2:3 mol nisbatdagi propilen, etin, propadien massasi 102 gram bo‘lsa alkinning massasini toping.`,variantlar:{A:`7,2`,B:`13`,C:`15,6`,D:`20,8`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`Metilaminga nomalum alkan qo‘shilganda C atomlari soni 4 marta H atomlari soni 3.4 marta Ortdi. Noma’lum alkan topilsin.`,variantlar:{A:`metan`,B:`propan`,C:`2 – metilbutan`,D:`2,2 – dimetilpropan`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`Oqsillarga sifat reaksiyalardan biri biuret reaksiyasi hisoblanadi.
Quyidagilardan to’g’ri javobni tanlang.`,variantlar:{A:`dipeptid-ko’k, tripeptid-binafsha, yuqori peptid-qizil rang beradi`,B:`tripeptid-ko’k, dipeptid-binafsha, yuqori peptid-qizil rang beradi`,C:`yuqori peptid-ko’k, tripeptid-binafsha, dipeptid-qizil rang beradi`,D:`dipeptid-ko’k, yuqori peptid-binafsha, tripeptid-qizil rang beradi`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`Etan va eten dan iborat 89.6 l (n.sh.) aralashmaga KMnO₄ ning kislotali muhitidagi eritmasi ta’sir ettirildi. Reaksiya natijasida 62 g diollar aralashmasi olindi. Aralashmadagi etanni mol ulushini aniqlang.`,variantlar:{A:`0,5`,B:`0,8`,C:`0,25`,D:`0,75`},javob:`D`,tushmagan:!1,nuqson:`shartda «kislotali muhit» deyilgan, diol (etilenglikol) esa neytral muhitda hosil bo‘ladi; kalitga ta’sir qilmaydi`,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:`Pb(NO₃)₂ eritmasiga tarkibida Na₂S saqlagan eritmadan qo’shildi. Hosil bo’lgan cho’kma rangi qanaqa?`,variantlar:{A:`oq`,B:`qora`,C:`yashil`,D:`qizil`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:`Glyukoza va Fruktoza uchun umumiy bo'lgan malumotlar.
1) aldoza
2) ketoza
3) polimerlanadi
4) qaytarilganda 5 atomli spirt hosil bo’ladi
5) gidrolizlanmaydi
6) “kumush ko’zgu” reaksiyasiga kirishadi`,variantlar:{A:`3,4,5`,B:`1,2,6`,C:`2,3,5`,D:`3.4.6`},javob:`A`,tushmagan:!1,nuqson:`4-bandda «5 atomli spirt» xato (sorbit 6 atomli); kalit baribir A`,rasm:null},{raqam:33,ball:null,turi:`tanlov`,shart:`0,04 mol B modda bilan qancha bariy reaksiyaga kirishadi?`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:null,turi:`tanlov`,shart:`784 ml A moddasi bilan necha gramm magniy reaksiyaga kirishadi?`,variantlar:null,javob:`E`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:null,turi:`tanlov`,shart:`D moddaning tarkibida 0,14 Nₐ atom bo'lsa, uni olish uchun qancha ammoniy sulfat kerak?`,variantlar:null,javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`Temir disulfidi mo‘l miqdordagi nitrat kislota eritmasida eritildi va molyar massasi 30g/mol bo‘lgan 0,15mol gaz ajraldi va 69.1 gr eritma olindi. Hosil bo’lgan eritmada nitrat kislotaning massa ulushi sulfat kislotaning massa ulushidan 3 marta ko‘p. Olingan eritmada suvning massasini (g) toping.`,bandlar:[{band:``,savol:``,javob:`38,32`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`Kumush nitratga 3,6gr temir plastinkasi botirildi ( reaksiyada Fe(NO₃)₂ hosil bòlgan ). Plastinka massasi 10 g ga yetganda jarayon to’xtatildi. Ushbu jarayonda ajralgan kumushni 3.44g aldegidga Ag₂O ta’sir ettirib ham olish mumkin. Aldegidni toping ?`,bandlar:[{band:``,savol:``,javob:`C₅H₁₀O`,birlik:`matn`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob qavs ichida berilgan «(C₅H₁₀O)» — shartdan olib tashlandi`,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`Kaliy nitrat va kaliy xlorat aralashmasi parchalandi (katalizator ishtirokida), 11,2 g gaz ajralib chiqdi va hosil bo'lgan qattiq qoldiqda kaliyning massa ulushi 50% ni tashkil etdi. Reaksiya natijasida hosil bo’lgan kislorodsiz tuz kislotali muhitda KMnO₄ eritmasi bilan oksidlangan. Reaksiya natijasida hosil bo'lgan kaliy sulfat miqdorini (mol) aniqlang`,bandlar:[{band:``,savol:``,javob:`0,12`,birlik:`mol`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`0,8 mol Eten KMnO₄ ning suvli eritmasi bilan C₂H₄(OH)₂ gacha oksidlandi. Kaliy permanganat eritmasi hajmi 1,6litr bo‘lsa KMnO₄ ning Molyar konsentratsiyasini toping.`,bandlar:[{band:``,savol:``,javob:`0,33`,birlik:`mol/l`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob «(0.25)» deb berilgan (shartdan olib tashlandi); md bo‘yicha to‘g‘ri nisbat 3 : 2 → ≈0,33 M (1/3), 0,25 xato nisbatdan chiqqan`,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`Hajmiy nisbatlari 1:7:2 nisbatda olingan alkan, kislorod, azot aralashmasi portlatildi va suv bug’lari kondensatlandi. Hosil bo’lgan gazlar aralashmasi tarkibida ikkita oddiy va bitta murakkab modda bo’lib, neonga nisbatan zichligi 1,8 ga teng bo’lsa, alkan tarkibidagi sp³ gibridlangan orbitallar sonini toping.`,bandlar:[{band:``,savol:``,javob:`12`,birlik:`ta`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:`Tarkibida 0.9 mol bo’lgan HCl ning 200.7 gr eritmasiga temir kuyundisi qo’shildi. Va temir kukuni qo’shlidi va kukun to’liq erib ketdi. Eritma zichligi 1.143 g/ml bo’lgan 25% li yagona tuz eritmasi hosil bo’ldi. Eritma ikki qismga ajratilib birinchi qismi stexiometrik nisbatda qizil qon tuzi qo’shilganda KFe[Fe(CN)₆] tuz hosil bo’ldi. Ikkinchi qismiga 200gr AgNO₃ qo’shildi. Reaksiya oxirigacha bordi va eritmada Fe(NO₃)₂ va H₂O dan iborat 255.25 gr eritma hosil bo’ldi`,bandlar:[{band:`1`,savol:`Temir kuyundisini massasini toping.`,javob:`11,6`,birlik:`g`,ball:2.1},{band:`2`,savol:`Temir kukunining molini toping.`,javob:`0,3`,birlik:`mol`,ball:.8},{band:`3`,savol:`25 % li eritma molyar konsentratsiyasini toping.`,javob:`2,25`,birlik:`mol/l`,ball:1.3},{band:`4`,savol:`AgNO₃ eritmasining foizini toping.`,javob:`42,5`,birlik:`%`,ball:.9},{band:`5`,savol:`KFe[Fe(CN)₆] massasini toping.`,javob:`61,4`,birlik:`g`,ball:.9}],tushmagan:!1,nuqson:`PDF da har band oxirida javob yozilgan (11,6 g; 0,3 mol; 2,25M; 42,5%; 61,4 g) — band matnidan olib tashlandi; band ballari md mezonidagi oraliq qadamlar bilan yig‘ilgan`,rasm:null},{raqam:42,ball:6,turi:`yozma`,shart:`Organik moddalarning xossalarini bilgan holda reaksiya tenglamalarini tugallang va tenglashtiring. Hosil bo‘lgan barcha organik moddalarning tuzilish formulasini yozing. 1-reaksiyalarda hosil bo‘lgan organik mahsulotlarni sistematik nomenklatura bo‘yicha nomlang. Nomlari berilgan moddalarning struktura formulalarini yozing.`,bandlar:[{band:`1`,savol:`CH₃–CH(Br)–CH₃ + 5 CH₃–CH(Br)–CH₂–CH₃ →(6Na / 6NaCl)`,javob:`(CH₃)₂CH–CH(CH₃)₂ (2,3-dimetilbutan); (CH₃)₂CH–CH(CH₃)–CH₂CH₃ (2,3-dimetilpentan); CH₃CH₂–CH(CH₃)–CH(CH₃)–CH₂CH₃ (3,4-dimetilgeksan) + 6NaBr`,birlik:`matn`,ball:1.5},{band:`2`,savol:`CH₃–CH(CH₃)–CH=C(CH₃)–CH=CH₂ →(polimerlanish)`,javob:`n CH₂=CH–C(CH₃)=CH–CH(CH₃)₂ → [–CH₂–CH=C(CH₃)–CH(CH(CH₃)₂)–]ₙ (1,4-polimerlanish)`,birlik:`matn`,ball:1},{band:`3`,savol:`C₆H₆ (benzol) + H–C≡C–H →`,javob:`C₆H₅–CH=CH₂ (stirol)`,birlik:`matn`,ball:.7},{band:`4`,savol:`Cl–CH(Cl)–CH₂–C(CH₃)₂–C(CH₃)=CH–CH₃ + NaOH (suv) →`,javob:`HO–CH₂–CH₂–C(CH₃)₂–C(CH₃)=CH–CH₃ + NaCl`,birlik:`matn`,ball:1},{band:`5`,savol:`etilenglikol + Cu(OH)₂ → to’q ko’k rangli eritma`,javob:`C₂H₄(OH)₂ + Cu(OH)₂ → mis(II) glikolyat (to‘q ko‘k eritma) + 2H₂O`,birlik:`matn`,ball:.6},{band:`6`,savol:`chumoli kislota + Cu(OH)₂ →(mis ko’zgu)`,javob:`HCOOH + 2Cu(OH)₂ → CO₂↑ + Cu₂O↓ + 3H₂O`,birlik:`matn`,ball:.7},{band:`7`,savol:`glitsin + fenilalanin + alanin → ____ + 2H₂O`,javob:`tripeptid (Gli-Phe-Ala) + 2H₂O`,birlik:`matn`,ball:.5}],tushmagan:!1,nuqson:`4-reaksiya: PDF da birinchi uglerodda IKKITA Cl (Cl₂CH–CH₂–…) — gem-digalogenid suvli ishqor bilan aldegid beradi: OHC–CH₂–C(CH₃)₂–C(CH₃)=CH–CH₃ + 2NaCl + H₂O; md esa bitta Cl li modda (Cl–CH₂–CH₂–…) uchun spirt yozgan — md javobi PDF ga mos emas. 1-reaksiyada strelka ustida «6NaCl» (6NaBr bo‘lishi kerak) — terish xatosi`,rasm:{bet:33,izoh:`1-, 2-reaksiyalar (33-bet) va 3-, 4-reaksiyalar (34-bet) strukturaviy formulalar bilan berilgan (3-da benzol halqasi); bandlarda yarim-strukturaviy ko‘rinishda yozildi`}},{raqam:43,ball:6,turi:`yozma`,shart:`Mo'l nisbati teng bo'lgan 8,19 g 4 xil oksid bilan 200 g 31,5% HNO₃ reaksiyaga kirishdi. Ortib qolgan kislota bilan 360 ml 2M NaOH reaksiyaga kirishdi.
XO →(HNO₃) X(NO₃)₂ →(NaOH(mol)) Na₂[X(OH)₄] + CO₂ → Na₂CO₃ + X(OH)₂(oq cho’kma) →(t) XO ( 2,43g)
YO →(HNO₃) Y(NO₃)₂ →(NaOH(mol)) Y(OH)₂(havorang) →(t) YO
ZO →(HNO₃) Y(NO₃)₃ →(NaSCN) to’q qizil rangli eritma
EO →(HNO₃) E(NO₃)₂`,bandlar:[{band:`1`,savol:`barcha reaksiyalarni yozing.`,javob:`ZnO, CuO, MgO + 2HNO₃ → Me(NO₃)₂ + H₂O; 3FeO + 10HNO₃ → 3Fe(NO₃)₃ + NO↑ + 5H₂O; HNO₃ + NaOH → NaNO₃ + H₂O (sarflangan HNO₃ 0,28 mol); Zn(NO₃)₂ + 4NaOH → Na₂[Zn(OH)₄] + 2NaNO₃; Na₂[Zn(OH)₄] + CO₂ → Na₂CO₃ + Zn(OH)₂↓ + H₂O; Zn(OH)₂ →(t) ZnO + H₂O; Cu(NO₃)₂ + 2NaOH → Cu(OH)₂↓ + 2NaNO₃; Cu(OH)₂ →(t) CuO + H₂O; Fe(NO₃)₃ + 3NaSCN → Fe(SCN)₃ + 3NaNO₃`,birlik:`matn`,ball:1.6},{band:`2`,savol:`XO, YO, ZO, EO oksidlarni aniqlang`,javob:`ZnO, CuO, FeO, MgO`,birlik:`matn`,ball:3.6},{band:`3`,savol:`X²⁺, Y²⁺, Z³⁺, E²⁺ larning elektron konfiguratsiyasini yozing.`,javob:`Zn²⁺: [Ar]3d¹⁰; Cu²⁺: [Ar]3d⁹; Fe³⁺: [Ar]3d⁵; Mg²⁺: 1s²2s²2p⁶`,birlik:`matn`,ball:.8}],tushmagan:!1,nuqson:`sxemada «ZO → Y(NO₃)₃» yozilgan — Z(NO₃)₃ bo‘lishi kerak (terish xatosi); 1-band reaksiyalari md yechimidan yig‘ildi (md alohida ro‘yxat bermagan)`,rasm:null}]},Ge={variant:`09`,nom:`Sertifikat 15.03.2025 II smena`,betlar:`35–38`,umumiy:[{raqamlar:[33,34,35],shart:`Topshiriqlar (33-35) va javob variant (A-F) larini o‘zaro to‘g‘ri moslashtiring.
Aluminiy suyultirilgan nitrat kislota bilan ta’sirlashdi. Jarayon natijasida gaz hosil bo‘lmagan.`,variantlar:{A:`41`,B:`20`,C:`44`,D:`38`,E:`16,2`,F:`21,6`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`X , Y, Z larni mos ravishda ko’rsating.
(Tuzilish formulalari: 1) X ikkita O orqali C=O ga bog‘langan; 2) H–O–Y, Y ikkita O orqali S(=O)₂ ga bog‘langan; 3) H–O va Z–O birgalikda C=O ga bog‘langan)`,variantlar:{A:`Na; Cr(III); Mg`,B:`Ca; Al; K`,C:`Li; Fe(II); Mn(IV)`,D:`Al; Mn(II); Li`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:35,izoh:`uchta grafik (tuzilish) formula: X(–O–)₂C=O; H–O–Y(–O–)₂S(=O)₂; H–O–C(=O)–O–Z`}},{raqam:2,ball:null,turi:`tanlov`,shart:`O’rtacha molekulyar massasi 11,6 g/mol bo’lgan CO₂ , H₂ va X dan iborat aralashmada CO₂ hajmi H₂ hajmiga teng. X massasi H₂ massasidan 6 marta katta bo’lsa, X ni aniqlang.`,variantlar:{A:`He`,B:`Ne`,C:`CO`,D:`Ar`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`1:9 mol nisbatda olingan A₂ va B₂ dan iborat aralashma reaksiyaga kirishganda yagona modda hosil bo’lgan. Reaksiyadan keyin bosim dastlabki bosimning 60%ini tashkil qiladi. Reaksiyadan hosil bo’lgan moddaning formulasini ko’rsating.`,variantlar:{A:`AB₃`,B:`AB₅`,C:`A₂B₆`,D:`A₃B`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`64,4 gramm bir asosli to’yingan karbon kislotada 7 mol atom bo’lsa, Kislotani aniqlang.`,variantlar:{A:`CH₃COOH`,B:`C₂H₅COOH`,C:`HCOOH`,D:`C₃H₇COOH`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:null,turi:`tanlov`,shart:`Klechkovskiy qoidasi keltirilgan qatorni belgilang.`,variantlar:{A:`energiyalari bir xil bo‘lgan orbitallarda elektronlar shunday tartibda joylashadiki, natijada spinlar yig‘indisi maksimal qiymatga ega bo‘ladi.`,B:`ikki holatning qaysi biri uchun (n + l) yig‘indisi kichik bo‘lsa, o‘sha holat, birinchi navbatda, elektronlar bilan to‘la boshlaydi;`,C:`atomda to‘rttala kvant sonlari bir xil qiymatga ega bo‘lgan elektronlar mavjud bo‘la olmaydi.`,D:`Agar ikki element bir-biri bilan bir necha kimyoviy birikma hosil qilsa, bu birikmalardagi bir element massasiga to‘g‘ri keluvchi boshqa element massalari o‘zaro kichik butun sonlar nisbatida bo‘ladi.`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`Kaliy nitrat tuzi termik parchalanganda azotning oksidlanish darajasi nechi birlikka o’zgaradi.`,variantlar:{A:`2`,B:`3`,C:`5`,D:`4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:null,turi:`tanlov`,shart:`Molekula tarkibidagi (π,)bog’lar yig’indisi o’zgarishi to’g’ri ko’rsatilgan javobni tanlang.
(Sxema: Sulfat angidrid →(1) Litiy xlorat →(2) Kaliy manganat →(3) Sulfat angidrid)`,variantlar:{A:`1 – ortadi; 2 – o’zgarmaydi; 3 – kamayadi`,B:`1 – o’zgarmaydi; 2 – kamayadi; 2 – ortadi`,C:`1 – o’zgarmaydi; 2 – ortadi; 3 – kamayadi`,D:`1 – kamayadi; 2 – o’rtadi; 3 – o’zgarmaydi`},javob:``,tushmagan:!1,nuqson:`md da kalit yo‘q (md sxemani manbada yo‘q deb hisoblagan, lekin 35-bet o‘ng ustun tepasida bor). π-bog‘lar: SO₃ – 3, LiClO₃ – 2, K₂MnO₄ – 2 → strelkalar bo‘yicha 1 – kamayadi, 2 – o‘zgarmaydi, 3 – ortadi; bu variantlarda yo‘q (teskari yo‘nalishda A). B variantida «3» o‘rniga «2» yozilgan`,rasm:{bet:35,izoh:`uchburchak sxema: Sulfat angidrid →1→ Litiy xlorat →2→ Kaliy manganat →3→ Sulfat angidrid`}},{raqam:8,ball:null,turi:`tanlov`,shart:`1,1 mol fosfin va silan aralashmasida vodorod atomlari soni 3,6 ta bo’lsa, aralashmadagi silan massasini hisoblang.`,variantlar:{A:`3,2`,B:`9,6`,C:`27,2`,D:`12,8`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`K₂SiO₃ gidrolizini sekinlashtirish uchun qanday modda qo’shish kerak.`,variantlar:{A:`Alyuminiy bromid`,B:`Suv`,C:`O’yuvchi natriy`,D:`Simob (II) nitrat`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`Glukozaning 1/5 qismi spirtli bijg’itilganda 0,6 mol gaz ajraladi. Qolgan qismi moy kislotali bijg’itilganda qancha (mol) ajraladi.`,variantlar:{A:`2,4`,B:`4,8`,C:`1,2`,D:`3,6`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`Benzol gomologi tarkibidagi sp³ gibrid orbitallar soni molekulasidagi vodorodlarning oksidlanish darajasiga teng.
0,25 mol benzol gomologining massasini (g) hisoblang.`,variantlar:{A:`120`,B:`12`,C:`30,0`,D:`24,0`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`200 gr 10%li NaOH eritmasiga yetarli miqdorda 18,25%li xlorid kislota eritmasi qo’shilganda necha gr NaCl cho’kmaga tushadi. S(NaCl)=10`,variantlar:{A:`2,175`,B:`1,275`,C:`3,125`,D:`2,715`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:`Moy kislotaning izomerini ko’rsating.`,variantlar:{A:`Propil metanoat`,B:`Sirka kislotaning propil efiri`,C:`Metil propil efiri`,D:`Izomoy kislotaning metil efiri`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:`Hajmi 6 litr bo’lgan reaktorda kislorod reaksiyaga kirishganda 90 sekundda massasi 160 grdan 16 gr gacha kamaygan.
Kimyoviy reaksiyaning tezligini hisoblang. (mol/l*soat)`,variantlar:{A:`0,5`,B:`30`,C:`108`,D:`0,0125`},javob:`B`,tushmagan:!1,nuqson:`PDF da variant harflari «A) 0,5 B) 30 B) 108 D) 0,0125» — uchinchi variant ham B deb yozilgan, C deb olindi`,rasm:null},{raqam:15,ball:null,turi:`tanlov`,shart:`Polipropilenning molekulyar massasi 6720 ga teng bo’lsa, polimerlanish darajasini toping.`,variantlar:{A:`160`,B:`320`,C:`240`,D:`120`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:null,turi:`tanlov`,shart:`Noma’lum alken Kaliy permanganatning suvli eritmasida oksidlandi. chap va o’ng tomondagi atomlar soni yig’indisi 84ga teng bo’lsa, alkenni aniqlang.`,variantlar:{A:`Etilen`,B:`Propilen`,C:`Buten`,D:`Penten`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`x gr fosfor konsentrlangan nitrat kislota bilan ta’sirlashdi. Xuddi shuncha nitrat kislota bilan y gr mis ta’sirlashadi. y-x=7
Z gr temir CuSO₄ ga tushirilganda y gr mis ajraladi. Z ni toping.`,variantlar:{A:`8`,B:`10`,C:`5,6`,D:`11,2`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`Quyidagi har bir reaksiya unumlari bir xil bo’lsa, unumni (%) aniqlang.
10 litr CH₄ →(+Cl₂) X →(+Na) 3,2 litr C₂H₆`,variantlar:{A:`80`,B:`90`,C:`75`,D:`60`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:`Tarkibida 0,3 mol oltingugurt saqlagan oleumni neytrallash uchun 24 % NaOH eritmasi qo’shildi. Hosil bo’lgan eritmaga 174,2 suv qo’shilganda, 14,2 % li tuz eritmasi hosil bo’ldi.
Dastlabki oleumdagi erituvchi va erigan modda mol nisbatini aniqlang.`,variantlar:{A:`2 : 3`,B:`1 : 5`,C:`3 : 5`,D:`1 : 2`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`y(H):x(C)=2:1, m(O_z):m(H_y)=2:1, CₓH_yO_z=72 gr/mol
Modda tarkibida ikkilamchi uglerod yo’q.
Ushbu modda quydagilardan qaysilari bo’lishi mumkin.`,variantlar:{A:`Izomoy aldegid`,B:`moy aldegid`,C:`Atsenon`,D:`Butanon`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:`Ti va Fe⁺³ ionida to’rtala kvant soni bir xil bo’lgan nechta electron mavjud.`,variantlar:{A:`18`,B:`22`,C:`20`,D:`19`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:22,ball:null,turi:`tanlov`,shart:`A + Cl₂ → B
B + A → D
D moddaga o’yuvchi natriy qo’shilganda osh tuzi va E modda hosil bo’ldi.`,variantlar:{A:`NaCrO₂ nisbiy molekulyar massasi bilan bir xil`,B:`molekulasida 5ta atom tutadi`,C:`normal sharoitda gaz hisoblanadi`,D:`Cu(OH)₂ massasi bilan bir xil`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`Mis (II) sulfat eritmasi tuz tugaguncha elektroliz qilindi. Bunda eritma massasi 4%ga kamaygan bo’lsa, dastlabki eritmadagi tuzning massa ulushini aniqlang.`,variantlar:{A:`4%`,B:`6%`,C:`8%`,D:`10%`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:`Qaysi qatordagi barcha javoblar to’g’ri.
№ | modda | izomeri | Gomologi | Polimerlanishi
1 | buten | penten | geksen | polimerlanadi
2 | etanol | Dimetil efir | Pentanol | polimerlanmaydi
3 | Ksilol | Etilbenzol | Propilbenzol | Polimerlanmaydi
4 | 2-nitropropan | alanin | nitrometan | polimerlanmaydi`,variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`C,D`,tushmagan:!1,nuqson:`md kaliti D (4), 3-qator ham to‘g‘ri deb izohlangan. Bu variantda 2-qator ham «polimerlanmaydi» deb berilgan (I smenada «polimerlanadi» edi) — etanol/dimetil efir/pentanol/polimerlanmaydi ham to‘liq to‘g‘ri, ya’ni B ham to‘g‘ri bo‘lishi mumkin`,rasm:{bet:36,izoh:`jadval: modda, izomeri, gomologi, polimerlanishi (4 qator) — shartda matn bilan ham berilgan`}},{raqam:25,ball:null,turi:`tanlov`,shart:`Asosiy tarkibiy qismida magniy bo’lgan moddalarni belgilang.`,variantlar:{A:`Magnezit`,B:`Silvinit`,C:`Glauber tuzi`,D:`Magnetit`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:null,turi:`tanlov`,shart:`Biuret reaksiyasi qaysi bog’ uchun sifat reaksiya hisoblanadi.`,variantlar:{A:`– CO – NH –`,B:`– S – S –`,C:`–C(=O)–O–R`,D:`– C – C –`},javob:`A`,tushmagan:!1,nuqson:null,rasm:{bet:36,izoh:`C variant grafik formula bilan berilgan: –C(=O)–O–R (murakkab efir guruhi)`}},{raqam:27,ball:null,turi:`tanlov`,shart:`Oqsillarga sifat reaksiyalardan biri biuret reaksiyasi hisoblanadi.
Quyidagilardan to’g’ri javobni tanlang.`,variantlar:{A:`dipeptid-ko’k, tripeptid-binafsha, yuqori peptid-qizil rang beradi`,B:`tripeptid-ko’k, dipeptid-binafsha, yuqori peptid-qizil rang beradi`,C:`yuqori peptid-ko’k, tripeptid-binafsha, dipeptid-qizil rang beradi`,D:`dipeptid-ko’k, yuqori peptid-binafsha, tripeptid-qizil rang beradi`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`0,4 litr 24,5% sulfat kislota eritmasiga (zichligi 1,25 g/ml ) hajmi 2m³ bo’lguncha suv quyilib suyultirildi.
Hosil bo’lgan eritmaning pOH qiymatini toping.`,variantlar:{A:`3`,B:`3,5`,C:`11`,D:`11,5`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`Hajmi 10 litr bo’lgan idishda CO₂ va 4 mol H₂ dan iborat aralashma reaksiyaga kirishdi. (CO₂ + H₂ → CO + H₂O).
72 sekund vaqt o’tgach muvozanat qaror topdi. Reaksiya tezligi 0,25 mol/l*min ga teng. Dastlabki CO₂ ning miqdorini (mol) aniqlang. (K_M=1).`,variantlar:{A:`1,2`,B:`0,9`,C:`9`,D:`12`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`CO₂ va CH₃NH₂ dan iborat 7 litr aralashma 5litr HBr bilan reaksiyaga kirishdi. Reaksiyadan so’ng vodorodga nisbatan zichligi 29,4ga teng bo’lgan 2ta gazdan iborat gazlar aralashmasi hosil bo’ldi.
Dastlabki aralashmadagi CO₂ ning hajmini aniqlang.`,variantlar:{A:`4`,B:`6`,C:`5`,D:`3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:`Quyidagi sxema bo’yicha barcha reaksiyalar 100% unum bilan borgan.
Fe →(+2H₃PO₄) X₁ →(+Fe) X₂ →(Fe) X₃
Hosil bo’lgan X₃ moddaning massasini (g) toping.`,variantlar:{A:`25,8`,B:`30,4`,C:`35,8`,D:`71,6`},javob:`C`,tushmagan:!1,nuqson:`sxemada «+2H₃PO₄» koeffitsiyent sifatida yozilgan, miqdor ko‘rsatilmagan; kalit 0,2 mol H₃PO₄ ga mos`,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:`Ushbu qatorda kislotalik kuchi, barqarorlik va oksidlovchilik qanday o’zgaradi. (berilgan tartibda)
HClO, HClO₂ , HClO₃ , HClO₄ .`,variantlar:{A:`ortadi, ortadi, kamayadi`,B:`kamayadi, kamayadi, ortadi`,C:`kamayadi, ortadi, kamayadi`,D:`ortadi, ortadi, ortadi`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:33,ball:null,turi:`tanlov`,shart:`Reaksiyaning chap tomonidagi koeffitsientlar yig‘indisini toping.`,variantlar:null,javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:null,turi:`tanlov`,shart:`Reaksiyani qisqa ionli tenglamasidagi ionlar oldidagi koeffitsienlar yig’indisini aniqlang.`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:null,turi:`tanlov`,shart:`0,8 mol Al reaksiyaga kirishgan bo‘lsa hosil bo‘lgan suvning massasi`,variantlar:null,javob:`E`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`10,16 g noma’lum metalmas oksidi 110,4 g 10 % li NaOH eritmasi bilan ta’sirlashdi. Natijada 12,5% foizli o‘rta tuz eritmasi olindi. Hosil bo‘lgan eritmadan necha gramm suv bug‘latilsa NaOH konsentratsiyasi dastlabkiga nisbatan 2,5 marta ortadi.`,bandlar:[{band:``,savol:``,javob:`102`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`9,8 g NH₄Br va 5% CaBr₂ lar bo’lgan eritma tarkibida brom va kislorod atomlarining massa nisbati 0,9 : 7,9 bo’lsa, eritma massasini (g) aniqlang.`,bandlar:[{band:``,savol:``,javob:`160`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`74,4 g Noma’lum metal kristalagidrati yopiq idishda qizdirildi. Natijada rangsiz 12 mol/l li 25 ml aralashma olindi. Kristalagidratning tarkibida 64 g oltingugurt va 128 g kislorod mavjud . Metalning moli oltingugurtning moliga teng bo‘lsa, kristalagidratni aniqlang`,bandlar:[{band:``,savol:``,javob:`Na₂S₂O₃·5H₂O`,birlik:`matn`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`6 mol propenning x qismi gidrogenlanganda gibridlangan orbitalar miqdori 18,06·10²³ taga ortdi. Ortib qolgan qismi kislorod ta’sirida yondirilsa hosil bo‘lgan CO₂ miqdorini (mol ) aniqlang`,bandlar:[{band:``,savol:``,javob:`13,5`,birlik:`mol`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`180°C da 15,9 g ikkita bir asosli spirtlar H₂SO₄ ta’sirida qizdirildi. Natijada hosil bo‘lgan organik gazlar miqdori 0,3 mol. Hosil bo‘lgan organik gazlar KMnO₄ ning suvdagi eritmasi orqali o‘tqazilga hosil bo‘lgan moddalarning birida shu sinfga oid 6 ta izomeri mavjud.
Molyar massasi katta bo‘lgan spirtning massasini aniqlang.`,bandlar:[{band:``,savol:``,javob:`5,55`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:`X + Y + KOH → K₂CrO₄ + KCl + H₂O
Z + D + KOH →(qizdirildi) K₂CrO₄ + KCl + H₂O
X va D moddalari o’rta tuz X va Z moddalari tarkibidagi metallning valentliklari bir xil. Birinchi reaksiyadagi moddalarning koeffitsientini k₁, ikkinchi reaksiyadagi koeffitsientlari k₂ deb belgilab quyidagi ma’lumotlar keltirilgan.
k₁(K₂CrO₄) = k₂(K₂CrO₄) = k₂(H₂O)
k₁(KOH) + k₁(H₂O) = 18
1 + k₁(Y) = 2k₂(KOH)
k₂(D) = k₂(KCl) = 1
k₁(KOH) − k₂(KOH) = k₁(H₂O) − k₂(H₂O)
2k₂(D) = k₁(X₁)`,bandlar:[{band:`1`,savol:`X,Y,Z,D moddalarni aniqlang`,javob:`X – CrCl₃; Y – H₂O₂; Z – Cr₂O₃; D – KClO₃`,birlik:`matn`,ball:3.6},{band:`2`,savol:`0.5 mol Y modda kaliy permanganatning sulfat kislotadagi eritmasida eritilsa qancha gramm sulfat tuzlari hosil bo‘ladi.`,javob:`47,6`,birlik:`g`,ball:1.4},{band:`3`,savol:`0.4 mol D modda parchalansa( katalizatorsiz) hosil bo‘lgan qattiq moddalar massa farqini aniqlang`,javob:`34,1`,birlik:`g`,ball:1}],tushmagan:!1,nuqson:`«1 + k₁(Y) = 2k₂(KOH)» sharti sonlarga mos kelmaydi (1 + 3 = 4, 2·4 = 8); 2·k₂(K₂CrO₄) bo‘lsa to‘g‘ri — terish xatosi. Oxirgi shartda «k₁(X₁)» — k₁(X) nazarda tutilgan; band ballari md mezonidagi oraliq qadamlar bilan yig‘ilgan`,rasm:{bet:37,izoh:`41-topshiriqning tenglamalari va koeffitsiyent shartlari rasm (skrinshot) ko‘rinishida berilgan — shartda matn bilan ko‘chirildi`}},{raqam:42,ball:6,turi:`yozma`,shart:`Reaksiyalarni davom ettiring va tenglashtiring.1,2,4 reaksiyadan hosil bo‘lgan moddalarni sistematik nomenklatura bo‘yicha nomlang.6- reaksiyada yozma ko‘rinishda yozilgan moddalarni formulasi bilan yozing.`,bandlar:[{band:`1`,savol:`1,3-dimetilsiklobutan (siklobutan halqasi, ikkita CH₃ diagonal) + H₂ →(t, P)`,javob:`CH₃–CH₂–CH(CH₃)–CH₃ (2-metilbutan)`,birlik:`matn`,ball:1},{band:`2`,savol:`HC ≡ C–CH₂–CH₂–CH₂–CH₃ + KMnO₄ + H₂SO₄ =`,javob:`5HC≡C–C₄H₉ + 8KMnO₄ + 12H₂SO₄ → 5C₄H₉COOH (pentan kislota) + 5CO₂↑ + 8MnSO₄ + 4K₂SO₄ + 12H₂O`,birlik:`matn`,ball:1.3},{band:`3`,savol:`CH₃–CH₂–CH₂–OH →(t=450°C, H₂SO₄)`,javob:`CH₃–CH=CH₂ (propen) + H₂O`,birlik:`matn`,ball:.6},{band:`4`,savol:`C₆H₅OH (fenol) + 3HNO₃ =`,javob:`2,4,6-trinitrofenol (pikrin kislota) + 3H₂O`,birlik:`matn`,ball:1},{band:`5`,savol:`HCOOH+[Ag(NH₃)₂OH]=`,javob:`HCOOH + 2[Ag(NH₃)₂]OH → (NH₄)₂CO₃ + 2Ag↓ + 2NH₃ + H₂O`,birlik:`matn`,ball:.8},{band:`6`,savol:`Propil etanoat + NaOH=`,javob:`CH₃COOC₃H₇ + NaOH → CH₃COONa + C₃H₇OH`,birlik:`matn`,ball:.7},{band:`7`,savol:`HOOC-CH(Cl)CH₂CH₂CH₂-COOH + 2NH₃ =`,javob:`HOOC–CH(NH₂)–CH₂CH₂CH₂–COOH + NH₄Cl`,birlik:`matn`,ball:.6}],tushmagan:!1,nuqson:`1-reaksiya: PDF da ikkita CH₃ li siklobutan (1,3-dimetilsiklobutan) chizilgan, md esa metilsiklobutan deb 2-metilbutan javobini bergan — mos emas; PDF bo‘yicha mahsulot C₆H₁₄ (2-metilpentan)`,rasm:{bet:38,izoh:`1-reaksiyada 1,3-dimetilsiklobutan, 4-reaksiyada fenol (benzol halqasi, OH) grafik formula bilan berilgan`}},{raqam:43,ball:6,turi:`yozma`,shart:`A va B moddalar Y elementning suvda erimaydigan binar birikmalari. Va ikkala modda tarkibida metal massa ulushlari teng.
A + H₂SO₄(kons) → X₁...
A + H₂SO₄ ( suy) → X₂...
B + H₂SO₄ kons → X₃...
B + HCl(kons) → X₄…
A + HNO₃(kons) → X₅…
X₁ bn X₂ reaksiyaga kirishmaydi lekin X₃ va X₄ lar ma’lum sharoitda reaksiyaga kirishadi. Y metallning hosil bo‘lgan barcha tuzi ikki valentlik suvda yaxshi eriydi`,bandlar:[{band:`1`,savol:`X₁ ,X₂,X₃,X₄ gazlarni toping`,javob:`X₁ – SO₂; X₂ – H₂; X₃ – SO₂; X₄ – H₂S`,birlik:`matn`,ball:2.5},{band:`2`,savol:`X₁va X₃ reaksiyasi X₂va X₄ reaksiyasini yozing.`,javob:`SO₂ + 2H₂S → 3S↓ + 2H₂O; H₂ va H₂S o‘zaro reaksiyaga kirishmaydi`,birlik:`matn`,ball:1.2},{band:`3`,savol:`X₅ qo‘ng‘ir rangli gaz X₁ bilan qaytar reaksiyaga kirishadi shu reaksiyani yozing.`,javob:`SO₂ + NO₂ ⇄ SO₃ + NO`,birlik:`matn`,ball:2.3}],tushmagan:!1,nuqson:`md izohi: A va B ni shart bo‘yicha bir qiymatli aniqlab bo‘lmaydi (metall massa ulushi tengligi sharti); faqat gazlar va reaksiyalar qismi tavsiya etiladi. 2-bandda PDF «X₁ va X₃» so‘raydi (ikkalasi SO₂), md esa X₃ + X₄ reaksiyasini yozgan; X₂ = H₂ (yoki PH₃). Band ballari md mezonidan taxminiy taqsimlangan`,rasm:null}]},Ke={variant:`10`,nom:`Sertifikat 03.05.2025 I smena`,betlar:`39–42`,umumiy:[{raqamlar:[33,34,35],shart:"0,8 mol Natriy, kaliy va kalsiy suv bilan reaksiyaga kirishib 11.2 litr(n.sh da) gaz ajraldi. Kaliy bilan natriyning boshlang`ich massalari yig`indisi 17 g.",variantlar:{A:`32`,B:`20`,C:`16`,D:`11.6`,E:`5.8`,F:`24`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:"To`g`ri javobni aniqlang.",variantlar:{A:`1 moldan olingan Silan va metanning massalari teng.`,B:`fosforni allatropik shakli mavjud emas.`,C:`2 kg Hg ning hajmi etanolning 2 kg hajmidan kam.`,D:`Suvning 22,4 litri n.sh.da 18 g keladi.`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:null,turi:`tanlov`,shart:`Fe ning izotopida neytronlar soni barcha zarrachalarning 8/21 qismini tashkil etadi. Huddi shunday neytronlarga ega nikelning molyar massasini aniqlang.`,variantlar:{A:`60`,B:`57`,C:`58`,D:`59`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`Gund qoidasini aniqlang.`,variantlar:{A:"atomda elektronlar spinlar yig`indisi maksimallikga intiladi.",B:"Atomda elektron spinlar yig`indisi minimallikga intiladi.",C:"Energetik pog`onachalarning elektron bilan to`lib borish tartibi",D:"To`rttala kvant soni bir xil bo`lgan ikkita elektron bo`lishi mumkin emas."},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:"ˣ₉₂U + ¹⁴₇N → y ¹₀n + ²⁴⁶₉₉Es. Agar (x+14)/y = 42 bo`lsa, x ni toping.",variantlar:{A:`238`,B:`240`,C:`236`,D:`242`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:null,turi:`tanlov`,shart:`2 xil anion hosil qiladigan moddani aniqlang.`,variantlar:{A:`H₂SO₄`,B:`NaKSO₄`,C:`Ba(OH)₂`,D:`LiOH`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:"σ - va π - bog`lar soni yig`indisi qanday o`zgaradi?\nHCN →(1) SiH₄ →(2) C₂H₂ →(3) H₂S",variantlar:{A:`1-ortadi; 2-kamayadi; 3-kamayadi`,B:"1-o`zgarmaydi; 2-kamayadi; 3-kamayadi",C:"1-o`zgarmaydi; 2-ortadi; 3-kamayadi",D:"1-ortadi; 2-o`zgarmaydi; 3-kamayadi."},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:null,turi:`tanlov`,shart:`Asosli oksid hosil qiladigan reaksiyani aniqlang.`,variantlar:{A:`ZnO + C →`,B:`C + O₂ →`,C:`Li + O₂ →`,D:`Al + O₂ →`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`NO + O₂ ⇄ NO₂ reaksiyada bosim 8 marta ortib temperatura 60° gradusga kamaysa reaksiya tezligi qanday o’zgaradi. (γ=2)`,variantlar:{A:`64 marta ortadi`,B:`8 marta ortadi`,C:`8 marta kamayadi`,D:`64 marta kamayadi`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`A + 3B → 2C muvozanat holatida A modda 4 mol B modda 1 mol va C modda 2 mol (idish hajmi 1litr) bo'lsa qaysilar to'gri?
1) Dastlab A modda 4 mol B modda esa 5 mol bo\`lgan.
2) K_M = 1
3) A ning 1/5 moli sarflanganda muvozanat qaror topgan.`,variantlar:{A:`2, 3`,B:`1, 2, 3`,C:`1, 3`,D:`1, 2`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`Suyuq yogʻlar hosil qilishda ishtirok etadigan kislotalarni belgilang.`,variantlar:{A:`Palmitin, linol, linolen`,B:`olein, linol, linolein`,C:`palmitin, linolen, olein`,D:`palmitin, linolen, stearin`},javob:`B`,tushmagan:!1,nuqson:`PDF dagi B variantida «linolein» deb yozilgan (md da «linolen»).`,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`0,5 mol metal gidridi 47 g suvda eritilganda 24% eritma hosil boʻldi. 8 gramm ishqoriy metall gidridi 54 gramm suvda eritilganda necha foizli eritma hosil boʻladi`,variantlar:{A:`30%`,B:`40%`,C:`50%`,D:`60%`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`Shakarqamish tarkibida 22% saxoraza bor. 1 tonna shakarqamishdan 187 g saxaroza olindi. Reaksiya unumini toping?`,variantlar:{A:`0,65`,B:`0,75`,C:`0,8`,D:`0,85`},javob:`D`,tushmagan:!1,nuqson:`Shartda birlik xatosi: «187 g» o'rniga 187 kg bo'lishi kerak (md izohi).`,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:"0,1 mol Fe(NO₃)₃ va 200 ml 2 M NaOH reaksiyasi natijasida hosil bo`lgan eritmada necha mol ion bo`ladi?",variantlar:{A:`0,6`,B:`0,7`,C:`0,8`,D:`1`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:"10 litr (n.sh.) havoda 1:4 nisbatda O₂ va N₂ nisbatda bo`lgan aralashmaga 4 litr (n.sh.) CO qo`shildi va portlatildi. Hosil bo`lgan aralashma NaOH eritmasiga yuttirilganda hajm dastlabki hajmga nisbatan necha foizga kamayadi.",variantlar:{A:`100/2`,B:`100/3`,C:`200/3`,D:`200/7`},javob:`D`,tushmagan:!1,nuqson:`Savol ikki xil o'qiladi: dastlabki hajm 14 l olinsa D (200/7), portlashdan keyingi 12 l olinsa B (100/3) (md izohi).`,rasm:null},{raqam:15,ball:null,turi:`tanlov`,shart:`Alkanning yonishidan hosil bo’lgan suvning massasi alkanning massasidan 1.5marta ko’p. Nomalum alkanni aniqlang`,variantlar:{A:`C₂H₆`,B:`C₃H₈`,C:`C₄H₁₀`,D:`C₅H₁₂`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:null,turi:`tanlov`,shart:`24,5 g ortofosfat kislota bilan 55,5 g metall gidroksidi reaksiyaga kirishdi. Natijada (MeOH)₃PO₄ va x g suv hosil bo‘ldi. x ni aniqlang.`,variantlar:{A:`13,5`,B:`18`,C:`27`,D:`36`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`Neftdan 20% unum bilan benzin hamda 55% unum bilan mazut olinadi mazutdan 60% unum bilan benzin olinsa, 200kg neftdan olingan A-80 markali benzindagi izooktan massasini aniqlang.`,variantlar:{A:`110`,B:`120`,C:`84.8`,D:`150`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`Xrom (III) gidroksid molyar massasiga teng nitrobirikma da 0,8 mol sp³ gibridlangan atom bor. Nitrobirikmaga izomer boʻlgan aminokislotada nechta sp³ orbitallar bor?`,variantlar:{A:`3.2N_A`,B:`0.8N_A`,C:`4N_A`,D:`2N_A`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:"Umumiy formulasi CₙH₂ₙ₊₂O₂ bo`lgan A,B,C moddalar mavjud. A va B moddalar Na metali bilan tasirlashadi. A va B moddalar Cu(OH)₂ bilan ta’sirlashsa ko’k rangli eritma hosil bo`ladi. C modda esa Na va Cu(OH)₂ bilan reaksiyaga kirishmaydi. C moddani toping?",variantlar:{A:`CH₂(OCH₃)-CH₂(OCH₃)`,B:`CH₂(OH)-CH₂(OH)`,C:`CH₃ – CH(OCH₂CH₃)-COOCH₃`,D:`CH₃ – O – CH₂ – OH`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`Bodringni tuzlash uchun 1 litr suvga 40g osh tuzi va 20g shakar solinadi. 5 litr (p=1g/ml) eritmasida tuzning massa ulushini (%) toping`,variantlar:{A:`20/53`,B:`200/53`,C:`10/52`,D:`100/52`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:"Polietilen molekulasi uzunligi 616 nm, l(C-C)=0.154nm bo`lsa polietilen molekulasi massasini toping?",variantlar:{A:`56000`,B:`28000`,C:`5600`,D:`2800`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:22,ball:null,turi:`tanlov`,shart:`Suvda eriydigan asos hosil qiluvchi elementlarni toping
K Fe Cs Cr Mg Na Li Cu Zn Ba Al`,variantlar:{A:`3`,B:`4`,C:`5`,D:`6`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`Fenol qaysi moddalar bilan kirishsa quyidagi holatlar kuzatiladi. Moddalarni javobda ketma-ketlikda belgilang.
C₆H₅OH:
1) qaysi modda bilan kirishsa H₂ ajraladi
2) oq cho\`kma hosil bo\`ladi
3) sariq cho\`kma hosil bo\`ladi
4) binafsha rang kompleks hosil bo\`ladi.`,variantlar:{A:`Na, Br₂, HNO₃, FeCl₃`,B:`NaOH, Br₂, HNO₃, FeCl₃`,C:`Na, HNO₃, Br₂, FeCl₃`,D:`NaOH, HNO₃, Br₂, FeCl₃`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:"C₃H₄ → C₃H₆O → C₃H₇OH → CH₃COOC₃H₇. Shu jarayonda boshlangʻich va oxirgi moddalar massa farqi 7.52 gramm. Umumiy reaksiya unumi 30% bo`lsa, propinnning molini toping.",variantlar:{A:`0,8`,B:`1`,C:`0,4`,D:`0,6`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`C₄H₁₀ + 6,5O₂ → 4CO₂ + 5H₂O + 2610 kJ. Agar shu jarayonda 652,5 issiqlik ajralib chiqdi, hosil bo’lgan korbanat angidrid tarkibidagi uglerod atomlari sonini toping.`,variantlar:{A:`0,602·10²³`,B:`6,02·10²³`,C:`9,03·10²³`,D:`12,04·10²³`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:null,turi:`tanlov`,shart:"3XH₃ + YH₄ aralashmasining o`rtacha massasi 29,5g/mol. 2XH₃ + YH₄ aralashmasida esa vodorodning massa ulushi 5/42 bo`lsa X ni aniqlang.",variantlar:{A:`N`,B:`P`,C:`B`,D:`As`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:null,turi:`tanlov`,shart:"Sariq rangli A modda yondirilganda B modda hosil bo`ldi. B moddani C mineralini kuydirish orqali ham hosil qilsa bo`ladi. D modda C modda bilan elementlar tarkibi bir xil, lekin foizlari har xil. D modda HCl bilan reaksiyaga kirishganda palag`da tuxum hidli gaz hosil bo`ladi. Shu eritmaga qizil qon tuzi qo`shilsa turnbul ko`ki hosil bo`ladi. C moddani toping.",variantlar:{A:`FeS₂`,B:`ZnS`,C:`MgCl₂`,D:`FeS`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:"x mol Na₂CO₃ suvda eritildi. Hosil bo`lgan eritmada 1,02 gramm OH⁻ ioni va 0,51 mol CO₃²⁻ anioni bor. natriy korbanatdagi dissotsiyalanmagan zarrachalar 5% ni tashkil qiladi. x topilsin. (Gidroliz 1 bosqichda bordi deb hisobga oling.)",variantlar:{A:`0.6`,B:`0.57`,C:`0.2`,D:`0.5`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`Quyidagi berilgan reaksiya tenglamasi orqali X zarrachani aniqlang.
2X + 16H⁺ + 14Cl⁻ = 2MnCl₂ + 5Cl₂ + 8H₂O`,variantlar:{A:`MnO₄²⁻`,B:`MnO₄⁻`,C:`MnO₂`,D:`Mn₂O₃`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:"To`g`ri fikrlar sonini toping.\n1) Laktoza piranoza shaklidagi β-gallaktoza va fruktoza qoldiqlaridan tashkil topgan bo`lib, ular o`zaro (1→4)-glikozid bog‘ orqali ulanadi.\n2) Saxaroza aldegid xususiyatini nomoyon qiladi.\n3) Disaxaridlar mineral kislota bilan fermentlar ta`sirida gidrolizlanib, monosaxaridlar hosil qiladi\n4) Selluloza hujayra devorini asosini tashkil qiladi.",variantlar:{A:`1`,B:`2`,C:`3`,D:`4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:"CₙH₂ₙCl₂ Ikki xil o`zaro izomer dixlor alkanlarning umumiy massasi 38,1 g bo`lib, mol nisbati 1:5. 1-izomer va 2-izomer gidrolizlanganda CₙH₂ₙO hosil bo`ldi. 1-izomerdan hosil bo`lgan CₙH₂ₙO ga H₂ qo`shilganda 3,7 g birlamchi spirt(X), 2-izomerdan hosil bo`lgan CₙH₂ₙO ga H₂ qo`shilganda 18,5 g ikkilamchi spirt(Y) hosil bo`ldi. X ni ikkilamchi uglerodi yo`q. Y ning ikkilamchi uglerodi bor. Birlamchi spirtni hosil qilgan dastlabki dixloralkanni nomini toping.",variantlar:{A:`2-metil-1,1-dixlorpropan`,B:`1,1-dixlorbutan`,C:`2,2-dixlorbutan`,D:`2,2-dixlorpropan`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:"91,25 g 20% li HCl kislota eritmasiga marmar bo`lakchalari tashlandi. Hosil bo`lgan eritma ajratib olindi. Hosil bo`lgan eritmaga 207 g 20% li K₂CO₃ eritmasi qo`shildi. Hosil bo`lgan cho`kmani molini toping.",variantlar:{A:`0,3`,B:`0,25`,C:`1`,D:`0,5`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:33,ball:null,turi:`tanlov`,shart:`Natriy gidroksid massasini toping.`,variantlar:null,javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:null,turi:`tanlov`,shart:"Boshlang`ich aralashmadagi kalsiyning massa ulushini (%) toping.",variantlar:null,javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:null,turi:`tanlov`,shart:`Kaliyning suv bilan reaksiyasidan ajralgan vodorod necha gramm atsetonni qaytarishga yetadi?`,variantlar:null,javob:`E`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`Ikkala reaksiyada 2.2 moldan gaz hosil bo'lgan bo'lsa reaksiyada qatnashgan kislotalarning massa farqini aniqlang.
Cu₃N + HNO₃(suyul) = NO + Cu(NO₃)₂ + H₂O
Cu₃N + HNO₃(kons) = NO₂ + Cu(NO₃)₂ + H₂O`,bandlar:[{band:``,savol:``,javob:`126`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`PDF da javob qatorida javob ochiq berilgan: «(126g)».`,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`Tuz eritmasiga, eritmadagi tuz massasidan 20 g kam bo‘lgan miqdorda tuz qo‘shildi va natijada 25 % li eritma hosil bo‘ldi. Agar eritmadagi suv massasidan 20 g kam bo‘lgan miqdorda tuz qo‘shilsa, 52 % li eritma hosil bo‘ladi. Boshlang‘ich eritmaning foiz konsentratsiyasini aniqlang.`,bandlar:[{band:``,savol:``,javob:`20`,birlik:`%`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:"1,76 g temir sulfidi mo`l miqdorda kislorodda yoqildi. Hosil bo`lgan qattiq qoldiq 35% lik sulfat kislota eritmasida eritildi. Natijada 40% li to`yingan tuz eritmasi hosil bo`ldi. Hosil bo`lgan eritma sovutilganda 2,0 g kristallogidrat cho`kmaga tushdi, eritmada esa 2 g tuz qoldi. Kristallogidrat formulasini aniqlang.",bandlar:[{band:``,savol:``,javob:`Fe₂(SO₄)₃`,birlik:`matn`,ball:3.2}],tushmagan:!1,nuqson:`Shart ziddiyatli: 2,0 g kristallogidrat + 2 g tuz bo'lsa kristallogidratda suv qolmaydi; formulani aniqlab bo'lmaydi. Md: cho'kmani 2,81 g ga tuzatsa Fe₂(SO₄)₃·9H₂O chiqadi.`,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:"80 ml C₂H₄, C₃H₆ va C₄H₁₀ aralashmasi 830ml O₂ bilan yondirildi. Ortib qolgan O₂ ajralib chiqqan CO₂ gazidan 1.5marta koʻp. Dastlab C₂H₄ va C₃H₆ lar 1:3 nisbatda olingan bo`lsa, ortib qolgan O₂ ni hajmini (ml) toping.",bandlar:[{band:``,savol:``,javob:`405`,birlik:`ml`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:"3.88 g Chumoli va sirka aldegid aralashmasi kumush oksidining ammiakli eritmasidan oʻtkazildi. Choʻkma ajratib olinib nitrat kislotada eritildi. Natijada 0,44 mol qoʻngʻir gaz ajralib chiqdi. Hosil bo`lgan sirka kislotaning massasini(g) aniqlang.",bandlar:[{band:``,savol:``,javob:`1,2`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:"63.2 gramm FeO. Fe₂O₃ va CuO lar aralashmasi koks yordamida qaytarildi. Natijada 47.2 gram metallar aralashmasi olindi. Reaksiyada hosil bólgan CO x litr rektorga solindi va unga O₂ qo`shildi. Bu aralashmada kislorodning konsentratsiyasi 3 mol/l edi.. Ushbu aralashmada 2 daqiqadan keyin muvozanat qaror topdi. Muvozanatdagi sistemada kislorod va CO₂ konsentratsiyalari teng. (K_M=0.5). Hosil bo`lgan CO₂ ga CaCO₃ suspenziyasi qóshilib eritma 2000 ml gacha suyultirildi.",bandlar:[{band:`1`,savol:`Dastlabki oksidlar aralashmasi konsentrlangan HNO₃ kislotada eritilganda 0.6 mol qong'ir gaz hosil bólgan bólsa, oksidlar molini hisoblang`,javob:``,birlik:`matn`,ball:null},{band:`2`,savol:`x ni toping`,javob:`0,25`,birlik:`l`,ball:null},{band:`3`,savol:"To`g`ri reaksiya tezlik konstantasini toping. Agar to`g`ri reaksiyaning tezligi CO ga nisbatan reaksiyaning o`rtacha tezligidan 2 marta katta bo`lsa.",javob:`0,25`,birlik:``,ball:null},{band:`4`,savol:`Hosil bólgan eritmaning molyar konsentratsini aniqlang.`,javob:`0,25`,birlik:`mol/l`,ball:null}],tushmagan:!1,nuqson:`1-band: berilgan sonlar (63,2 g, 47,2 g, 0,6 mol NO₂) o'zaro mos emas — CuO miqdori manfiy chiqadi, kalit yo'q.`,rasm:null},{raqam:42,ball:6,turi:`yozma`,shart:`A →(termik kreking, 500–600 °C) CH₄ + B
CH₄ →(+3Cl₂, −3HCl) C →(+NaOH, suvli eritma) D →(Ca(OH)₂) E →(piroliz) F →(Ca(OH)₂, t) G
B →(C₆H₆, t°) H →(KMnO₄, H₂SO₄) I
· F moddadan G moddani aniqlashni A.M.Butlerov kashf etgan.
· D va I bir xil funksional guruh tutadi.
· A oksidlanganda hosil bo’lgan CO₂ moli I moddadan hosil bo’lgan CO₂ molidan 1.75 marta kam.`,bandlar:[{band:`1`,savol:`Barcha reaksiya tenglamalarini yozing`,javob:`C₄H₁₀ →(t) CH₄ + C₃H₆; CH₄ + 3Cl₂ → CHCl₃ + 3HCl; CHCl₃ + 4NaOH → HCOONa + 3NaCl + 2H₂O (so'ng HCOOH); 2HCOOH + Ca(OH)₂ → (HCOO)₂Ca + 2H₂O; (HCOO)₂Ca →(t) HCHO + CaCO₃; 6HCHO →(Ca(OH)₂) C₆H₁₂O₆; C₆H₆ + C₃H₆ → C₆H₅CH(CH₃)₂; 5C₆H₅CH(CH₃)₂ + 18KMnO₄ + 27H₂SO₄ → 5C₆H₅COOH + 10CO₂ + 18MnSO₄ + 9K₂SO₄ + 42H₂O`,birlik:`matn`,ball:null},{band:`2`,savol:`A, B, C, D, E, F, G, H, I ning struktura formulalarini yozing.`,javob:`A — C₄H₁₀; B — C₃H₆; C — CHCl₃; D — HCOOH; E — (HCOO)₂Ca; F — HCHO; G — C₆H₁₂O₆; H — C₆H₅CH(CH₃)₂; I — C₆H₅COOH`,birlik:`matn`,ball:null},{band:`3`,savol:`A, B, C, D, F, H, I moddalarning [Ag(NH₃)₂]OH bilan reaksiya tenglamalarini yozing.`,javob:`D: HCOOH + 2[Ag(NH₃)₂]OH → (NH₄)₂CO₃ + 2Ag↓ + 2NH₃ + H₂O; F: HCHO + 4[Ag(NH₃)₂]OH → (NH₄)₂CO₃ + 4Ag↓ + 6NH₃ + 2H₂O; I: C₆H₅COOH + [Ag(NH₃)₂]OH → C₆H₅COONH₄ + … (kislota-asos, ko'zgu bermaydi); A, B, C, H reaksiyaga kirishmaydi`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:null,rasm:null},{raqam:43,ball:6,turi:`yozma`,shart:"Fe(NO₃)₂ va Cu dan iborat 556.8gr ochiq havoda qizdirildi va olingan metall oksidlari massasi 556.8 g bo`ldi. Metall oksidlari nitrat kislataning x litr 40%li (1.26g/ml) eritmasida eritildi (lekin gaz ajralmadi). Dastlabki Cu miqdoriga teng Cu qoʻshilgach, kislota tugadi va jarayonda NO gazi ajraldi. Hosil bo`lgan eritmaga kaliy xromat qo`shilganda mis ionlari to`la cho`kdi.",bandlar:[{band:`1`,savol:`x ni toping.`,javob:`3,86`,birlik:`l`,ball:null},{band:`2`,savol:"Eritmadagi mis ionini to`liq cho`ktirish uchun qancha (g) kaliy xramat sarflandi",javob:`2328`,birlik:`g`,ball:null},{band:`3`,savol:`Fe³⁺ inonini choʻktirish uchun qancha (mol) Na₃PO₄ sarflanadi.`,javob:`0,96`,birlik:`mol`,ball:null},{band:`4`,savol:`Reaksiya tenglamalarini yozing`,javob:`4Fe(NO₃)₂ → 2Fe₂O₃ + 8NO₂ + O₂; 2Cu + O₂ → 2CuO; Fe₂O₃ + 6HNO₃ → 2Fe(NO₃)₃ + 3H₂O; CuO + 2HNO₃ → Cu(NO₃)₂ + H₂O; 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O; Cu(NO₃)₂ + K₂CrO₄ → CuCrO₄↓ + 2KNO₃; Fe(NO₃)₃ + Na₃PO₄ → FePO₄↓ + 3NaNO₃`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:null,rasm:null}]},qe={variant:`11`,nom:`Sertifikat 03.05.2025 II smena`,betlar:`43–48`,umumiy:[{raqamlar:[33,34,35],shart:`Mol nisbati 1 : 3 bo’lgan ishqoriy metall gidridlaridan (AH va BH) iborat 44,8 g aralashma mo’l miqdordagi suvda eritilsa 1,6 mol gaz ajraldi.`,variantlar:{A:`0,2`,B:`0,7`,C:`0,5`,D:`0,6`,E:`0,4`,F:`0,3`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`To’g’ri fikrni toping.`,variantlar:{A:`natriy gidrokarbonatda donor akseptor bog’ bor`,B:`silanda metal atomi bor`,C:`metanda qutubli kovalent bog’ bor`,D:`fosfinda 2 ta atom bor`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:null,turi:`tanlov`,shart:`42,55 g KNO₃ va KClO₃ katalizator ishtirokida qizdirildi. Hosil bo’lgan gaz ozonatrdan o’tkazildi. Olingan modda KI eritmasi bilan reaksiyaga kirishdi. Olingan oddiy moddalar massa farqi 44,4 g bo’lsa. Dastlabki aralashmadagi KNO₃ molini aniqlang.`,variantlar:{A:`0,1`,B:`0,3`,C:`0,2`,D:`0,25`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`1:9 mol nisbatda olingan A₂ va B₂ dan iborat aralashma reaksiyaga kirishganda yagona modda hosil bo’lgan. Reaksiyadan keyin bosim dastlabki bosimning 60% ni tashkil qiladi. Reaksiyadan hosil bo’lgan moddaning formulasini ko’rsating.`,variantlar:{A:`AB₃`,B:`AB₅`,C:`A₂B₆`,D:`A₃B`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`130 g tripropionglitserati gidrolizlanganda hosil bo’lgan kislota massasini aniqlang.`,variantlar:{A:`55,5`,B:`333`,C:`111`,D:`222`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:null,turi:`tanlov`,shart:`Klechkovskiy qoidasi keltirilgan qatorni belgilang.`,variantlar:{A:`energiyalari bir xil bo’lgan orbitallar (yachekalar)da elektronlar shunday tartibda joylashadiki, natijada spinlar yig’indisi maksimal qiymatga ega bo’ladi;`,B:`atomda energetik holatlarning elektronlar bilan to’lib borish tartibi atomning bosh va orbital kvant sonlari yig’indisining minimal qiymatli bo’lishi uchun intilishiga bog’liq;`,C:`atomda to’rttala kvant sonlari bir xil qiymatga ega bo’lgan elektronlar mavjud bo’la olmaydi;`,D:`agar ikki element bir-biri bilan bir necha kimyoviy birikma hosil qilsa, bu birikmalardagi bir element massasiga to’g’ri keluvchi boshqa element massalari o’zaro kichik butun sonlar nisbatida bo’ladi.`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`Kaliy nitrat tuzi termik parchalanganda azotning oksidlanish darajasi necha birlikka o’zgaradi.`,variantlar:{A:`2`,B:`3`,C:`5`,D:`4`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:null,turi:`tanlov`,shart:`sp³ va sp² orbitallari 4:3 bo’lgan alken KMnO₄ ning suvli eritmasidan o’tkazildi. Bunda eritmadagi suv massasi 7,2 g ga kamaydi. Alken massasini toping.`,variantlar:{A:`7`,B:`4,2`,C:`11,2`,D:`16,8`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`1,1 mol fosfin va silan aralashmasida vodorod atomlari soni 3,6·N_A ta bo’lsa, aralashmadagi silan massasini hisoblang.`,variantlar:{A:`3,2`,B:`9,6`,C:`27,2`,D:`12,8`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`0,2 mol alkanni yoqish uchun sarflangan kislorod massasi shu alkanning massasidan 9,6 grammga ko’p bo’lsa alkanni aniqlang.`,variantlar:{A:`etan`,B:`metan`,C:`propan`,D:`butan`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`A + 2B → C + D
Ushbu reaksiya bo’yicha A moddaning sarflanish tezligi 0,015 mol/l·s va B moddaning dastlabki konsentratsiyasi 0,45 mol/l bo’lsa. 10 sekunddan keyin B moddaning konsentratsiyasini toping. (V = 2 litr)`,variantlar:{A:`0,3`,B:`0,15`,C:`0,2`,D:`0,25`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`Tez sodir bo’ladigan reaksiyani aniqlang.`,variantlar:{A:`N₂ + H₂ →`,B:`K + H₂O →`,C:`C₂H₄ + H₂ →`,D:`SO₂ + H₂S →`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`200 g 10%li NaOH eritmasiga yetarli miqdorda 18,25%li xlorid kislota eritmasi qo’shilganda necha g NaCl cho’kmaga tushadi. S(NaCl)=10`,variantlar:{A:`2,175`,B:`1,275`,C:`3,125`,D:`2,715`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:`Kislotali oksidlarni aniqlang.`,variantlar:{A:`ZnO va MnO₂`,B:`Na₂O va Mn₃O₄`,C:`NO va CO`,D:`CO₂ va P₂O₅`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:`Piritdan 4,48 litr (n.sh) da sulfit angidrit olindi. Dastlabki pirit massasini aniqlang. (η=80%)`,variantlar:{A:`30`,B:`20`,C:`15`,D:`12`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:15,ball:null,turi:`tanlov`,shart:`Butadiyen-1,3 va etilen teng miqdorda sopolimerlanishida molyar massasi 25625 g/mol bo’lgan makromolekula olindi. 0,2 mol ushbu polimerdagi atomlar sonini toping.`,variantlar:{A:`6,02·10²⁶`,B:`6,02·10²⁵`,C:`3,01·10²⁷`,D:`3,01·10²⁵`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:null,turi:`tanlov`,shart:`Saxarozadan shakar olish bosqichlarini to’g’ri joylashtiring.
1) eritma begona moddalarni so’rib oladigan aktivlangan ko’mir bilan isitiladi.
2) eritma vakuum apparatida bug’lanadi, shakar kristallari ajratiladi va quritiladi.
3) suvda eruvchan kalsiy saxarati shaklida saxaroza eritmada olinadi.
4) eritmadan karbonat angidrid o’tkaziladi, natijasida kalsiy saxarat karbonat angidrid ta’sirida saxaroza va erimaydigan kalsiy karbonatga parchalanadi.
5) ezilgan lavlagi namlash natijasida hosil bo’lgan issiq eritma ohak suti bilan ishlash.
6) bir xil o’lchamdagi shakar kristallarini olish uchun bug’latilgan shakar eritmasi qayta kristallanadi.`,variantlar:{A:`6, 2, 3, 4, 5, 1`,B:`5, 3, 2, 4, 1, 6`,C:`5, 3, 4, 2, 1, 6`,D:`4, 3, 5, 1, 6, 2`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`X g fosfor konsentrlangan nitrat kislota bilan ta’sirlashdi. Xuddi shuncha konsentrlangan nitrat kislota bilan Y g mis ta’sirlashadi. (Y – X = 7) bo’lsa. CuSO₄ eritmasiga Z g temir tushirilganda Y g mis ajraladi. Z ni toping.`,variantlar:{A:`8`,B:`10`,C:`5,6`,D:`11,2`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`R–CHO →(Ag₂O; Ag = 10,8 g) R–COOH →(C₂H₅OH; H₂O) RCOOC₂H₅
Yuqoridagi reaksiyada ohirgi bosqichda 50% unum bilan 2,55 g murakkab efir olingan bo’lsa R – toping.`,variantlar:{A:`metil`,B:`propil`,C:`etil`,D:`butil`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:`Trifenilamin formulasini toping.`,variantlar:{A:`(CH₃)₃N`,B:`(C₆H₅)₃N`,C:`C₆H₅NH₂`,D:`(C₆H₅)₂NH`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`300 ml 0,2 M NaCl eritmasiga 0,4 M li Na₂SO₄ eritmasidan qo’shildi. Hosil bo’lgan eritmada sulfat ionlarining konsenratsiyasi 0,16 M ga teng. Hosil bo’lgan eritmadagi natriy ionlari molyar konsentratsiyasini aniqlang.`,variantlar:{A:`0,3`,B:`0,2`,C:`0,44`,D:`0,12`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:`Quyidagi rasmdagi tajribada ikkinchi probirkada qaysi tuz eritmasi hosil bo’ladi.`,variantlar:{A:`temir (II)-nitrat`,B:`natriy nitrat`,C:`magniy nitrat`,D:`temir (III)-nitrat`},javob:`C`,tushmagan:!1,nuqson:null,rasm:{bet:44,izoh:`Tajriba rasmi: HNO₃ kolbadan «magnezit» solingan probirkaga quyilmoqda; strelka bilan ikkinchi probirkadagi «tuz» eritmasi ko'rsatilgan.`}},{raqam:22,ball:null,turi:`tanlov`,shart:`AgClO₂ + Cl₂ → AgCl + Cl₂O + O₂
Yuqoridagi reaksiyadagi (Cl₂⁰ → Cl⁻¹) barcha koeffitsiyentlar yig’indisini hisoblang.`,variantlar:{A:`6`,B:`9`,C:`15`,D:`18`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`500 g 20 % li mis (II)-sulfat eritmasi elektroliz qilinganda eritma massasi 423 g gacha kamaydi. Huddi shuncha faradey tok bilan alyuminiy xlorid suyuqlanmasi elektroliz qilinsa kattodda necha g metal hosil bo’ladi.`,variantlar:{A:`27`,B:`11,25`,C:`38,25`,D:`10,8`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:`Ammiakka alkilamin qo’shilsa azot atomlar soni 10 marta, vodorod atomlari soni 22 marta ortdi. Aralashmaning o’rtacha molar massasini (g/mol) toping.`,variantlar:{A:`42,2`,B:`32,2`,C:`20,8`,D:`45,6`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`Asosiy tarkibiy qismida magniy bo’lgan mineralni belgilang.`,variantlar:{A:`olevin`,B:`silvinit`,C:`siderit`,D:`magnetit`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:null,turi:`tanlov`,shart:`A + B → C + D
Ushbu reaksiya hajmi 5 litr bo’lgan idishda o’tkazildi. 10°C dagi tezligi 0,6 mol/l·s bo’lsa va 50°C da 5 sekund davomida 240 mol D modda hosil bo’lsa. Shu reaksiyani 30°C dagi tezligini toping.`,variantlar:{A:`9,6`,B:`2,4`,C:`1,2`,D:`4,8`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:null,turi:`tanlov`,shart:`Buten va vodorod aralashmasi molyar massasi 20 g/mol reaksiyaga kirishgandan so’ng hosil bo’lgan aralashma molyar massasi 24 g/mol bo’lsa. Reaksion aralashma bromli suvdan o’tkazilsa hajm necha marta kamayadi.`,variantlar:{A:`3/4`,B:`5/4`,C:`1/2`,D:`4/3`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`₉₆Cm + 3y ¹₀n + 2 ¹₁p → ²⁵²₉₉Es + y ⁰₋₁e + z ⁰₀γ + x ⁴₂α
Ushbu yadro reaksiyasida 151,2 g Es va 1,8·N_A dona elektron hosil bo’ldi. Dastlabki kyuriyning nisbiy atom massasini toping.`,variantlar:{A:`245`,B:`250`,C:`248`,D:`242`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`Toluol va sterol aralashmasi KMnO₄ bilan kislotali sharoitda oksdlandi. Natijada 4,48 l (n.sh) da gaz ajraldi. Dastlabki aralashmada toluol massasi steroldan 25,2 g ko’p bo’lsa reaksiya natijasida olingan organik kislota miqdorini (mol) toping.`,variantlar:{A:`0,7`,B:`0,9`,C:`1,2`,D:`0,5`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`Moy gidrolizlanganda 1 mol A, 2 mol B va 1 mol C modda aralashmasi hosil bo’ldi. 18,4 g A modda natriy metali bilan ta’sirlashganda 6,72 litr (n.sh) da gaz ajraldi. B modda 2 mol brom biriktiradi va olingan tetra bromli hosila tarkibida 800/15 % brom bor. C modda tarkibida kislorod va uglerod atom nisbati 1:1,5 nisbatda. Moy tarkibidagi kislotalarni toping.`,variantlar:{A:`palmitin kislota va propan kislota`,B:`olein kislota va n-pentan kislota`,C:`linolein kislota va n-butan kislota`,D:`linol kislota va propan kislota`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:`AlCl₃ gidroliz bosqichlarni o’ng tomonga siljitish uchun qaysi javobdan foydalanish kerak.
Al³⁺ → AlOH²⁺ → Al(OH)₂⁺ → Al(OH)₃`,variantlar:{A:`H⁺ ionlarini qo’shish kerak`,B:`OH⁻ ionlarini chiqarib yuborish kerak`,C:`H⁺ ionlarini chiqarib yuborish kerak`,D:`suvni kamaytirish kerak`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:`Dissotsilanganda ikki xil anion hosil qiladigan elektrolit formulasini ko’rsating.`,variantlar:{A:`NaOH`,B:`H₂SO₄`,C:`NaKSO₄`,D:`CaCl₂`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:33,ball:null,turi:`tanlov`,shart:`3 : 1 mol nisbatda olingan AH va BH dan 7,2 g aralashma suvda eritilsa necha mol gaz ajraladi?`,variantlar:null,javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:null,turi:`tanlov`,shart:`1 : 2 mol nisbatda bo’lgan AH va BH dan iborat 17,6 g aralashma suvda eritilsa necha mol gaz ajraladi?`,variantlar:null,javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:null,turi:`tanlov`,shart:`1 : 1 mol nisbatda bo’lgan BH va AH dan iborat 12,8 g aralashma suvda eritilsa necha mol gaz ajraladi?`,variantlar:null,javob:`E`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`126 mg alyuminiy ishqor eritmasida eritildi. Ajralib chiqgan gaz havo bilan aralashtirildi va havosi so’rib olingan 1,662 litr hajmli idish (43,95 kPa va 20°C) ga joylashtirildi. Idishdagi gazlar aralashmasi portlatildi va sharoit dastlabki holatda keltirilganda suv bug’lari kondensatlanib bosim 28,5675 kPa bo’lib qoldi. Portlatilgandan kegingi aralashmadagi gazlarni miqdorlar (mmol) farqini toping. (havoda 20% kislorod bor qolgani azot)`,bandlar:[{band:``,savol:``,javob:`17,3`,birlik:`mmol`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`25 g Na₂SO₄ · 6H₂O bilan tarkibida 24% suv bo’lgan Al₂(SO₄)₃ · nH₂O aralashma suvda eritilganda tarkibida 151,6 g suv bo’lgan aralashma olindi. Kiristalgidratlar tarkibida tuz miqdorlari (mol) teng bo’lsa. Hosil bo’lgan eritmadagi alyuminiy tuzining foiz konsentratsiyasini toping.`,bandlar:[{band:``,savol:``,javob:`17,1`,birlik:`%`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`217 ml 5000/217 foizli mis (II)-sulfat (ρ=1,2 g/ml) eritmasi temir plastinka tushurildi. Hosil bo’lgan eritmada 20% mis (II)-sulfat bo’lsa. Olingan eritmadagi tuzlarning massa (g) farqini toping.`,bandlar:[{band:``,savol:``,javob:`44,4`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`Propinga noma’lum alkan qo’shilganda, atomlar soni 11 marta massa esa 6,6 marta ortdi. Hosil bo’lgan aralashmaning geliyga nisbatan zichligini toping.`,bandlar:[{band:``,savol:``,javob:`4,4`,birlik:``,ball:3.2}],tushmagan:!1,nuqson:null,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`3:1 mol nisbatdagi dibrom alkanlar aralashmasi ishqorning spirtdagi eritmasida eritilganda har ikki reaksiyada ham propin hosil bo’ldi. Olingan alkin bromli suvdan o’rkazilganda 28,8 g tetrabromalkan hosil bo’ldi. Huddi shunday aralashma gidrolizlanganda hosil bo’lgan aralashmaga Cu(OH)₂ ta’sir ettirilganda 2,88 g qizil cho’kma hosil bo’ldi. Hosil bo’lgan eritmaga tiniq ko’k rang beruvchi modda massasini (g) aniqlang.`,bandlar:[{band:``,savol:``,javob:`8,28`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`Talqin: md javobi 8,28 g (mis(II) propilenglikolyat); agar «modda» deb diolning o'zi tushunilsa — 4,56 g.`,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:`Jarayonda berilgan barcha reaksiya tenglamalarini yozing va miqdoriy hisoblashlarni uzviy ketma-ketlikda to‘liq ko‘rsating.
Mis (II) nitrat va kaliy xlorid tuzlarini tutgan 727,4 g suvli eritma mavjud. Barcha mis ionlarini batamom yo‘qotguncha eritmadan elektr toki o‘tkazildi. Bu jarayonda inert elektrodlar ishlatildi. Katodda hosil bo‘lgan moddaning massasi anodda hosil bo‘lgan gazlarning massasidan 15 g ko‘p. Elektrolizdan keyin hosil bo‘lgan eritmaga kislota bilan to‘liq (qoldiqsiz) reaksiyaga kirishi uchun 440 g x % li K₂S eritmasi qo‘shildi. Natijada, tarkibida 2 mol kaliy nitrat tutgan eritma olindi.`,bandlar:[{band:`1`,savol:`Dastlabki eritmadagi tuzlarning va suvning miqdorini (mol) toping.`,javob:`Cu(NO₃)₂ — 1 mol; KCl — 1,2 mol; H₂O — 25 mol`,birlik:`matn`,ball:.8},{band:`2`,savol:`Elektroliz jarayoni 4 soat davom etgan bo‘lsa, elektrolizyordan o‘tkazilgan tok kuchini (A) toping.`,javob:`13,4`,birlik:`A`,ball:.8},{band:`3`,savol:`x ni toping.`,javob:`10`,birlik:`%`,ball:.7},{band:`4`,savol:`Elektroliz jarayonida ajralgan xlor gazi kaliy gidroksidning mo‘l olingan qaynoq eritmasiga yuttirilganda necha gramm tuzlar aralashmasi hosil bo‘ladi?`,javob:`99`,birlik:`g`,ball:1}],tushmagan:!1,nuqson:null,rasm:null},{raqam:42,ball:6,turi:`yozma`,shart:`Reaksiya tenglamalarini tugallang va tenglashtiring. 1, 2, 3, 5-reaksiyalarda hosil bo‘lgan organik mahsulotlarni sistematik nomenklatura bo‘yicha nomlang.
Barcha reaksiyalarda hosil bo‘lgan organik moddalarning tuzilish formulasini yozing.`,bandlar:[{band:`1`,savol:`H₃C–CH(Br)–CH₂–CH(CH₃)–CH₂–CH₂–Br + Zn →(t°)`,javob:`1,3-dimetilsiklopentan + ZnBr₂`,birlik:`matn`,ball:1.1},{band:`2`,savol:`H₃C–CH₂–CH=C(CH₃)–CH₃ + H₂O →(H₂SO₄)`,javob:`CH₃CH₂CH₂–C(OH)(CH₃)–CH₃ — 2-metilpentan-2-ol`,birlik:`matn`,ball:1},{band:`3`,savol:`C₆H₆ (benzol) + 3Cl₂ →(quyosh nuri)`,javob:`C₆H₆Cl₆ — geksaxlorsiklogeksan`,birlik:`matn`,ball:.9},{band:`4`,savol:`HO–CH₂–CH(OH)–CH₂–OH + HNO₃(mo‘l) →(kons H₂SO₄)`,javob:`C₃H₅(ONO₂)₃ (trinitroglitserin) + 3H₂O`,birlik:`matn`,ball:.8},{band:`5`,savol:`H₃C–CO–CH₃ + K₂Cr₂O₇ + H₂SO₄ → HCOOH + …`,javob:`CH₃COCH₃ + K₂Cr₂O₇ + 4H₂SO₄ → CH₃COOH + HCOOH + Cr₂(SO₄)₃ + K₂SO₄ + 4H₂O (sirka va chumoli kislotalar)`,birlik:`matn`,ball:1.2},{band:`6`,savol:`H₃C–OH + C₆H₅COOH (benzoy kislota) →(kons H₂SO₄)`,javob:`C₆H₅COOCH₃ (metilbenzoat) + H₂O`,birlik:`matn`,ball:null},{band:`7`,savol:`H–CHO →(Ca(OH)₂, t°)`,javob:`6HCHO → C₆H₁₂O₆`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:null,rasm:null},{raqam:43,ball:6,turi:`yozma`,shart:`Raqamlangan probirkalarda (1, 2, 3, 4, 5) turli moddalarning eritmalari mavjud. 2-raqamli eritmaga 3-raqamli eritmadan ko‘p miqdorda quyildi. Natijada qizdirilganda osongina parchalanadigan oq cho‘kma hosil bo‘ldi. Cho‘kma ajratilgach olingan eritmadan suv bug‘latilib, olingan qoldiq qattiq qizdirildi bunda metan gazi va suvsizlantirilgan soda hosil bo‘ldi. 1-raqamli probirkadagi eritmaga 2-raqamli probirkadagi eritmadan qo‘shilganda qora cho‘kma hosil bo‘ldi. 4-raqamli eritmaga 3-raqamli eritmadan quyish jarayonida avval oq cho‘kma hosil bo‘ldi, jarayon davom ettirilgach cho‘kma erib ketdi (3- va 4-probirkalardagi eritmalar tarkibidagi kationlar bitta davrdagi elementlardan hosil bo‘lgan). 1- va 4-raqamli probirkalardagi eritmalar aralashtirilganda oq cho‘kmalardan (ushbu aralashma nitrat kislotada eritilganda bir qismi erimay qoldi) iborat aralashma va o‘tkir hidli gaz olindi. 1- va 5-raqamli probirkalardagi moddalar aralashtirilganda esa oq va qo‘ng‘ir rangli cho‘kmalardan iborat aralashma (ushbu aralashma ham nitrat kislotada eritilganda bir qismi erimay qoldi) va o‘tkir hidli gaz hosil bo‘ldi. 3- va 5-raqamli probirkalardagi eritmalar aralashtirilganda esa faqat qo‘ng‘ir cho‘kma hosil bo‘ldi.`,bandlar:[{band:`1`,savol:`Jarayonda berilgan barcha reaksiya tenglamalarini yozing va tenglashtiring.`,javob:`(CH₃COO)₂Pb + 2NaOH → Pb(OH)₂↓ + 2CH₃COONa; CH₃COONa + NaOH →(t) CH₄↑ + Na₂CO₃; BaS + (CH₃COO)₂Pb → PbS↓ + (CH₃COO)₂Ba; Al₂(SO₄)₃ + 6NaOH → 2Al(OH)₃↓ + 3Na₂SO₄; Al(OH)₃ + NaOH → Na[Al(OH)₄]; 3BaS + Al₂(SO₄)₃ + 6H₂O → 3BaSO₄↓ + 2Al(OH)₃↓ + 3H₂S↑; 3BaS + Fe₂(SO₄)₃ + 6H₂O → 3BaSO₄↓ + 2Fe(OH)₃↓ + 3H₂S↑; Fe₂(SO₄)₃ + 6NaOH → 2Fe(OH)₃↓ + 3Na₂SO₄`,birlik:`matn`,ball:null},{band:`2`,savol:`1-, 2-, 3-, 4-, 5-raqamli probirkalardagi moddalarning kimyoviy formulasini probirka raqami bilan moslab yozing.`,javob:`1 — BaS; 2 — (CH₃COO)₂Pb; 3 — NaOH; 4 — Al₂(SO₄)₃; 5 — Fe₂(SO₄)₃`,birlik:`matn`,ball:null},{band:`3`,savol:`1- va 2-; 1- va 4-; 3- va 5-; 2- va 3-probirkalardagi eritmalar aralashtirilganda sodir bo‘lgan reaksiyalarning to‘la ionli va qisqa ionli tenglamalarini yozing.`,javob:`1+2: Pb²⁺ + S²⁻ → PbS↓; 1+4: Ba²⁺ + SO₄²⁻ → BaSO₄↓ va 2Al³⁺ + 3S²⁻ + 6H₂O → 2Al(OH)₃↓ + 3H₂S↑; 3+5: Fe³⁺ + 3OH⁻ → Fe(OH)₃↓; 2+3: Pb²⁺ + 2OH⁻ → Pb(OH)₂↓`,birlik:`matn`,ball:null},{band:`4`,savol:`Raqamlangan probirkalardagi (1, 2, 3, 4, 5) eritmalarga kumush nitrat eritmasidan qo‘shilganda qaysilarida cho‘kma hosil bo‘ladi? Cho‘kma hosil bo‘lgan reaksiyalarning molekulyar tenglamalarini yozing va tenglashtiring.`,javob:`1: 2AgNO₃ + BaS → Ag₂S↓ + Ba(NO₃)₂; 2: AgNO₃ + (CH₃COO)₂Pb → CH₃COOAg↓ + …; 3: 2AgNO₃ + 2NaOH → Ag₂O↓ + 2NaNO₃ + H₂O; 4 va 5: 6AgNO₃ + Al₂(SO₄)₃ → 3Ag₂SO₄↓ + 2Al(NO₃)₃ (Fe₂(SO₄)₃ bilan ham shunday)`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:null,rasm:null}]},Je={variant:`12`,nom:`Sertifikat 04.05.2025 I smena`,betlar:`49–57`,umumiy:[{raqamlar:[33,34,35],shart:`Natriy va kaliy aralashmasi oltingugurt bilan ta’sirlashganda sulfidlar hosil bo’ldi. Dastlabki aralashmada kaliy massasi natriy massasidan 11 g ko’p. Hosil bo’lgan sulfidlar massasi dastlabki metallar massasidan 9,6 g ko’p.`,variantlar:{A:`0,8`,B:`0,7`,C:`10,5`,D:`14,2`,E:`0,4·N_A`,F:`0,3·N_A`}}],savollar:[{raqam:1,ball:null,turi:`tanlov`,shart:`Yuqoridagi amino kislotaning nomini aniqlang.
CH₃–CH(NH₂)–COOH`,variantlar:{A:`gilitsin`,B:`serin`,C:`sistein`,D:`alanin`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:2,ball:null,turi:`tanlov`,shart:`Noma’lum alkanning yonish reaksiyasida uzilgan qutbli va qutbsiz kovalent bog’lar soni 1:1,6 nisbatda bo’lsa, alkanni aniqlang.`,variantlar:{A:`metan`,B:`etan`,C:`propan`,D:`butan`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:3,ball:null,turi:`tanlov`,shart:`Nomalum uglevodorod yonish rekasiyasida chap va o’ng tomondagi koefitsentlar yig’indisi teng. Noma’lum uglevodorodning metanga nisbatan zichligini toping.`,variantlar:{A:`1,75`,B:`2`,C:`1,5`,D:`2,25`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:4,ball:null,turi:`tanlov`,shart:`1000 g 98,2% li sulfat kislota eritmasiga qancha gramm sulfat angidrit qo’shilsa 20% li oleum hosil bo’ladi.`,variantlar:{A:`80`,B:`350`,C:`270`,D:`360`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:5,ball:null,turi:`tanlov`,shart:`Hund qoidasi keltirilgan qatorni belgilang.`,variantlar:{A:`energiyalari bir xil bo’lgan orbitallar (yachekalar)da elektronlar shunday tartibda joylashadiki, natijada spinlar yig’indisi maksimal qiymatga ega bo’ladi;`,B:`atomda energetik holatlarning elektronlar bilan to’lib borish tartibi atomning bosh va orbital kvant sonlari yig’indisining minimal qiymatli bo’lishi uchun intilishiga bog’liq;`,C:`atomda to’rttala kvant sonlari bir xil qiymatga ega bo’lgan elektronlar mavjud bo’la olmaydi;`,D:`agar ikki element bir-biri bilan bir necha kimyoviy birikma hosil qilsa, bu birikmalardagi bir element massasiga to’g’ri keluvchi boshqa element massalari o’zaro kichik butun sonlar nisbatida bo’ladi.`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:6,ball:null,turi:`tanlov`,shart:`500 g 19,6% li sulfat kislota eritmasiga necha gramm BaCl₂·2H₂O qo’shilganda. Hosil bo’lgan eritmadagi sulfat kislotaning massa ulushi 5% ga teng bo’ladi.`,variantlar:{A:`4880/27`,B:`4470/27`,C:`446 5/27`,D:`4489/27`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:7,ball:null,turi:`tanlov`,shart:`Ko’mir tarkibida uglerod massa ulushi 68,8%, vodorod massa ulushi 10%, otingugurt massa ulushi 3,2% va yonmaydi mineral moddalar bor. 3 kg ko’mir yonishiga sarflangan kislorod qancha m³ (n.sh) da havo tarkibida bor. (havo tarkibida kislorod 20%)`,variantlar:{A:`25`,B:`28`,C:`26`,D:`22,4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:8,ball:null,turi:`tanlov`,shart:`To’g’ri javobni aniqlang.`,variantlar:{A:`kumushning elektr o’tkazuvchanligi berilliynikidan yaxshiroq`,B:`1 mol qizil fosfor (n.sh.) da 22,4 litr hajmni egallaydi`,C:`havoda vodorod va kislorod 4:1 hajmiy nisbatan bo’ladi`,D:`reaksiyaga kirishgan moddalar koeffitsiyenti bilan hosil bo’lgan moddalar koeffitsiyenti teng`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:9,ball:null,turi:`tanlov`,shart:`Qaysi reaksiyada asosli oksid hosil bo’ladi.`,variantlar:{A:`Li + O₂ →`,B:`Zn + O₂ →`,C:`P + O₂ →`,D:`C + O₂ →`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:10,ball:null,turi:`tanlov`,shart:`Polietilen (–CH₂–CH₂–)ₙ molekulasidagi asosiy uglerod zanjiri uzunligi 308 nm ga teng bo’lsa, polimerning molekular massasini aniqlang. 1 ta (C – C) = 0,154 nm.`,variantlar:{A:`56000`,B:`28000`,C:`2800`,D:`5600`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:11,ball:null,turi:`tanlov`,shart:`Qaysi modda Ba(OH)₂ eritmasiga qo’shilganlar eritma elektr o’tkazuvchanligi kamayadi.`,variantlar:{A:`NaOH`,B:`Na₂O`,C:`BaCl₂`,D:`AgF`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:12,ball:null,turi:`tanlov`,shart:`Oksidlanish qaytarilish reaksiyalarida KMnO₄ suvli eritmasida bir moddani oksidladi. Shu jarayonda marganestning oksidlanish darajasi necha birlikka o’zgaradi.`,variantlar:{A:`2`,B:`3`,C:`5`,D:`4`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:13,ball:null,turi:`tanlov`,shart:`Kislotali oksidlarni aniqlang.`,variantlar:{A:`ZnO va MnO₂`,B:`Fe₃O₄ va Mn₃O₄`,C:`Cr₂O₃ va N₂O`,D:`N₂O₃ va CrO₃`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:14,ball:null,turi:`tanlov`,shart:`6,2 g noma’lum modda yonganda 8,8 g karbonat angidrid, 9 g suv va 2,8 g azot hosil bo’lsa, noma’lum moddaning empirik formulasini aniqlang.`,variantlar:{A:`C₆H₅NH₂`,B:`CH₃CH₂NH₂`,C:`C₆H₅NO₂`,D:`CH₃NH₂`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:15,ball:null,turi:`tanlov`,shart:`Chiziqli tuzilishli polipeptid 5 ta glitsin, 10 ta alanin va 15 ta serin qoldig’idan tashkil topgan. 23,18 g polipeptidni gidrolizlash uchun qancha (mol) suv talab etiladi?`,variantlar:{A:`0,30`,B:`0,45`,C:`0,29`,D:`0,49`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:16,ball:null,turi:`tanlov`,shart:`Dissotsilanganda ikki xil anion hosil qiladigan elektrolit formulasini ko’rsating.`,variantlar:{A:`CaOCl₂`,B:`KAl(SO₄)₂`,C:`Ca₃(PO₄)₂`,D:`NaNO₃`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:17,ball:null,turi:`tanlov`,shart:`X g fosfor konsentrlangan sulfat kislota bilan ta’sirlashdi. Xuddi shuncha konsentrlangan sulfat kislota bilan Y g mis ta’sirlashadi. (Y – X = 9,8) bo’lsa. CuSO₄ eritmasiga Z g temir tushirilganda Y g mis ajraladi. Z ni toping.`,variantlar:{A:`14`,B:`10`,C:`56`,D:`28`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:18,ball:null,turi:`tanlov`,shart:`Linol kislota quyidagi qaysi umumiy formulaga mos keladi.`,variantlar:{A:`CₙH₂ₙO₂`,B:`CₙH₂ₙ₋₄O₂`,C:`CₙH₂ₙ₋₂O₂`,D:`CₙH₂ₙ₊₂O₂`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:19,ball:null,turi:`tanlov`,shart:`8,4 g kalsiy oksid 3,6 g uglerod bilan reaksiyaga kirishganda qancha litr (n.sh.) gaz ajraladi? (unum = 75%)`,variantlar:{A:`2,52`,B:`3,36`,C:`1,68`,D:`4,37`},javob:``,tushmagan:!1,nuqson:`md da kalit yo'q: md shartning boshi skanda tushib qolgan deb yozgan, lekin PDF (50-bet) da shart to'liq. Hisob: CaO + 3C → CaC₂ + CO; C 0,3 mol → CO 0,1 mol · 0,75 = 0,075 mol = 1,68 l → C (tasdiqlash kerak).`,rasm:null},{raqam:20,ball:null,turi:`tanlov`,shart:`300 ml 0,2 M NaCl eritmasiga 0,4 M li Na₂SO₄ eritmasidan qo’shildi. Hosil bo’lgan eritmada natriy ionlarining konsenratsiyasi 0,44 M ga teng. Hosil bo’lgan eritmadagi xlorid ionlari molyar konsentratsiyasini aniqlang.`,variantlar:{A:`0,16`,B:`0,22`,C:`0,44`,D:`0,12`},javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:21,ball:null,turi:`tanlov`,shart:`Quyidagi rasmdagi tajribada ikkinchi probirkada hosil bo’lgan gazni toping.`,variantlar:{A:`SO₃`,B:`CO₂`,C:`SO₂`,D:`NO₂`},javob:`B`,tushmagan:!1,nuqson:null,rasm:{bet:50,izoh:`Tajriba sxemasi: idishdan HNO₃ magnezit solingan probirkaga quyilmoqda; strelka bilan ikkinchi probirka — «tuz» eritmasi va ko'tarilayotgan gaz pufakchalari.`}},{raqam:22,ball:null,turi:`tanlov`,shart:`Quyidagi tinniq ko’k rangli kristallogidrat X·2H₂O molyar massasi 436 g/mol bo’lsa, X ni aniqlang.`,variantlar:{A:`Al(NO₃)₃`,B:`Cr₂(SO₄)₃`,C:`Ca₃(PO₄)₂`,D:`Fe₂(SO₄)₃`},javob:`D`,tushmagan:!1,nuqson:`PDF da variant harflari A, D, C, D (ikkinchi variant ham «D» deb yozilgan) — bu yerda B deb tuzatildi. md kaliti Fe₂(SO₄)₃ (4-variant, D). md izohi: «tiniq ko'k rangli» tavsifi temir(III) sulfatga mos emas.`,rasm:null},{raqam:23,ball:null,turi:`tanlov`,shart:`160 ml (ρ=1,25 g/ml) bo’lgan 11,7% li NaCl eritmasi elektroliz qilindi. Natijada 0,7 mol gazlar aralashmasi hosil bo’ldi. Hosil bo’lgan vodorod massasini toping.`,variantlar:{A:`1,2`,B:`0,4`,C:`0,8`,D:`0,2`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:24,ball:null,turi:`tanlov`,shart:`A + 2B → 3C + D
Ushbu reaksiya bo’yicha C moddaning hosil bo’lish tezligi 0,015 mol/l·s bo’lsa. Dastlabki B moddaning konsentratsiyasi 0,45 mol/l. 10 sekund dan so’ng B modda miqdori (mol) nechaga teng bo’ladi. (V= 2 litr)`,variantlar:{A:`0,25`,B:`0,5`,C:`0,7`,D:`0,35`},javob:`C`,tushmagan:!1,nuqson:`md izohida shartning o'rta qismi skanda ko'rinmagan deyilgan; PDF (50–51-betlar) da to'liq bor (0,45 mol/l, 10 s) — md javobi C bilan mos.`,rasm:null},{raqam:25,ball:null,turi:`tanlov`,shart:`Xrom (III)-gidroksid molyar massasiga teng massadagi nitrobirikmada 0,8 mol sp³ gibridlangan atom bor. Nitrobirikmaga izomer bo’lgan aminokislotada nechta sp³ orbitallar bor?`,variantlar:{A:`4·N_A`,B:`0,8·N_A`,C:`3,2·N_A`,D:`2·N_A`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:26,ball:null,turi:`tanlov`,shart:`Berilgan reaksiya 20°C da 54 sekund, 50°C esa 2 sekund davom etsa, ushbu reaksiya 30°C necha sekunda tugaydi.`,variantlar:{A:`9`,B:`18`,C:`6`,D:`27`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:27,ball:null,turi:`tanlov`,shart:`Umumiy formulasi CₙH₂ₙ₊₂O₂ bo’lgan A, B, C moddalar mavjud.
A va B moddalar natriy metali bilan tasirlashadi.
A va B moddalar mis (II)-gidroksid bilan ta’sirlashsa ko’k rangli eritma hosil bo’ladi.
C modda esa natriy metali bilan tasirlashadi, lekin mis (II)-gidroksid bilan reaksiyaga kirishmaydi. C moddani toping?`,variantlar:{A:`CH₃–CH(OH)–CH(OCH₃)–CH₃`,B:`CH₃–CH(OH)–CH(OH)–CH₃`,C:`CH₃–CH(OCH₂CH₃)–CH(OCH₃)–CH₃`,D:`CH₃–CH(OCH₃)–CH(OCH₃)–CH₃`},javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:28,ball:null,turi:`tanlov`,shart:`Temir (III) ionining sifat reaksiyasida ishlatiladigan moddani ko’rsating.
1) qizil qon tuzi
2) sariq qon tuzi
3) natriy rodanid
4) natriy gidroksid
5) mis (II)-gidroksid
6) kaliy sionid`,variantlar:{A:`1,2,4`,B:`3,4,6`,C:`2,3,4`,D:`2,5,6`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:29,ball:null,turi:`tanlov`,shart:`Litiy, natriy, kaliy, rubidiy va seziy qatorida oksidlarning suv bilan reaksiyaga kirishish aktivligi qanday o’zgaradi?`,variantlar:{A:`kamayib boradi`,B:`o’zgarmaydi`,C:`avval kamayadi so’ng ortadi`,D:`ortib boradi`},javob:``,tushmagan:!1,nuqson:`md da kalit yo'q: md shartning boshi skanda yo'q deb yozgan, lekin PDF (51-bet) da shart to'liq (Li, Na, K, Rb, Cs qatori). md izohiga ko'ra ishqoriy metall oksidlari uchun javob D) ortib boradi (tasdiqlash kerak).`,rasm:null},{raqam:30,ball:null,turi:`tanlov`,shart:`Hajmi 500 ml suvda 6 mol oltingugurt (VI)-oksid eritilishidan hosil bo’lgan eritmaning (ρ = 1,4 g/ml) qanday hajmi (ml) ga 33,6 litr (n.sh.da) SO₃ ni eritib 78,75% li sulfat kislota eritmasini olish mumkin?`,variantlar:{A:`500`,B:`280`,C:`200`,D:`700`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:31,ball:null,turi:`tanlov`,shart:`Saxarozadan shakar olish bosqichlarini to’g’ri joylashtiring.
1) eritma begona moddalarni so’rib oladigan aktivlangan ko’mir bilan isitiladi.
2) eritma vakuum apparatida bug’lanadi, shakar kristallari ajratiladi va quritiladi.
3) suvda eruvchan kalsiy saxarati shaklida saxaroza eritmada olinadi.
4) eritmadan karbonat angidrid o’tkaziladi, natijasida kalsiy saxarat karbonat angidrid ta’sirida saxaroza va erimaydigan kalsiy karbonatga parchalanadi.
5) ezilgan lavlagi namlash natijasida hosil bo’lgan issiq eritma ohak suti bilan ishlash.
6) bir xil o’lchamdagi shakar kristallarini olish uchun bug’latilgan shakar eritmasi qayta kristallanadi.`,variantlar:{A:`6, 2, 3, 4, 5, 1`,B:`5, 3, 2, 4, 1, 6`,C:`5, 3, 4, 2, 1, 6`,D:`4, 3, 5, 1, 6, 2`},javob:`C`,tushmagan:!1,nuqson:null,rasm:null},{raqam:32,ball:null,turi:`tanlov`,shart:`CO(g) + H₂O(g) ⇄ CO₂(g) + H₂(g) reaksiya bo’yicha moddalarni muvozanat konsentratsiyalari mos ravishda 16, 5, 10, 8 mol/l ga teng. Sistemaga 0,4 mol H₂O qo’shilganda yangi muvozanatdagi moddalar konsentratsi to’g’ri berilgan qatorni ko’rsating. (V = 0,4 litr)`,variantlar:{A:`CO = 15,6 mol; CO₂ = 10,4 mol`,B:`H₂O = 5,6 mol/l; H₂ = 8,4 mol/l`,C:`H₂O = 5,6 mol; H₂ = 8,4 mol`,D:`H₂ = 5,6 mol/l; H₂O = 8,4 mol/l`},javob:`B`,tushmagan:!1,nuqson:null,rasm:null},{raqam:33,ball:null,turi:`tanlov`,shart:`Dastlabki aralashmadagi kaliy atomlari sonini toping.`,variantlar:null,javob:`E`,tushmagan:!1,nuqson:null,rasm:null},{raqam:34,ball:null,turi:`tanlov`,shart:`Hosil bo’lgan sulfidlar massa farqini toping.`,variantlar:null,javob:`D`,tushmagan:!1,nuqson:null,rasm:null},{raqam:35,ball:null,turi:`tanlov`,shart:`Hosil bo’lgan natriy sulfid alyuminiy sulfat eritmasiga qo’shilganda eritma massasi necha grammga kamayadi.`,variantlar:null,javob:`A`,tushmagan:!1,nuqson:null,rasm:null},{raqam:36,ball:3.2,turi:`yozma`,shart:`A va B modda tarkibida X elementi bor. A modda yorug’lik va issiqlik ta’sirida parchalanib hosil bo’lgan oddiy moddada B modda yonadi. B modda katalizatorsiz yonganda X elementi tutgan oddiy moddani hosil qiladi. Agar katalizator ishtirokida yonsa XO tarkibli oksid hosil qiladi. A + B → reaksiyasini yozing.`,bandlar:[{band:``,savol:``,javob:`NH₃ + HNO₃ → NH₄NO₃`,birlik:`matn`,ball:3.2}],tushmagan:!1,nuqson:`Yozma javob bitta (a/b bandlarsiz); band yorlig'i va savoli bo'sh qoldirildi.`,rasm:null},{raqam:37,ball:3.2,turi:`yozma`,shart:`Noma’lum alkan o’z hajmidan 10 marta ko’p hajmda O₂ va N₂ (M = 30,8 g/mol) aralashmasi bilan to’la yondirildi. Hosil bo’lgan aralashmada suv bug’lari kondensatlandi. Olingan gazlar aralashmasida azotning hajmiy ulushi 37,5% bo’lsa, karbonat angidrit hajmiy ulushini (%) da toping.`,bandlar:[{band:``,savol:``,javob:`37,5`,birlik:`%`,ball:3.2}],tushmagan:!1,nuqson:`Yozma javob bitta (a/b bandlarsiz); band yorlig'i va savoli bo'sh qoldirildi.`,rasm:null},{raqam:38,ball:3.2,turi:`yozma`,shart:`Kaliy karbonat va gidrokarbonatlari aralashmasi qizdirilganda hosil bo’lgan gazning hajmi qizdirilishdan olingan qattiq qoldiqqa mo’l miqdordagi xlorid kislota ta’sir ettirilganda ajralgan gaz hajmining 2/5 qismini tashkil qiladi. Dastlabki kaliy gidrokarbonat massasi 20 g bo’lsa, kaliy karbonat massasini (g) aniqlang.`,bandlar:[{band:``,savol:``,javob:`20,7`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`Yozma javob bitta (a/b bandlarsiz); band yorlig'i va savoli bo'sh qoldirildi.`,rasm:null},{raqam:39,ball:3.2,turi:`yozma`,shart:`1,3 mol etilen va vodorod aralashmasi (M = 20 g/mol) katalizator yordamida qizdirilganda hosil bo’lgan aralashmada (M = 26 g/mol) necha gramm etan hosil bo’lgan.`,bandlar:[{band:``,savol:``,javob:`9`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`Yozma javob bitta (a/b bandlarsiz); band yorlig'i va savoli bo'sh qoldirildi.`,rasm:null},{raqam:40,ball:3.2,turi:`yozma`,shart:`Glitserin va 2 xil karbon kislota (kislotalar bir biridan 1 ta CH₂ gurux ga farq qiladi) dan hosil bo’lgan yog’ NaOH sharoitda gidrolizlandi. Natijada 1,84 % glitserin va 6,88 % tuzlar saqlagan 200 g eritma olindi. Yog’ni massasini (g) aniqlang.`,bandlar:[{band:``,savol:``,javob:`12,64`,birlik:`g`,ball:3.2}],tushmagan:!1,nuqson:`Yozma javob bitta (a/b bandlarsiz); band yorlig'i va savoli bo'sh qoldirildi.`,rasm:null},{raqam:41,ball:6,turi:`yozma`,shart:`Jarayonda berilgan barcha reaksiya tenglamalarini yozing va miqdoriy hisoblashlarni uzviy ketma-ketlikda to‘liq ko‘rsating.
P₂S₅ 960 g x % li konsentrlangan nitrat kislota eritmasida eritildi. Hosil bo‘lgan eritmaga 1600 g 34 % li kumush nitrat eritmasi qo‘shildi. Natijada, suyultirilgan nitrat kislota eritmasi hosil bo‘ldi. Suyultirilgan eritmadagi nitrat kislota massasi konsentrlangan eritmadagidan 2 marta kam.
Diqqat! Mazkur topshiriq kengaytirilgan javobni talab etuvchi topshiriq hisoblanib, topshiriqning yechilish uslubi va barcha arifmetik hisob-kitob amallarini javoblar varaqasida to‘liq aks ettirish talab etiladi.`,bandlar:[{band:`1`,savol:`Ushbu reaksiya P₂S₅ ning konsentrlangan nitrat kislotada erishini ifodalaydi. Shu yarim reaksiyani oksidlanish va qaytarilish jarayonlarini yozgan holda tenglashtiring.
P₂S₅ + NO₃⁻ + H⁺ → PO₄³⁻ + SO₄²⁻ + NO₂ + H₂O`,javob:`P₂S₅ + 40NO₃⁻ + 24H⁺ → 2PO₄³⁻ + 5SO₄²⁻ + 40NO₂ + 12H₂O`,birlik:`matn`,ball:null},{band:`2`,savol:`x ni toping.`,javob:`63`,birlik:`%`,ball:null},{band:`3`,savol:`Hosil bo‘lgan cho‘kmalarning umumiy massasini (g) toping.`,javob:`479,6`,birlik:`g`,ball:null},{band:`4`,savol:`Suyultirilgan nitrat kislota eritmasida necha mol mis eritilsa, eritmada kislota qolmaydi?`,javob:`1,8`,birlik:`mol`,ball:null}],tushmagan:!1,nuqson:`Bandlar bo'yicha ball md da berilmagan.`,rasm:null},{raqam:42,ball:6,turi:`yozma`,shart:`Atomlar soni teng bo’lgan metil xlorid va noma’lum alkil xloriddan iborata aralashmaning 18,96g miqdorini KOH ning suvli eritmasi orqali o’tkazilganda 13,04g spirtlar aralashmasi hosil bo’ldi.`,bandlar:[{band:`1`,savol:`alkil xloridni aniqlang`,javob:`C₃H₇Cl (propilxlorid)`,birlik:`matn`,ball:null},{band:`2`,savol:`dastlabki aralashmada moddalarning massa farqi (g) topilsin.`,javob:`3,26`,birlik:`g`,ball:null},{band:`3`,savol:`jarayonda sarflangan 5,6% li KOH eritmasi massasi (g) topilsin.`,javob:`320`,birlik:`g`,ball:null},{band:`4`,savol:`molar massasi katta bo’lgan spirt massasi (g) topilsin.`,javob:`6`,birlik:`g`,ball:null},{band:`5`,savol:`dastlabki aralashmada vodorod atomlari soni (N_A) topilsin.`,javob:`1,36`,birlik:`N_A`,ball:null}],tushmagan:!1,nuqson:`BONUS-1 to'plami (PDF da 41-topshiriq, 53-bet). Bandlar bo'yicha ball md da berilmagan.`,rasm:null},{raqam:43,ball:null,turi:`yozma`,shart:`Quyidagi reaksiyalarni tenglashtiring.`,bandlar:[{band:`1`,savol:`Anilin + Br₂ →`,javob:`C₆H₅NH₂ + 3Br₂ → C₆H₂Br₃NH₂↓ + 3HBr`,birlik:`matn`,ball:null},{band:`2`,savol:`Gitsin + α – alanin →`,javob:`H₂N–CH₂–COOH + H₂N–CH(CH₃)–COOH → H₂N–CH₂–CO–NH–CH(CH₃)–COOH + H₂O`,birlik:`matn`,ball:null},{band:`3`,savol:`CH₂=CH−COOH + HCl →`,javob:`CH₂=CH–COOH + HCl → Cl–CH₂–CH₂–COOH`,birlik:`matn`,ball:null},{band:`4`,savol:`C₂H₂ + H₂O →(Hg²⁺)`,javob:`C₂H₂ + H₂O →(Hg²⁺) CH₃CHO`,birlik:`matn`,ball:null},{band:`5`,savol:`CH₃CHO + Cu(OH)₂ →`,javob:`CH₃CHO + 2Cu(OH)₂ →(t) CH₃COOH + Cu₂O↓ + 2H₂O`,birlik:`matn`,ball:null},{band:`6`,savol:`SiCl₄ + H₂O →`,javob:`SiCl₄ + 3H₂O → H₂SiO₃↓ + 4HCl`,birlik:`matn`,ball:null},{band:`7`,savol:`Na₂O₂ + CO₂ →`,javob:`2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂`,birlik:`matn`,ball:null},{band:`8`,savol:`Au + KCN + O₂ + H₂O →`,javob:`4Au + 8KCN + O₂ + 2H₂O → 4K[Au(CN)₂] + 4KOH`,birlik:`matn`,ball:null},{band:`9`,savol:`Fe + H₂O →`,javob:`3Fe + 4H₂O →(t) Fe₃O₄ + 4H₂`,birlik:`matn`,ball:null},{band:`10`,savol:`K₂Cr₂O₇ + KJ + H₂SO₄ →`,javob:`K₂Cr₂O₇ + 6KI + 7H₂SO₄ → Cr₂(SO₄)₃ + 3I₂ + 4K₂SO₄ + 7H₂O`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:`BONUS-1 to'plami (PDF da 42-topshiriq, 53-bet). Ball md da berilmagan.`,rasm:null},{raqam:44,ball:null,turi:`yozma`,shart:`1-5 probirkalarda noma’lum moddalar eritmalari mavjud. Ushbu moddalar bilan quyidagi tajribalar qilingan:
1- va 2 - probirkalar o’zaro qo’shilsa, palag’da hidli gaz va “silvin” hosil bo’ldi. 1 va 5 – idishdagi moddalar aralashtirilganda neytrallanish reaksiyasi hosil bo’ladi, 5 – idishdagi kation alangani binafsha rangga bo’yaydi.
1 – va 4 – probirkalar aralashtirilganda vodoroddan 22 marta og’ir bo’lgan gaz ajralidi, eritmada hosil bo’lgan tuz molar massasi 58,5g/mol. 3 va 5 – eritmalar aralashtirilganda Fe(OH)₂ cho’kmaga tushdi, agar eritmada qolgan anion Ba²⁺ ioni bilan suvda va kislotada erimaydigan cho’kma hosil qilsa …
Bunga ko’ra:`,bandlar:[{band:`1`,savol:`1, 2, 3, 4, 5- probirkalarda qanday moddalar borligini aniq raqamlab yozing.`,javob:`1 – HCl, 2 – K₂S, 3 – FeSO₄, 4 – Na₂CO₃, 5 – KOH`,birlik:`matn`,ball:null},{band:`2`,savol:`Sodir bo’lgan barcha reaksiyalarning molekular, ionli va qisqa ionli (agar mavjud bo’lsa) tenglamarini yozing (6-idishdagi cho’kma erishidan tashqari).`,javob:`2HCl + K₂S → 2KCl + H₂S↑ (2H⁺ + S²⁻ → H₂S↑); HCl + KOH → KCl + H₂O (H⁺ + OH⁻ → H₂O); 2HCl + Na₂CO₃ → 2NaCl + CO₂↑ + H₂O (2H⁺ + CO₃²⁻ → CO₂↑ + H₂O); FeSO₄ + 2KOH → Fe(OH)₂↓ + K₂SO₄ (Fe²⁺ + 2OH⁻ → Fe(OH)₂↓)`,birlik:`matn`,ball:null},{band:`3`,savol:`Qaysi probirkalarga Cu(NO₃)₂ eritmasidan qo’shilganda cho’kma hosil bo’lishini yozing.`,javob:`2, 4, 5 (CuS, (CuOH)₂CO₃, Cu(OH)₂)`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:`BONUS-1 to'plami (PDF da 43-topshiriq, 53-bet). Ball md da berilmagan.`,rasm:null},{raqam:45,ball:6,turi:`yozma`,shart:`Fe, FeO va Fe₂O₃ dan iborat aralashma xlorid kislotada eritilganda 5,6 litr (n.sh.) gaz ajraldi, hosil bo’lgan eritmaga mol miqdorda NaOH eritmasidan qo’shilganda cho’kma hosil bo’ldi. Agarda hosil bo’lgan cho’kmalarning dastlabki massasi 95,7g bo’lib oradan biroz vaqt o’tgandan so’ng cho’kmalar massasi 5,95g ortdi va sarg’ish – qo’ng’ir rangli faqat bir xil rangli modda hosil bo’ldi.`,bandlar:[{band:`1`,savol:`dastlabki aralashma massasi (g) topilsin.`,javob:`69,2`,birlik:`g`,ball:null},{band:`2`,savol:`dastlabki reaksiyada sarflangan xlorid kislotaning 18,25% li eritmasi massasi (g) topilsin.`,javob:`500`,birlik:`g`,ball:null},{band:`3`,savol:`dastlabki aralashmada oksidlar massa farqi (g) topilsin.`,javob:`40,8`,birlik:`g`,ball:null},{band:`4`,savol:`sarflangan NaOH ning 2M li eritmasining hajmi (ml) topilsin.`,javob:`1250`,birlik:`ml`,ball:null},{band:`5`,savol:`reaksiyada sarflangan kislorodning normal sharoitdagi hajmi (litr) topilsin.`,javob:`1,96`,birlik:`l`,ball:null},{band:`6`,savol:`Dastlabki aralashmada kislorod massasi (g) topilsin.`,javob:`16`,birlik:`g`,ball:null}],tushmagan:!1,nuqson:`BONUS-2 to'plami (PDF da 41-topshiriq, 53-bet). Bandlar bo'yicha ball md da berilmagan.`,rasm:null},{raqam:46,ball:null,turi:`yozma`,shart:`Quyidagi reaksiya tenglamalarini yozing va tenglashtiring.`,bandlar:[{band:`1`,savol:`CO + H₂ → 2CH₄ + C₃H₈ + …`,javob:`5CO + 13H₂ → 2CH₄ + C₃H₈ + 5H₂O`,birlik:`matn`,ball:null},{band:`2`,savol:`CH₃CH(CH₃)COOK + KOH →`,javob:`(CH₃)₂CH–COOK + KOH →(t) C₃H₈ + K₂CO₃`,birlik:`matn`,ball:null},{band:`3`,savol:`CH₃CH₂C(CH₃)CHCH₃ + KMnO₄ + H₂SO₄ →`,javob:`5CH₃CH₂C(CH₃)=CHCH₃ + 6KMnO₄ + 9H₂SO₄ → 5CH₃COC₂H₅ + 5CH₃COOH + 6MnSO₄ + 3K₂SO₄ + 9H₂O`,birlik:`matn`,ball:null},{band:`4`,savol:`CH₃ – C₆H₄ – CH₃ + K₂Cr₂O₇ + H₂SO₄ →`,javob:`C₆H₄(CH₃)₂ + 2K₂Cr₂O₇ + 8H₂SO₄ → C₆H₄(COOH)₂ + 2Cr₂(SO₄)₃ + 2K₂SO₄ + 10H₂O`,birlik:`matn`,ball:null},{band:`5`,savol:`CH₃CH(OH)CH₃ →(120 °C)`,javob:`2CH₃CH(OH)CH₃ →(120 °C, H₂SO₄) (CH₃)₂CH–O–CH(CH₃)₂ + H₂O`,birlik:`matn`,ball:null},{band:`6`,savol:`CH₃COOCH₃ →(C₂H₅OH + Na)`,javob:`CH₃COOCH₃ + C₂H₅OH →(C₂H₅ONa) CH₃COOC₂H₅ + CH₃OH`,birlik:`matn`,ball:null},{band:`7`,savol:`CH₃CH₂COCH(CH₃)₂ →(kuchli oksidlash)`,javob:`CH₃CH₂COCH(CH₃)₂ →(kuchli oksidlash) CH₃CH₂COOH + (CH₃)₂CHCOOH`,birlik:`matn`,ball:null},{band:`8`,savol:`selluloza + CH₃COOH →`,javob:`[C₆H₇O₂(OH)₃]ₙ + 3nCH₃COOH → [C₆H₇O₂(OCOCH₃)₃]ₙ + 3nH₂O`,birlik:`matn`,ball:null},{band:`9`,savol:`CH₃I + NH₃(mol) →`,javob:`CH₃I + 2NH₃ → CH₃NH₂ + NH₄I`,birlik:`matn`,ball:null},{band:`10`,savol:`3CH₃CH(NH₂)COOH → X + 2H₂O`,javob:`X — tripeptid (Ala-Ala-Ala)`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:`BONUS-2 to'plami (PDF da 42-topshiriq, 53-bet). Ball md da berilmagan.`,rasm:null},{raqam:47,ball:null,turi:`yozma`,shart:`5 ta probirkada noma’lum 5 ta modda joylashtirildi. Quyidagi berilgan ma’lumotlar asosida ularni aniqlang.
a) 1 – probirka tarkibidagi kation II A guruhda joylashgan elementdan hosil bo’lgan va tarkibida 8 ta s elektronga ega.
b) 1 va 2 – probirkalar aralashtirilganda XSO₄ cho’kmaga tushdi va “osh tuzi” eritmasi hosil bo’ldi.
c) 1 va 5 – probrkalarga AgNO₃ tomizilsa bir xil cho’kma hosil bo’ladi.
d) 3 va 4 – o’zaro neytrallanish reaksiyasiga kirishadi
e) 3 – eritma uchun pH > 11 va 3 – eritmadagi ion alangani binafsha rangga bo’yaydi.
f) 5 va 3 – eritmalar aralashtirilganda dastlab cho’kma hosil bo’ldi va tomizish davom ettirilganda cho’kma ya’na erib ketdi, 5 – eritmadagi kationning elektronlari soni 10 ta.
g) 4 – eritmani qizdirib unga mis bo’lakchasi tashlanganda “tulki dumi” deb ataluvchi gaz ajralib chiqdi.`,bandlar:[{band:`1`,savol:`1, 2, 3, 4, 5- probirkalarda qanday moddalar borligini aniq raqamlab yozing.`,javob:`1 – SrCl₂, 2 – Na₂SO₄, 3 – KOH, 4 – HNO₃ (kons.), 5 – AlCl₃`,birlik:`matn`,ball:null},{band:`2`,savol:`Sodir bo’lgan barcha reaksiyalarning molekular, ionli va qisqa ionli (agar mavjud bo’lsa) tenglamarini yozing (6-idishdagi cho’kma erishidan tashqari).`,javob:`SrCl₂ + Na₂SO₄ → SrSO₄↓ + 2NaCl (Sr²⁺ + SO₄²⁻ → SrSO₄↓); KOH + HNO₃ → KNO₃ + H₂O (H⁺ + OH⁻ → H₂O); AlCl₃ + 3KOH → Al(OH)₃↓ + 3KCl; Al(OH)₃ + KOH → K[Al(OH)₄]; Cu + 4HNO₃(kons) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O`,birlik:`matn`,ball:null},{band:`3`,savol:`pH < 7 bo’lgan eritmalarni yozing.`,javob:`4 (HNO₃) va 5 (AlCl₃)`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:`BONUS-2 to'plami (PDF da 43-topshiriq, 53–54-betlar). Ball md da berilmagan.`,rasm:null},{raqam:48,ball:6,turi:`yozma`,shart:`Topshiriqni bajarish jarayonida barcha reaksiya tenglamalarini yozing. Miqdoriy va arifmetik hisoblashlarni (unga asos bo‘lgan usul yoki formulani ko‘rsatgan holda) uzviy ketma-ketlikda bajaring.
KMnO₄, K₂Cr₂O₇ va MnO₂ bir idishga joylatirildi va 74,05g aralashma olindi. Ushbu aralashma stexiyometrik nisbatda 7,3% li xlorid kislota eritmasidan quyilganda 21,28 dm³ (n.sh.) gaz ajraldi. Agar dastlabki aralashmada n(K)/n(Mn) = 8/7 bo’lsa quyidagilarni aniqlang.
Diqqat! Mazkur topshiriq kengaytirilgan javobni talab etib, uning yechilish usulini va shu usul asosidagi barcha hisoblash amallarini javoblar varaqasida aks etishi lozim.`,bandlar:[{band:`1`,savol:`Aralashmada kislorod massasi (g)`,javob:`28,8`,birlik:`g`,ball:null},{band:`2`,savol:`Reaksiya uchun sarf bo’lgan xlorid kislota eritmasining massasi (g)`,javob:`1800`,birlik:`g`,ball:null},{band:`3`,savol:`Hosil bo’lgan eritmada MnCl₂ va CrCl₃ massalari farqi(g)`,javob:`12,4`,birlik:`g`,ball:null},{band:`4`,savol:`Oxirgi eritmada suv massasi (g)`,javob:`1701`,birlik:`g`,ball:null},{band:`5`,savol:`Dastlabki aralashmada jami atomlar soni (N_A) topilsin.`,javob:`2,75`,birlik:`N_A`,ball:null}],tushmagan:!1,nuqson:`BONUS-3 to'plami (PDF da 41-topshiriq, 54-bet). Bandlar bo'yicha ball md da berilmagan.`,rasm:null},{raqam:49,ball:null,turi:`yozma`,shart:`Organik moddalarning xossalarini bilgan holda reaksiya tenglamalarini tugallang va tenglashtiring. Hosil bo‘lgan barcha organik moddalarning tuzilish formulasini yozing. 1-, 3 -, 5-reaksiyalarda hosil bo‘lgan organik mahsulotlarni sistematik nomenklatura bo‘yicha nomlang.
Diqqat! Mazkur topshitiq kengaytitilgan javob talab etib, uning yechimi javoblar varaqasida aks etishi lozim.`,bandlar:[{band:`1`,savol:`C₆H₆ + CH₂ClCH₂CH₃ →(AlCl₃)`,javob:`C₆H₆ + CH₂ClCH₂CH₃ →(AlCl₃) C₆H₅CH(CH₃)₂ (izopropilbenzol, kumol) + HCl`,birlik:`matn`,ball:null},{band:`2`,savol:`C₆H₅OH + Br₂ →`,javob:`C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ (2,4,6-tribromfenol) + 3HBr`,birlik:`matn`,ball:null},{band:`3`,savol:`1,2,3,4-tetrametilsiklobutan (to'rtburchak halqaning har bir uchida CH₃) + HBr →`,javob:``,birlik:`matn`,ball:null},{band:`4`,savol:`CH₃CH₂COCH₂CH₃ + K₂Cr₂O₇ + H₂SO₄ →`,javob:`CH₃CH₂COCH₂CH₃ + K₂Cr₂O₇ + 4H₂SO₄ → C₂H₅COOH + CH₃COOH + Cr₂(SO₄)₃ + K₂SO₄ + 4H₂O`,birlik:`matn`,ball:null},{band:`5`,savol:`CH₃CH₂COOCH₂CH₃ + 2H₂ →`,javob:`CH₃CH₂COOCH₂CH₃ + 2H₂ → CH₃CH₂CH₂OH (propanol-1) + C₂H₅OH (etanol)`,birlik:`matn`,ball:null},{band:`6`,savol:`β – glukoza + CH₃COOH →(to‘liq ta’sirlashish)`,javob:`β-glukoza + 5CH₃COOH → glukoza pentaatsetati + 5H₂O`,birlik:`matn`,ball:null},{band:`7`,savol:`CH₃CH(Cl)COOH + NH₃ →(teng mol nisbatda)`,javob:`CH₃CH(Cl)COOH + NH₃ → CH₃CH(Cl)COONH₄`,birlik:`matn`,ball:null}],tushmagan:!1,nuqson:`BONUS-3 to'plami (PDF da 42-topshiriq, 54-bet). 3-band PDF da rasm (CH₃ li siklobutan + HBr); md 3-band uchun boshqa sxemani (56-bet) tasvirlagan, kalit yo'q — javob bo'sh. Ball md da berilmagan.`,rasm:{bet:54,izoh:`3-reaksiya: to'rtburchak (siklobutan) halqa, har bir uchida CH₃ guruhi, + HBr →`}},{raqam:50,ball:6,turi:`yozma`,shart:`Laminariya suvo‘tlari dengiz suvidan yodid ionlarini to‘plash xususiyatiga ega. Tarkibidagi yodid ionlarining miqdorini aniqlash maqsadida 1,0 kg dengiz suvo‘tlari na’munasi kam havoli sharoitda yoqildi. Suvo‘tlaridan qolgan kul suv bilan qaynatildi, filtrlandi. Filtratga ortiqcha miqdorda olingan H₂O₂ ning kislotali eritmasi bilan ishlov berildi. Hosil bo‘lgan yod CHCl₃ ga ekstraksiya qilindi. Hosil bo‘lgan yodning CHCl₃ dagi eritmasini titrlash uchun Na₂S₂O₃ ning 0,100 M eritmasidan 100,0 sm³ sarflandi.
(I₂ + Na₂S₂O₃ + H₂O = HI + Na₂SO₄ + H₂SO₄ reaksiya asosida hisoblansin)
Diqqat! Mazkur topshiriq kengaytirilgan javobni talab etib, uning yechilish usulini javoblar varaqasida aks etishi lozim`,bandlar:[{band:`1`,savol:`1,0 kg dengiz suvo‘tlari tarkibida bo‘lgan yodid ionlarining massasini (g) hisoblang.`,javob:`10,16`,birlik:`g`,ball:null},{band:`2`,savol:`Barcha zaruriy reaksiya tenglamalarni yozing va tenglashtiring.`,javob:`2I⁻ + H₂O₂ + 2H⁺ → I₂ + 2H₂O; 4I₂ + Na₂S₂O₃ + 5H₂O → 8HI + Na₂SO₄ + H₂SO₄`,birlik:`matn`,ball:null},{band:`3`,savol:`5,0kg debgiz suv o’ti tarkibdagi yodni to’liq vodorod yodidgacha qaytarish uchun zarur bo’lgan SO₂ hajmi (l.n.sh.) topilsin.`,javob:`4,48`,birlik:`l`,ball:null},{band:`4`,savol:`Agar yod filtrlanib xloroformda eritilganda 100g eritma hosil bo’lgan bo’lsa undagi yod massa ulushi (%) topilsin.`,javob:`10,16`,birlik:`%`,ball:null}],tushmagan:!1,nuqson:`BONUS-3 to'plami (PDF da 43-topshiriq, 54–55-betlar). Bandlar bo'yicha ball md da berilmagan. 55–56-betlarda bu topshiriqdan keyin raqamsiz, savolsiz o'zgarishlar zanjiri sxemalari bor (kalitsiz) — savol sifatida qo'shilmadi. 57-bet — chop etish tartibi ro'yxati, savol emas.`,rasm:null}]},Ye=`# Milliy sertifikat — yechimlar va baholash mezonlari

**Manba:** \`C:\\Users\\kodir\\OneDrive\\Рабочий стол\\AI Agent\\Milliy sertifikat .pdf\` (57 bet, 12 variant)
**Tayyorlandi:** 2026-10-21 / 22

Har bir variant uchun **barcha topshiriqlar** ishlab chiqilgan. Format:

- **Shart** — savolning qisqa bayoni
- **Qoida** — qaysi qonun/formula ishlatiladi va **nega aynan u**
- **Yechim** — bosqichma-bosqich, har qadamning sababi bilan
- **Javob**
- **Tipik xato** — o'quvchilar shu masalada qayerda qoqiladi
- Yozma topshiriqlarda qo'shimcha: **ball taqsimoti jadvali** (saytga shu katakchalar kiritiladi)

---

## Variantlar

| # | Fayl | Betlar | Topshiriq | Izoh |
|---|---|---|---|---|
| 01 | \`01 - Sertifikat 02.04.2023.md\` | 2–5 | 45 | 6 ta savolda shart nuqsonli |
| 02 | \`02 - Sertifikat 28.01.2024.md\` | 6–9 | 45 | 2 ta bahsli band |
| 03 | \`03 - Sertifikat 26.05.2024 I smena.md\` | 10–12 | 45 | 6 ta nuqson (35-savol javobi variantlarda yo'q) |
| 04 | \`04 - Sertifikat 2024 namunaviy.md\` | 13–17 | 45 | eng toza variant — nuqson topilmadi |
| 05 | \`05 - Sertifikat 22.09.2024 aprobatsiya.md\` | 17–21 | 43 | olimpiada uslubidagi 41–43 |
| 06 | \`06 - Sertifikat 25.01.2025 I smena.md\` | 22–25 | 43 | manbadagi javoblar bilan tekshirilgan |
| 07 | \`07 - Sertifikat 25.01.2025 II smena.md\` | 26–30 | 35 | **33–40 manbada yo'q** |
| 08 | \`08 - Sertifikat 15.03.2025 I smena.md\` | 31–34 | 43 | 14–16 bo'sh, 17 variantsiz |
| 09 | \`09 - Sertifikat 15.03.2025 II smena.md\` | 35–38 | 43 | 7-savol sxemasi yo'q |
| 10 | \`10 - Sertifikat 03.05.2025 I smena.md\` | 39–42 | 43 | 38 va 41 da sonlar ziddiyatli |
| 11 | \`11 - Sertifikat 03.05.2025 II smena.md\` | 43–48 | 43 | skan — rasmdan o'qilgan |
| 12 | \`12 - Sertifikat 04.05.2025 I smena.md\` | 49–57 | 41 + **3 bonus to'plam** | skan; 19 va 29 shartsiz |

**Jami: 12 variant, ~510 topshiriq.**

---

## Saytga kiritishdan oldin hal qilinadigan savollar

Quyidagi topshiriqlarda manbaning o'zida xato yoki ikki xil o'qilish bor. Har biri tegishli
fayl ichida **izoh** bilan belgilangan.

### Javobi variantlar orasida yo'q
| Variant | № | Muammo |
|---|---|---|
| 03 | 35 | H⁺ koeffitsiyenti 78, variantlarda yo'q |
| 03 | 19 | to'g'ri juftlik (I va III) variantlarda yo'q |
| 05 | 21 | hisoblangan 1,44 g variantlarda yo'q (kalit 2,16) |
| 05 | 4 | to'g'ri moslash variantlarda yo'q (c = 2) |

### Ikkita to'g'ri javob
| Variant | № | Muammo |
|---|---|---|
| 01 | 9 | bog'larni sanash usuliga qarab 39 ham, 48 ham |
| 05 | 1 | A va C bir xil qiymat |
| 08 / 09 | 26 / 24 | jadvalda ikkita qator to'liq to'g'ri |

### Shartda xato yoki chala
| Variant | № | Muammo |
|---|---|---|
| 01 | 16, 32, 37, 41, 42 | akaritsid ta'rifi · distillash=haydash · vinilsiklopenten · eruvchanlik · chala shart |
| 02 | 38, 39 | "erigan metall" va "suv bilan ta'sirlashgan" ikki xil o'qiladi |
| 03 | 36, 41, 42-A | shart to'liq emas · "neytron" o'rniga proton · 63,2 → 65,2 |
| 06 | 34 | \`Ca(HPO₄)₂\` → to'g'risi \`Ca(H₂PO₄)₂\` |
| 08 | 32, 39 | "5 atomli spirt" → 6 atomli · manbadagi 0,25 javobi noto'g'ri nisbatdan |
| 09 | 41, 43 | bitta shartda terish xatosi · A va B aniqlanmaydi |
| 10 | 12, 14, 38, 41 | 187 g → 187 kg · "dastlabki hajm" ikki xil · kristallogidrat sonlari zid · oksidlar moli manfiy |
| 12 | 19, 22, 24, 29 | shart skanda tushib qolgan · rang molyar massaga zid |

### Manbada umuman yo'q
- **07-variant:** 33–40-topshiriqlar
- **08-variant:** 14, 15, 16-savollar (bo'sh) va 17-savolning javob variantlari
- **09-variant:** 7-savolning sxemasi

---

## Keyingi qadam

Saytga joylashda:
1. Yuqoridagi nuqsonli savollarni **tuzatib** yoki **chiqarib tashlab** kiritish.
2. Yopiq testlar — avtomatik tekshiriladi (javob kaliti har bir faylning oxirida).
3. Yozma topshiriqlar — **ball taqsimoti jadvallari** katakcha sifatida kiritiladi, kurator
   har bir qadamni belgilaydi.
4. "Tipik xato" bo'limi o'quvchi xato qilganda ko'rsatiladigan izoh sifatida ishlatiladi.
`,Xe=`# Sertifikat — 02.04.2023

**Manba:** \`Milliy sertifikat .pdf\`, 2–5-betlar · 45 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–45 yozma (a/b)
**Jami ball:** 103 (1–10 → 1,3 · 11–26 va 30–35 → 2,2 · 27–29 → 3,2 · 36–45 → 3,2)

> \`(tushmagan)\` belgisi manbada shunday turgan — o'sha yili imtihonda chiqmagan,
> lekin bazaga kiritilgan savollar: 11, 12, 13, 19, 29, 30, 44.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · [1,3 ball] · **A**

**Shart:** Harorat 10 °C dan 30 °C ga ko'tarilganda reaksiya tezligi 4 marta ortadi. Harorat 50 °C dan 293 K ga o'zgartirilsa, tezlik qanday o'zgaradi?

**Qoida:** Vant-Goff qoidasi — \`v₂/v₁ = γ^(ΔT/10)\`.
*Nega aynan u:* shartda tezlikning harorat bilan necha marta o'zgarishi berilgan, aktivlanish energiyasi emas — demak Arrenius emas, Vant-Goff.

**Yechim:**
1. γ ni topamiz: ΔT = 30 − 10 = 20 °C → γ^2 = 4 → **γ = 2**.
2. Ikkinchi holatni **bitta shkalaga** keltiramiz: 293 K = 293 − 273 = **20 °C**.
3. ΔT = 20 − 50 = **−30 °C** (harorat pasaygan).
4. v₂/v₁ = 2^(−30/10) = 2^(−3) = 1/8.

**Javob:** A) 8 marta kamayadi

**Tipik xato:** 293 K ni Selsiyga o'tkazmay, "293 − 50 = 243" deb ΔT ni ulkan olish; yoki harorat pasayganini sezmay "8 marta ortadi" (D) deb belgilash — savol aynan shu ikki tuzoqqa qurilgan.

---

### 2-savol · [1,3 ball] · **B**

**Shart:** Suvda yaxshi eriydi · lakmus rangini o'zgartiradi · tarkibida kislorod 200/7 % → modda qaysi? A) Ca(OH)₂ B) KOH C) HNO₃ D) H₂SO₄

**Qoida:** Element massa ulushi \`ω(O) = n·A(O)/M · 100 %\`.
*Nega aynan u:* uchinchi shart — sonli, ya'ni hal qiluvchi. Birinchi ikkitasi faqat variantni toraytiradi.

**Yechim:**
1. 200/7 % = 28,57 %.
2. KOH: M = 56; ω(O) = 16/56 = 2/7 = 28,57 % ✓
3. Tekshirish: Ca(OH)₂ → 32/74 = 43,2 % · HNO₃ → 48/63 = 76,2 % · H₂SO₄ → 64/98 = 65,3 %.
4. KOH suvda yaxshi eriydi va lakmusni ko'kartiradi — qolgan ikki shart ham bajariladi (Ca(OH)₂ kam eriydi).

**Javob:** B) KOH

**Tipik xato:** 200/7 ni 200 : 7 deb emas, "200 va 7" deb o'qish; yoki birinchi shartga qarab Ca(OH)₂ ni asos deb tanlash — u **kam eriydi**, shart buziladi.

---

### 3-savol · [1,3 ball] · **B**

**Shart:** 2 mol NaCl saqlagan eritma 4 F tok bilan elektroliz qilinganda anodda va katodda necha grammdan modda ajraladi?

**Qoida:** Faradey qonuni — 1 F = 1 mol elektron; eritma elektrolizida **ion tugagach jarayon suvga o'tadi**.
*Nega aynan u:* tok miqdori (4 F) ionning miqdoridan (2 mol Cl⁻ = 2 F) katta — demak ikki bosqichli jarayon.

**Yechim:**
1. Katod (NaCl eritmasi, Na⁺ qaytarilmaydi): 2H₂O + 2e⁻ → H₂ + 2OH⁻.
   4 F → **2 mol H₂ = 4 g**.
2. Anod, 1-bosqich: 2Cl⁻ − 2e⁻ → Cl₂. 2 mol Cl⁻ → **1 mol Cl₂ = 71 g**, bunga 2 F sarflanadi.
3. Anod, 2-bosqich: qolgan 2 F suvga ketadi: 2H₂O − 4e⁻ → O₂ + 4H⁺ → **0,5 mol O₂ = 16 g**.
4. Anodda jami: 71 + 16 = **87 g**.

**Javob:** B) 87 va 4

**Tipik xato:** Cl⁻ tugaganini sezmay anodda faqat Cl₂ (71 g) deb hisoblash (D varianti); katodda Na ajraladi deb o'ylash.

---

### 4-savol · [1,3 ball] · **B**

**Shart:** O → S → Se → Te qatorida qaysi xususiyat o'zgarishi **xato** berilgan?

**Qoida:** Guruh bo'ylab pastga: pog'onalar soni ortadi → radius **ortadi**, elektromanfiylik va oksidlovchilik kamayadi, metallik ortadi.
*Nega aynan u:* qator — bitta guruh (VI A) ichidagi harakat.

**Yechim:**
1. A) elektromanfiylik kamayadi — to'g'ri.
2. B) atom radiusi kamayadi — **xato**, u ortadi.
3. C) metallik ortadi — to'g'ri. D) oksidlovchilik kamayadi — to'g'ri.

**Javob:** B) Atom radius kamayadi

**Tipik xato:** Davr bo'ylab (chapdan o'ngga) radius kamayishini guruhga ko'chirish. Savol "xato berilganini" so'raydi — to'g'risini belgilab qo'yish ham keng tarqalgan xato.

---

### 5-savol · [1,3 ball] · **C**

**Shart:** 0,1 mol XH₃ dan 5,5 g X₂O₃ olindi. HXO₃ ning molyar massasini (g/mol) toping.

**Qoida:** Element bo'yicha mol balansi: X atomlari soni saqlanadi.
*Nega aynan u:* ikki birikmada bitta noma'lum element bor — bog'lovchi X ning moli.

**Yechim:**
1. n(X) = n(XH₃) = 0,1 mol → n(X₂O₃) = 0,1/2 = **0,05 mol**.
2. M(X₂O₃) = 5,5 / 0,05 = **110 g/mol**.
3. 2X + 48 = 110 → X = 31 → **fosfor**.
4. HXO₃ = HPO₃: M = 1 + 31 + 48 = **80 g/mol**.

**Javob:** C) 80

**Tipik xato:** 0,1 mol XH₃ dan 0,1 mol X₂O₃ hosil bo'ladi deb olish (ikkiga bo'lishni unutish) — natijada M(X₂O₃) = 55 chiqadi va javob topilmaydi. Ikkinchisi: HPO₃ o'rniga H₃PO₄ (98, A varianti) ni hisoblash — formula shartda **HXO₃** deb aniq berilgan.

---

### 6-savol · [1,3 ball] · **B**

**Shart:** Na₂SO₄ tarkibida ion bog'lanish qaysi atomlar o'rtasida sodir bo'ladi?

**Qoida:** Tuzda ion bog' **metall kationi bilan kislota qoldig'i anioni** orasida; qoldiq ichida kovalent bog'.
*Nega aynan u:* Na⁺ va SO₄²⁻ zarralari o'rtasida elektrostatik tortishish bor, S bilan Na bir-biriga tegmaydi.

**Yechim:**
1. Na₂SO₄ → 2Na⁺ + SO₄²⁻.
2. Anion ichida S va O kovalent qutbli bog' bilan bog'langan.
3. Na⁺ anionning **kislorod uchlari** bilan tortishadi → ion bog' natriy va kislorod orasida.

**Javob:** B) natriy va kislorod

**Tipik xato:** "Metall + nometall" shablonidan kelib chiqib "natriy va oltingugurt" (C) ni tanlash — tuzda Na va S atomlari o'zaro bog'langan emas.

---

### 7-savol · [1,3 ball] · **C**

**Shart:** 15 % li eritmadan 36 g H₂O bug'latildi va to'yingan eritma (S = 25) hosil bo'ldi. Eritma massasi 2 marta kamaydi. Cho'kmaga tushgan tuz massasini toping.

**Qoida:** \`S = 25\` → 100 g suvda 25 g tuz → to'yingan eritmada \`ω = 25/125 = 20 %\`.
*Nega aynan u:* eruvchanlikni darhol massa ulushiga aylantirmasa, ikki xil o'lchov (suvga nisbatan va eritmaga nisbatan) aralashib ketadi.

**Yechim:** Dastlabki eritma massasi — m, cho'kma — x.
1. Massa balansi: m − 36 − x = m/2 → **m = 72 + 2x**.
2. Tuz balansi: 0,15m = 0,20·(m/2) + x → 0,15m − 0,10m = x → **x = 0,05m**.
3. (1) ga qo'yamiz: m = 72 + 0,1m → 0,9m = 72 → **m = 80 g**.
4. x = 0,05 · 80 = **4 g**.

**Javob:** C) 4

**Tipik xato:** To'yingan eritmani 25 % deb olish (S ni to'g'ridan-to'g'ri foiz deb o'qish); cho'kmani eritma massasidan ayirmaslik — u ham eritmadan chiqib ketadi.

---

### 8-savol · [1,3 ball] · **A**

**Shart:** Temir plastinka HCl eritmasiga tushirildi, 0,75 mol gaz ajraldi. Olingan plastinka AgNO₃ eritmasiga tushirilganda **ikkala holatda** plastinka massasi 22 g ortdi. Plastinkaga o'tgan kumush miqdorini (mol) toping.

**Qoida:** Plastinka massasining o'zgarishi = (cho'kkan metall massasi) − (erigan metall massasi).
*Nega aynan u:* "ikkala holatda ... 22 g ortdi" — ikki bosqichning **yig'indi** balansi so'ralmoqda.

**Yechim:**
1. Fe + 2HCl → FeCl₂ + H₂↑. n(H₂) = 0,75 → n(Fe) erigan = 0,75 mol → massa **−42 g**.
2. Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag↓. Erigan Fe — n mol, cho'kkan Ag — 2n mol.
   Massa o'zgarishi: 216n − 56n = **+160n**.
3. Yig'indi: 160n − 42 = 22 → 160n = 64 → **n = 0,4 mol Fe**.
4. n(Ag) = 2n = **0,8 mol**.

**Javob:** A) 0,8

**Tipik xato:** HCl bosqichidagi 42 g kamayishni hisobga olmay 160n = 22 deb yechish; yoki Ag ni 1 : 1 nisbatda olish (Fe²⁺ ikki zaryadli — 2 ta Ag chiqadi).

---

### 9-savol · [1,3 ball] · **A** *(izohga qarang)*

**Shart:** Kaliy fosfat, alyuminiy sulfat, kalsiy atsetat tarkibidagi jami bog'lar sonini toping.

**Qoida:** Tuzda ion bog'lar soni = kation zaryadi × kation soni; qoldiq ichida kovalent bog'lar strukturaviy formuladan sanaladi.
*Nega aynan u:* "jami" — uchala moddaning **ion + kovalent** bog'lari yig'indisi.

**Yechim:**
1. K₃PO₄: ion 3 (K⁺ ↔ O) + P–O bog'lari 4 → **7**.
2. Al₂(SO₄)₃: ion 3 × 2 = 6 + har bir SO₄²⁻ da 4 ta S–O → 12 → **18**.
3. (CH₃COO)₂Ca: ion 2 + har bir qoldiqda 3 C–H + 1 C–C + 2 C–O = 6 → 12 → **14**.
4. Jami: 7 + 18 + 14 = **39**.

**Javob:** A) 39

> **Izoh (muhim):** agar qo'shbog' σ va π deb **alohida** sanalsa (π: fosfatda 1, sulfatlarda 6, atsetatlarda 2 — jami 9), javob 39 + 9 = **48 (D)** bo'ladi. Ikkala son ham variantlar ichida turibdi — savol ataylab qo'sh o'qiladi. Rasmiy kalitda **39** olingan: "σ va π bog'lar yig'indisi" so'ralganda test shuni aniq yozadi (2-variant, 14-savolga qarang), bu yerda esa "bog'lar soni" deyilgan.

**Tipik xato:** Ion bog'larni umuman sanamaslik (28 chiqadi, variantda yo'q) yoki atsetatdagi C–H bog'larini tushirib qoldirish.

---

### 10-savol · [1,3 ball] · **C**

**Shart:** Yopiq idishga atir sepildi, so'ng og'zi berk holatida makkajo'xori tushirildi. Birozdan so'ng hid yo'qoldi. Qanday jarayon sodir bo'lgan?

**Qoida:** Adsorbsiya — gaz/erigan modda zarralarining qattiq jismning **sirtida** ushlanib qolishi.
*Nega aynan u:* modda yo'qolmadi, kimyoviy o'zgarmadi — faqat g'ovak sirtga o'tirdi.

**Yechim:**
1. Hid — havodagi uchuvchan molekulalar.
2. Makkajo'xori doni (kraxmal, g'ovak sirt) ularni sirtiga yig'adi.
3. Havoda molekula qolmaydi → hid sezilmaydi. Yangi modda hosil bo'lmagan.

**Javob:** C) Adsorbsiya

**Tipik xato:** "Hid yo'qoldi → reaksiya bo'ldi" deb kimyoviy jarayon (A) deyish. Absorbsiya (butun hajm bo'ylab yutilish) bilan adsorbsiyani (sirt) almashtirish.

---

### 11-savol · [2,2 ball] · **A** *(tushmagan)*

**Shart:** K₂Sₓ + (3x+1)K₂S₂O₈ + 4xH₂O → (3x+2)K₂SO₄ + 4xH₂SO₄. 180 g suv sarflanganda 1479 g tuz hosil bo'ldi. x ni toping.

**Qoida:** Tenglamadagi koeffitsiyentlar nisbati — mollar nisbati; x ni noma'lum deb qoldirib, ikki moddadan tenglama tuziladi.
*Nega aynan u:* ikkita berilgan massa (suv va tuz) bitta noma'lumni — x ni yopadi.

**Yechim:** K₂Sₓ miqdori — a mol.
1. n(H₂O) = 180/18 = 10 mol → **4x·a = 10**.
2. n(K₂SO₄) = 1479/174 = **8,5 mol** → **(3x+2)·a = 8,5**.
3. Birinchisidan a = 10/(4x), ikkinchisiga qo'yamiz: (3x+2)·10/(4x) = 8,5.
4. 30x + 20 = 34x → 4x = 20 → **x = 5**.

**Javob:** A) 5

**Tipik xato:** "Tuz" deb K₂SO₄ bilan birga H₂SO₄ ni ham qo'shib yuborish; M(K₂SO₄) ni 158 (KMnO₄ bilan adashtirib) olish.

---

### 12-savol · [2,2 ball] · **B** *(tushmagan)*

**Shart:** Sun'iy radioaktivlik hodisasi — bu ...?

**Qoida:** Sun'iy radioaktivlik — **radioaktiv bo'lmagan** (barqaror) element yadrosini zarralar bilan bombardimon qilib, radioaktiv izotop hosil qilish.
*Nega aynan u:* "sun'iy" so'zi manbaga ishora qiladi — tabiiy beqaror yadro emas, odam tomonidan beqaror qilingan yadro.

**Yechim:**
1. A) radioaktiv elementni bombardimon qilish — bu sun'iy yadro reaksiyasi, lekin boshlang'ich modda allaqachon radioaktiv.
2. C) barqaror holatga o'tish — bu tabiiy yemirilish.
3. B) radioaktiv bo'lmagan element + nur → yangi izotop ✓

**Javob:** B

**Tipik xato:** D variantidagi "beqaror elementlar" so'ziga ilinish — sun'iy radioaktivlikda boshlang'ich yadro **barqaror** bo'ladi.

---

### 13-savol · [2,2 ball] · **D** *(tushmagan)*

**Shart:** 32 % li CuSO₄ eritmasi noto'liq elektroliz qilinganda olingan eritmada 16,7 % sulfat kislota aniqlandi. Elektroliz unumini (%) toping.

**Qoida:** CuSO₄ eritmasi elektrolizi: CuSO₄ + H₂O → Cu↓ + H₂SO₄ + ½O₂↑; eritma massasi **Cu va O₂ hisobiga** kamayadi.
*Nega aynan u:* unum = reaksiyaga kirgan CuSO₄ / dastlabki CuSO₄, demak massa ulushi orqali reaksiyaga kirgan qismni topish kerak.

**Yechim:** 100 g eritma olamiz.
1. n(CuSO₄) = 32/160 = **0,2 mol**.
2. x mol parchalansa: eritmadan chiqadi 64x (Cu) + 16x (½O₂) = **80x g**.
3. Hosil bo'lgan H₂SO₄ = 98x g; eritma massasi = 100 − 80x.
4. 98x/(100 − 80x) = 0,167 → 98x = 16,7 − 13,36x → 111,36x = 16,7 → **x = 0,15**.
5. Unum = 0,15/0,2 = **75 %**.

**Javob:** D) 75

**Tipik xato:** Faqat Cu ni ayirib, ajralgan O₂ ni eritmada qoldirish (javob 60 % chiqadi — C tuzog'i); 16,7 % ni dastlabki massaga nisbatan hisoblash.

---

### 14-savol · [2,2 ball] · **B**

**Shart:** Qaysi reaksiyada kislotali oksiddan yana kislotali oksid olinadi?

**Qoida:** Nometall oksidi yuqori oksidlanish darajasida — kislotali; CO va NO — **befarq (indifferent)** oksidlar.
*Nega aynan u:* savol ikki tomonni ham tekshiradi — boshlang'ich ham, mahsulot ham kislotali bo'lishi shart.

**Yechim:**
1. A) SiO₂ + C → Si + CO: mahsulot oddiy modda va befarq oksid ✗
2. B) 2SO₂ + O₂ → 2SO₃: kislotali → kislotali ✓
3. C) 2NO + O₂ → 2NO₂: NO **befarq** oksid, boshlang'ichi kislotali emas ✗
4. D) CO₂ + C → 2CO: mahsulot befarq ✗

**Javob:** B) SO₂ + O₂ →

**Tipik xato:** NO ni kislotali oksid deb hisoblash. NO va CO ning kislotasi yo'q — ishqor bilan tuz bermaydi.

---

### 15-savol · [2,2 ball] · **D**

**Shart:** NH₃ + CuO = A + B + C; m(A) − m(B) = 16,4 g. A nitrat kislota bilan ta'sirlashadi, B havo tarkibida bor, C Na bilan ta'sirlashib molekulyar D hosil qildi. D moddaga teng miqdordagi sianid kislota massasini toping.

**Qoida:** Ammiakning metall oksidi bilan qaytarilishi: 2NH₃ + 3CuO → 3Cu + N₂ + 3H₂O.
*Nega aynan u:* A, B, C ning xossalari tenglamani bir qiymatli tiklaydi: Cu (HNO₃ bilan reaksiya), N₂ (havoda), H₂O.

**Yechim:**
1. n(N₂) = n deb olamiz → n(Cu) = 3n, n(H₂O) = 3n.
2. m(Cu) − m(N₂) = 192n − 28n = 164n = 16,4 → **n = 0,1 mol**.
3. n(H₂O) = 0,3 mol. 2Na + 2H₂O → 2NaOH + H₂↑ → n(H₂) = **0,15 mol** (D = H₂).
4. n(HCN) = 0,15 mol; M(HCN) = 27 → m = **4,05 g**.

**Javob:** D) 4,05

**Tipik xato:** D ni NaOH deb olish — shartda "**molekulyar** modda" deyilgan, bu H₂; suvdan vodorodni 1 : 1 olish (2 mol suvdan 1 mol H₂ chiqadi).

---

### 16-savol · [2,2 ball] · **B** *(savol shartida nuqson bor)*

**Shart:** Qishloq xo'jaligida akaritsidlar qanday maqsadda ishlatiladi?

**Qoida:** Pestitsid turlari: gerbitsid — begona o't, insektitsid — hasharot, fungitsid — zamburug', zootsid — kemiruvchi, defoliant — barg to'kish, **akaritsid — kanalar (klesh)**.

**Yechim:**
1. Variantlarda "kanalarga qarshi" yo'q.
2. Kana — bo'g'imoyoqli, hasharotlarga eng yaqin guruh → variantlar ichidan **B** olinadi.

**Javob:** B) Zararli kapalaklarga qarshi *(rasmiy kalit)*

> **Izoh:** akaritsid aniq ta'rif bo'yicha **kanalarga** qarshi vosita, kapalaklarga qarshi emas (u — insektitsid). Savol noto'g'ri tuzilgan; o'quvchi "to'g'ri javob yo'q" desa, u xato qilmagan.

**Tipik xato:** Akaritsid va fungitsidni almashtirish.

---

### 17-savol · [2,2 ball] · **B**

**Shart:** Cl⁻ + MnO₄⁻ + H⁺ = ... O'ng tomondagi koeffitsiyentlar yig'indisini aniqlang.

**Qoida:** Elektron-ion (yarim reaksiya) usuli; kislotali muhitda MnO₄⁻ → Mn²⁺.
*Nega aynan u:* H⁺ berilgan — muhit kislotali, demak marganes +2 gacha qaytariladi (neytral muhitda MnO₂, ishqoriyda MnO₄²⁻ bo'lardi).

**Yechim:**
1. 2Cl⁻ − 2e⁻ → Cl₂ ⎸ ×5
2. MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O ⎸ ×2
3. 10Cl⁻ + 2MnO₄⁻ + 16H⁺ → 5Cl₂ + 2Mn²⁺ + 8H₂O
4. O'ng tomon: 5 + 2 + 8 = **15**.

**Javob:** B) 15

**Tipik xato:** Kislotali muhitda MnO₂ hosil qilish; faqat Cl₂ koeffitsiyentini (5) yozib qo'yish — C tuzog'i.

---

### 18-savol · [2,2 ball] · **A**

**Shart:** Qaysi birikmalarda uglerodning oksidlanish darajasi bir xil?

**Qoida:** Uglerodning o.d. = (birikmadagi qolgan atomlar zaryadlari balansidan); Al₄C₃ da C metall bilan birikkan → −4.

**Yechim:**
1. Al₄C₃: Al⁺³ · 4 = +12 → 3C = −12 → C = **−4**. CH₄: C = **−4** ✓
2. CO (+2) va CO₂ (+4) ✗ · CO₂ (+4) va CH₄ (−4) ✗
3. CH₃OH (−2) va HCOOH (+2) ✗

**Javob:** A) Al₄C₃ va CH₄

**Tipik xato:** Al₄C₃ dagi uglerodni +4 deb olish (metall bilan birikkanda uglerod **manfiy**); organik moddada o'rtacha o.d. ni noto'g'ri sanash.

---

### 19-savol · [2,2 ball] · **D** *(tushmagan)*

**Shart:** A → B + NH₃ + H₂O · B + SiO₂ → E + Na₂SiO₃ · E + C → D + CO. A va D moddalar molyar massalari farqini toping.

**Qoida:** Zanjirni **oxiridan** emas, o'rtadan ochish: Na₂SiO₃ hosil bo'lishi B tarkibida natriy borligini ko'rsatadi.
*Nega aynan u:* A ning parchalanishidan NH₃ va H₂O chiqishi — ammoniyli tuzga ishora; natriy + ammoniy + parchalanish → mikrokosmik tuz.

**Yechim:**
1. A = NaNH₄HPO₄ (mikrokosmik tuz) → NaPO₃ + NH₃↑ + H₂O↑ → **B = NaPO₃**.
2. 2NaPO₃ + SiO₂ → P₂O₅ + Na₂SiO₃ → **E = P₂O₅**.
3. P₂O₅ + 5C → 2P + 5CO → **D = P** (M = 31).
4. M(A) = 23 + 18 + 1 + 31 + 64 = **137**; farq = 137 − 31 = **106**.

**Javob:** D) 106

**Tipik xato:** B ni Na₂CO₃ deb olish — u holda E = CO₂ va uchinchi reaksiya D = CO beradi, D va CO bitta modda bo'lib qoladi, zanjir buziladi.

---

### 20-savol · [2,2 ball] · **A**

**Shart:** Geksanning barcha izomerlarida to'rtlamchi uglerod atomi nechta?

**Qoida:** To'rtlamchi uglerod — **4 ta uglerod** bilan bog'langan atom.
*Nega aynan u:* "to'rtlamchi" atomning valentligi emas, qo'shni uglerodlar soni bilan aniqlanadi.

**Yechim:** Geksanning 5 ta izomeri:
1. n-geksan — yo'q · 2-metilpentan — uchlamchi bor, to'rtlamchi yo'q · 3-metilpentan — yo'q
2. 2,2-dimetilbutan — C2 atomi 4 ta uglerod bilan bog'langan → **1 ta**
3. 2,3-dimetilbutan — ikkita uchlamchi, to'rtlamchi yo'q.

**Javob:** A) 1

**Tipik xato:** Geksanning izomerlarini 4 ta yoki 6 ta deb sanash; uchlamchi atomni to'rtlamchi deb belgilash.

---

### 21-savol · [2,2 ball] · **A**

**Shart:** 2-metilbutan kislotasi molekulasi asosiy zanjiridagi uglerodlarning (raqamlash bo'yicha) oksidlanish darajalari.

**Qoida:** Uglerodning o.d. = (−1 × H soni) + (+1 × O bilan bog' soni), C–C bog' nolga teng.
*Nega aynan u:* organik moddada har bir uglerod **alohida** sanaladi, o'rtacha qiymat emas.

**Yechim:** CH₃–CH₂–CH(CH₃)–COOH, raqamlash karboksildan:
1. C1 (–COOH): 3 ta kislorod bog'i → **+3**
2. C2: 3 ta C va 1 ta H → **−1**
3. C3 (–CH₂–): 2 ta H → **−2**
4. C4 (–CH₃): 3 ta H → **−3**

**Javob:** A) +3; −1; −2; −3

**Tipik xato:** Raqamlashni metil uchidan boshlash (javob teskari chiqadi) yoki C2 ni shoxchasi borligini hisobga olmay −2 deb olish.

---

### 22-savol · [2,2 ball] · **A**

**Shart:** 100 g "Makcofe" kukunida 88,4 g uglevod, uglevod tarkibida 72,2 g shakar. 20 g kukun 180 g suvda eritilsa, eritmadagi shakarning **massa ulushini** aniqlang.

**Qoida:** \`ω = m(modda)/m(eritma)\`; massa ulushi — **birlik ulush**, foiz emas, agar savol "ulush" desa.
*Nega aynan u:* javob variantlarida 0,0722 va 7,22 birga turibdi — farq o'lchov birligida.

**Yechim:**
1. 100 g kukunda 72,2 g shakar → 20 g kukunda 72,2 · 0,2 = **14,44 g**.
2. Eritma massasi = 20 + 180 = **200 g**.
3. ω = 14,44/200 = **0,0722**.

**Javob:** A) 0,0722

**Tipik xato:** 88,4 ni ham ko'paytirib ikki marta hisoblash (shakar allaqachon uglevod ichida); ulushni foizga aylantirib 7,22 (B) ni belgilash.

---

### 23-savol · [2,2 ball] · **C**

**Shart:** Noma'lum alkanning ¾ qismi yondirilganda 1,8 mol CO₂ olindi; qolgani to'liq xlorlanganda 64 g xlorli birikma olindi. Alkanni aniqlang.

**Qoida:** To'liq xlorlanish — barcha vodorodning o'rnini xlor egallaydi: CₖH₂ₖ₊₂ → CₖCl₂ₖ₊₂.
*Nega aynan u:* "to'liq" so'zi mahsulot formulasini bir qiymatli beradi, aks holda aralashma chiqardi.

**Yechim:** Alkan — n mol, uglerodlar soni — k.
1. (3n/4)·k = 1,8 → **n·k = 2,4**.
2. M(CₖCl₂ₖ₊₂) = 12k + 35,5(2k+2) = **83k + 71**.
3. (n/4)(83k + 71) = 64 → n(83k + 71) = 256.
4. n = 2,4/k ni qo'yamiz: 2,4(83k + 71) = 256k → 199,2k + 170,4 = 256k → 56,8k = 170,4 → **k = 3**.

**Javob:** C) propan

**Tipik xato:** Xlorlanishni bitta vodorod almashinishi (CₖH₂ₖ₊₁Cl) deb olish; ¾ va ¼ qismlarni teng deb hisoblash.

---

### 24-savol · [2,2 ball] · **B**

**Shart:** 30 g spirt ikkiga bo'lindi; birinchi qismidan karbon kislota olindi va ikkinchi qismiga qo'shilib eterifikatsiyadan 29 g modda hosil bo'ldi. Dastlabki spirtni aniqlang.

**Qoida:** Birlamchi spirtning oksidlanishi uglerod sonini o'zgartirmaydi: M(kislota) = M(spirt) + 14. Eterifikatsiya: M(efir) = M(kislota) + M(spirt) − 18.
*Nega aynan u:* ikkala qism **bir xil** moddadan, demak hammasi bitta M orqali ifodalanadi.

**Yechim:** Spirt molyar massasi — M, har bir qism 15 g.
1. Har bir qismda n = 15/M mol.
2. M(efir) = (M + 14) + M − 18 = **2M − 4**.
3. (15/M)(2M − 4) = 29 → 30M − 60 = 29M → **M = 60** → C₃H₇OH.
4. Tekshirish: n = 0,25 mol; propilpropionat M = 116 → 0,25 · 116 = 29 g ✓

**Javob:** B) Propanol

**Tipik xato:** 30 g ning hammasini bitta reaksiyaga kiritish; efir massasini "kislota + spirt" deb suvni ayirmaslik.

---

### 25-savol · [2,2 ball] · **C**

**Shart:** C₆H₅NO₂ + H₂ → C₆H₅NH₂ + … O'ng tomondagi barcha koeffitsiyentlar yig'indisini aniqlang.

**Qoida:** Zinin reaksiyasi: nitrobirikmaning qaytarilishi, kislorod suvga ketadi.

**Yechim:**
1. C₆H₅NO₂ + 3H₂ → C₆H₅NH₂ + 2H₂O.
2. Tekshirish: chapda H = 5 + 6 = 11... (kislorod 2 ta → 2H₂O ✓, vodorod: 5 + 6 = 11 = 7 + 4 ✓)
3. O'ng tomon koeffitsiyentlari: 1 + 2 = **3**.

**Javob:** C) 3

**Tipik xato:** Chap tomonni ham qo'shib 1 + 3 + 1 + 2 = 7 deb yuborish; suvni unutib 1 deb javob berish.

---

### 26-savol · [2,2 ball] · **B**

**Shart:** Kislorod ozonatordan o'tkazilganda hajm 20 % ga kamaydi. Hosil bo'lgan gazlar aralashmasidagi kislorodning **massa ulushini** (%) toping.

**Qoida:** 3O₂ → 2O₃ — hajm kamayadi, **massa saqlanadi**.
*Nega aynan u:* hajm orqali mol o'zgarishini, massa saqlanishi orqali esa massa ulushini topamiz.

**Yechim:** 100 mol O₂ olamiz.
1. Reaksiyaga x mol O₂ kirsa, 2x/3 mol O₃ hosil bo'ladi; hajm kamayishi = x − 2x/3 = x/3.
2. x/3 = 20 → **x = 60 mol**.
3. Qoldi: O₂ = 40 mol (1280 g), O₃ = 40 mol (1920 g). Jami 3200 g.
4. ω(O₂) = 1280/3200 = **40 %**.

**Javob:** B) 40

**Tipik xato:** Hajm ulushi (50 %) ni javob deb belgilash (D tuzog'i); O₃ ni 60 mol deb olish — 3 mol O₂ dan 2 mol O₃ chiqadi.

---

### 27-savol · [3,2 ball] · **A**

**Shart:** 0,1 mol maltoza va 0,4 mol saxaroza gidrolizlanganda hosil bo'lgan moddalar Cu(OH)₂ eritmasiga yuttirildi. Hosil bo'lgan **organik** modda massasini toping.

**Qoida:** Maltoza → 2 glyukoza; saxaroza → glyukoza + fruktoza. Cu(OH)₂ bilan qizdirilganda faqat **aldegid guruhli** monosaxarid oksidlanadi (glyukoza → glyukon kislota).
*Nega aynan u:* fruktoza — ketoza, maktab kursida u Cu(OH)₂ bilan "kumush ko'zgu" turidagi oksidlanishga kirishmaydi.

**Yechim:**
1. Maltozadan: 0,1 · 2 = 0,2 mol glyukoza.
2. Saxarozadan: 0,4 mol glyukoza + 0,4 mol fruktoza.
3. Jami glyukoza = **0,6 mol** → 0,6 mol glyukon kislota (C₆H₁₂O₇, M = 196).
4. m = 0,6 · 196 = **117,6 g**.

**Javob:** A) 117,6

**Tipik xato:** Fruktozani ham oksidlab 1,0 mol deb hisoblash (196 g); maltozadan 1 mol glyukoza chiqadi deb olish; organik modda o'rniga Cu₂O (cho'kma) massasini topish.

---

### 28-savol · [3,2 ball] · **D**

**Shart:** 200 ta (–CH₂–CH₂–)₂₀₀ va 300 ta (–CH₂–CH₂–)₃₀₀ molekuladan hosil bo'lgan aralashmaning o'rtacha molyar massasi.

**Qoida:** O'rtacha molyar massa = Σ(nᵢMᵢ)/Σnᵢ — **molekulalar soni** bo'yicha vaznlangan o'rtacha.
*Nega aynan u:* berilgani massa emas, molekulalar soni — demak oddiy o'rtacha (7000) noto'g'ri.

**Yechim:**
1. M₁ = 200 · 28 = 5600, N₁ = 200 ta.
2. M₂ = 300 · 28 = 8400, N₂ = 300 ta.
3. M̄ = (200·5600 + 300·8400)/500 = (1 120 000 + 2 520 000)/500 = **7280**.

**Javob:** D) 7280

**Tipik xato:** (5600 + 8400)/2 = 7000 (A tuzog'i) — molekulalar soni teng emas.

---

### 29-savol · [3,2 ball] · **D** *(tushmagan)*

**Shart:** Qaysi moddalar tarkibiga **fenol yadrosi kirmaydi**? 1. Geksaxloran 2. Pikrin kislota 3. Trotil 4. Tribromanilin 5. Salitsil kislota 6. Pirokatexin 7. Benzil spirt

**Qoida:** Fenol yadrosi = benzol halqasi **+ unga bevosita birikkan –OH**.
*Nega aynan u:* halqaning o'zi yetarli emas; OH yon zanjirda bo'lsa (benzil spirt) — bu fenol emas, spirt.

**Yechim:**
1. Geksaxloran C₆H₆Cl₆ — halqa to'yingan, OH yo'q → **kirmaydi**
2. Pikrin kislota = 2,4,6-trinitrofenol → kiradi
3. Trotil = trinitrotoluol, OH yo'q → **kirmaydi**
4. Tribromanilin — NH₂ bor, OH yo'q → **kirmaydi**
5. Salitsil kislota — halqada OH ✓ kiradi
6. Pirokatexin — ikki OH halqada ✓ kiradi
7. Benzil spirt C₆H₅CH₂OH — OH yon zanjirda → **kirmaydi**

**Javob:** D) 1,3,4,7

**Tipik xato:** Benzil spirtni fenol deb hisoblash — eng keng tarqalgani; geksaxloranni aromatik deb o'ylash.

---

### 30-savol · [2,2 ball] · **C** *(tushmagan)*

**Shart:** KMnO₄ eritmasi uchta probirkaga bo'lindi, har biriga NaNO₂ solindi: 1-ga H₂SO₄, 2-ga distillangan suv, 3-ga KOH tomizildi. Qaysi probirka **qoramtir-qo'ng'ir** rangga kiradi?

**Qoida:** KMnO₄ ning qaytarilish mahsuloti muhitga bog'liq: kislotali → Mn²⁺ (rangsiz), **neytral → MnO₂ (qo'ng'ir cho'kma)**, ishqoriy → MnO₄²⁻ (yashil).
*Nega aynan u:* uchala probirkada qaytaruvchi bir xil (NaNO₂), farq faqat muhitda.

**Yechim:**
1. 1-probirka (kislotali): 2KMnO₄ + 5NaNO₂ + 3H₂SO₄ → rangsizlanadi.
2. 2-probirka (neytral): 2KMnO₄ + 3NaNO₂ + H₂O → 2MnO₂↓ + ... → **qoramtir-qo'ng'ir**.
3. 3-probirka (ishqoriy): → K₂MnO₄, yashil.

**Javob:** C) 2 raqamli

**Tipik xato:** Neytral va ishqoriy muhit mahsulotlarini almashtirish (MnO₂ ni ishqoriy muhitga biriktirish).

---

### 31-savol · [2,2 ball] · **B** *(rasmli)*

**Shart:** Qaysi belgi nomi noto'g'ri berilgan? (radioaktiv modda / kimyo xonasida ovqatlanish mumkin / o'yuvchi modda / yonuvchi modda)

**Qoida:** Laboratoriya belgilarining aksariyati **ta'qiqlovchi** — ruxsat beruvchi belgi bo'lmaydi.

**Yechim:** Kimyo xonasida ovqatlanish har qanday holatda **ta'qiqlanadi**; belgi "ovqatlanish mumkin" deb nomlanishi mumkin emas.

**Javob:** B) kimyo xonasida ovqatlanish mumkin

**Tipik xato:** Belgilarning shaklini eslamay tasodifiy tanlash — bu savolda rasmni bilmasa ham **mantiq** javobni beradi.

---

### 32-savol · [2,2 ball] · **A** *(rasmli · izohga qarang)*

**Shart:** Rasmda moddalarni ajratishning qaysi usuli berilgan? (rasmda: shtativdagi kolba, qizdirgich, **suv sovutgichli (Libix) xolodilnik** va qabul qiluvchi kolba)

**Qoida:** Sovutgich orqali bug'ni kondensatlab yig'ish — **distillash (haydash)**; dekantatsiya — cho'kma ustidagi suyuqlikni ag'darib olish; xromatografiya — yutilish tezligi farqiga asoslanadi.

**Yechim:**
1. Rasmda isitgich + xolodilnik + qabul qilgich bor → bug'lanish va kondensatlanish.
2. Bu — distillash qurilmasi.

**Javob:** A) Distirlash

> **Izoh:** A) "Distirlash" va B) "Haydash" — aslida **bitta usulning ikki nomi**; savol nuqsonli. Rasmdagi suv sovutgichi aynan *distillash* qurilmasining belgisi bo'lgani uchun A olinadi. O'quvchi B desa, bahsli deb hisoblang.

**Tipik xato:** Dekantatsiya bilan chalkashtirish (unda isitgich ham, xolodilnik ham bo'lmaydi).

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** Ketma-ket ulangan eritmalar orqali elektroliz; tok miqdori **1 F**.
Eritmalar: 300 ml 2M AgNO₃ · 250 ml 3M CuSO₄ · 500 ml 0,5M AuCl₃.
Katodda hosil bo'lgan **moddalar** massasi: a, b, c.
Variantlar: A) 49,25 B) 64,8 C) 49,5 D) 48 E) 32 F) 65,2

**Umumiy qoida:** Ketma-ket ulanishda **har bir idishdan bir xil tok** o'tadi → har biriga 1 mol elektron. Metall ioni tugasa, katodda **suv qaytariladi** (H₂ ajraladi) va uning massasi ham "katodda hosil bo'lgan moddalar"ga kiradi — savol shuning uchun **"moddalar"** deb ko'plikda yozilgan.

---

### 33-savol · [2,2 ball] · **F**

**Yechim (AgNO₃):**
1. n(Ag⁺) = 0,3 l · 2 mol/l = **0,6 mol**; Ag⁺ + e⁻ → Ag — 0,6 F yetadi.
2. m(Ag) = 0,6 · 108 = **64,8 g**.
3. Qolgan 0,4 F suvga: 2H₂O + 2e⁻ → H₂ + 2OH⁻ → n(H₂) = 0,2 mol → **0,4 g**.
4. a = 64,8 + 0,4 = **65,2 g**.

**Javob:** F) 65,2

**Tipik xato:** 64,8 (B) — vodorodni unutish. Variantlar ataylab juft-juft qilib berilgan: 64,8/65,2 va 49,25/49,5.

---

### 34-savol · [2,2 ball] · **E**

**Yechim (CuSO₄):**
1. n(Cu²⁺) = 0,25 · 3 = 0,75 mol — bu 1,5 F talab qiladi, bizda 1 F.
2. Demak mis **ortiqcha**, hammasi tok bilan cheklanadi: Cu²⁺ + 2e⁻ → Cu → n(Cu) = 1/2 = 0,5 mol.
3. b = 0,5 · 64 = **32 g**. Vodorod ajralmaydi.

**Javob:** E) 32

**Tipik xato:** Konsentratsiyaga qarab 0,75 mol Cu (48 g — D tuzog'i) deb olish; cheklovchi omil bu yerda **tok**.

---

### 35-savol · [2,2 ball] · **C**

**Yechim (AuCl₃):**
1. n(Au³⁺) = 0,5 · 0,5 = **0,25 mol**; Au³⁺ + 3e⁻ → Au → 0,75 F sarflanadi.
2. m(Au) = 0,25 · 197 = **49,25 g**.
3. Qolgan 0,25 F → n(H₂) = 0,125 mol → **0,25 g**.
4. c = 49,25 + 0,25 = **49,5 g**.

**Javob:** C) 49,5

**Tipik xato:** 1 F ni 1 mol Au ga bo'lish (3 ta elektron kerak); vodorodni qo'shmay 49,25 (A) deb javob berish.

---

## III QISM — yozma topshiriqlar (36–45)

> Har bir topshiriq: **a) 1,5 ball · b) 1,7 ball**. Quyida har bandning ball taqsimoti berilgan — saytga aynan shu katakchalar kiritiladi.

---

### 36-topshiriq · [3,2 ball]

**Shart:** Xrom(II) va xrom(III) sulfidlarining massa farqi 4,8 g. Protonlar yig'indisi 26,4·N_A.
a) Cr₂S₃ massasini toping. b) Shu aralashma HCl da eritilganda necha litr gaz ajraladi?

**Qoida:** Ikki noma'lumli sistema: massa farqi + protonlar balansi. Proton soni = tartib raqamlari yig'indisi (Cr = 24, S = 16).
*Nega aynan u:* ikkita bog'liqsiz shart ikkita noma'lumni (CrS va Cr₂S₃ mollari) yopadi.

**Yechim:** x = n(CrS), y = n(Cr₂S₃).
1. M(CrS) = 84; M(Cr₂S₃) = 200.
2. Protonlar: CrS → 24 + 16 = 40; Cr₂S₃ → 48 + 48 = 96 → **40x + 96y = 26,4**.
3. Massa farqi: 200y − 84x = 4,8.
4. Birinchisidan x = 0,66 − 2,4y; qo'yamiz: 200y − 84(0,66 − 2,4y) = 4,8 → 401,6y = 60,24 → **y = 0,15**, **x = 0,30**.
5. **a)** m(Cr₂S₃) = 0,15 · 200 = **30 g**.
6. **b)** CrS + 2HCl → CrCl₂ + H₂S↑ · Cr₂S₃ + 6HCl → 2CrCl₃ + 3H₂S↑
   n(H₂S) = 0,30 + 3·0,15 = **0,75 mol** → V = 0,75 · 22,4 = **16,8 l**.

**Javob:** a) 30 g · b) 16,8 l

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| Ikkala sulfid formulasi va M qiymatlari to'g'ri | 0,3 |
| Protonlar tenglamasi to'g'ri tuzilgan (40x + 96y = 26,4) | 0,4 |
| Massa farqi tenglamasi to'g'ri | 0,3 |
| Sistema yechilib y = 0,15 topilgan | 0,3 |
| Javob 30 g | 0,2 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| Ikkala reaksiya tenglamasi yozilgan va tenglashtirilgan | 0,6 |
| H₂S nisbatlari to'g'ri (1 : 1 va 1 : 3) | 0,5 |
| n(H₂S) = 0,75 mol | 0,3 |
| V = 16,8 l (n.sh. ga o'tkazish) | 0,3 |

**Tipik xato:** Cr₂S₃ dagi H₂S ni 1 mol deb olish (3 mol chiqadi); protonlarni N_A ga ko'paytirib emas, bo'lib yuborish; massa farqini "84x − 200y" deb teskari yozish.

---

### 37-topshiriq · [3,2 ball] *(shartda nomuvofiqlik bor — izohga qarang)*

**Shart:** Propadiyen, propilen, pentadiyen-1,4 va vinilsiklopentendan iborat aralashma to'liq vodorod bilan qaytarildi; sarflangan H₂ hajmi uglevodorodlar yonishidan hosil bo'lgan CO₂ hajmidan **ikki marta kam**.
a) Boshlang'ich aralashma 0,4 mol bo'lsa, propadiyen massasini (g) toping.
b) Dastlabki aralashmada 10 g propadiyen bo'lsa, necha mol aralashma bo'lgan?

**Qoida:** Qo'shilgan H₂ = **π-bog'lar soni**; CO₂ = uglerodlar soni. Shart: n(CO₂) = 2·n(H₂) → har bir modda uchun \`k − 2p\` "balans koeffitsiyenti" kiritiladi (k — uglerod, p — qo'shbog').
*Nega aynan u:* to'g'ridan-to'g'ri mollar topilmaydi; shart aralashmaning **tarkibiga cheklov** qo'yadi.

**Yechim:**
1. Propadiyen C₃H₄: k = 3, p = 2 → k − 2p = **−1**.
2. Propilen C₃H₆: 3 − 2 = **+1** · pentadiyen-1,4 C₅H₈: 5 − 4 = **+1** · vinilsiklopenten: kalitda **+1**.
3. Shart: Σ(k − 2p)·nᵢ = 0 → n(propadiyen) = n(qolgan uchtasi).
4. Demak propadiyen aralashmaning **yarmini** tashkil etadi.
5. **a)** n = 0,4/2 = 0,2 mol → m = 0,2 · 40 = **8 g**.
6. **b)** n(C₃H₄) = 10/40 = 0,25 mol → jami = 0,25 · 2 = **0,5 mol**.

**Javob:** a) 8 g · b) 0,5 mol

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| H₂ = π-bog'lar soni ekanligi ko'rsatilgan | 0,3 |
| CO₂ = uglerodlar soni | 0,2 |
| n(CO₂) = 2n(H₂) shartidan tenglama tuzilgan | 0,5 |
| Propadiyen ulushi ½ ekani chiqarilgan | 0,3 |
| m = 8 g | 0,2 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| n(C₃H₄) = 10/40 = 0,25 mol | 0,6 |
| a) dagi ½ munosabatidan foydalanilgan | 0,7 |
| Javob 0,5 mol | 0,4 |

> **Izoh:** vinilsiklopenten (C₇H₁₀) uchun k − 2p = 7 − 4 = **+3**, +1 emas. Shu holatda javob bir qiymatli chiqmaydi (propadiyen 0,2–0,3 mol oralig'ida bo'ladi). Rasmiy kalit to'rtinchi moddani ham "+1" deb olgan — ehtimol **vinilsiklopentadiyen** nazarda tutilgan. O'quvchi 0,2–0,3 oralig'ini asoslab bersa, uni xato deb hisoblamang.

**Tipik xato:** Siklning o'zini vodorod biriktiradi deb hisoblash (halqa gidrogenlanmaydi); "ikki marta kam" ni teskari o'qib H₂ = 2CO₂ deb olish.

---

### 38-topshiriq · [3,2 ball]

**Shart:** Qaynoq KOH eritmasiga Cl₂ yuttirildi; olingan tuzlar qattiq qizdirilganda aralashmada 2,3 mol KCl va 0,1 mol bertole tuzi qoldi.
a) Tuzning parchalanish unumini (%) toping. b) Reaksiyaga kirishgan xlor qancha mol temir bilan reaksiyaga kirisha oladi?

**Qoida:** Xlorning **issiq** ishqor bilan disproporsiyalanishi: 3Cl₂ + 6KOH → 5KCl + KClO₃ + 3H₂O (sovuqda — KClO bo'lardi). Qizdirishda: 2KClO₃ → 2KCl + 3O₂.
*Nega aynan u:* "qaynoq" so'zi mahsulotni (KClO₃) bir qiymatli belgilaydi — bu masalaning kaliti.

**Yechim:** Boshlang'ich KClO₃ — y mol, demak KCl — 5y mol; parchalangani — z mol.
1. Qizdirishdan keyin: KClO₃ qoldi **y − z = 0,1**.
2. KCl bo'ldi **5y + z = 2,3**.
3. Qo'shamiz: 6y = 2,4 → **y = 0,4**, **z = 0,3**.
4. **a)** Unum = 0,3/0,4 = **75 %**.
5. **b)** n(Cl₂) = 3y = **1,2 mol**; 2Fe + 3Cl₂ → 2FeCl₃ → n(Fe) = 2/3 · 1,2 = **0,8 mol**.

**Javob:** a) 75 % · b) 0,8 mol

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| Issiq ishqor bilan reaksiya to'g'ri yozilgan (KClO₃, 5:1) | 0,5 |
| KClO₃ parchalanish tenglamasi | 0,3 |
| Ikki tenglamali sistema tuzilgan | 0,4 |
| Unum 75 % | 0,3 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| n(Cl₂) = 3y = 1,2 mol (boshlang'ich xlor) | 0,7 |
| 2Fe + 3Cl₂ → 2FeCl₃ tenglamasi | 0,5 |
| n(Fe) = 0,8 mol | 0,5 |

**Tipik xato:** Sovuq ishqor tenglamasini (KClO) ishlatish; b) da qolgan emas, **reaksiyaga kirishgan** xlor so'ralganini payqamaslik; FeCl₂ deb yozib nisbatni 1:1 olish.

---

### 39-topshiriq · [3,2 ball]

**Shart:** Ikkita elektron pog'onadagi maksimal elektron va yacheykalar soni jami 75 ta; bosh kvant soni katta pog'onaga maksimal 32 ta elektron sig'adi.
a) Pog'onalarning bosh kvant sonlari nisbati. b) Bosh kvant soni kichik pog'onada nechta elektron bo'ladi?

**Qoida:** Pog'onada maksimal elektron \`2n²\`, yacheykalar (orbitallar) \`n²\` → jami \`3n²\`.
*Nega aynan u:* "elektron va yacheykalar soni" birga berilgani uchun 3n² ko'rinishidagi qulay ifoda chiqadi.

**Yechim:**
1. 2n² = 32 → n² = 16 → **n = 4** (katta pog'ona).
2. Uning hissasi: 32 + 16 = **48**.
3. Ikkinchisiga qoldi: 75 − 48 = 27 = 3n² → n² = 9 → **n = 3**.
4. **a)** Nisbat (kichik : katta) = **3 : 4**.
5. **b)** n = 3 → 2 · 9 = **18 ta elektron**.

**Javob:** a) 3 : 4 · b) 18

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| 2n² va n² formulalari ko'rsatilgan | 0,4 |
| 32 dan n = 4 topilgan | 0,4 |
| 75 − 48 = 27 → n = 3 | 0,5 |
| Nisbat 3 : 4 | 0,2 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| Kichik pog'ona n = 3 ekani aniqlangan | 0,8 |
| Maksimal elektron 2n² = 18 | 0,6 |
| Javob to'g'ri yozilgan | 0,3 |

**Tipik xato:** Yacheykalar sonini 2n² deb olish; 75 ni ikkiga bo'lib boshlash; javobda elektron o'rniga orbitallar sonini (9) berish.

---

### 40-topshiriq · [3,2 ball]

**Shart:** 342 g 30 % li Ba(OH)₂ eritmasi bilan CO₂ ning to'liq reaksiyasidan 39,4 g cho'kma hosil bo'ldi.
a) Reaksiyada qatnashgan CO₂ mollari. b) Hosil bo'lgan eritmadagi suv massasini aniqlang.

**Qoida:** CO₂ ortiqcha bo'lsa cho'kma qayta eriydi: BaCO₃ + CO₂ + H₂O → Ba(HCO₃)₂. Cho'kma ishqordan **kam** bo'lsa — demak ikkita mahsulot bor.
*Nega aynan u:* 0,6 mol Ba(OH)₂ dan faqat 0,2 mol cho'kma chiqqan — qolgan bariy eritmada gidrokarbonat holida.

**Yechim:**
1. m(Ba(OH)₂) = 342 · 0,3 = 102,6 g → n = 102,6/171 = **0,6 mol**. Suv = 342 − 102,6 = **239,4 g**.
2. n(BaCO₃) = 39,4/197 = **0,2 mol**.
3. Ba(OH)₂ + CO₂ → BaCO₃↓ + H₂O — 0,2 mol Ba(OH)₂, **0,2 mol CO₂**, 0,2 mol H₂O hosil bo'ladi.
4. Ba(OH)₂ + 2CO₂ → Ba(HCO₃)₂ — qolgan 0,4 mol Ba(OH)₂ → **0,8 mol CO₂**, suv hosil bo'lmaydi.
5. **a)** n(CO₂) = 0,2 + 0,8 = **1 mol**.
6. **b)** Suv = 239,4 + 0,2 · 18 = **243 g**.

**Javob:** a) 1 mol · b) 243 g

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| n(Ba(OH)₂) = 0,6 va n(BaCO₃) = 0,2 topilgan | 0,4 |
| Cho'kma kamligidan Ba(HCO₃)₂ hosil bo'lishi aniqlangan | 0,5 |
| Ikkala tenglama yozilgan | 0,3 |
| n(CO₂) = 1 mol | 0,3 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| Dastlabki suv 239,4 g hisoblangan | 0,6 |
| Birinchi reaksiyada 0,2 mol suv hosil bo'lishi hisobga olingan | 0,6 |
| Ikkinchi reaksiya suv bermasligi to'g'ri aytilgan | 0,2 |
| Javob 243 g | 0,3 |

**Tipik xato:** Faqat birinchi tenglamani yozib n(CO₂) = 0,2 deb javob berish; b) da hosil bo'lgan suvni unutib 239,4 deb yozish; cho'kmani eritma massasidan ayirmaslik (savol suvni so'ragani uchun bu yerda ta'sir qilmaydi, lekin eritma massasi so'ralsa — qiladi).

---

### 41-topshiriq · [3,2 ball] *(shart fizik jihatdan bahsli — izohga qarang)*

**Shart:** 10 A tok bilan 2,68 soat davomida Na₂CO₃ eritmasi elektroliz qilindi. Eritma massasi 2,8 marta kamaydi va 42,4 % li eritma hosil bo'ldi. So'ngra eritmaga x g 2 % li HBr eritmasi to'liq ta'sirlashdi.
a) Dastlabki eritma massasi (g). b) x ni toping.

**Qoida:** Faradey: \`n(e) = I·t/F\`. Na₂CO₃ eritmasi elektrolizida **suvning o'zi** parchalanadi (Na⁺ qaytarilmaydi, CO₃²⁻ oksidlanmaydi) → tuz miqdori o'zgarmaydi, faqat suv kamayadi.
*Nega aynan u:* tuz saqlangani uchun foiz ortishi faqat suv yo'qotishidan.

**Yechim:**
1. n(e) = 10 · 2,68 · 3600 / 96500 = 96 480/96 500 ≈ **1 mol**.
2. Katod: 0,5 mol H₂ (1 g); anod: 0,25 mol O₂ (8 g) → jami **9 g** (ya'ni 0,5 mol suv).
3. **a)** m − 9 = m/2,8 → m(1 − 1/2,8) = 9 → m · 1,8/2,8 = 9 → **m = 14 g**.
4. Oxirgi eritma = 14/2,8 = 5 g; Na₂CO₃ = 5 · 0,424 = 2,12 g → n = 2,12/106 = **0,02 mol**.
5. **b)** Na₂CO₃ + 2HBr → 2NaBr + H₂O + CO₂↑ → n(HBr) = 0,04 mol → m = 0,04 · 81 = 3,24 g.
6. x = 3,24/0,02 = **162 g**.

**Javob:** a) 14 g · b) 162 g

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| n(e) = I·t/F = 1 mol | 0,4 |
| Na₂CO₃ eritmasida suv parchalanishi ko'rsatilgan | 0,3 |
| Massa kamayishi 9 g ekani hisoblangan | 0,4 |
| m − 9 = m/2,8 tenglamasi va m = 14 g | 0,4 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| Oxirgi eritma 5 g, undan n(Na₂CO₃) = 0,02 mol | 0,6 |
| Na₂CO₃ + 2HBr tenglamasi (1 : 2 nisbat) | 0,5 |
| m(HBr) = 3,24 g | 0,3 |
| x = 162 g (2 % eritmaga qaytarish) | 0,3 |

> **Izoh:** topilgan 14 g eritmada 2,12 g tuz va 11,88 g suv bo'ladi; elektrolizda 0,5 mol (9 g) suv ketsa, qolgan 2,88 g suvda 2,12 g Na₂CO₃ "erigan" bo'lib chiqadi — bu eruvchanlikdan bir necha baravar yuqori. Masala sonlari matematik jihatdan yopiladi, fizik jihatdan esa real emas. O'quvchi shuni sezsa — bu kuchli javob.

**Tipik xato:** "2,8 marta kamaydi" ni "2,8 g kamaydi" deb o'qish; H₂ va O₂ dan faqat bittasini ayirish; HBr ni 1 : 1 nisbatda olish.

---

### 42-topshiriq · [3,2 ball] *(b) bandi shartda chala yozilgan)*

**Shart:** 44,2 g o'simlik moyi tarkibida faqat bir xil kislota qoldiqlari bor; ishqoriy sharoitda to'la gidrolizidan 48 g kaliyli tuz hosil bo'ldi.
a) Xuddi shunday moy to'liq gidrogenlanganda 89 g mahsulot olish uchun sarflangan vodorod miqdori (mol).
b) Ushbu 44,2 g yog'ni yondirish uchun zarur bo'lgan **[kislorod]**.

**Qoida:** Saponifikatsiya: trigliserid + 3KOH → 3RCOOK + glitserin. Massa balansi orqali moyning M si topiladi.
*Nega aynan u:* moyning formulasi noma'lum, lekin massa saqlanishi bitta tenglamada n ni beradi.

**Yechim:** n — moy mollari.
1. Massa balansi: 44,2 + 3n · 56 = 48 + 92n → 44,2 + 168n = 48 + 92n → 76n = 3,8 → **n = 0,05 mol**.
2. M(moy) = 44,2/0,05 = **884** → 3M(kislota) + 38 = 884 → M(kislota) = **282** = olein kislota C₁₇H₃₃COOH.
3. Moy — **triolein C₅₇H₁₀₄O₆**, molekulada 3 ta C=C.
4. **a)** Triolein + 3H₂ → tristearin (M = 890). n(mahsulot) = 89/890 = 0,1 mol → n(H₂) = 3 · 0,1 = **0,3 mol**.
5. **b)** C₅₇H₁₀₄O₆ + 80O₂ → 57CO₂ + 52H₂O.
   Kislorod balansi: 57·2 + 52 = 166 ta O atomi; moyda 6 ta bor → (166 − 6)/2 = **80 mol O₂** har 1 mol moyga.
   n(O₂) = 0,05 · 80 = **4 mol** = 89,6 l (n.sh.) = 128 g.

**Javob:** a) 0,3 mol · b) 4 mol O₂ (89,6 l yoki 128 g)

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| Saponifikatsiya tenglamasi (1 : 3 : 3 : 1) yozilgan | 0,3 |
| Massa balansidan n = 0,05 mol | 0,4 |
| M = 884 → olein kislota / triolein aniqlangan | 0,4 |
| n(H₂) = 0,3 mol | 0,4 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| Yonish tenglamasi to'g'ri tuzilgan | 0,6 |
| Kislorod koeffitsiyenti 80 to'g'ri chiqarilgan (moydagi 6 O hisobga olingan) | 0,6 |
| n(O₂) = 4 mol | 0,3 |
| Hajm/massaga aylantirish | 0,2 |

> **Izoh:** b) bandi manbada "zarur bo'lgan" so'zida uzilib qolgan. Kislorod mollari/hajmi so'ralgan deb olindi. Agar saytda b) ochiq javob sifatida berilsa, **4 mol** ham, **89,6 l** ham to'g'ri deb qabul qilinsin.

**Tipik xato:** Moyni glitserin qoldig'isiz hisoblash; gidrogenlanishda mahsulot massasini boshlang'ich massa deb olish; yonishda moydagi 6 ta kislorodni hisobga olmay 83 mol O₂ deb yozish.

---

### 43-topshiriq · [3,2 ball]

**Shart:** Metall **juda suyultirilgan** nitrat kislotada eritildi. 2,13 % va 0,3 % li tuzlar tutuvchi 800 g eritma hosil bo'ldi.
a) Metall massasi (g). b) Sarflangan nitrat kislota massasi (g).

**Qoida:** Juda suyultirilgan HNO₃ faol metall bilan **gaz chiqarmaydi** — azot NH₄NO₃ gacha qaytariladi: NO₃⁻ + 10H⁺ + 8e⁻ → NH₄⁺ + 3H₂O.
*Nega aynan u:* "ikkita tuz" shunga ishora — metall nitrati va ammoniy nitrati.

**Yechim:**
1. m(NH₄NO₃) = 800 · 0,003 = 2,4 g → n = 2,4/80 = **0,03 mol** → berilgan elektron = 8 · 0,03 = **0,24 mol**.
2. Metall nitrati: m = 800 · 0,0213 = **17,04 g**; valentligi n bo'lsa, mollari = 0,24/n.
3. M(tuz) = 17,04n/0,24 = 71n → M(metall) = 71n − 62n = **9n** → n = 3 da M = **27 = Al** ✓
4. **a)** n(Al) = 0,24/3 = 0,08 mol → m = 0,08 · 27 = **2,16 g**.
   *(Tekshirish: Al(NO₃)₃ M = 213 → 0,08 · 213 = 17,04 g ✓)*
5. **b)** Azot balansi: Al(NO₃)₃ da 0,24 mol NO₃⁻ + NH₄NO₃ da 0,06 mol N (kation + anion).
   n(HNO₃) = 0,24 + 0,06 = **0,30 mol** → m = 0,3 · 63 = **18,9 g**.

**Javob:** a) 2,16 g · b) 18,9 g

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| Juda suyultirilgan HNO₃ → NH₄NO₃ ekani aytilgan | 0,4 |
| n(NH₄NO₃) = 0,03 va 0,24 mol elektron | 0,4 |
| Metall M = 9n munosabatidan alyuminiy aniqlangan | 0,4 |
| m = 2,16 g | 0,3 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| Reaksiya tenglamasi: 8Al + 30HNO₃ → 8Al(NO₃)₃ + 3NH₄NO₃ + 9H₂O | 0,6 |
| NH₄NO₃ dagi **ikkala** azot hisobga olingan | 0,6 |
| n(HNO₃) = 0,3 mol | 0,3 |
| m = 18,9 g | 0,2 |

**Tipik xato:** Gaz (NO yoki N₂O) ajraladi deb hisoblash; NH₄NO₃ ni bitta azotli deb olib n(HNO₃) ni 0,27 deb topish; metall valentligini 2 deb olib Mg ga chiqish.

---

### 44-topshiriq · [3,2 ball] *(tushmagan)*

**Shart:** Germetik yopiq idishga ikkita stakan qo'yildi: birinchisida mo'l P₂O₅, ikkinchisida 60 g 8 % li NaOH eritmasi. Ma'lum vaqtdan so'ng ikkinchi stakanda ishqor konsentratsiyasi 2 marta o'zgardi.
a) Birinchi idish massasi necha grammga o'zgargan? b) Hosil bo'lgan kislota massasi (g).

**Qoida:** P₂O₅ — kuchli **suv tortuvchi** modda; yopiq idishda suv bug'i ishqor eritmasidan P₂O₅ ga ko'chadi. Erigan modda massasi o'zgarmaydi → foiz faqat suv hisobiga ortadi.
*Nega aynan u:* ikki idish faqat bug' orqali bog'langan; NaOH uchib ketmaydi.

**Yechim:**
1. m(NaOH) = 60 · 0,08 = **4,8 g**, suv = 55,2 g.
2. Konsentratsiya 2 marta ortdi → **16 %** → yangi eritma massasi = 4,8/0,16 = **30 g**.
3. Ketgan suv = 60 − 30 = **30 g** → **a)** birinchi idish massasi **30 g ga ortgan**.
4. **b)** P₂O₅ + 3H₂O → 2H₃PO₄. n(H₂O) = 30/18 = 1,667 mol → n(H₃PO₄) = (2/3)·1,667 = **1,111 mol**.
5. m = 1,111 · 98 ≈ **108,9 g**.

**Javob:** a) +30 g · b) ≈108,9 g H₃PO₄

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| NaOH massasi o'zgarmasligi aytilgan | 0,4 |
| Konsentratsiya 16 % ga ortishi to'g'ri talqin qilingan | 0,4 |
| Yangi eritma massasi 30 g | 0,4 |
| Javob: +30 g | 0,3 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| P₂O₅ + 3H₂O → 2H₃PO₄ tenglamasi | 0,6 |
| Suv cheklovchi, P₂O₅ ortiqcha ekani ko'rsatilgan | 0,4 |
| n(H₃PO₄) = 10/9 mol | 0,4 |
| m ≈ 108,9 g | 0,3 |

**Tipik xato:** "2 marta o'zgardi" ni kamaydi deb o'qish (P₂O₅ suv tortadi — faqat ortadi); suvni 1 : 1 nisbatda olib H₃PO₄ ni 1,667 mol deb hisoblash; P₂O₅ ni cheklovchi deb olish ("mo'l" deyilgan).

---

### 45-topshiriq · [3,2 ball]

**Shart:** 0,8 mol KMnO₄ 29,2 % li HCl eritmasi bilan **qoldiqsiz** ta'sirlashdi.
a) Ajralgan gaz hajmi (n.sh.). b) Hosil bo'lgan eritma massasi (g).

**Qoida:** 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O. "Qoldiqsiz" — ikkala reagent ham to'liq sarflangan, demak HCl ni tenglamadan hisoblash mumkin.
*Nega aynan u:* eritma massasi = (barcha kirgan massa) − (ajralgan gaz massasi).

**Yechim:**
1. n(KMnO₄) = 0,8 mol → **n(HCl) = 8 · 0,8 = 6,4 mol**, n(Cl₂) = 2,5 · 0,8 = **2 mol**.
2. **a)** V(Cl₂) = 2 · 22,4 = **44,8 l**.
3. m(HCl) = 6,4 · 36,5 = 233,6 g → eritma massasi = 233,6/0,292 = **800 g**.
4. m(KMnO₄) = 0,8 · 158 = **126,4 g**.
5. **b)** m(eritma) = 800 + 126,4 − m(Cl₂) = 926,4 − 2 · 71 = **784,4 g**.

**Javob:** a) 44,8 l · b) 784,4 g

| Baholash mezoni — a) 1,5 ball | Ball |
|---|---|
| Tenglama to'g'ri tenglashtirilgan (2 : 16 : 5) | 0,6 |
| n(Cl₂) = 2 mol | 0,5 |
| V = 44,8 l | 0,4 |

| Baholash mezoni — b) 1,7 ball | Ball |
|---|---|
| n(HCl) = 6,4 mol va m(HCl) = 233,6 g | 0,4 |
| HCl eritmasi massasi 800 g (foizdan qaytarish) | 0,5 |
| KMnO₄ massasi qo'shilgan | 0,3 |
| Ajralgan Cl₂ (142 g) ayirilgan | 0,5 |

**Tipik xato:** Gaz massasini ayirmaslik (926,4 deb javob berish) — eng keng tarqalgan; HCl eritmasining massasini emas, sof HCl massasini qo'shish; tenglamada Cl₂ koeffitsiyentini 5 emas, 8 deb olish.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | A | 16 | B* | 31 | B |
| 2 | B | 17 | B | 32 | A* |
| 3 | B | 18 | A | 33 | F |
| 4 | B | 19 | D | 34 | E |
| 5 | C | 20 | A | 35 | C |
| 6 | B | 21 | A | 36 | 30 g · 16,8 l |
| 7 | C | 22 | A | 37 | 8 g · 0,5 mol* |
| 8 | A | 23 | C | 38 | 75 % · 0,8 mol |
| 9 | A* | 24 | B | 39 | 3 : 4 · 18 |
| 10 | C | 25 | C | 40 | 1 mol · 243 g |
| 11 | A | 26 | B | 41 | 14 g · 162 g* |
| 12 | B | 27 | A | 42 | 0,3 mol · 4 mol* |
| 13 | D | 28 | D | 43 | 2,16 g · 18,9 g |
| 14 | B | 29 | D | 44 | +30 g · 108,9 g |
| 15 | D | 30 | C | 45 | 44,8 l · 784,4 g |

\`*\` — savol shartida nuqson yoki ikki xil o'qilish bor; tegishli bo'limdagi izohga qarang: **9** (bog'lar sanash usuli), **16** (akaritsid ta'rifi), **32** (distillash = haydash), **37** (vinilsiklopenten), **41** (eruvchanlik chegarasi), **42** (chala shart).
`,Ze=`# Sertifikat — 28.01.2024

**Manba:** \`Milliy sertifikat .pdf\`, 6–9-betlar · 45 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–45 yozma (a/b)
**Yozma qism:** manbada "VI Yopiq testlar (U–4; A–3; O–3) (32 ball)" deb belgilangan; har bir topshiriq **a) 1,7 + b) 1,5 = 3,2 ball**

> \`(tushmagan)\` savollar: 19, 27, 30, 31, 32.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · [2,2 ball] · **B** *(rasmli)*

**Shart:** Rasmda qanday moddalar guruhi tasvirlangan? (sariq uchburchak ichida — probirkadan quyilayotgan suyuqlik qo'lni va sirtni yemirmoqda)

**Qoida:** Xavflilik belgilari: bosh suyagi — zaharli · yemirilayotgan qo'l/sirt — **o'yuvchi (korroziv)** · uch yaproqli belgi — radioaktiv · portlash tasviri — portlovchi.

**Yechim:** Rasmda suyuqlik tomchisi qo'l terisini va plastinkani yemirmoqda → o'yuvchi moddalar belgisi.

**Javob:** B) O'yuvchi

**Tipik xato:** Sariq uchburchakni ko'rib "zaharli" deyish — zaharlilik belgisida bosh suyagi tasvirlanadi.

---

### 2-savol · [2,2 ball] · **C**

**Shart:** X₂H₆ ning 0,2 moli 12,4 g bo'lsa, XH₄ ning 0,3 moli massasini (g) toping.

**Qoida:** \`M = m/n\`, so'ng formula orqali element atom massasi.

**Yechim:**
1. M(X₂H₆) = 12,4/0,2 = **62 g/mol**.
2. 2X + 6 = 62 → X = **28 = Si**.
3. M(SiH₄) = 28 + 4 = **32 g/mol**.
4. m = 0,3 · 32 = **9,6 g**.

**Javob:** C) 9,6

**Tipik xato:** 62 ni to'g'ridan-to'g'ri X deb olish; SiH₄ ni 30 deb hisoblash.

---

### 3-savol · [1,3 ball] · **A**

**Shart:** 0,4 mol KCl eritmasi elektroliz qilindi; hosil bo'lgan eritmaga 100 g 9,8 % li H₃PO₄ eritmasi va 7,1 g P₂O₅ yuttirildi. Necha gramm tuz hosil bo'ldi?

**Qoida:** KCl eritmasi elektrolizida **KOH** hosil bo'ladi (2KCl + 2H₂O → 2KOH + H₂ + Cl₂). P₂O₅ suv bilan H₃PO₄ beradi. Ishqor/kislota mol nisbati tuz turini belgilaydi.
*Nega aynan u:* 2 : 1 nisbat → o'rta emas, **nordon tuz** K₂HPO₄.

**Yechim:**
1. n(KOH) = n(KCl) = **0,4 mol**.
2. n(H₃PO₄) = 100 · 0,098/98 = **0,1 mol**.
3. n(P₂O₅) = 7,1/142 = 0,05 mol → P₂O₅ + 3H₂O → 2H₃PO₄ → yana **0,1 mol**. Jami kislota = **0,2 mol**.
4. n(KOH) : n(H₃PO₄) = 0,4 : 0,2 = **2 : 1** → K₂HPO₄.
5. M(K₂HPO₄) = 174 → m = 0,2 · 174 = **34,8 g**.

**Javob:** A) 34,8

**Tipik xato:** P₂O₅ ni unutib faqat 0,1 mol kislota olish (nisbat 4:1 → K₃PO₄ chiqadi); 2:1 nisbatda K₃PO₄ deb yozish.

---

### 4-savol · [2,2 ball] · **C**

**Shart:** Baliq moyidan chiqadigan hidli amini yo'qotish uchun oshpazlar qaysi moddadan foydalanadi?

**Qoida:** Amin — **asos** (R–NH₂), kislota bilan hidsiz tuz hosil qiladi.
*Nega aynan u:* hidni yo'qotish = uchuvchan asosni uchmaydigan tuzga aylantirish.

**Yechim:**
1. KOH, Na₂CO₃ — asos/ishqoriy muhit, aminni bog'lamaydi.
2. CH₃COOH (sirka, limon sharbati) + R–NH₂ → R–NH₃⁺CH₃COO⁻ — uchmaydigan tuz ✓

**Javob:** C) CH₃COOH

**Tipik xato:** Sovun (C₁₇H₃₁COONa) ni tanlash — u yuvadi, lekin aminni kimyoviy bog'lamaydi.

---

### 5-savol · [2,2 ball] · **A** *(rasmli)*

**Shart:** Rasmda: KHCO₃ eritmasiga X qo'shilganda **gaz** ajralmoqda; ikkinchi probirkada KHCO₃ ga Y qo'shilganda **cho'kma** tushmoqda. X va Y juftligini toping.

**Qoida:** Gidrokarbonat kuchli kislota bilan CO₂ beradi; ishqoriy-yer metal gidroksidi bilan esa karbonat cho'kmasi hosil qiladi.

**Yechim:**
1. KHCO₃ + HCl → KCl + H₂O + CO₂↑ — gaz ✓ (H₂S kuchsizroq, CO₂ ni siqib chiqara olmaydi)
2. 2KHCO₃ + Ba(OH)₂ → BaCO₃↓ + K₂CO₃ + 2H₂O — cho'kma ✓
3. NH₃ gaz bermaydi; Fe(OH)₂ cho'kma bermaydi.

**Javob:** A) x–HCl; y–Ba(OH)₂

**Tipik xato:** Ca(OH)₂ ham cho'kma berishiga qarab D ni tanlash — unda X = NH₃ gaz ajratmaydi, demak juftlik butunlay buziladi.

---

### 6-savol · [2,2 ball] · **A**

**Shart:** 10 °C dan 30 °C ga tezlik 4 marta ortsa, 40 °C dan 343 K ga o'zgarsa necha marta ortadi?

**Qoida:** Vant-Goff: \`v₂/v₁ = γ^(ΔT/10)\`; haroratlar bitta shkalada bo'lishi shart.

**Yechim:**
1. γ² = 4 → **γ = 2**.
2. 343 K = **70 °C**; ΔT = 70 − 40 = **+30**.
3. 2³ = **8 marta ortadi**.

**Javob:** A) 8

**Tipik xato:** Kelvinni Selsiyga o'tkazmaslik; javoblarda C va D bir xil (1/8) — bu savolning o'zida terish xatosi bor, lekin to'g'ri javobga ta'sir qilmaydi.

---

### 7-savol · [2,2 ball] · **B**

**Shart:** Teng mol nisbatda olingan SO₂ va N₂ aralashmasining neonga nisbatan zichligi.

**Qoida:** \`M̄ = Σ(xᵢMᵢ)\`; \`D(Ne) = M̄/20\`.

**Yechim:**
1. M̄ = (64 + 28)/2 = **46 g/mol**.
2. D(Ne) = 46/20 = **2,3**.

**Javob:** B) 2,3

**Tipik xato:** Neon o'rniga havoga (29) yoki vodorodga (2) bo'lish; 46 (C) ni to'g'ridan-to'g'ri javob deb belgilash.

---

### 8-savol · [2,2 ball] · **C** *(sxemali)*

**Shart:** Na₂SiO₃ →(η=80 %) SiO₂ →(η=80 %) Si →(η=50 %) Mg₂Si →(η=75 %) SiH₄. 152,5 g Na₂SiO₃ dan necha litr (n.sh.) SiH₄ hosil bo'ladi?

**Qoida:** Ketma-ket bosqichlarda **umumiy unum = unumlar ko'paytmasi**; kremniy atomi har bosqichda 1 : 1 saqlanadi.

**Yechim:**
1. n(Na₂SiO₃) = 152,5/122 = **1,25 mol**.
2. η_umumiy = 0,8 · 0,8 · 0,5 · 0,75 = **0,24**.
3. n(SiH₄) = 1,25 · 0,24 = **0,3 mol**.
4. V = 0,3 · 22,4 = **6,72 l**.

**Javob:** C) 6,72

**Tipik xato:** Unumlarni qo'shish yoki o'rtachasini olish; Mg₂Si → SiH₄ bosqichida kremniyni 2 ga ko'paytirish (Mg₂Si da **bitta** Si bor).

---

### 9-savol · [1,3 ball] · **C**

**Shart:** Sariq rangli asosni toping.

**Qoida:** Gidroksidlarning rangi: KOH — oq, Fe(OH)₂ — oq-yashil, Fe(OH)₃ — qo'ng'ir, Cu(OH)₂ — ko'k, **CuOH — sariq**, Ni(OH)₂ — och yashil.

**Javob:** C) CuOH

**Tipik xato:** Cu(OH)₂ (ko'k) bilan CuOH (sariq) ni almashtirish — mis(I) va mis(II) birikmalari farqlanadi.

---

### 10-savol · [1,3 ball] · **B**

**Shart:** 100 g 18 % li NaCl eritmasiga necha gramm suv qo'shilganda 0,9 % li fiziologik eritma hosil bo'ladi?

**Qoida:** Suv qo'shilganda **erigan modda massasi o'zgarmaydi**: m₁ω₁ = m₂ω₂.

**Yechim:**
1. m(NaCl) = 100 · 0,18 = **18 g**.
2. Yangi eritma massasi = 18/0,009 = **2000 g**.
3. Qo'shilgan suv = 2000 − 100 = **1900 g**.

**Javob:** B) 1900

**Tipik xato:** 2000 (yangi eritma massasi) ni javob deb belgilash — savol **qo'shilgan suvni** so'raydi.

---

### 11-savol · [2,2 ball] · **D**

**Shart:** 0,6 mol C₄Hₓ tarkibida 18·N_A proton bo'lsa, shuncha moddani yoqish uchun qancha (mol) kislorod sarflanadi?

**Qoida:** Protonlar soni = elektronlar soni = atom raqamlari yig'indisi (C — 6, H — 1).

**Yechim:**
1. Bitta molekulada protonlar = 18/0,6 = **30 ta**.
2. 4 · 6 + x = 30 → x = **6** → C₄H₆.
3. C₄H₆ + 5,5O₂ → 4CO₂ + 3H₂O.
4. n(O₂) = 0,6 · 5,5 = **3,3 mol**.

**Javob:** D) 3,3

**Tipik xato:** Protonni faqat vodorodniki deb hisoblash; yonish koeffitsiyentini (3n+1−x/2 ...) noto'g'ri chiqarish — formuladan emas, atom balansidan yozilsin.

---

### 12-savol · [1,3 ball] · **A**

**Shart:** S⁻² → S⁺⁴ jarayoni uchun to'g'ri javobni aniqlang.

**Qoida:** Oksidlanish darajasi **ortsa** — modda elektron **beradi**, oksidlanadi va **qaytaruvchi** bo'ladi.

**Yechim:** −2 dan +4 gacha o'zgarish = 6 birlik ortish → 6 ta elektron **berilgan**.

**Javob:** A) S⁻² ioni 6 ta elektron bergan

**Tipik xato:** "Darajasi ortdi → elektron oldi" deb teskari o'ylash; oltingugurtni oksidlovchi deb belgilash.

---

### 13-savol · [2,2 ball] · **C**

**Shart:** MnSO₄ + KMnO₄ + H₂O = MnO₂ + K₂SO₄ + H₂SO₄. Amfoter oksid massasi 130,5 g bo'lsa, K₂SO₄ bilan H₂SO₄ massalari farqini toping.

**Qoida:** Elektron balans bilan tenglashtirish; **MnO₂ — amfoter oksid**.

**Yechim:**
1. Mn⁺² − 2e⁻ → Mn⁺⁴ (×3) · Mn⁺⁷ + 3e⁻ → Mn⁺⁴ (×2)
2. **3MnSO₄ + 2KMnO₄ + 2H₂O → 5MnO₂ + K₂SO₄ + 2H₂SO₄**
3. n(MnO₂) = 130,5/87 = **1,5 mol** → koeffitsiyent birligi = 1,5/5 = **0,3**.
4. m(K₂SO₄) = 0,3 · 174 = 52,2 g; m(H₂SO₄) = 0,6 · 98 = 58,8 g.
5. Farq = **6,6 g**.

**Javob:** C) 6,6

**Tipik xato:** Amfoter oksid deb SO₂ yoki MnO ni olish; tenglamani tenglashtirmasdan 1:1 nisbatda hisoblash.

---

### 14-savol · [1,3 ball] · **A**

**Shart:** Pentan kislota, Ca₃(PO₄)₂, Al₂(SO₄)₃ moddalari tarkibidagi σ− va π−bog'lar soni yig'indisi qanday o'zgaradi?

**Qoida:** σ — har bir bog'da bitta; π — qo'shbog'ning ikkinchi komponenti.

**Yechim:**
1. Pentan kislota C₄H₉COOH: σ = 16 (9 C–H + 4 C–C + C–O + O–H + C=O ning σ si), π = 1 → **17**.
2. Ca₃(PO₄)₂: har PO₄³⁻ da 4σ + 1π = 5 → 10 (+ 6 ion bog') → **10**.
3. Al₂(SO₄)₃: har SO₄²⁻ da 4σ + 2π = 6 → 18 (+ 6 ion bog') → **18**.
4. 17 → 10 → 18: **kamaydi, ortdi**. *(Ion bog'lar qo'shilsa ham tartib o'zgarmaydi: 17 → 16 → 24.)*

**Javob:** A) Kamayadi, Ortadi

**Tipik xato:** Faqat π-bog'larni sanash; kislotadagi 9 ta C–H bog'ini tushirib qoldirish.

---

### 15-savol · [2,2 ball] · **D**

**Shart:** 202 g KNO₃ 1000 g suvda eritildi, α = 90 %. Eritmadagi **gidratlangan zarrachalar** sonini aniqlang (gidroliz hisobga olinmasin).

**Qoida:** Dissotsilanishda har bir KNO₃ **ikkita** ion beradi; suv bilan o'ralgan (gidratlangan) zarralar — ionlar.

**Yechim:**
1. n(KNO₃) = 202/101 = **2 mol**.
2. Dissotsilangan: 2 · 0,9 = **1,8 mol**.
3. Ionlar: 1,8 · 2 = **3,6 mol** (1,8 K⁺ + 1,8 NO₃⁻).

**Javob:** D) 3,6

**Tipik xato:** 1,8 (molekulalar soni) ni javob deb olish; dissotsilanmagan 0,2 molni ham qo'shib 3,8 deb yozish — ular gidratlangan ion emas.

---

### 16-savol · [1,3 ball] · **B**

**Shart:** Kvant sonlar bo'yicha jadvaldagi qaysi xulosalar to'g'ri?
1) Uchinchi pog'onaga maksimal 18 ta elektron sig'adi · 2) l = 1 pog'onachaga 2 ta elektron sig'adi · 3) Magnit kvant son manfiy qiymatlarni ham qabul qiladi · 4) Spin kvant soni faqat musbat qiymatga ega

**Qoida:** Pog'onada 2n²; l = 0,1,2,3 → s,p,d,f (2, 6, 10, 14 elektron); mₗ = −l…+l; mₛ = ±½.

**Yechim:**
1. 2 · 3² = 18 ✓
2. l = 1 → p pog'onacha → **6 ta** elektron ✗
3. mₗ manfiy qiymat oladi ✓
4. Spin ±½ — manfiy ham bo'ladi ✗

**Javob:** B) 1,3

**Tipik xato:** l = 1 ni "birinchi pog'onacha = s" deb o'qish; spin uchun faqat +½ ni eslash.

---

### 17-savol · [2,2 ball] · **D**

**Shart:** 1) X → K₂MnO₄ + MnO₂ + O₂ · 2) X + E → A + C + B + H₂O · 3) H₂ + B → E. Ikkinchi reaksiyada B 0,5 mol hosil bo'lsa, A va C massalari farqini toping.

**Qoida:** Birinchi reaksiya — KMnO₄ ning termik parchalanishi, demak **X = KMnO₄**. Uchinchisidan B — vodorod bilan E beradi → B = Cl₂, E = HCl.

**Yechim:**
1. 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O → **A va C = KCl va MnCl₂**.
2. n(Cl₂) = 0,5 mol → birlik = 0,5/5 = 0,1 → n(KCl) = n(MnCl₂) = **0,2 mol**.
3. m(KCl) = 0,2 · 74,5 = 14,9 g; m(MnCl₂) = 0,2 · 126 = 25,2 g.
4. Farq = **10,3 g**.

**Javob:** D) 10,3

**Tipik xato:** X ni K₂MnO₄ deb olish; Cl₂ koeffitsiyentini 2 deb hisoblab mollarni ikki barobar olish.

---

### 18-savol · [2,2 ball] · **C**

**Shart:** x mol K₃PO₄ (α = 20 %) da 2,408·10²³ ta ion bo'lsa, x ni toping.

**Qoida:** K₃PO₄ → 3K⁺ + PO₄³⁻ — bitta formula **4 ta** ion beradi; faqat dissotsilangan qismi ion beradi.

**Yechim:**
1. n(ion) = 2,408·10²³/6,02·10²³ = **0,4 mol**.
2. Dissotsilangan qism = 0,2x mol → ionlar = 0,2x · 4 = **0,8x**.
3. 0,8x = 0,4 → **x = 0,5 mol**.

**Javob:** C) 0,5

**Tipik xato:** 4 o'rniga 2 ta ion deb olish; α ni e'tiborsiz qoldirib x = 0,1 deb javob berish.

---

### 19-savol · [2,2 ball] · **C** *(tushmagan)*

**Shart:** H₂, is gazi (CO) va CH₄ aralashmasining 1 hajmini to'liq yondirish uchun **7 hajm havo** sarflandi. Yonishdan so'ng hosil bo'lgan aralashmaning vodorodga nisbatan zichligi 15 (n.sh. da) bo'lsa, dastlabki aralashmaning vodorodga nisbatan zichligini aniqlang.

**Qoida:** Havoda O₂ ning hajm ulushi 1/5; **n.sh. da suv suyuq**, demak yonish mahsulotlari gaz aralashmasi = CO₂ + N₂.
*Nega aynan u:* "n.sh. da" so'zi suvni hisobdan chiqaradi — bu masalaning kaliti.

**Yechim:** H₂ — x, CO — y, CH₄ — z (x + y + z = 1).
1. O₂ = 7/5 = **1,4 hajm**; N₂ = 7 · 0,8 = **5,6 hajm**.
2. Mahsulot gazlar: CO₂ = y + z, N₂ = 5,6. M̄ = 15 · 2 = 30.
3. (44(y+z) + 28 · 5,6)/((y+z) + 5,6) = 30 → 14(y+z) = 11,2 → **y + z = 0,8** → **x = 0,2**.
4. Kislorod balansi: 0,5x + 0,5y + 2z = 1,4 → 0,1 + 0,5y + 2z = 1,4; y = 0,8 − z → 1,5z = 0,9 → **z = 0,6**, **y = 0,2**.
5. M̄(dastlabki) = 0,2·2 + 0,2·28 + 0,6·16 = **15,6** → D(H₂) = 15,6/2 = **7,8**.

**Javob:** C) 7,8

**Tipik xato:** Mahsulotlar ichiga suv bug'ini ham qo'shish; azotni unutish (u yonmaydi, lekin aralashmada qoladi va M̄ ni butunlay belgilaydi).

---

### 20-savol · [2,2 ball] · **A**

**Shart:** Tarkibida 7 ta uglerod bo'lib, **asosiy zanjirida 5 ta** uglerod tutgan izomerlarda jami nechta ikkilamchi uglerod atomi bor?

**Qoida:** Ikkilamchi uglerod — aynan **ikkita** uglerod bilan bog'langan atom. Asosiy zanjir 5 ta bo'lsa, qolgan 2 ta uglerod shoxcha bo'ladi.

**Yechim:** Bunday izomerlar 5 ta:
1. 2,2-dimetilpentan — C3, C4 → **2**
2. 2,3-dimetilpentan — C4 → **1**
3. 2,4-dimetilpentan — C3 → **1**
4. 3,3-dimetilpentan — C2, C4 → **2**
5. 3-etilpentan — C2, C4 va etil guruhidagi CH₂ → **3**
6. Jami: 2 + 1 + 1 + 2 + 3 = **9**

**Javob:** A) 9

**Tipik xato:** 3-etilpentanni ro'yxatdan tushirib qoldirish (javob 6 chiqadi — B tuzog'i); etil shoxchasidagi CH₂ ni sanamaslik.

---

### 21-savol · [2,2 ball] · **A**

**Shart:** 1 moldan olingan etilenglikolga yetarli miqdorda natriy, kaliy va HCl qo'shildi. Qaysi javob to'g'ri?

**Qoida:** Ikki atomli spirt ikkala OH bilan ham metall almashtiradi: C₂H₄(OH)₂ + 2Na → C₂H₄(ONa)₂ + H₂.

**Yechim:**
1. Na-glikolyat C₂H₄(ONa)₂: M = 28 + 2(16 + 23) = **106** → 1 mol = **106 g** ✓
2. K-glikolyat C₂H₄(OK)₂: M = 28 + 2(16 + 39) = **138**, 108 emas ✗
3. Glikoldan C₂H₄ olinmaydi ✗; HCl bilan dixloretan M = 99, 69 emas ✗

**Javob:** A) 106 g Na glikolyat hosil bo'lgan

**Tipik xato:** Faqat bitta OH almashadi deb hisoblash (M = 84 chiqadi); K-glikolyatni 108 deb yuzaki tekshirish.

---

### 22-savol · [2,2 ball] · **C**

**Shart:** 1,77 g trimetilamin va x g ammoniy nitratdagi azot atomlari soni teng bo'lsa, x ni toping.

**Qoida:** NH₄NO₃ molekulasida **2 ta** azot bor.

**Yechim:**
1. M((CH₃)₃N) = 59 → n = 1,77/59 = **0,03 mol** → N atomlari 0,03 mol.
2. n(NH₄NO₃) = 0,03/2 = **0,015 mol**.
3. m = 0,015 · 80 = **1,2 g**.

**Javob:** C) 1,2

**Tipik xato:** NH₄NO₃ da bitta azot deb olish (2,4 g chiqadi); trimetilaminning M sini 45 (dimetilamin) deb olish.

---

### 23-savol · [2,2 ball] · **C**

**Shart:** Toluol kislotali sharoitda KMnO₄ bilan oksidlansa 1,5 mol MnSO₄ hosil bo'ldi. Reaksiyaga kirishgan organik modda massasini toping.

**Qoida:** Toluol → benzoy kislota; metil guruhidagi uglerod −3 dan +3 ga o'tadi → **6 elektron**; Mn⁺⁷ → Mn⁺² → **5 elektron**.

**Yechim:**
1. Elektron balans → toluol : KMnO₄ = **5 : 6**.
2. 5C₆H₅CH₃ + 6KMnO₄ + 9H₂SO₄ → 5C₆H₅COOH + 6MnSO₄ + 3K₂SO₄ + 14H₂O
3. n(toluol) = 1,5 · 5/6 = **1,25 mol** → m = 1,25 · 92 = **115 g**.

**Javob:** C) 115

**Tipik xato:** 1 : 1 nisbat olib 138 g deb hisoblash; halqa ham oksidlanadi deb o'ylash (halqa kislotali sharoitda buzilmaydi).

---

### 24-savol · [2,2 ball] · **C** *(rasmli)*

**Shart:** Rasmda [–CH₂–C(CH₃)=CH–CH₂–]ₙ sis-tuzilishi berilgan. Unga xos xususiyatlarni toping.
1. Sis-butadiyen-1,3 monomeri hisoblanadi · 2. Poli-2-metilbutadiyen-1,3 ning sis-holati · 3. Tabiiy kauchuk deyiladi · 4. C₅H₁₀ tarkibiga ega

**Qoida:** Tabiiy kauchuk — **sis-poliizopren**, ya'ni 2-metilbutadiyen-1,3 (izopren) polimeri; zveno tarkibi **C₅H₈**.

**Yechim:**
1. Rasmdagi zvenoda metil guruhi bor → butadiyen emas, izopren ✗(1)
2. Poli-2-metilbutadiyen-1,3 ning sis-shakli ✓(2)
3. Sis-poliizopren = tabiiy kauchuk ✓(3)
4. Zveno C₅H₈, C₅H₁₀ emas ✗(4)

**Javob:** C) 2,3

**Tipik xato:** Izopren C₅H₈ ni penten C₅H₁₀ bilan almashtirish; sis- va trans- (guttapercha) shakllarini farqlamaslik.

---

### 25-savol · [1,3 ball] · **B**

**Shart:** Jadvalda qaysi qatordagi barcha ma'lumotlar to'g'ri?
I. Valerian kislota · 102 · 4 ta qutbsiz bog' · gomologi butilformiat
II. Buten · 56 · 4 · propen
III. Pentanon · 86 · 5 · butanon

**Qoida:** Qutbsiz kovalent bog' — bir xil atomlar orasidagi bog' (C–C, C=C); gomolog — **bir xil qatorda, CH₂ ga farq qiladigan** modda.

**Yechim:**
1. **I:** M = 102 ✓, C–C bog'lar 4 ✓, lekin butilformiat (C₅H₁₀O₂) valerian kislota bilan **izomer**, gomolog emas ✗
2. **II:** C₄H₈ M = 56 ✓; qutbsiz bog'lar: C=C (σ + π) + 2 ta C–C = **4** ✓; propen gomolog ✓ → **to'g'ri**
3. **III:** C₅H₁₀O M = 86 ✓; C–C bog'lar **4 ta**, 5 emas ✗

**Javob:** B) II

**Tipik xato:** Izomer va gomologni chalkashtirish (I qatorning tuzog'i); zanjirda n ta uglerod bo'lsa C–C bog'lar n−1 ta ekanini unutish.

---

### 26-savol · [2,2 ball] · **A**

**Shart:** Maltoza gidrolizlandi; olingan glyukoza massasi dastlabki maltoza massasidan 3,6 g ko'p. Glyukoza teng ikki qismga ajratildi: biri Cu(OH)₂ bilan, ikkinchisi Ag₂O/NH₃ bilan ishlov berildi. Cho'kmalar massa farqini toping.

**Qoida:** Gidrolizda massa ortishi = **biriktirilgan suv massasi**. Cu(OH)₂ bilan Cu₂O (1 : 1), "kumush ko'zgu" bilan 2Ag (1 : 2).

**Yechim:**
1. m(H₂O) = 3,6 g → n = **0,2 mol** → n(maltoza) = 0,2 → n(glyukoza) = **0,4 mol**.
2. Har bir qism = **0,2 mol**.
3. Cu₂O: 0,2 mol · 144 = **28,8 g**.
4. Ag: 0,4 mol · 108 = **43,2 g**.
5. Farq = 43,2 − 28,8 = **14,4 g**.

**Javob:** A) 14,4

**Tipik xato:** Kumush miqdorini 0,2 mol deb olish (aldegid 2 mol Ag beradi); Cu₂O ni CuO (80) deb hisoblash; maltozadan 1 mol glyukoza chiqadi deb olish.

---

### 27-savol · [1,3 ball] · **A** *(tushmagan)*

**Shart:** CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O; n = 3 bo'lsa, qaytaruvchi yo'qotgan elektronlar sonini aniqlang.

**Qoida:** Berilgan elektronlar soni = **olingan elektronlar soni**; kislorodni sanash osonroq: har bir O atomi 2 ta elektron oladi.

**Yechim:**
1. C₃H₈ + **5**O₂ → 3CO₂ + 4H₂O.
2. 5 mol O₂ = 10 ta O atomi, har biri 0 → −2 → **20 ta elektron**.

**Javob:** A) 20

**Tipik xato:** Faqat uglerodning o.d. o'zgarishini sanab chalkashish (propanda uglerodlar −3, −2, −3 — har biri boshqacha); 10 (O₂ mollari ×2) deb yozish.

---

### 28-savol · [2,2 ball] · **A**

**Shart:** Aldegid qaytarilib 27,6 g spirt, oksidlanib 36 g kislota hosil qilsa, bu aldegid uchun to'g'ri javobni toping.

**Qoida:** RCHO → RCH₂OH (M + 2) · RCHO → RCOOH (M + 16); mollar teng.

**Yechim:**
1. n(M + 2) = 27,6 va n(M + 16) = 36 → ayiramiz: 14n = 8,4 → **n = 0,6 mol**.
2. M + 2 = 27,6/0,6 = 46 → **M = 44** → CH₃CHO (sirka aldegidi).
3. Tekshiramiz: A) C₂H₄O — **7 ta atom** ✓ · B) σ-bog'lar: 4 C–H + 1 C–C + 1 C–O = 6 ta, 7 emas ✗ · C) formaldegid emas ✗ · D) C–C bog' 1 ta ✗

**Javob:** A) molekulasida 7 ta atomi bor

**Tipik xato:** Qaytarilishda massa +2 emas, +1 deb olish; σ-bog'larni 7 deb sanab B ni belgilash (C=O da **bitta** σ bor).

---

### 29-savol · [2,2 ball] · **B**

**Shart:** Noma'lum kislota va glitserin eterifikatsiyasidan olingan yog'ning Mr = 386. Kislotaning molyar massasini toping.

**Qoida:** Trigliserid: M = 3M(kislota) + M(glitserin) − 3·18 = 3M + 92 − 54 = **3M + 38**.

**Yechim:**
1. 3M + 38 = 386 → 3M = 348 → **M = 116 g/mol** (C₅H₁₁COOH — kapron kislota).

**Javob:** B) 116

**Tipik xato:** Suvni bitta (−18) ayirish; glitserinni 90 yoki 94 deb olish.

---

### 30-savol · [2,2 ball] · **C** *(tushmagan)*

**Shart:** Qaysi reagentlar Fe³⁺ kationini aniqlashda ishlatiladi?
I. NaOH · II. KNO₃ · III. Fenol · IV. Sariq qon tuzi K₄[Fe(CN)₆]

**Qoida:** Fe³⁺ ning sifat reaksiyalari: ishqor bilan **qo'ng'ir** Fe(OH)₃ cho'kma · fenol bilan **binafsha** rang · sariq qon tuzi bilan **berlin ko'ki** · rodanid bilan qon-qizil.

**Yechim:**
1. NaOH ✓ · KNO₃ — hech qanday belgi bermaydi ✗ · Fenol ✓ · K₄[Fe(CN)₆] ✓

**Javob:** C) I, III, IV

**Tipik xato:** Sariq qon tuzini Fe²⁺ uchun deb eslash — Fe²⁺ uchun **qizil qon tuzi** K₃[Fe(CN)₆] ishlatiladi.

---

### 31-savol · [1,3 ball] · **A** *(rasmli, tushmagan)*

**Shart:** Rasmda: C₂H₅OH + H₂SO₄ qizdirilmoqda, ajralgan gaz KMnO₄ eritmasidan o'tkazilmoqda. Olingan organik moddaning molyar massasini toping.

**Qoida:** Spirt konsentrlangan H₂SO₄ bilan 170 °C da **degidratatsiyalanadi** → etilen; etilen suvli KMnO₄ bilan (Vagner reaksiyasi) **etilenglikol** beradi.

**Yechim:**
1. C₂H₅OH →(H₂SO₄, t) C₂H₄ + H₂O
2. 3C₂H₄ + 2KMnO₄ + 4H₂O → 3C₂H₄(OH)₂ + 2MnO₂↓ + 2KOH
3. M(C₂H₄(OH)₂) = **62 g/mol**.

**Javob:** A) 62

**Tipik xato:** Mahsulotni sirka kislota (60) yoki etanol (46) deb olish; KMnO₄ ni etilenni to'liq CO₂ gacha oksidlaydi deb o'ylash (suvli, sovuq eritmada glikol hosil bo'ladi).

---

### 32-savol · [2,2 ball] · **D** *(rasmli, tushmagan)*

**Shart:** Rasmda to'rtta probirkada Mg, Zn, Sn va Cu bir xil eritmaga solingan: Mg, Zn, Sn da **gaz (H₂)** ajralmoqda, Cu da hech qanday o'zgarish yo'q. Eritmada qanday modda bo'lgan?

**Qoida:** Faollik qatorida **vodoroddan chapda** turgan metallar kuchsiz oksidlovchi kislotadan H₂ siqib chiqaradi; mis (vodoroddan o'ngda) reaksiyaga kirishmaydi.
*Nega aynan u:* rasmdagi "H₂" yozuvi oksidlovchi kislotani (HNO₃, kons. H₂SO₄) darhol chiqarib tashlaydi — ular vodorod bermaydi.

**Yechim:**
1. HNO₃ bo'lsa — Cu ham reaksiyaga kirardi va H₂ ajralmasdi ✗
2. Kons. H₂SO₄ — H₂ o'rniga SO₂ ✗
3. NaOH — Mg reaksiyaga kirishmaydi ✗
4. HCl — Mg, Zn, Sn → H₂; Cu → yo'q ✓

**Javob:** D) HCl

**Tipik xato:** "To'rtta metall ham tasvirlangan → hammasi reaksiyaga kirgan" deb HNO₃ ni tanlash; qalayni (Sn) vodoroddan o'ngda deb o'ylash.

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** 8,94 g kaliy galogenidni oksidlash uchun 4 mol/l li **5 ml** kaliy dixromat eritmasi va H₂SO₄ sarflandi.
Variantlar: A) 200 B) 100 C) 3060 D) 1120 E) 2240 F) 1650

**Umumiy yechim (galogenni aniqlash):**
1. n(K₂Cr₂O₇) = 0,005 · 4 = **0,02 mol** → elektronlar: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ → **0,12 mol e⁻**.
2. 2X⁻ − 2e⁻ → X₂ → n(KX) = **0,12 mol**.
3. M(KX) = 8,94/0,12 = **74,5** → X = 35,5 → **KCl**.
4. Tenglama: **K₂Cr₂O₇ + 6KCl + 7H₂SO₄ → Cr₂(SO₄)₃ + 3Cl₂↑ + 4K₂SO₄ + 7H₂O**

---

### 33-savol · [2,2 ball] · **C**

**Yechim:** Dastlabki tuzlar — KCl va K₂Cr₂O₇.
1. m(KCl) = 8,94 g = **8940 mg**.
2. m(K₂Cr₂O₇) = 0,02 · 294 = 5,88 g = **5880 mg**.
3. Farq = **3060 mg**.

**Javob:** C) 3060

**Tipik xato:** Javobni grammda (3,06) qoldirish — savol **mg** so'raydi.

---

### 34-savol · [2,2 ball] · **F**

**Yechim:**
1. K₂Cr₂O₇ bitta formula birligida **11 ta atom** (2 + 2 + 7) → 0,02 · 11 = **0,22 mol atom**.
2. CH₃COOH da **8 ta atom** → n = 0,22/8 = **0,0275 mol**.
3. m = 0,0275 · 60 = 1,65 g = **1650 mg**.

**Javob:** F) 1650

**Tipik xato:** Sirka kislotada 7 yoki 9 ta atom deb sanash (C₂H₄O₂ → 2+4+2 = 8); dixromatdagi atomlarni 9 deb olish.

---

### 35-savol · [2,2 ball] · **A**

**Yechim:**
1. Tenglama bo'yicha 1 mol K₂Cr₂O₇ ga **4 mol K₂SO₄** va **7 mol H₂SO₄** to'g'ri keladi.
2. n(K₂SO₄) = 0,08 mol → m = 0,08 · 174 = **13,92 g**.
3. n(H₂SO₄) = 0,14 mol → m = 0,14 · 98 = **13,72 g**.
4. Farq = 0,2 g = **200 mg**.

**Javob:** A) 200

**Tipik xato:** Tenglamani tenglashtirmasdan K₂SO₄ ni 1 mol deb olish; mg ga o'tkazmaslik.

---

## III QISM — yozma topshiriqlar (36–45)

> Har bir topshiriq: **a) 1,7 ball · b) 1,5 ball**.

---

### 36-topshiriq · [3,2 ball]

**Shart:** 198,08 g 25 % li KMnO₄ eritmasiga 0,54 mol SO₂ va N₂ dan iborat (D_Ne = 2,6) aralashma qo'shilganda faqat yagona oksidlanish-qaytarilish reaksiyasi sodir bo'ldi.
a) Reaksiyaga kirishgan tuz miqdorini (mol) aniqlang. b) Ortib qolgan KMnO₄ massasini (g) aniqlang.

**Qoida:** Aralashma tarkibi o'rtacha molyar massadan; KMnO₄ **neytral** muhitda MnO₂ gacha qaytariladi (Mn⁺⁷ + 3e⁻ → Mn⁺⁴).
*Nega aynan u:* eritmaga kislota qo'shilmagan — SO₂ ning suvdagi eritmasi kuchsiz; shu sababli mahsulot MnO₂.

**Yechim:**
1. M̄ = 2,6 · 20 = **52 g/mol**. SO₂ — a, N₂ — b: a + b = 0,54; 64a + 28b = 28,08 → 36a = 12,96 → **a = 0,36 mol SO₂**, b = 0,18 mol N₂ (N₂ reaksiyaga kirishmaydi).
2. m(KMnO₄) = 198,08 · 0,25 = 49,52 g → n = 49,52/158 = **0,3134 mol**.
3. **2KMnO₄ + 3SO₂ + 2H₂O → 2MnO₂↓ + K₂SO₄ + 2H₂SO₄** (elektron balans: 2·3 = 3·2 ✓)
4. **a)** n(KMnO₄) = 0,36 · 2/3 = **0,24 mol**.
5. **b)** Ortgan = 0,3134 − 0,24 = 0,0734 mol → m = **11,6 g**.

**Javob:** a) 0,24 mol · b) 11,6 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| M̄ = 52 topilgan | 0,4 |
| n(SO₂) = 0,36 mol (N₂ inert ekani aytilgan) | 0,5 |
| Reaksiya tenglamasi to'g'ri (2 : 3 nisbat) | 0,5 |
| n(KMnO₄) = 0,24 mol | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| m(KMnO₄) = 49,52 g eritmadan topilgan | 0,4 |
| n(KMnO₄) = 0,3134 mol | 0,4 |
| Ortgan miqdor 0,0734 mol | 0,4 |
| m = 11,6 g | 0,3 |

**Tipik xato:** Kislotali muhit tenglamasini (2KMnO₄ + 5SO₂ + 2H₂O → K₂SO₄ + 2MnSO₄ + 2H₂SO₄) ishlatish — u holda a) 0,144 mol, b) 26,77 g chiqadi va sonlar butunlikni yo'qotadi; N₂ ni ham reaksiyaga kiritish.

---

### 37-topshiriq · [3,2 ball]

**Shart:** x g 37,8 % li HNO₃ eritmasiga y g Cu tashlandi. Reaksiyada **1,2 mol kislorod tutuvchi** NO va NO₂ aralashmasi hosil bo'ldi. Hosil bo'lgan tuz termik parchalanganda 44 g qattiq qoldiq hosil bo'ldi.
a) x ni toping. b) Oxirgi aralashmadagi H₂O massasini (g) toping.

**Qoida:** Cu(NO₃)₂ parchalanishi: 2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂ — qattiq qoldiq **CuO**. Elektron balans: Cu − 2e⁻; N⁺⁵ + 3e⁻ → NO, N⁺⁵ + e⁻ → NO₂.
*Nega aynan u:* "kislorod tutuvchi 1,2 mol" — bu gazlar emas, **kislorod atomlari** miqdori; shu ikkinchi tenglamani beradi.

**Yechim:** NO — a, NO₂ — b.
1. n(CuO) = 44/80 = **0,55 mol** → n(Cu) = 0,55 → elektronlar = **1,1 mol**.
2. Elektron balans: 3a + b = 1,1 · Kislorod atomlari: a + 2b = 1,2.
3. Yechim: **a = 0,2 mol NO**, **b = 0,5 mol NO₂**.
4. **a)** n(HNO₃) = 2 · 0,55 (tuzda) + 0,2 + 0,5 (gazlarda) = **1,8 mol** → m = 113,4 g → x = 113,4/0,378 = **300 g**.
5. **b)** Vodorod balansi: barcha H suvga o'tadi → n(H₂O hosil) = 1,8/2 = 0,9 mol = **16,2 g**.
   Eritmadagi dastlabki suv = 300 − 113,4 = 186,6 g → jami = **202,8 g**.

**Javob:** a) 300 g · b) 202,8 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Qattiq qoldiq CuO ekani aniqlangan, n = 0,55 mol | 0,4 |
| Elektron balans tenglamasi 3a + b = 1,1 | 0,4 |
| "Kislorod tutuvchi 1,2 mol" → a + 2b = 1,2 to'g'ri talqin | 0,4 |
| n(HNO₃) = 1,8 mol (tuz + gazlar) | 0,3 |
| x = 300 g | 0,2 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Dastlabki eritmadagi suv 186,6 g | 0,5 |
| Reaksiyada hosil bo'lgan suv 0,9 mol = 16,2 g | 0,6 |
| Jami 202,8 g | 0,4 |

**Tipik xato:** 1,2 ni gazlarning umumiy moli deb olish; HNO₃ ni faqat tuzdagi nitrat bo'yicha hisoblash (gazlardagi azot ham kislotadan kelgan); hosil bo'lgan suvni unutish.

---

### 38-topshiriq · [3,2 ball]

**Shart:** II valentli metalldan yasalgan bir xil massadagi plastinkalarning biri FeSO₄ eritmasida 0,27 g ga **kamaydi**, ikkinchisi SnBr₂ eritmasida 1,62 g ga **ortdi**.
a) Plastinka qaysi metalldan yasalgan? b) Erigan metall bilan qancha 12 % li HI eritmasi reaksiyaga kirishadi?

**Qoida:** Plastinka massasining o'zgarishi = n·(M_cho'kkan − M_erigan). Kamayish → metall temirdan **og'irroq**, lekin faolroq.
*Nega aynan u:* bitta noma'lum (M) va bitta n — ikki tenglamaning **nisbati** n ni yo'qotadi.

**Yechim:**
1. FeSO₄ da: n(M − 56) = 0,27 · SnBr₂ da: n(119 − M) = 1,62.
2. Nisbat: (119 − M)/(M − 56) = 6 → 119 − M = 6M − 336 → 7M = 455 → **M = 65 → Zn**.
3. n: (65 − 56)n = 0,27 → **n = 0,03 mol**.
4. **b)** Zn + 2HI → ZnI₂ + H₂↑ → n(HI) = 0,06 mol → m = 0,06 · 128 = 7,68 g.
5. m(eritma) = 7,68/0,12 = **64 g**.

**Javob:** a) Rux (Zn) · b) 64 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Ikkala almashinish tenglamasi yozilgan | 0,4 |
| Massa o'zgarishi ifodalari to'g'ri tuzilgan | 0,6 |
| Nisbat orqali M = 65 topilgan | 0,5 |
| Metall Zn deb nomlangan | 0,2 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| n(Zn) = 0,03 mol | 0,4 |
| Zn + 2HI tenglamasi (1 : 2) | 0,4 |
| m(HI) = 7,68 g | 0,3 |
| Eritma massasi 64 g | 0,4 |

> **Izoh:** "Erigan metall" bitta tajribadagi 0,03 mol deb olindi. Agar ikkala plastinkadan erigan jami 0,06 mol nazarda tutilsa, javob **128 g** bo'ladi — ikkala yechimni ham qabul qiling, asoslanishi bo'lsa.

**Tipik xato:** Massa o'zgarishini (M − 56) emas, (56 − M) deb olib manfiy M chiqarish; HI ni 1 : 1 nisbatda hisoblash; 7,68 g ni javob deb yozish (eritma massasi so'ralgan).

---

### 39-topshiriq · [3,2 ball]

**Shart:** Magniy havoda qizdirilganda MgO massa ulushi 60 % bo'lgan aralashma olindi. Qattiq qoldiq suvda eritilganda 0,24 mol gaz ajraldi.
a) Sarflangan kislorod massasini (g) toping. b) Magniy necha mol suv bilan ta'sirlashgan?

**Qoida:** Magniy havoda **ikki** mahsulot beradi: MgO va Mg₃N₂. Nitrid suv bilan ammiak chiqaradi: Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃↑.
*Nega aynan u:* ajralgan gaz — aynan NH₃; MgO suv bilan gaz bermaydi.

**Yechim:**
1. n(NH₃) = 0,24 → n(Mg₃N₂) = **0,12 mol** → m = 0,12 · 100 = **12 g** (aralashmaning 40 %).
2. Aralashma = 12/0,4 = **30 g** → m(MgO) = 18 g → n(MgO) = **0,45 mol**.
3. **a)** O atomlari = 0,45 mol → n(O₂) = 0,225 mol → m = **7,2 g**.
4. **b)** Suv bilan ta'sirlashish: MgO + H₂O → Mg(OH)₂ — 0,45 mol; Mg₃N₂ + 6H₂O — 0,72 mol.
   Jami: 0,45 + 0,72 = **1,17 mol**.

**Javob:** a) 7,2 g · b) 1,17 mol (shundan 0,72 moli nitridga)

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Havoda MgO va Mg₃N₂ hosil bo'lishi aytilgan | 0,4 |
| Mg₃N₂ + H₂O → NH₃ tenglamasi va n = 0,12 mol | 0,5 |
| Aralashma 30 g, MgO 18 g | 0,5 |
| m(O₂) = 7,2 g | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Nitridga ketgan suv 0,72 mol | 0,6 |
| MgO ga ketgan suv 0,45 mol | 0,5 |
| Jami 1,17 mol | 0,4 |

> **Izoh:** b) bandi "magniy suv bilan ta'sirlashgan" deb yozilgan, aslida suv **magniy birikmalari** bilan ta'sirlashadi. Faqat nitridni nazarda tutgan o'quvchining **0,72 mol** javobi ham asosli — ikkalasini qabul qiling.

**Tipik xato:** Qoldiqni faqat MgO deb olish (unda gaz umuman chiqmaydi); 60 % ni mol ulush deb hisoblash; Mg₃N₂ ning M sini 76 deb olish (3·24 + 28 = 100).

---

### 40-topshiriq · [3,2 ball]

**Shart:** Toluolning gomologi kislorodda yondirilganda 0,48 mol kislorod sarflandi va 4,32 g suv ajraldi.
a) Gomolog molekulasidagi atomlar sonini yozing. b) Uglerodning massa ulushini aniqlang.

**Qoida:** Toluol gomologlari — **arenlar**, umumiy formula CₙH₂ₙ₋₆. Yonish: CₙH₂ₙ₋₆ + (3n−3)/2 O₂ → nCO₂ + (n−3)H₂O.

**Yechim:** Modda miqdori — a mol.
1. n(H₂O) = 4,32/18 = **0,24 mol** → a(n − 3) = 0,24.
2. n(O₂) = 0,48 → a(3n − 3)/2 = 0,48 → a(3n − 3) = 0,96.
3. Bo'lamiz: (n − 3)/(3n − 3) = 0,25 → 4n − 12 = 3n − 3 → **n = 9** → **C₉H₁₂**.
4. a = 0,24/(9 − 3) = **0,04 mol**.
5. **a)** Atomlar soni = 9 + 12 = **21 ta**.
6. **b)** ω(C) = 108/120 = **0,9 = 90 %**.

**Javob:** a) 21 ta atom (C₉H₁₂) · b) 90 %

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| CₙH₂ₙ₋₆ umumiy formulasi tanlangan | 0,4 |
| Yonish tenglamasi umumiy ko'rinishda | 0,4 |
| Suv va kislorod orqali n = 9 topilgan | 0,6 |
| Atomlar soni 21 | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| M(C₉H₁₂) = 120 | 0,5 |
| m(C) = 108 | 0,5 |
| ω = 90 % | 0,5 |

**Tipik xato:** Gomologik qatorni CₙH₂ₙ₊₂ yoki CₙH₂ₙ deb olish; suv koeffitsiyentini n deb yozish (arenlarda n−3).

---

### 41-topshiriq · [3,2 ball]

**Shart:** 30,2 g 25 % li MnSO₄ elektroliz qilinganda 0,085 mol gaz ajraldi va 25,93 g eritma hosil bo'ldi.
a) Necha farad (F) tok sarflangan? b) Elektrolizdan so'ng eritmada qancha (g) suv qoladi?

**Qoida:** Katodda avval Mn²⁺ qaytariladi, Mn tugagach **H₂** ajraladi; anodda doim O₂. Elektronlar soni ikki elektrodda **teng**.
*Nega aynan u:* gaz miqdori ham, massa kamayishi ham berilgan — uch noma'lumli sistema yopiladi.

**Yechim:** Mn — m, H₂ — h, O₂ — x mol.
1. n(MnSO₄) = 30,2 · 0,25/151 = **0,05 mol**; suv = 30,2 − 7,55 = **22,65 g**.
2. Gaz: h + x = 0,085 · Elektron balans: 2m + 2h = 4x · Massa: 55m + 2h + 32x = 30,2 − 25,93 = **4,27**.
3. Yechim: **x = 0,045 (O₂)**, **h = 0,04 (H₂)**, **m = 0,05 (Mn)** — ya'ni butun marganes ajralib bo'lgan ✓
4. **a)** n(e⁻) = 4x = **0,18 mol = 0,18 F**.
5. **b)** Sarflangan suv: MnSO₄ + H₂O → Mn + H₂SO₄ + ½O₂ (0,05 mol) va H₂O → H₂ + ½O₂ (0,04 mol) → jami 0,09 mol = 1,62 g.
   Qolgan suv = 22,65 − 1,62 = **21,03 g**.
   *(Tekshirish: 25,93 − m(H₂SO₄ 0,05 mol = 4,9 g) = 21,03 ✓)*

**Javob:** a) 0,18 F · b) 21,03 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| n(MnSO₄) = 0,05 mol | 0,3 |
| Katodda Mn, so'ng H₂; anodda O₂ — to'g'ri ketma-ketlik | 0,4 |
| Gaz, massa va elektron balansidan sistema tuzilgan | 0,6 |
| 0,18 F | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Dastlabki suv 22,65 g | 0,4 |
| Parchalangan suv 0,09 mol = 1,62 g | 0,6 |
| Javob 21,03 g (yoki H₂SO₄ orqali tekshirish) | 0,5 |

**Tipik xato:** Katodda faqat H₂ yoki faqat Mn deb olish; 0,085 ni faqat kislorod deb hisoblash; eritmada hosil bo'lgan H₂SO₄ ni suv deb sanash.

---

### 42-topshiriq · [3,2 ball]

**Shart:** 10 °C va 20 °C dagi eruvchanliklar mos ravishda 15 va 40. 10 °C da suvga 12 g tuz qo'shib (to'yingan) eritma hosil qilindi. Eritma 20 °C gacha qizdirilib yana tuz bilan to'yintirildi. Olingan eritma 7 °C gacha sovitilganda 27,2 g tuz cho'kmaga tushdi.
a) 7 °C dagi eruvchanlikni toping. b) 7 °C da erituvchi va eruvchining massa farqini (g) toping.

**Qoida:** \`S\` — 100 g **suvdagi** tuz massasi; isitish-sovitishda **suv massasi o'zgarmaydi**.
*Nega aynan u:* barcha hisob bitta o'zgarmas kattalikka — suv massasiga bog'lanadi.

**Yechim:**
1. 10 °C: 12 g tuz to'yintirgan bo'lsa, suv = 12 · 100/15 = **80 g**.
2. 20 °C: to'yinish uchun 80 g suvda 40 · 0,8 = **32 g** tuz bo'ladi (ya'ni yana 20 g qo'shilgan).
3. 7 °C: cho'kma 27,2 g → eritmada qolgan tuz = 32 − 27,2 = **4,8 g**.
4. **a)** S(7 °C) = 4,8 · 100/80 = **6 g/100 g suv**.
5. **b)** Erituvchi (80 g) − eruvchi (4,8 g) = **75,2 g**.

**Javob:** a) S = 6 · b) 75,2 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| S ta'rifi to'g'ri qo'llanilgan (100 g suvga nisbatan) | 0,4 |
| Suv massasi 80 g topilgan | 0,5 |
| 20 °C dagi tuz 32 g | 0,4 |
| S(7 °C) = 6 | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Qolgan tuz 4,8 g | 0,6 |
| Suv massasi o'zgarmasligi ko'rsatilgan | 0,5 |
| Farq 75,2 g | 0,4 |

**Tipik xato:** S ni eritmaga nisbatan foiz deb olish; sovitishda suv ham kamayadi deb o'ylash; b) da eritma massasini (84,8) ishlatish.

---

### 43-topshiriq · [3,2 ball]

**Shart:** Siklobutanga alkan qo'shilganda uglerod atomlari soni 1,25 marta, vodorod atomlari soni 4/3 marta ortadi.
a) 10,6 g aralashmadagi alkan massasini (g) toping. b) 21,2 g aralashmadagi uglerod massasini (g) toping.

**Qoida:** "Necha marta ortdi" → atomlar sonining nisbati; siklobutan **C₄H₈**, alkan **CₙH₂ₙ₊₂**.

**Yechim:** Siklobutan — a mol, alkan — b mol.
1. Uglerod: 4a + nb = 1,25 · 4a → **nb = a**.
2. Vodorod: 8a + (2n+2)b = (4/3) · 8a → (2n+2)b = (8/3)a.
3. b = a/n ni qo'yamiz: (2n+2)/n = 8/3 → 6n + 6 = 8n → **n = 3 (propan)**, b = a/3.
4. **a)** Massa: 56a + 44·(a/3) = 212a/3 = 10,6 → **a = 0,15**; b = 0,05 mol → m(propan) = **2,2 g**.
5. **b)** 21,2 g — ikki barobar: a = 0,3; b = 0,1. Uglerod = 4·0,3 + 3·0,1 = **1,5 mol** → m = **18 g**.

**Javob:** a) 2,2 g · b) 18 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Uglerod bo'yicha nisbat tenglamasi | 0,4 |
| Vodorod bo'yicha nisbat tenglamasi | 0,4 |
| Alkan propan ekani topilgan | 0,5 |
| m = 2,2 g | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| 21,2 g uchun mollar ikki barobar (0,3 va 0,1) | 0,5 |
| Uglerod mollari 1,5 | 0,6 |
| m(C) = 18 g | 0,4 |

**Tipik xato:** "1,25 marta ortdi" ni "qo'shilgandan keyin 1,25 ga teng bo'ldi" deb emas, "1,25 marta ko'p qo'shildi" deb o'qish; siklobutanni C₄H₁₀ deb olish.

---

### 44-topshiriq · [3,2 ball]

**Shart:** Gomologik qatorda ketma-ket joylashgan 32,76 g karbon kislotalar aralashmasiga metanol qo'shildi; 27,24 g murakkab efirlar olindi. Kichik gomolog miqdori katta gomolog miqdoridan 2,5 marta katta (katta gomolog 0,12 mol; unumlar 80 % va 50 %).
a) Aralashma molini toping. b) Kislotalar massa farqini toping.

**Qoida:** Ketma-ket gomologlar **14 g/mol** ga farq qiladi; metanol efiri M(kislota) + 14.

**Yechim:**
1. Katta gomolog 0,12 mol → kichik gomolog 0,12 · 2,5 = **0,3 mol**.
2. **a)** Jami = 0,3 + 0,12 = **0,42 mol**.
3. Kichik — M, katta — M + 14: 0,3M + 0,12(M + 14) = 32,76 → 0,42M = 31,08 → **M = 74** (propion kislota C₂H₅COOH), katta = **88** (moy kislota).
4. Tekshirish: efirlar 0,3·0,8·88 + 0,12·0,5·102 = 21,12 + 6,12 = **27,24 g** ✓
5. **b)** m₁ = 0,3 · 74 = 22,2 g; m₂ = 0,12 · 88 = 10,56 g → farq = **11,64 g**.

**Javob:** a) 0,42 mol · b) 11,64 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Kichik gomolog 0,3 mol | 0,6 |
| Jami 0,42 mol | 0,5 |
| Gomologlar 14 ga farq qilishi ko'rsatilgan | 0,6 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| 0,42M = 31,08 tenglamasi | 0,5 |
| M = 74 va 88 (kislotalar aniqlangan) | 0,5 |
| Farq 11,64 g | 0,5 |

**Tipik xato:** 2,5 marta nisbatni teskari qo'llash; efir massasini unumsiz hisoblash; gomologlar farqini 12 yoki 16 deb olish.

---

### 45-topshiriq · [3,2 ball]

**Shart:** A + B ↔ C. A ning konsentratsiyasi **2 marta** kamayishiga ketgan vaqt, **4 marta** kamayishiga ketgan vaqtdan 10 s kam.
a) 5 marta kamayishi uchun qancha vaqt (s)? b) 2,5 marta kamayishi uchun qancha vaqt (min)?

**Qoida:** Konsentratsiyaning teng marta kamayishiga **teng vaqt** ketadi (birinchi tartibli jarayon): t(4×) = 2·t(2×), umumiy holda \`t(n) = t₂ · log₂n\`.
*Nega aynan u:* 4 marta kamayish = ketma-ket ikkita ikki barobar kamayish; shartdagi 10 s farq aynan shuni beradi.

**Yechim:**
1. t(4×) − t(2×) = t(2×) = **10 s** → yarim kamayish vaqti 10 s.
2. **a)** t(5×) = 10 · log₂5 = 10 · 2,3219 ≈ **23,2 s**.
3. **b)** t(2,5×) = t(5×) − t(2×) = 23,2 − 10 = **13,2 s ≈ 0,22 min**.

**Javob:** a) ≈23,2 s · b) ≈13,2 s ≈ 0,22 min

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| t(4×) = 2t(2×) munosabati asoslangan | 0,6 |
| t(2×) = 10 s | 0,5 |
| t(n) = t₂·log₂n formulasi qo'llangan | 0,4 |
| ≈23,2 s | 0,2 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| t(2,5) = t(5) − t(2) yoki log₂2,5 ishlatilgan | 0,7 |
| ≈13,2 s | 0,4 |
| Minutga o'tkazish (0,22 min) | 0,4 |

**Tipik xato:** Chiziqli bog'liqlik deb o'ylab "5 marta → 25 s" deb javob berish; minutga o'tkazishni unutish.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | B | 16 | B | 31 | A |
| 2 | C | 17 | D | 32 | D |
| 3 | A | 18 | C | 33 | C |
| 4 | C | 19 | C | 34 | F |
| 5 | A | 20 | A | 35 | A |
| 6 | A | 21 | A | 36 | 0,24 mol · 11,6 g |
| 7 | B | 22 | C | 37 | 300 g · 202,8 g |
| 8 | C | 23 | C | 38 | Zn · 64 g* |
| 9 | C | 24 | C | 39 | 7,2 g · 1,17 mol* |
| 10 | B | 25 | B | 40 | 21 ta atom · 90 % |
| 11 | D | 26 | A | 41 | 0,18 F · 21,03 g |
| 12 | A | 27 | A | 42 | S = 6 · 75,2 g |
| 13 | C | 28 | A | 43 | 2,2 g · 18 g |
| 14 | A | 29 | B | 44 | 0,42 mol · 11,64 g |
| 15 | D | 30 | C | 45 | ≈23,2 s · ≈0,22 min |

\`*\` — ikki xil o'qilishi mumkin: **38b** (erigan metall bitta plastinkadanmi yoki ikkalasidan), **39b** (suv faqat nitrid bilanmi yoki MgO bilan ham). Izohlarga qarang.
Yana e'tibor bering: **6-savol**da C va D variantlari bir xil (1/8) yozilgan — manbadagi terish xatosi, to'g'ri javobga ta'sir qilmaydi.
`,Qe=`# Sertifikat — 26.05.2024, I smena

**Manba:** \`Milliy sertifikat .pdf\`, 10–12-betlar · 45 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–45 yozma (a/b)

> **Diqqat:** bu variantda manbada ball qiymatlari **ko'rsatilmagan**. Quyida DTM ning
> standart taqsimoti qo'llangan: 1–10 → 1,3 · 11–35 → 2,2 · 36–45 → 3,2 (a 1,7 + b 1,5).
> Manbada **42-raqam ikki marta** ishlatilgan (Fisher–Tropsh masalasi va grafik topshirig'i);
> quyida ular **42-A** va **42-B** deb ajratildi.
> \`(tushmagan)\` savollar: 19, 20, 21, 22.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **B**

**Shart:** Tarozining ikkala pallasiga 5 g dan ohaktosh qo'yildi, tarozi tenglashdi. Chap palladagi namuna doimiy massaga kelguncha qizdirildi. Tarozini qayta tenglashtirish uchun chap pallaga qancha (g) modda qo'shish kerak?

**Qoida:** CaCO₃ →(t) CaO + CO₂↑ — massa kamayishi aynan **ajralgan CO₂** massasiga teng.

**Yechim:**
1. n(CaCO₃) = 5/100 = **0,05 mol**.
2. n(CO₂) = 0,05 mol → m = 0,05 · 44 = **2,2 g**.
3. Shuncha massa qo'shilsa, pallalar yana tenglashadi.

**Javob:** B) 2,2

**Tipik xato:** CaO massasini (2,8 g) javob deb olish — u pallada **qolgan** modda, yo'qolgan emas.

---

### 2-savol · **B**

**Shart:** Teng massada olingan geliy va azot aralashmasining 13,5 l miqdori 83,1 kPa bosim va 42 °C da qanday massali (g) bo'ladi?

**Qoida:** Mendeleyev–Klapeyron: \`n = PV/(RT)\`, R = 8,31 l·kPa/(mol·K).
*Nega aynan u:* sharoit n.sh. emas, shuning uchun 22,4 ishlamaydi.

**Yechim:**
1. T = 42 + 273 = **315 K**; n = (83,1 · 13,5)/(8,31 · 315) = 1121,85/2617,65 = **3/7 mol**.
2. Har biridan m g olingan bo'lsa: n = m/4 + m/28 = **2m/7**.
3. 2m/7 = 3/7 → m = 1,5 g → jami massa = 2m = **3 g**.

**Javob:** B) 3

**Tipik xato:** Haroratni Selsiyda qoldirish; "teng massada" ni "teng molda" deb o'qib M̄ = 16 olish.

---

### 3-savol · **C**

**Shart:** Tartib raqami 3, 4 va 12 bo'lgan elementlarni elektromanfiylik **ortib borish** tartibida joylashtiring.

**Qoida:** Elektromanfiylik davr bo'ylab o'ngga ortadi, guruh bo'ylab pastga kamayadi.

**Yechim:**
1. 3 — Li (0,98) · 4 — Be (1,57) · 12 — Mg (1,31).
2. Li va Mg bir guruhda (IA/IIA emas — Li IA, Mg IIA), lekin Be Mg dan yuqorida va o'ngda → Be eng katta.
3. Ortib borish: **Li < Mg < Be** → 3, 12, 4.

**Javob:** C) 3,12,4

**Tipik xato:** Faqat tartib raqamiga qarab 3,4,12 deb yozish; "ortib borish" va "kamayib borish" ni almashtirish.

---

### 4-savol · **A**

**Shart:** Kumush, kalsiy va qo'rg'oshin ionlari saqlagan eritmaga qaysi modda qo'shilganda eritmada **faqat kumush** ionlari qoladi?

**Qoida:** Reagent Ca²⁺ va Pb²⁺ ni cho'ktirib, Ag⁺ ni eritmada qoldirishi kerak. **AgF — eruvchan**, qolgan kumush tuzlari esa erimaydi.

**Yechim:**
1. NaF: CaF₂↓ ✓, PbF₂↓ ✓, AgF — eriydi ✓ → shart bajariladi.
2. Na₂CO₃ va Na₃PO₄: Ag₂CO₃ va Ag₃PO₄ ham cho'kadi ✗
3. K₂SO₄: Ag₂SO₄ kam eriydi, PbSO₄ cho'kadi, lekin CaSO₄ to'liq cho'kmaydi ✗

**Javob:** A) NaF

**Tipik xato:** Eruvchanlik jadvalidagi **AgF istisnosini** eslamaslik — u yagona eriydigan kumush galogenidi.

---

### 5-savol · **D**

**Shart:** Ammiak yonishida 2,04 g ammiak va 0,105 mol kislorod ishlatildi. Ajralgan suv massasini toping.

**Qoida:** Ammiak ikki yo'l bilan yonadi — 4NH₃ + 3O₂ → 2N₂ + 6H₂O (katalizatorsiz) va 4NH₃ + 5O₂ → 4NO + 6H₂O (katalizatorli). **Ikkalasida ham 4 mol NH₃ dan 6 mol H₂O** hosil bo'ladi.
*Nega aynan u:* shuning uchun qaysi yo'l bilan borishi suv miqdoriga ta'sir qilmaydi — faqat NH₃ to'liq sarflanishi kerak.

**Yechim:**
1. n(NH₃) = 2,04/17 = **0,12 mol**.
2. Kerakli O₂: birinchi yo'lda 0,09 mol, ikkinchisida 0,15 mol. Berilgani 0,105 — oraliqda, demak NH₃ **to'liq** sarflanadi.
3. n(H₂O) = 0,12 · 6/4 = **0,18 mol** → m = **3,24 g**.

**Javob:** D) 3,24

**Tipik xato:** Faqat bitta tenglamani olib kislorodni cheklovchi deb hisoblash; "NH₃ qoldi" deb o'ylash.

---

### 6-savol · **C**

**Shart:** 60,8 g CaC₂ va CaO aralashmasi 200 g suvda eritildi; kalsiy ionini to'liq cho'ktirish uchun 150 g CdF₂ sarflandi. Jarayon oxirida idishda qolgan modda massasini toping.

**Qoida:** CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑ · CaO + H₂O → Ca(OH)₂ · Ca(OH)₂ + CdF₂ → CaF₂↓ + Cd(OH)₂↓
*Nega aynan u:* yagona **gaz holida chiqib ketadigan** modda — asetilen; cho'kmalar esa ajratiladi.

**Yechim:**
1. n(CdF₂) = 150/150 = **1 mol** → jami Ca = **1 mol**.
2. CaC₂ — x, CaO — y: x + y = 1; 64x + 56y = 60,8 → 8x = 4,8 → **x = 0,6**, **y = 0,4**.
3. m(C₂H₂) = 0,6 · 26 = **15,6 g** (chiqib ketadi).
4. Cho'kmalar: CaF₂ = 78 g, Cd(OH)₂ = 146 g → **224 g**.
5. Qolgan (suyuq faza) = 60,8 + 200 + 150 − 15,6 − 224 = **171,2 g**.

**Javob:** C) 171,2

**Tipik xato:** Asetilenni unutish; cho'kmalarni ham "qolgan modda" deb qo'shib yuborish (395,2 chiqadi); Cd ning atom massasini 112,4 o'rniga noto'g'ri yaxlitlash.

---

### 7-savol · **C**

**Shart:** Metan yonishida reaksiya tezligi 5 mol/(l·min). Sistema bosimi 2 marta oshirildi — tezlik qanday bo'ladi?

**Qoida:** \`v = k·C(CH₄)·C²(O₂)\`; bosim 2 marta ortsa **har bir konsentratsiya** 2 marta ortadi.

**Yechim:**
1. CH₄ + 2O₂ → CO₂ + 2H₂O → umumiy tartib 1 + 2 = **3**.
2. v₂/v₁ = 2³ = **8**.
3. v₂ = 5 · 8 = **40 mol/(l·min)**.

**Javob:** C) 40

**Tipik xato:** Kislorodning darajasini 1 deb olish (javob 20 chiqadi); faqat 2 ga ko'paytirish (10 — D tuzog'i).

---

### 8-savol · **A**

**Shart:** Eritmaga xos ma'lumotlarni toping.
1) rangli bo'lishi mumkin · 2) tarkibi bir xil moddadan iborat · 3) eritma tayyorlashda hajm o'zgarmaydi · 4) temperaturani ko'tarib erituvchi va erigan moddaga ajratish mumkin

**Qoida:** Eritma — **bir jinsli aralashma** (kamida ikki modda), fizik usul bilan ajratiladi.

**Yechim:**
1. CuSO₄ eritmasi ko'k — rangli bo'lishi mumkin ✓
2. "Bir xil moddadan iborat" — bu sof modda ta'rifi ✗
3. Aralashtirishda hajm qisqaradi (kontraksiya) ✗
4. Bug'latish — erituvchini ajratish usuli ✓

**Javob:** A) 1,4

**Tipik xato:** "Bir jinsli" ni "bir xil moddadan iborat" deb tushunish — bir jinslilik tarkibning **ko'rinmasligi**, sofligi emas.

---

### 9-savol · **A**

**Shart:** Metan va silan aralashmasi yondirildi (har ikkala gazning yonish unumi 80 %). Hosil bo'lgan **qattiq** modda massasi **gaz** moddalar massasiga teng bo'ldi. Dastlabki aralashmada silanning hajmiy ulushini toping.

**Qoida:** CH₄ + 2O₂ → CO₂ + 2H₂O (hammasi gaz) · SiH₄ + 2O₂ → **SiO₂↓** + 2H₂O. n.sh. da suv suyuq.
*Nega aynan u:* "qattiq modda" faqat SiO₂; "gaz moddalar" — CO₂ va reaksiyaga kirmay qolgan CH₄ va SiH₄.

**Yechim:** CH₄ — a, SiH₄ — b.
1. Qattiq: m(SiO₂) = 0,8b · 60 = **48b**.
2. Gazlar: CO₂ = 0,8a · 44 = 35,2a · qolgan CH₄ = 0,2a · 16 = 3,2a · qolgan SiH₄ = 0,2b · 32 = 6,4b.
3. 48b = 35,2a + 3,2a + 6,4b → 41,6b = 38,4a → b/a = 0,923.
4. φ(SiH₄) = b/(a+b) = 0,923/1,923 = **0,48**.

**Javob:** A) 0,48

**Tipik xato:** Suvni gaz deb hisobga olish; reaksiyaga kirmagan 20 % gazlarni unutish.

---

### 10-savol · **B**

**Shart:** Fosfor barcha kislotalarida **V valentli** ekanini hisobga olib, bariy gipofosfit molekulasidagi jami bog'lar sonini toping.

**Qoida:** Gipofosfit kislota H₃PO₂ da fosforning valentligi V: ikkita P–H, bitta P=O va bitta P–OH. Tuzi — **Ba(H₂PO₂)₂**.
*Nega aynan u:* valentlik V bo'lishi uchun qo'shbog' **ikkita** bog' birligi deb sanaladi — savol shuni eslatish uchun yozilgan.

**Yechim:** Bitta H₂PO₂⁻ anionida:
1. 2 ta P–H · 1 ta P=O (**2 bog' birligi**) · 1 ta P–O⁻ → jami **5** (fosfor valentligi V ✓).
2. Ikkita anion → 10.
3. Bariy II valentli → Ba bilan O orasida **2 ta** ion bog'.
4. Jami = 10 + 2 = **12**.

**Javob:** B) 12

**Tipik xato:** Gipofosfitni PO₃³⁻ yoki PO₄³⁻ bilan almashtirish; qo'shbog'ni bitta deb sanash (10 — C tuzog'i).

---

### 11-savol · **B**

**Shart:** 1·10⁻⁸ M li HCl eritmasining pH qiymatini toping.

**Qoida:** Juda suyultirilgan kislotada **suvning o'z ionlanishi** hal qiluvchi bo'ladi: [H⁺]² − C[H⁺] − K_w = 0.
*Nega aynan u:* formal hisob pH = 8 beradi — bu **kislota uchun imkonsiz**, shuning uchun suv hisobga olinadi.

**Yechim:**
1. [H⁺] = (C + √(C² + 4K_w))/2 = (10⁻⁸ + √(10⁻¹⁶ + 4·10⁻¹⁴))/2.
2. √(4,01·10⁻¹⁴) = 2,0025·10⁻⁷ → [H⁺] = (0,1 + 2,0025)·10⁻⁷/2 = **1,05·10⁻⁷**.
3. pH = −lg(1,05·10⁻⁷) ≈ **6,98**.

**Javob:** B) 6,98

**Tipik xato:** pH = −lg10⁻⁸ = 8 (C tuzog'i) — kislota eritmasining pH i 7 dan **katta bo'lolmaydi**; yoki "juda suyuq, demak pH = 7" deb A ni belgilash.

---

### 12-savol · **A**

**Shart:** 300 g 4,5 % li KNO₃ eritmasini 13,4 A tok bilan elektroliz qilib, KNO₃ ning 30 °C dagi to'yingan eritmasi olindi. Necha soat elektroliz qilingan? [S(30 °C) = 45]

**Qoida:** KNO₃ eritmasi elektrolizida **faqat suv** parchalanadi (K⁺ qaytarilmaydi, NO₃⁻ oksidlanmaydi) → tuz massasi o'zgarmaydi.

**Yechim:**
1. m(KNO₃) = 13,5 g; suv = **286,5 g**.
2. To'yingan eritmada: 45 g tuzga 100 g suv → 13,5 g tuzga **30 g suv**.
3. Parchalangan suv = 286,5 − 30 = 256,5 g = **14,25 mol**.
4. H₂O → H₂ + ½O₂ uchun 2 F kerak → n(e⁻) = 28,5 mol → Q = 28,5 · 96500 = 2 750 250 C.
5. t = Q/I = 2 750 250/13,4 = 205 243 s = **57 soat**.

**Javob:** A) 57

**Tipik xato:** 1 mol suvga 1 F deb olish (28,5 soat — B tuzog'i); S ni eritmaga nisbatan foiz deb hisoblash.

---

### 13-savol · **C**

**Shart:** Dissotsilanishi natijasida zaryadi **faqat 1** bo'lgan ionlar hosil qiladigan elektrolitlarni belgilang.

**Qoida:** Ion zaryadi formuladan ko'rinadi: Ca²⁺, SO₄²⁻, CO₃²⁻ — ikki zaryadli.

**Yechim:**
1. B) CaBr₂ → Ca²⁺ ✗ · D) H₂SO₄ → SO₄²⁻, Na₂CO₃ → CO₃²⁻ ✗
2. A) LiOH mos, lekin **suv** — elektrolit emas (juda kuchsiz, amalda elektrolit deb qaralmaydi) ✗
3. C) NaCl → Na⁺ + Cl⁻; NaOH → Na⁺ + OH⁻ ✓

**Javob:** C) NaCl; NaOH

**Tipik xato:** Suvni elektrolit deb A ni tanlash — bu savolning asosiy tuzog'i.

---

### 14-savol · **C**

**Shart:** Tarkibida s va d elektronlari soni **teng** bo'lgan **ionlarni** ko'rsating.

**Qoida:** s-elektronlar barcha pog'onalardagi s-pog'onachalarda; ion hosil bo'lganda avval **tashqi s-elektronlar** uziladi.

**Yechim:**
1. Fe²⁺ (24 e⁻): [Ar]3d⁶ → s = 2+2+2 = 6; d = 6 ✓
2. Co³⁺ (24 e⁻): [Ar]3d⁶ → s = 6; d = 6 ✓
3. Ni²⁺ (26 e⁻): 3d⁸ → 6 ≠ 8 ✗ · Fe³⁺ (23 e⁻): 3d⁵ → 6 ≠ 5 ✗ · Ni³⁺: 3d⁷ ✗
4. A variantidagi Ni va Sr — **atomlar**, ion emas (garchi ularda ham s = d bo'lsa-da).

**Javob:** C) Fe²⁺; Co³⁺

**Tipik xato:** Faqat tashqi s-elektronlarni (4s²) sanash; ion hosil bo'lishida d-elektron uziladi deb o'ylash.

---

### 15-savol · **B**

**Shart:** 2 : 1 mol nisbatda olingan ikkita alkan aralashmasida n(C)/n(H) = 7/20, vodorod atomlari soni esa 3 : 2 nisbatda. Aralashmaning asetilenga nisbatan zichligini toping.

**Qoida:** Alkan CₙH₂ₙ₊₂; "vodorod atomlari soni nisbati" — **mollar × molekuladagi H soni**.

**Yechim:** Birinchisi 2 mol CₙH₂ₙ₊₂, ikkinchisi 1 mol C_mH₂m₊₂.
1. H nisbati: 2(2n+2) : (2m+2) = 3 : 2 → 4(2n+2) = 3(2m+2) → **6m = 8n + 2**.
2. C/H: (2n + m)/(4n + 2m + 6) = 7/20 → 12n + 6m = 42 → **2n + m = 7**.
3. Yechim: **n = 2, m = 3** → 2 mol C₂H₆ va 1 mol C₃H₈.
4. M̄ = (2·30 + 44)/3 = 104/3 ≈ 34,67 → D(C₂H₂) = 34,67/26 = **1,33**.

**Javob:** B) 1,33

**Tipik xato:** Zichlikni havoga yoki vodorodga nisbatan hisoblash; H nisbatini molekuladagi atomlar soni bo'yicha (mollarsiz) yozish.

---

### 16-savol · **D**

**Shart:** CH₃−CH=CH−C≡CH moddasi uchun jadvaldagi qaysi qator to'g'ri? (σ · π · uglerodlar gibridlanishi · jami gibrid orbitallar)

**Qoida:** σ = barcha bog'lar soni (qo'shbog'da 1 ta σ); π: C=C → 1, C≡C → 2. Gibrid orbitallar: sp³ → 4, sp² → 3, sp → 2.

**Yechim:**
1. σ: C–C 4 ta + C–H 6 ta = **10**.
2. π: 1 + 2 = **3**.
3. Gibridlanish: CH₃ — sp³, =CH– va =CH– — sp², ≡C– va ≡CH — sp.
4. Gibrid orbitallar: 4 + 3 + 3 + 2 + 2 = **14**.
5. Bu to'plam 4-qatorga mos (sp;sp;sp²;sp²;sp³ — yozilish tartibi teskari, to'plam bir xil).

**Javob:** D) 4

**Tipik xato:** Uchbog'da 3 ta π deb sanash; gibrid orbitallarni atomlar soni (5) deb olish.

---

### 17-savol · **B**

**Shart:** 3A + xB → C. Jadval: v=16 ([A]=2, [B]=1) · v=216 ([A]=3, [B]=2) · v=y ([A]=1, [B]=3). y ni aniqlang.

**Qoida:** \`v = k·[A]³·[B]ˣ\` — koeffitsiyentlar darajaga chiqadi (elementar reaksiya).

**Yechim:**
1. 1-qator: k · 2³ · 1ˣ = 16 → **k = 2**.
2. 2-qator: 2 · 3³ · 2ˣ = 216 → 54 · 2ˣ = 216 → 2ˣ = 4 → **x = 2**.
3. 3-qator: y = 2 · 1³ · 3² = **18**.

**Javob:** B) 18

**Tipik xato:** A ning darajasini 1 deb olish; x ni tenglamadan emas, taxmin bilan tanlash.

---

### 18-savol · **C**

**Shart:** Asetilen bilan X gaz aralashmasida X ning massa ulushi 48 %, mol ulushi 60 % bo'lsa, X ni toping.

**Qoida:** \`ω(X) = n(X)·M(X) / Σ(nᵢMᵢ)\`.

**Yechim:** 1 mol aralashma olamiz: X = 0,6 mol, C₂H₂ = 0,4 mol (10,4 g).
1. 0,6M/(0,6M + 10,4) = 0,48 → 0,6M = 0,288M + 4,992.
2. 0,312M = 4,992 → **M = 16** → CH₄.

**Javob:** C) CH₄

**Tipik xato:** Massa va mol ulushlarini almashtirish; aralashmaning umumiy massasini 100 g deb olib chalkashish.

---

### 19-savol · *(tushmagan · savol nuqsonli — izohga qarang)*

**Shart:** Jadvalda: olingan moddalar H₂ — a g, O₂ — a g; aralashmadagi molekulalar soni 17·N_A. Berilgan uchta grafikdan qaysilari jadvalga mos?
I — m(H₂) a dan 28 g gacha kamayib, so'ng o'zgarmaydi · II — m(O₂) a dan 16 g gacha kamayib, so'ng o'zgarmaydi · III — ν(H₂O) 2 molgacha ortib, so'ng o'zgarmaydi

**Qoida:** Teng massadagi gazlarning mollari M ga teskari proporsional; cheklovchi reagent **to'liq** sarflanadi va uning grafigi **nolga** tushadi.

**Yechim:**
1. a/2 + a/32 = 17 → a · 17/32 = 17 → **a = 32 g**.
2. n(H₂) = 16 mol, n(O₂) = **1 mol** → 2H₂ + O₂ → 2H₂O: kislorod cheklovchi.
3. Sarflangan H₂ = 2 mol = 4 g → qolgan **28 g** → **I grafigi to'g'ri** ✓
4. O₂ to'liq sarflanadi → grafik **0** ga tushishi kerak, 16 g ga emas → **II xato** ✗
5. n(H₂O) = 2 mol → **III to'g'ri** ✓

**Javob:** To'g'ri grafiklar — **I va III**

> **Izoh:** variantlar orasida "I, III" juftligi yo'q (A) faqat I · B) I,II · C) faqat II · D) I,II,III).
> Savol nuqsonli: II grafigi kislorod to'liq sarflanishiga ziddir. Saytga qo'yishda bu savolni
> yo'q ulardan biriga moslamasdan, **"I va III"** javobi bilan tuzatib kiritish tavsiya etiladi.

**Tipik xato:** Teng massani teng mol deb olish; cheklovchi reagentni H₂ deb belgilash.

---

### 20-savol · **B** *(tushmagan)*

**Shart:** Jadvalda alken molekulasidagi uglerodlar: birlamchi — (y+4), ikkilamchi — (y−2), uchlamchi — (y−2), to'rtlamchi — ? Ularning sonini aniqlang.

**Qoida:** Tarmoqlangan (siklsiz) uglevodorodda C–C bog'lar soni n−1; har bir uglerodning "darajasi" (qo'shni uglerodlar soni) yig'indisi **2(n−1)** ga teng.
*Nega aynan u:* bu ayniyat y ni butunlay yo'q qiladi va javobni bir qiymatli beradi.

**Yechim:** To'rtlamchilar soni — q, jami n = (y+4) + (y−2) + (y−2) + q = **3y + q**.
1. Darajalar yig'indisi: 1(y+4) + 2(y−2) + 3(y−2) + 4q = 6y − 6 + 4q.
2. 2(n−1) = 2(3y + q − 1) = 6y + 2q − 2.
3. 6y − 6 + 4q = 6y + 2q − 2 → 2q = 4 → **q = 2**.

**Javob:** B) 2

**Tipik xato:** y ni topishga urinish (u topilmaydi va kerak ham emas); qo'shbog'ni ikkita qo'shni deb sanash — "ikkilamchi" atomning qo'shnilari **soni** hisoblanadi, bog' karraligi emas.

---

### 21-savol · **D** *(tushmagan)*

**Shart:** Etan degidrogenlanganda etilen, asetilen va vodorod aralashmasi olindi. Vodorod chiqarib yuborilgandan keyin aralashma hajmi 1344 ml (n.sh.), massasi 1,62 g. Ajralgan vodorod hajmini (l) aniqlang.

**Qoida:** C₂H₆ → C₂H₄ + H₂ · C₂H₆ → C₂H₂ + 2H₂; vodorodsiz aralashmaning **o'rtacha M** i tarkibni beradi.

**Yechim:**
1. n = 1,344/22,4 = **0,06 mol**; M̄ = 1,62/0,06 = **27 g/mol**.
2. C₂H₄ (28) va C₂H₂ (26): 27 — aynan o'rtasi → **0,03 mol dan**.
3. H₂: etilendan 0,03 mol, asetilendan 2 · 0,03 = 0,06 mol → jami **0,09 mol**.
4. V = 0,09 · 22,4 = **2,016 l**.

**Javob:** D) 2,016

**Tipik xato:** Asetilen uchun 1 mol H₂ deb olish (1,344 l chiqadi — C tuzog'i); aralashmada etan qolgan deb hisoblash.

---

### 22-savol · **D** *(tushmagan)*

**Shart:** 40 g dan olingan **mis** elektrodlar CuSO₄ eritmasiga tushirildi. Elektrolizdan keyin **katod** konsentrlangan sulfat kislotada eritilganda 22,4 l (n.sh.) gaz ajraldi. Elektrolizdan so'ng **anod** massasini toping (katodda vodorod ajralmagan).

**Qoida:** Mis elektrodlar bilan elektroliz — **erituvchi anodli**: anodda Cu − 2e⁻ → Cu²⁺, katodda Cu²⁺ + 2e⁻ → Cu. Katodga qo'shilgan massa = anoddan ketgan massa.
*Nega aynan u:* Cu + 2H₂SO₄(kons) → CuSO₄ + SO₂↑ + 2H₂O orqali katoddagi **butun** mis miqdori topiladi.

**Yechim:**
1. n(SO₂) = 1 mol → n(Cu katodda) = 1 mol = **64 g**.
2. Katodga o'tirgan mis = 64 − 40 = **24 g**.
3. Anod shuncha yemiriladi: 40 − 24 = **16 g**.

**Javob:** D) 16

**Tipik xato:** Anodda kislorod ajraladi deb o'ylash (bu **inert** elektrodda bo'ladi); 24 g ni javob deb yozish.

---

### 23-savol · **B**

**Shart:** Xloropren kauchukning monomerini ko'rsating.

**Qoida:** Xloropren — **2-xlorbutadiyen-1,3** (CH₂=CCl–CH=CH₂).

**Javob:** B) 2-xlorbutadiyen-1,3

**Tipik xato:** 2-metilbutadiyen-1,3 (izopren — tabiiy kauchuk monomeri) bilan almashtirish.

---

### 24-savol · **C**

**Shart:** **Atomlar soni teng** bo'lgan 1,1-dixloretan va dixlormetandan iborat 70,5 g aralashma gidrolizlandi; hosil bo'lgan aldegidlarga Ag₂O/NH₃ ta'sir ettirilganda cho'kkan metall molini toping.

**Qoida:** Bitta uglerodda ikkita xlor bo'lsa, gidrolizda **aldegid** hosil bo'ladi. Formaldegid **4 mol**, boshqa aldegidlar **2 mol** kumush beradi.
*Nega aynan u:* HCHO ikki marta oksidlanadi (HCHO → HCOOH → CO₂), shuning uchun 4 Ag.

**Yechim:** CH₃CHCl₂ — a mol (8 ta atom), CH₂Cl₂ — b mol (5 ta atom).
1. Atomlar tengligi: 8a = 5b → **b = 1,6a**.
2. 99a + 85b = 70,5 → 99a + 136a = 235a = 70,5 → **a = 0,3**, **b = 0,48**.
3. CH₃CHCl₂ → CH₃CHO (0,3 mol) → 0,6 mol Ag.
4. CH₂Cl₂ → HCHO (0,48 mol) → 1,92 mol Ag.
5. Jami = **2,52 mol**.

**Javob:** C) 2,52

**Tipik xato:** Formaldegid uchun 2 mol Ag olish (1,56 chiqadi); "atomlar soni teng" ni "mollari teng" deb o'qish.

---

### 25-savol · **A**

**Shart:** 2 : 1 nisbatdagi nitroalkan va nitrobenzol aralashmasi qaytarilganda hosil bo'lgan aralashmada **vodorod atomlarining mol ulushi** 29 : 46 bo'lsa, alkilaminni aniqlang.

**Qoida:** R–NO₂ + 3H₂ → R–NH₂ + 2H₂O; "vodorod atomlarining mol ulushi" = N(H)/N(barcha atomlar).
*Nega aynan u:* 29/46 kasrining maxraji aminlar aralashmasidagi **jami atomlar** soniga mos keladi.

**Yechim:** 2 mol CₙH₂ₙ₊₃N va 1 mol C₆H₇N.
1. Vodorod: 2(2n+3) + 7 = **4n + 13**.
2. Jami atomlar: 2(3n+4) + 14 = **6n + 22**.
3. (4n+13)/(6n+22) = 29/46 → 184n + 598 = 174n + 638 → 10n = 40 → **n = 4**.

**Javob:** A) butilamin

**Tipik xato:** Aralashmaga suvni ham qo'shish (reaksiya mahsuloti sifatida ajraladi, "hosil bo'lgan aralashma" aminlar deb olinadi); nisbatni faqat vodorodlar orasida deb o'qish.

---

### 26-savol · **C**

**Shart:** 2 mol maltoza va saxarozadan iborat aralashma gidrolizlandi; mahsulotlar Ag₂O/NH₃ orqali o'tkazilganda 691,2 g metall cho'kdi. Saxarozaning massa ulushini (%) toping.

**Qoida:** Maltoza → **2 glyukoza** (har biri 2 Ag) = 4 Ag; saxaroza → glyukoza + fruktoza, **faqat glyukoza** reaksiyaga kirishadi = 2 Ag.

**Yechim:**
1. n(Ag) = 691,2/108 = **6,4 mol**.
2. a + b = 2; 4a + 2b = 6,4 → 2a + b = 3,2 → **a = 1,2 (maltoza)**, **b = 0,8 (saxaroza)**.
3. Ikkalasining M si 342 ga teng → ω(saxaroza) = 0,8/2 = **40 %**.

**Javob:** C) 40

**Tipik xato:** Fruktozani ham kumush beradi deb hisoblash (b = 0 chiqadi); massa ulushini mol ulushidan farqlamaslik — bu masalada M lar teng bo'lgani uchun ular mos keladi.

---

### 27-savol · **A**

**Shart:** Benzolga 200 g 37,2 % li HNO₃ ning sulfat kislotali eritmasi qo'shilganda, eritmada **nitrat kislota va nitrobenzolning massa ulushlari teng** bo'ldi. Olingan nitrobenzoldan qancha (g) anilin olish mumkin?

**Qoida:** Bitta eritmada massa ulushlari teng bo'lsa, **massalari ham teng**.

**Yechim:**
1. m(HNO₃) = 74,4 g.
2. x mol HNO₃ reaksiyaga kirsa, x mol C₆H₅NO₂ (123 g/mol) hosil bo'ladi.
3. Qolgan kislota = 74,4 − 63x; nitrobenzol = 123x. Tenglashtiramiz: 74,4 = 186x → **x = 0,4 mol**.
4. C₆H₅NO₂ + 3H₂ → C₆H₅NH₂: 0,4 mol anilin · 93 = **37,2 g**.

**Javob:** A) 37,2

**Tipik xato:** Eritma massasini hisoblashga urinish (kerak emas — ulushlar tengligi massalar tengligini beradi); anilin M sini 107 deb olish.

---

### 28-savol · **D**

**Shart:** To'g'ri fikrni aniqlang.

**Qoida:** **Protein (oddiy oqsil)** gidrolizlanganda faqat aminokislotalar beradi; murakkab oqsillar (proteidlar) esa uglevod, yog', nuklein kislota kabi **prostetik guruh** ham beradi.

**Yechim:**
1. A) — bu **proteid** ta'rifi ✗
2. B) glitsin neytral, lakmusni qizartirmaydi ✗
3. C) alanin ham neytral aminokislota (1 ta NH₂, 1 ta COOH) ✗
4. D) ✓

**Javob:** D

**Tipik xato:** Alaninni kislotali deb hisoblash — kislotalilik uchun **ikkita** COOH kerak (asparagin, glutamin kislota).

---

### 29-savol · **B**

**Shart:** Suyultirilgan sulfat kislota qaysi moddalar bilan reaksiyaga kirishadi? 1) Na₂SO₄ 2) KOH 3) LiHCO₃ 4) KCl

**Qoida:** Almashinish reaksiyasi gaz, cho'kma yoki kuchsiz elektrolit hosil bo'lsagina boradi.

**Yechim:**
1. Na₂SO₄ — bir xil anion, o'zgarish yo'q ✗
2. KOH → neytrallanish (suv) ✓
3. LiHCO₃ → CO₂↑ + H₂O ✓
4. KCl — suyultirilgan eritmada HCl uchib ketmaydi ✗ (faqat **konsentrlangan** kislota va qizdirishda boradi)

**Javob:** B) 2,3

**Tipik xato:** KCl bilan reaksiya bo'ladi deb olish — bu faqat quruq tuz va kons. H₂SO₄ uchun o'rinli.

---

### 30-savol · **B**

**Shart:** Qum hammomi nima maqsadda ishlatiladi?

**Qoida:** Qum hammomi — idishni **bir tekis va yuqori haroratda qizdirish** vositasi (suv hammomi 100 °C gacha).

**Javob:** B) tubi yassi va konussimon kolbalarni qizdirishda

**Tipik xato:** Halqa/uchburchak (A) yoki lapka (D) vazifasi bilan almashtirish. C varianti (haydash) ham qum hammomi qo'llanadigan holat, lekin asbobning **asosiy** vazifasi qizdirish.

---

### 31-savol · **D**

**Shart:** Ikkita probirkadagi xlorid kislotaga X qo'shilganda **rangsiz**, Y qo'shilganda **rangli** gaz ajraldi. X va Y ni aniqlang.

**Qoida:** HCl bilan rangsiz gaz: karbonatlardan CO₂, metallardan H₂. Rangli gaz: **Cl₂ (sariq-yashil)** — faqat oksidlovchi (MnO₂, KMnO₄) bilan.

**Yechim:**
1. A) karbonat ✓ + temir → H₂ **rangsiz** ✗
2. B) MnO₂ birinchi o'rinda — rangli gaz, tartib buziladi ✗
3. C) NaCl bilan reaksiya yo'q ✗
4. D) CaCO₃ → CO₂ (rangsiz) ✓ · KMnO₄ + HCl → Cl₂ (rangli) ✓

**Javob:** D) kalsiy karbonat, kaliy permanganat

**Tipik xato:** X va Y tartibini almashtirib B ni tanlash.

---

### 32-savol · **A**

**Shart:** Zn(OH)₂ solingan ikkita probirkaning biriga **kuchli kislota X**, ikkinchisiga **kuchli elektrolit Y** solinganda rux gidroksid to'liq erib ketdi. X va Y ni aniqlang.
1. sirka kislota 2. xlorid kislota 3. litiy gidroksid 4. natriy xlorid

**Qoida:** Zn(OH)₂ — **amfoter**: kuchli kislotada ham, kuchli ishqorda ham eriydi (Na₂[Zn(OH)₄] tipida kompleks beradi).

**Yechim:**
1. X — kuchli kislota → **xlorid kislota** (sirka kislota kuchsiz) ✓
2. Y — kuchli elektrolit, gidroksidni eritadi → **LiOH** ✓ (NaCl eritmaydi)

**Javob:** A) 2,3

**Tipik xato:** Sirka kislotani ham qabul qilish (shartda "kuchli" deyilgan); NaCl ni kuchli elektrolit deb tanlash — u kuchli elektrolit, lekin Zn(OH)₂ ni eritmaydi.

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** P₄S₇ + HNO₃ + H₂O = PO₄³⁻ + SO₄²⁻ + NO + H⁺ — tenglashtiring.
Variantlar: A) 18 B) 21 C) 8 D) 14 E) 20 F) 16

**Umumiy yechim:**
1. P₄S₇ da oksidlanish darajalari yig'indisi 0; mahsulotlarda P⁺⁵ (×4 = +20) va S⁺⁶ (×7 = +42) → bitta P₄S₇ **62 ta elektron** beradi.
2. N⁺⁵ + 3e⁻ → N⁺² → bitta NO **3 ta** elektron oladi → 62 va 3 ning EKUK i: koeffitsiyentlar 3 va 62.
3. **3P₄S₇ + 62HNO₃ + 8H₂O → 12PO₄³⁻ + 21SO₄²⁻ + 62NO + 78H⁺**
   *(Kislorod: 186 + 8 = 194 = 48 + 84 + 62 ✓; vodorod: 62 + 16 = 78 ✓; zaryad: 0 = −78 + 78 ✓)*

---

### 33-savol · **B**

**Yechim:** Sulfat anioni oldidagi koeffitsiyent = 7 · 3 = **21**.

**Javob:** B) 21

**Tipik xato:** P₄S₇ ni 1 koeffitsiyent bilan qoldirib 7 deb yozish — elektron balansi 3 ga ko'paytirishni talab qiladi.

---

### 34-savol · **C**

**Yechim:** Kislorod balansidan suv koeffitsiyenti = **8**.

**Javob:** C) 8

**Tipik xato:** Suvni o'ng tomonga o'tkazib manfiy qiymat olish; kislorodni faqat HNO₃ dan sanash.

---

### 35-savol · *(javob variantlarda yo'q — izohga qarang)*

**Yechim:** H⁺ oldidagi koeffitsiyent = 62 + 2·8 = **78** (zaryad balansi ham shuni tasdiqlaydi: 12·(−3) + 21·(−2) = −78).

**Javob:** 78

> **Izoh:** 78 soni A–F variantlari orasida **yo'q**. 33 va 34-savollarning javoblari (21 va 8)
> yuqoridagi tenglashtirish bilan aniq mos tushgani uchun tenglama to'g'ri — xato
> 35-savolning variantlarida. Saytga kiritishda bu bandni ochiq javobli qilib qo'yish kerak.

**Tipik xato:** Zaryad balansini tekshirmaslik — u H⁺ koeffitsiyentini mustaqil ravishda tasdiqlaydi.

---

## III QISM — yozma topshiriqlar (36–45)

---

### 36-topshiriq

**Shart:** 2NO + Cl₂ ⇄ 2NOCl. Muvozanatda (K = 6) xlor va NOCl konsentratsiyalari teng bo'ldi.
a) Dastlabki aralashmaning vodorodga nisbatan zichligini toping.
b) Muvozanat holatda aralashmada 1,5 mol **befarq oksid** bo'lsa, xlor massasini (g) toping.

**Qoida:** \`K = [NOCl]²/([NO]²·[Cl₂])\`. **Befarq (indifferent) oksid — NO** (kislotasi yo'q, ishqor bilan tuz bermaydi).
*Nega aynan u:* b) bandidagi 1,5 mol aynan NO ga tegishli va u a) ni ham yopadi.

**Yechim:** Muvozanatda [NO] = 1,5 mol; [Cl₂] = [NOCl] = c (idish hajmi 1 l deb olinadi).
1. K = c²/(1,5²·c) = c/2,25 = 6 → **c = 13,5 mol**.
2. **b)** m(Cl₂) = 13,5 · 71 = **958,5 g**.
3. Dastlabki miqdorlar: NOCl hosil bo'lishida 13,5 mol NO va 6,75 mol Cl₂ sarflangan.
   n₀(NO) = 1,5 + 13,5 = **15 mol**; n₀(Cl₂) = 13,5 + 6,75 = **20,25 mol**.
4. **a)** M̄ = (15·30 + 20,25·71)/35,25 = 1887,75/35,25 = **53,55** → D(H₂) = **26,8**.

**Javob:** a) ≈26,8 · b) 958,5 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Muvozanat konstantasi ifodasi to'g'ri yozilgan | 0,4 |
| Befarq oksid NO ekani aniqlangan | 0,3 |
| c = 13,5 mol topilgan | 0,4 |
| Dastlabki mollar (15 va 20,25) tiklangan | 0,4 |
| D(H₂) ≈ 26,8 | 0,2 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| [Cl₂] = [NOCl] shartidan foydalanilgan | 0,5 |
| n(Cl₂) = 13,5 mol | 0,6 |
| m = 958,5 g | 0,4 |

> **Izoh:** a) bandi mustaqil holda yechilmaydi — K ning o'lchov birligi bor, shuning uchun
> nisbatlar faqat b) dagi 1,5 mol va V = 1 l shartida aniqlanadi. Shart to'liq emas.

**Tipik xato:** Befarq oksid deb Cl₂ yoki NOCl ni olish; muvozanat miqdorlaridan dastlabkisiga qaytishda koeffitsiyentlarni (2 : 1) hisobga olmaslik.

---

### 37-topshiriq

**Shart:** 800 g 13,1 % li H₂SO₄ eritmasiga ma'lum massada **bariy nitrid** ta'sir ettirilganda eritmada tuz va kislota massa ulushlari teng bo'ldi.
a) Qo'shilgan modda massasini (g) toping. b) Hosil bo'lgan eritma massasini (g) toping.

**Qoida:** Ba₃N₂ + 6H₂O → 3Ba(OH)₂ + 2NH₃↑ · Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O · 2NH₃ + H₂SO₄ → (NH₄)₂SO₄
*Nega aynan u:* eritmada **qoladigan yagona tuz — (NH₄)₂SO₄**, chunki BaSO₄ cho'kadi.

**Yechim:** Ba₃N₂ — x mol (M = 439).
1. 3x mol Ba(OH)₂ → 3x mol BaSO₄↓ (233 g/mol); 2x mol NH₃ → x mol (NH₄)₂SO₄ (132 g/mol).
2. Sarflangan H₂SO₄ = 3x + x = **4x**; m(H₂SO₄)₀ = 104,8 g.
3. Eritma massasi = 800 + 439x − 699x = **800 − 260x**.
4. Tuz = 132x; qolgan kislota = 104,8 − 392x. Tenglashtiramiz: 132x = 104,8 − 392x → 524x = 104,8 → **x = 0,2 mol**.
5. **a)** m(Ba₃N₂) = 0,2 · 439 = **87,8 g**.
6. **b)** m(eritma) = 800 − 52 = **748 g**. *(Tekshirish: tuz 26,4 g; qolgan kislota 104,8 − 78,4 = 26,4 g ✓)*

**Javob:** a) 87,8 g · b) 748 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Nitridning gidrolizi va NH₃ hosil bo'lishi ko'rsatilgan | 0,4 |
| Eritmadagi tuz (NH₄)₂SO₄, BaSO₄ esa cho'kma ekani aytilgan | 0,5 |
| Sarflangan kislota 4x ekani to'g'ri hisoblangan | 0,4 |
| x = 0,2 va m = 87,8 g | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Eritma massasi ifodasi (800 + m(Ba₃N₂) − m(BaSO₄)) | 0,6 |
| Hisob: 748 g | 0,5 |
| Tenglikni tekshirish (26,4 = 26,4) | 0,4 |

**Tipik xato:** Ba₃N₂ ni oddiy tuz deb olib ammiakni unutish (u holda eritmada tuz qolmaydi); BaSO₄ ni eritmada deb hisoblash.

---

### 38-topshiriq

**Shart:** 600 g 34 % li AgNO₃ eritmasiga NaBr qo'shildi. Cho'kma ajratib olindi va eritma 6,7 A tok bilan 8 soat elektroliz qilindi (anodda faqat kislorod ajraldi); oxirida 458 g eritma hosil bo'ldi.
a) Qo'shilgan NaBr massasini (g) toping. b) Hosil bo'lgan nitrat kislota konsentratsiyasini (mol/l) toping (ρ = 1,145 g/ml).

**Qoida:** Faradey qonuni; katodda avval Ag, u tugagach H₂. "Anodda **faqat** kislorod" → bromid butunlay cho'kmaga ketgan.

**Yechim:** NaBr — y mol.
1. n(AgNO₃) = 204/170 = **1,2 mol**; n(e⁻) = 6,7 · 8 · 3600/96500 = **2 mol**.
2. Cho'kma AgBr = y mol (188 g/mol) → filtrat massasi = 600 + 103y − 188y = **600 − 85y**.
3. Katodda: Ag = (1,2 − y) mol, so'ng H₂ = (2 − (1,2 − y))/2 = (0,8 + y)/2 mol.
   Anodda: O₂ = 2/4 = 0,5 mol = **16 g**.
4. Massa balansi: (600 − 85y) − 108(1,2 − y) − 16 − (0,8 + y) = 458 → 453,6 + 22y = 458 → **y = 0,2**.
5. **a)** m(NaBr) = 0,2 · 103 = **20,6 g**.
6. **b)** HNO₃ = elektrolizga uchragan AgNO₃ = 1,2 − 0,2 = **1 mol**; V = 458/1,145 = 400 ml = 0,4 l → C = **2,5 mol/l**.

**Javob:** a) 20,6 g · b) 2,5 mol/l

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| n(AgNO₃) = 1,2 va n(e⁻) = 2 mol | 0,4 |
| AgBr cho'kmasi hisobga olinib filtrat massasi ifodalangan | 0,4 |
| Katodda Ag → H₂ ketma-ketligi va O₂ = 0,5 mol | 0,5 |
| y = 0,2 → 20,6 g | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| n(HNO₃) = 1 mol ekani asoslangan | 0,6 |
| Hajm 0,4 l (zichlik orqali) | 0,5 |
| C = 2,5 mol/l | 0,4 |

**Tipik xato:** Katodda faqat kumush ajraladi deb hisoblash (massa balansi yopilmaydi); nitrat kislota mollarini 1,2 deb olish.

---

### 39-topshiriq

**Shart:** Cu₃P + HNO₃ = Cu(NO₃)₂ + H₃PO₄ + NO₂ + H₂O — tenglashtiring.
a) O'ng tomondagi koeffitsiyentlar yig'indisini toping. b) 66,9 g Cu₃P reaksiyaga kirishgan bo'lsa, ajralgan gazni toping.

**Qoida:** Cu₃P da Cu⁺¹ va P⁻³; mahsulotda Cu⁺² va P⁺⁵ → bitta Cu₃P **3 + 8 = 11 ta** elektron beradi. N⁺⁵ + e⁻ → NO₂.

**Yechim:**
1. **Cu₃P + 17HNO₃ → 3Cu(NO₃)₂ + H₃PO₄ + 11NO₂↑ + 7H₂O**
   *(N: 17 = 6 + 11 ✓ · H: 17 = 3 + 14 ✓ · O: 51 = 18 + 4 + 22 + 7 ✓)*
2. **a)** 3 + 1 + 11 + 7 = **22**.
3. **b)** M(Cu₃P) = 223 → n = 66,9/223 = **0,3 mol** → NO₂ = 3,3 mol → V = **73,92 l** (m = 151,8 g).

**Javob:** a) 22 · b) 3,3 mol NO₂ = 73,92 l

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Cu va P ning oksidlanish darajalari to'g'ri aniqlangan | 0,5 |
| 11 ta elektron berilishi hisoblangan | 0,5 |
| Tenglama to'liq tenglashtirilgan | 0,5 |
| Yig'indi 22 | 0,2 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| M(Cu₃P) = 223, n = 0,3 mol | 0,5 |
| NO₂ : Cu₃P = 11 : 1 | 0,5 |
| 3,3 mol (yoki 73,92 l) | 0,5 |

**Tipik xato:** Cu₃P dagi misni +2 deb olish (elektronlar 8 chiqadi); NO₂ o'rniga NO deb tenglashtirish.

---

### 40-topshiriq

**Shart:** FeO va Cu aralashmasi konsentrlangan HNO₃ da eritilganda (Fe(NO₃)₃ hosil bo'ldi) 0,5 mol gaz ajraldi. Tuzlar parchalanganda 32 g qattiq qoldiq qoldi.
a) Sarflangan nitrat kislota molini toping. b) Dastlabki aralashma massasini (g) toping.

**Qoida:** Kons. HNO₃ → **NO₂**. FeO dagi Fe⁺² → Fe⁺³ (1 e⁻), Cu⁰ → Cu⁺² (2 e⁻). Nitratlar parchalanganda **oksid** qoladi: 4Fe(NO₃)₃ → 2Fe₂O₃, 2Cu(NO₃)₂ → 2CuO.

**Yechim:** FeO — a, Cu — b.
1. Elektron balans: a + 2b = **0,5**.
2. Qoldiq: 160·(a/2) + 80b = 80a + 80b = 32 → **a + b = 0,4**.
3. Yechim: **b = 0,1**, **a = 0,3**.
4. **a)** HNO₃ = tuzlardagi nitrat (3·0,3 + 2·0,1 = 1,1) + gazdagi azot (0,5) = **1,6 mol**.
5. **b)** m = 0,3 · 72 + 0,1 · 64 = 21,6 + 6,4 = **28 g**.

**Javob:** a) 1,6 mol · b) 28 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Gaz NO₂ ekani va elektron balans tenglamasi | 0,5 |
| Qoldiq Fe₂O₃ + CuO ekani, 80a + 80b = 32 | 0,5 |
| a = 0,3 va b = 0,1 | 0,4 |
| n(HNO₃) = 1,6 mol (tuz + gaz) | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| M(FeO) = 72, M(Cu) = 64 | 0,4 |
| Massalar 21,6 va 6,4 | 0,6 |
| Jami 28 g | 0,5 |

**Tipik xato:** FeO uchun 3 ta elektron olish (oksidda temir allaqachon +2); qoldiqni Fe₃O₄ yoki metall Cu deb olish; HNO₃ ni faqat gaz bo'yicha hisoblash.

---

### 41-topshiriq *(shartda nuqson — izohga qarang)*

**Shart:** 2 : 1 mol nisbatda olingan KMnO₄ va MnO₂ aralashmasi 400 g 21,3 % li HCl da eritildi. Ajralgan gaz tarkibida 20,4·N_A ta neytron bor.
a) Hosil bo'lgan marganetsli tuz massasini (g) toping. b) Dastlabki aralashma massasini (g) toping.

**Qoida:** 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O · MnO₂ + 4HCl → MnCl₂ + Cl₂↑ + 2H₂O.
Ikkala holatda ham marganets **MnCl₂** ga aylanadi.

**Yechim:** MnO₂ — x mol, KMnO₄ — 2x mol.
1. Cl₂ = 2,5·(2x) + x = **6x**; HCl = 8·(2x) + 4x = **20x**.
2. Gazdagi zarralar soni: 20,4/34 = **0,6 mol Cl₂** → 6x = 0,6 → **x = 0,1**.
3. Tekshirish: HCl kerak = 2,0 mol; mavjud = 85,2/36,5 = 2,33 mol → kislota ortiqcha ✓ ("eritildi")
4. **a)** n(MnCl₂) = 2x + x = 0,3 mol → m = 0,3 · 126 = **37,8 g**.
5. **b)** m = 0,2 · 158 + 0,1 · 87 = 31,6 + 8,7 = **40,3 g**.

**Javob:** a) 37,8 g · b) 40,3 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Ikkala reaksiya tenglamasi yozilgan | 0,5 |
| Cl₂ = 6x munosabati | 0,5 |
| n(Cl₂) = 0,6 → x = 0,1 | 0,4 |
| m(MnCl₂) = 37,8 g | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Mollar 0,2 va 0,1 | 0,5 |
| M(KMnO₄) = 158, M(MnO₂) = 87 | 0,4 |
| Jami 40,3 g | 0,6 |

> **Izoh:** 20,4 soni **34** ga bo'linganda 0,6 chiqadi, 34 esa Cl₂ molekulasidagi **protonlar**
> soni (2·17). Haqiqiy neytronlar soni ³⁵Cl uchun 18 (molekulada 36) → 0,6 mol Cl₂ da
> 21,6·N_A neytron bo'lardi. Manbada "neytron" so'zi xato ishlatilgan; a) va b) javoblari
> butun sonlar bilan chiqqani (37,8 va 40,3) 0,6 mol taxminini tasdiqlaydi.

**Tipik xato:** KMnO₄ uchun Cl₂ nisbatini 1 : 1 olish (aslida 1 : 2,5); kislotani cheklovchi deb hisoblash.

---

### 42-A topshiriq — Fisher–Tropsh

**Shart:** nCO + xH₂ → CₙH₂ₙ₊₂ + H₂O reaksiyasida CO va H₂ gazlari 1 : x nisbatda ta'sirlashganda **3 : 2 : 1** nisbatda butan, propan va etan olindi.
a) 163 g dastlabki aralashmaning molini toping. b) 63,2 g aralashma sarflangan bo'lsa, olingan suv massasini (g) toping.

**Qoida:** nCO + (2n+1)H₂ → CₙH₂ₙ₊₂ + nH₂O — **har bir CO bitta H₂O beradi**.

**Yechim:** Nisbat birligi: 3 C₄H₁₀, 2 C₃H₈, 1 C₂H₆.
1. CO = 4·3 + 3·2 + 2·1 = **20 mol**; H₂ = 9·3 + 7·2 + 5·1 = **46 mol** → CO : H₂ = 1 : 2,3.
2. Bu birlik massasi: 20·28 + 46·2 = 560 + 92 = **652 g**, mollari **66**.
3. **a)** 163 g = 652/4 → mollar = 66/4 = **16,5 mol**.
4. **b)** 63,2 g uchun: 63,2/652 = 0,0969 birlik → n(H₂O) = 20 · 0,0969 = 1,94 mol → m ≈ **34,9 g**.

**Javob:** a) 16,5 mol · b) ≈34,9 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Har bir alkan uchun CO va H₂ miqdori to'g'ri yozilgan | 0,6 |
| CO : H₂ = 20 : 46 (1 : 2,3) | 0,5 |
| Birlik massasi 652 g | 0,3 |
| 16,5 mol | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| n(H₂O) = n(CO) ekani asoslangan | 0,6 |
| Nisbatlash to'g'ri bajarilgan | 0,5 |
| Javob (≈34,9 g) | 0,4 |

> **Izoh:** 63,2 g soni butun javob bermaydi. Agar **65,2 g** (= 652/10) bo'lsa, javob roppa-rosa
> **36 g** (2 mol suv) chiqadi — manbadagi raqam ehtimol shundan buzilgan. Ikkala javobni ham
> qabul qiling, yechim yo'li bir xil.

**Tipik xato:** H₂O ni alkanlar soniga teng deb olish (aslida **uglerodlar soniga** teng); H₂ ni 2n deb hisoblash (2n+1 bo'ladi).

---

### 42-B topshiriq — holat diagrammasi

**Shart:** Grafikda (P–T diagrammasi) qattiq, suyuq va gaz sohalari hamda T (qattiq soha), Y (suyuq soha), Z (gaz soha) nuqtalari berilgan. Bog'liqlikni L → M ko'rinishida ifodalang.
a) Desublimatlanish jarayoni. b) Bug'lanish jarayoni.

**Qoida:** Desublimatsiya — **gaz → qattiq** (bevosita, suyuqliksiz); bug'lanish — **suyuq → gaz**.

**Yechim:**
1. Gaz sohasi — Z nuqtasi; qattiq soha — T; suyuq soha — Y.
2. **a)** Desublimatlanish: **Z → T**
3. **b)** Bug'lanish: **Y → Z**

**Javob:** a) Z → T · b) Y → Z

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Diagrammadagi sohalar to'g'ri aniqlangan | 0,6 |
| Desublimatsiya gazdan qattiqqa o'tish ekani aytilgan | 0,6 |
| Z → T | 0,5 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Bug'lanish suyuqdan gazga o'tish ekani aytilgan | 0,7 |
| Y → Z | 0,8 |

**Tipik xato:** Desublimatsiyani sublimatsiya (T → Z) bilan teskari yozish; bug'lanishni kondensatsiya (Z → Y) deb ko'rsatish.

---

### 43-topshiriq

**Shart:** Murakkab efirning molyar massasi va tarkibidagi atomlar soni nisbati 29/5; gidrolizdan hosil bo'lgan mahsulotlar Ag₂O/NH₃ bilan ta'sirlashganda 32,4 g metall cho'kdi.
a) Hosil bo'lgan to'yingan bir atomli spirt massasini (g) toping. b) Efir molekulasidagi sp³ orbitallar sonini toping.

**Qoida:** M/N = 5,8 tenglamasi efir formulasini beradi; **kumush ko'zgu** reaksiyasiga faqat **chumoli kislota efiri** (format) ning gidroliz mahsuloti kirishadi.

**Yechim:**
1. CₓH_yO₂: (12x + y + 32)/(x + y + 2) = 5,8 → 6,2x + 20,4 = 4,8y.
2. x = 6 da y = 12 → **C₆H₁₂O₂, M = 116, N = 20** (116/20 = 5,8 ✓).
3. Mahsulot kumush beradi → efir **format**: HCOOC₅H₁₁ → gidrolizda HCOOH + C₅H₁₁OH.
4. n(Ag) = 32,4/108 = 0,3 mol; HCOOH **2 mol Ag** beradi → n(HCOOH) = **0,15 mol** = n(efir).
5. **a)** m(C₅H₁₁OH) = 0,15 · 88 = **13,2 g**.
6. **b)** sp³ atomlar: pentil guruhidagi 5 ta uglerod va efir ko'prigidagi −O− → 6 atom × 4 orbital = **24**.

**Javob:** a) 13,2 g · b) 24 ta sp³ orbital

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| M/N = 5,8 tenglamasi tuzilgan | 0,4 |
| C₆H₁₂O₂ (M = 116) topilgan | 0,4 |
| Efir format ekani asoslangan (kumush ko'zgu) | 0,4 |
| n = 0,15 mol va m = 13,2 g | 0,5 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| sp³ atomlar aniqlangan (5 C + 1 O) | 0,7 |
| Har bir sp³ atomda 4 ta orbital | 0,5 |
| Javob 24 | 0,3 |

> **Izoh:** faqat uglerodlar hisoblansa **20** chiqadi. Kislorod gibridlanishini hisobga olgan
> javob (24) to'liqroq; ikkalasini ham asoslanishi bilan qabul qiling.

**Tipik xato:** HCOOH ni 4 mol Ag beradi deb olish (bu **formaldegid**); efirni atsetat deb taxmin qilish.

---

### 44-topshiriq *("teng miqdordagi" shartida ziddiyat bor — izohga qarang)*

**Shart:** Fenol va to'yingan bir atomli spirt aralashmasida N(H)/N(O) = 12 : 1. Aralashma natriy bilan 0,4 mol gaz berdi; xuddi shunday aralashma 0,2 mol NaOH bilan to'liq ta'sirlashadi.
a) Spirt molekulasidagi vodorod atomlari sonini aniqlang. b) Aralashma massasini (g) aniqlang.

**Qoida:** NaOH **faqat fenol** bilan; natriy **ikkalasi** bilan ham reaksiyaga kirishadi (har 2 mol OH dan 1 mol H₂).

**Yechim:** Fenol — p, spirt — q mol.
1. NaOH bo'yicha: **p = 0,2 mol**.
2. Na bo'yicha: (p + q)/2 = 0,4 → p + q = 0,8 → **q = 0,6 mol**.
3. H/O: (6p + (2n+2)q)/(p + q) = 12 → (1,2 + (2n+2)·0,6)/0,8 = 12 → 1,2n = 7,2 → **n = 6** (geksanol).
4. **a)** Vodorod atomlari = 2·6 + 2 = **14 ta**.
5. **b)** m = 0,2 · 94 + 0,6 · 102 = 18,8 + 61,2 = **80 g**.

**Javob:** a) 14 · b) 80 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| NaOH faqat fenol bilan reaksiyaga kirishi aytilgan → p = 0,2 | 0,5 |
| Natriy bilan umumiy OH dan q = 0,6 topilgan | 0,5 |
| H/O nisbatidan n = 6 | 0,5 |
| Javob 14 ta vodorod | 0,2 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| M(fenol) = 94, M(C₆H₁₃OH) = 102 | 0,5 |
| Massalar 18,8 va 61,2 | 0,6 |
| Jami 80 g | 0,4 |

> **Izoh:** shartdagi "teng miqdordagi" so'zi qolgan ma'lumotlarga **zid**: mollari teng bo'lsa
> natriy bilan 0,2 mol gaz chiqardi, 0,4 emas. Sonlar p = 0,2 va q = 0,6 da butunlay yopiladi
> (n = 6, massa 80 g), shuning uchun yechim shunga asoslandi.

**Tipik xato:** Fenolni ham, spirtni ham NaOH bilan reaksiyaga kirishtirib p ni noto'g'ri topish; natriy bilan har bir OH dan 1 mol H₂ chiqadi deb hisoblash.

---

### 45-topshiriq

**Shart:** Ketonlar oksidlanganda reaksiya 2 xil yo'nalishda boradi (karbonil guruhining ikki yonidagi C–C bog'i uziladi). 2 mol butanon oksidlanganda 88,8 g **propion kislota** olingan bo'lsa:
a) Olingan sirka kislota molini toping. b) Olingan chumoli kislota massasini (g) toping.

**Qoida:** Butanon CH₃–CO–CH₂CH₃ ikki yo'l bilan uziladi:
· **1-yo'l:** CH₃ | CO–C₂H₅ → HCOOH + C₂H₅COOH
· **2-yo'l:** CH₃–CO | CH₂CH₃ → CH₃COOH + CH₃COOH
*Nega aynan u:* ikkala yo'lda ham **uglerodlar soni saqlanadi** (1+3 = 4 va 2+2 = 4) — bu tekshirish vositasi.

**Yechim:**
1. n(C₂H₅COOH) = 88,8/74 = **1,2 mol** → 1-yo'l bilan **1,2 mol** butanon oksidlangan.
2. Qolgan butanon = 2 − 1,2 = **0,8 mol** → 2-yo'l.
3. **a)** Sirka kislota: har 1 mol butanondan **2 mol** → 0,8 · 2 = **1,6 mol**.
4. **b)** Chumoli kislota: 1-yo'lda 1 : 1 → 1,2 mol → m = 1,2 · 46 = **55,2 g**.

**Javob:** a) 1,6 mol · b) 55,2 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Butanonning ikki uzilish yo'li to'g'ri yozilgan | 0,6 |
| n(C₂H₅COOH) = 1,2 mol | 0,4 |
| 2-yo'lga qolgan 0,8 mol | 0,4 |
| Sirka kislota 1,6 mol (1 : 2 nisbat) | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Chumoli kislota 1-yo'lning sherigi ekani ko'rsatilgan | 0,6 |
| n = 1,2 mol | 0,4 |
| m = 55,2 g | 0,5 |

**Tipik xato:** Sirka kislotani 0,8 mol deb olish (bitta butanondan **ikkita** sirka kislota chiqadi); chumoli kislotani 0,8 mol bilan bog'lash.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | B | 16 | D | 31 | D |
| 2 | B | 17 | B | 32 | A |
| 3 | C | 18 | C | 33 | B (21) |
| 4 | A | 19 | I va III* | 34 | C (8) |
| 5 | D | 20 | B | 35 | 78* |
| 6 | C | 21 | D | 36 | ≈26,8 · 958,5 g* |
| 7 | C | 22 | D | 37 | 87,8 g · 748 g |
| 8 | A | 23 | B | 38 | 20,6 g · 2,5 mol/l |
| 9 | A | 24 | C | 39 | 22 · 3,3 mol |
| 10 | B | 25 | A | 40 | 1,6 mol · 28 g |
| 11 | B | 26 | C | 41 | 37,8 g · 40,3 g* |
| 12 | A | 27 | A | 42-A | 16,5 mol · ≈34,9 g* |
| 13 | C | 28 | D | 42-B | Z→T · Y→Z |
| 14 | C | 29 | B | 43 | 13,2 g · 24* |
| 15 | B | 30 | B | 44 | 14 · 80 g* |
| | | | | 45 | 1,6 mol · 55,2 g |

\`*\` — shartda yoki variantlarda nuqson bor: **19** (to'g'ri juftlik variantlarda yo'q), **35** (78 javobi yo'q), **36** (shart to'liq emas), **41** ("neytron" o'rniga proton), **42-A** (63,2 → ehtimol 65,2), **43** (sp³ da kislorod hisoblanadimi), **44** ("teng miqdordagi" zid). Tegishli izohlarga qarang.
`,$e=`# Sertifikat — 2024, na'munaviy

**Manba:** \`Milliy sertifikat .pdf\`, 13–17-betlar · 45 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test (har biri 2,2 ball) · 36–45 yozma (a/b)

> Manbada faqat 33–35 uchun ball ko'rsatilgan. Quyida standart taqsimot qo'llanilgan:
> 1–32 → 1,3/2,2 · 33–35 → 2,2 · 36–45 → 3,2 (a 1,7 + b 1,5).

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **D** *(rasmli)*

**Shart:** Uchta probirkada Na₂SO₃, FeS va Mg bor; har biriga suyultirilgan H₂SO₄ quyiladi. Hosil bo'lgan gazlarning nisbiy molekulyar massalari yig'indisini toping.

**Qoida:** Sulfit + kislota → SO₂ · sulfid + kislota → H₂S · faol metall + kislota → H₂.

**Yechim:**
1. Na₂SO₃ + H₂SO₄ → Na₂SO₄ + SO₂↑ + H₂O → **M = 64**
2. FeS + H₂SO₄ → FeSO₄ + H₂S↑ → **M = 34**
3. Mg + H₂SO₄ → MgSO₄ + H₂↑ → **M = 2**
4. Yig'indi = 64 + 34 + 2 = **100**

**Javob:** D) 100

**Tipik xato:** FeS dan SO₂ chiqadi deb o'ylash (bu **kuydirishda** bo'ladi, kislota bilan emas); konsentrlangan kislota mahsulotlarini yozish.

---

### 2-savol · **A** *(grafikli)*

**Shart:** Grafikda m(XY₃) = 5 g bo'lganda m(X) = 2 g. Ar(Y) = 16 bo'lsa, X ning nisbiy atom massasini toping.

**Qoida:** Grafikning burchak koeffitsiyenti — X ning birikmadagi **massa ulushi**.

**Yechim:**
1. ω(X) = 2/5 = **0,4**.
2. X/(X + 3·16) = 0,4 → X = 0,4X + 19,2 → 0,6X = 19,2.
3. **X = 32** (oltingugurt, SO₃).

**Javob:** A) 32

**Tipik xato:** Nisbatni teskari olish (m(XY₃)/m(X)); Y₃ ni 16 deb hisoblash (48 bo'ladi).

---

### 3-savol · **C**

**Shart:** 220 kPa bosimda, 167 °C da 44 g gaz 16,62 l hajmni egallaydi. Gazning metanga nisbatan zichligini hisoblang.

**Qoida:** \`n = PV/(RT)\`, R = 8,31; \`D(CH₄) = M/16\`.

**Yechim:**
1. T = 440 K → n = (220 · 16,62)/(8,31 · 440) = 3656,4/3656,4 = **1 mol**.
2. M = 44/1 = **44 g/mol**.
3. D(CH₄) = 44/16 = **2,75**.

**Javob:** C) 2,75

**Tipik xato:** 22,4 l/mol ni ishlatish (sharoit n.sh. emas); havoga nisbatan zichlik (1,52) ni hisoblash.

---

### 4-savol · **A**

**Shart:** Davriy jadvalning III–VIII (He dan tashqari) asosiy guruhcha elementlari qaysi oilaga mansub?

**Qoida:** Asosiy guruhchada I–II guruh — **s**, III–VIII guruh — **p** elementlar; geliy istisno (1s², s-element).

**Javob:** A) p

**Tipik xato:** Yonaki guruhcha (d) bilan chalkashtirish.

---

### 5-savol · **D**

**Shart:** 4-davr yonaki guruhcha elementlari: 1s²2s²2p⁶3s²3p⁶3dᵃ4sᵇ. Qaysi fikrlar to'g'ri?

**Qoida:** d-elementlarda guruh raqami = **(a + b)**, agar a + b ≤ 7; 8 ≤ a + b ≤ 10 bo'lsa — VIII guruh; a = 10 bo'lsa guruh raqamini **b** belgilaydi (Cu — IB, Zn — IIB).

**Yechim:**
1. (1) 8 ≤ a+b ≤ 12 → "yonaki guruhchada" — bu barcha d-elementlar uchun to'g'ri, lekin ajratuvchi ma'lumot emas; **kalitda noto'g'ri** deb olingan.
2. (2) a + b < 8 → guruh raqami = a + b ✓ (Sc 3, Mn 7)
3. (3) a = 10 → b tartib raqami emas ✗ (Cu: b = 1, Z = 29)
4. (4) 8 ≤ a+b ≤ 10 → VIII guruh (Fe, Co, Ni) ✓
5. (5) a + b = 8 → Fe, u **metall** ✗
6. (6) a = 10 → b guruh raqami ✓ (Cu — I, Zn — II)

**Javob:** D) 2, 4, 6

**Tipik xato:** Cu va Zn ni VIII guruhga kiritish; a + b = 8 ni "sakkizinchi guruh nometalli" deb o'ylash.

---

### 6-savol · **A** *(jadvalli)*

**Shart:** Jadvalda molekula/ion, bog'lanish turi, **donorning valentligi** va **donorning oksidlanish darajasi** berilgan. Qaysi qator to'liq to'g'ri?
1. NH₄⁺ — qutbli kovalent, koordinatsion — IV — (−4) · 2. NH₃ — qutbli kovalent, ion — III — (−3) · 3. H₂O — qutbsiz kovalent, donor-akseptor — II — (−2) · 4. H₃O⁺ — qutbli kovalent, donor-akseptor — III — (−2)

**Qoida:** Valentlik — **bog'lar soni**, oksidlanish darajasi — shartli zaryad; ikkalasi mos tushmasligi mumkin.

**Yechim:**
1. NH₄⁺: azot 4 ta bog' → valentlik IV ✓, lekin o.d. **−3**, −4 emas ✗
2. NH₃ da ion bog' yo'q ✗
3. H₂O qutbli kovalent (qutbsiz emas), donor-akseptor bog' yo'q ✗
4. H₃O⁺: kislorod 3 ta bog' → III ✓; o.d. −2 ✓; bog' turi ✓ → **to'g'ri**

**Javob:** A) 4

**Tipik xato:** Valentlik va oksidlanish darajasini bir xil deb olish — NH₄⁺ aynan shu farqni tekshiradi.

---

### 7-savol · **C**

**Shart:** 6 litrli reaktorda 30 sekundda moddaning miqdori 65 moldan 35 molgacha kamaydi. O'rtacha tezlikni (mol/(l·min)) toping.

**Qoida:** \`v = Δc/Δt\`; birliklarga diqqat — **minut**.

**Yechim:**
1. Δn = 30 mol → Δc = 30/6 = **5 mol/l**.
2. Δt = 30 s = **0,5 min**.
3. v = 5/0,5 = **10 mol/(l·min)**.

**Javob:** C) 10

**Tipik xato:** Hajmga bo'lmaslik (60 — A tuzog'i); sekundni minutga aylantirmaslik.

---

### 8-savol · **B**

**Shart:** CO(g) + O₂(g) ⇄ CO₂(g); boshlang'ich konsentratsiyalar 0,4 va 0,6 mol/l. Kislorodning 25 % i reaksiyaga kirishganda muvozanat qaror topdi. Muvozanat konstantasini toping.

**Qoida:** Tenglama avval **tenglashtiriladi**: 2CO + O₂ ⇄ 2CO₂; \`K = [CO₂]²/([CO]²·[O₂])\`.
*Nega aynan u:* shartdagi yozuv tenglashtirilmagan — koeffitsiyentsiz hisob butunlay boshqa javob beradi.

**Yechim:**
1. Reaksiyaga kirgan O₂ = 0,6 · 0,25 = **0,15 mol/l** → CO = 0,30, CO₂ = 0,30.
2. Muvozanatda: [CO] = 0,4 − 0,3 = **0,1**; [O₂] = 0,6 − 0,15 = **0,45**; [CO₂] = **0,3**.
3. K = 0,3²/(0,1² · 0,45) = 0,09/0,0045 = **20**.

**Javob:** B) 20

**Tipik xato:** Tenglamani tenglashtirmay K = 0,15/(0,25·0,45) hisoblash; darajalarni qo'ymaslik.

---

### 9-savol · **C** *(sxemali)*

**Shart:** 5 % li HCOOH eritmasi (200 g) sof suv bilan aralashtirilganda 1,25 % li eritma hosil bo'ldi. Hosil bo'lgan eritmadagi **suv** massasini (g) toping.

**Qoida:** Suyultirishda **erigan modda massasi o'zgarmaydi**.

**Yechim:**
1. m(HCOOH) = 200 · 0,05 = **10 g**.
2. Yangi eritma = 10/0,0125 = **800 g**.
3. Suv = 800 − 10 = **790 g**.

**Javob:** C) 790

**Tipik xato:** Qo'shilgan suvni (600 g — B tuzog'i) javob deb yozish; savol **eritmadagi** suvni so'raydi.

---

### 10-savol · **B**

**Shart:** Sog'lom odamning hazm jarayonida oshqozonining pH ko'rsatkichi qanday bo'ladi?

**Qoida:** Oshqozon shirasi xlorid kislotali — **pH ≈ 1,5–2**; qon pH = 7,4; so'lak ≈ 7.

**Javob:** B) 1,5−2

**Tipik xato:** Qon pH i (7,4) bilan almashtirish.

---

### 11-savol · **C**

**Shart:** 100 ml qattiq suvda 4 mg Ca²⁺ va 3,6 mg Mg²⁺ bor. 4 litr shunday suvning qattiqligini yo'qotish uchun necha gramm Na₂CO₃ kerak?

**Qoida:** Na₂CO₃ ikkala kationni ham cho'ktiradi: Ca²⁺ + CO₃²⁻ → CaCO₃↓; **1 mol kationga 1 mol Na₂CO₃**.

**Yechim:**
1. 100 ml da: n(Ca²⁺) = 4/40 = 0,1 mmol; n(Mg²⁺) = 3,6/24 = 0,15 mmol → jami **0,25 mmol**.
2. 4 l = 40 · 100 ml → 0,25 · 40 = **10 mmol = 0,01 mol**.
3. m(Na₂CO₃) = 0,01 · 106 = **1,06 g**.

**Javob:** C) 1,06

**Tipik xato:** 100 ml uchun hisoblab 4 ga ko'paytirish (40 ga ko'paytirish kerak); milligrammni grammga o'tkazmaslik.

---

### 12-savol · **B** *(sxemali)*

**Shart:** Oksidlanish darajalari o'qida ko'rsatilgan o'tishlar: +6ē (+4 → −2) · −3ē (0 → +3) · z ē (0 → −4) · x ē (−2 → +4) · y ē (−3 → +5). x, y, z larning yig'indisini toping.

**Qoida:** Elektron **olinsa** son musbat (+6ē), **berilsa** manfiy (−3ē) — sxemadagi ikkita ma'lum o'tish shu qoidani belgilaydi.

**Yechim:**
1. z: 0 → −4 — 4 ta elektron **olinadi** → **z = +4**.
2. x: −2 → +4 — 6 ta elektron **beriladi** → **x = −6**.
3. y: −3 → +5 — 8 ta elektron beriladi → **y = −8**.
4. Yig'indi = +4 − 6 − 8 = **−10**.

**Javob:** B) −10

**Tipik xato:** Faqat farqlarning moduli ni qo'shish (+18 — A tuzog'i); belgi qoidasini sxemadagi namunalardan o'qimaslik.

---

### 13-savol · **D**

**Shart:** 400 ml 0,5 M AgNO₃ eritmasiga 43,25 g rux plastinka tushirildi. AgNO₃ miqdori 50 % ga kamaygach plastinka olindi. Plastinka massasini toping.

**Qoida:** Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag↓; plastinka massasi = dastlabki − erigan Zn + cho'kkan Ag.

**Yechim:**
1. n(AgNO₃) = 0,4 · 0,5 = 0,2 mol → reaksiyaga kirgan **0,1 mol**.
2. m(Ag) = 0,1 · 108 = **10,8 g**; n(Zn) = 0,05 mol → m = **3,25 g**.
3. m = 43,25 − 3,25 + 10,8 = **50,8 g**.

**Javob:** D) 50,8

**Tipik xato:** Butun AgNO₃ ni reaksiyaga kiritish; Zn va Ag ni 1 : 1 nisbatda olish.

---

### 14-savol · **B** *(rasmli)*

**Shart:** Sxemada FeCl₃ eritmasiga **x** qo'shilganda cho'kma (z) tushadi; z ga **y** ta'sir ettirilganda Fe₂(SO₄)₃ eritmasi hosil bo'ladi. x va y eritmalari o'zaro reaksiyaga kirishganda qanday modda hosil bo'ladi?

**Qoida:** Temir(III) xloridi bilan cho'kma beruvchi — ishqor; Fe(OH)₃ dan sulfat olish uchun — H₂SO₄.

**Yechim:**
1. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl → **x = NaOH**, z = Fe(OH)₃.
2. 2Fe(OH)₃ + 3H₂SO₄ → Fe₂(SO₄)₃ + 6H₂O → **y = H₂SO₄**.
3. 2NaOH + H₂SO₄ → **Na₂SO₄** + 2H₂O.

**Javob:** B) natriy sulfat

**Tipik xato:** y ni H₂S deb o'ylab natriy gidrosulfid yoki sulfit tanlash; sxemadagi KCl/NaCl ni kaliyli deb o'qib kaliy sulfatga borish.

---

### 15-savol · **A**

**Shart:** A + B → D · D + A → E · FeO + E → Fe + D. Noma'lum D moddaga mos javobni toping.

**Qoida:** Uchinchi tenglama — **domna jarayoni**: FeO + CO → Fe + CO₂.

**Yechim:**
1. E — qaytaruvchi gaz = **CO**, D = **CO₂**.
2. D + A → E: CO₂ + C → 2CO → **A = C (uglerod)**.
3. A + B → D: C + O₂ → CO₂ → **B = O₂** ✓
4. D = CO₂ — ohakli suvni loyqalantiradi ✓

**Javob:** A) ohakli suvni loyqalantiradi

**Tipik xato:** D ni CO deb olib "zaharli gaz" (C) ni tanlash; B varianti (qora rangli oddiy modda) — bu A (uglerod).

---

### 16-savol · **C**

**Shart:** Qaysi asos och yashil cho'kma bo'lib, vaqt o'tishi bilan qo'ng'ir rangga aylanadi?

**Qoida:** 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃ — havoda oksidlanish.

**Javob:** C) Fe(OH)₂

**Tipik xato:** Fe(OH)₃ ni tanlash — u allaqachon qo'ng'ir, o'zgarmaydi.

---

### 17-savol · **A**

**Shart:** 75 % li sirka essensiyasidan 3 % li eritma tayyorlash uchun 10 g essensiyaga qancha hajm (ml) suv qo'shish kerak?

**Qoida:** Erigan modda massasi o'zgarmaydi; ρ(suv) = 1 g/ml.

**Yechim:**
1. m(CH₃COOH) = 7,5 g.
2. Yangi eritma = 7,5/0,03 = **250 g**.
3. Suv = 250 − 10 = **240 g = 240 ml**.

**Javob:** A) 240

**Tipik xato:** 250 (C) ni javob deb belgilash — u **eritma** massasi.

---

### 18-savol · **D**

**Shart:** Temir tuzida Fe : S : O massa nisbati 7 : 4 : 8. Kunlik ehtiyoj 0,0112 g temir, o'zlashtirilishi 10 %. 30 kunda qancha (mg) qo'shimcha qabul qilinadi?

**Qoida:** Massa nisbatidan formula: har bir massani atom massasiga bo'lamiz.

**Yechim:**
1. 7/56 : 4/32 : 8/16 = 0,125 : 0,125 : 0,5 = **1 : 1 : 4** → **FeSO₄** (M = 152).
2. O'zlashtirish 10 % → kuniga qabul qilinishi kerak bo'lgan temir = 0,0112/0,1 = **0,112 g** = 0,002 mol.
3. m(FeSO₄) = 0,002 · 152 = 0,304 g/kun.
4. 30 kun: 9,12 g = **9120 mg**.

**Javob:** D) 9120

**Tipik xato:** 10 % ga ko'paytirish o'rniga bo'lishni unutish (912 — B tuzog'i); FeSO₄ o'rniga Fe₂(SO₄)₃ olish.

---

### 19-savol · **A**

**Shart:** O₃ va O₂ aralashmasida ozon to'liq kislorodga aylantirilganda hajm 28 % ga oshadi. 1 l (n.sh.) dastlabki aralashma KI eritmasidan o'tkazilsa, necha gramm yod ajraladi?

**Qoida:** 2O₃ → 3O₂ — har 2 hajm ozondan 3 hajm kislorod, ya'ni **hajm ortishi = ozon hajmining yarmi**. KI bilan faqat ozon reaksiyaga kirishadi: O₃ + 2KI + H₂O → I₂ + 2KOH + O₂.

**Yechim:**
1. 0,5·φ(O₃) = 0,28 → **φ(O₃) = 0,56**.
2. 1 l aralashmada: V(O₃) = 0,56 l → n = 0,56/22,4 = **0,025 mol**.
3. n(I₂) = 0,025 mol → m = 0,025 · 254 = **6,35 g**.

**Javob:** A) 6,35

**Tipik xato:** Hajm ortishini ozonga teng deb olish; kislorod ham KI bilan reaksiyaga kirishadi deb hisoblash.

---

### 20-savol · **D**

**Shart:** Uglevodorodning azotga nisbatan zichligi 2; bromli suvni rangsizlantirmaydi. Struktura formulasini toping.

**Qoida:** M = 2 · 28 = **56**; bromli suvni rangsizlantirmaslik → **π-bog' yo'q** → to'yingan yoki siklik.

**Yechim:**
1. M = 56 → C₄H₈.
2. Buten izomerlari (B, C) bromli suvni rangsizlantiradi ✗; C₂H₄ (A) M = 28 ✗
3. **Siklobutan** C₄H₈ — qo'shbog' yo'q ✓

**Javob:** D) siklobutan

**Tipik xato:** Faqat molyar massaga qarab butenni tanlash; sikloalkanlarning bromli suv bilan reaksiyaga kirishmasligini bilmaslik.

---

### 21-savol · **A** *(sxemali)*

**Shart:** Geksadiyen-1,3 ning **trans**-izomeri sxemasida qo'shbog'ning to'rt o'rni: X (yuqori chap), Y (yuqori o'ng), Z (quyi chap), CH₂–CH₃ (quyi o'ng). X, Y, Z ni aniqlang.

**Qoida:** Geksadiyen-1,3: CH₂=CH–CH=CH–CH₂–CH₃. Sxemadagi qo'shbog' — **3,4-bog'**; unga vinil guruhi (CH₂=CH–) va etil guruhi birikadi. **Trans** — katta guruhlar qarama-qarshi tomonda.

**Yechim:**
1. O'ng uglerodda CH₂–CH₃ (quyida) berilgan → Y = **H**.
2. Trans bo'lishi uchun vinil guruhi **qarama-qarshi tomonda, ya'ni yuqorida** → X = **CH₂=CH–**.
3. Chap uglerodning qolgan o'rni: Z = **H**.

**Javob:** A) X − CH₂=CH; Y − H; Z − H

**Tipik xato:** Vinil guruhini etil bilan bir tomonga qo'yish (bu **sis**); zanjirni geksadiyen-1,5 deb o'qish.

---

### 22-savol · **D**

**Shart:** Avtomashina 100 km ga 10 l benzin sarflaydi; ρ = 0,72 kg/l, benzinda ω(C) = 85 %, ω(H) = 15 %. Yonish uchun sarflanadigan kislorod miqdorini (mol) toping.

**Qoida:** Kislorod **element balansi** bo'yicha: C → CO₂ (1 mol O₂), 4 mol H → 2 mol H₂O (1 mol O₂).

**Yechim:**
1. m(benzin) = 10 · 0,72 = 7,2 kg = **7200 g**.
2. m(C) = 6120 g → n(C) = **510 mol**; m(H) = 1080 g → n(H) = **1080 mol**.
3. O₂: uglerod uchun 510 mol; vodorod uchun 1080/4 = **270 mol**.
4. Jami = **780 mol**.

**Javob:** D) 780

**Tipik xato:** Vodorod uchun kislorodni 540 deb olish (1080/2 — bu suv mollari); kg ni g ga o'tkazmaslik.

---

### 23-savol · **D** *(sxemali)*

**Shart:** C₂H₅OH →(H₂SO₄, >140 °C) A →(+Br₂) B →(KOH, spirtda, mo'l) D →(C akt., t°) E →(+D) F. Oxirgi mahsulot molekulasida sp² gibridlangan **orbitallar** sonini toping.

**Qoida:** Har bir sp² atomda **3 ta** gibrid orbital.

**Yechim:**
1. A = C₂H₄ (degidratatsiya) · B = C₂H₄Br₂ · D = **C₂H₂** (spirtli ishqor bilan ikki marta degidrogalogenlash)
2. E = **benzol** (asetilenning trimerlanishi, C akt., 600 °C)
3. F: C₆H₆ + C₂H₂ → **stirol** C₆H₅–CH=CH₂
4. Stirolda **8 ta uglerod ham sp²** → 8 · 3 = **24 ta orbital**.

**Javob:** D) 24

**Tipik xato:** Orbitallar o'rniga atomlar sonini (8) yozish; F ni etilbenzol deb olish (unda 2 ta sp³ uglerod bo'lardi).

---

### 24-savol · **D**

**Shart:** Berilgan ma'lumotlardan nechtasi to'g'ri?
a) pentan kislota = valerian kislota · b) molekulyar massa ortishi bilan kislotalarning suvda eruvchanligi pasayadi · c) propion kislotada 8 ta σ va 1 ta π bog' · d) olein kislota bromli suvni rangsizlantiradi · e) 270 g glyukoza bijg'ishidan 1,806·10²³ kislorod atomi tutgan moy kislota hosil bo'ladi

**Yechim:**
1. a) ✓ (C₄H₉COOH ning ikki nomi)
2. b) ✓ (uglevodorod radikali uzaygan sari eruvchanlik kamayadi)
3. c) C₂H₅COOH: 5 C–H + 2 C–C + C=O(σ) + C–O + O–H = **10 σ**, 8 emas ✗
4. d) ✓ (olein kislotada bitta C=C bor)
5. e) C₆H₁₂O₆ → C₃H₇COOH + 2CO₂ + 2H₂: 270 g = 1,5 mol → 1,5 mol kislota → kislorod atomlari 3 mol = **1,806·10²⁴** ✗
6. To'g'ri: a, b, d → **3 ta**

**Javob:** D) 3

**Tipik xato:** σ-bog'larni sanashda C–H larni tushirib qoldirish; moy kislota bijg'ishida 1 mol glyukozadan 1 mol kislota chiqishini bilmaslik.

---

### 25-savol · **B** *(formulali)*

**Shart:** Kosmetologiyada konservant sifatida ishlatiladigan HO–C₆H₄–COO–R moddaning M = 166. R ni aniqlang.

**Qoida:** Parabenlar — **4-gidroksibenzoy kislota efirlari**; HO–C₆H₄–COO– qismining massasi 137.

**Yechim:**
1. M(R) = 166 − 137 = **29** → C₂H₅.
2. Modda — **etilparaben**.

**Javob:** B) etil

**Tipik xato:** Fenil (77) yoki propil (43) ni tanlash; asosiy qismning massasini noto'g'ri hisoblash.

---

### 26-savol · **D**

**Shart:** 200 g 34,2 % li maltoza eritmasi to'liq gidrolizlandi. Hosil bo'lgan eritmadagi uglevodning massa ulushini toping.

**Qoida:** C₁₂H₂₂O₁₁ + H₂O → 2C₆H₁₂O₆ — **suv eritmaning o'zidan** olinadi, demak eritma massasi o'zgarmaydi.

**Yechim:**
1. m(maltoza) = 68,4 g → n = 68,4/342 = **0,2 mol**.
2. n(glyukoza) = 0,4 mol → m = 0,4 · 180 = **72 g**.
3. ω = 72/200 = **0,36**.

**Javob:** D) 0,36

**Tipik xato:** Eritma massasiga suvni qo'shib yuborish; dastlabki ulush (34,2 %) o'zgarmaydi deb o'ylash — gidrolizda massa ortadi.

---

### 27-savol · **B**

**Shart:** 46,6 g Gli-Ala-Ser tripeptidining to'liq gidrolizi uchun necha gramm suv kerak?

**Qoida:** n ta aminokislotali peptidda **(n − 1)** ta peptid bog'i → shuncha suv.

**Yechim:**
1. M(tripeptid) = 75 + 89 + 105 − 2·18 = 269 − 36 = **233**.
2. n = 46,6/233 = **0,2 mol** → suv = 0,4 mol = **7,2 g**.

**Javob:** B) 7,2

**Tipik xato:** 3 mol suv olish (bog'lar 2 ta); aminokislotalar massasini qo'shishda suvni ayirmaslik.

---

### 28-savol · **D** *(rasmli)*

**Shart:** To'rtta probirkada fenol (1), etilamin (2), anilin (3), sirka kislota (4) bor; har biriga binafsharang lakmus eritmasi qo'shiladi. Qaysisida lakmus **ko'k** rangga kiradi?

**Qoida:** Lakmus ishqoriy muhitda ko'k bo'ladi. **Alifatik aminlar** — kuchli asoslar; **aromatik aminlar (anilin)** juda kuchsiz, indikatorni o'zgartirmaydi; fenol va sirka kislota — kislotali.

**Javob:** D) 2 (etilamin)

**Tipik xato:** Anilinni tanlash — u asos, lekin **indikatorni o'zgartirmaydigan** darajada kuchsiz.

---

### 29-savol · **B**

**Shart:** Shina polimerining Mr = 513000. Polimer yondirilganda hosil bo'lgan suv massasi dastlabki uglevodorod massasiga teng. Monomerlar sonini toping.

**Qoida:** CₓH_y birligi uchun suv massasi = 9y (chunki y/2 mol H₂O, ×18).

**Yechim:**
1. 9y = 12x + y → 8y = 12x → **x : y = 2 : 3**.
2. Eng sodda monomer — **butadiyen C₄H₆** (M = 54), bu shina kauchugiga mos.
3. n = 513000/54 = **9500**.

**Javob:** B) 9500

**Tipik xato:** Monomerni izopren (68) deb olish (7544 chiqadi, variantda yo'q); suv massasini 18·y deb hisoblash.

---

### 30-savol · **B**

**Shart:** Probirkalarda a) SiO₃²⁻, b) Ca²⁺, c) NO₃⁻, d) CO₃²⁻ ionlari bor. 1- va 4-ga HCl: 1-da rangsiz hidsiz gaz, 4-da gelsimon cho'kma. 2- va 3-ga Na₂CO₃: 2-da oq cho'kma, 3-da o'zgarish yo'q. Ionlarni probirka raqamlariga moslang.

**Qoida:** CO₃²⁻ + HCl → CO₂↑ (rangsiz, hidsiz) · SiO₃²⁻ + HCl → **H₂SiO₃ gelsimon cho'kma** · Ca²⁺ + CO₃²⁻ → CaCO₃↓ · NO₃⁻ hech narsa bermaydi.

**Yechim:** 1 → CO₃²⁻ (d) · 4 → SiO₃²⁻ (a) · 2 → Ca²⁺ (b) · 3 → NO₃⁻ (c)

**Javob:** B) a-4, b-2, c-3, d-1

**Tipik xato:** Gelsimon cho'kmani karbonatga bog'lash; H₂S bilan chalkashtirib "hidsiz" belgisiga e'tibor bermaslik.

---

### 31-savol · **D** *(rasmli)*

**Shart:** Probirkada **suyuqlantirilgan x tuz** bor, unga cho'g' holidagi **ko'mir bo'lagi** tashlanadi. x tuzning formulasini aniqlang.

**Qoida:** Nitratlar qizdirilganda **kislorod** ajratadi; suyuqlangan selitraga tushgan cho'g' yorqin alangalanadi — nitratning klassik sifat sinovi.

**Yechim:**
1. KHCO₃, CaCO₃ — CO₂ beradi, yonishni **so'ndiradi** ✗
2. Ca₃(PO₄)₂ — juda yuqori haroratda ham parchalanmaydi ✗
3. 2KNO₃ → 2KNO₂ + O₂↑ → ko'mir yorqin yonadi ✓

**Javob:** D) KNO₃

**Tipik xato:** Karbonatlarni tanlash — ular ham gaz beradi, lekin yonishni qo'llab-quvvatlamaydi.

---

### 32-savol · **B** *(rasmli)*

**Shart:** Rasmda CH₃COONa qattiq tuziga H₂SO₄ quyilib qizdirilmoqda, hosil bo'lgan modda sovutgich orqali yig'ilmoqda. Hosil bo'lgan **organik modda** uchun **noto'g'ri** ma'lumotni toping.

**Qoida:** 2CH₃COONa + H₂SO₄ → 2CH₃COOH↑ + Na₂SO₄ — kuchli kislota kuchsizini siqib chiqaradi.

**Yechim:** Organik modda — **sirka kislota**.
1. A) konservant ✓ (to'g'ri)
2. B) Mg, CH₃OH, K₂SO₄ dan **faqat bittasi** bilan reaksiyaga kirishadi — aslida **ikkitasi** bilan: Mg (tuz + H₂) va CH₃OH (eterifikatsiya) ✗ **noto'g'ri**
3. C) ω(C) = 24/60 = 40 % ✓
4. D) sirka kislota dimerlar hosil qiladi ✓

**Javob:** B

**Tipik xato:** Hosil bo'lgan moddani atsetat angidrid yoki aldegid deb olish; B bandidagi eterifikatsiyani unutish.

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** 267 g 20 % li temir(II) gidrokarbonat eritmasi suv va kislorod ishtirokida asta-sekin temir(III) gidroksidga aylanadi; gaz ham ajraladi. Hosil bo'lgan va sarf bo'lgan gazlarning massa farqi **16 g**.
Variantlar: A) 4,48 B) 17,8 C) 8,96 D) 35,6 E) 5,35 F) 21,4

**Umumiy qoida:** **4Fe(HCO₃)₂ + O₂ + 2H₂O → 4Fe(OH)₃↓ + 8CO₂↑**
*(Hosil bo'lgan gaz — CO₂, sarflangan gaz — O₂.)*

**Umumiy hisob:**
1. m(tuz) = 267 · 0,2 = 53,4 g; M(Fe(HCO₃)₂) = 178 → n = **0,3 mol** (hammasi oksidlanmaydi).
2. Oksidlangan qism — x mol: CO₂ = 2x, O₂ = x/4.
3. Massa farqi: 88x − 8x = 80x = 16 → **x = 0,2 mol**.

---

### 33-savol · [2,2 ball] · **F**

**Yechim:** n(Fe(OH)₃) = x = 0,2 mol → m = 0,2 · 107 = **21,4 g**.

**Javob:** F) 21,4

**Tipik xato:** Butun 0,3 molni oksidlangan deb olish (32,1 g); M(Fe(OH)₃) ni 89 (Fe(OH)₂) deb hisoblash.

---

### 34-savol · [2,2 ball] · **C**

**Yechim:** n(CO₂) = 2x = 0,4 mol → V = 0,4 · 22,4 = **8,96 l**.

**Javob:** C) 8,96

**Tipik xato:** CO₂ ni x mol deb olish (4,48 — A tuzog'i).

---

### 35-savol · [2,2 ball] · **B**

**Yechim:** Oksidlanmagan tuz = 0,3 − 0,2 = 0,1 mol → m = 0,1 · 178 = **17,8 g**.

**Javob:** B) 17,8

**Tipik xato:** Oksidlangan qismning massasini (35,6 — D tuzog'i) yozish.

---

## III QISM — yozma topshiriqlar (36–45)

---

### 36-topshiriq

**Shart:** 61,5 g MgSO₄·7H₂O suvda eritilib 15 % li magniy sulfat eritmasi olindi; eritma ikkita stakanga ajratildi. 1-stakanga mo'l SrCl₂ solinganda 18,4 g cho'kma hosil bo'ldi. 2-stakanga 212 g 20 % li kaliy fosfat eritmasi solindi.
a) 2-stakandagi eritma massasini (g) toping. b) Ikkala stakandagi cho'kmalarning mol yig'indisini toping.

**Qoida:** Kristallogidratdan sof tuz ulushi; eritma ajratilganda **tarkibi o'zgarmaydi**, demak massalar mollarga proporsional.

**Yechim:**
1. M(MgSO₄·7H₂O) = 246 → n = **0,25 mol** → m(MgSO₄) = 30 g → eritma = 30/0,15 = **200 g**.
2. 1-stakan: SrCl₂ + MgSO₄ → SrSO₄↓ + MgCl₂; M(SrSO₄) = 184 → n = 18,4/184 = **0,1 mol** MgSO₄.
3. Demak 2-stakanda MgSO₄ = **0,15 mol**; eritma massalari: 80 g va **120 g**.
4. n(K₃PO₄) = 212 · 0,2/212 = **0,2 mol**.
5. 3MgSO₄ + 2K₃PO₄ → Mg₃(PO₄)₂↓ + 3K₂SO₄: 0,15 mol MgSO₄ ga 0,1 mol K₃PO₄ kerak → **MgSO₄ cheklovchi**, Mg₃(PO₄)₂ = **0,05 mol** = 13,1 g.
6. **a)** m(eritma) = 120 + 212 − 13,1 = **318,9 g**.
7. **b)** 0,1 + 0,05 = **0,15 mol**.

**Javob:** a) 318,9 g · b) 0,15 mol

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| n(MgSO₄) = 0,25 va eritma 200 g | 0,4 |
| 1-stakandagi MgSO₄ = 0,1 mol (cho'kma orqali) | 0,4 |
| Stakanlar massasi 80 g va 120 g | 0,3 |
| Mg₃(PO₄)₂ = 0,05 mol = 13,1 g | 0,4 |
| Javob 318,9 g | 0,2 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| SrSO₄ = 0,1 mol | 0,5 |
| 3 : 2 nisbat va cheklovchi reagent aniqlangan | 0,6 |
| Yig'indi 0,15 mol | 0,4 |

**Tipik xato:** Eritmani teng ikkiga bo'lingan deb olish (shartda teng deyilmagan); K₃PO₄ ni cheklovchi deb hisoblash; kristallizatsion suvni MgSO₄ massasiga qo'shish.

---

### 37-topshiriq

**Shart:** 31,4 g suvda 18,9 g HNO₃ eritildi; to'la neytrallanguncha 33,6 % li KOH eritmasi quyildi; eritma 15 °C gacha sovitildi (S = 25).
a) Cho'kmaga tushadigan tuz massasini (g) aniqlang. b) Hosil bo'lgan eritma massasini (g) aniqlang.

**Qoida:** Neytrallanishda **suv hosil bo'ladi** va u eritmada qoladi; \`S\` — 100 g suvdagi tuz.

**Yechim:**
1. n(HNO₃) = 0,3 mol → n(KOH) = 0,3 mol = 16,8 g → KOH eritmasi = 16,8/0,336 = **50 g**.
2. Umumiy eritma = (31,4 + 18,9) + 50 = **100,3 g**; m(KNO₃) = 0,3 · 101 = **30,3 g**.
3. Eritmadagi suv = 100,3 − 30,3 = **70 g**.
4. 15 °C da 70 g suvda eriydigan tuz = 25 · 0,7 = **17,5 g**.
5. **a)** Cho'kma = 30,3 − 17,5 = **12,8 g**.
6. **b)** Eritma = 100,3 − 12,8 = **87,5 g**.

**Javob:** a) 12,8 g · b) 87,5 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| n(HNO₃) = n(KOH) = 0,3 mol | 0,4 |
| KOH eritmasi massasi 50 g | 0,4 |
| Umumiy eritma 100,3 g va suv 70 g | 0,5 |
| Cho'kma 12,8 g | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Eruvchanlikdan 17,5 g eritmada qolishi | 0,6 |
| Eritma massasidan cho'kmani ayirish | 0,5 |
| Javob 87,5 g | 0,4 |

**Tipik xato:** Neytrallanishdan hosil bo'lgan suvni unutish (u allaqachon umumiy massada); S ni eritmaga nisbatan olish.

---

### 38-topshiriq

**Shart:** kaliy nitrit + kaliy permanganat + suv → ... Yarim reaksiya usulida: a) oksidlanish tenglamasi; b) qaytarilish tenglamasi.

**Qoida:** Muhit **neytral** (suv) → MnO₄⁻ **MnO₂** gacha qaytariladi; nitrit nitratgacha oksidlanadi.
*Nega aynan u:* mahsulot muhitga bog'liq — kislotali bo'lsa Mn²⁺, ishqoriy bo'lsa MnO₄²⁻ bo'lardi.

**Yechim:**
1. **a) Oksidlanish:** NO₂⁻ + H₂O − 2e⁻ → NO₃⁻ + 2H⁺ ⎸ ×3
2. **b) Qaytarilish:** MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂↓ + 4OH⁻ ⎸ ×2
3. Umumiy: **3KNO₂ + 2KMnO₄ + H₂O → 3KNO₃ + 2MnO₂↓ + 2KOH**
   *(K: 5 = 5 ✓ · O: 15 = 15 ✓ · H: 2 = 2 ✓)*

**Javob:** a) NO₂⁻ + H₂O − 2e⁻ → NO₃⁻ + 2H⁺ · b) MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Nitritdan nitratga o'tish yozilgan | 0,5 |
| Kislorod suv hisobiga muvozanatlangan | 0,6 |
| Elektronlar soni (2e⁻) va zaryad balansi | 0,6 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Neytral muhitda mahsulot MnO₂ ekani aniqlangan | 0,6 |
| Suv va OH⁻ bilan tenglashtirilgan | 0,5 |
| 3e⁻ to'g'ri ko'rsatilgan | 0,4 |

**Tipik xato:** Kislotali muhit yarim reaksiyasini (MnO₄⁻ + 8H⁺ + 5e⁻) yozish; yarim reaksiyada zaryadni tekshirmaslik.

---

### 39-topshiriq

**Shart:** 29,1 g ikki valentli metall tuzi ochiq havoda qizdirilganda ikkita oksid hosil bo'ldi; biri n.sh. da gaz va uni 19,2 g misning kons. H₂SO₄ bilan reaksiyasidan ham olish mumkin. 24,3 g ikkinchi oksid HCl da eritildi, NaOH quyildi; cho'kma ikki probirkaga bo'linib, HCl va NaOH da erib ketdi.
a) Dastlabki tuzning nomini yozing. b) Cho'kmaning ishqorda erishidan hosil bo'lgan kompleks tuz formulasini yozing.

**Qoida:** Cu + 2H₂SO₄(kons) → CuSO₄ + SO₂↑ + 2H₂O → gaz **SO₂**. Cho'kmaning ikkala muhitda erishi — **amfoterlik** belgisi.

**Yechim:**
1. n(Cu) = 19,2/64 = 0,3 mol → n(SO₂) = **0,3 mol**.
2. Ikkinchi oksid MO: 24,3 g, 0,3 mol → M(MO) = 81 → **M = 65 = Zn** ✓ (ZnO amfoter)
3. Tuz: 29,1 g / 0,3 mol = **97 g/mol = ZnS** → 2ZnS + 3O₂ → 2ZnO + 2SO₂↑
4. **a)** **Rux sulfid (ZnS)**
5. **b)** ZnO → ZnCl₂ → Zn(OH)₂↓; Zn(OH)₂ + 2NaOH → **Na₂[Zn(OH)₄]**

**Javob:** a) rux sulfid, ZnS · b) Na₂[Zn(OH)₄]

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Gaz SO₂ ekani mis orqali aniqlangan (0,3 mol) | 0,5 |
| Ikkinchi oksid M = 81 → ZnO | 0,5 |
| Tuz M = 97 → ZnS | 0,4 |
| Kuydirish tenglamasi yozilgan | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Zn(OH)₂ cho'kmasi va amfoterligi ko'rsatilgan | 0,6 |
| Ishqorda erish tenglamasi | 0,5 |
| Na₂[Zn(OH)₄] formulasi | 0,4 |

**Tipik xato:** Tuzni ZnSO₃ yoki ZnSO₄ deb olish (massa mos kelmaydi); kompleksni NaZnO₂ deb yozish (eritmada **gidrokso**kompleks hosil bo'ladi).

---

### 40-topshiriq

**Shart:** Mg₃N₂ →(mo'l HBr eritmasi) A va B(qattiq); A →(KOH, t°) … →(+H₂O) C →(AlCl₃) X₁; B →(H₂SO₄ kons) D↑ →(+stirol) X₂.
a) X₁ (alyuminiy tutuvchi) va X₂ (organik) moddalarning molyar massalari yig'indisini toping. b) X₂ ning nomini yozing.

**Qoida:** Mg₃N₂ + 8HBr → 3MgBr₂ + 2NH₄Br — ikkita tuz; ammoniy tuzi ishqor bilan **NH₃** beradi; ammiak suvi AlCl₃ bilan **Al(OH)₃** cho'ktiradi (kompleks hosil qilmaydi).

**Yechim:**
1. A = **NH₄Br** → KOH, t° → NH₃↑ → +H₂O → C = **NH₃·H₂O**.
2. 3NH₃·H₂O + AlCl₃ → **Al(OH)₃↓** + 3NH₄Cl → X₁ = Al(OH)₃, **M = 78**.
3. B = **MgBr₂ (qattiq)** + H₂SO₄(kons) → **HBr↑** = D.
4. D + stirol: C₆H₅–CH=CH₂ + HBr → **C₆H₅–CHBr–CH₃** (Markovnikov) → M = **185**.
5. **a)** 78 + 185 = **263 g/mol**.
6. **b)** X₂ — **1-brom-1-feniletan** ((1-bromoetil)benzol).

**Javob:** a) 263 g/mol · b) 1-brom-1-feniletan

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Mg₃N₂ + HBr dan ikkita tuz hosil bo'lishi | 0,4 |
| X₁ = Al(OH)₃ (ammiak kompleks bermasligi) | 0,5 |
| D = HBr va Markovnikov qoidasi | 0,5 |
| Yig'indi 263 | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Stirolga HBr birikishi tenglamasi | 0,6 |
| Brom **ikkilamchi** uglerodga birikishi asoslangan | 0,5 |
| Nomi to'g'ri yozilgan | 0,4 |

**Tipik xato:** AlCl₃ + NH₃ dan [Al(NH₃)₆]Cl₃ hosil bo'ladi deb o'ylash; HBr ni anti-Markovnikov biriktirib 2-brom-1-feniletan deb yozish.

---

### 41-topshiriq

**Shart:** +2 valentli metall va uning karbonati aralashmasi 23,55 g; mo'l HCl da eritilganda 3,36 l (n.sh.) gaz ajraldi. Gaz ohakli suvdan o'tkazilganda 5 g cho'kma hosil bo'ldi.
a) Metallning nisbiy atom massasini toping. b) Sarflangan 10 % li HCl eritmasi massasini (g) toping.

**Qoida:** Gaz — H₂ va CO₂ aralashmasi; ohakli suv **faqat CO₂** ni ushlaydi (CaCO₃).

**Yechim:**
1. Jami gaz = 3,36/22,4 = **0,15 mol**; n(CaCO₃) = 5/100 = **0,05 mol** = n(CO₂) → n(H₂) = **0,1 mol**.
2. M + 2HCl → MCl₂ + H₂ → n(M) = 0,1 · MCO₃ + 2HCl → ... → n(MCO₃) = 0,05.
3. 0,1M + 0,05(M + 60) = 23,55 → 0,15M = 20,55 → **M = 137 (bariy)**.
4. **b)** n(HCl) = 2 · 0,1 + 2 · 0,05 = **0,3 mol** → m = 10,95 g → eritma = 10,95/0,1 = **109,5 g**.

**Javob:** a) 137 (Ba) · b) 109,5 g

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Gaz ikki komponentli ekani va CO₂ = 0,05 mol | 0,5 |
| H₂ = 0,1 mol → metall 0,1 mol | 0,4 |
| Massa tenglamasi 0,1M + 0,05(M+60) = 23,55 | 0,5 |
| M = 137 | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Ikkala reaksiya uchun HCl mollari (0,2 + 0,1) | 0,6 |
| m(HCl) = 10,95 g | 0,4 |
| Eritma 109,5 g | 0,5 |

**Tipik xato:** Butun gazni CO₂ deb olish; "mo'l kislota" ni hisobga olib **sarflangan** emas, umumiy massani topishga urinish.

---

### 42-topshiriq

**Shart:** 22,4 l (n.sh.) NH₃ va H₂ aralashmasi qizdirilib, 112 g CuO solingan nay orqali o'tkazildi. Nay ichidagi qattiq modda 50 g 14,6 % li HCl bilan reaksiyaga kirishdi.
a) Dastlabki gazlar aralashmasining massasini (g) toping. b) Nay ichida hosil bo'lgan gaz hajmini (l, n.sh.) toping.

**Qoida:** 3CuO + 2NH₃ → 3Cu + N₂↑ + 3H₂O · CuO + H₂ → Cu + H₂O. **Mis HCl bilan reaksiyaga kirishmaydi** — demak kislota faqat qolgan CuO ga sarflangan.

**Yechim:**
1. n(CuO)₀ = 112/80 = **1,4 mol**; n(HCl) = 50 · 0,146/36,5 = **0,2 mol** → CuO qoldiq = 0,1 mol.
2. Sarflangan CuO = 1,4 − 0,1 = **1,3 mol**.
3. NH₃ — a, H₂ — b: a + b = 1; **1,5a + b = 1,3** → 0,5a = 0,3 → **a = 0,6**, **b = 0,4**.
4. **a)** m = 0,6 · 17 + 0,4 · 2 = 10,2 + 0,8 = **11 g**.
5. **b)** N₂ = a/2 = 0,3 mol → V = **6,72 l** (suv n.sh. da suyuq).

**Javob:** a) 11 g · b) 6,72 l

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Ikkala qaytarilish tenglamasi | 0,4 |
| HCl faqat CuO bilan reaksiyaga kirishi → qoldiq 0,1 mol | 0,5 |
| Sistema tuzilib a = 0,6, b = 0,4 | 0,5 |
| m = 11 g | 0,3 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Gaz N₂ ekani (suv kondensatlanadi) | 0,5 |
| n(N₂) = 0,3 mol | 0,6 |
| V = 6,72 l | 0,4 |

**Tipik xato:** HCl ni mis bilan reaksiyaga kirishtirish; NH₃ : CuO nisbatini 1 : 1 olish (2 : 3 bo'ladi); suv bug'ini gaz hajmiga qo'shish.

---

### 43-topshiriq

**Shart:** Propan, butan va butilen gazlaridan iborat 5,6 l (n.sh.) aralashma bromli suvdan o'tkazilganda 12 g brom reaksiyaga kirishdi. Dastlabki aralashmaning vodorodga nisbatan zichligi 26,6.
a) Reaksiyadan so'ng gazlar aralashmasining o'rtacha molyar massasini (g/mol) toping. b) Dastlabki aralashmadagi propanning mol ulushini toping.

**Qoida:** Bromli suvda faqat **butilen** yutiladi (1 mol C₄H₈ — 1 mol Br₂); M̄ = 2 · 26,6 = 53,2.

**Yechim:**
1. n(aralashma) = **0,25 mol**; m = 0,25 · 53,2 = **13,3 g**.
2. n(Br₂) = 12/160 = **0,075 mol** = n(C₄H₈) → m = 4,2 g.
3. Qolgan: n = 0,175 mol, m = 13,3 − 4,2 = 9,1 g.
4. **a)** M̄ = 9,1/0,175 = **52 g/mol**.
5. **b)** Propan — p, butan — b: p + b = 0,175; 44p + 58b = 9,1 → 14p = 1,05 → **p = 0,075 mol** → ulush = 0,075/0,25 = **0,3**.

**Javob:** a) 52 g/mol · b) 0,3

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| M̄ = 53,2 va m = 13,3 g | 0,4 |
| Faqat butilen brom bilan reaksiyaga kirishi | 0,5 |
| n(C₄H₈) = 0,075 mol | 0,4 |
| M̄(qolgan) = 52 | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Qolgan aralashma uchun sistema tuzilgan | 0,6 |
| n(propan) = 0,075 mol | 0,5 |
| Mol ulushi **dastlabki** aralashmaga nisbatan (0,3) | 0,4 |

**Tipik xato:** Mol ulushni qolgan aralashmaga nisbatan (0,43) hisoblash; butanni ham bromlash.

---

### 44-topshiriq

**Shart:** Izopropanolning etilatsetatdagi 20 g eritmasiga 50 ml 5 mol/l li KOH suvli eritmasi qo'shildi. Aralashma bug'latildi, quruq qoldiq qizdirildi; hosil bo'lgan qattiq aralashma massasi 21,6 g.
a) Spirtning massa ulushini toping. b) Hosil bo'lgan gaz hajmini (l, n.sh.) toping.

**Qoida:** CH₃COOC₂H₅ + KOH → CH₃COOK + C₂H₅OH (spirtlar bug'latishda uchib ketadi). Qizdirishda: **CH₃COOK + KOH →(t) CH₄↑ + K₂CO₃** (dekarboksillanish).
*Nega aynan u:* "quruq qoldiq **qizdirildi**" so'zi aynan shu ikkinchi bosqichga ishora — gaz shundan chiqadi.

**Yechim:** Etilatsetat — x mol, izopropanol — y mol.
1. KOH = 0,05 · 5 = **0,25 mol**. Gidrolizga x mol ketadi → qolgan (0,25 − x).
2. Qizdirishda KOH cheklovchi (0,25 − x < x): K₂CO₃ = (0,25 − x), qolgan CH₃COOK = 2x − 0,25.
3. Massa: 138(0,25 − x) + 98(2x − 0,25) = 21,6 → 58x + 10 = 21,6 → **x = 0,2 mol** ✓ (tekshirish: 0,05 < 0,2 ✓)
4. m(efir) = 0,2 · 88 = 17,6 g → m(spirt) = 20 − 17,6 = **2,4 g**.
5. **a)** ω = 2,4/20 = **0,12 (12 %)**.
6. **b)** CH₄ = 0,25 − 0,2 = 0,05 mol → V = **1,12 l**.

**Javob:** a) 12 % · b) 1,12 l

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| Gidroliz tenglamasi va KOH = 0,25 mol | 0,4 |
| Qizdirishda CH₃COOK + KOH → CH₄ + K₂CO₃ | 0,5 |
| Qoldiq tarkibi (K₂CO₃ + CH₃COOK) to'g'ri olingan | 0,4 |
| x = 0,2 → ω = 12 % | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Gaz metan ekani aniqlangan | 0,5 |
| n(CH₄) = 0,05 mol (KOH cheklovchi) | 0,6 |
| V = 1,12 l | 0,4 |

**Tipik xato:** Qoldiqqa izopropanolni qo'shish (u bug'lanadi); qizdirish bosqichini e'tiborsiz qoldirish (u holda gaz umuman bo'lmaydi); KOH ni ortiqcha deb hisoblab butun atsetatni K₂CO₃ ga aylantirish (massa mos kelmaydi).

---

### 45-topshiriq

**Shart:** Texnik sirka kislotasi etil spirti va atsetaldegid bilan ifloslangan; namuna teng uch qismga bo'lindi.
1-qism + mo'l NaHCO₃ → 11,2 l (n.sh.) gaz · 2-qism + mo'l Ag₂O/NH₃ → 2,16 g cho'kma · 3-qism + bir necha tomchi kons. H₂SO₄ → 0,88 g murakkab efir.
a) Texnik sirka kislotasining massasini (g) toping. b) Uni yondirganda hosil bo'lgan suv miqdorini (mol) toping.

**Qoida:** Gidrokarbonat **faqat kislota** bilan CO₂ beradi; kumush ko'zgu **faqat aldegid** bilan; eterifikatsiyada **spirt** cheklovchi (kislota mo'l).

**Yechim:** Har bir qism uchun:
1. n(CO₂) = 11,2/22,4 = 0,5 mol → **n(CH₃COOH) = 0,5 mol** (30 g).
2. n(Ag) = 2,16/108 = 0,02 mol → **n(CH₃CHO) = 0,01 mol** (0,44 g).
3. n(efir CH₃COOC₂H₅) = 0,88/88 = 0,01 mol → **n(C₂H₅OH) = 0,01 mol** (0,46 g).
4. Bir qism massasi = 30 + 0,44 + 0,46 = **30,9 g**.
5. **a)** Jami = 3 · 30,9 = **92,7 g**.
6. **b)** Suv: CH₃COOH → 2H₂O (0,5·2 = 1,0) · CH₃CHO → 2H₂O (0,02) · C₂H₅OH → 3H₂O (0,03) → bir qismda **1,05 mol** → jami **3,15 mol**.

**Javob:** a) 92,7 g · b) 3,15 mol

| Baholash mezoni — a) 1,7 ball | Ball |
|---|---|
| NaHCO₃ bilan faqat kislota reaksiyaga kirishi → 0,5 mol | 0,5 |
| Kumush ko'zgudan aldegid 0,01 mol | 0,4 |
| Efirdan spirt 0,01 mol (spirt cheklovchi) | 0,4 |
| Uch qismga ko'paytirish → 92,7 g | 0,4 |

| Baholash mezoni — b) 1,5 ball | Ball |
|---|---|
| Har bir modda uchun suv koeffitsiyenti to'g'ri (2, 2, 3) | 0,6 |
| Bir qism uchun 1,05 mol | 0,5 |
| Jami 3,15 mol | 0,4 |

**Tipik xato:** Namunaning bitta qismi uchun javob berib uchga ko'paytirmaslik; aldegidni ham NaHCO₃ bilan reaksiyaga kirishtirish; efirni kislota bo'yicha hisoblash.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | D | 16 | C | 31 | D |
| 2 | A | 17 | A | 32 | B |
| 3 | C | 18 | D | 33 | F (21,4) |
| 4 | A | 19 | A | 34 | C (8,96) |
| 5 | D | 20 | D | 35 | B (17,8) |
| 6 | A | 21 | A | 36 | 318,9 g · 0,15 mol |
| 7 | C | 22 | D | 37 | 12,8 g · 87,5 g |
| 8 | B | 23 | D | 38 | yarim reaksiyalar |
| 9 | C | 24 | D | 39 | ZnS · Na₂[Zn(OH)₄] |
| 10 | B | 25 | B | 40 | 263 · 1-brom-1-feniletan |
| 11 | C | 26 | D | 41 | 137 (Ba) · 109,5 g |
| 12 | B | 27 | B | 42 | 11 g · 6,72 l |
| 13 | D | 28 | D | 43 | 52 · 0,3 |
| 14 | B | 29 | B | 44 | 12 % · 1,12 l |
| 15 | A | 30 | B | 45 | 92,7 g · 3,15 mol |

Bu variant eng "toza" tuzilganlaridan — barcha sonlar butun chiqadi, shartlarda nuqson topilmadi.
`,et=`# Sertifikat — 22.09.2024 (aprobatsiya)

**Manba:** \`Milliy sertifikat .pdf\`, 17–21-betlar · 43 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–40 qisqa yozma · **41–43 kengaytirilgan yozma** (olimpiada uslubida, bir nechta bandli)

> Bu variant boshqalardan farq qiladi: oxirgi uchta topshiriq (41, 42, 43) to'liq yechim yozishni
> talab qiladi — tenglamalar, ketma-ket hisob va sifat tahlili. Manbada ball ko'rsatilmagan;
> quyida 1–35 uchun standart (1,3/2,2), 36–40 uchun 3,2 va 41–43 uchun 6 ballik taqsimot olingan.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **A**

**Shart:** 0,2 mol natriy tetragidroksoalyuminat tarkibidagi jami atom sonini toping.

**Qoida:** Na[Al(OH)₄] — bitta formula birligida 1 + 1 + 4 + 4 = **10 ta atom**.

**Yechim:** 0,2 · 10 = 2 mol atom = **2·N_A ta atom**.

**Javob:** A) 2·N_A

> **Izoh:** C varianti ("2 mol") ham aslida shu qiymat — savolda ikkita to'g'ri javob bor.
> "Atom **soni**" so'ralgani uchun A olinadi. B varianti (12,04·10²⁴) o'n barobar katta.

**Tipik xato:** Tetragidroksoalyuminatni NaAlO₂ deb olish (5 ta atom).

---

### 2-savol · **A**

**Shart:** Fikrlardan to'g'rilarini aniqlang.
1) Al(NO₃)₃ parchalanganda M̄ = 43,2 g/mol bo'lgan gazlar aralashmasi hosil bo'ladi · 2) Vodorod palladiyda eriganda atomar holatda bo'ladi · 3) Vodorodli shar havoli shardan tez uchadi · 4) O₂ va CH₄ aralashmasining M̄ si 32 dan katta, 16 dan kichik bo'lmaydi · 5) Teng hajmiy nisbatdagi gazlar aralashmasining M̄ si ikkala gaz M sining 1/3 qismi

**Yechim:**
1. 4Al(NO₃)₃ → 2Al₂O₃ + **12NO₂ + 3O₂**: M̄ = (12·46 + 3·32)/15 = 648/15 = **43,2** ✓
2. Pd da vodorod atomar holatda eriydi ✓
3. Vodorod eng yengil gaz — diffuziya va ko'tarilish tezroq ✓
4. Aralashmaning M̄ i doim komponentlar M si **orasida** bo'ladi ✓
5. 1/3 emas, **arifmetik o'rtacha** (1/2 yig'indi) ✗

**Javob:** A) 1,3,4

**Tipik xato:** 5-fikrni to'g'ri deb olish; alyuminiy nitrat parchalanishida O₂ ni unutish.

---

### 3-savol · **D**

**Shart:** KOH va H₃PO₄ qanday mol nisbatda ta'sirlashsa, hosil bo'lgan tuzning ekvivalent massasi 87 g/ekv bo'ladi?

**Qoida:** Tuzning ekvivalent massasi = M / (metall zaryadi × metall atomlari soni).

**Yechim:**
1. KH₂PO₄ (136): 136/1 = 136 ✗
2. K₂HPO₄ (174): 174/2 = **87** ✓ → KOH : H₃PO₄ = **2 : 1**
3. K₃PO₄ (212): 212/3 = 70,7 ✗

**Javob:** D) 2:1

**Tipik xato:** Ekvivalentni faqat M/valentlik deb olish, metall atomlari sonini hisobga olmaslik.

---

### 4-savol · **D** *(variantlarda nuqson bor — izohga qarang)*

**Shart:** Ionlarni elektron konfiguratsiyalari bilan moslang: a) gidrid ioni, b) nitrid ioni, c) Zn²⁺, d) Fe³⁺.
1. 1s¹ · 2. 1s²2s²(2p⁶)3s²3p⁶3d¹⁰ · 3. [Ar]3d⁵ · 4. [Ar]3d⁶ · 5. 1s²2s²2p⁶ · 6. 1s²

**Yechim:**
1. H⁻ (2 e⁻) → **1s² = 6**
2. N³⁻ (10 e⁻) → **1s²2s²2p⁶ = 5**
3. Zn²⁺ (28 e⁻) → [Ar]3d¹⁰ = **2**
4. Fe³⁺ (23 e⁻) → [Ar]3d⁵ = **3**

**Javob:** D) a–6; b–5; c–4; d–3 *(rasmiy kalit)*

> **Izoh:** to'g'ri moslash **a–6, b–5, c–2, d–3**; variantlar orasida bunisi yo'q.
> D variantida faqat **c** xato (3d⁶ — bu Fe²⁺ niki). Saytga qo'yishda c bandini 2 ga tuzating.

**Tipik xato:** Zn²⁺ da 3d dan emas, 4s dan elektron uzilishini unutish.

---

### 5-savol · **C**

**Shart:** Element atomida **M va N qavatlarda** elektronlar yig'indisi 15 ta. Shu elementning **eng yuqori oksidlanish darajali** zarrachasining oxirgi elektroni uchun magnit kvant son qiymatini toping.

**Qoida:** M — 3-qavat, N — 4-qavat; mₗ qiymatlari: s → 0, p → −1, 0, +1, d → −2…+2.

**Yechim:**
1. 4-davr elementi: 3s²3p⁶3dˣ + 4sʸ = 15 → 8 + x + y = 15 → x + y = 7 → **3d⁵4s² = Mn** (Z = 25).
2. Eng yuqori o.d. — **Mn⁺⁷** → 18 ta elektron qoladi: 1s²2s²2p⁶3s²3p⁶.
3. Oxirgi elektron — **3p⁶** dagi oxirgisi → mₗ = **+1**.

**Javob:** C) +1

**Tipik xato:** Mn⁷⁺ ning konfiguratsiyasini 3d⁰ deb olib d orbital uchun mₗ qidirish; oxirgi elektron deb 3p⁴ ni olish.

---

### 6-savol · **B**

**Shart:** Ammoniy ioni uchun to'g'ri ma'lumotlarni toping.
1. Elektronlar 10, neytronlar 11, protonlar 11 · 2. Azotda bo'linmagan elektron juft, vodorod ionida bo'sh orbital bor · 3. Azot va **bitta** vodorod atomi orasida donor-akseptor bog' mavjud · 4. Tuzlari suvda yaxshi eriydi

**Qoida:** NH₄⁺ da to'rtta N–H bog'i hosil bo'lgach **bir xil** (ajratib bo'lmaydi).

**Yechim:**
1. Protonlar 7 + 4 = 11 ✓, elektronlar 10 ✓, lekin **neytronlar 7** (¹⁴N) ✗
2. Donor — azotning juft elektroni, akseptor — H⁺ ning bo'sh orbitali ✓
3. Bog'lar hosil bo'lgandan keyin ajratilmaydi ✗
4. Ammoniy tuzlari eriydi ✓

**Javob:** B) 2,4

**Tipik xato:** 1-bandda neytronlarni protonlar bilan tenglashtirish; 3-bandni to'g'ri deb hisoblash.

---

### 7-savol · **C**

**Shart:** A + B → C reaksiyaning 60 °C dagi tezligi 3,6 mol/(l·min); 30 °C da 40 sekundda A ning konsentratsiyasi 0,6 dan 0,3 mol/l gacha kamaydi. Temperatura koeffitsiyentini toping.

**Qoida:** \`v = Δc/Δt\`; \`v₂/v₁ = γ^(ΔT/10)\`.

**Yechim:**
1. v(30 °C) = 0,3/(40/60) = **0,45 mol/(l·min)**.
2. 3,6/0,45 = **8** = γ³ (ΔT = 30 °C) → **γ = 2**.

**Javob:** C) 2

**Tipik xato:** 40 sekundni minutga aylantirmaslik; ΔT/10 ni 3 emas, 30 deb olish.

---

### 8-savol · **D**

**Shart:** CH₄(g) + H₂O(g) → CO(g) + H₂(g) − Q. Is gazi unumini oshirish uchun nima qilish kerak?

**Qoida:** Le-Shatelye: endotermik (−Q) → **haroratni oshirish**; gaz mollari ortadi (2 → 4) → **bosimni kamaytirish**; boshlang'ich moddani oshirish yoki mahsulotni kamaytirish.

**Yechim:** Bosimni kamaytirish ✓ · temperaturani oshirish ✓ · metan konsentratsiyasini oshirish ✓

**Javob:** D

**Tipik xato:** Vodorod konsentratsiyasini **oshirish** (C varianti) — u mahsulot, oshirilsa muvozanat chapga suriladi.

---

### 9-savol · **D**

**Shart:** H₂O₂ eritmasi qizdirilganda parchalandi, massasi 8 % ga kamaydi va 10 % li eritma hosil bo'ldi. Dastlabki konsentratsiyani (%) toping.

**Qoida:** 2H₂O₂ → 2H₂O + O₂↑ — massa kamayishi faqat **kislorod** hisobiga.

**Yechim:** 100 g eritma olamiz.
1. Yo'qolgan massa = 8 g O₂ = **0,25 mol** → parchalangan H₂O₂ = 0,5 mol = **17 g**.
2. Qolgan eritma = 92 g; undagi H₂O₂ = 9,2 g.
3. Dastlabki H₂O₂ = 9,2 + 17 = **26,2 g** → **26,2 %**.

**Javob:** D) 26,2

**Tipik xato:** Yo'qolgan 8 g ni H₂O₂ deb hisoblash (18 % chiqadi); 10 % ni dastlabki massaga nisbatan olish.

---

### 10-savol · **B**

**Shart:** 200 ml 0,5 M Na₃PO₄ eritmasiga 50 ml 1 M HCl qo'shildi; uch xil tuz hosil bo'ldi. Qaysi tuz bo'lmaydi?

**Qoida:** HCl bosqichma-bosqich almashtiradi: Na₃PO₄ → Na₂HPO₄ → NaH₂PO₄.

**Yechim:**
1. n(Na₃PO₄) = 0,1 mol; n(HCl) = **0,05 mol**.
2. Na₃PO₄ + HCl → Na₂HPO₄ + NaCl → 0,05 mol Na₂HPO₄, 0,05 mol Na₃PO₄ **ortib qoladi**, 0,05 mol NaCl.
3. Ikkinchi bosqichga kislota yetmaydi → **NaH₂PO₄ hosil bo'lmaydi**.

**Javob:** B) natriy digidroortofosfat

**Tipik xato:** Kislota mo'l deb o'ylab eng nordon tuzni tanlash; uchta tuz — Na₃PO₄, Na₂HPO₄, NaCl ekanini sanamaslik.

---

### 11-savol · **B**

**Shart:** 60 % li chumoli kislotaning ikkita bir xil eritmasi: birinchisiga 200 ml suv, ikkinchisiga 200 ml HBr eritmasi quyildi (hajmlari teng). Nechta fikr to'g'ri?

**Qoida:** Kuchli kislota qo'shilishi **bir xil ionli effekt** beradi — HCOOH ning dissotsilanishi bosiladi; suv qo'shilishi esa dissotsilanish darajasini **oshiradi**.

**Yechim:**
1. "1-eritmada formiat ionlari ko'p" ✓ (2-da dissotsilanish bosilgan)
2. "2-eritmaning pH i kichik" ✓ (kuchli kislota qo'shilgan)
3. "1-eritmada dissotsilanmagan HCOOH molekulalari kamroq" ✓
4. "2-eritmada H⁺ konsentratsiyasi kamroq" ✗ — aksincha, ko'proq
5. Jami **3 ta** to'g'ri

**Javob:** B) 3

**Tipik xato:** Suyultirish dissotsilanish **darajasini** oshirsa-da, **konsentratsiyani** kamaytirishini chalkashtirish.

---

### 12-savol · **C**

**Shart:** "Pushti-siyohrang KMnO₄ eritmasiga kaliy sulfit **…** modda bilan qo'shilsa, eritma rangi **…** bo'ladi va permanganat ioni **…** gacha qaytariladi."

**Qoida:** Muhitga qarab: kislotali → Mn²⁺ (rangsiz) · neytral → MnO₂ (qo'ng'ir cho'kma) · **ishqoriy → MnO₄²⁻ (yashil)**.

**Javob:** C) KOH; yashil; MnO₄²⁻

**Tipik xato:** Ishqoriy muhitda ham Mn²⁺ hosil bo'ladi deb olish.

---

### 13-savol · **A**

**Shart:** NaCl va KCl dan iborat 25 g aralashma suvda eritilib, 840 ml 0,5 M AgNO₃ qo'shildi. Yangi eritmaga 100 g mis plastinka tushirildi; qaytarib olinganda massasi 101,52 g bo'ldi. Osh tuzining massa ulushini toping.

**Qoida:** Ortiqcha AgNO₃ mis bilan reaksiyaga kirishadi: Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag; 1 mol Cu uchun plastinka **+152 g** og'irlashadi.

**Yechim:**
1. Plastinka ortishi = 1,52 g → n(Cu) = 1,52/152 = **0,01 mol** → ortiqcha AgNO₃ = **0,02 mol**.
2. n(AgNO₃)₀ = 0,42 mol → xloridlar bilan reaksiyaga kirgani = **0,40 mol** = n(Cl⁻).
3. NaCl — x, KCl — y: x + y = 0,4; 58,5x + 74,5y = 25 → **x = 0,3**.
4. ω(NaCl) = (0,3 · 58,5)/25 = 17,55/25 = **0,702**.

**Javob:** A) 0,702

**Tipik xato:** Butun AgNO₃ ni xloridlarga sarflangan deb olish; plastinka ortishini Ag massasi deb hisoblash.

---

### 14-savol · **C** *(rasmli)*

**Shart:** To'rtta probirkadagi suvga qo'shiladi: 1) SiO₂ · 2) KOH · 3) P₂O₅ · 4) CuO. Qaysi probirkada lakmus **qizil** rangga kiradi?

**Qoida:** Lakmus kislotali muhitda qizaradi; suvda eriydigan **kislotali oksid** kislota beradi.

**Yechim:**
1. SiO₂ suvda erimaydi ✗ · CuO erimaydi ✗ · KOH — ishqoriy (ko'k) ✗
2. P₂O₅ + 3H₂O → 2H₃PO₄ ✓ → qizil

**Javob:** C) 3

**Tipik xato:** SiO₂ ni ham kislotali oksid sifatida suvda eriydi deb olish — u **suvda erimaydigan** kislotali oksid.

---

### 15-savol · **C** *(jadvalli)*

**Shart:** 4,96 g X va 6,4 g O₂ to'liq reaksiyaga kirishib XₐO_b hosil qildi. Mahsulot uchun to'g'ri fikrni toping.

**Qoida:** Mollar nisbati → formula.

**Yechim:**
1. n(O₂) = 0,2 mol → O atomlari **0,4 mol**.
2. X = fosfor deb tekshiramiz: 4,96/31 = **0,16 mol** → P : O = 0,16 : 0,4 = **2 : 5** → **P₂O₅** (0,08 mol).
3. A) kislotali oksid, amfoter emas ✗ · B) o.d. +5 ✗ · D) P₂O₅ suv bilan **uch xil** kislota beradi (HPO₃, H₄P₂O₇, H₃PO₄) ✗
4. C) P₂O₅ + 6NaOH → 2Na₃PO₄ + 3H₂O → 0,08 · 6 = **0,48 mol** ✓

**Javob:** C) 0,48 mol o'yuvchi natriy bilan o'rta tuz hosil qiladi

**Tipik xato:** P₂O₅ ni amfoter deb olish; o'rta tuz uchun NaOH ni 2 : 1 nisbatda hisoblash.

---

### 16-savol · **D** *(strukturali)*

**Shart:** Rasmda Me(OH)₃ ko'rinishidagi tuzilish berilgan. Metallga mos javobni aniqlang.

**Qoida:** Gidroksid guruhlari soni = metall **valentligi**.

**Yechim:** Uchta OH → III valentli metall. Na (I), Cd (II), Mg (II) — mos emas; **Fe** Fe(OH)₃ hosil qiladi ✓

**Javob:** D) Fe

**Tipik xato:** Faqat "metall" so'ziga qarab natriyni tanlash.

---

### 17-savol · **C**

**Shart:** Mol nisbati 2 : 1 : 1 bo'lgan Fe₃O₄, C va Cu dan iborat 54 g aralashmani to'liq eritish uchun necha gramm 80 % li H₂SO₄ kerak? (Barcha reaksiyalarda qaytarilish mahsuloti — SO₂.)

**Qoida:** Qizdirilgan konsentrlangan H₂SO₄ — oksidlovchi: Fe₃O₄ dagi Fe²⁺ ni Fe³⁺ ga, uglerodni CO₂ ga, misni Cu²⁺ ga oksidlaydi.

**Yechim:** Fe₃O₄ = 2x, C = x, Cu = x.
1. 464x + 12x + 64x = 540x = 54 → **x = 0,1** → Fe₃O₄ 0,2; C 0,1; Cu 0,1.
2. **2Fe₃O₄ + 10H₂SO₄ → 3Fe₂(SO₄)₃ + SO₂↑ + 10H₂O** → 0,2 mol ga **1,0 mol** kislota.
3. **C + 2H₂SO₄ → CO₂↑ + 2SO₂↑ + 2H₂O** → **0,2 mol**.
4. **Cu + 2H₂SO₄ → CuSO₄ + SO₂↑ + 2H₂O** → **0,2 mol**.
5. Jami 1,4 mol = 137,2 g → eritma = 137,2/0,8 = **171,5 g**.

**Javob:** C) 171,5

**Tipik xato:** Fe₃O₄ ni oddiy oksid deb olib faqat almashinish reaksiyasini yozish (4 mol kislota chiqadi); 137,2 (sof kislota) ni javob deb yozish.

---

### 18-savol · **A** *(sxemali)*

**Shart:** Sxemada: Zn —(1: mo'l NaOH)→ Z · Zn —(5: HCl)→ X · X —(6: mo'l NaOH)→ Z · Z —(2: N)→ X · X —(3: L)→ Zn · Zn —(4: Y)→ X (4-reaksiyada **sariq-qizil metall** hosil bo'ladi). Oddiy modda hosil bo'lishi bilan boradigan reaksiyalarni toping.

**Qoida:** Oddiy modda — H₂, metall va h.k. Sariq-qizil metall — **mis**.

**Yechim:** X = ZnCl₂, Z = Na₂[Zn(OH)₄].
1. **1:** Zn + 2NaOH + 2H₂O → Na₂[Zn(OH)₄] + **H₂↑** ✓
2. **2:** Na₂[Zn(OH)₄] + 4HCl → ZnCl₂ + 2NaCl + 4H₂O ✗
3. **3:** ZnCl₂ + Mg → MgCl₂ + **Zn** ✓
4. **4:** Zn + CuCl₂ → ZnCl₂ + **Cu** ✓
5. **5:** Zn + 2HCl → ZnCl₂ + **H₂↑** ✓
6. **6:** ZnCl₂ + 4NaOH → Na₂[Zn(OH)₄] + 2NaCl ✗

**Javob:** A) 1, 3, 4, 5

**Tipik xato:** 2 va 6 ni ham "oddiy modda chiqadi" deb belgilash — ular almashinish reaksiyalari.

---

### 19-savol · **A**

**Shart:** 1) C + H₂SO₄(kons) → · 2) P + HNO₃(kons) → . Ikkala reaksiyada jami 18 g suv hosil bo'ldi. Ikkinchi reaksiyadagi H₃PO₄ miqdori birinchi reaksiyadagi **gazlarning umumiy** miqdoriga teng. Metallmaslarning umumiy massasini toping.

**Qoida:** C + 2H₂SO₄ → CO₂ + 2SO₂ + 2H₂O · P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O

**Yechim:** C — a mol, P — b mol.
1. Suv: 2a + b = **1 mol** (18 g).
2. Birinchi reaksiyadagi gazlar: CO₂ (a) + SO₂ (2a) = **3a** → shart: b = 3a.
3. 2a + 3a = 1 → **a = 0,2**, **b = 0,6**.
4. m = 0,2 · 12 + 0,6 · 31 = 2,4 + 18,6 = **21 g**.

**Javob:** A) 21

**Tipik xato:** Birinchi reaksiyadagi gazlarni faqat CO₂ deb olish; fosfor reaksiyasida suvni 2 mol deb hisoblash.

---

### 20-savol · **D**

**Shart:** Noma'lum alkan yondirilganda 194,4 g CO va CO₂ aralashmasi hosil bo'ldi; CO ning miqdori CO₂ nikidan 10 marta ko'p, alkan va kislorod **1,1 : 4** nisbatda. Alkanni toping.

**Qoida:** Chala yonishda uglerod CO va CO₂ ga taqsimlanadi; **kislorod atomlari balansi** yoziladi.

**Yechim:**
1. CO₂ = c, CO = 10c: 44c + 280c = 194,4 → **c = 0,6** → CO₂ 0,6 mol, CO 6 mol, jami uglerod **6,6 mol**.
2. Alkan — a mol, uglerodlar soni n: a·n = 6,6. O₂ = 4a/1,1.
3. Kislorod balansi: 2·(4a/1,1) = 2(0,6) + 6 + a(n+1) → 7,273a = 7,2 + 6,6 + a → 6,273a = 13,8 → **a = 2,2**.
4. n = 6,6/2,2 = **3** → **propan** (O₂ = 8 mol ✓).

**Javob:** D) propan

**Tipik xato:** Suvni hisobga olmaslik; CO ni CO₂ bilan almashtirish (10 marta ko'p — bu CO).

---

### 21-savol · *(javob variantlarda yo'q — izohga qarang)*

**Shart:** Uglerod va vodorod soni 2 taga farq qiladigan alkadiyen 200 g 3,2 % li bromning CCl₄ dagi eritmasi bilan ta'sirlashib **teng miqdordagi** dibrom- va tetrabromalkan hosil qildi. Qancha (g) alkadiyen sarflanadi?

**Qoida:** Alkadiyen CₙH₂ₙ₋₂; dibromid 1 mol Br₂, tetrabromid **2 mol** Br₂ biriktiradi.

**Yechim:**
1. (2n − 2) − n = 2 → **n = 4** → **butadiyen-1,3** (M = 54).
2. n(Br₂) = 6,4/160 = **0,04 mol**.
3. Har bir mahsulotdan x mol bo'lsa: x + 2x = 0,04 → **x = 1/75**.
4. Sarflangan diyen = 2x = 0,0267 mol → m = **1,44 g**.

**Javob:** 1,44 g

> **Izoh:** variantlar (1,08 · 2,16 · 3,24 · 4,32) orasida 1,44 yo'q. **2,16 g** javobi
> n(diyen) = n(Br₂) = 0,04 mol deb olinganda chiqadi — bu faqat **barcha mahsulot dibromid**
> bo'lgandagina o'rinli, shartga zid. Rasmiy kalit ehtimol B) 2,16; to'g'ri yechim esa 1,44 g.

**Tipik xato:** Tetrabromid uchun ham 1 mol Br₂ olish; alkadiyenni C₅H₈ deb aniqlash.

---

### 22-savol · **A**

**Shart:** Tabiiy gazni qayta ishlab ammiak uchun xomashyo (vodorod) tayyorlashda qanday asosiy reaksiya amalga oshiriladi?

**Qoida:** Sanoatda vodorod **metanning suv bug'i bilan konversiyasi** orqali olinadi.

**Javob:** A) CH₄ + H₂O = CO + 3H₂

> **Izoh:** variantda "+ Q" yozilgan, aslida bu reaksiya **endotermik** (−Q, ~800 °C da boradi).

**Tipik xato:** Suvni elektroliz qilish (D) ni tanlash — u qimmat, sanoatda ammiak uchun ishlatilmaydi.

---

### 23-savol · **C**

**Shart:** M̄ = 12 g/mol bo'lgan formaldegid va vodorod aralashmasi katalizator ustidan o'tkazildi; metanol hosil bo'ldi va aralashmaning vodorodga nisbatan zichligi 8,4 bo'ldi. Oxirgi aralashmadagi vodorodning mol ulushini (%) toping.

**Qoida:** Reaksiyada **massa saqlanadi**, mollar kamayadi: n = m/M̄.

**Yechim:**
1. Dastlabki: (30x + 2y)/(x+y) = 12 → 18x = 10y → x = 1, y = 1,8 (jami **2,8 mol**, massa 33,6 g).
2. Oxirgi M̄ = 2 · 8,4 = 16,8 → n = 33,6/16,8 = **2 mol** → reaksiyaga kirgan HCHO = 2,8 − 2 = **0,8 mol**.
3. Qolgan H₂ = 1,8 − 0,8 = **1,0 mol** → ulush = 1,0/2,0 = **50 %**.

**Javob:** C) 50

**Tipik xato:** Zichlikni to'g'ridan-to'g'ri M deb olish (8,4 g/mol); mollar kamayishini hisobga olmaslik.

---

### 24-savol · **B**

**Shart:** 44 g tarkibi C₄H₈O₂ bo'lgan **ikkita modda** ikki qismga ajratildi. Birinchi qism NaHCO₃ bilan 4,48 l (n.sh.) gaz berdi. Ikkinchi qismga NaOH ta'sir ettirilganda spirt hosil bo'ldi va uning 20 % i bug'landi. Bug'langan spirt massasini toping.

**Qoida:** NaHCO₃ bilan faqat **kislota** CO₂ beradi; NaOH bilan **murakkab efir** gidrolizlanib spirt beradi. C₄H₈O₂ — ham kislota (moy kislota), ham efir bo'lishi mumkin.

**Yechim:**
1. n(CO₂) = 0,2 mol → **kislota = 0,2 mol** = 17,6 g (birinchi qism).
2. Ikkinchi qism (efir) = 44 − 17,6 = 26,4 g → n = 26,4/88 = **0,3 mol**.
3. Efir — etilatsetat: CH₃COOC₂H₅ + NaOH → CH₃COONa + **C₂H₅OH** (0,3 mol).
4. Bug'langani = 0,3 · 0,2 = 0,06 mol → m = 0,06 · 46 = **2,76 g**.

**Javob:** B) 2,76

**Tipik xato:** Aralashmani teng ikki qismga bo'lingan deb olish (javob 0,46 g chiqadi, variantda yo'q) — bu yerda har bir qism **bitta modda**; spirtni metanol deb olish.

---

### 25-savol · **A** *(strukturali)*

**Shart:** Benzol halqasida **COOH**, **fenol OH** va **–CH₂CH₂OH** guruhlari bor modda 1 moli mo'l NaOH bilan reaksiyaga kirishganda hosil bo'ladigan organik moddaning molyar massasi?

**Qoida:** NaOH bilan **karboksil** va **fenol** gidroksili reaksiyaga kirishadi; **spirt gidroksili** kirishmaydi. Har bir almashinish massani **+22** ga oshiradi.

**Yechim:**
1. Modda: C₆H₃(COOH)(OH)(CH₂CH₂OH) = C₉H₁₀O₄ → **M = 182**.
2. Ikkita H → Na: 182 + 2 · 22 = **226 g/mol**.

**Javob:** A) 226

**Tipik xato:** Spirt guruhini ham almashtirib 248 (D) ni olish — bu savolning asosiy tuzog'i.

---

### 26-savol · **B**

**Shart:** Berilgan ma'lumotlardan fruktozaga tegishlilarini toping.

**Qoida:** Fruktoza — **ketogeksoza**; halqali shakli **besh a'zoli (furanoza)**; monosaxarid — gidrolizlanmaydi.

**Yechim:** 1) geksoza ✓ · 2) yopiq shakli besh atomli ✓ · 3) aldegid guruhi — glyukozaniki ✗ · 4) gidrolizlanmaydi ✗ · 5) ketoza ✓ · 6) aldoza ✗

**Javob:** B) 1, 2, 5

**Tipik xato:** Fruktoza "kumush ko'zgu" bermaydi degan qoidani halqa o'lchami bilan chalkashtirish.

---

### 27-savol · **B**

**Shart:** 2,4,6-tribromanilin molekulasidagi barcha uglerod atomlarining oksidlanish darajalari yig'indisini toping.

**Qoida:** Molekulada o.d. lar yig'indisi **nolga** teng; H → +1, Br → −1, N → −3.

**Yechim:**
1. C₆H₂Br₃NH₂ = **C₆H₄Br₃N**.
2. ΣC + 4(+1) + 3(−1) + (−3) = 0 → ΣC + 4 − 3 − 3 = 0 → **ΣC = +2**.

**Javob:** B) +2

**Tipik xato:** NH₂ dagi ikkita vodorodni sanamaslik; har bir uglerodni alohida hisoblashga urinib adashish — bu yerda **balans** usuli ancha tez.

---

### 28-savol · **A**

**Shart:** 1-amino-3,4-dimetilpentan nitrit kislota bilan ta'sirlashganda hosil bo'lgan spirt molekulasida nechta **ikkilamchi** uglerod atomi bor?

**Qoida:** R–NH₂ + HNO₂ → R–OH + N₂↑ + H₂O — skelet o'zgarmaydi; ikkilamchi uglerod — **aynan ikkita** uglerod bilan bog'langan.

**Yechim:**
1. Spirt: HOCH₂–CH₂–CH(CH₃)–CH(CH₃)–CH₃ (3,4-dimetilpentanol-1).
2. C1 — birlamchi · **C2 — ikkilamchi** ✓ · C3, C4 — uchlamchi · C5 va metillar — birlamchi.
3. Jami **1 ta**.

**Javob:** A) 1

**Tipik xato:** Uchlamchi atomlarni ham qo'shib 3 deb javob berish; OH birikkan uglerodni ikkilamchi deb hisoblash.

---

### 29-savol · **A**

**Shart:** 3,01·10²¹ ta izopren makromolekulasi 600 g 3,2 % li bromli suvni rangsizlantiradi. Hosil bo'lgan polimerda bromning massa ulushi 32 % bo'lsa, polimerlanish darajasini aniqlang.

**Qoida:** Bromli suv **cheklovchi** — qo'shbog'larning bir qismi reaksiyaga kirishadi; brom massa ulushi mahsulot massasini beradi.

**Yechim:**
1. n(makromolekula) = 3,01·10²¹/6,02·10²³ = **0,005 mol**; m(Br₂) = **19,2 g**.
2. Mahsulot massasi = m(polimer) + 19,2; ω(Br) = 19,2/(m + 19,2) = 0,32 → **m = 40,8 g**.
3. M(makromolekula) = 40,8/0,005 = 8160 → n = 8160/68 = **120**.

**Javob:** A) 120

**Tipik xato:** Brom barcha qo'shbog'lar bilan reaksiyaga kirgan deb hisoblash (n = 24 chiqadi); izopren zvenosini 54 (butadiyen) deb olish.

---

### 30-savol · **A**

**Shart:** Probirkalarda: 1) oqsil, 2) metilamin, 3) glyukoza, 4) sirka kislota. Moddalarni aniqlab beruvchi reagentlarni toping.

**Qoida:** CuSO₄ + NaOH — oqsilga **biuret** (binafsha), glyukozaga **ko'k eritma/qizil cho'kma**; lakmus — metilaminni ko'k, sirka kislotani qizil qiladi.

**Javob:** A) 1 va 3 − CuSO₄ + NaOH; 2 va 4 − lakmus

**Tipik xato:** Aminni bromli suv bilan aniqlashga urinish (B varianti) — aminlar bromli suvni rangsizlantirmaydi (anilin esa cho'kma beradi).

---

### 31-savol · **B** *(strukturali)*

**Shart:** (C₁₇H₃₃COO)₃C₃H₅ + 3H₂O → 3X + glitserin. Jarayon va X modda haqida to'g'ri fikrni tanlang.

**Qoida:** C₁₇H₃₃COOH — **olein kislota** (bitta C=C); suv bilan gidroliz — sovunlanish **emas** (sovunlanish ishqor bilan).

**Yechim:**
1. A) olein qoldiqlari **suyuq** yog'larda ✗
2. B) olein kislota bromli suvni rangsizlantiradi, palmitin esa yo'q ✓
3. C) C=C va COOH uglerodlari **sp²** ✗
4. D) suv bilan gidroliz — sovunlanish emas ✗

**Javob:** B

**Tipik xato:** C₁₇H₃₃ va C₁₇H₃₅ ni farqlamaslik (olein/stearin); har qanday yog' gidrolizini sovunlanish deb atash.

---

### 32-savol · **D** *(rasmli)*

**Shart:** Tajribada organik modda CuO bilan qizdirilgan; ohakli suv loyqalandi va oq (havorang) CuSO₄ ko'kardi. Asosiy xulosa nima?

**Qoida:** Ohakli suvning loyqalanishi — **CO₂** (uglerod bor); oq CuSO₄ ning ko'karishi — **suv** (vodorod bor).

**Javob:** D) organik modda tarkibida uglerod va vodorod elementlari bor

**Tipik xato:** Tajribani spirtning oksidlanishi deb talqin qilish — bu **sifat tahlili** (Libix usuli).

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy sxema:**
\`\`\`
n-pentan --termik kreking-->
   ├─ ... → 2,3-dixlorpentan → X → Y + Z
   ├─ K --H2O, H2O2--> T --CuO--> E --Ag2O, NH3--> Y
   └─ C2H6 --t°, −H2--> L --H2O, Hg2+--> M --Cu(OH)2, −Cu2O--> Z
\`\`\`
X — alkin, T — birlamchi spirt. Variantlar: A) 8 B) 9 C) 10 D) 11 E) 12 F) 13

**Umumiy yechim:**
1. Kreking: C₅H₁₂ → **C₃H₆ (K)** + **C₂H₆** ✓ (sxemadagi ikkinchi va uchinchi tarmoqlar)
2. 2,3-dixlorpentan + 2KOH(spirt) → **X = pentin-2** (CH₃–C≡C–C₂H₅).
3. X ning oksidlanishi: pentin-2 → **CH₃COOH + C₂H₅COOH** → bular Y va Z.
4. Uchinchi tarmoq: C₂H₆ → **C₂H₂ (L)** → Kucherov (H₂O, Hg²⁺) → **CH₃CHO (M)** → Cu(OH)₂ → **Z = CH₃COOH**.
5. Demak **Y = C₂H₅COOH** (propion kislota); ikkinchi tarmoq buni tasdiqlaydi:
   K = propen → (H₂O, H₂O₂ — anti-Markovnikov) **T = propanol-1** (birlamchi spirt ✓) → CuO → **E = propanal** → Ag₂O/NH₃ → **Y = propion kislota** ✓

---

### 33-savol · **D**

**Yechim:** Y = C₂H₅COOH = **C₃H₆O₂** → 3 + 6 + 2 = **11 ta atom**.

**Javob:** D) 11

**Tipik xato:** Y ni sirka kislota deb olish (8 chiqadi) — tarmoqlarni almashtirish.

---

### 34-savol · **A**

**Yechim:** Z = CH₃COOH = **C₂H₄O₂** → 2 + 4 + 2 = **8 ta atom**.

**Javob:** A) 8

**Tipik xato:** Z ni atsetaldegid (M) deb olish (7 ta atom).

---

### 35-savol · **C**

**Yechim:** E = propanal **C₃H₆O** → 3 + 6 + 1 = **10 ta atom**.

**Javob:** C) 10

**Tipik xato:** E ni propanol (12 atom) deb olish — CuO bilan oksidlanish **aldegid** beradi.

---

## III QISM — yozma topshiriqlar (36–40)

---

### 36-topshiriq

**Shart:** Kadmiy nitrat va temirdan iborat 97,6 g aralashma ochiq havoda qizdirildi; **aralashma massasi o'zgarmadi** (temir faqat Fe₂O₃ gacha oksidlandi), natijada faqat metall oksidlari qoldi. Dastlabki aralashmadagi tuzning massasini (g) aniqlang.

**Qoida:** Nitratning parchalanishi massani **kamaytiradi**, temirning oksidlanishi **oshiradi**; massa o'zgarmasligi — bu ikkisi **teng** degani.

**Yechim:** Cd(NO₃)₂ — a mol, Fe — b mol.
1. 2Cd(NO₃)₂ → 2CdO + 4NO₂↑ + O₂↑ → kamayish = a(236 − 128) = **108a**.
2. 4Fe + 3O₂ → 2Fe₂O₃ → ortish = 80b − 56b = **24b**.
3. 108a = 24b → **b = 4,5a**.
4. Massa: 236a + 56 · 4,5a = 236a + 252a = 488a = 97,6 → **a = 0,2 mol**.
5. m(Cd(NO₃)₂) = 0,2 · 236 = **47,2 g**.

**Javob:** 47,2 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Nitratning parchalanish tenglamasi (NO₂ va O₂ bilan) | 0,6 |
| Temirning oksidlanish tenglamasi | 0,4 |
| "Massa o'zgarmadi" sharti ikki o'zgarishning tengligi sifatida yozilgan | 0,8 |
| b = 4,5a munosabati | 0,6 |
| a = 0,2 mol | 0,4 |
| m = 47,2 g | 0,4 |

**Tipik xato:** Temirni Fe₃O₄ gacha oksidlash; nitrat parchalanishida kislorodni unutish; "massa o'zgarmadi" ni "reaksiya bo'lmadi" deb tushunish.

---

### 37-topshiriq

**Shart:** CH₃CH₂COCH₂CH₃ + MnO₄⁻ + H⁺ → CH₃CH₂COO⁻ + CH₃COO⁻ + Mn²⁺ + H₂O — yarim reaksiyalar usulida tenglashtiring, barcha koeffitsiyentlar yig'indisini toping.

**Qoida:** Ketonning oksidlanishida karbonil guruhining **ikki yonidagi** C–C bog'i uziladi; yarim reaksiyada zaryad H⁺ va e⁻ bilan tenglashtiriladi.

**Yechim:**
1. **Oksidlanish:** C₅H₁₀O + 3H₂O − 6e⁻ → C₂H₅COO⁻ + CH₃COO⁻ + 8H⁺ ⎸ ×5
2. **Qaytarilish:** MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O ⎸ ×6
3. **5C₅H₁₀O + 6MnO₄⁻ + 8H⁺ → 5C₂H₅COO⁻ + 5CH₃COO⁻ + 6Mn²⁺ + 9H₂O**
   *(zaryad: −6 + 8 = +2 = −10 + 12 ✓ · O: 29 = 29 ✓ · H: 58 = 58 ✓)*
4. Yig'indi = 5 + 6 + 8 + 5 + 5 + 6 + 9 = **44**.

**Javob:** 44

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Oksidlanish yarim reaksiyasi (suv va H⁺ bilan) to'g'ri | 0,8 |
| 6 ta elektron to'g'ri hisoblangan | 0,6 |
| Qaytarilish yarim reaksiyasi | 0,5 |
| Umumiy tenglama tenglashtirilgan | 0,8 |
| Yig'indi 44 | 0,5 |

**Tipik xato:** Elektronlar sonini uglerodlarning o.d. si orqali chalkash hisoblash; H⁺ va H₂O ni qisqartirmaslik.

---

### 38-topshiriq

**Shart:** Mis, uglerod va oltingugurtdan iborat 1,6 mol aralashma teng ikki qismga bo'lindi. 1-qism mo'l kislorodda yondirildi — 0,7 mol gazlar hosil bo'ldi. 2-qism konsentrlangan sulfat kislotada eritildi — 136,8 g gaz ajraldi. Olingan karbonat angidridning **umumiy** miqdorini (mol) toping.

**Qoida:** Yonishda CuO — **qattiq**, CO₂ va SO₂ — gaz. Kons. H₂SO₄ bilan: Cu → SO₂ (1), C → CO₂ + 2SO₂, S → 3SO₂.

**Yechim:** Har bir qism 0,8 mol: Cu — u, C — c, S — s.
1. 1-qism gazlari: c + s = **0,7** → **u = 0,1 mol**.
2. 2-qism gazlari: SO₂ = 0,1 + 2c + 3s; CO₂ = c.
   64(0,1 + 2c + 3s) + 44c = 136,8 → 172c + 192s = 130,4.
3. s = 0,7 − c → −20c = −4 → **c = 0,2**, **s = 0,5**.
4. CO₂: 1-qismdan 0,2 + 2-qismdan 0,2 = **0,4 mol**.

**Javob:** 0,4 mol

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Yonishda CuO qattiq ekani → u = 0,1 mol | 0,7 |
| Kons. kislota bilan uchala reaksiya to'g'ri yozilgan | 0,8 |
| Gazlar massasi tenglamasi tuzilgan | 0,8 |
| c = 0,2 va s = 0,5 | 0,5 |
| Umumiy CO₂ = 0,4 mol (ikkala qism) | 0,4 |

**Tipik xato:** Yonishda CuO ni gaz deb sanash; uglerod kons. kislota bilan faqat CO₂ beradi deb olish (2 mol SO₂ ham chiqadi); javobni bitta qism uchun berish.

---

### 39-topshiriq

**Shart:** Soch va jun tolasi kaliy bilan qizdirilganda X va Y hosil bo'ladi. Filtratga FeSO₄ qo'shilib qizdirilgach (X temir(II) sulfat bilan ta'sirlashadi), so'ng FeCl₃ va HCl qo'shilganda **berlin lazuri** cho'kmasi hosil bo'ldi — bu azot borligini isbotlaydi. X ning formulasini yozing.

**Qoida:** Organik moddadagi azot natriy/kaliy bilan **sianidga** aylanadi: N + C + K → KCN. Keyin: FeSO₄ + 6KCN → K₄[Fe(CN)₆]; 3K₄[Fe(CN)₆] + 4FeCl₃ → Fe₄[Fe(CN)₆]₃↓ (berlin lazuri).

**Javob:** X = **KCN** (kaliy sianid)

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Azotning sianidga aylanishi tushuntirilgan | 1,0 |
| FeSO₄ bilan sariq qon tuzi hosil bo'lishi | 1,0 |
| Berlin lazuri reaksiyasi | 0,7 |
| X = KCN | 0,5 |

**Tipik xato:** X ni K₂S deb olish (u oltingugurtni aniqlash uchun, qo'rg'oshin tuzi bilan qora cho'kma beradi).

---

### 40-topshiriq

**Shart:** A va B to'yingan monokarbon kislotalaridan (A gomologik qatorda avvalroq) iborat 48 g aralashma 160 g 28 % li KOH bilan ta'sirlashadi. Xuddi shunday 48 g aralashma "kumush ko'zgu" reaksiyasiga kirishdi va reaksiyadan keyingi moddalar 200 g 24 % li NaOH bilan ta'sirlashdi (nordon tuz hosil bo'lmagan). A kislotaning massasini toping.

**Qoida:** Karbon kislotalardan **faqat chumoli kislota** kumush ko'zgu beradi (unda aldegid guruhi bor) va u **karbonat kislotagacha** oksidlanadi → keyin **2 mol** ishqor talab qiladi.

**Yechim:**
1. n(KOH) = 44,8/56 = **0,8 mol** = kislotalarning umumiy miqdori.
2. n(NaOH) = 48/40 = **1,2 mol**.
3. HCOOH — a, B — b: a + b = 0,8; **2a + b = 1,2** → **a = 0,4**, **b = 0,4**.
4. Massa: 46 · 0,4 + M(B) · 0,4 = 48 → M(B) = **74** (propion kislota).
5. **m(A) = 0,4 · 46 = 18,4 g**.

**Javob:** 18,4 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| A ning chumoli kislota ekani asoslangan | 0,7 |
| n(KOH) = 0,8 mol = kislotalar miqdori | 0,5 |
| Oksidlanishdan keyin HCOOH → H₂CO₃ (2 mol ishqor) | 0,8 |
| Sistema yechilib a = 0,4 | 0,7 |
| m(A) = 18,4 g | 0,5 |

**Tipik xato:** Ikkala kislotani ham 1 mol NaOH talab qiladi deb olish (sistema yechilmaydi); B ni sirka kislota deb taxmin qilish.

---

## IV QISM — kengaytirilgan yozma topshiriqlar (41–43)

---

### 41-topshiriq *(6 ball — 4 banddan iborat)*

**Shart:** Zichliklari 1,2 g/ml va 1,5 g/ml bo'lgan CuSO₄ eritmalari **teng massada** aralashtirilganda (hajm o'zgarmagan) 300 ml 30 % li "Eritma 1" hosil bo'ldi. Eritma 6,7 A tok bilan elektroliz qilindi; natijada **kislota miqdori (mol) tuznikidan 2 marta ko'p** bo'lgan eritma olindi. Unga 20 % li NaOH qo'shilganda **neytral** "Eritma 2" olindi (Eritma 2 elektroliz qilinsa katodda faqat vodorod ajraladi).
1) "Eritma 1" necha soat elektroliz qilingan? 2) Qo'shilgan NaOH eritmasining massasi? 3) Tarkibi **Glauber tuzi** bilan bir xil eritma olish uchun necha gramm suv bug'latilishi kerak? 4) Sulfat ionlarini to'liq cho'ktirish uchun BaCl₂ massasi?

**Qoida:** CuSO₄ eritmasining elektrolizi: **CuSO₄ + H₂O → Cu↓ + H₂SO₄ + ½O₂↑**. "Katodda faqat vodorod" — eritmada Cu²⁺ **qolmagan**, demak NaOH uni to'liq cho'ktirgan.

**Yechim:**

**Dastlabki hisob.** Teng massa m dan: m/1,2 + m/1,5 = 300 → 1,5m = 300 → **m = 200 g** → Eritma 1 = **400 g**, CuSO₄ = 120 g = **0,75 mol**.

**1)** Elektrolizga x mol CuSO₄ uchragan bo'lsa: H₂SO₄ = x, qolgan tuz = 0,75 − x.
   x = 2(0,75 − x) → **x = 0,5 mol** → H₂SO₄ = 0,5; CuSO₄ qoldi = 0,25.
   n(e⁻) = 2x = **1 mol** → Q = 96500 C → t = 96500/6,7 = 14 403 s = **4 soat**.

**2)** NaOH: kislotani neytrallashga 2 · 0,5 = 1,0 mol; qolgan CuSO₄ ni cho'ktirishga 2 · 0,25 = 0,5 mol → jami **1,5 mol** = 60 g → eritma = 60/0,2 = **300 g**.

**3)** Eritma 1 elektrolizdan keyin: 400 − m(Cu) − m(O₂) = 400 − 32 − 8 = **360 g**.
   Eritma 2 = 360 + 300 − m(Cu(OH)₂) = 660 − 24,5 = **635,5 g**; unda Na₂SO₄ = 0,75 mol = **106,5 g**, suv = **529 g**.
   Glauber tuzi **Na₂SO₄·10H₂O** tarkibi: 0,75 mol tuzga 7,5 mol (135 g) suv.
   Bug'latiladigan suv = 529 − 135 = **394 g**.

**4)** Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl → n(BaCl₂) = 0,75 mol → m = 0,75 · 208 = **156 g**.

**Javob:** 1) 4 soat · 2) 300 g · 3) 394 g · 4) 156 g

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Teng massalardan m = 200 g va Eritma 1 = 400 g | 0,6 |
| Elektroliz tenglamasi (Cu, H₂SO₄, O₂) | 0,6 |
| "Kislota tuzdan 2 marta ko'p" shartidan x = 0,5 mol | 0,8 |
| **1-band:** t = 4 soat | 0,6 |
| NaOH ikki vazifasi (neytrallash + cho'ktirish) ko'rsatilgan | 0,8 |
| **2-band:** 300 g | 0,5 |
| Eritma 2 massasi (cho'kma ayirilgan) 635,5 g | 0,7 |
| Glauber tuzi tarkibi (10 mol suv) qo'llangan | 0,6 |
| **3-band:** 394 g | 0,4 |
| **4-band:** 156 g | 0,4 |

**Tipik xato:** Cu(OH)₂ cho'kmasini eritmada qoldirish; Glauber tuzini Na₂SO₄·7H₂O deb olish; sulfat ionlarini faqat qolgan CuSO₄ dan sanash (barcha SO₄²⁻ saqlanadi — 0,75 mol).

---

### 42-topshiriq *(6 ball — 7 ta reaksiya)*

**Shart:** Reaksiyalarni tugallang va tenglashtiring; 1-, 2-, 5-reaksiyalardagi organik mahsulotlarni nomlang.

**Yechim:**

**1.** 1,2-dimetilsiklopropan + H₂ →(Ni, t°) halqa uziladi:
   CH₃–CH(CH₃)–CH₂–CH₃ → **2-metilbutan**
   *(Halqa kam o'rin olgan uglerodlar orasidagi bog'dan uziladi. Agar ikki metilli uglerodlar orasidagi bog' uzilsa, n-pentan chiqadi — bu javobni ham asoslanishi bilan qabul qiling.)*

**2.** 3CH₃–CH=CH–CH₃ + 2KMnO₄ + 4H₂O → 3CH₃–CH(OH)–CH(OH)–CH₃ + 2MnO₂↓ + 2KOH
   Mahsulot: **butan-2,3-diol** (Vagner reaksiyasi, neytral muhit)

**3.** 5CH₃–C≡C–CH₃ + 6KMnO₄ + 9H₂SO₄ → 10CH₃COOH + 6MnSO₄ + 3K₂SO₄ + 4H₂O
   *(Uchbog' uzilib ikkita sirka kislota beradi.)*

**4.** CH₂OH(CHOH)₄CHO + 2[Ag(NH₃)₂]OH → CH₂OH(CHOH)₄COONH₄ + 2Ag↓ + 3NH₃ + H₂O

**5.** 2CH₃–CH(CH₃)–CH₂–COONa + 2H₂O →(elektroliz) (CH₃)₂CH–CH₂–CH₂–CH(CH₃)₂ + 2CO₂↑ + H₂↑ + 2NaOH
   Mahsulot: **2,5-dimetilgeksan** (Kolbe sintezi)

**6.** C₆H₆ + CH₃–CH=CH₂ →(AlCl₃) C₆H₅–CH(CH₃)₂ (**kumol**, izopropilbenzol — Markovnikov bo'yicha)

**7.** CH₃CCl₂CH₂CH₃ + 2KOH(suv) → CH₃–CO–CH₂CH₃ + 2KCl + H₂O
   *(Gem-dihalogenid gidrolizi — **butanon**.)*

| Baholash mezoni (6 ball) | Ball |
|---|---|
| 1-reaksiya: halqaning uzilishi va nomi | 0,9 |
| 2-reaksiya: Vagner, diol va MnO₂, nomi | 1,0 |
| 3-reaksiya: uchbog'ning uzilishi, tenglashtirish | 1,0 |
| 4-reaksiya: ammoniyli tuz va 2Ag | 0,8 |
| 5-reaksiya: Kolbe, nomi 2,5-dimetilgeksan | 1,0 |
| 6-reaksiya: kumol (Markovnikov) | 0,7 |
| 7-reaksiya: keton hosil bo'lishi | 0,6 |

**Tipik xato:** 2-reaksiyani kislotali muhitdagidek (parchalanish) yozish; 5-da Kolbe mahsulotini oktan deb olish; 7-da ikkita OH li beqaror spirt yozib qo'yish (u ketonga aylanadi); 6-da propilbenzol deb nomlash.

---

### 43-topshiriq *(6 ball — sifat tahlili)*

**Shart:** 1–5-probirkalarda noma'lum eritmalar. 1-ga 3-dan quyilganda avval cho'kma, keyin erib ketdi. 1-probirkadagi kationning tuzilishi **[Ar]3d¹⁰4s⁰**, anioni esa bariy kationi bilan kislotalarda erimaydigan **oq cho'kma** beradi. 3+4 → **metall oksidi** cho'kdi (eritmada NaNO₃), cho'kma 6-probirkaga solindi. 3+5 → ajralgan **gaz** 6-probirkaga yuttirilganda cho'kma **erib ketdi**. 4+5 → oq pag'asimon cho'kma. 2+4 → sarg'ish cho'kma. 2+3 → "ohak suti".

**Qoida:** [Ar]3d¹⁰4s⁰ = **Zn²⁺**; bariy bilan kislotada erimaydigan oq cho'kma — **SO₄²⁻**; Ag₂O ni eritadigan gaz — **NH₃**; AgCl — oq pag'asimon, AgBr — sarg'ish; "ohak suti" — **Ca(OH)₂**.

**Yechim — moddalar:**
**1 = ZnSO₄** · **2 = CaBr₂** · **3 = NaOH** · **4 = AgNO₃** · **5 = NH₄Cl**

**1) Molekulyar tenglamalar:**
- ZnSO₄ + BaCl₂ → BaSO₄↓ + ZnCl₂
- ZnSO₄ + 2NaOH → Zn(OH)₂↓ + Na₂SO₄ · Zn(OH)₂ + 2NaOH(mo'l) → Na₂[Zn(OH)₄]
- 2AgNO₃ + 2NaOH → Ag₂O↓ + 2NaNO₃ + H₂O
- NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O
- AgNO₃ + NH₄Cl → AgCl↓ + NH₄NO₃
- 2AgNO₃ + CaBr₂ → 2AgBr↓ + Ca(NO₃)₂
- CaBr₂ + 2NaOH → Ca(OH)₂↓ + 2NaBr ("ohak suti")

**3) Qisqa ionli tenglamalar:**
- 2+3: Ca²⁺ + 2OH⁻ → Ca(OH)₂↓
- 2+4: Ag⁺ + Br⁻ → AgBr↓
- 3+4: 2Ag⁺ + 2OH⁻ → Ag₂O↓ + H₂O
- 3+5: NH₄⁺ + OH⁻ → NH₃↑ + H₂O
- 4+5: Ag⁺ + Cl⁻ → AgCl↓

**4)** 6-probirkadagi Ag₂O ammiakda erib **[Ag(NH₃)₂]OH** beradi — bu **aldegidlar** sinfi uchun sifat reaksiyasi ("kumush ko'zgu"). Gomologik qatorning **ikkinchi** vakili — **atsetaldegid**:
CH₃CHO + 2[Ag(NH₃)₂]OH → CH₃COONH₄ + 2Ag↓ + 3NH₃ + H₂O

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Kation Zn²⁺ va anion SO₄²⁻ aniqlangan (1 = ZnSO₄) | 0,8 |
| 3 = NaOH (amfoter gidroksidning qayta erishi) | 0,6 |
| 4 = AgNO₃ (Ag₂O cho'kmasi va NaNO₃) | 0,6 |
| 5 = NH₄Cl (NH₃ gazi va AgCl) | 0,7 |
| 2 = CaBr₂ (AgBr sarg'ish, "ohak suti") | 0,7 |
| Barcha molekulyar tenglamalar | 1,2 |
| Qisqa ionli tenglamalar | 0,8 |
| [Ag(NH₃)₂]OH — aldegidlar uchun sifat reaksiyasi | 0,3 |
| Atsetaldegid tenglamasi (ikkinchi vakil) | 0,3 |

**Tipik xato:** [Ar]3d¹⁰4s⁰ ni Cu⁺ deb olish (sulfat bilan mos kelmaydi); AgCl va AgBr rangini almashtirish; "ikkinchi vakil" deb formaldegidni olish (**birinchisi** — formaldegid).

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | A* | 16 | D | 31 | B |
| 2 | A | 17 | C | 32 | D |
| 3 | D | 18 | A | 33 | D (11) |
| 4 | D* | 19 | A | 34 | A (8) |
| 5 | C | 20 | D | 35 | C (10) |
| 6 | B | 21 | 1,44 g* | 36 | 47,2 g |
| 7 | C | 22 | A | 37 | 44 |
| 8 | D | 23 | C | 38 | 0,4 mol |
| 9 | D | 24 | B | 39 | KCN |
| 10 | B | 25 | A | 40 | 18,4 g |
| 11 | B | 26 | B | 41 | 4 soat · 300 g · 394 g · 156 g |
| 12 | C | 27 | B | 42 | 7 ta reaksiya |
| 13 | A | 28 | A | 43 | ZnSO₄ · CaBr₂ · NaOH · AgNO₃ · NH₄Cl |
| 14 | C | 29 | A | | |
| 15 | C | 30 | A | | |

\`*\` — nuqsonli savollar: **1** (A va C bir xil qiymat), **4** (to'g'ri moslash variantlarda yo'q), **21** (hisoblangan 1,44 g variantlarda yo'q). Izohlarga qarang.
`,tt=`# Sertifikat — 25.01.2025, I smena

**Manba:** \`Milliy sertifikat .pdf\`, 22–25-betlar · 43 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–40 qisqa yozma · 41–43 kengaytirilgan yozma

> Bu variantda manbaning o'zida 36–41 topshiriqlarning javoblari qavs ichida berilgan —
> quyidagi yechimlar o'sha javoblar bilan **to'liq mos tushdi** (tekshirilgan).

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **A**

**Shart:** Kimyoviy xossalarni saqlaydigan strukturaviy birlikni belgilang.

**Qoida:** Moddaning kimyoviy xossalarini saqlab qoladigan **eng kichik zarracha — molekula** (molekulyar tuzilishli moddalarda).

**Javob:** A) molekula

**Tipik xato:** Atomni tanlash — atom **elementning** xossalarini saqlaydi, moddaniki emas.

---

### 2-savol · **B**

**Shart:** Linol kislotaning formulasini ko'rsating.

**Qoida:** Linol kislota — ikkita qo'shbog'li to'yinmagan kislota: **C₁₇H₃₁COOH = C₁₈H₃₂O₂**; linolen (uchta qo'shbog') — C₁₈H₃₀O₂.

**Javob:** B) C₁₈H₃₂O₂

**Tipik xato:** Linol va linolen kislotalarni almashtirish (C varianti).

---

### 3-savol · **A**

**Shart:** 1/55 g marganes oksidida 5/515 g Mn bor. Oksid formulasini aniqlang.

**Qoida:** Mollar nisbati = massalarni atom massalariga bo'lish.

**Yechim:**
1. m(Mn) = 5/515 = **1/103 g**; m(O) = 1/55 − 1/103 = (103 − 55)/5665 = **48/5665 g**.
2. n(Mn) = 1/(103·55) = **1/5665**; n(O) = 48/(5665·16) = **3/5665**.
3. Mn : O = **1 : 3** → MnO₃.

**Javob:** A) MnO₃

**Tipik xato:** 1/55 ni marganes massasi deb olish; kislorod massasini ayirmasdan hisoblash.

---

### 4-savol · **B**

**Shart:** A + B = C + D; dastlabki konsentratsiyalar 6 va 4 mol/l. K = 1 bo'lsa, muvozanatda B ning konsentratsiyasini toping.

**Qoida:** \`K = [C][D]/([A][B])\`; reaksiyaga kirgan miqdorlar teng (1 : 1 : 1 : 1).

**Yechim:**
1. x mol/l reaksiyaga kirsin: x²/((6−x)(4−x)) = 1.
2. x² = 24 − 10x + x² → 10x = 24 → **x = 2,4**.
3. [B] = 4 − 2,4 = **1,6 mol/l**.

**Javob:** B) 1,6

**Tipik xato:** x ni (2,4) javob deb belgilash — u **reaksiyaga kirgan** miqdor.

---

### 5-savol · **A**

**Shart:** 100 g 18 % li eritmadan 0,9 % li eritma hosil qilish uchun necha gramm suv qo'shish kerak?

**Yechim:** m(modda) = 18 g → yangi eritma = 18/0,009 = 2000 g → suv = **1900 g**.

**Javob:** A) 1900

**Tipik xato:** 2000 (C) — yangi eritmaning massasi, qo'shilgan suv emas.

---

### 6-savol · **B**

**Shart:** Metall va metalmas (atom massalari) 2 g/mol ga farq qiluvchi tuzni aniqlang.

**Qoida:** Tuzdagi **metallarning** umumiy massasini **nometall** (kislorodsiz) bilan emas, formuladagi atomlar massalari bilan solishtiramiz.

**Yechim:**
1. LiMnO₄: metallar Li + Mn = 7 + 55 = **62**; nometall O₄ = **64** → farq **2** ✓
2. K₂SO₄: 78 va 96 → 18 ✗ · NaNO₃: 23 va 62 → 39 ✗ · K₂Cr₂O₇: 182 va 112 → 70 ✗

**Javob:** B) LiMnO₄

**Tipik xato:** Faqat bitta atomning massasini solishtirish; xromni nometall deb olish.

---

### 7-savol · **B**

**Shart:** ²¹⁰₈₆Rn → A + x·⁴₂α + y·⁰₊₁β. 31,5 mg radon parchalanganda 54,18·10¹⁹ ta beta zarracha hosil bo'ldi. A modda tarkibidagi **protonlar va elektronlar yig'indisini** toping (Rn va A — izotonlar).

**Qoida:** α-zarracha: A −4, Z −2; **pozitron (⁰₊₁β)**: A o'zgarmaydi, Z **−1**. Izotonlar — **neytronlari teng** yadrolar.

**Yechim:**
1. n(Rn) = 0,0315/210 = **1,5·10⁻⁴ mol**; n(β) = 54,18·10¹⁹/6,02·10²³ = **9·10⁻⁴ mol** → **y = 6**.
2. Rn ning neytronlari = 210 − 86 = **124**.
3. A: massa = 210 − 4x; zaryad = 86 − 2x − 6; neytronlar = (210 − 4x) − (80 − 2x) = **130 − 2x**.
4. 130 − 2x = 124 → **x = 3** → Z(A) = 86 − 6 − 6 = **74**.
5. Neytral atomda protonlar = elektronlar = 74 → yig'indi = **148**.

**Javob:** B) 148

**Tipik xato:** Pozitron chiqishida Z **ortadi** deb olish; izoton (neytronlar teng) va izotop (protonlar teng) tushunchalarini almashtirish.

---

### 8-savol · **A** *(jadvalli)*

**Shart:** Musbat zarrachani aniqlang: 1) X — 20 p, 18 e · 2) Y — 9 p, 10 e · 3) Z — 18 p, 19 e · 4) A — 8 p, 10 e

**Qoida:** Zaryad = protonlar − elektronlar.

**Yechim:** X: +2 ✓ · Y: −1 · Z: −1 · A: −2

**Javob:** A) 1

**Tipik xato:** Protonlar soni ko'p bo'lsa ham "elektron ko'p — musbat" deb chalkashish.

---

### 9-savol · **B**

**Shart:** Ammoniy dixromat parchalanganda 0,1 mol gaz ajraldi; qattiq qoldiq yetarli (0,2 mol) NaOH bilan reaksiyaga kirgizildi. Hosil bo'lgan tuz massasini aniqlang.

**Qoida:** (NH₄)₂Cr₂O₇ →(t) Cr₂O₃ + N₂↑ + 4H₂O ("vulqon" tajribasi); Cr₂O₃ — **amfoter**: Cr₂O₃ + 2NaOH → 2NaCrO₂ + H₂O.

**Yechim:**
1. n(N₂) = 0,1 mol → n(Cr₂O₃) = **0,1 mol**.
2. NaOH = 0,2 mol — aynan yetarli → NaCrO₂ = **0,2 mol**.
3. M(NaCrO₂) = 107 → m = **21,4 g**.

**Javob:** B) 21,4

**Tipik xato:** Qoldiqni CrO₃ yoki Cr(OH)₃ deb olish; NaCrO₂ o'rniga Na₂CrO₄ yozish (bu oksidlovchi muhitda bo'ladi).

---

### 10-savol · **D**

**Shart:** Kislorod bo'yicha reaksiya tezligi 0,8 mol/(l·min). 2,5 l idishda kislorod 128 g dan 16 g gacha kamaydi. Reaksiya necha **sekund** davom etgan?

**Yechim:**
1. Δn = (128 − 16)/32 = **3,5 mol** → Δc = 3,5/2,5 = **1,4 mol/l**.
2. t = 1,4/0,8 = 1,75 min = **105 s**.

**Javob:** D) 105

**Tipik xato:** Minutni sekundga aylantirmaslik (1,75); hajmga bo'lishni unutish.

---

### 11-savol · **A**

**Shart:** Qaysi asos **asosli tuz** hosil qilmaydi?

**Qoida:** Asosli tuzda gidroksoguruh qoladi → asos tarkibida **kamida ikkita OH** bo'lishi shart.

**Yechim:** KOH da bitta OH — kislota bilan faqat o'rta tuz beradi ✓

**Javob:** A) KOH

**Tipik xato:** Al(OH)₃ ni amfoter bo'lgani uchun tanlash — u ham asosli tuz hosil qiladi (AlOHCl₂).

---

### 12-savol · **B**

**Shart:** CuSO₄ eritmasi inert elektrodlarda elektroliz qilinganda tuzning konsentratsiyasi 12,8 % gacha kamaydi, kislotaniki 4,9 % ga yetdi. Dastlabki tuz konsentratsiyasini (%) toping.

**Qoida:** CuSO₄ + H₂O → Cu↓ + H₂SO₄ + ½O₂↑ — eritmadan **80 g/mol** (Cu 64 + O 16) chiqib ketadi.

**Yechim:** Parchalangan CuSO₄ — x mol; oxirgi eritma massasi — m.
1. 98x = 0,049m → **m = 2000x**.
2. Dastlabki massa = m + 80x = **2080x**.
3. Dastlabki CuSO₄ = 0,128m + 160x = 256x + 160x = **416x**.
4. ω₀ = 416x/2080x = **0,2 = 20 %**.

**Javob:** B) 20

**Tipik xato:** Kislorodni hisobga olmaslik; dastlabki tuzni faqat qolgan tuz deb olish.

---

### 13-savol · **C**

**Shart:** 168 g 10 % li KOH eritmasining dissotsilanishidan hosil bo'lgan kation molini toping (α = 90 %).

**Yechim:** m(KOH) = 16,8 g → n = **0,3 mol** → K⁺ = 0,3 · 0,9 = **0,27 mol**.

**Javob:** C) 0,27

**Tipik xato:** Kation va anionni qo'shib 0,54 (A) deb yozish — savol faqat **kation** ni so'raydi.

---

### 14-savol · **C**

**Shart:** Kalsiy pirofosfat, kalsiy digidroortofosfat va magniy gidroksokarbonat tarkibidagi σ-bog'lar soni π-bog'lar sonidan necha marta ko'p?

**Qoida:** Ca₂P₂O₇ · Ca(H₂PO₄)₂ · (MgOH)₂CO₃. Fosfor V valentli (bitta P=O), karbonatda bitta C=O.

**Yechim:**
1. **Ca₂P₂O₇:** P–O σ = 8 (ko'prik kislorod ikki marta), π = 2; ion Ca–O = 4 → σ jami **12**.
2. **Ca(H₂PO₄)₂:** har anionda 4 P–O + 2 O–H = 6 σ, 1 π → 12 σ, 2 π; ion Ca–O = 2 → σ jami **14**.
3. **(MgOH)₂CO₃:** CO₃²⁻ da 3 σ + 1 π; 2 ta O–H = 2 σ; ion Mg–O = 4 → σ jami **9**, π 1.
4. σ = 12 + 14 + 9 = **35**; π = 2 + 2 + 1 = **5** → 35/5 = **7**.

**Javob:** C) 7

> **Izoh:** bu savolda **ion bog'lar ham σ qatoriga** qo'shilgan; ularsiz nisbat 5 chiqadi
> (variantlarda yo'q). Demak kalit ion bog'larni σ deb sanagan.

**Tipik xato:** Pirofosfatdagi ko'prik kislorodni bir marta sanash; digidrofosfatdagi O–H bog'larini unutish.

---

### 15-savol · **B**

**Shart:** Seziy nitrit gidrolizini **sekinlashtirish** uchun nima qilish kerak?

**Qoida:** Gidroliz — qaytar jarayon: NO₂⁻ + H₂O ⇄ HNO₂ + OH⁻. **Suyultirish gidrolizni kuchaytiradi**, konsentratsiyani oshirish esa susaytiradi; nordon muhitli tuzlar (mis nitrat, rux xlorid) gidrolizni **kuchaytiradi**.

**Javob:** B) seziy nitrit (ya'ni tuz konsentratsiyasini oshirish)

**Tipik xato:** Suv qo'shishni tanlash — bu teskari ta'sir qiladi.

---

### 16-savol · **D**

**Shart:** H₂S va O₂ aralashmasi 10 g **to'liq** reaksiyaga kirishdi. Hosil bo'lgan **oddiy modda** massasini aniqlang.

**Qoida:** Kislorod yetishmaganda: **2H₂S + O₂ → 2S↓ + 2H₂O**; oddiy modda — oltingugurt. "To'liq reaksiyaga kirishdi" → nisbat aniq 2 : 1.

**Yechim:**
1. H₂S = 2a, O₂ = a: 68a + 32a = 100a = 10 → **a = 0,1**.
2. n(S) = 2a = 0,2 mol → m = **6,4 g**.

**Javob:** D) 6,4

**Tipik xato:** To'liq yonish tenglamasini (SO₂ bilan) yozish — unda oddiy modda umuman bo'lmaydi.

---

### 17-savol · **B**

**Shart:** Etan, propin va propilen **6 : 4 : 7 massa nisbatda**. 255 g aralashmadagi propilen hajmini (l, n.sh.) aniqlang.

**Yechim:**
1. Ulushlar yig'indisi 17 → bitta ulush = 255/17 = **15 g**.
2. m(C₃H₆) = 7 · 15 = **105 g** → n = 105/42 = **2,5 mol**.
3. V = 2,5 · 22,4 = **56 l**.

**Javob:** B) 56

**Tipik xato:** Nisbatni mol nisbati deb olish; propilenni C₃H₄ (propin) bilan almashtirish.

---

### 18-savol · **B**

**Shart:** C va H atomlari **1 : 18** nisbatda bo'lgan metan va suv aralashmasining ta'sirlashuvidan oddiy modda va kislorod saqlagan murakkab modda hosil bo'ldi. Aralashmadagi oddiy moddaning hajmiy ulushini toping.

**Qoida:** Metanning konversiyasi: **CH₄ + H₂O → CO + 3H₂**.

**Yechim:**
1. CH₄ = a, H₂O = b: C = a, H = 4a + 2b → (4a + 2b)/a = 18 → **b = 7a**.
2. Reaksiya CH₄ bo'yicha cheklangan: a mol CH₄ + a mol H₂O → a CO + 3a H₂.
3. Oxirgi aralashma: H₂O qoldi 6a + CO a + H₂ 3a = **10a**.
4. φ(H₂) = 3a/10a = **0,3 (30 %)**.

**Javob:** B) 0,3

**Tipik xato:** Reaksiyadan keyin qolgan suvni hisobga olmaslik (0,75 chiqadi); H₂ ni "murakkab modda" deb olish.

---

### 19-savol · **B**

**Shart:** Benzol gomologi yonganda 1,8 mol O₂ sarflandi, 0,8 mol suv hosil bo'ldi. Gomologni aniqlang.

**Qoida:** CₙH₂ₙ₋₆ + (3n−3)/2 O₂ → nCO₂ + (n−3)H₂O.

**Yechim:**
1. a(n − 3) = 0,8; a(3n − 3)/2 = 1,8 → a(3n − 3) = 3,6.
2. (n − 3)/(3n − 3) = 2/9 → 9n − 27 = 6n − 6 → **n = 7** → **C₇H₈ (toluol)**.

**Javob:** B) C₇H₈

**Tipik xato:** Suv koeffitsiyentini n deb olish; benzol qatorini CₙH₂ₙ deb yozish.

---

### 20-savol · **A**

**Shart:** Metan 1500 °C da qizdirilgach hosil bo'lgan gazlar simob(II)-sulfat eritmasiga yuttirildi. Vodorodga nisbatan zichligi 3,8 bo'lgan 11,2 l gaz yutilmay qoldi. Metanning parchalanish darajasini toping.

**Qoida:** **2CH₄ → C₂H₂ + 3H₂** (1500 °C); HgSO₄ eritmasi **asetilenni** yutadi (Kucherov), CH₄ va H₂ qoladi.

**Yechim:** 1 mol CH₄ dan α qismi parchalansin.
1. Qolgan gazlar: CH₄ = 1 − α; H₂ = 1,5α → mollar = 1 + 0,5α; massa = 16 − 13α.
2. M̄ = 3,8 · 2 = 7,6: (16 − 13α)/(1 + 0,5α) = 7,6 → 8,4 = 16,8α → **α = 0,5 = 50 %**.

**Javob:** A) 50

**Tipik xato:** Asetilen yutilishini hisobga olmaslik; tenglamani CH₄ → C + 2H₂ deb yozish.

---

### 21-savol · **C** *(rasmli)*

**Shart:** 2 mol C₂H₅NH₂ ga yetarli HCl qo'shilib 500 g eritma hosil qilindi. Eritmaning foiz konsentratsiyasini aniqlang.

**Qoida:** Amin + kislota → **ammoniyli tuz**: C₂H₅NH₂ + HCl → C₂H₅NH₃Cl (M = 81,5).

**Yechim:** m(tuz) = 2 · 81,5 = **163 g** → ω = 163/500 = **32,6 %**.

**Javob:** C) 32,6

**Tipik xato:** Aminning o'z massasini (90 g) olib 18 % deb hisoblash; tuz M sini 80,5 deb yozish.

---

### 22-savol · **A**

**Shart:** Tarkibida **5 ta sp³ gibridlangan atom** bo'lgan moddani toping.

**Qoida:** Aminlarda **azot ham sp³** gibridlangan; to'yingan uglerodlar ham sp³.

**Yechim:**
1. Dietilamin (C₂H₅)₂NH: 4 C + 1 N = **5** ✓
2. Pentilamin: 5 C + N = 6 ✗ · Etilpropilamin: 5 C + N = 6 ✗ · "Tetrametilamin" — neytral amin sifatida mavjud emas (azot 3 valentli) ✗

**Javob:** A) dietilamin

**Tipik xato:** Azotni sanamaslik (u holda pentilamin ham 5 beradi) — savol aynan shuni tekshiradi.

---

### 23-savol · **A**

**Shart:** Propan xlorlanganda oksidlovchini toping.

**Qoida:** Oksidlovchi — oksidlanish darajasini **pasaytiradigan** modda: Cl₂⁰ → 2Cl⁻.

**Javob:** A) xlor

**Tipik xato:** Uglerodni oksidlovchi deb olish — u aksincha oksidlanadi (−3 → −2).

---

### 24-savol · **A**

**Shart:** Molekulalarida jami 4·N_A ta atom bo'lgan, massasi 21,5 g aldegid uchun to'g'ri fikrni toping.

**Qoida:** To'yingan aldegid CₙH₂ₙO da **3n + 1** ta atom bor.

**Yechim:**
1. (21,5/(14n + 16))·(3n + 1) = 4 → 64,5n + 21,5 = 56n + 64 → **n = 5** → C₅H₁₀O (M = 86).
2. n(modda) = 21,5/86 = **0,25 mol** ✓ (A)
3. B) M = 86, 74 emas ✗ · C) butanon C₄H₈O — boshqa formula ✗ · D) pentanal — **o'zi** (gomolog emas) ✗

**Javob:** A) modda 0,25 mol

**Tipik xato:** Atomlar sonini 3n deb olish; izomer va gomologni chalkashtirish.

---

### 25-savol · **B** *(jadvalli)*

**Shart:** Qaysi qatordagi barcha ma'lumotlar to'g'ri?
1) Valerian kislota · 102 · 4 · butilformiat · 2) Buten · 56 · 4 · propen · 3) Pentanon · 86 · 5 · butanon · 4) Alanin · 75 · 3 · glitsin

**Yechim:**
1. Butilformiat valerian kislotaning **izomeri**, gomologi emas ✗
2. C₄H₈: M = 56 ✓; qutbsiz bog'lar (C=C ning σ va π si + 2 C–C) = 4 ✓; propen gomolog ✓ → **to'g'ri**
3. Pentanonda C–C bog'lar **4 ta**, 5 emas ✗
4. Alaninning M si **89**, 75 emas (75 — glitsinniki) ✗

**Javob:** B) 2

**Tipik xato:** Alanin va glitsinning molyar massalarini almashtirish.

---

### 26-savol · **B**

**Shart:** 584 g diaminomonokarbon kislota ikki **teng** qismga ajratildi. Birinchi qismga HCl qo'shilganda 438 g modda hosil bo'ldi. Ikkinchi qismga KOH qo'shilganda hosil bo'lgan modda massasini aniqlang.

**Qoida:** Diaminomonokarbon kislota **ikkita NH₂** (HCl bilan 1 : 2) va **bitta COOH** (ishqor bilan 1 : 1) tutadi.

**Yechim:**
1. Har bir qism 292 g. Agar kislota **lizin** C₆H₁₄N₂O₂ (M = 146) bo'lsa, qism = **2 mol**.
2. Tekshirish: 2 · 146 + 2 · 2 · 36,5 = 292 + 146 = **438 g** ✓
3. KOH bilan: 2 mol × (146 − 1 + 39) = 2 · 184 = **368 g**.

**Javob:** B) 368

**Tipik xato:** HCl ni 1 : 1 nisbatda olish (kislota aniqlanmaydi); KOH ni ikkala guruhga qo'shish.

---

### 27-savol · **B**

**Shart:** 10 g RNK (Mr = 81000) gidroliz qilinganda 10,4 g nukleotid hosil bo'ldi. RNK dagi nukleotidlar sonini toping.

**Qoida:** Polimer gidrolizida massa ortishi = **biriktirilgan suv**; n ta bo'g'inli zanjirda **(n − 1)** ta bog' bor.

**Yechim:**
1. m(H₂O) = 0,4 g → n = **0,0222 mol**.
2. n(RNK) = 10/81000 = **1,2346·10⁻⁴ mol**.
3. Bitta makromolekulaga suv = 0,0222/1,2346·10⁻⁴ = **180** → nukleotidlar = 180 + 1 = **181**.

**Javob:** B) 181

**Tipik xato:** 180 (D tuzog'i) — bog'lar soni, nukleotidlar emas.

---

### 28-savol · **D**

**Shart:** 33,3 g oligosaxarid [(C₆H₁₀O₅)ₙ·H₂O] gidrolizidan 36 g glyukoza hosil bo'ldi. n ni aniqlang.

**Yechim:**
1. n(glyukoza) = 36/180 = **0,2 mol** → oligosaxarid = 0,2/n mol.
2. M = 162n + 18 → (0,2/n)(162n + 18) = 33,3 → 32,4 + 3,6/n = 33,3 → **n = 4**.

**Javob:** D) 4

**Tipik xato:** Formuladagi qo'shimcha H₂O ni unutish (n topilmaydi).

---

### 29-savol · **A**

**Shart:** Kriolitda NaF va AlF₃ ning massa ulushlari 0,6 va 0,4. Formulasini ko'rsating.

**Yechim:** 100 g da: n(NaF) = 60/42 = **1,43**; n(AlF₃) = 40/84 = **0,476** → nisbat **3 : 1** → **3NaF·AlF₃** (Na₃AlF₆).

**Javob:** A) 3NaF · AlF₃

**Tipik xato:** B) Na₃AlF₃ — ftor soni noto'g'ri (6 bo'lishi kerak).

---

### 30-savol · **A** *(sxemali)*

**Shart:** Sxemada: **alkin** → aldegid; alkin → X; alkin → X —(H₂O)→ Y; alkin —(2H₂)→ Z → D → Y; Y → aldegid. 0,3 mol X va 0,2 mol Y massalarining yig'indisini toping.

**Qoida:** Asetilen kimyosi: C₂H₂ + H₂O (Kucherov) → CH₃CHO; C₂H₂ + H₂ → C₂H₄; C₂H₂ + 2H₂ → C₂H₆.

**Yechim:**
1. Alkin = **C₂H₂**, aldegid = CH₃CHO.
2. **X = C₂H₄** (etilen): C₂H₄ + H₂O → C₂H₅OH = **Y**.
3. **Z = C₂H₆** → D = C₂H₅Cl → Y = C₂H₅OH ✓; Y oksidlanib aldegid beradi ✓
4. m = 0,3 · 28 + 0,2 · 46 = 8,4 + 9,2 = **17,6 g**.

**Javob:** A) 17,6

**Tipik xato:** X ni asetaldegid, Y ni sirka kislota deb olish; etilenning molyar massasini 30 deb yozish.

---

### 31-savol · **B**

**Shart:** 3 ta idishda 1 moldan olingan etilenglikolga yetarli miqdorda Na, K va HCl qo'shildi. Qaysi javob to'g'ri?

**Qoida:** C₂H₄(OH)₂ ning **ikkala** OH i almashadi.

**Yechim:**
1. C₂H₄(ONa)₂: 28 + 2(39) = **106 g** ✓
2. C₂H₄(OK)₂ = 138 (108 va 128 emas) ✗ · C₂H₄Cl₂ = 99 (101 emas) ✗

**Javob:** B) 106 g natriy alkogolyat

**Tipik xato:** Kaliyli hosilani 108 deb hisoblash (kaliyni 23 bilan almashtirish).

---

### 32-savol · **B**

**Shart:** 132 kg kuprit (Cu₂O) va tenorit (CuO) (1 : 1,5 mol nisbatda) hamda 60 % mis tutmaydigan qo'shimchadan necha kg mis ajratib olish mumkin?

**Yechim:**
1. Rudalar = 132 · 0,4 = **52,8 kg**.
2. Cu₂O = 2a, CuO = 3a (kmol): 288a + 240a = 528a = 52,8 → **a = 0,1**.
3. Mis: 2 · 0,2 + 0,3 = **0,7 kmol** → m = 0,7 · 64 = **44,8 kg**.

**Javob:** B) 44,8

**Tipik xato:** 60 % ni rudalar ulushi deb olish; Cu₂O dan bitta mis chiqadi deb hisoblash.

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** 5,6 l fosfin gazi to'la yondirilishidan hosil bo'lgan fosfor oksidi Ca(OH)₂ eritmasidan o'tkazilganda, hosil bo'lgan **gidrofosfat** tuzi massasi **digidrofosfat** tuzidan 16,6 g kam bo'ldi.
Variantlar: A) 0,2 B) 0,05 C) 0,15 D) 0,1 E) 0,25 F) 0,3

**Umumiy yechim:**
1. n(PH₃) = 0,25 mol → 2PH₃ + 4O₂ → P₂O₅ + 3H₂O → fosfor atomlari **0,25 mol**.
2. CaHPO₄ — x mol (M = 136), Ca(H₂PO₄)₂ — y mol (M = 234).
3. Fosfor balansi: **x + 2y = 0,25**; massa sharti: **234y − 136x = 16,6**.
4. x = 0,25 − 2y → 234y − 34 + 272y = 16,6 → 506y = 50,6 → **y = 0,1**, **x = 0,05**.

---

### 33-savol · **B**

**Yechim:** n(CaHPO₄) = **0,05 mol**

**Javob:** B) 0,05

**Tipik xato:** Fosfor balansida digidrofosfatdagi **ikkita** fosforni sanamaslik.

---

### 34-savol · **D**

**Yechim:** n(Ca(H₂PO₄)₂) = **0,1 mol** *(manbada "Ca(HPO₄)₂" deb yozilgan — terish xatosi)*

**Javob:** D) 0,1

---

### 35-savol · **C**

**Yechim:** Kalsiy balansi: har ikkala tuzda **bittadan** Ca → n(Ca(OH)₂) = 0,05 + 0,1 = **0,15 mol**

**Javob:** C) 0,15

**Tipik xato:** Digidrofosfatda ikkita kalsiy bor deb o'ylash.

---

## III QISM — qisqa yozma topshiriqlar (36–40)

---

### 36-topshiriq · *(manbadagi javob: 9,6)*

**Shart:** A + B ⇄ C + D muvozanatdagi konsentratsiyalar 4 : 4 : 2 : 8 mol/l. Sistemaga C moddadan 2 mol/l qo'shildi. Yangi muvozanatda A va B konsentratsiyalari yig'indisini aniqlang.

**Qoida:** K o'zgarmaydi; mahsulot qo'shilsa muvozanat **chapga** suriladi.

**Yechim:**
1. K = (2 · 8)/(4 · 4) = **1**.
2. C qo'shilgach: [C] = 4, [D] = 8, [A] = [B] = 4.
3. Chapga z suriladi: (4 − z)(8 − z)/(4 + z)² = 1 → 32 − 12z = 16 + 8z → **z = 0,8**.
4. [A] + [B] = 4,8 + 4,8 = **9,6 mol/l**.

**Javob:** 9,6 mol/l

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| K = 1 hisoblangan | 0,6 |
| C qo'shilgandan keyingi boshlang'ich holat to'g'ri yozilgan | 0,6 |
| Muvozanatning chapga surilishi asoslangan | 0,6 |
| Tenglama tuzilib z = 0,8 topilgan | 0,8 |
| Yig'indi 9,6 | 0,6 |

**Tipik xato:** Qo'shilgan C ni to'liq reaksiyaga kirgan deb olish; [A] va [B] ni alohida so'ralgan deb yarmini yozish.

---

### 37-topshiriq · *(manbadagi javob: 142)*

**Shart:** 458 g sulfat kislota eritmasiga Na₂O qo'shilganda sulfat ionlarining massa ulushi **415/229 marta**, suv massasi esa **5/4 marta** kamaydi. Hosil bo'lgan tuz massasini toping.

**Qoida:** Na₂O **ikki yo'l** bilan sarflanadi: kislotani neytrallaydi (**suv hosil qiladi**) va ortiqchasi suv bilan NaOH beradi (**suvni sarflaydi**). Sulfat ionlarining **massasi o'zgarmaydi**, faqat eritma og'irlashadi.

**Yechim:** H₂SO₄ — a mol, Na₂O — b mol.
1. Ulush nisbati: (458 + 62b)/458 = 415/229 = 830/458 → 62b = 372 → **b = 6 mol**.
2. Suv balansi: hosil bo'ladi 18a, sarflanadi 18(b − a) → o'zgarish = 18(2a − b).
   (458 − 98a) + 18(2a − b) = 0,8(458 − 98a) → 18(b − 2a) = 0,2(458 − 98a)
3. 108 − 36a = 91,6 − 19,6a → 16,4a = 16,4 → **a = 1 mol**.
4. m(Na₂SO₄) = 1 · 142 = **142 g**.

**Javob:** 142 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Na₂O ning ikki yo'nalishda sarflanishi ko'rsatilgan | 0,8 |
| Sulfat ioni massasi o'zgarmasligidan b = 6 mol | 0,8 |
| Suv balansi tenglamasi to'g'ri tuzilgan | 0,8 |
| a = 1 mol | 0,4 |
| m = 142 g | 0,4 |

**Tipik xato:** Suvning faqat hosil bo'lishini hisobga olish (u holda "kamaydi" sharti bajarilmaydi); ulush nisbatini teskari yozish.

---

### 38-topshiriq · *(manbadagi javob: Ba)*

**Shart:** 102,6 g III valentli A metall sulfati 302,4 g II valentli B metall perxlorati bilan aralashtirildi; **qoldiqsiz** reaksiyadan 209,7 g B metall birikmasi hosil bo'ldi. B metallni toping.

**Qoida:** A₂(SO₄)₃ + 3B(ClO₄)₂ → 3BSO₄↓ + 2A(ClO₄)₃; **B(ClO₄)₂ va BSO₄ mollari teng**, farq faqat anionda: 2ClO₄⁻ (199) − SO₄²⁻ (96) = **103 g/mol**.

**Yechim:**
1. (302,4 − 209,7)/103 = 92,7/103 = **0,9 mol** = n(BSO₄).
2. M(BSO₄) = 209,7/0,9 = **233** → B = 233 − 96 = **137 → bariy**.
3. Tekshirish: n(A₂(SO₄)₃) = 0,3 → M = 342 → A = (342 − 288)/2 = **27 (Al)** ✓

**Javob:** B — bariy (Ba); A — alyuminiy

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Reaksiya tenglamasi to'g'ri yozilgan | 0,6 |
| Perxlorat va sulfat massalari farqi 103 g/mol | 0,8 |
| n(BSO₄) = 0,9 mol | 0,7 |
| M(BSO₄) = 233 → Ba | 0,7 |
| A metall alyuminiy ekanini tekshirish | 0,4 |

**Tipik xato:** ClO₄⁻ ning massasini 99,5 emas, 99 deb olish; nisbatni 1 : 1 deb yozish.

---

### 39-topshiriq · *(manbadagi javob: 4,2)*

**Shart:** C₃H₈, C₂H₆ va CₓH_y aralashmasi yondirilganda 2,05 mol CO₂ va 2,4 mol suv hosil bo'ldi. CₓH_y dan chiqqan suv massasi propandan chiqqan suv massasiga teng; CₓH_y dan chiqqan CO₂ ning hajmiy ulushi etandan chiqqan CO₂ niki bilan teng; n(CₓH_y) = n(C₂H₆)/2. m(CₓH_y) − m(C₃H₈) qiymatini toping.

**Yechim:** C₃H₈ — p, C₂H₆ — e, CₓH_y — c (c = e/2).
1. CO₂ sharti: xc = 2e → x(e/2) = 2e → **x = 4**.
2. Suv sharti: (y/2)c = 4p → **ye = 16p**.
3. CO₂: 3p + 2e + 4c = 3p + 2e + 2e = **3p + 4e = 2,05**.
4. H₂O: 4p + 3e + (y/2)c = 4p + 3e + 4p = **8p + 3e = 2,4**.
5. Sistema: **p = 0,15**, **e = 0,4** → c = 0,2; y = 16(0,15)/0,4 = **6** → **C₄H₆**.
6. m = 0,2 · 54 − 0,15 · 44 = 10,8 − 6,6 = **4,2 g**.

**Javob:** 4,2 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| CO₂ sharti orqali x = 4 | 0,7 |
| Suv sharti ye = 16p | 0,6 |
| CO₂ va H₂O balanslari tuzilgan | 0,7 |
| p = 0,15 va e = 0,4 | 0,6 |
| C₄H₆ aniqlanib farq 4,2 g | 0,6 |

**Tipik xato:** "Hajmiy ulush teng" ni "mollari teng" deb emas, massalari teng deb olish; n(CₓH_y) shartini teskari yozish.

---

### 40-topshiriq · *(manbadagi javob: 76,8)*

**Shart:** M̄ = 28,8 g/mol bo'lgan metan va metanol bug'lari aralashmasini to'la yondirish uchun 4,8 mol kislorod sarflandi. Aralashmadagi metanolning massasini aniqlang.

**Yechim:** CH₄ — a, CH₃OH — b.
1. (16a + 32b)/(a + b) = 28,8 → 12,8a = 3,2b → **b = 4a**.
2. CH₄ + 2O₂ · CH₃OH + 1,5O₂ → 2a + 1,5b = 4,8 → 2a + 6a = 4,8 → **a = 0,6**, **b = 2,4**.
3. m(CH₃OH) = 2,4 · 32 = **76,8 g**.

**Javob:** 76,8 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| O'rtacha molyar massadan b = 4a | 0,8 |
| Metanolning yonish tenglamasi (1,5 O₂) | 0,8 |
| Kislorod balansi tenglamasi | 0,8 |
| m = 76,8 g | 0,8 |

**Tipik xato:** Metanol uchun 2 mol O₂ olish (molekuladagi kislorodni hisobga olmaslik).

---

## IV QISM — kengaytirilgan topshiriqlar (41–43)

---

### 41-topshiriq *(6 ball — manbadagi javoblar bilan mos)*

**Shart:** X kation (+1) saqlagan 0,348 g **sulfit** tuzi 100 ml kaliy xromat eritmasi bilan sulfat kislotali sharoitda qoldiqsiz reaksiyaga kirishdi. Olingan xromli tuz KOH va H₂O₂ bilan qoldiqsiz reaksiyaga kirishib K₂CrO₄ berdi. Unga HCl ta'sir ettirilganda 60 ml (124,65 kPa, 27 °C) gaz ajraldi.

**Qoida:** Kislotali muhitda xromat **dixromatga** aylanadi: 2CrO₄²⁻ + 2H⁺ → Cr₂O₇²⁻ + H₂O; Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O; SO₃²⁻ − 2e⁻ → SO₄²⁻.

**Yechim:**

**1) Oksidlanish-qaytarilish tenglamalari:**
- 3(NH₄)₂SO₃ + K₂Cr₂O₇ + 4H₂SO₄ → 3(NH₄)₂SO₄ + Cr₂(SO₄)₃ + K₂SO₄ + 4H₂O
- Cr₂(SO₄)₃ + 3H₂O₂ + 10KOH → 2K₂CrO₄ + 3K₂SO₄ + 8H₂O
- 2K₂CrO₄ + 16HCl → 2CrCl₃ + 3Cl₂↑ + 4KCl + 8H₂O

**2) X kationi.** Gaz: n = PV/RT = (124,65 · 0,06)/(8,31 · 300) = **0,003 mol Cl₂** → K₂CrO₄ = 0,002 mol → Cr = 0,002 → Cr₂O₇²⁻ = **0,001 mol** → sulfit = **0,003 mol**.
M(tuz) = 0,348/0,003 = **116** → X₂SO₃ → 2X = 36 → **X = 18 = NH₄⁺** ✓

**3) Konsentratsiyalar:** K₂Cr₂O₇ = 0,001 mol / 0,1 l = **0,01 M**; H₂SO₄ = 0,004 mol / 0,1 l = **0,04 M**.

**4) Kaliyli tuzlar (oxirgi reaksiyadan keyin):** K₂SO₄ = 0,001 (birinchi bosqich) + 0,003 (ikkinchi bosqich) = 0,004 mol = 0,696 g; KCl = 0,004 mol = 0,298 g → jami **0,994 g** ✓

**5)** Oxirgi eritmada CrCl₃ = 0,002 mol; **to'liq** reaksiya — gidroksokompleksgacha:
CrCl₃ + 6KOH → K₃[Cr(OH)₆] + 3KCl → n(KOH) = 6 · 0,002 = **0,012 mol** ✓

**Javob:** X = NH₄⁺ · 0,01 M va 0,04 M · 0,994 g · 0,012 mol

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Gaz miqdori ideal gaz tenglamasi bilan 0,003 mol | 0,7 |
| Cl₂ : CrO₄²⁻ = 3 : 2 nisbati | 0,7 |
| Sulfit 0,003 mol → M = 116 → NH₄⁺ | 0,8 |
| Birinchi reaksiya to'g'ri tenglashtirilgan | 0,8 |
| H₂O₂/KOH bilan K₂CrO₄ hosil bo'lishi | 0,7 |
| K₂Cr₂O₇ va H₂SO₄ konsentratsiyalari | 0,8 |
| Kaliyli tuzlar massasi 0,994 g | 0,8 |
| KOH miqdori 0,012 mol (kompleks hosil bo'lishi) | 0,7 |

**Tipik xato:** Xromatni kislotali muhitda dixromatga aylantirmaslik; 4-bandda faqat K₂SO₄ ni sanash (KCl ham qoladi); 5-bandda Cr(OH)₃ cho'kmasi bilan to'xtab 0,006 mol deb javob berish.

---

### 42-topshiriq *(6 ball — 7 ta reaksiya)*

**1. 2-metilpentanning krekingi** (beshta yo'nalish):
- CH₄ + CH₃–CH=CH–CH₂–CH₃ (penten-2)
- CH₄ + CH₂=C(CH₃)–CH₂–CH₃ (2-metilbuten-1)
- CH₃–CH₃ + CH₂=C(CH₃)–CH₃ (2-metilpropen)
- CH₂=CH₂ + CH₃–CH(CH₃)–CH₃ (izobutan)
- CH₃–CH=CH₂ + CH₃–CH₂–CH₃ (propen + propan)

**2.** CH₃CH₂CH₂–C(CH₃)₂–CHCl–CH₂–C(CH₃)₂–CH₃ + KOH(spirtli) → **degidrogalogenlash**.
Xlor tutgan uglerodning bir qo'shnisi (C(CH₃)₂) da **vodorod yo'q**, shuning uchun qo'shbog' faqat CH₂ tomonga hosil bo'ladi:
CH₃CH₂CH₂–C(CH₃)₂–CH=CH–C(CH₃)₂–CH₃ + KCl + H₂O
**Nomi: 2,2,5,5-tetrametilokt-3-en**

**3.** 1-metil-2-izopropilbenzol + KMnO₄ + H₂SO₄ → **ikkala yon zanjir** oksidlanadi (izopropildagi ikkita metil CO₂ gacha):
5C₁₀H₁₄ + 24KMnO₄ + 36H₂SO₄ → 5C₆H₄(COOH)₂ + 10CO₂↑ + 24MnSO₄ + 12K₂SO₄ + 56H₂O
*(Mahsulot — ftal kislota.)*

**4.** CH₃–C(CH₃)₂–CH(OH)–CH₂–CH₃ →(H₂SO₄, >140 °C) **degidratatsiya**; OH ning bir qo'shnisi uchlamchi-to'rtlamchi (vodorodsiz), shuning uchun suv CH₂ tomondan ajraladi:
CH₃–C(CH₃)₂–CH=CH–CH₃ + H₂O
**Nomi: 4,4-dimetilpent-2-en**

**5.** CH₃CH₂CH(CH₃)CH₂COONa + NaOH →(t, CaO) **dekarboksillanish**:
CH₃CH₂CH(CH₃)CH₃ (2-metilbutan) + Na₂CO₃

**6.** nC₆H₅OH + nCH₂O → [–C₆H₃(OH)–CH₂–]ₙ + nH₂O (**fenolformaldegid smolasi**)

**7.** C₆H₅NH₂ + 3Br₂ → C₆H₂Br₃NH₂↓ (2,4,6-tribromanilin, oq cho'kma) + 3HBr

| Baholash mezoni (6 ball) | Ball |
|---|---|
| 1-reaksiya: beshta kreking yo'nalishi | 1,2 |
| 2-reaksiya: eliminatsiya yo'nalishi asoslangan + nomi | 1,0 |
| 3-reaksiya: ikkala radikal oksidlanishi va tenglashtirish | 1,0 |
| 4-reaksiya: degidratatsiya yo'nalishi + nomi | 1,0 |
| 5-reaksiya: dekarboksillanish | 0,7 |
| 6-reaksiya: polikondensatsiya | 0,6 |
| 7-reaksiya: 2,4,6-tribromanilin | 0,5 |

**Tipik xato:** 2- va 4-reaksiyalarda Zaytsev qoidasini vodorodsiz uglerod tomonga qo'llash; 3-da izopropil guruhini faqat COOH gacha oksidlash (ikkita metil CO₂ ga ketadi); 6-da oddiy qo'shilish deb yozish.

---

### 43-topshiriq *(6 ball — sanoat texnologiyasi)*

**1. Piritdan SO₂ olish unumini oshirish (kamida 2 ta taklif):**
- Piritni **maydalash** — reaksiya sirtini oshiradi;
- **Qaynovchi qatlam** usulini qo'llash — aralashish va issiqlik almashinuvi yaxshilanadi;
- Havoni **kislorod bilan boyitish**;
- **Qarama-qarshi oqim** (protivotok) prinsipi va ortiqcha havo berish.
Tenglama: 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂

**2. SO₂ dan SO₃ olish:** reaksiya **ekzotermik** va hajm kamayadi, shuning uchun harorat past bo'lishi kerak, lekin tezlik uchun **400–500 °C** optimal; katalizator — **V₂O₅** (asosiy), shuningdek **Pt** yoki **Fe₂O₃**.
2SO₂ + O₂ ⇄ 2SO₃ + Q

**3.** Qaynovchi qatlam **KS pechida** (qaynovchi qatlamli pech) hosil qilinadi. **Qaynovchi qatlam** — maydalangan pirit zarralari pastdan yuqoriga puflanayotgan havo oqimida qaynayotgan suyuqlikka o'xshab muallaq holda harakatlanishi; bu reagentlarning tekis aralashuvini va to'liq yonishni ta'minlaydi.

**4.** SO₃ suvda **yomon yutiladi** va kuchli issiqlik ajralishi natijasida **kislota tumani (aerozol)** hosil bo'ladi, u apparatdan uchib ketadi. Shuning uchun SO₃ konsentrlangan sulfat kislotada yuttiriladi va **oleum** olinadi: nSO₃ + H₂SO₄ → H₂SO₄·nSO₃.

**5.** Piritning konsentrlangan nitrat kislotada erishi:
**FeS₂ + 18HNO₃ → Fe(NO₃)₃ + 2H₂SO₄ + 15NO₂↑ + 7H₂O**
Elektron balans: Fe⁺² − 1e⁻ → Fe⁺³ · 2S⁻¹ − 14e⁻ → 2S⁺⁶ → jami **15 e⁻**; N⁺⁵ + 1e⁻ → N⁺⁴ → **15 NO₂**.

| Baholash mezoni (6 ball) | Ball |
|---|---|
| 1-band: kamida ikkita asosli taklif + yonish tenglamasi | 1,2 |
| 2-band: harorat oralig'i 400–500 °C asoslangan | 0,8 |
| 2-band: kamida ikkita katalizator | 0,6 |
| 3-band: KS pechi va qaynovchi qatlam ta'rifi | 1,0 |
| 4-band: tuman hosil bo'lishi va oleum | 1,0 |
| 5-band: tenglama to'g'ri va elektron balans ko'rsatilgan | 1,4 |

**Tipik xato:** 2-bandda "haroratni imkon qadar oshirish" deyish (muvozanat chapga suriladi); 5-bandda oltingugurtning oksidlanish darajasini pirit tarkibida −2 deb olish (aslida **−1**).

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | A | 16 | D | 31 | B |
| 2 | B | 17 | B | 32 | B |
| 3 | A | 18 | B | 33 | B (0,05) |
| 4 | B | 19 | B | 34 | D (0,1) |
| 5 | A | 20 | A | 35 | C (0,15) |
| 6 | B | 21 | C | 36 | 9,6 |
| 7 | B | 22 | A | 37 | 142 g |
| 8 | A | 23 | A | 38 | Ba (A — Al) |
| 9 | B | 24 | A | 39 | 4,2 g |
| 10 | D | 25 | B | 40 | 76,8 g |
| 11 | A | 26 | B | 41 | NH₄⁺ · 0,01M/0,04M · 0,994 g · 0,012 mol |
| 12 | B | 27 | B | 42 | 7 ta reaksiya |
| 13 | C | 28 | D | 43 | sanoat texnologiyasi |
| 14 | C | 29 | A | | |
| 15 | B | 30 | A | | |

36–41 javoblari manbada ham berilgan va yechimlar ular bilan **to'liq mos keldi**.
34-savolda formula \`Ca(HPO₄)₂\` deb xato terilgan — to'g'risi **Ca(H₂PO₄)₂**.
`,nt=`# Sertifikat — 25.01.2025, II smena

**Manba:** \`Milliy sertifikat .pdf\`, 26–30-betlar · ishlash vaqti 120 daqiqa
**Tuzilishi:** 1–32 yopiq test · 41–43 kengaytirilgan yozma

> ⚠️ **Manbada 33–40-topshiriqlar yo'q.** 26–28-betlar skan ko'rinishida (matn qatlamisiz) va
> 32-savoldan keyin to'g'ridan-to'g'ri 41-topshiriqqa o'tilgan. Ushbu fayl manbada mavjud
> bo'lgan 35 ta topshiriqni qamraydi; 33–40 topilsa, alohida qo'shiladi.
> Skan betlardagi savollar rasmdan o'qib chiqilgan.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **B**

**Shart:** Qaysi tuz tarkibidagi metallar va metallmasning massasi 18 ga farq qiladi?

**Qoida:** Formuladagi **metall atomlari** massalarining yig'indisini **nometall** atomlari yig'indisi bilan solishtiramiz.

**Yechim:**
1. KMnO₄: (39 + 55) − 64 = **30** ✗
2. NaAlO₂: (23 + 27) − 32 = **18** ✓
3. BaSO₄: 137 − 96 = 41 ✗ · CaOCl₂: 40 − 87 = −47 ✗

**Javob:** B) NaAlO₂

**Tipik xato:** Marganesni nometall deb olish; faqat bitta atomni solishtirish.

---

### 2-savol · **D**

**Shart:** MgSO₄·xH₂O da kislorodning massa ulushi 224/3 % bo'lsa, kristallogidrat formulasini ko'rsating.

**Yechim:**
1. ω(O) = 224/3 % = **74,67 %**; M = 120 + 18x; kislorod atomlari 4 + x → massa 64 + 16x.
2. (64 + 16x)/(120 + 18x) = 0,7467 → 64 + 16x = 89,6 + 13,44x → 2,56x = 25,6 → **x = 10**.

**Javob:** D) MgSO₄·10H₂O

**Tipik xato:** Kristallizatsion suvdagi kislorodni sanamaslik (faqat 4 ta O olish).

---

### 3-savol · **C**

**Shart:** Tarkibida neytronlar **barcha zarrachalarning 35 %** ini tashkil qilgan temir izotopini toping.

**Qoida:** Atomdagi zarrachalar: p + e + n = Z + Z + (A − Z) = **A + Z**.

**Yechim:**
1. (A − 26)/(A + 26) = 0,35 → A − 26 = 0,35A + 9,1 → 0,65A = 35,1 → **A = 54**.

**Javob:** C) ⁵⁴Fe

**Tipik xato:** Elektronlarni hisobga olmaslik (n/A = 0,35 deb olish → A = 40).

---

### 4-savol · **C**

**Shart:** Nordon tuz (a) va asosli tuz (b) hosil **qila olmaydigan** moddalarni toping.

**Qoida:** Nordon tuz — **ko'p asosli kislotadan**; asosli tuz — **ko'p kislotali asosdan**.

**Yechim:**
1. A) H₄P₂O₇ — 4 ta vodorod, nordon tuz **beradi** ✗
2. B) toifalar almashgan (a — asos, b — kislota) ✗
3. C) HCN — **bir asosli** kislota, nordon tuz bermaydi ✓; RbOH — **bir kislotali** asos, asosli tuz bermaydi ✓
4. D) NaOH kislota emas ✗

**Javob:** C) a)-HCN va b)-RbOH

**Tipik xato:** H₃PO₂ va HCN kabi "ko'p vodorodli, lekin bir asosli" kislotalarni ajrata olmaslik.

---

### 5-savol · **C**

**Shart:** Qaysi jarayonning **qisqa ionli** tenglamasida koeffitsiyentlar yig'indisi 6 ga teng?
1) BaCl₂ + Na₂SO₄ · 2) CaCO₃ + HCl · 3) Na₂CO₃ + AlCl₃ + H₂O

**Yechim:**
1. Ba²⁺ + SO₄²⁻ → BaSO₄↓ → **3**
2. CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂↑ → 1 + 2 + 1 + 1 + 1 = **6** ✓
3. 3CO₃²⁻ + 2Al³⁺ + 3H₂O → 2Al(OH)₃↓ + 3CO₂↑ → **13**

**Javob:** C) faqat 2

**Tipik xato:** CaCO₃ ni ionlarga ajratib yuborish (u **erimaydi**, molekulyar yoziladi).

---

### 6-savol · **A** *(rasmli)*

**Shart:** Eritmada: (NO₃⁻ + Cl⁻) 1,4 mol · Br⁻ 0,6 mol · Al³⁺ 0,2 mol · Fe²⁺ 0,2 mol · Ca²⁺ x mol. Kalsiy ionlarining massasini (mg) aniqlang.

**Qoida:** **Elektroneytrallik**: musbat zaryadlar yig'indisi = manfiy zaryadlar yig'indisi.

**Yechim:**
1. Manfiy: 1,4 · 1 + 0,6 · 1 = **2,0**.
2. Musbat: 2x + 0,2 · 3 + 0,2 · 2 = 2x + 1,0.
3. 2x + 1,0 = 2,0 → **x = 0,5 mol** → m = 20 g = **20000 mg**.

**Javob:** A) 20000 mg

**Tipik xato:** Zaryadlarni emas, mollarni tenglashtirish; mg ga o'tkazmaslik.

---

### 7-savol · **D**

**Shart:** Alyuminiy digidrofosfat va kalsiy gidroksokarbonat tarkibidagi sigma va pi bog'lar yig'indisini aniqlang.

**Qoida:** Al(H₂PO₄)₃ va (CaOH)₂CO₃; fosfor V valentli (1 ta P=O), karbonatda 1 ta C=O. Ion bog'lar ham σ qatorida sanaladi *(bu test seriyasining konvensiyasi)*.

**Yechim:**
1. **Al(H₂PO₄)₃:** har anionda 4 P–O + 2 O–H = 6 σ va 1 π → 18 σ + 3 π; ion Al–O = 3 → **24**.
2. **(CaOH)₂CO₃:** CO₃²⁻ da 3 σ + 1 π; 2 ta O–H; ion Ca–O = 4 → **10**.
3. Jami = **34**.

**Javob:** D) 34

**Tipik xato:** Ion bog'larni sanamaslik (27 chiqadi); gidroksokarbonat formulasini noto'g'ri yozish.

---

### 8-savol · **A**

**Shart:** 10 g **halqasimon** oqsil (Mr = 81000) gidrolizlanganda 10,4 g aminokislotalar hosil bo'ldi. Oqsildagi aminokislotalar sonini toping.

**Qoida:** **Halqasimon** (siklik) peptidda bog'lar soni aminokislotalar soniga **teng** (chiziqli peptidda esa bittaga kam).
*Nega aynan u:* "halqasimon" so'zi javobni 181 dan 180 ga o'zgartiradi — savolning butun mohiyati shunda.

**Yechim:**
1. m(H₂O) = 0,4 g → n = **0,0222 mol**; n(oqsil) = 10/81000 = **1,2346·10⁻⁴ mol**.
2. Bitta molekulaga suv = 180 → peptid bog'lari 180 → **aminokislotalar ham 180 ta**.

**Javob:** A) 180

**Tipik xato:** Chiziqli peptid formulasini qo'llab 181 (B) deb javob berish.

---

### 9-savol · **A**

**Shart:** Glyukoza 1 : 2 mol nisbatda ikki qismga bo'lindi. Birinchi qismi **qaytarildi**, ikkinchi qismi yondirilganda 54 g suv hosil bo'ldi. Birinchi qismda hosil bo'lgan spirt massasini aniqlang (η₁ = 60 %, η₂ = 75 %).

**Qoida:** Glyukozaning qaytarilishi: C₆H₁₂O₆ + H₂ → C₆H₁₄O₆ (**sorbit**, M = 182). Yonish: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.

**Yechim:**
1. n(H₂O) = 3 mol → yonган glyukoza = **0,5 mol**; unum 75 % → ikkinchi qism = 0,5/0,75 = **2/3 mol**.
2. Nisbat 1 : 2 → birinchi qism = **1/3 mol**.
3. Sorbit = (1/3) · 0,6 = **0,2 mol** → m = 0,2 · 182 = **36,4 g**.

**Javob:** A) 36,4 g

**Tipik xato:** Unumlarni qo'llamaslik (27,3 g chiqadi); mahsulotni etanol deb olish (qaytarish — bijg'ish emas).

---

### 10-savol · **C**

**Shart:** Qaysi kislota nordon tuz hosil qilmaydi?

**Qoida:** Nordon tuz uchun **almashinadigan** vodorod kamida 2 ta bo'lishi kerak. H₃PO₃ da 2 ta, **H₃PO₂ da esa atigi 1 ta** almashinuvchi vodorod bor (qolganlari fosfor bilan bevosita bog'langan).

**Javob:** C) H₃PO₂

**Tipik xato:** Formuladagi vodorodlar sonini almashinuvchi vodorodlar soni deb olish.

---

### 11-savol · **C** *(jadvalli)*

**Shart:** X (18 e, 19 p) · Y (20 e, 20 p) · Z (18 e, 17 p) · T (12 e, 16 p) — anion, kation va neytral atomlarga ajrating.

**Yechim:** X: +1 kation · Y: neytral · Z: −1 anion · T: +4 kation

**Javob:** C) X, T – kation; Y – neytral; Z – anion

**Tipik xato:** Elektron ko'p bo'lsa "musbat" deb o'ylash.

---

### 12-savol · **B**

**Shart:** Propin va propendan iborat aralashmaga yetarli bromli suv ta'sir ettirilganda mahsulot massasi dastlabki aralashmanikidan **191/31 marta** katta. Gazlarning mol nisbatini aniqlang.

**Qoida:** Propin **2 mol**, propen **1 mol** brom biriktiradi.

**Yechim:** Propin — a, propen — b.
1. Dastlabki: 40a + 42b; mahsulot: (40 + 320)a + (42 + 160)b = 360a + 202b.
2. 31(360a + 202b) = 191(40a + 42b) → 11160a + 6262b = 7640a + 8022b → 3520a = 1760b → **b = 2a**.

**Javob:** B) 1:2

**Tipik xato:** Propinga 1 mol brom olish.

---

### 13-savol · **A**

**Shart:** 11,6 g alkin va pentandan iborat aralashma maksimal 64 g bromni biriktiradi. Aralashma yonishidan hosil bo'lgan gaz 400 g 17 % li NaOH ni **to'la neytrallashga** yetarli bo'lsa, alkinni aniqlang.

**Qoida:** Alkin 2 mol Br₂ biriktiradi; "to'la neytrallash" → **o'rta tuz** Na₂CO₃ (2NaOH : 1CO₂).

**Yechim:**
1. n(Br₂) = 0,4 mol → **n(alkin) = 0,2 mol**.
2. n(NaOH) = 1,7 mol → **n(CO₂) = 0,85 mol**.
3. Pentan — p mol: 0,2n + 5p = 0,85 va 0,2(14n − 2) + 72p = 11,6.
4. Yechim: **n = 3** (C₃H₄), p = 0,05 mol *(tekshirish: 8 + 3,6 = 11,6 ✓)*

**Javob:** A) C₃H₄

**Tipik xato:** NaOH ni 1 : 1 nisbatda olish (nordon tuz); alkinni 0,4 mol deb hisoblash.

---

### 14-savol · **A**

**Shart:** CₓH_y ning to'liq yonishi uchun 6,4 g kislorod sarflanib 2,7 g suv hosil bo'ldi. CₓH_y ning nechta **izomeri** bor?

**Yechim:**
1. n(O₂) = 0,2 → kislorod atomlari 0,4; n(H₂O) = **0,15 mol**.
2. 0,4 = 2n(CO₂) + 0,15 → n(CO₂) = **0,125 mol**.
3. C : H = 0,125 : 0,3 = **5 : 12** → C₅H₁₂ (pentan).
4. Pentanning izomerlari: n-pentan, izopentan, neopentan → **3 ta**.

**Javob:** A) 3

**Tipik xato:** Kislorod balansida suvdagi kislorodni unutish; pentan izomerlarini 5 ta deb sanash.

---

### 15-savol · **C**

**Shart:** Natriy metali suv bilan ta'sirlashdi. Hosil bo'lgan **eritmada** qaysi sinf vakillari bor?

**Qoida:** 2Na + 2H₂O → 2NaOH + H₂↑. Eritmada NaOH (asos) va **erituvchi — suv** bor; suv esa **oksid** (H₂O — vodorod oksidi).
*Nega aynan u:* variantlar orasida "asos" yo'q, demak savol erituvchining o'zini nazarda tutmoqda.

**Javob:** C) oksid

**Tipik xato:** Gidrid (B) ni tanlash — natriy gidridi faqat quruq vodorod bilan hosil bo'ladi.

---

### 16-savol · **B**

**Shart:** Fenol va noma'lum amin aralashmasining 15,95 g miqdori 1568 ml (n.sh.) HCl **yoki** 24 g 15 % li NaOH bilan ta'sirlasha oldi. Aminni aniqlang.

**Qoida:** HCl faqat **amin** bilan, NaOH faqat **fenol** bilan reaksiyaga kirishadi.

**Yechim:**
1. n(HCl) = 1,568/22,4 = **0,07 mol** = n(amin).
2. n(NaOH) = 3,6/40 = **0,09 mol** = n(fenol) → m(fenol) = 0,09 · 94 = **8,46 g**.
3. m(amin) = 15,95 − 8,46 = 7,49 g → M = 7,49/0,07 = **107** → C₆H₅CH₂NH₂.

**Javob:** B) benzil amin

**Tipik xato:** Anilin (93) bilan benzilaminni (107) chalkashtirish; fenol ham HCl bilan reaksiyaga kirishadi deb o'ylash.

---

### 17-savol · **C**

**Shart:** Mol nisbati 1 : 2 : 1 bo'lgan temir kuyundisi, uglerod va mis(I)-oksididan iborat 4 g aralashmani eritish uchun 98 % li sulfat kislota massasini va hosil bo'lgan SO₂ hajmini toping (barcha reaksiyalarda kislota SO₂ gacha qaytarilgan).

**Qoida:** Qizdirilgan kons. H₂SO₄ — oksidlovchi: Fe₃O₄ dagi Fe²⁺, uglerod va Cu⁺ oksidlanadi.

**Yechim:** Fe₃O₄ = a, C = 2a, Cu₂O = a.
1. 232a + 24a + 144a = 400a = 4 → **a = 0,01**.
2. 2Fe₃O₄ + 10H₂SO₄ → 3Fe₂(SO₄)₃ + SO₂↑ + 10H₂O → kislota **0,05**, SO₂ **0,005**
3. C + 2H₂SO₄ → CO₂↑ + 2SO₂↑ + 2H₂O → kislota **0,04**, SO₂ **0,04**
4. Cu₂O + 3H₂SO₄ → 2CuSO₄ + SO₂↑ + 3H₂O → kislota **0,03**, SO₂ **0,01**
5. Jami kislota = 0,12 mol = 11,76 g → eritma = **12 g**; SO₂ = 0,055 mol → V = **1,232 l**.

**Javob:** C) 12 g; 1,232 litr

**Tipik xato:** Fe₃O₄ ni oddiy almashinish bilan eritish; Cu₂O dan SO₂ chiqmaydi deb o'ylash.

---

### 18-savol · **D**

**Shart:** Platina zar suvida eritilganda 2,24 l (n.sh.) gaz ajraldi. Oksidlovchi qaytaruvchidan nechta elektron olgan?

**Qoida:** 3Pt + 4HNO₃ + 18HCl → 3H₂[PtCl₆] + **4NO↑** + 8H₂O; N⁺⁵ + 3e⁻ → N⁺².

**Yechim:** n(NO) = 0,1 mol → elektronlar = 3 · 0,1 = **0,3 mol = 0,3·N_A**

**Javob:** D) 0,3·N_A

**Tipik xato:** Gazni NO₂ deb olish (0,1·N_A chiqadi); elektronlarni platina bo'yicha sanashga urinish.

---

### 19-savol · **C**

**Shart:** Qaysi element qaytaruvchi bo'lolmaydi?

**Qoida:** Qaytaruvchi — elektron **beradi**. Ftor — eng elektromanfiy element, oksidlanish darajasi faqat 0 va −1.

**Yechim:** A) S · B) Li · D) P — hammasi oksidlanishi mumkin; C) 1s²2s²2p⁵ = **F** ✓

**Javob:** C) 1s²2s²2p⁵ (ftor)

**Tipik xato:** Konfiguratsiyani noto'g'ri o'qib xlorni tanlash (xlor qaytaruvchi bo'la oladi).

---

### 20-savol · **A**

**Shart:** sp³ gibrid orbitallar soni **20 ta** bo'lgan aminni toping.

**Qoida:** Har bir sp³ atomda 4 ta orbital → 20/4 = **5 ta sp³ atom** (uglerodlar + **azot**).

**Yechim:** Dietilamin (C₂H₅)₂NH: 4 C + 1 N = **5** ✓ · dimetilamin 3 · etilpropilamin 6 · izopropilamin 4

**Javob:** A) dietilamin

**Tipik xato:** Azotni hisobga olmaslik.

---

### 21-savol · **B**

**Shart:** x g fosfor ma'lum miqdor nitrat kislotada eriydi; y g oltingugurt ham **shuncha** kislotada eriydi (ikkalasida ham NO₂ hosil bo'ladi). x − y = 5,2 bo'lsa, x g **metanning** molini toping.

**Qoida:** P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O · S + 6HNO₃ → H₂SO₄ + 6NO₂ + 2H₂O.

**Yechim:**
1. Kislota teng: 5x/31 = 6y/32 → **x = 93y/80**.
2. x − y = 5,2 → (13/80)y = 5,2 → **y = 32**, **x = 37,2**.
3. n(CH₄) = 37,2/16 = **2,325 mol**.

**Javob:** B) 2,325

**Tipik xato:** Kislota miqdorini elektronlar soniga teng deb olish (kislotaning bir qismi tuzga ketadi — bu masalada ketmaydi, chunki mahsulot kislota); x o'rniga y ni metanga qo'yish.

---

### 22-savol · **D**

**Shart:** Al(HEO₄)₃ tarkibli moddada E ning konfiguratsiyasi 1s²2s²2p⁶ bo'lsa, elementni aniqlang.

**Yechim:**
1. Al³⁺ uchun anion zaryadi −1: (HEO₄)⁻ → +1 + E − 8 = −1 → **E = +6**.
2. E⁶⁺ da 10 ta elektron → neytral atomda 16 ta → **oltingugurt**; modda — Al(HSO₄)₃.

**Javob:** D) S

**Tipik xato:** Konfiguratsiyani neytral atomniki deb olib neonni tanlash.

---

### 23-savol · **A**

**Shart:** Qaysi element oksidlanganda massasi 40 % ga ortadi?

**Qoida:** Massa ortishi = biriktirilgan kislorod: valentligi n bo'lgan elementda 8n g kislorod 1 mol atomga to'g'ri keladi → 8n/A = 0,4 → **A = 20n**.

**Yechim:** n = 2 → A = **40 = Ca** ✓ (Ca → CaO: 40 → 56, ortish 40 %)

**Javob:** A) Ca

**Tipik xato:** Mg uchun tekshirish: 24 → 40, ortish 66,7 % ✗ — formulani qo'llamay taxmin qilish.

---

### 24-savol · **A**

**Shart:** Biror moddani yoqish uchun 22,4 l ozon va kislorod aralashmasi **yoki** 134,4 l havo (φ = 0,2) sarflanadi. Dastlabki aralashmaning o'rtacha molyar massasini hisoblang.

**Qoida:** Ikkala holatda ham **kislorod atomlari soni teng** bo'lishi kerak.

**Yechim:**
1. Havodan: O₂ = 134,4 · 0,2 = 26,88 l = 1,2 mol → **O atomlari 2,4 mol**.
2. 1 mol aralashmada: O₃ = a, O₂ = b; a + b = 1; 3a + 2b = 2,4 → **a = 0,4**, **b = 0,6**.
3. M̄ = 0,4 · 48 + 0,6 · 32 = **38,4 g/mol**.

**Javob:** A) 38,4

**Tipik xato:** Hajmlarni tenglashtirish (atomlar emas); havodagi kislorod ulushini 21 % o'rniga butun hajm deb olish.

---

### 25-savol · **B**

**Shart:** Ikkita yaqin gomolog karbon kislota aralashmasi 37,4 g; metanol bilan qizdirilganda 30,3 g efir olindi (unumlar 70 % va 50 %). Quyi gomolog miqdori yuqorisidan 5 marta ko'p, katta gomolog 0,1 mol. Moddalarni aniqlang.

**Yechim:**
1. Katta = 0,1 mol → kichik = **0,5 mol**.
2. 0,5M + 0,1(M + 14) = 37,4 → 0,6M = 36 → **M = 60 (CH₃COOH)**, kattasi **74 (C₂H₅COOH)**.
3. Tekshirish: 0,5 · 0,7 · 74 + 0,1 · 0,5 · 88 = 25,9 + 4,4 = **30,3 g** ✓

**Javob:** B) CH₃COOH; CH₃CH₂COOH

**Tipik xato:** Metil efirining massasini kislotanikiga teng deb olish (+14 bo'ladi); unumlarni almashtirish.

---

### 26-savol · **B**

**Shart:** Uchinchi elektron pog'onada **14 ta** elektron bo'lgan atom va ionlarni tanlang: 1) Co³⁺ · 2) Cr · 3) Fe²⁺ · 4) Ni³⁺ · 5) Fe

**Qoida:** Uchinchi pog'ona = 3s + 3p + 3d = 8 + 3d. 14 ta bo'lishi uchun **3d⁶** kerak.

**Yechim:**
1. Co³⁺ (24 e): [Ar]3d⁶ ✓ · Cr: 3d⁵ ✗ · Fe²⁺ (24 e): 3d⁶ ✓ · Ni³⁺ (25 e): 3d⁷ ✗ · Fe: 3d⁶4s² ✓

**Javob:** B) 1, 3, 5

**Tipik xato:** 4s elektronlarini uchinchi pog'onaga qo'shish; ion hosil bo'lganda 3d dan elektron uziladi deb o'ylash.

---

### 27-savol · **A**

**Shart:** 11,5 mol ammiakning parchalanishida 150 sekunddan so'ng konsentratsiyasi 0,6 mol/l bo'ldi. O'rtacha tezlikni (mol/(l·min)) toping (V = 2,5 l).

**Yechim:**
1. c₀ = 11,5/2,5 = **4,6 mol/l** → Δc = 4,6 − 0,6 = **4,0 mol/l**.
2. t = 150 s = **2,5 min** → v = 4,0/2,5 = **1,6**.

**Javob:** A) 1,6

**Tipik xato:** Boshlang'ich konsentratsiyani hajmga bo'lmaslik; sekundda javob berish.

---

### 28-savol · **D**

**Shart:** Ammiakning **katalizatorsiz** yonish reaksiyasi muvozanatga kelganda suv va ammiakning konsentratsiyasi 3 mol/l dan bo'lsa, kislorodning dastlabki konsentratsiyasini aniqlang (K = 1/3).

**Qoida:** Katalizatorsiz: **4NH₃ + 3O₂ ⇄ 2N₂ + 6H₂O**; K = [N₂]²[H₂O]⁶/([NH₃]⁴[O₂]³).

**Yechim:**
1. [H₂O] = 3 → reaksiyaga kirgan NH₃ = 3 · (4/6) = **2**; N₂ = 1; sarflangan O₂ = 3 · (3/6) = **1,5**.
2. K: (1² · 3⁶)/(3⁴ · [O₂]³) = 729/(81[O₂]³) = 1/3 → [O₂]³ = 27 → **[O₂]ᵐᵤᵥ = 3**.
3. [O₂]₀ = 3 + 1,5 = **4,5 mol/l**.

**Javob:** D) 4,5

**Tipik xato:** Katalizatorli tenglamani (NO bilan) olish; muvozanat konsentratsiyasini javob deb yozish.

---

### 29-savol · **D**

**Shart:** 490 g sulfat kislota eritmasiga Na₂O qo'shilganda sulfat ionlarining massa ulushi **369/245 marta**, suvning **mol miqdori** esa **49/43 marta** kamaydi. Hosil bo'lgan eritmadagi suv massasini aniqlang.

**Qoida:** Na₂O avval kislotani neytrallaydi (**suv hosil bo'ladi**), ortiqchasi suv bilan NaOH beradi (**suv sarflanadi**). SO₄²⁻ massasi o'zgarmaydi.

**Yechim:** H₂SO₄ — a mol, Na₂O — b mol.
1. (490 + 62b)/490 = 369/245 = 738/490 → **b = 4 mol**.
2. Boshlang'ich suv: W = (490 − 98a)/18 mol; o'zgarish = 2a − b mol.
3. W + 2a − 4 = (43/49)W → (6/49)W = 4 − 2a; W = 49(10 − 2a)/18 → yechimdan **a = 0,5 mol**.
4. W = 24,5 mol; oxirgi suv = 24,5 + 1 − 4 = **21,5 mol = 387 g**.

**Javob:** D) 387

**Tipik xato:** Suvni grammda emas, molda taqqoslash shartini e'tibordan qoldirish; Na₂O ning ikkinchi reaksiyasini unutish.

---

### 30-savol · **B**

**Shart:** 11,4 g A metall sulfati bilan 33,6 g B metall perxlorati to'la reaksiyaga kirishganda 23,3 g B metall birikmasi hosil bo'ldi. A va B ni aniqlang.

**Qoida:** B(ClO₄)₂ → BSO₄ da mollar o'zgarmaydi; farq anionlarda: 2ClO₄⁻ (199) − SO₄²⁻ (96) = **103 g/mol**.

**Yechim:**
1. n = (33,6 − 23,3)/103 = **0,1 mol** → M(BSO₄) = 233 → B = **137 (Ba)**.
2. A₂(SO₄)₃: n = 0,1/3 → M = 11,4 · 3/0,1 ... = 342 → A = (342 − 288)/2 = **27 (Al)**.

**Javob:** B) Al va Ba

**Tipik xato:** Perxlorat ionini ClO₃⁻ deb olish; A ni ikki valentli deb hisoblash.

---

### 31-savol · **D**

**Shart:** 0,6 mol sulfit angidrid ishqor eritmasiga yuttirilganda **1 : 2 mol nisbatda** 133,2 g nordon va o'rta tuzlar aralashmasi hosil bo'ldi. Ishqorni aniqlang.

**Qoida:** MHSO₃ (M + 81) va M₂SO₃ (2M + 80); oltingugurt balansi.

**Yechim:**
1. Nordon = x, o'rta = 2x: x + 2x = 0,6 → **x = 0,2**.
2. 0,2(M + 81) + 0,4(2M + 80) = 133,2 → M + 48,2 = 133,2 → **M = 85 → rubidiy**.

**Javob:** D) RbOH

**Tipik xato:** Nisbatni teskari olish (o'rta : nordon); M₂SO₃ da ikkita metallni unutish.

---

### 32-savol · **C**

**Shart:** Teng massada olingan SO₂ va O₂ reaksiyasidan 20 g sulfat angidrid hosil bo'ldi. Ortib qolgan gaz takror reaksiyaga kirishishi uchun qaysi gazdan qancha massa kerak?

**Qoida:** 2SO₂ + O₂ → 2SO₃. Teng massada olinganda SO₂ ning mollari O₂ nikidan **ikki marta kam**, demak **SO₂ — cheklovchi**.

**Yechim:**
1. n(SO₃) = 0,25 mol → sarflangan SO₂ = **0,25 mol = 16 g** (butunlay) → ikkala gazdan **16 g** dan olingan.
2. O₂: 16 g = 0,5 mol; sarflangani 0,125 mol → ortgani **0,375 mol = 12 g**.
3. Uni reaksiyaga kiritish uchun SO₂: 2 · 0,375 = 0,75 mol = **48 g**.

**Javob:** C) m(SO₂) = 48 g

**Tipik xato:** Ortgan gazni SO₂ deb olish; kerakli gaz massasini ortgan gaz massasi bilan tenglashtirish.

---

## II QISM — kengaytirilgan yozma topshiriqlar (41–43)

---

### 41-topshiriq *(6 ball — 4 banddan iborat)*

**Shart:** Molyar konsentratsiyasi va zichliklari **teng** bo'lgan 300 g CaBr₂ eritmasiga 200 g Na₃PO₄ eritmasidan qo'shildi (reaksiyadan so'ng eritmada **faqat bir xil tuz** qoldi). Brom ionlarini to'liq cho'ktirish uchun C%/C_M = 13,6 bo'lgan AgNO₃ eritmasidan yetarli miqdorda qo'shildi; hosil bo'lgan eritma **856,2 g** bo'ldi. U tuzning massa ulushi **6,8 %** bo'lguncha 5,36 A tok bilan elektroliz qilindi. Hosil bo'lgan vodoroddan (CO + 2H₂ ⇄ CH₄O) foydalanib olingan organik moddaning konsentratsiyasi 1,7 mol/l bo'ldi (K = 1/4, V = 1 l).
1) CaBr₂ eritmasining foiz konsentratsiyasi · 2) AgNO₃ eritmasining hajmi (ml) · 3) Elektroliz necha soat · 4) Is gazining boshlang'ich konsentratsiyasi

**Qoida:** 3CaBr₂ + 2Na₃PO₄ → Ca₃(PO₄)₂↓ + 6NaBr. Teng molyarlik va zichlikda 300 g va 200 g eritmalardagi mollar nisbati avtomatik **3 : 2** bo'ladi — shuning uchun ikkala reagent ham qoldiqsiz sarflanadi va eritmada **faqat NaBr** qoladi ✓
\`C% = C_M·M/(10ρ)\` → 13,6 = 170/(10ρ) → **ρ = 1,25 g/ml**.

**Yechim:** n(CaBr₂) = k.
1. Ca₃(PO₄)₂ = k/3 mol = 310k/3 g; NaBr = 2k mol.
2. AgNO₃ eritmasining massasi S: (500 − 310k/3) + S − 376k = 856,2.
3. **k = 0,3 mol** da barcha sonlar butun chiqadi:
   - Ca₃(PO₄)₂ = 0,1 mol = 31 g → eritma 469 g
   - AgBr = 0,6 mol = 112,8 g → S = 856,2 − 469 + 112,8 = **500 g**
   - AgNO₃ = 0,6 mol = 102 g → C% = 20,4 %; C_M = 20,4·10·1,25/170 = **1,5 M** → 20,4/1,5 = **13,6** ✓
4. **1)** ω(CaBr₂) = 0,3 · 200/300 = **20 %**
5. **2)** V = 500/1,25 = **400 ml**
6. **3)** Eritmada NaNO₃ = 0,6 mol = 51 g. 6,8 % bo'lishi uchun eritma = 51/0,068 = **750 g** → parchalangan suv = 856,2 − 750 = 106,2 g = **5,9 mol**.
   H₂ = 5,9 mol → n(e⁻) = 11,8 mol → Q = 1 138 700 C → t = Q/5,36 = 212 444 s ≈ **59 soat**
7. **4)** [H₂]₀ = 5,9 mol/l; CH₃OH = 1,7 → [H₂]ᵐᵤᵥ = 5,9 − 3,4 = **2,5**.
   K = [CH₃OH]/([CO][H₂]²) = 1/4 → [CO]ᵐᵤᵥ = 1,7·4/6,25 = 1,088 → **[CO]₀ = 1,088 + 1,7 ≈ 2,79 mol/l**

**Javob:** 1) 20 % · 2) 400 ml · 3) ≈59 soat · 4) ≈2,79 mol/l

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Teng molyarlik/zichlikdan 3 : 2 nisbat avtomatik bajarilishi ko'rsatilgan | 0,6 |
| C%/C_M dan ρ = 1,25 g/ml | 0,6 |
| Massa balansidan k = 0,3 mol | 0,8 |
| **1-band:** 20 % | 0,5 |
| **2-band:** 400 ml | 0,6 |
| Elektrolizda faqat suv parchalanishi va 750 g | 0,8 |
| **3-band:** ≈59 soat | 0,7 |
| Muvozanat ifodasi va [H₂]ᵐᵤᵥ = 2,5 | 0,8 |
| **4-band:** ≈2,79 mol/l | 0,6 |

**Tipik xato:** Cho'kmalarni (Ca₃(PO₄)₂, AgBr) eritma massasidan ayirmaslik; NaNO₃ elektrolizida tuz parchalanadi deb o'ylash; muvozanatda H₂ ning sarfini 1,7 (CH₃OH ga teng) deb olish — u **ikki barobar** (3,4).

---

### 42-topshiriq *(6 ball — 7 ta reaksiya)*

**1.** (CH₃)₃C–CH(CH₃)–COONa + NaOH →(t) **dekarboksillanish**:
(CH₃)₃C–CH₂–CH₃ (2,2-dimetilbutan) + Na₂CO₃

**2.** C₆H₅ONa + CH₃CH₂Br → **C₆H₅–O–C₂H₅** + NaBr *(Vilyamson sintezi)*
**Nomi: etoksibenzol (fenil etil efir)**

**3.** CH₃–C(CH₃)=CH–CH(CH₃)–CH₃ + KMnO₄ + H₂SO₄ → qo'shbog' **uziladi**; ikki o'rinbosarli uglerod **ketonga**, bitta vodorodli uglerod **kislotaga** aylanadi:
5C₇H₁₄ + 6KMnO₄ + 9H₂SO₄ → 5CH₃COCH₃ + 5(CH₃)₂CHCOOH + 6MnSO₄ + 3K₂SO₄ + 9H₂O
*(Mahsulotlar: aseton va 2-metilpropan kislota.)*

**4.** 3CH₃–C≡CH →(t°, aktiv ko'mir) **trimerlanish**:
**1,3,5-trimetilbenzol (mezitilen)**

**5.** CH≡C–CH₂–C(CH₃)₂–CH₃ + H₂O →(Hg²⁺) **Kucherov reaksiyasi**:
CH₃–CO–CH₂–C(CH₃)₂–CH₃ (4,4-dimetilpentan-2-on)

**6.** C₃H₅(OH)₃ + 3C₁₆H₃₃COOH → C₃H₅(OOC–C₁₆H₃₃)₃ + 3H₂O *(trimargarin — qattiq yog')*

**7.** 6CO₂ + 6H₂O →(fotosintez, xloroplast) C₆H₁₂O₆ + 6O₂

| Baholash mezoni (6 ball) | Ball |
|---|---|
| 1-reaksiya: dekarboksillanish, Na₂CO₃ | 0,8 |
| 2-reaksiya: efir hosil bo'lishi + **nomi** | 1,0 |
| 3-reaksiya: keton va kislota, tenglashtirish | 1,2 |
| 4-reaksiya: trimerlanish + **nomi** | 1,0 |
| 5-reaksiya: Kucherov, keton | 0,8 |
| 6-reaksiya: trigliserid va 3 mol suv | 0,7 |
| 7-reaksiya: fotosintez koeffitsiyentlari | 0,5 |

**Tipik xato:** 3-reaksiyada ikkala parchani ham kislota deb yozish (ikki o'rinbosarli uglerod **keton** beradi); 4-da dimerlanish yoki Kucherov deb o'ylash; 5-da aldegid yozish (faqat **asetilenning o'zi** aldegid beradi, gomologlari — keton).

---

### 43-topshiriq *(6 ball — 4 banddan iborat)*

**Shart:** Teng moldan Fe₂(SO₄)₃·9H₂O va Al₂(SO₄)₃·xH₂O dan iborat 56 g aralashmaga 300 g 8 % li NaOH quyildi. Qo'ng'ir cho'kma qizdirildi, hosil bo'lgan oksid **is gazi** bilan qaytarildi, so'ngra isitilgan 10 % li nitrat kislotada eritildi; tuz termik parchalandi.
1) x · 2) Parchalanishdan hosil bo'lgan gazlar massalari yig'indisi · 3) Sarflangan HNO₃ va hosil bo'lgan oddiy modda miqdorlari · 4) Na₂SO₄ dissotsilanish darajasi

**Qoida:** Ishqor ikkala sulfatni ham gidroksidga aylantiradi (har biriga **6 mol NaOH**); Fe(OH)₃ — qo'ng'ir. Fe₂O₃ + 3CO → 2Fe + 3CO₂. Issiq suyultirilgan HNO₃ bilan temir → Fe(NO₃)₃ + NO. 4Fe(NO₃)₃ → 2Fe₂O₃ + 12NO₂ + 3O₂.

**Yechim:**
1. n(NaOH) = 24/40 = **0,6 mol** → 6n + 6n = 12n = 0,6 → **n = 0,05 mol** (har bir tuzdan).
2. **1)** Massa: 0,05 · 562 + 0,05(342 + 18x) = 56 → 28,1 + 17,1 + 0,9x = 56 → 0,9x = 10,8 → **x = 12**.
3. Fe(OH)₃ = 0,1 mol → Fe₂O₃ = 0,05 mol → CO bilan qaytarilib **Fe = 0,1 mol**.
4. Fe + 4HNO₃(suyul.) → Fe(NO₃)₃ + NO↑ + 2H₂O → **n(HNO₃) = 0,4 mol**, NO = 0,1 mol.
5. **2)** 4Fe(NO₃)₃ → 2Fe₂O₃ + 12NO₂ + 3O₂: 0,1 mol tuzdan NO₂ = 0,3 mol (**13,8 g**), O₂ = 0,075 mol (**2,4 g**) → jami **16,2 g**.
6. **3)** HNO₃ = **0,4 mol**; oddiy modda — parchalanishdan chiqqan **O₂ = 0,075 mol**.
7. **4)** Na₂SO₄ = 3 · 0,05 + 3 · 0,05 = **0,3 mol**. Dissotsilangan qism α:
   ionlar = 0,3α · 3 = 0,9α; qolgan tuzdagi atomlar = 0,3(1 − α) · 7 = 2,1(1 − α).
   0,9α = 2,1(1 − α) + 0,6 → 3α = 2,7 → **α = 0,9 = 90 %**.

**Javob:** 1) x = 12 · 2) 16,2 g · 3) 0,4 mol HNO₃ va 0,075 mol O₂ · 4) 90 %

| Baholash mezoni (6 ball) | Ball |
|---|---|
| NaOH ikkala sulfatga 6 moldan sarflanishi → n = 0,05 | 0,8 |
| **1-band:** x = 12 | 0,7 |
| Fe(OH)₃ → Fe₂O₃ → Fe zanjiri (0,1 mol) | 0,7 |
| Fe + suyultirilgan HNO₃ → NO tenglamasi | 0,7 |
| Fe(NO₃)₃ parchalanish tenglamasi | 0,7 |
| **2-band:** 16,2 g | 0,7 |
| **3-band:** 0,4 mol va 0,075 mol | 0,7 |
| Na₂SO₄ = 0,3 mol (ikkala sulfatdan) | 0,5 |
| **4-band:** α = 90 % | 0,5 |

> **Izoh:** 3-bandda "hosil bo'lgan oddiy modda" deb parchalanishdagi **kislorod** olindi.
> Agar zanjirdagi **temir** (0,1 mol) nazarda tutilgan bo'lsa, u ham asosli javob — o'quvchi
> qaysi reaksiyani ko'rsatganiga qarab baholang.

**Tipik xato:** Alyuminiy gidroksidni ishqorda eritib yuborish (u holda x butun chiqmaydi); Fe(NO₃)₃ parchalanishida faqat NO₂ ni sanash; 4-bandda ionlar sonini 2 deb olish (Na₂SO₄ **3 ta** ion beradi).

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | B | 12 | B | 23 | A |
| 2 | D | 13 | A | 24 | A |
| 3 | C | 14 | A | 25 | B |
| 4 | C | 15 | C | 26 | B |
| 5 | C | 16 | B | 27 | A |
| 6 | A | 17 | C | 28 | D |
| 7 | D | 18 | D | 29 | D |
| 8 | A | 19 | C | 30 | B |
| 9 | A | 20 | A | 31 | D |
| 10 | C | 21 | B | 32 | C |
| 11 | C | 22 | D | | |

**41:** 20 % · 400 ml · ≈59 soat · ≈2,79 mol/l
**42:** 7 ta reaksiya (2 va 4 nomlanadi: etoksibenzol, mezitilen)
**43:** x = 12 · 16,2 g · 0,4 mol va 0,075 mol · 90 %

⚠️ **33–40-topshiriqlar manbada yo'q** — bu variant to'liq emas.
`,rt=`# Sertifikat — 15.03.2025, I smena

**Manba:** \`Milliy sertifikat .pdf\`, 31–34-betlar · 43 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–40 qisqa yozma · 41–43 kengaytirilgan yozma

> ⚠️ **14, 15, 16-savollar manbada bo'sh** — faqat raqamlari turibdi, matn ham, rasm ham yo'q.
> **17-savolning javob variantlari** (A–D strukturalari) ham chiqmagan.
> Manbaning o'zida 37, 39 va 41-topshiriqlarning javoblari qavs ichida berilgan — yechimlar
> ular bilan solishtirib tekshirildi (37 va 41 to'liq mos, 39 da farq bor — izohga qarang).

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **C**

**Shart:** N₂O va NO dan iborat 22,4 l (n.sh.) aralashmada azot va kislorod massalari teng bo'lsa, azot monoksidning hajmini toping.

**Qoida:** Massalarni **element bo'yicha** yozamiz: N₂O da 28 g N va 16 g O, NO da 14 g N va 16 g O.

**Yechim:** N₂O — a, NO — b (a + b = 1 mol).
1. 28a + 14b = 16a + 16b → 12a = 2b → **b = 6a**.
2. 7a = 1 → a = 1/7, **b = 6/7 mol**.
3. V(NO) = (6/7) · 22,4 = **19,2 l**.

**Javob:** C) 19,2

**Tipik xato:** Mollarni teng deb olish; kislorod massasini N₂O da 32 deb hisoblash.

---

### 2-savol · **A**

**Shart:** 5,6 l murakkab modda tarkibida 27,09·10²³ ta proton bo'lsa, moddani aniqlang.

**Yechim:**
1. n(modda) = **0,25 mol**; n(proton) = 27,09·10²³/6,02·10²³ = **4,5 mol**.
2. Bitta molekulada 4,5/0,25 = **18 ta proton**.
3. SiH₄: 14 + 4 = **18** ✓ (H₂O va CH₄ da 10 ta; Ar — oddiy modda).

**Javob:** A) SiH₄

**Tipik xato:** Argonni tanlash — u **murakkab modda emas**.

---

### 3-savol · **A**

**Shart:** Teng mol nisbatda olingan Ca, Me va Cu aralashmasida noma'lum metall massasi kalsiynikidan 3,2 g og'ir, misnikidan 1,6 g kam. Metallni aniqlang.

**Yechim:** Mollar n ga teng.
1. M·n = 40n + 3,2 va M·n = 64n − 1,6 → 24n = 4,8 → **n = 0,2**.
2. M = 40 + 3,2/0,2 = **56 → temir**.

**Javob:** A) Fe

**Tipik xato:** Massalar farqini atom massalari farqi deb olish (mollarni unutish).

---

### 4-savol · **C** *(sxemali)*

**Shart:** Sxemada qattiq, suyuq va gaz holatlar orasidagi 6 ta o'tish raqamlangan. **Sublimatsiya** hodisasini ko'rsating.

**Qoida:** Sublimatsiya — **qattiqdan to'g'ridan-to'g'ri gazga** o'tish (desublimatsiya — teskarisi).

**Yechim:** Sxemada qattiq → gaz yo'nalishidagi strelka — **5-raqam** (6-si gaz → qattiq).

**Javob:** C) 5

**Tipik xato:** Desublimatsiya (6) bilan almashtirish; bug'lanish (3) ni tanlash.

---

### 5-savol · **B**

**Shart:** Eritmada Fe²⁺ 0,05 mol, Al³⁺ 0,2 mol, Br⁻ 0,6 mol, NO₃⁻ va Cl⁻ jami 0,14 mol. Ca²⁺ ionlarining massasini (mg) toping.

**Qoida:** Elektroneytrallik.

**Yechim:**
1. Manfiy zaryadlar: 0,6 + 0,14 = **0,74**.
2. Musbat: 2(0,05) + 3(0,2) + 2x = 0,7 + 2x → 2x = 0,04 → **x = 0,02 mol**.
3. m = 0,02 · 40 = 0,8 g = **800 mg**.

**Javob:** B) 800

**Tipik xato:** Al³⁺ ni ikki zaryadli deb olish; grammda javob berish.

---

### 6-savol · **B**

**Shart:** Qaytaruvchilik qila olmaydigan elementning konfiguratsiyasini toping.

**Qoida:** Faqat **ftor** hech qachon elektron bermaydi (eng elektromanfiy element).

**Yechim:** 1s²2s²2p⁵ = **F** ✓ (A — Li, C — S, D — Cl: hammasi oksidlanishi mumkin)

**Javob:** B) 1s²2s²2p⁵

**Tipik xato:** Xlorni (D) tanlash — xlor +1 dan +7 gacha oksidlanish darajalarini namoyon qiladi.

---

### 7-savol · **A**

**Shart:** Berilgan konfiguratsiyalardan qaysi birida **elektron qo'zg'alish** hodisasi kuzatilgan?

**Qoida:** Qo'zg'alishda **juft elektron ajraladi** va bo'sh orbitalga o'tadi. Juftlar avval p da, keyin s da uziladi — demak p pog'onachada juft qolgani holda s dan elektron ko'chmaydi.

**Yechim:**
1. A) ns¹np³nd¹ — asosiy holat ns²np³ (p da juft yo'q) → faqat **s juftligi** uzilgan ✓ **mumkin**
2. B) ns¹np⁴nd¹ va C) ns¹np⁴nd² — p da juft turgani holda s uzilgan ✗
3. D) ns²np²nd² — s juft turgani holda p dan ikkita elektron ketgan ✗

**Javob:** A) ns¹np³nd¹

**Tipik xato:** Shunchaki "d pog'onacha band bo'lsa — qo'zg'algan" deb birinchi uchraganini belgilash.

---

### 8-savol · **B**

**Shart:** Ti atomi va Fe³⁺ ionida nechta elektronning **to'rtala kvant soni** bir xil bo'ladi?

**Qoida:** To'rtala kvant son mos kelishi uchun elektronlar **aynan bir xil orbitalda** va **bir xil spinda** bo'lishi kerak.

**Yechim:**
1. Ti: 1s²2s²2p⁶3s²3p⁶3d²4s² · Fe³⁺ (23 e⁻): 1s²2s²2p⁶3s²3p⁶3d⁵
2. Ichki qavatlar to'liq mos: 2 + 2 + 6 + 2 + 6 = **18 ta**.
3. 3d: Ti da 2 ta toq elektron (Gund qoidasi bo'yicha birinchi ikki orbitalda, spin +½); Fe³⁺ da beshala orbital toq → shu **2 tasi mos keladi**.
4. Ti ning 4s² elektronlariga Fe³⁺ da juft yo'q.
5. Jami = **20**.

**Javob:** B) 20

**Tipik xato:** 3d elektronlarini umuman sanamaslik (18) yoki 4s ni ham qo'shish (22).

---

### 9-savol · **A**

**Shart:** Mis kuporosi va FeSO₄·7H₂O ning 130,6 g aralashmasi suvda eritilib BaCl₂ ta'sir ettirilganda 0,5 mol oq cho'kma hosil bo'ldi. Mis kuporosining massasini toping.

**Qoida:** Oq cho'kma — **BaSO₄**; uning mollari **jami sulfat** miqdoriga teng (kristallogidratlar 1 : 1 sulfat beradi).

**Yechim:** CuSO₄·5H₂O = a (250), FeSO₄·7H₂O = b (278).
1. a + b = **0,5**; 250a + 278b = 130,6.
2. 250a + 139 − 278a = 130,6 → 28a = 8,4 → **a = 0,3**.
3. m = 0,3 · 250 = **75 g**.

**Javob:** A) 75

**Tipik xato:** Kristallizatsion suvni molyar massaga qo'shmaslik (160 va 152 bilan hisoblash).

---

### 10-savol · **A** *(jadvalli)*

**Shart:** Dissotsilanishdan hosil bo'lgan ionlar sonini moddalarga moslang:
1) n(kation) = n(anion) · 2) n(kation) > n(anion) · 3) n(kation) < n(anion)
a-temir(II) gidroksosulfat · b-kaliy nitrat · c-alyuminiy xlorid · d-kaliy alyuminiy sulfat

**Yechim:**
1. (FeOH)₂SO₄ → **2** (FeOH)⁺ + **1** SO₄²⁻ → kation > anion → **2**
2. KNO₃ → 1 + 1 → **1**
3. AlCl₃ → 1 Al³⁺ + **3** Cl⁻ → kation < anion → **3**
4. KAl(SO₄)₂ → K⁺ + Al³⁺ (2 kation) + 2 SO₄²⁻ (2 anion) → teng → **1**

**Javob:** A) 1 – b,d; 2 – a; 3 – c

**Tipik xato:** Achchiqtoshni (KAl(SO₄)₂) bitta kation beradi deb olish; gidroksosulfatni FeOHSO₄ deb yozish (temir **II** valentli → (FeOH)₂SO₄).

---

### 11-savol · **D**

**Shart:** 5 litrli idishdagi modda 0,1 minutdan keyin 20 moldan 5 molgacha kamaydi. Reaksiya tezligini (mol/(l·s)) aniqlang.

**Yechim:**
1. Δc = (20 − 5)/5 = **3 mol/l**; t = 0,1 min = **6 s**.
2. v = 3/6 = **0,5 = 1/2**.

**Javob:** D) 1/2

**Tipik xato:** Minutda qoldirish (30) yoki hajmga bo'lmaslik.

---

### 12-savol · **D**

**Shart:** 10 l idishga noma'lum miqdorda CO₂ va 4 mol H₂ solindi; 72 sekunddan keyin muvozanat qaror topdi (K = 1). O'rtacha tezlik 0,25 mol/(l·min) bo'lsa, CO₂ ning dastlabki miqdorini aniqlang.

**Qoida:** CO₂ + H₂ ⇄ CO + H₂O — barcha koeffitsiyentlar 1, shuning uchun o'zgarishlar teng.

**Yechim:**
1. t = 72 s = **1,2 min** → Δc = 0,25 · 1,2 = **0,3 mol/l** → Δn = **3 mol**.
2. Muvozanatda: H₂ = 4 − 3 = **1**; CO = H₂O = **3**; CO₂ = x − 3.
3. K = (3 · 3)/((x − 3) · 1) = 1 → **x = 12 mol**.

**Javob:** D) 12

**Tipik xato:** Sekundni minutga aylantirmaslik; K ni hajmga bo'lib chalkashish (bu reaksiyada hajm qisqaradi).

---

### 13-savol · **D**

**Shart:** Tarkibida 0,3 mol oltingugurt saqlagan oleumni neytrallash uchun 24 % li NaOH qo'shildi; hosil bo'lgan eritmaga 174,2 g suv qo'shilganda 14,2 % li tuz eritmasi hosil bo'ldi. Oleumdagi **erituvchi va erigan modda** mol nisbatini aniqlang.

**Qoida:** Oleum — H₂SO₄·nSO₃: **erituvchi — H₂SO₄**, **erigan modda — SO₃**. Ikkalasi ham oxir-oqibat Na₂SO₄ beradi.

**Yechim:** H₂SO₄ = a, SO₃ = b; a + b = **0,3**.
1. Na₂SO₄ = 0,3 mol = **42,6 g**; NaOH = 0,6 mol = 24 g → eritma **100 g**.
2. Oleum massasi 98a + 80b; umumiy eritma = 98a + 80b + 100 + 174,2.
3. 42,6/(98a + 80b + 274,2) = 0,142 → 98a + 80b = **25,8**.
4. a + b = 0,3 bilan birga: 18a = 1,8 → **a = 0,1**, **b = 0,2** → nisbat **1 : 2**.

**Javob:** D) 1:2

**Tipik xato:** Oleumni faqat H₂SO₄ deb hisoblash; "erituvchi" va "erigan modda" ni almashtirish (javob 2:1 chiqadi).

---

### 14, 15, 16-savollar

> **Manbada bo'sh** — raqamlar turibdi, savol matni va rasmi yo'q. Saytga kiritilmaydi.

---

### 17-savol *(javob variantlari manbada chiqmagan)*

**Shart:** Sxema: A →(HCl) B; A, B va C ga NaOH qo'shilganda **E** hosil bo'ladi (B dan −H₂O bilan).
· C dagi uglerodlar soni B dagidan 2 marta ko'p · A, B va E da uglerodlar soni **teng**

**Qoida:** HCl bilan tuz beradigan va ishqor bilan qayta asl holiga qaytadigan sinf — **aminokislotalar** (ichki tuz/xlorid tuzi) yoki **aminlar**.

**Yechim (mantiq):**
1. A + HCl → B: B — A ning **xlorid tuzi** (–NH₃⁺Cl⁻), shuning uchun uglerodlar soni o'zgarmaydi ✓
2. B + NaOH → E (−H₂O): tuzdan yana erkin aminokislota/amin **E** chiqadi; A, B, E da uglerod teng ✓
3. C da uglerod **ikki barobar** — demak C — **dipeptid** (ikkita bir xil aminokislota qoldig'i); NaOH bilan gidrolizlanib yana E beradi ✓
4. Demak **E — aminokislota** (A bilan bir xil uglerodli, masalan glitsin yoki alanin).

**Javob:** E — aminokislota (A ning erkin shakli). Aniq variant manbada ko'rinmagani uchun tanlanmadi.

> **Izoh:** savolni saytga qo'yish uchun A–D strukturalari kerak — ular PDF'da chiqmagan.

**Tipik xato:** C ni gomolog deb o'ylash — "uglerodlar 2 marta ko'p" **dimerlanish** (peptid) belgisidir.

---

### 18-savol · **C**

**Shart:** CuO + NH₃ → hosil bo'lgan **oddiy moddalar** farqi 49,2 g bo'lsa, sarflangan ammiak hajmini (l, n.sh.) toping.

**Qoida:** 3CuO + 2NH₃ → 3Cu + N₂↑ + 3H₂O; oddiy moddalar — **Cu va N₂**.

**Yechim:** N₂ = n deb olamiz → Cu = 3n.
1. 192n − 28n = 164n = 49,2 → **n = 0,3**.
2. NH₃ = 2n = **0,6 mol** → V = **13,44 l**.

**Javob:** C) 13,44

**Tipik xato:** Suvni ham "oddiy modda" deb olish; nisbatni 1 : 1 deb hisoblash.

---

### 19-savol · **B**

**Shart:** Glyukoza 1 : 2 nisbatda ikki qismga ajratildi; birinchi qismi 60 % unum bilan vodorod yordamida qaytarildi, ikkinchi qismi yondirilganda 54 g suv hosil bo'ldi. Qaytarilish mahsulotining massasini toping.

**Yechim:**
1. n(H₂O) = 3 mol → ikkinchi qism = **0,5 mol** → birinchi qism = **0,25 mol**.
2. Sorbit = 0,25 · 0,6 = 0,15 mol → m = 0,15 · 182 = **27,3 g**.

**Javob:** B) 27,3

**Tipik xato:** Unumni qo'llamaslik (45,5 g); mahsulotni glyukon kislota deb olish (bu **oksidlanish**).

---

### 20-savol · **C**

**Shart:** 200 g 11,7 % li NaCl eritmasi elektroliz qilindi, 0,7 mol gazlar hosil bo'ldi. O₂ massasini toping.

**Qoida:** Avval **2NaCl + 2H₂O → 2NaOH + H₂↑ + Cl₂↑**, xlorid tugagach **2H₂O → 2H₂ + O₂**.

**Yechim:**
1. n(NaCl) = 23,4/58,5 = **0,4 mol** → Cl₂ = **0,2**, shu bosqichda H₂ = **0,2**.
2. Qolgan gazlar: 0,7 − 0,4 = 0,3 mol = H₂ (2y) + O₂ (y) = 3y → **y = 0,1 mol O₂**.
3. m = **3,2 g**.

**Javob:** C) 3,2

**Tipik xato:** Butun gazni suv elektrolizidan deb hisoblash; xlorni unutish.

---

### 21-savol · **A**

**Shart:** 1 mol propilen gidrogenlandi; natijada **sp³ orbitallar soni 2,2 marta** ortdi. Gidrogenlanish darajasini toping.

**Qoida:** Propilen CH₃–CH=CH₂ da **1 ta** sp³ uglerod, propan C₃H₈ da **3 ta**.

**Yechim:** x mol gidrogenlansin.
1. sp³ atomlar: boshida 1; keyin 3x + (1 − x) = **1 + 2x**.
2. (1 + 2x)/1 = 2,2 → **x = 0,6 → 60 %**.

**Javob:** A) 60

**Tipik xato:** Orbitallar sonini (×4) alohida hisoblashga urinib chalkashish — nisbat bir xil chiqadi.

---

### 22-savol · **C**

**Shart:** 0,2 mol noma'lum alkan yondirilganda mahsulotlar massa farqi 12 g bo'lsa, alkanni aniqlang.

**Yechim:** CₙH₂ₙ₊₂ → nCO₂ + (n+1)H₂O.
1. m(CO₂) = 0,2n · 44 = 8,8n; m(H₂O) = 0,2(n+1) · 18 = 3,6n + 3,6.
2. 8,8n − 3,6n − 3,6 = 12 → 5,2n = 15,6 → **n = 3 → propan**.

**Javob:** C) propan

**Tipik xato:** Suv mollarini n deb olish (alkanda **n+1** bo'ladi).

---

### 23-savol · **B**

**Shart:** 0,5 mol kumol yonganda oksidlovchi qaytaruvchidan nechta (N_A) elektron oladi?

**Qoida:** Oksidlovchi — **kislorod**; har bir O atomi **2 ta** elektron oladi.

**Yechim:**
1. Kumol C₉H₁₂ + **12O₂** → 9CO₂ + 6H₂O.
2. 0,5 mol uchun O₂ = 6 mol = 12 mol O atomi → elektronlar = **24 mol = 24·N_A**.

**Javob:** B) 24

**Tipik xato:** Kumolni C₉H₁₀ (stirol) deb olish; elektronlarni uglerod bo'yicha sanash.

---

### 24-savol · **B**

**Shart:** E va F ning umumiy formulasi C₄H₈O₂. E ning ishqoriy gidrolizida G va H hosil bo'ldi: G ishqor bilan qizdirilganda **metan** berdi, H natriy bilan **vodorod** ajratdi. F "kumush ko'zgu" reaksiyasiga kirishib olingan I modda **kislotalar bilan ham, spirtlar bilan ham** murakkab efir hosil qiladi.

**Qoida:** Ishqor bilan qizdirilganda metan beradigan tuz — **CH₃COONa** → E **atsetat efiri**. I ham kislota, ham spirt xossasini ko'rsatsa — unda **ham COOH, ham OH** bor → F — **gidroksialdegid**.

**Yechim:**
1. E = **CH₃COOCH₂CH₃** (2) → G = CH₃COONa, H = C₂H₅OH ✓
   *(3-variant CH₃COOCH(CH₃)CH₃ — C₅H₁₀O₂, formulaga mos emas)*
2. F = **CH₃CH(OH)CH₂CHO** (4) → I = CH₃CH(OH)CH₂COOH ✓
   *(5 — keton, kumush ko'zgu bermaydi; 6 — C₅H₁₀O₂)*

**Javob:** B) E = 2 va F = 4

**Tipik xato:** Variantlardagi formulalarni C₄H₈O₂ ga tekshirmaslik.

---

### 25-savol · **D**

**Shart:** 30 ta glitsin va 20 ta alanindan iborat 1574 g peptidning gidroliziga necha mol suv ketadi?

**Qoida:** n ta aminokislotali **chiziqli** peptidda (n − 1) ta bog'.

**Yechim:**
1. M = 30 · 75 + 20 · 89 − 49 · 18 = 2250 + 1780 − 882 = **3148**.
2. n(peptid) = 1574/3148 = **0,5 mol** → suv = 49 · 0,5 = **24,5 mol**.

**Javob:** D) 24,5

**Tipik xato:** 50 ta suv olish; molyar massani suvni ayirmasdan hisoblash.

---

### 26-savol · **D** *(2 qator to'g'ri — izohga qarang)*

**Shart:** Qaysi qatorda barcha ma'lumotlar to'g'ri? (modda · izomeri · gomologi · polimerlanishi)
1) buten · penten · geksen · polimerlanadi
2) etanol · dimetilefir · pentanol · polimerlanadi
3) ksilol · etilbenzol · propilbenzol · polimerlanmaydi
4) 2-nitropropan · alanin · nitrometan · polimerlanmaydi

**Yechim:**
1. Penten butenning **gomologi**, izomeri emas ✗
2. Etanol **polimerlanmaydi** ✗
3. Ksilol (C₈H₁₀) va etilbenzol (C₈H₁₀) — izomer ✓; propilbenzol — gomolog ✓; polimerlanmaydi ✓ → **to'g'ri**
4. 2-nitropropan va alanin — ikkalasi ham **C₃H₇NO₂** ✓ izomer; nitrometan — gomolog ✓; polimerlanmaydi ✓ → **to'g'ri**

**Javob:** D) 4

> **Izoh:** 3-qator ham to'liq to'g'ri — savolda **ikkita** to'g'ri javob bor. Rasmiy kalit
> nitroalkan ↔ aminokislota izomeriyasini tekshirishga qaratilgani uchun **4** olindi;
> o'quvchi 3 ni belgilasa, uni xato deb hisoblamang.

**Tipik xato:** Izomer va gomologni chalkashtirish (1-qatorning tuzog'i).

---

### 27-savol · **C**

**Shart:** 4 : 2 : 3 mol nisbatdagi propilen, etin va propadiyen aralashmasining massasi 102 g bo'lsa, **alkinning** massasini toping.

**Qoida:** Aralashmadagi yagona alkin — **etin (asetilen)**; propadiyen — alkadiyen.

**Yechim:**
1. Birlik massasi: 4 · 42 + 2 · 26 + 3 · 40 = **340 g** → 102/340 = **0,3**.
2. n(C₂H₂) = 2 · 0,3 = 0,6 mol → m = **15,6 g**.

**Javob:** C) 15,6

**Tipik xato:** Propadiyenni alkin deb olish (12 g chiqadi); nisbatni massa nisbati deb hisoblash.

---

### 28-savol · **A**

**Shart:** Metilaminga noma'lum alkan qo'shilganda C atomlari soni **4 marta**, H atomlari soni **3,4 marta** ortdi. Alkanni toping.

**Yechim:** CH₃NH₂ — a mol (C = a, H = 5a), alkan CₙH₂ₙ₊₂ — b mol.
1. Uglerod: a + nb = 4a → **nb = 3a**.
2. Vodorod: 5a + (2n+2)b = 3,4 · 5a = 17a → **(2n+2)b = 12a**.
3. b = 3a/n ni qo'yamiz: (2n+2)·3/n = 12 → 6n + 6 = 12n → **n = 1 → metan**.

**Javob:** A) metan

**Tipik xato:** Metilaminda 5 ta emas, 3 ta vodorod deb olish (NH₂ dagi ikkitasi ham sanaladi).

---

### 29-savol · **A**

**Shart:** Biuret reaksiyasida peptidlar qanday rang beradi?

**Qoida:** Rang zanjir uzunligiga bog'liq: **dipeptid — ko'k**, **tripeptid — binafsha**, **yuqori peptidlar — qizil (pushti)**.

**Javob:** A) dipeptid-ko'k, tripeptid-binafsha, yuqori peptid-qizil

**Tipik xato:** Barcha oqsillar binafsha rang beradi deb yodlab qolish — bu **faqat tripeptidlar** uchun.

---

### 30-savol · **D**

**Shart:** Etan va etendan iborat 89,6 l (n.sh.) aralashmaga KMnO₄ eritmasi ta'sir ettirildi; 62 g **diollar** aralashmasi olindi. Etanning mol ulushini aniqlang.

**Qoida:** Etan oksidlanmaydi; eten **etilenglikol** beradi (M = 62).

**Yechim:**
1. n(aralashma) = **4 mol**; n(glikol) = 62/62 = **1 mol** → eten = 1 mol.
2. Etan = 3 mol → ulush = 3/4 = **0,75**.

**Javob:** D) 0,75

**Tipik xato:** Etanni ham oksidlantirish; glikol molyar massasini 60 deb olish.

---

### 31-savol · **B**

**Shart:** Pb(NO₃)₂ eritmasiga Na₂S qo'shildi. Cho'kma rangi qanday?

**Qoida:** PbS — **qora** cho'kma (qo'rg'oshin ionining sifat reaksiyasi).

**Javob:** B) qora

**Tipik xato:** PbI₂ (sariq) yoki PbSO₄ (oq) bilan chalkashtirish.

---

### 32-savol · **A** *(4-band terish xatosi bilan — izohga qarang)*

**Shart:** Glyukoza va fruktoza uchun **umumiy** ma'lumotlarni toping.
1) aldoza 2) ketoza 3) polimerlanadi 4) qaytarilganda spirt hosil bo'ladi 5) gidrolizlanmaydi 6) "kumush ko'zgu" reaksiyasiga kirishadi

**Yechim:**
1. 1 — faqat glyukoza ✗ · 2 — faqat fruktoza ✗ · 6 — faqat glyukoza ✗
2. 5 — ikkalasi **monosaxarid**, gidrolizlanmaydi ✓
3. 3 — ikkalasi ham polisaxaridlar hosil qiladi ✓
4. 4 — ikkalasi qaytarilganda **olti atomli** spirt (sorbit/mannit) beradi ✓

**Javob:** A) 3, 4, 5

> **Izoh:** manbada 4-band "**5 atomli** spirt" deb yozilgan — bu xato, sorbit **6 atomli**.
> Boshqa variantlar (1, 2, 6) aniq noto'g'ri bo'lgani uchun kalit baribir A bo'lib qoladi.

**Tipik xato:** Fruktoza ham kumush ko'zgu beradi deb B ni tanlash.

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** Ammoniy sulfat va natriy nitrit aralashmasi qizdirilganda A, B va D moddalar hosil bo'ldi.
· A — havoda eng ko'p miqdorda topiladigan modda · Etan yonganda X va B moddalari hosil bo'ladi
Variantlar: A) 1,44 B) 2,88 C) 2,74 D) 2,64 E) 2,52 F) 6,9

**Umumiy yechim:**
1. (NH₄)₂SO₄ + 2NaNO₂ → Na₂SO₄ + 2N₂↑ + 4H₂O *(oraliq NH₄NO₂ → N₂ + 2H₂O)*
2. **A = N₂** (havoning 78 %) · **B = H₂O** (etan yonganda CO₂ va H₂O chiqadi) · **D = Na₂SO₄**

---

### 33-savol · **C**

**Yechim:** Ba + 2H₂O → Ba(OH)₂ + H₂↑ → n(Ba) = 0,04/2 = **0,02 mol** → m = **2,74 g**

**Javob:** C) 2,74

**Tipik xato:** Bariyni 1 : 1 nisbatda olish (5,48 g).

---

### 34-savol · **E**

**Yechim:**
1. n(N₂) = 0,784/22,4 = **0,035 mol**.
2. 3Mg + N₂ → Mg₃N₂ → n(Mg) = 0,105 mol → m = **2,52 g**.

**Javob:** E) 2,52

**Tipik xato:** Magniyni 1 : 1 olish; 784 ml ni litrga aylantirmaslik.

---

### 35-savol · **D**

**Yechim:**
1. Na₂SO₄ da **7 ta atom** → n = 0,14/7 = **0,02 mol**.
2. Tenglama bo'yicha 1 mol (NH₄)₂SO₄ → 1 mol Na₂SO₄ → m = 0,02 · 132 = **2,64 g**.

**Javob:** D) 2,64

**Tipik xato:** Na₂SO₄ da 3 ta atom (ion) deb sanash.

---

## III QISM — qisqa yozma topshiriqlar (36–40)

---

### 36-topshiriq

**Shart:** Temir disulfidi mo'l nitrat kislotada eritildi; M = 30 g/mol bo'lgan 0,15 mol gaz ajraldi va 69,1 g eritma olindi. Eritmada HNO₃ ning massa ulushi H₂SO₄ nikidan 3 marta ko'p. Eritmadagi suv massasini toping.

**Qoida:** M = 30 → gaz **NO**. FeS₂ da Fe⁺² → Fe⁺³ (1 e⁻), 2S⁻¹ → 2S⁺⁶ (14 e⁻) → jami **15 e⁻**; NO uchun 3 e⁻ → **1 FeS₂ : 5 NO**.

**Yechim:**
1. n(NO) = 0,15 → **n(FeS₂) = 0,03 mol**.
2. Fe(NO₃)₃ = 0,03 mol = **7,26 g**; H₂SO₄ = 0,06 mol = **5,88 g**.
3. Ortib qolgan HNO₃ = 3 · 5,88 = **17,64 g**.
4. Suv = 69,1 − 7,26 − 5,88 − 17,64 = **38,32 g**.

**Javob:** 38,32 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Gaz NO ekani M orqali aniqlangan | 0,4 |
| Elektron balansdan FeS₂ : NO = 1 : 5 | 0,8 |
| Fe(NO₃)₃ va H₂SO₄ massalari | 0,7 |
| Ortiqcha kislota 17,64 g (3 marta sharti) | 0,7 |
| Suv 38,32 g | 0,6 |

**Tipik xato:** FeS₂ dagi oltingugurtni −2 deb olish (elektronlar 15 emas, 17 chiqadi); temir(II) tuzi hosil bo'ladi deb o'ylash.

---

### 37-topshiriq · *(manbadagi javob: C₅H₁₀O)*

**Shart:** Kumush nitratga 3,6 g temir plastinka botirildi (Fe(NO₃)₂ hosil bo'lgan); plastinka massasi 10 g ga yetganda jarayon to'xtatildi. Ajralgan kumushni 3,44 g aldegidga Ag₂O ta'sir ettirib ham olish mumkin. Aldegidni toping.

**Qoida:** Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag — 1 mol temir uchun plastinka **160 g** og'irlashadi. Aldegid 1 : 2 nisbatda kumush beradi.

**Yechim:**
1. Δm = 10 − 3,6 = 6,4 g → n(Fe) = 6,4/160 = **0,04 mol** → **n(Ag) = 0,08 mol**.
2. RCHO + Ag₂O → RCOOH + 2Ag → n(aldegid) = **0,04 mol**.
3. M = 3,44/0,04 = **86 → C₅H₁₀O** (pentanal).

**Javob:** C₅H₁₀O

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Plastinka massasi o'zgarishi ifodasi (216 − 56) | 0,8 |
| n(Fe) = 0,04 va n(Ag) = 0,08 | 0,7 |
| Aldegid : Ag = 1 : 2 | 0,7 |
| M = 86 va formula C₅H₁₀O | 1,0 |

**Tipik xato:** Plastinka massasini kumush massasi deb olish; formaldegid uchun 4 Ag qoidasini oddiy aldegidga ham qo'llash.

---

### 38-topshiriq

**Shart:** Kaliy nitrat va kaliy xlorat aralashmasi katalizator ishtirokida parchalandi; 11,2 g gaz ajraldi va qattiq qoldiqda kaliyning massa ulushi 50 % bo'ldi. Hosil bo'lgan **kislorodsiz tuz** kislotali muhitda KMnO₄ bilan oksidlandi. Hosil bo'lgan K₂SO₄ miqdorini (mol) aniqlang.

**Qoida:** 2KNO₃ → 2KNO₂ + O₂ · 2KClO₃ →(MnO₂) 2KCl + 3O₂ (katalizatorli — **KClO₄ emas**).

**Yechim:** KNO₃ = a, KClO₃ = b.
1. O₂: a/2 + 1,5b = 11,2/32 = **0,35**.
2. Qoldiq KNO₂ (85a) + KCl (74,5b); 39(a + b) = 0,5(85a + 74,5b) → 3,5b = 7a → **b = 2a**.
3. 3,5a = 0,35 → **a = 0,1**, **b = 0,2** → KCl = **0,2 mol**.
4. **10KCl + 2KMnO₄ + 8H₂SO₄ → 5Cl₂↑ + 2MnSO₄ + 6K₂SO₄ + 8H₂O**
5. K₂SO₄ = 0,2 · 6/10 = **0,12 mol**.

**Javob:** 0,12 mol

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Ikkala parchalanish tenglamasi (katalizatorli variant) | 0,6 |
| Kislorod balansi a/2 + 1,5b = 0,35 | 0,6 |
| Kaliy ulushidan b = 2a | 0,7 |
| a = 0,1 va b = 0,2 | 0,5 |
| KCl oksidlanish tenglamasi tenglashtirilgan | 0,5 |
| K₂SO₄ = 0,12 mol | 0,3 |

**Tipik xato:** KClO₃ ni katalizatorsiz parchalash (4KClO₃ → KCl + 3KClO₄); K₂SO₄ ni faqat KMnO₄ dan sanash (KCl dagi kaliy ham o'tadi).

---

### 39-topshiriq *(manbadagi javob bilan farq bor — izohga qarang)*

**Shart:** 0,8 mol eten KMnO₄ ning **suvli** eritmasi bilan C₂H₄(OH)₂ gacha oksidlandi. Eritma hajmi 1,6 l bo'lsa, KMnO₄ ning molyar konsentratsiyasini toping.

**Qoida:** Neytral muhitda (Vagner reaksiyasi): **3C₂H₄ + 2KMnO₄ + 4H₂O → 3C₂H₄(OH)₂ + 2MnO₂↓ + 2KOH**
*(elektron balans: eten 2 e⁻ beradi, MnO₄⁻ 3 e⁻ oladi → 3 : 2)*

**Yechim:**
1. n(KMnO₄) = 0,8 · 2/3 = **0,533 mol**.
2. C = 0,533/1,6 = **0,33 mol/l** (≈1/3 M).

**Javob:** ≈0,33 mol/l

> **Izoh:** manbada javob **0,25** deb berilgan — bu eten : KMnO₄ = 2 : 1 nisbatidan kelib
> chiqadi, ya'ni marganes 4 ta elektron olgan deb hisoblangan. Vagner reaksiyasining
> to'g'ri nisbati **3 : 2** (MnO₄⁻ → MnO₂, 3 e⁻), shuning uchun to'g'ri javob 0,33 M.
> Saytga qo'yishda tuzatish tavsiya etiladi.

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Neytral muhitda mahsulot MnO₂ ekani ko'rsatilgan | 0,8 |
| Elektron balans (2 va 3) | 0,8 |
| Tenglama 3 : 2 nisbatda tenglashtirilgan | 0,8 |
| C = 0,33 mol/l | 0,8 |

**Tipik xato:** Kislotali muhit tenglamasini ishlatish (u holda glikol emas, CO₂ hosil bo'ladi).

---

### 40-topshiriq

**Shart:** Hajmiy nisbatlari **1 : 7 : 2** bo'lgan alkan, kislorod va azot aralashmasi portlatildi, suv bug'lari kondensatlandi. Qolgan gazlar aralashmasida **ikkita oddiy va bitta murakkab** modda bo'lib, neonga nisbatan zichligi 1,8. Alkandagi sp³ gibridlangan orbitallar sonini toping.

**Qoida:** Qolgan gazlar: **CO₂** (murakkab), **ortiqcha O₂** va **N₂** (ikkita oddiy) — demak kislorod mo'l.

**Yechim:** Alkan 1, O₂ 7, N₂ 2 hajm.
1. CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → nCO₂ + (n+1)H₂O.
2. Qolgan: CO₂ = n; O₂ = 7 − (3n+1)/2; N₂ = 2 → jami **8,5 − 0,5n**.
3. Massa = 44n + 32(6,5 − 1,5n) + 56 = **264 − 4n**.
4. M̄ = 1,8 · 20 = 36: (264 − 4n)/(8,5 − 0,5n) = 36 → 14n = 42 → **n = 3 (propan)**.
5. Propanda 3 ta sp³ uglerod → orbitallar = 3 · 4 = **12**.

**Javob:** 12

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Qolgan gazlar tarkibi to'g'ri aniqlangan (CO₂, O₂, N₂) | 0,7 |
| Suv kondensatlangani hisobga olingan | 0,5 |
| Mollar va massa ifodalari | 0,8 |
| n = 3 (propan) | 0,7 |
| sp³ orbitallar 12 ta | 0,5 |

**Tipik xato:** Suv bug'ini aralashmada qoldirish; sp³ **atomlar** sonini (3) javob deb yozish.

---

## IV QISM — kengaytirilgan topshiriqlar (41–43)

---

### 41-topshiriq *(6 ball — manbadagi barcha javoblar bilan mos)*

**Shart:** Tarkibida 0,9 mol HCl bo'lgan 200,7 g eritmaga temir kuyundisi, so'ng temir kukuni qo'shildi va kukun to'liq erib ketdi. Zichligi 1,143 g/ml bo'lgan 25 % li **yagona tuz** eritmasi hosil bo'ldi. Eritma ikki qismga ajratildi: birinchisiga stexiometrik miqdorda qizil qon tuzi qo'shilganda KFe[Fe(CN)₆] hosil bo'ldi; ikkinchisiga 200 g AgNO₃ qo'shilganda Fe(NO₃)₂ va H₂O dan iborat 255,25 g eritma hosil bo'ldi.

**Qoida:** Fe₃O₄ + 8HCl → FeCl₂ + 2FeCl₃ + 4H₂O; **Fe + 2FeCl₃ → 3FeCl₂**; Fe + 2HCl → FeCl₂ + H₂↑.
"Yagona tuz" — eritmada faqat **FeCl₂** (Fe³⁺ to'liq qaytarilgan, kislota to'liq sarflangan).

**Yechim:** Fe₃O₄ = a, Fe = b.
1. HCl balansi: 8a + (Fe bilan reaksiyaga kirgani) = 0,9.
2. **a = 0,05** da: HCl 0,4 → FeCl₃ = 0,1 mol; uni qaytarishga Fe = **0,05 mol**; qolgan HCl 0,5 → Fe = **0,25 mol**.
   **1) m(Fe₃O₄) = 0,05 · 232 = 11,6 g** ✓
   **2) n(Fe) = 0,05 + 0,25 = 0,3 mol** ✓
3. FeCl₂ jami = 0,05 + 0,15 + 0,25 = **0,45 mol = 57,15 g**.
   Eritma = 200,7 + 11,6 + 16,8 − 0,5 (H₂) = **228,6 g**; 57,15/228,6 = **25 %** ✓
4. **3)** V = 228,6/1,143 = 0,2 l → C = 0,45/0,2 = **2,25 M** ✓
5. **4)** Ikkinchi qismda x mol FeCl₂ (massasi 508x): 508x + 200 − 287x = 255,25 → **x = 0,25 mol**
   → AgNO₃ = 0,5 mol = 85 g → ω = 85/200 = **42,5 %** ✓
6. **5)** Birinchi qism = 0,45 − 0,25 = **0,2 mol** FeCl₂;
   FeCl₂ + K₃[Fe(CN)₆] → KFe[Fe(CN)₆]↓ + 2KCl → m = 0,2 · 307 = **61,4 g** ✓

**Javob:** 11,6 g · 0,3 mol · 2,25 M · 42,5 % · 61,4 g

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Uchala reaksiya tenglamasi (Fe₃O₄ + HCl, Fe + FeCl₃, Fe + HCl) | 0,9 |
| "Yagona tuz" sharti FeCl₂ ekani asoslangan | 0,6 |
| **1-band:** 11,6 g | 0,6 |
| **2-band:** 0,3 mol (ikki yo'nalish qo'shilgan) | 0,8 |
| Eritma massasi 228,6 g (H₂ ayirilgan) va 25 % tekshirilgan | 0,7 |
| **3-band:** 2,25 M | 0,6 |
| **4-band:** qismlar teng emasligi aniqlanib 42,5 % | 0,9 |
| **5-band:** 61,4 g (turnbul ko'ki) | 0,9 |

**Tipik xato:** Eritmani teng ikki qismga bo'lingan deb olish (42,5 % chiqmaydi); vodorodni eritma massasidan ayirmaslik; qizil qon tuzi Fe²⁺ bilan **turnbul ko'kini**, sariq qon tuzi esa Fe³⁺ bilan **berlin lazurini** berishini chalkashtirish.

---

### 42-topshiriq *(6 ball — 7 ta reaksiya)*

**1.** CH₃–CHBr–CH₃ + 5CH₃–CHBr–CH₂–CH₃ + 6Na → **Vyurts reaksiyasi** (uchta mahsulot):
- (CH₃)₂CH–CH(CH₃)₂ — **2,3-dimetilbutan**
- (CH₃)₂CH–CH(CH₃)–CH₂CH₃ — **2,3-dimetilpentan**
- CH₃CH₂–CH(CH₃)–CH(CH₃)–CH₂CH₃ — **3,4-dimetilgeksan**
*(+ 6NaBr; manbada "6NaCl" deb yozilgan — terish xatosi)*

**2.** CH₂=CH–C(CH₃)=CH–CH(CH₃)–CH₃ (3,5-dimetilgeksa-1,3-diyen) **polimerlanishi** — konjugatlangan diyen 1,4-qo'shilish bilan:
n CH₂=CH–C(CH₃)=CH–R → [–CH₂–CH=C(CH₃)–CH(R)–]ₙ , bu yerda R = –CH(CH₃)CH₃

**3.** C₆H₆ + HC≡CH →(kat.) C₆H₅–CH=CH₂ (**stirol**)

**4.** Cl–CH₂–CH₂–C(CH₃)₂–C(CH₃)=CH–CH₃ **+ NaOH (suvli)** → galogen **gidrolizlanadi**, qo'shbog' tegilmaydi:
HO–CH₂–CH₂–C(CH₃)₂–C(CH₃)=CH–CH₃ + NaCl
*(Suvli ishqor — almashinish; spirtli bo'lganda eliminatsiya bo'lardi.)*

**5.** C₂H₄(OH)₂ + Cu(OH)₂ → **mis(II) glikolyat** (to'q ko'k eritma) + 2H₂O

**6.** HCOOH + 2Cu(OH)₂ →(t) CO₂↑ + **Cu₂O↓** (qizil) + 3H₂O

**7.** glitsin + fenilalanin + alanin → **tripeptid** (Gli-Phe-Ala) + 2H₂O

| Baholash mezoni (6 ball) | Ball |
|---|---|
| 1-reaksiya: uchala Vyurts mahsuloti + nomlari | 1,5 |
| 2-reaksiya: 1,4-polimerlanish zvenosi | 1,0 |
| 3-reaksiya: stirol | 0,7 |
| 4-reaksiya: suvli ishqor — gidroliz (eliminatsiya emas) | 1,0 |
| 5-reaksiya: glikolyat kompleksi | 0,6 |
| 6-reaksiya: Cu₂O va CO₂ | 0,7 |
| 7-reaksiya: tripeptid va 2 mol suv | 0,5 |

**Tipik xato:** 1-da faqat bitta (simmetrik) mahsulot yozish; 4-da spirtli ishqor kabi qo'shbog' hosil qilish; 6-da chumoli kislotani oddiy kislota deb olib faqat tuz yozish (uning **aldegid guruhi** bor).

---

### 43-topshiriq *(6 ball — 4 xil oksidni aniqlash)*

**Shart:** Mol nisbati **teng** bo'lgan 8,19 g 4 xil oksid 200 g 31,5 % li HNO₃ bilan reaksiyaga kirishdi; ortib qolgan kislotaga 360 ml 2M NaOH sarflandi.
· XO → X(NO₃)₂ → Na₂[X(OH)₄] → (CO₂ bilan) X(OH)₂ oq cho'kma → qizdirilganda **XO (2,43 g)**
· YO → Y(NO₃)₂ → **Y(OH)₂ havorang**
· ZO → Z(NO₃)₃ → NaSCN bilan **to'q qizil eritma**
· EO → E(NO₃)₂

**Qoida:** Gidroksokompleks beradigan amfoter + oq cho'kma → **Zn**; havorang gidroksid → **Cu**; rodanid bilan qon-qizil → **Fe³⁺**; to'rtinchisi hisob bilan topiladi.

**Yechim:**
1. ZnO: 2,43/81 = **0,03 mol** → har bir oksid 0,03 mol.
2. Oksidlar massalari yig'indisi: 8,19/0,03 = **273 g/mol**.
   ZnO 81 + CuO 80 + FeO 72 = 233 → **EO = 40 = MgO** ✓
3. **Oksidlar: ZnO, CuO, FeO, MgO** *(temir +2 oksididan nitrat kislota ta'sirida Fe³⁺ hosil bo'ladi)*
4. Tekshirish — kislota balansi: HNO₃ = 1 mol; ortgani = 0,72 mol → **sarflangani 0,28 mol**:
   - ZnO, CuO, MgO: 2 moldan → 3 · 0,06 = 0,18
   - 3FeO + 10HNO₃ → 3Fe(NO₃)₃ + NO↑ + 5H₂O → 0,03 · 10/3 = **0,10**
   - Jami = **0,28 mol** ✓✓
5. **Elektron konfiguratsiyalar:**
   - Zn²⁺: 1s²2s²2p⁶3s²3p⁶3d¹⁰ ([Ar]3d¹⁰)
   - Cu²⁺: [Ar]3d⁹
   - Fe³⁺: [Ar]3d⁵
   - Mg²⁺: 1s²2s²2p⁶ ([Ne])

**Javob:** ZnO · CuO · FeO · MgO

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Na₂[Zn(OH)₄] va oq cho'kma orqali X = Zn | 0,8 |
| Havorang gidroksid → Y = Cu | 0,6 |
| NaSCN bilan to'q qizil → Z = Fe (Fe³⁺) | 0,7 |
| 2,43 g dan n = 0,03 mol va yig'indi 273 | 0,9 |
| E = Mg aniqlangan | 0,6 |
| FeO ning HNO₃ bilan **oksidlanish** reaksiyasi | 0,8 |
| Kislota balansi 0,28 mol bilan tekshirilgan | 0,8 |
| To'rtta ion konfiguratsiyasi | 0,8 |

**Tipik xato:** ZO ni Fe₂O₃ deb olish (massa yig'indisi mos kelmaydi); FeO ni oddiy almashinish bilan eritish (kislota balansi buziladi); Cu²⁺ ni [Ar]3d⁸4s¹ deb yozish.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | C | 12 | D | 23 | B |
| 2 | A | 13 | D | 24 | B |
| 3 | A | 14–16 | **manbada yo'q** | 25 | D |
| 4 | C | 17 | variantlar yo'q | 26 | D* |
| 5 | B | 18 | C | 27 | C |
| 6 | B | 19 | B | 28 | A |
| 7 | A | 20 | C | 29 | A |
| 8 | B | 21 | A | 30 | D |
| 9 | A | 22 | C | 31 | B |
| 10 | A | | | 32 | A* |
| 11 | D | | | | |

**33:** C (2,74) · **34:** E (2,52) · **35:** D (2,64)
**36:** 38,32 g · **37:** C₅H₁₀O · **38:** 0,12 mol · **39:** ≈0,33 M* · **40:** 12
**41:** 11,6 g · 0,3 mol · 2,25 M · 42,5 % · 61,4 g
**42:** 7 ta reaksiya · **43:** ZnO, CuO, FeO, MgO

\`*\` — **26** (ikkita qator to'g'ri), **32** (shartda "5 atomli spirt" xato), **39** (manbadagi 0,25 javobi noto'g'ri nisbatdan chiqqan). Izohlarga qarang.
`,it=`# Sertifikat — 15.03.2025, II smena

**Manba:** \`Milliy sertifikat .pdf\`, 35–38-betlar · 43 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–40 qisqa yozma · 41–43 kengaytirilgan yozma

> Bu variant I smena bilan bir kunda o'tkazilgan — **19, 21, 24, 27, 29-savollar I smenadagi
> savollarning aynan o'zi** (mos ravishda 13, 8, 26, 29, 12-savollar). Ularning yechimi
> \`08 - Sertifikat 15.03.2025 I smena.md\` faylida ham bor.
> ⚠️ **7-savolning sxemasi manbada chiqmagan** (bo'sh joy).

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **B** *(strukturali)*

**Shart:** Sxemada uchta tuzilish berilgan: **X** ikkita kislorod orqali C=O ga bog'langan · **H–O–Y** ikkita kislorod orqali SO₂(=O)₂ ga · **H–O** va **Z–O** birgalikda C=O ga. X, Y, Z ni mos ravishda ko'rsating.

**Qoida:** Formuladagi bog'lar soni metallning **valentligini** beradi.

**Yechim:**
1. Birinchisi — **XCO₃** (karbonat): X ikki bog' → **II valentli**.
2. Ikkinchisi — **Y(OH)SO₄** (gidroksosulfat): Y bitta OH + sulfat (II) → **III valentli**.
3. Uchinchisi — **ZHCO₃** (gidrokarbonat): Z bitta bog' → **I valentli**.
4. Ca (II) · Al (III) · K (I) ✓

**Javob:** B) Ca; Al; K

**Tipik xato:** Gidroksosulfatni ikki valentli metalnikidir deb o'ylash; gidrokarbonatni karbonat bilan chalkashtirish.

---

### 2-savol · **A**

**Shart:** O'rtacha molekulyar massasi 11,6 g/mol bo'lgan CO₂, H₂ va X aralashmasida CO₂ hajmi H₂ hajmiga teng; X massasi H₂ massasidan 6 marta katta. X ni aniqlang.

**Yechim:** CO₂ = H₂ = a mol; X = b mol.
1. m(H₂) = 2a → m(X) = **12a** → bM = 12a.
2. M̄ = (44a + 2a + 12a)/(2a + b) = 58a/(2a + b) = 11,6 → **b = 3a**.
3. M = 12a/3a = **4 → geliy**.

**Javob:** A) He

**Tipik xato:** "Teng hajm" ni teng massa deb olish; X ning massasini butun aralashmaga nisbatan hisoblash.

---

### 3-savol · **B**

**Shart:** 1 : 9 mol nisbatda olingan A₂ va B₂ reaksiyaga kirishib **yagona modda** hosil qildi. Reaksiyadan keyin bosim dastlabkining 60 % ini tashkil qiladi. Mahsulot formulasini ko'rsating.

**Qoida:** O'zgarmas hajm va haroratda **bosim ∝ mollar soni**.

**Yechim:** Dastlab 10 mol (1 + 9) → oxirida **6 mol**.
1. A₂ to'liq sarflansin (u kam): A₂ + xB₂ → 2AB_x deb olamiz.
2. Qolgan + hosil bo'lgan: (9 − x) + 2 = 6 → **x = 5**.
3. A₂ + 5B₂ → 2AB₅ ✓ *(tekshirish: 10 − 6 + 2 = 6 ✓)*

**Javob:** B) AB₅

**Tipik xato:** Mahsulotni 1 mol deb olish (A₂B₆ varianti) — bunda bosim 70 % chiqadi.

---

### 4-savol · **C**

**Shart:** 64,4 g bir asosli to'yingan karbon kislotada **7 mol atom** bo'lsa, kislotani aniqlang.

**Qoida:** CₙH₂ₙO₂ da atomlar soni = **3n + 2**.

**Yechim:**
1. 64,4(3n + 2)/(14n + 32) = 7 → 193,2n + 128,8 = 98n + 224 → 95,2n = 95,2 → **n = 1**.
2. HCOOH: 64,4/46 = 1,4 mol × 5 atom = **7** ✓

**Javob:** C) HCOOH

**Tipik xato:** "7 mol atom" ni "7 ta atom" deb o'qib molekuladagi atomlarni sanash.

---

### 5-savol · **B**

**Shart:** Klechkovskiy qoidasi keltirilgan qatorni belgilang.

**Qoida:** **Klechkovskiy:** orbitallar **(n + l)** yig'indisi ortib borish tartibida to'ladi; teng bo'lsa — n kichigi avval.
*(A — Gund qoidasi · C — Pauli prinsipi · D — karrali nisbatlar qonuni.)*

**Javob:** B

**Tipik xato:** Gund qoidasi bilan chalkashtirish.

---

### 6-savol · **A**

**Shart:** Kaliy nitrat termik parchalanganda azotning oksidlanish darajasi nechi birlikka o'zgaradi?

**Yechim:** 2KNO₃ → 2KNO₂ + O₂ → N⁺⁵ → N⁺³ → **2 birlik**.

**Javob:** A) 2

**Tipik xato:** Og'ir metall nitratlari kabi NO₂ gacha parchalanadi deb o'ylash (ishqoriy metall nitratlari **nitritgacha** parchalanadi).

---

### 7-savol *(manbada sxema yo'q)*

> Savol matni bor ("molekula tarkibidagi π-bog'lar yig'indisi o'zgarishi"), lekin uchta jarayon
> ko'rsatilgan sxema PDF'da chiqmagan. Saytga kiritilmaydi.

---

### 8-savol · **B**

**Shart:** 1,1 mol fosfin va silan aralashmasida vodorod atomlari soni 3,6 (mol) bo'lsa, silanning massasini hisoblang.

**Yechim:** PH₃ = a, SiH₄ = b.
1. a + b = 1,1; 3a + 4b = 3,6.
2. 3(1,1 − b) + 4b = 3,6 → **b = 0,3** → m = 0,3 · 32 = **9,6 g**.

**Javob:** B) 9,6

**Tipik xato:** Fosfinni PH₅ deb olish; javobni molda qoldirish.

---

### 9-savol · **C**

**Shart:** K₂SiO₃ gidrolizini **sekinlashtirish** uchun qanday modda qo'shish kerak?

**Qoida:** Kuchsiz kislota + kuchli asos tuzi → **ishqoriy** gidroliz: SiO₃²⁻ + H₂O ⇄ HSiO₃⁻ + OH⁻. Muvozanatni chapga surish uchun **ishqor** qo'shiladi.

**Yechim:** Suv — gidrolizni kuchaytiradi ✗ · AlBr₃ va Hg(NO₃)₂ — nordon gidrolizlanadi, o'zaro kuchaytiradi ✗ · **NaOH** ✓

**Javob:** C) O'yuvchi natriy

**Tipik xato:** Nordon tuz qo'shish (bu **birgalikdagi gidroliz** — jarayon oxirigacha boradi).

---

### 10-savol · **B**

**Shart:** Glyukozaning 1/5 qismi spirtli bijg'itilganda 0,6 mol gaz ajraldi. Qolgan qismi **moy kislotali** bijg'itilganda qancha (mol) gaz ajraladi?

**Qoida:** Spirtli: C₆H₁₂O₆ → 2C₂H₅OH + **2CO₂** · Moy kislotali: C₆H₁₂O₆ → C₃H₇COOH + **2CO₂ + 2H₂** (jami **4 mol gaz**).

**Yechim:**
1. 0,6 mol CO₂ → 1/5 qism = **0,3 mol** → jami glyukoza = 1,5 mol → qolgani = **1,2 mol**.
2. Gaz = 4 · 1,2 = **4,8 mol**.

**Javob:** B) 4,8

**Tipik xato:** Moy kislotali bijg'ishda vodorodni unutish (2,4 chiqadi — A tuzog'i).

---

### 11-savol · **C**

**Shart:** Benzol gomologi tarkibidagi **sp³ gibrid orbitallar soni** molekuladagi vodorodlarning **oksidlanish darajalari yig'indisiga** teng. 0,25 mol gomologning massasini hisoblang.

**Qoida:** CₙH₂ₙ₋₆ da halqa uglerodlari sp², yon zanjirdagilari **sp³** (har birida 4 orbital); vodorodning o.d. +1 → yig'indi = **2n − 6**.

**Yechim:**
1. Yon zanjir uglerodlari: n − 6 ta → orbitallar **4(n − 6)**.
2. 4(n − 6) = 2n − 6 → 2n = 18 → **n = 9** → C₉H₁₂ (M = 120).
3. m = 0,25 · 120 = **30 g**.

**Javob:** C) 30,0

**Tipik xato:** sp³ **atomlar** sonini olish (n − 6); vodorodning o.d. ni −1 deb hisoblash.

---

### 12-savol · **A**

**Shart:** 200 g 10 % li NaOH eritmasiga yetarli miqdorda 18,25 % li HCl qo'shilganda necha gramm NaCl cho'kmaga tushadi? S(NaCl) = 10

**Yechim:**
1. NaOH = 20 g = **0,5 mol** → HCl = 0,5 mol = 18,25 g → kislota eritmasi = **100 g**.
2. Eritma = 300 g; NaCl = 0,5 · 58,5 = **29,25 g**; suv = 300 − 29,25 = **270,75 g**.
3. Eriydigan tuz = 10 · 2,7075 = **27,075 g** → cho'kma = 29,25 − 27,075 = **2,175 g**.

**Javob:** A) 2,175

**Tipik xato:** Suvni 300 g deb olish; neytrallanishda hosil bo'lgan suvni alohida qo'shish (u allaqachon umumiy massada).

---

### 13-savol · **A**

**Shart:** Moy kislotaning izomerini ko'rsating.

**Qoida:** Moy kislota C₃H₇COOH = **C₄H₈O₂**.

**Yechim:** Propil metanoat HCOOC₃H₇ = **C₄H₈O₂** ✓ · sirka kislotaning propil efiri va izomoy kislotaning metil efiri — C₅H₁₀O₂ ✗ · metil propil efir — C₄H₁₀O ✗

**Javob:** A) Propil metanoat

**Tipik xato:** Faqat "efir" so'ziga qarab tanlash, formulani tekshirmaslik.

---

### 14-savol · **B**

**Shart:** 6 litrli reaktorda kislorod 90 sekundda 160 g dan 16 g gacha kamaydi. Tezlikni (mol/(l·soat)) hisoblang.

**Yechim:**
1. Δn = 144/32 = 4,5 mol → Δc = **0,75 mol/l**.
2. t = 90 s = **0,025 soat** → v = 0,75/0,025 = **30**.

**Javob:** B) 30

**Tipik xato:** Soatga o'tkazmaslik (0,0125 — D tuzog'i, bu mol/(l·s)).

---

### 15-savol · **A**

**Shart:** Polipropilenning molekulyar massasi 6720 bo'lsa, polimerlanish darajasini toping.

**Yechim:** Zveno C₃H₆ = 42 → n = 6720/42 = **160**.

**Javob:** A) 160

**Tipik xato:** Zvenoni C₂H₄ (28) deb olish — u polietilenniki.

---

### 16-savol · **A**

**Shart:** Noma'lum alken KMnO₄ ning **suvli** eritmasida oksidlandi. Tenglamaning chap va o'ng tomonidagi **atomlar soni yig'indisi 84** bo'lsa, alkenni aniqlang.

**Qoida:** 3CₙH₂ₙ + 2KMnO₄ + 4H₂O → 3CₙH₂ₙ(OH)₂ + 2MnO₂↓ + 2KOH

**Yechim:**
1. Chap: 3·3n + 2·6 + 4·3 = **9n + 24**; o'ng: 3(3n + 4) + 2·3 + 2·3 = **9n + 24**.
2. Jami: 18n + 48 = 84 → **n = 2 → etilen**.

**Javob:** A) Etilen

**Tipik xato:** Faqat bitta tomonni sanash; tenglamani tenglashtirmay atomlarni hisoblash.

---

### 17-savol · **B**

**Shart:** x g fosfor konsentrlangan HNO₃ bilan ta'sirlashdi; **xuddi shuncha** HNO₃ bilan y g mis ta'sirlashadi; y − x = 7. Z g temir CuSO₄ ga tushirilganda y g mis ajraladi. Z ni toping.

**Qoida:** P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O · Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O

**Yechim:**
1. Kislota teng: 5x/31 = 4y/64 = y/16 → **x = 31y/80**.
2. y − 31y/80 = 7 → (49/80)y = 7 → **y = 11,43 g Cu = 0,1786 mol**.
3. Fe + CuSO₄ → FeSO₄ + Cu → n(Fe) = 0,1786 mol → **Z = 10 g**.

**Javob:** B) 10

**Tipik xato:** Mis uchun 8 mol HNO₃ olish (suyultirilgan kislota formulasi); temirni Fe³⁺ gacha oksidlanadi deb hisoblash.

---

### 18-savol · **A** *(sxemali)*

**Shart:** 10 litr CH₄ →(+Cl₂) X →(+Na) 3,2 litr C₂H₆. Har bir reaksiya unumi **bir xil** bo'lsa, unumni (%) aniqlang.

**Qoida:** CH₄ + Cl₂ → CH₃Cl + HCl · **2CH₃Cl + 2Na → C₂H₆ + 2NaCl** (Vyurts) — ikkinchi bosqichda hajm **ikki barobar kamayadi**.

**Yechim:**
1. CH₃Cl = 10η; C₂H₆ = (10η/2)·η = **5η²**.
2. 5η² = 3,2 → η² = 0,64 → **η = 0,8 = 80 %**.

**Javob:** A) 80

**Tipik xato:** Unumni bir marta qo'llash (32 % chiqadi); Vyurtsda 1 : 1 nisbat olish.

---

### 19-savol · **D** *(I smenadagi 13-savol bilan bir xil)*

**Shart:** 0,3 mol oltingugurt saqlagan oleum; 24 % li NaOH bilan neytrallanib, 174,2 g suv qo'shilganda 14,2 % li tuz eritmasi hosil bo'ldi. Erituvchi va erigan modda mol nisbati?

**Yechim:** H₂SO₄ = a, SO₃ = b (a + b = 0,3); Na₂SO₄ = 42,6 g; NaOH eritmasi 100 g.
42,6/(98a + 80b + 274,2) = 0,142 → 98a + 80b = 25,8 → **a = 0,1**, **b = 0,2** → **1 : 2**

**Javob:** D) 1:2

---

### 20-savol · **A**

**Shart:** y(H) : x(C) = 2 : 1 · m(O_z) : m(H_y) = 2 : 1 · M(CₓH_yO_z) = 72 g/mol · moddada **ikkilamchi uglerod yo'q**. Bu qanday modda bo'lishi mumkin?

**Yechim:**
1. y = 2x; 16z = 2y = 4x → z = x/4.
2. M = 12x + 2x + 4x = 18x = 72 → x = 4 → **C₄H₈O**.
3. Variantlardan C₄H₈O: izomoy aldegid, moy aldegid, butanon.
4. **Ikkilamchi uglerod** (2 ta uglerod bilan bog'langan): moy aldegidda 2 ta CH₂ ✗; butanonda C=O va CH₂ ✗; **izomoy aldegid (CH₃)₂CH–CHO** da faqat birlamchi va uchlamchi ✓

**Javob:** A) Izomoy aldegid

**Tipik xato:** Atsetonni tanlash (C₃H₆O — massa mos emas); karbonil uglerodni ikkilamchi deb sanamaslik.

---

### 21-savol · **C** *(I smenadagi 8-savol)*

**Yechim:** Ti (1s²…3d²4s²) va Fe³⁺ ([Ar]3d⁵): ichki qavatlar 18 ta + 3d dagi 2 ta toq elektron → **20**

**Javob:** C) 20

---

### 22-savol · **B**

**Shart:** A + Cl₂ → B; B + A → D; D ga o'yuvchi natriy qo'shilganda **osh tuzi** va E hosil bo'ldi. E haqida to'g'ri fikrni toping.

**Qoida:** Metall ortiqchasi yuqori valentli xloridni **quyi valentliga** qaytaradi: 2FeCl₃ + Fe → 3FeCl₂.

**Yechim:**
1. A = **Fe**; B = FeCl₃; D = **FeCl₂**.
2. FeCl₂ + 2NaOH → 2NaCl + **Fe(OH)₂ (E)**.
3. A) M(NaCrO₂) = 107 ≠ 90 ✗ · B) Fe(OH)₂ da **5 ta atom** ✓ · C) qattiq modda ✗ · D) M(Cu(OH)₂) = 98 ≠ 90 ✗

**Javob:** B) molekulasida 5 ta atom tutadi

**Tipik xato:** D ni FeCl₃ deb olib E = Fe(OH)₃ (7 atom) deyish.

---

### 23-savol · **C**

**Shart:** CuSO₄ eritmasi **tuz tugaguncha** elektroliz qilindi; eritma massasi 4 % ga kamaydi. Dastlabki tuzning massa ulushini aniqlang.

**Qoida:** CuSO₄ + H₂O → Cu↓ + H₂SO₄ + ½O₂↑ — har 1 mol tuzdan eritma **80 g** yo'qotadi (64 + 16).

**Yechim:** 100 g eritma, x g CuSO₄:
1. Yo'qotish = 80 · (x/160) = **x/2** = 4 g → **x = 8 g → 8 %**.

**Javob:** C) 8 %

**Tipik xato:** Faqat misni ayirish (ω = 10 % chiqadi).

---

### 24-savol · **D** *(I smenadagi 26-savol — ikkita qator to'g'ri)*

**Javob:** D) 4 *(3-qator ham to'g'ri — izohni I smena faylidan qarang)*

---

### 25-savol · **A**

**Shart:** Asosiy tarkibiy qismida **magniy** bo'lgan moddani belgilang.

**Qoida:** Magnezit — **MgCO₃** · Silvinit — KCl·NaCl · Glauber tuzi — Na₂SO₄·10H₂O · Magnetit — Fe₃O₄

**Javob:** A) Magnezit

**Tipik xato:** Nomi o'xshashligi uchun **magnetit** ni tanlash — u temir rudasi.

---

### 26-savol · **A**

**Shart:** Biuret reaksiyasi qaysi bog' uchun sifat reaksiya hisoblanadi?

**Javob:** A) –CO–NH– (**peptid bog'i**)

**Tipik xato:** Disulfid bog'ini (–S–S–) tanlash — u oqsil tuzilishida bor, lekin biuret reaksiyasi unga emas.

---

### 27-savol · **A** *(I smenadagi 29-savol)*

**Javob:** A) dipeptid-ko'k, tripeptid-binafsha, yuqori peptid-qizil

---

### 28-savol · **C**

**Shart:** 0,4 l 24,5 % li H₂SO₄ eritmasi (ρ = 1,25 g/ml) hajmi **2 m³** bo'lguncha suyultirildi. pOH ni toping.

**Yechim:**
1. m(eritma) = 400 · 1,25 = 500 g → m(H₂SO₄) = 122,5 g = **1,25 mol**.
2. V = 2 m³ = **2000 l** → C = 6,25·10⁻⁴ M → [H⁺] = 2C = **1,25·10⁻³**.
3. pH = −lg(1,25·10⁻³) = **2,9** → pOH = 14 − 2,9 ≈ **11**.

**Javob:** C) 11

**Tipik xato:** [H⁺] ni konsentratsiyaga teng deb olish (ikki asosli kislota — **2 marta ko'p**); pH ni javob deb yozish.

---

### 29-savol · **D** *(I smenadagi 12-savol)*

**Yechim:** t = 1,2 min → Δc = 0,3 mol/l → Δn = 3 mol; K = 9/(x − 3) = 1 → **x = 12 mol**

**Javob:** D) 12

---

### 30-savol · **B**

**Shart:** CO₂ va CH₃NH₂ dan iborat 7 l aralashma 5 l HBr bilan reaksiyaga kirishdi. Reaksiyadan so'ng vodorodga nisbatan zichligi 29,4 bo'lgan **ikkita gazdan** iborat aralashma hosil bo'ldi. Dastlabki aralashmadagi CO₂ hajmini aniqlang.

**Qoida:** CH₃NH₂ + HBr → CH₃NH₃Br — **qattiq tuz**, gaz fazadan chiqadi; CO₂ amin bilan ham, HBr bilan ham bu sharoitda reaksiyaga kirishmaydi.

**Yechim:** CO₂ = a, CH₃NH₂ = b (a + b = 7).
1. Qolgan gazlar: CO₂ (a) va ortiqcha HBr (5 − b) ✓ ikkita gaz.
2. M̄ = 58,8: (44a + 81(5 − b))/(a + 5 − b) = 58,8.
3. a = 7 − b ni qo'yamiz: (713 − 125b)/(12 − 2b) = 58,8 → 7,4b = 7,4 → **b = 1** → **a = 6 l**.

**Javob:** B) 6

**Tipik xato:** Tuzni gaz deb hisoblash; HBr ning ortiqcha qismini unutib "ikkita gaz" shartini buzish.

---

### 31-savol · **C** *(sxemali)*

**Shart:** Fe →(+2H₃PO₄) X₁ →(+Fe) X₂ →(Fe) X₃ (barcha reaksiyalar 100 % unum). X₃ ning massasini toping.

**Qoida:** Ortiqcha temir nordon tuzni bosqichma-bosqich **o'rta tuzgacha** qaytaradi:
Fe + 2H₃PO₄ → Fe(H₂PO₄)₂ + H₂↑ · Fe(H₂PO₄)₂ + Fe → 2FeHPO₄ + H₂↑ · 2FeHPO₄ + Fe → Fe₃(PO₄)₂ + H₂↑

**Yechim:**
1. X₁ = Fe(H₂PO₄)₂ · X₂ = FeHPO₄ · **X₃ = Fe₃(PO₄)₂** (M = 358).
2. Fosfor balansi: 2 mol H₃PO₄ → 1 mol Fe₃(PO₄)₂. Variantlarga ko'ra kislota **0,2 mol** olingan → X₃ = 0,1 mol = **35,8 g**.

**Javob:** C) 35,8

> **Izoh:** sxemada "+2H₃PO₄" koeffitsiyent sifatida yozilgan, miqdor ko'rsatilmagan.
> Javob variantlari 0,2 mol H₃PO₄ ga mos keladi.

**Tipik xato:** X₃ ni FePO₄ deb olish (temir II valentli qoladi); bosqichlarni bitta reaksiyaga birlashtirish.

---

### 32-savol · **A**

**Shart:** HClO, HClO₂, HClO₃, HClO₄ qatorida kislotalik kuchi, barqarorlik va oksidlovchilik qanday o'zgaradi?

**Qoida:** Kislorod soni ortgan sari **kislotalik kuchi** va **barqarorlik ortadi**, **oksidlovchilik kamayadi** (eng kuchli oksidlovchi — HClO).

**Javob:** A) ortadi, ortadi, kamayadi

**Tipik xato:** "HClO₄ — eng kuchli kislota, demak eng kuchli oksidlovchi" deb o'ylash.

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** Alyuminiy **suyultirilgan** nitrat kislota bilan ta'sirlashdi; jarayonda **gaz hosil bo'lmagan**.
Variantlar: A) 41 B) 20 C) 44 D) 38 E) 16,2 F) 21,6

**Umumiy qoida:** Gaz chiqmasa — azot **NH₄NO₃** gacha qaytariladi:
**8Al + 30HNO₃ → 8Al(NO₃)₃ + 3NH₄NO₃ + 9H₂O**
*(elektron balans: 8 Al × 3 = 24 = 3 × 8, chunki N⁺⁵ + 8e⁻ → N⁻³)*

---

### 33-savol · **D**

**Yechim:** Chap tomon: 8 + 30 = **38**

**Javob:** D) 38

**Tipik xato:** NO yoki N₂O bilan tenglashtirish — shartda "gaz hosil bo'lmagan" deyilgan.

---

### 34-savol · **C**

**Yechim:** Qisqa ionli tenglama: **8Al + 30H⁺ + 3NO₃⁻ → 8Al³⁺ + 3NH₄⁺ + 9H₂O**
*(27 ta NO₃⁻ ikkala tomondan qisqaradi)*
Ionlar oldidagi koeffitsiyentlar: 30 + 3 + 8 + 3 = **44**

**Javob:** C) 44

**Tipik xato:** Suvni ham ionlar qatoriga qo'shish (53 chiqadi); NO₃⁻ ni qisqartirmaslik.

---

### 35-savol · **E**

**Yechim:** 8 Al ga 9 H₂O → 0,8 mol Al → 0,9 mol H₂O = **16,2 g**

**Javob:** E) 16,2

**Tipik xato:** Suvni 0,8 mol deb olish (14,4 g).

---

## III QISM — qisqa yozma topshiriqlar (36–40)

---

### 36-topshiriq

**Shart:** 10,16 g noma'lum **metallmas oksidi** 110,4 g 10 % li NaOH eritmasi bilan ta'sirlashdi; 12,5 % li **o'rta tuz** eritmasi olindi. Hosil bo'lgan eritmadan necha gramm suv bug'latilsa, NaOH konsentratsiyasi dastlabkiga nisbatan 2,5 marta ortadi?

**Qoida:** O'rta tuz hosil bo'lishi uchun ishqor **ortiqcha** bo'lishi kerak; shuning uchun eritmada NaOH qoladi — savolning ikkinchi qismi shunga tayanadi.

**Yechim:**
1. Eritma massasi = 10,16 + 110,4 = **120,56 g**; NaOH = **11,04 g (0,276 mol)**.
2. O'rta tuz massasi = 0,125 · 120,56 = **15,07 g**.
3. Massa balansidan sarflangan NaOH: 10,16 + 40k = 15,07 + 9k → **k = 0,16 mol**.
4. Oksid: 10,16/0,08 = **127 g/mol → SeO₃** (0,08 mol; 2 NaOH per oksid ✓)
   SeO₃ + 2NaOH → Na₂SeO₄ + H₂O → tuz = 0,08 · 189 = **15,12 g** (12,5 % ✓)
5. Qolgan NaOH = 11,04 − 6,4 = **4,64 g**; kerakli ulush = 10 % · 2,5 = **25 %**.
6. Yangi eritma massasi = 4,64/0,25 = 18,56 g → bug'latiladigan suv = 120,56 − 18,56 = **102 g**.

**Javob:** 102 g *(oksid — SeO₃)*

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Eritma massasi va tuz massasi topilgan | 0,5 |
| Massa balansidan sarflangan NaOH 0,16 mol | 0,7 |
| Oksid SeO₃ (M = 127) aniqlangan | 0,7 |
| Ortib qolgan NaOH 4,64 g | 0,6 |
| 25 % ga kerakli eritma 18,56 g va javob 102 g | 0,7 |

**Tipik xato:** Ishqorni to'liq sarflangan deb olish (u holda savolning ikkinchi qismi ma'nosiz bo'ladi); "2,5 marta ortadi" ni mutlaq qiymatga nisbatan emas, **dastlabki 10 %** ga nisbatan olishni unutish.

---

### 37-topshiriq

**Shart:** 9,8 g NH₄Br va 5 % CaBr₂ bo'lgan eritmada brom va kislorod atomlarining massa nisbati 0,9 : 7,9 bo'lsa, eritma massasini aniqlang.

**Qoida:** Kislorod faqat **suvda**; brom ikkala tuzdan.

**Yechim:** Eritma massasi — m.
1. n(NH₄Br) = 9,8/98 = 0,1 mol → Br = **8 g**; CaBr₂ = 0,05m → Br = 0,05m · 160/200 = **0,04m g**.
2. Suv = m − 9,8 − 0,05m = 0,95m − 9,8 → O = (0,95m − 9,8)·16/18.
3. (8 + 0,04m)/(0,8444m − 8,711) = 0,9/7,9 → 71,04 = 0,444m → **m = 160 g**.
   *(Tekshirish: Br = 14,4 g; O = 126,4 g; 14,4/126,4 = 0,9/7,9 ✓)*

**Javob:** 160 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Kislorod faqat suvdan ekani aytilgan | 0,5 |
| Ikkala tuzdagi brom ifodalangan | 0,8 |
| Suv massasi m orqali yozilgan | 0,7 |
| Nisbat tenglamasi va m = 160 g | 1,2 |

**Tipik xato:** CaBr₂ dagi bromni 0,05m deb olish (brom ulushi 0,8); ammoniy tuzidagi kislorodni qidirish (unda kislorod yo'q).

---

### 38-topshiriq

**Shart:** 74,4 g noma'lum metall kristallogidrati yopiq idishda qizdirildi. Kristallogidrat tarkibida **64 g oltingugurt va 128 g kislorod** mavjud (1 mol uchun); metallning moli oltingugurtning moliga **teng**. Kristallogidratni aniqlang.

**Qoida:** 1 mol birikmada: S = 64 g → **2 mol**, O = 128 g → **8 mol**; metall ham **2 mol**.

**Yechim:**
1. Tarkib: Me₂S₂O₈·? — sulfatda 4 O bo'lardi (2 S → 8 O), demak **anionning o'zida 3 O** va qolgan 5 O — kristallizatsion suvdan.
2. Bu **tiosulfat**: S₂O₃²⁻ (2 S, 3 O) + 5H₂O (5 O) = **8 O** ✓ metall 2 mol → **Na₂S₂O₃·5H₂O**.
3. Tekshirish: M = 46 + 64 + 48 + 90 = **248** → 74,4/248 = **0,3 mol** ✓

**Javob:** Na₂S₂O₃·5H₂O (giposulfit, 0,3 mol)

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| 64 g S → 2 mol, 128 g O → 8 mol | 0,8 |
| Metall 2 mol (shartdan) | 0,5 |
| Sulfat bo'lsa suv qolmasligi ko'rsatilib tiosulfatga o'tilgan | 1,0 |
| Formula Na₂S₂O₃·5H₂O va M = 248 tekshirilgan | 0,9 |

**Tipik xato:** Oddiy sulfat (MeSO₄·xH₂O) deb olish — kislorod balansi suvga joy qoldirmaydi.

---

### 39-topshiriq

**Shart:** 6 mol propenning x qismi gidrogenlanganda **gibridlangan orbitallar** miqdori 18,06·10²³ taga ortdi. Ortib qolgan qismi yondirilsa, hosil bo'lgan CO₂ miqdorini (mol) aniqlang.

**Qoida:** Propen C₃H₆ da: 1 ta sp³ (4 orbital) + 2 ta sp² (3 tadan) = **10 orbital**; propan C₃H₈ da 3 · 4 = **12 orbital** → har bir molekulaga **+2**.

**Yechim:**
1. Δ(orbitallar) = 18,06·10²³/6,02·10²³ = **3 mol** → gidrogenlangan propen = 3/2 = **1,5 mol**.
2. Qolgan propen = 6 − 1,5 = **4,5 mol** → CO₂ = 3 · 4,5 = **13,5 mol**.

**Javob:** 13,5 mol

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Propen va propandagi orbitallar soni (10 va 12) | 1,0 |
| Har bir molekulaga +2 orbital | 0,7 |
| Gidrogenlangan qism 1,5 mol | 0,8 |
| CO₂ = 13,5 mol | 0,7 |

**Tipik xato:** Gidrogenlangan qismni yondirishga qo'shib yuborish; orbitallarni atomlar soni bilan almashtirish.

---

### 40-topshiriq

**Shart:** 180 °C da 15,9 g **ikkita bir asosli spirt** H₂SO₄ ta'sirida qizdirildi; hosil bo'lgan organik gazlar 0,3 mol. Gazlar KMnO₄ ning suvdagi eritmasidan o'tkazilganda hosil bo'lgan moddalarning birida **shu sinfga oid 6 ta izomer** mavjud. Molyar massasi katta bo'lgan spirtning massasini aniqlang.

**Qoida:** 180 °C — **molekulalararo emas, ichki degidratatsiya** → alkenlar; alken + KMnO₄(suvli) → **diol**. Butandiollar sinfida **6 ta izomer** bor (1,2-; 1,3-; 1,4-; 2,3-; 2-metil-1,2-; 2-metil-1,3-).

**Yechim:**
1. Diol C₄ → alken C₄H₈ → spirt **C₄H₉OH (74)**.
2. Spirtlar 1 : 1 alkenga aylanadi → jami spirt = **0,3 mol**; M̄ = 15,9/0,3 = **53** → ikkinchi spirt yengilroq.
3. Metanol alken bermaydi → ikkinchisi **etanol (46)**:
   74a + 46(0,3 − a) = 15,9 → 28a = 2,1 → **a = 0,075 mol**.
4. m(C₄H₉OH) = 0,075 · 74 = **5,55 g**.

**Javob:** 5,55 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| 180 °C da alken hosil bo'lishi | 0,5 |
| Diolning 6 ta izomeridan C₄ aniqlangan | 1,0 |
| Spirtlar miqdori 0,3 mol va M̄ = 53 | 0,7 |
| Ikkinchi spirt etanol ekani asoslangan (metanol alken bermaydi) | 0,5 |
| m = 5,55 g | 0,5 |

**Tipik xato:** 140 °C dagi efir hosil bo'lishini olish; "6 ta izomer" ni alkenga nisbatan sanash.

---

## IV QISM — kengaytirilgan topshiriqlar (41–43)

---

### 41-topshiriq *(6 ball)*

**Shart:**
\`\`\`
X + Y + KOH → K₂CrO₄ + KCl + H₂O
Z + D + KOH --(qizdirildi)--> K₂CrO₄ + KCl + H₂O
\`\`\`
X va D — o'rta tuz; X va Z dagi metallning valentliklari bir xil.
Berilgan: k₁(K₂CrO₄) = k₂(K₂CrO₄) = k₂(H₂O) · k₁(KOH) + k₁(H₂O) = 18 · k₂(D) = k₂(KCl) = 1 · k₁(KOH) − k₂(KOH) = k₁(H₂O) − k₂(H₂O)

**Yechim:**
1. Ikkinchi reaksiya **qizdirilgan** va D — 1 ta xlor beradigan o'rta tuz → **D = KClO₃** (6 e⁻ oladi).
   6 elektron 2 ta Cr³⁺ dan keladi → **Z = Cr₂O₃**:
   **Cr₂O₃ + KClO₃ + 4KOH → 2K₂CrO₄ + KCl + 2H₂O** ✓ (k₂: K₂CrO₄ = 2 = H₂O ✓, D = KCl = 1 ✓)
2. k₁(K₂CrO₄) = 2; k₁(KOH) − 4 = k₁(H₂O) − 2 va k₁(KOH) + k₁(H₂O) = 18 → **k₁(H₂O) = 8, k₁(KOH) = 10**.
3. X — Cr(III) li o'rta tuz (**CrCl₃**), Y — oksidlovchi:
   **2CrCl₃ + 3H₂O₂ + 10KOH → 2K₂CrO₄ + 6KCl + 8H₂O** ✓ (barcha shartlar bajariladi)
4. **1) X = CrCl₃ · Y = H₂O₂ · Z = Cr₂O₃ · D = KClO₃**
5. **2)** 0,5 mol H₂O₂ + KMnO₄/H₂SO₄:
   **5H₂O₂ + 2KMnO₄ + 3H₂SO₄ → 2MnSO₄ + K₂SO₄ + 5O₂↑ + 8H₂O**
   MnSO₄ = 0,2 mol = 30,2 g; K₂SO₄ = 0,1 mol = 17,4 g → **jami 47,6 g**
6. **3)** 0,4 mol KClO₃ **katalizatorsiz**: **4KClO₃ → KCl + 3KClO₄**
   KCl = 0,1 mol = 7,45 g; KClO₄ = 0,3 mol = 41,55 g → farq = **34,1 g**

**Javob:** 1) CrCl₃, H₂O₂, Cr₂O₃, KClO₃ · 2) 47,6 g · 3) 34,1 g

| Baholash mezoni (6 ball) | Ball |
|---|---|
| D = KClO₃ (1 ta KCl, 6 elektron) asoslangan | 0,8 |
| Z = Cr₂O₃ va ikkinchi tenglama tenglashtirilgan | 1,0 |
| Shartlardan k₁(KOH) = 10, k₁(H₂O) = 8 | 0,8 |
| X = CrCl₃, Y = H₂O₂ va birinchi tenglama | 1,0 |
| H₂O₂ + KMnO₄ tenglamasi (5 : 2 : 3) | 0,8 |
| 2-band: 47,6 g | 0,6 |
| Katalizatorsiz parchalanish (disproporsiyalanish) | 0,6 |
| 3-band: 34,1 g | 0,4 |

> **Izoh:** "1 + k₁(Y) = 2k₂(KOH)" sharti sonlarga mos kelmaydi (1 + 3 = 4, 2·4 = 8).
> Agar u **2·k₂(K₂CrO₄)** bo'lsa — 1 + 3 = 4 = 2·2 ✓ to'g'ri chiqadi; manbada terish xatosi.

**Tipik xato:** Katalizatorsiz KClO₃ ni ham O₂ ajratib parchalash (u **disproporsiyalanadi**); ikkinchi reaksiyani Cr(OH)₃ bilan yozish (u tuz emas).

---

### 42-topshiriq *(6 ball — 7 ta reaksiya)*

**1)** Metilsiklobutan + H₂ →(t, P) halqa uziladi (eng kam o'rin olgan C–C bog'idan):
CH₃–CH₂–CH(CH₃)–CH₃ = **2-metilbutan**
*(Agar o'rinbosarli uglerod yonidagi bog' uzilsa — pentan; asoslanishi bo'lsa qabul qiling.)*

**2)** Terminal alkin kislotali muhitda **uzilib**, uchidagi uglerod CO₂ ga aylanadi:
**5HC≡C–C₄H₉ + 8KMnO₄ + 12H₂SO₄ → 5C₄H₉COOH + 5CO₂↑ + 8MnSO₄ + 4K₂SO₄ + 12H₂O**
*(Mahsulot — pentan kislota.)*

**3)** CH₃CH₂CH₂OH →(H₂SO₄, yuqori t) **CH₃–CH=CH₂ + H₂O** — **propen**

**4)** Fenol + 3HNO₃ → **2,4,6-trinitrofenol (pikrin kislota)** + 3H₂O

**5)** HCOOH + 2[Ag(NH₃)₂]OH → **(NH₄)₂CO₃ + 2Ag↓ + 2NH₃ + H₂O**
*(Chumoli kislotada aldegid guruhi bor — kumush ko'zgu beradi.)*

**6)** **CH₃COOC₃H₇** (propil etanoat) **+ NaOH → CH₃COONa + C₃H₇OH**

**7)** HOOC–CHCl–CH₂CH₂CH₂–COOH + 2NH₃ → **HOOC–CH(NH₂)–CH₂CH₂CH₂–COOH + NH₄Cl**
*(2-aminogeksandioy kislota; ikkinchi NH₃ ajralgan HCl ni bog'laydi.)*

| Baholash mezoni (6 ball) | Ball |
|---|---|
| 1-reaksiya: halqaning uzilishi + **nomi** | 1,0 |
| 2-reaksiya: CO₂ ajralishi va to'liq tenglashtirish | 1,3 |
| 3-reaksiya: propen | 0,6 |
| 4-reaksiya: pikrin kislota + **nomi** | 1,0 |
| 5-reaksiya: ammoniyli tuz va 2Ag | 0,8 |
| 6-reaksiya: formulalar bilan yozilgan | 0,7 |
| 7-reaksiya: aminokislota + NH₄Cl | 0,6 |

**Tipik xato:** 2-da terminal alkinni oddiy ikki kislotaga bo'lish (uchidagi uglerod **CO₂** ga ketadi); 7-da ikkinchi ammiakni unutib HCl ni erkin qoldirish.

---

### 43-topshiriq *(6 ball — izohga qarang)*

**Shart:** A va B — Y elementning suvda erimaydigan **binar** birikmalari (ikkalasida metallning massa ulushi teng).
A + H₂SO₄(kons) → X₁ · A + H₂SO₄(suyul) → X₂ · B + H₂SO₄(kons) → X₃ · B + HCl(kons) → X₄ · A + HNO₃(kons) → X₅
X₁ va X₂ o'zaro reaksiyaga kirishmaydi, X₃ va X₄ esa kirishadi.

**Qoida (gazlarni aniqlash):**
1. **X₄** — sulfidning kuchli kislota bilan reaksiyasidan: **H₂S**.
2. **X₃** — sulfidning kons. H₂SO₄ bilan reaksiyasidan: **SO₂**.
   Tekshirish: SO₂ + 2H₂S → 3S↓ + 2H₂O ✓ ("X₃ va X₄ reaksiyaga kirishadi" ✓)
3. **X₅** — qo'ng'ir gaz: **NO₂**.
4. **X₁** — kons. H₂SO₄ ning qaytarilish mahsuloti: **SO₂**;
   "X₅ qo'ng'ir gaz X₁ bilan **qaytar** reaksiyaga kirishadi" → **SO₂ + NO₂ ⇄ SO₃ + NO** ✓ (nitroz usuli)
5. **X₂** — suyultirilgan kislota bilan chiqadigan, SO₂ bilan reaksiyaga kirishmaydigan gaz: **H₂** (yoki PH₃).

**Yozilishi kerak bo'lgan reaksiyalar:**
- **X₃ + X₄:** SO₂ + 2H₂S → 3S↓ + 2H₂O
- **X₁ + X₅:** SO₂ + NO₂ ⇄ SO₃ + NO
- **X₂ + X₄:** H₂ va H₂S o'zaro reaksiyaga kirishmaydi (qaytar muvozanat H₂ + S ⇄ H₂S faqat oltingugurt bilan)

> **Izoh:** A va B moddalarini shartda berilgan ma'lumot bilan **bir qiymatli aniqlab bo'lmaydi**:
> "ikkala moddada metall massa ulushi teng" sharti bitta metallning ikki xil binar birikmasi
> uchun matematik jihatdan bajarilmaydi (anion massasi har xil bo'ladi), demak metallar
> **har xil** bo'lishi kerak — lekin qaysilari ekani ko'rsatilmagan. Gazlar zanjiri esa yuqoridagidek
> bir qiymatli tiklanadi. Saytga faqat **gazlarni aniqlash va reaksiyalarni yozish** qismini
> kiritish tavsiya etiladi.

| Baholash mezoni (6 ball) | Ball |
|---|---|
| X₄ = H₂S (sulfid + kuchli kislota) | 1,0 |
| X₃ = SO₂ va X₃ + X₄ reaksiyasi | 1,2 |
| X₅ = NO₂ (qo'ng'ir gaz) | 0,8 |
| X₁ = SO₂ va qaytar reaksiya SO₂ + NO₂ ⇄ SO₃ + NO | 1,5 |
| X₂ ning SO₂ bilan reaksiyaga kirishmasligi asoslangan | 1,0 |
| Xulosa va izchillik | 0,5 |

**Tipik xato:** X₁ va X₂ ni bir xil (ikkalasi ham SO₂) deb olish — shartda ular **turlicha** va o'zaro reaksiyaga kirishmasligi aytilgan.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | B | 12 | A | 23 | C |
| 2 | A | 13 | A | 24 | D* |
| 3 | B | 14 | B | 25 | A |
| 4 | C | 15 | A | 26 | A |
| 5 | B | 16 | A | 27 | A |
| 6 | A | 17 | B | 28 | C |
| 7 | **sxema yo'q** | 18 | A | 29 | D |
| 8 | B | 19 | D | 30 | B |
| 9 | C | 20 | A | 31 | C* |
| 10 | B | 21 | C | 32 | A |
| 11 | C | 22 | B | | |

**33:** D (38) · **34:** C (44) · **35:** E (16,2)
**36:** 102 g (SeO₃) · **37:** 160 g · **38:** Na₂S₂O₃·5H₂O · **39:** 13,5 mol · **40:** 5,55 g
**41:** CrCl₃ · H₂O₂ · Cr₂O₃ · KClO₃ | 47,6 g | 34,1 g
**42:** 7 ta reaksiya · **43:** X₁ = SO₂, X₂ = H₂, X₃ = SO₂, X₄ = H₂S, X₅ = NO₂

\`*\` — **24** (ikkita qator to'g'ri), **31** (miqdor ko'rsatilmagan), **41** (bitta shartda terish xatosi), **43** (A va B aniqlanmaydi). Izohlarga qarang.
`,at=`# Sertifikat — 03.05.2025, I smena

**Manba:** \`Milliy sertifikat .pdf\`, 39–42-betlar · 43 topshiriq
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–40 qisqa yozma · 41–43 kengaytirilgan yozma

> Manbada 36-topshiriqning javobi qavs ichida berilgan (126 g) — yechim u bilan mos tushdi.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **C**

**Shart:** To'g'ri javobni aniqlang.

**Yechim:**
1. A) 1 mol SiH₄ (32 g) va CH₄ (16 g) — massalari **teng emas** ✗
2. B) Fosforning allotropik shakllari bor (oq, qizil, qora) ✗
3. C) ρ(Hg) = 13,6 g/ml, ρ(etanol) = 0,8 g/ml → bir xil massada **simobning hajmi kichik** ✓
4. D) n.sh. da suv **suyuq**, 22,4 l/mol qoidasi unga tegishli emas ✗

**Javob:** C

**Tipik xato:** D variantini "1 mol suv = 18 g" bilan chalkashtirish — gaz qonuni faqat **gazlar** uchun.

---

### 2-savol · **A**

**Shart:** Fe izotopida neytronlar barcha zarrachalarning **8/21** qismini tashkil etadi. Xuddi shunday neytronlarga ega nikelning molyar massasini aniqlang.

**Qoida:** Atomdagi zarrachalar = p + e + n = **A + Z**.

**Yechim:**
1. (A − 26)/(A + 26) = 8/21 → 21A − 546 = 8A + 208 → **A = 58** → neytronlar = **32**.
2. Ni (Z = 28) + 32 neytron → **A = 60**.

**Javob:** A) 60

**Tipik xato:** Elektronlarni sanamaslik; nikelning tartib raqamini 27 deb olish.

---

### 3-savol · **A**

**Shart:** Gund qoidasini aniqlang.

**Qoida:** **Gund:** bir xil energiyali orbitallarda elektronlar **spinlar yig'indisi maksimal** bo'ladigan tartibda joylashadi.
*(C — Klechkovskiy · D — Pauli.)*

**Javob:** A

---

### 4-savol · **A**

**Shart:** ˣ₉₂U + ¹⁴₇N → y·¹₀n + ²⁴⁶₉₉Es. (x + 14)/y = 42 bo'lsa, x ni toping.

**Yechim:**
1. Massa balansi: x + 14 = y + 246.
2. Shartdan: x + 14 = 42y → 42y = y + 246 → **y = 6** → x + 14 = 252 → **x = 238**.

**Javob:** A) 238

**Tipik xato:** Zaryad balansini qo'shib chalkashish (neytron zaryadi 0, u yerda hamma narsa to'g'ri).

---

### 5-savol · **A**

**Shart:** **2 xil anion** hosil qiladigan moddani aniqlang.

**Qoida:** Ko'p asosli kislota **bosqichma-bosqich** dissotsilanadi: H₂SO₄ → H⁺ + HSO₄⁻; HSO₄⁻ ⇄ H⁺ + SO₄²⁻ → **ikki xil anion**.

**Yechim:** NaKSO₄ — ikki xil **kation**, bitta anion ✗ · Ba(OH)₂ va LiOH — faqat OH⁻ ✗

**Javob:** A) H₂SO₄

**Tipik xato:** Qo'sh tuz NaKSO₄ ni tanlash (u ikki kation beradi).

---

### 6-savol · **C**

**Shart:** σ- va π-bog'lar soni yig'indisi qanday o'zgaradi: HCN →¹ SiH₄ →² C₂H₂ →³ H₂S

**Yechim:**
1. HCN (H–C≡N): 2σ + 2π = **4**
2. SiH₄: 4σ = **4** → (1) **o'zgarmaydi**
3. C₂H₂ (H–C≡C–H): 3σ + 2π = **5** → (2) **ortadi**
4. H₂S: 2σ = **2** → (3) **kamayadi**

**Javob:** C) 1-o'zgarmaydi; 2-ortadi; 3-kamayadi

**Tipik xato:** Uchbog'da 3 ta π deb sanash (σ + 2π bo'ladi).

---

### 7-savol · **C**

**Shart:** **Asosli oksid** hosil qiladigan reaksiyani aniqlang.

**Yechim:** ZnO + C → Zn + CO (oksid yo'qoladi) ✗ · C + O₂ → CO₂ (kislotali) ✗ · **4Li + O₂ → 2Li₂O (asosli)** ✓ · 4Al + 3O₂ → 2Al₂O₃ (**amfoter**) ✗

**Javob:** C) Li + O₂ →

**Tipik xato:** Al₂O₃ ni asosli deb olish.

---

### 8-savol · **B**

**Shart:** 2NO + O₂ ⇄ 2NO₂ reaksiyasida bosim 8 marta ortib, temperatura 60° ga kamaysa, tezlik qanday o'zgaradi? (γ = 2)

**Qoida:** \`v = k[NO]²[O₂]\` — umumiy tartib **3**; bosim n marta ortsa tezlik **n³** marta ortadi; harorat ΔT ga kamaysa **γ^(ΔT/10)** marta kamayadi.

**Yechim:**
1. Bosimdan: 8³ = **512 marta ortadi**.
2. Haroratdan: 2⁶ = **64 marta kamayadi**.
3. 512/64 = **8 marta ortadi**.

**Javob:** B) 8 marta ortadi

**Tipik xato:** Reaksiya tartibini 2 deb olish; harorat ko'rsatkichini 60 deb olish (6 bo'ladi).

---

### 9-savol · **A**

**Shart:** A + 3B → 2C. Muvozanatda A = 4 mol, B = 1 mol, C = 2 mol (V = 1 l). Qaysi fikrlar to'g'ri?
1) Dastlab A = 4, B = 5 · 2) K = 1 · 3) A ning 1/5 moli sarflangan

**Yechim:**
1. C = 2 mol hosil bo'lgan → A sarflangan **1 mol**, B sarflangan **3 mol**.
2. Dastlabki: A = 5, B = 4 → 1-fikr **teskari** ✗
3. K = [C]²/([A][B]³) = 4/(4·1) = **1** ✓
4. A: 1/5 = 0,2 → sarflangan 1 mol = 5 mol ning 1/5 qismi ✓

**Javob:** A) 2, 3

**Tipik xato:** Dastlabki miqdorlarni A va B uchun almashtirib yuborish.

---

### 10-savol · **B**

**Shart:** **Suyuq** yog'lar hosil qilishda ishtirok etadigan kislotalarni belgilang.

**Qoida:** Suyuq yog'lar — **to'yinmagan** kislotalar qoldig'idan (olein, linol, linolen); palmitin va stearin — to'yingan (qattiq yog'lar).

**Javob:** B) olein, linol, linolen

**Tipik xato:** Palmitin kislotani suyuq yog'larga kiritish.

---

### 11-savol · **B**

**Shart:** 0,5 mol metall gidridi 47 g suvda eritilganda 24 % li eritma hosil bo'ldi. 8 g ishqoriy metall gidridi 54 g suvda eritilganda necha foizli eritma hosil bo'ladi?

**Qoida:** MeH + H₂O → MeOH + H₂↑ — **vodorod uchib ketadi**, eritma massasidan ayiriladi.

**Yechim:** Birinchi tajribadan metallni aniqlaymiz:
1. 0,5(M + 17)/(0,5(M + 1) + 47 − 1) = 0,24 → 0,5M + 8,5 = 0,12M + 11,28 → **M = 7 (litiy)**, gidrid **LiH (M = 8)**.
2. Ikkinchi tajriba: 8 g LiH = **1 mol** → LiOH 1 mol = 24 g; H₂ = 2 g.
3. Eritma = 8 + 54 − 2 = **60 g** → ω = 24/60 = **40 %**.

**Javob:** B) 40 %

**Tipik xato:** Vodorodni eritma massasida qoldirish; gidridni MeH₂ deb olish.

---

### 12-savol · **D** *(manbadagi birlik xatosi bilan)*

**Shart:** Shakarqamish tarkibida 22 % saxaroza. 1 tonna shakarqamishdan 187 (kg) saxaroza olindi. Reaksiya unumini toping.

**Yechim:** Nazariy = 1000 · 0,22 = **220 kg** → η = 187/220 = **0,85**.

**Javob:** D) 0,85

> **Izoh:** manbada "187 **g**" deb yozilgan — birlik xatosi, to'g'risi **187 kg**.

---

### 13-savol · **C**

**Shart:** 0,1 mol Fe(NO₃)₃ va 200 ml 2 M NaOH reaksiyasidan hosil bo'lgan **eritmada** necha mol ion bo'ladi?

**Yechim:**
1. NaOH = 0,4 mol; Fe(NO₃)₃ + 3NaOH → Fe(OH)₃↓ + 3NaNO₃ → sarflangan NaOH = **0,3 mol**, ortgani **0,1 mol**.
2. Eritmada: NaNO₃ 0,3 mol → 0,6 mol ion; NaOH 0,1 mol → 0,2 mol ion.
3. Jami = **0,8 mol**.

**Javob:** C) 0,8

**Tipik xato:** Cho'kmadagi Fe³⁺ ni ham sanash; ortiqcha ishqorni unutish.

---

### 14-savol · **D** *(talqini bahsli — izohga qarang)*

**Shart:** 10 l havoda O₂ va N₂ 1 : 4 nisbatda; unga 4 l CO qo'shilib portlatildi. Hosil bo'lgan aralashma NaOH eritmasiga yuttirilganda hajm **dastlabki hajmga nisbatan** necha foizga kamayadi?

**Yechim:**
1. O₂ = 2 l, N₂ = 8 l; dastlabki umumiy hajm = 10 + 4 = **14 l**.
2. 2CO + O₂ → 2CO₂: 4 l CO ga aynan 2 l O₂ kerak ✓ → CO₂ = **4 l**; aralashma = 4 + 8 = 12 l.
3. NaOH **CO₂ ni yutadi** → hajm 4 l ga kamayadi.
4. 4/14 = 2/7 → **200/7 %**.

**Javob:** D) 200/7

> **Izoh:** agar "dastlabki hajm" deb portlashdan **keyingi** 12 l olinsa, javob 100/3 % (B) chiqadi.
> Savol ikki xil o'qiladi; 14 l ga nisbatan hisoblash matnga ko'proq mos keladi.

**Tipik xato:** Portlashdagi hajm kamayishini (2 l) ham qo'shib yuborish.

---

### 15-savol · **D**

**Shart:** Alkan yonishidan hosil bo'lgan suvning massasi alkan massasidan 1,5 marta ko'p. Alkanni aniqlang.

**Yechim:**
1. 18(n + 1) = 1,5(14n + 2) → 18n + 18 = 21n + 3 → **n = 5** → C₅H₁₂.

**Javob:** D) C₅H₁₂

**Tipik xato:** Suv mollarini n deb olish.

---

### 16-savol · **A**

**Shart:** 24,5 g H₃PO₄ bilan 55,5 g metall gidroksidi reaksiyaga kirishib **(MeOH)₃PO₄** va x g suv hosil bo'ldi. x ni aniqlang.

**Qoida:** Mahsulot **asosli tuz** — demak gidroksid ikki kislotali: 3Me(OH)₂ + H₃PO₄ → (MeOH)₃PO₄ + 3H₂O.

**Yechim:**
1. n(H₃PO₄) = **0,25 mol** → Me(OH)₂ = 0,75 mol → M = 55,5/0,75 = **74 → Ca(OH)₂**.
2. Suv = 3 · 0,25 = 0,75 mol = **13,5 g**.

**Javob:** A) 13,5

**Tipik xato:** O'rta tuz deb olib 1 : 3 nisbatni teskari yozish.

---

### 17-savol · **C**

**Shart:** Neftdan 20 % unum bilan benzin, 55 % unum bilan mazut olinadi; mazutdan 60 % unum bilan yana benzin olinsa, 200 kg neftdan olingan **A-80** markali benzindagi izooktan massasini aniqlang.

**Qoida:** **A-80** — oktan soni 80, ya'ni benzin **80 % izooktan** va 20 % n-geptanga ekvivalent.

**Yechim:**
1. To'g'ridan-to'g'ri benzin: 200 · 0,2 = **40 kg**.
2. Mazutdan: 200 · 0,55 · 0,6 = **66 kg** → jami **106 kg**.
3. Izooktan = 106 · 0,8 = **84,8 kg**.

**Javob:** C) 84,8

**Tipik xato:** Mazutdan olingan benzinni unutish (32 kg chiqadi); oktan sonini e'tiborsiz qoldirish.

---

### 18-savol · **A**

**Shart:** Xrom(III) gidroksid molyar massasiga teng nitrobirikmada 0,8 mol sp³ gibridlangan atom bor. Unga **izomer** bo'lgan aminokislotada nechta sp³ **orbital** bor?

**Yechim:**
1. M(Cr(OH)₃) = **103** → CₙH₂ₙ₊₁NO₂: 14n + 47 = 103 → **n = 4** (C₄H₉NO₂).
2. Nitrobirikmada sp³ atomlar — **4 ta uglerod** (nitro guruhidagi azot sp²) → n(modda) = 0,8/4 = **0,2 mol**.
3. Izomer aminokislota C₄H₉NO₂ da sp³ atomlar: 3 ta uglerod + **azot** = 4 ta.
4. Orbitallar = 0,2 · 4 · 4 = **3,2 mol = 3,2·N_A**.

**Javob:** A) 3,2·N_A

**Tipik xato:** Atomlar sonini orbitallar soni deb olish (0,8·N_A — B tuzog'i); aminokislotada azotni sanamaslik.

---

### 19-savol · **A**

**Shart:** CₙH₂ₙ₊₂O₂ formulali A, B, C moddalar: A va B natriy bilan ta'sirlashadi va Cu(OH)₂ bilan **ko'k eritma** beradi; C esa ikkalasi bilan ham reaksiyaga kirishmaydi. C ni toping.

**Qoida:** Cu(OH)₂ bilan ko'k eritma — **qo'shni ikki OH** (vitsinal diol) belgisi; natriy bilan reaksiya — OH guruhi borligini bildiradi. C da OH **yo'q** → **ikki atomli efir**.

**Yechim:** CH₂(OCH₃)–CH₂(OCH₃) — ikkita efir guruhi, OH yo'q ✓ (B — diol ✗; D — da OH bor ✗; C varianti — murakkab efir, formulaga mos emas ✗)

**Javob:** A) CH₂(OCH₃)–CH₂(OCH₃)

**Tipik xato:** Efir va spirtni formulasiga qarab ajratmaslik.

---

### 20-savol · **B**

**Shart:** 1 litr suvga 40 g osh tuzi va 20 g shakar solinadi. 5 litr (ρ = 1 g/ml) eritmada tuzning massa ulushini (%) toping.

**Yechim:**
1. Retsept bo'yicha eritma = 1000 + 40 + 20 = **1060 g**, undagi tuz 40 g.
2. 5 l = **5000 g** eritmada tuz = 40 · 5000/1060 = **188,7 g**.
3. ω = 188,7/5000 = 0,0377 = **200/53 %**.

**Javob:** B) 200/53

**Tipik xato:** Shakarni hisobga olmaslik; 5 litrni 5 marta retsept deb olish (eritma 5300 g bo'lardi).

---

### 21-savol · **A**

**Shart:** Polietilen molekulasining uzunligi 616 nm, l(C–C) = 0,154 nm. Molekula massasini toping.

**Yechim:**
1. Bog'lar soni = 616/0,154 = **4000** → uglerodlar **4000** (uzun zanjirda).
2. Zvenolar (C₂H₄) = **2000** → M = 2000 · 28 = **56000**.

**Javob:** A) 56000

**Tipik xato:** Uglerodlar sonini zvenolar soni deb olish (28000 — B tuzog'i).

---

### 22-savol · **C**

**Shart:** Suvda **eriydigan asos** hosil qiluvchi elementlarni toping: K, Fe, Cs, Cr, Mg, Na, Li, Cu, Zn, Ba, Al

**Qoida:** Ishqorlar — **ishqoriy metallar** (Li, Na, K, Rb, Cs) va **Ca, Sr, Ba**.

**Yechim:** K, Cs, Na, Li, Ba → **5 ta**

**Javob:** C) 5

**Tipik xato:** Mg(OH)₂ ni ishqor deb olish (u **kam eriydi**).

---

### 23-savol · **A**

**Shart:** Fenol qaysi moddalar bilan: 1) H₂ ajraladi · 2) oq cho'kma · 3) sariq cho'kma · 4) binafsha rang

**Yechim:**
1. 2C₆H₅OH + 2Na → 2C₆H₅ONa + **H₂↑** ✓
2. C₆H₅OH + 3Br₂ → 2,4,6-tribromfenol↓ (**oq**) ✓
3. C₆H₅OH + 3HNO₃ → pikrin kislota (**sariq**) ✓
4. FeCl₃ bilan **binafsha** kompleks ✓

**Javob:** A) Na, Br₂, HNO₃, FeCl₃

**Tipik xato:** NaOH ni tanlash — u bilan **gaz ajralmaydi** (faqat tuz hosil bo'ladi).

---

### 24-savol · **A**

**Shart:** C₃H₄ → C₃H₆O → C₃H₇OH → CH₃COOC₃H₇. Boshlang'ich va oxirgi moddalar massa farqi 7,52 g; umumiy unum 30 %. Propinning molini toping.

**Yechim:**
1. Propin a mol → efir **0,3a mol** (M = 102).
2. |0,3a · 102 − 40a| = |30,6a − 40a| = 9,4a = 7,52 → **a = 0,8 mol**.

**Javob:** A) 0,8

**Tipik xato:** Unumni qo'llamaslik; efir molyar massasini 88 (etilatsetat) deb olish.

---

### 25-savol · **B**

**Shart:** C₄H₁₀ + 6,5O₂ → 4CO₂ + 5H₂O + 2610 kJ. 652,5 kJ issiqlik ajralsa, CO₂ tarkibidagi uglerod atomlari sonini toping.

**Yechim:**
1. 652,5/2610 = **0,25 mol** butan → CO₂ = **1 mol**.
2. Uglerod atomlari = 1 mol = **6,02·10²³**.

**Javob:** B) 6,02·10²³

**Tipik xato:** 4 mol CO₂ deb olish (butan 0,25 mol); atomlar sonini mol bilan chalkashtirish.

---

### 26-savol · **B**

**Shart:** 3XH₃ + YH₄ aralashmasining o'rtacha massasi 29,5 g/mol; 2XH₃ + YH₄ aralashmasida vodorodning massa ulushi 5/42. X ni aniqlang.

**Yechim:**
1. (3(X+3) + Y+4)/4 = 29,5 → **3X + Y = 105**.
2. Vodorod: 10/(2X + Y + 10) = 5/42 → **2X + Y = 74**.
3. Ayiramiz: **X = 31 (fosfor)**; Y = 12 (uglerod).

**Javob:** B) P

**Tipik xato:** Ikkinchi aralashmada vodorod atomlari sonini 9 deb olish (2·3 + 4 = **10**).

---

### 27-savol · **A**

**Shart:** Sariq A yondirilganda B hosil bo'ldi; B ni C mineralini kuydirib ham olish mumkin. D va C bir xil elementlardan, lekin foizlari har xil. D + HCl → palag'da tuxum hidli gaz; eritmaga qizil qon tuzi qo'shilsa **turnbul ko'ki**. C ni toping.

**Yechim:**
1. A = **oltingugurt** (sariq) → B = **SO₂**.
2. D + HCl → **H₂S** va Fe²⁺ (turnbul ko'ki qizil qon tuzi bilan) → **D = FeS**.
3. C — FeS bilan bir xil elementlardan, kuydirilganda SO₂ beradi → **C = FeS₂ (pirit)**.

**Javob:** A) FeS₂

**Tipik xato:** C va D ni almashtirish; turnbul ko'kini berlin lazuri bilan chalkashtirish (qizil qon tuzi — **Fe²⁺** uchun).

---

### 28-savol · **A**

**Shart:** x mol Na₂CO₃ suvda eritildi. Eritmada 1,02 g OH⁻ va 0,51 mol CO₃²⁻ bor; dissotsilanmagan zarrachalar 5 %. x ni toping (gidroliz 1 bosqichda).

**Yechim:**
1. n(OH⁻) = 1,02/17 = **0,06 mol** → gidrolizga ketgan CO₃²⁻ = 0,06 mol.
2. Dissotsilangan Na₂CO₃ = 0,95x → CO₃²⁻ = 0,95x − 0,06 = **0,51** → 0,95x = 0,57 → **x = 0,6**.

**Javob:** A) 0,6

**Tipik xato:** Dissotsilanish darajasini unutish; OH⁻ ni gramm holida qoldirish.

---

### 29-savol · **B**

**Shart:** 2X + 16H⁺ + 14Cl⁻ = 2MnCl₂ + 5Cl₂ + 8H₂O. X ni aniqlang.

**Yechim:**
1. Kislorod: o'ngda 8 → X da **4 ta O** (MnO₄ⁿ⁻).
2. Zaryad balansi: 2q + 16 − 14 = 0 → **q = −1** → **MnO₄⁻**.

**Javob:** B) MnO₄⁻

**Tipik xato:** Faqat marganesning oksidlanish darajasiga qarab MnO₂ ni tanlash — zaryad balansi aniq javob beradi.

---

### 30-savol · **B**

**Shart:** To'g'ri fikrlar sonini toping.
1) Laktoza β-galaktoza va **fruktoza** qoldiqlaridan · 2) Saxaroza aldegid xususiyatini namoyon qiladi · 3) Disaxaridlar kislota va fermentlar ta'sirida gidrolizlanadi · 4) Sellyuloza hujayra devorining asosi

**Yechim:**
1. Laktoza — galaktoza + **glyukoza** ✗
2. Saxarozada aldegid guruhi **yo'q** ✗
3. ✓ · 4. ✓ → **2 ta**

**Javob:** B) 2

**Tipik xato:** Laktoza tarkibini maltoza bilan chalkashtirish.

---

### 31-savol · **A**

**Shart:** CₙH₂ₙCl₂ ikki izomer dixloralkanning umumiy massasi 38,1 g, mol nisbati 1 : 5. Gidrolizda CₙH₂ₙO hosil bo'ldi; 1-izomerdan 3,7 g **birlamchi** spirt (X), 2-izomerdan 18,5 g **ikkilamchi** spirt (Y) olindi. X da ikkilamchi uglerod yo'q. Birlamchi spirtni bergan dixloralkan nomini toping.

**Qoida:** **Gem-dixlorid** gidrolizda karbonil birikma beradi: zanjir **uchida** — aldegid (→ birlamchi spirt), **o'rtasida** — keton (→ ikkilamchi spirt).

**Yechim:**
1. Spirtlar massalari 3,7 : 18,5 = 1 : 5 ✓ (mol nisbatiga mos).
2. 6a(14n + 71) = 38,1 va a(14n + 18) = 3,7 → bo'lamiz: **n = 4**.
3. a = 3,7/74 = **0,05 mol** *(tekshirish: 6 · 0,05 · 127 = 38,1 ✓)*
4. X — C₄H₉OH, ikkilamchi uglerodsiz → **izobutanol (CH₃)₂CH–CH₂OH** ← aldegid (CH₃)₂CHCHO ← **(CH₃)₂CH–CHCl₂**.

**Javob:** A) 2-metil-1,1-dixlorpropan

**Tipik xato:** 1,1-dixlorbutanni tanlash — undan butanol-1 chiqadi, lekin unda **ikkilamchi uglerod bor** (shart buziladi).

---

### 32-savol · **B**

**Shart:** 91,25 g 20 % li HCl ga marmar bo'lakchalari tashlandi; eritma ajratib olinib, unga 207 g 20 % li K₂CO₃ qo'shildi. Cho'kmaning molini toping.

**Yechim:**
1. HCl = 18,25 g = **0,5 mol** → CaCO₃ bilan to'liq reaksiya → CaCl₂ = **0,25 mol** (marmar mo'l, ortgani ajratib olingan).
2. K₂CO₃ = 41,4 g = **0,3 mol**; CaCl₂ + K₂CO₃ → CaCO₃↓ + 2KCl → **CaCl₂ cheklovchi**.
3. Cho'kma = **0,25 mol**.

**Javob:** B) 0,25

**Tipik xato:** K₂CO₃ ni cheklovchi deb olish (0,3); kislota ortib qolgan deb hisoblash.

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** 0,8 mol Na, K va Ca suv bilan reaksiyaga kirishib 11,2 l (n.sh.) gaz ajraldi. K va Na ning boshlang'ich massalari yig'indisi 17 g.
Variantlar: A) 32 B) 20 C) 16 D) 11,6 E) 5,8 F) 24

**Umumiy yechim:** Na = a, K = b, Ca = c.
1. a + b + c = 0,8; H₂: 0,5a + 0,5b + c = **0,5**; 23a + 39b = **17**.
2. Birinchi ikkisidan: 0,5(a + b) = 0,3 → **a + b = 0,6**, **c = 0,2**.
3. 23a + 39(0,6 − a) = 17 → **a = 0,4 (Na)**, **b = 0,2 (K)**.

---

### 33-savol · **C**

**Yechim:** NaOH = 0,4 mol → m = **16 g**

**Javob:** C) 16

---

### 34-savol · **A**

**Yechim:** m(Ca) = 0,2 · 40 = 8 g; aralashma = 17 + 8 = **25 g** → ω = 8/25 = **32 %**

**Javob:** A) 32

**Tipik xato:** Mol ulushini (25 %) hisoblash.

---

### 35-savol · **E**

**Yechim:** K dan H₂ = 0,5 · 0,2 = **0,1 mol**; CH₃COCH₃ + H₂ → (CH₃)₂CHOH → atseton = 0,1 mol = **5,8 g**

**Javob:** E) 5,8

**Tipik xato:** Butun vodorodni (0,5 mol) ishlatish — savol faqat **kaliydan** chiqqanini so'raydi.

---

## III QISM — qisqa yozma topshiriqlar (36–40)

---

### 36-topshiriq · *(manbadagi javob: 126 g)*

**Shart:** Ikkala reaksiyada 2,2 moldan gaz hosil bo'lgan bo'lsa, sarflangan kislotalarning massa farqini aniqlang.
Cu₃N + HNO₃(suyul) = NO + Cu(NO₃)₂ + H₂O · Cu₃N + HNO₃(kons) = NO₂ + Cu(NO₃)₂ + H₂O

**Qoida:** Cu₃N da Cu⁺¹ va N⁻³ → mahsulotda Cu⁺² va NO₃⁻ (N⁺⁵): **11 ta elektron** beriladi (3 + 8).

**Yechim:**
1. **3Cu₃N + 26HNO₃ → 9Cu(NO₃)₂ + 11NO↑ + 13H₂O** → 2,2 mol NO ga **5,2 mol** HNO₃ = **327,6 g**
2. **Cu₃N + 16HNO₃ → 3Cu(NO₃)₂ + 11NO₂↑ + 8H₂O** → 2,2 mol NO₂ ga **3,2 mol** HNO₃ = **201,6 g**
3. Farq = **126 g**

**Javob:** 126 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Cu₃N dagi oksidlanish darajalari va 11 e⁻ | 0,8 |
| Suyultirilgan kislota tenglamasi tenglashtirilgan | 0,7 |
| Konsentrlangan kislota tenglamasi | 0,7 |
| Har biri uchun kislota mollari (5,2 va 3,2) | 0,6 |
| Farq 126 g | 0,4 |

**Tipik xato:** Cu₃N dagi azotni gazga aylanadi deb o'ylash (u **nitratga** o'tadi); tuzga ketgan kislotani sanamaslik.

---

### 37-topshiriq

**Shart:** Tuz eritmasiga **eritmadagi tuz massasidan 20 g kam** miqdorda tuz qo'shilsa 25 % li eritma; **suv massasidan 20 g kam** miqdorda tuz qo'shilsa 52 % li eritma hosil bo'ladi. Boshlang'ich eritmaning foiz konsentratsiyasini aniqlang.

**Yechim:** Tuz — s, suv — w.
1. 1-holat: (2s − 20)/(2s + w − 20) = 0,25 → **w = 6s − 60**.
2. 2-holat: (s + w − 20)/(s + 2w − 20) = 0,52 → **12s − w = 240**.
3. 12s − 6s + 60 = 240 → **s = 30**, **w = 120**.
4. ω = 30/150 = **20 %**.

**Javob:** 20 %

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Birinchi holat uchun tenglama to'g'ri tuzilgan | 1,0 |
| Ikkinchi holat uchun tenglama | 1,0 |
| Sistema yechilgan (s = 30, w = 120) | 0,8 |
| ω = 20 % | 0,4 |

**Tipik xato:** Qo'shilgan tuz miqdorini "20 g" deb olish (u **massadan 20 g kam**); eritma massasiga qo'shilgan tuzni qo'shmaslik.

---

### 38-topshiriq *(shartda ziddiyat bor — izohga qarang)*

**Shart:** 1,76 g temir sulfidi mo'l kislorodda yoqildi; qattiq qoldiq 35 % li sulfat kislotada eritildi va 40 % li to'yingan tuz eritmasi hosil bo'ldi. Sovutilganda 2,0 g kristallogidrat cho'kdi, eritmada 2 g tuz qoldi. Kristallogidrat formulasini aniqlang.

**Yechim (izchil qismi):**
1. FeS: 1,76/88 = **0,02 mol** ✓ (FeS₂ bilan butun son chiqmaydi)
2. 4FeS + 7O₂ → 2Fe₂O₃ + 4SO₂ → Fe₂O₃ = **0,01 mol = 1,6 g**
3. Fe₂O₃ + 3H₂SO₄ → Fe₂(SO₄)₃ + 3H₂O → H₂SO₄ = 0,03 mol = 2,94 g → kislota eritmasi = **8,4 g**
4. Eritma = 1,6 + 8,4 = **10 g**; tuz = 0,01 · 400 = **4 g** → ω = **40 %** ✓✓ (shart bilan mos)
5. Sovitishdan keyin eritmada 2 g tuz qolsa, kristallanganining o'zi **2 g** — demak kristallogidratda suv uchun joy qolmaydi.

**Javob:** Tuz — **Fe₂(SO₄)₃**; kristallogidrat formulasi berilgan sonlar bilan **aniqlanmaydi**.

> **Izoh:** 1–4-bandlar butunlay izchil (1,76 g FeS → 10 g 40 % li eritma, 35 % li kislota ✓).
> Ammo "2,0 g kristallogidrat + eritmada 2 g tuz" sharti ziddiyatli: jami tuz 4 g bo'lgani uchun
> kristallogidratdagi tuz ham 2 g bo'ladi va suvga **0 g** qoladi. Agar kristallogidrat
> **Fe₂(SO₄)₃·9H₂O** bo'lsa, uning massasi 2,81 g bo'lishi kerak edi. Saytga qo'yishda
> cho'kma massasini **2,81 g** ga tuzatish tavsiya etiladi.

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Sulfid FeS ekani (butun mol) aniqlangan | 0,6 |
| Kuydirish tenglamasi va Fe₂O₃ = 0,01 mol | 0,7 |
| Kislota eritmasi 8,4 g va eritma 10 g | 0,8 |
| Tuz 4 g, 40 % tekshirilgan | 0,6 |
| Kristallanish hisobi / ziddiyatni aniqlash | 0,5 |

**Tipik xato:** Sulfidni FeS₂ deb olish; kuydirishdan FeO chiqadi deb hisoblash.

---

### 39-topshiriq

**Shart:** 80 ml C₂H₄, C₃H₆ va C₄H₁₀ aralashmasi 830 ml O₂ bilan yondirildi. Ortib qolgan O₂ ajralgan CO₂ dan **1,5 marta ko'p**. C₂H₄ va C₃H₆ 1 : 3 nisbatda olingan bo'lsa, ortib qolgan O₂ hajmini toping.

**Qoida:** Gazlar uchun hajmiy nisbatlar = mol nisbatlari. O₂ sarfi: C₂H₄ — 3, C₃H₆ — 4,5, C₄H₁₀ — 6,5.

**Yechim:** C₂H₄ = a, C₃H₆ = 3a, C₄H₁₀ = b.
1. 4a + b = **80**.
2. Sarflangan O₂ = 3a + 13,5a + 6,5b = **16,5a + 6,5b**; CO₂ = 2a + 9a + 4b = **11a + 4b**.
3. 830 − (16,5a + 6,5b) = 1,5(11a + 4b) → 830 = 33a + 12,5b.
4. b = 80 − 4a → 830 = 33a + 1000 − 50a → **a = 10**, **b = 40**.
5. Ortgan O₂ = 830 − (165 + 260) = **405 ml** *(tekshirish: CO₂ = 270; 405/270 = 1,5 ✓)*

**Javob:** 405 ml

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Har bir uglevodorod uchun O₂ koeffitsiyenti | 0,8 |
| 1 : 3 nisbat va 4a + b = 80 | 0,6 |
| "1,5 marta" sharti tenglamaga aylantirilgan | 0,9 |
| a = 10, b = 40 | 0,5 |
| Javob 405 ml | 0,4 |

**Tipik xato:** Butanning O₂ koeffitsiyentini 6 deb olish; suvni hajmga qo'shish (n.sh. da u suyuq).

---

### 40-topshiriq

**Shart:** 3,88 g chumoli va sirka aldegid aralashmasi Ag₂O/NH₃ dan o'tkazildi; cho'kma nitrat kislotada eritilganda 0,44 mol qo'ng'ir gaz ajraldi. Hosil bo'lgan **sirka kislotaning** massasini aniqlang.

**Qoida:** HCHO → **4Ag**, CH₃CHO → **2Ag**; Ag + 2HNO₃(kons) → AgNO₃ + NO₂↑ + H₂O → **1 Ag = 1 NO₂**.

**Yechim:**
1. n(Ag) = **0,44 mol**.
2. 30x + 44y = 3,88; 4x + 2y = 0,44 → **x = 0,1 (HCHO)**, **y = 0,02 (CH₃CHO)**.
3. CH₃COOH = 0,02 mol → m = **1,2 g**.

**Javob:** 1,2 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Kumush miqdori NO₂ orqali 0,44 mol | 0,6 |
| HCHO → 4Ag, CH₃CHO → 2Ag farqi | 0,9 |
| Sistema yechilgan (0,1 va 0,02) | 0,9 |
| m(CH₃COOH) = 1,2 g | 0,8 |

**Tipik xato:** Formaldegid uchun ham 2 Ag olish; javobni chumoli kislota uchun berish.

---

## IV QISM — kengaytirilgan topshiriqlar (41–43)

---

### 41-topshiriq *(6 ball — 1-bandda ziddiyat bor)*

**Shart:** 63,2 g FeO, Fe₂O₃ va CuO aralashmasi koks bilan qaytarildi → 47,2 g metallar. Hosil bo'lgan CO x litrli reaktorga solindi, O₂ qo'shildi ([O₂] = 3 mol/l); 2 daqiqadan keyin muvozanat qaror topdi, muvozanatda [O₂] = [CO₂] (K = 0,5). Hosil bo'lgan CO₂ ga CaCO₃ suspenziyasi qo'shilib eritma 2000 ml gacha suyultirildi.

**Yechim:**

**Kislorod balansi:** 63,2 − 47,2 = 16 g = **1 mol O** → koks bilan **1 mol CO** hosil bo'ladi.

**1)** Konsentrlangan HNO₃ da faqat **FeO** gaz beradi (Fe²⁺ → Fe³⁺, 1 e⁻):
n(FeO) = n(NO₂) = **0,6 mol**. Qolgan ikki oksid uchun: 3b + c = 0,4 va 160b + 80c = 20 → **c = −0,05** → ziddiyat.
> **Izoh:** berilgan uchta son (63,2 g · 47,2 g · 0,6 mol NO₂) **o'zaro mos kelmaydi** —
> CuO ning miqdori manfiy chiqadi. Sistemaning o'zi to'g'ri tuzilgan, sonlarda xato bor.

**2)** Muvozanat: 2CO + O₂ ⇄ 2CO₂; [CO]₀ = 1/x, [O₂]₀ = 3.
[O₂] = [CO₂] sharti: 3 − z = 2z → **z = 1** → [O₂] = [CO₂] = **2**, [CO] = 1/x − 2.
K = 4/((1/x − 2)² · 2) = 0,5 → (1/x − 2)² = 4 → 1/x = 4 → **x = 0,25 l**

**3)** CO bo'yicha o'rtacha tezlik = Δ[CO]/Δt = 2/2 = **1 mol/(l·min)** → to'g'ri reaksiya tezligi = **2**.
v = k[CO]²[O₂] → k = 2/(2² · 2) = **0,25**

**4)** CO₂ = 2 mol/l · 0,25 l = **0,5 mol**; CO₂ + CaCO₃ + H₂O → Ca(HCO₃)₂ → 0,5 mol.
C = 0,5/2 = **0,25 mol/l**

**Javob:** 1) sonlarda ziddiyat · 2) x = 0,25 l · 3) k = 0,25 · 4) 0,25 mol/l

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Kislorod balansidan 1 mol CO | 0,8 |
| 1-band: faqat FeO gaz berishi asoslangan + sistema tuzilgan | 1,0 |
| [O₂] = [CO₂] shartidan z = 1 | 0,8 |
| K ifodasi va x = 0,25 l | 1,0 |
| O'rtacha tezlik va k = 0,25 | 1,2 |
| CO₂ + CaCO₃ → Ca(HCO₃)₂ va 0,25 M | 1,2 |

**Tipik xato:** CaCO₃ bilan CO₂ dan o'rta tuz hosil bo'ladi deb o'ylash (**gidrokarbonat** chiqadi); tezlik konstantasini muvozanatdagi emas, boshlang'ich konsentratsiyalarga qo'yish.

---

### 42-topshiriq *(6 ball — sxema)*

**Sxema:**
\`\`\`
A --termik kreking (500-600°C)--> CH4 + B
CH4 --(+3Cl2, -3HCl)--> C --(NaOH, suvli)--> D --(Ca(OH)2)--> E --(piroliz)--> F --(Ca(OH)2, t)--> G
B --(C6H6, t°)--> H --(KMnO4, H2SO4)--> I
\`\`\`
· F dan G ni olishni **A.M. Butlerov** kashf etgan · D va I bir xil funksional guruh tutadi · A yonganda hosil bo'lgan CO₂ moli I nikidan **1,75 marta kam**

**Yechim:**
1. **Butlerov reaksiyasi** — formaldegiddan qand (glyukoza) olish → **F = HCHO**, **G = C₆H₁₂O₆**.
2. Orqaga: E = **(HCOO)₂Ca** (piroliz → HCHO + CaCO₃) → D = **HCOOH** → C = **CHCl₃** (xloroform).
3. D = HCOOH → karboksil guruh → **I ham karbon kislota**.
4. Uchinchi shart: n(CO₂) dan A da k ta uglerod, I da m: k · 1,75 = m.
   I = benzoy kislota (7 C) → A da **4 C** → **A = butan** ✓
5. Kreking: C₄H₁₀ → CH₄ + **C₃H₆ (B)**; C₆H₆ + C₃H₆ → **kumol (H)** → KMnO₄/H₂SO₄ → **benzoy kislota (I)** ✓

**Moddalar:** A — C₄H₁₀ · B — C₃H₆ · C — CHCl₃ · D — HCOOH · E — (HCOO)₂Ca · F — HCHO · G — C₆H₁₂O₆ · H — C₆H₅CH(CH₃)₂ · I — C₆H₅COOH

**Asosiy tenglamalar:**
- C₄H₁₀ →(t) CH₄ + C₃H₆
- CH₄ + 3Cl₂ → CHCl₃ + 3HCl
- CHCl₃ + 4NaOH → HCOONa + 3NaCl + 2H₂O *(so'ng kislotalab HCOOH)*
- 2HCOOH + Ca(OH)₂ → (HCOO)₂Ca + 2H₂O
- (HCOO)₂Ca →(t) HCHO + CaCO₃
- 6HCHO →(Ca(OH)₂) C₆H₁₂O₆ *(Butlerov)*
- C₆H₆ + C₃H₆ →(AlCl₃) C₆H₅CH(CH₃)₂
- 5C₆H₅CH(CH₃)₂ + 18KMnO₄ + 27H₂SO₄ → 5C₆H₅COOH + 10CO₂ + 18MnSO₄ + 9K₂SO₄ + 42H₂O

**[Ag(NH₃)₂]OH bilan:**
- **D:** HCOOH + 2[Ag(NH₃)₂]OH → (NH₄)₂CO₃ + 2Ag↓ + 2NH₃ + H₂O
- **F:** HCHO + 4[Ag(NH₃)₂]OH → (NH₄)₂CO₃ + 4Ag↓ + 6NH₃ + 2H₂O
- **I:** C₆H₅COOH + [Ag(NH₃)₂]OH → C₆H₅COONH₄ + AgOH↓/Ag₂O + NH₃ *(kislota-asos reaksiyasi, ko'zgu bermaydi)*
- **A, B, C, H:** reaksiyaga kirishmaydi

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Butlerov reaksiyasi orqali F va G aniqlangan | 1,0 |
| C = CHCl₃ va D = HCOOH zanjiri | 1,0 |
| 1,75 nisbatidan A = butan, I = benzoy kislota | 1,2 |
| B = propen va H = kumol | 0,8 |
| Barcha tenglamalar yozilgan | 1,0 |
| [Ag(NH₃)₂]OH bilan reaksiyalar (faqat D va F ko'zgu beradi) | 1,0 |

**Tipik xato:** C ni CH₃Cl deb olish (3 mol xlor → **xloroform**); I ni ftal kislota deb olish (kumolda bitta yon zanjir); kumush ko'zguni benzoy kislotaga ham yozish.

---

### 43-topshiriq *(6 ball)*

**Shart:** Fe(NO₃)₂ va Cu dan iborat **556,8 g** aralashma ochiq havoda qizdirildi; olingan metall oksidlari massasi ham **556,8 g** bo'ldi. Oksidlar x litr 40 % li (ρ = 1,26 g/ml) HNO₃ da eritildi (gaz ajralmadi). Dastlabki Cu miqdoriga teng Cu qo'shilgach kislota tugadi va NO ajraldi. Eritmaga kaliy xromat qo'shilganda mis ionlari to'la cho'kdi.

**Qoida:** Nitratning parchalanishi massani **kamaytiradi**, misning oksidlanishi **oshiradi**; massa o'zgarmagani — ikkisi teng.

**Yechim:** Fe(NO₃)₂ = a, Cu = b.
1. 4Fe(NO₃)₂ → 2Fe₂O₃ + 8NO₂ + O₂ → kamayish = a(180 − 80) = **100a**
   2Cu + O₂ → 2CuO → ortish = **16b** → 100a = 16b → **b = 6,25a**
2. 180a + 64b = 180a + 400a = 580a = 556,8 → **a = 0,96**, **b = 6 mol**
   Oksidlar: Fe₂O₃ **0,48 mol** (76,8 g) + CuO **6 mol** (480 g) = 556,8 ✓
3. **1)** Eritishga: Fe₂O₃ + 6HNO₃ → 2,88 mol; CuO + 2HNO₃ → 12 mol → **14,88 mol**.
   Qo'shilgan 6 mol Cu: **3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O** → **16 mol**.
   Jami = **30,88 mol** = 1945,44 g → eritma = 4863,6 g → **x = 3860 ml ≈ 3,86 l**
4. **2)** Cu²⁺ = 6 + 6 = **12 mol**; Cu²⁺ + CrO₄²⁻ → CuCrO₄↓ → K₂CrO₄ = 12 mol = **2328 g**
5. **3)** Fe³⁺ = 2 · 0,48 = **0,96 mol**; Fe³⁺ + PO₄³⁻ → FePO₄↓ → Na₃PO₄ = **0,96 mol**

**Javob:** 1) ≈3,86 l · 2) 2328 g · 3) 0,96 mol

| Baholash mezoni (6 ball) | Ball |
|---|---|
| "Massa o'zgarmadi" sharti tenglamaga aylantirilgan | 0,9 |
| a = 0,96 va b = 6 mol | 0,9 |
| Oksidlarni eritishga ketgan kislota 14,88 mol | 0,9 |
| Mis bilan reaksiya (3 : 8) va 16 mol | 0,9 |
| x = 3,86 l (zichlik va foiz orqali) | 0,8 |
| K₂CrO₄ = 2328 g | 0,8 |
| Na₃PO₄ = 0,96 mol | 0,8 |

**Tipik xato:** Nitrat parchalanishida kislorodni unutish; qo'shilgan mis uchun kislotani 4 mol/mol (konsentrlangan) deb olish — **NO ajralgani** suyultirilgan kislotani bildiradi.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | C | 12 | D | 23 | A |
| 2 | A | 13 | C | 24 | A |
| 3 | A | 14 | D* | 25 | B |
| 4 | A | 15 | D | 26 | B |
| 5 | A | 16 | A | 27 | A |
| 6 | C | 17 | C | 28 | A |
| 7 | C | 18 | A | 29 | B |
| 8 | B | 19 | A | 30 | B |
| 9 | A | 20 | B | 31 | A |
| 10 | B | 21 | A | 32 | B |
| 11 | B | 22 | C | | |

**33:** C (16) · **34:** A (32) · **35:** E (5,8)
**36:** 126 g · **37:** 20 % · **38:** Fe₂(SO₄)₃ *(kristallogidrat sonlari ziddiyatli)* · **39:** 405 ml · **40:** 1,2 g
**41:** x = 0,25 l · k = 0,25 · 0,25 M *(1-band sonlari mos emas)*
**42:** A–I zanjiri (butan → … → glyukoza; kumol → benzoy kislota)
**43:** 3,86 l · 2328 g · 0,96 mol

\`*\` — **14** (ikki xil o'qiladi), **38** va **41** (shartdagi sonlar ziddiyatli), **12** (birlik xatosi). Izohlarga qarang.
`,ot=`# Sertifikat — 03.05.2025, II smena

**Manba:** \`Milliy sertifikat .pdf\`, 43–48-betlar · 43 topshiriq · ishlash vaqti 100 daqiqa
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–40 qisqa yozma · 41–43 kengaytirilgan yozma

> Bu variant PDF'da **skan** ko'rinishida (matn qatlami yo'q) — savollar rasmdan o'qib olindi.
> 3, 6, 8, 12, 17-savollar 15.03.2025 variantlari bilan bir xil.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **C**

**Shart:** To'g'ri fikrni toping.

**Yechim:**
1. A) NaHCO₃ da donor-akseptor bog' yo'q (u faqat NH₄⁺, H₃O⁺ kabi ionlarda) ✗
2. B) Silan SiH₄ — kremniy **metallmas** ✗
3. C) Metanda C–H bog'lari **qutbli kovalent** ✓
4. D) Fosfin PH₃ da **4 ta** atom ✗

**Javob:** C

---

### 2-savol · **B**

**Shart:** 42,55 g KNO₃ va KClO₃ katalizator ishtirokida qizdirildi; hosil bo'lgan gaz ozonatordan o'tkazildi, olingan modda KI eritmasi bilan reaksiyaga kirishdi. Olingan **oddiy moddalar** massa farqi 44,4 g bo'lsa, KNO₃ molini aniqlang.

**Qoida:** 2KNO₃ → 2KNO₂ + O₂ · 2KClO₃ →(kat) 2KCl + 3O₂ · 3O₂ → 2O₃ · **O₃ + 2KI + H₂O → I₂ + 2KOH + O₂**
Oddiy moddalar — **I₂ va O₂**.

**Yechim:**
1. n(I₂) = n(O₂ ajralgan) = n(O₃) = n: 254n − 32n = 222n = 44,4 → **n = 0,2 mol O₃**.
2. O₃ ozonatorda 3O₂ → 2O₃ bo'yicha hosil bo'lgan → O₂ = 0,3 mol = **0,5a + 1,5b**.
3. 101a + 122,5b = 42,55 va a + 3b = 0,6 → **a = 0,3**, b = 0,1.

**Javob:** B) 0,3

**Tipik xato:** Ozonatorda hajm o'zgarishini hisobga olmaslik; "oddiy moddalar" deb I₂ va KOH ni olish.

---

### 3-savol · **B** *(15.03.2025 II smena, 3-savol)*

**Yechim:** A₂ + 5B₂ → 2AB₅: 10 mol → 6 mol (60 %) ✓

**Javob:** B) AB₅

---

### 4-savol · **C**

**Shart:** 130 g tripropionglitserat gidrolizlanganda hosil bo'lgan **kislota** massasini aniqlang.

**Yechim:**
1. M(C₃H₅(OOC–C₂H₅)₃) = **260** → n = **0,5 mol**.
2. Propion kislota = 3 · 0,5 = 1,5 mol × 74 = **111 g**.

**Javob:** C) 111

**Tipik xato:** Glitserin massasini hisoblash; 1 mol yog'dan 1 mol kislota chiqadi deb olish.

---

### 5-savol · **B**

**Qoida:** Klechkovskiy — **(n + l)** yig'indisi minimal bo'lgan holat avval to'ladi.

**Javob:** B

---

### 6-savol · **A** *(15.03.2025 II smena, 6-savol)*

**Yechim:** 2KNO₃ → 2KNO₂ + O₂: N⁺⁵ → N⁺³ → **2 birlik**

**Javob:** A) 2

---

### 7-savol · **D**

**Shart:** sp³ va sp² orbitallari **4 : 3** bo'lgan alken KMnO₄ ning suvli eritmasidan o'tkazildi; eritmadagi suv massasi 7,2 g ga kamaydi. Alken massasini toping.

**Qoida:** Alkenda qo'shbog'dagi 2 ta uglerod sp² (3 tadan orbital), qolganlari sp³ (4 tadan).
3CₙH₂ₙ + 2KMnO₄ + **4H₂O** → 3CₙH₂ₙ(OH)₂ + 2MnO₂ + 2KOH

**Yechim:**
1. 4(n − 2)/6 = 4/3 → n − 2 = 2 → **n = 4** (C₄H₈, M = 56).
2. n(H₂O) = 7,2/18 = 0,4 mol → alken = 0,4 · 3/4 = **0,3 mol** → m = **16,8 g**.

**Javob:** D) 16,8

**Tipik xato:** Suvni mahsulot deb olish (u **sarflanadi**); sp² orbitallarni 2 ta deb sanash.

---

### 8-savol · **B** *(15.03.2025 II smena, 8-savol)*

**Yechim:** PH₃ = a, SiH₄ = b: a + b = 1,1; 3a + 4b = 3,6 → b = 0,3 → **9,6 g**

**Javob:** B) 9,6

---

### 9-savol · **B**

**Shart:** 0,2 mol alkanni yoqish uchun sarflangan kislorod massasi alkan massasidan 9,6 g ko'p bo'lsa, alkanni aniqlang.

**Yechim:**
1. O₂ = 0,2 · (3n+1)/2 mol → massa 3,2(3n + 1); alkan massasi 0,2(14n + 2).
2. 9,6n + 3,2 − 2,8n − 0,4 = 9,6 → 6,8n = 6,8 → **n = 1 (metan)**.

**Javob:** B) metan

**Tipik xato:** Kislorod koeffitsiyentini (3n+1)/2 emas, (3n+2)/2 deb olish.

---

### 10-savol · **B**

**Shart:** A + 2B → C + D. A ning sarflanish tezligi 0,015 mol/(l·s), B ning dastlabki konsentratsiyasi 0,45 mol/l. 10 sekunddan keyin B ning konsentratsiyasini toping.

**Qoida:** Tezliklar **koeffitsiyentlarga proporsional**: v(B) = 2·v(A).

**Yechim:**
1. v(B) = 0,03 mol/(l·s) → Δ[B] = 0,3 mol/l.
2. [B] = 0,45 − 0,3 = **0,15 mol/l**.

**Javob:** B) 0,15

**Tipik xato:** Koeffitsiyentni e'tiborsiz qoldirish (0,3 chiqadi); hajmni (2 l) ortiqcha ishlatish — konsentratsiya allaqachon berilgan.

---

### 11-savol · **B**

**Shart:** Tez sodir bo'ladigan reaksiyani aniqlang.

**Qoida:** **Ionlar orasidagi** va juda faol metall ishtirokidagi reaksiyalar oniy; kovalent molekulalar orasidagilar (N₂ + H₂, C₂H₄ + H₂) katalizator va sharoit talab qiladi.

**Javob:** B) K + H₂O →

---

### 12-savol · **A** *(15.03.2025 II smena, 12-savol)*

**Yechim:** 300 g eritmada NaCl 29,25 g, suv 270,75 g; eriydigani 27,075 g → cho'kma **2,175 g**

**Javob:** A) 2,175

---

### 13-savol · **D**

**Qoida:** Kislotali oksidlar — nometallarning yuqori oksidlari; ZnO va MnO₂ — amfoter, Na₂O — asosli, NO va CO — **befarq**.

**Javob:** D) CO₂ va P₂O₅

---

### 14-savol · **C**

**Shart:** Piritdan 4,48 l (n.sh.) sulfit angidrid olindi (η = 80 %). Dastlabki pirit massasini aniqlang.

**Yechim:**
1. 4FeS₂ + 11O₂ → 2Fe₂O₃ + **8SO₂** → 1 FeS₂ dan **2 SO₂**.
2. n(SO₂) = 0,2 → reaksiyaga kirgan FeS₂ = 0,1 mol → unum bilan: 0,1/0,8 = **0,125 mol** → m = **15 g**.

**Javob:** C) 15

**Tipik xato:** 1 : 1 nisbat olish; unumga ko'paytirish (bo'lish kerak).

---

### 15-savol · **A**

**Shart:** Butadiyen-1,3 va etilen **teng miqdorda** sopolimerlanishida M = 25625 g/mol bo'lgan makromolekula olindi. 0,2 mol polimerdagi atomlar sonini toping.

**Yechim:**
1. Juft zveno: C₄H₆ + C₂H₄ = **82 g/mol**, unda **16 ta atom**.
2. Juftlar soni = 25625/82 = 312,5 → atomlar = 312,5 · 16 = **5000 ta**.
3. 0,2 · 5000 = 1000 mol atom = **6,02·10²⁶ ta**.

**Javob:** A) 6,02·10²⁶

**Tipik xato:** Faqat bitta zveno bo'yicha hisoblash; atomlarni mol holida qoldirish.

---

### 16-savol · **C**

**Shart:** Saxarozadan shakar olish bosqichlarini to'g'ri joylashtiring.

**Yechim:** Lavlagi sharbatini **ohak suti** bilan ishlash (5) → eruvchan **kalsiy saxarati** hosil bo'lishi (3) → **CO₂** o'tkazib saxarozani ajratish (4) → bug'latish va kristallash (2) → **ko'mir** bilan tozalash (1) → qayta kristallash (6)

**Javob:** C) 5, 3, 4, 2, 1, 6

**Tipik xato:** Ohak suti bilan ishlashni oxirgi bosqich deb o'ylash; ko'mir bilan tozalashni birinchi qo'yish.

---

### 17-savol · **B** *(15.03.2025 II smena, 17-savol)*

**Yechim:** 5x/31 = 4y/64 va y − x = 7 → y = 11,43 g Cu = 0,179 mol → **Z = 10 g Fe**

**Javob:** B) 10

---

### 18-savol · **C**

**Shart:** R–CHO →(Ag₂O; Ag = 10,8 g) R–COOH →(C₂H₅OH) RCOOC₂H₅. Oxirgi bosqichda **50 % unum** bilan 2,55 g efir olingan bo'lsa, R ni toping.

**Yechim:**
1. n(Ag) = 0,1 mol → aldegid = **0,05 mol** (1 : 2) → kislota 0,05 mol.
2. Efir = 0,05 · 0,5 = **0,025 mol** → M = 2,55/0,025 = **102**.
3. R + 73 = 102 → R = 29 = **C₂H₅**.

**Javob:** C) etil

**Tipik xato:** Unumni qo'llamaslik; aldegidni 0,1 mol deb olish.

---

### 19-savol · **B**

**Javob:** B) (C₆H₅)₃N — trifenilamin

**Tipik xato:** Trimetilamin (CH₃)₃N bilan chalkashtirish.

---

### 20-savol · **C**

**Shart:** 300 ml 0,2 M NaCl eritmasiga 0,4 M Na₂SO₄ eritmasidan qo'shildi; hosil bo'lgan eritmada sulfat ionlari konsentratsiyasi 0,16 M. Natriy ionlarining konsentratsiyasini aniqlang.

**Yechim:**
1. Qo'shilgan hajm V: 0,4V/(0,3 + V) = 0,16 → **V = 0,2 l**.
2. Na⁺ = 0,06 (NaCl dan) + 2 · 0,08 = **0,22 mol**; umumiy hajm **0,5 l**.
3. C = 0,22/0,5 = **0,44 M**.

**Javob:** C) 0,44

**Tipik xato:** Na₂SO₄ dan **ikkita** natriy chiqishini unutish; hajmlarni qo'shmaslik.

---

### 21-savol · **C** *(rasmli)*

**Shart:** Rasmda HNO₃ **magnezit** ustiga quyilmoqda. Ikkinchi probirkada qaysi tuz eritmasi hosil bo'ladi?

**Qoida:** Magnezit — **MgCO₃**: MgCO₃ + 2HNO₃ → Mg(NO₃)₂ + CO₂↑ + H₂O

**Javob:** C) magniy nitrat

**Tipik xato:** Magnezitni magnetit (Fe₃O₄) deb o'qib temir tuzini tanlash.

---

### 22-savol · **C**

**Shart:** AgClO₂ + Cl₂ → AgCl + Cl₂O + O₂. (Cl₂⁰ → Cl⁻¹) Barcha koeffitsiyentlar yig'indisini hisoblang.

**Qoida:** Bu yerda **kislorod oksidlanadi** (O⁻² → O₂⁰), xlor esa ikki yo'nalishda qaytariladi: Cl₂⁰ → Cl⁻ va Cl⁺³ → Cl⁺¹.

**Yechim:**
1. Elektron balans: Cl₂ (2 mol) → 4 e⁻; AgClO₂ dagi Cl (4 mol, +3 → +1) → 8 e⁻; jami **12 e⁻** olinadi.
2. 6 ta O⁻² → 3O₂: **12 e⁻** beriladi ✓
3. **4AgClO₂ + 2Cl₂ → 4AgCl + 2Cl₂O + 3O₂**
4. Yig'indi = 4 + 2 + 4 + 2 + 3 = **15**

**Javob:** C) 15

**Tipik xato:** Kislorodning oksidlanishini payqamaslik — bu reaksiyaning kaliti.

---

### 23-savol · **C**

**Shart:** 500 g 20 % li CuSO₄ eritmasi elektroliz qilinganda eritma massasi 423 g gacha kamaydi. Xuddi shuncha faradey tok bilan AlCl₃ **suyuqlanmasi** elektroliz qilinsa, katodda necha g metall hosil bo'ladi?

**Qoida:** Tuz tugagach suv parchalanadi: CuSO₄ bosqichida 1 mol tuzga **80 g**, suv bosqichida 1 mol suvga **18 g** kamayadi.

**Yechim:**
1. n(CuSO₄) = 100/160 = **0,625 mol** → bu bosqichda 50 g kamayadi.
2. Qolgan kamayish 77 − 50 = 27 g = **1,5 mol suv**.
3. Elektronlar: 2 · 0,625 + 2 · 1,5 = **4,25 mol**.
4. Al³⁺ + 3e⁻ → Al → n(Al) = 4,25/3 → m = **38,25 g**.

**Javob:** C) 38,25

**Tipik xato:** Faqat mis bosqichini hisoblash (11,25 g — B tuzog'i); suyuqlanmada Al o'rniga H₂ ajraladi deb o'ylash.

---

### 24-savol · **A**

**Shart:** Ammiakka alkilamin qo'shilsa azot atomlari soni 10 marta, vodorod atomlari soni 22 marta ortdi. Aralashmaning o'rtacha molyar massasini toping.

**Yechim:** NH₃ = a, CₙH₂ₙ₊₃N = b.
1. Azot: a + b = 10a → **b = 9a**.
2. Vodorod: 3a + (2n+3)·9a = 66a → 2n + 3 = 7 → **n = 2 (etilamin, M = 45)**.
3. M̄ = (17a + 45 · 9a)/10a = **42,2 g/mol**.

**Javob:** A) 42,2

**Tipik xato:** "10 marta ortdi" ni "10 marta ko'p" (b = 10a) deb olish.

---

### 25-savol · **A**

**Qoida:** **Olivin** (Mg,Fe)₂SiO₄ — magniyli mineral; silvinit — KCl·NaCl, siderit — FeCO₃, magnetit — Fe₃O₄.

**Javob:** A) olevin

---

### 26-savol · **B**

**Shart:** A + B → C + D (V = 5 l). 10 °C dagi tezlik 0,6 mol/(l·s); 50 °C da 5 sekundda 240 mol D hosil bo'lsa, 30 °C dagi tezlikni toping.

**Yechim:**
1. v(50 °C) = 240/(5 · 5) = **9,6 mol/(l·s)**.
2. γ⁴ = 9,6/0,6 = 16 → **γ = 2**.
3. v(30 °C) = 0,6 · 2² = **2,4 mol/(l·s)**.

**Javob:** B) 2,4

**Tipik xato:** Hajmga bo'lmaslik; γ ni 16 deb olish.

---

### 27-savol · **B**

**Shart:** Buten va vodorod aralashmasining M̄ = 20; reaksiyadan so'ng M̄ = 24. Reaksion aralashma bromli suvdan o'tkazilsa hajm necha marta kamayadi?

**Qoida:** Gidrogenlanishda **massa saqlanadi**, mollar kamayadi; bromli suv faqat **butenni** yutadi.

**Yechim:** 1 mol C₄H₈ va 2 mol H₂ (M̄ = 20 ✓), massa 60 g.
1. Reaksiyadan keyin mollar = 60/24 = **2,5** → reaksiyaga kirgan 0,5 mol.
2. Tarkib: C₄H₈ 0,5; H₂ 1,5; C₄H₁₀ 0,5.
3. Brom buteni yutadi → 2,0 mol qoladi → **2,5/2 = 5/4 marta** kamayadi.

**Javob:** B) 5/4

**Tipik xato:** Butanni ham brom yutadi deb o'ylash; hajm nisbatini teskari yozish.

---

### 28-savol · **A**

**Shart:** ₉₆Cm + 3y·¹₀n + 2·¹₁p → ²⁵²₉₉Es + y·⁰₋₁e + z·γ + x·⁴₂α. 151,2 g Es va 1,8·N_A dona elektron hosil bo'ldi. Kyuriyning nisbiy atom massasini toping.

**Yechim:**
1. n(Es) = 151,2/252 = **0,6 mol**; elektronlar 1,8 mol → **y = 3**.
2. Zaryad: 96 + 2 = 99 − 3 + 2x → **x = 1**.
3. Massa: A + 3·3 + 2 = 252 + 4 · 1 → **A = 245**.

**Javob:** A) 245

**Tipik xato:** β⁻ zarrachaning zaryadini +1 deb olish; neytronlarning massasini (3y) unutish.

---

### 29-savol · **A**

**Shart:** Toluol va stirol aralashmasi kislotali sharoitda KMnO₄ bilan oksidlandi; 4,48 l (n.sh.) gaz ajraldi. Toluol massasi stiroldan 25,2 g ko'p bo'lsa, olingan **organik kislota** miqdorini toping.

**Qoida:** Toluol → benzoy kislota (gazsiz); **stirol → benzoy kislota + CO₂↑** (vinil guruhidagi uchinchi uglerod CO₂ ga ketadi).

**Yechim:**
1. n(CO₂) = 0,2 mol → stirol = 0,2 mol = **20,8 g**.
2. Toluol = 46 g = **0,5 mol**.
3. Benzoy kislota = 0,5 + 0,2 = **0,7 mol**.

**Javob:** A) 0,7

**Tipik xato:** Faqat toluoldan kislota chiqadi deb hisoblash; gazni SO₂ deb olish.

---

### 30-savol · **D**

**Shart:** Moy gidrolizlanganda 1 mol A, 2 mol B va 1 mol C hosil bo'ldi. 18,4 g A natriy bilan 6,72 l gaz berdi. B 2 mol brom biriktiradi va tetrabromli hosilasida 800/15 % brom bor. C da kislorod va uglerod atomlari 1 : 1,5. Moy tarkibidagi kislotalarni toping.

**Yechim:**
1. **A = glitserin**: 18,4 g = 0,2 mol → 3 ta OH → H₂ = 0,3 mol ✓ (6,72 l ✓)
2. **B:** 320/(M + 320) = 800/1500 → **M = 280** → ikkita qo'shbog'li **linol kislota** C₁₇H₃₁COOH ✓
3. **C:** O : C = 1 : 1,5 = 2 : 3 → C₃H₆O₂ = **propion (propan) kislota** ✓

**Javob:** D) linol kislota va propan kislota

**Tipik xato:** A ni kislota deb olish (natriy bilan 1 : 0,5 nisbat chiqadi va massa mos kelmaydi).

---

### 31-savol · **C**

**Shart:** AlCl₃ gidroliz bosqichlarini **o'ng tomonga** siljitish uchun nima qilish kerak?

**Qoida:** Al³⁺ + H₂O ⇄ AlOH²⁺ + **H⁺** — gidroliz **H⁺ ajratadi**, demak H⁺ ni chiqarib yuborish (ishqor qo'shish, qizdirish) muvozanatni o'ngga suradi.

**Javob:** C) H⁺ ionlarini chiqarib yuborish kerak

**Tipik xato:** Kislota qo'shish (A) — bu gidrolizni **bosadi**.

---

### 32-savol · **B**

**Javob:** B) H₂SO₄ *(HSO₄⁻ va SO₄²⁻)*

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** Mol nisbati **1 : 3** bo'lgan ishqoriy metall gidridlaridan (AH va BH) iborat 44,8 g aralashma mo'l suvda eritilsa **1,6 mol** gaz ajraldi.
Variantlar: A) 0,2 B) 0,7 C) 0,5 D) 0,6 E) 0,4 F) 0,3

**Umumiy qoida:** MeH + H₂O → MeOH + H₂↑ — **1 mol gidrid = 1 mol vodorod**.

**Metallarni aniqlash:**
1. Gidridlar jami 1,6 mol: AH = 0,4; BH = 1,2.
2. 0,4(A + 1) + 1,2(B + 1) = 44,8 → **A + 3B = 108** → A = 39 (**K**), B = 23 (**Na**).
3. **KH (M = 40)** va **NaH (M = 24)**.

---

### 33-savol · **A**

**Yechim:** 3 : 1 → KH = 3x, NaH = x: 120x + 24x = 144x = 7,2 → x = 0,05 → jami **0,2 mol** gaz

**Javob:** A) 0,2

---

### 34-savol · **D**

**Yechim:** 1 : 2 → KH = x, NaH = 2x: 40x + 48x = 88x = 17,6 → x = 0,2 → jami 3x = **0,6 mol**

**Javob:** D) 0,6

---

### 35-savol · **E**

**Yechim:** 1 : 1 → 64x = 12,8 → x = 0,2 → jami 2x = **0,4 mol**

**Javob:** E) 0,4

**Tipik xato:** Gidriddan 1 emas, 0,5 mol vodorod chiqadi deb olish (bu **metall** uchun o'rinli, gidrid uchun emas).

---

## III QISM — qisqa yozma topshiriqlar (36–40)

---

### 36-topshiriq

**Shart:** 126 mg alyuminiy ishqorda eritildi; ajralgan gaz havo bilan aralashtirilib 1,662 l idishga (43,95 kPa, 20 °C) joylashtirildi va portlatildi. Sharoit tiklanganda suv kondensatlanib bosim 28,5675 kPa bo'ldi. Qolgan gazlar miqdorlari **farqini** (mmol) toping (havoda 20 % O₂).

**Yechim:**
1. 2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + **3H₂**: n(Al) = 0,126/27 = 4,67 mmol → **H₂ = 7 mmol**.
2. Idishdagi jami gaz: n = PV/RT = (43,95 · 1,662)/(8,31 · 293) = **30 mmol** → havo = 23 mmol → **O₂ = 4,6**, **N₂ = 18,4**.
3. 2H₂ + O₂ → 2H₂O: H₂ cheklovchi → O₂ sarfi = 3,5 → **O₂ qoldi 1,1 mmol**.
4. Qolgan gaz = 1,1 + 18,4 = 19,5 mmol *(tekshirish: 19,5/30 · 43,95 = 28,5675 kPa ✓)*
5. Farq = 18,4 − 1,1 = **17,3 mmol**.

**Javob:** 17,3 mmol

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Alyuminiy + ishqor tenglamasi va H₂ = 7 mmol | 0,7 |
| Idishdagi umumiy gaz 30 mmol (ideal gaz tenglamasi) | 0,8 |
| Havo tarkibidan O₂ va N₂ ajratilgan | 0,5 |
| Vodorod cheklovchi ekani va O₂ qoldig'i | 0,7 |
| Farq 17,3 mmol | 0,5 |

**Tipik xato:** Alyuminiydan 1,5 emas, 1 mol H₂ olish; bosim orqali tekshirmaslik.

---

### 37-topshiriq

**Shart:** 25 g Na₂SO₄·6H₂O bilan tarkibida 24 % suv bo'lgan Al₂(SO₄)₃·nH₂O aralashmasi suvda eritilganda tarkibida 151,6 g suv bo'lgan eritma olindi. Kristallogidratlardagi **tuz miqdorlari teng**. Eritmadagi alyuminiy tuzining foiz konsentratsiyasini toping.

**Yechim:**
1. M(Na₂SO₄·6H₂O) = 250 → **0,1 mol** (tuz 14,2 g, suv 10,8 g).
2. Al₂(SO₄)₃ ham **0,1 mol** = 34,2 g = 76 % → kristallogidrat = **45 g**, undagi suv **10,8 g** (n = 6).
3. Kristallogidratlardan kelgan suv = 21,6 g → qo'shilgan suv = 151,6 − 21,6 = **130 g**.
4. Eritma = 25 + 45 + 130 = **200 g** → ω = 34,2/200 = **17,1 %**.

**Javob:** 17,1 %

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Na₂SO₄·6H₂O dan 0,1 mol tuz | 0,6 |
| 24 % suvdan Al₂(SO₄)₃·6H₂O (45 g) topilgan | 0,9 |
| Kristallogidratlardagi suv 21,6 g | 0,6 |
| Eritma massasi 200 g | 0,6 |
| ω = 17,1 % | 0,5 |

**Tipik xato:** Kristallizatsion suvni eritma suvidan ayirmaslik; "tuz miqdorlari teng" ni massalar teng deb olish.

---

### 38-topshiriq

**Shart:** 217 ml (5000/217) % li CuSO₄ eritmasiga (ρ = 1,2 g/ml) temir plastinka tushirildi; hosil bo'lgan eritmada 20 % CuSO₄ qoldi. Eritmadagi tuzlarning massa farqini toping.

**Yechim:**
1. Eritma = 260,4 g; CuSO₄ = 260,4 · 5000/21700 = **60 g (0,375 mol)**.
2. Fe + CuSO₄ → FeSO₄ + Cu: x mol → eritma massasi **8x g ga kamayadi**.
3. (60 − 160x)/(260,4 − 8x) = 0,2 → 7,92 = 158,4x → **x = 0,05 mol**.
4. CuSO₄ qoldi = 52 g; FeSO₄ = 7,6 g → farq = **44,4 g**.

**Javob:** 44,4 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Eritma massasi va CuSO₄ = 60 g | 0,7 |
| Eritma massasining o'zgarishi (−8x) to'g'ri ifodalangan | 0,9 |
| x = 0,05 mol | 0,8 |
| Farq 44,4 g | 0,8 |

**Tipik xato:** Eritma massasini o'zgarmas deb olish; misning cho'kmaga tushishini hisobga olmaslik.

---

### 39-topshiriq

**Shart:** Propinga noma'lum alkan qo'shilganda atomlar soni **11 marta**, massa esa **6,6 marta** ortdi. Aralashmaning geliyga nisbatan zichligini toping.

**Yechim:** Propin a mol (7 atom, 40 g/mol), alkan b mol.
1. Atomlar: (3n + 2)b = **70a**; massa: (14n + 2)b = **224a**.
2. Bo'lamiz: (14n+2)/(3n+2) = 3,2 → **n = 1 (metan)**, b = **14a**.
3. M̄ = (40a + 16 · 14a)/15a = 264/15 = **17,6** → D(He) = 17,6/4 = **4,4**.

**Javob:** 4,4

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Propindagi atomlar soni 7 ta | 0,5 |
| Ikkala shart tenglamaga aylantirilgan | 1,0 |
| n = 1 va b = 14a | 0,9 |
| D(He) = 4,4 | 0,8 |

**Tipik xato:** "11 marta ortdi" ni "11 marta ko'p" deb olish; geliyga emas, vodorodga nisbatan hisoblash.

---

### 40-topshiriq

**Shart:** 3 : 1 mol nisbatdagi dibrom alkanlar aralashmasi spirtli ishqorda eritilganda **har ikkisidan ham propin** hosil bo'ldi. Olingan alkin bromli suvdan o'tkazilganda 28,8 g tetrabromalkan hosil bo'ldi. Xuddi shunday aralashma **gidrolizlanganda** hosil bo'lgan aralashmaga Cu(OH)₂ ta'sir ettirilganda 2,88 g qizil cho'kma hosil bo'ldi. Eritmaga **tiniq ko'k rang beruvchi** modda massasini aniqlang.

**Qoida:** Propin beradigan dibromidlar — **1,1-dibrompropan** va **1,2-dibrompropan**. Suvli gidrolizda: 1,1- → **aldegid** (Cu₂O qizil cho'kma), 1,2- → **vitsinal diol** (ko'k eritma).

**Yechim:**
1. C₃H₄Br₄ = 360 → n(propin) = 28,8/360 = **0,08 mol** = dibromidlar jami → 0,06 va **0,02**.
2. Qizil cho'kma Cu₂O = 2,88/144 = **0,02 mol** → aldegid 0,02 mol → **1,1-dibrompropan = 0,02**, demak **1,2-dibrompropan = 0,06 mol**.
3. Propan-1,2-diol = 0,06 mol → Cu(OH)₂ bilan **mis(II) propilenglikolyat** C₃H₆O₂Cu (M = 138).
4. m = 0,06 · 138 = **8,28 g**.

**Javob:** 8,28 g *(agar "modda" deb diolning o'zi tushunilsa — 4,56 g)*

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Ikkala dibromid aniqlangan (1,1- va 1,2-) | 0,7 |
| Tetrabromiddan propin 0,08 mol | 0,6 |
| Cu₂O orqali 1,1-izomer 0,02 mol | 0,7 |
| Diol 0,06 mol va kompleksning formulasi | 0,7 |
| m = 8,28 g | 0,5 |

**Tipik xato:** 3 : 1 nisbatni to'g'ridan-to'g'ri qo'llash (aslida qaysi izomer ko'p ekanini **Cu₂O** belgilaydi); qizil cho'kmani CuO deb olish.

---

## IV QISM — kengaytirilgan topshiriqlar (41–43)

---

### 41-topshiriq *(6 ball)*

**Shart:** Cu(NO₃)₂ va KCl tutgan **727,4 g** eritmadan barcha mis ionlari yo'qolguncha inert elektrodlarda tok o'tkazildi. **Katoddagi modda massasi anodda ajralgan gazlar massasidan 15 g ko'p.** So'ng eritmaga kislota bilan qoldiqsiz reaksiyaga kirishi uchun 440 g x % li K₂S qo'shildi; natijada tarkibida **2 mol KNO₃** tutgan eritma olindi.

**Yechim:** Cu(NO₃)₂ = a, KCl = b.
1. Katod: Cu = a mol = **64a g**. Anod: avval Cl₂ (b/2 mol), so'ng O₂ ((2a − b)/4 mol) → massa = 35,5b + 8(2a − b) = **16a + 27,5b**.
2. 64a = 16a + 27,5b + 15 → **48a − 27,5b = 15**.
3. Elektrolizdan keyingi eritma: KNO₃ (b) + HNO₃ (2a − b). K₂S kislotani neytrallaydi:
   K₂S + 2HNO₃ → 2KNO₃ + H₂S↑ → KNO₃ jami = b + (2a − b) = **2a = 2** → **a = 1 mol**.
4. 48 − 27,5b = 15 → **b = 1,2 mol**.
5. **1)** Cu(NO₃)₂ **1 mol**, KCl **1,2 mol**; suv = 727,4 − 188 − 89,4 = 450 g = **25 mol**.
6. **2)** n(e⁻) = 2a = 2 mol → Q = 193000 C; t = 4 soat = 14400 s → **I = 13,4 A**.
7. **3)** K₂S = (2 − 1,2)/2 = 0,4 mol = 44 g → **x = 10 %**.
8. **4)** Cl₂ = 0,6 mol; **qaynoq** ishqor: 3Cl₂ + 6KOH → 5KCl + KClO₃ + 3H₂O →
   KCl = 1,0 mol (74,5 g) + KClO₃ = 0,2 mol (24,5 g) = **99 g**.

**Javob:** 1) 1 mol · 1,2 mol · 25 mol suv · 2) 13,4 A · 3) 10 % · 4) 99 g

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Anodda avval Cl₂, so'ng O₂ ajralishi ko'rsatilgan | 0,8 |
| Massalar farqi tenglamasi (48a − 27,5b = 15) | 0,9 |
| Elektrolizdan keyin HNO₃ hosil bo'lishi va 2a = 2 | 1,0 |
| **1-band:** 1 · 1,2 · 25 mol | 0,8 |
| **2-band:** 13,4 A | 0,8 |
| **3-band:** 10 % | 0,7 |
| **4-band:** qaynoq ishqor (KClO₃) va 99 g | 1,0 |

**Tipik xato:** Sovuq ishqor tenglamasini (KClO) ishlatish; elektrolizdan keyin eritmada kislota paydo bo'lishini sezmaslik.

---

### 42-topshiriq *(6 ball — 7 ta reaksiya)*

**1)** CH₃–CHBr–CH₂–CH(CH₃)–CH₂–CH₂Br + Zn →(t°) **ichki Vyurts** — halqa hosil bo'ladi:
**1,3-dimetilsiklopentan** + ZnBr₂

**2)** CH₃CH₂–CH=C(CH₃)–CH₃ + H₂O →(H₂SO₄) **Markovnikov**: OH vodorodi kam uglerodga:
CH₃CH₂CH₂–C(OH)(CH₃)–CH₃ = **2-metilpentan-2-ol**

**3)** C₆H₆ + 3Cl₂ →(quyosh nuri) **C₆H₆Cl₆ (geksaxlorsiklogeksan, geksaxloran)**
*(Yorug'likda — **qo'shilish**, katalizatorda esa o'rin olish bo'lardi.)*

**4)** C₃H₅(OH)₃ + 3HNO₃ →(kons. H₂SO₄) **C₃H₅(ONO₂)₃ (trinitroglitserin)** + 3H₂O

**5)** CH₃–CO–CH₃ + K₂Cr₂O₇ + 4H₂SO₄ → **CH₃COOH + HCOOH** + Cr₂(SO₄)₃ + K₂SO₄ + 4H₂O
*(Keton uzilib ikkita kislota beradi; elektronlar 6 ta.)*

**6)** CH₃OH + C₆H₅COOH →(kons. H₂SO₄) **C₆H₅COOCH₃ (metilbenzoat)** + H₂O

**7)** 6HCHO →(Ca(OH)₂, t°) **C₆H₁₂O₆** — Butlerovning qand sintezi

**Nomlanishi so'ralgan (1, 2, 3, 5):** 1,3-dimetilsiklopentan · 2-metilpentan-2-ol · geksaxlorsiklogeksan · sirka va chumoli kislotalar

| Baholash mezoni (6 ball) | Ball |
|---|---|
| 1-reaksiya: halqalanish + nomi | 1,1 |
| 2-reaksiya: Markovnikov + nomi | 1,0 |
| 3-reaksiya: yorug'likda qo'shilish | 0,9 |
| 4-reaksiya: trinitroglitserin | 0,8 |
| 5-reaksiya: ikkita kislota, tenglashtirish | 1,2 |
| 6- va 7-reaksiyalar | 1,0 |

**Tipik xato:** 1-da oddiy Vyurts (ikki molekulali) deb yozish; 3-da xlorbenzol yozish (yorug'lik → **qo'shilish**); 5-da faqat bitta kislota yozish.

---

### 43-topshiriq *(6 ball — sifat tahlili)*

**Shart (qisqacha):** 2 + 3(ko'p) → qizdirilganda oson parchalanadigan **oq cho'kma**; filtratdan suv bug'latilib qattiq qizdirilganda **metan va soda** hosil bo'ldi. 1 + 2 → **qora cho'kma**. 4 + 3 → avval oq cho'kma, keyin **erib ketdi** (3 va 4 kationlari **bitta davrda**). 1 + 4 → oq cho'kmalar aralashmasi (bir qismi HNO₃ da **erimadi**) + o'tkir hidli gaz. 1 + 5 → oq va **qo'ng'ir** cho'kmalar + o'tkir hidli gaz. 3 + 5 → faqat qo'ng'ir cho'kma.

**Yechim — moddalar:**
| № | Modda | Asos |
|---|---|---|
| 1 | **BaS** | S²⁻ qora sulfid va o'tkir hidli H₂S beradi; Ba²⁺ erimaydigan BaSO₄ hosil qiladi |
| 2 | **(CH₃COO)₂Pb** | PbS qora ✓; Pb(OH)₂ oq, oson parchalanadi; filtratda CH₃COONa qoladi |
| 3 | **NaOH** | Filtratdagi ortiqcha ishqor: CH₃COONa + NaOH →(t) CH₄↑ + Na₂CO₃ ✓ |
| 4 | **Al₂(SO₄)₃** | Al(OH)₃ oq, ortiqcha ishqorda eriydi; Al — natriy bilan **bir davrda** ✓ |
| 5 | **Fe₂(SO₄)₃** | Fe(OH)₃ qo'ng'ir ✓ (3 + 5 da faqat shu) |

**Asosiy tenglamalar:**
- (CH₃COO)₂Pb + 2NaOH → Pb(OH)₂↓ + 2CH₃COONa
- CH₃COONa + NaOH →(t) CH₄↑ + Na₂CO₃
- BaS + (CH₃COO)₂Pb → PbS↓ (qora) + (CH₃COO)₂Ba
- Al₂(SO₄)₃ + 6NaOH → 2Al(OH)₃↓ + 3Na₂SO₄ · Al(OH)₃ + NaOH(ortiqcha) → Na[Al(OH)₄]
- 3BaS + Al₂(SO₄)₃ + 6H₂O → 3BaSO₄↓ + 2Al(OH)₃↓ + 3H₂S↑ *(birgalikdagi gidroliz)*
- 3BaS + Fe₂(SO₄)₃ + 6H₂O → 3BaSO₄↓ + 2Fe(OH)₃↓ + 3H₂S↑
- Fe₂(SO₄)₃ + 6NaOH → 2Fe(OH)₃↓ + 3Na₂SO₄

**Qisqa ionli (so'ralganlar):**
- 1+2: Pb²⁺ + S²⁻ → PbS↓
- 1+4: 3Ba²⁺ + 3SO₄²⁻ → 3BaSO₄↓ va 2Al³⁺ + 3S²⁻ + 6H₂O → 2Al(OH)₃↓ + 3H₂S↑
- 3+5: Fe³⁺ + 3OH⁻ → Fe(OH)₃↓
- 2+3: Pb²⁺ + 2OH⁻ → Pb(OH)₂↓

**4-band — AgNO₃ qo'shilganda cho'kma:**
- 1: 2AgNO₃ + BaS → **Ag₂S↓ (qora)** + Ba(NO₃)₂
- 2: AgNO₃ + (CH₃COO)₂Pb → **CH₃COOAg↓ (kam eriydi)** + ...
- 3: 2AgNO₃ + 2NaOH → **Ag₂O↓ (qo'ng'ir)** + 2NaNO₃ + H₂O
- 4 va 5: 6AgNO₃ + Al₂(SO₄)₃ → **3Ag₂SO₄↓ (kam eriydi)** + 2Al(NO₃)₃ *(Fe₂(SO₄)₃ bilan ham shunday)*

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Metan + soda orqali 3 = NaOH va 2 da atsetat ekani | 1,0 |
| 1 = BaS (qora sulfid + BaSO₄ + H₂S) | 1,0 |
| 2 = qo'rg'oshin atsetati | 0,8 |
| 4 = Al₂(SO₄)₃ (amfoterlik + bir davr) | 0,8 |
| 5 = Fe₂(SO₄)₃ (qo'ng'ir cho'kma) | 0,6 |
| Molekulyar va ionli tenglamalar | 1,0 |
| AgNO₃ bilan cho'kmalar | 0,8 |

**Tipik xato:** "Bir qismi HNO₃ da erimay qoldi" belgisini e'tiborsiz qoldirish — u aynan **BaSO₄** ga ishora qiladi; birgalikdagi gidrolizni oddiy almashinish deb yozish (Al₂S₃ suvda mavjud emas).

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | C | 12 | A | 23 | C |
| 2 | B | 13 | D | 24 | A |
| 3 | B | 14 | C | 25 | A |
| 4 | C | 15 | A | 26 | B |
| 5 | B | 16 | C | 27 | B |
| 6 | A | 17 | B | 28 | A |
| 7 | D | 18 | C | 29 | A |
| 8 | B | 19 | B | 30 | D |
| 9 | B | 20 | C | 31 | C |
| 10 | B | 21 | C | 32 | B |
| 11 | B | 22 | C | | |

**33:** A (0,2) · **34:** D (0,6) · **35:** E (0,4)
**36:** 17,3 mmol · **37:** 17,1 % · **38:** 44,4 g · **39:** 4,4 · **40:** 8,28 g
**41:** 1 mol · 1,2 mol · 25 mol | 13,4 A | 10 % | 99 g
**42:** 7 ta reaksiya · **43:** BaS · Pb(CH₃COO)₂ · NaOH · Al₂(SO₄)₃ · Fe₂(SO₄)₃
`,st=`# Sertifikat — 04.05.2025, I smena (+ 3 ta bonus to'plam)

**Manba:** \`Milliy sertifikat .pdf\`, 49–57-betlar · ishlash vaqti 100 daqiqa
**Tuzilishi:** 1–32 yopiq test · 33–35 umumiy shartli test · 36–40 qisqa yozma · 41 kengaytirilgan
**Qo'shimcha:** 53–55-betlarda **Bonus-1, Bonus-2, Bonus-3** to'plamlari (har birida 41, 42, 43-topshiriqlar)

> Betlar **skan** ko'rinishida — savollar rasmdan o'qib olindi.
> ⚠️ **19 va 29-savollarning birinchi jumlasi skanda tushib qolgan** (ustunlar chegarasida);
> ularning javoblari shartli ravishda berilgan.

---

## I QISM — yopiq testlar (1–32)

### 1-savol · **D**

**Shart:** CH₃–CH(NH₂)–COOH aminokislotaning nomini aniqlang.

**Qoida:** Glitsin — H₂N–CH₂–COOH · **alanin — CH₃–CH(NH₂)–COOH** · serin — HO–CH₂–CH(NH₂)–COOH · sistein — HS–CH₂–CH(NH₂)–COOH

**Javob:** D) alanin

---

### 2-savol · **D**

**Shart:** Noma'lum alkanning yonish reaksiyasida uzilgan **qutbli va qutbsiz** kovalent bog'lar soni 1 : 1,6 nisbatda bo'lsa, alkanni aniqlang.

**Qoida:** Qutbli — **C–H** (2n + 2 ta); qutbsiz — **C–C** (n − 1 ta) va **O=O** (har biri 2 bog' birligi).

**Yechim:**
1. Qutbsiz: (n − 1) + 2 · (3n+1)/2 = n − 1 + 3n + 1 = **4n**.
2. (2n + 2)/4n = 1/1,6 → 3,2n + 3,2 = 4n → **n = 4 (butan)**.

**Javob:** D) butan

**Tipik xato:** Kisloroddagi qo'shbog'ni bitta bog' deb sanash (javob chiqmaydi).

---

### 3-savol · **A**

**Shart:** Noma'lum uglevodorod yonish reaksiyasida chap va o'ng tomondagi koeffitsiyentlar yig'indisi teng. Uning metanga nisbatan zichligini toping.

**Yechim:**
1. CₓH_y + (x + y/4)O₂ → xCO₂ + (y/2)H₂O.
2. 1 + x + y/4 = x + y/2 → **y = 4**.
3. Variantlardan M = 28 → **C₂H₄** ✓ → D(CH₄) = 28/16 = **1,75**.

**Javob:** A) 1,75

**Tipik xato:** Faqat o'ng tomon koeffitsiyentlarini sanash; moddani C₂H₆ deb olish.

---

### 4-savol · **B**

**Shart:** 1000 g 98,2 % li sulfat kislota eritmasiga qancha gramm **sulfat angidrid** qo'shilsa 20 % li oleum hosil bo'ladi?

**Qoida:** Oleumdagi foiz — **erkin SO₃** ulushi; eritmadagi suv avval SO₃ bilan birikadi.

**Yechim:**
1. Suv = 18 g = **1 mol** → u 80 g SO₃ ni bog'laydi.
2. (x − 80)/(1000 + x) = 0,2 → 0,8x = 280 → **x = 350 g**.

**Javob:** B) 350

**Tipik xato:** Suvni hisobga olmaslik (x = 250 chiqadi).

---

### 5-savol · **A**

**Javob:** A — **Gund qoidasi** (spinlar yig'indisi maksimal)

---

### 6-savol · **A**

**Shart:** 500 g 19,6 % li H₂SO₄ eritmasiga necha gramm BaCl₂·2H₂O qo'shilganda eritmadagi sulfat kislotaning massa ulushi 5 % bo'ladi?

**Yechim:**
1. H₂SO₄ = 98 g = **1 mol**; BaCl₂·2H₂O = x mol (M = 244) → BaSO₄↓ = 233x g.
2. Eritma massasi = 500 + 244x − 233x = **500 + 11x**; qolgan kislota = 98(1 − x).
3. 98(1 − x) = 0,05(500 + 11x) → 98 − 98x = 25 + 0,55x → **x = 20/27 mol**.
4. m = (20/27) · 244 = **4880/27 g** (≈180,7).

**Javob:** A) 4880/27

**Tipik xato:** Cho'kma massasini ayirmaslik; kristallizatsion suvni e'tiborsiz qoldirish.

---

### 7-savol · **B**

**Shart:** Ko'mir tarkibida C — 68,8 %, H — 10 %, S — 3,2 % va yonmaydigan mineral moddalar bor. 3 kg ko'mir yonishiga sarflangan kislorod qancha m³ havo tarkibida bor? (havoda O₂ 20 %)

**Yechim:**
1. C = 2064 g = **172 mol** → O₂ 172; H = 300 g = **300 mol** → O₂ 75; S = 96 g = **3 mol** → O₂ 3.
2. Jami O₂ = **250 mol** = 5600 l = 5,6 m³ → havo = 5,6/0,2 = **28 m³**.

**Javob:** B) 28

**Tipik xato:** Vodorod uchun O₂ ni 150 mol deb olish (4 mol H ga 1 mol O₂).

---

### 8-savol · **A**

**Javob:** A) kumushning elektr o'tkazuvchanligi berilliynikidan yaxshiroq
*(Kumush — eng yaxshi o'tkazgich; qizil fosfor qattiq; havoda N₂ va O₂ 4 : 1.)*

---

### 9-savol · **A**

**Javob:** A) Li + O₂ → Li₂O (**asosli oksid**)
*(ZnO — amfoter, P₂O₅ va CO₂ — kislotali.)*

---

### 10-savol · **B**

**Yechim:** Bog'lar = 308/0,154 = **2000** → uglerodlar 2000 → zvenolar 1000 → M = **28000**

**Javob:** B) 28000

---

### 11-savol · **D**

**Shart:** Qaysi modda Ba(OH)₂ eritmasiga qo'shilganda eritmaning elektr o'tkazuvchanligi **kamayadi**?

**Qoida:** O'tkazuvchanlik ionlar kamayganda tushadi — **ikkala ion ham cho'kmaga** o'tishi kerak.

**Yechim:** Ba(OH)₂ + 2AgF → **BaF₂↓** + 2AgOH(→Ag₂O↓) — ham kation, ham anion eritmadan chiqadi ✓

**Javob:** D) AgF

**Tipik xato:** BaCl₂ ni tanlash — u bilan reaksiya bormaydi, ionlar soni **ortadi**.

---

### 12-savol · **B**

**Shart:** KMnO₄ **suvli eritmada** bir moddani oksidladi. Marganesning oksidlanish darajasi necha birlikka o'zgaradi?

**Qoida:** Neytral muhitda MnO₄⁻ → **MnO₂**: Mn⁺⁷ → Mn⁺⁴ → **3 birlik**.

**Javob:** B) 3

**Tipik xato:** Kislotali muhitdagidek 5 birlik deb olish.

---

### 13-savol · **D**

**Javob:** D) N₂O₃ va CrO₃ *(ikkalasi ham kislotali oksid)*

**Tipik xato:** Cr₂O₃ ni kislotali deb olish — u **amfoter**; N₂O — befarq.

---

### 14-savol · **D**

**Shart:** 6,2 g modda yonganda 8,8 g CO₂, 9 g suv va 2,8 g azot hosil bo'lsa, empirik formulani aniqlang.

**Yechim:**
1. C = 0,2 mol (2,4 g); H = 1 mol (1 g); N = 0,2 mol (2,8 g) → jami **6,2 g** → kislorod **yo'q**.
2. C : H : N = 0,2 : 1 : 0,2 = **1 : 5 : 1** → CH₅N = **CH₃NH₂**.

**Javob:** D) CH₃NH₂

**Tipik xato:** Azotni N₂ holida 0,1 mol deb qoldirish (atomlar 0,2 mol).

---

### 15-savol · **C**

**Shart:** Chiziqli polipeptid 5 glitsin, 10 alanin va 15 serin qoldig'idan tashkil topgan. 23,18 g polipeptidni gidrolizlash uchun qancha (mol) suv kerak?

**Yechim:**
1. M = 5·75 + 10·89 + 15·105 − 29·18 = 2840 − 522 = **2318**.
2. n = **0,01 mol** → suv = 29 · 0,01 = **0,29 mol**.

**Javob:** C) 0,29

**Tipik xato:** 30 ta suv olish (bog'lar **29 ta**).

---

### 16-savol · **A**

**Qoida:** **CaOCl₂** — aralash tuz: Ca²⁺ + **Cl⁻** + **ClO⁻** → ikki xil anion ✓

**Javob:** A) CaOCl₂

**Tipik xato:** KAl(SO₄)₂ ni tanlash — unda ikki xil **kation** bor.

---

### 17-savol · **A**

**Shart:** X g fosfor konsentrlangan **sulfat** kislota bilan; xuddi shuncha kislota Y g mis bilan ta'sirlashadi (Y − X = 9,8). CuSO₄ eritmasiga Z g temir tushirilganda Y g mis ajraladi.

**Yechim:**
1. 2P + 5H₂SO₄ → 2H₃PO₄ + 5SO₂ + 2H₂O (2,5 mol/P) · Cu + 2H₂SO₄ (2 mol/Cu).
2. 2,5X/31 = 2Y/64 → **X = 0,3875Y** → 0,6125Y = 9,8 → **Y = 16 g (0,25 mol Cu)**.
3. Fe + CuSO₄ → FeSO₄ + Cu → Fe = 0,25 mol = **14 g**.

**Javob:** A) 14

---

### 18-savol · **B**

**Qoida:** Linol kislota C₁₇H₃₁COOH = C₁₈H₃₂O₂ → **CₙH₂ₙ₋₄O₂** (ikkita qo'shbog')

**Javob:** B) CₙH₂ₙ₋₄O₂

---

### 19-savol *(shartning boshi skanda yo'q)*

> Savolning faqat oxirgi qismi ko'rinadi: "…reaksiyaga kirishganda qancha litr (n.sh.) gaz ajraladi?
> (unum = 75 %)". Boshlang'ich ma'lumot skanda tushib qolgan — savol tiklanmaydi.
> Variantlar: A) 2,52 B) 3,36 C) 1,68 D) 4,37

---

### 20-savol · **D**

**Shart:** 300 ml 0,2 M NaCl eritmasiga 0,4 M Na₂SO₄ qo'shildi; Na⁺ konsentratsiyasi 0,44 M bo'ldi. **Xlorid** ionlari konsentratsiyasini aniqlang.

**Yechim:**
1. Qo'shilgan hajm V: (0,06 + 0,8V)/(0,3 + V) = 0,44 → 0,06 + 0,8V = 0,132 + 0,44V → **V = 0,2 l**.
2. Cl⁻ = 0,06 mol; umumiy hajm 0,5 l → C = **0,12 M**.

**Javob:** D) 0,12

**Tipik xato:** Xlorid miqdorini o'zgardi deb hisoblash (u reaksiyaga kirishmaydi).

---

### 21-savol · **B** *(rasmli)*

**Shart:** HNO₃ magnezit (MgCO₃) ustiga quyildi; ikkinchi probirkada hosil bo'lgan **gazni** toping.

**Yechim:** MgCO₃ + 2HNO₃ → Mg(NO₃)₂ + **CO₂↑** + H₂O

**Javob:** B) CO₂

**Tipik xato:** Nitrat kislota bilan har doim NO₂ chiqadi deb o'ylash — **karbonat** bilan oddiy almashinish boradi.

---

### 22-savol · **Fe₂(SO₄)₃** *(variant belgilari takrorlangan — izohga qarang)*

**Shart:** Kristallogidrat X·2H₂O ning molyar massasi 436 g/mol bo'lsa, X ni aniqlang.

**Yechim:** X = 436 − 36 = **400 g/mol** → Al(NO₃)₃ 213 ✗ · Cr₂(SO₄)₃ 392 ✗ · Ca₃(PO₄)₂ 310 ✗ · **Fe₂(SO₄)₃ 400** ✓

**Javob:** Fe₂(SO₄)₃

> **Izoh:** savolda "tiniq ko'k rangli" deyilgan, lekin temir(III) sulfat sarg'ish bo'ladi —
> rang tavsifi molyar massa bilan ziddiyatli. Variantlar ro'yxatida ham **D** ikki marta yozilgan.

---

### 23-savol · **C**

**Shart:** 160 ml (ρ = 1,25) 11,7 % li NaCl eritmasi elektroliz qilindi; 0,7 mol gazlar hosil bo'ldi. Vodorod massasini toping.

**Yechim:**
1. Eritma 200 g → NaCl = 23,4 g = **0,4 mol** → Cl₂ = 0,2; shu bosqichda H₂ = 0,2.
2. Qolgan 0,3 mol gaz: 2y (H₂) + y (O₂) = 3y → y = 0,1 → qo'shimcha H₂ = **0,2 mol**.
3. Jami H₂ = 0,4 mol = **0,8 g**.

**Javob:** C) 0,8

**Tipik xato:** Xlorid tugagach suv parchalanishini hisobga olmaslik.

---

### 24-savol · **C**

**Shart:** A + 2B → 3C + D. C ning hosil bo'lish tezligi 0,015 mol/(l·s); dastlabki B miqdori va vaqtdan so'ng B ning miqdori (V = 2 l)?

**Yechim:**
1. v(B) = (2/3)·0,015 = **0,01 mol/(l·s)** → 10 s da Δ[B] = 0,1 mol/l → Δn = **0,2 mol**.
2. Dastlabki 0,9 mol bo'lsa: 0,9 − 0,2 = **0,7 mol**.

**Javob:** C) 0,7

> **Izoh:** shartning o'rta qismi (dastlabki miqdor va vaqt) skanda ustunlar orasida qolgan;
> javob variantiga ko'ra 0,9 mol va 10 sekund olingan.

**Tipik xato:** C va B ning tezliklarini teng deb olish (koeffitsiyentlar 3 va 2).

---

### 25-savol · **C**

**Yechim:** Cr(OH)₃ = 103 → nitrobirikma C₄H₉NO₂; sp³ atomlar 4 ta → modda 0,2 mol.
Izomer aminokislotada ham 4 ta sp³ atom (3 C + N) → orbitallar = 0,2 · 4 · 4 = **3,2·N_A**

**Javob:** C) 3,2·N_A

---

### 26-savol · **B**

**Shart:** Reaksiya 20 °C da 54 sekund, 50 °C da 2 sekund davom etsa, 30 °C da necha sekundda tugaydi?

**Qoida:** Vaqt tezlikka **teskari** proporsional: t₁/t₂ = γ^(ΔT/10).

**Yechim:**
1. 54/2 = 27 = γ³ → **γ = 3**.
2. t(30 °C) = 54/3 = **18 s**.

**Javob:** B) 18

**Tipik xato:** Vaqtni tezlikka to'g'ri proporsional deb olish (162 chiqadi).

---

### 27-savol · **A**

**Shart:** CₙH₂ₙ₊₂O₂ formulali A, B, C: A va B natriy bilan ta'sirlashadi va Cu(OH)₂ bilan **ko'k eritma** beradi; C natriy bilan ta'sirlashadi, lekin Cu(OH)₂ bilan **kirishmaydi**.

**Qoida:** Ko'k eritma — **qo'shni ikkita OH**; natriy bilan reaksiya — kamida bitta OH.

**Yechim:** C da **bitta OH** va bitta efir guruhi bo'lishi kerak → CH₃–CH(OH)–CH(OCH₃)–CH₃ ✓

**Javob:** A) CH₃–CH(OH)–CH(OCH₃)–CH₃

**Tipik xato:** D variantini tanlash — unda OH umuman yo'q, natriy bilan ham reaksiyaga kirishmaydi.

---

### 28-savol · **C**

**Qoida:** Fe³⁺ uchun: **sariq qon tuzi** K₄[Fe(CN)₆] (berlin lazuri), **rodanid** (qon-qizil), **ishqor** (qo'ng'ir cho'kma). Qizil qon tuzi — Fe²⁺ uchun.

**Javob:** C) 2, 3, 4

---

### 29-savol *(shartning boshi skanda yo'q)*

> Faqat "…oksidlarning suv bilan reaksiyaga kirishish aktivligi qanday o'zgaradi?" qismi ko'rinadi.
> Agar qator **ishqoriy metall oksidlari** (Li₂O → Na₂O → K₂O) bo'lsa — javob **D) ortib boradi**;
> agar nometall oksidlari guruh bo'ylab pastga bo'lsa — **A) kamayib boradi**.
> Qator ko'rinmagani uchun aniq javob berilmaydi.

---

### 30-savol · **C**

**Shart:** 500 ml suvda 6 mol SO₃ eritilishidan hosil bo'lgan eritmaning (ρ = 1,4 g/ml) qanday hajmiga 33,6 l (n.sh.) SO₃ ni eritib **78,75 %** li sulfat kislota olish mumkin?

**Yechim:**
1. 6 mol SO₃ + 6 mol H₂O → 6 mol H₂SO₄ (588 g); qolgan suv = 500 − 108 = 392 g → eritma **980 g, 60 %**.
2. V ml olinsa: massa 1,4V; H₂SO₄ 0,84V. Qo'shilgan SO₃ = 1,5 mol (120 g) → 1,5 mol suvni bog'laydi va **147 g** H₂SO₄ beradi.
3. (0,84V + 147)/(1,4V + 120) = 0,7875 → 52,5 = 0,2625V → **V = 200 ml**.

**Javob:** C) 200

**Tipik xato:** Birinchi eritmaning foizini hisoblamay to'g'ridan-to'g'ri aralashtirish qoidasini qo'llash.

---

### 31-savol · **C**

**Javob:** C) 5, 3, 4, 2, 1, 6 *(saxarozadan shakar olish bosqichlari — 11-variant, 16-savol bilan bir xil)*

---

### 32-savol · **B**

**Shart:** CO + H₂O ⇄ CO₂ + H₂; muvozanat konsentratsiyalari 16, 5, 10, 8 mol/l. Sistemaga 0,4 mol H₂O qo'shilganda yangi muvozanatdagi konsentratsiyalar (V = 0,4 l)?

**Yechim:**
1. K = (10·8)/(16·5) = **1**.
2. Qo'shilgan suv: 0,4/0,4 = **+1 mol/l** → [H₂O] = 6.
3. (10+z)(8+z) = (16−z)(6−z) → 80 + 18z = 96 − 22z → **z = 0,4**.
4. CO = 15,6; **H₂O = 5,6**; CO₂ = 10,4; **H₂ = 8,4 mol/l**.

**Javob:** B) H₂O = 5,6 mol/l; H₂ = 8,4 mol/l

**Tipik xato:** A yoki C variantini tanlash — ularda **birlik** noto'g'ri (mol/l o'rniga mol).

---

## II QISM — umumiy shartli testlar (33–35)

**Umumiy shart:** Natriy va kaliy aralashmasi oltingugurt bilan ta'sirlashganda sulfidlar hosil bo'ldi. Kaliy massasi natriy massasidan **11 g ko'p**; sulfidlar massasi dastlabki metallar massasidan **9,6 g ko'p**.
Variantlar: A) 0,8 B) 0,7 C) 10,5 D) 14,2 E) 0,4·N_A F) 0,3·N_A

**Umumiy yechim:** Na = a, K = b mol.
1. Qo'shilgan massa — **oltingugurt**: 2Na + S → Na₂S, 2K + S → K₂S → S = (a + b)/2 mol.
   32(a + b)/2 = 16(a + b) = 9,6 → **a + b = 0,6**.
2. 39b − 23a = 11 → **a = 0,2 (Na)**, **b = 0,4 (K)**.

---

### 33-savol · **E**

**Yechim:** Kaliy atomlari = 0,4 mol = **0,4·N_A**

**Javob:** E) 0,4·N_A

---

### 34-savol · **D**

**Yechim:** K₂S = 0,2 mol · 110 = 22 g; Na₂S = 0,1 mol · 78 = 7,8 g → farq = **14,2 g**

**Javob:** D) 14,2

---

### 35-savol · **A**

**Yechim:** 3Na₂S + Al₂(SO₄)₃ + 6H₂O → 3Na₂SO₄ + 2Al(OH)₃↓ + 3H₂S↑
0,1 mol Na₂S (7,8 g qo'shiladi) → Al(OH)₃ 0,0667 mol (5,2 g) + H₂S 0,1 mol (3,4 g) chiqadi.
Eritma massasi: 7,8 − 8,6 = **−0,8 g** → 0,8 g ga kamayadi

**Javob:** A) 0,8

**Tipik xato:** Qo'shilgan tuz massasini hisobga olmay faqat cho'kma va gazni ayirish.

---

## III QISM — qisqa yozma topshiriqlar (36–40)

---

### 36-topshiriq

**Shart:** A va B tarkibida X elementi bor. A yorug'lik va issiqlik ta'sirida parchalanib hosil qilgan **oddiy moddada** B yonadi. B katalizatorsiz yonganda X tutgan **oddiy modda**, katalizator bilan esa **XO** oksidini beradi. A + B reaksiyasini yozing.

**Qoida:** Katalizatorsiz 4NH₃ + 3O₂ → 2N₂ + 6H₂O; katalizator bilan 4NH₃ + 5O₂ → 4**NO** + 6H₂O → **B = NH₃**, X = **azot**.
A — azot tutgan, yorug'likda parchalanib **kislorod** beradigan modda: 4HNO₃ →(hν) 4NO₂ + **O₂** + 2H₂O.

**Yechim:** A = **HNO₃**, B = **NH₃** → **NH₃ + HNO₃ → NH₄NO₃**

**Javob:** NH₃ + HNO₃ → NH₄NO₃

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Katalizatorli/katalizatorsiz yonish farqidan B = NH₃ | 1,0 |
| A ning yorug'likda parchalanishi va O₂ berishi | 1,0 |
| X = azot ekani asoslangan | 0,5 |
| Yakuniy tenglama | 0,7 |

**Tipik xato:** B ni H₂S deb olish (u SO₂ beradi, oddiy modda emas).

---

### 37-topshiriq

**Shart:** Noma'lum alkan o'z hajmidan **10 marta ko'p** hajmdagi O₂ va N₂ (M̄ = 30,8) aralashmasi bilan to'la yondirildi. Suv kondensatlangach qolgan gazlarda azotning hajmiy ulushi 37,5 % bo'lsa, **karbonat angidrid** ulushini toping.

**Yechim:**
1. M̄ = 30,8 → O₂ : N₂ = **7 : 3** → 10 hajmda O₂ = 7, N₂ = 3.
2. CₙH₂ₙ₊₂ 1 hajm: O₂ sarfi (3n+1)/2; qolgan gazlar: CO₂ = n, O₂ = 7 − (3n+1)/2, N₂ = 3.
3. Jami = 9,5 − 0,5n; 3/(9,5 − 0,5n) = 0,375 → **n = 3 (propan)**.
4. Jami = 8; CO₂ = 3 → **37,5 %**.

**Javob:** 37,5 %

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| M̄ dan O₂ : N₂ = 7 : 3 | 0,8 |
| Suv kondensatlangani hisobga olingan | 0,5 |
| Azot ulushidan n = 3 | 1,0 |
| CO₂ ulushi 37,5 % | 0,9 |

**Tipik xato:** Ortiqcha kislorodni unutish; suv bug'ini aralashmada qoldirish.

---

### 38-topshiriq

**Shart:** K₂CO₃ va KHCO₃ aralashmasi qizdirilganda hosil bo'lgan gaz hajmi, qattiq qoldiqqa mo'l HCl ta'sir ettirilganda ajralgan gaz hajmining **2/5** qismini tashkil qiladi. Dastlabki KHCO₃ massasi 20 g bo'lsa, K₂CO₃ massasini aniqlang.

**Yechim:**
1. 2KHCO₃ →(t) K₂CO₃ + CO₂↑ + H₂O: n(KHCO₃) = 0,2 → **CO₂ = 0,1 mol**; hosil bo'lgan K₂CO₃ = 0,1 mol.
2. Qoldiq K₂CO₃ = x + 0,1 → HCl bilan CO₂ = x + 0,1.
3. 0,1 = 0,4(x + 0,1) → **x = 0,15 mol** → m = **20,7 g**.

**Javob:** 20,7 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Gidrokarbonatning parchalanish tenglamasi | 0,7 |
| Qoldiqdagi K₂CO₃ (dastlabki + hosil bo'lgan) | 0,9 |
| 2/5 sharti tenglamaga aylantirilgan | 0,9 |
| m = 20,7 g | 0,7 |

**Tipik xato:** Qizdirishdan hosil bo'lgan K₂CO₃ ni qoldiqqa qo'shmaslik.

---

### 39-topshiriq

**Shart:** 1,3 mol etilen va vodorod aralashmasi (M̄ = 20) katalizator yordamida qizdirilganda hosil bo'lgan aralashmada (M̄ = 26) necha gramm **etan** hosil bo'lgan?

**Yechim:**
1. 28a + 2b = 20 · 1,3 = 26 va a + b = 1,3 → **a = 0,9 (C₂H₄)**, b = 0,4 (H₂); massa = **26 g**.
2. Reaksiyadan keyin mollar = 26/26 = **1,0** → kamayish 0,3 mol = **etan 0,3 mol** = **9 g**.

**Javob:** 9 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Dastlabki tarkib (0,9 va 0,4 mol) | 0,9 |
| Massa saqlanishi va yangi mollar soni | 1,0 |
| Mollar kamayishi = etan miqdori | 0,8 |
| m = 9 g | 0,5 |

**Tipik xato:** Vodorodni cheklovchi deb olmaslik (bu yerda u 0,4 mol — reaksiyaga 0,3 moli kirgan).

---

### 40-topshiriq

**Shart:** Glitserin va **ikki xil** karbon kislotadan (bir-biridan 1 ta CH₂ ga farq qiladi) hosil bo'lgan yog' NaOH sharoitda gidrolizlandi; natijada 1,84 % glitserin va 6,88 % tuzlar saqlagan 200 g eritma olindi. Yog'ning massasini aniqlang.

**Yechim:**
1. Glitserin = 3,68 g = **0,04 mol** → yog' 0,04 mol; tuzlar = 13,76 g, mollari 0,12.
2. O'rtacha M(tuz) = 114,67 → qo'shni gomologlar: C₃H₇COONa (110) va C₄H₉COONa (124):
   110a + 124b = 13,76, a + b = 0,12 → **a = 0,08**, **b = 0,04** (ya'ni yog'da 2 ta butirat, 1 ta valerat qoldig'i).
3. M(yog') = (88 + 88 + 102) + 38 = **316** → m = 0,04 · 316 = **12,64 g**
   *(Tekshirish: 12,64 + 4,8 (NaOH) = 17,44 = 3,68 + 13,76 ✓)*

**Javob:** 12,64 g

| Baholash mezoni (3,2 ball) | Ball |
|---|---|
| Glitserin orqali yog' 0,04 mol | 0,6 |
| Tuzlarning o'rtacha M si va gomologlar aniqlangan | 1,0 |
| Yog'dagi qoldiqlar nisbati (2 : 1) | 0,8 |
| m = 12,64 g (massa balansi bilan tekshirilgan) | 0,8 |

**Tipik xato:** Uchala qoldiq bir xil deb olish; tuzlarni kislota deb hisoblash.

---

## IV QISM — 41-topshiriq *(6 ball)*

**Shart:** P₂S₅ 960 g x % li konsentrlangan nitrat kislota eritmasida eritildi. Hosil bo'lgan eritmaga **1600 g 34 %** li AgNO₃ eritmasi qo'shildi; suyultirilgan nitrat kislota eritmasi hosil bo'ldi. Suyultirilgan eritmadagi HNO₃ massasi konsentrlangan eritmadagidan **2 marta kam**.

**Yechim:**

**1) Tenglashtirish.** P₂S₅ da P⁺⁵ va S⁻²; faqat **oltingugurt oksidlanadi** (−2 → +6, 8 e⁻ × 5 = **40 e⁻**); NO₃⁻ + e⁻ → NO₂.
**P₂S₅ + 40NO₃⁻ + 24H⁺ → 2PO₄³⁻ + 5SO₄²⁻ + 40NO₂↑ + 12H₂O**
*(zaryad: −40 + 24 = −16 = −6 − 10 ✓ · O: 120 = 8 + 20 + 80 + 12 ✓)*
Molekulyar: P₂S₅ + 40HNO₃ → 2H₃PO₄ + 5H₂SO₄ + 40NO₂↑ + 12H₂O

**2) x ni topish.** n(AgNO₃) = 544/170 = **3,2 mol**.
Cho'kmalar: Ag₃PO₄ (3 Ag) va Ag₂SO₄ (2 Ag) → 3(2a) + 2(5a) = 16a = 3,2 → **a = 0,2 mol P₂S₅**.
- Sarflangan HNO₃ = 40a = **8 mol = 504 g**
- AgNO₃ bilan almashinishda **qayta hosil bo'lgan** HNO₃: 3(0,4) + 2(1,0) = **3,2 mol = 201,6 g**
- Shart: (9,6x − 504) + 201,6 = 4,8x → 4,8x = 302,4 → **x = 63 %**

**3) Cho'kmalar massasi:** Ag₃PO₄ 0,4 mol · 419 = 167,6 g + Ag₂SO₄ 1,0 mol · 312 = 312 g = **479,6 g**

**4) Mis:** suyultirilgan eritmada HNO₃ = 4,8 · 63 = 302,4 g = **4,8 mol**;
3Cu + 8HNO₃(suyul.) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O → Cu = (3/8)·4,8 = **1,8 mol**

**Javob:** 1) tenglama · 2) 63 % · 3) 479,6 g · 4) 1,8 mol

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Faqat oltingugurt oksidlanishi (40 e⁻) aniqlangan | 0,8 |
| Yarim reaksiyalar va to'liq tenglashtirish | 1,0 |
| Kumush balansidan P₂S₅ = 0,2 mol | 1,0 |
| Almashinishda HNO₃ qayta hosil bo'lishi hisobga olingan | 1,0 |
| x = 63 % | 0,8 |
| Cho'kmalar 479,6 g | 0,7 |
| Mis 1,8 mol | 0,7 |

**Tipik xato:** Fosforni ham oksidlanadi deb hisoblash (u allaqachon +5); AgNO₃ bilan reaksiyada ajralgan HNO₃ ni unutish.

---

# BONUS-1

### 41-topshiriq

**Shart:** Atomlar soni teng bo'lgan metil xlorid va noma'lum alkil xloriddan iborat **18,96 g** aralashma KOH ning suvli eritmasidan o'tkazilganda **13,04 g** spirtlar aralashmasi hosil bo'ldi.

**Yechim:** CH₃Cl = a (5 atom), CₙH₂ₙ₊₁Cl = b (3n + 2 atom).
1. Massa kamayishi: RCl → ROH da −18,5 g/mol → 18,96 − 13,04 = 5,92 = 18,5(a + b) → **a + b = 0,32**.
2. Massa: 50,5a + (14n + 36,5)b = 18,96 → **14b(n − 1) = 2,8**.
3. Atomlar: 5a = (3n + 2)b → **b(3n + 7) = 1,6**.
4. Yechim: **n = 3**, b = 0,1, a = 0,22.

**Javoblar:**
1. Alkil xlorid — **C₃H₇Cl (propilxlorid)**
2. Massa farqi: 11,11 − 7,85 = **3,26 g**
3. KOH = 0,32 mol = 17,92 g → eritma = 17,92/0,056 = **320 g**
4. Katta spirt: C₃H₇OH = 0,1 · 60 = **6 g**
5. Vodorod atomlari: 3·0,22 + 7·0,1 = **1,36·N_A**

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Massa kamayishi orqali umumiy mollar 0,32 | 1,0 |
| "Atomlar soni teng" sharti tenglamaga aylantirilgan | 1,0 |
| n = 3 (propilxlorid) | 1,0 |
| 2-band: 3,26 g | 0,7 |
| 3-band: 320 g | 0,8 |
| 4-band: 6 g | 0,7 |
| 5-band: 1,36·N_A | 0,8 |

---

### 42-topshiriq — tenglashtirish

1. C₆H₅NH₂ + 3Br₂ → C₆H₂Br₃NH₂↓ + 3HBr
2. H₂N–CH₂–COOH + H₂N–CH(CH₃)–COOH → H₂N–CH₂–CO–NH–CH(CH₃)–COOH + H₂O
3. CH₂=CH–COOH + HCl → **Cl–CH₂–CH₂–COOH** *(anti-Markovnikov: COOH — elektron tortuvchi)*
4. C₂H₂ + H₂O →(Hg²⁺) CH₃CHO
5. CH₃CHO + 2Cu(OH)₂ →(t) CH₃COOH + **Cu₂O↓** + 2H₂O
6. SiCl₄ + 3H₂O → H₂SiO₃↓ + 4HCl
7. 2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + **O₂**
8. 4Au + 8KCN + O₂ + 2H₂O → 4K[Au(CN)₂] + 4KOH
9. 3Fe + 4H₂O →(t) Fe₃O₄ + 4H₂
10. K₂Cr₂O₇ + 6KI + 7H₂SO₄ → Cr₂(SO₄)₃ + 3I₂ + 4K₂SO₄ + 7H₂O

**Tipik xato:** 3-reaksiyada Markovnikov qoidasini qo'llash; 7-da kislorodni unutish.

---

### 43-topshiriq — sifat tahlili

**Belgilar:** 1+2 → palag'da hidli gaz (H₂S) va **"silvin" (KCl)** · 1+5 → neytrallanish, 5 dagi kation alangani **binafsha** (K⁺) · 1+4 → M = 44 gaz (CO₂) va M = 58,5 tuz (NaCl) · 3+5 → Fe(OH)₂ va qolgan anion Ba²⁺ bilan **kislotada erimaydigan** cho'kma (SO₄²⁻)

**Moddalar:** **1 = HCl · 2 = K₂S · 3 = FeSO₄ · 4 = Na₂CO₃ · 5 = KOH**

**Tenglamalar:**
- 2HCl + K₂S → 2KCl + H₂S↑ | 2H⁺ + S²⁻ → H₂S↑
- HCl + KOH → KCl + H₂O | H⁺ + OH⁻ → H₂O
- 2HCl + Na₂CO₃ → 2NaCl + CO₂↑ + H₂O | 2H⁺ + CO₃²⁻ → CO₂↑ + H₂O
- FeSO₄ + 2KOH → Fe(OH)₂↓ + K₂SO₄ | Fe²⁺ + 2OH⁻ → Fe(OH)₂↓

**Cu(NO₃)₂ qo'shilganda cho'kma:** **2** (CuS, qora) · **4** ((CuOH)₂CO₃) · **5** (Cu(OH)₂)

---

# BONUS-2

### 41-topshiriq

**Shart:** Fe, FeO va Fe₂O₃ aralashmasi HCl da eritilganda 5,6 l (n.sh.) gaz ajraldi; mo'l NaOH qo'shilganda cho'kma (95,7 g) hosil bo'ldi, biroz vaqtdan so'ng massasi **5,95 g ortdi** va faqat sarg'ish-qo'ng'ir modda qoldi.

**Qoida:** 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃ — har 1 mol Fe(OH)₂ uchun massa **17 g** ortadi.

**Yechim:**
1. n(Fe(OH)₂) = 5,95/17 = **0,35 mol** (31,5 g) → Fe(OH)₃ = 95,7 − 31,5 = 64,2 g = **0,6 mol**.
2. H₂ = 0,25 mol → **Fe = 0,25 mol**; Fe²⁺ jami 0,35 → **FeO = 0,1 mol**; Fe³⁺ 0,6 → **Fe₂O₃ = 0,3 mol**.

**Javoblar:**
1. m = 0,25·56 + 0,1·72 + 0,3·160 = **69,2 g**
2. HCl = 0,5 + 0,2 + 1,8 = 2,5 mol = 91,25 g → eritma = **500 g**
3. Oksidlar farqi: 48 − 7,2 = **40,8 g**
4. NaOH = 2,5 mol → V = 2,5/2 = 1,25 l = **1250 ml**
5. O₂ = 0,35/4 = 0,0875 mol → V = **1,96 l**
6. Kislorod: 0,1 + 0,9 = 1 mol = **16 g**

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Havoda oksidlanish orqali Fe(OH)₂ = 0,35 mol | 1,2 |
| Fe(OH)₃ = 0,6 mol va tarkib aniqlangan | 1,0 |
| 1-band: 69,2 g | 0,8 |
| 2-band: 500 g | 0,8 |
| 3- va 4-bandlar | 1,0 |
| 5- va 6-bandlar | 1,2 |

---

### 42-topshiriq — tenglamalar

1. **5CO + 13H₂ → 2CH₄ + C₃H₈ + 5H₂O**
2. (CH₃)₂CH–COOK + KOH →(t) **C₃H₈** + K₂CO₃
3. 5CH₃CH₂C(CH₃)=CHCH₃ + 6KMnO₄ + 9H₂SO₄ → 5**CH₃COC₂H₅** + 5**CH₃COOH** + 6MnSO₄ + 3K₂SO₄ + 9H₂O
4. C₆H₄(CH₃)₂ + 2K₂Cr₂O₇ + 8H₂SO₄ → **C₆H₄(COOH)₂** + 2Cr₂(SO₄)₃ + 2K₂SO₄ + 10H₂O
5. 2CH₃CH(OH)CH₃ →(120 °C, H₂SO₄) **(CH₃)₂CH–O–CH(CH₃)₂** + H₂O
6. CH₃COOCH₃ + C₂H₅OH →(C₂H₅ONa) **CH₃COOC₂H₅** + CH₃OH
7. CH₃CH₂COCH(CH₃)₂ →(kuchli oksidlash) **CH₃CH₂COOH + (CH₃)₂CHCOOH**
8. [C₆H₇O₂(OH)₃]ₙ + 3nCH₃COOH → **[C₆H₇O₂(OCOCH₃)₃]ₙ** + 3nH₂O
9. CH₃I + 2NH₃(mo'l) → **CH₃NH₂** + NH₄I
10. 3CH₃CH(NH₂)COOH → **tripeptid (Ala-Ala-Ala)** + 2H₂O

---

### 43-topshiriq — sifat tahlili

**Belgilar:** 1 dagi kation II A guruhdan va **8 ta s-elektron** (Sr²⁺: 1s²2s²3s²4s²) · 1+2 → XSO₄↓ va **osh tuzi** · 1 va 5 ga AgNO₃ → bir xil cho'kma (AgCl) · 3+4 neytrallanish · 3 da pH > 11 va **binafsha alanga** (K⁺) · 5+3 → cho'kma, ortiqchasida **erib ketadi**; 5 dagi kationda **10 ta elektron** (Al³⁺) · 4 + mis (qizdirilgan) → **"tulki dumi"** (NO₂)

**Moddalar:** **1 = SrCl₂ · 2 = Na₂SO₄ · 3 = KOH · 4 = HNO₃(kons.) · 5 = AlCl₃**

**Asosiy tenglamalar:**
- SrCl₂ + Na₂SO₄ → SrSO₄↓ + 2NaCl | Sr²⁺ + SO₄²⁻ → SrSO₄↓
- KOH + HNO₃ → KNO₃ + H₂O | H⁺ + OH⁻ → H₂O
- AlCl₃ + 3KOH → Al(OH)₃↓ + 3KCl; Al(OH)₃ + KOH → K[Al(OH)₄]
- Cu + 4HNO₃(kons) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O

**pH < 7 bo'lgan eritmalar:** **4 (HNO₃)** va **5 (AlCl₃ — gidroliz)**

---

# BONUS-3

### 41-topshiriq

**Shart:** KMnO₄, K₂Cr₂O₇ va MnO₂ dan iborat **74,05 g** aralashmaga stexiometrik nisbatda 7,3 % li HCl quyilganda **21,28 l** (n.sh.) gaz ajraldi; n(K)/n(Mn) = 8/7.

**Yechim:** KMnO₄ = a, K₂Cr₂O₇ = b, MnO₂ = c.
1. Cl₂ = 0,95 mol → elektronlar: **5a + 6b + 2c = 1,9**
2. Massa: **158a + 294b + 87c = 74,05**
3. Kaliy/marganes: (a + 2b)/(a + c) = 8/7 → **a = 14b − 8c**
4. Yechim: **a = 0,2 · b = 0,1 · c = 0,15** *(tekshirish: 31,6 + 29,4 + 13,05 = 74,05 ✓; K/Mn = 0,4/0,35 ✓)*

**Javoblar:**
1. Kislorod: 0,8 + 0,7 + 0,3 = 1,8 mol = **28,8 g**
2. HCl = 8·0,2 + 14·0,1 + 4·0,15 = 3,6 mol = 131,4 g → eritma = **1800 g**
3. MnCl₂ (0,35 mol) 44,1 g − CrCl₃ (0,2 mol) 31,7 g = **12,4 g**
4. Suv: eritmadagi 1668,6 + hosil bo'lgan 1,8 mol (32,4 g) = **1701 g**
5. Atomlar: 6·0,2 + 11·0,1 + 3·0,15 = **2,75·N_A**

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Uchala oksidlovchi uchun elektronlar (5, 6, 2) | 1,0 |
| K/Mn nisbati tenglamaga aylantirilgan | 1,0 |
| Sistema yechilib a, b, c topilgan | 1,2 |
| 1- va 2-bandlar | 1,2 |
| 3- va 4-bandlar | 1,0 |
| 5-band | 0,6 |

---

### 42-topshiriq — reaksiyalar

1. C₆H₆ + CH₂ClCH₂CH₃ →(AlCl₃) **C₆H₅CH(CH₃)₂ (izopropilbenzol — kumol)** + HCl
   *(Birlamchi karbokation **qayta guruhlanadi**.)*
2. C₆H₅OH + 3Br₂ → **2,4,6-tribromfenol↓** + 3HBr
3. *(Sxema 56-betda: 2-metilbuten-1 bilan H₂, HBr, H₂O, KMnO₄, polimerlanish; hamda
   aldegidning oksidlanish/qaytarilish tarmoqlari.)*
4. C₅H₁₀O + K₂Cr₂O₇ + 4H₂SO₄ → **C₂H₅COOH + CH₃COOH** + Cr₂(SO₄)₃ + K₂SO₄ + 4H₂O
5. CH₃CH₂COOC₂H₅ + 2H₂ → **CH₃CH₂CH₂OH (propanol-1)** + **C₂H₅OH (etanol)**
6. β-glyukoza + 5CH₃COOH → **glyukoza pentaatsetati** + 5H₂O
7. CH₃CH(Cl)COOH + NH₃ (teng mol) → **CH₃CH(Cl)COONH₄** *(ortiqcha ammiakda aminokislota hosil bo'lardi)*

---

### 43-topshiriq — laminariya

**Shart:** 1,0 kg suvo'ti kuydirilib, kul suvda qaynatildi va filtrlandi; filtratga H₂O₂ ning kislotali eritmasi bilan ishlov berildi, hosil bo'lgan yod CHCl₃ ga ekstraksiya qilindi. Titrlash uchun 0,100 M Na₂S₂O₃ dan **100,0 sm³** sarflandi.

**Qoida (shartdagi tenglama):** **4I₂ + Na₂S₂O₃ + 5H₂O → 8HI + Na₂SO₄ + H₂SO₄**
*(tiosulfatdagi S⁺² → S⁺⁶: 8 e⁻; I₂ + 2e⁻ → 2I⁻ → 4 I₂ : 1 Na₂S₂O₃)*

**Yechim:**
1. n(Na₂S₂O₃) = 0,01 mol → **n(I₂) = 0,04 mol** → yodid ionlari 0,08 mol → **m = 10,16 g**
2. Reaksiyalar: 2I⁻ + H₂O₂ + 2H⁺ → I₂ + 2H₂O · yuqoridagi titrlash tenglamasi
3. 5 kg uchun I₂ = 0,2 mol; I₂ + SO₂ + 2H₂O → 2HI + H₂SO₄ → SO₂ = 0,2 mol = **4,48 l**
4. 100 g eritmada I₂ = 10,16 g → **ω = 10,16 %**

| Baholash mezoni (6 ball) | Ball |
|---|---|
| Titrlash tenglamasi tenglashtirilgan (4 : 1) | 1,3 |
| n(I₂) = 0,04 mol | 1,0 |
| 1-band: 10,16 g | 1,0 |
| H₂O₂ bilan oksidlanish tenglamasi | 0,9 |
| 3-band: 4,48 l | 1,0 |
| 4-band: 10,16 % | 0,8 |

**Tipik xato:** Odatdagi I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆ tenglamasini ishlatish — shartda **boshqa** tenglama berilgan.

---

## Javoblar kaliti (qisqa)

| № | Javob | № | Javob | № | Javob |
|---|---|---|---|---|---|
| 1 | D | 12 | B | 23 | C |
| 2 | D | 13 | D | 24 | C* |
| 3 | A | 14 | D | 25 | C |
| 4 | B | 15 | C | 26 | B |
| 5 | A | 16 | A | 27 | A |
| 6 | A | 17 | A | 28 | C |
| 7 | B | 18 | B | 29 | **shart yo'q** |
| 8 | A | 19 | **shart yo'q** | 30 | C |
| 9 | A | 20 | D | 31 | C |
| 10 | B | 21 | B | 32 | B |
| 11 | D | 22 | Fe₂(SO₄)₃* | | |

**33:** E (0,4·N_A) · **34:** D (14,2) · **35:** A (0,8)
**36:** NH₃ + HNO₃ → NH₄NO₃ · **37:** 37,5 % · **38:** 20,7 g · **39:** 9 g · **40:** 12,64 g
**41:** 63 % · 479,6 g · 1,8 mol

**Bonus-1:** C₃H₇Cl · 3,26 g · 320 g · 6 g · 1,36·N_A | HCl, K₂S, FeSO₄, Na₂CO₃, KOH
**Bonus-2:** 69,2 g · 500 g · 40,8 g · 1250 ml · 1,96 l · 16 g | SrCl₂, Na₂SO₄, KOH, HNO₃, AlCl₃
**Bonus-3:** 28,8 g · 1800 g · 12,4 g · 1701 g · 2,75·N_A | 10,16 g · 4,48 l · 10,16 %

\`*\` — **19** va **29** savollarining sharti skanda tushib qolgan; **22** da rang tavsifi molyar massaga zid; **24** da shartning o'rta qismi ko'rinmagan.
`,ct=new URL(`01-31-i2GUruAF.png`,import.meta.url).href,lt=new URL(`01-32-CWtK25YF.png`,import.meta.url).href,ut=new URL(`02-01-BmJT1Eyp.png`,import.meta.url).href,dt=new URL(`02-05-DJpwaCrv.png`,import.meta.url).href,ft=new URL(`02-24-D7byXlZX.png`,import.meta.url).href,pt=new URL(`02-31-Mtnp6oYi.png`,import.meta.url).href,mt=new URL(`02-32-DBEV6gXx.png`,import.meta.url).href,ht=new URL(`03-19-DAOq_D4D.png`,import.meta.url).href,gt=new URL(`03-42-B-C5ZclJD4.png`,import.meta.url).href,_t=new URL(`04-01-CIlYiM1a.png`,import.meta.url).href,vt=new URL(`04-02-DH_zvcl9.png`,import.meta.url).href,yt=new URL(`04-06-C9mFh-A2.png`,import.meta.url).href,bt=new URL(`04-09-D4a9QQJ3.png`,import.meta.url).href,xt=new URL(`04-12-Dq9NTCkK.png`,import.meta.url).href,St=new URL(`04-14-S4a4maX2.png`,import.meta.url).href,Ct=new URL(`04-20-LlAxF_tJ.png`,import.meta.url).href,wt=new URL(`04-21-Dt3_S4KT.png`,import.meta.url).href,Tt=new URL(`04-25-DSxAvmvi.png`,import.meta.url).href,Et=new URL(`04-28-Ce2HQYPk.png`,import.meta.url).href,Dt=new URL(`04-31-CfyvFZ9Q.png`,import.meta.url).href,Ot=new URL(`04-32-DmNuN2gG.png`,import.meta.url).href,kt=new URL(`05-04-BpC2LZNF.png`,import.meta.url).href,At=new URL(`05-14-D9kpVO5c.png`,import.meta.url).href,jt=new URL(`05-15-CEgbc40g.png`,import.meta.url).href,Mt=new URL(`05-18-B9xIypsY.png`,import.meta.url).href,Nt=new URL(`05-25-CyZShq32.png`,import.meta.url).href,Pt=new URL(`05-32-BdMujMck.png`,import.meta.url).href,Ft=new URL(`05-42-CWnkeLe5.png`,import.meta.url).href,It=new URL(`06-08-C_MJGrbq.png`,import.meta.url).href,Lt=new URL(`06-21-BXrz7N4b.png`,import.meta.url).href,Rt=new URL(`06-25-goFIK01S.png`,import.meta.url).href,zt=new URL(`06-30-DCLAXV3s.png`,import.meta.url).href,Bt=new URL(`06-42-Ds0rnYb-.png`,import.meta.url).href,Vt=new URL(`07-06-Cu9APOS0.png`,import.meta.url).href,Ht=new URL(`07-11-Ds4_959I.png`,import.meta.url).href,Ut=new URL(`07-42-DgUyxSzb.png`,import.meta.url).href,Wt=new URL(`08-04-eKOcLDmA.png`,import.meta.url).href,Gt=new URL(`08-10-DKU2eiEG.png`,import.meta.url).href,Kt=new URL(`08-17-D5Wa3ucz.png`,import.meta.url).href,qt=new URL(`08-26-Cm-op8ca.png`,import.meta.url).href,Jt=new URL(`08-42-DIjUzrlm.png`,import.meta.url).href,Yt=new URL(`09-01-DgCwtRbZ.png`,import.meta.url).href,Xt=new URL(`09-07-Dt1-_tpq.png`,import.meta.url).href,Zt=new URL(`09-24-DRnFUMcl.png`,import.meta.url).href,Qt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgkAAAClCAAAAADzSDGYAAAPR0lEQVR42u2de3xV1ZXHvycJCY8AAXkZAqNGCKCMmpjQ8lS0hDd5yKPlJR8C1hKoCgkVKANIeIWHmlRwCEKIFQ1NvCkPCWrVmfbzsaDMfKzVUpw+RDNOHcHRsQ4I7PnjnHvvuUkw+9w87g1n/f7J2jtn7bvPWr+799prn7uPoRAIgAgxgUCYIBAmCIQJAmGCQJggECYIhAkCYYJAmCAQJgianQkviol0UdS6u2/UtwN1y+Xl8yzx/lc+ctLc4qqz0OGeKga956vbUX7qIvSYVKLZRub7gPG+XyY3lwHm//4AcNcnfjlEGOA1X0Sb2J6pPwFgUPwr2vrLys9Ct7FlDHy/2TScQtXFE3Cnr9B1otLG2kgGFRwsX9efQey06p7pyvVLdx3cMS3K+JFmMyWJQJopb4lmcJlSqnI5RBRUKKWUOrazI8z6hQohKjdG0H3mzJkzv581PJqItUoppdiqqV3RyZhc9Nz2cRFRgznUTBqOUR8Tbu9sI8hSjui2NYGYvZb/Isk0pQcwNlj/TuI7mg1tZAI8bcpLqDKF3ozyXZBbL4NbFMkM84qTYJVSSqW019Rt084SBsDSZtJoEiawP4p8f+luzabmEen/WtNZKaXUo7DPV9mN7+m1tAPVj66mvBkfkSb4LlgeeiaM8jNBXU9bpZTawlot1Yk85BXTbKNvk2o4Rz0R40M9Z6fzrK8Y+5reNPPcXvJ9hfnT/geAzWTN9VVu4uWndSetP3Iup9UsbobzfwB57NG6/C36esXfxv9b82g0ydrhuRnMoqbaW7ydXVotraDjBn/phch1wNgrVPjr5nekQLtjU3mm1YTdX1l/oz7Uujza9j3bdfmlZtFoCia8+OnjzOhEqbd8M69rtfRXsuzFlX2AlxlorxvPWe2OlceqO1oLE37NEAAS9L40Ezg10itPUuOaRaMpmLA3CcjC4y335F29IYHR9vLaeVB+hVH2uiE4GBTW8O+tZIU+6osebzox1VMJ/Ktx22MOPsG5hnNE1al5aTWwd9/XJeY8TZzeF/k0zKlddwZ62cvXw5+1e7a09Hc/XRxQ86etXulEOBCg5nHgm8/fOxo1d58jU3H2nl/xzjur48fv1v0s5xqNzydsNWsSGO4L5LXi9HvruWw5/MxeroYZmmsHpZQymKVUoX/t0FAepIXXDm0TExMT+3Y1uCHHqpuivU5Wc7sA0G+vaj6NRq4d9vX1eDwezy382qqI0WNULNSJZDr6gykAPoUuDkg6xxYnAYGryNAj5YMPPvjgr59dUQNLIn5qmepLXeV959TKO+DMvMnNp9HIOOHdDzMzMzMzq2GNWREZ8O9iw467/P9IgDqRcwJ8Yi//J8TbEt0BqO/eu3Cr1k3cF9DSmpamxNGZav1B01QX0L+/9adUfnsOrda/D+cajYgTFkVbNzPkxP419XAlNyDb38+2pi7myAO1Gpt7P7+zl1+HVbaParBzGx78/VadmxgXEI2ktfjo8OzPeWIqEMFlNO7vus+80ubNnb94el3D9+Fco/FxQtcMS9jm/dcuzTm5E23q1KUQZS9G0005iBOUSiX2x60gx6i6mxnRGfTTyuvm+uVVWnfiXKPRcUL5udmW9IjBfAAuaVLqR3wzw1bcHgf8hEvr/VWFF21ZSC2ciPjfna1hHXnOjH8uEa1zdXvbPd2klUR1rtHoOGFfnC89NIyDAHyt2dLGAbzwpK+0Y9kC4L4MbEx4jDvy9MYpn/RDLrYCIhRfZqJpqs46lw++3Mcnv8y9zaLR6NkhYq5P3AS7lFJqtbWZ1DASYJElpnul79JT+Yb3BM2GVvh71cPXw5sY46tdFvrZIZUhXvH5tvRWSik1kik6qg9AT2tr+XGim0ejsXuRwxjqk+dDt8NKqVxu023sTui6YFfZxjGRHXyr3qm0maOUUks62CfWb8c/+DegS70+90TSw7Yl7N20DhUOtCHm0cLCwk2rcgbCP5qVt/JjHd2dPNybkU8pVTKU2EPNo9FIJpjjuk1mpVIZzNZubfcQAyD+YXvl5HYAUSMPajZymxl5W6WR2LqD9aSCuUESQiL4htTIuL63z62wauPYo6Udq1R+HEDbWZqf51zDMYwGz09I/FPZLCfTzaFJdeuqL03ABTBwchrFUeXUKM41nHS+wb5HRH6DQAdVGSlvtd7eN7gi+bmaKj7Ww2EWtuYBraExYfyxK+JjPXTtcLYV9z6qoQuOPSgu1sP287u4hseE7335pvhYD11mP3ktM0HgFsjvIgXCBIEwQSBMEAgTBMIEgTBBcM0woTLDSMk3DMPwiKtczYQF2f3V21uUKiKzUnzVvAjrHGPayaJcS+xdUzpHvOXWMSHjZJ6XCExnrjjLtWNCwCNABnlbxF3uHBO2sc5WSqZQvOVSJpzhFltpHkjQ6FImnA8oxYuvXJ1PEAgToAu1HpfKEne5kwntA476kofo3MuENE7aSq87OKxLcI3lE3rXDP2Nv6PTXhBvuZUJGP4f0KfMyxVnuXftoFIxzLM3Mm4WIrh6FXmiiEIjI80w7pWpwa2zQ9pJb8cqiR0jfnItExaUID/JkdkBxpcMFSIIE2DbS6nm8vG4OMjdTNhtHdG9IT1DPORmJmw4bb4e5PhK+ouHXBwxHk+3UosGqSfEQy4eE9KZCUBZmLzHQcaEEGHAaWuH4aYbXxX/uHdMOG6czjOJYEQLEdzMhHRSzUeYMxgv3nHx7FA2x8otblgpSUZXjwn78C0g5cEUN48Jx9Otn7cYTPGIc1zMBCPJfLlQ2kmZG1w9OwzgnwDYfHK0EMHFY8LxdApWmJ2SqcHVTPDFBv6nVARunB0ysN5lnX9ylvjFzWOCQfUYgMpsiRZdPSZMp8B8XDGbKeIWFzNhU/nTKwCO9maWhIsunh3yC2eVWXOEtX4QuJIJvthgcXHObnGKi5ngW0D27i0Pp4QIUWExJPgWkDUfi0vcHDFmFZkjU2XhOPGI5BNg06PxMiQIEyC/UFJKwgQzbCySn8YLEwCOy2+iXRsxFqcZhmEYRn4lgBDBrUw4aiy+SymlSlMLs+W3sG6eHfxppP1zJVZ0MRMGxP/KJw/7jbjCtUwwqJos9hcmcDxdsgcSMQL8UWx/DTJhgeEQlfCh2P4aZEKJU4WPxPBhhybZlQ5mwk8Q20ucAMASWC7mFyYAebwl5pdVpJlQkGWkjAlmdGHI296ECQCryM4wpWJjv7jCvbMDsOq/z3/Uu9tnXVIWADxywxJxiEuZUDtwkMjBnbNDncAhlRTxiDABOJF3ypBHVoQJwJZppOeLU1wfJwBkVMmx3cIEADaslLhRZgeAFWprcvw2cYyMCQCZHjlFQZgAQNpJOaNVmCDRgjDBjuPpJL8t7nFzxGhhjMo5lSbuESYAu3d/bIwvEw+5fXYAIL8Q67hOgbuZQGU2HJG3AAkTgIwqOXHH7XGCCU9BjTzP1CKIXBPmHRxx+V88H8tPacNhdihaHOIu/nKvx5oh1nxynui4zusdNrCGO4xTAH3mh4vZQ27UeqDqIrcP0GGyUgOVUmrgPSrkqFBKlZJaoZRSFakUONVPIq/C/NPiXV+UlJSUlJQ06LYhY+au99U6M2rB4AiI+s4eNfGAvtK0zkCPherYML3r6zJhbSSDCg6Wr+vPIHYqpRRbVRigiByvmOwXda1i3mYFVLd4xw8MgfSZM2dOH9MTkg557a5v1D2duS6vtOqJEQxiuq5SFozZUVW25LroRIJkwgRi9prSlkgylVIqpX04MME2eu2H0qCYoHA+nDQe5f6uj4B8U9I36kL4gSkd6c51mkr9SbCkGbAsKCbMJuKoVy6hs1JKbWFt6ImQb3d+/ZOaFhNafnpQL9l6+xCsU46Mug6W+AodNe/7Vvr45GxGBMOE3TCvjgHpG3omZNg7muN0lA/pmGBngsokQjkxalU7hvpLT7FBRykHjvlLvdoFw4Q+BIxakWuVUiqK0DMh2d6HCqce9TNBhZgJKoZRyoFRJwZ2OfFuHaUI7AHpWp7XUap1fsLZwJcwrewDkPCXXT8M9RLnVJ6tkAWfA0+e0UhHTPPLz5fmFoV8rZZ14A0cGPVlbrAXN76pobPyCva3661+d7pOxwKZsALG2strAej5l3dDv9qt51ymZ082rPYfXiYULw6PZ1/uOkBxrrZRyy5wt708daqG0mtwv71cHkS2+TTMqXtNHGdDb8Gq2n2CExpj3lGvQm5OeORvFsI7+katCebwmdNB7SEE6nxR7zVt+VvIDZhUq3yn4xZ2T2F6eJDhnL5RL5icd4Yv6NBoJsTCwbrXxPBlyK13E8X+QnFQp317NIfJZkesvlE7wX8F0f6XjWZCAvy5nl0qLoTceonYMvX7KQ2mjWrC4Hm45yG+rlHvCzik0L8r2OdbjisM1LG9GqP71T+9OEAn5eoR4/BiqvPrYcvl0G/ZVNb4znb+54/Lgnrz9JhHtqeE4CnZv4Enw1f6LQyta9RxvS5+fRGIadcGbITNhqv+ZHhcL/Pvlb9fjoxkmP8fQ89QsLJ+ndw/wKULVwAjIuqr679lB6oTUXWjrmxuDIN08xSs7Yai5KDzUoQiobAPXrRnbOKsLHA/HeVR4HH6gS/CLc67WSvKXMAl+wy8PQ7g70SGwezqqUgtMfLz04xXnH6vK4s9pBWb8wMt/9xLd/APCc+c5SEALhGto/woLLUVj8UeaVgnYzC/f8JWHq03KdZiRqJ9w2K7sVQppUbaE56h3Z2uqKgOSquiokIppVS1V2jZHGOVrxDHzd6dPj2jzsG2AXkgTkvpYDQd/KV044VgdqCqesAcbxMsUkopNZwpShA0qmC/Jf6iG/GWOFLXqKOx8tNKzea7ejrb2hD9M2vjNiFqvZZO7dN6JxvL399/ODulw0evvdp2r5mq+jww4ylwhhI4fILImK/OvP0Zo1/1JRU0jfrq7GffiBk/XH36zhtf62bLH7kxt2bRpvHJ0Wc878XvmRPsM0uPJRsA8Q/7R7Q98s1uRKDrTcv0GvGwUsEYdWIMQPuxTj7X3DLi5mW6Cld5jvHQJFtBDlNtBjg06s4rXb/v9COOXXTyJPBVznKfFJDxlxPRmmEbxZlRHwziM8Y2IsdYLw6zUDzX1Ag/o2r8Bqprh7PiuaZG+Bm14Td9bD+/SxzX1AhDozY8JnSZ/aR4rqkRhkY1ZFkg0I0YBcIEgTBBIEwQCBMEwgSBQJggECYIhAkCYYJAmCBoAP8PgG81ViJeoHAAAAAASUVORK5CYII=`,$t=new URL(`09-41-DzreRRV8.png`,import.meta.url).href,en=new URL(`09-42-B7g97-nA.png`,import.meta.url).href,tn=new URL(`11-21-BfPeJwD4.png`,import.meta.url).href,k=new URL(`12-21-DQ5iZkKB.png`,import.meta.url).href,nn=Object.assign({"../../manba/milliy-sertifikat/json/01.json":Le,"../../manba/milliy-sertifikat/json/02.json":Re,"../../manba/milliy-sertifikat/json/03.json":ze,"../../manba/milliy-sertifikat/json/04.json":Be,"../../manba/milliy-sertifikat/json/05.json":Ve,"../../manba/milliy-sertifikat/json/06.json":He,"../../manba/milliy-sertifikat/json/07.json":Ue,"../../manba/milliy-sertifikat/json/08.json":We,"../../manba/milliy-sertifikat/json/09.json":Ge,"../../manba/milliy-sertifikat/json/10.json":Ke,"../../manba/milliy-sertifikat/json/11.json":qe,"../../manba/milliy-sertifikat/json/12.json":Je}),rn=Object.assign({"../../manba/milliy-sertifikat/00 - INDEKS.md":Ye,"../../manba/milliy-sertifikat/01 - Sertifikat 02.04.2023.md":Xe,"../../manba/milliy-sertifikat/02 - Sertifikat 28.01.2024.md":Ze,"../../manba/milliy-sertifikat/03 - Sertifikat 26.05.2024 I smena.md":Qe,"../../manba/milliy-sertifikat/04 - Sertifikat 2024 namunaviy.md":$e,"../../manba/milliy-sertifikat/05 - Sertifikat 22.09.2024 aprobatsiya.md":et,"../../manba/milliy-sertifikat/06 - Sertifikat 25.01.2025 I smena.md":tt,"../../manba/milliy-sertifikat/07 - Sertifikat 25.01.2025 II smena.md":nt,"../../manba/milliy-sertifikat/08 - Sertifikat 15.03.2025 I smena.md":rt,"../../manba/milliy-sertifikat/09 - Sertifikat 15.03.2025 II smena.md":it,"../../manba/milliy-sertifikat/10 - Sertifikat 03.05.2025 I smena.md":at,"../../manba/milliy-sertifikat/11 - Sertifikat 03.05.2025 II smena.md":ot,"../../manba/milliy-sertifikat/12 - Sertifikat 04.05.2025 I smena.md":st}),an=new Map(Object.entries(Object.assign({"../../manba/milliy-sertifikat/rasm/01-31.png":ct,"../../manba/milliy-sertifikat/rasm/01-32.png":lt,"../../manba/milliy-sertifikat/rasm/02-01.png":ut,"../../manba/milliy-sertifikat/rasm/02-05.png":dt,"../../manba/milliy-sertifikat/rasm/02-24.png":ft,"../../manba/milliy-sertifikat/rasm/02-31.png":pt,"../../manba/milliy-sertifikat/rasm/02-32.png":mt,"../../manba/milliy-sertifikat/rasm/03-19.png":ht,"../../manba/milliy-sertifikat/rasm/03-42-B.png":gt,"../../manba/milliy-sertifikat/rasm/04-01.png":_t,"../../manba/milliy-sertifikat/rasm/04-02.png":vt,"../../manba/milliy-sertifikat/rasm/04-06.png":yt,"../../manba/milliy-sertifikat/rasm/04-09.png":bt,"../../manba/milliy-sertifikat/rasm/04-12.png":xt,"../../manba/milliy-sertifikat/rasm/04-14.png":St,"../../manba/milliy-sertifikat/rasm/04-20.png":Ct,"../../manba/milliy-sertifikat/rasm/04-21.png":wt,"../../manba/milliy-sertifikat/rasm/04-25.png":Tt,"../../manba/milliy-sertifikat/rasm/04-28.png":Et,"../../manba/milliy-sertifikat/rasm/04-31.png":Dt,"../../manba/milliy-sertifikat/rasm/04-32.png":Ot,"../../manba/milliy-sertifikat/rasm/05-04.png":kt,"../../manba/milliy-sertifikat/rasm/05-14.png":At,"../../manba/milliy-sertifikat/rasm/05-15.png":jt,"../../manba/milliy-sertifikat/rasm/05-18.png":Mt,"../../manba/milliy-sertifikat/rasm/05-25.png":Nt,"../../manba/milliy-sertifikat/rasm/05-32.png":Pt,"../../manba/milliy-sertifikat/rasm/05-42.png":Ft,"../../manba/milliy-sertifikat/rasm/06-08.png":It,"../../manba/milliy-sertifikat/rasm/06-21.png":Lt,"../../manba/milliy-sertifikat/rasm/06-25.png":Rt,"../../manba/milliy-sertifikat/rasm/06-30.png":zt,"../../manba/milliy-sertifikat/rasm/06-42.png":Bt,"../../manba/milliy-sertifikat/rasm/07-06.png":Vt,"../../manba/milliy-sertifikat/rasm/07-11.png":Ht,"../../manba/milliy-sertifikat/rasm/07-42.png":Ut,"../../manba/milliy-sertifikat/rasm/08-04.png":Wt,"../../manba/milliy-sertifikat/rasm/08-10.png":Gt,"../../manba/milliy-sertifikat/rasm/08-17.png":Kt,"../../manba/milliy-sertifikat/rasm/08-26.png":qt,"../../manba/milliy-sertifikat/rasm/08-42.png":Jt,"../../manba/milliy-sertifikat/rasm/09-01.png":Yt,"../../manba/milliy-sertifikat/rasm/09-07.png":Xt,"../../manba/milliy-sertifikat/rasm/09-24.png":Zt,"../../manba/milliy-sertifikat/rasm/09-26.png":Qt,"../../manba/milliy-sertifikat/rasm/09-41.png":$t,"../../manba/milliy-sertifikat/rasm/09-42.png":en,"../../manba/milliy-sertifikat/rasm/11-21.png":tn,"../../manba/milliy-sertifikat/rasm/12-21.png":k})).map(([e,t])=>[e.split(`/`).pop().replace(/\.png$/,``).replace(/^(\d\d)-0*(\d)/,`$1-$2`),t])),on=/\[(?:Rasmda|Rasm|Grafikda|Sxema|Jadval|Formula|Son o‘qida|Struktura)[^\]]*\]/g,sn=null;function cn(){if(sn)return sn;let e=new Map(Object.entries(rn).map(([e,t])=>[e.split(`/`).pop().slice(0,2),t]));return sn=Object.values(nn).map(t=>ke(t,e.get(t.variant))).map(e=>({...e,savollar:e.savollar.map(t=>{let n=an.get(`${e.id}-${t.raqam}`);return n?{...t,rasmUrl:n,shart:t.shart.replace(on,` `).replace(/\s{2,}/g,` `).trim()}:t})})).sort((e,t)=>e.id.localeCompare(t.id)),sn}function ln(e){return cn().find(t=>t.id===e)}var un=new Set(`H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr`.split(` `)),dn=new Set([`H`,`N`,`O`,`F`,`Cl`,`Br`,`I`,`S`,`P`]),fn={"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`},pn={"⁰":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,"⁺":`+`,"⁻":`−`};function mn(e,t,n){if(!n)return;let r=e[e.length-1];r&&r.t===t?r.v+=n:e.push({t,v:n})}function hn(e){let t=e.match(/[A-Z][a-z]?|\(|\)|\[|\]|\d+/g);if(!t||t.join(``)!==e)return!1;let n=t.filter(e=>/^[A-Z]/.test(e));return!(!n.length||!n.every(e=>un.has(e))||!/\d/.test(e)||n.length===1&&!/[()]/.test(e)&&!dn.has(n[0]))}function gn(e,t,n,r){mn(e,`txt`,t);for(let t of n.match(/[A-Z][a-z]?|\(|\)|\[|\]|\d+/g)??[])mn(e,/^\d+$/.test(t)?`sub`:`txt`,t);r&&mn(e,`sup`,r.replace(`-`,`−`))}var _n=/(^|[^A-Za-z0-9])(\d*)((?:[A-Z][a-z]?|\(|\)|\[|\])(?:[A-Z][a-z]?|\d+|\(|\)|\[|\])*)(\^?\d?[+-](?![\d\w]))?(?=$|[^A-Za-z0-9])/g,vn=/(\d[spdf])(\d{1,2})(?=$|[^0-9])/g;function yn(e,t){let n=0;for(let r of e.matchAll(_n)){let[i,a,o,s,c=``]=r,l=(r.index??0)+a.length,u=s,d=c.replace(`^`,``);if(d&&!/\d/.test(d)){let e=u.match(/^([A-Z][a-z]?)(\d)$/);e&&un.has(e[1])?(u=e[1],d=e[2]+d):/\d{2,}$/.test(u)&&(d=u.slice(-1)+d,u=u.slice(0,-1))}let f=d&&/^[A-Z][a-z]?$/.test(u)&&un.has(u);(hn(u)||f||d&&hn(u+`1`))&&(bn(e.slice(n,l),t),gn(t,o,u,d),n=(r.index??0)+i.length)}bn(e.slice(n),t)}function bn(e,t){let n=0;for(let r of e.matchAll(vn)){let i=r.index??0;mn(t,`txt`,e.slice(n,i)+r[1]),mn(t,`sup`,r[2]),n=i+r[0].length}mn(t,`txt`,e.slice(n))}function xn(e,t){let n=``,r=()=>{n&&yn(n,t),n=``};for(let i of e)fn[i]?(r(),mn(t,`sub`,fn[i])):pn[i]?(r(),mn(t,`sup`,pn[i])):n+=i;r()}var Sn=e=>[...e].map(e=>fn[e]??pn[e]??e).join(``);function Cn(e,t){let n=0;for(let r=t;r<e.length;r++)if(e[r]===`(`)n++;else if(e[r]===`)`&&--n===0)return r;return-1}var wn=/([A-Za-zα-ωΑ-Ω)\]])_(\{[^}]+\}|[A-Za-z0-9α-ω]+)|\^(\(|[+−-]?[0-9A-Za-z]+[+−-]?)/g;function Tn(e){let t=[],n=0;wn.lastIndex=0;for(let r=wn.exec(e);r;r=wn.exec(e)){let i=r.index;if(r[2]!==void 0)xn(e.slice(n,i)+r[1],t),mn(t,`sub`,Sn(r[2].replace(/^\{|\}$/g,``))),n=i+r[0].length;else if(r[3]===`(`){let r=Cn(e,i+1);if(r<0)continue;xn(e.slice(n,i),t),mn(t,`sup`,Sn(e.slice(i+2,r))),n=r+1,wn.lastIndex=n}else xn(e.slice(n,i),t),mn(t,`sup`,r[3].replace(`-`,`−`)),n=i+r[0].length}return xn(e.slice(n),t),t}var En=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=e(((e,t)=>{t.exports=En()}))();function Dn(e){let t=[],n=/\*\*(.+?)\*\*|`([^`]+)`|(^|[^*\w])\*(?![\s*])([^*\n]+?)\*(?!\*)/g,r=0;for(let i of e.matchAll(n)){let n=i.index??0;if(i[1]!==void 0)n>r&&t.push({t:`txt`,v:e.slice(r,n)}),t.push({t:`b`,v:i[1]});else if(i[2]!==void 0)n>r&&t.push({t:`txt`,v:e.slice(r,n)}),t.push({t:`code`,v:i[2]});else{let a=n+i[3].length;a>r&&t.push({t:`txt`,v:e.slice(r,a)}),t.push({t:`i`,v:i[4]})}r=n+i[0].length}return r<e.length&&t.push({t:`txt`,v:e.slice(r)}),t}function On({text:e}){return(0,A.jsx)(A.Fragment,{children:Tn(e).map((e,t)=>e.t===`txt`?(0,A.jsx)(y.Fragment,{children:e.v},t):e.t===`sub`?(0,A.jsx)(`sub`,{children:e.v},t):(0,A.jsx)(`sup`,{children:e.v},t))})}function kn({text:e,className:t}){return(0,A.jsx)(`span`,{className:t?`chem ${t}`:`chem`,children:Dn(e).map((e,t)=>e.t===`b`?(0,A.jsx)(`b`,{children:(0,A.jsx)(On,{text:e.v})},t):e.t===`i`?(0,A.jsx)(`i`,{children:(0,A.jsx)(On,{text:e.v})},t):e.t===`code`?(0,A.jsx)(`code`,{children:e.v},t):(0,A.jsx)(On,{text:e.v},t))})}function An({matn:e}){let t=[];for(let n of e.split(`
`)){let e=n.trimEnd(),r=t[t.length-1];if(!e.trim()){t.push({t:`p`,q:[]});continue}if(e.trim().startsWith(`|`)){let n=e.trim().replace(/^\||\|$/g,``).split(`|`).map(e=>e.trim());if(n.every(e=>/^:?-{2,}:?$/.test(e)))continue;r?.t===`table`?r.q.push(n):t.push({t:`table`,q:[n]});continue}let i=e.match(/^\s*(?:[-*]|\d+[.)])\s+(.*)$/);i?r?.t===`ul`?r.q.push(i[1]):t.push({t:`ul`,q:[i[1]]}):r?.t===`p`?r.q.push(e.trim()):t.push({t:`p`,q:[e.trim()]})}return(0,A.jsx)(`div`,{className:`md`,children:t.map((e,t)=>e.t===`table`?(0,A.jsx)(`div`,{className:`tw md__table`,children:(0,A.jsxs)(`table`,{className:`t`,children:[(0,A.jsx)(`thead`,{children:(0,A.jsx)(`tr`,{children:e.q[0].map((e,t)=>(0,A.jsx)(`th`,{children:(0,A.jsx)(kn,{text:e})},t))})}),(0,A.jsx)(`tbody`,{children:e.q.slice(1).map((e,t)=>(0,A.jsx)(`tr`,{children:e.map((e,t)=>(0,A.jsx)(`td`,{children:(0,A.jsx)(kn,{text:e})},t))},t))})]})},t):e.t===`ul`?(0,A.jsx)(`ul`,{children:e.q.map((e,t)=>(0,A.jsx)(`li`,{children:(0,A.jsx)(kn,{text:e})},t))},t):e.q.length?(0,A.jsx)(`p`,{children:e.q.map((e,t)=>(0,A.jsxs)(y.Fragment,{children:[t>0&&(0,A.jsx)(`br`,{}),(0,A.jsx)(kn,{text:e})]},t))},t):null)})}function jn(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Mn(e,t){try{t===null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}catch{}}var Nn={profil:`ms.profil`,urinish:`ms.urinish`,tarix:`ms.tarix`},Pn=e=>{let t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`},Fn=e=>{let t=new Date(e);return`${String(t.getDate()).padStart(2,`0`)}.${String(t.getMonth()+1).padStart(2,`0`)}.${t.getFullYear()} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`},In={1:`Yopiq testlar`,2:`Umumiy shartli`,3:`Yozma topshiriqlar`};function Ln(){let[e,t]=(0,y.useState)(()=>jn(Nn.profil,null)),[n,r]=(0,y.useState)(()=>jn(Nn.urinish,null)),[i,a]=(0,y.useState)(()=>jn(Nn.tarix,[])),[o,s]=(0,y.useState)(null);(0,y.useEffect)(()=>Mn(Nn.urinish,n),[n]),(0,y.useEffect)(()=>Mn(Nn.tarix,i),[i]);let c=(0,y.useCallback)(e=>{let t=ln(e.v);if(!t)return r(null);let n=Ne(t,e.javoblar),i={v:e.v,boshlandi:e.boshlandi,tugadi:Date.now(),ball:n.ball,max:n.max,javoblar:e.javoblar};a(e=>[i,...e].slice(0,60)),r(null),s(i)},[]);if(!e)return(0,A.jsx)(zn,{onOk:e=>{Mn(Nn.profil,e),t(e)}});if(n){let e=ln(n.v);if(e)return(0,A.jsx)(Wn,{v:e,u:n,setU:r,yakunla:c})}if(o){let t=ln(o.v);if(t)return(0,A.jsx)(Jn,{v:t,n:o,profil:e,orqaga:()=>s(null),qayta:()=>(s(null),r(Rn(t.id,!0)))})}return(0,A.jsx)(Vn,{profil:e,tarix:i,boshla:(e,t)=>r(Rn(e,t)),kor:s,chiqish:()=>{Mn(Nn.profil,null),t(null)}})}var Rn=(e,t)=>({v:e,boshlandi:Date.now(),vaqtli:t,javoblar:{},belgi:[],joriy:0});function zn({onOk:e}){let[t,n]=(0,y.useState)(``),[r,i]=(0,y.useState)(``),a=t.trim().split(/\s+/).length>=2;return(0,A.jsx)(`div`,{className:`mo-center`,children:(0,A.jsxs)(`form`,{className:`mo-login`,onSubmit:n=>{n.preventDefault(),a&&e({ism:t.trim().replace(/\s+/g,` `),guruh:r.trim()})},children:[(0,A.jsx)(Bn,{}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h1`,{className:`mo-h1`,children:`Milliy sertifikat · kimyo`}),(0,A.jsx)(`p`,{className:`mo-muted`,children:`12 ta haqiqiy variant asosidagi mock testlar. Natijangiz va har bir savolning yechimi test oxirida ko‘rsatiladi.`})]}),(0,A.jsxs)(`label`,{className:`field`,children:[(0,A.jsx)(`span`,{children:`Ism va familiya`}),(0,A.jsx)(`input`,{id:`mo-ism`,className:`input`,autoComplete:`name`,placeholder:`Masalan: Dilnoza Karimova`,value:t,onChange:e=>n(e.target.value)})]}),(0,A.jsxs)(`label`,{className:`field`,children:[(0,A.jsx)(`span`,{children:`Guruh (ixtiyoriy)`}),(0,A.jsx)(`input`,{id:`mo-guruh`,className:`input`,placeholder:`Masalan: 3-guruh`,value:r,onChange:e=>i(e.target.value)})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`btn btn--primary btn--lg`,disabled:!a,children:[`Kirish`,(0,A.jsx)(C,{})]}),(0,A.jsx)(`p`,{className:`mo-fine`,children:`Ism va natijalar faqat shu qurilmada saqlanadi. O‘qituvchiga natijani o‘zingiz yuborasiz.`})]})})}function Bn(){return(0,A.jsxs)(`div`,{className:`mo-brand`,children:[(0,A.jsx)(`span`,{className:`mo-logo`,"aria-hidden":`true`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.9`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`path`,{d:`M9 3h6M10 3v6.5L4.6 18.2A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-2.8L14 9.5V3`}),(0,A.jsx)(`path`,{d:`M7.5 15h9`})]})}),(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`b`,{children:`Kimyo mock`}),(0,A.jsx)(`small`,{children:`Milliy sertifikat`})]})]})}function Vn({profil:e,tarix:t,boshla:n,kor:r,chiqish:i}){let a=cn(),[o,s]=(0,y.useState)(null),c=e=>t.filter(t=>t.v===e).sort((e,t)=>t.ball-e.ball)[0];return(0,A.jsxs)(`div`,{className:`mo-page`,children:[(0,A.jsxs)(`header`,{className:`mo-top`,children:[(0,A.jsx)(Bn,{}),(0,A.jsxs)(`div`,{className:`mo-top__r`,children:[(0,A.jsxs)(`span`,{className:`mo-user`,children:[e.ism,e.guruh&&(0,A.jsx)(`small`,{children:e.guruh})]}),(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--ghost btn--sm`,onClick:i,title:`Boshqa o‘quvchi sifatida kirish`,children:[(0,A.jsx)(ye,{}),(0,A.jsx)(`span`,{className:`mo-hide-sm`,children:`Chiqish`})]})]})]}),(0,A.jsxs)(`main`,{className:`mo-wrap`,children:[(0,A.jsxs)(`section`,{className:`mo-intro`,children:[(0,A.jsx)(`h1`,{className:`mo-h1`,children:`Variantni tanlang`}),(0,A.jsxs)(`p`,{className:`mo-muted`,children:[`Har bir variant — haqiqiy imtihon tuzilishida: yopiq testlar, umumiy shartli testlar va yozma topshiriqlar. Vaqt `,180,` daqiqa; xohlasangiz vaqtsiz mashq qilasiz.`]})]}),(0,A.jsx)(`div`,{className:`mo-grid`,children:a.map(e=>{let t=c(e.id);return(0,A.jsxs)(`button`,{type:`button`,className:`mo-vcard`,onClick:()=>s(e),children:[(0,A.jsx)(`span`,{className:`mo-vcard__n`,children:e.id}),(0,A.jsx)(`span`,{className:`mo-vcard__t`,children:e.nom.replace(/^Sertifikat\s*[—–-]?\s*/,``)}),(0,A.jsxs)(`span`,{className:`mo-vcard__m`,children:[e.savollar.length,` topshiriq · `,O(e.maxBall),` ball`]}),t?(0,A.jsxs)(`span`,{className:`mo-vcard__r`,children:[(0,A.jsx)(ae,{}),`Eng yaxshi natija: `,(0,A.jsx)(`b`,{children:O(t.ball)}),` / `,O(t.max)]}):(0,A.jsx)(`span`,{className:`mo-vcard__r mo-vcard__r--yoq`,children:`Hali ishlanmagan`})]},e.id)})}),t.length>0&&(0,A.jsxs)(`section`,{className:`mo-sec`,children:[(0,A.jsx)(`h2`,{className:`mo-h2`,children:`Natijalarim`}),(0,A.jsx)(`div`,{className:`mo-list`,children:t.map((e,t)=>{let n=ln(e.v);return(0,A.jsxs)(`button`,{type:`button`,className:`mo-row`,onClick:()=>r(e),children:[(0,A.jsx)(`span`,{className:`mo-row__n`,children:e.v}),(0,A.jsxs)(`span`,{className:`mo-row__t`,children:[n?.nom??e.v,(0,A.jsxs)(`small`,{children:[Fn(e.tugadi),` · `,Pn(e.tugadi-e.boshlandi)]})]}),(0,A.jsxs)(`span`,{className:`mo-row__b`,children:[(0,A.jsx)(`b`,{children:O(e.ball)}),` / `,O(e.max)]})]},t)})})]})]}),o&&(0,A.jsx)(Hn,{v:o,yop:()=>s(null),boshla:e=>n(o.id,e)})]})}function Hn({v:e,yop:t,boshla:n}){let r=t=>e.savollar.filter(e=>e.qism===t);return(0,y.useEffect)(()=>{let e=e=>e.key===`Escape`&&t();return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[t]),(0,A.jsx)(`div`,{className:`scrim`,onMouseDown:e=>e.target===e.currentTarget&&t(),children:(0,A.jsxs)(`div`,{className:`modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`mo-bt`,children:[(0,A.jsxs)(`div`,{className:`modal__head`,children:[(0,A.jsx)(`h2`,{id:`mo-bt`,children:e.nom}),(0,A.jsx)(`button`,{type:`button`,className:`btn btn--ghost btn--icon btn--sm`,"aria-label":`Yopish`,onClick:t,children:(0,A.jsx)(Te,{size:18})})]}),(0,A.jsxs)(`div`,{className:`modal__body`,children:[(0,A.jsxs)(`dl`,{className:`mo-stats`,children:[[1,2,3].map(e=>r(e).length?(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`dt`,{children:In[e]}),(0,A.jsxs)(`dd`,{children:[r(e)[0].raqam,`–`,r(e)[r(e).length-1].raqam]})]},e):null),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`dt`,{children:`Jami ball`}),(0,A.jsx)(`dd`,{children:O(e.maxBall)})]})]}),(0,A.jsxs)(`ul`,{className:`mo-rules`,children:[(0,A.jsx)(`li`,{children:`Javoblar avtomatik saqlanadi — sahifa yopilsa ham davom ettirasiz.`}),(0,A.jsx)(`li`,{children:`Yozma topshiriqlarda har bandning yakuniy son javobini kiriting (masalan, 16,8). Yechim yo‘lini daftarga yozing — uni o‘qituvchi tekshiradi.`}),(0,A.jsx)(`li`,{children:`Test oxirida ball, xatolaringiz va har bir savolning yechimi ko‘rsatiladi.`}),e.ballTaxminiy&&(0,A.jsx)(`li`,{children:`Bu variantda savollar balli manbada ko‘rsatilmagan — standart taqsimot qo‘llangan, jami ball taxminiy.`})]})]}),(0,A.jsxs)(`div`,{className:`modal__foot`,children:[(0,A.jsx)(`button`,{type:`button`,className:`btn btn--secondary`,onClick:()=>n(!1),children:`Vaqtsiz mashq`}),(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--primary`,onClick:()=>n(!0),children:[(0,A.jsx)(le,{}),180,` daqiqa bilan boshlash`]})]})]})})}var Un={KeyA:`A`,KeyB:`B`,KeyC:`C`,KeyD:`D`,KeyE:`E`,KeyF:`F`};function Wn({v:e,u:t,setU:n,yakunla:r}){let[,i]=(0,y.useState)(0),[a,o]=(0,y.useState)(!1),[s,c]=(0,y.useState)(!1),l=e.savollar[Math.min(t.joriy,e.savollar.length-1)],u=t.boshlandi+108e5-Date.now();(0,y.useEffect)(()=>{let e=setInterval(()=>i(e=>e+1),1e3);return()=>clearInterval(e)},[]),(0,y.useEffect)(()=>{t.vaqtli&&u<=0&&r(t)});let d=e=>n({...t,javoblar:{...t.javoblar,[l.raqam]:e}}),f=r=>{n({...t,joriy:Math.max(0,Math.min(e.savollar.length-1,r))}),o(!1),document.querySelector(`.mo-q`)?.scrollTo({top:0})},p=()=>n({...t,belgi:t.belgi.includes(l.raqam)?t.belgi.filter(e=>e!==l.raqam):[...t.belgi,l.raqam]});(0,y.useEffect)(()=>{let e=e=>{let n=e.target;if(s||e.metaKey||e.ctrlKey||e.altKey||n?.closest(`input, textarea`))return;if(e.key===`ArrowRight`)return f(t.joriy+1);if(e.key===`ArrowLeft`)return f(t.joriy-1);let r=Un[e.code];r&&l.turi===`tanlov`&&l.variantlar?.[r]!==void 0&&d(t.javoblar[l.raqam]===r?``:r)};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)});let m=e.savollar.filter(e=>!je(e,t.javoblar[e.raqam])).length,h=t.vaqtli&&u<6e5;return(0,A.jsxs)(`div`,{className:`mo-test`,children:[(0,A.jsxs)(`header`,{className:`mo-ttop`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--ghost btn--sm`,onClick:()=>n(null),title:`Chiqish — javoblar saqlanadi, keyin davom ettirasiz`,children:[(0,A.jsx)(S,{}),(0,A.jsx)(`span`,{className:`mo-hide-sm`,children:`Chiqish`})]}),(0,A.jsxs)(`div`,{className:`mo-ttop__t`,children:[(0,A.jsx)(`b`,{children:e.nom.replace(/^Sertifikat\s*[—–-]?\s*/,``)}),(0,A.jsxs)(`small`,{children:[e.savollar.length-m,`/`,e.savollar.length,` javob`]})]}),(0,A.jsxs)(`span`,{className:h?`mo-timer is-kam`:`mo-timer`,title:t.vaqtli?`Qolgan vaqt`:`Sarflangan vaqt (mashq)`,children:[(0,A.jsx)(le,{}),t.vaqtli?Pn(u):Pn(Date.now()-t.boshlandi)]}),(0,A.jsx)(`button`,{type:`button`,className:`btn btn--ghost btn--icon btn--sm mo-navbtn`,onClick:()=>o(!0),"aria-label":`Savollar ro‘yxati`,children:(0,A.jsx)(he,{})}),(0,A.jsx)(`button`,{type:`button`,className:`btn btn--primary btn--sm`,onClick:()=>c(!0),children:`Yakunlash`})]}),(0,A.jsxs)(`div`,{className:`mo-tbody`,children:[(0,A.jsx)(`main`,{className:`mo-q`,children:(0,A.jsx)(Kn,{s:l,j:t.javoblar[l.raqam],onJavob:d})},l.raqam),a&&(0,A.jsx)(`button`,{type:`button`,className:`mo-scrim`,"aria-label":`Yopish`,onClick:()=>o(!1)}),(0,A.jsxs)(`aside`,{className:a?`mo-nav open`:`mo-nav`,"aria-label":`Savollar`,children:[(0,A.jsxs)(`div`,{className:`mo-nav__head`,children:[(0,A.jsx)(`b`,{children:`Savollar`}),(0,A.jsx)(`button`,{type:`button`,className:`btn btn--ghost btn--icon btn--sm`,"aria-label":`Yopish`,onClick:()=>o(!1),children:(0,A.jsx)(Te,{size:18})})]}),[1,2,3].map(n=>{let r=e.savollar.map((e,t)=>({x:e,i:t})).filter(({x:e})=>e.qism===n);return r.length?(0,A.jsxs)(`div`,{className:`mo-nav__g`,children:[(0,A.jsx)(`div`,{className:`mo-lbl`,children:In[n]}),(0,A.jsx)(`div`,{className:`mo-nav__grid`,children:r.map(({x:e,i:n})=>(0,A.jsx)(`button`,{type:`button`,className:[n===t.joriy&&`on`,je(e,t.javoblar[e.raqam])&&`ok`,t.belgi.includes(e.raqam)&&`flag`].filter(Boolean).join(` `),onClick:()=>f(n),"aria-label":`${e.raqam}-savol`,children:e.raqam},e.raqam))})]},n):null}),(0,A.jsxs)(`div`,{className:`mo-legend`,children:[(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`i`,{className:`ok`}),` javob berilgan`]}),(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`i`,{className:`flag`}),` belgilangan`]})]})]})]}),(0,A.jsxs)(`footer`,{className:`mo-tfoot`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--secondary`,onClick:()=>f(t.joriy-1),disabled:t.joriy===0,children:[(0,A.jsx)(S,{}),(0,A.jsx)(`span`,{className:`mo-hide-sm`,children:`Oldingi`})]}),(0,A.jsxs)(`button`,{type:`button`,className:t.belgi.includes(l.raqam)?`btn btn--ghost is-flag`:`btn btn--ghost`,onClick:p,"aria-pressed":t.belgi.includes(l.raqam),children:[(0,A.jsx)(pe,{}),t.belgi.includes(l.raqam)?`Belgilangan`:`Keyinroq qaytish`]}),t.joriy<e.savollar.length-1?(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--primary`,onClick:()=>f(t.joriy+1),children:[(0,A.jsx)(`span`,{className:`mo-hide-sm`,children:`Keyingi`}),(0,A.jsx)(C,{})]}):(0,A.jsx)(`button`,{type:`button`,className:`btn btn--primary`,onClick:()=>c(!0),children:`Yakunlash`})]}),s&&(0,A.jsx)(`div`,{className:`scrim`,onMouseDown:e=>e.target===e.currentTarget&&c(!1),children:(0,A.jsxs)(`div`,{className:`modal`,role:`dialog`,"aria-modal":`true`,children:[(0,A.jsx)(`div`,{className:`modal__head`,children:(0,A.jsx)(`h2`,{children:`Testni yakunlaysizmi?`})}),(0,A.jsx)(`div`,{className:`modal__body`,children:(0,A.jsx)(`p`,{children:m?`${m} ta topshiriq javobsiz qoldi. Yakunlagandan keyin javoblarni o‘zgartirib bo‘lmaydi.`:`Hamma topshiriqqa javob berdingiz. Yakunlagandan keyin javoblarni o‘zgartirib bo‘lmaydi.`})}),(0,A.jsxs)(`div`,{className:`modal__foot`,children:[(0,A.jsx)(`button`,{type:`button`,className:`btn btn--secondary`,onClick:()=>c(!1),children:`Davom etish`}),(0,A.jsx)(`button`,{type:`button`,className:`btn btn--primary`,onClick:()=>r(t),children:`Yakunlash`})]})]})})]})}function Gn({s:e}){return(0,A.jsxs)(`div`,{className:`mo-qhead`,children:[(0,A.jsx)(`span`,{className:`mo-qn`,children:e.raqam}),(0,A.jsx)(`span`,{children:e.turi===`yozma`?`Yozma topshiriq`:e.qism===2?`Umumiy shartli test`:`Yopiq test`}),(0,A.jsx)(`span`,{className:`mo-sep`,children:`·`}),(0,A.jsxs)(`span`,{children:[O(e.ball),` ball`]})]})}function Kn({s:e,j:t,onJavob:n}){let r=typeof t==`string`?t:``,i=typeof t==`object`&&t?t:{};return(0,A.jsxs)(`div`,{className:`mo-qbody`,children:[(0,A.jsx)(Gn,{s:e}),e.umumiy&&(0,A.jsxs)(`div`,{className:`mo-umumiy`,children:[(0,A.jsx)(`div`,{className:`mo-lbl`,children:`Umumiy shart`}),(0,A.jsx)(kn,{text:e.umumiy.shart})]}),(0,A.jsx)(`p`,{className:`mo-qtext`,children:(0,A.jsx)(kn,{text:e.shart})}),(0,A.jsx)(qn,{s:e}),e.turi===`tanlov`&&e.variantlar&&(0,A.jsx)(`div`,{className:`mo-opts`,role:`radiogroup`,"aria-label":`Javob variantlari`,children:Object.entries(e.variantlar).map(([e,t])=>(0,A.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":r===e,className:r===e?`mo-opt on`:`mo-opt`,onClick:()=>n(r===e?``:e),children:[(0,A.jsx)(`span`,{className:`mo-opt__h`,children:e}),(0,A.jsx)(`span`,{className:`mo-opt__t`,children:(0,A.jsx)(kn,{text:t})})]},e))}),e.turi===`yozma`&&(0,A.jsx)(`div`,{className:`mo-bands`,children:(e.bandlar??[]).map(e=>(0,A.jsxs)(`label`,{className:`mo-band`,children:[(0,A.jsxs)(`span`,{className:`mo-band__q`,children:[(0,A.jsxs)(`b`,{children:[e.band,`)`]}),` `,(0,A.jsx)(kn,{text:e.savol}),(0,A.jsxs)(`small`,{children:[O(e.ball),` ball`]})]}),(0,A.jsxs)(`span`,{className:`mo-band__in`,children:[(0,A.jsx)(`input`,{className:`input`,inputMode:e.birlik===`matn`?`text`:`decimal`,placeholder:e.birlik===`matn`?`Javob`:`Son, masalan 16,8`,value:i[e.band]??``,onChange:t=>n({...i,[e.band]:t.target.value})}),e.birlik&&e.birlik!==`matn`&&(0,A.jsx)(`em`,{children:e.birlik})]})]},e.band))})]})}function qn({s:e}){return e.rasmUrl?(0,A.jsx)(`figure`,{className:`mo-fig`,children:(0,A.jsx)(`img`,{src:e.rasmUrl,alt:e.rasm?.izoh??`${e.raqam}-savol rasmi`,loading:`lazy`})}):e.rasm?(0,A.jsxs)(`p`,{className:`mo-note`,children:[`Bu topshiriqda rasm bor: `,e.rasm.izoh]}):null}function Jn({v:e,n:t,profil:n,orqaga:r,qayta:i}){let a=(0,y.useMemo)(()=>Ne(e,t.javoblar),[e,t.javoblar]),[o,s]=(0,y.useState)(`xato`),[c,l]=(0,y.useState)(``),u=(0,y.useMemo)(()=>Ie({v:e.id,i:n.ism,...n.guruh?{g:n.guruh}:{},s:t.boshlandi,d:Math.round((t.tugadi-t.boshlandi)/1e3),j:t.javoblar}),[e.id,n,t]),d=`${n.ism}${n.guruh?` (${n.guruh})`:``} — Milliy sertifikat mock, ${e.nom}: ${O(a.ball)} / ${O(a.max)} ball, vaqt ${Pn(t.tugadi-t.boshlandi)}.\nNatija kodi: ${u}`,f=a.max?Math.round(a.ball/a.max*100):0,p=e.savollar.filter((e,t)=>{let n=a.savollar[t].holat;return o===`hammasi`||(o===`xato`?n===`xato`||n===`qisman`:n===`bosh`)}),m=async()=>{try{await navigator.clipboard.writeText(d),l(`Nusxalandi. O‘qituvchiga yuboring.`)}catch{l(`Nusxalab bo‘lmadi: quyidagi matnni belgilab, nusxa oling.`)}},h=`https://t.me/share/url?url=${encodeURIComponent(location.href.split(`#`)[0])}&text=${encodeURIComponent(d)}`;return(0,A.jsxs)(`div`,{className:`mo-page`,children:[(0,A.jsxs)(`header`,{className:`mo-top`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--ghost btn--sm`,onClick:r,children:[(0,A.jsx)(S,{}),`Variantlar`]}),(0,A.jsx)(`div`,{className:`mo-top__r`,children:(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--secondary btn--sm`,onClick:i,children:[(0,A.jsx)(xe,{}),`Qayta ishlash`]})})]}),(0,A.jsxs)(`main`,{className:`mo-wrap`,children:[(0,A.jsxs)(`section`,{className:`mo-res`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`mo-lbl`,children:[e.nom,` · `,Fn(t.tugadi)]}),(0,A.jsxs)(`div`,{className:`mo-score`,children:[(0,A.jsx)(`span`,{className:`num`,children:O(a.ball)}),(0,A.jsxs)(`small`,{children:[`/ `,O(a.max),` ball`]})]}),(0,A.jsx)(`div`,{className:`mo-bar`,"aria-hidden":`true`,children:(0,A.jsx)(`span`,{style:{width:`${f}%`}})}),(0,A.jsxs)(`p`,{className:`mo-muted`,children:[f,` % · to‘g‘ri `,a.togri,` · xato `,a.xato,` · javobsiz `,a.bosh,` · vaqt `,Pn(t.tugadi-t.boshlandi)]})]}),(0,A.jsx)(`dl`,{className:`mo-stats`,children:[1,2,3].map(e=>a.qismlar[e].max?(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`dt`,{children:In[e]}),(0,A.jsxs)(`dd`,{children:[O(a.qismlar[e].ball),` `,(0,A.jsxs)(`small`,{children:[`/ `,O(a.qismlar[e].max)]})]})]},e):null)}),(0,A.jsx)(`p`,{className:`mo-fine`,children:`Yozma topshiriqlar faqat yakuniy son bo‘yicha taxminiy baholandi. Yechim yo‘lini o‘qituvchi tekshiradi.`})]}),(0,A.jsxs)(`section`,{className:`mo-send`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h2`,{className:`mo-h2`,children:`Natijani o‘qituvchiga yuboring`}),(0,A.jsx)(`p`,{className:`mo-muted`,children:`Xabarda natija kodi bor — o‘qituvchi undan har bir javobingizni ko‘radi.`})]}),(0,A.jsxs)(`div`,{className:`mo-send__b`,children:[(0,A.jsxs)(`a`,{className:`btn btn--primary`,href:h,target:`_blank`,rel:`noopener noreferrer`,children:[(0,A.jsx)(Ce,{}),`Telegram orqali`]}),(0,A.jsxs)(`button`,{type:`button`,className:`btn btn--secondary`,onClick:m,children:[(0,A.jsx)(de,{}),`Nusxa olish`]})]}),c&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`p`,{className:`mo-fine`,children:c}),(0,A.jsx)(`textarea`,{className:`textarea mo-code`,readOnly:!0,rows:3,value:d,onFocus:e=>e.currentTarget.select()})]})]}),(0,A.jsxs)(`section`,{className:`mo-sec`,children:[(0,A.jsxs)(`div`,{className:`mo-sec__head`,children:[(0,A.jsxs)(`h2`,{className:`mo-h2`,children:[(0,A.jsx)(_e,{}),` Javoblar tahlili`]}),(0,A.jsx)(`div`,{className:`seg`,role:`group`,"aria-label":`Filtr`,children:[[`xato`,`Xatolar (${a.xato})`],[`bosh`,`Javobsiz (${a.bosh})`],[`hammasi`,`Hammasi`]].map(([e,t])=>(0,A.jsx)(`button`,{type:`button`,className:o===e?`on`:void 0,onClick:()=>s(e),children:t},e))})]}),(0,A.jsx)(`div`,{className:`mo-review`,children:p.length?p.map(n=>(0,A.jsx)(Xn,{s:n,j:t.javoblar[n.raqam],holat:a.savollar[e.savollar.indexOf(n)]},n.raqam)):(0,A.jsx)(`p`,{className:`mo-muted`,children:`Bu bo‘limda topshiriq yo‘q.`})})]})]})]})}var Yn={togri:`To‘g‘ri`,xato:`Xato`,qisman:`Qisman`,bosh:`Javobsiz`,baholanmaydi:`Baholanmaydi`};function Xn({s:e,j:t,holat:n}){let[r,i]=(0,y.useState)(!1),a=typeof t==`string`?t:``,o=e.javob.split(`,`).filter(Boolean),s=typeof t==`object`&&t?t:{};return(0,A.jsxs)(`article`,{className:`mo-rv`,"data-h":n.holat,children:[(0,A.jsxs)(`div`,{className:`mo-rv__head`,children:[(0,A.jsx)(Gn,{s:e}),(0,A.jsxs)(`span`,{className:`mo-pill`,"data-h":n.holat,children:[Yn[n.holat],n.max>0&&` · ${O(n.ball)}/${O(n.max)}`]})]}),e.umumiy&&(0,A.jsxs)(`div`,{className:`mo-umumiy`,children:[(0,A.jsx)(`div`,{className:`mo-lbl`,children:`Umumiy shart`}),(0,A.jsx)(kn,{text:e.umumiy.shart})]}),(0,A.jsx)(`p`,{className:`mo-rv__q`,children:(0,A.jsx)(kn,{text:e.shart})}),(0,A.jsx)(qn,{s:e}),e.turi===`tanlov`&&e.variantlar&&(0,A.jsx)(`div`,{className:`mo-rv__opts`,children:Object.entries(e.variantlar).map(([e,t])=>{let n=o.includes(e),r=a===e;return(0,A.jsxs)(`div`,{className:[`mo-rv__opt`,n&&`ok`,r&&!n&&`bad`,r&&`men`].filter(Boolean).join(` `),children:[(0,A.jsx)(`span`,{className:`mo-opt__h`,children:e}),(0,A.jsx)(`span`,{children:(0,A.jsx)(kn,{text:t})}),n&&(0,A.jsx)(ae,{className:`mo-rv__ic`}),r&&!n&&(0,A.jsx)(Te,{className:`mo-rv__ic`}),r&&(0,A.jsx)(`small`,{children:`siz`})]},e)})}),e.turi===`yozma`&&(0,A.jsx)(`div`,{className:`tw`,children:(0,A.jsxs)(`table`,{className:`t mo-rv__t`,children:[(0,A.jsx)(`thead`,{children:(0,A.jsxs)(`tr`,{children:[(0,A.jsx)(`th`,{children:`Band`}),(0,A.jsx)(`th`,{children:`Sizning javob`}),(0,A.jsx)(`th`,{children:`To‘g‘ri javob`}),(0,A.jsx)(`th`,{className:`n`,children:`Ball`})]})}),(0,A.jsx)(`tbody`,{children:(e.bandlar??[]).map(e=>{let t=s[e.band]??``,n=D(e,t);return(0,A.jsxs)(`tr`,{children:[(0,A.jsxs)(`td`,{children:[e.band,`)`]}),(0,A.jsx)(`td`,{className:t?n?`mo-ok`:`mo-bad`:`mo-muted`,children:t||`—`}),(0,A.jsxs)(`td`,{children:[e.javob||`—`,` `,e.birlik&&e.birlik!==`matn`?e.birlik:``]}),(0,A.jsx)(`td`,{className:`n`,children:n?O(e.ball):0})]},e.band)})})]})}),e.nuqson&&(0,A.jsxs)(`p`,{className:`mo-note`,children:[`Eslatma: `,e.nuqson]}),e.yechim&&(0,A.jsxs)(`div`,{className:`mo-sol`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`mo-sol__btn`,"aria-expanded":r,onClick:()=>i(e=>!e),children:[r?`Yechimni yopish`:`Yechimni ko‘rish`,(0,A.jsx)(se,{})]}),r&&(0,A.jsx)(An,{matn:e.yechim})]})]})}(0,Ee.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(y.StrictMode,{children:(0,A.jsx)(Ln,{})}));