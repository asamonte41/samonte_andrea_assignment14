import React from "react";
import type { RadioButtonProps } from "./RadioButton.types";

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  disabled = false,
  onChange,
}) => {
  const handleChange = (value: string) => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {options.map((option) => (
        <label key={option.value} style={{ cursor: disabled ? "not-allowed" : "pointer" }}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            disabled={disabled}
            onChange={() => handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
