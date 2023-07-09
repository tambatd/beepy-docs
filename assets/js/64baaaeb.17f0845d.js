"use strict";(self.webpackChunkbeepy=self.webpackChunkbeepy||[]).push([[253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="OS Image",s={unversionedId:"software/os-image",id:"software/os-image",title:"OS Image",description:"The base OS image is Raspberry Pi OS Lite 32-bit (Debian version 11 bullseye, Kernel 6.1)",source:"@site/docs/software/os-image.md",sourceDirName:"software",slug:"/software/os-image",permalink:"/docs/software/os-image",draft:!1,editUrl:"https://github.com/sqfmi/beepy-docs/blob/main/docs/software/os-image.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software",permalink:"/docs/category/software"},next:{title:"Linux Drivers",permalink:"/docs/software/linux-drivers"}},l={},p=[{value:"Optimizing Boot Speed",id:"optimizing-boot-speed",level:2},{value:"Optimizing Battery Life",id:"optimizing-battery-life",level:2},{value:"Pi Zero 2W Settings",id:"pi-zero-2w-settings",level:3},{value:"Optimizing Apps for small screens",id:"optimizing-apps-for-small-screens",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"os-image"},"OS Image"),(0,o.kt)("p",null,"The base OS image is ",(0,o.kt)("a",{parentName:"p",href:"https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2023-05-03/2023-05-03-raspios-bullseye-armhf-lite.img.xz"},"Raspberry Pi OS Lite 32-bit")," (Debian version 11 bullseye, Kernel 6.1)"),(0,o.kt)("h2",{id:"optimizing-boot-speed"},"Optimizing Boot Speed"),(0,o.kt)("p",null,"To Do - Optimized boot script to reduce boot up time"),(0,o.kt)("h2",{id:"optimizing-battery-life"},"Optimizing Battery Life"),(0,o.kt)("h3",{id:"pi-zero-2w-settings"},"Pi Zero 2W Settings"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Restrict munber of cores to limit peak power use")," - the Zero 2W can be limitid to use two cores and is still much faster tnah the pi zero, but peak power use is nearly half of what 4 cores will use."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sudo vi /boot/cmdline.txt"),(0,o.kt)("li",{parentName:"ul"},'Add "maxcpus=2" after "console=tty1".'),(0,o.kt)("li",{parentName:"ul"},"Reboot")),(0,o.kt)("h2",{id:"optimizing-apps-for-small-screens"},"Optimizing Apps for small screens"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"top")," - You can reduce the number of columns shown by default so that it shows more useful information on the sharp display.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ssh to the Beepy (the needed menu doesn't render correctly on the small screen)"),(0,o.kt)("li",{parentName:"ul"},'run "top"'),(0,o.kt)("li",{parentName:"ul"},'type "f" to enter the columns config screen'),(0,o.kt)("li",{parentName:"ul"},'use the up and down keys to move, and space to remove the "',"*",'" from all of the columns except: PID, USER, S, %CPU, %MEM, COMMAND'),(0,o.kt)("li",{parentName:"ul"},'type "q" to return to the main screen'),(0,o.kt)("li",{parentName:"ul"},'type "W" (capital w) to save the config.'),(0,o.kt)("li",{parentName:"ul"},'type "q" to quit.  Then go back to the Beepy and top should have a nice setup.')))}m.isMDXComponent=!0}}]);