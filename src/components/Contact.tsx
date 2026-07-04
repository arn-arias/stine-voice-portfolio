import { ArrowUpRight, Clock, Mail } from 'lucide-react'

import { site } from '../data/site'

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__card">
        <div className="contact__glow" aria-hidden="true" />
        <p className="kicker">Let&rsquo;s work together</p>
        <h2 id="contact-title" className="contact__title">
          Have a script? Let&rsquo;s make it sound unforgettable.
        </h2>
        <p className="contact__lead">
          Tell me about your project — the format, deadline and the feeling you&rsquo;re after — and
          I&rsquo;ll reply with availability and a clear, flat quote.
        </p>

        <div className="contact__actions">
          <a
            className="btn btn--primary btn--lg"
            href={`mailto:${site.email}?subject=Voice-over%20booking%20enquiry`}
          >
            <Mail aria-hidden="true" /> {site.email}
          </a>
          <a className="btn btn--ghost btn--lg" href="#reel">
            Hear the reel first <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <p className="contact__meta">
          <Clock aria-hidden="true" /> Share format, usage, deadline and tone direction for the
          fastest reply.
        </p>
      </div>
    </section>
  )
}
