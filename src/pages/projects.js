import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function Projects(){
    return (
        <Layout>
            <h1> PROJECTS </h1>
            <h3> Case Studies </h3>
            <h5> WEB </h5>
            <Link to="/markal-collective"> Markal Collective </Link>
            <h5> BRANDING </h5> 
        </Layout>
    )
}