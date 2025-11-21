import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Label from "./Label";
import { LabelProps } from "./Label.types";

const meta: Meta<LabelProps> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: "Username",
    htmlFor: "username",
    onClick: () => alert("Label clicked"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Username",
    htmlFor: "username",
    disabled: true,
  },
};
