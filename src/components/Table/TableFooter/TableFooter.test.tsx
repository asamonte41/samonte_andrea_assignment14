import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TableFooter from "./TableFooter";

describe("TableFooter", () => {
  it("renders children correctly and responds to click", () => {
    const handleClick = jest.fn();

    render(
      <table>
        <TableFooter onClick={handleClick}>
          <td>Footer Content</td> {/* td is direct child of tr */}
        </TableFooter>
      </table>
    );

    const footerCell = screen.getByText("Footer Content");
    fireEvent.click(footerCell);
    expect(handleClick).toHaveBeenCalled();
  });
});
