import * as React from 'react';
// import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default function Project({projectName}) {
    return (
        <Layout>
             <h2> { projectName }</h2>
        </Layout>
    )
}


export const pageQuery = graphql`
 query projectQuery($projectName: String){
    contentfulProject(projectName: {eq: $projectName}) {
        projectName
    }
 }
`
