import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

interface Props {
  entry: {
    getIn: (arg: any) => any
  }
  widgetFor: (id: string) => string
}

const BlogPostPreview: React.SFC<Props> = ({ entry, widgetFor }: Props) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default BlogPostPreview
