import React from 'react'

interface HTMLContentProps {
  content: string
  className?: string
}

export const HTMLContent: React.SFC<HTMLContentProps> = ({
  content,
  className,
}: HTMLContentProps) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

interface Props {
  content: React.ReactNode
  className?: string
}

const Content: React.SFC<Props> = ({ content, className }: Props) => (
  <div className={className}>{content}</div>
)

export default Content
