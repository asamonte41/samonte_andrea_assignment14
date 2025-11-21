import React from "react";

export interface TableProps {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  className?: string;
  style?: React.CSSProperties;
}
