!function(){"use strict";const e=["client/new_solution.6dd872a0.js","client/about.6c2ee098.js","client/new_test.3c9e72c3.js","client/solution_edit.93363b2b.js","client/solution.419c691d.js","client/test_edit.41efb928.js","client/index.6b2d9db8.js","client/test.5739613b.js","client/client.ffc3e29d.js"].concat(["service-worker-index.html","favicon.png","global.css","login_with_github.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594726157006").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594726157006"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594726157006").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
