!function(){"use strict";const e=["client/new_solution.36ff335b.js","client/about.87d78ccf.js","client/new_test.783a9fb5.js","client/solution_edit.1bd3c011.js","client/solution.85884287.js","client/test_edit.719f2fbf.js","client/index.62e56814.js","client/test.99905530.js","client/client.d77e087b.js"].concat(["service-worker-index.html","favicon.png","global.css","login_with_github.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594725014889").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594725014889"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594725014889").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
