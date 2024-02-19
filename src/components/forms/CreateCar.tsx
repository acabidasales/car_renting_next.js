import { Fragment, useState } from "react";
import Image from "next/image";
import { CreateCarProps } from "@/types";
import { CButton } from "../buttons";
import { Dialog, Transition } from "@headlessui/react";
import { createCoche } from "@/lib/actions";

const CreateCar = ({ isOpen, closeModal }: CreateCarProps) => {
  const [formData, setFormData] = useState({
        marca: "",
        modelo: "",
        caballos: 0,
        año: 0,
        tipo_combustible: "",
        tipo_transmision: "",
        precio: 0,
        imagen_link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            createCoche(formData)
            location.reload();
            closeModal();
        } catch (error) {
            console.error("Error enviando el formulario:", error);
        }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <label htmlFor="marca">Marca:</label>
                      <input
                        type="text"
                        id="marca"
                        name="marca"
                        onChange={handleChange}
                        placeholder="Marca"
                      />
                    </div><br></br>

                    <div className="flex flex-col">
                      <label htmlFor="modelo">Modelo:</label>
                      <input
                        type="text"
                        id="modelo"
                        name="modelo"
                        onChange={handleChange}
                        placeholder="Modelo"
                      />
                    </div><br></br>

                    <div className="flex flex-col">
                      <label htmlFor="caballos">Caballos:</label>
                      <input
                        type="number"
                        id="caballos"
                        name="caballos"
                        onChange={handleChange}
                        placeholder="Caballos"
                      />
                    </div><br></br>

                    <div className="flex flex-col">
                      <label htmlFor="año">Año:</label>
                      <input
                        type="number"
                        id="año"
                        name="año"
                        onChange={handleChange}
                        placeholder="Año"
                      />
                    </div><br></br>

                    <div className="flex flex-col">
                      <label htmlFor="tipo_combustible">Tipo de combustible:</label>
                      <input
                        type="text"
                        id="tipo_combustible"
                        name="tipo_combustible"
                        onChange={handleChange}
                        placeholder="Tipo de combustible"
                      />
                    </div><br></br>

                    <div className="flex flex-col">
                      <label htmlFor="tipo_transmision">Tipo de transmisión:</label>
                      <input
                        type="text"
                        id="tipo_transmision"
                        name="tipo_transmision"
                        onChange={handleChange}
                        placeholder="Tipo de transmisión"
                      />
                    </div><br></br>

                    <div className="flex flex-col">
                      <label htmlFor="precio">Precio:</label>
                      <input
                        type="number"
                        id="precio"
                        name="precio"
                        onChange={handleChange}
                        placeholder="Precio"
                      />
                    </div><br></br>

                    <div className="flex flex-col">
                      <label htmlFor="imagen_link">Enlace de la imagen:</label>
                      <input
                        type="text"
                        id="imagen_link"
                        name="imagen_link"
                        onChange={handleChange}
                        placeholder="Enlace de la imagen"
                      />
                    </div><br></br>

                    <CButton
                      bType="submit"
                      title="Crear Coche"
                      containerStyles="w-full py-[16px] rounded-full bg-[#50d71e] opacity-75"
                      textStyles="text-white text-[14px] leading-[17px] font-bold"
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateCar;
