import { DeleteButtonProps } from '@/types';
import Image from 'next/image';
import { sql } from '@vercel/postgres';

export const DeleteButton = ({ isDisabled, id, containerStyles, textStyles}: DeleteButtonProps) => {
    console.log(process.env.NEXT_PUBLIC_PROGRESS_URL);
    const handleClick = async () => {
        try {
            await sql`DELETE FROM coches WHERE id = ${id}`;

            console.log('Coche eliminado de forma correcta');
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };
  
    return (
    <button
        disabled={isDisabled}
        id={id.toString()}
        className={`custom-btn ${containerStyles}`} 
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            Eliminar coche
        </span>
    </button>
  )
}

export default DeleteButton;

/* INSERT INTO coches (marca, modelo, caballos, año, tipo_combustible, tipo_transmision, precio, imagen_link)
VALUES ('Prueba', 'Prueba', 200, 2023, 'Gasolina', 'Automático', 9999, 'Prueba.png'); */