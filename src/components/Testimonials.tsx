import React from 'react'
import { v4 } from 'uuid'

interface Testimonial {
  quote: string
  author: string
}

interface Props {
  testimonials: Testimonial[]
}

const Testimonials: React.SFC<Props> = ({ testimonials }: Props) => (
  <div>
    {testimonials.map((testimonial: Testimonial) => (
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

export default Testimonials
