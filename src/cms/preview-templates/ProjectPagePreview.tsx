import React from 'react'
import { ProjectPageTemplate } from '../../templates/projects-page'

const ProjectPagePreview: React.SFC<{ entry: any, widgetFor: any }> = ({ entry, widgetFor }) => {
  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []

  return <ProjectPageTemplate
    html={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    projects={projects}
  />
}

export default ProjectPagePreview
