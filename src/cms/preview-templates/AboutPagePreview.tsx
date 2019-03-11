import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

interface Props {
  entry: {
    getIn: (arg: any) => any
  }
  widgetFor: (id: string) => string
}

const AboutPagePreview: React.SFC<Props> = ({ entry, widgetFor }: Props) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default AboutPagePreview
