import Empty from "@/components/molecules/Empty";
import MyCourseCard from "@/components/routes/my-courses/MyCourseCard";
import MyCoursesFilter from "@/components/routes/my-courses/MyCoursesFilter";
import { getMyCoursesList } from "@/services/userServices";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Page = async () => {
  const myCourses = await getMyCoursesList();

  return (
    <main className="py-5">
      <section className="bg-accent-lighter p-8 rounded-md drop-shadow-md mb-5">
        <h1 className="text-4xl font-semibold mb-5">My Courses</h1>

        <MyCoursesFilter />
      </section>

      <section className="grid grid-cols-3 gap-8 p-8">
        {myCourses &&
          myCourses.length > 0 &&
          myCourses.map((course) => <MyCourseCard key={course.id} course={course} />)}
      </section>

      {myCourses.length > 0 && (
        <Empty message="You have no courses!" targetDesc="Discover our courses" href="/courses/recorded" />
      )}
    </main>
  );
};

export default Page;
