import ButtonLink from '../button-link'
import React from 'react'
import renderer from 'react-test-renderer'
import { SiCoffeescript } from 'react-icons/si'

it('creates a button link that will open a new tab securely', () => {
  const buttonLink = renderer.create(<ButtonLink url={'http://www.budw.in/'} text={'My Website'} icon={SiCoffeescript} />).toJSON()

  expect(buttonLink).toMatchSnapshot()
})
