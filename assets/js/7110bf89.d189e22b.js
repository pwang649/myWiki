"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6223],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>g});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),p=i,g=f["".concat(l,".").concat(p)]||f[p]||m[p]||o;return r?t.createElement(g,a(a({ref:n},s),{},{components:r})):t.createElement(g,a({ref:n},s))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[f]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9597:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(7462),i=(r(7294),r(3905));const o={id:"Reinforcement Learning - Concurrent-QL",title:"Concurrent Q-Learning",sidebar_position:9},a=void 0,c={unversionedId:"Reinforcement Learning/Reinforcement Learning - Concurrent-QL",id:"Reinforcement Learning/Reinforcement Learning - Concurrent-QL",title:"Concurrent Q-Learning",description:"Concurrent Q-learning Algorithm",source:"@site/docs/Reinforcement Learning/Concurrent QL.md",sourceDirName:"Reinforcement Learning",slug:"/Reinforcement Learning/Reinforcement Learning - Concurrent-QL",permalink:"/myWiki/docs/Reinforcement Learning/Reinforcement Learning - Concurrent-QL",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Reinforcement Learning/Concurrent QL.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"Reinforcement Learning - Concurrent-QL",title:"Concurrent Q-Learning",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"n-step Bootstrapping",permalink:"/myWiki/docs/Reinforcement Learning/Reinforcement Learning - n-step"},next:{title:"Proximal Policy Optimization Algorithms",permalink:"/myWiki/docs/Reinforcement Learning/Reinforcement Learning - PPO"}},l={},u=[{value:"Concurrent Q-learning Algorithm",id:"concurrent-q-learning-algorithm",level:3},{value:"Auxiliary Functions",id:"auxiliary-functions",level:3},{value:"Reference",id:"reference",level:3}],s={toc:u},f="wrapper";function m(e){let{components:n,...o}=e;return(0,i.kt)(f,(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"concurrent-q-learning-algorithm"},"Concurrent Q-learning Algorithm"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8634).Z,width:"1268",height:"1550"})),(0,i.kt)("h3",{id:"auxiliary-functions"},"Auxiliary Functions"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(874).Z,width:"1240",height:"1020"})),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[1]",' Gen Li et al. "Breaking the sample complexity barrier to regret-optimal model-free reinforcement learning". In: Advances in Neural Information Processing Systems 34 (2021), pp. 17762-17776.')))}m.isMDXComponent=!0},8634:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Concurrent_QL-ee40e816f9f6505b9dfcf0ae5ba9f282.png"},874:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Concurrent_QL2-8f0fa5fd205801cd98fafb1d00c03d4b.png"}}]);