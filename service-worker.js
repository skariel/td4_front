!function(){"use strict";const e=["client/new_solution.c04b88f4.js","client/new_test.f1eae9da.js","client/about.1ff3c25b.js","client/test_edit.b6df7603.js","client/solution_edit.f9f97319.js","client/solution.617d0687.js","client/test.84043ac9.js","client/index.5a2a2c4f.js","client/client.2a16bc57.js"].concat(["service-worker-index.html","favicon.png","global.css","login_with_github.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1595449344145").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1595449344145"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1595449344145").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
