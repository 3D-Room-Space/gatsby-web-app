import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

import codepic from "../assets/code-pic.png"
// import jslogo from "../assets/jslogo.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import firebase from "../assets/firebase.png"
import nest from "../assets/nest.png"
import mongo from "../assets/mongo.png"
import postgre from "../assets/postgre.png"
import kubernetes from "../assets/kubernetes.png"
import gatsby from "../assets/gatsby.png"
import gcp from "../assets/gcp.png"
import shopify from "../assets/shopify.png"
import graphqlimg from "../assets/graphql.png"
import reduximg from "../assets/redux.png"

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
        <div>
          <div className="hero container">
            <div className="hero-child">
              <h1 className={homeStyles.fadeInDown}>Coming Soon...</h1>
            </div>
          </div>
        </div>
      </Layout >
    </div>
  )
}

export default IndexPage