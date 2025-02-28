import React, { Suspense } from "react";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";
import { IGetItemsRequest } from "@/types/api/requests/Items";
import PageBanner from "@/components/layout/PageBanner";
import Items from "@/components/molecules/Items/Items";
import { getBlogs, getRecordedCoursesFilters } from "@/services/itemsServices";

export const metadata: Metadata = {
  title: "iLearna blogs",
  ...baseMetadata,
};

const Page = async () => {
  const request: IGetItemsRequest = {
    search: "",
    sortBy: "",
    paginateFrom: 0,
    paginateTo: 9,
    filters: [],
  };

  const blogs = await getBlogs(request);
  const filters = await getRecordedCoursesFilters();

  return (
    <Suspense>
      {/* <PageBanner
        title="Learn at Your Own Pace with Expert-Led Recorded Courses"
        pathName="RECORDED COURSES"
        imgSrc="/images/recordedbanner.png"
        bgClass="bg-accent-light"
      /> */}
      <Items
        data={blogs}
        filters={filters}
        title="iLearna blogs"
        productType="blogs"
      />
    </Suspense>
  );
};

export default Page;
