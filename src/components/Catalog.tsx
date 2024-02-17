// Importa React y los módulos necesarios
import React from 'react';
import Image from 'next/image';
import CarCard from './CarCard';
import Catalog from './Catalog';
import { sql } from "@vercel/postgres";
import { CarProps } from '@/types';

export default async function Catalogo() {
    const { rows } = await sql<CarProps>`SELECT id, marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link FROM coches`;
    console.log(rows)
  
    return (
        <section>
            <div className='home__cars-wrapper'>
                {rows.map((car) => (
                <div key={car.id}>
                    <CarCard car={car}/>
                </div>
                ))}
            </div>
        </section>
    );
}