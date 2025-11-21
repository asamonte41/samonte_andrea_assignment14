import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  it("renders default dropdown and responds to change", () => {
    const handleChange = jest.fn();
    render(
      <Dropdown
        value="apple"
        options={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ]}
        onChange={handleChange}
      />
    );
    fireEvent.change(screen.getByDisplayValue("Apple"), {
      target: { value: "banana" },
    });
    expect(handleChange).toHaveBeenCalledWith("banana");
  });

  it("renders disabled dropdown and does not respond to change", () => {
    const handleChange = jest.fn();
    render(
      <Dropdown
        value="banana"
        options={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ]}
        disabled
        onChange={handleChange}
      />
    );
    const dropdown = screen.getByDisplayValue("Banana");
    expect(dropdown).toBeDisabled();
    fireEvent.change(dropdown, { target: { value: "apple" } });
    expect(handleChange).not.toHaveBeenCalled();
  });
});
