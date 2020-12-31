import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Navbar from "../navbar";
import React from "react";
import { animateScroll } from "react-scroll";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

it("creates the navbar", () => {
    const navbar = renderer.create(<Navbar />).toJSON();

    expect(navbar).toMatchSnapshot();
});

it("calls function to scroll to top when the home link is clicked", () => {
    const mockScrollToTop = jest.fn();

    animateScroll.scrollToTop = mockScrollToTop;

    render(<Navbar />);

    const homeLink = screen.getByRole("home");

    userEvent.click(homeLink);

    expect(mockScrollToTop).toHaveBeenCalledTimes(1);
});