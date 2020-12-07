import "@testing-library/jest-dom";

import Head from "../head";
import { Helmet } from "react-helmet";
import React from "react";
import faker from "faker";
import { render } from "@testing-library/react";

jest.mock("../images/DrewCartoonNoBackground.png", () => "test.png");

let title: string;

beforeAll(() => {
    title = faker.lorem.word();
});

it("shows given page title", () => {
    render(<Head title={title} />);

    expect(Helmet.peek().title).toBe(title);
});
