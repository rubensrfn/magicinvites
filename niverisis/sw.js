const CACHE_NAME = 'niver-cache-v2';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './intro.jpg',
  './tema.jpg',
  './audio.mp3',
  './modelo.glb',
  './modelo.usdz',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});