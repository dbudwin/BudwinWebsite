import { Container, Content, Footer } from 'react-bulma-components'
import React, { ReactElement } from 'react'

import DadJoke from './dad-joke'
import { SecureLink } from 'react-secure-link'
import { FaAws } from 'react-icons/fa'
import { IconContext } from 'react-icons'

interface PageFooterProps {
  copyrightYear: number
}

export default function PageFooter({ copyrightYear }: PageFooterProps): ReactElement {
  return (
    <Footer>
      <Container>
        <Content style={{ textAlign: 'center' }}>
          <IconContext.Provider value={{ style: { paddingLeft: '3px', paddingRight: '3px', verticalAlign: 'middle'} }}>
            © {copyrightYear} <SecureLink href='https://www.budw.in/'>budw.in</SecureLink> - Hosted with ❤️ on <FaAws size={35} />
          </IconContext.Provider>
        </Content>
        <Content style={{ textAlign: 'center' }}>
          <SecureLink href='https://bit.ly/dbudwin-linkedin'>LinkedIn</SecureLink> | <SecureLink href='https://bit.ly/dbudwin-medium'>Medium</SecureLink> | <SecureLink href='https://bit.ly/dbudwin-github'>GitHub</SecureLink>
        </Content>
        <Content style={{ textAlign: 'center' }}>
          <DadJoke />
        </Content>
      </Container>
    </Footer>
  )
}
