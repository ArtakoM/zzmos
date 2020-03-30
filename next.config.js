const withOffline = require('next-offline')

const config = {
  // transformManifest: manifest => ['/'].concat(manifest),
  // workboxOpts: {
  //   // Define runtime caching rules.
  //   runtimeCaching: [
  //     {
  //       // Match any request that ends with .png, .jpg, .jpeg, .svg. or webp
  //       urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,

  //       // Apply a cache-first strategy.
  //       handler: 'CacheFirst',

  //       options: {
  //         // Use a custom cache name.
  //         cacheName: 'images-chache',
          
  //         expiration: {
  //           maxEntries: 200,
  //         },
  //       },
  //     }
  //   ],
  // },
};

module.exports = withOffline(config);