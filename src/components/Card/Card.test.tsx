import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card Component", () => {
  it("renders default card", () => {
    render(<Card>This is a card</Card>);
    expect(screen.getByText("This is a card")).toBeInTheDocument();
  });

  it("renders disabled card with reduced opacity", () => {
    render(<Card disabled>This is disabled</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveStyle("opacity: 0.5");
  });
});
