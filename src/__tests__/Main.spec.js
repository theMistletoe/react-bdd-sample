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

    afterEach(() => {
        jest.clearAllMocks();
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

        it("研修ボタンが見える", () => {
            const { getByText } = render(<Main />);
            expect(getByText("研修")).toBeInTheDocument();
        });

        it("exec axios by inputed value", async () => {
            const spy = jest.spyOn(axios, 'get').mockImplementation(() => {
                return {
                    data: {login: 'theMistletoe', html_url: 'https://github.com/theMistletoe'}
                }
            });
            
            const { getByText, getByPlaceholderText, getAllByTestId } = render(<Main />);

            fireEvent.change(getByPlaceholderText("Input GitHub Name"), {target: {value: 'theMistletoe'}})
            fireEvent.click(getByText("Send"))

            await waitForElement(() => getAllByTestId("name"));
            await waitForElement(() => getAllByTestId("url"));
            
            expect(spy).toHaveBeenCalledWith("https://api.github.com/users/theMistletoe");
            expect(getByText("theMistletoe")).toBeInTheDocument();
            expect(getByText("https://github.com/theMistletoe")).toBeInTheDocument();
        });
    });
});