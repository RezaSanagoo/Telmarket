"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{3146:function(e,t,n){n.d(t,{F4:function(){return d},iv:function(){return p},xB:function(){return f}});var r,o,i=n(25246),u=n(2265),l=n(32820),a=n(24006),c=n(98798);n(25382),n(63285);var s=function(e,t){var n=arguments;if(null==t||!i.h.call(t,"css"))return u.createElement.apply(void 0,n);var r=n.length,o=Array(r);o[0]=i.E,o[1]=(0,i.c)(e,t);for(var l=2;l<r;l++)o[l]=n[l];return u.createElement.apply(null,o)};r=s||(s={}),o||(o=r.JSX||(r.JSX={}));var f=(0,i.w)(function(e,t){var n=e.styles,r=(0,c.O)([n],void 0,u.useContext(i.T)),o=u.useRef();return(0,a.j)(function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,u=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==u&&(i=!0,u.setAttribute("data-emotion",e),n.hydrate([u])),o.current=[n,i],function(){n.flush()}},[t]),(0,a.j)(function(){var e=o.current,n=e[0];if(e[1]){e[1]=!1;return}if(void 0!==r.next&&(0,l.My)(t,r.next,!0),n.tags.length){var i=n.tags[n.tags.length-1].nextElementSibling;n.before=i,n.flush()}t.insert("",r,n,!1)},[t,r.name]),null});function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.O)(t)}function d(){var e=p.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},10475:function(e,t,n){n.d(t,{Z:function(){return W}});var r=n(2265),o=n(61994),i=n(20801);function u(e){try{return e.matches(":focus-visible")}catch(e){}return!1}var l=n(93205),a=n(37053),c=n(60118),s=n(9665);let f={};function p(e,t){let n=r.useRef(f);return n.current===f&&(n.current=e(t)),n}class d{static create(){return new d}static use(){let e=p(d.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=function(){let e,t;let n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>{var e;return null===(e=this.ref.current)||void 0===e?void 0:e.start(...t)})}stop(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>{var e;return null===(e=this.ref.current)||void 0===e?void 0:e.stop(...t)})}pulsate(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>{var e;return null===(e=this.ref.current)||void 0===e?void 0:e.pulsate(...t)})}constructor(){this.mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())},this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}}var h=n(45008),m=n(74610),y=n(1119),v=n(63496),b=n(33707),g=n(79610);function x(e,t){var n=Object.create(null);return e&&r.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=t&&(0,r.isValidElement)(e)?t(e):e}),n}function M(e,t,n){return null!=n[t]?n[t]:e.props[t]}var E=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},S=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind((0,v.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,b.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,i=t.children,u=t.handleExited;return{children:t.firstRender?x(e.children,function(t){return(0,r.cloneElement)(t,{onExited:u.bind(null,t),in:!0,appear:M(t,"appear",e),enter:M(t,"enter",e),exit:M(t,"exit",e)})}):(Object.keys(o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var u in e)u in t?i.length&&(o[u]=i,i=[]):i.push(u);var l={};for(var a in t){if(o[a])for(r=0;r<o[a].length;r++){var c=o[a][r];l[o[a][r]]=n(c)}l[a]=n(a)}for(r=0;r<i.length;r++)l[i[r]]=n(i[r]);return l}(i,n=x(e.children))).forEach(function(t){var l=o[t];if((0,r.isValidElement)(l)){var a=t in i,c=t in n,s=i[t],f=(0,r.isValidElement)(s)&&!s.props.in;c&&(!a||f)?o[t]=(0,r.cloneElement)(l,{onExited:u.bind(null,l),in:!0,exit:M(l,"exit",e),enter:M(l,"enter",e)}):c||!a||f?c&&a&&(0,r.isValidElement)(s)&&(o[t]=(0,r.cloneElement)(l,{onExited:u.bind(null,l),in:s.props.in,exit:M(l,"exit",e),enter:M(l,"enter",e)})):o[t]=(0,r.cloneElement)(l,{in:!1})}}),o),firstRender:!1}},n.handleExited=function(e,t){var n=x(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,y.Z)({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,m.Z)(e,["component","childFactory"]),i=this.state.contextValue,u=E(this.state.children).map(n);return(delete o.appear,delete o.enter,delete o.exit,null===t)?r.createElement(g.Z.Provider,{value:i},u):r.createElement(g.Z.Provider,{value:i},r.createElement(t,o,u))},t}(r.Component);S.propTypes={},S.defaultProps={component:"div",childFactory:function(e){return e}};let P=[];class Z{static create(){return new Z}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}}var w=n(3146),j=n(57437),O=n(94143);let R=(0,O.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);function $(){let e=(0,h._)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"]);return $=function(){return e},e}function k(){let e=(0,h._)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"]);return k=function(){return e},e}function C(){let e=(0,h._)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"]);return C=function(){return e},e}function T(){let e=(0,h._)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]);return T=function(){return e},e}let _=(0,w.F4)($()),V=(0,w.F4)(k()),F=(0,w.F4)(C()),A=(0,l.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),I=(0,l.ZP)(function(e){let{className:t,classes:n,pulsate:i=!1,rippleX:u,rippleY:l,rippleSize:a,in:c,onExited:s,timeout:f}=e,[p,d]=r.useState(!1),h=(0,o.Z)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),m=(0,o.Z)(n.child,p&&n.childLeaving,i&&n.childPulsate);return c||p||d(!0),r.useEffect(()=>{if(!c&&null!=s){let e=setTimeout(s,f);return()=>{clearTimeout(e)}}},[s,c,f]),(0,j.jsx)("span",{className:h,style:{width:a,height:a,top:-(a/2)+l,left:-(a/2)+u},children:(0,j.jsx)("span",{className:m})})},{name:"MuiTouchRipple",slot:"Ripple"})(T(),R.rippleVisible,_,550,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut},R.ripplePulsate,e=>{let{theme:t}=e;return t.transitions.duration.shorter},R.child,R.childLeaving,V,550,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut},R.childPulsate,F,e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),D=r.forwardRef(function(e,t){let{center:n=!1,classes:i={},className:u,...l}=(0,a.i)({props:e,name:"MuiTouchRipple"}),[c,s]=r.useState([]),f=r.useRef(0),d=r.useRef(null);r.useEffect(()=>{d.current&&(d.current(),d.current=null)},[c]);let h=r.useRef(!1),m=function(){var e;let t=p(Z.create).current;return e=t.disposeEffect,r.useEffect(e,P),t}(),y=r.useRef(null),v=r.useRef(null),b=r.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:u,cb:l}=e;s(e=>[...e,(0,j.jsx)(I,{classes:{ripple:(0,o.Z)(i.ripple,R.ripple),rippleVisible:(0,o.Z)(i.rippleVisible,R.rippleVisible),ripplePulsate:(0,o.Z)(i.ripplePulsate,R.ripplePulsate),child:(0,o.Z)(i.child,R.child),childLeaving:(0,o.Z)(i.childLeaving,R.childLeaving),childPulsate:(0,o.Z)(i.childPulsate,R.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:u},f.current)]),f.current+=1,d.current=l},[i]),g=r.useCallback(function(){let e,t,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{},{pulsate:l=!1,center:a=n||i.pulsate,fakeElement:c=!1}=i;if((null==o?void 0:o.type)==="mousedown"&&h.current){h.current=!1;return}(null==o?void 0:o.type)==="touchstart"&&(h.current=!0);let s=c?null:v.current,f=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(!a&&void 0!==o&&(0!==o.clientX||0!==o.clientY)&&(o.clientX||o.touches)){let{clientX:n,clientY:r}=o.touches&&o.touches.length>0?o.touches[0]:o;e=Math.round(n-f.left),t=Math.round(r-f.top)}else e=Math.round(f.width/2),t=Math.round(f.height/2);a?(r=Math.sqrt((2*f.width**2+f.height**2)/3))%2==0&&(r+=1):r=Math.sqrt((2*Math.max(Math.abs((s?s.clientWidth:0)-e),e)+2)**2+(2*Math.max(Math.abs((s?s.clientHeight:0)-t),t)+2)**2),(null==o?void 0:o.touches)?null===y.current&&(y.current=()=>{b({pulsate:l,rippleX:e,rippleY:t,rippleSize:r,cb:u})},m.start(80,()=>{y.current&&(y.current(),y.current=null)})):b({pulsate:l,rippleX:e,rippleY:t,rippleSize:r,cb:u})},[n,b,m]),x=r.useCallback(()=>{g({},{pulsate:!0})},[g]),M=r.useCallback((e,t)=>{if(m.clear(),(null==e?void 0:e.type)==="touchend"&&y.current){y.current(),y.current=null,m.start(0,()=>{M(e,t)});return}y.current=null,s(e=>e.length>0?e.slice(1):e),d.current=t},[m]);return r.useImperativeHandle(t,()=>({pulsate:x,start:g,stop:M}),[x,g,M]),(0,j.jsx)(A,{className:(0,o.Z)(R.root,i.root,u),ref:v,...l,children:(0,j.jsx)(S,{component:null,exit:!0,children:c})})});var B=n(50738);function L(e){return(0,B.ZP)("MuiButtonBase",e)}let N=(0,O.Z)("MuiButtonBase",["root","disabled","focusVisible"]),z=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,u=(0,i.Z)({root:["root",t&&"disabled",n&&"focusVisible"]},L,o);return n&&r&&(u.root+=" ".concat(r)),u},X=(0,l.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(N.disabled)]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function H(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,s.Z)(o=>(n&&n(o),r||e[t](o),!0))}var W=r.forwardRef(function(e,t){let n=(0,a.i)({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:l=!1,children:f,className:p,component:h="button",disabled:m=!1,disableRipple:y=!1,disableTouchRipple:v=!1,focusRipple:b=!1,focusVisibleClassName:g,LinkComponent:x="a",onBlur:M,onClick:E,onContextMenu:S,onDragLeave:P,onFocus:Z,onFocusVisible:w,onKeyDown:O,onKeyUp:R,onMouseDown:$,onMouseLeave:k,onMouseUp:C,onTouchEnd:T,onTouchMove:_,onTouchStart:V,tabIndex:F=0,TouchRippleProps:A,touchRippleRef:I,type:B,...L}=n,N=r.useRef(null),W=d.use(),q=(0,c.Z)(W.ref,I),[U,J]=r.useState(!1);m&&U&&J(!1),r.useImperativeHandle(i,()=>({focusVisible:()=>{J(!0),N.current.focus()}}),[]);let K=W.shouldMount&&!y&&!m;r.useEffect(()=>{U&&b&&!y&&W.pulsate()},[y,b,U,W]);let Y=H(W,"start",$,v),G=H(W,"stop",S,v),Q=H(W,"stop",P,v),ee=H(W,"stop",C,v),et=H(W,"stop",e=>{U&&e.preventDefault(),k&&k(e)},v),en=H(W,"start",V,v),er=H(W,"stop",T,v),eo=H(W,"stop",_,v),ei=H(W,"stop",e=>{u(e.target)||J(!1),M&&M(e)},!1),eu=(0,s.Z)(e=>{N.current||(N.current=e.currentTarget),u(e.target)&&(J(!0),w&&w(e)),Z&&Z(e)}),el=()=>{let e=N.current;return h&&"button"!==h&&!("A"===e.tagName&&e.href)},ea=(0,s.Z)(e=>{b&&!e.repeat&&U&&" "===e.key&&W.stop(e,()=>{W.start(e)}),e.target===e.currentTarget&&el()&&" "===e.key&&e.preventDefault(),O&&O(e),e.target===e.currentTarget&&el()&&"Enter"===e.key&&!m&&(e.preventDefault(),E&&E(e))}),ec=(0,s.Z)(e=>{b&&" "===e.key&&U&&!e.defaultPrevented&&W.stop(e,()=>{W.pulsate(e)}),R&&R(e),E&&e.target===e.currentTarget&&el()&&" "===e.key&&!e.defaultPrevented&&E(e)}),es=h;"button"===es&&(L.href||L.to)&&(es=x);let ef={};"button"===es?(ef.type=void 0===B?"button":B,ef.disabled=m):(L.href||L.to||(ef.role="button"),m&&(ef["aria-disabled"]=m));let ep=(0,c.Z)(t,N),ed={...n,centerRipple:l,component:h,disabled:m,disableRipple:y,disableTouchRipple:v,focusRipple:b,tabIndex:F,focusVisible:U},eh=z(ed);return(0,j.jsxs)(X,{as:es,className:(0,o.Z)(eh.root,p),ownerState:ed,onBlur:ei,onClick:E,onContextMenu:G,onFocus:eu,onKeyDown:ea,onKeyUp:ec,onMouseDown:Y,onMouseLeave:et,onMouseUp:ee,onDragLeave:Q,onTouchEnd:er,onTouchMove:eo,onTouchStart:en,ref:ep,tabIndex:m?-1:F,type:B,...ef,...L,children:[f,K?(0,j.jsx)(D,{ref:q,center:l,...A}):null]})})},9665:function(e,t,n){var r=n(8659);t.Z=r.Z},3450:function(e,t,n){var r=n(2265);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.Z=o},8659:function(e,t,n){var r=n(2265),o=n(3450);t.Z=function(e){let t=r.useRef(e);return(0,o.Z)(()=>{t.current=e}),r.useRef(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.current)(...n)}).current}},63285:function(e,t,n){var r=n(82558),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function a(e){return r.isMemo(e)?u:l[e.$$typeof]||o}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=u;var c=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&e(t,o,r)}var u=s(n);f&&(u=u.concat(f(n)));for(var l=a(t),m=a(n),y=0;y<u.length;++y){var v=u[y];if(!i[v]&&!(r&&r[v])&&!(m&&m[v])&&!(l&&l[v])){var b=p(n,v);try{c(t,v,b)}catch(e){}}}}return t}},13126:function(e,t){var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,a=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function M(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case s:case f:case i:case l:case u:case d:return e;default:switch(e=e&&e.$$typeof){case c:case p:case y:case m:case a:return e;default:return t}}case o:return t}}}function E(e){return M(e)===f}t.AsyncMode=s,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=a,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=l,t.StrictMode=u,t.Suspense=d,t.isAsyncMode=function(e){return E(e)||M(e)===s},t.isConcurrentMode=E,t.isContextConsumer=function(e){return M(e)===c},t.isContextProvider=function(e){return M(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return M(e)===p},t.isFragment=function(e){return M(e)===i},t.isLazy=function(e){return M(e)===y},t.isMemo=function(e){return M(e)===m},t.isPortal=function(e){return M(e)===o},t.isProfiler=function(e){return M(e)===l},t.isStrictMode=function(e){return M(e)===u},t.isSuspense=function(e){return M(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===l||e===u||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===a||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===x||e.$$typeof===v)},t.typeOf=M},82558:function(e,t,n){e.exports=n(13126)},79610:function(e,t,n){var r=n(2265);t.Z=r.createContext(null)},63496:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},33707:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(85533);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.Z)(e,t)}},74610:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}},85533:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}},45008:function(e,t,n){n.d(t,{_:function(){return r}});function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}}}]);