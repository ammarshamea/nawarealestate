/* nawah-real-estate image cache Service Worker */
const CACHE_NAME = "nawah-real-estate-images-v1";
const MAX_ENTRIES = 150;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(Promise.resolve());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith("nawah-real-estate-images-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

async function trimCache(cache) {
  const keys = await cache.keys();
  if (keys.length <= MAX_ENTRIES) return;
  const excess = keys.length - MAX_ENTRIES;
  for (let i = 0; i < excess; i += 1) {
    await cache.delete(keys[i]);
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  if (request.destination !== "image") return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request, { ignoreSearch: false });
      if (cached) return cached;

      try {
        const response = await fetch(request);
        if (response && response.ok) {
          await cache.put(request, response.clone());
          await trimCache(cache);
        }
        return response;
      } catch (err) {
        const fallback = await cache.match(request);
        if (fallback) return fallback;
        throw err;
      }
    })()
  );
});
