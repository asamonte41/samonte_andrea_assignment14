import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";
import type { RadioButtonProps } from "./RadioButton.types";

const meta: Meta<RadioButtonProps> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

// Default story
const DefaultRadioButtons = () => {
  const [selected, setSelected] = useState("opt1");

  const options: RadioButtonProps["options"] = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  return (
    <RadioButton
      name="group1"
      options={options}
      selectedValue={selected}
      onChange={(val) => setSelected(val)}
    />
  );
};

export const Default: Story = {
  render: () => <DefaultRadioButtons />,
};

// Disabled story
const DisabledRadioButtons = () => {
  const options: RadioButtonProps["options"] = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  return (
    <RadioButton
      name="group2"
      options={options}
      selectedValue="opt1"
      disabled
    />
  );
};

export const Disabled: Story = {
  render: () => <DisabledRadioButtons />,
};
