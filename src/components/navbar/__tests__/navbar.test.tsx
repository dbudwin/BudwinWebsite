import { render, screen } from '@testing-library/react'

import Navbar from '../navbar'
import React from 'react'
import { animateScroll } from 'react-scroll'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

it('creates the navbar', () => {
  const navbar = renderer.create(<Navbar />).toJSON()

  expect(navbar).toMatchSnapshot()
})

it('calls function to scroll to top when the home link is clicked', async () => {
  const mockScrollToTop = jest.fn()

  animateScroll.scrollToTop = mockScrollToTop

  render(<Navbar />)

  const homeLink = screen.getByRole('home')

  await userEvent.click(homeLink)

  expect(mockScrollToTop).toHaveBeenCalledTimes(1)
})

function getHamburgerMenuButton(): HTMLElement {
  return screen.getByRole('hamburgerButton')
}

function getMenu(): HTMLElement {
  return screen.getByRole('menu')
}

describe('when clicking the hamburger menu button', () => {
  it(`adds "is-active" class to hamburger menu button`, async () => {
    render(<Navbar />)

    const hamburgerMenuButton = getHamburgerMenuButton()

    expect(hamburgerMenuButton).not.toHaveClass('is-active')

    await userEvent.click(hamburgerMenuButton)

    expect(hamburgerMenuButton).toHaveClass('is-active')
  })

  it(`adds "is-active" class to menu`, async () => {
    render(<Navbar />)

    const hamburgerMenuButton = getHamburgerMenuButton()
    const menu = getMenu()

    expect(menu).not.toHaveClass('is-active')

    await userEvent.click(hamburgerMenuButton)

    expect(menu).toHaveClass('is-active')
  })
})

describe('when clicking menu link in open hamburger menu', () => {
  function getRandomMenuLink(): HTMLElement {
    const menuLinks = screen.getAllByRole('menuLink')

    return menuLinks[Math.floor(Math.random() * menuLinks.length)]
  }

  it(`removes "is-active" class from hamburger menu button`, async () => {
    render(<Navbar />)

    const hamburgerMenuButton = getHamburgerMenuButton()
    const menu = getMenu()

    await userEvent.click(hamburgerMenuButton)

    expect(menu).toHaveClass('is-active')

    await userEvent.click(getRandomMenuLink())

    expect(menu).not.toHaveClass('is-active')
  })

  it(`removes "is-active" class from menu`, async () => {
    render(<Navbar />)

    const hamburgerMenuButton = getHamburgerMenuButton()
    const menu = getMenu()

    await userEvent.click(hamburgerMenuButton)

    expect(menu).toHaveClass('is-active')

    await userEvent.click(getRandomMenuLink())

    expect(menu).not.toHaveClass('is-active')
  })
})
