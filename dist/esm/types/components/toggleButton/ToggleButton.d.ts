/// <reference types="react" />
import "./toggleButton.css";
import { ToggleButtonProps } from "./ToggleButton.types";
declare const ToggleButton: ({ onSelect, items, selectedIdx }: ToggleButtonProps) => JSX.Element;
export default ToggleButton;
