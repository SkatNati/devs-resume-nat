"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1821],{84590:function(e,t,s){s.r(t),s.d(t,{Button:function(){return m},ButtonIcon:function(){return u},buttonVariants:function(){return d}});var a=s(3827),r=s(64090),l=s(62177),n=s(59143),o=s(81615),i=s(57742),c=s(84353);let d=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{defaultVariants:{size:"default",variant:"default"},variants:{size:{auth:"h-11 w-full font-semibold text-base",default:"h-12 px-4 py-2 text-base",icon:"h-10 w-10",lg:"h-12 lg:h-[3.75rem] rounded-md px-7  text-lg",sm:"h-9 rounded-md px-3"},variant:{default:"bg-primaryx text-slate-50 hover:bg-primaryx-500/90 dark:bg-primaryx dark:text-slate-900 dark:hover:bg-primaryx-800",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 text-primaryx-500",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",outline:"border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80"}}}),m=r.forwardRef((e,t)=>{let{className:s,variant:r,size:l,asChild:i=!1,hasAnimaion:m=!1,...u}=e,h=i?n.g7:"button";return m?(0,a.jsx)(o.E.div,{className:"w-full ",whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,a.jsx)(h,{className:(0,c.cn)(d({className:s,size:l,variant:r})),ref:t,...u})}):(0,a.jsx)(h,{className:(0,c.cn)(d({className:s,size:l,variant:r})),ref:t,...u})});m.displayName="Button";let u=e=>{let{id:t}=e;return(0,a.jsx)(m,{id:t,variant:"outline",className:"h-7 w-7 rounded-full border-primaryx text-primaryx",size:"icon",children:(0,a.jsx)(l.XCv,{className:"h-4 w-4 text-sm"})})};u.displayName="ButtonIcon"},47713:function(e,t,s){s.d(t,{Ol:function(){return o},Zb:function(){return n},aY:function(){return c},ll:function(){return i}});var a=s(3827),r=s(64090),l=s(84353);let n=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",s),...r})});n.displayName="Card";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",s),...r})});o.displayName="CardHeader";let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",s),...r})});i.displayName="CardTitle",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-slate-500 dark:text-slate-400",s),...r})}).displayName="CardDescription";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",s),...r})});c.displayName="CardContent",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter"},18413:function(e,t,s){s.r(t),s.d(t,{Skeleton:function(){return l}});var a=s(3827),r=s(84353);function l(e){let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,r.cn)("animate-pulse rounded-md bg-gray-300 dark:bg-gray-800",t),...s})}},98010:function(e,t,s){s.d(t,{pm:function(){return u}});var a=s(64090);let r=0,l=new Map,n=e=>{if(l.has(e))return;let t=setTimeout(()=>{l.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);l.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?n(s):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},i=[],c={toasts:[]};function d(e){c=o(c,e),i.forEach(e=>{e(c)})}function m(e){let{...t}=e,s=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:s});return d({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function u(){let[e,t]=a.useState(c);return a.useEffect(()=>(i.push(t),()=>{let e=i.indexOf(t);e>-1&&i.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},84353:function(e,t,s){s.d(t,{cn:function(){return l},l:function(){return n}});var a=s(75504),r=s(51367);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m6)((0,a.W)(t))}let n=e=>e.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"")},59332:function(e,t,s){s.d(t,{l:function(){return l}});var a=s(3827),r=s(20703);let l=e=>{let{src:t,alt:s,className:l,width:n,height:o}=e;return(0,a.jsx)(r.default,{src:t,width:Number(n)||400,height:Number(o)||400,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw",alt:s,className:l,loading:"lazy"})}},12085:function(e,t,s){s.d(t,{J4:function(){return c},L$:function(){return o},O2:function(){return n},OX:function(){return d},S9:function(){return i}});var a=s(3827),r=s(47713),l=s(18413);s(64090);let n=()=>(0,a.jsx)("div",{className:"p-4 max-w-sm w-full mx-auto flex flex-col gap-y-5",children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(l.Skeleton,{className:"h-10 w-10 rounded-full"}),(0,a.jsx)(l.Skeleton,{className:"w-24 h-1 hidden sm:block"}),(0,a.jsx)(l.Skeleton,{className:"h-4 w-32"})]},t))}),o=()=>(0,a.jsxs)("div",{className:"p-4 max-w-4xl w-full mx-auto space-y-6",children:[(0,a.jsx)(l.Skeleton,{className:"h-6 w-1/4 mb-3"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[...Array(7)].map((e,t)=>(0,a.jsx)(l.Skeleton,{className:"h-12"},t))})]}),i=()=>(0,a.jsx)("div",{className:"flex justify-center items-center space-x-4",children:Array.from({length:3}).map((e,t)=>(0,a.jsxs)("div",{className:"p-4 max-w-sm w-full",children:[(0,a.jsx)(l.Skeleton,{className:"h-6 w-3/4 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-32 w-32 mb-4"}),(0,a.jsx)(l.Skeleton,{className:"h-4 w-full mb-4"})," ",(0,a.jsx)(l.Skeleton,{className:"h-4 w-5/6 mb-4"})," ",(0,a.jsx)(l.Skeleton,{className:"h-10 w-24"})]},t))}),c=()=>(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 p-4",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full lg:w-1/3",children:[(0,a.jsx)(l.Skeleton,{className:"h-8 w-3/4 mb-4"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-full mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-24 w-full mb-4"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-11/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-10/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-9/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-8/12"})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full lg:w-1/3",children:[(0,a.jsx)(l.Skeleton,{className:"h-8 w-3/4 mb-4"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-full mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-36 w-full mb-4"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-11/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-10/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-9/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-8/12"})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full lg:w-1/3",children:[(0,a.jsx)(l.Skeleton,{className:"h-8 w-3/4 mb-4"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-full mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-36 w-full mb-4"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-11/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-10/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-9/12 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-6 w-8/12"})]})]}),d=()=>(0,a.jsxs)(r.Zb,{className:"rounded-lg",children:[(0,a.jsx)(r.Ol,{className:"bg-gray-100",children:(0,a.jsx)(l.Skeleton,{className:"h-6 w-1/2 mb-2"})}),(0,a.jsx)(r.aY,{children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(l.Skeleton,{className:"h-4 w-1/3 mb-2"}),(0,a.jsx)(l.Skeleton,{className:"h-4 w-1/2 mb-2"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(l.Skeleton,{className:"h-4 w-6 mr-2"}),(0,a.jsx)(l.Skeleton,{className:"h-4 w-1/4"})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)(l.Skeleton,{className:"h-20 w-full mb-2"})}),(0,a.jsx)("div",{children:(0,a.jsx)(l.Skeleton,{className:"h-10 w-full mb-2"})})]})})]})},85033:function(e,t,s){s.d(t,{Z:function(){return o}});var a=s(34870);let r=async(e,t)=>{let s=(0,a.ej)("token");return t={...t,headers:{...s?{Authorization:"Bearer ".concat(s)}:{Authorization:""},"Content-Type":"application/json",...t&&t.headers}},await fetch("".concat("http://localhost:3000").concat(e),t)};var l=s(32215);class n{static get token(){return(0,a.ej)("token")}static handleError(e){return e instanceof Error?Promise.reject(JSON.parse(e.message)):Promise.reject(e)}static async handleResponse(e){if(e.ok)return Promise.resolve(await e.json());throw Error(await e.text())}static async get(e){let{endpoint:t}=e;try{let e=await r(t,{method:"GET"});return n.handleResponse(e)}catch(e){return n.handleError(e)}}static async post(e){let{endpoint:t,body:s}=e;try{let e=await r(t,{body:JSON.stringify(s),method:"POST"});return n.handleResponse(e)}catch(e){return e}}static async put(e){let{endpoint:t,body:s}=e;try{let e=await r(t,{body:JSON.stringify(s),method:"PUT"});return n.handleResponse(e)}catch(e){return e}}static async patch(e){let{endpoint:t,body:s,config:a}=e;try{let e=await r(t,{body:JSON.stringify(s),method:"PATCH",...a});return n.handleResponse(e)}catch(e){return n.handleError(e)}}static async patchMultipart(e){let{endpoint:t,body:s}=e;try{let e=await fetch("".concat(l.env.NEXT_PUBLIC_BASE_URL).concat(t),{body:s,headers:{Authorization:"Bearer ".concat(n.token)},method:"PATCH"});return n.handleResponse(e)}catch(e){return n.handleError(e)}}static async delete(e){let{endpoint:t,body:s}=e;try{let e=await r(t,{body:JSON.stringify(s),method:"DELETE"});return n.handleResponse(e)}catch(e){return n.handleError(e)}}}var o=n}}]);