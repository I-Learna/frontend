"use client";
import { FC } from "react";
import FilterCategories from "./FilterCategoryList";
import MobileItemsFilter from "./MobileItemsFilter";
import { IOnFiltersChange } from "./types";
import { IItemsFiltersResponse } from "@/types/api/responses/Items";

interface IProps {
  filters: IItemsFiltersResponse;
  onFiltersChange: IOnFiltersChange;
}

const ItemsFilter: FC<IProps> = (props) => {
  const { onFiltersChange, filters } = props;

  return (
    <>
      <div className="xl:hidden">
        <MobileItemsFilter
          filters={filters}
          onFiltersChange={onFiltersChange}
        />
      </div>

      <div className="hidden xl:block">
        <DesktopItemsFilter
          filters={filters}
          onFiltersChange={onFiltersChange}
        />
      </div>
    </>
  );
};

const DesktopItemsFilter: FC<IProps> = ({ onFiltersChange, filters }) => {
  return (
    <FilterCategories filters={filters} onFiltersChange={onFiltersChange} />
  );
};

export default ItemsFilter;
