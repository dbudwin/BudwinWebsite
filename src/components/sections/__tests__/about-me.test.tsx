import '@testing-library/jest-dom'
import '../../../test-support/mocks/vanta-mocks'

import { render, screen } from '@testing-library/react'

import AboutMe from '../about-me'
import React from 'react'
import { faker } from '@faker-js/faker'

jest.mock('../../../images/DrewCartoonNoBackground.png', () => 'test.png')

let heading: string
let subHeading: string

beforeAll(() => {
  heading = faker.lorem.sentence()
  subHeading = faker.lorem.sentence()
})

it('shows heading', () => {
  render(<AboutMe heading={heading} subHeading={subHeading} />)

  expect(screen.getByRole('heading', { 'name': heading })).toBeInTheDocument()
})

it('shows sub-heading', () => {
  render(<AboutMe heading={heading} subHeading={subHeading} />)

  expect(screen.getByRole('heading', { 'name': subHeading })).toBeInTheDocument()
})

it('shows Drew\'s cartoon image', () => {
  render(<AboutMe heading={heading} subHeading={subHeading} />)

  expect(screen.getByRole('img', { 'name': 'Drew Cartoon' })).toBeInTheDocument()
})

it('shows LinkedIn link', () => {
  render(<AboutMe heading={heading} subHeading={subHeading} />)

  const link = screen.getByRole('link', { 'name': 'My LinkedIn' })

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://bit.ly/dbudwin-linkedin')
})

it('shows Medium blog link', () => {
  render(<AboutMe heading={heading} subHeading={subHeading} />)

  const link = screen.getByRole('link', { 'name': 'My Medium Blog' })

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://bit.ly/dbudwin-medium')
})

it('shows GitHub résumé link', () => {
  render(<AboutMe heading={heading} subHeading={subHeading} />)

  const link = screen.getByRole('link', { 'name': 'My GitHub Résumé' })

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://bit.ly/dbudwin-github-resume')
})
