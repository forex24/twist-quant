(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-814d8a90"],{"51d8":function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"twist"},[e.klines.length?n("ul",[n("li",[e._v(e._s(e.code.toUpperCase()))]),n("li",{class:{selected:"min1"===e.level},on:{click:function(t){return e.switchLevel("min1")}}},[e._v(" 1F ")]),n("li",{class:{selected:"min5"===e.level},on:{click:function(t){return e.switchLevel("min5")}}},[e._v(" 5F ")]),n("li",{class:{selected:"min15"===e.level},on:{click:function(t){return e.switchLevel("min15")}}},[e._v(" 15F ")]),n("li",{class:{selected:"min30"===e.level},on:{click:function(t){return e.switchLevel("min30")}}},[e._v(" 30F ")]),n("li",{class:{selected:"min60"===e.level},on:{click:function(t){return e.switchLevel("min60")}}},[e._v(" 60F ")]),n("li",{class:{selected:"day"===e.level},on:{click:function(t){return e.switchLevel("day")}}},[e._v(" DAY ")]),n("li",{class:{selected:"week"===e.level},on:{click:function(t){return e.switchLevel("week")}}},[e._v(" WEEK ")]),n("li",{class:{selected:"month"===e.level},on:{click:function(t){return e.switchLevel("month")}}},[e._v(" MONTH ")])]):e._e(),n("ui-kchart",{ref:"kchart",staticClass:"ui-kchart",attrs:{"show-volume":e.isShowVolume,klines:e.klines,twist:e.twist}})],1)},i=[],l=(n("b151"),n("56d4")),s=n.n(l),r=(n("df26"),n("42c2")),a=(n("c206"),{data:function(){return{klines:[],twist:{},code:"",level:"min1",interval:30,isShowVolume:!1}},mounted:function(){var e=this;return Object(r["a"])(s.a.mark((function t(){var n,c,i,l,a,o,u;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query,c=n.code,i=n.level,l=void 0===i?"min1":i,a=n.volume,o=n.interval,u=void 0===o?30:o,c||(window.WALLE_BOT_MODE="dev",c="sh000016"),e.code=c,e.level=l,e.interval=+u,e.isShowVolume=!!a,t.next=8,window.__Walle_Stock_Twist.crawler.create(e.code);case 8:e.crawler=t.sent,e.crawler.loop(e.interval,Object(r["a"])(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateChart(!1);case 1:case"end":return t.stop()}}),t)})))),setTimeout((function(){e.$nextTick((function(){return e.updateChart()}))}),500);case 11:case"end":return t.stop()}}),t)})))()},destroyed:function(){this.crawler.stop()},methods:{switchLevel:function(e){this.level=e,this.updateChart()},updateChart:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Object(r["a"])(s.a.mark((function n(){return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.code){n.next=6;break}return n.next=3,e.crawler[e.level]();case 3:e.klines=n.sent,e.twist=window.__Walle_Stock_Twist.processor.parse(e.klines),e.$refs.kchart.update(e.klines,e.twist,t);case 6:case"end":return n.stop()}}),n)})))()}}}),o=a,u=(n("9ff7"),n("2be6")),v=Object(u["a"])(o,c,i,!1,null,"ea52f09c",null);t["default"]=v.exports},"8eb4":function(e,t,n){},"9ff7":function(e,t,n){"use strict";var c=n("8eb4"),i=n.n(c);i.a}}]);