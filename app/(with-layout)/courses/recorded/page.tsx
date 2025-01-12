"use server";
import Courses from "@/components/routes/courses/Courses";
import { getRecordedCourses } from "@/services/coursesService";
import { IGetCoursesRequest } from "@/types/api/requests/IGetCoursesRequest";
import React, { Suspense } from "react";

const Page = async () => {
  const request: IGetCoursesRequest = {
    search: "",
    sortBy: "",
    paginateFrom: 0,
    paginateTo: 9,
    filters: [],
  };

  const courses = await getRecordedCourses(request);

  return (
    <Suspense>
      <Courses
        data={courses}
        title="ilearna recorded courses"
        // fetchFn={() => {}}
        // filterFn={() => {}}
      />
    </Suspense>
  );
};

export default Page;
