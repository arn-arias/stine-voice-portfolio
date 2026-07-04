type Props = {
  kicker: string
  title: string
  id: string
  align?: 'start' | 'center'
  children?: React.ReactNode
}

export function SectionHeading({ kicker, title, id, align = 'start', children }: Props) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {children ? <p className="section-heading__lead">{children}</p> : null}
    </header>
  )
}
