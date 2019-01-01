/* eslint-disable no-restricted-globals */

self.addEventListener('fetch', event => {
  if (event.request.url.indexOf('https://fonts.googleapis.com/css') === -1) return
  event.respondWith(handleRequest(event))
});

async function handleRequest(event) {
  const response = await fetch(event.request)
  if (response.status === 200) {
    // Assuming you have a specific cache name setup
    const cache = await caches.open('google-fonts-stylesheets')
    const cacheResponse = await cache.match(event.request)
    if (cacheResponse) return cacheResponse
    const css = await response.text()
    const patched = css.replace(/}/g, 'font-display: swap;}')
    const newResponse = new Response(patched, {headers: response.headers})
    cache.put(event.request, newResponse.clone())
    return newResponse
  }
  return response
}

self.importScripts('service-worker.js')
