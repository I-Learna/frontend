import React, { FC } from "react";
import FilterOption from "./FilterOption";
import { IItemsFilterCategory } from "@/types/api/responses/Items";
import { IGetItemsFilter } from "@/types/api/requests/Items";

interface IProps {
  category: IItemsFilterCategory;
  onCheckboxChange: (categoryCode: string, optionCode: string) => void;
  selectedFilters: IGetItemsFilter[];
}

const FilterCategory: FC<IProps> = (props) => {
  const { category, onCheckboxChange, selectedFilters } = props;

  return (
    <div className="border-b xl:border xl:mb-5 border-accent-light px-4 py-3 rounded-sm w-full space-y-3">
      <div className="flex items-center justify-between text-accent">
        <h3 className="font-semibold">{category.categoryLabel}</h3>
      </div>

      <div className="space-y-2">
        {category.options.map((option) => {
          return (
            <FilterOption
              key={option.optionCode}
              option={option}
              onCheckboxChange={onCheckboxChange}
              selectedFilters={selectedFilters}
              categoryCode={category.categoryCode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterCategory;
