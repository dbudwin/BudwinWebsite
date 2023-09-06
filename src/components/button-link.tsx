import React, { ReactElement } from 'react'

import { SecureLink } from 'react-secure-link'

interface ButtonLinkProps {
  url: string
  text: string
  icon: JSX.Element
}

export default function AboutMe({ url, text, icon }: ButtonLinkProps): ReactElement {
  return (
    <SecureLink href={url} className='button is-link is-info'>
      <span className='icon is-small'>
        {icon}
      </span>
      <span>{text}</span>
    </SecureLink>
  )
}
