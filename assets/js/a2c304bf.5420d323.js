"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3244],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(b,a(a({ref:e},p),{},{components:n})):o.createElement(b,a({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6454:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(3117),r=(n(7294),n(3905));const i={id:"Robotics - Control - LQR",title:"Linear Quadratic Regulator",sidebar_position:5},a=void 0,l={unversionedId:"Robotics/Control/Robotics - Control - LQR",id:"Robotics/Control/Robotics - Control - LQR",title:"Linear Quadratic Regulator",description:"\x3c!-- Typically, it is challenging to compute value function analytically from the Bellman equation. In fact, we will discuss a variety of methods to approximately obtain the value function later. However, for a certain restricted class of problems, the value function can be obtained in closed form. One such problem is that of the Linear Quadratic Regulator (LQR).",source:"@site/docs/Robotics/Control/LQR.md",sourceDirName:"Robotics/Control",slug:"/Robotics/Control/Robotics - Control - LQR",permalink:"/myWiki/docs/Robotics/Control/Robotics - Control - LQR",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Robotics/Control/LQR.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Robotics - Control - LQR",title:"Linear Quadratic Regulator",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Dynamic Programming",permalink:"/myWiki/docs/Robotics/Control/Robotics - Control - Dynamic Programming"},next:{title:"Gentle Start",permalink:"/myWiki/docs/Machine Learning Theory/Machine Learning Theory - Start"}},s={},c=[{value:"Problem 1",id:"problem-1",level:3},{value:"Problem 2",id:"problem-2",level:3},{value:"Code Implementation",id:"code-implementation",level:4},{value:"Plot",id:"plot",level:4},{value:"Problem 3",id:"problem-3",level:3}],p={toc:c};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"problem-1"},"Problem 1"),(0,r.kt)("h3",{id:"problem-2"},"Problem 2"),(0,r.kt)("h4",{id:"code-implementation"},"Code Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\n\nif __name__ == \'__main__\':\n    a = 1\n    b = 1\n    q = 1\n    qf = q\n    r = 1\n    N = 20\n    x0 = 1\n    p_list = [0] * (N + 1)\n    k_list = [0] * (N + 1)\n    state_list = [0] * (N + 2)\n    state_list[0] = x0\n    cost_list = [0] * (N + 1)\n\n    # Backward computation for p and k\n    def LQR(n):\n        if n == N:\n            p_list[n] = qf\n            return\n        else:\n            LQR(n + 1)\n            k_list[n] = p_list[n + 1] * a * b / (r + p_list[n + 1] * b ** 2)\n            p_list[n] = q + r * k_list[n] ** 2 + p_list[n + 1] * a ** 2 - 2 * \\\n                p_list[n + 1] * a * b * k_list[n] + \\\n                p_list[n + 1] * b ** 2 * k_list[n] ** 2\n        return\n    LQR(0)\n\n    # Forward computation for the value function\n    for t in range(N + 1):\n        cost_list[t] = p_list[t] * state_list[t] ** 2\n        u_star = - k_list[t] * state_list[t]\n        state_list[t + 1] = a * state_list[t] + b * u_star\n\n    # Compute control\n    u_list = []\n    for t in range(N + 1):\n        u_list.append(-k_list[t] * state_list[t])\n\n    # Plot them\n    plt.title("q = " + str(q) + ", r = " + str(r))\n    plt.plot(range(N + 1), cost_list, label="cost-to-go")\n    plt.plot(range(N + 2), state_list, label="state")\n    plt.plot(range(N + 1), u_list, label="control")\n    plt.legend()\n    plt.show()\n')),(0,r.kt)("h4",{id:"plot"},"Plot"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7125).Z,width:"640",height:"480"})),(0,r.kt)("h3",{id:"problem-3"},"Problem 3"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2172).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6332).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6635).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8690).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7394).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9457).Z,width:"640",height:"480"})))}u.isMDXComponent=!0},7125:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/LQR_1-b1f1e556d941071ca09c2ba0c547cf52.png"},2172:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/LQR_2-bbadc8b07699676863ab0703dda30444.png"},6332:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/LQR_3-c9aefe2d3b835509282efd5fd314ec1b.png"},6635:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/LQR_4-ea23b5ca173aeefb4bdda9695e6c702b.png"},8690:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/LQR_5-46f88698362ec9e4a6c358618efa86c4.png"},7394:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/LQR_6-5b9576f905fde918b4bf9a6e91480cbb.png"},9457:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/LQR_7-dba87cd9a4e526c964c812db753ffa91.png"}}]);