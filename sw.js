/* ═══════════════════════════════════════════
   TKB Service Worker — Cache-first strategy
   Tăng version CACHE_NAME mỗi khi deploy mới
   ═══════════════════════════════════════════ */
const CACHE_NAME = 'tkb-v2';

/* ── Install: pre-cache core files dùng relative URL ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      /* Dùng relative path — hoạt động đúng dù deploy ở /tkb/ hay / */
      return Promise.allSettled([
        cache.add('./'),
        cache.add('./index.html'),
        cache.add('./manifest.json'),
        cache.add('./icon-192.png'),
        cache.add('./icon-512.png'),
      ]);
    })
  );
  self.skipWaiting();
});

/* ── Activate: xóa cache cũ ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* ── Fetch: Cache-first, network fallback ── */
self.addEventListener('fetch', event => {
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
      }).catch(() => {
        /* Offline fallback: trả về index.html */
        return caches.match('./index.html');
      });
    })
  );
});
