import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from '../styles/header.module.scss'
import logo from "../assets/logo.png"

const Header = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata{
        title, author
      }
    }
  }`)

  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.title} to="/">
        <img width={150} src={logo} alt="3D Room Space"></img>
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header