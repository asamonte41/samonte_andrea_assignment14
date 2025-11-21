import React from "react";
import { TableProps } from "./Table.types";

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  className = "",
  style,
}) => {
  return (
    <table
      className={`table-component ${className}`}
      style={{ width: "100%", borderCollapse: "collapse", ...style }}
    >
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "0.5rem",
                textAlign: "left",
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
