import React from 'react'
import styled from 'styled-components'

interface Props {
    project: any
}

const ProjectBlock = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #333;
`

const Project: React.SFC<Props> = ({ project }) => (
  <ProjectBlock>
      <h3>{project.title}</h3>
      <div>{project.description}</div>
  </ProjectBlock>
)

export default Project
