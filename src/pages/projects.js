import {Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo';

const Project = ({node}) => {
    return (
        <li>
        
            <Link to={node.title}> {node.title}</Link>
            
        </li>
    )
}


export default function Projects({data}) {
    return (
        <Layout>
            <Seo title="Projects" />
        <ul>
            {data.allContentfulProject.edges.map((edge) => 
             <Project node={edge.node} />
            )}
        </ul>
        </Layout>

    )
}


export const pageQuery = graphql`
 query pageQuery {
    allContentfulProject(filter: {
        node_locale: {eq: "en-US"}
    }) {
        edges {
            node {
                title
            }
        }
    }
 }
`