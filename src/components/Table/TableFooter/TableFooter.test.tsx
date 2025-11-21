import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableFooter from "./TableFooter";

describe("TableFooter Component", () => {
  it("renders default footer and responds to click", () => {
    const handleClick = jest.fn();
    render(
      <table>
        <TableFooter onClick={handleClick}>
          <tr>
            <td>Total: $100</td>
          </tr>
        </TableFooter>
      </table>
    );
    const cell = screen.getByText("Total: $100");
    fireEvent.click(cell);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled footer and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <table>
        <TableFooter disabled onClick={handleClick}>
          <tr>
            <td>Total: $100</td>
          </tr>
        </TableFooter>
      </table>
    );
    const cell = screen.getByText("Total: $100");
    fireEvent.click(cell);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
