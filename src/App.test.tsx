// src/App.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  test("renders the Navbar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if the Navbar exists
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  test("renders the Home page by default", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Replace 'Home' with a text that is visible in your Home page
    const homeHeading = screen.getByText(/home/i);
    expect(homeHeading).toBeInTheDocument();
  });

  test("can render Work page route", () => {
    render(
      <MemoryRouter initialEntries={["/work"]}>
        <App />
      </MemoryRouter>
    );

    const workHeading = screen.getByText(/selected projects/i); // adjust text
    expect(workHeading).toBeInTheDocument();
  });

  test("can render Skills page route", () => {
    render(
      <MemoryRouter initialEntries={["/skills"]}>
        <App />
      </MemoryRouter>
    );

    const skillsHeading = screen.getByText(/skills/i);
    expect(skillsHeading).toBeInTheDocument();
  });
});
