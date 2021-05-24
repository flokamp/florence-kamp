(this["webpackJsonpflorence-kamp"]=this["webpackJsonpflorence-kamp"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(43),r=a.n(c),l=(a(50),a(16));var i=function(e){var t=e.categories,a=e.setCurrentCategory,c=e.currentCategory;return Object(n.useEffect)((function(){document.title=c}),[c]),o.a.createElement("header",null,o.a.createElement("a",{href:"/"}," Florence Kamp "),o.a.createElement("nav",null,o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{className:"".concat(c===e&&"navActive"),key:e},o.a.createElement("a",{href:"#".concat(e),onClick:function(){a(e)}},e))})))))},m=a(44),s=a.n(m);var u=function(){return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"headshot-container"},o.a.createElement("img",{id:"headshot",src:s.a,alt:"headshot"})),o.a.createElement("div",{className:"px-2",style:{width:"60%"}},o.a.createElement("h1",null,"Designer & developer \u2014 the swiss army knife of software"),o.a.createElement("h3",null,"If I'm not sketching prototypes or writing code, I'm probably playing chess.")))},p=a(23),g=a(28);var f=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),m=i[0],s=i[1],u=a.name,f=a.email,d=a.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),s(t?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));m||c(Object(g.a)(Object(g.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}return console.log(a),o.a.createElement("div",{className:"flex-row"},o.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)}},o.a.createElement("h1",null,"Contact me \ud83d\udcac"),o.a.createElement("div",{className:"contact-input"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",defaultValue:u,onChange:h,name:"name"})),o.a.createElement("div",{className:"contact-input"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",defaultValue:f,name:"email",onChange:h})),o.a.createElement("div",{className:"contact-input"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{name:"message",defaultValue:d,onChange:h,rows:"5"})),m&&o.a.createElement("div",null,o.a.createElement("p",{className:"error-text"},m)),o.a.createElement("button",{type:"submit"},"Submit")))};var d=function(){return o.a.createElement("div",{class:"projects"},[{title:"Zing",description:"A Socket.IO powered app for creating and joining live chat rooms.",git:"https://github.com/JamesLuu96/zing",demo:"https://zing-chat.herokuapp.com/login",image:"zing"},{title:"Who you gonna call?",description:"An app that helps streamline contact with local reps managing the pandemic.",git:"https://github.com/JPKashlak/who-you-gonna-call",demo:"https://jpkashlak.github.io/who-you-gonna-call/",image:"who-you-gonna-call"},{title:"Budgie",description:"An app that allows you to easily track your income and expenses.",git:"https://github.com/flokamp/budget-tracker",demo:"https://fathomless-temple-08454.herokuapp.com/",image:"budgie"},{title:"Tech Thoughts",description:"A blog where tech lovers can create and engage with posts.",git:"https://github.com/flokamp/tech-blog",demo:"https://salty-castle-11685.herokuapp.com/login",image:"techblog"},{title:"Sidenotes",description:"A simple app for taking quick notes.",git:"https://github.com/flokamp/note-taker-2",demo:"https://my-note-taker-project.herokuapp.com/",image:"note-taker"},{title:"Team Profile Generator",description:"An app that generates a team profile in HTML.",git:"https://github.com/flokamp/team-profile-generator",demo:"https://flokamp.github.io/team-profile-generator/",image:"team-profile-generator"}].map((function(e){return o.a.createElement("div",{className:"project-card"},o.a.createElement("img",{src:a(51)("./".concat(e.image,".png")),className:"img-thumbnail",alt:"".concat(e.image)}),o.a.createElement("div",{className:"project-info"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"links"},o.a.createElement("a",{target:"_blank",href:"".concat(e.demo),className:"btn-link"},"Demo \u2192"),o.a.createElement("a",{target:"_blank",href:"".concat(e.git),className:"btn-link"},"GitHub \u2192"))))})))},h=a(29),b=a(30),E=a.n(b);var v=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(1),r=Object(l.a)(c,2),i=r[0];return r[1],o.a.createElement("section",{id:"resume"},o.a.createElement("button",{id:"download-btn",href:E.a,download:"resume.pdf"},"Download resume"),o.a.createElement(h.Document,{file:E.a,onLoadSuccess:function(e){var t=e.numPages;a(t)}},o.a.createElement(h.Page,{pageNumber:i})))};var k=function(){return o.a.createElement("footer",{className:"flex-row"},o.a.createElement("i",{class:"fab fa-github"}),o.a.createElement("i",{class:"fab fa-linkedin-in"}),o.a.createElement("i",{class:"fab fa-instagram"}))};var y=function(){var e=["About","Portfolio","Resume","Contact"],t=Object(n.useState)(e[0]),a=Object(l.a)(t,2),c=a[0],r=a[1];return o.a.createElement("div",null,o.a.createElement(i,{categories:e,setCurrentCategory:r,currentCategory:c}),o.a.createElement("main",null,"About"===c&&o.a.createElement(u,null),"Portfolio"===c&&o.a.createElement(d,null),"Resume"===c&&o.a.createElement(v,null),"Contact"===c&&o.a.createElement(f,null)),o.a.createElement(k,null))},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),w()},30:function(e,t,a){e.exports=a.p+"static/media/resume.a0d04d9f.pdf"},35:function(e,t){},44:function(e,t,a){e.exports=a.p+"static/media/headshot.c9e4c1c3.jpg"},45:function(e,t,a){e.exports=a(114)},50:function(e,t,a){},51:function(e,t,a){var n={"./budgie.png":52,"./note-taker.png":53,"./project2.png":54,"./team-profile-generator.png":55,"./techblog.png":56,"./who-you-gonna-call.png":57,"./zing.png":58};function o(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=c,e.exports=o,o.id=51},52:function(e,t,a){e.exports=a.p+"static/media/budgie.fe79030e.png"},53:function(e,t,a){e.exports=a.p+"static/media/note-taker.e0b83f86.png"},54:function(e,t,a){e.exports=a.p+"static/media/project2.5411d2be.png"},55:function(e,t,a){e.exports=a.p+"static/media/team-profile-generator.f0189102.png"},56:function(e,t,a){e.exports=a.p+"static/media/techblog.86ea8f33.png"},57:function(e,t,a){e.exports=a.p+"static/media/who-you-gonna-call.c3bf9fe3.png"},58:function(e,t,a){e.exports=a.p+"static/media/zing.4dd31d7e.png"},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){}},[[45,1,2]]]);
//# sourceMappingURL=main.28611e3e.chunk.js.map