import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
