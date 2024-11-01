import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const [color, setColor] = useState(getRandomColor());
  const [childrenColor, setChildrenColor] = useState("#FFF");

  // Update both the parent and child colors when a child is clicked
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);         // Change Parent's color
    setChildrenColor(newChildColor);   // Update both children's color
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
