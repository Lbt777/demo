(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3724552c"],{"0f0f":function(t,o,e){},1427:function(t,o,e){t.exports=e.p+"img/empty.cb54b982.png"},"24e6":function(t,o,e){},5326:function(t,o,e){t.exports=e.p+"img/blc_bg.2baafa72.png"},5606:function(t,o,e){"use strict";e("0f0f")},9392:function(t,o,e){},a22e:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t._self._c;return o("div",{staticClass:"earnestMoney"},[o("div",{staticClass:"money",style:{backgroundImage:`url(${e("5326")})`}},[o("div",{staticClass:"price"},[o("div",{staticClass:"p_l"},[o("div",{staticClass:"name"},[t._v("保证金(USDT)")]),o("div",{staticClass:"blc"},[t._v(t._s(t.bond))])]),o("div",{staticClass:"p_l"},[o("div",{staticClass:"name"},[t._v("待缴纳金额(USDT)")]),o("div",{staticClass:"blc"},[t._v(t._s(t.pay))])])])]),o("div",{staticClass:"title"},[t._v("明细记录")]),o("div",{staticClass:"maniList",style:{paddingTop:t.list.length?0:"31px"}},[o("mescroll-vue",{attrs:{up:t.mescrollUp}},[t._l(t.list,(function(e,s){return o("div",{key:s,staticClass:"ExtractList"},[o("div",{staticClass:"list_l"},[o("div",{staticClass:"icon"},[o("img",{attrs:{src:"",alt:""}})]),o("div",{staticClass:"list_item"},[o("div",{staticClass:"list_title"},[t._v("直播权限保证金")]),o("div",{staticClass:"list_time"},[t._v("2022.04.21 16:53:06")])])]),o("div",{staticClass:"list_r"},[o("div",{staticClass:"moneys"},[t._v("180.5629 USTD")]),o("div",{staticClass:"status"},[t._v("缴纳成功")])])])})),o("div",{attrs:{id:"empty"}})],2)],1),t._m(0),o("van-action-sheet",{staticClass:"sheet ExtractSheet",attrs:{title:"提取保证金","close-on-popstate":""},model:{value:t.showExtract,callback:function(o){t.showExtract=o},expression:"showExtract"}},[o("div",{staticClass:"Extract"},[o("div",{staticClass:"input"},[o("van-field",{attrs:{type:"number",label:"",placeholder:"请输入提取的保证金金额"},model:{value:t.ExtractNumber,callback:function(o){t.ExtractNumber=o},expression:"ExtractNumber"}}),o("div",{staticClass:"unit"},[t._v("USDT")])],1),o("div",{staticClass:"tips"},[t._v("注意:保证金小于规定数值时，部分应用将受限")]),o("van-button",{attrs:{color:"#1F75D9",type:"info",block:""},on:{click:function(o){t.showExtract=!1}}},[t._v("提交")])],1)])],1)},n=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"desc"},[o("div",{staticClass:"fonts f_top"},[t._v("说明")]),o("div",{staticClass:"fonts"},[t._v("1.保证金主要用于违规处理或其他违约责任损失。"),o("br"),t._v(" 2.保证金小于规定数值（发视频保证金500U；开直播保证金1000U）时，请及时充值，否则部分应用功能将受限。 ")])])}],l=function(){var t=this,o=t._self._c;return o("div",{ref:"mescroll",staticClass:"mescroll"},[o("div",[t._t("default")],2)])},i=[],r=e("af94"),a=e.n(r),p=(e("24e6"),{name:"MeScrollVue",data:function(){return{mescroll:null,lastScrollTop:0,lastBounce:null}},props:{up:Object,down:Object},mounted:function(){this.mescroll=new a.a(this.$refs.mescroll,{up:this.up,down:this.down}),this.$emit("init",this.mescroll)},methods:{beforeRouteEnter(){this.mescroll&&(this.lastScrollTop&&(this.mescroll.setScrollTop(this.lastScrollTop),setTimeout(()=>{this.mescroll.setTopBtnFadeDuration(0)},16)),null!=this.lastBounce&&this.mescroll.setBounce(this.lastBounce))},beforeRouteLeave(){this.mescroll&&(this.lastScrollTop=this.mescroll.getScrollTop(),this.mescroll.hideTopBtn(0),this.lastBounce=this.mescroll.optUp.isBounce,this.mescroll.setBounce(!0))}}}),c=p,u=e("0b56"),d=Object(u["a"])(c,l,i,!1,null,null,null),h=d.exports,m=e("bf21"),w=e("0c6d"),v={components:{MescrollVue:h},data(){return{bond:0,pay:0,show:!1,showExtract:!1,ExtractNumber:"",mescrollUp:{callback:this.upCallback,htmlNodata:'<p class="upwarp-nodata">-- 暂无数据 --</p>',htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中</p>',empty:{warpId:"empty",icon:e("1427"),tip:"暂无缴纳、提现记录"}},list:[]}},mounted(){setTimeout(async()=>{this.Android_showExtract();let t=await Object(m["callhandler"])("getUserToken");t={token:t.split(",")[0],userId:t.split(",")[1]};let o=await Object(w["b"])(t),e=o.data.split(",");this.bond=e[0],this.pay=e[1]},500)},methods:{async Android_showExtract(){console.log(666,window.WebViewJavascriptBridge);let t=await this.$bridge.showExtract();console.log(123,t),console.log(this.$bridge.registerHandler,m["registerHandler"]),Object(m["registerHandler"])("showExtract",(t,o)=>{console.log("JS Echo called with:",t,o()),o(t)})},upCallback(t,o){o.lockDownScroll();t.num,t.size;let e=[];e?(this.list=this.list.concat(e),o.endSuccess(e.length,t.size==e.length)):o.endErr()}}},f=v,g=(e("fc90"),e("5606"),Object(u["a"])(f,s,n,!1,null,"4d499ee0",null));o["default"]=g.exports},af94:function(t,o,e){var s,n;(function(l,i){s=i,n="function"===typeof s?s.call(o,e,o,t):s,void 0===n||(t.exports=n)})(0,(function(){var t=function(t,o){var e=this;if(e.version="1.4.0",e.isScrollBody=!t||"body"===t,e.scrollDom=e.isScrollBody?document.body:e.getDomById(t),e.scrollDom){e.options=o||{};var s=navigator.userAgent,n=!!s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),l="undefined"===typeof window.orientation,i=s.indexOf("Android")>-1||s.indexOf("Adr")>-1;e.os={ios:n,pc:l,android:i},e.isDownScrolling=!1,e.isUpScrolling=!1;var r=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout((function(){e.optDown.use&&e.optDown.auto&&r&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()}),30)}};return t.prototype.extendDownScroll=function(o){t.extend(o,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",mustToTop:!1,warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip"></p>',inited:function(t,o){t.downTipDom=o.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=o.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textInOffset),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textOutOffset)},onMoving:function(t,o,e){if(t.downProgressDom){var s=360*o;t.downProgressDom.style.webkitTransform="rotate("+s+"deg)",t.downProgressDom.style.transform="rotate("+s+"deg)"}},beforeLoading:function(t,o){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textLoading),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},afterLoading:function(t){return 0},callback:function(t){t.resetUpScroll()}})},t.prototype.extendUpScroll=function(o){var e=this.os.pc;t.extend(o,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",fadeDuration:.5,duration:300,supportTap:!1,btnClick:null},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,o){},showLoading:function(t,o){o.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,o){o.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:e,barClass:"mescroll-bar"},lazyLoad:{use:!1,attr:"imgurl",showClass:"mescroll-lazy-in",delay:500,offset:200}})},t.extend=function(o,e){if(!o)return e;for(var s in e)null==o[s]?o[s]=e[s]:"object"===typeof o[s]&&t.extend(o[s],e[s]);return o},t.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(o){t.isScrollTo&&t.preventDefault(o),t.startPoint=t.getPoint(o),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1;var e=t.getScrollTop();t.isKeepTop=0===e,t.os.pc&&e<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent,{passive:!1}),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(o){if(t.startPoint){var e=t.getScrollTop();e>0&&(t.isKeepTop=!1);var s=t.getPoint(o),n=s.y-t.startPoint.y;if(n>0){if(e<=0&&(t.preventDefault(o),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){if(t.optDown.mustToTop&&!t.isKeepTop)return;var l=Math.abs(t.lastPoint.x-s.x),i=Math.abs(t.lastPoint.y-s.y),r=Math.sqrt(l*l+i*i);if(0!==r){var a=Math.asin(i/r)/Math.PI*180;if(a<t.optDown.minAngle)return}if(t.maxTouchmoveY>0&&s.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var p=s.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!==t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=p*t.optDown.inOffsetRate):(2!==t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=p>0?p*t.optDown.outOffsetRate:p),t.downwarp.style.height=t.downHight+"px";var c=t.downHight/t.optDown.offset;t.optDown.onMoving(t,c,t.downHight)}}else if(n<0){var u=t.getScrollHeight(),d=t.getClientHeight(),h=u-d-e;!t.optUp.isBounce&&h<=0&&t.preventDefault(o),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(d+t.optUp.offset>=u||h<=0)&&t.triggerUpScroll()}t.lastPoint=s}},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent,{passive:!1}),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.isSetScrollAuto&&(t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.isSetScrollAuto=!1),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var o=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&o?o.appendChild(t.downwarp):(o||(o=t.scrollDom),o.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout((function(){t.optDown.inited(t,t.downwarp)}),0)}},t.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},t.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},t.prototype.endDownScroll=function(){var t=this,o=function(){t.downHight=0,t.downwarp.style.height=0,t.isDownScrolling=!1,t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},e=t.optDown.afterLoading(t);"number"===typeof e&&e>0?setTimeout(o,e):o()},t.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},t.prototype.initUpScroll=function(){var t,o=this;(o.optUp=o.options.up||{use:!1},o.extendUpScroll(o.optUp),o.optUp.scrollbar.use&&o.scrollDom.classList.add(o.optUp.scrollbar.barClass),o.optUp.isBounce||o.setBounce(!1),!1!==o.optUp.use)&&(o.optUp.hasNext=!0,o.upwarp=document.createElement("div"),o.upwarp.className=o.optUp.warpClass,o.optUp.warpId&&(t=o.getDomById(o.optUp.warpId)),t||(t=o.scrollDom),t.appendChild(o.upwarp),o.preScrollY=0,o.lazyStartTime=(new Date).getTime(),o.lazyTag="mescroll-lazying",o.scrollEvent=function(){var t=o.getScrollTop(),e=t-o.preScrollY>0;if(o.preScrollY=t,!o.isUpScrolling&&(!o.isDownScrolling||o.isDownScrolling&&o.optDown.isBoth)&&!o.optUp.isLock&&o.optUp.hasNext){var s=o.getScrollHeight()-o.getClientHeight()-t;s<=o.optUp.offset&&e&&o.triggerUpScroll()}var n=o.optUp.toTop;if((n.src||n.html)&&(t>=n.offset?o.showTopBtn():o.hideTopBtn()),o.optUp.lazyLoad.use){var l=(new Date).getTime();o.lazyTimer&&clearTimeout(o.lazyTimer),l-o.lazyStartTime>=o.optUp.lazyLoad.delay?(o.lazyStartTime=l,o.lazyLoad(0)):o.lazyTimer=o.lazyLoad()}o.optUp.onScroll&&o.optUp.onScroll(o,t,e)},o.isScrollBody?window.addEventListener("scroll",o.scrollEvent):o.scrollDom.addEventListener("scroll",o.scrollEvent),setTimeout((function(){o.optUp.inited(o,o.upwarp)}),0))},t.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(!1===t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove,{passive:!1})):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},t.prototype.bounceTouchmove=function(t){var o=this,e=t.target,s=!0;while(e!==document.body&&e!==document){var n=e.classList;if(n){if(n.contains("mescroll")||n.contains("mescroll-touch")){s=!1;break}if(n.contains("mescroll-touch-x")||n.contains("mescroll-touch-y")){var l=t.touches?t.touches[0].pageX:t.clientX,i=t.touches?t.touches[0].pageY:t.clientY;o.preWinX||(o.preWinX=l),o.preWinY||(o.preWinY=i);var r=Math.abs(o.preWinX-l),a=Math.abs(o.preWinY-i),p=Math.sqrt(r*r+a*a);if(o.preWinX=l,o.preWinY=i,0!==p){var c=Math.asin(a/p)/Math.PI*180;if(c<=45&&n.contains("mescroll-touch-x")||c>45&&n.contains("mescroll-touch-y")){s=!1;break}}}}e=e.parentNode}s&&t.cancelable&&!t.defaultPrevented&&"function"===typeof t.preventDefault&&t.preventDefault()},t.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback(this.optUp.page,this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.showLoading(this,this.upwarp)},t.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},t.prototype.hideUpScroll=function(t){t?this.upwarp.style.display="none":this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var o=this.upwarp.getElementsByClassName("upwarp-progress")[0];o&&o.classList.remove("mescroll-rotate")},t.prototype.endUpScroll=function(t,o){null!=t&&(t?this.showNoMore():this.hideUpScroll(o)),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=1,o.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(o,this)}},t.prototype.setPageNum=function(t){this.optUp.page.num=t-1},t.prototype.setPageSize=function(t){this.optUp.page.size=t},t.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var o=this.getDomById(t);o&&(o.innerHTML="")}},t.prototype.endByPage=function(t,o,e){var s;this.optUp.use&&null!=o&&(s=this.optUp.page.num<o),this.endSuccess(t,s,e)},t.prototype.endBySize=function(t,o,e){var s;if(this.optUp.use&&null!=o){var n=(this.optUp.page.num-1)*this.optUp.page.size+t;s=n<o}this.endSuccess(t,s,e)},t.prototype.endSuccess=function(t,o,e){var s=this;if(s.isDownScrolling&&s.endDownScroll(),s.optUp.use){var n;if(null!=t){var l=s.optUp.page.num,i=s.optUp.page.size;if(1===l&&(s.clearDataList(),e&&(s.optUp.page.time=e)),t<i||!1===o)if(s.optUp.hasNext=!1,0===t&&1===l)n=!1,s.showEmpty();else{var r=(l-1)*i+t;n=!(r<s.optUp.noMoreSize),s.removeEmpty()}else n=!1,s.optUp.hasNext=!0,s.removeEmpty()}var a=!s.optUp.hasNext;s.endUpScroll(n,a),s.loadFull(),s.optUp.lazyLoad.use&&s.lazyLoad(16)}},t.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.optUp.callback&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout((function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()}),t.optUp.loadFull.delay)},t.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},t.prototype.showEmpty=function(){var t=this,o=t.optUp.empty,e=o.warpId||t.optUp.clearEmptyId;if(null!=e){var s=t.getDomById(e);if(s){t.removeEmpty();var n="";if(o.icon&&(n+='<img class="empty-icon" src="'+o.icon+'"/>'),o.tip&&(n+='<p class="empty-tip">'+o.tip+"</p>"),o.btntext&&(n+='<p class="empty-btn">'+o.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=n,s.appendChild(t.emptyDom),o.btnClick){var l=t.emptyDom.getElementsByClassName("empty-btn")[0];o.supportTap?l.addEventListener("tap",(function(e){e.stopPropagation(),t.preventDefault(e),o.btnClick()})):l.onclick=function(){o.btnClick()}}}}},t.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},t.prototype.showTopBtn=function(t){if(!this.topBtnShow){this.topBtnShow=!0;var o,e=this,s=e.optUp.toTop;if(null==e.toTopBtn)s.html?(e.toTopBtn=document.createElement("div"),e.toTopBtn.innerHTML=s.html):(e.toTopBtn=document.createElement("img"),e.toTopBtn.src=s.src),e.toTopBtn.className=s.warpClass,s.supportTap?e.toTopBtn.addEventListener("tap",(function(t){t.stopPropagation(),e.preventDefault(t);var o=s.btnClick&&s.btnClick();!0!==o&&e.scrollTo(0,e.optUp.toTop.duration)})):e.toTopBtn.onclick=function(){var t=s.btnClick&&s.btnClick();!0!==t&&e.scrollTo(0,e.optUp.toTop.duration)},s.warpId&&(o=e.getDomById(s.warpId)),o||(o=document.body),o.appendChild(e.toTopBtn);e.toTopBtn.classList.remove(s.hideClass),e.toTopBtn.classList.add(s.showClass),e.setTopBtnFadeDuration(t)}},t.prototype.hideTopBtn=function(t){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass),this.setTopBtnFadeDuration(t))},t.prototype.setTopBtnFadeDuration=function(t){if(this.toTopBtn){var o=(null!=t?t:this.optUp.toTop.fadeDuration)+"s";this.toTopBtn.style.animationDuration=o,this.toTopBtn.style.webkitAnimationDuration=o}},t.prototype.scrollTo=function(t,o){var e=this,s=e.getScrollTop(),n=t;if(n>0){var l=e.getScrollHeight()-e.getClientHeight();n>l&&(n=l)}else n=0;e.isScrollTo=!0,e.scrollDom.style.webkitOverflowScrolling="auto",e.getStep(s,n,(function(t){e.setScrollTop(t),t===n&&(e.scrollDom.style.webkitOverflowScrolling="touch",e.isScrollTo=!1)}),o)},t.prototype.getStep=function(t,o,e,s,n){var l=o-t;if(0!==s&&0!==l){s=s||300,n=n||30;var i=s/n,r=l/i,a=0,p=window.setInterval((function(){a<i-1?(t+=r,e&&e(t,p),a++):(e&&e(o,p),window.clearInterval(p))}),n)}else e&&e(o)},t.prototype.lazyLoad=function(t){var o=this,e=null!=t?t:o.optUp.lazyLoad.delay,s=setTimeout((function(){for(var t=o.scrollDom.querySelectorAll("["+o.optUp.lazyLoad.attr+"]"),e=t.length,s=0;s<e;s++){var n=t[s];if("true"!==n.getAttribute(o.lazyTag)&&o.isInSee(n,o.optUp.lazyLoad.offset)){var l=n.getAttribute(o.optUp.lazyLoad.attr),i=new Image;i.onload=function(){var t=this.src,e=this.dom,s=o.optUp.lazyLoad.showClass;s&&e.classList.add(s),"IMG"===e.tagName?e.src=t:e.style.backgroundImage="url("+t+")",e.removeAttribute(o.optUp.lazyLoad.attr),e.removeAttribute(o.lazyTag)},i.onerror=function(){this.dom.removeAttribute(o.lazyTag)},i.onabort=function(){this.dom.removeAttribute(o.lazyTag)},i.src=l,n.setAttribute(o.lazyTag,"true"),i.dom=n}}}),e);return s},t.prototype.isInSee=function(t,o){o=o||0;var e=this.getOffsetTop(t),s=this.getScrollTop()-o,n=e+t.offsetHeight,l=s+o+this.getClientHeight()+o;return e<l&&e>=s||n<=l&&n>s},t.prototype.getOffsetTop=function(t){var o=t.offsetTop,e=t.offsetParent;while(null!=e&&e!==this.scrollDom)o+=e.offsetTop+e.clientTop,e=e.offsetParent;return o},t.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},t.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},t.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},t.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},t.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.setScrollTop=function(t){"number"===typeof t&&(this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t)},t.prototype.getDomById=function(t){var o;return t&&("string"===typeof t?o=document.getElementById(t):t.nodeType&&(o=t)),o||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),o},t.prototype.removeChild=function(t){if(t){var o=t.parentNode;o&&o.removeChild(t),t=null}},t.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)},t}))},fc90:function(t,o,e){"use strict";e("9392")}}]);
//# sourceMappingURL=chunk-3724552c.6636e7f9.js.map