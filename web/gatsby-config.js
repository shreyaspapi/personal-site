module.exports = {
  siteMetadata: {
    title: `shreyaspapi`,
    description: `Persoal site of Shreyas Papinwar, a Developer and entrepreneur.`,
    author: `Shreyas Papinwar`,
    twitterUsername: '@spapinwar',
    url: 'https://www.shreyasp.me', // No trailing slash allowed!
    image: 'https://cdn.sanity.io/images/h2w4qpx8/production/8c8ab9aff37b358a8db3bf9a6555964b706d8a78-2870x1486.png?h=400&fit=max'

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
