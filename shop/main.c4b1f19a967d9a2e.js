var __webpack_modules__={2208:(a,f,i)=>{Promise.all([i.e(597),i.e(45),i.e(423),i.e(355)]).then(i.bind(i,7355)).catch(s=>console.error(s))}},__webpack_module_cache__={};function __webpack_require__(a){var f=__webpack_module_cache__[a];if(void 0!==f)return f.exports;var i=__webpack_module_cache__[a]={exports:{}};return __webpack_modules__[a](i,i.exports,__webpack_require__),i.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.n=a=>{var f=a&&a.__esModule?()=>a.default:()=>a;return __webpack_require__.d(f,{a:f}),f},__webpack_require__.d=(a,f)=>{for(var i in f)__webpack_require__.o(f,i)&&!__webpack_require__.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:f[i]})},__webpack_require__.f={},__webpack_require__.e=a=>Promise.all(Object.keys(__webpack_require__.f).reduce((f,i)=>(__webpack_require__.f[i](a,f),f),[])),__webpack_require__.u=a=>(592===a?"common":a)+"."+{45:"1162d91389ec3555",60:"dfb7961ab3a55b6e",256:"21229228fe47e5b3",339:"40dc61d8fbc9b63a",355:"66ae21c0e7273add",423:"8a0621d16656aaef",481:"af35ee0c2afc2ce9",548:"4fccc87a7667ac6b",592:"7a682c67c458efd9",597:"c7fd795a9184a3ad",790:"13bb301c2beba3fe",895:"d1cc7ee47791d40e",944:"052efd0df0020cef",987:"86739fc020026e13"}[a]+".js",__webpack_require__.miniCssF=a=>{},__webpack_require__.o=(a,f)=>Object.prototype.hasOwnProperty.call(a,f),(()=>{var a={},f="shop:";__webpack_require__.l=(i,s,m,p)=>{if(a[i])a[i].push(s);else{var u,P;if(void 0!==m)for(var c=document.getElementsByTagName("script"),S=0;S<c.length;S++){var h=c[S];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==f+m){u=h;break}}u||(P=!0,(u=document.createElement("script")).type="module",u.charset="utf-8",u.timeout=120,__webpack_require__.nc&&u.setAttribute("nonce",__webpack_require__.nc),u.setAttribute("data-webpack",f+m),u.src=__webpack_require__.tu(i)),a[i]=[s];var b=(C,y)=>{u.onerror=u.onload=null,clearTimeout(w);var g=a[i];if(delete a[i],u.parentNode&&u.parentNode.removeChild(u),g&&g.forEach(v=>v(y)),C)return C(y)},w=setTimeout(b.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=b.bind(null,u.onerror),u.onload=b.bind(null,u.onload),P&&document.head.appendChild(u)}}})(),__webpack_require__.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},__webpack_require__.j=179,(()=>{__webpack_require__.S={};var a={},f={};__webpack_require__.I=(i,s)=>{s||(s=[]);var m=f[i];if(m||(m=f[i]={}),!(s.indexOf(m)>=0)){if(s.push(m),a[i])return a[i];__webpack_require__.o(__webpack_require__.S,i)||(__webpack_require__.S[i]={});var p=__webpack_require__.S[i],P="shop",c=(b,w,C,y)=>{var g=p[b]=p[b]||{},v=g[w];(!v||!v.loaded&&(!y!=!v.eager?y:P>v.from))&&(g[w]={get:C,from:P,eager:!!y})},h=[];return"default"===i&&(c("@angular/common","14.0.0",()=>Promise.all([__webpack_require__.e(597),__webpack_require__.e(895)]).then(()=>()=>__webpack_require__(6895))),c("@angular/core","14.0.0",()=>Promise.all([__webpack_require__.e(60),__webpack_require__.e(256)]).then(()=>()=>__webpack_require__(8256))),c("@angular/platform-browser","14.0.0",()=>Promise.all([__webpack_require__.e(597),__webpack_require__.e(790),__webpack_require__.e(481)]).then(()=>()=>__webpack_require__(1481))),c("@angular/router","14.0.0",()=>Promise.all([__webpack_require__.e(597),__webpack_require__.e(790),__webpack_require__.e(60),__webpack_require__.e(423),__webpack_require__.e(548)]).then(()=>()=>__webpack_require__(6548))),c("@ng-module-federation/shared-components","0.0.1",()=>Promise.all([__webpack_require__.e(597),__webpack_require__.e(790),__webpack_require__.e(592)]).then(()=>()=>__webpack_require__(1750))),c("@ng-module-federation/shop-main","0.0.0",()=>Promise.all([__webpack_require__.e(597),__webpack_require__.e(790),__webpack_require__.e(45),__webpack_require__.e(944),__webpack_require__.e(592)]).then(()=>()=>__webpack_require__(7299))),c("tslib","2.1.0",()=>__webpack_require__.e(987).then(()=>()=>__webpack_require__(5987)))),a[i]=h.length?Promise.all(h).then(()=>a[i]=1):1}}})(),(()=>{var a;__webpack_require__.tt=()=>(void 0===a&&(a={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(a=trustedTypes.createPolicy("angular#bundler",a))),a)})(),__webpack_require__.tu=a=>__webpack_require__.tt().createScriptURL(a),(()=>{var a;if("string"==typeof import.meta.url&&(a=import.meta.url),!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=a})(),(()=>{var a=e=>{var t=o=>o.split(".").map(l=>+l==l?+l:l),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},f=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var l=t[r],d=(typeof l)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(d=e[o]))[0]?"-":(n>0?".":"")+(n=2,d);return r}var l=[];for(o=1;o<e.length;o++){var d=e[o];l.push(0===d?"not("+V()+")":1===d?"("+V()+" || "+V()+")":2===d?l.pop()+" "+l.pop():i(d))}return V();function V(){return l.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,l=1,d=!0;;l++,o++){var V,T,E=l<e.length?(typeof e[l])[0]:"";if(o>=t.length||"o"==(T=(typeof(V=t[o]))[0]))return!d||("u"==E?l>r&&!n:""==E!=n);if("u"==T){if(!d||"u"!=E)return!1}else if(d)if(E==T)if(l<=r){if(V!=e[l])return!1}else{if(n?V>e[l]:V<e[l])return!1;V!=e[l]&&(d=!1)}else if("s"!=E&&"n"!=E){if(n||l<=r)return!1;d=!1,l--}else{if(l<=r||T<E!=n)return!1;d=!1}else"s"!=E&&"n"!=E&&(d=!1,l--)}}var _=[],j=_.pop.bind(_);for(o=1;o<e.length;o++){var M=e[o];_.push(1==M?j()|j():2==M?j()&j():M?s(M,t):!j())}return!!j()},h=(e,t,r,n)=>{var o=((e,t)=>{var r=e[t];return Object.keys(r).reduce((n,o)=>!n||!r[n].loaded&&f(n,o)?o:n,0)})(e,r);if(!s(n,o))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(n)+")")(e,r,o,n));return g(e[r][o])},g=e=>(e.loaded=1,e.get()),v=e=>function(t,r,n,o){var l=__webpack_require__.I(t);return l&&l.then?l.then(e.bind(e,t,__webpack_require__.S[t],r,n,o)):e(t,__webpack_require__.S[t],r,n,o)},A=v((e,t,r,n)=>t&&__webpack_require__.o(t,r)?g(((e,n)=>{var r=e[n];return(n=Object.keys(r).reduce((o,l)=>!o||f(o,l)?l:o,0))&&r[n]})(t,r)):n()),x=v((e,t,r,n,o)=>t&&__webpack_require__.o(t,r)?h(t,0,r,n):o()),O={},$={5597:()=>x("default","@angular/core",[4,14,0,0],()=>Promise.all([__webpack_require__.e(60),__webpack_require__.e(256)]).then(()=>()=>__webpack_require__(8256))),2045:()=>x("default","@angular/router",[4,14,0,0],()=>Promise.all([__webpack_require__.e(790),__webpack_require__.e(60),__webpack_require__.e(423),__webpack_require__.e(548)]).then(()=>()=>__webpack_require__(6548))),1423:()=>x("default","@angular/platform-browser",[4,14,0,0],()=>Promise.all([__webpack_require__.e(790),__webpack_require__.e(481)]).then(()=>()=>__webpack_require__(1481))),1517:()=>x("default","tslib",[1,2,0,0],()=>__webpack_require__.e(987).then(()=>()=>__webpack_require__(5987))),6790:()=>x("default","@angular/common",[4,14,0,0],()=>__webpack_require__.e(895).then(()=>()=>__webpack_require__(6895))),3944:()=>A("default","@ng-module-federation/shared-components",()=>__webpack_require__.e(592).then(()=>()=>__webpack_require__(1750))),5339:()=>A("default","@ng-module-federation/shop-main",()=>Promise.all([__webpack_require__.e(790),__webpack_require__.e(45),__webpack_require__.e(944),__webpack_require__.e(592)]).then(()=>()=>__webpack_require__(7299)))},F={45:[2045],60:[1517],339:[5339],423:[1423],597:[5597],790:[6790],944:[3944]};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(F,e)&&F[e].forEach(r=>{if(__webpack_require__.o(O,r))return t.push(O[r]);var n=d=>{O[r]=0,__webpack_require__.m[r]=V=>{delete __webpack_require__.c[r],V.exports=d()}},o=d=>{delete O[r],__webpack_require__.m[r]=V=>{throw delete __webpack_require__.c[r],d}};try{var l=$[r]();l.then?t.push(O[r]=l.then(n).catch(o)):n(l)}catch(d){o(d)}})}})(),(()=>{var a={179:0};__webpack_require__.f.j=(s,m)=>{var p=__webpack_require__.o(a,s)?a[s]:void 0;if(0!==p)if(p)m.push(p[2]);else if(/^(339|423|45|597|790|944)$/.test(s))a[s]=0;else{var u=new Promise((h,b)=>p=a[s]=[h,b]);m.push(p[2]=u);var P=__webpack_require__.p+__webpack_require__.u(s),c=new Error;__webpack_require__.l(P,h=>{if(__webpack_require__.o(a,s)&&(0!==(p=a[s])&&(a[s]=void 0),p)){var b=h&&("load"===h.type?"missing":h.type),w=h&&h.target&&h.target.src;c.message="Loading chunk "+s+" failed.\n("+b+": "+w+")",c.name="ChunkLoadError",c.type=b,c.request=w,p[1](c)}},"chunk-"+s,s)}};var f=(s,m)=>{var c,S,[p,u,P]=m,h=0;if(p.some(w=>0!==a[w])){for(c in u)__webpack_require__.o(u,c)&&(__webpack_require__.m[c]=u[c]);P&&P(__webpack_require__)}for(s&&s(m);h<p.length;h++)__webpack_require__.o(a,S=p[h])&&a[S]&&a[S][0](),a[S]=0},i=self.webpackChunkshop=self.webpackChunkshop||[];i.forEach(f.bind(null,0)),i.push=f.bind(null,i.push.bind(i))})();var __webpack_exports__=__webpack_require__(2208);