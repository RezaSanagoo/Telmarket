if(!self.define){let e,a={};const s=(s,t)=>(s=new URL(s+".js",t).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const r=e=>s(e,i),l={module:{uri:i},exports:c,require:r};a[i]=Promise.all(t.map((e=>l[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Telmarket/_next/app-build-manifest.json",revision:"d7ae2c5d074f8fd31b22af543ee152bf"},{url:"/Telmarket/_next/static/7Ilgt8lqsAzHivRbz4naI/_buildManifest.js",revision:"172e769da91baa11de9b258fb2d92f86"},{url:"/Telmarket/_next/static/7Ilgt8lqsAzHivRbz4naI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/Telmarket/_next/static/chunks/117-6cbd7444af6ae01e.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/145-b8858c42932ca2c8.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/264-af040d673168082f.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/280-41962573c32848c8.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/313-065dd2613f6a156b.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/363-ff493cd47769c198.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/475-64091ec2e8cd814c.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/629-6e64f83ce3de9a47.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/664-c0c81d5d6585c229.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/730-23ca55af98f88fa5.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/900-ae2eadd880781f4a.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/914-61996f65429c563e.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/966-083f07a392976ccf.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/986-c30f73f2e74068f6.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(auth)/layout-45656c8866c3d560.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(auth)/login/page-007e284e11a735c4.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(auth)/register/layout-e4edd6135e6b3e2c.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(auth)/register/page-ef9fe041cb0dc6df.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(main)/courses/%5Bid%5D/page-6c24e4bb994a5773.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(main)/courses/page-61e43ac04539b807.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(main)/explore/page-de2120d880282480.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(main)/layout-fc5b018b9f0d6af2.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(main)/prices/page-0c7c6f0b1b268743.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/(main)/profile/page-7f393a0f8d786cd5.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/_not-found/page-72193ab416ab6f5b.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/layout-32893ec9a29c89c6.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/app/page-972e0516656da10b.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/fd9d1056-5debb9c9abe1ed77.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/main-9d89baf25ea96a02.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/main-app-a938e327929ed950.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/pages/_app-15e2daefa259f0b5.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/pages/_error-28b803cb2479b966.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/Telmarket/_next/static/chunks/webpack-a86df280043a1c37.js",revision:"7Ilgt8lqsAzHivRbz4naI"},{url:"/Telmarket/_next/static/css/a53bb80969a5ed2d.css",revision:"a53bb80969a5ed2d"},{url:"/Telmarket/_next/static/css/b1a7b3a5b325e19a.css",revision:"b1a7b3a5b325e19a"},{url:"/Telmarket/_next/static/media/Logo.39d0bbb0.png",revision:"123d1a112a36d98b1c4dfd8059d74eae"},{url:"/Telmarket/fonts/IRANYekanBlack.ttf",revision:"4eb982a0a4d7b13bb76a8612c5a5266f"},{url:"/Telmarket/fonts/IRANYekanBold.ttf",revision:"32122790bf8632ba09a620d8f3cc2ed4"},{url:"/Telmarket/fonts/IRANYekanExtraBlack2.ttf",revision:"42c80d421a06206fa60612782d8c4501"},{url:"/Telmarket/fonts/IRANYekanExtraBold.ttf",revision:"6848ecb8fc8ee8dd61569bcacf96a440"},{url:"/Telmarket/fonts/IRANYekanMedium.ttf",revision:"f4afe6ad7a3e91864416f5c8a2bdbca5"},{url:"/Telmarket/fonts/IRANYekanRegular.ttf",revision:"ffac8e68c30515e384f6d1866119a383"},{url:"/Telmarket/img/Frame.svg",revision:"20b0e11eb78da8c2ac214cdbe5e371b5"},{url:"/Telmarket/img/Logo.png",revision:"123d1a112a36d98b1c4dfd8059d74eae"},{url:"/Telmarket/img/LogoT.png",revision:"a88c49d007aa2ba65f2fc8a62057f646"},{url:"/Telmarket/img/icon-192x192.png",revision:"f1459be2ec8ae35de88ec0b947e294ec"},{url:"/Telmarket/img/icon-512x512.png",revision:"49ff6bfd5ad32a55f14c34cc2aeb9e79"},{url:"/Telmarket/manifest.json",revision:"25c5e6893dc5dead143f4b492247aff7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/Telmarket",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:t})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));