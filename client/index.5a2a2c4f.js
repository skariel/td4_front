import{S as t,i as e,s,e as a,a as r,t as l,c as n,b as c,d as h,f as o,g as i,h as f,j as d,k as u,l as p,n as v,m as g,o as m,p as E,q as x,r as y,u as w,v as _,w as A,x as H,y as P,z as j,A as N,B as D,C as I,D as T,E as $,F as L,G as V}from"./client.2a16bc57.js";function b(t){let e,s,g,m,E,x,y,w,_,A,H,P,j,N,D,I,T,$,L,V,b,S,k,B,G,q,z,C,F,M,R,U,J,K,O,Q,W,X,Y,Z,tt=t[0].display_name+"",et=t[0].id+"",st=t[0].title+"",at=t[0].descr+"",rt=t[0].ts_updated+"",lt=t[0].total_fail+"",nt=t[0].total_pass+"",ct=t[0].total_pending+"",ht=t[0].total_wip+"";return{c(){e=a("div"),s=a("div"),g=a("img"),E=r(),x=a("h4"),y=l(tt),w=r(),_=a("h4"),A=l(et),H=r(),P=a("h4"),j=l("Title: "),N=a("a"),D=l(st),T=r(),$=a("h4"),L=l("Descr: "),V=l(at),b=r(),S=a("h4"),k=l("u: "),B=l(rt),G=r(),q=a("h4"),z=l("fail "),C=l(lt),F=r(),M=a("h4"),R=l("pass "),U=l(nt),J=r(),K=a("h4"),O=l("pending "),Q=l(ct),W=r(),X=a("h4"),Y=l("wip "),Z=l(ht),this.h()},l(t){e=n(t,"DIV",{class:!0});var a=c(e);s=n(a,"DIV",{class:!0});var r=c(s);g=n(r,"IMG",{class:!0,src:!0,alt:!0}),E=h(r),x=n(r,"H4",{class:!0});var l=c(x);y=o(l,tt),l.forEach(i),w=h(r),_=n(r,"H4",{class:!0});var f=c(_);A=o(f,et),f.forEach(i),r.forEach(i),H=h(a),P=n(a,"H4",{class:!0});var d=c(P);j=o(d,"Title: "),N=n(d,"A",{href:!0});var u=c(N);D=o(u,st),u.forEach(i),d.forEach(i),T=h(a),$=n(a,"H4",{class:!0});var p=c($);L=o(p,"Descr: "),V=o(p,at),p.forEach(i),b=h(a),S=n(a,"H4",{class:!0});var v=c(S);k=o(v,"u: "),B=o(v,rt),v.forEach(i),G=h(a),q=n(a,"H4",{class:!0});var m=c(q);z=o(m,"fail "),C=o(m,lt),m.forEach(i),F=h(a),M=n(a,"H4",{class:!0});var I=c(M);R=o(I,"pass "),U=o(I,nt),I.forEach(i),J=h(a),K=n(a,"H4",{class:!0});var ot=c(K);O=o(ot,"pending "),Q=o(ot,ct),ot.forEach(i),W=h(a),X=n(a,"H4",{class:!0});var it=c(X);Y=o(it,"wip "),Z=o(it,ht),it.forEach(i),a.forEach(i),this.h()},h(){f(g,"class","avatar svelte-1u6ynj"),g.src!==(m=t[0].avatar)&&f(g,"src",m),f(g,"alt","avatar"),f(x,"class","displayname"),f(_,"class","testid svelte-1u6ynj"),f(s,"class","topbar svelte-1u6ynj"),f(N,"href",I="/test?id="+t[0].id+"&page=0"),f(P,"class","testtitle svelte-1u6ynj"),f($,"class","testdescr svelte-1u6ynj"),f(S,"class","updated svelte-1u6ynj"),f(q,"class","failed svelte-1u6ynj"),f(M,"class","passed svelte-1u6ynj"),f(K,"class","pending svelte-1u6ynj"),f(X,"class","wip svelte-1u6ynj"),f(e,"class","main svelte-1u6ynj")},m(t,a){d(t,e,a),u(e,s),u(s,g),u(s,E),u(s,x),u(x,y),u(s,w),u(s,_),u(_,A),u(e,H),u(e,P),u(P,j),u(P,N),u(N,D),u(e,T),u(e,$),u($,L),u($,V),u(e,b),u(e,S),u(S,k),u(S,B),u(e,G),u(e,q),u(q,z),u(q,C),u(e,F),u(e,M),u(M,R),u(M,U),u(e,J),u(e,K),u(K,O),u(K,Q),u(e,W),u(e,X),u(X,Y),u(X,Z)},p(t,[e]){1&e&&g.src!==(m=t[0].avatar)&&f(g,"src",m),1&e&&tt!==(tt=t[0].display_name+"")&&p(y,tt),1&e&&et!==(et=t[0].id+"")&&p(A,et),1&e&&st!==(st=t[0].title+"")&&p(D,st),1&e&&I!==(I="/test?id="+t[0].id+"&page=0")&&f(N,"href",I),1&e&&at!==(at=t[0].descr+"")&&p(V,at),1&e&&rt!==(rt=t[0].ts_updated+"")&&p(B,rt),1&e&&lt!==(lt=t[0].total_fail+"")&&p(C,lt),1&e&&nt!==(nt=t[0].total_pass+"")&&p(U,nt),1&e&&ct!==(ct=t[0].total_pending+"")&&p(Q,ct),1&e&&ht!==(ht=t[0].total_wip+"")&&p(Z,ht)},i:v,o:v,d(t){t&&i(e)}}}function S(t,e,s){let{test:a}=e;return t.$set=t=>{"test"in t&&s(0,a=t.test)},[a]}class k extends t{constructor(t){super(),e(this,t,S,b,s,{test:0})}}function B(t,e,s){const a=t.slice();return a[7]=e[s],a}function G(t){let e,s,r;return{c(){e=a("h1"),s=l("Showing tests for "),r=l(t[4])},l(a){e=n(a,"H1",{});var l=c(e);s=o(l,"Showing tests for "),r=o(l,t[4]),l.forEach(i)},m(t,a){d(t,e,a),u(e,s),u(e,r)},p(t,e){16&e&&p(r,t[4])},d(t){t&&i(e)}}}function q(t){let e,s;return{c(){e=a("h1"),s=l("Showing all tests")},l(t){e=n(t,"H1",{});var a=c(e);s=o(a,"Showing all tests"),a.forEach(i)},m(t,a){d(t,e,a),u(e,s)},p:v,d(t){t&&i(e)}}}function z(t){let e,s,r;return{c(){e=a("a"),s=l("Login to add a test"),this.h()},l(t){e=n(t,"A",{href:!0,class:!0});var a=c(e);s=o(a,"Login to add a test"),a.forEach(i),this.h()},h(){f(e,"href",r=$()),f(e,"class","svelte-18ssdxp")},m(t,a){d(t,e,a),u(e,s)},p:v,d(t){t&&i(e)}}}function C(t){let e,s,p;function v(t,e){return null!=t[4]?M:F}let g=v(t),m=g(t);return{c(){m.c(),e=r(),s=a("a"),p=l("Add Test"),this.h()},l(t){m.l(t),e=h(t),s=n(t,"A",{style:!0,href:!0,class:!0});var a=c(s);p=o(a,"Add Test"),a.forEach(i),this.h()},h(){f(s,"style","margin-right?:15px; margin-left:15px;"),f(s,"href","/new_test"),f(s,"class","svelte-18ssdxp")},m(t,a){m.m(t,a),d(t,e,a),d(t,s,a),u(s,p)},p(t,s){g===(g=v(t))&&m?m.p(t,s):(m.d(1),m=g(t),m&&(m.c(),m.m(e.parentNode,e)))},d(t){m.d(t),t&&i(e),t&&i(s)}}}function F(t){let e,s,r;return{c(){e=a("a"),s=l("my tests"),this.h()},l(t){e=n(t,"A",{style:!0,href:!0,class:!0});var a=c(e);s=o(a,"my tests"),a.forEach(i),this.h()},h(){f(e,"style","margin-right?:15px; margin-left:auto;"),f(e,"href",r="/?page=0&user="+t[1].display_name),f(e,"class","svelte-18ssdxp")},m(t,a){d(t,e,a),u(e,s)},p(t,s){2&s&&r!==(r="/?page=0&user="+t[1].display_name)&&f(e,"href",r)},d(t){t&&i(e)}}}function M(t){let e,s,r,h;return{c(){e=a("a"),s=l("all tests"),this.h()},l(t){e=n(t,"A",{style:!0,href:!0,class:!0});var a=c(e);s=o(a,"all tests"),a.forEach(i),this.h()},h(){f(e,"style","margin-right?:15px; margin-left:auto;"),f(e,"href","/?page=0"),f(e,"class","svelte-18ssdxp")},m(a,l){d(a,e,l),u(e,s),r||(h=V(e,"click",t[6]),r=!0)},p:v,d(t){t&&i(e),r=!1,h()}}}function R(t){let e;function s(t,e){return 0==t[2]?K:J}let a=s(t),r=a(t);return{c(){r.c(),e=L()},l(t){r.l(t),e=L()},m(t,s){r.m(t,s),d(t,e,s)},p(t,l){a!==(a=s(t))&&(r.d(1),r=a(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&i(e)}}}function U(t){let e,s;return{c(){e=a("h2"),s=l("Loading...")},l(t){e=n(t,"H2",{});var a=c(e);s=o(a,"Loading..."),a.forEach(i)},m(t,a){d(t,e,a),u(e,s)},p:v,d(t){t&&i(e)}}}function J(t){let e,s;return{c(){e=a("h2"),s=l("None on this page!")},l(t){e=n(t,"H2",{});var a=c(e);s=o(a,"None on this page!"),a.forEach(i)},m(t,a){d(t,e,a),u(e,s)},d(t){t&&i(e)}}}function K(t){let e,s;return{c(){e=a("h2"),s=l("None yet!")},l(t){e=n(t,"H2",{});var a=c(e);s=o(a,"None yet!"),a.forEach(i)},m(t,a){d(t,e,a),u(e,s)},d(t){t&&i(e)}}}function O(t){let e,s,l,o;return s=new k({props:{test:t[7]}}),{c(){e=a("div"),g(s.$$.fragment),l=r(),this.h()},l(t){e=n(t,"DIV",{class:!0});var a=c(e);m(s.$$.fragment,a),l=h(a),a.forEach(i),this.h()},h(){f(e,"class","testcard svelte-18ssdxp")},m(t,a){d(t,e,a),E(s,e,null),u(e,l),o=!0},p(t,e){const a={};1&e&&(a.test=t[7]),s.$set(a)},i(t){o||(x(s.$$.fragment,t),o=!0)},o(t){y(s.$$.fragment,t),o=!1},d(t){t&&i(e),w(s)}}}function Q(t){let e,s,p,v,g,m,E,x,y;return{c(){e=a("a"),s=l("Prev Page"),v=r(),g=a("div"),m=r(),E=a("a"),x=l("Next Page"),this.h()},l(t){e=n(t,"A",{href:!0});var a=c(e);s=o(a,"Prev Page"),a.forEach(i),v=h(t),g=n(t,"DIV",{class:!0}),c(g).forEach(i),m=h(t),E=n(t,"A",{href:!0});var r=c(E);x=o(r,"Next Page"),r.forEach(i),this.h()},h(){f(e,"href",p="/?page="+(t[2]-1)),f(g,"class","filler svelte-18ssdxp"),f(E,"href",y="/?page="+(t[2]+1))},m(t,a){d(t,e,a),u(e,s),d(t,v,a),d(t,g,a),d(t,m,a),d(t,E,a),u(E,x)},p(t,s){4&s&&p!==(p="/?page="+(t[2]-1))&&f(e,"href",p),4&s&&y!==(y="/?page="+(t[2]+1))&&f(E,"href",y)},d(t){t&&i(e),t&&i(v),t&&i(g),t&&i(m),t&&i(E)}}}function W(t){let e,s,r;return{c(){e=a("a"),s=l("Prev Page"),this.h()},l(t){e=n(t,"A",{href:!0});var a=c(e);s=o(a,"Prev Page"),a.forEach(i),this.h()},h(){f(e,"href",r="/?page="+(t[2]-1))},m(t,a){d(t,e,a),u(e,s)},p(t,s){4&s&&r!==(r="/?page="+(t[2]-1))&&f(e,"href",r)},d(t){t&&i(e)}}}function X(t){let e,s=10==t[0].length&&Y(t);return{c(){s&&s.c(),e=L()},l(t){s&&s.l(t),e=L()},m(t,a){s&&s.m(t,a),d(t,e,a)},p(t,a){10==t[0].length?s?s.p(t,a):(s=Y(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&i(e)}}}function Y(t){let e,s,r;return{c(){e=a("a"),s=l("Next Page"),this.h()},l(t){e=n(t,"A",{href:!0});var a=c(e);s=o(a,"Next Page"),a.forEach(i),this.h()},h(){f(e,"href",r="/?page="+(t[2]+1))},m(t,a){d(t,e,a),u(e,s)},p(t,s){4&s&&r!==(r="/?page="+(t[2]+1))&&f(e,"href",r)},d(t){t&&i(e)}}}function Z(t){let e,s,p,v,g,m,E,w,j,N,I,T,$,L,V,b,S,k,F,M,J,K,Y,Z,tt,et,st,at,rt,lt,nt;function ct(t,e){return null==t[4]?q:G}let ht=ct(t),ot=ht(t);function it(t,e){return null!=t[1].avatar?C:z}let ft=it(t),dt=ft(t);function ut(t,e){return t[3]?U:0==t[0].length?R:void 0}let pt=ut(t),vt=pt&&pt(t),gt=t[0],mt=[];for(let e=0;e<gt.length;e+=1)mt[e]=O(B(t,gt,e));const Et=t=>y(mt[t],1,1,()=>{mt[t]=null});function xt(t,e){return 0==t[2]?X:t[0].length<10?W:Q}let yt=xt(t),wt=yt(t);return{c(){e=a("title"),s=l("TesTus"),p=r(),v=r(),g=a("div"),m=a("a"),E=l("exporting"),w=r(),j=a("a"),N=l("exporting"),I=r(),T=a("a"),$=l("exporting"),L=r(),V=a("a"),b=l("exporting"),S=r(),k=a("a"),F=l("exporting"),M=r(),J=a("a"),K=l("exporting"),Y=r(),Z=a("div"),ot.c(),tt=r(),dt.c(),et=r(),vt&&vt.c(),st=r(),at=a("div");for(let t=0;t<mt.length;t+=1)mt[t].c();rt=r(),lt=a("div"),wt.c(),this.h()},l(t){e=n(t,"TITLE",{});var a=c(e);s=o(a,"TesTus"),a.forEach(i),p=h(t);_('[data-svelte="svelte-fphtuv"]',document.head).forEach(i),v=h(t),g=n(t,"DIV",{style:!0});var r=c(g);m=n(r,"A",{href:!0});var l=c(m);E=o(l,"exporting"),l.forEach(i),w=h(r),j=n(r,"A",{href:!0});var f=c(j);N=o(f,"exporting"),f.forEach(i),I=h(r),T=n(r,"A",{href:!0});var d=c(T);$=o(d,"exporting"),d.forEach(i),L=h(r),V=n(r,"A",{href:!0});var u=c(V);b=o(u,"exporting"),u.forEach(i),S=h(r),k=n(r,"A",{href:!0});var x=c(k);F=o(x,"exporting"),x.forEach(i),M=h(r),J=n(r,"A",{href:!0});var y=c(J);K=o(y,"exporting"),y.forEach(i),r.forEach(i),Y=h(t),Z=n(t,"DIV",{class:!0});var A=c(Z);ot.l(A),tt=h(A),dt.l(A),A.forEach(i),et=h(t),vt&&vt.l(t),st=h(t),at=n(t,"DIV",{class:!0});var H=c(at);for(let t=0;t<mt.length;t+=1)mt[t].l(H);H.forEach(i),rt=h(t),lt=n(t,"DIV",{class:!0});var P=c(lt);wt.l(P),P.forEach(i),this.h()},h(){document.title="Tests",f(m,"href","/test"),f(j,"href","/solution"),f(T,"href","/new_solution"),f(V,"href","/new_test"),f(k,"href","/solution_edit"),f(J,"href","/test_edit"),A(g,"visibility","hidden"),f(Z,"class","title svelte-18ssdxp"),f(at,"class","tests svelte-18ssdxp"),f(lt,"class","bottom svelte-18ssdxp")},m(t,a){d(t,e,a),u(e,s),d(t,p,a),d(t,v,a),d(t,g,a),u(g,m),u(m,E),u(g,w),u(g,j),u(j,N),u(g,I),u(g,T),u(T,$),u(g,L),u(g,V),u(V,b),u(g,S),u(g,k),u(k,F),u(g,M),u(g,J),u(J,K),d(t,Y,a),d(t,Z,a),ot.m(Z,null),u(Z,tt),dt.m(Z,null),d(t,et,a),vt&&vt.m(t,a),d(t,st,a),d(t,at,a);for(let t=0;t<mt.length;t+=1)mt[t].m(at,null);d(t,rt,a),d(t,lt,a),wt.m(lt,null),nt=!0},p(t,[e]){if(ht===(ht=ct(t))&&ot?ot.p(t,e):(ot.d(1),ot=ht(t),ot&&(ot.c(),ot.m(Z,tt))),ft===(ft=it(t))&&dt?dt.p(t,e):(dt.d(1),dt=ft(t),dt&&(dt.c(),dt.m(Z,null))),pt===(pt=ut(t))&&vt?vt.p(t,e):(vt&&vt.d(1),vt=pt&&pt(t),vt&&(vt.c(),vt.m(st.parentNode,st))),1&e){let s;for(gt=t[0],s=0;s<gt.length;s+=1){const a=B(t,gt,s);mt[s]?(mt[s].p(a,e),x(mt[s],1)):(mt[s]=O(a),mt[s].c(),x(mt[s],1),mt[s].m(at,null))}for(D(),s=gt.length;s<mt.length;s+=1)Et(s);H()}yt===(yt=xt(t))&&wt?wt.p(t,e):(wt.d(1),wt=yt(t),wt&&(wt.c(),wt.m(lt,null)))},i(t){if(!nt){for(let t=0;t<gt.length;t+=1)x(mt[t]);nt=!0}},o(t){mt=mt.filter(Boolean);for(let t=0;t<mt.length;t+=1)y(mt[t]);nt=!1},d(t){t&&i(e),t&&i(p),t&&i(v),t&&i(g),t&&i(Y),t&&i(Z),ot.d(),dt.d(),t&&i(et),vt&&vt.d(t),t&&i(st),t&&i(at),P(mt,t),t&&i(rt),t&&i(lt),wt.d()}}}function tt(t,e,s){let a=[],r={},l=null,n=!0,c=null;function h(){if(s(3,n=!0),"/"!=window.location.pathname)return;const t=new URL(location);s(2,l=t.searchParams.get("page")),null==l&&s(2,l="0"),s(2,l=parseInt(l)),s(4,c=t.searchParams.get("user")),T(r,null==c?"alltests/"+10*l:"alltests_by_user/"+10*l+"/"+c).then(t=>{s(0,a=t.data),s(3,n=!1)})}j(()=>{s(1,r=I()),window.addEventListener("locationchange",h),h()}),N(()=>{window.removeEventListener("locationchange",h)});return[a,r,l,n,c,h,()=>{h()}]}export default class extends t{constructor(t){super(),e(this,t,tt,Z,s,{})}}
