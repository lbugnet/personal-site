(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{49:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",r="week",a="month",u="quarter",o="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,a),r=n-s<0,u=e.clone().add(i+(r?-1:1),a);return+(-(i+(n-s)/(r?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:o,w:r,d:s,D:c,h:i,m:n,s:e,ms:t,Q:u}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",g={};g[$]=d;var p=function(t){return t instanceof v},M=function(t,e,n){var i;if(!t)return $;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var s=t.name;g[s]=t,i=s}return!n&&i&&($=i),i||!n&&$},b=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},j=m;j.l=M,j.i=p,j.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var v=function(){function d(t){this.$L=M(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return j},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return b(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<b(t)},f.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var l=this,h=!!j.u(u)||u,d=j.p(t),f=function(t,e){var n=j.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?n:n.endOf(s)},m=function(t,e){return j.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},$=this.$W,g=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(d){case o:return h?f(1,0):f(31,11);case a:return h?f(1,g):f(0,g+1);case r:var b=this.$locale().weekStart||0,v=($<b?$+7:$)-b;return f(h?p-v:p+(6-v),g);case s:case c:return m(M+"Hours",0);case i:return m(M+"Minutes",1);case n:return m(M+"Seconds",2);case e:return m(M+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,u){var l,h=j.p(r),d="set"+(this.$u?"UTC":""),f=(l={},l[s]=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[o]=d+"FullYear",l[i]=d+"Hours",l[n]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[h],m=h===s?this.$D+(u-this.$W):u;if(h===a||h===o){var $=this.clone().set(c,1);$.$d[f](m),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[j.p(t)]()},f.add=function(t,u){var c,l=this;t=Number(t);var h=j.p(u),d=function(e){var n=b(l);return j.w(n.date(n.date()+Math.round(e*t)),l)};if(h===a)return this.set(a,this.$M+t);if(h===o)return this.set(o,this.$y+t);if(h===s)return d(1);if(h===r)return d(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,m=this.$d.getTime()+t*f;return j.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),s=this.$locale(),r=this.$H,a=this.$m,u=this.$M,o=s.weekdays,c=s.months,l=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].substr(0,r)},d=function(t){return j.s(r%12||12,t,"0")},f=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:j.s(u+1,2,"0"),MMM:l(s.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,o,2),ddd:l(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:j.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||m[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var h,d=j.p(c),f=b(t),m=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,g=j.m(this,f);return g=(h={},h[o]=g/12,h[a]=g,h[u]=g/3,h[r]=($-m)/6048e5,h[s]=($-m)/864e5,h[i]=$/36e5,h[n]=$/6e4,h[e]=$/1e3,h)[d]||$,l?g:j.a(g)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=M(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return j.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),y=v.prototype;return b.prototype=y,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",s],["$M",a],["$y",o],["$D",c]].forEach((function(t){y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,v,b),t.$i=!0),b},b.locale=M,b.isDayjs=p,b.unix=function(t){return b(1e3*t)},b.en=g[$],b.Ls=g,b.p={},b}()},60:function(t,e,n){"use strict";n.r(e);var i=n(0),s=(n(1),n(5)),r=n(20),a=n(49),u=n.n(a),o=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:u()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("/personal-site").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},c=[{title:"Magnetic signatures on mixed-mode frequencies.",subtitle:"I. An axisymmetric fossil field inside the core of red giants.",journal:"A&A, 650, A53 + journal cover",link:"https://www.aanda.org/articles/aa/abs/2021/06/aa39159-20/aa39159-20.html",image:"/images/publications/big_photocouv650-2-2.jpg",date:"2021-06",desc:"Bugnet, L., V. Prat, S. Mathis, A. Astoul, K. Augustson, R.A. Garc\xeda, S. Mathur, L. Amard, C. Neiner.  "},{title:"Sounding the internal magnetism of starsusing asymptotic magneto-asteroseismolog",journal:"A&A, 647, A122",link:"https://www.aanda.org/articles/aa/full_html/2021/03/aa39180-20/aa39180-20.html",image:"/images/publications/Fig3_Strategy.jpg",date:"2021-03",desc:"S. Mathis\u2217, L. Bugnet\u2217, V. Prat, K. Augustson, S. Mathur, and R. A. Garcia.",supl:"S. Mathis and L. Bugnet equally contributed to this work."},{title:"FliPerClass: In search of solar-like pulsators among TESS targets",journal:"A&A, 624, A79",link:"https://www.aanda.org/articles/aa/abs/2019/04/aa34780-18/aa34780-18.html",image:"/images/publications/fliperclass.png",date:"2019-04",desc:"L. Bugnet, R. A. Garc\xeda, S. Mathur, G. R. Davies, O. J. Hall, M. N. Lund, and B. M. Rendle"},{title:"FliPer: A global measure of power density to estimate surface gravities of main-sequence solar-like stars and red giants",journal:"A&A 620, A38",link:"https://www.aanda.org/articles/aa/full_html/2018/12/aa33106-18/aa33106-18.html",image:"/images/publications/plot_fliper_main_new_july.png",date:"2018-11",desc:"L. Bugnet, R. A. Garc\xeda, G. R. Davies, S. Mathur, E. Corsaro, O. J. Hall, and B. M. Rendle"}];e.default=function(){return Object(i.jsx)(r.a,{title:"Publications",description:"Learn about Lisa Bugnet's publications.",children:Object(i.jsxs)("article",{className:"post",id:"publications",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(s.b,{to:"/publications",children:"Publications"})}),Object(i.jsx)("p",{children:"Most recent journal articles"})]})}),c.map((function(t){return Object(i.jsx)(o,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=6.6d266cb0.chunk.js.map