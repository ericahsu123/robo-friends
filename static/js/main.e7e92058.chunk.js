(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=a(2),s=a.n(l),o=a(14),m=a(3),u=a(15),d=a.n(u),E=function(e){return r.a.createElement("div",{className:"ui centered card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.name,".png"),alt:"robot",style:{backgroundColor:"rgb(185, 226, 224)"}})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"center aligned header"},e.name),r.a.createElement("div",{className:"center aligned description"},e.email)))},p=function(e){return r.a.createElement("div",{className:"ui cards"},e.robots.map((function(e){return r.a.createElement(E,{key:e.id,name:e.name,email:e.email})})))},v=function(e){return r.a.createElement("div",{className:"ui top fixed huge stackable menu"},r.a.createElement("div",{className:"item"},r.a.createElement("h1",null,"RoboFriends")),r.a.createElement("div",{className:"right item"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"text",placeholder:"Search robots...",onChange:function(t){e.handleQuery(t.target.value)},value:e.query}),r.a.createElement("i",{className:"search icon"}))))},f=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui text loader"},"Loading")))},h=(a(39),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(m.a)(i,2),u=l[0],E=l[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return r.a.createElement("div",{className:"ui container center aligned"},r.a.createElement(v,{query:u,handleQuery:function(e){E(e)}}),r.a.createElement("div",{style:{marginTop:"120px"}},0===a.length?r.a.createElement(f,null):r.a.createElement(p,{robots:h})))});i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e7e92058.chunk.js.map