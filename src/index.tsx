import './sass/index.scss'

import {
  faChalkboardTeacher,
  faCode,
  faFlask,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'

import App from './app'
import PageFooter from './components/page-footer'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer!)

const footerContainer = document.getElementById('footer')
const footer = createRoot(footerContainer!)

library.add(
  faChalkboardTeacher,
  faCode,
  faFlask,
  faGithub,
  faGraduationCap,
  faLinkedin,
  faMedium,
)

root.render(<App />)
footer.render(<PageFooter copyrightYear={new Date().getFullYear()} />)
