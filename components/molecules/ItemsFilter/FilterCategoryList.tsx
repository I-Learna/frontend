"use client";
import categories from "@/public/data/filters.json";
import { FC } from "react";
import FilterCategory from "./FilterCategory";
import { IOnFiltersChange } from "./types";
import { useFilterState } from "./useFilterState";

interface IFilterCategoriesProps {
  onFiltersChange: IOnFiltersChange;
}

const FilterCategories: FC<IFilterCategoriesProps> = ({ onFiltersChange }) => {
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

      {categories.map((category) => (
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
