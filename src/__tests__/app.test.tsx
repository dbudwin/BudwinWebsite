import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import App from "../app";
import React from "react";

jest.mock("../images/DrewCartoonNoBackground.png", () => "test.png");

it(`shows "about me" section`, () => {
    render(<App />);

    expect(screen.getByRole("heading", { "name": "Hi, I'm Drew!" })).toBeInTheDocument();
});
