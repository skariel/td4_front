import{S as t,i as e,s as o,a as s,F as a,v as i,g as d,d as n,j as l,n as c,H as r,z as u,I as h,C as f,D as p,J as g,K as m,L as _,e as v,t as E,c as b,b as y,f as U,w as x,k as H,G as T,l as w,h as N,M as A,N as I}from"./client.571b5d3d.js";function k(t){let e,o,a,i,c,r,u,h,f,p,g,m,_,k,z,$,j,D,L,O,R,F,G,J,K,M=t[0].id+"",P=t[0].test_code_id+"",V=B(t[3]).length>0,X=t[3]!=t[0].code&&C(t),q=V&&S(t);return{c(){e=v("h1"),o=E("Updating "),a=v("a"),i=E("solution "),c=E(M),u=E(" for "),h=v("a"),f=E("test "),p=E(P),m=s(),_=v("h4"),k=E("Code"),z=s(),X&&X.c(),$=s(),j=v("textarea"),D=s(),L=v("div"),q&&q.c(),O=s(),R=v("button"),F=E("update solution"),this.h()},l(t){e=b(t,"H1",{});var s=y(e);o=U(s,"Updating "),a=b(s,"A",{href:!0});var l=y(a);i=U(l,"solution "),c=U(l,M),l.forEach(d),u=U(s," for "),h=b(s,"A",{href:!0});var r=y(h);f=U(r,"test "),p=U(r,P),r.forEach(d),s.forEach(d),m=n(t),_=b(t,"H4",{style:!0});var g=y(_);k=U(g,"Code"),g.forEach(d),z=n(t),X&&X.l(t),$=n(t),j=b(t,"TEXTAREA",{style:!0}),y(j).forEach(d),D=n(t),L=b(t,"DIV",{});var v=y(L);q&&q.l(v),O=n(v),R=b(v,"BUTTON",{disabled:!0});var E=y(R);F=U(E,"update solution"),E.forEach(d),v.forEach(d),this.h()},h(){N(a,"href",r="/solution?id="+t[0].id),N(h,"href",g="/test?id="+t[0].test_code_id),x(_,"margin-top","20px"),x(j,"width","100%"),x(j,"height","200px"),R.disabled=G=0!=B(t[3]).length},m(s,d){l(s,e,d),H(e,o),H(e,a),H(a,i),H(a,c),H(e,u),H(e,h),H(h,f),H(h,p),l(s,m,d),l(s,_,d),H(_,k),l(s,z,d),X&&X.m(s,d),l(s,$,d),l(s,j,d),A(j,t[3]),l(s,D,d),l(s,L,d),q&&q.m(L,null),H(L,O),H(L,R),H(R,F),J||(K=[T(j,"input",t[6]),T(R,"click",t[5])],J=!0)},p(t,e){1&e&&M!==(M=t[0].id+"")&&w(c,M),1&e&&r!==(r="/solution?id="+t[0].id)&&N(a,"href",r),1&e&&P!==(P=t[0].test_code_id+"")&&w(p,P),1&e&&g!==(g="/test?id="+t[0].test_code_id)&&N(h,"href",g),t[3]!=t[0].code?X?X.p(t,e):(X=C(t),X.c(),X.m($.parentNode,$)):X&&(X.d(1),X=null),8&e&&A(j,t[3]),8&e&&(V=B(t[3]).length>0),V?q?q.p(t,e):(q=S(t),q.c(),q.m(L,O)):q&&(q.d(1),q=null),8&e&&G!==(G=0!=B(t[3]).length)&&(R.disabled=G)},d(t){t&&d(e),t&&d(m),t&&d(_),t&&d(z),X&&X.d(t),t&&d($),t&&d(j),t&&d(D),t&&d(L),q&&q.d(),J=!1,I(K)}}}function z(t){let e,o;return{c(){e=v("h1"),o=E("loading...")},l(t){e=b(t,"H1",{});var s=y(e);o=U(s,"loading..."),s.forEach(d)},m(t,s){l(t,e,s),H(e,o)},p:c,d(t){t&&d(e)}}}function C(t){let e,o,a,i,r,u,h;return{c(){e=v("button"),o=E("restore solution code"),a=s(),i=v("h4"),r=E("modified!"),this.h()},l(t){e=b(t,"BUTTON",{});var s=y(e);o=U(s,"restore solution code"),s.forEach(d),a=n(t),i=b(t,"H4",{style:!0});var l=y(i);r=U(l,"modified!"),l.forEach(d),this.h()},h(){x(i,"color","red")},m(s,d){l(s,e,d),H(e,o),l(s,a,d),l(s,i,d),H(i,r),u||(h=T(e,"click",t[4]),u=!0)},p:c,d(t){t&&d(e),t&&d(a),t&&d(i),u=!1,h()}}}function S(t){let e,o,s=B(t[3])+"";return{c(){e=v("h5"),o=E(s),this.h()},l(t){e=b(t,"H5",{style:!0});var a=y(e);o=U(a,s),a.forEach(d),this.h()},h(){x(e,"margin-top","20px"),x(e,"color","red")},m(t,s){l(t,e,s),H(e,o)},p(t,e){8&e&&s!==(s=B(t[3])+"")&&w(o,s)},d(t){t&&d(e)}}}function $(t){let e,o,r;function u(t,e){return t[1]?z:k}document.title=e="Updating solution "+t[0].test_code_id;let h=u(t),f=h(t);return{c(){o=s(),f.c(),r=a()},l(t){i('[data-svelte="svelte-zysfzi"]',document.head).forEach(d),o=n(t),f.l(t),r=a()},m(t,e){l(t,o,e),f.m(t,e),l(t,r,e)},p(t,[o]){1&o&&e!==(e="Updating solution "+t[0].test_code_id)&&(document.title=e),h===(h=u(t))&&f?f.p(t,o):(f.d(1),f=h(t),f&&(f.c(),f.m(r.parentNode,r)))},i:c,o:c,d(t){t&&d(o),f.d(t),t&&d(r)}}}function j(){return new URL(location).searchParams.get("id")}function B(t){return 0==t.length?"code is missing":t.length>8192?`code is too long: ${t.length} > 8192`:""}function D(t,e,o){let s,a=c,i=()=>(a(),a=r(v,t=>o(3,s=t)),v);t.$$.on_destroy.push(()=>a());let d=null,n=[],l=!0,v=null;function E(){v.set(n.code)}return i(),u(()=>{let t=j();i(o(2,v=h(localStorage.getItem("uscode"+t)||""))),v.subscribe(e=>localStorage.setItem("uscode"+t,e)),d=f(),async function(){o(1,l=!0);let t=j(),e=await p(d,"solution/"+t);o(0,n=e.data),""==s&&E();o(1,l=!1)}()}),[n,l,v,s,E,async function(){200==(await g(d,"update_solution",{id:n.id,code:s})).status&&(v.set(""),m(),_("/test?id="+n.test_code_id+"&page=0"))},function(){s=this.value,v.set(s)}]}export default class extends t{constructor(t){super(),e(this,t,D,$,o,{})}}
