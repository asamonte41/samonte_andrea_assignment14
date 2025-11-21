import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableRow from "./TableRow";

describe("TableRow Component", () => {
  it("renders default row with cells and responds to click", () => {
    const handleClick = jest.fn();
    render(
      <table>
        <tbody>
          <TableRow
            cells={["Alice", "alice@example.com", "Admin"]}
            onClick={handleClick}
          />
        </tbody>
      </table>
    );
    const cell = screen.getByText("Alice");
    fireEvent.click(cell);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled row with cells and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <table>
        <tbody>
          <TableRow
            cells={["Bob", "bob@example.com", "User"]}
            disabled
            onClick={handleClick}
          />
        </tbody>
      </table>
    );
    const cell = screen.getByText("Bob");
    fireEvent.click(cell);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
