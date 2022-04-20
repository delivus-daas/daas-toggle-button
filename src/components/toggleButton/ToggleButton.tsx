import React from "react";
import "./toggleButton.css";
import { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton = ({ onSelect, items, selectedIdx }: ToggleButtonProps) => {
  function handleClick(idx: number) {
    onSelect(idx);
  }

  return (
    <div className={"btn-container"}>
      {items.map((item, idx) => (
        <div
          key={"toggle" + idx}
          className={"text " + (idx === selectedIdx ? "active" : " ")}
          onClick={() => handleClick(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ToggleButton;
