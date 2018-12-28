import PropTypes from 'prop-types'
import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

interface Props {
  entry: any
  widgetFor: any
}

const AboutPagePreview: React.SFC<Props> = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
