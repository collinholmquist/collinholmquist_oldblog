/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: 'progammatic ponderings',
    author: 'collin holmquist',
    twitter: 'www.twitter.com/collinholmquist',
    github: 'www.github.com/collinholmquist',
    gmail: 'collinholmquist@gmail.com',
  },

  /* Your site config here */
  plugins: ['gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Droid Sans`
          },
          {
            family: `Montserrat`,
            variants: [`800`]
          },
          {
            family: `Muli`,
            variants: [`500`]
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
                maxWidth: 750,
                linkImagesToOriginal: false,
            }
          }
        ]
      }
    }
    
],
}
