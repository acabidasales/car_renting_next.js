"use client"
import { UpdateButtonProps } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { UpdateCar } from '../forms';

export const UpdateButton = ({ car, isDisabled, containerStyles, textStyles }: UpdateButtonProps) => {
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
                <span className={`${textStyles}`}>
                    Modificar
                </span>
            </button>
            {isOpen && <UpdateCar car={car} isOpen={isOpen} closeModal={closeModal} />}
        </>
    );
};

export default UpdateButton;
