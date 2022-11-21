"use strict";(self.webpackChunkSnehi_Clinic=self.webpackChunkSnehi_Clinic||[]).push([[478],{70478:function(e,t,s){s.d(t,{Z:function(){return q}});var n=s(63366),a=s(87462),c=s(72791),o=s(50931);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{baseClasses:t,newClasses:s,Component:n}=e;if(!s)return t;const c=(0,a.Z)({},t);return Object.keys(s).forEach((e=>{s[e]&&(c[e]="".concat(t[e]," ").concat(s[e]))})),c}var l={set:(e,t,s,n)=>{let a=e.get(t);a||(a=new Map,e.set(t,a)),a.set(s,n)},get:(e,t,s)=>{const n=e.get(t);return n?n.get(s):void 0},delete:(e,t,s)=>{e.get(t).delete(s)}},i=s(29598),u=s(20919);const h=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var f=s(93141),d=s(96625),m=s(72190),y=s(87882),p=s(25068),C=s(67430),S=s(21264);s(80184);const g=(0,o.Ue)({plugins:[(0,f.Z)(),(0,d.Z)(),(0,m.Z)(),(0,y.Z)(),(0,p.Z)(),"undefined"===typeof window?null:(0,C.Z)(),(0,S.Z)()]}),v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{disableGlobal:t=!1,productionPrefix:s="jss",seed:n=""}=e,a=""===n?"":"".concat(n,"-");let c=0;const o=()=>(c+=1,c);return(e,c)=>{const r=c.options.name;if(r&&0===r.indexOf("Mui")&&!c.options.link&&!t){if(-1!==h.indexOf(e.key))return"Mui-".concat(e.key);const t="".concat(a).concat(r,"-").concat(e.key);return c.options.theme[u.Z]&&""===n?"".concat(t,"-").concat(o()):t}return"".concat(a).concat(s).concat(o())}}(),Z={disableGeneration:!1,generateClassName:v,jss:g,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},b=c.createContext(Z);let k=-1e9;function O(){return k+=1,k}var w=s(82466),x=s(27312);const M=["variant"];function j(e){return 0===e.length}function P(e){const t="function"===typeof e;return{create:(s,c)=>{let o;try{o=t?e(s):e}catch(u){throw u}if(!c||!s.components||!s.components[c]||!s.components[c].styleOverrides&&!s.components[c].variants)return o;const r=s.components[c].styleOverrides||{},l=s.components[c].variants||[],i=(0,a.Z)({},o);return Object.keys(r).forEach((e=>{i[e]=(0,w.Z)(i[e]||{},r[e])})),l.forEach((e=>{const t=function(e){const{variant:t}=e,s=(0,n.Z)(e,M);let a=t||"";return Object.keys(s).sort().forEach((t=>{a+="color"===t?j(a)?e[t]:(0,x.Z)(e[t]):"".concat(j(a)?t:(0,x.Z)(t)).concat((0,x.Z)(e[t].toString()))})),a}(e.props);i[t]=(0,w.Z)(i[t]||{},e.style)})),i},options:{}}}var E={};const G=["name","classNamePrefix","Component","defaultTheme"];function N(e,t,s){let{state:n,stylesOptions:a}=e;if(a.disableGeneration)return t||{};n.cacheClasses||(n.cacheClasses={value:null,lastProp:null,lastJSS:{}});let c=!1;return n.classes!==n.cacheClasses.lastJSS&&(n.cacheClasses.lastJSS=n.classes,c=!0),t!==n.cacheClasses.lastProp&&(n.cacheClasses.lastProp=t,c=!0),c&&(n.cacheClasses.value=r({baseClasses:n.cacheClasses.lastJSS,newClasses:t,Component:s})),n.cacheClasses.value}function R(e,t){let{state:s,theme:n,stylesOptions:c,stylesCreator:i,name:u}=e;if(c.disableGeneration)return;let h=l.get(c.sheetsManager,i,n);h||(h={refs:0,staticSheet:null,dynamicStyles:null},l.set(c.sheetsManager,i,n,h));const f=(0,a.Z)({},i.options,c,{theme:n,flip:"boolean"===typeof c.flip?c.flip:"rtl"===n.direction});f.generateId=f.serverGenerateClassName||f.generateClassName;const d=c.sheetsRegistry;if(0===h.refs){let e;c.sheetsCache&&(e=l.get(c.sheetsCache,i,n));const t=i.create(n,u);e||(e=c.jss.createStyleSheet(t,(0,a.Z)({link:!1},f)),e.attach(),c.sheetsCache&&l.set(c.sheetsCache,i,n,e)),d&&d.add(e),h.staticSheet=e,h.dynamicStyles=(0,o._$)(t)}if(h.dynamicStyles){const e=c.jss.createStyleSheet(h.dynamicStyles,(0,a.Z)({link:!0},f));e.update(t),e.attach(),s.dynamicSheet=e,s.classes=r({baseClasses:h.staticSheet.classes,newClasses:e.classes}),d&&d.add(e)}else s.classes=h.staticSheet.classes;h.refs+=1}function J(e,t){let{state:s}=e;s.dynamicSheet&&s.dynamicSheet.update(t)}function _(e){let{state:t,theme:s,stylesOptions:n,stylesCreator:a}=e;if(n.disableGeneration)return;const c=l.get(n.sheetsManager,a,s);c.refs-=1;const o=n.sheetsRegistry;0===c.refs&&(l.delete(n.sheetsManager,a,s),n.jss.removeStyleSheet(c.staticSheet),o&&o.remove(c.staticSheet)),t.dynamicSheet&&(n.jss.removeStyleSheet(t.dynamicSheet),o&&o.remove(t.dynamicSheet))}function T(e,t){const s=c.useRef([]);let n;const a=c.useMemo((()=>({})),t);s.current!==a&&(s.current=a,n=e()),c.useEffect((()=>()=>{n&&n()}),[a])}function q(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{name:s,classNamePrefix:o,Component:r,defaultTheme:l=E}=t,u=(0,n.Z)(t,G),h=P(e),f=s||o||"makeStyles";h.options={index:O(),name:s,meta:f,classNamePrefix:f};const d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,i.Z)()||l,n=(0,a.Z)({},c.useContext(b),u),o=c.useRef(),f=c.useRef();T((()=>{const a={name:s,state:{},stylesCreator:h,stylesOptions:n,theme:t};return R(a,e),f.current=!1,o.current=a,()=>{_(a)}}),[t,h]),c.useEffect((()=>{f.current&&J(o.current,e),f.current=!0}));const d=N(o.current,e.classes,r);return d};return d}}}]);
//# sourceMappingURL=478.1146b44b.chunk.js.map