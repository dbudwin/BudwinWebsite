import "@testing-library/jest-dom";

import NavbarLink from "../navbar-link";
import React from "react";
import faker from "faker";
import renderer from "react-test-renderer";

it("creates a link for the navbar", () => {
    const navbarLink = renderer.create(<NavbarLink to="section" offset={faker.random.number()} />).toJSON();

    expect(navbarLink).toMatchSnapshot();
});
