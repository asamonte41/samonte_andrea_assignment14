import React from "react";
import { ButtonProps } from "./Button.types";
import styled from "styled-components";

export const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  className = "",
  style,
  onClick,
}) => {
  return (
    <button
      className={`button ${className}`}
      style={{
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        borderRadius: "0.25rem",
        border: "1px solid #ccc",
        backgroundColor: disabled ? "#eee" : "#007bff",
        color: disabled ? "#666" : "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
