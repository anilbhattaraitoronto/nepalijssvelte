
self.addEventListener("install", (event) => {
    event.waitUntil(
        
        caches.open("static").then(cache => {
            console.log("caching resources for future")
            return cache.addAll([
                "./", "./global.css", "./build/bundle.css", "./build/bundle.js" 
            ])
        })
    );
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return res || fetch(event.request)
        })
    )
})