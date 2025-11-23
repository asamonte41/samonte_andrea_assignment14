import React from "react";
import { TableHeaderProps } from "./TableHeader.types";
import TableCell from "../TableCell/TableCell";

const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  disabled = false,
  align = "left",
  className = "",
  style,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled) onClick?.();
  };

  return (
    <thead
      className={`table-header ${className}`}
      style={{
        backgroundColor: "#f0f0f0",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      onClick={handleClick}
    >
      <tr>
        {headers.map((header, index) => (
          <TableCell key={index} isHeader align={align} disabled={disabled}>
            {header}
          </TableCell>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
