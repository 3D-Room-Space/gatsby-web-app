import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <div className="content-div">
        <h1 className="main-title">Contact</h1>
        <div className="content-div contact-section">
          <a href="mailto:gabriel@3droomspace.com" target='blank'>
            <button className="button contact-button">EMAIL</button>
          </a>
        </div>
      </div>


    </Layout>
  )
}

export default ContactPage