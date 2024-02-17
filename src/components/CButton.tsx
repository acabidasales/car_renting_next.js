"use client";

import { CButtonProps } from '@/types';
import Image from 'next/image'

export const CButton = ({ isDisabled, bType, containerStyles, textStyles, title, handleClick}: CButtonProps) => {
  return (
    <button
        disabled={false}
        type={bType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}    
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CButton