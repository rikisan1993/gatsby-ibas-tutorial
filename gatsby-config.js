module.exports = {
  siteMetadata: {
      title: `RKSP`,
      description: `I'm a Gatsby.js Developer!`,
      author: `@rksp`,
      siteUrl: `https://www.rksp.dev`
  },
  plugins: [{
          resolve: 'gatsby-plugin-feed-generator',
          options: {
              generator: `GatsbyJS`,
              rss: true, // Set to true to enable rss generation
              json: true, // Set to true to enable json feed generation
              siteQuery: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `,
              feeds: [{
                  name: 'feed', // This determines the name of your feed file => feed.json & feed.xml
                  query: `
        {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]},
            limit: 100,
            ) {
            edges {
              node {
                html
                frontmatter {
                  date
                  path
                  title
                }
              }
            }
          }
        }
        `,
                  normalize: ({
                      query: {
                          site,
                          allMarkdownRemark
                      }
                  }) => {
                      return allMarkdownRemark.edges.map(edge => {
                          return {
                              title: edge.node.frontmatter.title,
                              date: edge.node.frontmatter.date,
                              url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                              html: edge.node.html,
                          }
                      })
                  }
              }]
          }
      },


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
              name: `gatsby-starter-default`,
              short_name: `starter`,
              start_url: `/`,
              background_color: `#663399`,
              theme_color: `#663399`,
              display: `minimal-ui`,
              icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
          }
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      `gatsby-plugin-offline`,
      `gatsby-plugin-sass`,
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: "src",
              path: `${__dirname}/src/`
          }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
          resolve: "gatsby-transformer-remark",
          options: {
              plugins: [{
                  resolve: "gatsby-remark-images",
                  options: {
                      maxWidth: 750,
                      linkImagesToOriginal: false,
                  }
              }]
          }
      }
  ],
}