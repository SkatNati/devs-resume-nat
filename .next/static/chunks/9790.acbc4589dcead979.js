"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9790],{59790:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=r(3827),n=r(64090),s=r(65615),l=r.n(s),o=function(e){let{formData:t,handleInputChange:r,errors:n,index:s}=e,o=(e,a,n)=>{(t[a]||"")!==n&&r(e,{target:{name:a,value:n}})};return(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"company-name-".concat(s),className:"block text-gray-700 text-sm font-normal mb-2",children:"Company name"}),(0,a.jsx)("input",{className:"shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"company-name-".concat(s),name:"companyName",type:"text",placeholder:"Deloitte",onChange:e=>r(s,e),value:null==t?void 0:t.companyName}),(null==n?void 0:n.companyName)&&(0,a.jsx)("p",{className:"text-red-500 text-xs italic",children:null==n?void 0:n.companyName})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-normal mb-2",htmlFor:"job-title",children:"Job title"}),(0,a.jsx)("input",{className:"shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"job-title",name:"jobTitle",type:"text",placeholder:"Sharepoint Developer",onChange:e=>r(s,e),value:t.jobTitle}),(null==n?void 0:n.jobTitle)&&(0,a.jsx)("p",{className:"text-red-500 text-xs italic",children:null==n?void 0:n.jobTitle})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-normal mb-2",htmlFor:"start-date-".concat(s),children:"Start date"}),(0,a.jsx)("input",{className:"shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"start-date",name:"startDate",type:"date",onChange:e=>r(s,e),value:t.startDate}),(null==n?void 0:n.startDate)&&(0,a.jsx)("p",{className:"text-red-500 text-xs italic",children:null==n?void 0:n.startDate})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-normal mb-2",htmlFor:"end-date",children:"End date"}),(0,a.jsx)("input",{disabled:t.currentlyWorking,className:"shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"end-date",name:"endDate",type:"date",onChange:e=>r(s,e),value:t.endDate})]}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsxs)("label",{htmlFor:"currently-working-".concat(s),className:"inline-flex items-center",children:[(0,a.jsx)("input",{id:"currently-working-".concat(s),name:"currentlyWorking",checked:t.currentlyWorking||!1,type:"checkbox",onChange:e=>r(s,e),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),(0,a.jsx)("span",{className:"ml-2",children:"Currently Working"})]})})]})]}),(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-normal mb-2",htmlFor:"responsibilities-".concat(s),children:"Brief description of responsibilities"}),(0,a.jsx)(l(),{id:"responsibilities",theme:"snow",style:{height:"100px"},value:t.responsibilities||"",onChange:e=>o(s,"responsibilities",e),placeholder:"Describe your responsibilities",className:"overflow-y-scroll"}),(null==n?void 0:n.responsibilities)&&(0,a.jsx)("p",{className:"text-red-500 text-xs italic",children:null==n?void 0:n.responsibilities})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-normal mb-2",htmlFor:"achievements",children:"Achievements (optional)"}),(0,a.jsx)(l(),{id:"achievements",theme:"snow",style:{height:"100px"},value:t.achievements||"",onChange:e=>o(s,"achievements",e),placeholder:"List any achievements",className:"mt-4 overflow-y-scroll"})]})]})},i=r(26037),c=r(35006),d=r(98010),u=r(12393),h=r(79430),m=r(64095),p=r(69633);let x=()=>{var e;let{currentCv:t,isLoading:r}=(0,u.Z)(),{toast:a}=(0,d.pm)(),{incrementSteps:s}=(0,c.w)(),{updateCvData:l}=(0,p.U)(),[o,i]=(0,n.useState)(!1),x=(null==t?void 0:null===(e=t.message)||void 0===e?void 0:e.experience)||[],[b,f]=(0,n.useState)(),g=(0,m.NL)(),y=(0,h.Q)("id");(0,n.useEffect)(()=>{f((null==x?void 0:x.length)>0?x:[{companyName:"",startDate:"",endDate:"",jobTitle:"",responsibilities:"",achievements:"",currentlyWorking:!1,errors:{}}])},[t,r]);let v=async e=>{let t=b.filter((t,r)=>r!==e);f(t),await l({experience:t})},j=e=>{let t={};return e.companyName&&!e.startDate&&(t.startDate="Start date is required"),e.jobTitle||(t.jobTitle="Job title is required"),t},k=async e=>{e.preventDefault(),i(!0);let t=!0,r=null==b?void 0:b.map(e=>{let r=j(e);return Object.keys(r).length>0&&(t=!1),{...e,errors:r}});t?(await l({experience:r}),a({title:"Success! ✅",description:"Work Experience Added Successfully"}),g.invalidateQueries(["useGetCurrentUserResume",y]),s()):f(r),i(!1)};return{experiences:b,setExperiences:f,handleInputChange:(e,t)=>{let{name:r,value:a}=t.target,n="currentlyWorking"===r?t.target.checked:a,s=null==b?void 0:b.map((t,a)=>a===e?{...t,[r]:n,errors:{...t.errors,[r]:""}}:t);a&&f(s)},handleDelete:v,handleSubmit:k,isLoading:o}};var b=r(15566),f=()=>{let{experiences:e,setExperiences:t,handleInputChange:r,handleDelete:n,handleSubmit:s,isLoading:l}=x();if((null==e?void 0:e.length)>0)return(0,a.jsxs)("div",{className:"flex flex-col gap-y-7",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-2xl font-bold leading-7 text-accent mb-3",children:"Work Experience"}),(0,a.jsx)("p",{className:"text lg",children:"Add details of your work experience below. Start by listing the latest organization you have worked in."})]}),(0,a.jsxs)("form",{onSubmit:s,children:[null!=e&&(null==e?void 0:e.map((e,t)=>(0,a.jsxs)("div",{className:"my-5 boxDetails border p-3",children:[(0,a.jsx)("div",{className:"flex justify-end items-end w-full ",children:(0,a.jsx)("button",{type:"button",onClick:()=>n(t),children:(0,a.jsx)(b.Z,{})})}),(0,a.jsx)(o,{index:t,formData:e,handleInputChange:r,errors:e.errors})]},t))),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-4",children:[(0,a.jsx)("button",{type:"button",onClick:()=>t([...e,{companyName:"",startDate:"",endDate:"",jobTitle:"",responsibilities:"",achievements:"",errors:{}}]),className:"text-black border border-[#F9E547] hover:bg-[#F9E547] focus:outline-none focus:ring-4 focus:ring-[#F9E547] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#F9E547] dark:hover:bg-[#F9E547] dark:focus:ring-[#F9E547]",children:"Add Experience"}),(0,a.jsx)(i.Z,{type:"button",disabled:l,text:l?"loading..":"Next"})]})]})]})}},69633:function(e,t,r){r.d(t,{U:function(){return o}});var a=r(98010),n=r(79430),s=r(7908),l=r(47907);let o=e=>{let t;let{Resultid:r}=(0,l.useParams)();t="resultPage"==e?r:(0,n.Q)("id");let{toast:o}=(0,a.pm)();return{updateCvData:async e=>{try{let r="".concat(window.location.origin,"/api/User/Cv/").concat(t),a=await s.Z.patch(r,e);return o({title:"Success! ✅",description:"Cv Updated"}),a}catch(e){o({title:"Error",description:JSON.parse(e.message).error||"Something went wrong, please try again.",variant:"destructive",className:"rounded-xl"})}}}}},84590:function(e,t,r){r.r(t),r.d(t,{Button:function(){return u},ButtonIcon:function(){return h},buttonVariants:function(){return d}});var a=r(3827),n=r(64090),s=r(62177),l=r(59143),o=r(81615),i=r(57742),c=r(84353);let d=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{defaultVariants:{size:"default",variant:"default"},variants:{size:{auth:"h-11 w-full font-semibold text-base",default:"h-12 px-4 py-2 text-base",icon:"h-10 w-10",lg:"h-12 lg:h-[3.75rem] rounded-md px-7  text-lg",sm:"h-9 rounded-md px-3"},variant:{default:"bg-primaryx text-slate-50 hover:bg-primaryx-500/90 dark:bg-primaryx dark:text-slate-900 dark:hover:bg-primaryx-800",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 text-primaryx-500",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",outline:"border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80"}}}),u=n.forwardRef((e,t)=>{let{className:r,variant:n,size:s,asChild:i=!1,hasAnimaion:u=!1,...h}=e,m=i?l.g7:"button";return u?(0,a.jsx)(o.E.div,{className:"w-full ",whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,a.jsx)(m,{className:(0,c.cn)(d({className:r,size:s,variant:n})),ref:t,...h})}):(0,a.jsx)(m,{className:(0,c.cn)(d({className:r,size:s,variant:n})),ref:t,...h})});u.displayName="Button";let h=e=>{let{id:t}=e;return(0,a.jsx)(u,{id:t,variant:"outline",className:"h-7 w-7 rounded-full border-primaryx text-primaryx",size:"icon",children:(0,a.jsx)(s.XCv,{className:"h-4 w-4 text-sm"})})};h.displayName="ButtonIcon"},98010:function(e,t,r){r.d(t,{pm:function(){return h}});var a=r(64090);let n=0,s=new Map,l=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?l(r):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},i=[],c={toasts:[]};function d(e){c=o(c,e),i.forEach(e=>{e(c)})}function u(e){let{...t}=e,r=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function h(){let[e,t]=a.useState(c);return a.useEffect(()=>(i.push(t),()=>{let e=i.indexOf(t);e>-1&&i.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},87461:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(64090),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),l=(e,t)=>{let r=(0,a.forwardRef)((r,l)=>{let{color:o="currentColor",size:i=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:u="",children:h,...m}=r;return(0,a.createElement)("svg",{ref:l,...n,width:i,height:i,stroke:o,strokeWidth:d?24*Number(c)/Number(i):c,className:["lucide","lucide-".concat(s(e)),u].join(" "),...m},[...t.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(h)?h:[h]])});return r.displayName="".concat(e),r}},15566:function(e,t,r){r.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(87461).Z)("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]])},26037:function(e,t,r){var a=r(3827),n=r(84590);r(64090),t.Z=e=>{let{text:t,disabled:r}=e;return(0,a.jsx)("div",{className:"flex justify-start",children:(0,a.jsx)(n.Button,{disabled:r,type:"submit",className:"bg-[#F9E547] buttonShadow text-black hover:bg-yellow-600  font-bold py-2 px-4 rounded-r",children:t})})}},85033:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(34870);let n=async(e,t)=>{let r=(0,a.ej)("token");return t={...t,headers:{...r?{Authorization:"Bearer ".concat(r)}:{Authorization:""},"Content-Type":"application/json",...t&&t.headers}},await fetch("".concat("http://localhost:3000").concat(e),t)};var s=r(32215);class l{static get token(){return(0,a.ej)("token")}static handleError(e){return e instanceof Error?Promise.reject(JSON.parse(e.message)):Promise.reject(e)}static async handleResponse(e){if(e.ok)return Promise.resolve(await e.json());throw Error(await e.text())}static async get(e){let{endpoint:t}=e;try{let e=await n(t,{method:"GET"});return l.handleResponse(e)}catch(e){return l.handleError(e)}}static async post(e){let{endpoint:t,body:r}=e;try{let e=await n(t,{body:JSON.stringify(r),method:"POST"});return l.handleResponse(e)}catch(e){return e}}static async put(e){let{endpoint:t,body:r}=e;try{let e=await n(t,{body:JSON.stringify(r),method:"PUT"});return l.handleResponse(e)}catch(e){return e}}static async patch(e){let{endpoint:t,body:r,config:a}=e;try{let e=await n(t,{body:JSON.stringify(r),method:"PATCH",...a});return l.handleResponse(e)}catch(e){return l.handleError(e)}}static async patchMultipart(e){let{endpoint:t,body:r}=e;try{let e=await fetch("".concat(s.env.NEXT_PUBLIC_BASE_URL).concat(t),{body:r,headers:{Authorization:"Bearer ".concat(l.token)},method:"PATCH"});return l.handleResponse(e)}catch(e){return l.handleError(e)}}static async delete(e){let{endpoint:t,body:r}=e;try{let e=await n(t,{body:JSON.stringify(r),method:"DELETE"});return l.handleResponse(e)}catch(e){return l.handleError(e)}}}var o=l},12393:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(78643),n=r(85033);let s=async e=>{let t,{cvId:r,type:a}=e,s="/api/User/";return t="CoverLetter"===a?"".concat(s,"CoverLetter/getAllCoverLetter/").concat(r):"interviewPreps"===a?"".concat(s,"interview-preps/").concat(r):"".concat(s,"Cv/getAllUserCv/").concat(r),await n.Z.get({endpoint:t})};var l=r(79430),o=e=>{let t=(0,l.Q)("id"),{data:r,isError:n,isLoading:o}=(0,a.a)(["useGetCurrentUserResume",t],()=>s({cvId:t,type:e}),{enabled:!!t});return{currentCv:r,isLoading:o,isError:n}}}}]);