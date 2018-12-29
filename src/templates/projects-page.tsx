import { graphql } from 'gatsby'
import React from 'react'
import Content, { HTMLContent } from './../components/Content'
import Layout from './../components/Layout'

export const ProjectPageTemplate: React.SFC<{}> = () => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {'Projects'}
              </h2>
              <Content className="content" content={'Projects content'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectPage: React.SFC<{}> = () => {
  return (
    <Layout>
      <ProjectPageTemplate />
    </Layout>
  )
}

export default ProjectPage

// export const aboutPageQuery = graphql`
//   query AboutPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
