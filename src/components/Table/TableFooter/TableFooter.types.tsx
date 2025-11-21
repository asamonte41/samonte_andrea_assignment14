import React from "react";

export interface TableFooterProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  colSpan?: number;
}
