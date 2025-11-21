import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableHeader from "./TableHeader";

describe("TableHeader Component", () => {
  it("renders default header and responds to click", () => {
    const handleClick = jest.fn();
    render(
      <table>
        <TableHeader
          headers={["Name", "Email", "Role"]}
          onClick={handleClick}
        />
      </table>
    );
    const cell = screen.getByText("Name");
    fireEvent.click(cell);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled header and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <table>
        <TableHeader
          headers={["Name", "Email", "Role"]}
          disabled
          onClick={handleClick}
        />
      </table>
    );
    const cell = screen.getByText("Name");
    fireEvent.click(cell);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
