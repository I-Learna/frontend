import Items from "@/components/molecules/Items/Items";
import { getLiveCourses } from "@/services/itemsServices";
import { IGetItemsRequest } from "@/types/api/requests/IGetItemsRequest";
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

  return (
    <Suspense>
      <Items data={courses} title="ilearna live courses" productType="live" />
    </Suspense>
  );
};

export default page;
