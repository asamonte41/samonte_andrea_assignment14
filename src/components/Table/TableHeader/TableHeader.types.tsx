import React from "react";

export interface TableHeaderProps {
  headers: string[];
  disabled?: boolean;
  align?: "left" | "center" | "right";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
