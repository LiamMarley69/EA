
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Evidencia/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/Evidencia"
  },
  {
    "renderMode": 2,
    "route": "/Evidencia/details/1"
  },
  {
    "renderMode": 2,
    "route": "/Evidencia/details/2"
  },
  {
    "renderMode": 2,
    "route": "/Evidencia/details/3"
  },
  {
    "renderMode": 2,
    "route": "/Evidencia/details/4"
  },
  {
    "renderMode": 2,
    "route": "/Evidencia/details/5"
  },
  {
    "renderMode": 0,
    "route": "/Evidencia/details/*"
  },
  {
    "renderMode": 0,
    "route": "/Evidencia/admin"
  },
  {
    "renderMode": 0,
    "route": "/Evidencia/admin/users"
  },
  {
    "renderMode": 0,
    "route": "/Evidencia/admin/products"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 439, hash: 'd4efffe06d3215656eb581247dc83e225767587632e4d0c81d8e01bdd9a5552a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: 'bbabeb8932cc3442f9a533cf3dbaaa2126edde487c32f4c7eff2edea1e29cdcb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'details/2/index.html': {size: 2964, hash: '40fc318e6dd39660a7bcb99826e9f6bc3e086aa69488e09379026e8d8d8b7b46', text: () => import('./assets-chunks/details_2_index_html.mjs').then(m => m.default)},
    'details/3/index.html': {size: 2964, hash: '3fd3fb1dd9bdf425c4bbd601d4375594e6b4bc9abe45bc1fd21b11b01c2cf5be', text: () => import('./assets-chunks/details_3_index_html.mjs').then(m => m.default)},
    'details/1/index.html': {size: 2964, hash: 'd6d95078098f4daa629fe78deb53ea86ec8758cdec9b7ee3135c380d0d94f2c7', text: () => import('./assets-chunks/details_1_index_html.mjs').then(m => m.default)},
    'details/4/index.html': {size: 2964, hash: '71107fed345be6e186a508630386ff4cf6e68ea9d827d1c75a097e4560141446', text: () => import('./assets-chunks/details_4_index_html.mjs').then(m => m.default)},
    'details/5/index.html': {size: 2964, hash: '11ce94f509a0af132cd808e8a8b2fcac80496900cfd5b18b552e41e840d3d83d', text: () => import('./assets-chunks/details_5_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
