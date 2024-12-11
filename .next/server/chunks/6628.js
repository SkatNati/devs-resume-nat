"use strict";exports.id=6628,exports.ids=[6628],exports.modules={76628:(e,t,r)=>{r.r(t),r.d(t,{encodeIntoResult:()=>c,stegaEncodeSourceMap:()=>y,stegaEncodeSourceMap$1:()=>m});var n=r(96179);let i=/_key\s*==\s*['"](.*)['"]/;function l(e){if(!Array.isArray(e))throw Error("Path is not an array");return e.reduce((e,t,r)=>{let n=typeof t;if("number"===n)return`${e}[${t}]`;if("string"===n)return`${e}${0===r?"":"."}${t}`;if(("string"==typeof t?i.test(t.trim()):"object"==typeof t&&"_key"in t)&&t._key)return`${e}[_key=="${t._key}"]`;if(Array.isArray(t)){let[r,n]=t;return`${e}[${r}:${n}]`}throw Error(`Unsupported path segment \`${JSON.stringify(t)}\``)},"")}let o={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},s={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function a(e){let t;let r=[],n=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;for(;null!==(t=n.exec(e));){if(void 0!==t[1]){let e=t[1].replace(/\\(\\|f|n|r|t|')/g,e=>s[e]);r.push(e);continue}if(void 0!==t[2]){r.push(parseInt(t[2],10));continue}if(void 0!==t[3]){let e=t[3].replace(/\\(\\')/g,e=>s[e]);r.push({_key:e,_index:-1});continue}}return r}function u(e){return e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(""!==e._key)return{_key:e._key};if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)})}function p(e){return"object"==typeof e&&null!==e}function c(e,t,r){return function e(t,r,n=[]){return null!==t&&Array.isArray(t)?t.map((t,i)=>{if(p(t)){let l=t._key;if("string"==typeof l)return e(t,r,n.concat({_key:l,_index:i}))}return e(t,r,n.concat(i))}):p(t)?Object.fromEntries(Object.entries(t).map(([t,i])=>[t,e(i,r,n.concat(t))])):r(t,n)}(e,(e,n)=>{if("string"!=typeof e)return e;let i=function(e,t){var r;if(!(null!=t&&t.mappings))return;let n=(r=e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)}),`$${r.map(e=>"string"==typeof e?`['${e.replace(/[\f\n\r\t'\\]/g,e=>o[e])}']`:"number"==typeof e?`[${e}]`:""!==e._key?`[?(@._key=='${e._key.replace(/['\\]/g,e=>o[e])}')]`:`[${e._index}]`).join("")}`);if(void 0!==t.mappings[n])return{mapping:t.mappings[n],matchedPath:n,pathSuffix:""};let i=Object.entries(t.mappings).filter(([e])=>n.startsWith(e)).sort(([e],[t])=>t.length-e.length);if(0==i.length)return;let[l,s]=i[0],a=n.substring(l.length);return{mapping:s,matchedPath:l,pathSuffix:a}}(n,t);if(!i)return e;let{mapping:l,matchedPath:s}=i;if("value"!==l.type||"documentValue"!==l.source.type)return e;let u=t.documents[l.source.document],p=t.paths[l.source.path],c=a(s);return r({sourcePath:a(p).concat(n.slice(c.length)),sourceDocument:u,resultPath:n,value:e})})}let d="drafts.",f=({sourcePath:e,resultPath:t,value:r})=>{if(function(e){return!!/^\d{4}-\d{2}-\d{2}/.test(e)&&!!Date.parse(e)}(r)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(r))return!1;let n=e.at(-1);return!("slug"===e.at(-2)&&"current"===n||"string"==typeof n&&n.startsWith("_")||"number"==typeof n&&"marks"===e.at(-2)||"href"===n&&"number"==typeof e.at(-2)&&"markDefs"===e.at(-3)||"style"===n||"listItem"===n||e.some(e=>"meta"===e||"metadata"===e||"openGraph"===e||"seo"===e)||g(e)||g(t)||"string"==typeof n&&h.has(n))},h=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","unit","url","username","variant","website"]);function g(e){return e.some(e=>"string"==typeof e&&null!==e.match(/type/i))}function y(e,t,r){var o,s,a,p,h,g,y,m,$;let{filter:_,logger:k,enabled:v}=r;if(!v){let n="config.enabled must be true, don't call this function otherwise";throw null==(o=null==k?void 0:k.error)||o.call(k,`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}if(!t)return null==(s=null==k?void 0:k.error)||s.call(k,"[@sanity/client]: Missing Content Source Map from response body",{result:e,resultSourceMap:t,config:r}),e;if(!r.studioUrl){let n="config.studioUrl must be defined";throw null==(a=null==k?void 0:k.error)||a.call(k,`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}let b={encoded:[],skipped:[]},w=c(e,t,({sourcePath:e,sourceDocument:t,resultPath:i,value:o})=>{var s;let a;if(("function"==typeof _?_({sourcePath:e,resultPath:i,filterDefault:f,sourceDocument:t,value:o}):f({sourcePath:e,resultPath:i,filterDefault:f,sourceDocument:t,value:o}))===!1)return k&&b.skipped.push({path:l(u(e)),value:`${o.slice(0,20)}${o.length>20?"...":""}`,length:o.length}),o;k&&b.encoded.push({path:l(u(e)),value:`${o.slice(0,20)}${o.length>20?"...":""}`,length:o.length});let{baseUrl:p,workspace:c,tool:h}=("/"!==(a="string"==typeof(s="function"==typeof r.studioUrl?r.studioUrl(t):r.studioUrl)?s:s.baseUrl)&&(a=a.replace(/\/$/,"")),"string"==typeof s?{baseUrl:a}:{...s,baseUrl:a});if(!p)return o;let{_id:g,_type:y,_projectId:m,_dataset:$}=t;return(0,n.C)(o,{origin:"sanity.io",href:function(e){let{baseUrl:t,workspace:r="default",tool:n="default",id:i,type:o,path:s,projectId:a,dataset:p}=e;if(!t)throw Error("baseUrl is required");if(!s)throw Error("path is required");if(!i)throw Error("id is required");if("/"!==t&&t.endsWith("/"))throw Error("baseUrl must not end with a slash");let c="default"===r?void 0:r,f="default"===n?void 0:n,h=i.startsWith(d)?i.slice(d.length):i,g=Array.isArray(s)?l(u(s)):s,y=new URLSearchParams({baseUrl:t,id:h,type:o,path:g});c&&y.set("workspace",c),f&&y.set("tool",f),a&&y.set("projectId",a),p&&y.set("dataset",p),i.startsWith(d)&&y.set("isDraft","");let m=["/"===t?"":t];c&&m.push(c);let $=["mode=presentation",`id=${h}`,`type=${o}`,`path=${encodeURIComponent(g)}`];return f&&$.push(`tool=${f}`),m.push("intent","edit",`${$.join(";")}?${y}`),m.join("/")}({baseUrl:p,workspace:c,tool:h,id:g,type:y,path:e,...!r.omitCrossDatasetReferenceData&&{dataset:$,projectId:m}})},!1)});if(k){let e=b.skipped.length,t=b.encoded.length;if((e||t)&&(null==(p=(null==k?void 0:k.groupCollapsed)||k.log)||p("[@sanity/client]: Encoding source map into result"),null==(h=k.log)||h.call(k,`[@sanity/client]: Paths encoded: ${b.encoded.length}, skipped: ${b.skipped.length}`)),b.encoded.length>0&&(null==(g=null==k?void 0:k.log)||g.call(k,"[@sanity/client]: Table of encoded paths"),null==(y=(null==k?void 0:k.table)||k.log)||y(b.encoded)),b.skipped.length>0){let e=new Set;for(let{path:t}of b.skipped)e.add(t.replace(i,"0").replace(/\[\d+\]/g,"[]"));null==(m=null==k?void 0:k.log)||m.call(k,"[@sanity/client]: List of skipped paths",[...e.values()])}(e||t)&&(null==($=null==k?void 0:k.groupEnd)||$.call(k))}return w}var m=Object.freeze({__proto__:null,stegaEncodeSourceMap:y})}};