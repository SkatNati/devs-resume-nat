"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1389],{74229:function(e,i,t){t.r(i),t.d(i,{default:function(){return v}});var s=t(3827),o=t(64090),l=t(81349),r=t(12393),a=t(79430),n=t(21270),u=t(7908),c=t(47907),d=t(82670),p=t(30248);let b=()=>{var e,i;let t=(0,a.Q)("id"),{currentCv:s}=(0,r.Z)(),[b,m]=(0,o.useState)(!1),[f,j]=(0,o.useState)(!1),h=null==s?void 0:null===(i=s.message)||void 0===i?void 0:null===(e=i.optimizeResume[0])||void 0===e?void 0:e.jobDesc,v=(0,c.useRouter)(),x=p.z.object({jobDescription:p.z.string().min(1,{message:"Job Description is required"})});return{jobDescriptionFields:{label:"Job Description",name:"jobDescription",placeholder:"Enter a brief description of the job area",required:!0,type:l.u.TEXTAREA},onSubmit:async e=>{let i=new FormData;i.append("id",t),i.append("JobDesc",null==e?void 0:e.jobDescription),m(!0);try{await u.Z.patch("/api/User/optimizeResume/jobDescription",i)&&(j(!0),await u.Z.post("/api/ai/optimize-resume",{id:t}),v.push("/Build/Cv/".concat(t)))}catch(e){}finally{m(!1),j(!1)}},form:(0,d.cI)({resolver:(0,n.F)(x),defaultValues:{jobDescription:h}}),isLoading:b,isGeneratingCv:f}};var m=t(11212),f=t(26037),j=t(43399),h=t(22521),v=()=>{let{jobDescriptionFields:e,onSubmit:i,form:t,isLoading:o,isGeneratingCv:l}=b();return l?(0,s.jsx)(h.Z,{}):(0,s.jsx)("div",{children:(0,s.jsx)(j.l0,{...t,className:"w-full",children:(0,s.jsxs)("form",{onSubmit:null==t?void 0:t.handleSubmit(i),className:"flex flex-col gap-y-3 mt-5",children:[(0,s.jsx)(m.Z,{...e,form:t}),(0,s.jsx)(f.Z,{disabled:o,text:o?"Submitting..":"Submit"})]})})})}},26037:function(e,i,t){var s=t(3827),o=t(84590);t(64090),i.Z=e=>{let{text:i,disabled:t}=e;return(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)(o.Button,{disabled:t,type:"submit",className:"bg-[#F9E547] buttonShadow text-black hover:bg-yellow-600  font-bold py-2 px-4 rounded-r",children:i})})}}}]);