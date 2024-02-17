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
    tipo_transmision: 'Automático' | 'Manual';
    precio: number;
    imagen_link: string;
    fecha_registro: Date;
}