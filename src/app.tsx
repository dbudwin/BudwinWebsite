import React, { ReactElement } from 'react'

import AboutMe from './components/sections/about-me'
import HistoryTimeline from './components/sections/history-timeline'
import Navbar from './components/navbar/navbar'
import WaveBackgroundSection from './components/wave-background-section'

export default function App(): ReactElement {
  return (
    <React.Fragment>
      <Navbar />
      <WaveBackgroundSection id='aboutMe'>
        <AboutMe heading='Hi, I&apos;m Drew!' subHeading='I&apos;m a professional software engineering leader based in Texas.' />
      </WaveBackgroundSection>
      <HistoryTimeline id='history' />
    </React.Fragment>
  )
}
