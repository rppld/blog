module.exports = {
  siteMetadata: {
    title: "Photos",
    author: "Philipp Rappold",
    description:
      "Photography by Philipp Rappold, an information designer living in Amsterdam, NL."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json"
  ]
}
