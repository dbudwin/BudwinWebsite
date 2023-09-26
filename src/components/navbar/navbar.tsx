import React, { ReactElement, useState } from 'react'

import { Navbar as BulmaNavbar } from 'react-bulma-components'
import NavbarLink from './navbar-link'
import { animateScroll } from 'react-scroll'
import { useOffset } from '../../hooks/useOffset'
import { FaCode } from 'react-icons/fa'

export default function Navbar(): ReactElement {
  const { offsetRef, offset } = useOffset()

  const [isActive, setIsActive] = useState(false)

  function closeMenu(): void {
    setIsActive(false)
  }

  return (
    <BulmaNavbar fixed={'top'} domRef={offsetRef}>
      <BulmaNavbar.Brand>
        <BulmaNavbar.Item
          role='home'
          renderAs='a'
          onClick={(): void => animateScroll.scrollToTop()}
        >
          <FaCode size={35}/>
        </BulmaNavbar.Item>
        <BulmaNavbar.Burger
          role='hamburgerButton'
          onClick={(): void => setIsActive(!isActive)}
          className={`${isActive ? 'is-active' : ''}`}
        />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu
        role='menu'
        className={`${isActive ? 'is-active' : ''}`}
      >
        <BulmaNavbar.Container>
          <NavbarLink onClick={closeMenu} to='aboutMe' offset={offset}>
            About Me
          </NavbarLink>
          <NavbarLink onClick={closeMenu} to='history' offset={offset}>
            History
          </NavbarLink>
        </BulmaNavbar.Container>
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  )
}
