import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TableFooter from "./TableFooter";

describe("TableFooter component", () => {
  test("renders footer and handles click", () => {
    const handleClick = jest.fn();

    render(
      <table>
        <tfoot>
          <tr>
            <td>
              <TableFooter onClick={handleClick}>Footer Content</TableFooter>
            </td>
          </tr>
        </tfoot>
      </table>
    );

    const footerCell = screen.getByText(/Footer Content/i);
    expect(footerCell).toBeInTheDocument();

    fireEvent.click(footerCell);
    expect(handleClick).toHaveBeenCalled();
  });
});
