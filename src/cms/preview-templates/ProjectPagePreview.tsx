import React from 'react'
import { ProjectPageTemplate } from '../../templates/projects-page'

const ProjectPagePreview: React.SFC<{ entry: any, widgetFor: any }> = ({ entry, widgetFor }) => (
  <ProjectPageTemplate html={widgetFor('body')} title={entry.getIn(['data', 'title'])} projects={entry.getIn(['data', 'projects'])}/>
)

export default ProjectPagePreview
