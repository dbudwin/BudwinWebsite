import "@testing-library/jest-dom";

import React from "react";
import SecureLink from "../secure-link";
import renderer from "react-test-renderer";

it("creates a link that will open a new tab securely", () => {
    const footer = renderer.create(<SecureLink url={"http://www.budw.in/"} text={"My Website"} />).toJSON();

    expect(footer).toMatchSnapshot();
});
