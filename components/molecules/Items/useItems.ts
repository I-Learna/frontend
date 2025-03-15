import useIsFirstRender from "@/hooks/useIsFirstRender";
import useUpdateEffect from "@/hooks/useUpdateEffect";
import {
  getBlogs,
  getBooks,
  getLiveCourses,
  getRecordedCourses,
} from "@/services/itemsServices";
import { IGetItemsFilter, IGetItemsRequest } from "@/types/api/requests/Items";
import { IGetItemsResponse, IItem } from "@/types/api/responses/Items";
import { useEffect, useState } from "react";

interface IUseItemsProps {
  data: IGetItemsResponse;
  productType: "recorded" | "live" | "books" | "blogs";
}

export const useItems = (props: IUseItemsProps) => {
  const { data, productType } = props;

  const isFirstRender = useIsFirstRender();
  const itemsPerPage = 9;
  const [items, setItems] = useState<IItem[]>(data.items);
  const [totalItems, setTotalItems] = useState<number>(data.totalItems);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [filters, setFilters] = useState<IGetItemsFilter[]>([]);
  const [nextPaginateFrom, setNextPaginateFrom] = useState<number>(0);
  const [nextPaginateTo, setNextPaginateTo] = useState<number>(9);
  const [horizontal, setHorizontal] = useState<boolean>(false);

  useUpdateEffect(() => {
    // update items, totalItems, currentPage
    updateItems();
  }, [search, sortBy, filters, nextPaginateFrom, nextPaginateTo]);

  useEffect(() => {
    if (isFirstRender) return;

    // update pagination info to be ready for next fetch
    setNextPaginateFrom(currentPage * itemsPerPage);
    setNextPaginateTo(currentPage * itemsPerPage + itemsPerPage);
  }, [currentPage]);

  const updateItems = async () => {
    // preparing the request
    const reqBody: IGetItemsRequest = {
      search,
      sortBy,
      filters,
      paginateFrom: nextPaginateFrom,
      paginateTo: nextPaginateTo,
    };

    let response: IGetItemsResponse = {
      items: [],
      totalItems: 0,
    };

    if (productType == "recorded") {
      response = await getRecordedCourses(reqBody);
    } else if (productType == "live") {
      response = await getLiveCourses(reqBody);
    } else if (productType == "blogs") {
      response = await getBlogs(reqBody);
    }
    else {
      response = await getBooks(reqBody);
    }

    // update the items
    setItems(response.items);

    // update the total items
    setTotalItems(response.totalItems);

    // update the current page
    setCurrentPage(1);
  };

  // to be used in the pagination component
  const handlePageChange = (page: number) => setCurrentPage(page);

  // to be used in the filter component
  const handleFiltersChange = (filters: IGetItemsFilter[]) => {
    setFilters(filters);
  };

  return {
    items,
    totalItems,
    currentPage,
    horizontal,
    filters,
    itemsPerPage,
    search,
    sortBy,
    setHorizontal,
    setSearch,
    setSortBy,
    handlePageChange,
    handleFiltersChange,
  };
};
