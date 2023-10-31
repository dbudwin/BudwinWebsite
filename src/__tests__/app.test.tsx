import '../test-support/mocks/vanta-mocks'

import { render, screen } from '@testing-library/react'

import App from '../app'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

it('renders all of the sections', async () => {
  render(<App />)

  mockAllIsIntersecting(true)

  await screen.findByRole('navigation')
  await screen.findByRole('heading', { 'name': `Hi, I'm Drew!` })
  await screen.findByRole('heading', { 'name': 'Some History' })
})
