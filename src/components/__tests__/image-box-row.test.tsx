/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import "../../test-support/mocks/vanta-mocks";

import { Box, Image } from "react-bulma-components";
import React, { ReactElement } from "react";
import { render } from "@testing-library/react";

import ImageBoxRow from "../image-box-row";
import { faker } from "@faker-js/faker";

let text: string;
let imageSrc: string;
let box: ReactElement<typeof Box>;
let image: ReactElement<typeof Image>;

beforeAll(() => {
    text = faker.lorem.paragraph();
    imageSrc = faker.image.url();
    box = <Box>{text}</Box>;
    image = <Image src={imageSrc} />;
});

function expectFigureToExist(figureNode: ChildNode | null | undefined): void {
    expect(figureNode).toHaveClass("image");
    expect(figureNode?.firstChild).toHaveAttribute("src", imageSrc);
}

function expectBoxToExist(boxNode: ChildNode | null | undefined): void {
    expect(boxNode).toHaveClass("box");
    expect(boxNode?.textContent).toBe(text);
}

describe("when isImageOnLeft is true", () => {
    it("shows image on left", () => {
        const { container } = render(
            <ImageBoxRow
                isImageOnLeft={true}
                box={box}
                image={image}
            />
        );

        expectFigureToExist(container?.firstChild?.firstChild?.firstChild);
    });

    it("shows box on right", () => {
        const { container } = render(
            <ImageBoxRow
                isImageOnLeft={true}
                box={box}
                image={image}
            />
        );

        expectBoxToExist(container?.firstChild?.childNodes[1].firstChild);
    });
});

describe("when isImageOnLeft is false", () => {
    it("shows image on right", () => {
        const { container } = render(
            <ImageBoxRow
                isImageOnLeft={false}
                box={box}
                image={image}
            />
        );

        expectFigureToExist(container?.firstChild?.childNodes[1].firstChild);
    });

    it("shows box on right", () => {
        const { container } = render(
            <ImageBoxRow
                isImageOnLeft={false}
                box={box}
                image={image}
            />
        );

        expectBoxToExist(container?.firstChild?.firstChild?.firstChild);
    });
});
