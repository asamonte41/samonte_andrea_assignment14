import React from "react";
import { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({
  id,
  children,
  disabled = false,
  className = "",
  style,
  onClick,
  size = "md", // <-- new
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  // Map size values to actual font sizes
  const fontSize = size === "sm" ? "0.8rem" : size === "lg" ? "1.5rem" : "1rem"; // default = md

  return (
    <span
      id={id}
      className={`text ${className}`}
      style={{
        color: disabled ? "#999" : "#000",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        fontSize, // <-- apply size
        ...style,
      }}
      onClick={handleClick}
    >
      {children}
    </span>
  );
};

export default Text;
