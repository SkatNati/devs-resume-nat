"use strict";(()=>{var e={};e.id=2786,e.ids=[2786],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},87561:e=>{e.exports=require("node:fs")},84492:e=>{e.exports=require("node:stream")},71017:e=>{e.exports=require("path")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},71267:e=>{e.exports=require("worker_threads")},59796:e=>{e.exports=require("zlib")},72562:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>b,patchFetch:()=>x,requestAsyncStorage:()=>h,routeModule:()=>m,serverHooks:()=>y,staticGenerationAsyncStorage:()=>f,staticGenerationBailout:()=>S});var s={};r.r(s),r.d(s,{POST:()=>d});var i=r(95419),n=r(69108),a=r(99678),o=r(29764),l=r(76520),u=r(39697),c=r(78070);let d=async e=>{let t=(await e.json()).id;if(!t)return c.Z.json({message:"invalid request"},{status:400});try{await (0,l.Z)();let e=await u.Z.findById(t);if(!e)return c.Z.json({message:"CV not found"},{status:404});let r=await p(e),s=JSON.parse(r),i={$set:{summary:s.personalInformation.summary,education:s.education,experience:s.experience,isAiGenerate:!0}},n=await u.Z.findByIdAndUpdate(e.id,i,{new:!0});if(!n)return c.Z.json({message:"CV not found or could not be updated"},{status:404});return c.Z.json({message:n},{status:200})}catch(e){return c.Z.json({message:"An error occurred",error:e},{status:500})}};async function p(e){let t=`
    skills: [
    {
      label: "Label for a skill related to web design.",
      selected: "Boolean indicating if the skill is selected.",
    },
  education: [
    {
      institutionName: "Name of the educational institution.",
      degreeName: "Name of the degree obtained.",
      fieldOfStudy: "Field of study for the degree.",
      graduationYear: "Year of graduation.",
      currentlyStudying: "Boolean indicating if currently studying or not.",
    },
  ],
  experience: [
    {
      companyName: "Name of the company where experience was gained.",
      startDate: "Start date of the experience.",
      endDate: "End date of the experience.",
      currentlyWorking: "Boolean indicating if currently working in this position.",
      jobTitle: "Title of the job position.",
      responsibilities: "Description of responsibilities in the job rol, This responsibility is coming in the form of HTML. Please professionalize it and also return the responsibility back in HTML, ensuring it has been well enhanced.",
      achievements: "Notable achievements in the job role.",
    },
  ],
   personalInformation:{
    email: "Email address of the user.",
    firstName: "First name of the user.",
    lastName: "Last name of the user.",
    linkedin: "URL to the user's LinkedIn profile.",
    summary: "Professional summary of the user. This summary is coming in the form of HTML. Please professionalize it and also return the summary back in HTML, ensuring it has been well enhanced also 
     a well curated professional summary that highlights Skills, Experience, and Education."
   } 
  `,r=[{role:"system",content:`Build Resume Service Prompt
                    #Role Prompting You are a highly skilled creative resume writer with a special ability to craft 
                    successful resumes that pass ATS screening and catch recruiters’ attention for SharePoint, power Apps, 
                    and Power BI professionals.
                    #Task Create a professional resume for the specified Profession by combining user’s information and 
                    relevant skills based on ${t}. Fill in relevant information that may have not been provided by the 
                    user using placeholders like {ABC Company}, {X years}, etc. Use a chain of thought to think step by step, 
                    ensuring the resume includes a personal info, professional summary, skills (specific to the profession), 
                    experience, and education.
                    #Specific This task is essential for our service. Do not send any response other than the final product.
                    #Context You are operating in a professional SaaS business environment with no room for error. Maintain 
                    a high level of professionalism.
                    #Examples
                    User Input (Complete):
                    Personal Info: ${e.firstName} ${e.lastName}, ${e.email} Skills: ${e.details},
                     lists, libraries Experience: ${e.experience}
                     Education: ${e.education}
                    Professional summary ( a well curated professional summary that highlights Skills, Experience, and Education)
                    Skills ( List of all the relevant skills)
                    Experience ( list all the experiences with the latest one on top. Include skills as responsibilities.
                   example: Permission management - Managed user and group permissions in SharePoint, ensuring secure and
                   efficient access control across multiple sites and document libraries.)
                    Education: (List the Education institute, degree type, and year.)
                    Additional: ( if the user send things like achievments, certifications, etc include them accordingly)
                    User Input (Incomplete):
                    Skills: SharePoint
                    Experience: {company name not provided} Expected Output: A complete resume with placeholders
                     where information is missing, and adding a few industry standard relevant skills if missing.
                     ( example: {XYZ Company})
                    #Notes Ensure the resume follows a professional and logical structure. Fill gaps with either the model's knowledge or placeholders that make sense. Do not send incomplete, or irrelevant responses.
                    Make sure the resume is ATS and Recruiters friendly by incorporating the right keywords.
                    The output should be structured as a JSON object with appropriate keys and values.
                    Return the key in camelcase, return personalInformation key object as personalInformation.`},{role:"user",content:`Here are the JSON details for generating the CV: ${e}.`}];return(await o.Z.chat.completions.create({model:"gpt-4-turbo-preview",messages:r,max_tokens:1024,temperature:.7,response_format:{type:"json_object"}})).choices[0].message.content}let m=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/ai/enhanceCv/route",pathname:"/api/ai/enhanceCv",filename:"route",bundlePath:"app/api/ai/enhanceCv/route"},resolvedPagePath:"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\api\\ai\\enhanceCv\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:h,staticGenerationAsyncStorage:f,serverHooks:y,headerHooks:g,staticGenerationBailout:S}=m,b="/api/ai/enhanceCv/route";function x(){return(0,a.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:f})}},29764:(e,t,r)=>{r.d(t,{Z:()=>s});let s=new(r(72032)).ZP({apiKey:"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"})},76520:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(11185),i=r.n(s);let n=async()=>{try{await i().connect("mongodb+srv://Salahdin:WqN5xnY7Y2gdyWQ4@serverlessinstance0.jzng7nc.mongodb.net/dev's-resume")}catch(e){throw Error("connection failed")}}},39697:(e,t,r)=>{r.d(t,{Z:()=>n});let s=r(11185),i=new s.Schema({user:{type:s.Schema.Types.ObjectId,ref:"User",required:!0},firstName:{type:String},lastName:{type:String},jobTitle:{type:String},email:{type:String},linkedin:{type:String},address:{type:String},phone:{type:String},summary:{type:String},isComplete:{type:Boolean,default:!1},isAiGenerate:{type:Boolean,default:!1},templateId:{type:String,default:"Dev Resume 1"},skills:[{label:{type:String,required:!0},selected:{type:Boolean,default:!1}}],education:[{institutionName:{type:String,required:!0},degreeName:{type:String,required:!0},fieldOfStudy:{type:String,required:!0},graduationYear:{type:String,required:!0},currentlyStudying:{type:Boolean}}],experience:[{companyName:{type:String,required:!0},startDate:{type:String,required:!0},endDate:{type:String},currentlyWorking:{type:Boolean,default:!1},jobTitle:{type:String,required:!0},responsibilities:{type:String,required:!0},achievements:{type:String}}],optimizeResume:[{extractedCvText:{parsedText:String,fileName:String},jobDesc:{type:String,required:!0}}]},{timestamps:!0}),n=s.models.Resume||s.model("Resume",i)},87553:e=>{function t(e,t,r,s){return Math.round(e/r)+" "+s+(t>=1.5*r?"s":"")}e.exports=function(e,r){r=r||{};var s,i,n=typeof e;if("string"===n&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"weeks":case"week":case"w":return 6048e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e);if("number"===n&&isFinite(e))return r.long?(s=Math.abs(e))>=864e5?t(e,s,864e5,"day"):s>=36e5?t(e,s,36e5,"hour"):s>=6e4?t(e,s,6e4,"minute"):s>=1e3?t(e,s,1e3,"second"):e+" ms":(i=Math.abs(e))>=864e5?Math.round(e/864e5)+"d":i>=36e5?Math.round(e/36e5)+"h":i>=6e4?Math.round(e/6e4)+"m":i>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6206,2032],()=>r(72562));module.exports=s})();