import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('App', () => {
  it('renders without crashing', () => {
    renderWithRouter(<App />)
    expect(document.body).toBeInTheDocument()
  })

  it('renders the Home page by default', () => {
    renderWithRouter(<App />)
    expect(screen.getByText('FYTHCLOTHINGS')).toBeDefined()
  })
})
