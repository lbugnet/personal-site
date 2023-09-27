(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{12:function(e,t,n){"use strict";n(1);var s=n(26),c=n(27),i=n(29),a=n(30),r=n(28),l=[{link:"https://github.com/lbugnet",label:"Github",icon:c.faGithub},{link:"https://www.researchgate.net/profile/Lisa-Bugnet",label:"ResearchGate",icon:r.faResearchgate},{link:"https://www.linkedin.com/in/lisa-bugnet/",label:"LinkedIn",icon:i.faLinkedinIn},{link:"https://twitter.com/lisa_Bugnet",label:"Twitter",icon:a.faTwitter}],o=n(0);t.a=function(){return Object(o.jsx)("ul",{className:"icons",children:l.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.link,children:Object(o.jsx)(s.a,{icon:e.icon})})},e.label)}))})}},20:function(e,t,n){"use strict";var s=n(1),c=n(16),i=n(3),a=n(13),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),l=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===l&&a.a.initialize(o);var j=function(){var e=Object(i.f)().pathname;return Object(s.useEffect)((function(){"production"===l&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},b=n(6),h=[{index:!0,label:"Lisa Bugnet",path:"/"},{label:"Research",path:"/projects"},{label:"CV",path:"/resume"},{label:"Publications",path:"/publications"},{label:"Outreach",path:"/outreach"},{label:"Contact",path:"/contact"}],u=n(12),d=n(0),p=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(u.a,{}),"\xa0\xa0\xa0\xa0\xa0\xa0"]})},O="/personal-site",x=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(b.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat(O,"/images/me.jpg"),alt:""})}),Object(d.jsx)(b.b,{to:"https://www.asterics.at/",className:"logo",children:Object(d.jsx)("img",{src:"".concat(O,"/images/asterics.png"),alt:""})}),Object(d.jsx)("header",{children:Object(d.jsx)("h2",{children:"Lisa Bugnet"})}),Object(d.jsxs)("b",{children:[Object(d.jsx)("a",{href:"https://ist.ac.at/en/research/bugnet-group/",children:"Assistant Professor"})," at ",Object(d.jsx)("a",{href:"https://ist.ac.at/en/home/",children:"Institute of Science and Technology Austria (ISTA)"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{style:{text:"lowercase",fontSize:"20px",color:"#629DFC"},align:"center",children:["Leader of the Asterics -- Asteroseismology & Stellar Dynamics group at ISTA. Group website: ",Object(d.jsx)("a",{href:"https://www.asterics.at/",children:"ASTERICS"})]}),Object(d.jsxs)("b",{style:{text:"lowercase",fontSize:"20px",color:"#629DFC"},align:"center",children:["Contact: ",Object(d.jsx)("a",{href:"mailto:lisa.bugnet@ist.ac.at",children:"lisa.bugnet@ist.ac.at"})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsxs)("p",{children:["I am an Astrophysicist, specialized in Stellar physics. I use Asteroseismology to unveil the dynamical processes taking place inside the core of stars like the Sun. I am currently an Assistant Professor and leader of the Asterics -- Asteroseismology & Stellar Dynamics group at ",Object(d.jsx)("a",{href:"https://ist.ac.at/en/home/",children:"Institute of Science and Technology Austria (ISTA)"})]}),Object(d.jsxs)("p",{children:[" I obtained my PhD in Astrophysics in 2020 from ",Object(d.jsx)("a",{href:"https://u-paris.fr/en/",children:"University of Paris"}),"and ",Object(d.jsx)("a",{href:"https://www.cea.fr/english",children:"CEA"}),", and my Astrophysics and Earth Sciences Master degrees in 2017 from",Object(d.jsx)("a",{href:"https://www.ens.psl.eu/en",children:"Ecole Normale Sup\xe9rieure of Paris"})," and",Object(d.jsx)("a",{href:"https://www.observatoiredeparis.psl.eu/-observatoire-de-paris-.html?lang=en",children:"Paris Observatory"}),"."]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(u.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Lisa Bugnet ",Object(d.jsx)(b.b,{to:"/",children:"lbugnet.github.io/personal-site"}),"."]})]})]})},f=function(){var e=Object(i.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},m=function(e){return Object(d.jsxs)(c.b,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(f,{}),Object(d.jsxs)(c.a,{titleTemplate:"%s | Lisa Bugnet",defaultTitle:"Lisa Bugnet",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(x,{})]})]})};m.defaultProps={children:null,fullPage:!1,title:null,description:"Lisa Bugnet's personal website."};t.a=m},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(17),a=n(6),r=n(3),l=n(20),o=(n(43),n(0)),j=Object(s.lazy)((function(){return n.e(5).then(n.bind(null,51))})),b=Object(s.lazy)((function(){return n.e(6).then(n.bind(null,46))})),h=Object(s.lazy)((function(){return n.e(7).then(n.bind(null,47))})),u=Object(s.lazy)((function(){return n.e(8).then(n.bind(null,52))})),d=Object(s.lazy)((function(){return n.e(9).then(n.bind(null,48))})),p=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,49))})),O=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,50))})),x=function(){return Object(o.jsx)(a.a,{basename:"/personal-site",children:Object(o.jsx)(s.Suspense,{fallback:Object(o.jsx)(l.a,{}),children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(o.jsx)(r.a,{path:"/projects",component:u}),Object(o.jsx)(r.a,{path:"/publications",component:p}),Object(o.jsx)(r.a,{path:"/contact",component:j}),Object(o.jsx)(r.a,{path:"/resume",component:d}),Object(o.jsx)(r.a,{path:"/outreach",component:O}),Object(o.jsx)(r.a,{component:h,status:404})]})})})},f=function(){return Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(i.hydrate)(Object(o.jsx)(f,{}),m):Object(i.render)(Object(o.jsx)(f,{}),m)}},[[44,1,2]]]);
//# sourceMappingURL=main.f6184e48.chunk.js.map