"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3093],{53093:function(t,a,e){e.r(a),e.d(a,{default:function(){return S}});var i=e(3827),n=e(64090),o=e(12393),r=e(30248),s=e(82670),l=e(21270),p=e(81349),c=e(85033);let d=async t=>{try{return await c.Z.post({body:{id:t},endpoint:"/api/ai/EnhanceCoverLetter"})}catch(t){return t}};var m=e(47907),k=e(59033),u=e(98010);function y(t){var a,e,i,n;return{companyName:(null==t?void 0:null===(a=t.jobInfo)||void 0===a?void 0:a.companyName)||"",companyAddress:(null==t?void 0:null===(e=t.jobInfo)||void 0===e?void 0:e.companyAddress)||"",companyCity:(null==t?void 0:null===(i=t.jobInfo)||void 0===i?void 0:i.companyCity)||"",jobDescription:(null==t?void 0:null===(n=t.jobInfo)||void 0===n?void 0:n.jobDescription)||""}}var x=e(11212),h=e(43399),E=e(26037),f=e(35765),S=()=>{let{jobDescriptionFields:t,form:a,onSubmit:e,isLoading:c,isGeneratingCoverLetter:S}=function(){let[t,a]=(0,n.useState)(!1),[e,i]=(0,n.useState)(!1),{updateCoverLetter:c}=(0,k.g)(),{toast:x}=(0,u.pm)(),h=(0,m.useRouter)(),{currentCv:E,loading:f}=(0,o.Z)("CoverLetter"),S=null==E?void 0:E.message,b=r.z.object({companyName:r.z.string().optional().nullable(),companyAddress:r.z.string().optional().nullable(),companyCity:r.z.string().optional().nullable(),jobDescription:r.z.string().nullable().optional()}),v=[{label:"Company",name:"companyName",placeholder:"Enter your company",type:p.u.TEXT},{label:"Address",name:"companyAddress",placeholder:"Enter Job address",type:p.u.TEXT},{label:"City",name:"companyCity",placeholder:"Enter Job city",type:p.u.TEXT},{label:"Job Description",name:"jobDescription",placeholder:"Enter a brief description of the job area",required:!0,type:p.u.TEXTAREA}],A=(0,s.cI)({resolver:(0,l.F)(b),defaultValues:y(S)}),_=async t=>{a(!0);try{await c({jobInfo:t}),i(!0);let a=await d(S._id);i(!1),a.message&&h.push("/Build/CoverLetter/".concat(null==S?void 0:S._id))}catch(t){x({title:"Error",description:"Something went wrong, please try again.",variant:"destructive",className:"rounded-xl"})}finally{a(!1)}};return(0,n.useEffect)(()=>{!f&&S&&A.reset(y(S))},[f,S]),{jobDescriptionFields:v,form:A,isLoading:t,isGeneratingCoverLetter:e,onSubmit:_}}();return S?(0,i.jsx)(f.Z,{}):(0,i.jsx)(h.l0,{...a,className:"w-full",children:(0,i.jsxs)("form",{onSubmit:null==a?void 0:a.handleSubmit(e),children:[(0,i.jsx)("h1",{className:"text-2xl font-semibold mb-4",children:"Job Description"}),(0,i.jsx)("div",{className:"grid grid-cols-2 gap-4 w-full",children:null==t?void 0:t.map((t,e)=>"TEXTAREA"!==t.type&&(0,i.jsx)(x.Z,{...t,form:a},e))}),(0,i.jsx)("div",{className:"mt-3",children:null==t?void 0:t.map((t,e)=>"TEXTAREA"===t.type&&(0,i.jsx)(x.Z,{...t,form:a,className:"w-[100vw]"},"textarea-".concat(e)))}),(0,i.jsx)("div",{className:"flex justify-end items-end mt-5",children:(0,i.jsx)(E.Z,{disabled:c,text:c?"Submitting..":"Submit"})})]})})}},59033:function(t,a,e){e.d(a,{g:function(){return s}});var i=e(79430),n=e(7908),o=e(47907),r=e(64090);let s=t=>{let a;let[e,s]=(0,r.useState)(),{Resultid:l}=(0,o.useParams)();return a="resultPage"==t?l:(0,i.Q)("id"),{updateCoverLetter:async t=>{s(!0);try{let e="".concat(window.location.origin,"/api/User/CoverLetter/").concat(a);return await n.Z.patch(e,t)}catch(t){}finally{s(!1)}},isLoading:e}}},35765:function(t,a,e){e.d(a,{Z:function(){return r}});var i=e(3827);e(64090);var n=e(11411),o=JSON.parse('{"v":"4.6.8","fr":60,"ip":0,"op":106,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 5","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":20,"s":[0],"e":[360]},{"t":110}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10,10]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":20,"op":620,"st":20,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 4","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":15,"s":[0],"e":[360]},{"t":105}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":15,"op":615,"st":15,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":10,"s":[0],"e":[360]},{"t":100}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[30,30]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":10,"op":610,"st":10,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 2","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":5,"s":[0],"e":[360]},{"t":95}]},"p":{"a":0,"k":[251,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[40,40]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":5,"op":605,"st":5,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":0,"s":[0],"e":[360]},{"t":90}]},"p":{"a":0,"k":[250,250,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":0,"s":[50,50],"e":[40,40]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":84,"s":[40,40],"e":[50,50]},{"t":100}]},"p":{"a":0,"k":[0,-100]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0,0.7294118,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":600,"st":0,"bm":0,"sr":1}]}'),r=()=>(0,i.jsx)("div",{className:"h-[100vh] flex justify-center items-center",children:(0,i.jsx)(n.Z,{options:{loop:!0,autoplay:!0,animationData:o,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},height:400,width:400})})},98010:function(t,a,e){e.d(a,{pm:function(){return m}});var i=e(64090);let n=0,o=new Map,r=t=>{if(o.has(t))return;let a=setTimeout(()=>{o.delete(t),c({type:"REMOVE_TOAST",toastId:t})},1e6);o.set(t,a)},s=(t,a)=>{switch(a.type){case"ADD_TOAST":return{...t,toasts:[a.toast,...t.toasts].slice(0,1)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(t=>t.id===a.toast.id?{...t,...a.toast}:t)};case"DISMISS_TOAST":{let{toastId:e}=a;return e?r(e):t.toasts.forEach(t=>{r(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===e||void 0===e?{...t,open:!1}:t)}}case"REMOVE_TOAST":if(void 0===a.toastId)return{...t,toasts:[]};return{...t,toasts:t.toasts.filter(t=>t.id!==a.toastId)}}},l=[],p={toasts:[]};function c(t){p=s(p,t),l.forEach(t=>{t(p)})}function d(t){let{...a}=t,e=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),i=()=>c({type:"DISMISS_TOAST",toastId:e});return c({type:"ADD_TOAST",toast:{...a,id:e,open:!0,onOpenChange:t=>{t||i()}}}),{id:e,dismiss:i,update:t=>c({type:"UPDATE_TOAST",toast:{...t,id:e}})}}function m(){let[t,a]=i.useState(p);return i.useEffect(()=>(l.push(a),()=>{let t=l.indexOf(a);t>-1&&l.splice(t,1)}),[t]),{...t,toast:d,dismiss:t=>c({type:"DISMISS_TOAST",toastId:t})}}},26037:function(t,a,e){var i=e(3827),n=e(84590);e(64090),a.Z=t=>{let{text:a,disabled:e}=t;return(0,i.jsx)("div",{className:"flex justify-start",children:(0,i.jsx)(n.Button,{disabled:e,type:"submit",className:"bg-[#F9E547] buttonShadow text-black hover:bg-yellow-600  font-bold py-2 px-4 rounded-r",children:a})})}}}]);