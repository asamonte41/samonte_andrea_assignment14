export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  /** HTML name attribute for the radio group */
  name: string;

  /** Options to render */
  options: RadioOption[];

  /** Currently selected value (controlled) */
  selectedValue?: string;

  /** Disable all radios */
  disabled?: boolean;

  /** onChange handler receives the selected value */
  onChange?: (value: string) => void;
}
