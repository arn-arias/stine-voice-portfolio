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
  location: 'Copenhagen · remote sessions worldwide',
  // placeholder — replace with Stine's real booking inbox
  email: 'booking@stinevoice.com',
  tagline: 'A voice that makes people lean in.',
  intro:
    'Warm, clear and expressive voice work for commercials, narration, learning and character-led stories — recorded with a calm process and studio-quality delivery.',
} as const

export const socials = [
  // placeholder — replace hrefs with Stine's real profiles (or remove)
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Voice123', href: 'https://voice123.com/' },
] as const

export const stats = [
  { value: 'Studio', label: 'Treated home recording setup' },
  { value: 'Live', label: 'Directed sessions available' },
  { value: 'Remote', label: 'Broadcast-ready file delivery' },
  { value: 'Clear', label: 'Simple quoting and revision process' },
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
    title: 'Natural commercial read',
    category: 'Commercial',
    duration: '0:32',
    description: 'Warm, confident and conversational — suitable for lifestyle and brand films.',
  },
  {
    id: 'narration',
    title: 'Documentary narration',
    category: 'Narration',
    duration: '1:04',
    description: 'Grounded and intimate storytelling with a steady sense of pace.',
  },
  {
    id: 'elearning',
    title: 'Learning module',
    category: 'E-learning',
    duration: '0:48',
    description: 'Clear, friendly delivery designed for focus and comprehension.',
  },
  {
    id: 'character',
    title: 'Character-led story',
    category: 'Character',
    duration: '0:41',
    description: 'Expressive range for animation, dubbing, audio drama and children’s content.',
  },
  {
    id: 'audiobook',
    title: 'Fiction chapter',
    category: 'Audiobook',
    duration: '1:20',
    description: 'Long-form narration with distinct, sustained character voices.',
  },
  {
    id: 'ivr',
    title: 'Phone system & IVR',
    category: 'IVR / On-hold',
    duration: '0:22',
    description: 'Calm, professional and reassuring prompts for customer touchpoints.',
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
    description: 'Brand reads that feel human, clear and easy to trust.',
    points: [
      'Online films and campaigns',
      'Radio and broadcast spots',
      'Explainers and product stories',
    ],
  },
  {
    title: 'Narration & audiobooks',
    description: 'Long-form reads with care for pacing, tone and listener attention.',
    points: ['Documentary and corporate', 'Audiobooks and fiction', 'Museum and audio guides'],
  },
  {
    title: 'Characters & performance',
    description: 'Expressive voices for character-led formats without slipping into caricature.',
    points: [
      'Animation and dubbing',
      'Audio drama and podcasts',
      'Children’s stories and learning',
    ],
  },
  {
    title: 'Learning & IVR',
    description: 'Steady, consistent delivery for information that needs to be understood.',
    points: ['Training modules', 'Phone systems and on-hold', 'Accessibility reads'],
  },
]

export type Tone = { label: string; note: string }

export const tones: Tone[] = [
  { label: 'Warm', note: 'Inviting and human' },
  { label: 'Clear', note: 'Easy to follow' },
  { label: 'Conversational', note: 'Natural, unscripted feel' },
  { label: 'Assured', note: 'Confident without push' },
  { label: 'Intimate', note: 'Close-mic storytelling' },
  { label: 'Bright', note: 'Light and present' },
  { label: 'Calm', note: 'Measured and soothing' },
  { label: 'Characterful', note: 'Expressive and specific' },
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
    title: 'Send the script',
    description:
      'Share copy, deadline, audience and pronunciation notes. You get availability and a clear quote before recording starts.',
  },
  {
    title: 'Shape the tone',
    description:
      'Choose a direction from references, or join a live-directed session and guide the read in real time.',
  },
  {
    title: 'Record clean takes',
    description:
      'Audio is captured in a treated home studio with a consistent recording chain and careful editing.',
  },
  {
    title: 'Receive ready files',
    description:
      'Edited, mastered files are delivered in the format you need, with a straightforward revision round included.',
  },
]

export type Testimonial = { quote: string; author: string; role: string }

export const testimonials: Testimonial[] = [
  {
    quote:
      'A warm, precise read that made the script feel personal. Direction was easy and the files arrived ready to place.',
    author: 'Creative Director',
    role: 'Advertising agency', // placeholder — swap for a named client with permission
  },
  {
    quote:
      'Professional, fast and calm in session. The voice sat beautifully in the edit with almost no cleanup needed.',
    author: 'Producer',
    role: 'Podcast network',
  },
  {
    quote:
      'Exactly the tone we needed: trustworthy, clear and never over-sold. A very smooth remote workflow.',
    author: 'Marketing Lead',
    role: 'Consumer brand',
  },
]

export const clientFit = [
  'Agencies needing a reliable voice for campaign work',
  'Studios and producers who need clean remote recordings',
  'Brands looking for a warmer, more human sound',
  'Authors and publishers casting long-form narration',
]
