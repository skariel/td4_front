!function(){"use strict";const e=["client/new_solution.0fa9f56d.js","client/about.27c93916.js","client/new_test.b2dd8b2a.js","client/test_edit.99daf858.js","client/solution_edit.ac35785d.js","client/solution.82def442.js","client/index.1cff99fb.js","client/test.351bc405.js","client/client.f46bf920.js"].concat(["service-worker-index.html","favicon.png","global.css","login_with_github.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594725394598").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594725394598"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594725394598").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
