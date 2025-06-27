import React from "react";

// Flecha izquierda personalizada
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ddd",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

// Flecha derecha personalizada
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ddd",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export { PrevArrow, NextArrow };