import { Box, Columns, Image } from "react-bulma-components";
import React, { ReactElement } from "react";

interface ImageBoxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    isImageOnLeft?: boolean;
    image: ReactElement<Image>;
    box: ReactElement<Box>;
}

function renderImageAndBox(image: ReactElement<Image>, box: ReactElement<Box>, isImageOnLeft?: boolean): ReactElement {
    const imageColumnSize = "one-third";

    return (
        <Columns className="is-vcentered">
            {isImageOnLeft &&
                <Columns.Column size={imageColumnSize}>
                    {image}
                </Columns.Column>}
            <Columns.Column>
                {box}
            </Columns.Column>
            {!isImageOnLeft &&
                <Columns.Column size={imageColumnSize}>
                    {image}
                </Columns.Column>}
        </Columns>
    );
}

export default function ImageBoxSection({ isImageOnLeft, image, box }: ImageBoxSectionProps): ReactElement {
    return (
        renderImageAndBox(image, box, isImageOnLeft)
    );
}

ImageBoxSection.defaultProps = {
    isImageOnLeft: true,
};
