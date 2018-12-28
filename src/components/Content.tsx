import PropTypes from 'prop-types'
import React from 'react'

interface HTMLContentProps {
  content: string
  className?: string
}

export const HTMLContent: React.SFC<HTMLContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

interface ContentProps {
  content: string
  className?: string
}

const Content: React.SFC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
}

HTMLContent.propTypes = Content.propTypes

export default Content
