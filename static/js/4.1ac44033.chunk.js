(this.webpackJsonpblitzcards=this.webpackJsonpblitzcards||[]).push([[4],{136:function(e,t,n){e.exports={inputWrapper:"styles_inputWrapper__2lT0Z",input:"styles_input__3SPji"}},137:function(e,t,n){e.exports={button:"styles_button__1N-yY",text:"styles_text__pgtIg"}},138:function(e,t,n){e.exports={blockWrapper:"styles_blockWrapper__2H4g8",closeButton:"styles_closeButton__2OURU",inputsWrapper:"styles_inputsWrapper__2EdEO",button:"styles_button__32wGL"}},139:function(e,t,n){e.exports={title:"styles_title__2OV4-",button:"styles_button__21TbM"}},140:function(e,t,n){e.exports={button:"styles_button__1pHK8",existingLanguagesRow:"styles_existingLanguagesRow__1oKNd",existingLanguage:"styles_existingLanguage__1127L"}},325:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),u=n(136),s=n.n(u),c=function(e){var t=e.placeholder,n=e.name,a=e.onChange;return r.a.createElement("label",{className:s.a.inputWrapper},r.a.createElement("input",{className:s.a.input,placeholder:t,name:n,onChange:a}))},o=n(15),i=n.n(o),g=n(137),p=n.n(g),b=function(e){var t=e.text,n=e.className,a=e.onClick;return r.a.createElement("button",{className:i()(n,p.a.button),onClick:a},r.a.createElement("span",{className:p.a.text},t))};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var f=n(7),O=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)({}),u=Object(f.a)(l,2),s=u[0],c=u[1];return{isNewLanguageModalOpen:n,setNewLanguageModalOpen:r,languageInputValues:s,setLanguageInputValues:c,inputHandleChange:function(e){var t=e.target.name,n=e.target.value;c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s,m({},t,n)))}}},d=n(138),y=n.n(d),E=function(e){var t=e.onClose,n=O(),u=n.languageInputValues,s=n.inputHandleChange,o=Object(l.b)().onLanguageAdd,i=Object(a.useCallback)((function(){o(u),t()}),[u,t,o]);return r.a.createElement("div",{className:y.a.blockWrapper},r.a.createElement("div",{className:y.a.closeButton,onClick:t},"\xd7"),r.a.createElement("div",{className:y.a.inputsWrapper},r.a.createElement(c,{placeholder:"Which language do you want to learn?",name:"targetLanguage",onChange:s}),r.a.createElement(c,{placeholder:"What will be the source language?",name:"sourceLanguage",onChange:s})),r.a.createElement(b,{text:"submit",className:y.a.button,onClick:i}))},N=function(e){var t=e.className,n=e.onClick;return r.a.createElement(b,{text:"add new language",className:t,onClick:n})},h=n(139),v=n.n(h),w=function(){var e=O(),t=e.isNewLanguageModalOpen,n=e.setNewLanguageModalOpen;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(E,{onClose:function(){return n(!1)}}),r.a.createElement("div",{className:v.a.title},"it is a good time to start learning some language"),r.a.createElement(N,{className:v.a.button,onClick:function(){return n(!0)}}))},j=n(140),L=n.n(j),C=function(){var e=Object(l.b)().languages,t=O(),n=t.isNewLanguageModalOpen,a=t.setNewLanguageModalOpen;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(E,{onClose:function(){return a(!1)}}),r.a.createElement(N,{className:L.a.button,onClick:function(){return a(!0)}}),r.a.createElement("div",{className:L.a.existingLanguagesRow},e.map((function(e,t){return r.a.createElement("div",{key:t,className:L.a.existingLanguage},e.targetLanguage)}))))};t.default=function(){return 0===Object(l.b)().languages.length?r.a.createElement(w,null):r.a.createElement(C,null)}}}]);
//# sourceMappingURL=4.1ac44033.chunk.js.map