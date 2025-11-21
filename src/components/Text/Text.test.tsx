import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "./Text";

describe("Text Component", () => {
  it("renders default text and responds to click", () => {
    const handleClick = jest.fn();
    render(<Text onClick={handleClick}>Click me</Text>);
    const text = screen.getByText("Click me");
    fireEvent.click(text);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled text and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <Text disabled onClick={handleClick}>
        Disabled text
      </Text>
    );
    const text = screen.getByText("Disabled text");
    fireEvent.click(text);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
