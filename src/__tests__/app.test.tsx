import "../test-support/mocks/vanta-mocks";

import { render, screen } from "@testing-library/react";

import App from "../app";
import React from "react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("../images/DrewCartoonNoBackground.png", () => "test.png");

it("renders all of the sections", () => {
    render(<App />);

    mockAllIsIntersecting(true);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("heading", { "name": "Hi, I'm Drew!" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { "name": "Some History" })).toBeInTheDocument();
});
