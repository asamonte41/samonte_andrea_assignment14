import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Label from "./Label";

describe("Label Component", () => {
  it("renders default label and responds to click", () => {
    const handleClick = jest.fn();
    render(<Label onClick={handleClick}>Username</Label>);
    const label = screen.getByText("Username");
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled label and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <Label disabled onClick={handleClick}>
        Username
      </Label>
    );
    const label = screen.getByText("Username");
    fireEvent.click(label);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
