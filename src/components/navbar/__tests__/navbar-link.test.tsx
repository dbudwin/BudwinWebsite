import { render, screen } from '@testing-library/react'

import NavbarLink from '../navbar-link'
import React from 'react'
import { faker } from '@faker-js/faker'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

it('creates a link for the navbar', () => {
  const navbarLink = renderer.create(<NavbarLink to='section' ariaLabel={'label'} onClick={jest.fn()} offset={faker.number.int()} />).toJSON()

  expect(navbarLink).toMatchSnapshot()
})

it('calls the onClick callback when link is clicked', async () => {
  const mockOnClickCallback = jest.fn()
  const linkText = faker.lorem.word()
  const section = faker.lorem.word()

  render(
    <React.Fragment>
      <NavbarLink to={section} ariaLabel={faker.lorem.word()} onClick={mockOnClickCallback}>{linkText}</NavbarLink>
      <div id={section} />
    </React.Fragment>
  )

  const link = screen.getByText(linkText)

  await userEvent.click(link)

  expect(mockOnClickCallback).toHaveBeenCalledTimes(1)
})
