/// <reference types="react" />
import { Story } from "@storybook/react";
import { ToggleButtonProps } from "../components/toggleButton/ToggleButton.types";
declare const _default: {
    title: string;
    component: ({ onSelect, items, toggleClass, containerClass, textClass, selectedIdx: selectedIdxProps, }: ToggleButtonProps) => JSX.Element;
};
export default _default;
export declare const Primary: Story<ToggleButtonProps>;
export declare const Secondary: Story<ToggleButtonProps>;
