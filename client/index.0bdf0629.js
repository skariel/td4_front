import{S as e,i as t,s,e as a,a as r,t as l,c as n,b as c,d as h,f as o,g as i,h as f,j as d,k as u,l as p,n as g,m as v,o as m,p as E,q as x,r as y,u as w,v as _,w as A,x as H,y as P,z as j,A as N,B as D,C as I,D as T,E as $,F as L,G as V}from"./client.b07728fc.js";function b(e){let t,s,v,m,E,x,y,w,_,A,H,P,j,N,D,I,T,$,L,V,b,S,k,B,G,q,z,C,F,M,R,U,J,K,O,Q,W,X,Y,Z,ee=e[0].display_name+"",te=e[0].id+"",se=e[0].title+"",ae=e[0].descr+"",re=e[0].ts_updated+"",le=e[0].total_fail+"",ne=e[0].total_pass+"",ce=e[0].total_pending+"",he=e[0].total_wip+"";return{c(){t=a("div"),s=a("div"),v=a("img"),E=r(),x=a("h4"),y=l(ee),w=r(),_=a("h4"),A=l(te),H=r(),P=a("h4"),j=l("Title: "),N=a("a"),D=l(se),T=r(),$=a("h4"),L=l("Descr: "),V=l(ae),b=r(),S=a("h4"),k=l("u: "),B=l(re),G=r(),q=a("h4"),z=l("fail "),C=l(le),F=r(),M=a("h4"),R=l("pass "),U=l(ne),J=r(),K=a("h4"),O=l("pending "),Q=l(ce),W=r(),X=a("h4"),Y=l("wip "),Z=l(he),this.h()},l(e){t=n(e,"DIV",{class:!0});var a=c(t);s=n(a,"DIV",{class:!0});var r=c(s);v=n(r,"IMG",{class:!0,src:!0,alt:!0}),E=h(r),x=n(r,"H4",{class:!0});var l=c(x);y=o(l,ee),l.forEach(i),w=h(r),_=n(r,"H4",{class:!0});var f=c(_);A=o(f,te),f.forEach(i),r.forEach(i),H=h(a),P=n(a,"H4",{class:!0});var d=c(P);j=o(d,"Title: "),N=n(d,"A",{href:!0});var u=c(N);D=o(u,se),u.forEach(i),d.forEach(i),T=h(a),$=n(a,"H4",{class:!0});var p=c($);L=o(p,"Descr: "),V=o(p,ae),p.forEach(i),b=h(a),S=n(a,"H4",{class:!0});var g=c(S);k=o(g,"u: "),B=o(g,re),g.forEach(i),G=h(a),q=n(a,"H4",{class:!0});var m=c(q);z=o(m,"fail "),C=o(m,le),m.forEach(i),F=h(a),M=n(a,"H4",{class:!0});var I=c(M);R=o(I,"pass "),U=o(I,ne),I.forEach(i),J=h(a),K=n(a,"H4",{class:!0});var oe=c(K);O=o(oe,"pending "),Q=o(oe,ce),oe.forEach(i),W=h(a),X=n(a,"H4",{class:!0});var ie=c(X);Y=o(ie,"wip "),Z=o(ie,he),ie.forEach(i),a.forEach(i),this.h()},h(){f(v,"class","avatar svelte-1u6ynj"),v.src!==(m=e[0].avatar)&&f(v,"src",m),f(v,"alt","avatar"),f(x,"class","displayname"),f(_,"class","testid svelte-1u6ynj"),f(s,"class","topbar svelte-1u6ynj"),f(N,"href",I="/test?id="+e[0].id+"&page=0"),f(P,"class","testtitle svelte-1u6ynj"),f($,"class","testdescr svelte-1u6ynj"),f(S,"class","updated svelte-1u6ynj"),f(q,"class","failed svelte-1u6ynj"),f(M,"class","passed svelte-1u6ynj"),f(K,"class","pending svelte-1u6ynj"),f(X,"class","wip svelte-1u6ynj"),f(t,"class","main svelte-1u6ynj")},m(e,a){d(e,t,a),u(t,s),u(s,v),u(s,E),u(s,x),u(x,y),u(s,w),u(s,_),u(_,A),u(t,H),u(t,P),u(P,j),u(P,N),u(N,D),u(t,T),u(t,$),u($,L),u($,V),u(t,b),u(t,S),u(S,k),u(S,B),u(t,G),u(t,q),u(q,z),u(q,C),u(t,F),u(t,M),u(M,R),u(M,U),u(t,J),u(t,K),u(K,O),u(K,Q),u(t,W),u(t,X),u(X,Y),u(X,Z)},p(e,[t]){1&t&&v.src!==(m=e[0].avatar)&&f(v,"src",m),1&t&&ee!==(ee=e[0].display_name+"")&&p(y,ee),1&t&&te!==(te=e[0].id+"")&&p(A,te),1&t&&se!==(se=e[0].title+"")&&p(D,se),1&t&&I!==(I="/test?id="+e[0].id+"&page=0")&&f(N,"href",I),1&t&&ae!==(ae=e[0].descr+"")&&p(V,ae),1&t&&re!==(re=e[0].ts_updated+"")&&p(B,re),1&t&&le!==(le=e[0].total_fail+"")&&p(C,le),1&t&&ne!==(ne=e[0].total_pass+"")&&p(U,ne),1&t&&ce!==(ce=e[0].total_pending+"")&&p(Q,ce),1&t&&he!==(he=e[0].total_wip+"")&&p(Z,he)},i:g,o:g,d(e){e&&i(t)}}}function S(e,t,s){let{test:a}=t;return e.$set=e=>{"test"in e&&s(0,a=e.test)},[a]}class k extends e{constructor(e){super(),t(this,e,S,b,s,{test:0})}}function B(e,t,s){const a=e.slice();return a[7]=t[s],a}function G(e){let t,s,r;return{c(){t=a("h1"),s=l("Showing tests for "),r=l(e[4])},l(a){t=n(a,"H1",{});var l=c(t);s=o(l,"Showing tests for "),r=o(l,e[4]),l.forEach(i)},m(e,a){d(e,t,a),u(t,s),u(t,r)},p(e,t){16&t&&p(r,e[4])},d(e){e&&i(t)}}}function q(e){let t,s;return{c(){t=a("h1"),s=l("Showing all tests")},l(e){t=n(e,"H1",{});var a=c(t);s=o(a,"Showing all tests"),a.forEach(i)},m(e,a){d(e,t,a),u(t,s)},p:g,d(e){e&&i(t)}}}function z(e){let t,s,r;return{c(){t=a("a"),s=l("Login to add a test"),this.h()},l(e){t=n(e,"A",{href:!0,class:!0});var a=c(t);s=o(a,"Login to add a test"),a.forEach(i),this.h()},h(){f(t,"href",r=$()),f(t,"class","svelte-18ssdxp")},m(e,a){d(e,t,a),u(t,s)},p:g,d(e){e&&i(t)}}}function C(e){let t,s,p;function g(e,t){return null!=e[4]?M:F}let v=g(e),m=v(e);return{c(){m.c(),t=r(),s=a("a"),p=l("Add Test"),this.h()},l(e){m.l(e),t=h(e),s=n(e,"A",{style:!0,href:!0,class:!0});var a=c(s);p=o(a,"Add Test"),a.forEach(i),this.h()},h(){f(s,"style","margin-right?:15px; margin-left:15px;"),f(s,"href","/new_test"),f(s,"class","svelte-18ssdxp")},m(e,a){m.m(e,a),d(e,t,a),d(e,s,a),u(s,p)},p(e,s){v===(v=g(e))&&m?m.p(e,s):(m.d(1),m=v(e),m&&(m.c(),m.m(t.parentNode,t)))},d(e){m.d(e),e&&i(t),e&&i(s)}}}function F(e){let t,s,r;return{c(){t=a("a"),s=l("my tests"),this.h()},l(e){t=n(e,"A",{style:!0,href:!0,class:!0});var a=c(t);s=o(a,"my tests"),a.forEach(i),this.h()},h(){f(t,"style","margin-right?:15px; margin-left:auto;"),f(t,"href",r="/?page=0&user="+e[1].display_name),f(t,"class","svelte-18ssdxp")},m(e,a){d(e,t,a),u(t,s)},p(e,s){2&s&&r!==(r="/?page=0&user="+e[1].display_name)&&f(t,"href",r)},d(e){e&&i(t)}}}function M(e){let t,s,r,h;return{c(){t=a("a"),s=l("all tests"),this.h()},l(e){t=n(e,"A",{style:!0,href:!0,class:!0});var a=c(t);s=o(a,"all tests"),a.forEach(i),this.h()},h(){f(t,"style","margin-right?:15px; margin-left:auto;"),f(t,"href","/?page=0"),f(t,"class","svelte-18ssdxp")},m(a,l){d(a,t,l),u(t,s),r||(h=V(t,"click",e[6]),r=!0)},p:g,d(e){e&&i(t),r=!1,h()}}}function R(e){let t;function s(e,t){return 0==e[2]?K:J}let a=s(e),r=a(e);return{c(){r.c(),t=L()},l(e){r.l(e),t=L()},m(e,s){r.m(e,s),d(e,t,s)},p(e,l){a!==(a=s(e))&&(r.d(1),r=a(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&i(t)}}}function U(e){let t,s;return{c(){t=a("h2"),s=l("Loading...")},l(e){t=n(e,"H2",{});var a=c(t);s=o(a,"Loading..."),a.forEach(i)},m(e,a){d(e,t,a),u(t,s)},p:g,d(e){e&&i(t)}}}function J(e){let t,s;return{c(){t=a("h2"),s=l("None on this page!")},l(e){t=n(e,"H2",{});var a=c(t);s=o(a,"None on this page!"),a.forEach(i)},m(e,a){d(e,t,a),u(t,s)},d(e){e&&i(t)}}}function K(e){let t,s;return{c(){t=a("h2"),s=l("None yet!")},l(e){t=n(e,"H2",{});var a=c(t);s=o(a,"None yet!"),a.forEach(i)},m(e,a){d(e,t,a),u(t,s)},d(e){e&&i(t)}}}function O(e){let t,s,l,o;return s=new k({props:{test:e[7]}}),{c(){t=a("div"),v(s.$$.fragment),l=r(),this.h()},l(e){t=n(e,"DIV",{class:!0});var a=c(t);m(s.$$.fragment,a),l=h(a),a.forEach(i),this.h()},h(){f(t,"class","testcard svelte-18ssdxp")},m(e,a){d(e,t,a),E(s,t,null),u(t,l),o=!0},p(e,t){const a={};1&t&&(a.test=e[7]),s.$set(a)},i(e){o||(x(s.$$.fragment,e),o=!0)},o(e){y(s.$$.fragment,e),o=!1},d(e){e&&i(t),w(s)}}}function Q(e){let t,s,p,g,v,m,E,x,y;return{c(){t=a("a"),s=l("Prev Page"),g=r(),v=a("div"),m=r(),E=a("a"),x=l("Next Page"),this.h()},l(e){t=n(e,"A",{href:!0});var a=c(t);s=o(a,"Prev Page"),a.forEach(i),g=h(e),v=n(e,"DIV",{class:!0}),c(v).forEach(i),m=h(e),E=n(e,"A",{href:!0});var r=c(E);x=o(r,"Next Page"),r.forEach(i),this.h()},h(){f(t,"href",p="/?page="+(e[2]-1)),f(v,"class","filler svelte-18ssdxp"),f(E,"href",y="/?page="+(e[2]+1))},m(e,a){d(e,t,a),u(t,s),d(e,g,a),d(e,v,a),d(e,m,a),d(e,E,a),u(E,x)},p(e,s){4&s&&p!==(p="/?page="+(e[2]-1))&&f(t,"href",p),4&s&&y!==(y="/?page="+(e[2]+1))&&f(E,"href",y)},d(e){e&&i(t),e&&i(g),e&&i(v),e&&i(m),e&&i(E)}}}function W(e){let t,s,r;return{c(){t=a("a"),s=l("Prev Page"),this.h()},l(e){t=n(e,"A",{href:!0});var a=c(t);s=o(a,"Prev Page"),a.forEach(i),this.h()},h(){f(t,"href",r="/?page="+(e[2]-1))},m(e,a){d(e,t,a),u(t,s)},p(e,s){4&s&&r!==(r="/?page="+(e[2]-1))&&f(t,"href",r)},d(e){e&&i(t)}}}function X(e){let t,s=10==e[0].length&&Y(e);return{c(){s&&s.c(),t=L()},l(e){s&&s.l(e),t=L()},m(e,a){s&&s.m(e,a),d(e,t,a)},p(e,a){10==e[0].length?s?s.p(e,a):(s=Y(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(e){s&&s.d(e),e&&i(t)}}}function Y(e){let t,s,r;return{c(){t=a("a"),s=l("Next Page"),this.h()},l(e){t=n(e,"A",{href:!0});var a=c(t);s=o(a,"Next Page"),a.forEach(i),this.h()},h(){f(t,"href",r="/?page="+(e[2]+1))},m(e,a){d(e,t,a),u(t,s)},p(e,s){4&s&&r!==(r="/?page="+(e[2]+1))&&f(t,"href",r)},d(e){e&&i(t)}}}function Z(e){let t,s,p,g,v,m,E,w,j,N,I,T,$,L,V,b,S,k,F,M,J,K,Y,Z,ee,te,se,ae,re,le,ne,ce,he,oe;function ie(e,t){return null==e[4]?q:G}let fe=ie(e),de=fe(e);function ue(e,t){return null!=e[1].avatar?C:z}let pe=ue(e),ge=pe(e);function ve(e,t){return e[3]?U:0==e[0].length?R:void 0}let me=ve(e),Ee=me&&me(e),xe=e[0],ye=[];for(let t=0;t<xe.length;t+=1)ye[t]=O(B(e,xe,t));const we=e=>y(ye[e],1,1,()=>{ye[e]=null});function _e(e,t){return 0==e[2]?X:e[0].length<10?W:Q}let Ae=_e(e),He=Ae(e);return{c(){t=a("title"),s=l("TesTus"),p=r(),g=r(),v=a("div"),m=a("a"),E=l("exporting"),w=r(),j=a("a"),N=l("exporting"),I=r(),T=a("a"),$=l("exporting"),L=r(),V=a("a"),b=l("exporting"),S=r(),k=a("a"),F=l("exporting"),M=r(),J=a("a"),K=l("exporting"),Y=r(),Z=a("a"),ee=l("exporting"),te=r(),se=a("div"),de.c(),ae=r(),ge.c(),re=r(),Ee&&Ee.c(),le=r(),ne=a("div");for(let e=0;e<ye.length;e+=1)ye[e].c();ce=r(),he=a("div"),He.c(),this.h()},l(e){t=n(e,"TITLE",{});var a=c(t);s=o(a,"TesTus"),a.forEach(i),p=h(e);_('[data-svelte="svelte-fphtuv"]',document.head).forEach(i),g=h(e),v=n(e,"DIV",{style:!0});var r=c(v);m=n(r,"A",{href:!0});var l=c(m);E=o(l,"exporting"),l.forEach(i),w=h(r),j=n(r,"A",{href:!0});var f=c(j);N=o(f,"exporting"),f.forEach(i),I=h(r),T=n(r,"A",{href:!0});var d=c(T);$=o(d,"exporting"),d.forEach(i),L=h(r),V=n(r,"A",{href:!0});var u=c(V);b=o(u,"exporting"),u.forEach(i),S=h(r),k=n(r,"A",{href:!0});var x=c(k);F=o(x,"exporting"),x.forEach(i),M=h(r),J=n(r,"A",{href:!0});var y=c(J);K=o(y,"exporting"),y.forEach(i),Y=h(r),Z=n(r,"A",{href:!0});var A=c(Z);ee=o(A,"exporting"),A.forEach(i),r.forEach(i),te=h(e),se=n(e,"DIV",{class:!0});var H=c(se);de.l(H),ae=h(H),ge.l(H),H.forEach(i),re=h(e),Ee&&Ee.l(e),le=h(e),ne=n(e,"DIV",{class:!0});var P=c(ne);for(let e=0;e<ye.length;e+=1)ye[e].l(P);P.forEach(i),ce=h(e),he=n(e,"DIV",{class:!0});var D=c(he);He.l(D),D.forEach(i),this.h()},h(){document.title="Tests",f(m,"href","/test"),f(j,"href","/solution"),f(T,"href","/new_solution"),f(V,"href","/new_test"),f(k,"href","/solution_edit"),f(J,"href","/test_edit"),f(Z,"href","/debug"),A(v,"visibility","hidden"),f(se,"class","title svelte-18ssdxp"),f(ne,"class","tests svelte-18ssdxp"),f(he,"class","bottom svelte-18ssdxp")},m(e,a){d(e,t,a),u(t,s),d(e,p,a),d(e,g,a),d(e,v,a),u(v,m),u(m,E),u(v,w),u(v,j),u(j,N),u(v,I),u(v,T),u(T,$),u(v,L),u(v,V),u(V,b),u(v,S),u(v,k),u(k,F),u(v,M),u(v,J),u(J,K),u(v,Y),u(v,Z),u(Z,ee),d(e,te,a),d(e,se,a),de.m(se,null),u(se,ae),ge.m(se,null),d(e,re,a),Ee&&Ee.m(e,a),d(e,le,a),d(e,ne,a);for(let e=0;e<ye.length;e+=1)ye[e].m(ne,null);d(e,ce,a),d(e,he,a),He.m(he,null),oe=!0},p(e,[t]){if(fe===(fe=ie(e))&&de?de.p(e,t):(de.d(1),de=fe(e),de&&(de.c(),de.m(se,ae))),pe===(pe=ue(e))&&ge?ge.p(e,t):(ge.d(1),ge=pe(e),ge&&(ge.c(),ge.m(se,null))),me===(me=ve(e))&&Ee?Ee.p(e,t):(Ee&&Ee.d(1),Ee=me&&me(e),Ee&&(Ee.c(),Ee.m(le.parentNode,le))),1&t){let s;for(xe=e[0],s=0;s<xe.length;s+=1){const a=B(e,xe,s);ye[s]?(ye[s].p(a,t),x(ye[s],1)):(ye[s]=O(a),ye[s].c(),x(ye[s],1),ye[s].m(ne,null))}for(D(),s=xe.length;s<ye.length;s+=1)we(s);H()}Ae===(Ae=_e(e))&&He?He.p(e,t):(He.d(1),He=Ae(e),He&&(He.c(),He.m(he,null)))},i(e){if(!oe){for(let e=0;e<xe.length;e+=1)x(ye[e]);oe=!0}},o(e){ye=ye.filter(Boolean);for(let e=0;e<ye.length;e+=1)y(ye[e]);oe=!1},d(e){e&&i(t),e&&i(p),e&&i(g),e&&i(v),e&&i(te),e&&i(se),de.d(),ge.d(),e&&i(re),Ee&&Ee.d(e),e&&i(le),e&&i(ne),P(ye,e),e&&i(ce),e&&i(he),He.d()}}}function ee(e,t,s){let a=[],r={},l=null,n=!0,c=null;function h(){if(s(3,n=!0),"/"!=window.location.pathname)return;const e=new URL(location);s(2,l=e.searchParams.get("page")),null==l&&s(2,l="0"),s(2,l=parseInt(l)),s(4,c=e.searchParams.get("user")),T(r,null==c?"alltests/"+10*l:"alltests_by_user/"+10*l+"/"+c).then(e=>{s(0,a=e.data),s(3,n=!1)})}j(()=>{s(1,r=I()),window.addEventListener("locationchange",h),h()}),N(()=>{window.removeEventListener("locationchange",h)});return[a,r,l,n,c,h,()=>{h()}]}export default class extends e{constructor(e){super(),t(this,e,ee,Z,s,{})}}
