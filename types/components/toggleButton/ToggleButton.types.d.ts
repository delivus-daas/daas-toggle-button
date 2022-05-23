export interface ToggleButtonProps {
    onSelect: (index: number) => void;
    items: string[];
    selectedIdx: number;
    containerClass?: string;
    toggleClass?: string;
    textClass?: string;
}
