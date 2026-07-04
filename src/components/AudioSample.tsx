import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

import type { Sample } from '../data/site'
import { Waveform } from './Waveform'

type Props = {
  sample: Sample
  index: number
  isActive: boolean
  onPlay: (id: string) => void
}

function toSeconds(duration: string) {
  const [m, s] = duration.split(':').map(Number)
  return m * 60 + s
}

/**
 * A reel sample card. Real audio isn't shipped yet, so playback is simulated:
 * pressing play advances a progress bar over the clip's stated duration. Wiring
 * a real file later means adding an <audio ref> and driving `progress` from its
 * timeupdate event instead of the interval.
 */
export function AudioSample({ sample, index, isActive, onPlay }: Props) {
  const [progress, setProgress] = useState(0)
  const total = toSeconds(sample.duration)
  const onPlayRef = useRef(onPlay)
  onPlayRef.current = onPlay

  useEffect(() => {
    if (!isActive) {
      setProgress(0)
      return
    }
    setProgress(0)
    const startedAt = performance.now()
    let endTimer: number | undefined
    const tick = window.setInterval(() => {
      const elapsed = (performance.now() - startedAt) / 1000
      const next = Math.min(1, elapsed / total)
      setProgress(next)
      if (next >= 1) {
        window.clearInterval(tick)
        // Small pause on the full bar before releasing active state.
        endTimer = window.setTimeout(() => onPlayRef.current(''), 400)
      }
    }, 100)
    return () => {
      window.clearInterval(tick)
      if (endTimer) window.clearTimeout(endTimer)
    }
  }, [isActive, total])

  const label = isActive ? `Pause ${sample.title}` : `Play ${sample.title}`

  return (
    <article className={`sample ${isActive ? 'is-active' : ''}`}>
      <div className="sample__top">
        <button
          type="button"
          className="sample__play"
          aria-pressed={isActive}
          aria-label={label}
          onClick={() => onPlay(isActive ? '' : sample.id)}
        >
          {isActive ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
        <div className="sample__meta">
          <span className="sample__category">{sample.category}</span>
          <h3 className="sample__title">{sample.title}</h3>
        </div>
        <span className="sample__duration">{sample.duration}</span>
      </div>

      <Waveform seed={index + 1} playing={isActive} progress={progress} />

      <p className="sample__desc">{sample.description}</p>
    </article>
  )
}
