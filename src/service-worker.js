
workbox.core.setCacheNameDetails({prefix: "test-font-sass-modal"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [{ "url": "/img/icons/favicon-32x32.png", "revision": "1.0" }].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));

/**
 * 
 * AGREGAR UN ITEM AL PRECACHEO. VER:
 * https://github.com/GoogleChrome/workbox/issues/1762
 * https://developers.google.com/web/tools/workbox/modules/workbox-precaching
 * 
 * EL ICONO QUE USA COMO FAVICON VUE ES favicon-32x32.png
 */
