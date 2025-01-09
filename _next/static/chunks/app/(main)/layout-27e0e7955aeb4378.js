(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{733:function(e,t,o){Promise.resolve().then(o.bind(o,4100))},1501:function(e,t,o){"use strict";var r=o(4630),a=o(7437);t.default=(0,r.Z)((0,a.jsx)("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2"}),"BookmarkRounded")},184:function(e,t,o){"use strict";var r=o(2265),a=o(5246);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=r.useContext(a.T);return t&&0!==Object.keys(t).length?t:e}},9376:function(e,t,o){"use strict";var r=o(5475);o.o(r,"redirect")&&o.d(t,{redirect:function(){return r.redirect}}),o.o(r,"usePathname")&&o.d(t,{usePathname:function(){return r.usePathname}}),o.o(r,"useRouter")&&o.d(t,{useRouter:function(){return r.useRouter}}),o.o(r,"useServerInsertedHTML")&&o.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},4100:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return eo}});var r=o(7437),a=o(9376),n=o(2265),i=o(1994),l=o(801),s=o(4461),p=o(1086),c=o(7053),u=o(5657),d=o(3858),v=o(5208),h=o(8662),x=o(184);let g=(0,h.Z)();var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return(0,x.Z)(e)},m=o(5201),y=o(2166),b=o(6821),Z=o(4143),k=o(921);function B(e){return(0,k.ZP)("MuiPaper",e)}(0,Z.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);let w=e=>{let{square:t,elevation:o,variant:r,classes:a}=e;return(0,l.Z)({root:["root",r,!t&&"rounded","elevation"===r&&"elevation".concat(o)]},B,a)},j=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t["elevation".concat(o.elevation)]]}})((0,p.Z)(e=>{let{theme:t}=e;return{backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:e=>{let{ownerState:t}=e;return!t.square},style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:"1px solid ".concat((t.vars||t).palette.divider)}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}})),M=n.forwardRef(function(e,t){var o;let a=(0,c.i)({props:e,name:"MuiPaper"}),n=function(){let e=f(m.Z);return e[y.Z]||e}(),{className:l,component:s="div",elevation:p=1,square:u=!1,variant:d="elevation",...h}=a,x={...a,component:s,elevation:p,square:u,variant:d},g=w(x);return(0,r.jsx)(j,{as:s,ownerState:x,className:(0,i.Z)(g.root,l),ref:t,...h,style:{..."elevation"===d&&{"--Paper-shadow":(n.vars||n).shadows[p],...n.vars&&{"--Paper-overlay":null===(o=n.vars.overlays)||void 0===o?void 0:o[p]},...!n.vars&&"dark"===n.palette.mode&&{"--Paper-overlay":"linear-gradient(".concat((0,v.Fq)("#fff",(0,b.Z)(p)),", ").concat((0,v.Fq)("#fff",(0,b.Z)(p)),")")}},...h.style}})});function A(e){return(0,k.ZP)("MuiAppBar",e)}(0,Z.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);let C=e=>{let{color:t,position:o,classes:r}=e,a={root:["root","color".concat((0,u.Z)(t)),"position".concat((0,u.Z)(o))]};return(0,l.Z)(a,A,r)},R=(e,t)=>e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t,P=(0,s.ZP)(M,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t["position".concat((0,u.Z)(o.position))],t["color".concat((0,u.Z)(o.color))]]}})((0,p.Z)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[100],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[100]),...t.applyStyles("dark",{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[900],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[900])})}},...Object.entries(t.palette).filter((0,d.Z)(["contrastText"])).map(e=>{var o,r;let[a]=e;return{props:{color:a},style:{"--AppBar-background":(null!==(o=t.vars)&&void 0!==o?o:t).palette[a].main,"--AppBar-color":(null!==(r=t.vars)&&void 0!==r?r:t).palette[a].contrastText}}}),{props:e=>!0===e.enableColorOnDark&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:e=>!1===e.enableColorOnDark&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundColor:t.vars?R(t.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:t.vars?R(t.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundImage:"none"})}}]}})),S=n.forwardRef(function(e,t){let o=(0,c.i)({props:e,name:"MuiAppBar"}),{className:a,color:n="primary",enableColorOnDark:l=!1,position:s="fixed",...p}=o,u={...o,color:n,position:s,enableColorOnDark:l},d=C(u);return(0,r.jsx)(P,{square:!0,component:"header",ownerState:u,elevation:4,className:(0,i.Z)(d.root,a,"fixed"===s&&"mui-fixed"),ref:t,...p})});function N(e){return(0,k.ZP)("MuiToolbar",e)}(0,Z.Z)("MuiToolbar",["root","gutters","regular","dense"]);let T=e=>{let{classes:t,disableGutters:o,variant:r}=e;return(0,l.Z)({root:["root",!o&&"gutters",r]},N,t)},I=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((0,p.Z)(e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",variants:[{props:e=>{let{ownerState:t}=e;return!t.disableGutters},style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}})),z=n.forwardRef(function(e,t){let o=(0,c.i)({props:e,name:"MuiToolbar"}),{className:a,component:n="div",disableGutters:l=!1,variant:s="regular",...p}=o,u={...o,component:n,disableGutters:l,variant:s},d=T(u);return(0,r.jsx)(I,{as:n,className:(0,i.Z)(d.root,a),ref:t,ownerState:u,...p})});var L=o(109),W=o(9832),D=o(4630),H=(0,D.Z)((0,r.jsx)("path",{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"}),"MenuRounded");function O(){let e=(0,a.usePathname)();return(0,r.jsx)(S,{position:"fixed",sx:{top:0,backgroundColor:"white",color:"#000",boxShadow:"none",borderBottom:"1px solid #D9DCE0"},children:(0,r.jsxs)(z,{children:[(0,r.jsx)(L.Z,{variant:"h6",component:"div",sx:{flexGrow:1,fontWeight:"900",textAlign:"right",fontSize:"20px"},children:(e=>{switch(e){case"/explore":return"ویترین";case"/search":return"جستجو";case"/prices":return"قیمت‌ها";case"/courses":return"دوره‌ها";case"/profile":return"پروفایل";default:return"تل‌مارکت"}})(e)}),(0,r.jsx)(W.Z,{size:"large",edge:"start",color:"inherit",sx:{ml:1,padding:0},children:(0,r.jsx)(H,{})})]})})}function _(e){return(0,k.ZP)("MuiBottomNavigation",e)}(0,Z.Z)("MuiBottomNavigation",["root"]);let E=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},_,t)},q=(0,s.ZP)("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,t)=>t.root})((0,p.Z)(e=>{let{theme:t}=e;return{display:"flex",justifyContent:"center",height:56,backgroundColor:(t.vars||t).palette.background.paper}})),F=n.forwardRef(function(e,t){let o=(0,c.i)({props:e,name:"MuiBottomNavigation"}),{children:a,className:l,component:s="div",onChange:p,showLabels:u=!1,value:d,...v}=o,h={...o,component:s,showLabels:u},x=E(h);return(0,r.jsx)(q,{as:s,className:(0,i.Z)(x.root,l),ref:t,ownerState:h,...v,children:n.Children.map(a,(e,t)=>{if(!n.isValidElement(e))return null;let o=void 0===e.props.value?t:e.props.value;return n.cloneElement(e,{selected:o===d,showLabel:void 0!==e.props.showLabel?e.props.showLabel:u,value:o,onChange:p})})})});var V=o(1336);function G(e){return(0,k.ZP)("MuiBottomNavigationAction",e)}let J=(0,Z.Z)("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),K=e=>{let{classes:t,showLabel:o,selected:r}=e;return(0,l.Z)({root:["root",!o&&!r&&"iconOnly",r&&"selected"],label:["label",!o&&!r&&"iconOnly",r&&"selected"]},G,t)},Q=(0,s.ZP)(V.Z,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,!o.showLabel&&!o.selected&&t.iconOnly]}})((0,p.Z)(e=>{let{theme:t}=e;return{transition:t.transitions.create(["color","padding-top"],{duration:t.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(t.vars||t).palette.text.secondary,flexDirection:"column",flex:"1",["&.".concat(J.selected)]:{color:(t.vars||t).palette.primary.main},variants:[{props:e=>{let{showLabel:t,selected:o}=e;return!t&&!o},style:{paddingTop:14}},{props:e=>{let{showLabel:t,selected:o,label:r}=e;return!t&&!o&&!r},style:{paddingTop:0}}]}})),U=(0,s.ZP)("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,t)=>t.label})((0,p.Z)(e=>{let{theme:t}=e;return{fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s",["&.".concat(J.selected)]:{fontSize:t.typography.pxToRem(14)},variants:[{props:e=>{let{showLabel:t,selected:o}=e;return!t&&!o},style:{opacity:0,transitionDelay:"0s"}}]}})),X=n.forwardRef(function(e,t){let o=(0,c.i)({props:e,name:"MuiBottomNavigationAction"}),{className:a,icon:n,label:l,onChange:s,onClick:p,selected:u,showLabel:d,value:v,...h}=o,x=K(o);return(0,r.jsxs)(Q,{ref:t,className:(0,i.Z)(x.root,a),focusRipple:!0,onClick:e=>{s&&s(e,v),p&&p(e)},ownerState:o,...h,children:[n,(0,r.jsx)(U,{className:x.label,ownerState:o,children:l})]})});var Y=(0,D.Z)((0,r.jsx)("path",{d:"M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0zm6.04-9.66-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0"}),"SchoolRounded"),$=(0,D.Z)((0,r.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"}),"PersonRounded"),ee=o(1501);function et(){let e=(0,a.useRouter)(),t=(0,a.usePathname)(),[o,i]=(0,n.useState)(t);return(0,r.jsxs)(F,{value:o,onChange:(t,o)=>{i(o),e.push(o)},sx:{position:"fixed",bottom:0,left:0,right:0,borderTop:"1px solid #D9DCE0",height:"92px",padding:"12px 8px",paddingTop:"0px",fontWeight:"bold","& .MuiSvgIcon-root":{fontSize:"24px",fontWeight:"bold"},"& .MuiBottomNavigationAction-root":{color:"#353535",fontWeight:"bold","& path":{stroke:"#353535"},"& svg":{width:"24px",height:"24px"},"&.Mui-selected":{color:"#1A8BC4","& path":{stroke:"#1A8BC4"},"& svg":{width:"24px",height:"24px"}}}},children:[(0,r.jsx)(X,{label:"پروفایل",value:"/profile",icon:(0,r.jsx)($,{}),sx:{minWidth:"auto"}}),(0,r.jsx)(X,{label:"دوره‌ها",value:"/courses",icon:(0,r.jsx)(Y,{}),sx:{minWidth:"auto"}}),(0,r.jsx)(X,{label:"قیمت‌ها",sx:{minWidth:"auto"},value:"/prices",icon:(0,r.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{"clip-path":"url(#clip0_51_1235)",children:(0,r.jsx)("path",{d:"M12.2 1V23M17.2 5H9.70001C8.77175 5 7.88152 5.36875 7.22514 6.02513C6.56876 6.6815 6.20001 7.57174 6.20001 8.5C6.20001 9.42826 6.56876 10.3185 7.22514 10.9749C7.88152 11.6313 8.77175 12 9.70001 12H14.7C15.6283 12 16.5185 12.3687 17.1749 13.0251C17.8313 13.6815 18.2 14.5717 18.2 15.5C18.2 16.4283 17.8313 17.3185 17.1749 17.9749C16.5185 18.6313 15.6283 19 14.7 19H6.20001",stroke:"#353535","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_51_1235",children:(0,r.jsx)("rect",{width:"24",height:"24",fill:"white",transform:"translate(0.200012)"})})})]})}),(0,r.jsx)(X,{label:"جستجو",value:"/search",sx:{minWidth:"auto"},icon:(0,r.jsx)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M21.8 21L17.45 16.65M19.8 11C19.8 15.4183 16.2183 19 11.8 19C7.38174 19 3.80002 15.4183 3.80002 11C3.80002 6.58172 7.38174 3 11.8 3C16.2183 3 19.8 6.58172 19.8 11Z",stroke:"#353535","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})})}),(0,r.jsx)(X,{label:"ویترین",value:"/explore",sx:{minWidth:"auto"},icon:(0,r.jsx)(ee.default,{})})]})}function eo(e){let{children:t}=e,o=!(0,a.usePathname)().includes("/courses/");return(0,r.jsxs)("div",{className:"main-layout",children:[o&&(0,r.jsx)(O,{}),(0,r.jsx)("main",{className:"".concat(o?"pt-[56px]":"pt-[77px]"," pb-16"),children:t}),(0,r.jsx)(et,{})]})}}},function(e){e.O(0,[896,630,525,971,117,744],function(){return e(e.s=733)}),_N_E=e.O()}]);