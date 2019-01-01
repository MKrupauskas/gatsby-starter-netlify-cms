import { graphql } from 'gatsby'
import React from 'react'
import { v4 } from 'uuid'

import Content, { HTMLContent } from './../components/Content'
import Layout from './../components/Layout'
import Project from './../components/Project'

interface Props {
    html: any
    title: string
    projects: any[]
    contentComponent?: any
}

export const ProjectPageTemplate: React.SFC<Props> = ({ html, title, projects, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h2>
        {title}
      </h2>
      <PageContent className="content" content={html} />
      <div>
          {projects.map((project: any) => <Project key={v4()} project={project} />)}
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