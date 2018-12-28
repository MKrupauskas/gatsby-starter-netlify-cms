import PropTypes from 'prop-types'
import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

interface Props {
  entry: any
  widgetFor: any
}

const BlogPostPreview: React.SFC<Props> = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
