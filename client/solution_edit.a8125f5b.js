import{S as t,i as e,s as o,a as s,G as a,w as i,g as n,d,j as l,n as c,I as r,A as u,J as h,D as f,E as p,K as g,L as m,M as _,e as E,t as v,c as b,b as y,f as x,x as U,k as H,H as T,l as w,h as A,N,O as I}from"./client.064378b9.js";function k(t){let e,o,a,i,c,r,u,h,f,p,g,m,_,k,O,j,z,C,D,L,R,G,J,K,M,P=t[0].id+"",V=t[0].test_code_id+"",X=B(t[3]).length>0,q=t[3]!=t[0].code&&S(t),F=X&&$(t);return{c(){e=E("h1"),o=v("Updating "),a=E("a"),i=v("solution "),c=v(P),u=v(" for "),h=E("a"),f=v("test "),p=v(V),m=s(),_=E("h4"),k=v("Code"),O=s(),q&&q.c(),j=s(),z=E("textarea"),C=s(),D=E("div"),F&&F.c(),L=s(),R=E("button"),G=v("update solution"),this.h()},l(t){e=b(t,"H1",{});var s=y(e);o=x(s,"Updating "),a=b(s,"A",{href:!0});var l=y(a);i=x(l,"solution "),c=x(l,P),l.forEach(n),u=x(s," for "),h=b(s,"A",{href:!0});var r=y(h);f=x(r,"test "),p=x(r,V),r.forEach(n),s.forEach(n),m=d(t),_=b(t,"H4",{style:!0});var g=y(_);k=x(g,"Code"),g.forEach(n),O=d(t),q&&q.l(t),j=d(t),z=b(t,"TEXTAREA",{style:!0}),y(z).forEach(n),C=d(t),D=b(t,"DIV",{});var E=y(D);F&&F.l(E),L=d(E),R=b(E,"BUTTON",{disabled:!0});var v=y(R);G=x(v,"update solution"),v.forEach(n),E.forEach(n),this.h()},h(){A(a,"href",r="/solution?id="+t[0].id),A(h,"href",g="/test?id="+t[0].test_code_id),U(_,"margin-top","20px"),U(z,"width","100%"),U(z,"height","200px"),R.disabled=J=0!=B(t[3]).length},m(s,n){l(s,e,n),H(e,o),H(e,a),H(a,i),H(a,c),H(e,u),H(e,h),H(h,f),H(h,p),l(s,m,n),l(s,_,n),H(_,k),l(s,O,n),q&&q.m(s,n),l(s,j,n),l(s,z,n),N(z,t[3]),l(s,C,n),l(s,D,n),F&&F.m(D,null),H(D,L),H(D,R),H(R,G),K||(M=[T(z,"input",t[6]),T(R,"click",t[5])],K=!0)},p(t,e){1&e&&P!==(P=t[0].id+"")&&w(c,P),1&e&&r!==(r="/solution?id="+t[0].id)&&A(a,"href",r),1&e&&V!==(V=t[0].test_code_id+"")&&w(p,V),1&e&&g!==(g="/test?id="+t[0].test_code_id)&&A(h,"href",g),t[3]!=t[0].code?q?q.p(t,e):(q=S(t),q.c(),q.m(j.parentNode,j)):q&&(q.d(1),q=null),8&e&&N(z,t[3]),8&e&&(X=B(t[3]).length>0),X?F?F.p(t,e):(F=$(t),F.c(),F.m(D,L)):F&&(F.d(1),F=null),8&e&&J!==(J=0!=B(t[3]).length)&&(R.disabled=J)},d(t){t&&n(e),t&&n(m),t&&n(_),t&&n(O),q&&q.d(t),t&&n(j),t&&n(z),t&&n(C),t&&n(D),F&&F.d(),K=!1,I(M)}}}function O(t){let e,o;return{c(){e=E("h1"),o=v("loading...")},l(t){e=b(t,"H1",{});var s=y(e);o=x(s,"loading..."),s.forEach(n)},m(t,s){l(t,e,s),H(e,o)},p:c,d(t){t&&n(e)}}}function S(t){let e,o,a,i,r,u,h;return{c(){e=E("button"),o=v("restore solution code"),a=s(),i=E("h4"),r=v("modified!"),this.h()},l(t){e=b(t,"BUTTON",{});var s=y(e);o=x(s,"restore solution code"),s.forEach(n),a=d(t),i=b(t,"H4",{style:!0});var l=y(i);r=x(l,"modified!"),l.forEach(n),this.h()},h(){U(i,"color","red")},m(s,n){l(s,e,n),H(e,o),l(s,a,n),l(s,i,n),H(i,r),u||(h=T(e,"click",t[4]),u=!0)},p:c,d(t){t&&n(e),t&&n(a),t&&n(i),u=!1,h()}}}function $(t){let e,o,s=B(t[3])+"";return{c(){e=E("h5"),o=v(s),this.h()},l(t){e=b(t,"H5",{style:!0});var a=y(e);o=x(a,s),a.forEach(n),this.h()},h(){U(e,"margin-top","20px"),U(e,"color","red")},m(t,s){l(t,e,s),H(e,o)},p(t,e){8&e&&s!==(s=B(t[3])+"")&&w(o,s)},d(t){t&&n(e)}}}function j(t){let e,o,r;function u(t,e){return t[1]?O:k}document.title=e="Updating solution "+t[0].test_code_id;let h=u(t),f=h(t);return{c(){o=s(),f.c(),r=a()},l(t){i('[data-svelte="svelte-zysfzi"]',document.head).forEach(n),o=d(t),f.l(t),r=a()},m(t,e){l(t,o,e),f.m(t,e),l(t,r,e)},p(t,[o]){1&o&&e!==(e="Updating solution "+t[0].test_code_id)&&(document.title=e),h===(h=u(t))&&f?f.p(t,o):(f.d(1),f=h(t),f&&(f.c(),f.m(r.parentNode,r)))},i:c,o:c,d(t){t&&n(o),f.d(t),t&&n(r)}}}function z(){return new URL(location).searchParams.get("id")}function B(t){return 0==t.length?"code is missing":t.length>8192?`code is too long: ${t.length} > 8192`:""}function C(t,e,o){let s,a=c,i=()=>(a(),a=r(E,t=>o(3,s=t)),E);t.$$.on_destroy.push(()=>a());let n=null,d=[],l=!0,E=null;function v(){E.set(d.code)}return i(),u(()=>{let t=z();i(o(2,E=h(localStorage.getItem("uscode"+t)||""))),E.subscribe(e=>localStorage.setItem("uscode"+t,e)),n=f(),async function(){o(1,l=!0);let t=z(),e=await p(n,"solution/"+t);o(0,d=e.data),""==s&&v();o(1,l=!1)}()}),[d,l,E,s,v,async function(){200==(await g(n,"update_solution",{id:d.id,code:s})).status&&(E.set(""),m(),_("/test?id="+d.test_code_id+"&page=0"))},function(){s=this.value,E.set(s)}]}export default class extends t{constructor(t){super(),e(this,t,C,j,o,{})}}
