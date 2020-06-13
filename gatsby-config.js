module.exports = {
  siteMetadata: {
    title: '3D Room Space',
    titleTemplate: "%s · A new way to find a place to live",
    author: 'Devin Bandara',
    position: 'Software Engineer',
    description: 'A new way to find a place to live',
    url: 'https://www.cbandara.com',
    image: './../assets/profile.jpeg',
    defaultImage: './src/assets/logo.png',
    twitterUsername: '@cbandara1010'
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Signika']
        }
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
              maxWidth: 780,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
