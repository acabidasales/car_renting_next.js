"use client";

import { CButtonProps } from '@/types';
import Image from 'next/image'

export const CButton = ({ title, containerStyles, handleClick}: CButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
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