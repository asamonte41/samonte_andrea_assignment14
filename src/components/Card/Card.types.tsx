import React from "react";

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
