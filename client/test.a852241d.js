import{S as t,i as s,s as a,e,a as l,t as r,c as n,b as o,d as c,f as i,g as h,h as u,j as d,k as f,l as v,n as p,w as m,m as g,o as E,p as y,q as _,r as H,u as P,v as w,H as D,N as j,M as A,x as I,y as N,z as $,A as x,B as V,C as T,D as b,E as L,F as S}from"./client.34de2fdb.js";function B(t){let s,a,m,g,E,y,_,H,P,w,D,j,A,I,N,$,x,V,T,b,L,S,B,k,C,G,O,R,U,q,z,F,J,K=t[0].display_name+"",Q=t[0].id+"",W=t[0].ts_created+"",X=t[0].ts_updated+"",Y=t[0].status+"",Z=M(t[0].ts_start)+"",tt=M(t[0].ts_end)+"";return{c(){s=e("div"),a=e("div"),m=e("img"),E=l(),y=e("h4"),_=r(K),H=l(),P=e("h4"),w=e("a"),D=r("solution "),j=r(Q),I=l(),N=e("h4"),$=r("c: "),x=r(W),V=l(),T=e("h4"),b=r("u: "),L=r(X),S=l(),B=e("h4"),k=r("Status: "),C=r(Y),G=l(),O=e("h4"),R=r("s: "),U=r(Z),q=l(),z=e("h4"),F=r("e: "),J=r(tt),this.h()},l(t){s=n(t,"DIV",{class:!0});var e=o(s);a=n(e,"DIV",{class:!0});var l=o(a);m=n(l,"IMG",{class:!0,src:!0,alt:!0}),E=c(l),y=n(l,"H4",{class:!0});var r=o(y);_=i(r,K),r.forEach(h),H=c(l),P=n(l,"H4",{class:!0});var u=o(P);w=n(u,"A",{href:!0});var d=o(w);D=i(d,"solution "),j=i(d,Q),d.forEach(h),u.forEach(h),l.forEach(h),I=c(e),N=n(e,"H4",{class:!0});var f=o(N);$=i(f,"c: "),x=i(f,W),f.forEach(h),V=c(e),T=n(e,"H4",{class:!0});var v=o(T);b=i(v,"u: "),L=i(v,X),v.forEach(h),S=c(e),B=n(e,"H4",{class:!0});var p=o(B);k=i(p,"Status: "),C=i(p,Y),p.forEach(h),G=c(e),O=n(e,"H4",{class:!0});var g=o(O);R=i(g,"s: "),U=i(g,Z),g.forEach(h),q=c(e),z=n(e,"H4",{class:!0});var A=o(z);F=i(A,"e: "),J=i(A,tt),A.forEach(h),e.forEach(h),this.h()},h(){u(m,"class","avatar svelte-1ahyjno"),m.src!==(g=t[0].avatar)&&u(m,"src",g),u(m,"alt","avatar"),u(y,"class","displayname svelte-1ahyjno"),u(w,"href",A="/solution?id="+t[0].id),u(P,"class","solutionid svelte-1ahyjno"),u(a,"class","topbar svelte-1ahyjno"),u(N,"class","created svelte-1ahyjno"),u(T,"class","updated svelte-1ahyjno"),u(B,"class","status svelte-1ahyjno"),u(O,"class","started svelte-1ahyjno"),u(z,"class","ended svelte-1ahyjno"),u(s,"class","main svelte-1ahyjno")},m(t,e){d(t,s,e),f(s,a),f(a,m),f(a,E),f(a,y),f(y,_),f(a,H),f(a,P),f(P,w),f(w,D),f(w,j),f(s,I),f(s,N),f(N,$),f(N,x),f(s,V),f(s,T),f(T,b),f(T,L),f(s,S),f(s,B),f(B,k),f(B,C),f(s,G),f(s,O),f(O,R),f(O,U),f(s,q),f(s,z),f(z,F),f(z,J)},p(t,[s]){1&s&&m.src!==(g=t[0].avatar)&&u(m,"src",g),1&s&&K!==(K=t[0].display_name+"")&&v(_,K),1&s&&Q!==(Q=t[0].id+"")&&v(j,Q),1&s&&A!==(A="/solution?id="+t[0].id)&&u(w,"href",A),1&s&&W!==(W=t[0].ts_created+"")&&v(x,W),1&s&&X!==(X=t[0].ts_updated+"")&&v(L,X),1&s&&Y!==(Y=t[0].status+"")&&v(C,Y),1&s&&Z!==(Z=M(t[0].ts_start)+"")&&v(U,Z),1&s&&tt!==(tt=M(t[0].ts_end)+"")&&v(J,tt)},i:p,o:p,d(t){t&&h(s)}}}function M(t){return t.Valid?t.Time:"not started yet"}function k(t,s,a){let{solution:e}=s;return t.$set=t=>{"solution"in t&&a(0,e=t.solution)},[e]}class C extends t{constructor(t){super(),s(this,t,k,B,a,{solution:0})}}function G(t,s,a){const e=t.slice();return e[7]=s[a],e}function O(t){let s,a;return{c(){s=e("h1"),a=r("No solutions in this page!")},l(t){s=n(t,"H1",{});var e=o(s);a=i(e,"No solutions in this page!"),e.forEach(h)},m(t,e){d(t,s,e),f(s,a)},d(t){t&&h(s)}}}function R(t){let s,a;return{c(){s=e("h1"),a=r("No solutions yet!")},l(t){s=n(t,"H1",{});var e=o(s);a=i(e,"No solutions yet!"),e.forEach(h)},m(t,e){d(t,s,e),f(s,a)},d(t){t&&h(s)}}}function U(t){let s,a;return{c(){s=e("h1"),a=r("All solutions")},l(t){s=n(t,"H1",{});var e=o(s);a=i(e,"All solutions"),e.forEach(h)},m(t,e){d(t,s,e),f(s,a)},d(t){t&&h(s)}}}function q(t){let s,a,l;return{c(){s=e("a"),a=r("Login to add a solution"),this.h()},l(t){s=n(t,"A",{href:!0,class:!0});var e=o(s);a=i(e,"Login to add a solution"),e.forEach(h),this.h()},h(){u(s,"href",l=L()),u(s,"class","svelte-4ulu0v")},m(t,e){d(t,s,e),f(s,a)},p:p,d(t){t&&h(s)}}}function z(t){let s,a,l;return{c(){s=e("a"),a=r("Add Solution"),this.h()},l(t){s=n(t,"A",{href:!0,class:!0});var e=o(s);a=i(e,"Add Solution"),e.forEach(h),this.h()},h(){u(s,"href",l="/new_solution?test_id="+t[2]),u(s,"class","svelte-4ulu0v")},m(t,e){d(t,s,e),f(s,a)},p(t,a){4&a&&l!==(l="/new_solution?test_id="+t[2])&&u(s,"href",l)},d(t){t&&h(s)}}}function F(t){let s,a,p,g,E,y,_,H,P,w,D,j,A,I,N,$,x=t[3].total_fail+"",V=t[3].total_pass+"",T=t[3].total_pending+"",b=t[3].total_wip+"";return{c(){s=e("div"),a=e("h4"),p=r("fail: "),g=r(x),E=l(),y=e("h4"),_=r("pass: "),H=r(V),P=l(),w=e("h4"),D=r("pending: "),j=r(T),A=l(),I=e("h4"),N=r("wip: "),$=r(b),this.h()},l(t){s=n(t,"DIV",{class:!0});var e=o(s);a=n(e,"H4",{});var l=o(a);p=i(l,"fail: "),g=i(l,x),l.forEach(h),E=c(e),y=n(e,"H4",{style:!0});var r=o(y);_=i(r,"pass: "),H=i(r,V),r.forEach(h),P=c(e),w=n(e,"H4",{style:!0});var u=o(w);D=i(u,"pending: "),j=i(u,T),u.forEach(h),A=c(e),I=n(e,"H4",{style:!0});var d=o(I);N=i(d,"wip: "),$=i(d,b),d.forEach(h),e.forEach(h),this.h()},h(){m(y,"margin-left","10px"),m(w,"margin-left","10px"),m(I,"margin-left","10px"),u(s,"class","teststat svelte-4ulu0v")},m(t,e){d(t,s,e),f(s,a),f(a,p),f(a,g),f(s,E),f(s,y),f(y,_),f(y,H),f(s,P),f(s,w),f(w,D),f(w,j),f(s,A),f(s,I),f(I,N),f(I,$)},p(t,s){8&s&&x!==(x=t[3].total_fail+"")&&v(g,x),8&s&&V!==(V=t[3].total_pass+"")&&v(H,V),8&s&&T!==(T=t[3].total_pending+"")&&v(j,T),8&s&&b!==(b=t[3].total_wip+"")&&v($,b)},d(t){t&&h(s)}}}function J(t){let s,a,r,i;return a=new C({props:{solution:t[7]}}),{c(){s=e("div"),g(a.$$.fragment),r=l(),this.h()},l(t){s=n(t,"DIV",{class:!0});var e=o(s);E(a.$$.fragment,e),r=c(e),e.forEach(h),this.h()},h(){u(s,"class","solutioncard svelte-4ulu0v")},m(t,e){d(t,s,e),y(a,s,null),f(s,r),i=!0},p(t,s){const e={};16&s&&(e.solution=t[7]),a.$set(e)},i(t){i||(_(a.$$.fragment,t),i=!0)},o(t){H(a.$$.fragment,t),i=!1},d(t){t&&h(s),P(a)}}}function K(t){let s,a,v,p,m,g,E,y,_;return{c(){s=e("a"),a=r("Prev Page"),p=l(),m=e("div"),g=l(),E=e("a"),y=r("Next Page"),this.h()},l(t){s=n(t,"A",{href:!0});var e=o(s);a=i(e,"Prev Page"),e.forEach(h),p=c(t),m=n(t,"DIV",{class:!0}),o(m).forEach(h),g=c(t),E=n(t,"A",{href:!0});var l=o(E);y=i(l,"Next Page"),l.forEach(h),this.h()},h(){u(s,"href",v=t[5](t[1]-1)),u(m,"class","filler"),u(E,"href",_=t[5](t[1]+1))},m(t,e){d(t,s,e),f(s,a),d(t,p,e),d(t,m,e),d(t,g,e),d(t,E,e),f(E,y)},p(t,a){2&a&&v!==(v=t[5](t[1]-1))&&u(s,"href",v),2&a&&_!==(_=t[5](t[1]+1))&&u(E,"href",_)},d(t){t&&h(s),t&&h(p),t&&h(m),t&&h(g),t&&h(E)}}}function Q(t){let s,a,l;return{c(){s=e("a"),a=r("Prev Page"),this.h()},l(t){s=n(t,"A",{href:!0});var e=o(s);a=i(e,"Prev Page"),e.forEach(h),this.h()},h(){u(s,"href",l=t[5](t[1]-1))},m(t,e){d(t,s,e),f(s,a)},p(t,a){2&a&&l!==(l=t[5](t[1]-1))&&u(s,"href",l)},d(t){t&&h(s)}}}function W(t){let s,a=10==t[4].length&&X(t);return{c(){a&&a.c(),s=S()},l(t){a&&a.l(t),s=S()},m(t,e){a&&a.m(t,e),d(t,s,e)},p(t,e){10==t[4].length?a?a.p(t,e):(a=X(t),a.c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&h(s)}}}function X(t){let s,a,l;return{c(){s=e("a"),a=r("Next Page"),this.h()},l(t){s=n(t,"A",{href:!0});var e=o(s);a=i(e,"Next Page"),e.forEach(h),this.h()},h(){u(s,"href",l=t[5](t[1]+1))},m(t,e){d(t,s,e),f(s,a)},p(t,a){2&a&&l!==(l=t[5](t[1]+1))&&u(s,"href",l)},d(t){t&&h(s)}}}function Y(t){let s,a,p,m,g,E,y,P,$,x,T,b,L,S,B,M,k,C,X,Y,Z,tt,st,at,et,lt,rt,nt,ot,ct,it,ht,ut,dt,ft,vt,pt,mt,gt=t[3].display_name+"",Et=t[3].id+"",yt=t[3].title+"",_t=t[3].descr+"",Ht=t[3].code+"";function Pt(t,s){return t[4].length>0?U:0==t[1]?R:O}document.title=s="Test "+t[2];let wt=Pt(t),Dt=wt(t);function jt(t,s){return null!=t[0].avatar?z:q}let At=jt(t),It=At(t),Nt=t[4].length>0&&F(t),$t=t[4],xt=[];for(let s=0;s<$t.length;s+=1)xt[s]=J(G(t,$t,s));const Vt=t=>H(xt[t],1,1,()=>{xt[t]=null});function Tt(t,s){return 0==t[1]?W:t[4].length<10?Q:K}let bt=Tt(t),Lt=bt(t);return{c(){a=l(),p=e("div"),m=e("img"),E=l(),y=e("h4"),P=r(gt),$=l(),x=e("h4"),T=r("test "),b=r(Et),L=l(),S=e("h3"),B=r("Title: "),M=r(yt),k=l(),C=e("p"),X=r("Description: "),Y=r(_t),Z=l(),tt=e("button"),st=r("Edit Test"),at=l(),et=e("pre"),lt=e("code"),rt=r(Ht),nt=l(),ot=e("div"),Dt.c(),ct=l(),It.c(),it=l(),Nt&&Nt.c(),ht=l(),ut=e("div");for(let t=0;t<xt.length;t+=1)xt[t].c();dt=l(),ft=e("div"),Lt.c(),this.h()},l(t){w('[data-svelte="svelte-r3ylfy"]',document.head).forEach(h),a=c(t),p=n(t,"DIV",{class:!0});var s=o(p);m=n(s,"IMG",{class:!0,src:!0,alt:!0}),E=c(s),y=n(s,"H4",{class:!0});var e=o(y);P=i(e,gt),e.forEach(h),$=c(s),x=n(s,"H4",{class:!0});var l=o(x);T=i(l,"test "),b=i(l,Et),l.forEach(h),s.forEach(h),L=c(t),S=n(t,"H3",{});var r=o(S);B=i(r,"Title: "),M=i(r,yt),r.forEach(h),k=c(t),C=n(t,"P",{});var u=o(C);X=i(u,"Description: "),Y=i(u,_t),u.forEach(h),Z=c(t),tt=n(t,"BUTTON",{});var d=o(tt);st=i(d,"Edit Test"),d.forEach(h),at=c(t),et=n(t,"PRE",{class:!0});var f=o(et);lt=n(f,"CODE",{class:!0});var v=o(lt);rt=i(v,Ht),v.forEach(h),f.forEach(h),nt=c(t),ot=n(t,"DIV",{class:!0});var g=o(ot);Dt.l(g),ct=c(g),It.l(g),g.forEach(h),it=c(t),Nt&&Nt.l(t),ht=c(t),ut=n(t,"DIV",{class:!0});var _=o(ut);for(let t=0;t<xt.length;t+=1)xt[t].l(_);_.forEach(h),dt=c(t),ft=n(t,"DIV",{class:!0});var H=o(ft);Lt.l(H),H.forEach(h),this.h()},h(){u(m,"class","avatar svelte-4ulu0v"),m.src!==(g=t[3].avatar)&&u(m,"src",g),u(m,"alt","avatar"),u(y,"class","displayname"),u(x,"class","testid svelte-4ulu0v"),u(p,"class","top svelte-4ulu0v"),u(lt,"class","svelte-4ulu0v"),u(et,"class","code svelte-4ulu0v"),u(ot,"class","title svelte-4ulu0v"),u(ut,"class","solutions svelte-4ulu0v"),u(ft,"class","bottom svelte-4ulu0v")},m(s,e){d(s,a,e),d(s,p,e),f(p,m),f(p,E),f(p,y),f(y,P),f(p,$),f(p,x),f(x,T),f(x,b),d(s,L,e),d(s,S,e),f(S,B),f(S,M),d(s,k,e),d(s,C,e),f(C,X),f(C,Y),d(s,Z,e),d(s,tt,e),f(tt,st),d(s,at,e),d(s,et,e),f(et,lt),f(lt,rt),d(s,nt,e),d(s,ot,e),Dt.m(ot,null),f(ot,ct),It.m(ot,null),d(s,it,e),Nt&&Nt.m(s,e),d(s,ht,e),d(s,ut,e);for(let t=0;t<xt.length;t+=1)xt[t].m(ut,null);d(s,dt,e),d(s,ft,e),Lt.m(ft,null),vt=!0,pt||(mt=D(tt,"click",(function(){j(A("/test_edit?id="+t[3].id))&&A("/test_edit?id="+t[3].id).apply(this,arguments)})),pt=!0)},p(a,[e]){if(t=a,(!vt||4&e)&&s!==(s="Test "+t[2])&&(document.title=s),(!vt||8&e&&m.src!==(g=t[3].avatar))&&u(m,"src",g),(!vt||8&e)&&gt!==(gt=t[3].display_name+"")&&v(P,gt),(!vt||8&e)&&Et!==(Et=t[3].id+"")&&v(b,Et),(!vt||8&e)&&yt!==(yt=t[3].title+"")&&v(M,yt),(!vt||8&e)&&_t!==(_t=t[3].descr+"")&&v(Y,_t),(!vt||8&e)&&Ht!==(Ht=t[3].code+"")&&v(rt,Ht),wt!==(wt=Pt(t))&&(Dt.d(1),Dt=wt(t),Dt&&(Dt.c(),Dt.m(ot,ct))),At===(At=jt(t))&&It?It.p(t,e):(It.d(1),It=At(t),It&&(It.c(),It.m(ot,null))),t[4].length>0?Nt?Nt.p(t,e):(Nt=F(t),Nt.c(),Nt.m(ht.parentNode,ht)):Nt&&(Nt.d(1),Nt=null),16&e){let s;for($t=t[4],s=0;s<$t.length;s+=1){const a=G(t,$t,s);xt[s]?(xt[s].p(a,e),_(xt[s],1)):(xt[s]=J(a),xt[s].c(),_(xt[s],1),xt[s].m(ut,null))}for(V(),s=$t.length;s<xt.length;s+=1)Vt(s);I()}bt===(bt=Tt(t))&&Lt?Lt.p(t,e):(Lt.d(1),Lt=bt(t),Lt&&(Lt.c(),Lt.m(ft,null)))},i(t){if(!vt){for(let t=0;t<$t.length;t+=1)_(xt[t]);vt=!0}},o(t){xt=xt.filter(Boolean);for(let t=0;t<xt.length;t+=1)H(xt[t]);vt=!1},d(t){t&&h(a),t&&h(p),t&&h(L),t&&h(S),t&&h(k),t&&h(C),t&&h(Z),t&&h(tt),t&&h(at),t&&h(et),t&&h(nt),t&&h(ot),Dt.d(),It.d(),t&&h(it),Nt&&Nt.d(t),t&&h(ht),t&&h(ut),N(xt,t),t&&h(dt),t&&h(ft),Lt.d(),pt=!1,mt()}}}function Z(t,s,a){let e={},l=0,r=0,n=[],o=[];function c(){if("/test"!=window.location.pathname)return;const t=new URL(location);a(1,l=t.searchParams.get("page")),null==l&&a(1,l="0"),a(1,l=parseInt(l)),a(2,r=t.searchParams.get("id")),b(e,"test/"+r).then(t=>{a(3,n=t.data)}),b(e,"solutions_by_test/"+r+"/"+10*l).then(t=>{a(4,o=t.data)})}return $(async()=>{a(0,e=T()),window.addEventListener("locationchange",c),c()}),x(async()=>{window.removeEventListener("locationchange",c)}),[e,l,r,n,o,function(t){return`/test?id=${r}&page=${t}`}]}export default class extends t{constructor(t){super(),s(this,t,Z,Y,a,{})}}
