import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image src={`/coches/${car.imagen_link}`} alt='car model' fill priority className='object-contain' />
                  </div>
                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {car.marca} {car.modelo} <br></br>
                    <b>Caballos: </b> {car.caballos}CV <br></br>
                    <b>Año: </b> {car.año} <br></br>
                    <b>Combustible: </b> {car.tipo_combustible} <br></br>
                    <b>Transmisión: </b> {car.tipo_transmision} <br></br>
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;