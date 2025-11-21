import React from "react";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import TableFooter from "./TableFooter";
import { TableFooterProps } from "./TableFooter.types";

const meta: Meta<TableFooterProps> = {
  title: "Components/TableFooter",
  component: TableFooter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TableFooterProps>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <td>Total: $100</td>
      </tr>
    ),
    onClick: () => alert("Footer clicked"),
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <tr>
        <td>Total: $100</td>
      </tr>
    ),
    disabled: true,
  },
};
