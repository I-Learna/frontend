import useIsFirstRender from "@/hooks/useIsFirstRender";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import { IGetItemsFilter } from "@/types/api/requests/IGetItemsRequest";
import { useState } from "react";
import { IOnFiltersChange } from "./types";

export const useFilterState = (onFiltersChange: IOnFiltersChange) => {
  const isFirstRender = useIsFirstRender();
  const [selectedFilters, setSelectedFilters] = useState<IGetItemsFilter[]>([]);

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const applyFilters = () => {
    onFiltersChange(selectedFilters);
  };

  const handleCheckboxChange = (categoryCode: string, optionCode: string) => {
    setSelectedFilters((prev) => {
      // Create a deep copy the previous state
      const newSelectedFilters = prev.map((filter) => ({
        ...filter,
        filters: [...filter.filters],
      }));

      // Find the category index
      const categoryIndex = newSelectedFilters.findIndex(
        (filter) => filter.category === categoryCode
      );

      // If the category exists, update the selected filters
      if (categoryIndex !== -1) {
        // Check if the option is already selected
        const isOptionSelected =
          newSelectedFilters[categoryIndex].filters.includes(optionCode);

        // If the option is already selected, remove it
        if (isOptionSelected) {
          newSelectedFilters[categoryIndex].filters = newSelectedFilters[
            categoryIndex
          ].filters.filter((item) => item !== optionCode);

          // If the category has no filters, remove it
          if (newSelectedFilters[categoryIndex].filters.length === 0) {
            newSelectedFilters.splice(categoryIndex, 1);
          }
        }
        // If the option is not selected, add it
        else {
          newSelectedFilters[categoryIndex].filters.push(optionCode);
        }
      }

      // If the category does not exist, add it
      else {
        newSelectedFilters.push({
          category: categoryCode,
          filters: [optionCode],
        });
      }

      // Return the new state
      return newSelectedFilters;
    });
  };

  useUpdateEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  return { selectedFilters, handleCheckboxChange, clearFilters, applyFilters };
};
