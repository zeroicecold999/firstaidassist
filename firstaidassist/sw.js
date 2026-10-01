const CACHE='firstaidassist-cache-v16';
const ASSETS=['./','./index.html','./styles.css','./data.js','./app.js','./manifest.json','./logo.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const req=e.request;
  // API cuaca, font, YouTube dan non-GET langsung ke jaringan
  if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
  e.respondWith(caches.match(req).then(cached=>{
    const net=fetch(req).then(res=>{const copy=res.clone();if(res.ok)caches.open(CACHE).then(c=>c.put(req,copy));return res})
      .catch(()=>cached||(req.mode==='navigate'?caches.match('./index.html'):Response.error()));
    return cached||net; // stale-while-revalidate
  }));
});
