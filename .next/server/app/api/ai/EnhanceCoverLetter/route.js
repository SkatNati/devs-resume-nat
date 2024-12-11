"use strict";(()=>{var e={};e.id=5006,e.ids=[5006],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},87561:e=>{e.exports=require("node:fs")},84492:e=>{e.exports=require("node:stream")},71017:e=>{e.exports=require("path")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},71267:e=>{e.exports=require("worker_threads")},59796:e=>{e.exports=require("zlib")},20544:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>w,patchFetch:()=>b,requestAsyncStorage:()=>h,routeModule:()=>m,serverHooks:()=>f,staticGenerationAsyncStorage:()=>y,staticGenerationBailout:()=>v});var s={};r.r(s),r.d(s,{POST:()=>p});var a=r(95419),n=r(69108),o=r(99678),i=r(29764),d=r(31281),l=r(78070);let p=async e=>{let t=(await e.json()).id;if(!t)return l.Z.json({message:"Invalid request no ID provided"},{status:400});try{let e,r=await d.Z.findById(t);if(!r)return l.Z.json({message:"Cover Letter not found"},{status:404});let s=await u(r);s&&(e=JSON.parse(s));let a={email:e.email,linkedin:e.linkedin,address:e.address,phone:e.phone,salutation:e.salutation,jobInfo:{companyName:e.jobInfo?.companyName,companyAddress:e.jobInfo?.companyAddress,companyCity:e.jobInfo?.companyCity},result:e.result,isAiGenerate:!0,isComplete:!0};return await d.Z.findByIdAndUpdate(r._id,a,{new:!0}),l.Z.json({message:"Cover letter generated successfully",coverLetterText:s},{status:200})}catch(e){return console.error(e),l.Z.json({message:"An error occurred",error:e},{status:500})}},c=`{
        
          email: {
              The User Email the user provided in the prompt,
            },
            linkedin: {
                "The LinkedIn the user provided in the prompt"
            },
            address: {
              "The  Address the user provided in the prompt",
            },
            phone: {
              "The  phone the user provided in the prompt",
            },
          {
            salutation: 'title to be use eg Dear manager, or Dear Recuiter or Dear Hiring Manager'
          }
           jobInfo: {
            companyName: {
              "The Company Name the user provided in the prompt",
            },
            companyAddress: {
              The Company Address the user provided in the prompt,
            },
            companyCity: {
              The Company City the user provided in the prompt,
            },
            
          },
          result: "The result of the cover letter just the message should be here the uset address and the comany should be attach to the each field"
}
`;async function u(e){return(await i.Z.chat.completions.create({model:"gpt-4-turbo-preview",messages:[{role:"system",content:`You are a highly skilled creative writer with a special ability to craft successful cover letters that attracts 
          recruiters attention for software development professionals.
          #Task Create a professional cover letter by parsing relevant information provided by the user. User will provide 
          Job Descriptions for target job and their resume. Using that information craft a concise cover letter. 
          For missing information like ‘organization name’ and others, use placeholders like {Organization name}. 
          Use a chain of thought to think step by step, ensuring the cover letter includes personal info, target organization
           details, and a tailored message.
          #Specific This task is essential for our service. Do not send any comments or response other than the final product,
           which is the cover letter itself.
          #Context You are operating in a professional SaaS business environment with no room for error. Maintain a high level
           of professionalism and ensure the cover letter is concise, relevant, and devoid of any personal notes or additional
            comments.
          #Examples User Input (Complete):,
          Personal Info(Resume): ${e.firstName} ${e.email}, SharePoint Developer,
          Job Description: extract the organization information (${e.jobInfo.companyName}, Hiring Manager), key responsibilities, 
          and what skills they are looking for
          Expected Output: A complete cover letter addressing ${e.jobInfo.companyAddress} and the Hiring Manager, detailing ${e.firstName}
          ${e.lastName} 
          qualifications, past experience and enthusiasm for the position.
          User Input (Incomplete):
          Personal Info(Resume): ${e.firstName} ${e.lastName}, ${e.email}, some missing 
          information Expected Output: A complete cover letter with placeholders where key information ( like name, years of experience, and education 
          is missing, and filling in with industry standard keywords where skills is missing. Address the target 
          organization with a tailored message.
          #Notes
          Fill gaps with either the model's knowledge or placeholders.
          Ensure the cover letter is professional and tailored to the job description.
          Do not include any personal notes, comments, or incomplete responses.
          Maintain a high level of professionalism and focus on the user's qualifications and the job requirements.
          Cover letter should be between 250-400 words. Make sure you follow this json to return the data bach ${c}`},{role:"user",content:`Here are the JSON details for generating the CV: ${e}.`}],max_tokens:1024,temperature:.7})).choices[0].message.content}let m=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/ai/EnhanceCoverLetter/route",pathname:"/api/ai/EnhanceCoverLetter",filename:"route",bundlePath:"app/api/ai/EnhanceCoverLetter/route"},resolvedPagePath:"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\api\\ai\\EnhanceCoverLetter\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:h,staticGenerationAsyncStorage:y,serverHooks:f,headerHooks:g,staticGenerationBailout:v}=m,w="/api/ai/EnhanceCoverLetter/route";function b(){return(0,o.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:y})}},29764:(e,t,r)=>{r.d(t,{Z:()=>s});let s=new(r(72032)).ZP({apiKey:"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"})},31281:(e,t,r)=>{r.d(t,{Z:()=>n});let s=r(11185),a=new s.Schema({user:{type:s.Schema.Types.ObjectId,ref:"User",required:!0},firstName:{type:String},lastName:{type:String},jobTitle:{type:String},email:{type:String},linkedin:{type:String},address:{type:String},phone:{type:String},summary:{type:String},salutation:{type:String},isComplete:{type:Boolean,default:!1},isAiGenerate:{type:Boolean,default:!1},jobInfo:{companyName:{type:String},companyAddress:{type:String},companyCity:{type:String},jobDescription:{type:String}},extractedCvText:{parsedText:String,fileName:String},result:{type:String}},{timestamps:!0}),n=s.models.coverLetter||s.model("coverLetter",a)},87553:e=>{function t(e,t,r,s){return Math.round(e/r)+" "+s+(t>=1.5*r?"s":"")}e.exports=function(e,r){r=r||{};var s,a,n=typeof e;if("string"===n&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"weeks":case"week":case"w":return 6048e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e);if("number"===n&&isFinite(e))return r.long?(s=Math.abs(e))>=864e5?t(e,s,864e5,"day"):s>=36e5?t(e,s,36e5,"hour"):s>=6e4?t(e,s,6e4,"minute"):s>=1e3?t(e,s,1e3,"second"):e+" ms":(a=Math.abs(e))>=864e5?Math.round(e/864e5)+"d":a>=36e5?Math.round(e/36e5)+"h":a>=6e4?Math.round(e/6e4)+"m":a>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6206,2032],()=>r(20544));module.exports=s})();