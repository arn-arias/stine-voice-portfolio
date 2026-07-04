import '@testing-library/jest-dom/vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from './App'
import { site } from './data/site'

describe('App', () => {
  it('renders the hero with the tagline and booking calls to action', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /lean in/i })).toBeInTheDocument()
    // The hero + contact both link to the email, the header links to #contact.
    const bookLinks = screen.getAllByRole('link', { name: /book/i })
    expect(bookLinks.length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: new RegExp(site.email, 'i') })).toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${site.email}`),
    )
  })

  it('renders every major portfolio section as a landmark region', () => {
    render(<App />)

    for (const id of [
      'reel',
      'services',
      'range',
      'workflow',
      'testimonials',
      'about',
      'contact',
    ]) {
      expect(document.getElementById(id)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: /voice reel/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /services/i })).toBeInTheDocument()
  })

  it('lists reel samples with accessible play controls', () => {
    render(<App />)

    const reel = document.getElementById('reel') as HTMLElement
    const playButtons = within(reel).getAllByRole('button', { name: /play/i })
    expect(playButtons.length).toBeGreaterThanOrEqual(6)
  })

  it('toggles a reel sample to a pressed/playing state when activated', async () => {
    const user = userEvent.setup()
    render(<App />)

    const reel = document.getElementById('reel') as HTMLElement
    const firstPlay = within(reel).getAllByRole('button', { name: /^play/i })[0]
    expect(firstPlay).toHaveAttribute('aria-pressed', 'false')

    await user.click(firstPlay)

    const pauseButton = within(reel).getByRole('button', { name: /^pause/i })
    expect(pauseButton).toHaveAttribute('aria-pressed', 'true')
  })

  it('exposes a skip link for keyboard users', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main')
  })
})
