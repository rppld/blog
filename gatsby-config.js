module.exports = {
  siteMetadata: {
    title: "Philipp Rappold, Information Designer",
    email: "hi@rppld.co",
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
