"use strict";(()=>{var e={};e.id=9935,e.ids=[9935],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},37922:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>v,originalPathname:()=>w,patchFetch:()=>x,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>f,staticGenerationAsyncStorage:()=>y,staticGenerationBailout:()=>S});var n={};r.r(n),r.d(n,{GET:()=>p});var i=r(95419),o=r(69108),a=r(99678),s=r(81355),u=r(78070),l=r(76379),c=r(31281),d=r(76520);let p=async()=>{try{let{_id:e}=await (0,s.getServerSession)(l.L);if(await (0,d.Z)(),!e)return u.Z.json({error:"pls login"},{status:404});let t=await c.Z.find({user:e});return u.Z.json({message:t},{status:200})}catch(e){return u.Z.json({error:"error occur "+e},{status:500})}},m=new i.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/User/CoverLetter/getAllCoverLetter/route",pathname:"/api/User/CoverLetter/getAllCoverLetter",filename:"route",bundlePath:"app/api/User/CoverLetter/getAllCoverLetter/route"},resolvedPagePath:"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\api\\User\\CoverLetter\\getAllCoverLetter\\route.js",nextConfigOutput:"",userland:n}),{requestAsyncStorage:g,staticGenerationAsyncStorage:y,serverHooks:f,headerHooks:v,staticGenerationBailout:S}=m,w="/api/User/CoverLetter/getAllCoverLetter/route";function x(){return(0,a.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:y})}},76379:(e,t,r)=>{r.d(t,{L:()=>c});var n=r(10375),i=r(69568),o=r(61232),a=r(76520),s=r(7439),u=r(46082),l=r.n(u);let c={providers:[(0,n.Z)({clientId:"613085402067-0n9eojdq3839bmli9ucupviuptdvlfmu.apps.googleusercontent.com",clientSecret:"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"}),(0,i.Z)({clientId:"78lj0qyyxagzm4",clientSecret:"WPL_AP0.uE5KbHCdbAWOJ2PD.NzgxNjY1Mjc3",client:{token_endpoint_auth_method:"client_secret_post"},issuer:"https://www.linkedin.com",profile:e=>({id:e.sub,name:e.name,email:e.email,image:e.picture}),wellKnown:"https://www.linkedin.com/oauth/.well-known/openid-configuration",authorization:{params:{scope:"openid profile email"}}})],session:{strategy:"jwt"},callbacks:{async signIn({user:e,profile:t}){try{await (0,a.Z)();let r=await o.Z.findOne({email:e.email}),n=await d(e.email);if(!r){let r=await o.Z.create({email:e?.email,firstName:t?.given_name||"",lastName:t?.family_name||"",password:e.email,image:e?.image||""});return await p("token",n),await p("userID",r._id),r}await p("token",n),await p("userID",r._id)}catch(e){return console.error("Error occurred during sign-in:",e),!1}return!0},async session({session:e,token:t}){try{return await (0,a.Z)(),{...await o.Z.findOne({email:t.email}).select("-password").lean()}}catch(t){return console.error("Error occurred during session retrieval:",t),e}}},secret:process.env.NEXTAUTH_SECRET,pages:{signIn:"/login",error:"/error"}};async function d(e){return l().sign({email:e},"wewjenjwn3e23787y389e",{expiresIn:"1w"})}async function p(e,t){(0,s.cookies)().set(e,t),(0,s.cookies)().set(e,t)}},76520:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(11185),i=r.n(n);let o=async()=>{try{await i().connect("mongodb+srv://Salahdin:WqN5xnY7Y2gdyWQ4@serverlessinstance0.jzng7nc.mongodb.net/dev's-resume")}catch(e){throw Error("connection failed")}}},31281:(e,t,r)=>{r.d(t,{Z:()=>o});let n=r(11185),i=new n.Schema({user:{type:n.Schema.Types.ObjectId,ref:"User",required:!0},firstName:{type:String},lastName:{type:String},jobTitle:{type:String},email:{type:String},linkedin:{type:String},address:{type:String},phone:{type:String},summary:{type:String},salutation:{type:String},isComplete:{type:Boolean,default:!1},isAiGenerate:{type:Boolean,default:!1},jobInfo:{companyName:{type:String},companyAddress:{type:String},companyCity:{type:String},jobDescription:{type:String}},extractedCvText:{parsedText:String,fileName:String},result:{type:String}},{timestamps:!0}),o=n.models.coverLetter||n.model("coverLetter",i)},61232:(e,t,r)=>{r.d(t,{Z:()=>o});let n=r(11185),i=new n.Schema({email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},firstName:{type:String,required:!0},lastName:{type:String,required:!0},password:{type:String,required:!0},image:{type:String}},{timestamps:!0}),o=n.models.User||n.model("User",i)},48096:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return n},isDynamicServerError:function(){return i}});let r="DYNAMIC_SERVER_USAGE";class n extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function i(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72973:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isStaticGenBailoutError:function(){return s},staticGenerationBailout:function(){return l}});let n=r(48096),i=r(45869),o="NEXT_STATIC_GEN_BAILOUT";class a extends Error{constructor(...e){super(...e),this.code=o}}function s(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===o}function u(e,t){let{dynamic:r,link:n}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(n?" See more info here: "+n:"")}let l=(e,t)=>{let{dynamic:r,link:o}=void 0===t?{}:t,s=i.staticGenerationAsyncStorage.getStore();if(!s)return!1;if(s.forceStatic)return!0;if(s.dynamicShouldError)throw new a(u(e,{link:o,dynamic:null!=r?r:"error"}));let l=u(e,{dynamic:r,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==s.postpone||s.postpone.call(s,e),s.revalidate=0,s.isStaticGeneration){let t=new n.DynamicServerError(l);throw s.dynamicUsageDescription=e,s.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[1638,6206,6024],()=>r(37922));module.exports=n})();