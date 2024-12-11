(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3707],{23441:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(87461).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},87348:function(e){e.exports={style:{fontFamily:"'__Open_Sans_9c07b1', '__Open_Sans_Fallback_9c07b1'"},className:"__className_9c07b1",variable:"__variable_9c07b1"}},80146:function(e,t,r){"use strict";r.d(t,{VY:function(){return en},h4:function(){return et},ck:function(){return ee},fC:function(){return $},xz:function(){return er}});var n=r(14749),o=r(64090),l=r(84104),a=r(27533),i=r(61266),c=r(44991),d=r(9310),s=r(29586),u=r(32618),p=r(12642),f=r(38687);let m="Collapsible",[b,v]=(0,l.b)(m),[_,g]=b(m),h=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:l,defaultOpen:a,disabled:i,onOpenChange:c,...u}=e,[p=!1,m]=(0,d.T)({prop:l,defaultProp:a,onChange:c});return(0,o.createElement)(_,{scope:r,disabled:i,contentId:(0,f.M)(),open:p,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m])},(0,o.createElement)(s.WV.div,(0,n.Z)({"data-state":A(p),"data-disabled":i?"":void 0},u,{ref:t})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...l}=e,a=g("CollapsibleTrigger",r);return(0,o.createElement)(s.WV.button,(0,n.Z)({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":A(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},l,{ref:t,onClick:(0,c.M)(e.onClick,a.onOpenToggle)}))}),w="CollapsibleContent",C=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=g(w,e.__scopeCollapsible);return(0,o.createElement)(p.z,{present:r||a.open},e=>{let{present:r}=e;return(0,o.createElement)(y,(0,n.Z)({},l,{ref:t,present:r}))})}),y=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:l,children:a,...c}=e,d=g(w,r),[p,f]=(0,o.useState)(l),m=(0,o.useRef)(null),b=(0,i.e)(t,m),v=(0,o.useRef)(0),_=v.current,h=(0,o.useRef)(0),E=h.current,C=d.open||p,y=(0,o.useRef)(C),R=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>y.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=m.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,h.current=t.width,y.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),f(l)}},[d.open,l]),(0,o.createElement)(s.WV.div,(0,n.Z)({"data-state":A(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!C},c,{ref:b,style:{"--radix-collapsible-content-height":_?"".concat(_,"px"):void 0,"--radix-collapsible-content-width":E?"".concat(E,"px"):void 0,...e.style}}),C&&a)});function A(e){return e?"open":"closed"}var R=r(12275);let k="Accordion",x=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[I,Z,M]=(0,a.B)(k),[V,O]=(0,l.b)(k,[M,v]),D=v(),S=o.forwardRef((e,t)=>{let{type:r,...l}=e;return o.createElement(I.Provider,{scope:e.__scopeAccordion},"multiple"===r?o.createElement(F,(0,n.Z)({},l,{ref:t})):o.createElement(z,(0,n.Z)({},l,{ref:t})))});S.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[N,T]=V(k),[P,W]=V(k,{collapsible:!1}),z=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},collapsible:i=!1,...c}=e,[s,u]=(0,d.T)({prop:r,defaultProp:l,onChange:a});return o.createElement(N,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:u,onItemClose:o.useCallback(()=>i&&u(""),[i,u])},o.createElement(P,{scope:e.__scopeAccordion,collapsible:i},o.createElement(H,(0,n.Z)({},c,{ref:t}))))}),F=o.forwardRef((e,t)=>{let{value:r,defaultValue:l,onValueChange:a=()=>{},...i}=e,[c=[],s]=(0,d.T)({prop:r,defaultProp:l,onChange:a}),u=o.useCallback(e=>s(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[s]),p=o.useCallback(e=>s(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[s]);return o.createElement(N,{scope:e.__scopeAccordion,value:c,onItemOpen:u,onItemClose:p},o.createElement(P,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(H,(0,n.Z)({},i,{ref:t}))))}),[q,B]=V(k),H=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:l,dir:a,orientation:d="vertical",...u}=e,p=o.useRef(null),f=(0,i.e)(p,t),m=Z(r),b="ltr"===(0,R.gm)(a),v=(0,c.M)(e.onKeyDown,e=>{var t;if(!x.includes(e.key))return;let r=e.target,n=m().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=n.findIndex(e=>e.ref.current===r),l=n.length;if(-1===o)return;e.preventDefault();let a=o,i=l-1,c=()=>{(a=o+1)>i&&(a=0)},s=()=>{(a=o-1)<0&&(a=i)};switch(e.key){case"Home":a=0;break;case"End":a=i;break;case"ArrowRight":"horizontal"===d&&(b?c():s());break;case"ArrowDown":"vertical"===d&&c();break;case"ArrowLeft":"horizontal"===d&&(b?s():c());break;case"ArrowUp":"vertical"===d&&s()}null===(t=n[a%l].ref.current)||void 0===t||t.focus()});return o.createElement(q,{scope:r,disabled:l,direction:a,orientation:d},o.createElement(I.Slot,{scope:r},o.createElement(s.WV.div,(0,n.Z)({},u,{"data-orientation":d,ref:f,onKeyDown:l?void 0:v}))))}),K="AccordionItem",[L,U]=V(K),Y=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:l,...a}=e,i=B(K,r),c=T(K,r),d=D(r),s=(0,f.M)(),u=l&&c.value.includes(l)||!1,p=i.disabled||e.disabled;return o.createElement(L,{scope:r,open:u,disabled:p,triggerId:s},o.createElement(h,(0,n.Z)({"data-orientation":i.orientation,"data-state":X(u)},d,a,{ref:t,disabled:p,open:u,onOpenChange:e=>{e?c.onItemOpen(l):c.onItemClose(l)}})))}),j=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=B(k,r),i=U("AccordionHeader",r);return o.createElement(s.WV.h3,(0,n.Z)({"data-orientation":a.orientation,"data-state":X(i.open),"data-disabled":i.disabled?"":void 0},l,{ref:t}))}),G="AccordionTrigger",J=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=B(k,r),i=U(G,r),c=W(G,r),d=D(r);return o.createElement(I.ItemSlot,{scope:r},o.createElement(E,(0,n.Z)({"aria-disabled":i.open&&!c.collapsible||void 0,"data-orientation":a.orientation,id:i.triggerId},d,l,{ref:t})))}),Q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...l}=e,a=B(k,r),i=U("AccordionContent",r),c=D(r);return o.createElement(C,(0,n.Z)({role:"region","aria-labelledby":i.triggerId,"data-orientation":a.orientation},c,l,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function X(e){return e?"open":"closed"}let $=S,ee=Y,et=j,er=J,en=Q},27533:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(64090),o=r(84104),l=r(61266),a=r(59143);function i(e){let t=e+"CollectionProvider",[r,i]=(0,o.b)(t),[c,d]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",u=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,i=d(s,r),c=(0,l.e)(t,i.collectionRef);return n.createElement(a.g7,{ref:c},o)}),p=e+"CollectionItemSlot",f="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),l=n.useRef(new Map).current;return n.createElement(c,{scope:t,itemMap:l,collectionRef:o},r)},Slot:u,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:o,...i}=e,c=n.useRef(null),s=(0,l.e)(t,c),u=d(p,r);return n.useEffect(()=>(u.itemMap.set(c,{ref:c,...i}),()=>void u.itemMap.delete(c))),n.createElement(a.g7,{[f]:"",ref:s},o)})},function(t){let r=d(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(f,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}},12275:function(e,t,r){"use strict";r.d(t,{gm:function(){return l}});var n=r(64090);let o=(0,n.createContext)(void 0);function l(e){let t=(0,n.useContext)(o);return e||t||"ltr"}}}]);