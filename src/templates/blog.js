import React from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import listingsStyles from '../styles/listings.module.scss'

export const query = graphql`
query($id: String!) {
  realEstateListings(id: { eq: $id}) {
    id
    title
    address {
      city {
        long_name
        short_name
      }
      country {
        long_name
        short_name
      }
      county {
        long_name
        short_name
      }
      postal_code {
        long_name
        short_name
      }
      state {
        long_name
        short_name
      }
      street {
        long_name
        short_name
      }
      street_number {
        long_name
        short_name
      }
    }
  }
}
`

const Blog = (props) => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const alt = node.data.target.fields.ide
  //       const url = node.data.target.fields.file.url
  //       return <img alt={alt} src={url} />
  //     }
  //   }
  // }
  return (
    <Layout>
      <div >
        <div className={listingsStyles.blogContainer}>
          <h1>{props.data.realEstateListings.title}</h1>
          <div >
            {/* <p className={listingsStyles.postInfo}>{props.data.markdownRemark.frontmatter.date}</p>
            <p className={listingsStyles.postInfo}>{props.data.markdownRemark.frontmatter.author}</p>
            <p className={listingsStyles.postInfo}>{props.data.markdownRemark.frontmatter.twitter}</p> */}
          </div>

          {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}
        </div>
      </div>
    </Layout>
  )
}

export default Blog