import "@testing-library/jest-dom";

import ButtonLink from "../button-link";
import React from "react";
import renderer from "react-test-renderer";

it("creates a button link that will open a new tab securely", () => {
    const buttonLink = renderer.create(<ButtonLink url={"http://www.budw.in/"} text={"My Website"} icon={"coffee"} />).toJSON();

    expect(buttonLink).toMatchSnapshot();
});
