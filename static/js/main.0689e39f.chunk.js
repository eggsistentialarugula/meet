(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{199:function(e,t,n){},202:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),s=(n(199),n(26)),i=n.n(s),l=n(51),u=n(23),h=n(31),d=n(24),f=n(25),b=n(3),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.toggleVisibility=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(b.jsxs)("div",{className:"event-container",children:[Object(b.jsxs)("div",{className:"event-overview",children:[Object(b.jsx)("span",{className:"event-title",children:t.summary}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"event-location",children:t.location}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{className:"event-time",children:["From ",t.start.dateTime," to ",t.end.dateTime]}),Object(b.jsx)("br",{}),!e&&Object(b.jsx)("button",{className:"toggle-button",onClick:this.toggleVisibility,children:"Show Details"}),e&&Object(b.jsx)("button",{className:"toggle-button",onClick:this.toggleVisibility,children:"Hide Details"})]}),e&&Object(b.jsxs)("div",{className:"event-details",children:[Object(b.jsx)("span",{className:"event-description",children:t.description}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"creator-email",children:t.creator.email})]})]})}}]),n}(a.Component),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(b.jsx)("li",{className:"EventItem",children:Object(b.jsx)(v,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="rgb(44,179,225)",a}return n}(m),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(m),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#6eeeff",a}return n}(m),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)("label",{class:"searchCity-title",children:"Search for a"}),Object(b.jsx)("label",{class:"searchCity-title",children:"nearby city"}),Object(b.jsx)(j,{text:this.state.infoText}),Object(b.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleInputChange=function(t){var n=t.target.value;if(n<=0||n>32)return e.setState({infoText:"Please enter a number between 1 and 32",numberOfEvents:""});e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventCount(t.target.value)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"numberOfEvents",children:[Object(b.jsxs)("label",{className:"numEvents-label",children:["Number of Events ",Object(b.jsx)("br",{})]}),Object(b.jsx)("input",{type:"number",className:"event-number-input",value:this.state.numberOfEvents,onChange:function(t){return e.handleInputChange(t)}}),Object(b.jsx)(g,{text:this.state.infoText})]})}}]),n}(a.Component);n(202);var y=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen",children:[Object(b.jsx)("div",{className:"bg"}),Object(b.jsx)("h1",{children:"Welcome to the Meet App"}),Object(b.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(b.jsx)("div",{className:"button_cont",align:"center",children:Object(b.jsxs)("div",{class:"google-btn",children:[Object(b.jsx)("div",{class:"google-icon-wrapper",children:Object(b.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(b.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with google"})})]})}),Object(b.jsx)("a",{href:"https://eggsistentialarugula.github.io/meet/privacy.html",target:"_blank",rel:"nofollow noreferrer noopener",class:"policy",children:"Privacy Policy"})]}):null},k=n(18),S=n(357),T=n(364),C=n(179),E=n(93),N=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(k.a)(n,2),o=r[0],c=r[1],s=["#ffcf4d","#f288e8","#b391ff","#879cff","#66ffe3"];Object(a.useEffect)((function(){c((function(){return i()})),console.log("testing 2")}),[t]);var i=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(b.jsx)(S.a,{height:400,children:Object(b.jsx)(T.a,{children:Object(b.jsx)(C.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(b.jsx)(E.a,{fill:s[t]},"cell-".concat(t))}))})})})},W=n(188),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],A=n(119),I=n.n(A),D=n(77),L=n.n(D),J=function(e){var t=e.map((function(e){return e.location}));return Object(W.a)(new Set(t))},M=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},R=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gk2jlemf4g.execute-api.us-west-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return L.a.done(),e.abrupt("return",Z);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),L.a.done(),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=12,B();case 12:if(!(n=e.sent)){e.next=22;break}return q(),a="https://gk2jlemf4g.execute-api.us-west-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=18,I.a.get(a);case 18:return(r=e.sent).data&&(o=J(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),L.a.done(),e.abrupt("return",r.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,I.a.get("https://gk2jlemf4g.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&R(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=n(361),_=n(362),P=n(184),z=n(185),H=n(78),G=n(189),V=(n(354),n(355),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t,n){U().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));r=r.slice(0,n),e.setState({events:r,currentLocation:t})}))},e.updateEventCount=function(t){e.setState({numberOfEvents:t});var n=e.state.currentLocation;e.updateEvents(n,t)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,M(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&U().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:J(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[navigator.onLine?Object(b.jsx)(w,{text:""}):Object(b.jsx)(w,{text:"You are offline, information you are viewing will be out of date. To view updated information, connect to the internet."}),Object(b.jsx)(O,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(b.jsx)(x,{numberOfEvents:this.state.numberOfEvents,updateEventCount:function(t){return e.updateEventCount(t)}}),Object(b.jsx)("h4",{children:"Events in each city"}),Object(b.jsxs)("div",{className:"data-vis-wrapper",children:[Object(b.jsx)(N,{events:this.state.events}),Object(b.jsx)(S.a,{height:400,children:Object(b.jsxs)(F.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(b.jsx)(_.a,{}),Object(b.jsx)(P.a,{type:"category",dataKey:"city",name:"City"}),Object(b.jsx)(z.a,{type:"number",dataKey:"number",name:"Number of Events",allowDecimals:!1}),Object(b.jsx)(H.a,{cursor:{strokeDasharray:"3 3"}}),Object(b.jsx)(G.a,{data:this.getData(),fill:"#abfeff"})]})})]}),Object(b.jsx)(p,{events:this.state.events}),Object(b.jsx)(y,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){B()}})]})}}]),n}(a.Component)),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},Q=n(186);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),Q.config("575e4186968e48eba198bc2ee2798415").install(),X()}},[[356,1,2]]]);
//# sourceMappingURL=main.0689e39f.chunk.js.map