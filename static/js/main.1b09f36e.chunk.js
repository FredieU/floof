(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(10),c=n.n(r),i=(n(23),n(11)),l=n(12),s=n(15),u=n(13),m=n(16),d=n(2),h=n(14),g=n.n(h),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="";switch(e){case"random-all":n="https://dog.ceo/api/breeds/image/random";break;case"random-breed":n="https://dog.ceo/api/breed/".concat(t,"/images/random");break;default:n="https://dog.ceo/api/breeds/image/random"}return new Promise(function(e,t){g()({method:"GET",url:n}).then(function(t){console.log(t.data),e(t.data)}).catch(function(e){return t(e)})})},p=(n(43),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={url:"",error:""},n.random=n.random.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;return console.log("App - MOUNT"),f("random").then(function(t){return e.setState({url:t.message})}).catch(function(t){return e.setState({error:t})})}},{key:"random",value:function(){var e=this;return f("random").then(function(t){return e.setState({url:t.message})}).catch(function(t){return e.setState({error:t})})}},{key:"render",value:function(){return console.log("App - RENDER"),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Floof"),o.a.createElement("small",null,"Discover all the doggos.")),o.a.createElement("main",null,o.a.createElement("img",{alt:"",className:"img",onClick:this.random,src:this.state.url})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.1b09f36e.chunk.js.map