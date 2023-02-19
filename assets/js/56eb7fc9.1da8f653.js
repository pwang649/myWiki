"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={id:"Communication Protocols - CAN",title:"CAN",sidebar_position:4},o=void 0,s={unversionedId:"Communication Protocols/Communication Protocols - CAN",id:"Communication Protocols/Communication Protocols - CAN",title:"CAN",description:"CAN (Controller Area Network) is a multi-master serial communication bus. The basic design specification requires a high bit rate, high immunity to electromagnetic interference, and the ability to detect any errors that occur. When the signal transmission distance reaches 10 km, CAN-bus can still provide a data transmission rate of up to 5Kbps.",source:"@site/docs/Communication Protocols/CAN.md",sourceDirName:"Communication Protocols",slug:"/Communication Protocols/Communication Protocols - CAN",permalink:"/myWiki/docs/Communication Protocols/Communication Protocols - CAN",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Communication Protocols/CAN.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Communication Protocols - CAN",title:"CAN",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SPI",permalink:"/myWiki/docs/Communication Protocols/Communication Protocols - SPI"},next:{title:"Handwritten Notes",permalink:"/myWiki/docs/Handwritten Notes"}},c={},l=[{value:"Data Frame Format",id:"data-frame-format",level:3},{value:"CAN Bus",id:"can-bus",level:3},{value:"Reference and Acknowledgement",id:"reference-and-acknowledgement",level:3}],m={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CAN (Controller Area Network) is a multi-master serial communication bus. The basic design specification requires a high bit rate, high immunity to electromagnetic interference, and the ability to detect any errors that occur. When the signal transmission distance reaches 10 km, CAN-bus can still provide a data transmission rate of up to 5Kbps."),(0,i.kt)("h3",{id:"data-frame-format"},"Data Frame Format"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8739).Z,width:"1418",height:"220"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SOF"),": The single dominant start of frame (SOF) bit marks the start of a message and is used to synchronize the nodes on a bus after being idle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Identifier"),": The Standard CAN 11-bit identifier establishes the priority of the message. The lower the binary value, the higher its priority."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RTR"),": The single remote transmission request (RTR) bit is dominant when information is required from another node. All nodes receive the request, but the identifier - determines the specified node. The responding data is also received by all nodes and used by any node interested. In this way, all data being used in a system is uniform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IDE"),": A dominant single identifier extension (IDE) bit means that a standard CAN identifier with no extension is being transmitted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"r0"),": Reserved bit (for possible use by future standard amendment)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DLC"),": The 4-bit data length code (DLC) contains the number of bytes of data being transmitted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data"),": Up to 64 bits of application data may be transmitted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CRC"),": The 16-bit (15 bits plus delimiter) cyclic redundancy check (CRC) contains the checksum (number of bits transmitted) of the preceding application data for error - detection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ACK"),": Every node receiving an accurate message overwrites this recessive bit in the original message with a dominate bit, indicating an error-free message has been sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EOF"),": This end-of-frame (EOF), 7-bit field marks the end of a CAN frame (message) and disables bitstuffing, indicating a stuffing error when dominant. When 5 bits of the same logic level occur in succession during normal operation, a bit of the opposite logic level is stuffed into the data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IFS"),": This 7-bit interframe space (IFS) contains the time required by the controller to move a correctly received frame to its proper position in a message buffer area.")),(0,i.kt)("h3",{id:"can-bus"},"CAN Bus"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7440).Z,width:"1450",height:"630"})),(0,i.kt)("h3",{id:"reference-and-acknowledgement"},"Reference and Acknowledgement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ti.com/lit/an/sloa101b/sloa101b.pdf"},"Introduction to the Controller Area Network (CAN)"))))}u.isMDXComponent=!0},8739:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CAN_1-018461ab9ccfba771e8f799ed6587c7b.png"},7440:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CAN_2-12a5dee2d2b5f4b512c47d196ddf999e.png"}}]);