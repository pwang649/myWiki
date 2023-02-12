"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1082],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,h=c["".concat(l,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(h,r(r({ref:e},o),{},{components:t})):n.createElement(h,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7956:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var n=t(3117),s=(t(7294),t(3905));const m={id:"Code - Parallel_Computation - Labs - Lab 2",title:"Lab 2",sidebar_position:2},r=void 0,p={unversionedId:"Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 2",id:"Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 2",title:"Lab 2",description:"Test Platform",source:"@site/docs/Code/Parallel_Computation/Labs/Lab2.md",sourceDirName:"Code/Parallel_Computation/Labs",slug:"/Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 2",permalink:"/myWiki/docs/Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/Parallel_Computation/Labs/Lab2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Code - Parallel_Computation - Labs - Lab 2",title:"Lab 2",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lab 1",permalink:"/myWiki/docs/Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 1"},next:{title:"Lab 3",permalink:"/myWiki/docs/Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 3"}},l={},i=[{value:"Test Platform",id:"test-platform",level:3},{value:"Problem 1",id:"problem-1",level:2},{value:"The Local Output Variables Method",id:"the-local-output-variables-method",level:3},{value:"Results",id:"results",level:4},{value:"Plot",id:"plot",level:4},{value:"The Shared Output Variables Method",id:"the-shared-output-variables-method",level:3},{value:"Results",id:"results-1",level:4},{value:"Plot",id:"plot-1",level:4},{value:"Analysis",id:"analysis",level:4},{value:"Problem 2",id:"problem-2",level:2},{value:"K-means Implementation",id:"k-means-implementation",level:3},{value:"Results",id:"results-2",level:4},{value:"Analysis",id:"analysis-1",level:4}],o={toc:i};function N(a){let{components:e,...m}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,m,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"test-platform"},"Test Platform"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Model Name:")," MacBook Pro"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chip:"),"\tApple M1 Pro"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Total Number of Cores:")," 8 (6 performance and 2 efficiency)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Memory:")," 16 GB")),(0,s.kt)("h2",{id:"problem-1"},"Problem 1"),(0,s.kt)("h3",{id:"the-local-output-variables-method"},"The Local Output Variables Method"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"This method of parallelizing matrix multiplication is analogous to the block-based method. It partitions the output matrix into blocks based on the number of threads the user wants and then assigns each block to a thread for independent computation.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p \\times p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," threads, each thread ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(i,j)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u201cowning\u201d the computation of a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C(i,j)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," block, is responsible for calculating its matrix product of corresponding tile from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"A")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"B")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))," and write the results to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C(i,j)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."))),(0,s.kt)("h4",{id:"results"},"Results"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"thread = 1 (Using lab 1's result):",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 835.089545 sec,\n164.579900 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 4:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 328.852830 sec,\n417.934532 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 16:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 179.755565 sec,\n764.588031 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 64:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 96.750643 sec,\n1420.548218 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 256:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 52.632853 sec,\n2611.276905 MFLOPs per sec\nC[100][100]=879616000.000000\n")))),(0,s.kt)("h4",{id:"plot"},"Plot"),(0,s.kt)("p",null,"  ",(0,s.kt)("img",{src:t(19).Z,width:"1248",height:"936"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"From this plot, we see that a larger number of threads brings a better execution time. However, the margin of time shrink tends to decrease as more threads are introduced.")),(0,s.kt)("h3",{id:"the-shared-output-variables-method"},"The Shared Output Variables Method"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p \\times p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," threads, each thread ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(i,j)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u201cowning\u201d the computation of an ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A(i,j)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," block, is responsible for calculating its matrix product of corresponding tile from ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"B")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))," and writing the (intermediate) results to ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C(i,j)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),".")),(0,s.kt)("h4",{id:"results-1"},"Results"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"thread = 1 (Using lab 1's result):",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 835.089545 sec,\n164.579900 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 4:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 105.497530 sec,\n1302.769396 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 16:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 53.448009 sec,\n2571.451323 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 64:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 33.376083 sec,\n4117.887455 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,s.kt)("li",{parentName:"ul"},"threads = 256:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 33.732666 sec,\n4074.357878 MFLOPs per sec\nC[100][100]=879616000.000000\n")))),(0,s.kt)("h4",{id:"plot-1"},"Plot"),(0,s.kt)("p",null,"  ",(0,s.kt)("img",{src:t(5359).Z,width:"1256",height:"944"})),(0,s.kt)("h4",{id:"analysis"},"Analysis"),(0,s.kt)("p",null,"From this plot, we see all the results perform better using the shared output variables method. For using threads 4, 16, and 64, the execution time shrinks to one-third of method one's time. For threads = 256, the time taken is very similar to (even a bit higher) that of threads = 64. This is perhaps reaching the best performance we can achieve and increasing # of threads after 64 will not enhance the speed."),(0,s.kt)("h2",{id:"problem-2"},"Problem 2"),(0,s.kt)("h3",{id:"k-means-implementation"},"K-means Implementation"),(0,s.kt)("h4",{id:"results-2"},"Results"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run time for p = 1:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Execution time = 0.502734 sec.\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run time for p = 4:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Execution time = 0.341998 sec.\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run time for p = 8:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Execution time = 0.322975 sec.\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Output Image:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{src:t(7893).Z,width:"549",height:"549"})))),(0,s.kt)("h4",{id:"analysis-1"},"Analysis"),(0,s.kt)("p",null,"Both p = 4 and p = 8 are significantly faster than p = 1, (about 1.5 times faster). The speedup factor isn't proportional to the number of threads because we are only parallelizing one step of the program, and there are other steps in the algorithm that we are not parallelizing, resulting in some overheads. Therefore, we shouldn't anticipate a linear speedup."))}N.isMDXComponent=!0},7893:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/k-means2-dd4858eb0ae80aad14c3173fad59c83e.png"},19:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/parallel_matrix_result1-0a6289cea20475e3981399cafbb31d7b.png"},5359:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/parallel_matrix_result2-e55dd7bc02a75c39a1e61a61853b4277.png"}}]);