import '@testing-library/jest-dom'

import React from 'react'
import WaveBackgroundSection from '../wave-background-section'
import renderer from 'react-test-renderer'

it('renders a wave background section', () => {
  const waveBackgroundSection = renderer.create(
    <WaveBackgroundSection id='voluptatum'>
      <React.Fragment></React.Fragment>
    </WaveBackgroundSection>
  ).toJSON()

  expect(waveBackgroundSection).toMatchSnapshot()
})
