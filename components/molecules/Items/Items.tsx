"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import {
  IGetItemsResponse,
  IItemsFiltersResponse,
} from "@/types/api/responses/Items";
import { useItems } from "./useItems";
// import ItemsFilter from "@/components/molecules/ItemsFilter/ItemsFilter";
// import Sort from "@/components/molecules/Sort";
// import Pagination from "@/components/ui/Pagination";
// import GridOptions from "./GridOptions";
// import ItemsList from "./ItemsList";

const ItemsFilter = dynamic(
  () => import("@/components/molecules/ItemsFilter/ItemsFilter")
);
const Sort = dynamic(() => import("@/components/molecules/Sort"));
const Pagination = dynamic(() => import("@/components/ui/Pagination"));
const GridOptions = dynamic(() => import("./GridOptions"));
const ItemsList = dynamic(() => import("./ItemsList"));

interface IProps {
  data: IGetItemsResponse;
  filters: IItemsFiltersResponse;
  title: string;
  productType: "recorded" | "live" | "books" | "blogs";
}

const Items: FC<IProps> = (props) => {
  const { data, title, productType, filters } = props;

  const itemsState = useItems({ data, productType });
  const { items, totalItems, currentPage } = itemsState;
  const { horizontal, itemsPerPage } = itemsState;
  const { setHorizontal, handleFiltersChange, handlePageChange } = itemsState;

  return (
    <div className="p-4 grid grid-cols-12 gap-x-2 gap-y-4">
      {/* title */}
      <div className="row-start-2 col-span-12 xl:row-start-1 xl:col-span-4">
        <h1 className="text-2xl font-bold text-accent">{title}</h1>
      </div>

      {/* sort and view */}
      <div className="row-start-1 col-span-9 sm:col-span-4 xl:col-start-11 xl:col-span-2 flex gap-3 xl:justify-end items-center">
        <GridOptions horizontal={horizontal} setHorizontal={setHorizontal} />

        <div className="w-full">
          <Sort />
        </div>
      </div>

      {/* filters */}
      <div className="row-start-1 col-start-1 col-span-3 sm:col-start-1 sm:col-span-2 xl:row-start-2 xl:col-span-3">
        <ItemsFilter filters={filters} onFiltersChange={handleFiltersChange} />
      </div>

      {/* items list */}
      <div className="col-span-12 row-start-3 xl:row-start-2 xl:col-span-9">
        <ItemsList items={items} horizontal={horizontal} />
      </div>

      {/* pagination */}
      <div className="col-span-12 xl:row-start-3 xl:col-start-4 xl:col-span-9">
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Items;
