(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,n){e.exports=n(52)},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(2),l=n(3),s=n(19),u="FETCH_ROBOTS",d="CHANGE_SEARCH_STRING",m=Object(l.c)({robots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;default:return e}},query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}}}),f=function(e){return r.a.createElement("div",{className:"ui centered card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.name,".png?bgset=bg1 "),alt:"robot",style:{backgroundColor:"rgb(185, 226, 224)"}})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"center aligned header"},e.name),r.a.createElement("div",{className:"center aligned description"},e.email)))},h=Object(i.b)((function(e){return{robots:e.robots,query:e.query}}))((function(e){var t=e.robots.filter((function(t){return t.name.toLowerCase().includes(e.query.toLowerCase())}));return r.a.createElement("div",{className:"ui cards"},t.map((function(e){return r.a.createElement(f,{key:e.id,name:e.name,email:e.email})})))})),v=function(){return r.a.createElement("div",{className:"item"},r.a.createElement("h1",null,"RoboFriends"))},g=n(8),p=n.n(g),b=n(20),E=n(21),w=n.n(E),y=Object(i.b)((function(e){return{query:e.query}}),{changeSearchString:function(e){return{type:d,payload:e}}})((function(e){return r.a.createElement("div",{className:"right item"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{"aria-label":"Search Robots",type:"text",placeholder:"Search robots...",onChange:function(t){e.changeSearchString(t.target.value)},value:e.query}),r.a.createElement("i",{className:"search icon"})))})),N=function(){return r.a.createElement("div",{className:"ui top fixed huge stackable menu"},r.a.createElement(v,null),r.a.createElement(y,null))},k=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui text loader"},"Loading")))},S=(n(51),Object(i.b)((function(e){return{robots:e.robots}}),{fetchRobots:function(){return function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/users");case 2:n=e.sent,t({type:u,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(a.useEffect)((function(){e.fetchRobots()}),[]),r.a.createElement("div",{className:"ui container center aligned"},r.a.createElement(N,null),r.a.createElement("div",{style:{marginTop:"120px"}},0===e.robots.length?r.a.createElement(k,null):r.a.createElement(h,null)))}))),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=Object(l.d)(m,Object(l.a)(s.a));c.a.render(r.a.createElement(i.a,{store:C},r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo-friends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robo-friends","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.f18c9e9f.chunk.js.map