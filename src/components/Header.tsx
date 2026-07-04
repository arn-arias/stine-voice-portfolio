import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { site } from '../data/site'

const links = [
  { href: '#reel', label: 'Reel' },
  { href: '#services', label: 'Services' },
  { href: '#range', label: 'Range' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#about', label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">{site.name}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--sm btn--primary nav__cta" href="#contact">
          Book Stine
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn--primary" href="#contact" onClick={() => setOpen(false)}>
                Book Stine
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
