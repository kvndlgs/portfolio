{/*

import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from 'contentful/rich-text-plain-text-renderer'

import Seo from '../components/seo'
import Layout from '../components/layout'

class ProjectTemplate extends React.Component {
    render() {
        const project = get(this.props, 'data.contentfulProject')
        const previous = get(this.props, 'data.previous')
        const next = get(this.props, 'data.next')
        const plainTextBody = documentToPlainTextString(JSON.parse(project.body.raw))

        return (
            <Layout location={this.props.location}>
                <Seo
                  title={project.title}
                  description={plainTextDescription}
                  image={`http:${project.heroImage.resize.src}`}
                />
                <div>
                    {project.author?.name} &middot;{' '}
                    <time dateTime={project.rawDate}>{project.publishDate}</time> - {' '}
                  <div>
                    { project.body?.raw && renderRichText(project.body)}
                  </div>
                  <nav>
                    <ul>
                        {previous && (
                                <li>
                                    <Link to={`/projects/${previous.slug}`} rel="prev">
                                    ←  { previous.title }
                                    </Link>
                                </li>
                        )}
                        {
                            next && (
                                <Link to={`/project/${next.slug}`} rel="next">
                                    { next.title } →
                                </Link>
                            )
                        }
                    </ul>
                  </nav>
                </div>
            </Layout>
        )
    }
}

export default ProjectTemplate

export const pageQuery = graphql`
 query ProjectBySlug(
    $slug: String!
    $previousProjectSlug: String
    $nextProjectSlug: String
 ) {
    contentfulProject(slug: { eq: $slug }) {
        slug
        title
        author {
            name
        }
        publishDate(formatString: 'MMMM Do, YYYY')
        rawDate: publishDate
        heroImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
            resize(height: 630, width: 1200) {
                src
            }
        }
        body {
            raw
        }
        tags
        description {
            raw
        }
    }
    previous: contentfulProject(slug: { eq: $previousProjectSlug}) {
        slug
        title
    }
    next: contentfulProject(slug: { eq: $nextProjectSlug}) {
        title
        slug
    }
 }
`

*/}