import{S as e,i as t,s as a,e as s,a as r,t as l,c as n,b as c,d as h,f as o,g as i,h as f,j as d,k as u,l as p,n as g,m as v,o as m,p as E,q as x,r as y,u as w,v as _,w as A,x as H,y as P,z as j,A as N,B as D,C as I,D as T,E as $,F as L,G as V}from"./client.ff85a803.js";function b(e){let t,a,v,m,E,x,y,w,_,A,H,P,j,N,D,I,T,$,L,V,b,S,k,B,G,q,z,C,F,M,R,U,J,K,O,Q,W,X,Y,Z,ee=e[0].display_name+"",te=e[0].id+"",ae=e[0].title+"",se=e[0].descr+"",re=e[0].ts_updated+"",le=e[0].total_fail+"",ne=e[0].total_pass+"",ce=e[0].total_pending+"",he=e[0].total_wip+"";return{c(){t=s("div"),a=s("div"),v=s("img"),E=r(),x=s("h4"),y=l(ee),w=r(),_=s("h4"),A=l(te),H=r(),P=s("h4"),j=l("Title: "),N=s("a"),D=l(ae),T=r(),$=s("h4"),L=l("Descr: "),V=l(se),b=r(),S=s("h4"),k=l("u: "),B=l(re),G=r(),q=s("h4"),z=l("fail "),C=l(le),F=r(),M=s("h4"),R=l("pass "),U=l(ne),J=r(),K=s("h4"),O=l("pending "),Q=l(ce),W=r(),X=s("h4"),Y=l("wip "),Z=l(he),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=c(t);a=n(s,"DIV",{class:!0});var r=c(a);v=n(r,"IMG",{class:!0,src:!0,alt:!0}),E=h(r),x=n(r,"H4",{class:!0});var l=c(x);y=o(l,ee),l.forEach(i),w=h(r),_=n(r,"H4",{class:!0});var f=c(_);A=o(f,te),f.forEach(i),r.forEach(i),H=h(s),P=n(s,"H4",{class:!0});var d=c(P);j=o(d,"Title: "),N=n(d,"A",{href:!0});var u=c(N);D=o(u,ae),u.forEach(i),d.forEach(i),T=h(s),$=n(s,"H4",{class:!0});var p=c($);L=o(p,"Descr: "),V=o(p,se),p.forEach(i),b=h(s),S=n(s,"H4",{class:!0});var g=c(S);k=o(g,"u: "),B=o(g,re),g.forEach(i),G=h(s),q=n(s,"H4",{class:!0});var m=c(q);z=o(m,"fail "),C=o(m,le),m.forEach(i),F=h(s),M=n(s,"H4",{class:!0});var I=c(M);R=o(I,"pass "),U=o(I,ne),I.forEach(i),J=h(s),K=n(s,"H4",{class:!0});var oe=c(K);O=o(oe,"pending "),Q=o(oe,ce),oe.forEach(i),W=h(s),X=n(s,"H4",{class:!0});var ie=c(X);Y=o(ie,"wip "),Z=o(ie,he),ie.forEach(i),s.forEach(i),this.h()},h(){f(v,"class","avatar svelte-1u6ynj"),v.src!==(m=e[0].avatar)&&f(v,"src",m),f(v,"alt","avatar"),f(x,"class","displayname"),f(_,"class","testid svelte-1u6ynj"),f(a,"class","topbar svelte-1u6ynj"),f(N,"href",I="/test?id="+e[0].id+"&page=0"),f(P,"class","testtitle svelte-1u6ynj"),f($,"class","testdescr svelte-1u6ynj"),f(S,"class","updated svelte-1u6ynj"),f(q,"class","failed svelte-1u6ynj"),f(M,"class","passed svelte-1u6ynj"),f(K,"class","pending svelte-1u6ynj"),f(X,"class","wip svelte-1u6ynj"),f(t,"class","main svelte-1u6ynj")},m(e,s){d(e,t,s),u(t,a),u(a,v),u(a,E),u(a,x),u(x,y),u(a,w),u(a,_),u(_,A),u(t,H),u(t,P),u(P,j),u(P,N),u(N,D),u(t,T),u(t,$),u($,L),u($,V),u(t,b),u(t,S),u(S,k),u(S,B),u(t,G),u(t,q),u(q,z),u(q,C),u(t,F),u(t,M),u(M,R),u(M,U),u(t,J),u(t,K),u(K,O),u(K,Q),u(t,W),u(t,X),u(X,Y),u(X,Z)},p(e,[t]){1&t&&v.src!==(m=e[0].avatar)&&f(v,"src",m),1&t&&ee!==(ee=e[0].display_name+"")&&p(y,ee),1&t&&te!==(te=e[0].id+"")&&p(A,te),1&t&&ae!==(ae=e[0].title+"")&&p(D,ae),1&t&&I!==(I="/test?id="+e[0].id+"&page=0")&&f(N,"href",I),1&t&&se!==(se=e[0].descr+"")&&p(V,se),1&t&&re!==(re=e[0].ts_updated+"")&&p(B,re),1&t&&le!==(le=e[0].total_fail+"")&&p(C,le),1&t&&ne!==(ne=e[0].total_pass+"")&&p(U,ne),1&t&&ce!==(ce=e[0].total_pending+"")&&p(Q,ce),1&t&&he!==(he=e[0].total_wip+"")&&p(Z,he)},i:g,o:g,d(e){e&&i(t)}}}function S(e,t,a){let{test:s}=t;return e.$set=e=>{"test"in e&&a(0,s=e.test)},[s]}class k extends e{constructor(e){super(),t(this,e,S,b,a,{test:0})}}function B(e,t,a){const s=e.slice();return s[7]=t[a],s}function G(e){let t,a,r;return{c(){t=s("h1"),a=l("Showing tests for "),r=l(e[4])},l(s){t=n(s,"H1",{});var l=c(t);a=o(l,"Showing tests for "),r=o(l,e[4]),l.forEach(i)},m(e,s){d(e,t,s),u(t,a),u(t,r)},p(e,t){16&t&&p(r,e[4])},d(e){e&&i(t)}}}function q(e){let t,a;return{c(){t=s("h1"),a=l("Showing all tests")},l(e){t=n(e,"H1",{});var s=c(t);a=o(s,"Showing all tests"),s.forEach(i)},m(e,s){d(e,t,s),u(t,a)},p:g,d(e){e&&i(t)}}}function z(e){let t,a,r;return{c(){t=s("a"),a=l("Login to add a test"),this.h()},l(e){t=n(e,"A",{href:!0,class:!0});var s=c(t);a=o(s,"Login to add a test"),s.forEach(i),this.h()},h(){f(t,"href",r=$()),f(t,"class","svelte-18ssdxp")},m(e,s){d(e,t,s),u(t,a)},p:g,d(e){e&&i(t)}}}function C(e){let t,a,p;function g(e,t){return null!=e[4]?M:F}let v=g(e),m=v(e);return{c(){m.c(),t=r(),a=s("a"),p=l("Add Test"),this.h()},l(e){m.l(e),t=h(e),a=n(e,"A",{style:!0,href:!0,class:!0});var s=c(a);p=o(s,"Add Test"),s.forEach(i),this.h()},h(){f(a,"style","margin-right?:15px; margin-left:15px;"),f(a,"href","/new_test"),f(a,"class","svelte-18ssdxp")},m(e,s){m.m(e,s),d(e,t,s),d(e,a,s),u(a,p)},p(e,a){v===(v=g(e))&&m?m.p(e,a):(m.d(1),m=v(e),m&&(m.c(),m.m(t.parentNode,t)))},d(e){m.d(e),e&&i(t),e&&i(a)}}}function F(e){let t,a,r;return{c(){t=s("a"),a=l("my tests"),this.h()},l(e){t=n(e,"A",{style:!0,href:!0,class:!0});var s=c(t);a=o(s,"my tests"),s.forEach(i),this.h()},h(){f(t,"style","margin-right?:15px; margin-left:auto;"),f(t,"href",r="/?page=0&user="+e[1].display_name),f(t,"class","svelte-18ssdxp")},m(e,s){d(e,t,s),u(t,a)},p(e,a){2&a&&r!==(r="/?page=0&user="+e[1].display_name)&&f(t,"href",r)},d(e){e&&i(t)}}}function M(e){let t,a,r,h;return{c(){t=s("a"),a=l("all tests"),this.h()},l(e){t=n(e,"A",{style:!0,href:!0,class:!0});var s=c(t);a=o(s,"all tests"),s.forEach(i),this.h()},h(){f(t,"style","margin-right?:15px; margin-left:auto;"),f(t,"href","/?page=0"),f(t,"class","svelte-18ssdxp")},m(s,l){d(s,t,l),u(t,a),r||(h=V(t,"click",e[6]),r=!0)},p:g,d(e){e&&i(t),r=!1,h()}}}function R(e){let t;function a(e,t){return 0==e[2]?K:J}let s=a(e),r=s(e);return{c(){r.c(),t=L()},l(e){r.l(e),t=L()},m(e,a){r.m(e,a),d(e,t,a)},p(e,l){s!==(s=a(e))&&(r.d(1),r=s(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&i(t)}}}function U(e){let t,a;return{c(){t=s("h2"),a=l("Loading...")},l(e){t=n(e,"H2",{});var s=c(t);a=o(s,"Loading..."),s.forEach(i)},m(e,s){d(e,t,s),u(t,a)},p:g,d(e){e&&i(t)}}}function J(e){let t,a;return{c(){t=s("h2"),a=l("None on this page!")},l(e){t=n(e,"H2",{});var s=c(t);a=o(s,"None on this page!"),s.forEach(i)},m(e,s){d(e,t,s),u(t,a)},d(e){e&&i(t)}}}function K(e){let t,a;return{c(){t=s("h2"),a=l("None yet!")},l(e){t=n(e,"H2",{});var s=c(t);a=o(s,"None yet!"),s.forEach(i)},m(e,s){d(e,t,s),u(t,a)},d(e){e&&i(t)}}}function O(e){let t,a,l,o;return a=new k({props:{test:e[7]}}),{c(){t=s("div"),v(a.$$.fragment),l=r(),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=c(t);m(a.$$.fragment,s),l=h(s),s.forEach(i),this.h()},h(){f(t,"class","testcard svelte-18ssdxp")},m(e,s){d(e,t,s),E(a,t,null),u(t,l),o=!0},p(e,t){const s={};1&t&&(s.test=e[7]),a.$set(s)},i(e){o||(x(a.$$.fragment,e),o=!0)},o(e){y(a.$$.fragment,e),o=!1},d(e){e&&i(t),w(a)}}}function Q(e){let t,a,p,g,v,m,E,x,y;return{c(){t=s("a"),a=l("Prev Page"),g=r(),v=s("div"),m=r(),E=s("a"),x=l("Next Page"),this.h()},l(e){t=n(e,"A",{href:!0});var s=c(t);a=o(s,"Prev Page"),s.forEach(i),g=h(e),v=n(e,"DIV",{class:!0}),c(v).forEach(i),m=h(e),E=n(e,"A",{href:!0});var r=c(E);x=o(r,"Next Page"),r.forEach(i),this.h()},h(){f(t,"href",p="/?page="+(e[2]-1)),f(v,"class","filler svelte-18ssdxp"),f(E,"href",y="/?page="+(e[2]+1))},m(e,s){d(e,t,s),u(t,a),d(e,g,s),d(e,v,s),d(e,m,s),d(e,E,s),u(E,x)},p(e,a){4&a&&p!==(p="/?page="+(e[2]-1))&&f(t,"href",p),4&a&&y!==(y="/?page="+(e[2]+1))&&f(E,"href",y)},d(e){e&&i(t),e&&i(g),e&&i(v),e&&i(m),e&&i(E)}}}function W(e){let t,a,r;return{c(){t=s("a"),a=l("Prev Page"),this.h()},l(e){t=n(e,"A",{href:!0});var s=c(t);a=o(s,"Prev Page"),s.forEach(i),this.h()},h(){f(t,"href",r="/?page="+(e[2]-1))},m(e,s){d(e,t,s),u(t,a)},p(e,a){4&a&&r!==(r="/?page="+(e[2]-1))&&f(t,"href",r)},d(e){e&&i(t)}}}function X(e){let t,a=10==e[0].length&&Y(e);return{c(){a&&a.c(),t=L()},l(e){a&&a.l(e),t=L()},m(e,s){a&&a.m(e,s),d(e,t,s)},p(e,s){10==e[0].length?a?a.p(e,s):(a=Y(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&i(t)}}}function Y(e){let t,a,r;return{c(){t=s("a"),a=l("Next Page"),this.h()},l(e){t=n(e,"A",{href:!0});var s=c(t);a=o(s,"Next Page"),s.forEach(i),this.h()},h(){f(t,"href",r="/?page="+(e[2]+1))},m(e,s){d(e,t,s),u(t,a)},p(e,a){4&a&&r!==(r="/?page="+(e[2]+1))&&f(t,"href",r)},d(e){e&&i(t)}}}function Z(e){let t,a,p,g,v,m,E,w,j,N,I,T,$,L,V,b,S,k,F,M,J,K,Y,Z,ee,te,ae,se,re,le,ne,ce,he,oe;function ie(e,t){return null==e[4]?q:G}let fe=ie(e),de=fe(e);function ue(e,t){return null!=e[1].avatar?C:z}let pe=ue(e),ge=pe(e);function ve(e,t){return e[3]?U:0==e[0].length?R:void 0}let me=ve(e),Ee=me&&me(e),xe=e[0],ye=[];for(let t=0;t<xe.length;t+=1)ye[t]=O(B(e,xe,t));const we=e=>y(ye[e],1,1,()=>{ye[e]=null});function _e(e,t){return 0==e[2]?X:e[0].length<10?W:Q}let Ae=_e(e),He=Ae(e);return{c(){t=s("title"),a=l("TesTus"),p=r(),g=r(),v=s("div"),m=s("a"),E=l("exporting"),w=r(),j=s("a"),N=l("exporting"),I=r(),T=s("a"),$=l("exporting"),L=r(),V=s("a"),b=l("exporting"),S=r(),k=s("a"),F=l("exporting"),M=r(),J=s("a"),K=l("exporting"),Y=r(),Z=s("a"),ee=l("exporting"),te=r(),ae=s("div"),de.c(),se=r(),ge.c(),re=r(),Ee&&Ee.c(),le=r(),ne=s("div");for(let e=0;e<ye.length;e+=1)ye[e].c();ce=r(),he=s("div"),He.c(),this.h()},l(e){t=n(e,"TITLE",{});var s=c(t);a=o(s,"TesTus"),s.forEach(i),p=h(e);_('[data-svelte="svelte-fphtuv"]',document.head).forEach(i),g=h(e),v=n(e,"DIV",{style:!0});var r=c(v);m=n(r,"A",{href:!0});var l=c(m);E=o(l,"exporting"),l.forEach(i),w=h(r),j=n(r,"A",{href:!0});var f=c(j);N=o(f,"exporting"),f.forEach(i),I=h(r),T=n(r,"A",{href:!0});var d=c(T);$=o(d,"exporting"),d.forEach(i),L=h(r),V=n(r,"A",{href:!0});var u=c(V);b=o(u,"exporting"),u.forEach(i),S=h(r),k=n(r,"A",{href:!0});var x=c(k);F=o(x,"exporting"),x.forEach(i),M=h(r),J=n(r,"A",{href:!0});var y=c(J);K=o(y,"exporting"),y.forEach(i),Y=h(r),Z=n(r,"A",{href:!0});var A=c(Z);ee=o(A,"exporting"),A.forEach(i),r.forEach(i),te=h(e),ae=n(e,"DIV",{class:!0});var H=c(ae);de.l(H),se=h(H),ge.l(H),H.forEach(i),re=h(e),Ee&&Ee.l(e),le=h(e),ne=n(e,"DIV",{class:!0});var P=c(ne);for(let e=0;e<ye.length;e+=1)ye[e].l(P);P.forEach(i),ce=h(e),he=n(e,"DIV",{class:!0});var D=c(he);He.l(D),D.forEach(i),this.h()},h(){document.title="Tests",f(m,"href","/test"),f(j,"href","/solution"),f(T,"href","/new_solution"),f(V,"href","/new_test"),f(k,"href","/solution_edit"),f(J,"href","/test_edit"),f(Z,"href","/debug"),A(v,"visibility","hidden"),f(ae,"class","title svelte-18ssdxp"),f(ne,"class","tests svelte-18ssdxp"),f(he,"class","bottom svelte-18ssdxp")},m(e,s){d(e,t,s),u(t,a),d(e,p,s),d(e,g,s),d(e,v,s),u(v,m),u(m,E),u(v,w),u(v,j),u(j,N),u(v,I),u(v,T),u(T,$),u(v,L),u(v,V),u(V,b),u(v,S),u(v,k),u(k,F),u(v,M),u(v,J),u(J,K),u(v,Y),u(v,Z),u(Z,ee),d(e,te,s),d(e,ae,s),de.m(ae,null),u(ae,se),ge.m(ae,null),d(e,re,s),Ee&&Ee.m(e,s),d(e,le,s),d(e,ne,s);for(let e=0;e<ye.length;e+=1)ye[e].m(ne,null);d(e,ce,s),d(e,he,s),He.m(he,null),oe=!0},p(e,[t]){if(fe===(fe=ie(e))&&de?de.p(e,t):(de.d(1),de=fe(e),de&&(de.c(),de.m(ae,se))),pe===(pe=ue(e))&&ge?ge.p(e,t):(ge.d(1),ge=pe(e),ge&&(ge.c(),ge.m(ae,null))),me===(me=ve(e))&&Ee?Ee.p(e,t):(Ee&&Ee.d(1),Ee=me&&me(e),Ee&&(Ee.c(),Ee.m(le.parentNode,le))),1&t){let a;for(xe=e[0],a=0;a<xe.length;a+=1){const s=B(e,xe,a);ye[a]?(ye[a].p(s,t),x(ye[a],1)):(ye[a]=O(s),ye[a].c(),x(ye[a],1),ye[a].m(ne,null))}for(D(),a=xe.length;a<ye.length;a+=1)we(a);H()}Ae===(Ae=_e(e))&&He?He.p(e,t):(He.d(1),He=Ae(e),He&&(He.c(),He.m(he,null)))},i(e){if(!oe){for(let e=0;e<xe.length;e+=1)x(ye[e]);oe=!0}},o(e){ye=ye.filter(Boolean);for(let e=0;e<ye.length;e+=1)y(ye[e]);oe=!1},d(e){e&&i(t),e&&i(p),e&&i(g),e&&i(v),e&&i(te),e&&i(ae),de.d(),ge.d(),e&&i(re),Ee&&Ee.d(e),e&&i(le),e&&i(ne),P(ye,e),e&&i(ce),e&&i(he),He.d()}}}function ee(e,t,a){let s=[],r={},l=null,n=!0,c=null;function h(){if(a(3,n=!0),"/"!=window.location.pathname)return;const e=new URL(location);a(2,l=e.searchParams.get("page")),null==l&&a(2,l="0"),a(2,l=parseInt(l)),a(4,c=e.searchParams.get("user")),T(r,null==c?"alltests/"+10*l:"alltests_by_user/"+10*l+"/"+c).then(e=>{a(0,s=e.data),a(3,n=!1)})}j(()=>{a(1,r=I()),window.addEventListener("locationchange",h),h()}),N(()=>{window.removeEventListener("locationchange",h)});return[s,r,l,n,c,h,()=>{h()}]}export default class extends e{constructor(e){super(),t(this,e,ee,Z,a,{})}}
