var __NR_MODULES="object"==typeof __NR_MODULES?__NR_MODULES:{};__NR_MODULES["49e40d38-6750-4fc1-bec1-dc7e14fce101--home"]=function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e=0;e<c.length;e++){for(var t=c[e],r=!0,n=1;n<t.length;n++){var a=t[n];0!==o[a]&&(r=!1)}r&&c.splice(e--,1)}}var n={},o={0:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://cli-assets.service.datanerd.us/artifact-index-production/49e40d38-6750-4fc1-bec1-dc7e14fce101/det/";var u=window["webpackJsonp__49e40d38-6750-4fc1-bec1-dc7e14fce101"]=window["webpackJsonp__49e40d38-6750-4fc1-bec1-dc7e14fce101"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=i;c.push(["0SmE",1]),r();var l={__publicPath:function(e){a.p=e},__factory:function(t,r){const n=function(t,r,n,o){var c={};function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return c[t]={i:t,l:!0,exports:r},c[n]={i:n,l:!0,exports:o},a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://cli-assets.service.datanerd.us/artifact-index-production/49e40d38-6750-4fc1-bec1-dc7e14fce101/det/",a}(undefined,t,"evsE",r);return n("0SmE")}};return l}({"0SmE":function(e,t,r){"use strict";r.r(t);var n=r("D6Nv"),o=r("00gj"),c=r("K9NZ"),a=r("5ihu"),u=r.n(a),i=r("zuR4");r("qBRt");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r("evsE").injectedPackages.react,p=l.__esModule?l.default:l,d=l.useEffect,b=l.useState;t.default=function(){var e=b(!0),t=Object(n.a)(e,2),r=t[0];t[1];return d((function(){var e=setInterval((function(){!function(){var e=function(){var e=Object(c.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("https://insights-collector.newrelic.com/v1/accounts/3774110/events",t,{headers:{"Content-Type":"application/json","X-Insert-Key":"f2d844f391d4197f43ad043b9eddaca8FFFFNRAL"}});case 3:r=e.sent,console.log("Data sent successfully to New Relic:",r.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error sending data to New Relic:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),t=function(){var t=Object(c.a)(u.a.mark((function t(){var r,n,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("https://reqres.in/api/users?page=2");case 3:return r=t.sent,n=r.data.data,o=n.map((function(e){return f(f({},e),{},{eventType:"ReqRes_Sample"})})),t.next=8,e(o);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error fetching data from ReqRes API:",t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}()}),5e3);return function(){return clearInterval(e)}}),[]),p.createElement("div",{className:"message-container"},r&&p.createElement(p.Fragment,null,p.createElement("div",{className:"spinner"}),p.createElement("p",null,"Data is being sent every 5 seconds")))}},evsE:function(e,t){e.exports=function(){throw new Error('Could not initialize "__nr1-internal__"')}()},qBRt:function(e,t){}});
//# sourceMappingURL=https://cli-assets.service.datanerd.us/artifact-index-production/49e40d38-6750-4fc1-bec1-dc7e14fce101/det/49e40d38-6750-4fc1-bec1-dc7e14fce101--home~2b3c0702.js.map