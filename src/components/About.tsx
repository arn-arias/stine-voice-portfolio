import { site, stats } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="about__grid">
        <div className="about__portrait" aria-hidden="true">
          <div className="about__portrait-inner">
            <span className="about__initials">SS</span>
            <span className="about__waves" />
          </div>
        </div>

        <div className="about__body">
          <SectionHeading kicker="About" title="Hi, I&rsquo;m Stine" id="about-title" />
          <p>
            Stine Schwennesen is a Danish broadcast speaker and voice artist best known as a
            familiar channel voice on DR1. DR describes her work as spanning everything from warm
            weekend and holiday continuity to special broadcasts and serious news moments.
          </p>
          <p>
            Her DR path began in 2010 as an oplæser on P1, followed by live speak on DR2 before she
            found her home on DR1. Alongside the TV work, she has hosted on P8 Jazz — a natural fit
            for a voice performer originally trained as a jazz singer.
          </p>
          <p>
            Stine also works with synstolkning, audio description for blind and visually impaired
            viewers. That work asks for exactly the same qualities producers need in a voice:
            timing, precision, empathy and the ability to say a lot with very few words.
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
