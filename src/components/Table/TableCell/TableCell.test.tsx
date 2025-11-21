import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableCell from "./TableCell";

describe("TableCell Component", () => {
  it("renders default cell and responds to click", () => {
    const handleClick = jest.fn();
    render(<TableCell onClick={handleClick}>Alice</TableCell>);
    const cell = screen.getByText("Alice");
    fireEvent.click(cell);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled cell and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <TableCell disabled onClick={handleClick}>
        Bob
      </TableCell>
    );
    const cell = screen.getByText("Bob");
    fireEvent.click(cell);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
