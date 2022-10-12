"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2654],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>k});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=s.createContext({}),l=function(a){var e=s.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=l(a.components);return s.createElement(i.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},c=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,i=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=l(t),k=n,h=c["".concat(i,".").concat(k)]||c[k]||o[k]||m;return t?s.createElement(h,p(p({ref:e},N),{},{components:t})):s.createElement(h,p({ref:e},N))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7989:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>m,metadata:()=>r,toc:()=>l});var s=t(7462),n=(t(7294),t(3905));const m={id:"Communication Protocol - I2C",title:"I2C"},p=void 0,r={unversionedId:"Communication Protocols/Communication Protocol - I2C",id:"Communication Protocols/Communication Protocol - I2C",title:"I2C",description:"I2C stands for Inter-Integrated Circuit. It is a bus interface connection protocol incorporated into devices for serial communication. It was originally designed by Philips Semiconductor in 1982. Recently, it is a widely used protocol for short-distance communication. It is also known as Two Wired Interface(TWI).",source:"@site/docs/Communication Protocols/I2C.md",sourceDirName:"Communication Protocols",slug:"/Communication Protocols/Communication Protocol - I2C",permalink:"/myWiki/docs/Communication Protocols/Communication Protocol - I2C",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Communication Protocols/I2C.md",tags:[],version:"current",frontMatter:{id:"Communication Protocol - I2C",title:"I2C"},sidebar:"tutorialSidebar",previous:{title:"Proximal Policy Optimization Algorithms",permalink:"/myWiki/docs/Reinforcement Learning/Reinforement Learning - PPO"},next:{title:"SPI",permalink:"/myWiki/docs/Communication Protocols/Communication Protocol - SPI"}},i={},l=[{value:"I2C Pinouts",id:"i2c-pinouts",level:3},{value:"I2C Address",id:"i2c-address",level:3},{value:"I2C Protocol",id:"i2c-protocol",level:3},{value:"Pull-up Resistance",id:"pull-up-resistance",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitaions",id:"limitaions",level:3},{value:"Citations",id:"citations",level:3}],N={toc:l};function o(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I2C stands for Inter-Integrated Circuit. It is a bus interface connection protocol incorporated into devices for serial communication. It was originally designed by Philips Semiconductor in 1982. Recently, it is a widely used protocol for short-distance communication. It is also known as Two Wired Interface(TWI)."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.sparkfun.com/assets/learn_tutorials/8/2/I2C_Schematic.jpg",alt:null})),(0,n.kt)("h3",{id:"i2c-pinouts"},"I2C Pinouts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SCL")," (Serial Clock): It carries the clock signal."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SDA")," (serial data): Transfer of data takes place through this pin.")),(0,n.kt)("h3",{id:"i2c-address"},"I2C Address"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Address Frame"),": 7 address bits + 1 Read/Write bit + 1 ACK/NACK."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data Frames"),": 8 data bits + 1 ACK/NACK following the seccussful transmission of the address frame.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.sparkfun.com/assets/learn_tutorials/8/2/I2C_Basic_Address_and_Data_Frames.jpg",alt:null})),(0,n.kt)("h3",{id:"i2c-protocol"},"I2C Protocol"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"START"),": To initiate the address frame, the controller device leaves SCL high and pulls SDA low."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"STOP"),": Stop conditions are defined by a 0->1 (low to high) transition on SDA after a 0->1 transition on SCL, with SCL remaining high. During normal data writing operation, the value on SDA should not change when SCL is high, to avoid false stop conditions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ACK")," (acknowledge): Once the first 8 bits of the frame are sent, the receiving device is given control over SDA. If the receiving device does not pull the SDA line low before the 9th clock pulse, it can be inferred that the receiving device either did not receive the data or did not know how to parse the message. In that case, the exchange halts, and it's up to the controller of the system to decide how to proceed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Repeated Start"),": To perform a repeated start, SDA is allowed to go high while SCL is low, SCL is allowed to go high, and then SDA is brought low again while SCL is high. Because there was no stop condition on the bus, the previous communication wasn't truly completed and the current controller maintains control of the bus.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.sparkfun.com/assets/learn_tutorials/8/2/I2C_Repeated_Start_Conditions.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Clock Streching"),": The clock is stretched when the slave device is not ready to accept more data by holding the SCL line low, hence disabling the master to raise the clock line. Master will not be able to raise the clock line because the wires are AND wired and wait until the slave releases the SCL line to show it is ready to transfer next bit.\n",(0,n.kt)("img",{parentName:"li",src:"https://cdn.sparkfun.com/assets/learn_tutorials/8/2/I2C_Clock_Stretching.jpg",alt:null}))),(0,n.kt)("h3",{id:"pull-up-resistance"},"Pull-up Resistance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"R"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"P"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"M"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"D"),(0,n.kt)("mi",{parentName:"mrow"},"D"))),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mi",{parentName:"mrow"},"L"),(0,n.kt)("mi",{parentName:"mrow"},"M"),(0,n.kt)("mi",{parentName:"mrow"},"A"),(0,n.kt)("mi",{parentName:"mrow"},"X")))),(0,n.kt)("msub",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"msub"},"I"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mi",{parentName:"mrow"},"L"))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R_{Pull(Min)}=\\frac{V_{DD}-V_{OLMAX}}{I_{OL}}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0385em",verticalAlign:"-0.3552em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5198em",marginLeft:"-0.0077em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"P"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"ll"),(0,n.kt)("span",{parentName:"span",className:"mopen mtight"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"M"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"in"),(0,n.kt)("span",{parentName:"span",className:"mclose mtight"},")"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3552em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3339em",verticalAlign:"-0.4453em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8886em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.07847em"}},"I"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.3567em",marginLeft:"-0.0785em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"L"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1433em"}},(0,n.kt)("span",{parentName:"span"}))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.4103em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.3567em",marginLeft:"-0.2222em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"DD"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1433em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.3567em",marginLeft:"-0.2222em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"L"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"M"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.07847em"}},"X"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1433em"}},(0,n.kt)("span",{parentName:"span"})))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4453em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"R"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"P"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"M"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("msub",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mi",{parentName:"msub"},"r")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"0.8473"),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"C"),(0,n.kt)("mi",{parentName:"msub"},"b"))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R_{Pull(Max)}=\\frac{t_r}{0.8473*C_b}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0385em",verticalAlign:"-0.3552em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5198em",marginLeft:"-0.0077em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"P"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"ll"),(0,n.kt)("span",{parentName:"span",className:"mopen mtight"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"M"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,n.kt)("span",{parentName:"span",className:"mclose mtight"},")"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3552em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2915em",verticalAlign:"-0.4509em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8407em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0.8473"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.07153em"}},"C"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.3488em",marginLeft:"-0.0715em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1512em"}},(0,n.kt)("span",{parentName:"span"}))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.4101em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1645em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,n.kt)("span",{parentName:"span"})))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4509em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mi",{parentName:"mrow"},"L"),(0,n.kt)("mi",{parentName:"mrow"},"M"),(0,n.kt)("mi",{parentName:"mrow"},"A"),(0,n.kt)("mi",{parentName:"mrow"},"X"))),(0,n.kt)("mo",{parentName:"mrow"},"=")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V_{OLMAX} =")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.2222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"L"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"M"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.07847em"}},"X"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"=")))))," Low-level output voltage, ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"I"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mi",{parentName:"mrow"},"L"))),(0,n.kt)("mo",{parentName:"mrow"},"=")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I_{OL} =")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"L"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"=")))))," Low-level output current, ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mi",{parentName:"msub"},"r")),(0,n.kt)("mo",{parentName:"mrow"},"=")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t_r =")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7651em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"=")))))," Rise time of both SDA and SCL signals, ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"C"),(0,n.kt)("mi",{parentName:"msub"},"b")),(0,n.kt)("mo",{parentName:"mrow"},"=")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C_b =")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"=")))))," Capacitive load for each bus line")),(0,n.kt)("p",null,"Min resistance gives the shortest rise time."),(0,n.kt)("p",null,"Max resistance provides the longest capable rise time."),(0,n.kt)("h3",{id:"advantages"},"Advantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can be configured in multi-master mode."),(0,n.kt)("li",{parentName:"ul"},"Complexity is reduced because it uses only 2 bi-directional lines (unlike SPI Communication)."),(0,n.kt)("li",{parentName:"ul"},"Cost-efficient."),(0,n.kt)("li",{parentName:"ul"},"It uses ACK/NACK feature due to which it has improved error handling capabilities.")),(0,n.kt)("h3",{id:"limitaions"},"Limitaions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Slower speed."),(0,n.kt)("li",{parentName:"ul"},"Half-duplex communication is used in the I2C communication protocol.")),(0,n.kt)("h3",{id:"citations"},"Citations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.sparkfun.com/tutorials/i2c/all"},"I2C - Sparkfun"))))}o.isMDXComponent=!0}}]);