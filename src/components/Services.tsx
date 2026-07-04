import { Check } from 'lucide-react'

import { services } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <SectionHeading
        kicker="What I do"
        title="Services built around your project"
        id="services-title"
      >
        Whatever the format, you get a broadcast-ready voice and a producer who makes the process
        easy.
      </SectionHeading>

      <div className="services__grid">
        {services.map((service, i) => (
          <article className="service-card" key={service.title}>
            <span className="service-card__num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3>{service.title}</h3>
            <p className="service-card__desc">{service.description}</p>
            <ul className="service-card__points">
              {service.points.map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" /> {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
