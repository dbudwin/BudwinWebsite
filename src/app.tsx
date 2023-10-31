import React, { ReactElement, Suspense } from 'react'

const AboutMe = React.lazy(async () => import('./components/sections/about-me'))
const HistoryTimeline = React.lazy(async () => import('./components/sections/history-timeline'))
const Navbar = React.lazy(async () => import('./components/navbar/navbar'))
const WaveBackgroundSection = React.lazy(async () => import('./components/wave-background-section'))

export enum SectionId {
  ABOUT_ME = 'aboutMe',
  HISTORY = 'history',
}

export default function App(): ReactElement {
  return (
    <React.Fragment>
      <Suspense>
        <Navbar />
      </Suspense>
      <Suspense>
        <WaveBackgroundSection id={SectionId.ABOUT_ME}>
          <Suspense>
            <AboutMe heading='Hi, I&apos;m Drew!' />
          </Suspense>
        </WaveBackgroundSection>
        <Suspense>
          <HistoryTimeline id={SectionId.HISTORY} />
        </Suspense>
      </Suspense>
    </React.Fragment>
  )
}
