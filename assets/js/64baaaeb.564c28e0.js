"use strict";(self.webpackChunkbeepy=self.webpackChunkbeepy||[]).push([[253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="OS Image",s={unversionedId:"software/os-image",id:"software/os-image",title:"OS Image",description:"The base OS image is Raspberry Pi OS Lite 32-bit (Debian version 11 bullseye, Kernel 6.1)",source:"@site/docs/software/os-image.md",sourceDirName:"software",slug:"/software/os-image",permalink:"/docs/software/os-image",draft:!1,editUrl:"https://github.com/sqfmi/beepy-docs/blob/main/docs/software/os-image.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software",permalink:"/docs/category/software"},next:{title:"Linux Drivers",permalink:"/docs/software/linux-drivers"}},l={},p=[{value:"Optimizing Boot Speed",id:"optimizing-boot-speed",level:2},{value:"Optimizing Battery Life",id:"optimizing-battery-life",level:2},{value:"Pi Zero 2W Settings",id:"pi-zero-2w-settings",level:3},{value:"Optimizing Apps for small screens",id:"optimizing-apps-for-small-screens",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"os-image"},"OS Image"),(0,n.kt)("p",null,"The base OS image is ",(0,n.kt)("a",{parentName:"p",href:"https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2023-05-03/2023-05-03-raspios-bullseye-armhf-lite.img.xz"},"Raspberry Pi OS Lite 32-bit")," (Debian version 11 bullseye, Kernel 6.1)"),(0,n.kt)("h2",{id:"optimizing-boot-speed"},"Optimizing Boot Speed"),(0,n.kt)("p",null,"To Do - Optimized boot script to reduce boot up time"),(0,n.kt)("h2",{id:"optimizing-battery-life"},"Optimizing Battery Life"),(0,n.kt)("h3",{id:"pi-zero-2w-settings"},"Pi Zero 2W Settings"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Restrict number of cores to limit peak power use")," - the Zero 2W can be limited to use two cores and is still much faster than the pi zero, but peak power use is nearly half of what 4 cores will use."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sudo vi /boot/cmdline.txt"),(0,n.kt)("li",{parentName:"ul"},'Add "maxcpus=2" after "console=tty1".'),(0,n.kt)("li",{parentName:"ul"},"Reboot")),(0,n.kt)("h2",{id:"optimizing-apps-for-small-screens"},"Optimizing Apps for small screens"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By default, the LCD display shows a character screen of 50x15. If you develop text-based apps for Beepy, targeting this format will give you compatibility with the widest userbase.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"top")," - You can reduce the number of columns shown by default so that it shows more useful information on the sharp display.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ssh to the Beepy (the needed menu doesn't render correctly on the small screen)"),(0,n.kt)("li",{parentName:"ul"},'run "top"'),(0,n.kt)("li",{parentName:"ul"},'type "f" to enter the columns config screen'),(0,n.kt)("li",{parentName:"ul"},'use the up and down keys to move, and space to remove the "',"*",'" from all of the columns except: PID, USER, S, %CPU, %MEM, COMMAND'),(0,n.kt)("li",{parentName:"ul"},'type "q" to return to the main screen'),(0,n.kt)("li",{parentName:"ul"},'type "W" (capital w) to save the config.'),(0,n.kt)("li",{parentName:"ul"},'type "q" to quit.  Then go back to the Beepy and top should have a nice setup.')))}m.isMDXComponent=!0}}]);