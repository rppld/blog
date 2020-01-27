const withOffline = require('next-offline')

module.exports = withOffline({
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
  },
})
