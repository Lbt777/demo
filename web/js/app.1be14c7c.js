(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-42fd0608":"89c770e4","chunk-3724552c":"6636e7f9","chunk-51d0cb0f":"900b9a00","chunk-a63e9cea":"de5d0975","chunk-6604b47e":"e88ae5de"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-3724552c":1,"chunk-51d0cb0f":1,"chunk-a63e9cea":1,"chunk-6604b47e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-42fd0608":"31d6cfe0","chunk-3724552c":"b8dbd260","chunk-51d0cb0f":"c5d9af0e","chunk-a63e9cea":"77758753","chunk-6604b47e":"22ceee57"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/demo/web/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var r=n("0cfe"),o=n("7736");let a={address:null,WEB3:null,BaseURL_env_dev:"http://192.168.3.107:8101/",BaseURL_env_pro:"http://dapp-api.starshow.cc/inviter/",SRScontract:null};var i=a;r["a"].use(o["a"]);const c=new o["a"].Store({state:i,mutations:{getAddress(e,t){e.address=t},setWEB3(e,t){e.WEB3=t},setSRSContract(e,t){e.SRScontract=t}},actions:{ActionsGetAddress(e,t){e.commit("getAddress",t)},ActionsSetWEB3(e,t){e.commit("setWEB3",t)},ActionsSetSRSContract(e,t){e.commit("setSRSContract",t)}}});t["a"]=c},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"plusXing",(function(){return R})),n.d(r,"accMul",(function(){return I})),n.d(r,"operation",(function(){return W})),n.d(r,"getUnixToDate",(function(){return N}));var o=n("0cfe"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]})],1)},i=[],c=(n("d185"),n("0b56")),u={},s=Object(c["a"])(u,a,i,!1,null,null,null),d=s.exports,l=n("1ceb");o["a"].use(l["a"]);var f=new l["a"]({routes:[{path:"/",component:()=>Promise.all([n.e("chunk-42fd0608"),n.e("chunk-51d0cb0f")]).then(n.bind(null,"758d")),meta:{title:"收益明细"}},{path:"/GoldCoin",component:()=>Promise.all([n.e("chunk-42fd0608"),n.e("chunk-a63e9cea")]).then(n.bind(null,"4349")),meta:{title:"星币明细"}},{path:"/market",component:()=>n.e("chunk-6604b47e").then(n.bind(null,"041e")),meta:{title:"市场"}},{path:"/earnestMoney",component:()=>Promise.all([n.e("chunk-42fd0608"),n.e("chunk-3724552c")]).then(n.bind(null,"a22e")),meta:{title:"保证金"}},{path:"*",redirect:"/"}],mode:"hash",base:"/demo/web/",scrollBehavior(e,t,n){return n||{x:0,y:0}}}),h=n("4360"),p=n("2d92"),m=(n("e377"),n("883a")),g=n("127e"),b=n("9b11"),v=n.n(b),w=n("e5e8"),y=n.n(w),k=n("81fb"),S=n.n(k),E=n("97a4"),B=n.n(E),_={},P={},A={},O={};o["a"].use(m["a"]);const j={en:{...v.a,..._},zh:{...y.a,...P},hk:{...S.a,...A},vi:{...B.a,...O}},x=new m["a"]({locale:"zh",messages:j});function C(e){"en"===e?g["a"].use(e,v.a):"zh"===e?g["a"].use(e,y.a):"hk"===e?g["a"].use(e,S.a):"zh"===e&&g["a"].use(e,B.a)}function R(e,t,n,r,o){for(var a=o||e.length-t-n,i="",c=0;c<a;c++)i+=r;return e.substring(0,t)+i+e.substring(e.length-n)}function I(e,t){var n=0,r=e.toString(),o=t.toString();try{n+=r.split(".")[1].length}catch(a){}try{n+=o.split(".")[1].length}catch(a){}return Number(r.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,n)}let M=e=>Math.floor(e)===e,T=e=>{var t={times:1,num:0};if(M(e))return t.num=e,t;var n=e+"",r=n.indexOf("."),o=n.substr(r+1).length,a=Math.pow(10,o),i=parseInt(e*a+.5,10);return t.times=a,t.num=i,t};function W(e,t,n){var r=T(e),o=T(t),a=r.num,i=o.num,c=r.times,u=o.times,s=c>u?c:u,d=null;switch(n){case"add":return d=c===u?a+i:c>u?a+i*(c/u):a*(u/c)+i,d/s;case"subtract":return d=c===u?a-i:c>u?a-i*(c/u):a*(u/c)-i,d/s;case"multiply":return d=a*i/(c*u),d;case"divide":return d=a/i*(u/c),d}}function N(e,t,n="."){let r=new Date(parseInt(1e3*t)),o=r.getFullYear(),a=r.getMonth()+1,i=r.getDate(),c=r.getHours(),u=r.getMinutes(),s=r.getSeconds(),d="";return"yyyy-mm-dd hh:mm:ss"==e?d=o+n+V(a)+n+V(i)+" "+V(c)+":"+V(u)+":"+V(s):"yyyy-mm-dd hh:mm"==e?d=o+n+V(a)+n+V(i)+" "+V(c)+":"+V(u):"mm-dd hh:mm"==e&&(d=V(a)+n+V(i)+" "+V(c)+":"+V(u)),d}function V(e){return parseInt(e)<10&&(e="0"+e),e}var D=n("bf21"),L=n("51f4");o["a"].use(L["a"]),o["a"].prototype.$util=r,o["a"].prototype.$bridge=D,o["a"].prototype.$store=h["a"],o["a"].use(p["a"]),o["a"].use(n("87a7")),C(x.locale),o["a"].config.productionTip=!1,console.log(99,Object({NODE_ENV:"production",VUE_APP_BASE_API:"http://live2.sss2.cc",VUE_APP_ENV:"production",BASE_URL:"/demo/web/"})),new o["a"]({render:e=>e(d),router:f,i18n:x,store:h["a"]}).$mount("#app")},"926b":function(e,t,n){},bf21:function(e,t,n){"use strict";n.r(t),n.d(t,"isInSmxApp",(function(){return o})),n.d(t,"isInWeiXin",(function(){return a})),n.d(t,"isInIos",(function(){return i})),n.d(t,"checkBridgeReady",(function(){return c})),n.d(t,"callhandler",(function(){return u})),n.d(t,"registerhandler",(function(){return s})),n.d(t,"getUserToken",(function(){return d})),n.d(t,"goBack",(function(){return l})),n.d(t,"showExtract",(function(){return f})),n.d(t,"closeWeb",(function(){return h})),n.d(t,"topViewStatus",(function(){return p}));n("e975");function r(e){if(window.WebViewJavascriptBridge)return e(window.WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];const t=document.createElement("iframe");t.style.display="none",t.src="wvjbscheme://__BRIDGE_LOADED__",setTimeout(()=>{document.documentElement.appendChild(t),setTimeout(()=>{document.documentElement.removeChild(t)},0)},0)}const o=!!navigator.userAgent.match(/SmxOnline/i),a=!!navigator.userAgent.match(/MicroMessenger/i),i=!!navigator.userAgent.match(/ipad|iphone|ipod/i),c=(e=!0)=>window.isBridgeReady?Promise.resolve(!0):!1===window.isBridgeReady?Promise.reject(!1):a?(window.isBridgeReady=!1,Promise.reject(!1)):!1===e?Promise.reject(!1):new Promise((e,t)=>{let n=0;const r=setInterval(()=>{n++,n>5&&(clearInterval(r),window.isBridgeReady=!1,t(new Error(`放弃循环检测!(尝试重复${n}次后,仍未检测到bridge准备好)`))),window.isBridgeReady&&(clearInterval(r),e(!0))},1e3)});async function u(e,t){return new Promise((n,o)=>{r(r=>{r||n(""),r.callHandler(e,t,e=>{if("string"===typeof e&&e.length>0)try{let t=JSON.parse(e);200===t.code?n(t.data):o(t)}catch(t){o(t)}else o(e||"")})})})}async function s(e,t){return new Promise((n,o)=>{r((function(r){r||o("bridge不存在"),r.registerHandler(e,(function(e,r){t(e,r),n(e,r)}))}))})}async function d(){return u("getUserToken")}async function l(){return u("goBack")}async function f(){return registerHandler("showExtract")}async function h(){return u("closeWeb")}async function p(e){return u("topViewStatus",e)}},d185:function(e,t,n){"use strict";n("926b")}});
//# sourceMappingURL=app.1be14c7c.js.map