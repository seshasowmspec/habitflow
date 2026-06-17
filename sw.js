// HabitFlow Service Worker
const CACHE = 'habitflow-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' }))))
      .catch(() => caches.open(CACHE).then(c => c.add('./index.html')))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Always go to network for Google Sheets API and fonts
  if (url.includes('script.google.com') || url.includes('fonts.googleapis') || url.includes('fonts.gstatic')) {
    return;
  }
  e.respondWith(
    caches.match(e.request)
      .then(cached => {
        const network = fetch(e.request).then(res => {
          if (res && res.status === 200 && e.request.method === 'GET') {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
  );
});
