import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default function ProjectTemplate({ pageContext  }) {
    const { project } = pageContext
    return (
        <Layout>
            <h2> { project.title } </h2>
            <h3> { project.type } </h3>
            <a href={project.name}> { project.name }</a>
        </Layout>
    )
}