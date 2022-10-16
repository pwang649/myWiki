"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={id:"Communication Protocols - Serial",title:"Serial Communication",sidebar_position:1},i=void 0,l={unversionedId:"Communication Protocols/Communication Protocols - Serial",id:"Communication Protocols/Communication Protocols - Serial",title:"Serial Communication",description:"UART vs USART",source:"@site/docs/Communication Protocols/Serial.md",sourceDirName:"Communication Protocols",slug:"/Communication Protocols/Communication Protocols - Serial",permalink:"/myWiki/docs/Communication Protocols/Communication Protocols - Serial",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Communication Protocols/Serial.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Communication Protocols - Serial",title:"Serial Communication",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Proximal Policy Optimization Algorithms",permalink:"/myWiki/docs/Reinforcement Learning/Reinforcement Learning - PPO"},next:{title:"I2C",permalink:"/myWiki/docs/Communication Protocols/Communication Protocols - I2C"}},s={},c=[{value:"UART vs USART",id:"uart-vs-usart",level:3},{value:"UART Pins",id:"uart-pins",level:3},{value:"UART Frame Formats",id:"uart-frame-formats",level:3},{value:"UART Frame Protocol",id:"uart-frame-protocol",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Citations",id:"citations",level:3}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"uart-vs-usart"},"UART vs USART"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UART Peripheral supports only asynchronous mode"),(0,o.kt)("li",{parentName:"ul"},"USART supports both asynchronous and synchronous modes."),(0,o.kt)("li",{parentName:"ul"},"You can use USART module both in synchronous mode as well as in asynchronous mode"),(0,o.kt)("li",{parentName:"ul"},"There is no specific port for USART communication. They are commonly used in conjugation with protocols like RS-232, RS- 434, USB etc."),(0,o.kt)("li",{parentName:"ul"},"In synchronous transmission, the clock is sent separately from the data stream and no start/stop bits are used")),(0,o.kt)("h3",{id:"uart-pins"},"UART Pins"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/373/1*tRPihQ4KWx4XObf-8fMYrw.png",alt:null})),(0,o.kt)("h3",{id:"uart-frame-formats"},"UART Frame Formats"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.analog.com/-/media/images/analog-dialogue/en/volume-54/number-4/articles/uart-a-hardware-communication-protocol/335962-fig-03.svg?h=270&hash=1CB514C169E8D354B2D74F94776ADF96&imgver=2",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Start Bit"),": To start the transfer of data, the transmitting UART pulls the transmission line from high to low for one (1) clock cycle."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Frame"),": It can be five (5) bits up to eight (8) bits long if a parity bit is used. If no parity bit is used, the data frame can be nine (9) bits long."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parity"),": After the receiving UART reads the data frame, it counts the number of bits with a value of 1 and checks if the total is an even or odd number. If the parity bit is a 0 (even parity), the 1 or logic-high bit in the data frame should total to an even number. If the parity bit is a 1 (odd parity), the 1 bit or logic highs in the data frame should total to an odd number."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stop Bits"),": To signal the end of the data packet, the sending UART drives the data transmission line from a low voltage to a high voltage for one (1) to two (2) bit(s) duration.")),(0,o.kt)("h3",{id:"uart-frame-protocol"},"UART Frame Protocol"),(0,o.kt)("p",null,"One key feature that is available in UART yet not fully used is the implementation of a frame protocol. The main use and importance of this is an added value for security and protection on each device."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.analog.com/-/media/images/analog-dialogue/en/volume-54/number-4/articles/uart-a-hardware-communication-protocol/335962-fig-13.jpg?h=270&hash=46B34F9D8C7489357286DDB747D812F7&imgver=1",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Header"),": Header is the unique identifier that determines if you are communicating with the correct device."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command"),": Command will depend on the list of command designed to create the communication between two devices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Length"),": Data length will be based on the command chosen. You can maximize the length of data depending on the command chosen, so it can vary based on the selection. In that case, the data length can be adjusted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cyclic Redundancy Checking"),": The cycling redundancy checking formula is an added error detecting mode to detect accidental changes to raw data. The CRC value of the transmitting device must always be equal to the CRC computations on the receiver\u2019s end.")),(0,o.kt)("h3",{id:"advantages"},"Advantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only uses two wires"),(0,o.kt)("li",{parentName:"ul"},"No clock signal is necessary"),(0,o.kt)("li",{parentName:"ul"},"Has a parity bit to allow for error checking"),(0,o.kt)("li",{parentName:"ul"},"The structure of the data packet can be changed as long as both sides are set up for it"),(0,o.kt)("li",{parentName:"ul"},"Well documented and widely used method")),(0,o.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The size of the data frame is limited to a maximum of 9 bits"),(0,o.kt)("li",{parentName:"ul"},"Doesn\u2019t support multiple slave or multiple master systems"),(0,o.kt)("li",{parentName:"ul"},"The baud rates of each UART must be within 10% of each other")),(0,o.kt)("h3",{id:"citations"},"Citations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.analog.com/en/analog-dialogue/articles/uart-a-hardware-communication-protocol.html"},"UART: A Hardware Communication Protocol Understanding Universal Asynchronous Receiver/Transmitter"))))}u.isMDXComponent=!0}}]);