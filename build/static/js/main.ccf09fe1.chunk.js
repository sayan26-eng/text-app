(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},27:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(14),c=t.n(o),r=(t(25),t(6)),s=(t(27),t(8));function i(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"TextUtils"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown"),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),n.a.createElement("li",null,n.a.createElement("hr",{className:"dropdown-divider"})),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here")))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link disabled"},"Disabled")))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function d(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0];a[1];return n.a.createElement("div",{className:"container",style:t},n.a.createElement("h1",{className:"my-3"},"About us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var m=function(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#2B547E"}},n.a.createElement("div",{class:"mb-3"},n.a.createElement("h1",null,e.heading),n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#2B547E":"white",color:"dark"===e.mode?"white":"black"},id:"exampleFormControlTextarea1",rows:"10"})),n.a.createElement("button",{className:"btn btn-dark mx-1 my-1",onClick:function(){var e=o.toUpperCase();c(e)}},"Covert to Uppercase"),n.a.createElement("button",{className:"btn btn-dark mx-1 my-1",onClick:function(){var e=o.toLowerCase();c(e)}},"Covert to Lowercase")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#2B547E"}},n.a.createElement("h1",null,"Your Text Summary"),n.a.createElement("p",null,o.split(" ").filter(function(e){return 0!==e.length}).length," words and ",o.length," characters"),n.a.createElement("p",null,.008*o.split(" ").length," Minutes Read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o)))};var u=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},e.alert.type," : ",e.alert.msg)},h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement("div",{className:"container"},n.a.createElement(i,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#2B547E",E("Dark mode enable","success"),document.title="TextUtils - Dark Mode"):(o("light"),document.body.style.backgroundColor="white",E("Light mode enable","success"),document.title="TextUtils - Light Mode")}}),n.a.createElement(u,{alert:p}),n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/about"},n.a.createElement(d,null)),n.a.createElement(h.a,{exact:!0,path:"/"},n.a.createElement(m,{heading:"Enter the text to analyze",mode:t}))))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,37)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()}},[[16,3,2]]]);
//# sourceMappingURL=main.ccf09fe1.chunk.js.map