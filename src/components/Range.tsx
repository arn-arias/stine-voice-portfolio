import { Globe } from 'lucide-react'

import { languages, tones } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Range() {
  return (
    <section className="section range" id="range" aria-labelledby="range-title">
      <SectionHeading kicker="Tone & style" title="A range that fits your brief" id="range-title">
        Direct me toward the feel you want — or let me offer a few reads. Here are the tones I live
        in most.
      </SectionHeading>

      <ul className="range__tones">
        {tones.map((tone) => (
          <li className="tone-chip" key={tone.label}>
            <span className="tone-chip__label">{tone.label}</span>
            <span className="tone-chip__note">{tone.note}</span>
          </li>
        ))}
      </ul>

      <div className="range__langs">
        <h3 className="range__langs-title">
          <Globe aria-hidden="true" /> Languages & accents
        </h3>
        <ul>
          {languages.map((lang) => (
            <li key={lang.label}>
              <span className="range__lang-name">{lang.label}</span>
              <span className="range__lang-level">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
