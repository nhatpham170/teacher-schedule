/* ═══════════════════════════════════════════
   TKB Service Worker — Cache-first strategy
   Tăng version CACHE_NAME mỗi khi deploy mới
   ═══════════════════════════════════════════ */
const CACHE_NAME = 'tkb-v1';

/* Tất cả file cần cache khi cài app */
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  /* Font từ Google — cache khi lần đầu load */
  'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap',
];

/* ── Install: pre-cache core files ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      /* Cache local files bắt buộc, font optional */
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
      ]).catch(() => {});
    })
  );
  self.skipWaiting();
});

/* ── Activate: xóa cache cũ ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: Cache-first, network fallback ── */
self.addEventListener('fetch', event => {
  /* Chỉ xử lý GET */
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  /* Google Fonts — stale-while-revalidate */
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached => {
          const network = fetch(event.request).then(res => {
            cache.put(event.request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  /* App shell — cache-first */
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()));
        return res;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
