import * as React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import {createGlobalStyle, ThemeProvider } from 'styled-components'
import Seo from './seo';
import { theme } from '../theme'
import Header from "./header"
import Footer from './footer';
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
  font-size: 96%;
  @media(max-width: 1024px) {
    font-size: 82%;
  }
 }
  body {
    padding: 0;
    margin:0;
    font-family: ${theme.fonts.sansSerif};
    line-height: ${theme.lineHeights.body};
  }

   a {
    font-size: 1rem !important;
    color: ${theme.colors.secondary};
    letter-spacing: 1.1px;
    text-decoration: none;
    font-weight: 700;
   }

   h1, h2, h3, h4, h5 {
    letter-spacing: 1.6px;
    font-optical-sizing: auto;
    line-height: ${theme.lineHeights.heading};
   }
   h1 {
    margin-top: 0;
    font-size: 3.052rem !important;
    font-weight: 700;
   }
   h2 {
    font-size: 2.441rem !important;
    font-weight: 600;
   }
   h3 {
    font-size: 1.953rem !important;
   }
   h4 {
    font-size: 1.563rem !important;
    font-weight:400;
   }
   h5 {
    font-size: 1.25rem !important;
    font-weight:200;
   }
   p {
    font-size: 0.8rem !important;
    letter-spacing: 1.5px;
  }

  small, .text_small {
    font-size: 0.76rem !important;
    font-weight: 700;
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
      <Seo title={`Title` | data.site.siteMetadata?.title } />
       <Header />
        <main>{children}</main>
        <Footer />
        </WrappedLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
