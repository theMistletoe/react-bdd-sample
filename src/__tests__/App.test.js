import React from "react";
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime";

import App from "../components/App";
import Main from "../components/Main";

afterEach(cleanup);

jest.mock('axios');

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

describe("App", () => {


    describe("Display", () => {

        it("displays Login Page", () => {
            const { getByText } = render(<App />);
            expect(getByText("Login Page")).toBeInTheDocument();
        });

        it("displays email label", () => {
            const { getByText } = render(<App />);
            expect(getByText("email:")).toBeInTheDocument();
        });

        it("is able to input email", () => {
            const { getByPlaceholderText } = render(<App />);
            expect(getByPlaceholderText("Input Your Email Address")).toBeInTheDocument();
        });

        it("displays password label", () => {
            const { getByText } = render(<App />);
            expect(getByText("password:")).toBeInTheDocument();
        });

        it("is able to input password", () => {
            const { getByPlaceholderText } = render(<App />);
            expect(getByPlaceholderText("Password")).toBeInTheDocument();
        });

        it("displays login Button", () => {
            const { getByText } = render(<App />);
            expect(getByText("Login")).toBeInTheDocument();
        });
    });

    describe("execute",  () => {

        it("render Main component", () => {
            const { getByText } = render(<App />);
            const spy = jest.spyOn(ReactDOM, 'render').mockImplementation();
            fireEvent.click(getByText("Login"))
            expect(spy).toHaveBeenCalledWith(<Main />, document.getElementById("root"));
        });
    });
});