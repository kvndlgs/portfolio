import * as React from "react";
import styled from 'styled-components';
import Layout from "../components/layout";
import { theme } from '../theme';
import Seo from "../components/seo";
import Nuke from '../images/nuke.png';
// import { graphql } from "gatsby";


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
.text {
  h2 {
    color: #fff;
    margin-bottom: ${theme.space[2]+'px'};
  }
  h5 {
    color: ${theme.colors.primary};
    margin-top: 0;
  }
}
 .hero-item {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${theme.space[4]+'px'} ${theme.space[4]+'px'};
  :first-child {
    margin-left: ${theme.space[4]+'px'};
    @media(max-width:960px){
      margin:0;
    }
  }
  :last-child {
    align-items:flex-end;
    align-items:center;
    margin-right: ${theme.space[4]+'px'};
    @media(max-width:960px){
      margin:0;
    }
  }
  img {
    max-width:500px;
    transform: rotateZ(23deg);
    @media(max-width:960px){
      max-width:360px;
    }
  }
  @media(max-width: 960px) {
    h2, h3 {
        font-size: 80%;
    }
    width: 100% !important;
    padding: ${theme.space[4]+'px'} ${theme.space[3]+'px'};
    justify-content: center;
    align-items:center;
    img {
        display: none;
    }
  }
 }
`


function IndexPage() {
  return (
  <Layout>
    <Seo title="Portfolio" />
    <Hero>
      <div className="hero-item">
        <div className="text">
        <h2>  HELLO, I'M KEVIN. A FRONT END DEV  & GRAPHIC DESIGNER FROM QUEBEC, CANADA.  </h2>
        <h5> Crafting tailored websites and lovely brands.</h5>
        </div>
      </div>
      <div className="hero-item">
        <img src={Nuke} alt="yo"/>
      </div>
    </Hero>
  </Layout>
  )
 }

export default IndexPage
