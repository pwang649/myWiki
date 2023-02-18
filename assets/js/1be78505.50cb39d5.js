"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9514,4972],{9963:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ce});var n=a(7294),l=a(6010),o=a(833),r=a(5281),i=a(3320),c=a(2802),s=a(4477),d=a(1116),m=a(2289),u=a(5999),b=a(2466),p=a(5936);const h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(i(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",r.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var v=a(6550),g=a(7524),_=a(6668),k=a(1327),C=a(3117);function S(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function y(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",I),onClick:t},n.createElement(S,{className:N}))}var x=a(9689),T=a(902);const w=Symbol("EmptyContext"),L=n.createContext(w);function A(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(L.Provider,{value:o},t)}var M=a(6043),Z=a(8596),B=a(9960),F=a(2389);function H(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){let{item:t,onItemClick:a,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,F.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),v=(0,c._F)(t,o),g=(0,Z.Mg)(h,o),{collapsed:k,setCollapsed:S}=(0,M.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,n.useContext)(L);if(e===w)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,T.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:v,collapsed:k,updateCollapsed:y}),(0,n.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},n.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(B.Z,(0,C.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{a?.(t),h?y(!1):(e.preventDefault(),y())}:()=>{a?.(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),h&&b&&n.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),y()}})),n.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},n.createElement(q,{items:m,tabIndex:k?-1:0,onItemClick:a,activePath:o,level:i+1})))}var D=a(3919),W=a(9471);const R="menuExternalLink_NmtK";function V(e){let{item:t,onItemClick:a,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,o),E=(0,D.Z)(m);return n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},n.createElement(B.Z,(0,C.Z)({className:(0,l.default)("menu__link",!E&&R,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(W.Z,null)))}const z="menuHtmlItem_M9Kj";function U(e){let{item:t,level:a,index:o}=e;const{value:i,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),c&&[z,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:i}})}function K(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(P,(0,C.Z)({item:t},a));case"html":return n.createElement(U,(0,C.Z)({item:t},a));default:return n.createElement(V,(0,C.Z)({item:t},a))}}function j(e){let{items:t,...a}=e;return n.createElement(A,null,t.map(((e,t)=>n.createElement(K,(0,C.Z)({key:t,item:e,index:t},a)))))}const q=(0,n.memo)(j),G="menu_SIkG",Y="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:a,className:o}=e;const i=function(){const{isActive:e}=(0,x.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",G,i&&Y,o)},n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(q,{items:a,activePath:t,level:1})))}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:a,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,_.L)();return n.createElement("div",{className:(0,l.default)(X,i&&J,r&&Q)},i&&n.createElement(k.Z,{tabIndex:-1,className:$}),n.createElement(O,{path:t,sidebar:a}),c&&n.createElement(y,{onClick:o}))}const te=n.memo(ee);var ae=a(3102),ne=a(2961);const le=e=>{let{sidebar:t,path:a}=e;const o=(0,ne.e)();return n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(q,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function oe(e){return n.createElement(ae.Zo,{component:le,props:e})}const re=n.memo(oe);function ie(e){const t=(0,g.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(te,e),l&&n.createElement(re,e))}const ce="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ce,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(S,{className:se}))}const me={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ue(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,v.TH)(),[c,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{c&&s(!1),o((e=>!e))}),[o,c]);return n.createElement("aside",{className:(0,l.default)(r.k.docs.docSidebarContainer,me.docSidebarContainer,a&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&a&&s(!0)}},n.createElement(ue,null,n.createElement("div",{className:(0,l.default)(me.sidebarViewport,c&&me.sidebarViewportHidden)},n.createElement(ie,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&n.createElement(de,{toggleSidebar:d}))))}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function he(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.default)(pe.docMainContainer,(t||!o)&&pe.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},a))}const Ee="docPage__5DB",fe="docsWrapper_BCFX";function ve(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:fe},n.createElement(f,null),n.createElement("div",{className:Ee},a&&n.createElement(be,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(he,{hiddenSidebarContainer:l},t)))}var ge=a(4972),_e=a(197);function ke(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(_e.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){const{versionMetadata:t}=e,a=(0,c.hI)(e);if(!a)return n.createElement(ge.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(ke,e),n.createElement(o.FG,{className:(0,l.default)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(ve,null,i)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(5999),o=a(833),r=a(2289);function i(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:(e,t,a)=>{a.d(t,{E:()=>i,q:()=>r});var n=a(7294),l=a(902);const o=n.createContext(null);function r(e){let{children:t,version:a}=e;return n.createElement(o.Provider,{value:a},t)}function i(){const e=(0,n.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);