import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import Header from "./header"
import 'normalize.css';
import '../css/typography.css';

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
  :before {
    box-sizing: border-box;
  }
  :before {
    box-sizing: border-box;
  }
 }
 html {
  font-size: 16px;
 }
  body {
    padding: 0;
    margin:0;
    font-family: ${theme.fonts.sansSerif}
  }

   a {
    font-size: 90%;
    font-weight:${theme.fontWeights[2]};
    letter-spacing: 1.5px;
    text-decoration: none;
   }

   h1, h2, h3, h4, h5 {
    font-family: ${theme.fonts.sansSerif};
    padding: ${theme.space[4]};
    letter-spacing: 2px;
   }
   h1 {
    font-size: 67.34px;
    font-weight: ${theme.fontWeights[6]};
   }
   h2 {
    font-size: 50.52px;
   }
   h3 {
    font-size: 37.9px;
   }
   h4 {
    font-size: 28.43px;
   }
   h5 {
    font-size: 21.33px;
    font-weight: ${theme.fontWeights[4]};
   }
   p {
    font-family: ${theme.fonts.sansSerif};
    font-weight: ${theme.fontWeights[1]};
    font-size: 88%;
    letter-spacing: 1.5px;
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
        Kevin Desloges © {new Date().getFullYear()}
          {` `}
        </footer>
        </WrappedLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
