(this.webpackJsonpandreapdev=this.webpackJsonpandreapdev||[]).push([[0],{24:function(n,e,t){},31:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var i,c,r,s,a,l,o,d,j,h,m,b=t(1),x=t.n(b),p=t(15),O=t.n(p),u=(t(24),t(3)),f=t(4),g=f.a.header(i||(i=Object(u.a)(["\n    text-align: center;\n    h1{\n        font-family: 'Poiret One', cursive, 'Helvetica Neue',\n        sans-serif;\n        font-weight:lighter;\n        margin-bottom: 2rem;\n        color: #8F9491;\n      }\n    h2{\n        font-weight: lighter;\n        margin-bottom: 2rem;\n        color: #8F9491;\n        \n    }\n    @media only screen and (min-width: 768px) {\n        h1{\n            font-size: 5rem;\n            text-shadow: 0.1rem 0 #21FA90, 0.2rem 0 #F397D6;\n        }\n        h1:hover{\n            animation-name: titleAnim;\n            animation-duration: 1s;\n          }\n    }\n    @media only screen and (max-width: 767px) {\n        h1{\n            font-size: 3rem;\n            font-weight: normal;\n            text-shadow: 0.1rem 0 #21FA90;\n        }\n    }\n    \n    @keyframes titleAnim {\n        75%{text-shadow: 0.3rem 0 #21FA90, 0.6rem 0 #F397D6;}\n    }\n"]))),v=t(0),w=function(){return Object(v.jsxs)(g,{children:[Object(v.jsx)("h1",{children:"ANDREA PENSO"}),Object(v.jsx)("h2",{children:"Front-End Developer"})]})},y=t(19),C={lightColor:"#FFFFFF",warningColor:"#F397D6",secondaryColor:"#21FA90",primaryColor:"#8F9491",darkColor:"#424651"},N=f.a.div(c||(c=Object(u.a)(["\n    background-color: ",";\n    width: 80%;\n    padding: 0.5rem;\n    border-style: solid inherit;\n    border-radius: 2rem;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    transition: .25s ease-in-out;\n    box-shadow: 0.6rem 0.6rem ",";\n\n    .nav{\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        font-weight: bold;\n        height: 100%;\n        width: 100%;\n    }\n\n    a, #navbar-open, #navbar-close{\n        color: ",";\n        padding: 0.5rem;\n    }\n\n    @media only screen and (min-width: 768px) {\n        \n        .nav{\n            font-size: 1.2rem;\n        }\n        a{\n            transition: .25s ease-in-out;\n            &:hover{\n                transform: scale(1.1, 1.1);\n            }\n        }\n        #navbar-open, #navbar-close{\n            display: none;\n        }\n    }\n    @media only screen and (max-width: 767px) {\n        .nav{\n            flex-direction: column;\n        }\n        .hideThis{\n            display: none;\n        }\n    }\n"])),C.secondaryColor,C.warningColor,C.lightColor),k=t(5),A=t(6),F=Object(v.jsx)(k.a,{icon:A.a}),S=Object(v.jsx)(k.a,{icon:A.c}),I=function(){var n=Object(b.useState)(!1),e=Object(y.a)(n,2),t=e[0],i=e[1],c=function(){i(!t),console.log(t)};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(N,{children:[Object(v.jsx)("div",{id:"navbar-open",onClick:c,className:t?"nav hideThis":"nav",children:F}),Object(v.jsxs)("div",{className:t?"nav":"nav hideThis",onClick:c,children:[Object(v.jsx)("div",{id:"navbar-close",children:S}),Object(v.jsx)("a",{href:"#aboutme",children:"About Me"}),Object(v.jsx)("a",{href:"#contact",children:"Contact"}),Object(v.jsx)("a",{href:"#skills",children:"Skills"}),Object(v.jsx)("a",{href:"#projects",children:"Projects"}),Object(v.jsx)("a",{href:"#education",children:"Education"})]})]})})},T=f.a.section(r||(r=Object(u.a)(["\n    padding: 0 1rem;\n    width: 90%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    @media only screen and (min-width: 768px) {\n        .section-content, h3{\n            width: 80%;\n        }\n    }\n    @media only screen and (max-width: 767px) {\n        .section-content, h3{\n            width: 100%;\n        }\n    }\n"]))),z=function(n){var e=n.id,t=n.title,i=n.children;return Object(v.jsxs)(T,{id:e,children:[Object(v.jsx)("h3",{children:t}),Object(v.jsx)("div",{className:"section-content",children:i})]})},D=f.a.article(s||(s=Object(u.a)(["\n    \n"]))),E=function(){return Object(v.jsxs)(z,{id:"projects",title:"Projects",children:[Object(v.jsx)(D,{children:Object(v.jsx)("a",{href:"https://github.com/andreapdev/my-sales",children:Object(v.jsx)("h4",{children:"'MySales' sales registry"})})}),Object(v.jsx)(D,{children:Object(v.jsx)("a",{href:"https://github.com/andreapdev/ecommerce-exercici",children:Object(v.jsx)("h4",{children:"'La Librer\xeda' eCommerce"})})}),Object(v.jsx)(D,{children:Object(v.jsx)("a",{href:"https://github.com/andreapdev/checkout-app",children:Object(v.jsx)("h4",{children:"eCommerce Cart"})})})]})},M=f.a.div(a||(a=Object(u.a)(["\n    display: flex;\n\n    @media only screen and (min-width: 768px) {\n        img{\n            border-radius: 50%;\n            height: 12rem;\n            box-shadow: 0.6rem 0.6rem ",";\n            margin-right: 2rem;\n        }\n    }\n    @media only screen and (max-width: 767px) {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        img{\n            border-radius: 50%;\n            height: 6rem;\n            width: 6rem;\n            box-shadow: 0.4rem 0.4rem ",";\n            margin-right: 1rem;\n        }\n    }\n"])),C.secondaryColor,C.secondaryColor),L=t.p+"static/media/profile-pic.b66166e7.jpg",P=function(){return Object(v.jsx)(z,{id:"aboutme",title:"About Me",children:Object(v.jsxs)(M,{children:[Object(v.jsx)("img",{src:L,alt:"myself"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{children:["Hello! I'm Andrea, a ",Object(v.jsx)("strong",{children:"Front-End Developer trained in React"}),", and with a special interest in UX/UI design and accessibility."]}),Object(v.jsxs)("p",{children:["After I graduated in Biomedical Sciences I started learning videogame and web development, and most recently I completed a specialized course in React taught by the IT Academy at ",Object(v.jsx)("i",{children:"Barcelona Activa"}),"."]}),Object(v.jsx)("p",{children:"I speak fluent Spanish and Catalan, as well as advanced English, and I'm currently looking for a full-time position as a developer!"})]})]})})},B=f.a.article(l||(l=Object(u.a)(["\n    .skills-main{\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: center;\n\n    }\n    .skills-other{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-around;\n    }\n    h4{\n        font-size: 1rem;\n        color: ",";\n    }\n"])),C.primaryColor),R=f.a.div(o||(o=Object(u.a)(["\n\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    font-weight: bolder;\n    color: ",";\n    border: solid 2px ",";\n    border-radius: 2rem;\n    z-index: -6;\n    overflow: hidden;\n\n    &::before{\n        content: '';\n        position: absolute;\n        background-color: ",";\n        z-index: -5;\n        left: 0;\n        height: 100%;\n        width: ",";\n    }\n    @media only screen and (min-width: 600px) {\n        width: 13rem;\n        height: 4rem;\n        font-size: 1.1rem;\n        margin: 1rem;\n    }\n    @media only screen and (max-width: 599px) {\n        width: 100%;\n        max-width: 350px;\n        height: 2.2rem;\n        font-size: 1rem;\n        margin: 0.2rem;\n    }\n\n"])),C.lightColor,C.secondaryColor,C.secondaryColor,(function(n){return n.value})),U=function(){return Object(v.jsx)(z,{id:"skills",title:"Skills",children:Object(v.jsxs)(B,{className:"tech-skills",children:[Object(v.jsxs)("div",{className:"skills-main",children:[Object(v.jsx)(R,{value:"85%",children:"React"}),Object(v.jsx)(R,{value:"95%",children:"JavaScript (ES6+)"}),Object(v.jsx)(R,{value:"85%",children:"TypeScript"}),Object(v.jsx)(R,{value:"95%",children:"HTML5"}),Object(v.jsx)(R,{value:"95%",children:"CSS3, SASS"}),Object(v.jsx)(R,{value:"95%",children:"Bootstrap"}),Object(v.jsx)(R,{value:"95%",children:"Styled Components"}),Object(v.jsx)(R,{value:"80%",children:"Redux"}),Object(v.jsx)(R,{value:"90%",children:"Git, Trello"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"As well as"}),Object(v.jsxs)("div",{className:"skills-other",children:[Object(v.jsx)("p",{children:"C#, JAVA"}),Object(v.jsx)("p",{children:"SQL, Firebase"}),Object(v.jsx)("p",{children:"Unity"}),Object(v.jsx)("p",{children:"Illustrator/Inkscape"}),Object(v.jsx)("p",{children:"Photoshop/GIMP"}),Object(v.jsx)("p",{children:"3DMax"})]})]})]})})},H=f.a.div(d||(d=Object(u.a)(["\n    display: flex;\n    \n    @media only screen and (min-width: 768px) {\n        justify-content: space-around;\n    }\n    @media only screen and (max-width: 767px) {\n        flex-direction: column;\n    }\n"]))),J=f.a.div(j||(j=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    cursor: pointer;\n    transition: .25s ease-in-out;\n\n    .msg{\n        visibility:hidden;\n        transition: .25s ease-in-out;\n        position: relative;\n        top: 2rem;\n        font-size: 0.5rem;\n        font-weight: bold;\n        color: ",";\n    }\n    .icon{\n        font-size: 4rem;\n        color: ",";\n        transition: .25s ease-in-out;\n    }\n    @media only screen and (min-width: 768px) {\n        \n        &:hover{\n            color: ",";\n            .icon{\n                color: ",";\n                transform: scaleX(0);\n            }\n            .msg{\n                visibility:visible;\n                transform: scale(2,2);\n            }\n        }\n    }\n    @media only screen and (max-width: 767px) {\n        min-width: 2rem;\n    }\n"])),C.warningColor,C.primaryColor,C.secondaryColor,C.secondaryColor),G=t(12),V=Object(v.jsx)(k.a,{icon:A.b}),Q=Object(v.jsx)(k.a,{icon:G.b}),X=Object(v.jsx)(k.a,{icon:G.a}),_=function(){return Object(v.jsx)(z,{id:"contact",title:"Get in touch!",children:Object(v.jsxs)(H,{children:[Object(v.jsxs)(J,{onClick:function(){navigator.clipboard.writeText("andreap.dev@gmail.com")},children:[Object(v.jsx)("span",{className:"msg",children:"Click to copy"}),Object(v.jsxs)("span",{className:"icon",children:[" ",V]}),Object(v.jsx)("span",{children:"andreap.dev@gmail.com"})]}),Object(v.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/andreapdev",children:Object(v.jsxs)(J,{children:[Object(v.jsx)("span",{className:"msg",children:Object(v.jsx)("span",{children:"Open link"})}),Object(v.jsxs)("span",{className:"icon",children:[" ",X]}),Object(v.jsx)("span",{children:"Github"})]})}),Object(v.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://linkedin.com/in/andreapdev",children:Object(v.jsxs)(J,{children:[Object(v.jsx)("span",{className:"msg",children:"Open link"}),Object(v.jsxs)("span",{className:"icon",children:[" ",Q]}),Object(v.jsx)("span",{children:"Linkedin"})]})})]})})},Y=f.a.footer(h||(h=Object(u.a)(["\n    padding: 1rem;\n    width: 90%;\n    display: flex;\n    justify-content: space-around;\n    @media only screen and (max-width: 767px) {\n        margin-top: 5rem;\n    }\n"]))),q=function(){return Object(v.jsxs)(Y,{children:[Object(v.jsx)("span",{children:"\xa9 2021 Andrea Penso"}),Object(v.jsx)("span",{children:"Made with React!"})]})},K=f.a.div(m||(m=Object(u.a)(["\n    \n    position: relative;\n    \n    &::before{\n        content: '';\n        border-left: solid 0.2rem ",";\n        display:inline-block;\n        position: absolute;\n        float: left;\n        left: 1.9rem;\n        top: 3.2rem;\n        bottom: 10rem;\n    }\n\n    h4{\n        font-size: 1.2rem;\n        color: ",";\n    }\n\n    .course{\n        display: flex;\n        &::before{\n            content: '';\n            position: relative;\n\n            top: 2rem;\n            border: 0.2rem solid inherit;\n            border-radius: 100%;\n            background: ",";\n            min-height: 2rem;\n            max-height: 2rem;\n            min-width: 2rem;\n            max-width: 2rem;\n        }\n    }\n    .last{\n        height: 13rem;\n    }\n    .what{\n        color: ",";\n    }\n\n    @media only screen and (min-width: 768px) {\n        padding-left: 5rem;\n        .course::before{\n            left: -4rem;\n        }\n    }\n    @media only screen and (max-width: 767px) {\n        padding-left: 2rem;\n        .course::before{\n            left: -1rem;\n        }\n    }\n"])),C.warningColor,C.warningColor,C.warningColor,C.primaryColor),W=function(){return Object(v.jsx)(z,{id:"education",title:"Education",children:Object(v.jsxs)(K,{children:[Object(v.jsx)("article",{className:"course",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Front-End Development"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"where",children:"IT Academy "}),Object(v.jsx)("span",{className:"when",children:"| 06/2020- 01/2021"})]}),Object(v.jsx)("p",{className:"what",children:"React, JS ES7+, HTML5, CSS3"})]})}),Object(v.jsx)("article",{className:"course",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Introduction to Unity (16h)"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"where",children:"Cibernarium "}),Object(v.jsx)("span",{className:"when",children:"| 02/2020"})]}),Object(v.jsx)("p",{className:"what",children:"Unity, C#"})]})}),Object(v.jsx)("article",{className:"course",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"HLTC Multiplatform Application Development (First Semester)"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"where",children:"Institut Obert de Catalunya "}),Object(v.jsx)("span",{className:"when",children:"| 09/2019- 01/2020"})]}),Object(v.jsx)("p",{className:"what",children:"JAVA, SQL"})]})}),Object(v.jsx)("article",{className:"course",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"HLTC 3D Animation and Videogames (First Year)"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"where",children:"Escola Mitjans Audiovisuals "}),Object(v.jsx)("span",{className:"when",children:"| 09/2016- 06/2017"})]}),Object(v.jsx)("p",{className:"what",children:"C#, Adobe Animate, Photoshop, Illustrator, 3DMax"})]})}),Object(v.jsx)("article",{className:"course last",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"BSc Biomedical Sciences"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"where",children:"Universitat de Barcelona, Cardiff University "}),Object(v.jsx)("span",{className:"when",children:"| 2010- 2015"})]})]})})]})})};t(31);var Z=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(w,{}),Object(v.jsx)(I,{}),Object(v.jsxs)("main",{children:[Object(v.jsx)(P,{}),Object(v.jsx)(_,{}),Object(v.jsx)(U,{}),Object(v.jsx)(E,{}),Object(v.jsx)(W,{})]}),Object(v.jsx)(q,{})]})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(n),i(n),c(n),r(n),s(n)}))};O.a.render(Object(v.jsx)(x.a.StrictMode,{children:Object(v.jsx)(Z,{})}),document.getElementById("root")),$()}},[[32,1,2]]]);
//# sourceMappingURL=main.2f22eb13.chunk.js.map