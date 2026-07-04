import { ArrowRight, MapPin, PlayCircle } from 'lucide-react'

import { site, stats } from '../data/site'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__dot" aria-hidden="true" />
          {site.role} · available for selected projects
        </p>

        <h1 id="page-title" className="hero__title">
          {site.name}
        </h1>
        <p className="hero__tagline">{site.tagline}</p>

        <p className="hero__lead">{site.intro}</p>

        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="#contact">
            Book a session <ArrowRight aria-hidden="true" />
          </a>
          <a className="btn btn--ghost btn--lg" href="#reel">
            <PlayCircle aria-hidden="true" /> Listen to voice directions
          </a>
        </div>

        <p className="hero__location">
          <MapPin aria-hidden="true" /> {site.location}
        </p>

        <dl className="hero__stats" aria-label="Broadcast profile highlights">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <dt className="hero__stat-value">{s.value}</dt>
              <dd className="hero__stat-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
