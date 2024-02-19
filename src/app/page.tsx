import Image from "next/image";
import { Hero, Catalog } from "@/components";
import { CreateButton } from "@/components/buttons";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width'>
        <CreateButton 
            containerStyles='w-1/6 py-[16px] rounded-full bg-[#50d71e] hover:bg-[#bbf6a0]'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
        />
      </div>
      <div className='mt-12 padding-x padding-y max-width' id='catalogo'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catalogo de coches</h1>
          <p>Explora nuestros coches</p>
          <br></br>
        </div>
        <Catalog />
      </div>
    </main>
  );
}
