!function(){"use strict";const e=["client/new_solution.b44f5496.js","client/new_test.c02be825.js","client/about.5c0026aa.js","client/solution_edit.a8125f5b.js","client/solution.e7a35a6e.js","client/test_edit.a2bcb685.js","client/debug.d441512d.js","client/index.5984c721.js","client/test.157daf01.js","client/client.064378b9.js"].concat(["service-worker-index.html","favicon.png","global.css","login_with_github.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1595670081449").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1595670081449"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1595670081449").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
