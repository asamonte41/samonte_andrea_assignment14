import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell", () => {
  it("renders content and responds to click", () => {
    const handleClick = jest.fn();

    render(
      <table>
        <tbody>
          <tr>
            <TableCell onClick={handleClick}>Alice</TableCell>
          </tr>
        </tbody>
      </table>
    );

    const cell = screen.getByText("Alice");
    fireEvent.click(cell);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders as header when isHeader is true", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableCell isHeader>Alice</TableCell>
          </tr>
        </thead>
      </table>
    );

    const headerCell = screen.getByText("Alice");
    expect(headerCell.tagName).toBe("TH"); // check it renders as <th>
  });
});
