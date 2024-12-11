"use strict";(()=>{var e={};e.id=433,e.ids=[433],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},60813:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>S,originalPathname:()=>h,patchFetch:()=>v,requestAsyncStorage:()=>g,routeModule:()=>f,serverHooks:()=>w,staticGenerationAsyncStorage:()=>y,staticGenerationBailout:()=>q});var i={};t.r(i),t.d(i,{GET:()=>m});var n=t(95419),s=t(69108),o=t(99678),a=t(76520),u=t(78070),c=t(42254),d=t.n(c),l=t(76379),p=t(81355);let m=async()=>{try{await (0,a.Z)();let e=await (0,p.getServerSession)(l.L);if(!e)return u.Z.json({error:"Please login"},{status:401});let r=e._id,t=await d().findOne({user:r});if(!t)return u.Z.json({message:"No user subscription found with this user ID"},{status:404});let i=t.stripePriceId&&t.stripeCurrentPeriodEnd?.getTime()+864e5>Date.now();return u.Z.json({data:{userSubscription:t,isActive:!!i}},{status:200})}catch(e){return u.Z.json({error:"error occur "+e},{status:500})}},f=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/User/user-subscription/route",pathname:"/api/User/user-subscription",filename:"route",bundlePath:"app/api/User/user-subscription/route"},resolvedPagePath:"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\api\\User\\user-subscription\\route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:g,staticGenerationAsyncStorage:y,serverHooks:w,headerHooks:S,staticGenerationBailout:q}=f,h="/api/User/user-subscription/route";function v(){return(0,o.patchFetch)({serverHooks:w,staticGenerationAsyncStorage:y})}},76379:(e,r,t)=>{t.d(r,{L:()=>d});var i=t(10375),n=t(69568),s=t(61232),o=t(76520),a=t(7439),u=t(46082),c=t.n(u);let d={providers:[(0,i.Z)({clientId:"613085402067-0n9eojdq3839bmli9ucupviuptdvlfmu.apps.googleusercontent.com",clientSecret:"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"}),(0,n.Z)({clientId:"78lj0qyyxagzm4",clientSecret:"WPL_AP0.uE5KbHCdbAWOJ2PD.NzgxNjY1Mjc3",client:{token_endpoint_auth_method:"client_secret_post"},issuer:"https://www.linkedin.com",profile:e=>({id:e.sub,name:e.name,email:e.email,image:e.picture}),wellKnown:"https://www.linkedin.com/oauth/.well-known/openid-configuration",authorization:{params:{scope:"openid profile email"}}})],session:{strategy:"jwt"},callbacks:{async signIn({user:e,profile:r}){try{await (0,o.Z)();let t=await s.Z.findOne({email:e.email}),i=await l(e.email);if(!t){let t=await s.Z.create({email:e?.email,firstName:r?.given_name||"",lastName:r?.family_name||"",password:e.email,image:e?.image||""});return await p("token",i),await p("userID",t._id),t}await p("token",i),await p("userID",t._id)}catch(e){return console.error("Error occurred during sign-in:",e),!1}return!0},async session({session:e,token:r}){try{return await (0,o.Z)(),{...await s.Z.findOne({email:r.email}).select("-password").lean()}}catch(r){return console.error("Error occurred during session retrieval:",r),e}}},secret:process.env.NEXTAUTH_SECRET,pages:{signIn:"/login",error:"/error"}};async function l(e){return c().sign({email:e},"wewjenjwn3e23787y389e",{expiresIn:"1w"})}async function p(e,r){(0,a.cookies)().set(e,r),(0,a.cookies)().set(e,r)}},76520:(e,r,t)=>{t.d(r,{Z:()=>s});var i=t(11185),n=t.n(i);let s=async()=>{try{await n().connect("mongodb+srv://Salahdin:WqN5xnY7Y2gdyWQ4@serverlessinstance0.jzng7nc.mongodb.net/dev's-resume")}catch(e){throw Error("connection failed")}}},61232:(e,r,t)=>{t.d(r,{Z:()=>s});let i=t(11185),n=new i.Schema({email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},firstName:{type:String,required:!0},lastName:{type:String,required:!0},password:{type:String,required:!0},image:{type:String}},{timestamps:!0}),s=i.models.User||i.model("User",n)},42254:(e,r,t)=>{let i=t(11185),n=new i.Schema({user:{type:i.Schema.Types.ObjectId,ref:"User",required:!0},stripeSubscriptionId:{type:String,required:!0},stripeCustomerId:{type:String,required:!0},plan:{type:String,required:!0},stripeCurrentPeriodEnd:{type:Date,required:!0},cardBrand:{type:String,required:!0},cardLast4:{type:String,required:!0},stripePaymentMethodId:{type:String,required:!0},stripePriceId:{type:String,required:!0},planName:{type:String,required:!0}},{timestamps:!0}),s=i.models.UserSubscription||i.model("UserSubscription",n);e.exports=s},48096:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{DynamicServerError:function(){return i},isDynamicServerError:function(){return n}});let t="DYNAMIC_SERVER_USAGE";class i extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=t}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===t}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},72973:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{isStaticGenBailoutError:function(){return a},staticGenerationBailout:function(){return c}});let i=t(48096),n=t(45869),s="NEXT_STATIC_GEN_BAILOUT";class o extends Error{constructor(...e){super(...e),this.code=s}}function a(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===s}function u(e,r){let{dynamic:t,link:i}=r||{};return"Page"+(t?' with `dynamic = "'+t+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(i?" See more info here: "+i:"")}let c=(e,r)=>{let{dynamic:t,link:s}=void 0===r?{}:r,a=n.staticGenerationAsyncStorage.getStore();if(!a)return!1;if(a.forceStatic)return!0;if(a.dynamicShouldError)throw new o(u(e,{link:s,dynamic:null!=t?t:"error"}));let c=u(e,{dynamic:t,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==a.postpone||a.postpone.call(a,e),a.revalidate=0,a.isStaticGeneration){let r=new i.DynamicServerError(c);throw a.dynamicUsageDescription=e,a.dynamicUsageStack=r.stack,r}return!1};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[1638,6206,6024],()=>t(60813));module.exports=i})();