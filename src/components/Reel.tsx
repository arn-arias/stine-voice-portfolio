import { useState } from 'react'

import { samples } from '../data/site'
import { AudioSample } from './AudioSample'
import { SectionHeading } from './SectionHeading'

export function Reel() {
  const [activeId, setActiveId] = useState('')

  return (
    <section className="section reel" id="reel" aria-labelledby="reel-title">
      <SectionHeading kicker="Listen" title="Voice reel & samples" id="reel-title">
        A cross-section of recent work. Press play on any track to preview the tone, pace and
        character.
      </SectionHeading>

      <div className="reel__grid">
        {samples.map((sample, i) => (
          <AudioSample
            key={sample.id}
            sample={sample}
            index={i}
            isActive={activeId === sample.id}
            onPlay={setActiveId}
          />
        ))}
      </div>

      <p className="reel__note">
        Sample players are illustrative placeholders — real reel clips drop straight in.
      </p>
    </section>
  )
}
