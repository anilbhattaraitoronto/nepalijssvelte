
const staticCacheName = 'site-static-v0';
const dynamicCacheName = 'dynamic-cache-v1';

const assetsToCache = [
    '/',
    '/global.css',
    '/build/bundle.js',
    '/build/bundle.css',
    '/images/icons/np_flag.png',
    'https://nepalreviewed.com/posts/api/posts',
    '/pages/fallback.html'
]

//function to limit item numbers in the cache

function limitCacheSize(name, size) {
    caches.open(name).then(cache => {
        cache.keys().then(key => {
            if (key.length > size) {
                cache.delete(key[0]).then(limitCacheSize(name, size))
            }
        })
    })
}
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
        cache.addAll(assetsToCache)    
        }).catch(err => console.log('Caching problem', err))
    )
    
});

self.addEventListener("activate", event => {
    //delete old cache 
    // console.log('Activated sw')
    event.waitUntil(
        caches.keys().then(keys => {
            
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key =>caches.delete(key))
            )
        })
    )
    
})

// self.addEventListener("fetch", (event) => {
//     // console.log("fetch event", event)
//     event.respondWith(
//         caches.match(event.request).then(cacheRes => {
//             return cacheRes || fetch(event.request).then(fetchRes => {
//                 return caches.open(dynamicCacheName).then(cache => {
//                     cache.put(event.request.url, fetchRes.clone());
//                     limitCacheSize(dynamicCacheName, 4);
//                     return fetchRes;
//                 })
//             }).catch(() => {
//                 if (event.request.url.indexOf('.html') > -1) {
//                     return caches.match('/pages/fallback.html')
//                 }
                
//             })
//         })
//     )
// });

self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            // check cached items size
            limitCacheSize(dynamicCacheName, 5);
            return fetchRes;
          })
        });
      }).catch(() => {
          console.log("Url is",evt.request.url)
          if (evt.request.url.endsWith('.html')) {
            console.log(evt.request.url)
          return caches.match('/pages/fallback.html');
        } 
      })
    );
  });