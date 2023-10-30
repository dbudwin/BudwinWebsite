import '../../../test-support/mocks/vanta-mocks'

import { render, screen } from '@testing-library/react'

import AboutMe from '../about-me'
import React from 'react'
import { faker } from '@faker-js/faker'

jest.mock('../../../images/DrewCartoonNoBackground.png', () => 'test.png')

let heading: string

beforeAll(() => {
  heading = faker.lorem.sentence()
})

it('shows heading', () => {
  render(<AboutMe heading={heading} />)

  expect(screen.getByRole('heading', { 'name': heading })).toBeInTheDocument()
})

it('shows Drew\'s cartoon image', () => {
  render(<AboutMe heading={heading} />)

  expect(screen.getByRole('img', { 'name': 'Drew Cartoon' })).toBeInTheDocument()
})

it('shows LinkedIn link', () => {
  render(<AboutMe heading={heading} />)

  const link = screen.getByRole('link', { 'name': 'My LinkedIn' })

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://bit.ly/dbudwin-linkedin')
})

it('shows Linktree link', () => {
  render(<AboutMe heading={heading} />)

  const link = screen.getByRole('link', { 'name': 'My Linktree' })

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://bit.ly/dbudwin-linktree')
})
