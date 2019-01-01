import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

// TODO: maybe site can be common model
interface Props {
  data: {
    allMarkdownRemark: {
      group: any
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const TagsPage: React.SFC<Props> = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <section>
      <Helmet title={`Tags | ${title}`} />
      <h1 className="title is-size-2 is-bold-light">Tags</h1>
      <ul className="taglist">
        {group.map((tag: any) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
