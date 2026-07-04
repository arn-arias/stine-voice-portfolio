import { Captions, RadioTower, Waves } from 'lucide-react'

import { clientFit, testimonials } from '../data/site'
import { SectionHeading } from './SectionHeading'

const icons = [RadioTower, Captions, Waves]

export function Testimonials() {
  return (
    <section
      className="section testimonials proof"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <SectionHeading
        kicker="Public profile"
        title="A voice already woven into Danish broadcasting"
        id="testimonials-title"
      >
        Instead of invented testimonials, this page uses source-backed profile notes and keeps
        client quotes as future placeholders until named permissioned quotes are available.
      </SectionHeading>

      <div className="testimonials__grid proof__grid">
        {testimonials.map((t, index) => {
          const Icon = icons[index % icons.length]
          return (
            <article className="testimonial proof-card" key={t.author + t.role}>
              <Icon aria-hidden="true" className="testimonial__icon" />
              <p className="proof-card__statement">{t.quote}</p>
              <p className="proof-card__source">
                <span>{t.author}</span>
                <span>{t.role}</span>
              </p>
            </article>
          )
        })}
      </div>

      <div className="client-fit">
        <h3 className="client-fit__title">A strong fit for…</h3>
        <ul>
          {clientFit.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
