import "@testing-library/jest-dom";
import "../test-support/mocks/vanta-mocks";

import { render, screen } from "@testing-library/react";

import App from "../app";
import React from "react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("../images/DrewCartoonNoBackground.png", () => "test.png");

it(`shows "about me" section`, () => {
    render(<App />);

    mockAllIsIntersecting(true);

    expect(screen.getByRole("heading", { "name": "Hi, I'm Drew!" })).toBeInTheDocument();
});
