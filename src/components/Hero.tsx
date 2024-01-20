"use client"

import React from "react";
import Image from "next/image"
import CButton from "./CButton";

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Busca y alquila un coche de forma rápida y fácil
                </h1>

                <p className="hero__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                
                <CButton
                    title="Ver coches"
                    containerStyles="bg-[#50d71e] text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />

                    <div className="hero__image-overlay" />
                </div>
            </div>
        </div>
    )
}

export default Hero