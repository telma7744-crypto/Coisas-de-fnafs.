const CACHE_NAME = 'fnaf-cache-v1';

// Instala o service worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Intercepta todas as requisições
self.addEventListener('fetch', (event) => {
  // Só mexe com imagens e áudios
  if (
    event.request.destination === 'image' ||
    event.request.destination === 'audio' ||
    event.request.url.match(/\.(png|jpg|jpeg|gif|webp|wav|mp3|ogg)$/i)
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        // Tenta pegar do cache primeiro
        const cached = await cache.match(event.request);
        if (cached) {
          return cached;
        }

        // Se não tiver no cache, baixa da internet e salva
        try {
          const response = await fetch(event.request);
          if (response && response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        } catch (err) {
          // Se estiver offline e não tiver no cache, devolve um placeholder transparente
          return new Response('', { status: 404 });
        }
      })
    );
  }
});