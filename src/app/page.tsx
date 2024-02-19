import Image from "next/image";
import { Hero, Catalog } from "@/components";
import { CreateButton } from "@/components/buttons";
import SearchBar from "@/components/Searchbar";
import { searchCars } from "@/lib/actions";
import { HomeProps } from "@/types";
import CarCard from "@/components/CarCard";
import Pagination from "@/components/Pagination";

export default async function Home({searchParams}: HomeProps) {
  
  const allCars = await searchCars(searchParams.marca || "", searchParams.modelo || "", searchParams.limit || 10)
  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
        <div className='home__filters'>
          <SearchBar />
        </div><br></br>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                <div key={car.id}>
                    <CarCard car={car}/>
                </div>
                ))}
            </div>
            <Pagination
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
        </section>
        ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2><br></br><br></br><br></br>
        </div>
      )}
      </div>
    </main>
  );
}
