export interface ToggleButtonProps {
    onSelect: (index: number) => void;
    items: string[];
    selectedIdx: number;
    className?: string;
}
