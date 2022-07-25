import * as React from "react";
import styled from 'styled-components';
import Layout from "../components/layout";
import { theme } from '../theme';
import Seo from "../components/seo";
import { Link } from "gatsby";

const Box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding:${theme.space[4] + 'px'} ${theme.space[3] + 'px'};
  background: ${({bgColor}) => bgColor ? bgColor : "white" };

  .hero {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: space-between;

    .hero-start {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      justify-content: center;
      h2 {
        color: ${theme.colors.primary};
        padding-bottom: 0;
      }
      a {
        margin: 0 ${theme.space[4]+'px'};
        padding: ${theme.space[2]+'px'} ${theme.space[3]+'px'};
        border-radius: 4px;
        background: ${theme.colors.primary};
      }
    }
    .hero-end {
      width:50%;
      width: 50%;
      display: flex;
      align-items:center;
      justify-content: center;
    }
    @media(max-width: ${theme.breakpoints[2]+'rem'}) {
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
    }
  }
  h3 {
    color: ${theme.colors.secondary};
  }
`


const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <Box bgColor={theme.colors.secondary}>
      <div className="hero">
        <div className="hero-start">
        <h2> HELLO, I'M KEVIN. <br/> FRONT END DEVELOPER / <br/> GRAPHIC DESIGNER <br/> BASED IN QUEBEC, CANADA. </h2>
        <Link to="/projects"> SEE MY WORK </Link>
     </div>
     <div className="hero-end">
      <h3> FUCK YOU</h3>
     </div>
     </div>
    </Box>
    <Box bgColor={theme.colors.primary}>
      <p> RECENT PROJECTS </p>
    </Box>
  </Layout>
)

export default IndexPage
