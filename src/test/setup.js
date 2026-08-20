import { expect } from 'vitest'
import '@testing-library/jest-dom'

global.expect = expect

class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver
