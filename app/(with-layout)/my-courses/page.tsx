import MyCourseCard from "@/components/routes/my-courses/MyCourseCard";
import { getMyCourses } from "@/services/userServices";
import React from "react";

const Page = async () => {
  const myCourses = await getMyCourses();

  return (
    <div className="grid grid-cols-3 gap-4">
      {myCourses &&
        myCourses.length > 0 &&
        myCourses.map((course) => <MyCourseCard course={course} />)}
    </div>
  );
};

export default Page;
