import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'
import SEO from './seo'

const Layout = (props) => {
  return (
    <div className={layoutStyles.safearea}>
      <div className={layoutStyles.content}>
        <SEO />
        <div className={layoutStyles.heroImgDiv}>
          <div>
            <Header />
            <div className="hero">
              <h1 className={layoutStyles.logoTitle}>3D Room Space</h1>
            </div>
          </div>
        </div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout