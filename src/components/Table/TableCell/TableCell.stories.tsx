import { Meta, StoryObj } from "@storybook/react-webpack5";
import TableCell from "./TableCell";
import { TableCellProps } from "./TableCell.types";

const meta: Meta<TableCellProps> = {
  title: "Components/TableCell",
  component: TableCell,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TableCellProps>;

export const Default: Story = {
  args: {
    children: "Alice",
    onClick: () => alert("Cell clicked"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Bob",
    disabled: true,
  },
};
