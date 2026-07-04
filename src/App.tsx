import { Mic2, PlayCircle, Sparkles, Waves } from 'lucide-react'

import './App.css'

const serviceHighlights = [
  'Commercial voice-over',
  'Narration and explainers',
  'Character and performance reads',
  'Clean remote recording workflow',
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__eyebrow">Voice actor · recording artist · performer</div>
        <h1 id="page-title">Stine — warm, expressive voice work for stories and brands.</h1>
        <p className="hero__copy">
          A polished portfolio foundation for a voice acting showcase. Dispatch will now expand this
          scaffold into the finished desktop and mobile site with samples, reel sections, and
          contact flows.
        </p>
        <div className="hero__actions" aria-label="Primary actions">
          <a className="button button--primary" href="mailto:booking@example.com">
            <Mic2 aria-hidden="true" /> Book a session
          </a>
          <a className="button button--secondary" href="#reel">
            <PlayCircle aria-hidden="true" /> Preview reel
          </a>
        </div>
      </section>

      <section className="panel" id="reel" aria-labelledby="reel-title">
        <div>
          <p className="section-kicker">Studio-ready foundation</p>
          <h2 id="reel-title">Built for a high-converting voice portfolio.</h2>
        </div>
        <div className="feature-grid">
          {serviceHighlights.map((item) => (
            <article className="feature-card" key={item}>
              <Waves aria-hidden="true" />
              <h3>{item}</h3>
              <p>Fast-loading, accessible, responsive presentation space for this offering.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-card" aria-label="Showcase promise">
        <Sparkles aria-hidden="true" />
        <p>
          This repository is intentionally set up with production-grade validation, containerized
          static hosting, and CI before the creative implementation work begins.
        </p>
      </section>
    </main>
  )
}

export default App
