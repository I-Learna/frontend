import Items from "@/components/molecules/Items/Items";
import { getBooks } from "@/services/itemsServices";
import { IGetItemsRequest } from "@/types/api/requests/IGetItemsRequest";
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

  return (
    <Suspense>
      <Items data={books} title="ilearna live courses" productType="books" />
    </Suspense>
  );
};

export default Page;
