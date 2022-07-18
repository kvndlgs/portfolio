/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../../src/theme'

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin:0;
  }
`


const WrappedLayout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  )
}



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  
    <WrappedLayout>
      <Header />

        <main>{children}</main>
        <footer
        >
          © {new Date().getFullYear()} &middot; Kevin Desloges
          {` `}
        </footer>
        </WrappedLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
