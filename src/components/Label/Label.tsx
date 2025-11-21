import React from "react";
import styled from "styled-components";
import type { LabelProps } from "./Label.types";

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;

  span {
    color: red;
    margin-left: 0.25rem;
  }
`;

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  disabled = false,
  className = "",
  style,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`label ${className}`}
      style={{
        display: "inline-block",
        color: disabled ? "#999" : "#000",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      onClick={handleClick}
    >
      {children}
    </label>
  );
};

export default Label;
