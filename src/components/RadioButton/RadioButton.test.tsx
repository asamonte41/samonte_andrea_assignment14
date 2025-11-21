import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioButton } from "./RadioButton";
import type { RadioButtonProps } from "./RadioButton.types";

test("RadioButton changes selected value", async () => {
  const options: RadioButtonProps["options"] = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ];

  let selected = "opt1";
  const handleChange = (val: string) => {
    selected = val;
  };

  render(
    <RadioButton
      name="testGroup"
      options={options}
      selectedValue={selected}
      onChange={handleChange}
    />
  );

  const option2 = screen.getByLabelText("Option 2");
  await userEvent.click(option2);

  expect(selected).toBe("opt2");
});

test("RadioButton disables input when disabled prop is true", () => {
  const options: RadioButtonProps["options"] = [
    { label: "Option 1", value: "opt1" },
  ];

  render(
    <RadioButton
      name="disabledGroup"
      options={options}
      selectedValue="opt1"
      disabled
    />
  );

  const input = screen.getByLabelText("Option 1") as HTMLInputElement;
  expect(input.disabled).toBe(true);
});
