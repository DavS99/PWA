let cacheData = 'appV1';

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/'
            ])
        })
    )
})

this.addEventListener('fetch', (event) => {
    console.warn('url', event.request.url, 'url')
    event.waitUntil(
        this.registration.showNotification('Hello', {
            body: 'Bokok',
            icon: 'https://i.pinimg.com/280x280_RS/a3/3e/4d/a33e4d60873d1bc369bb8f5778f5d6f7.jpg'
        })
    )
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }

                let requestUrl = event.request.clone();
                return fetch(requestUrl)
            })
        )
    }
})