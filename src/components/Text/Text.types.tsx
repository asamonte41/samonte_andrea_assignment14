import React from "react";

export interface TextProps {
  id?: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | string; // <-- Add this
}

