import{S as t,i as a,s,e,a as l,t as r,c as n,b as o,d as c,f as i,g as h,h as d,j as u,k as f,l as v,n as p,F as m,v as g,r as y,x as E,q as b,z as _,A as P,B as H,C as w,D as N,P as D,K as $,L as A,G as I,Q as x,N as T,w as V,m as L,o as S,p as B,u as k,y as G,E as O}from"./client.2a16bc57.js";function U(t){let a,s,m,g,y,E,b,_,P,H,w,N,D,$,A,I,x,T,V,L,S,B,k,G,O,U,C,M,R,q,z,F,K,Q=t[0].display_name+"",J=t[0].id+"",W=t[0].ts_created+"",X=t[0].ts_updated+"",Y=t[0].status+"",Z=j(t[0].ts_start)+"",tt=j(t[0].ts_end)+"";return{c(){a=e("div"),s=e("div"),m=e("img"),y=l(),E=e("h4"),b=r(Q),_=l(),P=e("h4"),H=e("a"),w=r("solution "),N=r(J),$=l(),A=e("h4"),I=r("c: "),x=r(W),T=l(),V=e("h4"),L=r("u: "),S=r(X),B=l(),k=e("h4"),G=r("Status: "),O=r(Y),U=l(),C=e("h4"),M=r("s: "),R=r(Z),q=l(),z=e("h4"),F=r("e: "),K=r(tt),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=o(a);s=n(e,"DIV",{class:!0});var l=o(s);m=n(l,"IMG",{class:!0,src:!0,alt:!0}),y=c(l),E=n(l,"H4",{class:!0});var r=o(E);b=i(r,Q),r.forEach(h),_=c(l),P=n(l,"H4",{class:!0});var d=o(P);H=n(d,"A",{href:!0});var u=o(H);w=i(u,"solution "),N=i(u,J),u.forEach(h),d.forEach(h),l.forEach(h),$=c(e),A=n(e,"H4",{class:!0});var f=o(A);I=i(f,"c: "),x=i(f,W),f.forEach(h),T=c(e),V=n(e,"H4",{class:!0});var v=o(V);L=i(v,"u: "),S=i(v,X),v.forEach(h),B=c(e),k=n(e,"H4",{class:!0});var p=o(k);G=i(p,"Status: "),O=i(p,Y),p.forEach(h),U=c(e),C=n(e,"H4",{class:!0});var g=o(C);M=i(g,"s: "),R=i(g,Z),g.forEach(h),q=c(e),z=n(e,"H4",{class:!0});var D=o(z);F=i(D,"e: "),K=i(D,tt),D.forEach(h),e.forEach(h),this.h()},h(){d(m,"class","avatar svelte-do48yb"),m.src!==(g=t[0].avatar)&&d(m,"src",g),d(m,"alt","avatar"),d(E,"class","displayname"),d(H,"href",D="/solution?id="+t[0].id),d(P,"class","solutionid svelte-do48yb"),d(s,"class","topbar svelte-do48yb"),d(A,"class","created svelte-do48yb"),d(V,"class","updated svelte-do48yb"),d(k,"class","status svelte-do48yb"),d(C,"class","started svelte-do48yb"),d(z,"class","ended svelte-do48yb"),d(a,"class","main svelte-do48yb")},m(t,e){u(t,a,e),f(a,s),f(s,m),f(s,y),f(s,E),f(E,b),f(s,_),f(s,P),f(P,H),f(H,w),f(H,N),f(a,$),f(a,A),f(A,I),f(A,x),f(a,T),f(a,V),f(V,L),f(V,S),f(a,B),f(a,k),f(k,G),f(k,O),f(a,U),f(a,C),f(C,M),f(C,R),f(a,q),f(a,z),f(z,F),f(z,K)},p(t,[a]){1&a&&m.src!==(g=t[0].avatar)&&d(m,"src",g),1&a&&Q!==(Q=t[0].display_name+"")&&v(b,Q),1&a&&J!==(J=t[0].id+"")&&v(N,J),1&a&&D!==(D="/solution?id="+t[0].id)&&d(H,"href",D),1&a&&W!==(W=t[0].ts_created+"")&&v(x,W),1&a&&X!==(X=t[0].ts_updated+"")&&v(S,X),1&a&&Y!==(Y=t[0].status+"")&&v(O,Y),1&a&&Z!==(Z=j(t[0].ts_start)+"")&&v(R,Z),1&a&&tt!==(tt=j(t[0].ts_end)+"")&&v(K,tt)},i:p,o:p,d(t){t&&h(a)}}}function j(t){return t.Valid?t.Time:"not started yet"}function C(t,a,s){let{solution:e}=a;return t.$set=t=>{"solution"in t&&s(0,e=t.solution)},[e]}class M extends t{constructor(t){super(),a(this,t,C,U,s,{solution:0})}}function R(t,a,s){const e=t.slice();return e[9]=a[s],e}function q(t){let a,s,p,m,g,_,P,w,N,D,$,A,I,x,T,V,L,S,B,k,O,U,j,C,M,q,z,et,lt,rt,nt,ot,ct=t[3].display_name+"",it=t[3].id+"",ht=t[3].title+"",dt=t[3].descr+"",ut=t[3].code+"",ft=t[0].display_name==t[3].display_name&&F(t);function vt(t,a){return t[4].length>0?J:0==t[1]?Q:K}let pt=vt(t),mt=pt(t);function gt(t,a){return null!=t[0].avatar?X:W}let yt=gt(t),Et=yt(t),bt=t[4].length>0&&Y(t),_t=t[4],Pt=[];for(let a=0;a<_t.length;a+=1)Pt[a]=Z(R(t,_t,a));const Ht=t=>y(Pt[t],1,1,()=>{Pt[t]=null});function wt(t,a){return 0==t[1]?st:t[4].length<10?at:tt}let Nt=wt(t),Dt=Nt(t);return{c(){a=e("div"),s=e("img"),m=l(),g=e("h4"),_=r(ct),P=l(),w=e("h4"),N=r("test "),D=r(it),$=l(),A=e("h3"),I=r("Title: "),x=r(ht),T=l(),V=e("p"),L=r("Description: "),S=r(dt),B=l(),ft&&ft.c(),k=l(),O=e("pre"),U=e("code"),j=r(ut),C=l(),M=e("div"),mt.c(),q=l(),Et.c(),z=l(),bt&&bt.c(),et=l(),lt=e("div");for(let t=0;t<Pt.length;t+=1)Pt[t].c();rt=l(),nt=e("div"),Dt.c(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=o(a);s=n(e,"IMG",{class:!0,src:!0,alt:!0}),m=c(e),g=n(e,"H4",{class:!0});var l=o(g);_=i(l,ct),l.forEach(h),P=c(e),w=n(e,"H4",{class:!0});var r=o(w);N=i(r,"test "),D=i(r,it),r.forEach(h),e.forEach(h),$=c(t),A=n(t,"H3",{});var d=o(A);I=i(d,"Title: "),x=i(d,ht),d.forEach(h),T=c(t),V=n(t,"P",{});var u=o(V);L=i(u,"Description: "),S=i(u,dt),u.forEach(h),B=c(t),ft&&ft.l(t),k=c(t),O=n(t,"PRE",{class:!0});var f=o(O);U=n(f,"CODE",{class:!0});var v=o(U);j=i(v,ut),v.forEach(h),f.forEach(h),C=c(t),M=n(t,"DIV",{class:!0});var p=o(M);mt.l(p),q=c(p),Et.l(p),p.forEach(h),z=c(t),bt&&bt.l(t),et=c(t),lt=n(t,"DIV",{class:!0});var y=o(lt);for(let t=0;t<Pt.length;t+=1)Pt[t].l(y);y.forEach(h),rt=c(t),nt=n(t,"DIV",{class:!0});var E=o(nt);Dt.l(E),E.forEach(h),this.h()},h(){d(s,"class","avatar svelte-1bb68iy"),s.src!==(p=t[3].avatar)&&d(s,"src",p),d(s,"alt","avatar"),d(g,"class","displayname"),d(w,"class","testid svelte-1bb68iy"),d(a,"class","top svelte-1bb68iy"),d(U,"class","svelte-1bb68iy"),d(O,"class","code svelte-1bb68iy"),d(M,"class","title svelte-1bb68iy"),d(lt,"class","solutions svelte-1bb68iy"),d(nt,"class","bottom svelte-1bb68iy")},m(t,e){u(t,a,e),f(a,s),f(a,m),f(a,g),f(g,_),f(a,P),f(a,w),f(w,N),f(w,D),u(t,$,e),u(t,A,e),f(A,I),f(A,x),u(t,T,e),u(t,V,e),f(V,L),f(V,S),u(t,B,e),ft&&ft.m(t,e),u(t,k,e),u(t,O,e),f(O,U),f(U,j),u(t,C,e),u(t,M,e),mt.m(M,null),f(M,q),Et.m(M,null),u(t,z,e),bt&&bt.m(t,e),u(t,et,e),u(t,lt,e);for(let t=0;t<Pt.length;t+=1)Pt[t].m(lt,null);u(t,rt,e),u(t,nt,e),Dt.m(nt,null),ot=!0},p(t,a){if((!ot||8&a&&s.src!==(p=t[3].avatar))&&d(s,"src",p),(!ot||8&a)&&ct!==(ct=t[3].display_name+"")&&v(_,ct),(!ot||8&a)&&it!==(it=t[3].id+"")&&v(D,it),(!ot||8&a)&&ht!==(ht=t[3].title+"")&&v(x,ht),(!ot||8&a)&&dt!==(dt=t[3].descr+"")&&v(S,dt),t[0].display_name==t[3].display_name?ft?ft.p(t,a):(ft=F(t),ft.c(),ft.m(k.parentNode,k)):ft&&(ft.d(1),ft=null),(!ot||8&a)&&ut!==(ut=t[3].code+"")&&v(j,ut),pt!==(pt=vt(t))&&(mt.d(1),mt=pt(t),mt&&(mt.c(),mt.m(M,q))),yt===(yt=gt(t))&&Et?Et.p(t,a):(Et.d(1),Et=yt(t),Et&&(Et.c(),Et.m(M,null))),t[4].length>0?bt?bt.p(t,a):(bt=Y(t),bt.c(),bt.m(et.parentNode,et)):bt&&(bt.d(1),bt=null),16&a){let s;for(_t=t[4],s=0;s<_t.length;s+=1){const e=R(t,_t,s);Pt[s]?(Pt[s].p(e,a),b(Pt[s],1)):(Pt[s]=Z(e),Pt[s].c(),b(Pt[s],1),Pt[s].m(lt,null))}for(H(),s=_t.length;s<Pt.length;s+=1)Ht(s);E()}Nt===(Nt=wt(t))&&Dt?Dt.p(t,a):(Dt.d(1),Dt=Nt(t),Dt&&(Dt.c(),Dt.m(nt,null)))},i(t){if(!ot){for(let t=0;t<_t.length;t+=1)b(Pt[t]);ot=!0}},o(t){Pt=Pt.filter(Boolean);for(let t=0;t<Pt.length;t+=1)y(Pt[t]);ot=!1},d(t){t&&h(a),t&&h($),t&&h(A),t&&h(T),t&&h(V),t&&h(B),ft&&ft.d(t),t&&h(k),t&&h(O),t&&h(C),t&&h(M),mt.d(),Et.d(),t&&h(z),bt&&bt.d(t),t&&h(et),t&&h(lt),G(Pt,t),t&&h(rt),t&&h(nt),Dt.d()}}}function z(t){let a,s;return{c(){a=e("h1"),s=r("Loading...")},l(t){a=n(t,"H1",{});var e=o(a);s=i(e,"Loading..."),e.forEach(h)},m(t,e){u(t,a,e),f(a,s)},p:p,i:p,o:p,d(t){t&&h(a)}}}function F(t){let a,s,d,v,p,m,g;return{c(){a=e("button"),s=r("Edit Test"),d=l(),v=e("button"),p=r("Permanently delete test")},l(t){a=n(t,"BUTTON",{});var e=o(a);s=i(e,"Edit Test"),e.forEach(h),d=c(t),v=n(t,"BUTTON",{});var l=o(v);p=i(l,"Permanently delete test"),l.forEach(h)},m(e,l){u(e,a,l),f(a,s),u(e,d,l),u(e,v,l),f(v,p),m||(g=[I(a,"click",(function(){x(A("/test_edit?id="+t[3].id))&&A("/test_edit?id="+t[3].id).apply(this,arguments)})),I(v,"click",t[7])],m=!0)},p(a,s){t=a},d(t){t&&h(a),t&&h(d),t&&h(v),m=!1,T(g)}}}function K(t){let a,s;return{c(){a=e("h1"),s=r("No solutions in this page!")},l(t){a=n(t,"H1",{});var e=o(a);s=i(e,"No solutions in this page!"),e.forEach(h)},m(t,e){u(t,a,e),f(a,s)},d(t){t&&h(a)}}}function Q(t){let a,s;return{c(){a=e("h1"),s=r("No solutions yet!")},l(t){a=n(t,"H1",{});var e=o(a);s=i(e,"No solutions yet!"),e.forEach(h)},m(t,e){u(t,a,e),f(a,s)},d(t){t&&h(a)}}}function J(t){let a,s;return{c(){a=e("h1"),s=r("All solutions")},l(t){a=n(t,"H1",{});var e=o(a);s=i(e,"All solutions"),e.forEach(h)},m(t,e){u(t,a,e),f(a,s)},d(t){t&&h(a)}}}function W(t){let a,s,l;return{c(){a=e("a"),s=r("Login to add a solution"),this.h()},l(t){a=n(t,"A",{href:!0,class:!0});var e=o(a);s=i(e,"Login to add a solution"),e.forEach(h),this.h()},h(){d(a,"href",l=O()),d(a,"class","svelte-1bb68iy")},m(t,e){u(t,a,e),f(a,s)},p:p,d(t){t&&h(a)}}}function X(t){let a,s,l;return{c(){a=e("a"),s=r("Add Solution"),this.h()},l(t){a=n(t,"A",{href:!0,class:!0});var e=o(a);s=i(e,"Add Solution"),e.forEach(h),this.h()},h(){d(a,"href",l="/new_solution?test_id="+t[2]),d(a,"class","svelte-1bb68iy")},m(t,e){u(t,a,e),f(a,s)},p(t,s){4&s&&l!==(l="/new_solution?test_id="+t[2])&&d(a,"href",l)},d(t){t&&h(a)}}}function Y(t){let a,s,p,m,g,y,E,b,_,P,H,w,N,D,$,A,I=t[3].total_fail+"",x=t[3].total_pass+"",T=t[3].total_pending+"",L=t[3].total_wip+"";return{c(){a=e("div"),s=e("h4"),p=r("fail: "),m=r(I),g=l(),y=e("h4"),E=r("pass: "),b=r(x),_=l(),P=e("h4"),H=r("pending: "),w=r(T),N=l(),D=e("h4"),$=r("wip: "),A=r(L),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=o(a);s=n(e,"H4",{});var l=o(s);p=i(l,"fail: "),m=i(l,I),l.forEach(h),g=c(e),y=n(e,"H4",{style:!0});var r=o(y);E=i(r,"pass: "),b=i(r,x),r.forEach(h),_=c(e),P=n(e,"H4",{style:!0});var d=o(P);H=i(d,"pending: "),w=i(d,T),d.forEach(h),N=c(e),D=n(e,"H4",{style:!0});var u=o(D);$=i(u,"wip: "),A=i(u,L),u.forEach(h),e.forEach(h),this.h()},h(){V(y,"margin-left","10px"),V(P,"margin-left","10px"),V(D,"margin-left","10px"),d(a,"class","teststat svelte-1bb68iy")},m(t,e){u(t,a,e),f(a,s),f(s,p),f(s,m),f(a,g),f(a,y),f(y,E),f(y,b),f(a,_),f(a,P),f(P,H),f(P,w),f(a,N),f(a,D),f(D,$),f(D,A)},p(t,a){8&a&&I!==(I=t[3].total_fail+"")&&v(m,I),8&a&&x!==(x=t[3].total_pass+"")&&v(b,x),8&a&&T!==(T=t[3].total_pending+"")&&v(w,T),8&a&&L!==(L=t[3].total_wip+"")&&v(A,L)},d(t){t&&h(a)}}}function Z(t){let a,s,r,i;return s=new M({props:{solution:t[9]}}),{c(){a=e("div"),L(s.$$.fragment),r=l(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=o(a);S(s.$$.fragment,e),r=c(e),e.forEach(h),this.h()},h(){d(a,"class","solutioncard svelte-1bb68iy")},m(t,e){u(t,a,e),B(s,a,null),f(a,r),i=!0},p(t,a){const e={};16&a&&(e.solution=t[9]),s.$set(e)},i(t){i||(b(s.$$.fragment,t),i=!0)},o(t){y(s.$$.fragment,t),i=!1},d(t){t&&h(a),k(s)}}}function tt(t){let a,s,v,p,m,g,y,E,b;return{c(){a=e("a"),s=r("Prev Page"),p=l(),m=e("div"),g=l(),y=e("a"),E=r("Next Page"),this.h()},l(t){a=n(t,"A",{href:!0});var e=o(a);s=i(e,"Prev Page"),e.forEach(h),p=c(t),m=n(t,"DIV",{class:!0}),o(m).forEach(h),g=c(t),y=n(t,"A",{href:!0});var l=o(y);E=i(l,"Next Page"),l.forEach(h),this.h()},h(){d(a,"href",v=t[6](t[1]-1)),d(m,"class","filler svelte-1bb68iy"),d(y,"href",b=t[6](t[1]+1))},m(t,e){u(t,a,e),f(a,s),u(t,p,e),u(t,m,e),u(t,g,e),u(t,y,e),f(y,E)},p(t,s){2&s&&v!==(v=t[6](t[1]-1))&&d(a,"href",v),2&s&&b!==(b=t[6](t[1]+1))&&d(y,"href",b)},d(t){t&&h(a),t&&h(p),t&&h(m),t&&h(g),t&&h(y)}}}function at(t){let a,s,l;return{c(){a=e("a"),s=r("Prev Page"),this.h()},l(t){a=n(t,"A",{href:!0});var e=o(a);s=i(e,"Prev Page"),e.forEach(h),this.h()},h(){d(a,"href",l=t[6](t[1]-1))},m(t,e){u(t,a,e),f(a,s)},p(t,s){2&s&&l!==(l=t[6](t[1]-1))&&d(a,"href",l)},d(t){t&&h(a)}}}function st(t){let a,s=10==t[4].length&&et(t);return{c(){s&&s.c(),a=m()},l(t){s&&s.l(t),a=m()},m(t,e){s&&s.m(t,e),u(t,a,e)},p(t,e){10==t[4].length?s?s.p(t,e):(s=et(t),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&h(a)}}}function et(t){let a,s,l;return{c(){a=e("a"),s=r("Next Page"),this.h()},l(t){a=n(t,"A",{href:!0});var e=o(a);s=i(e,"Next Page"),e.forEach(h),this.h()},h(){d(a,"href",l=t[6](t[1]+1))},m(t,e){u(t,a,e),f(a,s)},p(t,s){2&s&&l!==(l=t[6](t[1]+1))&&d(a,"href",l)},d(t){t&&h(a)}}}function lt(t){let a,s,e,r,n,o;document.title=a="Test "+t[2];const i=[z,q],d=[];function f(t,a){return t[5]>0?0:1}return e=f(t),r=d[e]=i[e](t),{c(){s=l(),r.c(),n=m()},l(t){g('[data-svelte="svelte-r3ylfy"]',document.head).forEach(h),s=c(t),r.l(t),n=m()},m(t,a){u(t,s,a),d[e].m(t,a),u(t,n,a),o=!0},p(t,[s]){(!o||4&s)&&a!==(a="Test "+t[2])&&(document.title=a);let l=e;e=f(t),e===l?d[e].p(t,s):(H(),y(d[l],1,1,()=>{d[l]=null}),E(),r=d[e],r||(r=d[e]=i[e](t),r.c()),b(r,1),r.m(n.parentNode,n))},i(t){o||(b(r),o=!0)},o(t){y(r),o=!1},d(t){t&&h(s),d[e].d(t),t&&h(n)}}}function rt(t,a,s){let e={},l=0,r=0,n=[],o=[],c=2;function i(){s(5,c=2);if("/test"!=window.location.pathname.replace(/\/+$/,""))return;const t=new URL(location);s(1,l=t.searchParams.get("page")),null==l&&s(1,l="0"),s(1,l=parseInt(l)),s(2,r=t.searchParams.get("id")),N(e,"test/"+r).then(t=>{s(3,n=t.data),s(5,c-=1)}),N(e,"solutions_by_test/"+r+"/"+10*l).then(t=>{s(4,o=t.data),s(5,c-=1)})}return _(async()=>{s(0,e=w()),window.addEventListener("locationchange",i),i()}),P(async()=>{window.removeEventListener("locationchange",i)}),[e,l,r,n,o,c,function(t){return`/test?id=${r}&page=${t}`},async function(){200==(await D(e,"delete_test/"+n.id)).status&&($(),A("/"))}]}export default class extends t{constructor(t){super(),a(this,t,rt,lt,s,{})}}
