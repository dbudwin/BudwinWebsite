import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ButtonLink from "../button-link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import faker from "faker";

let buttonText: string;
let url: string;
let icon: IconProp;

beforeAll(() => {
    buttonText = faker.lorem.paragraph();
    url = faker.internet.url();
    icon = "coffee";
});

it("shows link styled button with given text", () => {
    render(<ButtonLink url={url} text={buttonText} icon={icon} />);

    expect(screen.getByRole("link", { "name": buttonText })).toBeInTheDocument();
});

it("link styled button has given URL", () => {
    render(<ButtonLink url={url} text={buttonText} icon={icon} />);

    expect(screen.getByRole("link", { "name": buttonText })).toHaveAttribute("href", url);
});

it("has attributes to securely open link in new tab", () => {
    render(<ButtonLink url={url} text={buttonText} icon={icon} />);

    const button = screen.getByRole("link", { "name": buttonText });

    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveAttribute("rel", "noreferrer");
});
