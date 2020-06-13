import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
// import arrowright from "../assets/arrow-right.svg"

import listingsStyles from '../styles/listings.module.scss'

const ListingsPage = () => {
  const data = useStaticQuery(graphql`
    query {
  allRealEstateListings {
    edges {
      node {
        id
        photo
        title
        price
        address {
          street {
            long_name
            short_name
          }
          city {
            long_name
          }
          country {
            short_name
            long_name
          }
          county {
            long_name
            short_name
          }
          postal_code {
            short_name
            long_name
          }
          street_number {
            long_name
            short_name
          }
          state {
            long_name
            short_name
          }
        }
      }
    }
  }
}
  `)

  return (
    <Layout>
      <div className={listingsStyles.listingsSection}>
        <h1 className="main-title">Listings</h1>
        <ol className={listingsStyles.blogList}>
          {data.allRealEstateListings.edges.map((edge) => {
            return (
              <Link to={`/listings/${edge.node.id}`} className={listingsStyles.cardLink}>
                <li key={edge.node.id} className={listingsStyles.blogCard}>
                  <div>
                    <div>
                      <img src={edge.node.photo} className={listingsStyles.mainListingPhoto}
                        alt={edge.node.title} />
                    </div>
                    <div className={listingsStyles.listingInfoBox}>
                      <h4>{edge.node.title}</h4>
                      <p className={listingsStyles.addressInfo}>{edge.node.address.street_number.short_name} {edge.node.address.street.short_name}</p>
                      <p>{edge.node.address.city.long_name}, {edge.node.address.state.short_name} {edge.node.address.postal_code.short_name}</p>
                      <p>{edge.node.price}</p>
                    </div>
                  </div>
                </li>
              </Link>
            )
          })}
        </ol>
      </div>
    </Layout >
  )
}

export default ListingsPage