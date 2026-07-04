import { useMemo } from 'react'

type Props = {
  seed: number
  playing: boolean
  progress: number
}

// Deterministic pseudo-random bar heights from a seed so each sample has a
// distinct but stable waveform (no Math.random -> stable across renders/SSR).
function bars(seed: number, count: number) {
  const out: number[] = []
  let x = seed * 9301 + 49297
  for (let i = 0; i < count; i += 1) {
    x = (x * 9301 + 49297) % 233280
    const r = x / 233280
    // Emphasise a natural speech-like envelope rather than uniform noise.
    const envelope = 0.55 + 0.45 * Math.sin((i / count) * Math.PI)
    out.push(Math.max(0.16, r * envelope))
  }
  return out
}

const BAR_COUNT = 40

export function Waveform({ seed, playing, progress }: Props) {
  const heights = useMemo(() => bars(seed, BAR_COUNT), [seed])

  return (
    <div className={`waveform ${playing ? 'is-playing' : ''}`} aria-hidden="true">
      {heights.map((h, i) => {
        const played = i / BAR_COUNT <= progress
        return (
          <span
            key={i}
            className={`waveform__bar ${played ? 'is-played' : ''}`}
            style={{
              height: `${Math.round(h * 100)}%`,
              animationDelay: `${(i % 10) * 90}ms`,
            }}
          />
        )
      })}
    </div>
  )
}
