import { Meta, StoryObj } from "@storybook/react-webpack5";
import TableHeader from "./TableHeader";
import { TableHeaderProps } from "./TableHeader.types";

const meta: Meta<TableHeaderProps> = {
  title: "Components/TableHeader",
  component: TableHeader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TableHeaderProps>;

export const Default: Story = {
  args: {
    headers: ["Name", "Email", "Role"],
    align: "left",
    onClick: () => alert("Header clicked"),
  },
};

export const Disabled: Story = {
  args: {
    headers: ["Name", "Email", "Role"],
    align: "left",
    disabled: true,
  },
};
