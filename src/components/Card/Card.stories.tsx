import { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";
import { CardProps } from "./Card.types";

const meta: Meta<CardProps> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    children: "This is a default card",
  },
};

export const Disabled: Story = {
  args: {
    children: "This card is disabled",
    disabled: true,
  },
};
