"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},A=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},A),{},{components:n})):a.createElement(k,o({ref:t},A))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"Code - Parallel_Computation - Labs - Lab 1",title:"Lab 1",sidebar_position:1},o=void 0,i={unversionedId:"Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 1",id:"Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 1",title:"Lab 1",description:"Test Platform",source:"@site/docs/Code/Parallel_Computation/Labs/Lab1.md",sourceDirName:"Code/Parallel_Computation/Labs",slug:"/Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 1",permalink:"/myWiki/Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 1",draft:!1,editUrl:"https://github.com/pwang649/myWiki/edit/main/docs/Code/Parallel_Computation/Labs/Lab1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Code - Parallel_Computation - Labs - Lab 1",title:"Lab 1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HW 7",permalink:"/myWiki/Code/Parallel_Computation/HW/Code - Parallel_Computation - HW - HW 7"},next:{title:"Lab 2",permalink:"/myWiki/Code/Parallel_Computation/Labs/Code - Parallel_Computation - Labs - Lab 2"}},s={},p=[{value:"Test Platform",id:"test-platform",level:3},{value:"Problem 1",id:"problem-1",level:3},{value:"Naive-based Solution",id:"naive-based-solution",level:4},{value:"Naive-based Results",id:"naive-based-results",level:4},{value:"Block-based Solution",id:"block-based-solution",level:4},{value:"Block-based Results",id:"block-based-results",level:4},{value:"Problem 2",id:"problem-2",level:3},{value:"K-means Implementation",id:"k-means-implementation",level:4},{value:"Results",id:"results",level:4}],A={toc:p},m="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},A,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"test-platform"},"Test Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model Name:")," MacBook Pro"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chip:"),"\tApple M1 Pro"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Number of Cores:")," 8 (6 performance and 2 efficiency)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memory:")," 16 GB")),(0,r.kt)("h3",{id:"problem-1"},"Problem 1"),(0,r.kt)("h4",{id:"naive-based-solution"},"Naive-based Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"for (i = 0; i < n; i++) {\n    for (j = 0; j < n; j++) {\n        for (k = 0; k < n; k++) {\n            C[i][j] += A[i][k] * B[k][j];\n        }\n    }\n}\n")),(0,r.kt)("h4",{id:"naive-based-results"},"Naive-based Results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run 1:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 835.737475 sec,\n164.452304 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,r.kt)("li",{parentName:"ul"},"Run 2:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 835.089545 sec,\n164.579900 MFLOPs per sec\nC[100][100]=879616000.000000\n")))),(0,r.kt)("h4",{id:"block-based-solution"},"Block-based Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// Block-based\nint b = atoi(argv[1]);\nint m = n / b;\nfor (i = 0; i < m; i++) {\n    for (j = 0; j < m; j++) {\n        for (k = 0; k < m; k++) {\n            for (int x = 0; x < b; x++) {\n                for (int y = 0; y < b; y++)\n                    for (int z = 0; z < b; z++)\n                        C[i * b + x][j * b + y] += A[i * b + x][k * b + z] * B[k * b + z][j * b + y];\n            }\n        }\n    }\n}\n")),(0,r.kt)("h4",{id:"block-based-results"},"Block-based Results"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using b = 4:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run 1:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 350.400956 sec,\n392.233386 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,r.kt)("li",{parentName:"ul"},"Run 2:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 347.018526 sec,\n396.056531 MFLOPs per sec\nC[100][100]=879616000.000000\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using b = 8:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run 1:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 280.395665 sec,\n490.160764 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,r.kt)("li",{parentName:"ul"},"Run 2:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 278.799464 sec,\n492.967065 MFLOPs per sec\nC[100][100]=879616000.000000\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using b = 16:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run 1:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 285.159648 sec,\n481.971957 MFLOPs per sec\nC[100][100]=879616000.000000\n"))),(0,r.kt)("li",{parentName:"ul"},"Run 2:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Number of FLOPs = 137438953472, Execution time = 283.044927 sec,\n485.572926 MFLOPs per sec\nC[100][100]=879616000.000000\n")))))),(0,r.kt)("h3",{id:"problem-2"},"Problem 2"),(0,r.kt)("h4",{id:"k-means-implementation"},"K-means Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"//  Your code goes here\ndouble means[] = {0, 85, 170, 255};\nunsigned char *output = (unsigned char*) malloc (sizeof(unsigned int)*h*w);\nunsigned int *class = (unsigned int*) malloc (sizeof(unsigned int)*h*w);\nint count = 0;\n\n// Step 2\nstep_two:\nfor (i = 0; i < h * w; i++) {\n    int curr = a[i];\n    double diff = 255;\n    int j;\n    for (j = 0; j < 4; j++) {\n        if (fabs(means[j] - curr) < diff) {\n            diff = fabs(means[j] - curr);\n            class[i] = j;\n        }\n    }\n    \n}\n// Step 3\nint n[] = {0, 0, 0, 0};\nfor (i = 0; i < h * w; i++) {\n    means[class[i]] += (a[i] - means[class[i]]) / ++n[class[i]];\n}\n\ncount++;\nif (count < 30)\n    goto step_two;\n\nfor (i = 0; i < h * w; i++) {\n    output[i] = (int) means[class[i]];\n}\n")),(0,r.kt)("h4",{id:"results"},"Results"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run time:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Execution time = 0.276082 sec.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Original Image:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(76114).Z,width:"358",height:"358"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"K-meanslized Image:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(21728).Z,width:"359",height:"359"})))))}c.isMDXComponent=!0},76114:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/k-means-orig-0a61d8eb476a2e3fc13516b908a30f43.png"},21728:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);