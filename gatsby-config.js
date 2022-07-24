require('dotenv').config({
  path: `.env${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `KVDS`,
    description: `Portfolio.`,
    author: `@kvndlgs`,
    siteUrl: `https://kvds.me`,
    keywords: ['designer', 'web developer', 'montreal', 'affordable website', 'saint-jérome'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      disableVendorPrefixes: true,
      displayName: true,
    },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Desloges portfolio`,
        short_name: `Graphic designer and front end developer`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
