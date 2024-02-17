// Importa React y los módulos necesarios
import React from 'react';
import Image from 'next/image';
import CarCard from './CarCard';
import Catalog from './Catalog';
import { sql } from "@vercel/postgres";

export default async function Catalogo() {
    const { rows } = await sql`SELECT * from coches`;
  
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