(this.webpackJsonpblitzcards=this.webpackJsonpblitzcards||[]).push([[3],{19:function(e,t,n){"use strict";var a=n(9),r=n(3),c=n(0),o=n.n(c),l=n(5);n.d(t,"b",(function(){return s}));var u=function(){var e=localStorage.getItem("language");return Object(l.a)(e,[])}(),i=Object(c.createContext)({}),s=function(){return Object(c.useContext)(i)};t.a=function(e){var t=e.children,n=Object(c.useState)(u),l=Object(r.a)(n,2),s=l[0],f=l[1],b=Object(c.useCallback)((function(e){f((function(t){return[].concat(Object(a.a)(t),[e])}))}),[]),g=Object(c.useCallback)((function(e){var t=s.filter((function(t){return t.id!==e}));f(t)}),[s]);Object(c.useEffect)((function(){var e;e=s,localStorage.setItem("language",JSON.stringify(e))}),[s]);var m={languages:s,onLanguageAdd:b,onLanguageDelete:g};return o.a.createElement(i.Provider,{value:m},t)}},20:function(e,t,n){"use strict";var a=n(9),r=n(13),c=n(3),o=n(0),l=n.n(o),u=n(5),i=n(14);n.d(t,"b",(function(){return b}));var s=function(){var e=localStorage.getItem("category");return Object(u.a)(e,[])}(),f=Object(o.createContext)({}),b=function(){return Object(o.useContext)(f)};t.a=function(e){var t=e.children,n=Object(o.useState)(s),u=Object(c.a)(n,2),b=u[0],g=u[1],m=Object(o.useCallback)((function(e){var t=Object(r.a)({id:Object(i.uuid)()},e);g((function(e){return[].concat(Object(a.a)(e),[t])}))}),[]),d=Object(o.useCallback)((function(e){var t=b.filter((function(t){return t.id!==e}));g(t)}),[b]);Object(o.useEffect)((function(){var e;e=b,localStorage.setItem("category",JSON.stringify(e))}),[b]);var O={categories:b,onCategoryAdd:m,onCategoryDelete:d};return l.a.createElement(f.Provider,{value:O},t)}},22:function(e,t,n){"use strict";var a=n(9),r=n(13),c=n(3),o=n(0),l=n.n(o),u=n(5),i=n(14);n.d(t,"b",(function(){return b}));var s=function(){var e=localStorage.getItem("word");return Object(u.a)(e,[])}(),f=Object(o.createContext)({}),b=function(){return Object(o.useContext)(f)};t.a=function(e){var t=e.children,n=Object(o.useState)(s),u=Object(c.a)(n,2),b=u[0],g=u[1],m=Object(o.useCallback)((function(e){var t=Object(r.a)({id:Object(i.uuid)()},e);g((function(e){return[].concat(Object(a.a)(e),[t])}))}),[]),d=Object(o.useCallback)((function(e){var t=b.filter((function(t){return t.id!==e}));g(t)}),[b]);Object(o.useEffect)((function(){var e;e=b,localStorage.setItem("word",JSON.stringify(e))}),[b]);var O={words:b,onWordAdd:m,onWordDelete:d};return l.a.createElement(f.Provider,{value:O},t)}},27:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r),o=n(16),l=n.n(o),u=function(e,t){t&&document.documentElement.style.setProperty(e,t)},i=n(5),s=function(e){return localStorage.setItem("background-color",JSON.stringify(e))},f=function(e){return localStorage.setItem("text-color",JSON.stringify(e))};n.d(t,"b",(function(){return v}));var b=function(){var e=localStorage.getItem("background-color");return Object(i.a)(e)}(),g=function(){var e=localStorage.getItem("text-color");return Object(i.a)(e)}(),m=l()(g).lighten(.3).toString(),d=function(){var e=localStorage.getItem("display-color");return Object(i.a)(e)}();u("--background-color",s),u("--text-color",f),u("--text-color-light",m),u("--display-color",d);var O=Object(r.createContext)({}),v=function(){return Object(r.useContext)(O)};t.a=function(e){var t=e.children,n=Object(r.useState)(b||"#5d5abf"),o=Object(a.a)(n,2),i=o[0],m=o[1],v=Object(r.useState)(g||"#7b7676"),j=Object(a.a)(v,2),h=j[0],p=j[1],E=Object(r.useState)(d||"white"),y=Object(a.a)(E,2),S=y[0],C=y[1];Object(r.useEffect)((function(){u("--background-color",i),s(i)}),[i]),Object(r.useEffect)((function(){var e=l()(h).lighten(.3).toString();u("--text-color",h),u("--text-color-light",e),f(h)}),[h]),Object(r.useEffect)((function(){u("--display-color",S),function(e){localStorage.setItem("display-color",JSON.stringify(e))}(S)}),[S]);var x={backgroundColor:i,textColor:h,displayColor:S,setBackgroundColor:m,setTextColor:p,setDisplayColor:C};return c.a.createElement(O.Provider,{value:x},t)}},30:function(e,t,n){e.exports={wrapper:"styles_wrapper__3HDkj"}},31:function(e,t,n){e.exports={button:"styles_button__3GviN"}},34:function(e,t,n){e.exports={startPageButton:"styles_startPageButton__3xlAw"}},36:function(e,t,n){e.exports=n(58)},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){if(!e)return t;try{return JSON.parse(e)}catch(n){return t}}},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),l=n(12),u=Object(a.createContext)({}),i=function(e){var t=e.children;return r.a.createElement(u.Provider,{value:{}},t)},s=n(27),f=n(19),b=n(20),g=n(22),m=n(7),d=n(3),O=n(29),v=n.n(O),j=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,1)[0];return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(v.a,{size:150,color:"gray",loading:t}))},h=n(30),p=n.n(h),E=function(e){var t=e.children;return r.a.createElement("div",{className:p.a.wrapper},t)};var y=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 512 512",version:"1.1",viewBox:"0 0 512 512",xmlSpace:"preserve"},r.a.createElement("circle",{cx:"256",cy:"256",r:"248.5",fill:"#FFD164"}),r.a.createElement("path",{fill:"#FFE17D",d:"M357.924 227.994h.04M327.539 79.645h-102.03a24.047 24.047 0 00-22.828 16.485l-54.913 165.734a24.05 24.05 0 0022.828 31.612h49.258l-40.94 130.336c-3.494 11.125 1.497 23.155 11.841 28.539a24.038 24.038 0 0030.168-6.676L376.568 243.2a23.93 23.93 0 005.424-15.206c0-13.282-10.746-24.048-24.028-24.048h-52.169l43.397-89.787a24.048 24.048 0 00-21.653-34.514zm0 48.097h.04-.04z"}),r.a.createElement("path",{fill:"#FFF",d:"M357.924 227.994L267.461 227.994 327.539 103.694 225.509 103.694 170.596 269.428 252.614 269.428 201.857 431.019z"}),r.a.createElement("path",{fill:"#FFC350",d:"M288.065 472.435c-137.243 0-248.5-111.258-248.5-248.5 0-60.457 21.608-115.855 57.498-158.938C42.343 110.581 7.5 179.214 7.5 256c0 137.242 111.257 248.5 248.5 248.5 76.787 0 145.421-34.844 191.004-89.564-43.083 35.891-98.482 57.499-158.939 57.499z"}),r.a.createElement("path",{d:"M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zm-10.607 351.433C380.894 471.932 320.374 497 256 497s-124.894-25.068-170.413-70.587S15 320.374 15 256 40.068 131.106 85.587 85.587 191.626 15 256 15s124.894 25.068 170.413 70.587S497 191.626 497 256s-25.068 124.894-70.587 170.413z"}),r.a.createElement("path",{d:"M357.924 220.494h-78.508l33.636-69.593a7.499 7.499 0 00-3.489-10.016 7.496 7.496 0 00-10.016 3.489l-38.839 80.357a7.499 7.499 0 006.753 10.764h75.238L221.687 392.917l38.083-121.242a7.5 7.5 0 00-7.155-9.748h-71.632l49.944-150.734h84.659l-2.209 4.572a7.499 7.499 0 003.489 10.016 7.499 7.499 0 0010.016-3.489l7.412-15.335a7.499 7.499 0 00-6.753-10.764h-102.03a7.501 7.501 0 00-7.12 5.141l-54.914 165.734a7.502 7.502 0 007.12 9.859h71.801l-47.695 151.844a7.499 7.499 0 0013.101 6.818L363.87 232.565a7.5 7.5 0 00-5.946-12.071z"}))},S=n(18),C=n.n(S),x=n(31),k=n.n(x),z=function(e){var t=e.to,n=e.className,c=Object(m.f)(),o=Object(a.useCallback)((function(){c.push(t)}),[t,c]);return r.a.createElement("div",{className:C()(k.a.button,n)},r.a.createElement("div",{onClick:o},r.a.createElement(y,null)))},w=n(34),P=n.n(w),L=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(10)]).then(n.bind(null,370))})),I=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(8)]).then(n.bind(null,371))})),N=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(9)]).then(n.bind(null,373))})),F=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(7)]).then(n.bind(null,372))})),J=Object(a.lazy)((function(){return Promise.all([n.e(5),n.e(12)]).then(n.bind(null,369))})),_=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,367))})),B=Object(a.lazy)((function(){return n.e(13).then(n.bind(null,368))})),D=function(){return r.a.createElement(E,null,r.a.createElement(z,{className:P.a.startPageButton,to:"/"}),r.a.createElement(a.Suspense,{fallback:r.a.createElement(j,null)},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:L}),r.a.createElement(m.a,{path:"/languages",component:I}),r.a.createElement(m.a,{path:"/:sourceLanguage-:targetLanguage/:category/game-settings",component:_}),r.a.createElement(m.a,{path:"/:sourceLanguage-:targetLanguage/:category/game",component:B}),r.a.createElement(m.a,{path:"/:sourceLanguage-:targetLanguage/:category",component:F}),r.a.createElement(m.a,{path:"/:sourceLanguage-:targetLanguage",component:N}),r.a.createElement(m.a,{path:"/settings",component:J}))))};n(54),n(55);o.a.render(r.a.createElement(l.a,{basename:"/blitzcards",hashType:"noslash"},r.a.createElement(s.a,null,r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(i,null,r.a.createElement(D,null))))))),document.getElementById("root"))}},[[36,4,6]]]);
//# sourceMappingURL=main.47982841.chunk.js.map