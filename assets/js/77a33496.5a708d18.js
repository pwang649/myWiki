"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[379],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3107:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"Communication Protocol - SPI",title:"Communication Protocol - SPI"},s=void 0,c={unversionedId:"Communication Protocols/Communication Protocol - SPI",id:"Communication Protocols/Communication Protocol - SPI",title:"Communication Protocol - SPI",description:"Serial Peripheral Interface or SPI is a synchronous serial communication protocol that provides full \u2013 duplex communication at very high speeds. Serial Peripheral Interface (SPI) is a master \u2013 slave type protocol that provides a simple and low cost interface between a microcontroller and its peripherals.",source:"@site/docs/Communication Protocols/SPI.md",sourceDirName:"Communication Protocols",slug:"/Communication Protocols/Communication Protocol - SPI",permalink:"/myWiki/docs/Communication Protocols/Communication Protocol - SPI",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Communication Protocols/SPI.md",tags:[],version:"current",frontMatter:{id:"Communication Protocol - SPI",title:"Communication Protocol - SPI"},sidebar:"tutorialSidebar",previous:{title:"Communication Protocol - I2C",permalink:"/myWiki/docs/Communication Protocols/Communication Protocol - I2C"}},d={},p=[{value:"SPI Signals",id:"spi-signals",level:2},{value:"SPI Hardware",id:"spi-hardware",level:2},{value:"SPI Modes of Operation",id:"spi-modes-of-operation",level:2},{value:"Daisy Chain",id:"daisy-chain",level:2},{value:"Applications of SPI",id:"applications-of-spi",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Citations",id:"citations",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Serial Peripheral Interface or SPI is a synchronous serial communication protocol that provides full \u2013 duplex communication at very high speeds. Serial Peripheral Interface (SPI) is a master \u2013 slave type protocol that provides a simple and low cost interface between a microcontroller and its peripherals."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.analog.com/-/media/images/analog-dialogue/en/volume-52/number-3/articles/introduction-to-spi-interface/205973_fig_01.svg?la=en&imgver=3",alt:null})),(0,o.kt)("h2",{id:"spi-signals"},"SPI Signals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SCLK")," (serial clock): The device that generates the clock signal is called the main. Data transmitted between the main and the subnode is synchronized to the clock generated by the main. SPI devices support much higher clock frequencies compared to I2C interfaces. Users should consult the product data sheet for the clock frequency specification of the SPI interface.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SDI/SDO")," (serial data in / serial data out) or ",(0,o.kt)("strong",{parentName:"p"},"MOSI/MISO")," (Master Out Slave in / Slave In Master Out): MOSI and MISO are the data lines. MOSI transmits data from the main to the subnode and MISO transmits data from the subnode to the main.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CS/SS")," (chip select / slave select): The chip select signal from the main is used to select the subnode. This is normally an active low signal and is pulled high to disconnect the subnode from the SPI bus. When multiple subnodes are used, an individual chip select signal for each subnode is required from the main."))),(0,o.kt)("h2",{id:"spi-hardware"},"SPI Hardware"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.electronicshub.org/wp-content/uploads/2017/06/SPI-Hardware.jpg",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"From the image, the Master device consists of a Shift Register, a data latch and a clock generator. The slave consists of similar hardware: a shift register and a data latch. Both the shift registers are connected to form a loop. Usually, the size of the register is 8 \u2013 bits but higher size registers of 16 \u2013 bits are also common.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"During the positive edge of the clock signal, both the devices (master and slave) read input bit into LSB of the register. During the negative cycle of the clock signal, both the master and slave places a bit on its corresponding output from the MSB of the shift register.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Hence, for each clock cycle, a bit of data is transferred in each direction i.e. from master to slave and slave to master. So, for a byte of data to be transmitted from each device, it will take 8 clock cycles."))),(0,o.kt)("h2",{id:"spi-modes-of-operation"},"SPI Modes of Operation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPOL")," (clock polarity): controls the idle state value of the clock when no data is being transferred\u200b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPHA")," (clock phase): controls at which clock edge of the SCLK (1st or 2nd) the data should be sampled by the slave")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SPI Mode"),(0,o.kt)("th",{parentName:"tr",align:null},"CPOL"),(0,o.kt)("th",{parentName:"tr",align:null},"CPHA"),(0,o.kt)("th",{parentName:"tr",align:null},"Clock Phase Used to Sample and/or Shift the Data"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"Data sampled on rising edge and shifted out on the falling edge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Data sampled on the falling edge and shifted out on the rising edge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"Data sampled on the rising edge and shifted out on the falling edge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Data sampled on the falling edge and shifted out on the rising edge")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.electronicshub.org/wp-content/uploads/2017/06/SPI-Modes-and-Timing.jpg",alt:null})),(0,o.kt)("h2",{id:"daisy-chain"},"Daisy Chain"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.electronicshub.org/wp-content/uploads/2017/06/SPI-Daisy-Chain.jpg",alt:null})),(0,o.kt)("p",null,"In Daisy Chain Configuration, only a single Slave Select line is connected to all the slaves. The MOSI of the master is connected to the MOSI of slave 1. MISO of slave 1 is connected to MOSI of slave 2 and so on. The MISO of the final slave is connected to the MISO of the master."),(0,o.kt)("p",null,"Consider the master transmits 3 bytes of data in to the SPI bus. First, the 1st byte of data is shifted to slave 1. When the 2nd byte of data reaches slave 1, the first byte is pushed in to slave 2."),(0,o.kt)("p",null,"Finally, when the 3rd byte of data arrives in to the first slave, the 1st byte of data is shifted to slave 3 and the second byte of data is shifted in to second slave."),(0,o.kt)("p",null,"If the master wants to retrieve information from the slaves, it has to send 3 bytes of junk data to the slaves so that the information in the slaves comes to the master."),(0,o.kt)("h2",{id:"applications-of-spi"},"Applications of SPI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: SD Card , MMC , EEPROM , Flash"),(0,o.kt)("li",{parentName:"ul"},"Sensors: Temperature and Pressure"),(0,o.kt)("li",{parentName:"ul"},"Control Devices: ADC , DAC , digital POTS and Audio Codec."),(0,o.kt)("li",{parentName:"ul"},"Others: Camera Lens Mount, touchscreen, LCD, RTC, video game controller, etc.")),(0,o.kt)("h2",{id:"advantages"},"Advantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPI is very simple to implement and the hardware requirements are not that complex."),(0,o.kt)("li",{parentName:"ul"},"Supports full \u2013 duplex communication at all times."),(0,o.kt)("li",{parentName:"ul"},"Very high speed of data transfer."),(0,o.kt)("li",{parentName:"ul"},"No need for individual addresses for slaves as CS or SS is used."),(0,o.kt)("li",{parentName:"ul"},"Only one master device is supported and hence there is no chance of conflicts."),(0,o.kt)("li",{parentName:"ul"},"Clock from the master is configured based on speed of the slave and hence slave doesn\u2019t have to worry about clock.")),(0,o.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each additional slave requires an additional dedicated pin on master for CS or SS."),(0,o.kt)("li",{parentName:"ul"},"There is no acknowledgement mechanism and hence there is no confirmation of receipt of data."),(0,o.kt)("li",{parentName:"ul"},"Slowest device determines the speed of transfer."),(0,o.kt)("li",{parentName:"ul"},"There are no official standards and hence often used in application specific implementations."),(0,o.kt)("li",{parentName:"ul"},"There is no flow control.")),(0,o.kt)("h2",{id:"citations"},"Citations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.analog.com/en/analog-dialogue/articles/introduction-to-spi-interface.html"},"https://www.analog.com/en/analog-dialogue/articles/introduction-to-spi-interface.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.electronicshub.org/basics-serial-peripheral-interface-spi/#:~:text=Serial%20Peripheral%20Interface%20or%20SPI,a%20microcontroller%20and%20its%20peripherals."},"https://www.electronicshub.org/basics-serial-peripheral-interface-spi/#:~:text=Serial%20Peripheral%20Interface%20or%20SPI,a%20microcontroller%20and%20its%20peripherals."))))}m.isMDXComponent=!0}}]);