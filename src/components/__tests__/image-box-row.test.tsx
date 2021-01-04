import "@testing-library/jest-dom";
import "../../test-support/mocks/vanta-mocks";

import { Box, Image } from "react-bulma-components";
import React, { ReactElement } from "react";
import { render, screen } from "@testing-library/react";

import ImageBoxRow from "../image-box-row";
import faker from "faker";

let text: string;
let imageSrc: string;
let box: ReactElement<Box>;
let image: ReactElement<Image>;

beforeAll(() => {
    text = faker.lorem.paragraph();
    imageSrc = faker.image.imageUrl();
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

function getColumnElement(): HTMLElement | null | undefined {
    const figure = screen.getByRole("figure");

    return figure.parentElement?.parentElement;
}

describe("when isImageOnLeft is true", () => {
    it("shows image on left", () => {
        render(
            <ImageBoxRow
                isImageOnLeft={true}
                box={box}
                image={image}
            />
        );

        const columnElement = getColumnElement();
        const traverseDomToFigure = columnElement?.firstChild?.firstChild;

        expectFigureToExist(traverseDomToFigure);
    });

    it("shows box on right", () => {
        render(
            <ImageBoxRow
                isImageOnLeft={true}
                box={box}
                image={image}
            />
        );

        const columnElement = getColumnElement();
        const traverseDomToBox = columnElement?.children[1].firstChild;

        expectBoxToExist(traverseDomToBox);
    });
});

describe("when isImageOnLeft is false", () => {
    it("shows image on right", () => {
        render(
            <ImageBoxRow
                isImageOnLeft={false}
                box={box}
                image={image}
            />
        );

        const columnElement = getColumnElement();
        const traverseDomToFigure = columnElement?.children[1].firstChild;

        expectFigureToExist(traverseDomToFigure);
    });

    it("shows box on right", () => {
        render(
            <ImageBoxRow
                isImageOnLeft={false}
                box={box}
                image={image}
            />
        );

        const columnElement = getColumnElement();
        const traverseDomToBox = columnElement?.firstChild?.firstChild;

        expectBoxToExist(traverseDomToBox);
    });
});
