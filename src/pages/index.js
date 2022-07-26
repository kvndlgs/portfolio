import * as React from "react";
import styled from 'styled-components';
import Layout from "../components/layout";
import { theme } from '../theme';
import Seo from "../components/seo";
// import { Link } from "gatsby";

const Hero = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-around;
 background: ${theme.colors.secondary};

/* hero media queries */
 @media(max-width: 960px) {
  flex-direction: column;
 }

  h2 {
    color: #fff;
    margin-bottom: ${theme.space[2]+'px'};
  }
  h5 {
    color: ${theme.colors.primary};
    margin-top: 0;
  }
 .hero-item {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${theme.space[4]+'px'} ${theme.space[4]+'px'};
  @media(max-width: 960px) {
    width: 100% !important;
    padding: ${theme.space[3]+'px'} ${theme.space[3]+'px'};
  }
 }
`


const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <Hero>
      <div className="hero-item">
        <h2> HELLO, I'M KEVIN. <br /> A FRONT END DEVELOPER <br /> & GRAPHIC DESIGNER <br /> FROM QUEBEC, CANADA. </h2>
        <h5> Crafting tailored, lovely websites and brands that works.</h5>
      </div>
      <div className="hero-item">
        <h2> FUCK YOU</h2>
        <h4> FUCK YOU</h4>
      </div>

    </Hero>
  </Layout>
)

export default IndexPage
