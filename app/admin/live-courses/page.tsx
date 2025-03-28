import LiveCoursesTable from "@/components/routes/admin/LiveCoursesTable";
import InputSearch from "@/components/ui/InputSearch";
import { getAdminLiveCoursesList } from "@/services/adminServices";
import React from "react";

const Page = async () => {
  const liveCourses = await getAdminLiveCoursesList();
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">All Live Courses</h2>

        <div className="w-1/2">
          <InputSearch />
        </div>
      </div>

      <section className="mt-4">
        <div className="flex gap-4 mb-3">
          <h6 className="flex gap-2 items-center">
            All{" "}
            <span className="bg-blue-100 text-blue-700 p-1 rounded-lg text-xs px-2">
              {liveCourses.allCourses}
            </span>
          </h6>
        </div>
        <LiveCoursesTable liveCourses={liveCourses.liveCourses} />
      </section>
    </div>
  );
};

export default Page;
