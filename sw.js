if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>a(e,i),l={module:{uri:i},exports:r,require:c};s[i]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Telmarket/_next/app-build-manifest.json",revision:"2517342f15dad47ba72e0608e5b33203"},{url:"/Telmarket/_next/static/chunks/117-6cbd7444af6ae01e.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/280-846104db06ba8b28.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/313-065dd2613f6a156b.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/363-536f16076cc8abc4.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/536-c6f558a90eb783df.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/612-323579e6adc17979.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/629-6e64f83ce3de9a47.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/630-6e9415c2db3dc40f.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/664-9789dca8f5e22c31.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/878-5ff1479de426702d.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/896-1a33e61d8d100259.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/900-ae2eadd880781f4a.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/914-61996f65429c563e.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(auth)/layout-45656c8866c3d560.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(auth)/login/page-007e284e11a735c4.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(auth)/register/layout-e4edd6135e6b3e2c.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(auth)/register/page-99bdb818c576287e.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(main)/courses/%5Bid%5D/page-46de7ddd5dfbe935.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(main)/courses/page-862acbd933aeca14.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(main)/explore/page-1366a5eedca5fbf3.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(main)/layout-c6529339163c591f.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(main)/prices/page-2101e7705afb0e47.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/(main)/profile/page-02de404281a6fa02.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/_not-found/page-72193ab416ab6f5b.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/layout-4c1a8bf78f532581.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/app/page-972e0516656da10b.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/fd9d1056-5debb9c9abe1ed77.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/main-9d89baf25ea96a02.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/main-app-a938e327929ed950.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/pages/_app-15e2daefa259f0b5.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/pages/_error-28b803cb2479b966.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/Telmarket/_next/static/chunks/webpack-9ed6746c10c79ee2.js",revision:"lYH5IHJ_jKdE0XD3fqsgw"},{url:"/Telmarket/_next/static/css/70df63eb5367316b.css",revision:"70df63eb5367316b"},{url:"/Telmarket/_next/static/css/a53bb80969a5ed2d.css",revision:"a53bb80969a5ed2d"},{url:"/Telmarket/_next/static/lYH5IHJ_jKdE0XD3fqsgw/_buildManifest.js",revision:"172e769da91baa11de9b258fb2d92f86"},{url:"/Telmarket/_next/static/lYH5IHJ_jKdE0XD3fqsgw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/Telmarket/_next/static/media/LogoT.0b56892a.png",revision:"a19a48221e63272b817f407aaf1fcbda"},{url:"/Telmarket/fonts/IRANYekanBlack.ttf",revision:"4eb982a0a4d7b13bb76a8612c5a5266f"},{url:"/Telmarket/fonts/IRANYekanBold.ttf",revision:"32122790bf8632ba09a620d8f3cc2ed4"},{url:"/Telmarket/fonts/IRANYekanExtraBlack2.ttf",revision:"42c80d421a06206fa60612782d8c4501"},{url:"/Telmarket/fonts/IRANYekanExtraBold.ttf",revision:"6848ecb8fc8ee8dd61569bcacf96a440"},{url:"/Telmarket/fonts/IRANYekanMedium.ttf",revision:"f4afe6ad7a3e91864416f5c8a2bdbca5"},{url:"/Telmarket/fonts/IRANYekanRegular.ttf",revision:"ffac8e68c30515e384f6d1866119a383"},{url:"/Telmarket/img/Frame 63.png",revision:"fa3d9bf43f55cec80f8aed61548af0ec"},{url:"/Telmarket/img/Frame.svg",revision:"20b0e11eb78da8c2ac214cdbe5e371b5"},{url:"/Telmarket/img/Logo.png",revision:"103775e92d24affd7b94d1f18ea8af39"},{url:"/Telmarket/img/LogoT.png",revision:"a19a48221e63272b817f407aaf1fcbda"},{url:"/Telmarket/img/LogoTT.png",revision:"5a8b42e01ea537b91cdc2b4da5aacb2a"},{url:"/Telmarket/img/LogoTTT.png",revision:"2079f97fadfb094c6cdb6ae4238677c0"},{url:"/Telmarket/img/icon-192x192.png",revision:"54291f07b43e8596fd1f39c5af907c9e"},{url:"/Telmarket/img/icon-512x512.png",revision:"f2ee8517d72072ba25737fb88fc508f5"},{url:"/Telmarket/manifest.json",revision:"d7bdeaeb3d0487afbe3507e8a16711b7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/Telmarket",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
