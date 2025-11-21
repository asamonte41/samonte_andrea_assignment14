import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

const meta: Meta<DropdownProps> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    value: "apple",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
    onChange: (val) => alert(`Selected: ${val}`),
  },
};

export const Disabled: Story = {
  args: {
    value: "banana",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
    disabled: true,
  },
};
