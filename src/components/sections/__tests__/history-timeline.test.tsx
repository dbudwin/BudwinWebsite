import HistoryTimeline from '../history-timeline'
import React from 'react'
import renderer from 'react-test-renderer'
import { SectionId } from '../../../app'

it('shows the history timeline', () => {
  const historyTimeline = renderer.create(<HistoryTimeline id={SectionId.HISTORY} />).toJSON()

  expect(historyTimeline).toMatchSnapshot()
})
