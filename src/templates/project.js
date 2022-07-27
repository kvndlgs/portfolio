import * as React from 'react';
// import styled from 'styled-components';
// import { theme } from '../theme';
// import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Seo from '../components/seo';


export default function Project({projectName, title, text }) {
    return (
        <Layout>
            <Seo title={title} />
             <h2> { projectName }</h2>
             <div>
                {text}
             </div>
        </Layout>
    )
}


export const pageQuery = graphql`
 query projectQuery{
    contentfulProject {
        id
        title
        projectName
        text {
            raw
        }
    }
 }
`
