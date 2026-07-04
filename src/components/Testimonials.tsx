import { Check, Quote } from 'lucide-react'

import { clientFit, testimonials } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  return (
    <section
      className="section testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <SectionHeading
        kicker="Client fit"
        title="Trusted by the people behind the work"
        id="testimonials-title"
      />

      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <figure className="testimonial" key={t.author + t.role}>
            <Quote aria-hidden="true" className="testimonial__icon" />
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="testimonial__author">{t.author}</span>
              <span className="testimonial__role">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="client-fit">
        <h3 className="client-fit__title">A great fit if you&rsquo;re…</h3>
        <ul>
          {clientFit.map((item) => (
            <li key={item}>
              <Check aria-hidden="true" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
