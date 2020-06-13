import React from "react"
// import {Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
// import Header from '../components/header'

import renting from "../assets/renting.png"
import homeimg from "../assets/home.png"


import homeStyles from '../styles/home.module.scss'

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  // query {
  //   site {
  //     siteMetadata{
  //       position
  //     }
  //   }
  // }`)

  return (
    <div>
      <Layout>
        <div className="section">
          <h2>How It Works</h2>
          <div className="content-div">
            <img className={homeStyles.landingimg} width={350} src={renting} alt="3D Room Space"></img>
            <div className={homeStyles.taglineDiv} >
              <p>We connect <span className={homeStyles.greenText}>
                landlords</span> and <span className={homeStyles.greenText}>renters</span> with a powerful
           authentication and verification platform for a
            medium term rental marketplace</p>
            </div>
          </div>
          <div className="content-div content-div-reverse">
            <img className={homeStyles.landingimg} width={350} src={homeimg} alt="Find a new place to live without leaving home with contactless bookings"></img>
            <div className={homeStyles.taglineDiv} >
              <p>Find a new place to live without leaving home with contactless bookings</p>
            </div>
          </div>
        </div>
      </Layout >
    </div>
  )
}

export default IndexPage