"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CButton";
import CarDetails from "./CarDetails";
import { DeleteButton } from ".";

interface CarCardProps {
  car: {
    id: number;
    marca: string;
    modelo: string;
    caballos: number;
    año: number;
    tipo_combustible: string;
    tipo_transmision: string;
    precio: number;
    imagen_link: string;
  };
}

const CarCard = ({ car }: CarCardProps) => {
    const { id, marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link } = car;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="car-card group grid grid-cols-2 gap-6 mb-4">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                {marca} {modelo}
                </h2>
                <DeleteButton 
                    id={car.id}
                    containerStyles='w-1/8 py-[16px] rounded-full bg-red-500'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                />
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'></span>
                {Number(precio).toFixed(0)}€
                <span className='self-end text-[14px] leading-[17px] font-medium'>/semana</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={`/coches/${imagen_link}`} alt='car model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                    <p className='text-[14px] leading-[17px]'>
                    {tipo_transmision}
                    </p>
                </div>
                <div className="car-card__icon">
                    <Image src="/gas.svg" width={20} height={20} alt="combustible" />
                    <p className="car-card__icon-text">{tipo_combustible}</p>
                </div>
                <div className="car-card__icon">
                    <Image src="/tire.svg" width={20} height={20} alt="caballos" />
                    <p className="car-card__icon-text">{caballos} CV</p>
                </div>
            </div>

            <div className="car-card__btn-container">
                <CustomButton
                    title='Ver más'
                    containerStyles='w-full py-[16px] rounded-full bg-[#50d71e] opacity-75'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    handleClick={() => setIsOpen(true)}
                />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;