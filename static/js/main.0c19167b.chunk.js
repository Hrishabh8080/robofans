(this.webpackJsonprobofans=this.webpackJsonprobofans||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),o=c(3),i=c.n(o),s=(c(12),c(4)),r=c(5),l=c(7),p=c(6),h=c(0),d=function(e){var t=e.name,c=e.email,a=e.id;return Object(h.jsxs)("div",{className:" white b--solid tc bg-navy dib br3 pa3 mt4 grow ma2 shadow-3",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robotsImage"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("p",{children:c})]})]})},m=function(e){var t=e.robots;return Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsx)(d,{id:e.id,name:e.name,email:e.email},t)}))})},u=(c(14),function(e){return Object(h.jsx)("div",{className:"popup--back",children:Object(h.jsx)("div",{className:"popup--content",children:Object(h.jsx)("div",{className:"popup--close",onClick:e.closePopup,children:"x"})})})}),b=function(e){return Object(h.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"500px"},children:e.children})},j=function(e){var t=e.serchChange;return Object(h.jsx)("input",{type:"serch",placeholder:"Search Robot ...",id:"",onChange:t,className:"pa3 mt3 b-navy bg-blue white "})},g=[{id:1,name:"Apple",email:"apple@gmail.com"},{id:2,name:"Boy",email:"boy@gmail.com"},{id:3,name:"Cat",email:"cat@gmail.com"},{id:4,name:"Dog",email:"dog@gmail.com"},{id:5,name:"Elephant",email:"elephant@gmail.com"},{id:6,name:"Flight",email:"flight@gmail.com"}],x=function(e){Object(l.a)(c,e);var t=Object(p.a)(c);function c(){var e;return Object(s.a)(this,c),(e=t.call(this)).onSerchChange=function(t){e.setState({searchField:t.target.value})},e.openPopup=function(){e.setState({popup:!0})},e.closePopup=function(){e.setState({popup:!1})},e.state={robots:g,searchField:"",popup:!1},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return Object(h.jsxs)("div",{className:"tc",children:[this.state.popup?Object(h.jsx)(u,{closePopup:this.closePopup}):"",Object(h.jsx)(j,{serchChange:this.onSerchChange}),Object(h.jsx)(b,{children:Object(h.jsx)(m,{robots:t})})]})}}]),c}(n.a.Component);c(15);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c19167b.chunk.js.map