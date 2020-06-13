import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'

import renting from "../assets/renting.png"
// import jslogo from "../assets/jslogo.png"


import homeStyles from '../styles/home.module.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata{
        position
      }
    }
  }`)

  return (
    <div>
      <Layout>

        <div className="content-div">
          <img width={400} src={renting} alt="3D Room Space"></img>
          <div className={homeStyles.taglineDiv} >
            <h2>We connect <span className={homeStyles.greenText}>landlords</span> and <span className={homeStyles.greenText}>renters</span> with a powerful
           authentication and verification platform for a
            medium term rental marketplace</h2>
          </div>
        </div>
      </Layout >
    </div>
  )
}

export default IndexPage