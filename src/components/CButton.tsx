"use client";

import { CButtonProps } from '@/types';
import Image from 'next/image'

export const CButton = ({ title, containerStyles, handleClick, btype}: CButtonProps) => {
  return (
    <button
        disabled={false}
        type={btype || "button"}
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