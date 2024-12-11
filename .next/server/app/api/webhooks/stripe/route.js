"use strict";(()=>{var e={};e.id=798,e.ids=[798],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},73837:e=>{e.exports=require("util")},50684:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>_,originalPathname:()=>q,patchFetch:()=>I,requestAsyncStorage:()=>S,routeModule:()=>g,serverHooks:()=>A,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>k});var a={};r.r(a),r.d(a,{POST:()=>m});var i=r(95419),s=r(69108),n=r(99678),o=r(7439);r(91211);var d=r(78070),u=r(34957),c=r(42254),p=r.n(c),l=r(87663),f=r.n(l);async function m(e){let t;let r=await e.text(),a=(0,o.headers)().get("Stripe-Signature")??"";try{t=u.A.webhooks.constructEvent(r,a,process.env.STRIPE_WEBHOOK_SECRET||"")}catch(e){return new d.Z(`Webhook Error: ${e.message}`,{status:400})}let i=t.data.object;switch(t.type){case"checkout.session.completed":await y(i);break;case"invoice.payment_succeeded":await h(i);break;case"customer.subscription.updated":await b(i);break;case"charge.updated":await w(i);break;default:console.log(`Unhandled event type ${t.type}`)}return new Response(null,{status:200})}async function y(e){let t=await u.A.subscriptions.retrieve(e.subscription),r=await u.A.paymentMethods.retrieve(t.default_payment_method),a=await u.A.products.retrieve(t.items.data[0].price.product);if(!e?.metadata?.userId)return new d.Z("User Id is required",{status:400});await p().create({user:e.metadata.userId,stripeCustomerId:t.customer,stripeSubscriptionId:t.id,plan:t.items.data[0].price.product,planName:a.name,stripePriceId:t.items.data[0].price.id,stripeCurrentPeriodEnd:new Date(1e3*t.current_period_end),cardBrand:r.card.brand,cardLast4:r.card.last4,stripePaymentMethodId:t.default_payment_method}),await f().findOne({user:e.metadata.userId,stripeSubscriptionId:t.id,priceId:t.items.data[0].price.id,date:new Date().toDateString()})||await f().create({user:e.metadata.userId,stripeSubscriptionId:t.id,priceId:t.items.data[0].price.id,planName:a.name,status:e.payment_status,amount:t.items.data[0].price.unit_amount/100,cardBrand:r.card.brand,cardLast4:r.card.last4,date:new Date})}async function h(e){let t=await u.A.subscriptions.retrieve(e.subscription),r=await u.A.products.retrieve(t.items.data[0].price.product),a=await u.A.paymentMethods.retrieve(t.default_payment_method),i=await p().findOne({stripeSubscriptionId:t.id});if(!i)return new d.Z("User subscription not found",{status:404});await p().findOneAndUpdate({stripeSubscriptionId:t.id},{stripeCurrentPeriodEnd:new Date(1e3*t.current_period_end),plan:t.items.data[0].price.product,planName:r.name,stripePriceId:t.items.data[0].price.id},{new:!0}),await f().findOne({user:i.user,stripeSubscriptionId:t.id,priceId:t.items.data[0].price.id,date:new Date().toDateString()})||await f().create({user:i.user,stripeSubscriptionId:t.id,priceId:t.items.data[0].price.id,planName:r.name,status:e.status,amount:e.amount_paid/100,cardBrand:a.card.brand,cardLast4:a.card.last4,date:new Date})}async function b(e){let t=await u.A.products.retrieve(e.items.data[0].price.product),r=await u.A.paymentMethods.retrieve(e.default_payment_method),a=await p().findOne({stripeSubscriptionId:e.id});if(!a)return new d.Z("User subscription not found",{status:404});await p().findOneAndUpdate({stripeSubscriptionId:e.id},{stripeCurrentPeriodEnd:new Date(1e3*e.current_period_end),plan:e.items.data[0].price.product,planName:t.name,stripePriceId:e.items.data[0].price.id},{new:!0}),await f().findOne({user:a.user,stripeSubscriptionId:e.id,priceId:e.items.data[0].price.id,date:new Date().toDateString()})||await f().create({user:a.user,stripeSubscriptionId:e.id,priceId:e.items.data[0].price.id,planName:t.name,status:e.status,amount:e.items.data[0].price.unit_amount/100,cardBrand:r.card.brand,cardLast4:r.card.last4,date:new Date})}async function w(e){let t=await u.A.invoices.retrieve(e.invoice),r=await u.A.subscriptions.retrieve(t.subscription),a=await u.A.paymentMethods.retrieve(r.default_payment_method),i=await p().findOne({stripeSubscriptionId:r.id});if(!i)return new d.Z("User subscription not found",{status:404});await f().findOne({user:i.user,stripeSubscriptionId:r.id,priceId:r.items.data[0].price.id,date:new Date().toDateString()})||await f().create({user:i.user,stripeSubscriptionId:r.id,priceId:r.items.data[0].price.id,planName:t.lines.data[0].plan.nickname,status:e.status,amount:e.amount/100,cardBrand:a.card.brand,cardLast4:a.card.last4,date:new Date})}let g=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/webhooks/stripe/route",pathname:"/api/webhooks/stripe",filename:"route",bundlePath:"app/api/webhooks/stripe/route"},resolvedPagePath:"C:\\My Files\\Teneshu\\Talent\\Upwork\\Dev's Resume Finalizing\\Mine\\Dev-s-Resume-main\\app\\api\\webhooks\\stripe\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:S,staticGenerationAsyncStorage:v,serverHooks:A,headerHooks:_,staticGenerationBailout:k}=g,q="/api/webhooks/stripe/route";function I(){return(0,n.patchFetch)({serverHooks:A,staticGenerationAsyncStorage:v})}},34957:(e,t,r)=>{r.d(t,{A:()=>a});let a=new(r(91211)).Z(process.env.STRIPE_SECRET_KEY??"",{apiVersion:"2024-06-20"})},87663:(e,t,r)=>{let a=r(11185),i=new a.Schema({user:{type:a.Schema.Types.ObjectId,ref:"User",required:!0},stripeSubscriptionId:{type:String,required:!0},priceId:{type:String,required:!0},planName:{type:String,required:!0},status:{type:String,required:!0},amount:{type:Number,required:!0},cardBrand:{type:String,required:!0},cardLast4:{type:String,required:!0},date:{type:Date,required:!0}},{timestamps:!0}),s=a.models.BillingHistory||a.model("BillingHistory",i);e.exports=s},42254:(e,t,r)=>{let a=r(11185),i=new a.Schema({user:{type:a.Schema.Types.ObjectId,ref:"User",required:!0},stripeSubscriptionId:{type:String,required:!0},stripeCustomerId:{type:String,required:!0},plan:{type:String,required:!0},stripeCurrentPeriodEnd:{type:Date,required:!0},cardBrand:{type:String,required:!0},cardLast4:{type:String,required:!0},stripePaymentMethodId:{type:String,required:!0},stripePriceId:{type:String,required:!0},planName:{type:String,required:!0}},{timestamps:!0}),s=a.models.UserSubscription||a.model("UserSubscription",i);e.exports=s},7439:(e,t,r)=>{r.r(t);var a=r(28290),i={};for(let e in a)"default"!==e&&(i[e]=()=>a[e]);r.d(t,i)},58284:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraftMode",{enumerable:!0,get:function(){return i}});let a=r(72973);class i{get isEnabled(){return this._provider.isEnabled}enable(){if(!(0,a.staticGenerationBailout)("draftMode().enable()"))return this._provider.enable()}disable(){if(!(0,a.staticGenerationBailout)("draftMode().disable()"))return this._provider.disable()}constructor(e){this._provider=e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},28290:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{headers:function(){return c},cookies:function(){return p},draftMode:function(){return l}});let a=r(97366),i=r(3022),s=r(63608),n=r(54580),o=r(72934),d=r(72973),u=r(58284);function c(){if((0,d.staticGenerationBailout)("headers",{link:"https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"}))return i.HeadersAdapter.seal(new Headers({}));let e=n.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: headers() expects to have requestAsyncStorage, none available.");return e.headers}function p(){if((0,d.staticGenerationBailout)("cookies",{link:"https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"}))return a.RequestCookiesAdapter.seal(new s.RequestCookies(new Headers({})));let e=n.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: cookies() expects to have requestAsyncStorage, none available.");let t=o.actionAsyncStorage.getStore();return t&&(t.isAction||t.isAppRoute)?e.mutableCookies:e.cookies}function l(){let e=n.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: draftMode() expects to have requestAsyncStorage, none available.");return new u.DraftMode(e.draftMode)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3022:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyHeadersError:function(){return i},HeadersAdapter:function(){return s}});let a=r(6250);class i extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new i}}class s extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,i){if("symbol"==typeof r)return a.ReflectAdapter.get(t,r,i);let s=r.toLowerCase(),n=Object.keys(e).find(e=>e.toLowerCase()===s);if(void 0!==n)return a.ReflectAdapter.get(t,n,i)},set(t,r,i,s){if("symbol"==typeof r)return a.ReflectAdapter.set(t,r,i,s);let n=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===n);return a.ReflectAdapter.set(t,o??r,i,s)},has(t,r){if("symbol"==typeof r)return a.ReflectAdapter.has(t,r);let i=r.toLowerCase(),s=Object.keys(e).find(e=>e.toLowerCase()===i);return void 0!==s&&a.ReflectAdapter.has(t,s)},deleteProperty(t,r){if("symbol"==typeof r)return a.ReflectAdapter.deleteProperty(t,r);let i=r.toLowerCase(),s=Object.keys(e).find(e=>e.toLowerCase()===i);return void 0===s||a.ReflectAdapter.deleteProperty(t,s)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return i.callable;default:return a.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new s(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,a]of this.entries())e.call(t,a,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},6250:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let a=Reflect.get(e,t,r);return"function"==typeof a?a.bind(e):a}static set(e,t,r,a){return Reflect.set(e,t,r,a)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},97366:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyRequestCookiesError:function(){return s},RequestCookiesAdapter:function(){return n},getModifiedCookieValues:function(){return d},appendMutableCookies:function(){return u},MutableRequestCookiesAdapter:function(){return c}});let a=r(63608),i=r(6250);class s extends Error{constructor(){super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")}static callable(){throw new s}}class n{static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"clear":case"delete":case"set":return s.callable;default:return i.ReflectAdapter.get(e,t,r)}}})}}let o=Symbol.for("next.mutated.cookies");function d(e){let t=e[o];return t&&Array.isArray(t)&&0!==t.length?t:[]}function u(e,t){let r=d(t);if(0===r.length)return!1;let i=new a.ResponseCookies(e),s=i.getAll();for(let e of r)i.set(e);for(let e of s)i.set(e);return!0}class c{static wrap(e,t){let r=new a.ResponseCookies(new Headers);for(let t of e.getAll())r.set(t);let s=[],n=new Set,d=()=>{var e;let i=null==fetch.__nextGetStaticStore?void 0:null==(e=fetch.__nextGetStaticStore.call(fetch))?void 0:e.getStore();if(i&&(i.pathWasRevalidated=!0),s=r.getAll().filter(e=>n.has(e.name)),t){let e=[];for(let t of s){let r=new a.ResponseCookies(new Headers);r.set(t),e.push(r.toString())}t(e)}};return new Proxy(r,{get(e,t,r){switch(t){case o:return s;case"delete":return function(...t){n.add("string"==typeof t[0]?t[0]:t[0].name);try{e.delete(...t)}finally{d()}};case"set":return function(...t){n.add("string"==typeof t[0]?t[0]:t[0].name);try{return e.set(...t)}finally{d()}};default:return i.ReflectAdapter.get(e,t,r)}}})}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,6206,4798],()=>r(50684));module.exports=a})();