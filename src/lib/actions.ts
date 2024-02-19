'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

interface CarCreateActionProps {
      marca: string;
      modelo: string;
      caballos: number;
      año: number;
      tipo_combustible: string;
      tipo_transmision: string;
      precio: number;
      imagen_link: string;
}

export async function createCoche({ marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link }: CarCreateActionProps) {
    try {
        await sql`INSERT INTO coches (marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link)
        VALUES (${marca}, ${modelo}, ${caballos}, ${año}, ${tipo_combustible}, ${tipo_transmision}, ${precio}, ${imagen_link})`;
        return { message: 'Inserted Car' };
    } catch (error) {
        return { message: 'Database Error: Failed to Insert Car.' };
    }
}

export async function deleteCoche(id : number) {
    
    try {
        await sql`DELETE FROM coches WHERE id = ${id}`;
        return { message: 'Deleted Car.' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Car.' };
    }

}