import {Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { theme } from '../theme';
import * as React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo';

const ProjectList = styled.div`
  margin:0;
  padding:${theme.space[3]+'px'} ${theme.space[5]+'px'};
  margin: ${theme.space[2]+'px'};
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  @media(max-width:960px) {
    flex-direction: column;
    padding: ${theme.space[2]+'px'};
    width: 100%;
    height: auto;
    align-items:center;
    justify-content:center;
  }
  
`

const ProjectListItem = styled.div`
 display: flex;
 flex-direction: column;
 a  {
    img {
    max-width: 320px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
 }
`

const Project = ({project}) => {
    return (
        <ProjectListItem>
            <h4> { project.title }</h4>
            <Link to={`/projects/${project.projectName}`}><img src={project.thumbnailImage.url} alt={project.projectName} /> </Link>
        </ProjectListItem>
    )
}


export default function Projects({data}) {
    return (
        <Layout>
            <Seo title="Projects" />
        <ProjectList>
            {data.allContentfulProject.edges.map((project) => 
             <Project project={project.node} />
            )}
        </ProjectList>
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