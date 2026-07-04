import { site, stats } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="about__grid">
        <div className="about__portrait" aria-hidden="true">
          <div className="about__portrait-inner">
            <span className="about__initials">SD</span>
            <span className="about__waves" />
          </div>
        </div>

        <div className="about__body">
          <SectionHeading kicker="About" title="Hi, I&rsquo;m Stine" id="about-title" />
          <p>
            I&rsquo;ve spent over a decade helping brands, studios and storytellers find their voice
            — quite literally. What started as a love of radio drama became a full-time craft:
            reading, performing and shaping audio that people actually want to listen to.
          </p>
          <p>
            Clients come back because I&rsquo;m easy to work with, quick to turn things around, and
            genuinely care about the result. I treat every script — a six-second bumper or a
            twelve-hour audiobook — like it matters, because to someone it does.
          </p>
          <p>
            When I&rsquo;m not in the booth, you&rsquo;ll find me coaching new voice talent, walking
            by the harbour, or chasing the perfect cup of coffee.
          </p>

          <dl className="about__facts">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>

          <p className="about__sig" aria-hidden="true">
            {site.name}
          </p>
        </div>
      </div>
    </section>
  )
}
