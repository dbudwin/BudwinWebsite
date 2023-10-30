/* eslint react/no-unescaped-entities: 0 */
import { Box, Button, Content, Heading } from 'react-bulma-components'
import React, { ReactElement } from 'react'
import { SiLinkedin, SiLinktree } from 'react-icons/si'

import ButtonLink from '../button-link'
import DrewCartoonNoBackground from '../../images/DrewCartoonNoBackground.webp'
import ImageBoxRow from '../image-box-row'
import Typewriter from 'typewriter-effect'

interface AboutMeProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
}

export default function AboutMe({
  heading,
}: AboutMeProps): ReactElement {
  return (
    <ImageBoxRow
      image={<figure className='image is-fullwidth'><img src={DrewCartoonNoBackground} width='361' height='330' alt='Drew Cartoon' /></figure>}
      box={
        <Box>
          <Heading>{heading}</Heading>
          <Heading subtitle size={5}>
            I'm a{' '}
            <Typewriter
              options={{
                strings: ['software engineer.', 'tech lead.', 'manager.', 'continuous learner.', 'team builder.'],
                autoStart: true,
                loop: true,
              }}
            />
          </Heading>
          <Content>
            You&apos;ve somehow stumbled onto this corner of the internet. Not a
            whole lot goes on here, it&apos;s mainly just used for managing my
            family&apos;s email along with being a playground for web
            development software, like this page made using React & TypeScript.
            But since you&apos;re here, I figured I&apos;d put up some content
            to help spruce things up a little bit. By trade I&apos;m a software
            engineer with over {new Date().getFullYear() - 2011} years of professional experience.
          </Content>
          <Content>
            If you would like to contact me about job opportunities or
            partnerships, please do so by contacting me on LinkedIn.
          </Content>
          <Button.Group>
            <ButtonLink
              text='My LinkedIn'
              url='https://bit.ly/dbudwin-linkedin'
              icon={SiLinkedin}
            />
            <ButtonLink
              text='My Linktree'
              url='https://bit.ly/dbudwin-linktree'
              icon={SiLinktree}
            />
          </Button.Group>
        </Box>
      }
    />
  )
}
