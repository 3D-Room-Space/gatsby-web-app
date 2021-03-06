require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
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
          "private_key_id": "3ea5c517f67051e2f4847e3f131fe34dacf52201",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDx8a/YB9MUXPSF\nIA+dCR1O//+t1XC5n4QflmYVsz6veIxFU8fcJcZITR1rCKrmVX69U56dh7OLY2rg\nd6DNk6GvvIEft914+FG+iDK2ikap0POZHAFWZ+xEthR5LgaVP+vlmOq8xjSWvvom\nCsKvQNRiRbdflzxBfEvaEKO9ik+PInUoL7m3zfbwbnaJzhfUz0UjCusGH8y8ocp+\n+uM7g1ZwbGI1XvfuuxoizJGmQHB8HCD0+uiUeNpxW8OU2dPCXxof1nbUPeuoyPbr\ntpm2rvf58pSmNvc4xUALUNtV0OqbNZFIipYy5NdSYzJ+7lKyhzKorNS6jojUVZNj\nBuK4nHjvAgMBAAECggEAR7kCC+Sl6k90HVLXzhG5ooW5Yer4M87Z+BM5yA0O9C2k\nR5kCknyQPza9FdHH9+g4Xh+/0as8yoF6WXidLtQpBlO3Y5O6D/ZtJTJy9jIfqI/M\n5wKqUtcT73qaryG5ydzdLX8bd0K6rEWJGmXuOM3bKBbKuYe30SHryoVMRRAPbbqR\nuHSUdXgb1HVUawdG1q9xXAL4QT5iU5kDWFJFFTpULsOQJ9G13WcRx2pOLvB25dii\nWHOil2+9iXVEOWCp3xTrpAwWKm9PCWKMAXbYU0TAkaPFByVS7dmP0Fdbm7qns7Te\nTCsuJXzdsMatV8LSV7zXNiqq0Br1kuVn9ebAsYqz4QKBgQD7WzGasqsxKt7B31Yo\n0SUpQC28kaeLU2x/pgSWuUpIYF0U5BerRRBYHbi36me2Is5rK+K2LmSE+PcjcDOQ\nhA+3gRwBfV5WE8mc50t+rs6FrtpJD5isHuJch/9oU3XgvZ9EM4OGPUJ8RBmWEpdQ\neY5Xp8+Gd8JeroYdyp8tqyLuiwKBgQD2afpQbsEJLVO2jwMOgevjIKH8zT87UtDz\ni+HvbxkK/cYNjLU5mCflaA+c5Jt1Ko7oG1g/vvdU+umVkRwS3IBDCRh1kdVkcxXx\n3gKCra4c7bFgDZnJMCzQuVqseOridkXlVxptnJ/WKKLsFa/LAQ9tmIgeGj39leE8\noLJ3AxlvrQKBgQDel1qtSW4rA3DzNUnCqbwD9M7MABzkWENsI2RK6dmrkJK9rmR7\nipS3w9JSJKYleFteMyX4+cqQqz2Ix5MSdrDIa/CWLSS+i5VuerGzhTBk2Hx8WPB1\n9H+3O8Rl6gsotCP3rLrbxSI8k74o1Vvkq1DvtS8lQKcDXABvH4GpWrV7kwKBgQCF\nRToZiF0kznwJL33SudfPZpXVuVgqiJb0McKHkcm0lR4ps+FL/gwN2eMf0tB1ZQgX\nZrqq92ijcHUm7G2HkfRYzTGKXM5R3qCOyKkI7lBN2wxky9ZR5plGZgkxYNCAnMEe\n0aY8hEo6NI4xK2WBYNhsSOPNjBnc7dP8y1jaXzXBnQKBgHZuJ6n5YtaEJePEItwl\nzvsyzdRMWDENZIXUL+wQdM19RpR4i4C1vneY/LV6MSjgOkDbp9kSUqIISx8NJBpz\nrnjbSQ41SsWzxDbSvD+kJnS+ILDlZ2DzMB8x4jwZ5Z2+tJvQBPjuw5fdUI2+iOB8\nas5WULEQkIo7spHyWC0bnc6h\n-----END PRIVATE KEY-----\n",
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