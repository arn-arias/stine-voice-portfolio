/**
 * Central content for the portfolio. Editing copy, samples, services and
 * contact details here keeps the presentation components generic.
 *
 * Public-source grounding used for the current copy:
 * - DR, 20 May 2023: “Kom på arbejde med DR’s speaker Stine Schwennesen”
 * - DR, 11 Jan 2022: “Stine forklarer blinde og svagsynede…”
 *
 * NOTE FOR STINE: values marked with `// placeholder` should be swapped for
 * real details (booking email, social links, and real reel audio) before or
 * shortly after launch. See README.md → "Customizing the content".
 */
export const site = {
  name: 'Stine Schwennesen',
  role: 'DR1 channel voice · speaker · audio describer',
  location: 'Copenhagen · remote sessions worldwide',
  // placeholder — replace with Stine's real booking inbox
  email: 'booking@stineschwennesen.dk',
  tagline: 'The familiar DR1 voice behind programme flow, audio description and musical radio.',
  intro:
    'Stine Schwennesen is known to many Danish viewers as the channel voice of DR1. Since joining DR in 2010, her voice has moved between live continuity, programme speak, synstolkning, P8 Jazz and broadcast moments that ask for warmth, precision and calm.',
} as const

export const socials = [
  // placeholder — replace hrefs with Stine's preferred public profiles (or remove)
  { label: 'LinkedIn', href: 'https://dk.linkedin.com/in/stine-schwennesen-7b815817' },
  {
    label: 'DR profile / article',
    href: 'https://www.dr.dk/om-dr/job/job-i-dr/se-videoen-kom-paa-arbejde-med-drs-speaker-stine-schwennesen',
  },
] as const

export const stats = [
  { value: 'DR1', label: 'Kanalstemme på DR’s primary TV channel' },
  { value: '2010', label: 'Startede i DR som oplæser på P1' },
  { value: 'P8 Jazz', label: 'Radiovært med musikalsk baggrund' },
  { value: 'Synstolkning', label: 'Indlevende beskrivelser for blinde og svagsynede' },
] as const

export type Sample = {
  id: string
  title: string
  category: string
  duration: string
  description: string
}

/**
 * Reel samples. These are tasteful placeholders — the audio player simulates
 * playback so the UI is complete without shipping large media files.
 * Replace with real clips by wiring an <audio> src per sample.
 */
export const samples: Sample[] = [
  {
    id: 'dr1-continuity',
    title: 'DR1-style continuity',
    category: 'Broadcast speak',
    duration: '0:32',
    description: 'Warm, live-feeling continuity for flow TV, announcements and programme bridges.',
  },
  {
    id: 'audio-description',
    title: 'Audio description',
    category: 'Synstolkning',
    duration: '0:54',
    description:
      'Short, precise and empathetic visual description that supports the story without taking over.',
  },
  {
    id: 'programme-trailer',
    title: 'Programme trailer',
    category: 'Trailer / promo',
    duration: '0:28',
    description: 'Clear broadcast energy for entertainment, documentary and cultural programming.',
  },
  {
    id: 'jazz-radio',
    title: 'Music radio host',
    category: 'Radio / P8 Jazz',
    duration: '0:45',
    description: 'Knowledgeable, relaxed presentation shaped by a musical ear and jazz background.',
  },
  {
    id: 'commercial',
    title: 'Natural commercial read',
    category: 'Commercial',
    duration: '0:32',
    description:
      'Credible, conversational and calm — suitable for brands that want a recognisably human voice.',
  },
  {
    id: 'narration',
    title: 'Documentary narration',
    category: 'Narration',
    duration: '1:04',
    description:
      'Grounded storytelling with the timing and restraint of an experienced broadcaster.',
  },
]

export type Service = {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Broadcast speak',
    description:
      'Continuity, trailers and programme speak with the calm authority of a DR1 channel voice.',
    points: [
      'Flow TV and live continuity',
      'Programme trailers and promos',
      'Special broadcasts and events',
    ],
  },
  {
    title: 'Commercial voice-over',
    description: 'A familiar, credible voice for brands that need warmth without over-selling.',
    points: [
      'Online films and campaigns',
      'Radio and broadcast spots',
      'Explainers and product stories',
    ],
  },
  {
    title: 'Audio description',
    description:
      'Precise, indlevende synstolkning for visual stories that should be accessible to more people.',
    points: [
      'TV and streaming accessibility',
      'Drama and documentary',
      'Short, timed descriptive writing',
    ],
  },
  {
    title: 'Radio & narration',
    description:
      'Long-form narration and hosted audio shaped by years at the microphone and a jazz musician’s ear.',
    points: [
      'P8 Jazz-style presentation',
      'Documentary and culture',
      'Audiobooks and spoken features',
    ],
  },
]

export type Tone = { label: string; note: string }

export const tones: Tone[] = [
  { label: 'Familiar', note: 'A recognisable DR1 presence' },
  { label: 'Warm', note: 'Inviting and human' },
  { label: 'Precise', note: 'Short, clear and timed' },
  { label: 'Calm', note: 'Steady in serious moments' },
  { label: 'Bright', note: 'Weekend and entertainment energy' },
  { label: 'Musical', note: 'Phrasing shaped by jazz training' },
  { label: 'Empathetic', note: 'Useful for audio description' },
  { label: 'Conversational', note: 'Natural, unscripted feel' },
]

export const languages = [
  { label: 'Danish', level: 'Native broadcast voice' },
  { label: 'English', level: 'Professional / conversational' },
  { label: 'Broadcast timing', level: 'Live continuity, trailers, narration' },
  { label: 'Audio description', level: 'Synstolkning for TV and streaming' },
]

export type Step = { title: string; description: string }

export const workflow: Step[] = [
  {
    title: 'Send the brief',
    description:
      'Share the script, audience, deadline and tone references. Stine can quickly shape a read around the context and channel.',
  },
  {
    title: 'Find the right register',
    description:
      'Warm, formal, light, serious, precise or musical — the delivery is adjusted to the story rather than forced into one style.',
  },
  {
    title: 'Record clean takes',
    description:
      'Broadcast experience means attention to timing, pronunciation, energy and files that sit cleanly in the edit.',
  },
  {
    title: 'Receive ready audio',
    description:
      'Delivered in the format your producer or editor needs, with a straightforward revision round when the direction changes.',
  },
]

export type Testimonial = { quote: string; author: string; role: string }

export const testimonials: Testimonial[] = [
  {
    quote:
      'DR describes Stine Schwennesen as DR1’s kanalstemme — the voice many viewers recognise as the sound of DR1.',
    author: 'DR / Job i DR',
    role: 'Published 20 May 2023',
  },
  {
    quote:
      'Her DR path began in 2010 as oplæser on P1, continued with live speak on DR2, and later settled into DR1.',
    author: 'DR / Job i DR',
    role: 'Career background',
  },
  {
    quote:
      'Alongside speaker work, DR presents her as a synstolker and explains how she describes visual action for blind and visually impaired viewers.',
    author: 'DR / Nyt fra DR',
    role: 'Published 11 Jan 2022',
  },
]

export const clientFit = [
  'Broadcasters and producers needing experienced speak',
  'Brands that want a familiar Danish voice with credibility',
  'Accessibility teams needing careful audio description',
  'Editors looking for clean, timed, production-ready files',
]
