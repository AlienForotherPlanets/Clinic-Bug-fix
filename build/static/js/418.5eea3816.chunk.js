"use strict";(self.webpackChunkSnehi_Clinic=self.webpackChunkSnehi_Clinic||[]).push([[418],{14387:function(e,t,n){n(72791);t.Z=n.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},35878:function(e,t,n){var o=n(72791);t.Z=()=>{const e=(0,o.useRef)(!0);return(0,o.useEffect)((()=>()=>{e.current=!1}),[]),e}},98393:function(e,t,n){var o=n(67414),r=n(20890),a=n(50533),i=n(80184);t.Z=()=>(0,i.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(r.Z,{variant:"subtitle2",component:a.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,i.jsx)(r.Z,{variant:"subtitle2",component:a.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},45290:function(e,t,n){var o=n(64554),r=n(23735),a=n(80184);t.Z=e=>{let{children:t,...n}=e;return(0,a.jsx)(r.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,children:(0,a.jsx)(o.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},33914:function(e,t,n){const o=(0,n(66934).ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh"}}));t.Z=o},25418:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var o=n(43504),r=n(13967),a=n(95193),i=n(61889),s=n(67414),l=n(20890),c=n(94721),d=n(33914),h=n(45290),u=n(72791),p=n(59434),m=n(24518),x=n(64554),g=n(68096),v=n(30829),b=n(28029),Z=n(47071),f=n(63466),y=n(13400),j=n(85523),S=n(94454),w=n(81724),z=n(55705),C=n(35878),I=n(50752),k=n(3746),P=n(20165),R=n(14387),E=n(80184);var W=e=>{let{...t}=e;const n=(0,r.Z)(),o=(0,C.Z)(),d=(0,a.Z)(n.breakpoints.down("md")),h=(0,p.v9)((e=>e.customization)),[W,B]=(0,u.useState)(!0),[F,M]=(0,u.useState)(!1),L=()=>{M(!F)},N=e=>{e.preventDefault()};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(I.Z,{children:(0,E.jsxs)(m.Z,{disableElevation:!0,fullWidth:!0,onClick:async()=>{console.error("Login")},size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:n.palette.grey[50],borderColor:n.palette.grey[100]},children:[(0,E.jsx)(x.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,E.jsx)("img",{src:R.Z,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign in with Google"]})})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsxs)(x.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,E.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,E.jsx)(m.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"".concat(n.palette.grey[100]," !important"),color:"".concat(n.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(h.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),(0,E.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,E.jsx)(x.Z,{sx:{mb:2},children:(0,E.jsx)(l.Z,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),(0,E.jsx)(z.J9,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:w.Ry().shape({email:w.Z_().email("Must be a valid email").max(255).required("Email is required"),password:w.Z_().max(255).required("Password is required")}),onSubmit:async(e,t)=>{let{setErrors:n,setStatus:r,setSubmitting:a}=t;try{o.current&&(r({success:!0}),a(!1))}catch(i){console.error(i),o.current&&(r({success:!1}),n({submit:i.message}),a(!1))}},children:e=>{let{errors:o,handleBlur:r,handleChange:a,handleSubmit:i,isSubmitting:c,touched:d,values:h}=e;return(0,E.jsxs)("form",{noValidate:!0,onSubmit:i,...t,children:[(0,E.jsxs)(g.Z,{fullWidth:!0,error:Boolean(d.email&&o.email),sx:{...n.typography.customInput},children:[(0,E.jsx)(v.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,E.jsx)(b.Z,{id:"outlined-adornment-email-login",type:"email",value:h.email,name:"email",onBlur:r,onChange:a,label:"Email Address / Username",inputProps:{}}),d.email&&o.email&&(0,E.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:o.email})]}),(0,E.jsxs)(g.Z,{fullWidth:!0,error:Boolean(d.password&&o.password),sx:{...n.typography.customInput},children:[(0,E.jsx)(v.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,E.jsx)(b.Z,{id:"outlined-adornment-password-login",type:F?"text":"password",value:h.password,name:"password",onBlur:r,onChange:a,endAdornment:(0,E.jsx)(f.Z,{position:"end",children:(0,E.jsx)(y.Z,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:N,edge:"end",size:"large",children:F?(0,E.jsx)(k.Z,{}):(0,E.jsx)(P.Z,{})})}),label:"Password",inputProps:{}}),d.password&&o.password&&(0,E.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:o.password})]}),(0,E.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,E.jsx)(j.Z,{control:(0,E.jsx)(S.Z,{checked:W,onChange:e=>B(e.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),(0,E.jsx)(l.Z,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),o.submit&&(0,E.jsx)(x.Z,{sx:{mt:3},children:(0,E.jsx)(Z.Z,{error:!0,children:o.submit})}),(0,E.jsx)(x.Z,{sx:{mt:2},children:(0,E.jsx)(I.Z,{children:(0,E.jsx)(m.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})]})},B=n(24904),F=n(98393);var M=()=>{const e=(0,r.Z)(),t=(0,a.Z)(e.breakpoints.down("md"));return(0,E.jsx)(d.Z,{children:(0,E.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(i.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,E.jsx)(i.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,E.jsx)(h.Z,{children:(0,E.jsxs)(i.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,E.jsx)(i.ZP,{item:!0,sx:{mb:3},children:(0,E.jsx)(o.rU,{to:"#",children:(0,E.jsx)(B.Z,{})})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(i.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,E.jsx)(i.ZP,{item:!0,children:(0,E.jsxs)(s.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,E.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),(0,E.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(W,{})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(c.Z,{})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(i.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,E.jsx)(l.Z,{component:o.rU,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,E.jsx)(F.Z,{})})]})})}},91793:function(e,t,n){const o=n(72791).createContext({});t.Z=o},24518:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(63366),r=n(87462),a=n(72791),i=n(28182),s=n(35735),l=n(94419),c=n(12065),d=n(66934),h=n(93736),u=n(95080),p=n(14036),m=n(21217);function x(e){return(0,m.Z)("MuiButton",e)}var g=(0,n(75878).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=n(91793),b=n(80184);const Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,p.Z)(n.color))],t["size".concat((0,p.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,p.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:n}=e;var o,a;return(0,r.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:"1px solid ".concat((t.vars||t).palette[n.color].main),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}),"&:active":(0,r.Z)({},"contained"===n.variant&&{boxShadow:(t.vars||t).shadows[8]}),["&.".concat(g.focusVisible)]:(0,r.Z)({},"contained"===n.variant&&{boxShadow:(t.vars||t).shadows[6]}),["&.".concat(g.disabled)]:(0,r.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===n.variant&&{border:"1px solid ".concat((t.vars||t).palette.action.disabledBackground)},"outlined"===n.variant&&"secondary"===n.color&&{border:"1px solid ".concat((t.vars||t).palette.action.disabled)},"contained"===n.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===n.variant&&"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main,border:t.vars?"1px solid rgba(".concat(t.vars.palette[n.color].mainChannel," / 0.5)"):"1px solid ".concat((0,c.Fq)(t.palette[n.color].main,.5))},"contained"===n.variant&&{color:t.vars?t.vars.palette.text.primary:null==(o=(a=t.palette).getContrastText)?void 0:o.call(a,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(g.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(g.disabled)]:{boxShadow:"none"}}})),j=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t["iconSize".concat((0,p.Z)(n.size))]]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},f(t))})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t["iconSize".concat((0,p.Z)(n.size))]]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},f(t))}));var w=a.forwardRef((function(e,t){const n=a.useContext(v.Z),c=(0,s.Z)(n,e),d=(0,h.Z)({props:c,name:"MuiButton"}),{children:u,color:m="primary",component:g="button",className:f,disabled:w=!1,disableElevation:z=!1,disableFocusRipple:C=!1,endIcon:I,focusVisibleClassName:k,fullWidth:P=!1,size:R="medium",startIcon:E,type:W,variant:B="text"}=d,F=(0,o.Z)(d,Z),M=(0,r.Z)({},d,{color:m,component:g,disabled:w,disableElevation:z,disableFocusRipple:C,fullWidth:P,size:R,type:W,variant:B}),L=(e=>{const{color:t,disableElevation:n,fullWidth:o,size:a,variant:i,classes:s}=e,c={root:["root",i,"".concat(i).concat((0,p.Z)(t)),"size".concat((0,p.Z)(a)),"".concat(i,"Size").concat((0,p.Z)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,p.Z)(a))],endIcon:["endIcon","iconSize".concat((0,p.Z)(a))]},d=(0,l.Z)(c,x,s);return(0,r.Z)({},s,d)})(M),N=E&&(0,b.jsx)(j,{className:L.startIcon,ownerState:M,children:E}),V=I&&(0,b.jsx)(S,{className:L.endIcon,ownerState:M,children:I});return(0,b.jsxs)(y,(0,r.Z)({ownerState:M,className:(0,i.Z)(f,n.className),component:g,disabled:w,focusRipple:!C,focusVisibleClassName:(0,i.Z)(L.focusVisible,k),ref:t,type:W},F,{classes:L,children:[N,u,V]}))}))}}]);
//# sourceMappingURL=418.5eea3816.chunk.js.map