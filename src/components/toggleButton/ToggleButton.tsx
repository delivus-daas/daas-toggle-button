import React, { useEffect, useState } from "react";
import "./toggleButton.css";
import { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton = ({
  onSelect,
  items,
  toggleClass,
  containerClass,
  textClass,
  selectedIdx: selectedIdxProps,
}: ToggleButtonProps) => {
  const [selectedIdx, setSelectedIdx] = useState(selectedIdxProps);

  useEffect(() => {
    if (selectedIdx != selectedIdxProps) setSelectedIdx(selectedIdxProps);
  }, [selectedIdxProps]);

  function handleClick(idx: number) {
    setSelectedIdx(idx);
    onSelect(idx);
  }

  return (
    <div className={"btn-container " + containerClass}>
      <div
        className={"toggle " + toggleClass}
        style={{
          width: `calc(100%/${items?.length})`,
          left: `calc(${selectedIdx}*100%/${items?.length})`,
        }}
      />
      {items.map((item, idx) => (
        <div
          key={"toggle" + idx}
          className={
            textClass + " text " + (idx === selectedIdx ? "active" : " ")
          }
          onClick={() => handleClick(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ToggleButton;
