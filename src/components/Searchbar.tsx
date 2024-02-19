"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchMarca from "./SearchMarca";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (marca.trim() === "" && modelo.trim() === "") {
        return alert("Please provide some input");
        }

        updateSearchParams(modelo, marca);
    };

    const updateSearchParams = (modelo: string, marca: string) => {

        const searchParams = new URLSearchParams(window.location.search);


        if (modelo) {
        searchParams.set("modelo", modelo);
        } else {
        searchParams.delete("modelo");
        }

        if (marca) {
        searchParams.set("marca", marca);
        } else {
        searchParams.delete("marca");
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchMarca
          marca={marca}
          setMarca={setMarca}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car modelo'
        />
        <input
          type='text'
          name='modelo'
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          placeholder='Corolla...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;