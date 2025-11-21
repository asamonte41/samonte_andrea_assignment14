import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Img from "./Img";

describe("Img Component", () => {
  it("renders with src and alt", () => {
    render(<Img src="/images/imfine.jpg" alt="Test image" />);
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/imfine.jpg");
  });

  it("applies width and height styles", () => {
    render(
      <Img src="/images/imfine.jpg" alt="Test image" width={200} height={100} />
    );
    const image = screen.getByAltText("Test image");
    expect(image).toHaveStyle({ width: "200px", height: "100px" });
  });

  it("applies rounded border radius when rounded is true", () => {
    render(<Img src="/images/imfine.jpg" alt="Test image" rounded />);
    const image = screen.getByAltText("Test image");
    expect(image).toHaveStyle({ borderRadius: "8px" });
  });

  it("accepts custom className", () => {
    render(
      <Img src="/images/imfine.jpg" alt="Test image" className="custom-class" />
    );
    const image = screen.getByAltText("Test image");
    expect(image).toHaveClass("custom-class");
  });
});
