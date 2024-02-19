import Image from "next/image";
import { Hero, Catalog } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div>
        
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
