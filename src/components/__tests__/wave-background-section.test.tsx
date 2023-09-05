import '@testing-library/jest-dom'

import React from 'react'
import WaveBackgroundSection from '../wave-background-section'
import renderer from 'react-test-renderer'
import { faker } from '@faker-js/faker'

it('renders a wave background section', () => {
  const waveBackgroundSection = renderer.create(
    <WaveBackgroundSection id={faker.lorem.word()}>
      <React.Fragment></React.Fragment>
    </WaveBackgroundSection>
  ).toJSON()

  expect(waveBackgroundSection).toMatchSnapshot()
})
