(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var s=n(3),c=n.n(s),a=n(4),i=n(1),b=(n(9),n(0)),l=function(t){var e=t.tabs,n=t.onTabSelected,s=t.selectedTabId;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"tabs__list tabs-list",children:e.map((function(t){return Object(b.jsx)("div",{className:"tabs-list__item",children:Object(b.jsx)("button",{type:"button",className:"tabs-list__button\n              ".concat(s===t.id&&"tabs-list__button--active"),onClick:function(){return n(t)},children:t.title})},t.id)}))}),Object(b.jsx)("div",{className:"tabs__content tabs-content",children:e.map((function(t){return s===t.id?t.content:null}))})]})},d=(n(11),[{id:"tab-1",title:"9:00",content:"Morning tasks"},{id:"tab-2",title:"10:00",content:"FE lesson"},{id:"tab-3",title:"12:30",content:"English lesson"},{id:"tab-4",title:"15:00",content:"Interview"}]),o=function(){var t=Object(i.useState)(d[0]),e=Object(a.a)(t,2),n=e[0],s=e[1];return Object(b.jsxs)("div",{className:"tabs",children:[Object(b.jsx)("h1",{className:"tabs__title",children:"My day"}),Object(b.jsxs)("h2",{className:"tabs__subtitle",children:["Selected time is\xa0",n.title]}),Object(b.jsx)(l,{tabs:d,onTabSelected:s,selectedTabId:n.id})]})};c.a.render(Object(b.jsx)(o,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8184654a.chunk.js.map