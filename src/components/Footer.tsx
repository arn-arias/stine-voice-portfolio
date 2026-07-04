import { site, socials } from '../data/site'

export function Footer() {
  const year = 2026

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand__name">{site.name}</span>
          <p>{site.role}</p>
        </div>

        <nav className="site-footer__social" aria-label="Social">
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer noopener">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
          </ul>
        </nav>

        <p className="site-footer__legal">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
