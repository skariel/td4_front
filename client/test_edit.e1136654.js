import{S as t,i as e,s as l,a as n,F as s,v as a,g as i,d as o,j as c,n as r,K as u,z as d,J as h,C as g,D as f,L as m,M as p,e as v,t as E,c as b,b as T,f as x,w as I,k as y,l as H,G as S,H as w,I as U}from"./client.60424e76.js";function N(t){let e,l,s,a,r,u,d,h,g,f,m,p,H,N,k,C,$,j,z,B,L,O,P,X,F,G,J=0!=R(t[2],t[3],t[4]).length,K=(t[2]!=t[0].title||t[3]!=t[0].descr||t[4]!=t[0].code)&&A(),M=J&&D(t);return{c(){e=v("button"),l=E("restore original test"),s=n(),K&&K.c(),a=n(),r=v("h4"),u=E("Title"),d=n(),h=v("input"),g=n(),f=v("h4"),m=E("Description"),p=n(),H=v("textarea"),N=n(),k=v("h4"),C=E("Code"),$=n(),j=v("textarea"),z=n(),B=v("div"),M&&M.c(),L=n(),O=v("button"),P=E("update test"),this.h()},l(t){e=b(t,"BUTTON",{});var n=T(e);l=x(n,"restore original test"),n.forEach(i),s=o(t),K&&K.l(t),a=o(t),r=b(t,"H4",{});var c=T(r);u=x(c,"Title"),c.forEach(i),d=o(t),h=b(t,"INPUT",{}),g=o(t),f=b(t,"H4",{style:!0});var v=T(f);m=x(v,"Description"),v.forEach(i),p=o(t),H=b(t,"TEXTAREA",{style:!0}),T(H).forEach(i),N=o(t),k=b(t,"H4",{style:!0});var E=T(k);C=x(E,"Code"),E.forEach(i),$=o(t),j=b(t,"TEXTAREA",{style:!0}),T(j).forEach(i),z=o(t),B=b(t,"DIV",{});var I=T(B);M&&M.l(I),L=o(I),O=b(I,"BUTTON",{disabled:!0});var y=T(O);P=x(y,"update test"),y.forEach(i),I.forEach(i),this.h()},h(){I(f,"margin-top","20px"),I(H,"width","100%"),I(H,"height","200px"),I(k,"margin-top","20px"),I(j,"width","100%"),I(j,"height","200px"),O.disabled=X=0!=R(t[2],t[3],t[4]).length},m(n,i){c(n,e,i),y(e,l),c(n,s,i),K&&K.m(n,i),c(n,a,i),c(n,r,i),y(r,u),c(n,d,i),c(n,h,i),S(h,t[2]),c(n,g,i),c(n,f,i),y(f,m),c(n,p,i),c(n,H,i),S(H,t[3]),c(n,N,i),c(n,k,i),y(k,C),c(n,$,i),c(n,j,i),S(j,t[4]),c(n,z,i),c(n,B,i),M&&M.m(B,null),y(B,L),y(B,O),y(O,P),F||(G=[w(e,"click",t[5]),w(h,"input",t[7]),w(H,"input",t[8]),w(j,"input",t[9]),w(O,"click",t[6])],F=!0)},p(t,e){t[2]!=t[0].title||t[3]!=t[0].descr||t[4]!=t[0].code?K||(K=A(),K.c(),K.m(a.parentNode,a)):K&&(K.d(1),K=null),4&e&&h.value!==t[2]&&S(h,t[2]),8&e&&S(H,t[3]),16&e&&S(j,t[4]),28&e&&(J=0!=R(t[2],t[3],t[4]).length),J?M?M.p(t,e):(M=D(t),M.c(),M.m(B,L)):M&&(M.d(1),M=null),28&e&&X!==(X=0!=R(t[2],t[3],t[4]).length)&&(O.disabled=X)},d(t){t&&i(e),t&&i(s),K&&K.d(t),t&&i(a),t&&i(r),t&&i(d),t&&i(h),t&&i(g),t&&i(f),t&&i(p),t&&i(H),t&&i(N),t&&i(k),t&&i($),t&&i(j),t&&i(z),t&&i(B),M&&M.d(),F=!1,U(G)}}}function k(t){let e,l;return{c(){e=v("h1"),l=E("loading...")},l(t){e=b(t,"H1",{});var n=T(e);l=x(n,"loading..."),n.forEach(i)},m(t,n){c(t,e,n),y(e,l)},p:r,d(t){t&&i(e)}}}function A(t){let e,l;return{c(){e=v("h4"),l=E("modified!"),this.h()},l(t){e=b(t,"H4",{style:!0});var n=T(e);l=x(n,"modified!"),n.forEach(i),this.h()},h(){I(e,"color","red")},m(t,n){c(t,e,n),y(e,l)},d(t){t&&i(e)}}}function D(t){let e,l,n=R(t[2],t[3],t[4])+"";return{c(){e=v("h5"),l=E(n),this.h()},l(t){e=b(t,"H5",{style:!0});var s=T(e);l=x(s,n),s.forEach(i),this.h()},h(){I(e,"margin-top","20px"),I(e,"color","red")},m(t,n){c(t,e,n),y(e,l)},p(t,e){28&e&&n!==(n=R(t[2],t[3],t[4])+"")&&H(l,n)},d(t){t&&i(e)}}}function C(t){let e,l,u;function d(t,e){return t[1]?k:N}document.title=e="Updating test "+t[0].id;let h=d(t),g=h(t);return{c(){l=n(),g.c(),u=s()},l(t){a('[data-svelte="svelte-1it3kzn"]',document.head).forEach(i),l=o(t),g.l(t),u=s()},m(t,e){c(t,l,e),g.m(t,e),c(t,u,e)},p(t,[l]){1&l&&e!==(e="Updating test "+t[0].id)&&(document.title=e),h===(h=d(t))&&g?g.p(t,l):(g.d(1),g=h(t),g&&(g.c(),g.m(u.parentNode,u)))},i:r,o:r,d(t){t&&i(l),g.d(t),t&&i(u)}}}function R(t,e,l){return 0==t.length?"missing title":t.length>256?`title is too long: ${t.length} > 256`:0==e.length?"description is missing":e.length>2048?`description is too long: ${t.length} > 2048`:0==l.length?"code is missing":l.length>8192?`code is too long: ${t.length} > 8192`:""}function $(t,e,l){let n,s,a;u(t,null,t=>l(2,n=t)),u(t,null,t=>l(3,s=t)),u(t,null,t=>l(4,a=t));let i=null,o=[],c=!0;function r(){null.set(o.title)}function v(){null.set(o.descr)}function E(){null.set(o.code)}return d(()=>{h(localStorage.getItem("utname")||"").subscribe(t=>localStorage.setItem("utname",t));h(localStorage.getItem("utdescr")||"").subscribe(t=>localStorage.setItem("utdescr",t));h(localStorage.getItem("utcode")||"").subscribe(t=>localStorage.setItem("utcode",t)),i=g(),async function(t){l(1,c=!0);let e=new URL(location).searchParams.get("id"),u=await f(i,"test/"+e);l(0,o=u.data),""==n&&r();""==s&&v();""==a&&E();l(1,c=!1)}()}),[o,c,n,s,a,function(){r(),v(),E()},async function(){200==(await m(i,"update_test",{id:o.id,title:n,descr:s,code:a})).status&&(null.set(""),null.set(""),null.set(""),p("/test?id="+o.id+"&page=0"))},function(){n=this.value,null.set(n)},function(){s=this.value,null.set(s)},function(){a=this.value,null.set(a)}]}export default class extends t{constructor(t){super(),e(this,t,$,C,l,{})}}
