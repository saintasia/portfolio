module.exports = {
  siteMetadata: {
    title: `Anastasia K. - Digital Designer & Creator`,
    description: `UI/UX designer and front-end devleoper.`,
    author: `@saintasia`,
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
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@saintasia`,
        limit: 5,
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
          // You can get your Access Token by following this tutorial: http://developer.dribbble.com/v2/oauth/
          access_token: '77bb40ca541c390e7351f1be9fa07a5877b4950874729bc9ca2c0ac745e533ef'
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `saintasia-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /images/
          }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display:700,900', 'Raleway:400,400i,700,700i']
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
