import { IFilterOption } from "@/types/api/filter";
import { IGetCoursesFilter } from "@/types/api/requests/IGetCoursesRequest";
import React, { FC } from "react";
import { v4 } from "uuid";

interface IProps {
  option: IFilterOption;
  onCheckboxChange: (categoryCode: string, optionCode: string) => void;
  selectedFilters: IGetCoursesFilter[];
  categoryCode: string;
}

const FilterOption: FC<IProps> = (props) => {
  const { option, onCheckboxChange, selectedFilters, categoryCode } = props;
  const id = v4();

  return (
    <div className="flex justify-between items-center border border-accent-light p-2 rounded-sm">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={id}
          name={option.optionCode}
          checked={selectedFilters.some(
            (filter) =>
              filter.category === categoryCode &&
              filter.filters.includes(option.optionCode)
          )}
          onChange={() => onCheckboxChange(categoryCode, option.optionCode)}
        />
        <label htmlFor={id}>{option.optionLabel}</label>
      </div>
    </div>
  );
};

export default FilterOption;
