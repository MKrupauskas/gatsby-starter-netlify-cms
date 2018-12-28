import PropTypes from 'prop-types'
import React from 'react'
import { v4 } from 'uuid'

interface Props {
  testimonials: any[]
}

const Testimonials: React.SFC<Props> = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      quote: PropTypes.string,
    })
  ),
}

export default Testimonials
