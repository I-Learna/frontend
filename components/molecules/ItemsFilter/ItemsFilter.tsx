"use client";
import { FC } from "react";
import FilterCategories from "./FilterCategoryList";
import MobileItemsFilter from "./MobileItemsFilter";
import { IOnFiltersChange } from "./types";

interface IProps {
  onFiltersChange: IOnFiltersChange;
}

const ItemsFilter: FC<IProps> = (props) => {
  const { onFiltersChange } = props;
  return (
    <>
      <div className="xl:hidden">
        <MobileItemsFilter onFiltersChange={onFiltersChange} />
      </div>

      <div className="hidden xl:block">
        <DesktopItemsFilter onFiltersChange={onFiltersChange} />
      </div>
    </>
  );
};

const DesktopItemsFilter: FC<IProps> = ({ onFiltersChange }) => {
  return <FilterCategories onFiltersChange={onFiltersChange} />;
};

export default ItemsFilter;
