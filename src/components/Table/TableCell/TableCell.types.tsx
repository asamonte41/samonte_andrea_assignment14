import React from "react";

export interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  align?: "left" | "center" | "right";
  colSpan?: number;
  isHeader?: boolean;
}
