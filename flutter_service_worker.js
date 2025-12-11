'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7bb029f9b1f262c12da28e13ec08c09b",
"assets/AssetManifest.bin.json": "46cb736cfa5d4e3baea7d2a183a83bbf",
"assets/assets/fonts/Gotham-SSm/GothamSSm-Black.ttf": "9bd49cdd4f3006832c8c1e051f1ca59a",
"assets/assets/fonts/Gotham-SSm/GothamSSm-BlackItalic.ttf": "4a250066bbedb1960bbe6ae7a6ce39fa",
"assets/assets/fonts/Gotham-SSm/GothamSSm-Bold.ttf": "2071eb324c77d1ca691fca3447c581b3",
"assets/assets/fonts/Gotham-SSm/GothamSSm-BoldItalic.ttf": "c5b142af2c295f8606ec4bcba80fdc9e",
"assets/assets/fonts/Gotham-SSm/GothamSSm-Book.ttf": "40ae923bc3dd7654525f2c675e72c148",
"assets/assets/fonts/Gotham-SSm/GothamSSm-BookItalic.ttf": "6941513a49d146b342b31334eb8c7a8a",
"assets/assets/fonts/Gotham-SSm/GothamSSm-Light.ttf": "7a7c85043f6019390513170d1d3e57f9",
"assets/assets/fonts/Gotham-SSm/GothamSSm-LightItalic.ttf": "23721dcb2afa93f25696faca4a0ada8a",
"assets/assets/fonts/Gotham-SSm/GothamSSm-Medium.ttf": "3cc225a990cc86e7d3a5d291a2ea0f44",
"assets/assets/fonts/Gotham-SSm/GothamSSm-MediumItalic.ttf": "094bcc29d842b3f66e503bdc12875e6e",
"assets/assets/fonts/Gotham-SSm/GothamSSm-XLight.ttf": "0d59a403b9bef0a8b12da51880e43cdb",
"assets/assets/fonts/Gotham-SSm/GothamSSm-XLightItalic.ttf": "efc4c5baef50975a1d85329c5ba6e8fc",
"assets/assets/fonts/NuIcons.ttf": "35c1e96ce5689e89be741e86c95e33f8",
"assets/assets/images/easyinvest.jpg": "96124fdbdc122d71fb910eb0da2d48e0",
"assets/assets/images/logo.png": "70fce407c67e90cd9e71529f213dac74",
"assets/assets/images/logo_background.png": "84da22ed9465d4c527f1cd394fa4430c",
"assets/assets/images/logo_white.png": "0f3024918ca792dbc643295bc4ffe05d",
"assets/assets/images/pix.jpg": "f66bfb0b6bed2fdb193d0c7e7570f10e",
"assets/assets/images/refer_friend.jpg": "aa97522a7d3fd4cc0393f1dcb06dffa9",
"assets/FontManifest.json": "5b7882362bf09e7a97fb82a03953c5e7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f7a2448d16a65178e1bb4cef40f79c3b",
"assets/packages/bootstrap_icons/fonts/BootstrapIcons.ttf": "5f4ffea3b87bd775ca414105bfa5f7ed",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "4234779545d517de0ac31a51968505e4",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d4c26aaaae5aeb662e19074632a9609e",
"icons/Icon-192.png": "ecdcf884fb3544b47564bba7d696495a",
"icons/Icon-512.png": "42e53f777d72fbadaa5e8519199ec0e4",
"icons/Icon-maskable-192.png": "ecdcf884fb3544b47564bba7d696495a",
"icons/Icon-maskable-512.png": "42e53f777d72fbadaa5e8519199ec0e4",
"index.html": "df5ea440734954bae5a1d4afd0809298",
"/": "df5ea440734954bae5a1d4afd0809298",
"main.dart.js": "d1d9fc5bb70fad973d67b4b4ce4cffa8",
"manifest.json": "eb54f565d5dffe19fa4a1c398fd6b79d",
"splash/img/dark-1x.png": "ed6b008efcfe7c7502d6513c1d3da86d",
"splash/img/dark-2x.png": "58c35682f4e4099e3acda917805bad80",
"splash/img/dark-3x.png": "9c3bfa6abf8f846a2ea8d2af78af42bc",
"splash/img/dark-4x.png": "5c223aa1536232becbac3b4a857ec647",
"splash/img/light-1x.png": "ed6b008efcfe7c7502d6513c1d3da86d",
"splash/img/light-2x.png": "58c35682f4e4099e3acda917805bad80",
"splash/img/light-3x.png": "9c3bfa6abf8f846a2ea8d2af78af42bc",
"splash/img/light-4x.png": "5c223aa1536232becbac3b4a857ec647",
"version.json": "af8f473c9ced9365dfa0abb07c0797bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
