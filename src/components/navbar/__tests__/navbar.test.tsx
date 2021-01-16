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

function getHamburgerMenuButton(): HTMLElement {
    return screen.getByRole("hamburgerButton");
}

function getMenu(): HTMLElement {
    return screen.getByRole("menu");
}

describe("when clicking the hamburger menu button", () => {
    it(`adds "is-active" class to hamburger menu button`, () => {
        render(<Navbar />);

        const hamburgerMenuButton = getHamburgerMenuButton();

        expect(hamburgerMenuButton).not.toHaveClass("is-active");

        userEvent.click(hamburgerMenuButton);

        expect(hamburgerMenuButton).toHaveClass("is-active");
    });

    it(`adds "is-active" class to menu`, () => {
        render(<Navbar />);

        const hamburgerMenuButton = getHamburgerMenuButton();
        const menu = getMenu();

        expect(menu).not.toHaveClass("is-active");

        userEvent.click(hamburgerMenuButton);

        expect(menu).toHaveClass("is-active");
    });
});

describe("when clicking menu link in open hamburger menu", () => {
    function getRandomMenuLink(): HTMLElement {
        const menuLinks = screen.getAllByRole("menuLink");

        return menuLinks[Math.floor(Math.random() * menuLinks.length)];
    }

    it(`removes "is-active" class from hamburger menu button`, () => {
        render(<Navbar />);

        const hamburgerMenuButton = getHamburgerMenuButton();

        userEvent.click(hamburgerMenuButton);

        expect(hamburgerMenuButton).toHaveClass("is-active");

        userEvent.click(getRandomMenuLink());

        expect(hamburgerMenuButton).not.toHaveClass("is-active");
    });

    it(`removes "is-active" class from menu`, () => {
        render(<Navbar />);

        const hamburgerMenuButton = getHamburgerMenuButton();
        const menu = getMenu();

        userEvent.click(hamburgerMenuButton);

        expect(menu).toHaveClass("is-active");

        userEvent.click(getRandomMenuLink());

        expect(menu).not.toHaveClass("is-active");
    });
});
