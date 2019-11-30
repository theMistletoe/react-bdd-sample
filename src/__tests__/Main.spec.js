import React from "react";
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

import Main from "../components/Main";

afterEach(cleanup);

jest.mock('axios');


describe("Main", () => {
    // https://github.com/jsdom/jsdom/issues/1937
    let emit;

    beforeAll(() => {
        ({ emit } = window._virtualConsole);
    });

    beforeEach(() => {
        window._virtualConsole.emit = jest.fn();

        const resp = {
            data: {login: 'theMistletoe', html_url: 'https://github.com/theMistletoe'}
        };
        axios.get.mockResolvedValue(resp);
    });

    afterAll(() => {
        window._virtualConsole.emit = emit;
    });

    describe("execute",  () => {

        it("is able to input email", () => {
            const { getByPlaceholderText } = render(<Main />);
            expect(getByPlaceholderText("Input GitHub Name")).toBeInTheDocument();
        });

        it("displays login Button", () => {
            const { getByText } = render(<Main />);
            expect(getByText("Send")).toBeInTheDocument();
        });

        

        it("render user name", async () => {
            const { getAllByTestId, getByText } = render(<Main />);
            expect(getByText("Main Page")).toBeInTheDocument();
            await waitForElement(() => getAllByTestId("name"));

            expect(getByText("theMistletoe")).toBeInTheDocument();
        });

        it("render url", async () => {
            const { getAllByTestId, getByText } = render(<Main />);
            await waitForElement(() => getAllByTestId("url"));

            expect(getByText("https://github.com/theMistletoe")).toBeInTheDocument();
        });
    });
});