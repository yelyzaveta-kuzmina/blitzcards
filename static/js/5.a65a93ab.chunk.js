(this.webpackJsonpblitzcards=this.webpackJsonpblitzcards||[]).push([[5],{159:function(e,t,a){e.exports={blockWrapper:"styles_blockWrapper__3CL1G",closeButton:"styles_closeButton__1da9x",inputsWrapper:"styles_inputsWrapper__3kD64",button:"styles_button__1zn8l"}},160:function(e,t,a){e.exports={selectedLanguageHeader:"styles_selectedLanguageHeader__LkqZx",selectedLanguageTitle:"styles_selectedLanguageTitle__JUDxf",button:"styles_button__1laGC",content:"styles_content__2T8HF",category:"styles_category__2Lsbx"}},348:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a.n(c),l=a(7),s=a(19),o=a(84),u=a(65),i=a(71),g=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)({}),o=Object(n.a)(s,2),u=o[0],g=o[1];return{isNewCategoryModalOpen:r,setNewCategoryModalOpen:l,categoryInputValue:u,setCategoryInputValue:g,inputHandleChange:function(t){var a,n=t.target.name,c=t.target.value;g((a={},Object(i.a)(a,n,c),Object(i.a)(a,"categoryBelongsToLanguage",e),a))}}},p=a(159),m=a.n(p),b=function(e){var t=e.onClose,a=e.language,n=g(a),l=n.categoryInputValue,i=n.inputHandleChange,p=Object(s.b)().onCategoryAdd,b=Object(c.useCallback)((function(){p(l),t()}),[l,t,p]);return r.a.createElement("div",{className:m.a.blockWrapper},r.a.createElement("div",{className:m.a.closeButton,onClick:t},"\xd7"),r.a.createElement("div",{className:m.a.inputsWrapper},r.a.createElement(o.a,{placeholder:"Name of the category",name:"categoryName",onChange:i})),r.a.createElement(u.a,{text:"submit",className:m.a.button,onClick:b}))},_=a(160),d=a.n(_);t.default=function(){var e=Object(l.g)().params.language,t=Object(c.useState)(!1),a=Object(n.a)(t,2),o=a[0],i=a[1],g=Object(s.b)().categories.filter((function(t){return t.categoryBelongsToLanguage===e}));return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(b,{onClose:function(){return i(!1)},language:e}),r.a.createElement("div",{className:d.a.selectedLanguageHeader},r.a.createElement("div",{className:d.a.selectedLanguageTitle},e),r.a.createElement(u.a,{text:"add new category",className:d.a.button,onClick:function(){return i(!0)}})),r.a.createElement("div",{className:d.a.content},g.map((function(e,t){return r.a.createElement("div",{key:t,className:d.a.category},e.categoryName)}))))}},65:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=a(86),o=a.n(s);t.a=function(e){var t=e.text,a=e.className,n=e.onClick;return c.a.createElement("button",{className:l()(a,o.a.button),onClick:n},c.a.createElement("span",{className:o.a.text},t))}},71:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},84:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(85),l=a.n(r);t.a=function(e){var t=e.placeholder,a=e.name,n=e.onChange;return c.a.createElement("label",{className:l.a.inputWrapper},c.a.createElement("input",{className:l.a.input,placeholder:t,name:a,onChange:n}))}},85:function(e,t,a){e.exports={inputWrapper:"styles_inputWrapper__2lT0Z",input:"styles_input__3SPji"}},86:function(e,t,a){e.exports={button:"styles_button__1N-yY",text:"styles_text__pgtIg"}}}]);
//# sourceMappingURL=5.a65a93ab.chunk.js.map