(self.webpackChunkgoit_react_hw_06_v1_phonebook=self.webpackChunkgoit_react_hw_06_v1_phonebook||[]).push([[866],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},9402:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r,o,i,a=t(885),u=t(2791),c=t(9434),l=t(501),s=t(168),f=t(7939),d=f.ZP.input(r||(r=(0,s.Z)(["\n  margin-bottom: 5px;\n  padding: 5px;\n"]))),v=t(6895),m=t(184),h=function(){var e=(0,c.v9)((function(e){return e.filter.value})),n=(0,c.I0)(),t=(0,l.lr)(),r=(0,a.Z)(t,2),o=r[0],i=r[1],u=o.get("filter");console.log(u);return(0,m.jsx)(d,{onChange:function(e){var t=e.target.value;t.trim(),0!==t&&(n((0,v.Tv)(t)),i({filter:t}))},type:"text",name:"filter",value:e,placeholder:"Filter"})},p=f.ZP.ul(o||(o=(0,s.Z)(["\n  padding: 0;\n"]))),g=t(5562),x=t.n(g),Z=f.ZP.li(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  margin-bottom: 10px;\n  .MuiAvatar-circular {\n    margin-right: 10px;\n  }\n  button {\n    margin-left: 15px;\n    padding: 2px 5px;\n    font-size: 12px;\n    .MuiButton-startIcon {\n      margin-right: 5px;\n    }\n  }\n"]))),S=t(3366),b=t(7462),w=t(8182),y=t(4419),j=t(1020),z=t(2507),k=(0,t(9201).Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),I=t(1217);function C(e){return(0,I.Z)("MuiAvatar",e)}(0,t(5878).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var M=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],R=(0,j.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],t.colorDefault&&n.colorDefault]}})((function(e){var n=e.theme,t=e.ownerState;return(0,b.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(n.vars||n).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,b.Z)({color:(n.vars||n).palette.background.default},n.vars?{backgroundColor:n.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600]}))})),_=(0,j.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,n){return n.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),P=(0,j.ZP)(k,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,n){return n.fallback}})({width:"75%",height:"75%"});var N=u.forwardRef((function(e,n){var t=(0,z.Z)({props:e,name:"MuiAvatar"}),r=t.alt,o=t.children,i=t.className,c=t.component,l=void 0===c?"div":c,s=t.imgProps,f=t.sizes,d=t.src,v=t.srcSet,h=t.variant,p=void 0===h?"circular":h,g=(0,S.Z)(t,M),x=null,Z=function(e){var n=e.crossOrigin,t=e.referrerPolicy,r=e.src,o=e.srcSet,i=u.useState(!1),c=(0,a.Z)(i,2),l=c[0],s=c[1];return u.useEffect((function(){if(r||o){s(!1);var e=!0,i=new Image;return i.onload=function(){e&&s("loaded")},i.onerror=function(){e&&s("error")},i.crossOrigin=n,i.referrerPolicy=t,i.src=r,o&&(i.srcset=o),function(){e=!1}}}),[n,t,r,o]),l}((0,b.Z)({},s,{src:d,srcSet:v})),j=d||v,k=j&&"error"!==Z,I=(0,b.Z)({},t,{colorDefault:!k,component:l,variant:p}),N=function(e){var n=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,y.Z)(t,C,n)}(I);return x=k?(0,m.jsx)(_,(0,b.Z)({alt:r,src:d,srcSet:v,sizes:f,ownerState:I,className:N.img},s)):null!=o?o:j&&r?r[0]:(0,m.jsx)(P,{className:N.fallback}),(0,m.jsx)(R,(0,b.Z)({as:l,ownerState:I,className:(0,w.Z)(N.root,i),ref:n},g,{children:x}))})),A=t(1642),D=t(7247),T=t(3661),F=function(e){var n=e.contactDetales,t=(0,c.I0)();return(0,m.jsxs)(Z,{children:[(0,m.jsx)(N,{sx:{width:[25],height:[25]},src:"/broken-image.jpg"}),n.name,": ",n.number,(0,m.jsx)(A.Z,{variant:"outlined",size:"small",type:"button",id:n.id,onClick:function(e){t((0,T.Er)(e.target.id)),x().Report.success("Success","Contact deleted","Ok",(function(){}))},startIcon:(0,m.jsx)(D.Z,{}),children:"Delete"})]})},E=function(){var e=(0,c.v9)((function(e){return e.filter.value})),n=(0,c.v9)((function(e){return e.contacts.items}));return(0,m.jsx)(p,{children:function(){var t=e.trim().toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(e){return(0,m.jsx)(F,{contactDetales:e},e.id)}))})},B=function(){var e=(0,c.v9)((function(e){return e.contacts.items})),n=(0,c.I0)(),t=(0,l.lr)(),r=(0,a.Z)(t,1)[0];return(0,u.useEffect)((function(){var e=r.get("filter")||"";console.log(e),e||n((0,v.Tv)("")),n((0,v.Tv)(e)),console.log("useEffect")}),[n,r]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Contacts"}),0!==e.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{}),(0,m.jsx)(E,{})]}):(0,m.jsx)("p",{children:"You have no contacts"})]})}},7247:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(1055)},9201:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(7462),o=t(2791),i=t(3366),a=t(8182),u=t(4419),c=t(4036),l=t(2507),s=t(1020),f=t(1217);function d(e){return(0,f.Z)("MuiSvgIcon",e)}(0,t(5878).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=t(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,c.Z)(t.color))],n["fontSize".concat((0,c.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,i,a,u,c,l,s,f,d,v,m,h,p,g,x=e.theme,Z=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=x.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=x.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=x.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(u=x.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=x.typography)||null==(s=l.pxToRem)?void 0:s.call(l,35))||"2.1875"}[Z.fontSize],color:null!=(f=null==(d=(x.vars||x).palette)||null==(v=d[Z.color])?void 0:v.main)?f:{action:null==(m=(x.vars||x).palette)||null==(h=m.action)?void 0:h.active,disabled:null==(p=(x.vars||x).palette)||null==(g=p.action)?void 0:g.disabled,inherit:void 0}[Z.color]}})),p=o.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiSvgIcon"}),o=t.children,s=t.className,f=t.color,p=void 0===f?"inherit":f,g=t.component,x=void 0===g?"svg":g,Z=t.fontSize,S=void 0===Z?"medium":Z,b=t.htmlColor,w=t.inheritViewBox,y=void 0!==w&&w,j=t.titleAccess,z=t.viewBox,k=void 0===z?"0 0 24 24":z,I=(0,i.Z)(t,m),C=(0,r.Z)({},t,{color:p,component:x,fontSize:S,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:k}),M={};y||(M.viewBox=k);var R=function(e){var n=e.color,t=e.fontSize,r=e.classes,o={root:["root","inherit"!==n&&"color".concat((0,c.Z)(n)),"fontSize".concat((0,c.Z)(t))]};return(0,u.Z)(o,d,r)}(C);return(0,v.jsxs)(h,(0,r.Z)({as:x,className:(0,a.Z)(R.root,s),ownerState:C,focusable:"false",color:b,"aria-hidden":!j||void 0,role:j?"img":void 0,ref:n},M,I,{children:[o,j?(0,v.jsx)("title",{children:j}):null]}))}));p.muiName="SvgIcon";var g=p;function x(e,n){var t=function(t,o){return(0,v.jsx)(g,(0,r.Z)({"data-testid":"".concat(n,"Icon"),ref:o},t,{children:e}))};return t.muiName=g.muiName,o.memo(o.forwardRef(t))}},1055:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return u},deprecatedPropType:function(){return c},isMuiElement:function(){return f},ownerDocument:function(){return v},ownerWindow:function(){return m},requirePropFactory:function(){return h},setRef:function(){return p},unstable_ClassNameGenerator:function(){return I},unstable_useEnhancedEffect:function(){return g},unstable_useId:function(){return b},unsupportedProp:function(){return w},useControlled:function(){return y},useEventCallback:function(){return j.Z},useForkRef:function(){return z.Z},useIsFocusVisible:function(){return k.Z}});var r=t(5902),o=t(4036);var i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},a=t(9201);var u=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){e.apply(r,i)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r};var c=function(e,n){return function(){return null}},l=t(2791),s=t.t(l,2);var f=function(e,n){return l.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function d(e){return e&&e.ownerDocument||document}var v=d;var m=function(e){return d(e).defaultView||window};t(7462);var h=function(e,n){return function(){return null}},p=t(2971).Z,g=t(5721).Z,x=t(885),Z=0;var S=s.useId;var b=function(e){if(void 0!==S){var n=S();return null!=e?e:n}return function(e){var n=l.useState(e),t=(0,x.Z)(n,2),r=t[0],o=t[1],i=e||r;return l.useEffect((function(){null==r&&o("mui-".concat(Z+=1))}),[r]),i}(e)};var w=function(e,n,t,r,o){return null};var y=function(e){var n=e.controlled,t=e.default,r=(e.name,e.state,l.useRef(void 0!==n).current),o=l.useState(t),i=(0,x.Z)(o,2),a=i[0],u=i[1];return[r?n:a,l.useCallback((function(e){r||u(e)}),[])]},j=t(6868),z=t(4843),k=t(3031),I={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}}}]);
//# sourceMappingURL=ContactsBook.49f72976.chunk.js.map