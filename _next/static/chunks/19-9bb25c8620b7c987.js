"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19],{3146:function(e,t,o){o.d(t,{F4:function(){return f},xB:function(){return m}});var r,n,c=o(5246),l=o(2265),s=o(2820),i=o(4006),a=o(8798);o(5382),o(3285);var u=function(e,t){var o=arguments;if(null==t||!c.h.call(t,"css"))return l.createElement.apply(void 0,o);var r=o.length,n=Array(r);n[0]=c.E,n[1]=(0,c.c)(e,t);for(var s=2;s<r;s++)n[s]=o[s];return l.createElement.apply(null,n)};r=u||(u={}),n||(n=r.JSX||(r.JSX={}));var m=(0,c.w)(function(e,t){var o=e.styles,r=(0,a.O)([o],void 0,l.useContext(c.T)),n=l.useRef();return(0,i.j)(function(){var e=t.key+"-global",o=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),c=!1,l=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return t.sheet.tags.length&&(o.before=t.sheet.tags[0]),null!==l&&(c=!0,l.setAttribute("data-emotion",e),o.hydrate([l])),n.current=[o,c],function(){o.flush()}},[t]),(0,i.j)(function(){var e=n.current,o=e[0];if(e[1]){e[1]=!1;return}if(void 0!==r.next&&(0,s.My)(t,r.next,!0),o.tags.length){var c=o.tags[o.tags.length-1].nextElementSibling;o.before=c,o.flush()}t.insert("",r,o,!1)},[t,r.name]),null});function d(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,a.O)(t)}function f(){var e=d.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},6019:function(e,t,o){o.d(t,{Z:function(){return T}});var r=o(2265);let n=r.createContext(null);function c(){return r.useContext(n)}var l="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=o(7437),i=function(e){let{children:t,theme:o}=e,i=c(),a=r.useMemo(()=>{let e=null===i?{...o}:"function"==typeof o?o(i):{...i,...o};return null!=e&&(e[l]=null!==i),e},[o,i]);return(0,s.jsx)(n.Provider,{value:a,children:t})},a=o(5246),u=o(184);let m=r.createContext();var d=function({value:e,...t}){return(0,s.jsx)(m.Provider,{value:e??!0,...t})},f=o(7020);let h={};function y(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.useMemo(()=>{let r=e&&t[e]||t;if("function"==typeof o){let c=o(r),l=e?{...t,[e]:c}:c;return n?()=>l:l}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,n])}var p=function(e){let{children:t,theme:o,themeId:r}=e,n=(0,u.Z)(h),l=c()||h,m=y(r,n,o),p=y(r,l,o,!0),g="rtl"===(r?m[r]:m).direction;return(0,s.jsx)(i,{theme:p,children:(0,s.jsx)(a.T.Provider,{value:m,children:(0,s.jsx)(d,{value:g,children:(0,s.jsx)(f.Z,{value:r?m[r].components:m.components,children:t})})})})},g=o(2166);function S(e){let{theme:t,...o}=e,r=g.Z in t?t[g.Z]:void 0;return(0,s.jsx)(p,{...o,themeId:r?g.Z:void 0,theme:r||t})}var v=o(8720),b=o(3146);function k(e){let{styles:t,defaultTheme:o={}}=e,r="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?o:e):t;return(0,s.jsx)(b.xB,{styles:r})}let $="mode",C="color-scheme";function x(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function w(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function M(e,t){let o;if("undefined"!=typeof window){try{(o=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return o||t}}var j=o(9163),E=o(4792);let{CssVarsProvider:P,useColorScheme:_,getInitColorSchemeScript:O}=function(e){let{themeId:t,theme:o={},modeStorageKey:n=$,colorSchemeStorageKey:l=C,disableTransitionOnChange:i=!1,defaultColorScheme:a,resolveTheme:u}=e,m={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},d=r.createContext(void 0),f={},h={},y="string"==typeof a?a:a.light,g="string"==typeof a?a:a.dark;return{CssVarsProvider:function(e){let{children:m,theme:y,modeStorageKey:g=n,colorSchemeStorageKey:S=l,disableTransitionOnChange:v=i,storageWindow:b="undefined"==typeof window?void 0:window,documentNode:j="undefined"==typeof document?void 0:document,colorSchemeNode:E="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:P=!1,disableStyleSheetGeneration:_=!1,defaultMode:O="system",noSsr:T}=e,I=r.useRef(!1),A=c(),Z=r.useContext(d),L=!!Z&&!P,F=r.useMemo(()=>y||("function"==typeof o?o():o),[y]),N=F[t],V=N||F,{colorSchemes:W=f,components:K=h,cssVarPrefix:R}=V,D=Object.keys(W).filter(e=>!!W[e]).join(","),z=r.useMemo(()=>D.split(","),[D]),q="string"==typeof a?a:a.light,H="string"==typeof a?a:a.dark,B=W[q]&&W[H]?O:W[V.defaultColorScheme]?.palette?.mode||V.palette?.mode,{mode:J,setMode:X,systemMode:G,lightColorScheme:Q,darkColorScheme:U,colorScheme:Y,setColorScheme:ee}=function(e){let{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:n,supportedColorSchemes:c=[],modeStorageKey:l=$,colorSchemeStorageKey:s=C,storageWindow:i="undefined"==typeof window?void 0:window,noSsr:a=!1}=e,u=c.join(","),m=c.length>1,[d,f]=r.useState(()=>{let e=M(l,t),r=M("".concat(s,"-light"),o),c=M("".concat(s,"-dark"),n);return{mode:e,systemMode:x(e),lightColorScheme:r,darkColorScheme:c}}),[h,y]=r.useState(a||!m);r.useEffect(()=>{y(!0)},[]);let p=w(d,e=>"light"===e?d.lightColorScheme:"dark"===e?d.darkColorScheme:void 0),g=r.useCallback(e=>{f(o=>{if(e===o.mode)return o;let r=null!=e?e:t;try{localStorage.setItem(l,r)}catch(e){}return{...o,mode:r,systemMode:x(r)}})},[l,t]),S=r.useCallback(e=>{e?"string"==typeof e?e&&!u.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):f(t=>{let o={...t};return w(t,t=>{try{localStorage.setItem("".concat(s,"-").concat(t),e)}catch(e){}"light"===t&&(o.lightColorScheme=e),"dark"===t&&(o.darkColorScheme=e)}),o}):f(t=>{let r={...t},c=null===e.light?o:e.light,l=null===e.dark?n:e.dark;if(c){if(u.includes(c)){r.lightColorScheme=c;try{localStorage.setItem("".concat(s,"-light"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}if(l){if(u.includes(l)){r.darkColorScheme=l;try{localStorage.setItem("".concat(s,"-dark"),l)}catch(e){}}else console.error("`".concat(l,"` does not exist in `theme.colorSchemes`."))}return r}):f(e=>{try{localStorage.setItem("".concat(s,"-light"),o),localStorage.setItem("".concat(s,"-dark"),n)}catch(e){}return{...e,lightColorScheme:o,darkColorScheme:n}})},[u,s,o,n]),v=r.useCallback(e=>{"system"===d.mode&&f(t=>{let o=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===o?t:{...t,systemMode:o}})},[d.mode]),b=r.useRef(v);return b.current=v,r.useEffect(()=>{if("function"!=typeof window.matchMedia||!m)return;let e=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return b.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[m]),r.useEffect(()=>{if(i&&m){let e=e=>{let o=e.newValue;"string"==typeof e.key&&e.key.startsWith(s)&&(!o||u.match(o))&&(e.key.endsWith("light")&&S({light:o}),e.key.endsWith("dark")&&S({dark:o})),e.key===l&&(!o||["light","dark","system"].includes(o))&&g(o||t)};return i.addEventListener("storage",e),()=>{i.removeEventListener("storage",e)}}},[S,g,l,s,u,t,i,m]),{...d,mode:h?d.mode:void 0,systemMode:h?d.systemMode:void 0,colorScheme:h?p:void 0,setMode:g,setColorScheme:S}}({supportedColorSchemes:z,defaultLightColorScheme:q,defaultDarkColorScheme:H,modeStorageKey:g,colorSchemeStorageKey:S,defaultMode:B,storageWindow:b,noSsr:T}),et=J,eo=Y;L&&(et=Z.mode,eo=Z.colorScheme);let er=r.useMemo(()=>{let e=eo||V.defaultColorScheme,t=V.generateThemeVars?.()||V.vars,o={...V,components:K,colorSchemes:W,cssVarPrefix:R,vars:t};if("function"==typeof o.generateSpacing&&(o.spacing=o.generateSpacing()),e){let t=W[e];t&&"object"==typeof t&&Object.keys(t).forEach(e=>{t[e]&&"object"==typeof t[e]?o[e]={...o[e],...t[e]}:o[e]=t[e]})}return u?u(o):o},[V,eo,K,W,R]),en=V.colorSchemeSelector;r.useEffect(()=>{if(eo&&E&&en&&"media"!==en){let e=en;if("class"===en&&(e=".%s"),"data"===en&&(e="[data-%s]"),en?.startsWith("data-")&&!en.includes("%s")&&(e=`[${en}="%s"]`),e.startsWith("."))E.classList.remove(...z.map(t=>e.substring(1).replace("%s",t))),E.classList.add(e.substring(1).replace("%s",eo));else{let t=e.replace("%s",eo).match(/\[([^\]]+)\]/);if(t){let[e,o]=t[1].split("=");o||z.forEach(t=>{E.removeAttribute(e.replace(eo,t))}),E.setAttribute(e,o?o.replace(/"|'/g,""):"")}else E.setAttribute(e,eo)}}},[eo,en,E,z]),r.useEffect(()=>{let e;if(v&&I.current&&j){let t=j.createElement("style");t.appendChild(j.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),j.head.appendChild(t),window.getComputedStyle(j.body),e=setTimeout(()=>{j.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[eo,v,j]),r.useEffect(()=>(I.current=!0,()=>{I.current=!1}),[]);let ec=r.useMemo(()=>({allColorSchemes:z,colorScheme:eo,darkColorScheme:U,lightColorScheme:Q,mode:et,setColorScheme:ee,setMode:X,systemMode:G}),[z,eo,U,Q,et,ee,X,G,er.colorSchemeSelector]),el=!0;(_||!1===V.cssVariables||L&&A?.cssVarPrefix===R)&&(el=!1);let es=(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(p,{themeId:N?t:void 0,theme:er,children:m}),el&&(0,s.jsx)(k,{styles:er.generateStyleSheets?.()||[]})]});return L?es:(0,s.jsx)(d.Provider,{value:ec,children:es})},useColorScheme:()=>r.useContext(d)||m,getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:r="dark",modeStorageKey:n=$,colorSchemeStorageKey:c=C,attribute:l="data-color-scheme",colorSchemeNode:i="document.documentElement",nonce:a}=e||{},u="",m=l;if("class"===l&&(m=".%s"),"data"===l&&(m="[data-%s]"),m.startsWith(".")){let e=m.substring(1);u+=`${i}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${i}.classList.add('${e}'.replace('%s', colorScheme));`}let d=m.match(/\[([^\]]+)\]/);if(d){let[e,t]=d[1].split("=");t||(u+=`${i}.removeAttribute('${e}'.replace('%s', light));
      ${i}.removeAttribute('${e}'.replace('%s', dark));`),u+=`
      ${i}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else u+=`${i}.setAttribute('${m}', colorScheme);`;return(0,s.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?a:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${t}';
  const dark = localStorage.getItem('${c}-dark') || '${r}';
  const light = localStorage.getItem('${c}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:l,defaultLightColorScheme:y,defaultDarkColorScheme:g,modeStorageKey:n,...e})}}({themeId:g.Z,theme:()=>(0,j.Z)({cssVariables:!0}),colorSchemeStorageKey:"mui-color-scheme",modeStorageKey:"mui-mode",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t={...e,typography:(0,E.Z)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,v.Z)({sx:e,theme:this})},t}});function T(e){let{theme:t,...o}=e;return"function"!=typeof t&&"colorSchemes"in(g.Z in t?t[g.Z]:t)?(0,s.jsx)(P,{theme:t,...o}):(0,s.jsx)(S,{theme:t,...o})}},184:function(e,t,o){var r=o(2265),n=o(5246);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=r.useContext(n.T);return t&&0!==Object.keys(t).length?t:e}},3285:function(e,t,o){var r=o(2558),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return r.isMemo(e)?l:s[e.$$typeof]||n}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=l;var a=Object.defineProperty,u=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,o,r){if("string"!=typeof o){if(h){var n=f(o);n&&n!==h&&e(t,n,r)}var l=u(o);m&&(l=l.concat(m(o)));for(var s=i(t),y=i(o),p=0;p<l.length;++p){var g=l[p];if(!c[g]&&!(r&&r[g])&&!(y&&y[g])&&!(s&&s[g])){var S=d(o,g);try{a(t,g,S)}catch(e){}}}}return t}},3126:function(e,t){var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,i=o?Symbol.for("react.provider"):60109,a=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,m=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,p=o?Symbol.for("react.lazy"):60116,g=o?Symbol.for("react.block"):60121,S=o?Symbol.for("react.fundamental"):60117,v=o?Symbol.for("react.responder"):60118,b=o?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case m:case c:case s:case l:case f:return e;default:switch(e=e&&e.$$typeof){case a:case d:case p:case y:case i:return e;default:return t}}case n:return t}}}function $(e){return k(e)===m}t.AsyncMode=u,t.ConcurrentMode=m,t.ContextConsumer=a,t.ContextProvider=i,t.Element=r,t.ForwardRef=d,t.Fragment=c,t.Lazy=p,t.Memo=y,t.Portal=n,t.Profiler=s,t.StrictMode=l,t.Suspense=f,t.isAsyncMode=function(e){return $(e)||k(e)===u},t.isConcurrentMode=$,t.isContextConsumer=function(e){return k(e)===a},t.isContextProvider=function(e){return k(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===c},t.isLazy=function(e){return k(e)===p},t.isMemo=function(e){return k(e)===y},t.isPortal=function(e){return k(e)===n},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===l},t.isSuspense=function(e){return k(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===m||e===s||e===l||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===y||e.$$typeof===i||e.$$typeof===a||e.$$typeof===d||e.$$typeof===S||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=k},2558:function(e,t,o){e.exports=o(3126)}}]);