(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(56)},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),c=n(5),l=n(6),i=n(9),u=n(7),s=n(10),m=n(8),d=n(24),p=n.n(d),h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("RandomAll - componentDidMount"),this.props.fetchUrl()}},{key:"copyUrl",value:function(){document.getElementById("url").select(),document.execCommand("copy")}},{key:"render",value:function(){return console.log("RandomAll - RENDER"),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"btn-group"},o.a.createElement("button",{className:"btn btn-copy",onClick:this.copyUrl},"Copy Image"),o.a.createElement("button",{className:"btn btn-generate",onClick:this.props.fetchUrl},"New Image")),o.a.createElement("section",{className:"container"},o.a.createElement("img",{alt:"",className:"img",onClick:this.props.fetchUrl,src:this.props.url}),o.a.createElement("textarea",{id:"url",readOnly:!0,value:this.props.url})))}}]),t}(a.Component),b=Object(m.b)(function(e){return{url:e.imageUrl.url}},{fetchUrl:function(){return function(e){(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="";switch(e){case"random-all":n="https://dog.ceo/api/breeds/image/random";break;case"random-breed":n="https://dog.ceo/api/breed/".concat(t,"/images/random");break;default:n="https://dog.ceo/api/breeds/image/random"}return new Promise(function(e,t){p()({method:"GET",url:n}).then(function(t){return e(t.data)}).catch(function(e){return t(e)})})})("random").then(function(t){return e({type:"FETCH_URL",payload:t.message})}).catch(function(t){return e({type:"ERROR",payload:t})})}}})(h),g=(n(54),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("App - RENDER"),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Floof"),o.a.createElement("small",null,"Discover all the doggos.")),o.a.createElement("main",null,o.a.createElement(b,null)))}}]),t}(a.Component));n(55),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(2),f=n(25),R=n(15),y={},O=Object(E.c)({imageUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_URL":return console.log("REDUCER - urlReducer - FETCH_URL"),Object(R.a)({},e,{url:t.payload});case"ERROR":return console.log("REDUCER - urlReducer - ERROR"),Object(R.a)({},e,{error:t.payload});default:return e}}}),v=[f.a],j=Object(E.d)(O,{},E.a.apply(void 0,v));Object(r.render)(o.a.createElement(m.a,{store:j},o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.c5f75e34.chunk.js.map