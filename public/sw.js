if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,r,a)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=a(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"9P_g040vTuoxcKyGGt5Pc"},{url:"/_next/static/9P_g040vTuoxcKyGGt5Pc/_buildManifest.js",revision:"d986582b9c10524dc2038c293b03f53c"},{url:"/_next/static/9P_g040vTuoxcKyGGt5Pc/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/9P_g040vTuoxcKyGGt5Pc/pages/_app.js",revision:"0102c4efc595c65e23ff55e88b973106"},{url:"/_next/static/9P_g040vTuoxcKyGGt5Pc/pages/_error.js",revision:"39054525ac691dcbaaed95b57b09c70c"},{url:"/_next/static/9P_g040vTuoxcKyGGt5Pc/pages/index.js",revision:"ddc64def3cf1c51d83a8865aa633ea67"},{url:"/_next/static/chunks/1bfc9850.3d097b0e182467f5b144.js",revision:"ad3f55cb00b23bfef440e9194ecfac1a"},{url:"/_next/static/chunks/c5f07671d597395137cb227fccc0687266b3453f.d32b2e4875c0b1cb7cd9.js",revision:"b6f37e2669f66621e6a2d9a544b76de7"},{url:"/_next/static/chunks/framework.4503cc20512dbab0b6d3.js",revision:"8dbfd54516c12914d3e0cd417cd67882"},{url:"/_next/static/runtime/main-c027adbbb9fd5bcef2e0.js",revision:"37b07e4810bb2df23c4c029c93f3d071"},{url:"/_next/static/runtime/polyfills-bbde86c098966bdf3010.js",revision:"2da43772c291559dc708eca3312ebaa0"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon-192x192.png",revision:"82ec2154c887f54be62798fccfb48322"},{url:"/favicon-512x512.png",revision:"1a76cab613a0ee65dc8fd6fceeb2f3cf"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/resources/fonts/Avenir-Light.ttf",revision:"a63af4515330f507f19eca108f63a2a3"},{url:"/resources/fonts/Lulo-Clean.ttf",revision:"49f5a59a5e14e9f068454df25fd67a22"},{url:"/resources/images/cellcom.png",revision:"74a9e2e0500b1a9be5c33b2fbef2a426"},{url:"/resources/images/coinbank.png",revision:"afdb2c7953fcd11daf13b306cf42ec7b"},{url:"/resources/images/fazway.png",revision:"b7cb8dda857344dde950277a8e6f7152"},{url:"/resources/images/lukay.png",revision:"06a5902bf6c66991ea33b4d3ebcc06a0"},{url:"/resources/images/polehin.png",revision:"d8da4c4ae4d9717ab3ce09a0957c1302"},{url:"/resources/images/portloads.png",revision:"049d0caf78964b339b911904bb61d453"},{url:"/resources/images/rfs.png",revision:"9c314f74d5fa1737f0c5df63eb3d1754"},{url:"/resources/images/sellorcheckout.png",revision:"19ffedb74b9b2d4f430046f1c7390a53"},{url:"/resources/images/transup.png",revision:"4a1fb048dbd4cde794642f75c1f93012"},{url:"/sw.js.map",revision:"34f689b75da24e6a0df5638594efc329"},{url:"/workbox-1a4a986e.js.map",revision:"464b0efad31c2758c58b36268032d908"},{url:"/zeit.svg",revision:"7b2022f3692adf56949c7019f7ebb670"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));