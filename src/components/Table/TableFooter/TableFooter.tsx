import React from "react";
import { TableFooterProps } from "./TableFooter.types";

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  className = "",
  style,
  onClick,
  colSpan,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <tfoot
      className={`table-footer ${className}`}
      style={{
        backgroundColor: "#f9f9f9",
        color: disabled ? "#999" : "#000",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      onClick={handleClick}
    >
      <tr>
        <td colSpan={colSpan}>{children}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
