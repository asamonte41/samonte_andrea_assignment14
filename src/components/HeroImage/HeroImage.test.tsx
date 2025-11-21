import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroImage from "./HeroImage";

describe("HeroImage Component", () => {
  it("renders default image and responds to click", () => {
    const handleClick = jest.fn();
    render(<HeroImage src="test.jpg" alt="hero" onClick={handleClick} />);
    const img = screen.getByAltText("hero");
    fireEvent.click(img);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled image and does not respond to click", () => {
    const handleClick = jest.fn();
    render(
      <HeroImage src="test.jpg" alt="hero" disabled onClick={handleClick} />
    );
    const img = screen.getByAltText("hero");
    fireEvent.click(img);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
