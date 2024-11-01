import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  // Generates a new color and triggers the color change in the parent
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);  // Passes the new color to the parent
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}


export default Child;
