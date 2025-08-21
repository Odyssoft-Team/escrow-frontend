const CACHE_NAME = "Escrow";
const PRECACHE_URLS = [
  "/home", // página principal
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  // Agrega aquí otros recursos que quieras precachear
];

// Instalación del service worker y precache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activación y limpieza de caches antiguos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Estrategia de recuperación para peticiones
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Evitar caching de peticiones que no son GET (POST, etc.)
  if (request.method !== "GET") return;

  if (request.headers.get("accept")?.includes("text/html")) {
    // Network-first para HTML
    event.respondWith(
      fetch(request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else {
    // Cache-first para otros archivos (CSS, JS, imágenes...)
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        return (
          cachedResponse ||
          fetch(request).then((response) => {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
            return response;
          })
        );
      })
    );
  }
});
