import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Studio } from 'sanity'
import config from '../sanity.config'
import './studio.css'

const container = document.getElementById('sanity')

if (container) {
  const root = createRoot(container)
  root.render(
    <BrowserRouter>
      <Studio config={config} />
    </BrowserRouter>
  )
} 