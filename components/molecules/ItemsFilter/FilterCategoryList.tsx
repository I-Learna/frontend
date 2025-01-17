"use client";

import { FC } from "react";
import FilterCategory from "./FilterCategory";
import { IOnFiltersChange } from "./types";
import { useFilterState } from "./useFilterState";
import { IItemsFiltersResponse } from "@/types/api/responses/Items";

interface IFilterCategoriesProps {
  filters: IItemsFiltersResponse;
  onFiltersChange: IOnFiltersChange;
}

const FilterCategories: FC<IFilterCategoriesProps> = ({
  onFiltersChange,
  filters,
}) => {
  const filterState = useFilterState(onFiltersChange);
  const { selectedFilters, handleCheckboxChange, clearFilters } = filterState;

  return (
    <>
      <button
        onClick={clearFilters}
        className="text-accent block ml-auto mt-4 me-4 xl:mt-0 xl:me-0 xl:mb-2 font-semibold"
      >
        Clear Filters
      </button>

      {filters.map((category) => (
        <FilterCategory
          key={category.categoryCode}
          category={category}
          onCheckboxChange={handleCheckboxChange}
          selectedFilters={selectedFilters}
        />
      ))}
    </>
  );
};

export default FilterCategories;
