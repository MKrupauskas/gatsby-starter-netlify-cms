import React from 'react'
import { ProjectPageTemplate } from '../../templates/projects-page'

interface Props {
  entry: {
    getIn: (args: any) => any
  }
  widgetFor: (id: string) => string
}

const ProjectPagePreview: React.SFC<Props> = ({ entry, widgetFor }: Props) => {
  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []

  return (
    <ProjectPageTemplate
      html={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      projects={projects}
    />
  )
}

export default ProjectPagePreview
