import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1 className="main-title">Contact</h1>
      <div className="container contact-section">
        <a href="mailto:gabriel@3droomspace.com" target='blank'>
          <button className="button contact-button">EMAIL</button>
        </a>
      </div>

    </Layout>
  )
}

export default ContactPage