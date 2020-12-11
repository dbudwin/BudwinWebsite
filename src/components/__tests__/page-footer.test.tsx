import "@testing-library/jest-dom";

import PageFooter from "../page-footer";
import React from "react";
import renderer from "react-test-renderer";

it("shows the footer with copyright message and personal links", () => {
    const footer = renderer.create(<PageFooter copyrightYear={2020} />).toJSON();

    expect(footer).toMatchSnapshot();
});
