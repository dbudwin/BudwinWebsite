import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { SecureLink } from 'react-secure-link'

interface ButtonLinkProps {
  url: string
  text: string
  icon: IconType // See: https://github.com/react-icons/react-icons/issues/577#issuecomment-1180323299
}

export default function ButtonLink({ url, text, icon: Icon }: ButtonLinkProps): ReactElement {
  return (
    <SecureLink href={url} className='button is-link is-info' aria-label={text}>
      <span className='icon is-small'>
        <Icon />
      </span>
      <span>{text}</span>
    </SecureLink>
  )
}
