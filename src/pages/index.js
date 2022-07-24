import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import { theme } from '../theme';
import Seo from "../components/seo"


const Box = styled.div`
  width: 100vw;
  height: auto;
  max-height: calc(100vh - 110px);
  padding:12rem 4rem;
  background: ${theme.colors.secondary};
  h1 {
    color: ${theme.colors.primary};
  }
`


const IndexPage = () => (
  <Layout>
    <Seo />
    <Box>
      <h1> HELLO, I'M KEVIN. <br/> FRONT END DEVELOPER / <br/> GRAPHIC DESIGNER <br/> BASED IN QUEBEC, CANADA. </h1>
    </Box>
  </Layout>
)

export default IndexPage
