"use client";

import { useRouter } from "next/navigation";

import { PaginationProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { CButton } from "./buttons";

const Pagination = ({ pageNumber, isNext }: PaginationProps) => {
  const router = useRouter();

  const handleNavigation = () => {

    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CButton
          bType="button"
          title="Ver más"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default Pagination;