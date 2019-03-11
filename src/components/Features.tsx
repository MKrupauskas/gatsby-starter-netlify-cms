import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

interface GridItem {
  text: string
  image: any
}

interface Props {
  gridItems: GridItem[]
}

const FeatureGrid: React.SFC<Props> = ({ gridItems }: Props) => (
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

export default FeatureGrid
