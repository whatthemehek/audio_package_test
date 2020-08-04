'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d8595895726b30283f3be50deeb98f82",
"assets/assets/button-1.mp3": "d25de3d17248bdbe7f6701fd03662860",
"assets/assets/Index1Length1.wav": "09b9a31be4b8db1dd7ef48568a0ce9f2",
"assets/assets/Index1Length2.wav": "6f51038d393976f7d87b19c50a3e7531",
"assets/assets/Index1Length3.wav": "9cd9325166537620a7f544d1d8a6413b",
"assets/emerald.PNG": "73a49cf5138df5d9f932a298dadcc538",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "8da20b59f543ad460cb2d7a11256958a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0d0e1a86dfd81ca6f17879525c892e1a",
"/": "0d0e1a86dfd81ca6f17879525c892e1a",
"main.dart.js": "305a8df4be02f312600469a965429781",
"manifest.json": "d0fb797202fd92f458a8e3261eb02bdd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
