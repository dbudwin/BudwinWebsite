import { Box, Button, Content, Heading, Image } from "react-bulma-components";
import React, { ReactElement } from "react";

import ButtonLink from "../button-link";
import DrewCartoonNoBackground from "../../images/DrewCartoonNoBackground.png";
import ImageBoxRow from "../image-box-row";

interface AboutMeProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
    subHeading: string;
}

export default function AboutMe({ heading, subHeading }: AboutMeProps): ReactElement {
    return (
        <ImageBoxRow
            image={<Image src={DrewCartoonNoBackground} alt="Drew Cartoon" />}
            box={
                <Box>
                    <Heading>
                        {heading}
                    </Heading>
                    <Heading subtitle size={5}>
                        {subHeading}
                    </Heading>
                    <Content>
                        You&apos;ve somehow stumbled onto this corner of the internet. Not a whole lot goes on here, it&apos;s mainly just used for managing my family&apos;s email along with being a playground for web development software, like this page made using React & TypeScript. But since you&apos;re here, I figured I&apos;d put up some content to help spruce things up a little bit. By trade I&apos;m a software engineer, but I also have a passion for woodworking as a side job. I&apos;m also known to be a collector of hobbies which has led me to have wide and varied interests.
                    </Content>
                    <Content>
                        If you would like to contact me about job opportunities or partnerships, please do so by contacting me on LinkedIn.
                    </Content>
                    <Button.Group>
                        <ButtonLink text="My LinkedIn" url="https://bit.ly/dbudwin-linkedin" icon={["fab", "linkedin"]} />
                        <ButtonLink text="My Medium Blog" url="https://bit.ly/dbudwin-medium" icon={["fab", "medium"]} />
                        <ButtonLink text="My GitHub Résumé" url="https://bit.ly/dbudwin-github-resume" icon={["fab", "github"]} />
                    </Button.Group>
                </Box>
            }
        />
    );
}