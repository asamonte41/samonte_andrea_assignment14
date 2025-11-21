import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";

describe("Table Component", () => {
  const headers = ["Name", "Age"];
  const rows = [
    ["Alice", 30],
    ["Bob", 25],
  ];

  it("renders headers correctly", () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
  });

  it("renders rows correctly", () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
  });

  it("applies custom className and style", () => {
    render(
      <Table
        headers={headers}
        rows={rows}
        className="custom-table"
        style={{ backgroundColor: "lightgray" }}
      />
    );
    const table = screen.getByRole("table");
    expect(table).toHaveClass("custom-table");
    expect(table).toHaveStyle({ backgroundColor: "lightgray" });
  });
});
