import{S as t,i as s,s as a,a as e,F as l,v as o,g as c,d as r,j as n,n as i,z as d,C as u,D as h,P as f,K as v,L as m,t as p,f as E,e as _,c as k,b as y,k as b,G as w,Q as g,N,h as H,w as S,l as D}from"./client.571b5d3d.js";function P(t){let s,a,o,i,d,u,h,f,v,m,w,g,N,P,C,T,U,V,j,B,G,L,z,A,F,K,M,Q,q,J=t[2].display_name+"",W=t[2].id+"",X=t[2].test_code_id+"",Y=t[2].status+"",Z=t[2].code+"",$="stop"==t[2].status&&R(),tt=t[0].display_name==t[2].display_name&&x(t);function st(t,s){return t[3].length>0?O:I}let at=st(t),et=at(t);return{c(){s=_("div"),a=_("img"),i=e(),d=_("h4"),u=p(J),h=e(),f=_("h4"),v=p("solution "),m=p(W),w=e(),g=_("h4"),N=p("Solution for "),P=_("a"),C=p("test "),T=p(X),V=e(),j=_("h4"),B=p("status: "),G=p(Y),L=e(),$&&$.c(),z=e(),tt&&tt.c(),A=e(),F=_("pre"),K=_("code"),M=p(Z),Q=e(),et.c(),q=l(),this.h()},l(t){s=k(t,"DIV",{class:!0});var e=y(s);a=k(e,"IMG",{class:!0,src:!0,alt:!0}),i=r(e),d=k(e,"H4",{class:!0});var o=y(d);u=E(o,J),o.forEach(c),h=r(e),f=k(e,"H4",{class:!0});var n=y(f);v=E(n,"solution "),m=E(n,W),n.forEach(c),e.forEach(c),w=r(t),g=k(t,"H4",{style:!0});var p=y(g);N=E(p,"Solution for "),P=k(p,"A",{href:!0});var _=y(P);C=E(_,"test "),T=E(_,X),_.forEach(c),p.forEach(c),V=r(t),j=k(t,"H4",{});var b=y(j);B=E(b,"status: "),G=E(b,Y),L=r(b),$&&$.l(b),b.forEach(c),z=r(t),tt&&tt.l(t),A=r(t),F=k(t,"PRE",{class:!0});var H=y(F);K=k(H,"CODE",{class:!0});var S=y(K);M=E(S,Z),S.forEach(c),H.forEach(c),Q=r(t),et.l(t),q=l(),this.h()},h(){H(a,"class","avatar svelte-1bwkf1k"),a.src!==(o=t[2].avatar)&&H(a,"src",o),H(a,"alt","avatar"),H(d,"class","displayname"),H(f,"class","solutionid svelte-1bwkf1k"),H(s,"class","top svelte-1bwkf1k"),H(P,"href",U="/test?id="+t[2].test_code_id),S(g,"margin-top","10px"),H(K,"class","svelte-1bwkf1k"),H(F,"class","code svelte-1bwkf1k")},m(t,e){n(t,s,e),b(s,a),b(s,i),b(s,d),b(d,u),b(s,h),b(s,f),b(f,v),b(f,m),n(t,w,e),n(t,g,e),b(g,N),b(g,P),b(P,C),b(P,T),n(t,V,e),n(t,j,e),b(j,B),b(j,G),b(j,L),$&&$.m(j,null),n(t,z,e),tt&&tt.m(t,e),n(t,A,e),n(t,F,e),b(F,K),b(K,M),n(t,Q,e),et.m(t,e),n(t,q,e)},p(t,s){4&s&&a.src!==(o=t[2].avatar)&&H(a,"src",o),4&s&&J!==(J=t[2].display_name+"")&&D(u,J),4&s&&W!==(W=t[2].id+"")&&D(m,W),4&s&&X!==(X=t[2].test_code_id+"")&&D(T,X),4&s&&U!==(U="/test?id="+t[2].test_code_id)&&H(P,"href",U),4&s&&Y!==(Y=t[2].status+"")&&D(G,Y),"stop"==t[2].status?$||($=R(),$.c(),$.m(j,null)):$&&($.d(1),$=null),t[0].display_name==t[2].display_name?tt?tt.p(t,s):(tt=x(t),tt.c(),tt.m(A.parentNode,A)):tt&&(tt.d(1),tt=null),4&s&&Z!==(Z=t[2].code+"")&&D(M,Z),at===(at=st(t))&&et?et.p(t,s):(et.d(1),et=at(t),et&&(et.c(),et.m(q.parentNode,q)))},d(t){t&&c(s),t&&c(w),t&&c(g),t&&c(V),t&&c(j),$&&$.d(),t&&c(z),tt&&tt.d(t),t&&c(A),t&&c(F),t&&c(Q),et.d(t),t&&c(q)}}}function C(t){let s,a;return{c(){s=_("h1"),a=p("loading...")},l(t){s=k(t,"H1",{});var e=y(s);a=E(e,"loading..."),e.forEach(c)},m(t,e){n(t,s,e),b(s,a)},p:i,d(t){t&&c(s)}}}function R(t){let s;return{c(){s=p("(timeout)")},l(t){s=E(t,"(timeout)")},m(t,a){n(t,s,a)},d(t){t&&c(s)}}}function x(t){let s,a,l,o,i,d,u;return{c(){s=_("button"),a=p("Edit Code"),l=e(),o=_("button"),i=p("Permanently delete solution")},l(t){s=k(t,"BUTTON",{});var e=y(s);a=E(e,"Edit Code"),e.forEach(c),l=r(t),o=k(t,"BUTTON",{});var n=y(o);i=E(n,"Permanently delete solution"),n.forEach(c)},m(e,c){n(e,s,c),b(s,a),n(e,l,c),n(e,o,c),b(o,i),d||(u=[w(s,"click",(function(){g(m("/solution_edit?id="+t[2].id))&&m("/solution_edit?id="+t[2].id).apply(this,arguments)})),w(o,"click",t[5])],d=!0)},p(s,a){t=s},d(t){t&&c(s),t&&c(l),t&&c(o),d=!1,N(u)}}}function I(t){let s,a,e;return{c(){s=_("div"),a=_("h1"),e=p("No result yet"),this.h()},l(t){s=k(t,"DIV",{class:!0});var l=y(s);a=k(l,"H1",{});var o=y(a);e=E(o,"No result yet"),o.forEach(c),l.forEach(c),this.h()},h(){H(s,"class","title svelte-1bwkf1k")},m(t,l){n(t,s,l),b(s,a),b(a,e)},p:i,d(t){t&&c(s)}}}function O(t){let s,a,l,o,i,d,u,h=t[3][0].output.String+"";return{c(){s=_("div"),a=_("h1"),l=p("Results:"),o=e(),i=_("pre"),d=_("code"),u=p(h),this.h()},l(t){s=k(t,"DIV",{class:!0});var e=y(s);a=k(e,"H1",{});var n=y(a);l=E(n,"Results:"),n.forEach(c),e.forEach(c),o=r(t),i=k(t,"PRE",{class:!0});var f=y(i);d=k(f,"CODE",{class:!0});var v=y(d);u=E(v,h),v.forEach(c),f.forEach(c),this.h()},h(){H(s,"class","title svelte-1bwkf1k"),H(d,"class","svelte-1bwkf1k"),H(i,"class","code svelte-1bwkf1k")},m(t,e){n(t,s,e),b(s,a),b(a,l),n(t,o,e),n(t,i,e),b(i,d),b(d,u)},p(t,s){8&s&&h!==(h=t[3][0].output.String+"")&&D(u,h)},d(t){t&&c(s),t&&c(o),t&&c(i)}}}function T(t){let s,a,d;function u(t,s){return t[4]>0?C:P}document.title=s="Solution "+t[1];let h=u(t),f=h(t);return{c(){a=e(),f.c(),d=l()},l(t){o('[data-svelte="svelte-lxanm"]',document.head).forEach(c),a=r(t),f.l(t),d=l()},m(t,s){n(t,a,s),f.m(t,s),n(t,d,s)},p(t,[a]){2&a&&s!==(s="Solution "+t[1])&&(document.title=s),h===(h=u(t))&&f?f.p(t,a):(f.d(1),f=h(t),f&&(f.c(),f.m(d.parentNode,d)))},i:i,o:i,d(t){t&&c(a),f.d(t),t&&c(d)}}}function U(t,s,a){let e={},l=0,o=[],c=[],r=2;return d(async()=>{a(0,e=u()),async function(){a(4,r=2);const t=new URL(location);a(1,l=t.searchParams.get("id"));let s=await h(e,"solution/"+l);a(2,o=s.data),s=await h(e,"results_by_run/"+o.run_id),a(3,c=s.data),a(4,r=0)}()}),[e,l,o,c,r,async function(){200==(await f(e,"delete_solution/"+o.id)).status&&(v(),m("/test?id="+o.test_code_id))}]}export default class extends t{constructor(t){super(),s(this,t,U,T,a,{})}}
