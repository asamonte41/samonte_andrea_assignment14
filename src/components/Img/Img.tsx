import React from "react";
import { ImgProps } from "./Img.types";

const Img: React.FC<ImgProps> = ({
  src,
  alt = "",
  disabled = false,
  width = 150,
  height = 150,
  rounded = false,
  className = "",
  style,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`img ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        paddingTop: "10px",
        borderRadius: rounded ? "8px" : "8px",
        objectFit: "cover",
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "auto",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      onClick={handleClick}
    />
  );
};

export default Img;
