const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

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
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: {
          "type": "service_account",
          "project_id": "d-room-space-firebase",
          "private_key_id": process.env.FIRESTORE_KEY_ID,
          "private_key": process.env.FIRESTORE_KEY,
          "client_email": "firebase-adminsdk-9roqr@d-room-space-firebase.iam.gserviceaccount.com",
          "client_id": "103642250426461597519",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9roqr%40d-room-space-firebase.iam.gserviceaccount.com",
          "timestampsInSnapshots": "true"
        },
        types: [
          {
            type: 'real_estate_listings',
            collection: 'real_estate_listings',
            map: doc => ({
              address: doc.address,
              photo: doc.photo,
              title: doc.title,
              price: doc.price,
            }),
          },
        ],
      },
    },
  ]
}