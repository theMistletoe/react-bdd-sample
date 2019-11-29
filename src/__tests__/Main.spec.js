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
    });

    afterAll(() => {
        window._virtualConsole.emit = emit;
    });

    describe("execute",  () => {

        it("render Main component",async () => {
            const resp = {
                data: {login: 'theMistletoe'}
            };
            axios.get.mockResolvedValueOnce(resp);
            const { getAllByTestId, getByText } = render(<Main />);
            expect(getByText("Main Page")).toBeInTheDocument();
            await waitForElement(() => getAllByTestId("name"));

            expect(axios.get).toHaveBeenCalledTimes(1)

            expect(getByText("theMistletoe")).toBeInTheDocument();
        });
    });
});