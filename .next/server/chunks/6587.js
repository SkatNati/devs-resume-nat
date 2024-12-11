exports.id=6587,exports.ids=[6587],exports.modules={78105:e=>{e.exports={style:{fontFamily:"'__Open_Sans_9c07b1', '__Open_Sans_Fallback_9c07b1'"},className:"__className_9c07b1",variable:"__variable_9c07b1"}},74179:(e,t,r)=>{"use strict";r.d(t,{VY:()=>en,h4:()=>et,ck:()=>ee,fC:()=>X,xz:()=>er});var n=r(65651),o=r(3729),a=r(98462),l=r(77411),i=r(31405),c=r(85222),d=r(33183),s=r(62409),p=r(16069),u=r(43234),f=r(99048);let b="Collapsible",[m,_]=(0,a.b)(b),[g,v]=m(b),y=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:l,disabled:i,onOpenChange:c,...p}=e,[u=!1,b]=(0,d.T)({prop:a,defaultProp:l,onChange:c});return(0,o.createElement)(g,{scope:r,disabled:i,contentId:(0,f.M)(),open:u,onOpenToggle:(0,o.useCallback)(()=>b(e=>!e),[b])},(0,o.createElement)(s.WV.div,(0,n.Z)({"data-state":C(u),"data-disabled":i?"":void 0},p,{ref:t})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...a}=e,l=v("CollapsibleTrigger",r);return(0,o.createElement)(s.WV.button,(0,n.Z)({type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":C(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled},a,{ref:t,onClick:(0,c.M)(e.onClick,l.onOpenToggle)}))}),h="CollapsibleContent",w=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...a}=e,l=v(h,e.__scopeCollapsible);return(0,o.createElement)(u.z,{present:r||l.open},({present:e})=>(0,o.createElement)(A,(0,n.Z)({},a,{ref:t,present:e})))}),A=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:a,children:l,...c}=e,d=v(h,r),[u,f]=(0,o.useState)(a),b=(0,o.useRef)(null),m=(0,i.e)(t,b),_=(0,o.useRef)(0),g=_.current,y=(0,o.useRef)(0),E=y.current,w=d.open||u,A=(0,o.useRef)(w),R=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>A.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,p.b)(()=>{let e=b.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();_.current=t.height,y.current=t.width,A.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),f(a)}},[d.open,a]),(0,o.createElement)(s.WV.div,(0,n.Z)({"data-state":C(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!w},c,{ref:m,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":E?`${E}px`:void 0,...e.style}}),w&&l)});function C(e){return e?"open":"closed"}var R=r(3975);let x="Accordion",I=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[k,V,Z]=(0,l.B)(x),[D,O]=(0,a.b)(x,[Z,_]),T=_(),N=o.forwardRef((e,t)=>{let{type:r,...a}=e;return o.createElement(k.Provider,{scope:e.__scopeAccordion},"multiple"===r?o.createElement(P,(0,n.Z)({},a,{ref:t})):o.createElement(F,(0,n.Z)({},a,{ref:t})))});N.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[M,S]=D(x),[W,z]=D(x,{collapsible:!1}),F=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},collapsible:i=!1,...c}=e,[s,p]=(0,d.T)({prop:r,defaultProp:a,onChange:l});return o.createElement(M,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:p,onItemClose:o.useCallback(()=>i&&p(""),[i,p])},o.createElement(W,{scope:e.__scopeAccordion,collapsible:i},o.createElement(K,(0,n.Z)({},c,{ref:t}))))}),P=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},...i}=e,[c=[],s]=(0,d.T)({prop:r,defaultProp:a,onChange:l}),p=o.useCallback(e=>s((t=[])=>[...t,e]),[s]),u=o.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return o.createElement(M,{scope:e.__scopeAccordion,value:c,onItemOpen:p,onItemClose:u},o.createElement(W,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(K,(0,n.Z)({},i,{ref:t}))))}),[H,B]=D(x),K=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:a,dir:l,orientation:d="vertical",...p}=e,u=o.useRef(null),f=(0,i.e)(u,t),b=V(r),m="ltr"===(0,R.gm)(l),_=(0,c.M)(e.onKeyDown,e=>{var t;if(!I.includes(e.key))return;let r=e.target,n=b().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=n.findIndex(e=>e.ref.current===r),a=n.length;if(-1===o)return;e.preventDefault();let l=o,i=a-1,c=()=>{(l=o+1)>i&&(l=0)},s=()=>{(l=o-1)<0&&(l=i)};switch(e.key){case"Home":l=0;break;case"End":l=i;break;case"ArrowRight":"horizontal"===d&&(m?c():s());break;case"ArrowDown":"vertical"===d&&c();break;case"ArrowLeft":"horizontal"===d&&(m?s():c());break;case"ArrowUp":"vertical"===d&&s()}null===(t=n[l%a].ref.current)||void 0===t||t.focus()});return o.createElement(H,{scope:r,disabled:a,direction:l,orientation:d},o.createElement(k.Slot,{scope:r},o.createElement(s.WV.div,(0,n.Z)({},p,{"data-orientation":d,ref:f,onKeyDown:a?void 0:_}))))}),L="AccordionItem",[U,$]=D(L),q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:a,...l}=e,i=B(L,r),c=S(L,r),d=T(r),s=(0,f.M)(),p=a&&c.value.includes(a)||!1,u=i.disabled||e.disabled;return o.createElement(U,{scope:r,open:p,disabled:u,triggerId:s},o.createElement(y,(0,n.Z)({"data-orientation":i.orientation,"data-state":Q(p)},d,l,{ref:t,disabled:u,open:p,onOpenChange:e=>{e?c.onItemOpen(a):c.onItemClose(a)}})))}),Y=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,l=B(x,r),i=$("AccordionHeader",r);return o.createElement(s.WV.h3,(0,n.Z)({"data-orientation":l.orientation,"data-state":Q(i.open),"data-disabled":i.disabled?"":void 0},a,{ref:t}))}),j="AccordionTrigger",G=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,l=B(x,r),i=$(j,r),c=z(j,r),d=T(r);return o.createElement(k.ItemSlot,{scope:r},o.createElement(E,(0,n.Z)({"aria-disabled":i.open&&!c.collapsible||void 0,"data-orientation":l.orientation,id:i.triggerId},d,a,{ref:t})))}),J=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...a}=e,l=B(x,r),i=$("AccordionContent",r),c=T(r);return o.createElement(w,(0,n.Z)({role:"region","aria-labelledby":i.triggerId,"data-orientation":l.orientation},c,a,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function Q(e){return e?"open":"closed"}let X=N,ee=q,et=Y,er=G,en=J}};