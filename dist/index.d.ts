/// <reference types="react" />
interface ToggleButtonProps {
    onSelect: (index: number) => void;
    items: string[];
    selectedIdx: number;
    className?: string;
}

declare const ToggleButton: ({ onSelect, items, selectedIdx }: ToggleButtonProps) => JSX.Element;

export { ToggleButton };
