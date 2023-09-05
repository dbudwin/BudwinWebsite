import React, { ReactElement } from 'react'

import { Link } from 'react-scroll'

interface NavbarLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string
  onClick: () => void
  offset?: number
}

export default function NavbarLink({
  children,
  to,
  offset,
  onClick,
}: NavbarLinkProps): ReactElement {
  const scrollDurationMs = 800

  return (
    <Link
      onClick={onClick}
      className='navbar-item'
      activeClass='active'
      to={to}
      spy={true}
      smooth={true}
      duration={scrollDurationMs}
      offset={offset}
      role='menuLink'
    >
      {children}
    </Link>
  )
}
