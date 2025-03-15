import PageBanner from "@/components/layout/PageBanner";
import Items from "@/components/molecules/Items/Items";
import { getBlogs, getBlogsFilters } from "@/services/itemsServices";
import { IGetItemsRequest } from "@/types/api/requests/Items";
import React, { Suspense } from "react";

const Page = async () => {
  const request: IGetItemsRequest = {
    search: "",
    sortBy: "",
    paginateFrom: 0,
    paginateTo: 9,
    filters: [],
  };

  const blogs = await getBlogs(request);
  const filters = await getBlogsFilters();

  return (
    <Suspense>
      <PageBanner
        title="Expand Your Knowledge with Expert-Authored Blogs"
        pathName="Blogs"
        imgSrc="/images/booksbanner.png"
        bgClass="bg-[#F7FFD2]"
      />
      <Items
        data={blogs}
        filters={filters}
        title="ilearna Blogs and Articles"
        productType="blogs"
      />
    </Suspense>
  );
};

export default Page;
