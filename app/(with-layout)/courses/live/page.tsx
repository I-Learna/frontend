import PageBanner from "@/components/layout/PageBanner";
import Items from "@/components/molecules/Items/Items";
import {
  getLiveCourses,
  getLiveCoursesFilters,
} from "@/services/itemsServices";
import { IGetItemsRequest } from "@/types/api/requests/Items";
import React, { Suspense } from "react";

const page = async () => {
  const request: IGetItemsRequest = {
    search: "",
    sortBy: "",
    paginateFrom: 0,
    paginateTo: 9,
    filters: [],
  };

  const courses = await getLiveCourses(request);
  const filters = await getLiveCoursesFilters();

  return (
    <Suspense>
      <PageBanner
        title="Engage in Learning with Expert-Led Live Courses"
        pathName="LIVE COURSES"
        imgSrc="/images/livebanner.png"
        bgClass="bg-pink-200"
      />
      <Items
        data={courses}
        filters={filters}
        title="ilearna live courses"
        productType="live"
      />
    </Suspense>
  );
};

export default page;
