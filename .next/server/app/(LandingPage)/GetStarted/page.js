(()=>{var e={};e.id=4594,e.ids=[4594],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},11451:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var o=r(50482),n=r(69108),s=r(62563),a=r.n(s),l=r(68300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d=["",{children:["(LandingPage)",{children:["GetStarted",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,95752)),"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\(LandingPage)\\GetStarted\\page.jsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,37223)),"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\(LandingPage)\\GetStarted\\page.jsx"],u="/(LandingPage)/GetStarted/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(LandingPage)/GetStarted/page",pathname:"/GetStarted",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},16654:(e,t,r)=>{Promise.resolve().then(r.bind(r,88595)),Promise.resolve().then(r.bind(r,15782)),Promise.resolve().then(r.bind(r,46708))},38869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(95344),n=r(15782);r(36236);var s=r(97273);let a=(0,s.default)(async()=>{},{loadableGenerated:{modules:["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\Build\\Cv\\[Resultid]\\components\\resumeTemplates.js -> ./ResumeTemplate/TemplateCv1"]},loading:()=>o.jsx(n.Skeleton,{className:"h-[90%] w-[700px]"}),ssr:!1}),l=(0,s.default)(async()=>{},{loadableGenerated:{modules:["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\Build\\Cv\\[Resultid]\\components\\resumeTemplates.js -> ./ResumeTemplate/TemplateCv2"]},loading:()=>o.jsx(n.Skeleton,{className:"h-[90%] w-full"}),ssr:!1}),i=(0,s.default)(async()=>{},{loadableGenerated:{modules:["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\Build\\Cv\\[Resultid]\\components\\resumeTemplates.js -> ./ResumeTemplate/TemplateCv6"]},loading:()=>o.jsx(n.Skeleton,{className:"h-[90%] w-full"}),ssr:!1}),d="/ResumeTemplate",c=[{name:"Dev Resume 1",component:a,thumbnails:`${d}/template-cv1.svg`},{name:"Dev Resume 2",component:l,thumbnails:`${d}/template-cv2.svg`},{name:"Dev Resume 6",component:i,thumbnails:`${d}/template-cv6.png`}]},75060:(e,t,r)=>{"use strict";r.d(t,{S:()=>a});var o=r(64526);r(28625),r(61364);var n=r(53608),s=r(3729);let a=()=>{let[e,t]=(0,s.useState)(!1),{toast:r}=(0,o.pm)();return{handleDelete:async e=>{t(!0),await n.Z.delete("/api/User/Cv/delete-cv",{data:{id:e}}).then(e=>{r({title:"Success! ✅",description:"Resume deleted"}),setTimeout(()=>{window.location.reload()},3e3)}).catch(()=>{r({title:"Error",description:"An error occurred while deleting the cover letter.",status:"error"})}).finally(()=>{t(!1)})},isDeleting:e}}},27474:(e,t,r)=>{"use strict";r.d(t,{Y:()=>a});var o=r(3729),n=r(28625);let s=async()=>{try{return await n.Z.get({endpoint:"/api/User/Cv/getAllUserCv"})}catch(e){throw e}},a=()=>{let[e,t]=(0,o.useState)([]),[r,n]=(0,o.useState)(!1),[a,l]=(0,o.useState)(!1),[i,d]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async()=>{n(!0),l(!1),d(null);try{let e=await s();t(e.message||[])}catch(e){l(!0),d(e)}finally{n(!1)}})()},[]),{cvData:e,isLoading:r,isError:a,error:i}}},88595:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var o=r(95344);r(3729);var n=r(56506),s=r(39704),a=r(27474),l=r(75060),i=r(38869),d=r(31583),c=r(67417),u=r(84584);let p=({item:e,templateComponents:t})=>{let r=t[e?.templateId||"Dev Resume 1"],{handleDelete:a,isDeleting:i}=(0,l.S)();return(0,o.jsxs)("div",{className:"border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer relative bg-white",children:[(0,o.jsxs)("div",{className:"flex flex-col p-6 items-center",children:[o.jsx("div",{className:"w-20 h-20 mb-4",children:o.jsx(c.l,{src:r,alt:e.templateId,className:"rounded-full"})}),(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsxs)("p",{className:"text-sm text-gray-600",children:["Created:"," ",(0,o.jsxs)("span",{className:"text-gray-800",children:[(0,u.Q)(new Date(e?.createdAt))," ago"]})]}),(0,o.jsxs)("p",{className:"text-sm text-gray-600",children:["Updated:"," ",(0,o.jsxs)("span",{className:"text-gray-800",children:[(0,u.Q)(new Date(e?.updatedAt))," ago"]})]})]}),o.jsx(n.default,{href:`/Build/Cv/${e?.isComplete?e?._id:`?id=${e?._id}`}`,children:o.jsx(s.Button,{className:"bg-yellow-500 text-black mt-4 w-full rounded-lg",children:e?.isComplete?"View":"Continue"})}),o.jsx("p",{className:"text-xs text-gray-500 mt-2",children:e.templateId})]}),o.jsx("div",{className:"absolute top-4 right-4",children:o.jsx(s.Button,{onClick:()=>a(e?._id),disabled:i,className:"bg-red-500 text-white rounded-full p-2",children:i?"Deleting":"Delete"})})]},e?._id)},m=()=>{let{cvData:e,isLoading:t}=(0,a.Y)(),r=i.Z.reduce((e,t)=>(e[t.name]=t.thumbnails,e),{});return t?o.jsx("div",{className:"loading-indicator",children:o.jsx(d.J4,{})}):e.length?o.jsx("div",{className:"flex flex-wrap justify-center items-center gap-8 px-4 py-8",children:e.map(e=>o.jsx("div",{className:"w-full md:w-[300px] lg:w-[350px] bg-white rounded-2xl shadow-md overflow-hidden relative",children:o.jsx(p,{item:e,templateComponents:r})},e._id))}):o.jsx("div",{className:"text-center text-gray-600",children:"No CV history available."})}},36236:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(95344);r(15523);let n=({className:e})=>o.jsx("div",{className:"flex justify-center items-center",children:o.jsx("div",{className:`spinner ${e}`})})},95752:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>er});var o=r(25036),n=r(40002),s=r(86843);let a=(0,s.createProxy)(String.raw`C:\My Files\Teneshu\Talent\Upwork\Dev's Resume Finalizing\Mine\Dev-s-Resume-main\shared\ResumeOptions\index.jsx`),{__esModule:l,$$typeof:i}=a,d=a.default,c=/^\[(.+)\]$/;function u(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let p=/\s+/;function m(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let o="";for(let n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);return o}(e))&&(o&&(o+=" "),o+=t);return o}function f(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let b=/^\[(?:([a-z-]+):)?(.+)\]$/i,g=/^\d+\/\d+$/,x=new Set(["px","full","screen"]),h=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,v=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,y=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,w=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,j=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function k(e){return N(e)||x.has(e)||g.test(e)}function z(e){return U(e,"length",E)}function N(e){return!!e&&!Number.isNaN(Number(e))}function C(e){return U(e,"number",N)}function R(e){return!!e&&Number.isInteger(Number(e))}function T(e){return e.endsWith("%")&&N(e.slice(0,-1))}function P(e){return b.test(e)}function S(e){return h.test(e)}let M=new Set(["length","size","percentage"]);function D(e){return U(e,M,A)}function G(e){return U(e,"position",A)}let _=new Set(["image","url"]);function q(e){return U(e,_,B)}function F(e){return U(e,"",I)}function $(){return!0}function U(e,t,r){let o=b.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))}function E(e){return v.test(e)&&!y.test(e)}function A(){return!1}function I(e){return w.test(e)}function B(e){return j.test(e)}Symbol.toStringTag;let O=function(e){let t,r,o;let n=function(a){var l;return r=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map;function n(n,s){r.set(n,s),++t>e&&(t=0,o=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}((l=[].reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,o=t[0],n=t.length;return function(e){let s;let a=[],l=0,i=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===l){if(c===o&&(r||e.slice(d,d+n)===t)){a.push(e.slice(i,d)),i=d+n;continue}if("/"===c){s=d;continue}}"["===c?l++:"]"===c&&l--}let d=0===a.length?e:e.substring(i),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:a,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:s&&s>i?s-i:void 0}}}(l),...function(e){let t=function(e){var t;let{theme:r,prefix:o}=e,n={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),o?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[o+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,o,n){t.forEach(t=>{if("string"==typeof t){(""===t?r:u(r,t)).classGroupId=o;return}if("function"==typeof t){if(t.isThemeGetter){e(t(n),r,o,n);return}r.validators.push({validator:t,classGroupId:o});return}Object.entries(t).forEach(([t,s])=>{e(s,u(r,t),o,n)})})})(t,n,e,r)}),n}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let o=t[0],n=r.nextPart.get(o),s=n?e(t.slice(1),n):void 0;if(s)return s;if(0===r.validators.length)return;let a=t.join("-");return r.validators.find(({validator:e})=>e(a))?.classGroupId}(r,t)||function(e){if(c.test(e)){let t=c.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}}(l)}).cache.get,o=t.cache.set,n=s,s(a)};function s(e){let n=r(e);if(n)return n;let s=function(e,t){let{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,s=new Set;return e.trim().split(p).map(e=>{let{modifiers:t,hasImportantModifier:n,baseClassName:s,maybePostfixModifierPosition:a}=r(e),l=o(a?s.substring(0,a):s),i=!!a;if(!l){if(!a||!(l=o(s)))return{isTailwindClass:!1,originalClassName:e};i=!1}let d=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:n?d+"!":d,classGroupId:l,originalClassName:e,hasPostfixModifier:i}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:o}=e,a=t+r;return!s.has(a)&&(s.add(a),n(r,o).forEach(e=>s.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return o(e,s),s}return function(){return n(m.apply(null,arguments))}}(function(){let e=f("colors"),t=f("spacing"),r=f("blur"),o=f("brightness"),n=f("borderColor"),s=f("borderRadius"),a=f("borderSpacing"),l=f("borderWidth"),i=f("contrast"),d=f("grayscale"),c=f("hueRotate"),u=f("invert"),p=f("gap"),m=f("gradientColorStops"),b=f("gradientColorStopPositions"),g=f("inset"),x=f("margin"),h=f("opacity"),v=f("padding"),y=f("saturate"),w=f("scale"),j=f("sepia"),M=f("skew"),_=f("space"),U=f("translate"),E=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto",P,t],B=()=>[P,t],O=()=>["",k,z],Z=()=>["auto",N,P],L=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],Q=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",P],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],J=()=>[N,C],X=()=>[N,P];return{cacheSize:500,separator:":",theme:{colors:[$],spacing:[k,z],blur:["none","",S,P],brightness:J(),borderColor:[e],borderRadius:["none","","full",S,P],borderSpacing:B(),borderWidth:O(),contrast:J(),grayscale:V(),hueRotate:X(),invert:V(),gap:B(),gradientColorStops:[e],gradientColorStopPositions:[T,z],inset:I(),margin:I(),opacity:J(),padding:B(),saturate:J(),scale:J(),sepia:V(),skew:X(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",P]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...L(),P]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R,P]}],basis:[{basis:I()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",P]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",R,P]}],"grid-cols":[{"grid-cols":[$]}],"col-start-end":[{col:["auto",{span:["full",R,P]},P]}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":[$]}],"row-start-end":[{row:["auto",{span:[R,P]},P]}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",P]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",P]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",P,t]}],"min-w":[{"min-w":[P,t,"min","max","fit"]}],"max-w":[{"max-w":[P,t,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[P,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[P,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[P,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[P,t,"auto","min","max","fit"]}],"font-size":[{text:["base",S,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",C]}],"font-family":[{font:[$]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",P]}],"line-clamp":[{"line-clamp":["none",N,C]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",k,P]}],"list-image":[{"list-image":["none",P]}],"list-style-type":[{list:["none","disc","decimal",P]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",k,z]}],"underline-offset":[{"underline-offset":["auto",k,P]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",P]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",P]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...L(),G]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",D]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},q]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:W()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[k,P]}],"outline-w":[{outline:[k,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:O()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[k,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,F]}],"shadow-color":[{shadow:[$]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",S,P]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",P]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",P]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",P]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[R,P]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",P]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",P]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",P]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[k,z,C]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function Z(...e){return O(function(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}(e))}n.forwardRef(({className:e,...t},r)=>o.jsx("div",{ref:r,className:Z("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",e),...t})).displayName="Card",n.forwardRef(({className:e,...t},r)=>o.jsx("div",{ref:r,className:Z("flex flex-col space-y-1.5 p-6",e),...t})).displayName="CardHeader",n.forwardRef(({className:e,...t},r)=>o.jsx("h3",{ref:r,className:Z("text-2xl font-semibold leading-none tracking-tight",e),...t})).displayName="CardTitle",n.forwardRef(({className:e,...t},r)=>o.jsx("p",{ref:r,className:Z("text-sm text-slate-500 dark:text-slate-400",e),...t})).displayName="CardDescription",n.forwardRef(({className:e,...t},r)=>o.jsx("div",{ref:r,className:Z("p-6 pt-0",e),...t})).displayName="CardContent",n.forwardRef(({className:e,...t},r)=>o.jsx("div",{ref:r,className:Z("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter";let L=(0,s.createProxy)(String.raw`C:\My Files\Teneshu\Talent\Upwork\Dev's Resume Finalizing\Mine\Dev-s-Resume-main\components\ui\skeleton.jsx`),{__esModule:W,$$typeof:H}=L;L.default;let Q=(0,s.createProxy)(String.raw`C:\My Files\Teneshu\Talent\Upwork\Dev's Resume Finalizing\Mine\Dev-s-Resume-main\components\ui\skeleton.jsx#Skeleton`),V=()=>o.jsx("div",{className:"flex justify-center items-center space-x-4",children:Array.from({length:3}).map((e,t)=>(0,o.jsxs)("div",{className:"p-4 max-w-sm w-full",children:[o.jsx(Q,{className:"h-6 w-3/4 mb-2"}),o.jsx(Q,{className:"h-32 w-32 mb-4"}),o.jsx(Q,{className:"h-4 w-full mb-4"})," ",o.jsx(Q,{className:"h-4 w-5/6 mb-4"})," ",o.jsx(Q,{className:"h-10 w-24"})]},t))}),Y=(0,s.createProxy)(String.raw`C:\My Files\Teneshu\Talent\Upwork\Dev's Resume Finalizing\Mine\Dev-s-Resume-main\app\Build\shared\ResumeHistory\index.jsx`),{__esModule:J,$$typeof:X}=Y,K=Y.default,ee=async()=>(0,o.jsxs)(o.Fragment,{children:[o.jsx(n.Suspense,{fallback:o.jsx(V,{}),children:o.jsx(d,{className:"flex justify-center gap-x-8 items-center"})}),o.jsx("h1",{className:"text-center text-4xl text-bold my-5",children:"Continue"}),o.jsx(K,{})]});var et=r(32458);let er=()=>o.jsx("div",{children:o.jsx(n.Suspense,{fallback:o.jsx(et.Z,{}),children:o.jsx(ee,{})})})},32458:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(25036);r(71031);let n=({className:e})=>o.jsx("div",{className:"flex justify-center items-center",children:o.jsx("div",{className:`spinner ${e}`})})},71031:()=>{},15523:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[1638,9933,337,9213,4664,2136,3608,4057,4919,8135,2296,1273,833,7952,6708],()=>r(11451));module.exports=o})();