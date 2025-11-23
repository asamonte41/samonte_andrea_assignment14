import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  test("renders the selected projects page title", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const titleElement = screen.getByText(/Selected Projects/i);
    expect(titleElement).toBeInTheDocument();
  });
});
