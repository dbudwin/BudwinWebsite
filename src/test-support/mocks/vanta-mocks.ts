import '@testing-library/jest-dom'

jest.mock('vanta/dist/vanta.waves.min', () => ({
  __esModule: true,
  default: jest.fn(),
}))
