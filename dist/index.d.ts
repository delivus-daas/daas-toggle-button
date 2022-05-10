/// <reference types="react" />
interface ToggleButtonProps {
    onSelect: (index: number) => void;
    items: string[];
    selectedIdx: number;
    containerClass?: string;
    toggleClass?: string;
}

declare const ToggleButton: ({ onSelect, items, toggleClass, containerClass, selectedIdx: selectedIdxProps, }: ToggleButtonProps) => JSX.Element;

export { ToggleButton };
