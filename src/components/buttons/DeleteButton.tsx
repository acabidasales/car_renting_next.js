import { DeleteButtonProps } from '@/types';
import Image from 'next/image';
import { sql } from '@vercel/postgres';
import { deleteCoche } from '@/lib/actions';

export const DeleteButton = ({ isDisabled, id, containerStyles, textStyles}: DeleteButtonProps) => {
    const handleClick = async () => {
        deleteCoche(id)
        location.reload();
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