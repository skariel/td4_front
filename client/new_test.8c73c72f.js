import{S as t,i as e,s,e as a,t as l,c as n,b as o,f as i,g as c,w as r,j as h,k as d,l as g,a as u,v as m,d as p,G as f,H as v,n as E,I as b,J as x,K as I,z as T,C as y,L as S,M as w}from"./client.e48dc78a.js";function H(t){let e,s,u=A(t[0],t[1],t[2])+"";return{c(){e=a("h5"),s=l(u),this.h()},l(t){e=n(t,"H5",{style:!0});var a=o(e);s=i(a,u),a.forEach(c),this.h()},h(){r(e,"margin-top","20px"),r(e,"color","red")},m(t,a){h(t,e,a),d(e,s)},p(t,e){7&e&&u!==(u=A(t[0],t[1],t[2])+"")&&g(s,u)},d(t){t&&c(e)}}}function j(t){let e,s,g,x,I,T,y,S,w,j,C,D,N,$,k,R,U,X,z,B,G,J,K,L=0!=A(t[0],t[1],t[2]).length,M=L&&H(t);return{c(){e=u(),s=a("h4"),g=l("Title"),x=u(),I=a("input"),T=u(),y=a("h4"),S=l("Description"),w=u(),j=a("textarea"),C=u(),D=a("h4"),N=l("Code"),$=u(),k=a("textarea"),R=u(),U=a("div"),M&&M.c(),X=u(),z=a("button"),B=l("add test"),this.h()},l(t){m('[data-svelte="svelte-efjyjy"]',document.head).forEach(c),e=p(t),s=n(t,"H4",{});var a=o(s);g=i(a,"Title"),a.forEach(c),x=p(t),I=n(t,"INPUT",{}),T=p(t),y=n(t,"H4",{style:!0});var l=o(y);S=i(l,"Description"),l.forEach(c),w=p(t),j=n(t,"TEXTAREA",{style:!0}),o(j).forEach(c),C=p(t),D=n(t,"H4",{style:!0});var r=o(D);N=i(r,"Code"),r.forEach(c),$=p(t),k=n(t,"TEXTAREA",{style:!0}),o(k).forEach(c),R=p(t),U=n(t,"DIV",{});var h=o(U);M&&M.l(h),X=p(h),z=n(h,"BUTTON",{disabled:!0});var d=o(z);B=i(d,"add test"),d.forEach(c),h.forEach(c),this.h()},h(){document.title="New test",r(y,"margin-top","20px"),r(j,"width","100%"),r(j,"height","200px"),r(D,"margin-top","20px"),r(k,"width","100%"),r(k,"height","200px"),z.disabled=G=0!=A(t[0],t[1],t[2]).length},m(a,l){h(a,e,l),h(a,s,l),d(s,g),h(a,x,l),h(a,I,l),f(I,t[0]),h(a,T,l),h(a,y,l),d(y,S),h(a,w,l),h(a,j,l),f(j,t[1]),h(a,C,l),h(a,D,l),d(D,N),h(a,$,l),h(a,k,l),f(k,t[2]),h(a,R,l),h(a,U,l),M&&M.m(U,null),d(U,X),d(U,z),d(z,B),J||(K=[v(I,"input",t[7]),v(j,"input",t[8]),v(k,"input",t[9]),v(z,"click",t[6])],J=!0)},p(t,[e]){1&e&&I.value!==t[0]&&f(I,t[0]),2&e&&f(j,t[1]),4&e&&f(k,t[2]),7&e&&(L=0!=A(t[0],t[1],t[2]).length),L?M?M.p(t,e):(M=H(t),M.c(),M.m(U,X)):M&&(M.d(1),M=null),7&e&&G!==(G=0!=A(t[0],t[1],t[2]).length)&&(z.disabled=G)},i:E,o:E,d(t){t&&c(e),t&&c(s),t&&c(x),t&&c(I),t&&c(T),t&&c(y),t&&c(w),t&&c(j),t&&c(C),t&&c(D),t&&c($),t&&c(k),t&&c(R),t&&c(U),M&&M.d(),J=!1,b(K)}}}function A(t,e,s){return 0==t.length?"missing title":t.length>256?`title is too long: ${t.length} > 256`:0==e.length?"description is missing":e.length>2048?`description is too long: ${t.length} > 2048`:0==s.length?"code is missing":s.length>8192?`code is too long: ${t.length} > 8192`:""}function C(t,e,s){let a,l,n,o=null;const i=x(localStorage.getItem("tname")||"");I(t,i,t=>s(0,a=t)),i.subscribe(t=>localStorage.setItem("tname",t));const c=x(localStorage.getItem("tdescr")||"");I(t,c,t=>s(1,l=t)),c.subscribe(t=>localStorage.setItem("tdescr",t));const r=x(localStorage.getItem("tcode")||"");return I(t,r,t=>s(2,n=t)),r.subscribe(t=>localStorage.setItem("tcode",t)),T(()=>{o=y()}),[a,l,n,i,c,r,async function(){200==(await S(o,"create_test",{title:a,descr:l,code:n})).status&&(i.set(""),c.set(""),r.set(""),w("/"))},function(){a=this.value,i.set(a)},function(){l=this.value,c.set(l)},function(){n=this.value,r.set(n)}]}export default class extends t{constructor(t){super(),e(this,t,C,j,s,{})}}
