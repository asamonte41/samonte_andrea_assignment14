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
    borderRadius: "1rem", // make it rounded for a "cute" look
    backgroundColor: "#ffcacaff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    ...style,
  };

  return (
    <div
      data-testid="card"
      className={`card ${className}`}
      style={combinedStyle}
    >
      {title && <h3 style={{ margin: 0 }}>{title}</h3>}
      {subtitle && (
        <p style={{ marginTop: "0.25rem", color: "#333" }}>{subtitle}</p>
      )}
      <div style={{ marginTop: "0.5rem", width: "100%" }}>{children}</div>
    </div>
  );
};

export default Card;
