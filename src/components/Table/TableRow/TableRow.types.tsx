import React from "react";

export interface TableRowProps {
  cells?: (string | number)[];
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
