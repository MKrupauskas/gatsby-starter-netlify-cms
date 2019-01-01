import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from './../components/Layout'

interface Props {
  data: {
    allMarkdownRemark: {
      edges: any[]
    }
  }
}

const Post = styled.div`
  border: 1px solid #333;
  padding: 2rem;
  margin-top: 1rem;
`

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const Title = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
`

const Date = styled.small`
  white-space: nowrap;
`

export default class IndexPage extends React.Component<Props> {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <section>
            <h1>Latest Stories</h1>
            {posts
              .map(({ node: post }) => (
                <Post key={post.id}>
                  <TitleBlock>
                    <Title to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Title>
                    <Date>{post.frontmatter.date}</Date>
                  </TitleBlock>
                  <p>
                    {post.excerpt}
                  </p>
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </Post>
              ))}
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
