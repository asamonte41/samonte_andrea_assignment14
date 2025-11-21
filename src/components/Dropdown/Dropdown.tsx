import React from "react";
import { DropdownProps } from "./Dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  required = false,
  options,
  value,
  onChange,
  disabled = false,
  className = "",
  style,
}) => {
  return (
    <div className={`dropdown-wrapper ${className}`} style={style}>
      {label && (
        <label
          htmlFor={name}
          style={{ display: "block", marginBottom: "0.25rem" }}
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
          if (!disabled) {
            onChange?.(e.target.value);
          }
        }}
        disabled={disabled}
        required={required}
        style={{
          padding: "0.5rem",
          borderRadius: "0.25rem",
          border: "1px solid #ccc",
          backgroundColor: disabled ? "#eee" : "#fff",
          color: disabled ? "#666" : "#000",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
