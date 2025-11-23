import React from "react";
import { TableRowProps } from "./TableRow.types";

const TableRow: React.FC<TableRowProps> = ({
  cells,
  disabled = false,
  className = "",
  style,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (!disabled) onClick?.();
  };

  return (
    <tr
      className={`table-row ${className}`}
      style={{
        backgroundColor: disabled ? "#f5f5f5" : "transparent",
        color: disabled ? "#999" : "#000",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      onClick={handleClick}
    >
      {cells
        ? cells.map((cell, index) => <td key={index}>{cell}</td>)
        : children}
    </tr>
  );
};

export default TableRow;
