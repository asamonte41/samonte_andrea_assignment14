import React from "react";

// Define the type for each option
export interface RadioOption {
  label: string;
  value: string;
}

// Define the props for the RadioButton component
export interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  selectedValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
