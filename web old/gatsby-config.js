module.exports = {
  siteMetadata: {
    title: `shreyaspapi`,
    description: `Persoal site of Shreyas Papinwar, a Developer and entrepreneur.`,
    author: `Shreyas Papinwar`,
    twitterUsername: '@spapinwar',
    url: 'https://www.shreyasp.me', // No trailing slash allowed!
    image: 'https://raw.githubusercontent.com/shreyaspapi/shreyaspapi.github.io/master/web/src/images/aboutPreview.png?token=AFKKMQWWCMKEOWHBA73S6PK72IIJ2'

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Developer + Entrepreneur`,
        short_name: `shreyaspapi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#0038FE`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'fhkd8i32',
        dataset: 'production',
        options: {
          watchMode: true,
          overlayDrafts: true,
        },
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
