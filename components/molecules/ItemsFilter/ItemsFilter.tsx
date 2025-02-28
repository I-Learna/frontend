"use client";
import { FC } from "react";
import FilterCategories from "./FilterCategoryList";
import MobileItemsFilter from "./MobileItemsFilter";
import { IOnFiltersChange } from "./types";
import { IItemsFiltersResponse } from "@/types/api/responses/Items";
import { usePathname } from "next/navigation";

interface IProps {
  filters: IItemsFiltersResponse;
  onFiltersChange: IOnFiltersChange;
}

const ItemsFilter: FC<IProps> = (props) => {
  const { onFiltersChange, filters } = props;
  const pathname = usePathname();
  
  const filteredData = pathname === "/blogs" ? filters.filter(item => item.categoryCode !== "skill_level") : filters;
  
  return (
    <>
      <div className="xl:hidden">
        <MobileItemsFilter
          filters={filteredData}
          onFiltersChange={onFiltersChange}
        />
      </div>

      <div className="hidden xl:block">
        <DesktopItemsFilter
          filters={filteredData}
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
