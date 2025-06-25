// public/service-worker.js

const CACHE_NAME = 'enovastudio-ye-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/static/css/main.chunk.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  // Add other static assets you want to cache
];

// Install a service worker
this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Force the waiting service worker to become the active service worker
  this.skipWaiting();
});

// Cache and return requests
this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache if the URL contains certain patterns
                if (
                  !event.request.url.includes('/api/') && 
                  !event.request.url.includes('/socket/')
                ) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          }
        );
      })
      .catch(() => {
        // If both cache and network fail, serve offline fallback
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      })
  );
});

// Update a service worker
this.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Claim any clients immediately
  this.clients.claim();
});

// Handle push notifications (if you plan to implement them)
this.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/logo192.png',
    badge: '/badge.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url
    }
  };

  event.waitUntil(
    this.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
this.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    this.clients.openWindow(event.notification.data.url)
  );
});