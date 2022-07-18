require('dotenv').config()


module.exports = {
  siteMetadata: {
    title: `Kevin Desloges | Graphic Designer | Front End Developer`,
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
        icon: `src/images/kd.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
