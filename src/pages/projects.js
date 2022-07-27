import {Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { theme } from '../theme';
import * as React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo';

const ProjectList = styled.div`
  margin:0;
  padding:${theme.space[4]+'px'} ${theme.space[5]+'px'};
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  @media(max-width:960px) {
    flex-direction: column;
    padding: ${theme.space[4]+'px'} ${theme.space[2]+'px'};
    height: auto;
    align-items:center;
    justify-content:center;
  }
  
`

const ProjectListItem = styled.div`
 display: flex;
 flex-direction: column;
 padding: ${theme.space[2]+'px'};
 a  {
    display: flex;
    align-items:center;
    justify-content:center;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    border-radius: 18px;
    border:5px solid #f1f1f1;
    background: transparent;
    img {
    max-width: 300px;
    }
 }
`

const ProjectLink = ({project}) => {
    return (
        <ProjectListItem>
            <Link to={`/projects/${project.projectName}`}><img src={project.thumbnailImage.url} alt={project.projectName} /> </Link>
            <h4> { project.title }</h4>
        </ProjectListItem>
    )
}


export default function Projects({data}) {
    return (
        <Layout>
            <Seo title="Projects" />
            <h2>PROJECTS</h2> 
        <ProjectList>
            {data.allContentfulProject.edges.map((project) => 
             <ProjectLink project={project.node} />
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