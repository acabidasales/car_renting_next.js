import { MouseEventHandler } from "react";

export interface CButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btype?: "button" | "submit";
}