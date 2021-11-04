(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(4),a=s.n(i),r=(s(9),s(0)),l=function(e){var t=e.homeRef,s=e.projectsRef,c=e.aboutRef,n=e.navRef;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"nav-bar",ref:n,children:Object(r.jsxs)("ul",{className:"links",children:[Object(r.jsx)("li",{id:"home-link",className:"nav-link",onClick:function(){t.current.scrollIntoView({behavior:"smooth"})},children:"Home"}),Object(r.jsx)("li",{id:"projects-link",className:"nav-link",onClick:function(){s.current.scrollIntoView({behavior:"smooth"})},children:"MyProjects"}),Object(r.jsx)("li",{id:"about-link",className:"nav-link",onClick:function(){c.current.scrollIntoView({behavior:"smooth"})},children:"AboutMe"})]})})})},o=s.p+"static/media/grid-dark.7a0a0979.svg",j=s.p+"static/media/grid-light.56e7deb0.svg",m=s.p+"static/media/blob-big.28b8a9fe.svg",b=s.p+"static/media/blob-small.2c0d8b14.svg",d=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsxs)("div",{className:"hero-text",children:[Object(r.jsx)("h1",{className:"dim",children:"I'm"}),Object(r.jsx)("h1",{children:"Unnat"}),Object(r.jsx)("h1",{children:"Programming"}),Object(r.jsxs)("h1",{children:["Web",Object(r.jsx)("br",{className:"hero-ln-break-one"})," Development"]}),Object(r.jsxs)("h1",{children:["and Linux",Object(r.jsx)("br",{className:"hero-ln-break-two"})," enthusiast"]})]}),Object(r.jsxs)("div",{className:"hero-img",children:[Object(r.jsx)("img",{className:"blob-big",src:m,alt:""}),Object(r.jsx)("img",{className:"blob-small",src:b,alt:""}),Object(r.jsx)("img",{className:"grid-dark",src:o,alt:""}),Object(r.jsx)("img",{className:"grid-light",src:j,alt:""})]})]})})},h=function(e){var t=e.elemRef;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{id:"home",className:"page-section",ref:t,children:Object(r.jsx)(d,{})})})},u=s.p+"static/media/logo.e590160f.png",O=function(e){var t=e.elemRef;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{id:"about",className:"page-section",ref:t,children:Object(r.jsxs)("div",{className:"about-container",children:[Object(r.jsx)("div",{className:"about-left",children:Object(r.jsx)("img",{src:u,alt:""})}),Object(r.jsxs)("div",{className:"about-right",children:[Object(r.jsx)("h1",{className:"about-heading",children:"whoami"}),Object(r.jsxs)("p",{className:"about-content",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent",Object(r.jsx)("br",{}),"molestie purus eu ligula rutrum dictum. Maecenas faucibus placerat",Object(r.jsx)("br",{}),"nibh luctus ornare. Etiam id lobortis arcu. Morbi in lacus dui.",Object(r.jsx)("br",{}),"Nulla ac tortor mi. Aenean in interdum ante. Suspendisse in lorem id",Object(r.jsx)("br",{}),"libero venenatis lacinia sed et sapien. Ut eget erat malesuada,",Object(r.jsx)("br",{}),"varius lectus at, semper sem. Aenean tincidunt ut sem ut imperdiet.",Object(r.jsx)("br",{}),"Donec quis massa aliquam, scelerisque neque placerat, molestie nibh."]})]})]})})})},g=s(2),x=function(e){var t=e.name,s=e.img,c=e.desc;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("a",{href:"https://www.github.com/UnnatShaneshwar/".concat(t),target:"_blank",rel:"noreferrer",children:Object(r.jsxs)("div",{className:"projects-list-item",children:[Object(r.jsx)("img",{className:"list-item-img",src:"./projects-thumbs/".concat(s),alt:""}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"list-item-name",children:t}),Object(r.jsx)("p",{className:"list-item-desc",children:c})]})]})})})},f=Object(c.createContext)(),p=function(e){var t=Object(c.useState)([{id:1,name:"AtomOneDarkTheme",img:"atomonedark.png",desc:"A wide linux theme made in oomox with the Atom One Dark color scheme."},{id:2,name:"MinimalBrowserHomepage",img:"min-browser-homepage.png",desc:"A minimal homepage to use with your web browser."},{id:3,name:"SlotMachine",img:"slotmachine.png",desc:"A dead simple slot machine thingy. Made in vanilla js."},{id:4,name:"Notes",img:"notes.png",desc:"First thing I made after learning js."}]),s=Object(g.a)(t,2),n=s[0],i=s[1];return Object(r.jsx)(f.Provider,{value:[n,i],children:e.children})},v=function(){var e=Object(c.useContext)(f),t=Object(g.a)(e,2),s=t[0];t[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"projects-list",children:s.map((function(e){return Object(r.jsx)(x,{name:e.name,img:e.img,desc:e.desc},e.id)}))})})},N=function(e){var t=e.elemRef;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{id:"projects",className:"page-section",ref:t,children:Object(r.jsxs)("div",{className:"projects-container",children:[Object(r.jsx)("h1",{className:"projects-heading",children:"some of my work"}),Object(r.jsx)(p,{children:Object(r.jsx)(v,{})}),Object(r.jsx)("div",{className:"view-repos-btn",children:Object(r.jsx)("button",{children:Object(r.jsxs)("a",{href:"https://github.com/UnnatShaneshwar?tab=repositories",target:"_blank",rel:"noreferrer",children:[Object(r.jsxs)("span",{children:["-",">"]})," VIEW ALL REPOS"]})})}),Object(r.jsx)("img",{className:"projects-blob",src:m,alt:""})]})})})},w=function(){var e=2021,t=(new Date).getFullYear();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsxs)("p",{className:"copyright",children:["Copyright \xa9 ",e===t?e:"2021-"+t," ","Unnat Shaneshwar. All rights reserved.",Object(r.jsx)("span",{className:"cat",children:"I couldn't find the original owner of the popcat image."})]}),Object(r.jsx)("div",{className:"socials-icons"})]})})},k=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),s=Object(c.useRef)(null);Object(c.useEffect)((function(){var e=document.querySelectorAll(".page-section"),t=document.querySelectorAll(".nav-link"),s=new IntersectionObserver((function(e,s){e.forEach((function(e){if(e.isIntersecting){t.forEach((function(e){e.classList.remove("active")}));var s="".concat(e.target.id,"-link");document.querySelector("#"+s).classList.add("active")}}))}),{threshold:.24});e.forEach((function(e){s.observe(e)}))}),[]);var n=Object(c.useRef)(null);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{navRef:n,homeRef:e,projectsRef:t,aboutRef:s}),Object(r.jsxs)("div",{className:"pages-container",children:[Object(r.jsx)(h,{elemRef:e}),Object(r.jsx)(N,{elemRef:t}),Object(r.jsx)(O,{elemRef:s})]}),Object(r.jsx)(w,{})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),R()},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.877edfad.chunk.js.map