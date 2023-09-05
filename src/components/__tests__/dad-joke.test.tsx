import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import useAxios, { UseAxios } from 'axios-hooks'

import { AxiosError } from 'axios'
import DadJoke from '../dad-joke'
import React from 'react'
import { faker } from '@faker-js/faker'

jest.mock('axios-hooks')

const mockUseAxios = (useAxios as jest.MockedFunction<UseAxios>)

describe('when the API returned successfully', () => {
  it('shows the dad joke', () => {
    const joke = faker.lorem.sentence()

    mockUseAxios.mockReturnValue([
      {
        data: { 'joke': joke },
        loading: false,
        error: null,
      },
      jest.fn(),
      jest.fn(),
    ])

    render(<DadJoke />)

    expect(screen.getByText(`${joke} 🤣`)).toBeInTheDocument()
  })
})

describe('when the API returned with an error', () => {
  it('shows an error message', () => {
    mockUseAxios.mockReturnValue([
      {
        error: new Error() as AxiosError,
        loading: false,
      },
      jest.fn(),
      jest.fn(),
    ])

    render(<DadJoke />)

    expect(screen.getByText('Error fetching dad joke!')).toBeInTheDocument()
  })
})

describe('when waiting for the API to respond', () => {
  it('shows a loading message', () => {
    mockUseAxios.mockReturnValue([
      {
        loading: true,
        error: null,
      },
      jest.fn(),
      jest.fn(),
    ])

    render(<DadJoke />)

    expect(screen.getByText('Loading dad joke...')).toBeInTheDocument()
  })
})
