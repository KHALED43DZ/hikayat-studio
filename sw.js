// رقم الإصدار يأتي من index.html عبر sw.js?v=... فيتحدّث التخزين المؤقت تلقائياً
const V = new URL(self.location).searchParams.get('v') || '0';
const C = 'hikayat-' + V;
const F = ['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.hostname.includes('googleapis.com')&&u.pathname.includes('generateContent'))return;
  e.respondWith(fetch(e.request).then(n=>{const cp=n.clone();caches.open(C).then(c=>c.put(e.request,cp));return n}).catch(()=>caches.match(e.request)));
});
