"use client";
import ItemCard from "@/components/molecules/ItemCard";
import ItemsFilter from "@/components/molecules/ItemsFilter/ItemsFilter";
import Sort from "@/components/molecules/Sort";
import Pagination from "@/components/ui/Pagination";
import useIsFirstRender from "@/hooks/useIsFirstRender";
import { getRecordedCourses } from "@/services/coursesService";
import {
  IGetCoursesFilter,
  IGetCoursesRequest,
} from "@/types/api/requests/IGetCoursesRequest";
import {
  ICourse,
  IGetCoursesResponse,
} from "@/types/api/responses/IGetCoursesResponse";
import { FC, useEffect, useState } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import { MdOutlineList } from "react-icons/md";

interface ICoursesProps {
  data: IGetCoursesResponse;
}

interface IProps {
  data: any;
  // fetchFn: () => any;
  // filterFn: () => any;
  title: string;
}

const Courses: FC<IProps> = (props) => {
  const { data, title } = props;
  const isFirstRender = useIsFirstRender();
  const itemsPerPage = 9;
  const [items, setItems] = useState<ICourse[]>(data.courses);
  const [totalItems, setTotalItems] = useState<number>(data.totalItems);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [filters, setFilters] = useState<IGetCoursesFilter[]>([]);
  const [nextPaginateFrom, setNextPaginateFrom] = useState<number>(0);
  const [nextPaginateTo, setNextPaginateTo] = useState<number>(9);
  const [horizontal, setHorizontal] = useState<boolean>(false);

  useEffect(() => {
    if (isFirstRender) return;

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
    const reqBody: IGetCoursesRequest = {
      search,
      sortBy,
      filters,
      paginateFrom: nextPaginateFrom,
      paginateTo: nextPaginateTo,
    };

    // calling the api
    const response = await getRecordedCourses(reqBody);

    // update the items
    setItems(response.courses);

    // update the total items
    setTotalItems(response.totalItems);

    // update the current page
    setCurrentPage(1);
  };

  // to be used in the pagination component
  const handlePageChange = (page: number) => setCurrentPage(page);

  // to be used in the filter component
  const handleFiltersChange = (filters: IGetCoursesFilter[]) => {
    setFilters(filters);
  };

  return (
    <div className="p-4 grid grid-cols-12 gap-x-2 gap-y-4">
      {/* title */}
      <div className="row-start-2 col-span-12 xl:row-start-1 xl:col-span-4">
        <h1 className="text-2xl font-bold text-accent">
          iLearna Recorded Courses
        </h1>
      </div>

      {/* sort and view */}
      <div className="row-start-1 col-span-9 sm:col-span-4 xl:col-start-11 xl:col-span-2 flex gap-3 xl:justify-end items-center">
        <div className="hidden xl:flex space-x-2 text-2xl">
          <button
            onClick={() => setHorizontal(false)}
            className={`${horizontal ? "text-gray-400" : "text-accent"}`}
          >
            <BsGrid3X2Gap />
          </button>
          <button
            onClick={() => setHorizontal(true)}
            className={`${horizontal ? "text-accent" : "text-gray-400"}`}
          >
            <MdOutlineList />
          </button>
        </div>

        <div className="w-full">
          <Sort />
        </div>
      </div>

      {/* filters */}
      <div className="row-start-1 col-start-1 col-span-3 sm:col-start-1 sm:col-span-2 xl:row-start-2 xl:col-span-3">
        <ItemsFilter onFiltersChange={handleFiltersChange} />
      </div>

      {/* courses */}
      <div className="col-span-12 row-start-3 xl:row-start-2 xl:col-span-9">
        <div
          className={`grid grid-cols-1  gap-4 ${
            horizontal ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {items.map((item) => (
            <ItemCard
              key={item.id}
              baseHref=""
              title={item.title}
              duration={item.duration}
              durationDesc={item.durationDesc}
              image={item.image}
              rating={item.rating}
              price={item.price}
              oldPrice={item.oldPrice}
              description={item.description}
              horizontal={horizontal}
            />
          ))}
        </div>
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

export default Courses;
