"use client"

import React from "react";
import Image from "next/image"
import CButton from "./CButton";

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("catalogo");

        if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
        }
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
                    containerStyles="bg-[#50d71e] rounded-full mt-10"
                    textStyles="text-white"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                        <Image src="/hero.png" alt="hero" fill className="object-contain ml-16" />
                        <div className="hero__image-fondo"/>
                </div>
            </div>
        </div>
    )
}

export default Hero