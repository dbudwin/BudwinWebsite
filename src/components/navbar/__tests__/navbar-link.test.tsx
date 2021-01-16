import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import NavbarLink from "../navbar-link";
import React from "react";
import faker from "faker";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

it("creates a link for the navbar", () => {
    const navbarLink = renderer.create(<NavbarLink to="section" onClick={jest.fn()} offset={faker.random.number()} />).toJSON();

    expect(navbarLink).toMatchSnapshot();
});

it("calls the onClick callback when link is clicked", () => {
    const mockOnClickCallback = jest.fn();
    const linkText = faker.random.word();
    const section = faker.random.word();

    render(
        <React.Fragment>
            <NavbarLink to={section} onClick={mockOnClickCallback}>{linkText}</NavbarLink>
            <div id={section} />
        </React.Fragment>
    );

    const link = screen.getByText(linkText);

    userEvent.click(link);

    expect(mockOnClickCallback).toHaveBeenCalledTimes(1);
});