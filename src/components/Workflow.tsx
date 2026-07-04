import { Headphones, Radio } from 'lucide-react'

import { workflow } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Workflow() {
  return (
    <section className="section workflow" id="workflow" aria-labelledby="workflow-title">
      <SectionHeading
        kicker="How it works"
        title="Studio-quality, remote-simple"
        id="workflow-title"
      >
        A calm, professional process from first script to final master — designed to save you time.
      </SectionHeading>

      <div className="workflow__layout">
        <ol className="workflow__steps">
          {workflow.map((step, i) => (
            <li className="workflow-step" key={step.title}>
              <span className="workflow-step__num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="workflow__studio" aria-label="Studio setup">
          <div className="studio-card">
            <Headphones aria-hidden="true" className="studio-card__icon" />
            <h3>The home studio</h3>
            <ul>
              <li>Acoustically treated booth</li>
              <li>Neumann-class large-diaphragm mic</li>
              <li>Clean, low-noise broadcast chain</li>
              <li>WAV / MP3 / AIFF, any spec</li>
            </ul>
          </div>
          <div className="studio-card studio-card--accent">
            <Radio aria-hidden="true" className="studio-card__icon" />
            <h3>Live-direct anywhere</h3>
            <p>Source-Connect, Zoom, Teams or phone patch — join the session in real time.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
