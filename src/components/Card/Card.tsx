import React from "react";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  disabled = false,
  className = "",
  style,
}) => {
  const combinedStyle: React.CSSProperties = {
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
    padding: "1rem",
    border: "1px solid #ff7070ff",
    borderRadius: "0.1rem",
    backgroundColor: "#ffcacaff",
    ...style,
  };

  return (
    <div
      data-testid="card"
      className={`card ${className}`}
      style={combinedStyle}
    >
      {title && <h3 style={{ margin: 0 }}>{"Assignment 12 Coding"}</h3>}
      {subtitle && (
        <p style={{ marginTop: "0.25rem", color: "#ffffffff" }}>
          {"By: Andrea Samonte"}
        </p>
      )}
      <div style={{ marginTop: "0.5rem" }}>{children}</div>
    </div>
  );
};

export default Card;
