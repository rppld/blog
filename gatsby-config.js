module.exports = {
  siteMetadata: {
    author: 'Philipp Rappold',
    tagline: 'Developer',
    email: 'philipprappold@me.com',
    description:
      'Philipp Rappold is an information designer and front-end developer in Amsterdam, working at the intersection of design and technology. He takes photos for fun.',
    pageTransitions: false,
    pageTransitionDuration: 250,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'hiyf4gx234zw',
        accessToken:
          'ccfd02096c091022bcea8646cb59711abba65f7bc2947c81132ad191a4f0ff9d',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
  ],
}
