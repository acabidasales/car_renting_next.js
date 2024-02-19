import { MouseEventHandler } from "react";

export interface CButtonProps {
    isDisabled?: boolean;
    bType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CarProps {
    id: number;
    marca: string;
    modelo: string;
    caballos: number;
    año: number;
    tipo_combustible: string;
    tipo_transmision: string;
    precio: number;
    imagen_link: string;
}

export interface DeleteButtonProps {
    isDisabled?: boolean;
    id: number;
    containerStyles?: string;
    textStyles?: string;
}