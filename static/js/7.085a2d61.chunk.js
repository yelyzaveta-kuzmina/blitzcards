(this.webpackJsonpblitzcards=this.webpackJsonpblitzcards||[]).push([[7],{138:function(e,t,o){e.exports={colorPicker:"styles_colorPicker__lDsbT",propertyName:"styles_propertyName__2JKod",colorPreview:"styles_colorPreview__1qHDx"}},321:function(e,t,o){e.exports={settingsWindow:"styles_settingsWindow__38ObN",left:"styles_left__2uQNb",backgroundColorPreview:"styles_backgroundColorPreview__oVH4d",displayColorPreview:"styles_displayColorPreview__2iRJb",textColorPreview:"styles_textColorPreview__3xCVe",right:"styles_right__29RxO"}},324:function(e,t,o){"use strict";o.r(t);var r=o(0),l=o.n(r),a=o(7),n=o(18),c=o(14),s=o.n(c),i=o(138),u=o.n(i),C=function(e){var t=e.className,o=e.propertyName,r=e.style,a=e.onClick;return l.a.createElement("div",{className:u.a.colorPicker},l.a.createElement("span",{className:u.a.propertyName},o,":"),l.a.createElement("div",{className:s()(u.a.colorPreview,t),style:r,onClick:a}))},d=o(139),g=o.n(d),p=o(158),k=function(e){var t=e.backgroundColor,o=e.textColor,r=e.displayColor,a=e.setBackgroundColor,n=e.setTextColor,c=e.setDisplayColor,s=e.activeSetting,i=e.setActiveSetting;return l.a.createElement(g.a,{onOutsideClick:function(){return i(null)}},"background-color"===s&&l.a.createElement(p.SketchPicker,{width:"20em",color:t,onChange:function(e){var t=e.hex;return a(t)}}),"text-color"===s&&l.a.createElement(p.SketchPicker,{width:"20em",color:o,onChange:function(e){var t=e.hex;return n(t)}}),"display-color"===s&&l.a.createElement(p.SketchPicker,{width:"20em",color:r,onChange:function(e){var t=e.hex;return c(t)}}))},y=o(321),v=o.n(y);t.default=function(){var e=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),o=t[0],l=t[1],c=Object(n.b)(),s=c.backgroundColor,i=c.textColor,u=c.displayColor,C=c.setBackgroundColor,d=c.setTextColor,g=c.setDisplayColor,p=Object(r.useCallback)((function(e){l(e!==o?e:null)}),[o]);return{activeSetting:o,backgroundColor:s,textColor:i,displayColor:u,setActiveSetting:l,setBackgroundColor:C,setTextColor:d,setDisplayColor:g,onActiveSettingChange:p}}(),t=e.backgroundColor,o=e.textColor,c=e.displayColor,s=e.activeSetting,i=e.setActiveSetting,u=e.setBackgroundColor,d=e.setTextColor,g=e.setDisplayColor,p=e.onActiveSettingChange;return l.a.createElement("div",{className:v.a.settingsWindow},l.a.createElement("div",{className:v.a.left},l.a.createElement(C,{className:v.a.backgroundColorPreview,propertyName:"Background color",style:{backgroundColor:t},onClick:function(){return p("background-color")}}),l.a.createElement(C,{className:v.a.displayColorPreview,propertyName:"Display color",style:{backgroundColor:c},onClick:function(){return p("display-color")}}),l.a.createElement(C,{className:v.a.textColorPreview,propertyName:"Text color",style:{backgroundColor:o},onClick:function(){return p("text-color")}})),l.a.createElement("div",{className:v.a.right},l.a.createElement(k,{backgroundColor:t,textColor:o,displayColor:c,activeSetting:s,setActiveSetting:i,setBackgroundColor:u,setTextColor:d,setDisplayColor:g})))}}}]);
//# sourceMappingURL=7.085a2d61.chunk.js.map