import React from 'react'
import { FaCode } from 'react-icons/fa'
import TimelineElement from '../timeline-element'
import renderer from 'react-test-renderer'

it('renders a single element in the timeline', () => {
  const timelineElement = renderer
    .create(
      <TimelineElement
        header='Foo'
        subtitle='Bar'
        date='2020'
        icon={<FaCode />}
      >
        Hello World
      </TimelineElement>
    )
    .toJSON()

  expect(timelineElement).toMatchSnapshot()
})
