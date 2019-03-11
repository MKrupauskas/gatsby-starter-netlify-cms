import { graphql } from 'gatsby'
import React from 'react'
import Content, { HTMLContent } from './../components/Content'
import Layout from './../components/Layout'

interface Props {
  title: string
  content: string
  contentComponent?: any
}

interface AboutPageProps {
  data: any
}

export const AboutPageTemplate: React.SFC<Props> = ({
  title,
  content,
  contentComponent,
}: Props) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h2>{title}</h2>
      <PageContent className="content" content={content} />
    </section>
  )
}

const AboutPage: React.SFC<AboutPageProps> = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
