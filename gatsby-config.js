/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: 'dev.teach',
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
            family: `Merriweather`,
            variants: [`400`]
          },
          {
            family: `Montserrat`,
            variants: [`800`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `800`]
          },
          {
            family: `Jost`,
            variant: [`400`, `800`]
          },
          {
            family: `Roboto Slab`,
            variant: [`400`,`800`]
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
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active : true,
              // Add a custom css class
              class  : 'emoji-icon',
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              escapeCharacter : '#', // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size   : 64,
              // Add custom styles
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                top          : '5px',
                width        : '25px'
              }
            }
          }
        ]
      }
    }
    
],
}
