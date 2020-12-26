import { Container, Content, Footer } from "react-bulma-components";
import React, { ReactElement } from "react";

import DadJoke from "./dad-joke";
import { SecureLink } from "react-secure-link";

interface PageFooterProps {
    copyrightYear: number;
}

export default function PageFooter({ copyrightYear }: PageFooterProps): ReactElement {
    return (
        <Footer>
            <Container>
                <Content style={{ textAlign: "center" }}>
                    © {copyrightYear} <SecureLink url="https://www.budw.in/">budw.in</SecureLink> - Hosted with ❤️ on <SecureLink url="https://bit.ly/dbudwin-digitalocean">DigitalOcean</SecureLink>, secured by <SecureLink url="https://letsencrypt.org/">Let&apos;s Encrypt</SecureLink>.
                </Content>
                <Content style={{ textAlign: "center" }}>
                    <SecureLink url="https://bit.ly/dbudwin-linkedin">LinkedIn</SecureLink> | <SecureLink url="https://bit.ly/dbudwin-medium">Medium</SecureLink> | <SecureLink url="https://bit.ly/dbudwin-github">GitHub</SecureLink>
                </Content>
                <Content style={{ textAlign: "center" }}>
                    <DadJoke />
                </Content>
            </Container>
        </Footer>
    );
}
