import { Meta, StoryObj } from "@storybook/react-webpack5";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Name", "Age", "Occupation"],
    rows: [
      ["Alice", 30, "Engineer"],
      ["Bob", 25, "Designer"],
      ["Charlie", 35, "Manager"],
    ],
  },
};

export const Styled: Story = {
  args: {
    headers: ["Product", "Price"],
    rows: [
      ["Laptop", "$999"],
      ["Phone", "$599"],
    ],
    style: { border: "1px solid #ccc", backgroundColor: "#f9f9f9" },
  },
};
