
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/vijnanadeepam/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/vijnanadeepam/home",
    "route": "/vijnanadeepam"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3J64XOSM.js",
      "chunk-PNUOCIRW.js",
      "chunk-MKZQAQYH.js",
      "chunk-USBEN3PE.js",
      "chunk-I66AMD7G.js"
    ],
    "route": "/vijnanadeepam/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QZDXWHP5.js",
      "chunk-USBEN3PE.js",
      "chunk-I66AMD7G.js"
    ],
    "route": "/vijnanadeepam/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EDYTKP4R.js"
    ],
    "route": "/vijnanadeepam/administration"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R3RML7ZG.js"
    ],
    "route": "/vijnanadeepam/volunteers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVZSDDPS.js"
    ],
    "route": "/vijnanadeepam/libraries"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NE72LRYS.js"
    ],
    "route": "/vijnanadeepam/channels"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WSLO37JD.js"
    ],
    "route": "/vijnanadeepam/scholarships"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XUQYGVVY.js",
      "chunk-PNUOCIRW.js",
      "chunk-MKZQAQYH.js",
      "chunk-I66AMD7G.js"
    ],
    "route": "/vijnanadeepam/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TFOX4CDO.js",
      "chunk-MKZQAQYH.js"
    ],
    "route": "/vijnanadeepam/videos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TLPYL2VA.js"
    ],
    "route": "/vijnanadeepam/membership"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N32KYCQ5.js"
    ],
    "route": "/vijnanadeepam/orders-and-circulars"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WVPHQ63B.js"
    ],
    "route": "/vijnanadeepam/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NOB2JED5.js"
    ],
    "route": "/vijnanadeepam/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-45SPAZ2L.js"
    ],
    "route": "/vijnanadeepam/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6546, hash: '14a20e3314298baf7a38a0cb4ab2cd3f92ba50f6f507eb014fcb989e9f9bd0d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1904, hash: '892788f65758f62d38918880c153ea6a7b3daa4e9265c6ecad013bf90236ae2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'libraries/index.html': {size: 37402, hash: '9e215d64b315621eba631997325c4977dc01ee9d81edb2e2368d7a18cac779bc', text: () => import('./assets-chunks/libraries_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 38737, hash: '3319b19e81bc33a1d0a9fc2a2e7314ad3ee7c86d19411d93a30e66b744e7a54b', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'membership/index.html': {size: 37406, hash: 'f601daf03363231efe2a542cb642ae073b24de14d73d8149242c26b149b1609c', text: () => import('./assets-chunks/membership_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 49223, hash: '3539873682f14875b6ec1c577df18f9fc14467bbb1a7c80968e89c5f43b49ea5', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'administration/index.html': {size: 37421, hash: '8ee7227a6107deb9f728f2a302a193f31cd3fe6f8839ad4876e9ecf8761895d2', text: () => import('./assets-chunks/administration_index_html.mjs').then(m => m.default)},
    'channels/index.html': {size: 37398, hash: '66b5ced782c74a9049d1da83fdc8a2aeb231df51b9c3401e015cf565210ffa69', text: () => import('./assets-chunks/channels_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 52720, hash: '67c7ae53beb0d6b5aef506113ecd06c8f65c3fb8acda16990b9fc3cf1cfb709b', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'videos/index.html': {size: 43050, hash: '3f85e6dbb088c841205a215d7cf3209c94e3575acf1df39d0300fca684949e60', text: () => import('./assets-chunks/videos_index_html.mjs').then(m => m.default)},
    'scholarships/index.html': {size: 37414, hash: '9e79c1c7791414b18d6f837d9ee5d942d830de130351c9d59dec6275e55ebd09', text: () => import('./assets-chunks/scholarships_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 46005, hash: 'f37af9054d6f3bfb99e6a4814df9a9c3708b927a3abb095346603e3fc5cd3411', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 37449, hash: '37cd159f573e3de5a6d2ac36751c36deafeb1864d04a51acc03a2273242852bb', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'volunteers/index.html': {size: 37406, hash: '206e74d0ab04e3b7db8eec88b15ec8065c6992ed058c435d6e0ed781ee6faf5c', text: () => import('./assets-chunks/volunteers_index_html.mjs').then(m => m.default)},
    'orders-and-circulars/index.html': {size: 37452, hash: 'fb2971e396c3ff34f34703d13d5aed3ded6877e80bfafc05d416d00590b65f01', text: () => import('./assets-chunks/orders-and-circulars_index_html.mjs').then(m => m.default)},
    'styles-MYU37UF5.css': {size: 325718, hash: 'lj4C2yhbN/8', text: () => import('./assets-chunks/styles-MYU37UF5_css.mjs').then(m => m.default)}
  },
};
