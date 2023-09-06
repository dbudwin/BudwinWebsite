import './sass/index.scss'

import App from './app'
import PageFooter from './components/page-footer'
import React from 'react'
import { createRoot } from 'react-dom/client'

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer!)

const footerContainer = document.getElementById('footer')
const footer = createRoot(footerContainer!)

root.render(<App />)
footer.render(<PageFooter copyrightYear={new Date().getFullYear()} />)
