import { Container, Content, Footer } from "react-bulma-components";
import React, { ReactElement } from "react";

import DadJoke from "./dad-joke";
import SecureLink from "./secure-link";

interface PageFooterProps {
    copyrightYear: number;
}

export default function PageFooter({ copyrightYear }: PageFooterProps): ReactElement {
    return (
        <Footer>
            <Container>
                <Content style={{ textAlign: "center" }}>
                    © {copyrightYear} <SecureLink url="https://www.budw.in/" text="budw.in" /> - Hosted with ❤️ on <SecureLink url="https://bit.ly/dbudwin-digitalocean" text="DigitalOcean" />, secured by <SecureLink url="https://letsencrypt.org/" text="Let&apos;s Encrypt" />.
                </Content>
                <Content style={{ textAlign: "center" }}>
                    <SecureLink url="https://bit.ly/dbudwin-linkedin" text="LinkedIn" /> | <SecureLink url="https://bit.ly/dbudwin-medium" text="Medium" /> | <SecureLink url="https://bit.ly/dbudwin-github" text="GitHub" />
                </Content>
                <Content style={{ textAlign: "center" }}>
                    <DadJoke />
                </Content>
            </Container>
        </Footer>
    );
}
