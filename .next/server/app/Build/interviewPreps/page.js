(()=>{var e={};e.id=9506,e.ids=[9506],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},89275:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>o});var i=s(50482),n=s(69108),r=s(62563),a=s.n(r),l=s(68300),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);s.d(t,d);let o=["",{children:["Build",{children:["interviewPreps",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,73394)),"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\Build\\interviewPreps\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,37223)),"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\Build\\interviewPreps\\page.jsx"],c="/Build/interviewPreps/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/Build/interviewPreps/page",pathname:"/Build/interviewPreps",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},18578:(e,t,s)=>{Promise.resolve().then(s.bind(s,29709))},29709:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var i=s(95344),n=s(1728),r=s(95532);s(3729);let a=()=>{let{steps:e,currentStep:t,handleStepChangeBack:s}=r.BK.store(e=>({steps:e.steps,currentStep:e.currentStep,handleStepChangeBack:e.handleStepChangeBack}));return i.jsx("div",{className:"max-w-[90%] mx-auto my-20",children:i.jsx(n.Z,{steps:e,currentStep:t,handleStepChangeBack:s,type:"interviewPreps"})})}},1728:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var i=s(95344),n=s(8428),r=s(59623),a=s(73644),l=s(29213),d=s(4664),o=s(2134),u=s(97273),c=s(36236),p=s(31583);let x=(0,u.default)(async()=>{},{loadableGenerated:{modules:["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\shared\\Build\\Stepper.jsx -> ./PaginateBoxMobile"]},ssr:!1,loading:()=>i.jsx(c.Z,{})}),m=(0,u.default)(async()=>{},{loadableGenerated:{modules:["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\shared\\Build\\Stepper.jsx -> ./PaginateBox"]},ssr:!1,loading:()=>i.jsx(p.O2,{})}),h=({currentStep:e,handleStepChangeBack:t,steps:s,type:u})=>{let c=(0,n.useRouter)(),p=(0,r.Q)("id"),{incrementSteps:h}=(0,o.w)(u);return(0,i.jsxs)("div",{className:"flex items-start flex-col md:flex-row gap-x-10 w-full",children:[i.jsx("div",{className:"hidden md:block",style:{width:"30%"},children:i.jsx(m,{text:s[e]?.title,currentStep:e,steps:s,incrementSteps:h})}),i.jsx("div",{className:"md:hidden flex justify-center items-center w-full ",children:i.jsx(x,{text:s[e]?.title,currentStep:e,steps:s,incrementSteps:h})}),(0,i.jsxs)("div",{className:"w-full md:w-[70%] flex flex-col justify-between",style:{height:"100%"},children:[i.jsx(a.M,{mode:"wait",className:"h-[500]",children:i.jsx(l.E.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},transition:{duration:.2},className:"w-full rounded-lg",children:i.jsx("div",{className:"w-full",children:s[e||0]?.content})},e)}),(0,i.jsxs)("div",{className:"flex justify-between items-end mt-10",style:{display:"flex",alignItems:"end"},children:[(0,i.jsxs)("button",{onClick:t,className:"text-gray-800  py-2 px-4 rounded-l flex items-center gap-x-2",children:[i.jsx(d.Y4O,{}),i.jsx("span",{children:" Go Back"})]}),i.jsx("div",{onClick:function(){if(s.length===e+1&&p)return c.push(`/Build/${u}/${p}`);h()},children:i.jsx("button",{className:"text-gray-800  py-2 px-4 rounded-l",children:"Skip"})})]})]})]})}},36236:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var i=s(95344);s(15523);let n=({className:e})=>i.jsx("div",{className:"flex justify-center items-center",children:i.jsx("div",{className:`spinner ${e}`})})},73394:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var i=s(25036),n=s(40002);let r=(0,s(86843).createProxy)(String.raw`C:\My Files\Teneshu\Talent\Upwork\Dev's Resume Finalizing\Mine\Dev-s-Resume-main\app\Build\interviewPreps\index.jsx`),{__esModule:a,$$typeof:l}=r,d=r.default;var o=s(32458);let u=()=>i.jsx("div",{children:i.jsx(n.Suspense,{fallback:i.jsx(o.Z,{}),children:i.jsx(d,{})})})},32458:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var i=s(25036);s(71031);let n=({className:e})=>i.jsx("div",{className:"flex justify-center items-center",children:i.jsx("div",{className:`spinner ${e}`})})},71031:()=>{},15523:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[1638,9933,337,9213,4664,704,1273,5441],()=>s(89275));module.exports=i})();