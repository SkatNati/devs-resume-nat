"use strict";exports.id=7581,exports.ids=[7581],exports.modules={57581:(e,t,n)=>{/*! @license DOMPurify 2.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.0/LICENSE */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,n){return(a=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}:Reflect.construct).apply(null,arguments)}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.r(t),n.d(t,{default:()=>er});var c,s=Object.hasOwnProperty,u=Object.setPrototypeOf,m=Object.isFrozen,f=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,d=Object.freeze,h=Object.seal,g=Object.create,y="undefined"!=typeof Reflect&&Reflect,b=y.apply,T=y.construct;b||(b=function(e,t,n){return e.apply(t,n)}),d||(d=function(e){return e}),h||(h=function(e){return e}),T||(T=function(e,t){return a(e,i(t))});var N=C(Array.prototype.forEach),v=C(Array.prototype.pop),E=C(Array.prototype.push),A=C(String.prototype.toLowerCase),S=C(String.prototype.toString),_=C(String.prototype.match),w=C(String.prototype.replace),x=C(String.prototype.indexOf),O=C(String.prototype.trim),k=C(RegExp.prototype.test),L=(c=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return T(c,t)});function C(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(e,t,r)}}function R(e,t,n){n=null!==(r=n)&&void 0!==r?r:A,u&&u(e,null);for(var r,o=t.length;o--;){var a=t[o];if("string"==typeof a){var i=n(a);i!==a&&(m(t)||(t[o]=i),a=i)}e[a]=!0}return e}function D(e){var t,n=g(null);for(t in e)!0===b(s,e,[t])&&(n[t]=e[t]);return n}function M(e,t){for(;null!==e;){var n=p(e,t);if(n){if(n.get)return C(n.get);if("function"==typeof n.value)return C(n.value)}e=f(e)}return function(e){return console.warn("fallback value for",e),null}}var I=d(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),F=d(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),U=d(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),H=d(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=d(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),P=d(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),j=d(["#text"]),B=d(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),G=d(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=d(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),q=d(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Y=h(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$=h(/<%[\w\W]*|[\w\W]*%>/gm),K=h(/\${[\w\W]*}/gm),V=h(/^data-[\-\w.\u00B7-\uFFFF]/),X=h(/^aria-[\-\w]+$/),Z=h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),J=h(/^(?:\w+script|data):/i),Q=h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ee=h(/^html$/i),et=h(/^[a-z][.\w]*(-[.\w]+)+$/i),en=function(e,t){if("object"!==r(e)||"function"!=typeof e.createPolicy)return null;var n=null,o="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(o)&&(n=t.currentScript.getAttribute(o));var a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}},er=function e(){var t,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=function(t){return e(t)};if(a.version="2.5.0",a.removed=[],!o||!o.document||9!==o.document.nodeType)return a.isSupported=!1,a;var l=o.document,c=o.document,s=o.DocumentFragment,u=o.HTMLTemplateElement,m=o.Node,f=o.Element,p=o.NodeFilter,h=o.NamedNodeMap,g=void 0===h?o.NamedNodeMap||o.MozNamedAttrMap:h,y=o.HTMLFormElement,b=o.DOMParser,T=o.trustedTypes,C=f.prototype,er=M(C,"cloneNode"),eo=M(C,"nextSibling"),ea=M(C,"childNodes"),ei=M(C,"parentNode");if("function"==typeof u){var el=c.createElement("template");el.content&&el.content.ownerDocument&&(c=el.content.ownerDocument)}var ec=en(T,l),es=ec?ec.createHTML(""):"",eu=c,em=eu.implementation,ef=eu.createNodeIterator,ep=eu.createDocumentFragment,ed=eu.getElementsByTagName,eh=l.importNode,eg={};try{eg=D(c).documentMode?c.documentMode:{}}catch(e){}var ey={};a.isSupported="function"==typeof ei&&em&&void 0!==em.createHTMLDocument&&9!==eg;var eb=Z,eT=null,eN=R({},[].concat(i(I),i(F),i(U),i(z),i(j))),ev=null,eE=R({},[].concat(i(B),i(G),i(W),i(q))),eA=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),eS=null,e_=null,ew=!0,ex=!0,eO=!1,ek=!0,eL=!1,eC=!0,eR=!1,eD=!1,eM=!1,eI=!1,eF=!1,eU=!1,eH=!0,ez=!1,eP=!0,ej=!1,eB={},eG=null,eW=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eq=null,eY=R({},["audio","video","img","source","image","track"]),e$=null,eK=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eV="http://www.w3.org/1998/Math/MathML",eX="http://www.w3.org/2000/svg",eZ="http://www.w3.org/1999/xhtml",eJ=eZ,eQ=!1,e0=null,e1=R({},[eV,eX,eZ],S),e2=["application/xhtml+xml","text/html"],e9=null,e3=c.createElement("form"),e8=function(e){return e instanceof RegExp||e instanceof Function},e5=function(e){e9&&e9===e||(e&&"object"===r(e)||(e={}),e=D(e),n="application/xhtml+xml"===(t=t=-1===e2.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?S:A,eT="ALLOWED_TAGS"in e?R({},e.ALLOWED_TAGS,n):eN,ev="ALLOWED_ATTR"in e?R({},e.ALLOWED_ATTR,n):eE,e0="ALLOWED_NAMESPACES"in e?R({},e.ALLOWED_NAMESPACES,S):e1,e$="ADD_URI_SAFE_ATTR"in e?R(D(eK),e.ADD_URI_SAFE_ATTR,n):eK,eq="ADD_DATA_URI_TAGS"in e?R(D(eY),e.ADD_DATA_URI_TAGS,n):eY,eG="FORBID_CONTENTS"in e?R({},e.FORBID_CONTENTS,n):eW,eS="FORBID_TAGS"in e?R({},e.FORBID_TAGS,n):{},e_="FORBID_ATTR"in e?R({},e.FORBID_ATTR,n):{},eB="USE_PROFILES"in e&&e.USE_PROFILES,ew=!1!==e.ALLOW_ARIA_ATTR,ex=!1!==e.ALLOW_DATA_ATTR,eO=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ek=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,eL=e.SAFE_FOR_TEMPLATES||!1,eC=!1!==e.SAFE_FOR_XML,eR=e.WHOLE_DOCUMENT||!1,eI=e.RETURN_DOM||!1,eF=e.RETURN_DOM_FRAGMENT||!1,eU=e.RETURN_TRUSTED_TYPE||!1,eM=e.FORCE_BODY||!1,eH=!1!==e.SANITIZE_DOM,ez=e.SANITIZE_NAMED_PROPS||!1,eP=!1!==e.KEEP_CONTENT,ej=e.IN_PLACE||!1,eb=e.ALLOWED_URI_REGEXP||eb,eJ=e.NAMESPACE||eZ,eA=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&e8(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eA.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&e8(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eA.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eA.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),eL&&(ex=!1),eF&&(eI=!0),eB&&(eT=R({},i(j)),ev=[],!0===eB.html&&(R(eT,I),R(ev,B)),!0===eB.svg&&(R(eT,F),R(ev,G),R(ev,q)),!0===eB.svgFilters&&(R(eT,U),R(ev,G),R(ev,q)),!0===eB.mathMl&&(R(eT,z),R(ev,W),R(ev,q))),e.ADD_TAGS&&(eT===eN&&(eT=D(eT)),R(eT,e.ADD_TAGS,n)),e.ADD_ATTR&&(ev===eE&&(ev=D(ev)),R(ev,e.ADD_ATTR,n)),e.ADD_URI_SAFE_ATTR&&R(e$,e.ADD_URI_SAFE_ATTR,n),e.FORBID_CONTENTS&&(eG===eW&&(eG=D(eG)),R(eG,e.FORBID_CONTENTS,n)),eP&&(eT["#text"]=!0),eR&&R(eT,["html","head","body"]),eT.table&&(R(eT,["tbody"]),delete eS.tbody),d&&d(e),e9=e)},e7=R({},["mi","mo","mn","ms","mtext"]),e6=R({},["foreignobject","desc","title","annotation-xml"]),e4=R({},["title","style","font","a","script"]),te=R({},F);R(te,U),R(te,H);var tt=R({},z);R(tt,P);var tn=function(e){var n=ei(e);n&&n.tagName||(n={namespaceURI:eJ,tagName:"template"});var r=A(e.tagName),o=A(n.tagName);return!!e0[e.namespaceURI]&&(e.namespaceURI===eX?n.namespaceURI===eZ?"svg"===r:n.namespaceURI===eV?"svg"===r&&("annotation-xml"===o||e7[o]):!!te[r]:e.namespaceURI===eV?n.namespaceURI===eZ?"math"===r:n.namespaceURI===eX?"math"===r&&e6[o]:!!tt[r]:e.namespaceURI===eZ?(n.namespaceURI!==eX||!!e6[o])&&(n.namespaceURI!==eV||!!e7[o])&&!tt[r]&&(e4[r]||!te[r]):"application/xhtml+xml"===t&&!!e0[e.namespaceURI])},tr=function(e){E(a.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=es}catch(t){e.remove()}}},to=function(e,t){try{E(a.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){E(a.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ev[e]){if(eI||eF)try{tr(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},ta=function(e){if(eM)e="<remove></remove>"+e;else{var n,r,o=_(e,/^[\r\n\t ]+/);r=o&&o[0]}"application/xhtml+xml"===t&&eJ===eZ&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=ec?ec.createHTML(e):e;if(eJ===eZ)try{n=new b().parseFromString(a,t)}catch(e){}if(!n||!n.documentElement){n=em.createDocument(eJ,"template",null);try{n.documentElement.innerHTML=eQ?es:a}catch(e){}}var i=n.body||n.documentElement;return(e&&r&&i.insertBefore(c.createTextNode(r),i.childNodes[0]||null),eJ===eZ)?ed.call(n,eR?"html":"body")[0]:eR?n.documentElement:i},ti=function(e){return ef.call(e.ownerDocument||e,e,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null,!1)},tl=function(e){return"object"===r(m)?e instanceof m:e&&"object"===r(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},tc=function(e,t,n){ey[e]&&N(ey[e],function(e){e.call(a,t,n,e9)})},ts=function(e){if(tc("beforeSanitizeElements",e,null),e instanceof y&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof g)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)||k(/[\u0080-\uFFFF]/,e.nodeName))return tr(e),!0;var t,r=n(e.nodeName);if(tc("uponSanitizeElement",e,{tagName:r,allowedTags:eT}),e.hasChildNodes()&&!tl(e.firstElementChild)&&(!tl(e.content)||!tl(e.content.firstElementChild))&&k(/<[/\w]/g,e.innerHTML)&&k(/<[/\w]/g,e.textContent)||"select"===r&&k(/<template/i,e.innerHTML)||7===e.nodeType||eC&&8===e.nodeType&&k(/<[/\w]/g,e.data))return tr(e),!0;if(!eT[r]||eS[r]){if(!eS[r]&&tm(r)&&(eA.tagNameCheck instanceof RegExp&&k(eA.tagNameCheck,r)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(r)))return!1;if(eP&&!eG[r]){var o=ei(e)||e.parentNode,i=ea(e)||e.childNodes;if(i&&o)for(var l=i.length,c=l-1;c>=0;--c)o.insertBefore(er(i[c],!0),eo(e))}return tr(e),!0}return e instanceof f&&!tn(e)||("noscript"===r||"noembed"===r||"noframes"===r)&&k(/<\/no(script|embed|frames)/i,e.innerHTML)?(tr(e),!0):(eL&&3===e.nodeType&&(t=w(t=e.textContent,Y," "),t=w(t,$," "),t=w(t,K," "),e.textContent!==t&&(E(a.removed,{element:e.cloneNode()}),e.textContent=t)),tc("afterSanitizeElements",e,null),!1)},tu=function(e,t,n){if(eH&&("id"===t||"name"===t)&&(n in c||n in e3))return!1;if(ex&&!e_[t]&&k(V,t));else if(ew&&k(X,t));else if(!ev[t]||e_[t]){if(!(tm(e)&&(eA.tagNameCheck instanceof RegExp&&k(eA.tagNameCheck,e)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(e))&&(eA.attributeNameCheck instanceof RegExp&&k(eA.attributeNameCheck,t)||eA.attributeNameCheck instanceof Function&&eA.attributeNameCheck(t))||"is"===t&&eA.allowCustomizedBuiltInElements&&(eA.tagNameCheck instanceof RegExp&&k(eA.tagNameCheck,n)||eA.tagNameCheck instanceof Function&&eA.tagNameCheck(n))))return!1}else if(e$[t]);else if(k(eb,w(n,Q,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===x(n,"data:")&&eq[e]);else if(eO&&!k(J,w(n,Q,"")));else if(n)return!1;return!0},tm=function(e){return"annotation-xml"!==e&&_(e,et)},tf=function(e){tc("beforeSanitizeAttributes",e,null);var t,o,i,l,c=e.attributes;if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ev};for(l=c.length;l--;){var u=(t=c[l]).name,m=t.namespaceURI;if(o="value"===u?t.value:O(t.value),i=n(u),s.attrName=i,s.attrValue=o,s.keepAttr=!0,s.forceKeepAttr=void 0,tc("uponSanitizeAttribute",e,s),o=s.attrValue,!s.forceKeepAttr&&(to(u,e),s.keepAttr)){if(!ek&&k(/\/>/i,o)){to(u,e);continue}eL&&(o=w(o,Y," "),o=w(o,$," "),o=w(o,K," "));var f=n(e.nodeName);if(tu(f,i,o)){if(ez&&("id"===i||"name"===i)&&(to(u,e),o="user-content-"+o),ec&&"object"===r(T)&&"function"==typeof T.getAttributeType){if(m);else switch(T.getAttributeType(f,i)){case"TrustedHTML":o=ec.createHTML(o);break;case"TrustedScriptURL":o=ec.createScriptURL(o)}}try{m?e.setAttributeNS(m,u,o):e.setAttribute(u,o),v(a.removed)}catch(e){}}}}tc("afterSanitizeAttributes",e,null)}},tp=function e(t){var n,r=ti(t);for(tc("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)tc("uponSanitizeShadowNode",n,null),ts(n)||(n.content instanceof s&&e(n.content),tf(n));tc("afterSanitizeShadowDOM",t,null)};return a.sanitize=function(e){var t,i,c,u,f,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((eQ=!e)&&(e="<!-->"),"string"!=typeof e&&!tl(e)){if("function"==typeof e.toString){if("string"!=typeof(e=e.toString()))throw L("dirty is not a string, aborting")}else throw L("toString is not a function")}if(!a.isSupported){if("object"===r(o.toStaticHTML)||"function"==typeof o.toStaticHTML){if("string"==typeof e)return o.toStaticHTML(e);if(tl(e))return o.toStaticHTML(e.outerHTML)}return e}if(eD||e5(p),a.removed=[],"string"==typeof e&&(ej=!1),ej){if(e.nodeName){var d=n(e.nodeName);if(!eT[d]||eS[d])throw L("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof m)1===(i=(t=ta("<!---->")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName?t=i:"HTML"===i.nodeName?t=i:t.appendChild(i);else{if(!eI&&!eL&&!eR&&-1===e.indexOf("<"))return ec&&eU?ec.createHTML(e):e;if(!(t=ta(e)))return eI?null:eU?es:""}t&&eM&&tr(t.firstChild);for(var h=ti(ej?e:t);c=h.nextNode();)3===c.nodeType&&c===u||ts(c)||(c.content instanceof s&&tp(c.content),tf(c),u=c);if(u=null,ej)return e;if(eI){if(eF)for(f=ep.call(t.ownerDocument);t.firstChild;)f.appendChild(t.firstChild);else f=t;return(ev.shadowroot||ev.shadowrootmod)&&(f=eh.call(l,f,!0)),f}var g=eR?t.outerHTML:t.innerHTML;return eR&&eT["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&k(ee,t.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+g),eL&&(g=w(g,Y," "),g=w(g,$," "),g=w(g,K," ")),ec&&eU?ec.createHTML(g):g},a.setConfig=function(e){e5(e),eD=!0},a.clearConfig=function(){e9=null,eD=!1},a.isValidAttribute=function(e,t,r){return e9||e5({}),tu(n(e),n(t),r)},a.addHook=function(e,t){"function"==typeof t&&(ey[e]=ey[e]||[],E(ey[e],t))},a.removeHook=function(e){if(ey[e])return v(ey[e])},a.removeHooks=function(e){ey[e]&&(ey[e]=[])},a.removeAllHooks=function(){ey={}},a}()}};