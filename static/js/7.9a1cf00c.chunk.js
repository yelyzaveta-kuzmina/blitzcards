(this.webpackJsonpblitzcards=this.webpackJsonpblitzcards||[]).push([[7],{169:function(e,t,a){var n=a(170),r=a(171);e.exports=function(e,t,a){var l=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[l+s]=o[s];return t||r(o)}},170:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},171:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,r=a;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},172:function(e,t,a){e.exports={blockWrapper:"styles_blockWrapper__2H4g8",closeButton:"styles_closeButton__2OURU",inputsWrapper:"styles_inputsWrapper__2EdEO",button:"styles_button__32wGL"}},173:function(e,t,a){e.exports={alertBoxWrapper:"styles_alertBoxWrapper__3CWKh",closeButton:"styles_closeButton__10e5m",text:"styles_text__2TfCU",buttons:"styles_buttons__3AjUB",button:"styles_button__36mSv"}},174:function(e,t,a){e.exports={toPreviousPageButton:"styles_toPreviousPageButton__38nO9",existingLanguage:"styles_existingLanguage__2Hb3K",languagesPairBox:"styles_languagesPairBox__3_S23",deleteButton:"styles_deleteButton__23Y7Q",sourceLanguage:"styles_sourceLanguage__2aemV",alertBoxWrapper:"styles_alertBoxWrapper__1QGA8"}},362:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),l=a.n(r),o=a(12),s=a(17),u=a(98),c=a(19),i=a(18),m=a(169),g=a.n(m),p=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)({id:g()()}),s=Object(n.a)(o,2),u=s[0],m=s[1];return{isNewLanguageModalOpen:a,setNewLanguageModalOpen:l,languageInputValues:u,setLanguageInputValues:m,inputHandleChange:function(e){var t=e.target.name,a=e.target.value;m(Object(i.a)({},u,Object(c.a)({},t,a)))}}},_=a(73),b=a(64),f=a(71),d=a(172),y=a.n(d),v=function(e){var t=e.onClose,a=p(),n=a.languageInputValues,o=a.inputHandleChange,u=Object(s.b)().onLanguageAdd,c=Object(r.useCallback)((function(){u(n),t()}),[n,t,u]);return l.a.createElement("div",{className:y.a.blockWrapper},l.a.createElement(f.a,{className:y.a.closeButton,onClick:t}),l.a.createElement("div",{className:y.a.inputsWrapper},l.a.createElement(_.a,{placeholder:"Which language do you want to learn?",name:"targetLanguage",onChange:o}),l.a.createElement(_.a,{placeholder:"What will be the source language?",name:"sourceLanguage",onChange:o})),l.a.createElement(b.a,{text:"submit",className:y.a.button,onClick:c}))},E=a(173),x=a.n(E),N=function(e){var t=e.text,a=e.onModalClose;return l.a.createElement("div",{className:x.a.alertBoxWrapper},l.a.createElement(f.a,{className:x.a.closeButton,onCLick:a}),l.a.createElement("div",{className:x.a.text},t),l.a.createElement("div",{className:x.a.buttons},l.a.createElement("button",{className:x.a.button},"Yes"),l.a.createElement("button",{className:x.a.button},"No")))},C=a(77),h=a(79),k=a(85),B=a(120),L=function(e){var t=e.className,a=e.onClick;return l.a.createElement(k.a,{className:t,onClick:a,icon:B.b})},O=a(174),w=a.n(O);t.default=function(){var e=Object(s.b)().languages,t=p(),a=t.isNewLanguageModalOpen,c=t.setNewLanguageModalOpen,i=Object(r.useState)(null),m=Object(n.a)(i,2),g=m[0],_=m[1],b=e.find((function(e){return e.id===g}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{className:w.a.toPreviousPageButton,to:"/"}),a&&l.a.createElement(v,{onClose:function(){return c(!1)}}),0===e.length&&l.a.createElement(C.a,{title:"it is a good time to start learning some language",buttonText:"add new language",onClick:function(){return c(!0)}}),e.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{title:"Languages",buttonText:"add new language",onClick:function(){return c(!0)}},e.map((function(e,t){return l.a.createElement(o.b,{to:"/".concat(e.sourceLanguage,"-").concat(e.targetLanguage),key:t,className:w.a.existingLanguage},l.a.createElement("div",{className:w.a.languagesPairBox},l.a.createElement(L,{className:w.a.deleteButton,onClick:function(t){t.preventDefault(),_(e.id)}}),l.a.createElement("span",null,e.targetLanguage),l.a.createElement("span",{className:w.a.sourceLanguage},e.sourceLanguage)))})),b&&l.a.createElement(N,{text:"Are you sure you want to permanently remove ".concat(b.targetLanguage," language from your learning list?")}))))}},64:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(16),o=a.n(l),s=a(75),u=a.n(s);t.a=function(e){var t=e.text,a=e.className,n=e.onClick;return r.a.createElement("button",{className:o()(a,u.a.button),onClick:n},r.a.createElement("span",{className:u.a.text},t))}},71:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(16),o=a.n(l),s=a(76),u=a.n(s);t.a=function(e){var t=e.className,a=e.onClick;return r.a.createElement("div",{className:o()(u.a.closeButton,t),onClick:a},"\xd7")}},73:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(74),o=a.n(l);t.a=function(e){var t=e.placeholder,a=e.name,n=e.onChange;return r.a.createElement("label",{htmlFor:a,className:o.a.inputWrapper},r.a.createElement("input",{className:o.a.input,placeholder:t,name:a,onChange:n}))}},74:function(e,t,a){e.exports={inputWrapper:"styles_inputWrapper__2lT0Z",input:"styles_input__3SPji"}},75:function(e,t,a){e.exports={button:"styles_button__1N-yY",text:"styles_text__pgtIg"}},76:function(e,t,a){e.exports={closeButton:"styles_closeButton__XSUlW"}},77:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(64),o=a(78),s=a.n(o);t.a=function(e){var t=e.title,a=e.buttonText,n=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.a.title},t),r.a.createElement(l.a,{text:a,className:s.a.button,onClick:n}))}},78:function(e,t,a){e.exports={title:"styles_title__57__P",button:"styles_button__469we"}},79:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(64),o=a(80),s=a.n(o);t.a=function(e){var t=e.title,a=e.buttonText,n=e.onClick,o=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.a.header},r.a.createElement("div",{className:s.a.title},t),r.a.createElement(l.a,{text:a,className:s.a.button,onClick:n})),r.a.createElement("div",{className:s.a.content},o))}},80:function(e,t,a){e.exports={header:"styles_header__8jyxl",title:"styles_title__ZGPKi",button:"styles_button__Zh_tZ",content:"styles_content__2xZEM"}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(7),o=a(85),s=a(121),u=a(16),c=a.n(u),i=a(99),m=a.n(i);t.a=function(e){var t=e.to,a=e.className,u=Object(l.f)(),i=Object(n.useCallback)((function(){u.push(t)}),[t,u]);return r.a.createElement("div",{className:c()(m.a.button,a)},r.a.createElement("div",{onClick:i},r.a.createElement(o.a,{onClick:i,icon:s.a})))}},99:function(e,t,a){e.exports={button:"styles_button__7D8eJ"}}}]);
//# sourceMappingURL=7.9a1cf00c.chunk.js.map