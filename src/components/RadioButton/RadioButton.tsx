import React from "react";
import type { RadioButtonProps } from "./RadioButton.types";

/**
 * RadioButton - renders a horizontal group of radio inputs based on options[]
 *
 * Controlled component:
 * - selectedValue controls which option is checked
 * - onChange(value) is called when user selects a different option
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  disabled = false,
  onChange,
}) => {
  // Defensive: ensure options is an array
  const opts = Array.isArray(options) ? options : [];

  return (
    <div role="radiogroup" aria-label={name} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      {opts.map((option) => {
        const id = `${name}-${option.value}`;

        return (
          <label
            key={option.value}
            htmlFor={id}
            style={{
              cursor: disabled ? "not-allowed" : "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              disabled={disabled}
              onChange={() => {
                if (!disabled) {
                  onChange?.(option.value);
                }
              }}
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;
export { RadioButton };
