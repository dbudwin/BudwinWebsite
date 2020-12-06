import React, { ReactElement } from "react";

import Box from "react-bulma-components/lib/components/box";
import Columns from "react-bulma-components/lib/components/columns";
import Content from "react-bulma-components/lib/components/content";
import Image from "react-bulma-components/lib/components/image";
import Section from "react-bulma-components/lib/components/section";

interface ImageBoxSectionProps {
    isImageOnLeft?: boolean;
    image: Image;
    box: Box;
}

function renderImageAndBox(image: Image, box: Box, isImageOnLeft?: boolean): ReactElement {
    const imageColumnSize = "one-third";

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default function ImageBoxSection({ isImageOnLeft, image, box }: ImageBoxSectionProps): ReactElement {
    return (
        <Section>
            <Columns>
                {renderImageAndBox(image, box, isImageOnLeft)}
            </Columns>
        </Section>
    );
}

ImageBoxSection.defaultProps = {
    isImageOnLeft: true,
};
