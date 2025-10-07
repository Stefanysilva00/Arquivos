self.addEventListener('install', event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "bird192.png",
            "bird512.png",
            "bomdia.png",
            "boanoite.png",
            "boatarde.png",
            "fundodia.jpg",
            "fundotarde.jpg",
            "fundonoite.jpg"
         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
