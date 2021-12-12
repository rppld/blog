const withOffline = require('next-offline')

const nextConfig = {
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  dontAutoRegisterSw: true,
  images: {
    domains: ['img2.storyblok.com', 'a.storyblok.com'],
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ]
  },
}

module.exports = withOffline(nextConfig)
