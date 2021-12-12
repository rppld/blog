module.exports = {
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
  },
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
