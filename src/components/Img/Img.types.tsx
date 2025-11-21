import React from "react";

export interface ImgProps {
  src: string;
  alt?: string;
  disabled?: boolean;
  width?: number;
  height?: number;
  rounded?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
