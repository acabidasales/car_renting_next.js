"use client"
import { CreateButtonProps } from '@/types';
import Image from 'next/image';
import CreateCar from '../forms/CreateCar';
import { useState } from 'react';

export const CreateButton = ({ isDisabled, containerStyles, textStyles }: CreateButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                disabled={isDisabled}
                className={`custom-btn ${containerStyles}`} 
                onClick={handleClick}
            >
                <span className={`flex-1 ${textStyles}`}>
                    Crea un registro
                </span>
            </button>
            {isOpen && <CreateCar isOpen={isOpen} closeModal={closeModal} />}
        </>
    );
};

export default CreateButton;
