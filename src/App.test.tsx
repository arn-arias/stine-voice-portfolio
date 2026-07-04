import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders the portfolio hero and primary calls to action', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /stine/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book a session/i })).toHaveAttribute(
      'href',
      'mailto:booking@example.com',
    )
    expect(screen.getByRole('link', { name: /preview reel/i })).toHaveAttribute('href', '#reel')
  })
})
