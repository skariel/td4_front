function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r,s,o,a){const c=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(c){const s=i(e,n,r,a);t.p(s,c)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(){return m("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function w(t){return E(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}function P(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function L(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let R;function j(t){R=t}function C(){if(!R)throw new Error("Function called outside component initialization");return R}function O(t){C().$$.on_mount.push(t)}function N(t){C().$$.on_destroy.push(t)}const q=[],U=[],D=[],z=[],k=Promise.resolve();let I=!1;function T(t){D.push(t)}let H=!1;const M=new Set;function J(){if(!H){H=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];j(e),B(e.$$)}for(q.length=0;U.length;)U.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];M.has(e)||(M.add(e),e())}D.length=0}while(q.length);for(;z.length;)z.pop()();I=!1,H=!1,M.clear()}}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const G=new Set;let K;function V(){K={r:0,c:[],p:K}}function F(){K.r||s(K.c),K=K.p}function Y(t,e){t&&t.i&&(G.delete(t),t.i(e))}function Q(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),K.c.push(()=>{G.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function W(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),T(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(T)}function nt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(q.push(t),I||(I=!0,k.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,o,a,c,i,l=[-1]){const u=R;j(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),d&&rt(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&Y(e.$$.fragment),et(e,n.target,n.anchor),J()}j(u)}class ot{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const at=[];function ct(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const it={},lt=()=>({});let ut=!1;function ft(){ut=!0,setTimeout(()=>{ut=!1},5e3)}async function pt(t,e,n,r){try{let o=gt(e);if(ut&&"GET"==n){let t=new URL(o);t.searchParams.append("uncached","true"),o=t.href,console.log("cache invalidated! "+o)}const a=await fetch(o,{method:n,body:r,headers:{Authorization:"Bearer "+t.jwt_auth}});var s=[];return 200==a.status?null==(s=await a.json())&&(s=[]):(null==(s=await a.text())&&(s=""),alert(s)),{data:s,status:a.status}}catch(t){return console.log(t),alert(`problem fetching ${gt(e)}. Error logged to console`),{data:[],status:-1}}}async function ht(t,e,n){return pt(t,e,"POST",JSON.stringify(n))}async function dt(t,e){return pt(t,e,"GET",null)}async function mt(t,e){return pt(t,e,"DELETE",null)}function gt(t){return"https://api.solvemytest.dev/api/"+t}function vt(){return"https://api.solvemytest.dev/auth/github"}function $t(){let t=(e="jwt_auth",(n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)")))?n[2]:null);var e,n;if(null==t)return{};let r=(s=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(s).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join("")),JSON.parse(o));var s,o;return r.jwt_auth=t,r}function bt(t){const e=Math.floor((Date.now()-t.getTime())/1e3);if(0==e)return"just now";const n=[{label:"year",seconds:31536e3},{label:"month",seconds:2592e3},{label:"day",seconds:86400},{label:"hour",seconds:3600},{label:"minute",seconds:60},{label:"second",seconds:0}].find(t=>t.seconds<e),r=Math.floor(e/n.seconds);return`${r} ${n.label}${1!==r?"s":""} ago`}function yt(t){let e,n;return{c(){e=d("img"),this.h()},l(t){e=_(t,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){b(e,"class","avatar svelte-zx2bo0"),b(e,"alt","avatar"),e.src!==(n=t[1].avatar)&&b(e,"src",n)},m(t,n){f(t,e,n)},p(t,r){2&r&&e.src!==(n=t[1].avatar)&&b(e,"src",n)},d(t){t&&p(e)}}}function _t(e){let n,r,s,o;return{c(){n=d("a"),r=d("img"),this.h()},l(t){n=_(t,"A",{href:!0,class:!0});var e=y(n);r=_(e,"IMG",{class:!0,alt:!0,src:!0}),e.forEach(p),this.h()},h(){b(r,"class","avatar svelte-zx2bo0"),b(r,"alt","login with github"),r.src!==(s="https://solvemytest.dev//"+"login_with_github.png")&&b(r,"src",s),b(n,"href",o="https://api.solvemytest.dev/auth/github"),b(n,"class","svelte-zx2bo0")},m(t,e){f(t,n,e),u(n,r)},p:t,d(t){t&&p(n)}}}function Et(e){let n,r,s,o,a,c,i,l,h,v,$;function S(t,e){return null==t[1].avatar?_t:yt}let x=S(e),P=x(e);return{c(){n=d("nav"),r=d("ul"),s=d("li"),o=d("a"),a=m("home"),c=g(),i=d("li"),l=d("a"),h=m("about"),v=g(),$=d("li"),P.c(),this.h()},l(t){n=_(t,"NAV",{class:!0});var e=y(n);r=_(e,"UL",{class:!0});var u=y(r);s=_(u,"LI",{class:!0});var f=y(s);o=_(f,"A",{href:!0,class:!0});var d=y(o);a=E(d,"home"),d.forEach(p),f.forEach(p),c=w(u),i=_(u,"LI",{class:!0});var m=y(i);l=_(m,"A",{href:!0,class:!0});var g=y(l);h=E(g,"about"),g.forEach(p),m.forEach(p),v=w(u),$=_(u,"LI",{class:!0});var b=y($);P.l(b),b.forEach(p),u.forEach(p),e.forEach(p),this.h()},h(){b(o,"href","."),b(o,"class","svelte-zx2bo0"),L(o,"selected",void 0===e[0]),b(s,"class","svelte-zx2bo0"),b(l,"href","about"),b(l,"class","svelte-zx2bo0"),L(l,"selected","about"===e[0]),b(i,"class","svelte-zx2bo0"),b($,"class","avatar svelte-zx2bo0"),b(r,"class","svelte-zx2bo0"),b(n,"class","svelte-zx2bo0")},m(t,e){f(t,n,e),u(n,r),u(r,s),u(s,o),u(o,a),u(r,c),u(r,i),u(i,l),u(l,h),u(r,v),u(r,$),P.m($,null)},p(t,[e]){1&e&&L(o,"selected",void 0===t[0]),1&e&&L(l,"selected","about"===t[0]),x===(x=S(t))&&P?P.p(t,e):(P.d(1),P=x(t),P&&(P.c(),P.m($,null)))},i:t,o:t,d(t){t&&p(n),P.d()}}}function wt(t,e,n){let r={};O(()=>{n(1,r=$t())});let{segment:s}=e;return t.$set=t=>{"segment"in t&&n(0,s=t.segment)},[s,r]}class St extends ot{constructor(t){super(),st(this,t,wt,Et,a,{segment:0})}}function xt(t){let e,n,r,s;e=new St({props:{segment:t[0]}});const o=t[2].default,a=function(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){Z(e.$$.fragment),n=g(),r=d("main"),a&&a.c(),this.h()},l(t){tt(e.$$.fragment,t),n=w(t),r=_(t,"MAIN",{class:!0});var s=y(r);a&&a.l(s),s.forEach(p),this.h()},h(){b(r,"class","svelte-1uhnsl8")},m(t,o){et(e,t,o),f(t,n,o),f(t,r,o),a&&a.m(r,null),s=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&l(a,o,t,t[1],n,null,null)},i(t){s||(Y(e.$$.fragment,t),Y(a,t),s=!0)},o(t){Q(e.$$.fragment,t),Q(a,t),s=!1},d(t){nt(e,t),t&&p(n),t&&p(r),a&&a.d(t)}}}function Pt(t,e,n){let{segment:r}=e;O(async()=>{var t;history.pushState=(t=history.pushState,function(){var e=t.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),e}),history.replaceState=(t=>function(){var e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e})(history.replaceState),window.addEventListener("popstate",()=>{window.dispatchEvent(new Event("locationchange"))})});let{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class Lt extends ot{constructor(t){super(),st(this,t,Pt,xt,a,{segment:0})}}function At(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=_(t,"PRE",{});var s=y(e);n=E(s,r),s.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&p(e)}}}function Rt(e){let n,r,s,o,a,c,i,l,h,$=e[1].message+"";document.title=n=e[0];let x=e[2]&&e[1].stack&&At(e);return{c(){r=g(),s=d("h1"),o=m(e[0]),a=g(),c=d("p"),i=m($),l=g(),x&&x.c(),h=v(),this.h()},l(t){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=w(t),s=_(t,"H1",{class:!0});var n=y(s);o=E(n,e[0]),n.forEach(p),a=w(t),c=_(t,"P",{class:!0});var u=y(c);i=E(u,$),u.forEach(p),l=w(t),x&&x.l(t),h=v(),this.h()},h(){b(s,"class","svelte-8od9u6"),b(c,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,a,e),f(t,c,e),u(c,i),f(t,l,e),x&&x.m(t,e),f(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(o,t[0]),2&e&&$!==($=t[1].message+"")&&S(i,$),t[2]&&t[1].stack?x?x.p(t,e):(x=At(t),x.c(),x.m(h.parentNode,h)):x&&(x.d(1),x=null)},i:t,o:t,d(t){t&&p(r),t&&p(s),t&&p(a),t&&p(c),t&&p(l),x&&x.d(t),t&&p(h)}}}function jt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class Ct extends ot{constructor(t){super(),st(this,t,jt,Rt,a,{status:0,error:1})}}function Ot(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&Z(n.$$.fragment),r=v()},l(t){n&&tt(n.$$.fragment,t),r=v()},m(t,e){n&&et(n,t,e),f(t,r,e),s=!0},p(t,e){const s=16&e?W(o,[X(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){V();const t=n;Q(t.$$.fragment,1,0,()=>{nt(t,1)}),F()}a?(n=new a(c()),Z(n.$$.fragment),Y(n.$$.fragment,1),et(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&Y(n.$$.fragment,t),s=!0)},o(t){n&&Q(n.$$.fragment,t),s=!1},d(t){t&&p(r),n&&nt(n,t)}}}function Nt(t){let e,n;return e=new Ct({props:{error:t[0],status:t[1]}}),{c(){Z(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function qt(t){let e,n,r,s;const o=[Nt,Ot],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(V(),Q(a[i],1,1,()=>{a[i]=null}),F(),n=a[e],n||(n=a[e]=o[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){s||(Y(n),s=!0)},o(t){Q(n),s=!1},d(t){a[e].d(t),t&&p(r)}}}function Ut(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[qt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Lt({props:o}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,e){et(n,t,e),r=!0},p(t,[e]){const r=12&e?W(s,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){Q(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function Dt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,C().$$.after_update.push(u),f=it,p=r,C().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class zt extends ot{constructor(t){super(),st(this,t,Dt,Ut,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const kt=[/^\/utils\/?$/],It=[{js:()=>import("./index.5984c721.js"),css:[]},{js:()=>import("./solution_edit.a8125f5b.js"),css:[]},{js:()=>import("./new_solution.b44f5496.js"),css:[]},{js:()=>import("./test_edit.a2bcb685.js"),css:[]},{js:()=>import("./new_test.c02be825.js"),css:[]},{js:()=>import("./solution.e7a35a6e.js"),css:[]},{js:()=>import("./about.5c0026aa.js"),css:[]},{js:()=>import("./debug.d441512d.js"),css:[]},{js:()=>import("./test.157daf01.js"),css:[]}],Tt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/solution_edit\/?$/,parts:[{i:1}]},{pattern:/^\/new_solution\/?$/,parts:[{i:2}]},{pattern:/^\/test_edit\/?$/,parts:[{i:3}]},{pattern:/^\/new_test\/?$/,parts:[{i:4}]},{pattern:/^\/solution\/?$/,parts:[{i:5}]},{pattern:/^\/about\/?$/,parts:[{i:6}]},{pattern:/^\/debug\/?$/,parts:[{i:7}]},{pattern:/^\/test\/?$/,parts:[{i:8}]}];function Ht(t,e={replaceState:!1}){const n=oe(new URL(t,document.baseURI));return n?(ne[e.replaceState?"replaceState":"pushState"]({id:te},"",t),ce(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Mt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Jt,Bt,Gt,Kt=!1,Vt=[],Ft="{}";const Yt={page:function(t){const e=ct(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ct(null),session:ct(Mt&&Mt.session)};let Qt,Wt;Yt.session.subscribe(async t=>{if(Qt=t,!Kt)return;Wt=!0;const e=oe(new URL(location.href)),n=Bt={},{redirect:r,props:s,branch:o}=await le(e);n===Bt&&await ie(r,o,s,e.page)});let Xt,Zt=null;let te,ee=1;const ne="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},re={};function se(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function oe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Mt.baseUrl))return null;let e=t.pathname.slice(Mt.baseUrl.length);if(""===e&&(e="/"),!kt.some(t=>t.test(e)))for(let n=0;n<Tt.length;n+=1){const r=Tt[n],s=r.pattern.exec(e);if(s){const n=se(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function ae(){return{x:pageXOffset,y:pageYOffset}}async function ce(t,e,n,r){if(e)te=e;else{const t=ae();re[te]=t,e=te=++ee,re[te]=n?t:{x:0,y:0}}te=e,Jt&&Yt.preloading.set(!0);const s=Zt&&Zt.href===t.href?Zt.promise:le(t);Zt=null;const o=Bt={},{redirect:a,props:c,branch:i}=await s;if(o===Bt&&(await ie(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=re[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}re[te]=t,t&&scrollTo(t.x,t.y)}}async function ie(t,e,n,r){if(t)return Ht(t.location,{replaceState:!0});if(Yt.page.set(r),Yt.preloading.set(!1),Jt)Jt.$set(n);else{n.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},n.level0={props:await Gt},n.notify=Yt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)fe(t.nextSibling);fe(t),fe(e)}Jt=new zt({target:Xt,props:n,hydrate:!0})}Vt=e,Ft=JSON.stringify(r.query),Kt=!0,Wt=!1}async function le(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Gt||(Gt=Mt.preloaded[0]||lt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Qt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ft)return!0;const s=Vt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Wt&&!u&&Vt[c]&&Vt[c].part===e.i)return Vt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ue);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(It[e.i]);let m;return m=Kt||!Mt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Qt):{}:Mt.preloaded[c+1],o["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function ue(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function fe(t){t.parentNode.removeChild(t)}function pe(t){const e=oe(new URL(t,document.baseURI));if(e)return Zt&&t===Zt.href||function(t,e){Zt={href:t,promise:e}}(t,le(e)),Zt.promise}let he;function de(t){clearTimeout(he),he=setTimeout(()=>{me(t)},20)}function me(t){const e=ve(t.target);e&&"prefetch"===e.rel&&pe(e.href)}function ge(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ve(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=oe(s);if(o){ce(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),ne.pushState({id:te},"",s.href)}}function ve(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function $e(t){if(re[te]=ae(),t.state){const e=oe(new URL(location.href));e?ce(e,t.state.id):location.href=location.href}else ee=ee+1,function(t){te=t}(ee),ne.replaceState({id:te},"",location.href)}var be;be={target:document.querySelector("#sapper")},"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ne.scrollRestoration="auto"}),addEventListener("load",()=>{ne.scrollRestoration="manual"}),function(t){Xt=t}(be.target),addEventListener("click",ge),addEventListener("popstate",$e),addEventListener("touchstart",me),addEventListener("mousemove",de),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ne.replaceState({id:ee},"",e);const n=new URL(location.href);if(Mt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Mt;Gt||(Gt=o&&o[0]),ie(null,[],{error:c,status:a,session:s,level0:{props:Gt},level1:{props:{status:a,error:c},component:Ct},segments:o},{host:e,path:n,query:se(r),params:{}})}();const r=oe(n);return r?ce(r,ee,!0,t):void 0});export{O as A,N as B,V as C,$t as D,dt as E,vt as F,v as G,$ as H,c as I,ct as J,ht as K,ft as L,Ht as M,x as N,s as O,mt as P,o as Q,ot as S,g as a,y as b,_ as c,w as d,d as e,E as f,p as g,b as h,st as i,f as j,u as k,S as l,bt as m,t as n,Z as o,tt as p,et as q,Y as r,a as s,m as t,Q as u,nt as v,A as w,P as x,F as y,h as z};
