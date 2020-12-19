import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AxiosError } from "axios";
import DadJoke from "../dad-joke";
import React from "react";
import faker from "faker";
import { mockFunction } from "../../test-support/jest-helpers";
import useAxios from "axios-hooks";

jest.mock("axios-hooks");

describe("when the API returned successfully", () => {
    it("shows the dad joke", () => {
        const joke = faker.lorem.sentence();

        mockFunction(useAxios).mockReturnValue([
            {
                data: { "joke": joke },
                loading: false,
            },
            jest.fn(),
        ]);

        render(<DadJoke />);

        expect(screen.getByText(`${joke} 🤣`)).toBeInTheDocument();
    });
});

describe("when the API returned with an error", () => {
    it("shows an error message", () => {
        mockFunction(useAxios).mockReturnValue([
            {
                error: new Error() as AxiosError,
                loading: false,
            },
            jest.fn(),
        ]);

        render(<DadJoke />);

        expect(screen.getByText("Error fetching dad joke!")).toBeInTheDocument();
    });
});

describe("when waiting for the API to respond", () => {
    it("shows a loading message", () => {
        mockFunction(useAxios).mockReturnValue([
            {
                loading: true,
            },
            jest.fn(),
        ]);

        render(<DadJoke />);

        expect(screen.getByText("Loading dad joke...")).toBeInTheDocument();
    });
});