module.exports = {
  siteMetadata: {
    title: "Photos — Philipp Rappold, Information Designer",
    author: "Philipp Rappold",
    description:
      "A photography archive of personal favourites by Philipp Rappold, an information designer in Amsterdam."
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
