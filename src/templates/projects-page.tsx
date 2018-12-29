import { graphql } from 'gatsby'
import React from 'react'
import Content, { HTMLContent } from './../components/Content'
import Layout from './../components/Layout'

interface Props {
    html: any
    title: string
    projects: any[]
    contentComponent?: any
}

export const ProjectPageTemplate: React.SFC<Props> = ({ html, title, projects, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={html} />
              <ul>
                  {projects.map((project: any, index: number) => (
                    <li key={index}>
                      <div>{project.title}</div>
                      <div>{project.description}</div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectPage: React.SFC<{ data: any }> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectPageTemplate
        html={html}
        title={frontmatter.title}
        projects={frontmatter.projects}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        projects {
          title
          description
        }
      }
    }
  }
`