import * as React from 'react';
import {StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const Half = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
`

export default function MarkalCollective(){
    return (
        <Layout>
            <h4> CASE STUDY </h4>
            <h3>LES STUDIO MARKAL COLLECTIVE </h3>
            <Half>
            <div className="text">
                <h3> HOME PAGE </h3>
                <p> </p>
            </div>
            <StaticImage src="../../images/homepagex2.png" />
            <h3> SERVICES </h3>
            <StaticImage src='../../images/servicesx2.png' />
            <h3> BEATS </h3>
            <StaticImage src='../../images/beatsx2.png' />
            </Half>
        </Layout>
    )
}