import { Box, Columns, Content, Image, Section } from "react-bulma-components";
import React, { ReactElement } from "react";

interface ImageBoxSectionProps {
    isImageOnLeft?: boolean;
    image: ReactElement<Image>;
    box: ReactElement<Box>;
}

function renderImageAndBox(image: ReactElement<Image>, box: ReactElement<Box>, isImageOnLeft?: boolean): ReactElement {
    const imageColumnSize = "one-third";

    return (
        <Columns>
            {isImageOnLeft &&
                <Columns.Column size={imageColumnSize}>
                    <Content>
                        {image}
                    </Content>
                </Columns.Column>}
            <Columns.Column>
                {box}
            </Columns.Column>
            {!isImageOnLeft &&
                <Columns.Column size={imageColumnSize}>
                    <Content>
                        {image}
                    </Content>
                </Columns.Column>}
        </Columns>
    );
}

export default function ImageBoxSection({ isImageOnLeft, image, box }: ImageBoxSectionProps): ReactElement {
    return (
        <Section>
            {renderImageAndBox(image, box, isImageOnLeft)}
        </Section>
    );
}

ImageBoxSection.defaultProps = {
    isImageOnLeft: true,
};
