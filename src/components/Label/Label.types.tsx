import React from "react";

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
