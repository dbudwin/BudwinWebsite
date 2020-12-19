import "@testing-library/jest-dom";

import PageFooter from "../page-footer";
import React from "react";
import renderer from "react-test-renderer";

jest.mock("../dad-joke", () => (): string => "What do you call a pile of cats? A Meowtain.");

it("shows the footer with copyright message, personal links, and dad joke", () => {
    const footer = renderer.create(<PageFooter copyrightYear={2020} />).toJSON();

    expect(footer).toMatchSnapshot();
});
