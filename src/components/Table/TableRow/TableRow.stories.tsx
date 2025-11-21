import { Meta, StoryObj } from "@storybook/react-webpack5";
import TableRow from "./TableRow";
import { TableRowProps } from "./TableRow.types";

const meta: Meta<TableRowProps> = {
  title: "Components/TableRow",
  component: TableRow,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TableRowProps>;

export const Default: Story = {
  args: {
    cells: ["Andie", "andie@example.com", "Admin"],
    onClick: () => alert("Row clicked"),
  },
};

export const Disabled: Story = {
  args: {
    cells: ["Andie", "andie@example.com", "User"],
    disabled: true,
  },
};
