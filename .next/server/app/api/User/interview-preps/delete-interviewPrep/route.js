"use strict";(()=>{var e={};e.id=9684,e.ids=[9684],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},83046:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>v,originalPathname:()=>S,patchFetch:()=>h,requestAsyncStorage:()=>y,routeModule:()=>l,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>w});var i={};t.r(i),t.d(i,{DELETE:()=>c});var n=t(95419),s=t(69108),o=t(99678),a=t(76520),p=t(19122),u=t.n(p),d=t(78070);async function c(e){let{id:r}=await e.json();if(await (0,a.Z)(),!r)return new d.Z("No ID provided",{status:400});try{if(!await u().findByIdAndDelete(r))return new d.Z("Resource not found",{status:404});return new d.Z("Resource deleted successfully",{status:200})}catch(e){return console.error("Error deleting the resource:",e),new d.Z("An error occurred",{status:500})}}let l=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/User/interview-preps/delete-interviewPrep/route",pathname:"/api/User/interview-preps/delete-interviewPrep",filename:"route",bundlePath:"app/api/User/interview-preps/delete-interviewPrep/route"},resolvedPagePath:"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\api\\User\\interview-preps\\delete-interviewPrep\\route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:y,staticGenerationAsyncStorage:g,serverHooks:m,headerHooks:v,staticGenerationBailout:w}=l,S="/api/User/interview-preps/delete-interviewPrep/route";function h(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}},76520:(e,r,t)=>{t.d(r,{Z:()=>s});var i=t(11185),n=t.n(i);let s=async()=>{try{await n().connect("mongodb+srv://Salahdin:WqN5xnY7Y2gdyWQ4@serverlessinstance0.jzng7nc.mongodb.net/dev's-resume")}catch(e){throw Error("connection failed")}}},19122:(e,r,t)=>{let i=t(11185),{Schema:n}=i,s=new n({user:{type:i.Schema.Types.ObjectId,ref:"User"},firstName:{type:String},lastName:{type:String},jobTitle:{type:String},email:{type:String},linkedin:{type:String},address:{type:String},phone:{type:String},summary:{type:String},jobInfo:{companyName:{type:String},jobDescription:{type:String}},extractedCvText:{parsedText:String,fileName:String},company:{type:String},summary:{type:String},skills:{type:[String],required:!1},behavioralQuestions:{type:[String],required:!1},technicalQuestions:{type:[String],required:!1},projectDescription:{type:[String],required:!1},additionalProject:{type:[String],required:!1},questionsForInterviewers:{type:[String],required:!1}},{timestamps:!0});e.exports=i.models.interviewPrep||i.model("interviewPrep",s)}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[1638,6206],()=>t(83046));module.exports=i})();