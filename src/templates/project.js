import * as React from 'react';
// import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default function Project({props}) {
    const { title } = props.data.contentfulProject;
    return (
        <Layout>
             <h2> { title }</h2>
        </Layout>
    )
}

export const pageQuery = graphql`
 query projectQuery($title: String!){
    contentfulProject(title: {eq: $title}) {
        title
    }
 }
`