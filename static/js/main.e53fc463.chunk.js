(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),c=n(6),l=n(7),i=n(11),u=n(8),s=n(10),m=n(9),d=n(26),p=n.n(d),h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("RandomAll - componentDidMount"),this.props.fetchUrl()}},{key:"copyUrl",value:function(){document.getElementById("url").select(),document.execCommand("copy")}},{key:"render",value:function(){return console.log("RandomAll - RENDER"),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"btn-group"},o.a.createElement("button",{className:"btn btn-copy",onClick:this.copyUrl},"Copy URL"),o.a.createElement("button",{className:"btn btn-generate",onClick:this.props.fetchUrl},"Generate")),o.a.createElement("section",{className:"container"},o.a.createElement("img",{alt:"",className:"img",onClick:this.props.fetchUrl,src:this.props.url}),o.a.createElement("textarea",{id:"url",readOnly:!0,value:this.props.url})))}}]),t}(a.Component),E=Object(m.b)(function(e){return{url:e.imageUrl.url}},{fetchUrl:function(){return function(e){console.log("ACTION - FETCH_URL"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="";switch(e){case"random-all":n="https://dog.ceo/api/breeds/image/random";break;case"random-breed":n="https://dog.ceo/api/breed/".concat(t,"/images/random");break;default:n="https://dog.ceo/api/breeds/image/random"}return new Promise(function(e,t){p()({method:"GET",url:n}).then(function(t){return e(t.data)}).catch(function(e){return t(e)})})}("random").then(function(t){return e({type:"FETCH_URL",payload:t.message})}).catch(function(t){return e({type:"ERROR",payload:t})})}}})(h),b=(n(56),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("App - RENDER"),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Floof"),o.a.createElement("small",null,"Discover all the doggos.")),o.a.createElement("main",null,o.a.createElement(E,null)))}}]),t}(a.Component));n(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(2),f=n(27),R=n(15),y={},O=Object(g.c)({imageUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_URL":return console.log("REDUCER - urlReducer - FETCH_URL"),Object(R.a)({},e,{url:t.payload});case"ERROR":return console.log("REDUCER - urlReducer - ERROR"),Object(R.a)({},e,{error:t.payload});default:return e}}}),v=[f.a],j=Object(g.d)(O,{},g.a.apply(void 0,v));Object(r.render)(o.a.createElement(m.a,{store:j},o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.e53fc463.chunk.js.map