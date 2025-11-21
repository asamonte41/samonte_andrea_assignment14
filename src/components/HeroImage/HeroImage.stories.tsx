import { Meta, StoryObj } from "@storybook/react-webpack5";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

const meta: Meta<HeroImageProps> = {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<HeroImageProps>;

export const Default: Story = {
  args: {
    src: "/images/wp2.jpg",
    alt: "Default Hero",
    onClick: () => alert("Hero image clicked"),
  },
};

export const Disabled: Story = {
  args: {
    src: "/images/wp2.jpg",
    alt: "Disabled Hero",
    disabled: true,
  },
};
