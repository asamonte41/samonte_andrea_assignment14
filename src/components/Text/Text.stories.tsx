import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Text from "./Text";
import { TextProps } from "./Text.types";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: "DEFAULT TEXT",
    onClick: () => alert("Text clicked"),
  },
};

export const Disabled: Story = {
  args: {
    children: "DISABLED TEXT",
    disabled: true,
  },
};
