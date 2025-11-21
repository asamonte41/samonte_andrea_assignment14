import { Meta, StoryObj } from "@storybook/react-webpack5";
import Img from "./Img";
import { ImgProps } from "./Img.types";

const meta: Meta<ImgProps> = {
  title: "Components/Img",
  component: Img,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: "/images/imfine.jpg",
    alt: "Sample image",
    onClick: () => alert("Image clicked"),
  },
};

export const Disabled: Story = {
  args: {
    src: "/images/imfine.jpg",
    alt: "Disabled image",
    disabled: true,
  },
};
