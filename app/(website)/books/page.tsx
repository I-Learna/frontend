import PageBanner from "@/components/layout/PageBanner";
import Items from "@/components/molecules/Items/Items";
import { getBooks, getBooksFilters } from "@/services/itemsServices";
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

  const books = await getBooks(request);
  const filters = await getBooksFilters();

  return (
    <Suspense>
      <PageBanner
        title="Expand Your Knowledge with Expert-Authored E-Books"
        pathName="E-BOOKS"
        imgSrc="/images/booksbanner.png"
        bgClass="bg-[#F7FFD2]"
      />
      <Items
        data={books}
        filters={filters}
        title="ilearna live courses"
        productType="books"
      />
    </Suspense>
  );
};

export default Page;
