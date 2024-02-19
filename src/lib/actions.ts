'use server';

import { CarProps } from '@/types';
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

interface CarUpdateActionProps {
    id: number;
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

export async function updateCoche({ id, marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link }: CarUpdateActionProps) {
    try  {
        await sql`UPDATE coches SET marca = ${marca}, modelo = ${modelo}, caballos = ${caballos}, año = ${año}, tipo_combustible = ${tipo_combustible}, tipo_transmision = ${tipo_transmision}, precio = ${precio}, imagen_link = ${imagen_link} WHERE id = ${id}`;
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

export async function searchMarcas() {
    const { rows } = await sql`SELECT * FROM marcas`;
    return rows;
}

export async function searchCars(marca: string, modelo: string) {
    console.log(marca);
    console.log(modelo);
    
    
    if (marca != "" && modelo != ""){
        const { rows } = await sql<CarProps>`SELECT id, marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link FROM coches WHERE marca = ${marca} AND modelo = ${modelo}`;
        console.log(1);
        return rows
    }else if (marca != "") {
        const { rows } = await sql<CarProps>`SELECT id, marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link FROM coches WHERE marca = ${marca}`;
        console.log(2);
        return rows
    }else if (modelo != "") {
        const { rows } = await sql<CarProps>`SELECT id, marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link FROM coches WHERE modelo = ${modelo}`;
        console.log(3);
        return rows
    }else {
        const { rows } = await sql<CarProps>`SELECT id, marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link FROM coches`;
        console.log(4);
        return rows
    }
}