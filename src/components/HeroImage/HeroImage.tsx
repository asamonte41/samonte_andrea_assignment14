import React from "react";
import { HeroImageProps } from "./HeroImage.types";

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt = "",
  title,
  subtitle,
  disabled = false,
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
    <div className={`hero-image-wrapper ${className}`} style={style}>
      {title && <h2 style={{ margin: 0 }}>{title}</h2>}
      {subtitle && (
        <p style={{ marginTop: "0.25rem", color: "#666" }}>{subtitle}</p>
      )}
      <img
        src={src}
        alt={alt}
        style={{
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? "none" : "auto",
          cursor: disabled ? "not-allowed" : "pointer",
          width: "100%",
          height: "auto",
        }}
        onClick={handleClick}
      />
    </div>
  );
};

export default HeroImage;
