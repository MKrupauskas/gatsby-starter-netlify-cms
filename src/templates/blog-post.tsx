import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from './../components/Content'
import Layout from './../components/Layout'

interface Props {
  content: string
  contentComponent?: any
  description: string
  tags: string[]
  title: string
  helmet?: any
}

interface BlogPostProps {
  data: any
}

export const BlogPostTemplate: React.SFC<Props> = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}: Props) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet}
      <h1>{title}</h1>
      <p>{description}</p>
      <PostContent content={content} />
      {tags && tags.length && (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

const BlogPost: React.SFC<BlogPostProps> = ({ data }: BlogPostProps) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
