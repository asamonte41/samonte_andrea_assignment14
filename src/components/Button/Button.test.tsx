import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; //important for toBeInTheDocument & toHaveStyle
import Button from "./Button";

describe("Button Component", () => {
  it("renders default button and responds to click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled button and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
