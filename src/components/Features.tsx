import PropTypes from 'prop-types'
import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

interface Props {
  gridItems: any
}

const FeatureGrid: React.SFC<Props> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item: any) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                display: 'inline-block',
                width: '240px',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
