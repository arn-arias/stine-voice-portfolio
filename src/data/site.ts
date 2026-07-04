/**
 * Central content for the portfolio. Editing copy, samples, services and
 * contact details here keeps the presentation components generic.
 *
 * NOTE FOR STINE: values marked with `// placeholder` should be swapped for
 * real details (booking email, social links, and real reel audio) before or
 * shortly after launch. See README.md → "Customizing the content".
 */

export const site = {
  name: 'Stine Dahl',
  role: 'Voice Actor & Recording Artist',
  location: 'Copenhagen · Working worldwide, remote',
  // placeholder — replace with Stine's real booking inbox
  email: 'booking@stinevoice.com',
  tagline: 'A voice that makes people lean in.',
  intro:
    'Warm, characterful and precise — I bring scripts to life for brands, studios and storytellers. From a 15-second spot to a full audiobook, I deliver broadcast-ready recordings from my treated home studio, wherever you are.',
} as const

export const socials = [
  // placeholder — replace hrefs with Stine's real profiles (or remove)
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Voice123', href: 'https://voice123.com/' },
] as const

export const stats = [
  { value: '12+', label: 'Years behind the mic' },
  { value: '600+', label: 'Projects delivered' },
  { value: '4', label: 'Languages, native & fluent' },
  { value: '24h', label: 'Typical turnaround' },
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
    id: 'commercial',
    title: 'National broadcast spot',
    category: 'Commercial',
    duration: '0:32',
    description: 'Bright, confident and inviting — a lifestyle brand campaign read.',
  },
  {
    id: 'narration',
    title: 'Documentary narration',
    category: 'Narration',
    duration: '1:04',
    description: 'Grounded and intimate storytelling for a nature series.',
  },
  {
    id: 'elearning',
    title: 'Corporate e-learning',
    category: 'E-learning',
    duration: '0:48',
    description: 'Clear, friendly and easy to follow across a training module.',
  },
  {
    id: 'character',
    title: 'Animated character reel',
    category: 'Character',
    duration: '0:41',
    description: 'Playful range — from mischievous sidekick to gentle mentor.',
  },
  {
    id: 'audiobook',
    title: 'Literary fiction chapter',
    category: 'Audiobook',
    duration: '1:20',
    description: 'Long-form narration with distinct, sustained character voices.',
  },
  {
    id: 'ivr',
    title: 'Phone system & IVR',
    category: 'IVR / On-hold',
    duration: '0:22',
    description: 'Calm, professional and reassuring brand-aligned prompts.',
  },
]

export type Service = {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Commercial voice-over',
    description: 'TV, radio, and online spots that sell without shouting.',
    points: ['Broadcast & digital ads', 'Brand & explainer videos', 'Social campaigns'],
  },
  {
    title: 'Narration & audiobooks',
    description: 'Long-form reads that keep listeners with you to the last line.',
    points: ['Documentary & corporate', 'Audiobooks & fiction', 'Museum & audio guides'],
  },
  {
    title: 'Character & animation',
    description: 'Distinct, believable voices for games, animation and dubbing.',
    points: ['Animation & games', 'Dubbing & ADR', 'Toys & interactive'],
  },
  {
    title: 'E-learning & IVR',
    description: 'Clear, consistent voices for training and phone systems.',
    points: ['Training & modules', 'IVR & on-hold', 'Accessibility reads'],
  },
]

export type Tone = { label: string; note: string }

export const tones: Tone[] = [
  { label: 'Warm', note: 'Inviting and human' },
  { label: 'Confident', note: 'Assured, never pushy' },
  { label: 'Playful', note: 'Light and characterful' },
  { label: 'Authoritative', note: 'Trusted and clear' },
  { label: 'Intimate', note: 'Close-mic storytelling' },
  { label: 'Energetic', note: 'Upbeat and bright' },
  { label: 'Calm', note: 'Measured and soothing' },
  { label: 'Conversational', note: 'Real, unscripted feel' },
]

export const languages = [
  { label: 'Danish', level: 'Native' },
  { label: 'English', level: 'Fluent · neutral / UK / US' },
  { label: 'Norwegian', level: 'Fluent' },
  { label: 'Swedish', level: 'Conversational' },
]

export type Step = { title: string; description: string }

export const workflow: Step[] = [
  {
    title: 'Share your script',
    description:
      'Send the copy, brand references and any pronunciation notes. I reply with availability and a fair, flat quote — no surprises.',
  },
  {
    title: 'Direct the read',
    description:
      'Record solo, or join a live session via Source-Connect, Zoom or phone patch and direct me in real time from anywhere.',
  },
  {
    title: 'Record in a treated studio',
    description:
      'Professional, acoustically treated home studio with a broadcast chain — clean, quiet, consistent takes every time.',
  },
  {
    title: 'Delivered fast, ready to use',
    description:
      'Edited, mastered audio in your preferred format, typically within 24 hours. One round of revisions included.',
  },
]

export type Testimonial = { quote: string; author: string; role: string }

export const testimonials: Testimonial[] = [
  {
    quote:
      'Stine nailed the tone on the first take and made our brand sound exactly how we imagined. Effortless to work with.',
    author: 'Creative Director',
    role: 'Advertising agency', // placeholder — swap for a named client with permission
  },
  {
    quote:
      'Fast, professional and genuinely warm. The remote session felt like she was in the room with us.',
    author: 'Producer',
    role: 'Podcast network',
  },
  {
    quote:
      'Broadcast-quality audio delivered ahead of deadline. Our go-to voice for every new campaign.',
    author: 'Marketing Lead',
    role: 'Consumer tech brand',
  },
]

export const clientFit = [
  'Agencies needing a reliable, fast turnaround voice',
  'Studios and producers wanting broadcast-ready audio',
  'Brands looking for a signature, ownable sound',
  'Authors and publishers casting long-form narration',
]
