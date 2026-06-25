// Service Worker:缓存 App 外壳 + CDN 资源,实现离线可玩
const CACHE = 'dodge-v1';
const ASSETS = [
  './dodge-game.html',
  './manifest.json',
  './icon.svg',
  'https://unpkg.com/three@0.160.0/build/three.module.js',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Rajdhani:wght@500;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 缓存优先,回退网络;在线时把新拿到的资源(含字体 woff2)也存起来
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return resp;
    }).catch(() => caches.match('./dodge-game.html')))
  );
});
