import React, { ReactElement, useState } from 'react'

import { Navbar as BulmaNavbar } from 'react-bulma-components'
import NavbarLink from './navbar-link'
import { animateScroll } from 'react-scroll'
import { useOffset } from '../../hooks/useOffset'
import { FaCode } from 'react-icons/fa'
import { SectionId } from '../../app'

export default function Navbar(): ReactElement {
  const { offsetRef, offset } = useOffset()

  const [isActive, setIsActive] = useState(false)

  function closeMenu(): void {
    setIsActive(false)
  }

  return (
    // TODO: Improve the type casting for the ref, casting to unknown is not ideal
    <BulmaNavbar fixed={'top'} domRef={offsetRef as unknown as React.RefObject<'nav'>}>
      <BulmaNavbar.Brand>
        <BulmaNavbar.Item
          renderAs='a'
          onClick={(): void => animateScroll.scrollToTop()}
          role='link'
          aria-label='Home'
        >
          <FaCode size={35}/>
        </BulmaNavbar.Item>
        <BulmaNavbar.Burger
          aria-label={`${isActive ? 'Close menu' : 'Open menu'}`}
          onClick={(): void => setIsActive(!isActive)}
          className={`${isActive ? 'is-active' : ''}`}
        />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu
        role='menu'
        className={`${isActive ? 'is-active' : ''}`}
      >
        <BulmaNavbar.Container>
          <NavbarLink onClick={closeMenu} offset={offset} to={SectionId.ABOUT_ME} ariaLabel='About Me'>
            About Me
          </NavbarLink>
          <NavbarLink onClick={closeMenu} offset={offset} to={SectionId.HISTORY} ariaLabel='History'>
            History
          </NavbarLink>
        </BulmaNavbar.Container>
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  )
}
