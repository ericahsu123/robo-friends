(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),s=a(2),o=a.n(s),l=a(14),u=a(3),m=a(15),d=a.n(m),p=function(e){return r.a.createElement("div",{className:"ui centered card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.name,".png"),alt:"robot"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"center aligned header"},e.name),r.a.createElement("div",{className:"center aligned description"},e.email)))},f=function(e){return r.a.createElement("div",{className:"ui cards",style:{marginTop:"150px"}},e.robots.map((function(e){return r.a.createElement(p,{key:e.id,name:e.name,email:e.email})})))},E=function(e){return r.a.createElement("div",{className:"ui top fixed huge stackable menu"},r.a.createElement("div",{className:"item"},r.a.createElement("h1",null,"RoboFriends")),r.a.createElement("div",{className:"right item"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"text",placeholder:"Search robots...",onChange:function(t){e.handleQuery(t.target.value)},value:e.query}),r.a.createElement("i",{className:"search icon"}))))},h=(a(39),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],p=s[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return r.a.createElement("div",{className:"ui container center aligned"},r.a.createElement(E,{query:m,handleQuery:function(e){p(e)}}),r.a.createElement(f,{robots:h}))});i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.770805d3.chunk.js.map