<<<<<<< HEAD
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e43f5367'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/Telmarket", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,a={};const s=(s,t)=>(s=new URL(s+".js",t).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let i={};const c=e=>s(e,r),k={module:{uri:r},exports:i,require:c};a[r]=Promise.all(t.map((e=>k[e]||c(e)))).then((e=>(n(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Telmarket/_next/app-build-manifest.json",revision:"fd48b6fd51244be5af83f0588d5635cb"},{url:"/Telmarket/_next/static/Xxdv527DCBYVJ6EprkkWK/_buildManifest.js",revision:"172e769da91baa11de9b258fb2d92f86"},{url:"/Telmarket/_next/static/Xxdv527DCBYVJ6EprkkWK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/Telmarket/_next/static/chunks/117-6cbd7444af6ae01e.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/280-41962573c32848c8.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/313-065dd2613f6a156b.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/363-536f16076cc8abc4.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/422-f827bae3a55cc570.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/459-a928c833cab5c327.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/612-a1fdc6914e0db29f.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/629-6e64f83ce3de9a47.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/630-6e9415c2db3dc40f.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/664-9789dca8f5e22c31.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/878-5ff1479de426702d.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/896-1a33e61d8d100259.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/900-ae2eadd880781f4a.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/914-61996f65429c563e.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(auth)/layout-45656c8866c3d560.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(auth)/login/page-007e284e11a735c4.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(auth)/register/layout-e4edd6135e6b3e2c.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(auth)/register/page-ef9fe041cb0dc6df.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(main)/courses/%5Bid%5D/page-3273546fd2ae6268.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(main)/courses/page-862acbd933aeca14.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(main)/explore/page-1366a5eedca5fbf3.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(main)/layout-e774fdecace88454.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(main)/prices/page-0855dcaf3ea865d9.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/(main)/profile/page-02de404281a6fa02.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/_not-found/page-72193ab416ab6f5b.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/layout-4c1a8bf78f532581.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/app/page-972e0516656da10b.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/fd9d1056-5debb9c9abe1ed77.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/main-9d89baf25ea96a02.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/main-app-a938e327929ed950.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/pages/_app-15e2daefa259f0b5.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/pages/_error-28b803cb2479b966.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/Telmarket/_next/static/chunks/webpack-a86df280043a1c37.js",revision:"Xxdv527DCBYVJ6EprkkWK"},{url:"/Telmarket/_next/static/css/8bc8af952a24029d.css",revision:"8bc8af952a24029d"},{url:"/Telmarket/_next/static/css/a53bb80969a5ed2d.css",revision:"a53bb80969a5ed2d"},{url:"/Telmarket/_next/static/media/LogoT.0b56892a.png",revision:"a19a48221e63272b817f407aaf1fcbda"},{url:"/Telmarket/fonts/IRANYekanBlack.ttf",revision:"4eb982a0a4d7b13bb76a8612c5a5266f"},{url:"/Telmarket/fonts/IRANYekanBold.ttf",revision:"32122790bf8632ba09a620d8f3cc2ed4"},{url:"/Telmarket/fonts/IRANYekanExtraBlack2.ttf",revision:"42c80d421a06206fa60612782d8c4501"},{url:"/Telmarket/fonts/IRANYekanExtraBold.ttf",revision:"6848ecb8fc8ee8dd61569bcacf96a440"},{url:"/Telmarket/fonts/IRANYekanMedium.ttf",revision:"f4afe6ad7a3e91864416f5c8a2bdbca5"},{url:"/Telmarket/fonts/IRANYekanRegular.ttf",revision:"ffac8e68c30515e384f6d1866119a383"},{url:"/Telmarket/img/Frame 63.png",revision:"fa3d9bf43f55cec80f8aed61548af0ec"},{url:"/Telmarket/img/Frame.svg",revision:"20b0e11eb78da8c2ac214cdbe5e371b5"},{url:"/Telmarket/img/Logo.png",revision:"103775e92d24affd7b94d1f18ea8af39"},{url:"/Telmarket/img/LogoT.png",revision:"a19a48221e63272b817f407aaf1fcbda"},{url:"/Telmarket/img/LogoTT.png",revision:"5a8b42e01ea537b91cdc2b4da5aacb2a"},{url:"/Telmarket/img/LogoTTT.png",revision:"2079f97fadfb094c6cdb6ae4238677c0"},{url:"/Telmarket/img/icon-192x192.png",revision:"54291f07b43e8596fd1f39c5af907c9e"},{url:"/Telmarket/img/icon-512x512.png",revision:"f2ee8517d72072ba25737fb88fc508f5"},{url:"/Telmarket/manifest.json",revision:"25c5e6893dc5dead143f4b492247aff7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/Telmarket",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:t})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> origin/main
