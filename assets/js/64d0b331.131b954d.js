"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(3117),o=(n(7294),n(3905));const r={id:"Code - 2048",title:"2048 Verilog",sidebar_position:10},i=void 0,s={unversionedId:"Code/Code - 2048",id:"Code/Code - 2048",title:"2048 Verilog",description:"Abstract",source:"@site/docs/Code/2048.md",sourceDirName:"Code",slug:"/Code/Code - 2048",permalink:"/myWiki/docs/Code/Code - 2048",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/2048.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"Code - 2048",title:"2048 Verilog",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"RL DP Code",permalink:"/myWiki/docs/Code/Code - DP"},next:{title:"Gradient Descent Code",permalink:"/myWiki/docs/Code/Optimization/Code - GD"}},l={},d=[{value:"Abstract",id:"abstract",level:3},{value:"Introduction and Background",id:"introduction-and-background",level:3},{value:"Design",id:"design",level:3},{value:"Test Methodology",id:"test-methodology",level:3},{value:"Conclusion and Future Work",id:"conclusion-and-future-work",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"The goal of our project is to reproduce the video game 2048 on a Nexys-4 board and a VGA display screen. Users can play the well-known game 2048 on any connected screen by pushing the appropriate buttons on the Nexys-4 board. A new block with the number 2 would appear after each turn in the sliding block game 2048 on a 4 by 4 grid. When moving, two blocks with the same value will combine and add. The user wins the game when there is a block with the number 2048."),(0,o.kt)("p",null,"Play the game ",(0,o.kt)("a",{parentName:"p",href:"https://play2048.co/"},"here"),"."),(0,o.kt)("h3",{id:"introduction-and-background"},"Introduction and Background"),(0,o.kt)("p",null,"We referred to a lot of our prior lab work in this endeavor. In order to acquire a slower scanning of the shown screen, we are employing a divclock from the introduction lab. Additionally, we can display our numbers by smaller segments by looking at the given VGA module and referring to the preceding seven segment display. Lastly, the button debouncing code is taken from the previous lab to handle button debouncing."),(0,o.kt)("h3",{id:"design"},"Design"),(0,o.kt)("p",null,"Our goal is to recreate the game 2048 on the Nexys-4 board using Verilog coding. We must allow the functionality of moving blocks to other blocks and combining blocks with the same number in order to accomplish this. We create the state diagram below to accomplish this."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3014).Z,width:"2245",height:"1412"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Initialization State:")," The 4 by 4 grid (which we configured as a ","[0:15]"," array) will be initialized at the Initial State after reset, with all values set to 0. In this game, 0 represents a blank space. The system will generate the number 2 at a random location in the array following the generation of a reset signal (from the reset button). ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Random Number Generation State:")," We just utilize a four-bit incrementer to keep counting to get a random position in the array as the random function in Verilog cannot be synthesized. We also check for whether the game is terminated in this state -- either one cell reaches 256 or every cell has been filled up in the matrix -- and transits to the done state.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wait State:")," The user will hit one of the BUTTONS (UP, DOWN, LEFT, RIGHT) to make a move when a two has been created. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Merge State:")," This state move all the elements based on the direction given by the user button. It can be divided into two steps."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Step One (Compress):")," Shift every non-zero element to the edhe of the matrix corresponding to the moving direction."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(1948).Z,width:"1012",height:"630"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Step Two (Merge):")," Merge adjacent elements if they have the same values and shift accordingly."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(5086).Z,width:"844",height:"452"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After all is done, the state goes to the random number generation state.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Done State:")," To end the game, the state will move to the Done state. The state will then be reset by the Reset signal, at which point the game will begin again."))),(0,o.kt)("p",null,"The user needs to provide a number of key inputs in order to play this game. BTNC for Reset, BTNU for Upward Movement, BTND for Downward Movement, BTNL for Left Movement, and BTNR for Right Movement. The majority of the output is on the VGA display, where we may show the user a 4 by 4 grid with numbers in the middle of the blocks. The majority of output signals are simply signals for displaying numbers. Whether the user wins or loses the game, they will be thanked."),(0,o.kt)("h3",{id:"test-methodology"},"Test Methodology"),(0,o.kt)("p",null,"We are able to put it on the board and link the board to a screen using the VGA connector using the bit file that was produced. Using the VGA module, we can visually spot design flaws and make changes in response to what we have seen."),(0,o.kt)("h3",{id:"conclusion-and-future-work"},"Conclusion and Future Work"),(0,o.kt)("p",null,"We initially chose this 2048 game because we believed it would be simple to implement our concept using Verilog coding on the Nexys Board as 2048 is not a difficult or complicated project if we use Java or C++. We begin to see, nevertheless, how significantly hardware design language and software design language differ from one another. The code's synthesizability must be taken into account, and debugging and simulation present the most challenges. However, we are still able to complete it, and we appreciate the knowledge we gained from the prior labs. "),(0,o.kt)("p",null,"In the future, we can try implementing an SSD based scoring system and expand the scoring limit to 2048."))}p.isMDXComponent=!0},3014:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2048_SM-86907faf2597dce4d0c132d64ca9b4a1.jpg"},1948:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2048_step1-55ebadc4822f0a7a6b5618c76821242a.png"},5086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2048_step2-9af6eeed273b95a880a171849e960ae8.png"}}]);