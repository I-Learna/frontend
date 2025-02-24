import PageBanner from "@/components/layout/PageBanner";
import Items from "@/components/molecules/Items/Items";
import {
  getRecordedCourses,
  getRecordedCoursesFilters,
} from "@/services/itemsServices";
import { IGetItemsRequest } from "@/types/api/requests/Items";
import { Suspense } from "react";

const Page = async () => {
  const request: IGetItemsRequest = {
    search: "",
    sortBy: "",
    paginateFrom: 0,
    paginateTo: 9,
    filters: [],
  };

  const courses = await getRecordedCourses(request);
  const filters = await getRecordedCoursesFilters();

  return (
    <Suspense>
      <PageBanner
        title="Learn at Your Own Pace with Expert-Led Recorded Courses"
        pathName="RECORDED COURSES"
        imgSrc="/images/recordedbanner.png"
        bgClass="bg-accent-light"
      />
      <Items
        data={courses}
        filters={filters}
        title="ilearna recorded courses"
        productType="recorded"
      />
    </Suspense>
  );
};

export default Page;
