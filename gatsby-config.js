module.exports = {
  siteMetadata: {
    author: "Philipp Rappold",
    title: "Information Designer",
    email: "hi@rppld.co",
    description:
      "Philipp Rappold is an information designer and front-end developer in Amsterdam, working at the intersection of design and technology. He takes photos for fun."
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
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Philipp Rappold",
        short_name: "Rppld.co",
        start_url: "/",
        background_color: "#bbeffd",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: "/favicon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
}
