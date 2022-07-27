import {Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo';

const Project = ({project}) => {
    return (
        <li>
            <h4> { project.title }</h4>
            <Link to={`/projects/${project.projectName}`}><img src={project.thumbnailImage.url} alt={project.projectName} /> </Link>
            
        </li>
    )
}


export default function Projects({data}) {
    return (
        <Layout>
            <Seo title="Projects" />
        <ul>
            {data.allContentfulProject.edges.map((project) => 
             <Project project={project.node} />
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
                projectName
                subtitle
                type
                text {
                    raw
                }
                coverImage {
                    url
                }
                thumbnailImage {
                    url
                }
            }
        }
    }
 }
`