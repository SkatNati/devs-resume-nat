(()=>{var e={};e.id=348,e.ids=[348],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},3380:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c});var s=r(50482),a=r(69108),i=r(62563),n=r.n(i),l=r(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["Build",{children:["interviewPreps",{children:["[results]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,71204)),"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\Build\\interviewPreps\\[results]\\page.jsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,37223)),"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\Build\\interviewPreps\\[results]\\page.jsx"],u="/Build/interviewPreps/[results]/page",m={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/Build/interviewPreps/[results]/page",pathname:"/Build/interviewPreps/[results]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},77269:(e,t,r)=>{Promise.resolve().then(r.bind(r,86879))},86879:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(95344),a=r(3729),i=r(31583);r(92760),r(9282),r(59623);var n=r(53608),l=r(8428);let o=()=>{let[e,t]=(0,a.useState)(),{results:r}=(0,l.useParams)("results");return{updateinterviewPrep:async e=>{t(!0);try{let t=`${window.location.origin}/api/User/interview-preps/create-interviewPrep/${r}`;return await n.Z.patch(t,e)}catch(e){}finally{t(!1)}},isLoading:e}};var c=r(28625);let d=()=>{let{results:e}=(0,l.useParams)("results"),[t,r]=(0,a.useState)(),[s,i]=(0,a.useState)(!0),[n,o]=(0,a.useState)(null);async function d(){i(!0);let t=`/api/User/interview-preps/${e}`;try{let e=await c.Z.get({endpoint:t});r(e.message)}catch(e){o(!0)}finally{i(!1)}}return(0,a.useEffect)(()=>{d()},[]),{data:t,loading:s,error:n,getSingleInterviewPreps:d}},u=()=>{let{data:e,loading:t,error:r,getSingleInterviewPreps:s}=d(),{updateinterviewPrep:i}=o(),[n,l]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[m,h]=(0,a.useState)(""),[x,p]=(0,a.useState)(""),[f,g]=(0,a.useState)(""),[v,b]=(0,a.useState)(""),[w,y]=(0,a.useState)(""),[j,k]=(0,a.useState)(""),[N,S]=(0,a.useState)(!1);(0,a.useEffect)(()=>{e&&(l(e.company),u(e.summary),h(e.skills.join("\n• ")),p(e.behavioralQuestions.join("\n• ")),g(e.technicalQuestions.join("\n• ")),b(e.projectDescription.join("\n• ")),y(e.additionalProject?.join("\n• ")),k(e.questionsForInterviewers.join("\n• ")))},[e]);let E=async()=>{let e={company:n,summary:c,skills:m.split("\n• "),behavioralQuestions:x.split("\n• "),technicalQuestions:f.split("\n• "),projectDescription:v.split("\n• "),additionalProject:w.split("\n• "),questionsForInterviewers:j.split("\n• ")};S(!0);try{await i(e),s()}catch(e){console.error("Error updating interview preparation:",e),alert("Failed to update interview preparation")}finally{S(!1)}};return{company:n,summary:c,skills:m,behavioralQuestions:x,technicalQuestions:f,projectDescription:v,additionalProject:w,questionsForInterviewers:j,isSaving:N,loading:t,error:r,setCompany:l,setSummary:u,setSkills:h,setBehavioralQuestions:p,setTechnicalQuestions:g,setProjectDescription:b,setadditionalProject:y,setQuestionsForInterviewers:k,handleUpdate:E}};var m=r(5322),h=r(46160),x=r(39704);let p=()=>{let{company:e,summary:t,skills:r,behavioralQuestions:n,technicalQuestions:o,projectDescription:c,additionalProject:d,questionsForInterviewers:p,isSaving:f,loading:g,error:v,setCompany:b,setSummary:w,setSkills:y,setBehavioralQuestions:j,setTechnicalQuestions:k,setProjectDescription:N,setadditionalProject:S,setQuestionsForInterviewers:E,handleUpdate:P}=u(),{downloadPdfDocument:C,isLoading:q}=(0,m.j)(),{getUserSubscription:R,subscription:O,loadingSubscription:T}=(0,h.Z)(),A=(0,l.useRouter)(),[D,B]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(async()=>{await R(),B(!0)})()},[]);let _=async()=>{D&&!T&&C("interviewPrep")};return g?s.jsx("div",{className:"loading-indicator",children:s.jsx(i.J4,{})}):v?s.jsx("div",{children:"Error loading data"}):(0,s.jsxs)("div",{className:"bg-gray-50 px-14 py-4",children:[(0,s.jsxs)(x.Button,{onClick:()=>A.push("/dashboard"),className:"flex items-center bg-[#0f172a] text-white font-semibold py-2 px-4 rounded-lg shadow-md ml-8",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4 mr-2",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),"Dashboard"]}),(0,s.jsxs)("div",{className:"p-8 bg- md:max-w-[70%] w-full mx-auto bg-white",children:[s.jsx("h1",{className:"text-3xl font-bold mb-6 text-gray-900 bg-[#F3ECBC] py-2 px-2",children:"Interview Preparation"}),(0,s.jsxs)("div",{id:"resumePreview",children:[(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("h2",{className:"text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1",children:"About the company"}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:e,onChange:e=>b(e.target.value),rows:"3"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("h2",{className:"text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1",children:"About me"}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("h3",{className:"font-medium mb-1 text-gray-700",children:s.jsx("b",{children:"Summary"})}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:t,onChange:e=>w(e.target.value),rows:"3"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("h3",{className:"font-medium mb-1 text-gray-700",children:s.jsx("b",{children:"Skills"})}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:r,onChange:e=>y(e.target.value),rows:"3"})]})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("div",{className:"py-2 bg-[#EEEEEE] px-2 my-1 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1",children:s.jsx("b",{children:"Questions"})}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("h2",{className:"text-xl font-semibold mb-2 text-gray-800",children:s.jsx("b",{children:"Technical"})}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:o,onChange:e=>k(e.target.value),rows:"5"})]}),s.jsx("h2",{className:"text-xl font-semibold mb-2 text-gray-800",children:s.jsx("b",{children:"Behavioral"})}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:n,onChange:e=>j(e.target.value),rows:"5"})]}),s.jsx("div",{className:"py-2 bg-[#EEEEEE] px-2 my-1",children:s.jsx("b",{children:"Project"})}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("h2",{className:"text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1",children:"Project 1: Custom Webpart"}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:c,onChange:e=>N(e.target.value),rows:"5"}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:d,onChange:e=>S(e.target.value),rows:"5"})]}),(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1",children:"Questions for Interviewers"}),s.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar",value:p,onChange:e=>E(e.target.value),rows:"5"})]})]}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[s.jsx("button",{onClick:P,className:"mt-4 px-4 py-2 bg-black text-white rounded-md",disabled:f,children:f?"Saving...":"Save"}),s.jsx("button",{disabled:q||T,onClick:_,className:"mt-4 px-4 py-2 bg-[#F9E547] text-black rounded-md",children:q||T?"loading..":"Download as PDF"})]})]})]})}},5322:(e,t,r)=>{"use strict";r.d(t,{j:()=>n});var s=r(3729),a=r(9282),i=r(92760);let n=()=>{let[e,t]=(0,s.useState)(!1);return{downloadPdfDocument:async e=>{t(!0);try{let t=document.getElementById("resumePreview");if(!t)throw Error("Element with ID 'resumePreview' not found.");let{width:r,height:s}=t.getBoundingClientRect(),n=await (0,a.default)(t,{scale:2,useCORS:!0,logging:!0,allowTaint:!1}),l=n.toDataURL("image/png"),o=new i.ZP("portrait","px",[n.width,n.height]),c=o.internal.pageSize.getWidth(),d=o.internal.pageSize.getHeight(),u=0;for(;u<s;)o.addImage(l,"PNG",0,-(n.height/s*u),c,n.height*c/n.width),(u+=d)<s&&o.addPage();let m={coverLetter:"CoverLetter.pdf",resume:"Resume.pdf",interviewPrep:"InterviewPrep.pdf"}[e]||"Document.pdf";console.log("Saving file as:",m),o.save(m)}catch(e){console.error("Error while downloading the PDF document:",e)}finally{t(!1)}},isLoading:e}}},39704:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Button:()=>u,ButtonIcon:()=>m,buttonVariants:()=>d});var s=r(95344),a=r(3729),i=r(4664),n=r(32751),l=r(29213),o=r(88720),c=r(59127);let d=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{defaultVariants:{size:"default",variant:"default"},variants:{size:{auth:"h-11 w-full font-semibold text-base",default:"h-12 px-4 py-2 text-base",icon:"h-10 w-10",lg:"h-12 lg:h-[3.75rem] rounded-md px-7  text-lg",sm:"h-9 rounded-md px-3"},variant:{default:"bg-primaryx text-slate-50 hover:bg-primaryx-500/90 dark:bg-primaryx dark:text-slate-900 dark:hover:bg-primaryx-800",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 text-primaryx-500",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",outline:"border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80"}}}),u=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,hasAnimaion:i=!1,...o},u)=>{let m=a?n.g7:"button";return i?s.jsx(l.E.div,{className:"w-full ",whileHover:{scale:1.05},whileTap:{scale:.95},children:s.jsx(m,{className:(0,c.cn)(d({className:e,size:r,variant:t})),ref:u,...o})}):s.jsx(m,{className:(0,c.cn)(d({className:e,size:r,variant:t})),ref:u,...o})});u.displayName="Button";let m=({id:e})=>s.jsx(u,{id:e,variant:"outline",className:"h-7 w-7 rounded-full border-primaryx text-primaryx",size:"icon",children:s.jsx(i.XCv,{className:"h-4 w-4 text-sm"})});m.displayName="ButtonIcon"},42465:(e,t,r)=>{"use strict";r.d(t,{Ol:()=>l,Zb:()=>n,aY:()=>c,ll:()=>o});var s=r(95344),a=r(3729),i=r(59127);let n=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",e),...t}));n.displayName="Card";let l=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let o=a.forwardRef(({className:e,...t},r)=>s.jsx("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle",a.forwardRef(({className:e,...t},r)=>s.jsx("p",{ref:r,className:(0,i.cn)("text-sm text-slate-500 dark:text-slate-400",e),...t})).displayName="CardDescription";let c=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent",a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},15782:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Skeleton:()=>i});var s=r(95344),a=r(59127);function i({className:e,...t}){return s.jsx("div",{className:(0,a.cn)("animate-pulse rounded-md bg-gray-300 dark:bg-gray-800",e),...t})}},1356:(e,t,r)=>{"use strict";var s=function(){return(s=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>t.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(r[s[a]]=e[s[a]]);return r};t.kT=t.d8=t.ej=t.$1=void 0;var i=r(76334),n=function(){return!1},l=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},o=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&l(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&l(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&l(e.cookies())},c=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,s=e.value;t[r]=s}),t},d=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(t){return e}};t.$1=function(e){if(o(e)){if(null==e?void 0:e.req)return c(e.req.cookies);if(null==e?void 0:e.cookies)return c(e.cookies())}if(e&&(t=e.req),!n())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,i.parse)(t.headers.cookie):{};for(var t,r={},s=document.cookie?document.cookie.split("; "):[],a=0,l=s.length;a<l;a++){var d=s[a].split("="),u=d.slice(1).join("=");r[d[0]]=u}return r},t.ej=function(e,r){var s=(0,t.$1)(r)[e];if(void 0!==s)return s?s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):s},t.d8=function(e,t,r){if(o(r)){var l,c,u,m=r.req,h=r.res,x=r.cookies,p=a(r,["req","res","cookies"]),f=s({name:e,value:t},p);m&&m.cookies.set(f),h&&h.cookies.set(f),x&&x().set(f);return}if(r){var m=r.req,h=r.res,g=a(r,["req","res"]);c=m,u=h,l=g}var v=(0,i.serialize)(e,d(t),s({path:"/"},l));if(n())document.cookie=v;else if(u&&c){var b=u.getHeader("Set-Cookie");if(Array.isArray(b)||(b=b?[String(b)]:[]),u.setHeader("Set-Cookie",b.concat(v)),c&&c.cookies){var w=c.cookies;""===t?delete w[e]:w[e]=d(t)}if(c&&c.headers&&c.headers.cookie){var w=(0,i.parse)(c.headers.cookie);""===t?delete w[e]:w[e]=d(t),c.headers.cookie=Object.entries(w).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.kT=function(e,r){return(0,t.d8)(e,"",s(s({},r),{maxAge:-1}))}},76334:(e,t)=>{"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},s=(t||{}).decode||a,i=0;i<e.length;){var n=e.indexOf("=",i);if(-1===n)break;var l=e.indexOf(";",i);if(-1===l)l=e.length;else if(l<n){i=e.lastIndexOf(";",n-1)+1;continue}var o=e.slice(i,n).trim();if(void 0===r[o]){var c=e.slice(n+1,l).trim();34===c.charCodeAt(0)&&(c=c.slice(1,-1)),r[o]=function(e,t){try{return t(e)}catch(t){return e}}(c,s)}i=l+1}return r},t.serialize=function(e,t,a){var n=a||{},l=n.encode||i;if("function"!=typeof l)throw TypeError("option encode is invalid");if(!s.test(e))throw TypeError("argument name is invalid");var o=l(t);if(o&&!s.test(o))throw TypeError("argument val is invalid");var c=e+"="+o;if(null!=n.maxAge){var d=n.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(d)}if(n.domain){if(!s.test(n.domain))throw TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!s.test(n.path))throw TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){var u=n.expires;if("[object Date]"!==r.call(u)&&!(u instanceof Date)||isNaN(u.valueOf()))throw TypeError("option expires is invalid");c+="; Expires="+u.toUTCString()}if(n.httpOnly&&(c+="; HttpOnly"),n.secure&&(c+="; Secure"),n.partitioned&&(c+="; Partitioned"),n.priority)switch("string"==typeof n.priority?n.priority.toLowerCase():n.priority){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var r=Object.prototype.toString,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function i(e){return encodeURIComponent(e)}},8428:(e,t,r)=>{"use strict";var s=r(14767);r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})},31583:(e,t,r)=>{"use strict";r.d(t,{J4:()=>c,L$:()=>l,O2:()=>n,OX:()=>d,S9:()=>o});var s=r(95344),a=r(42465),i=r(15782);r(3729);let n=()=>s.jsx("div",{className:"p-4 max-w-sm w-full mx-auto flex flex-col gap-y-5",children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[s.jsx(i.Skeleton,{className:"h-10 w-10 rounded-full"}),s.jsx(i.Skeleton,{className:"w-24 h-1 hidden sm:block"}),s.jsx(i.Skeleton,{className:"h-4 w-32"})]},t))}),l=()=>(0,s.jsxs)("div",{className:"p-4 max-w-4xl w-full mx-auto space-y-6",children:[s.jsx(i.Skeleton,{className:"h-6 w-1/4 mb-3"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[...Array(7)].map((e,t)=>s.jsx(i.Skeleton,{className:"h-12"},t))})]}),o=()=>s.jsx("div",{className:"flex justify-center items-center space-x-4",children:Array.from({length:3}).map((e,t)=>(0,s.jsxs)("div",{className:"p-4 max-w-sm w-full",children:[s.jsx(i.Skeleton,{className:"h-6 w-3/4 mb-2"}),s.jsx(i.Skeleton,{className:"h-32 w-32 mb-4"}),s.jsx(i.Skeleton,{className:"h-4 w-full mb-4"})," ",s.jsx(i.Skeleton,{className:"h-4 w-5/6 mb-4"})," ",s.jsx(i.Skeleton,{className:"h-10 w-24"})]},t))}),c=()=>(0,s.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 p-4",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full lg:w-1/3",children:[s.jsx(i.Skeleton,{className:"h-8 w-3/4 mb-4"}),s.jsx(i.Skeleton,{className:"h-6 w-full mb-2"}),s.jsx(i.Skeleton,{className:"h-24 w-full mb-4"}),s.jsx(i.Skeleton,{className:"h-6 w-11/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-10/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-9/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-8/12"})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full lg:w-1/3",children:[s.jsx(i.Skeleton,{className:"h-8 w-3/4 mb-4"}),s.jsx(i.Skeleton,{className:"h-6 w-full mb-2"}),s.jsx(i.Skeleton,{className:"h-36 w-full mb-4"}),s.jsx(i.Skeleton,{className:"h-6 w-11/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-10/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-9/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-8/12"})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full lg:w-1/3",children:[s.jsx(i.Skeleton,{className:"h-8 w-3/4 mb-4"}),s.jsx(i.Skeleton,{className:"h-6 w-full mb-2"}),s.jsx(i.Skeleton,{className:"h-36 w-full mb-4"}),s.jsx(i.Skeleton,{className:"h-6 w-11/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-10/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-9/12 mb-2"}),s.jsx(i.Skeleton,{className:"h-6 w-8/12"})]})]}),d=()=>(0,s.jsxs)(a.Zb,{className:"rounded-lg",children:[s.jsx(a.Ol,{className:"bg-gray-100",children:s.jsx(i.Skeleton,{className:"h-6 w-1/2 mb-2"})}),s.jsx(a.aY,{children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[s.jsx(i.Skeleton,{className:"h-4 w-1/3 mb-2"}),s.jsx(i.Skeleton,{className:"h-4 w-1/2 mb-2"}),(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(i.Skeleton,{className:"h-4 w-6 mr-2"}),s.jsx(i.Skeleton,{className:"h-4 w-1/4"})]})]}),s.jsx("div",{children:s.jsx(i.Skeleton,{className:"h-20 w-full mb-2"})}),s.jsx("div",{children:s.jsx(i.Skeleton,{className:"h-10 w-full mb-2"})})]})})]})},28625:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(1356);let a=async(e,t)=>{let r=(0,s.ej)("token"),a=r?{Authorization:`Bearer ${r}`}:{Authorization:""};return t={...t,headers:{...a,"Content-Type":"application/json",...t&&t.headers}},await fetch(`http://localhost:3000${e}`,t)};class i{static get token(){return(0,s.ej)("token")}static handleError(e){return e instanceof Error?Promise.reject(JSON.parse(e.message)):Promise.reject(e)}static async handleResponse(e){if(e.ok)return Promise.resolve(await e.json());throw Error(await e.text())}static async get({endpoint:e}){try{let t=await a(e,{method:"GET"});return i.handleResponse(t)}catch(e){return i.handleError(e)}}static async post({endpoint:e,body:t}){try{let r=await a(e,{body:JSON.stringify(t),method:"POST"});return i.handleResponse(r)}catch(e){return e}}static async put({endpoint:e,body:t}){try{let r=await a(e,{body:JSON.stringify(t),method:"PUT"});return i.handleResponse(r)}catch(e){return e}}static async patch({endpoint:e,body:t,config:r}){try{let s=await a(e,{body:JSON.stringify(t),method:"PATCH",...r});return i.handleResponse(s)}catch(e){return i.handleError(e)}}static async patchMultipart({endpoint:e,body:t}){try{let r=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${e}`,{body:t,headers:{Authorization:`Bearer ${i.token}`},method:"PATCH"});return i.handleResponse(r)}catch(e){return i.handleError(e)}}static async delete({endpoint:e,body:t}){try{let r=await a(e,{body:JSON.stringify(t),method:"DELETE"});return i.handleResponse(r)}catch(e){return i.handleError(e)}}}let n=i},46160:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(53608),a=r(3729);let i=()=>{let[e,t]=(0,a.useState)(null),[r,i]=(0,a.useState)(!1);return{getUserSubscription:async()=>{i(!0);try{let e=await s.Z.get("/api/User/user-subscription");t(e.data.data)}catch(e){console.error("Error fetching subscription data:",e)}finally{i(!1)}},subscription:e,loadingSubscription:r}}},59623:(e,t,r)=>{"use strict";r.d(t,{Q:()=>a});var s=r(8428);let a=e=>(0,s.useSearchParams)().get(e)},71204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(25036),a=r(40002);let i=(0,r(86843).createProxy)(String.raw`C:\My Files\Teneshu\Talent\Upwork\Dev's Resume Finalizing\Mine\Dev-s-Resume-main\app\Build\interviewPreps\[results]\index.jsx`),{__esModule:n,$$typeof:l}=i,o=i.default;var c=r(32458);let d=()=>s.jsx("div",{children:s.jsx(a.Suspense,{fallback:s.jsx(c.Z,{}),children:s.jsx(o,{})})})},32458:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(25036);r(71031);let a=({className:e})=>s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("div",{className:`spinner ${e}`})})},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(70337);let a=e=>[{type:"image/x-icon",sizes:"470x508",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},71031:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,9933,337,9213,4664,2136,3608,2760,1273],()=>r(3380));module.exports=s})();