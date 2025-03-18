import courseDetails from "@/public/data/adminCourseDetails.json";
import courses from "@/public/data/adminCourses.json";
import { IGetAdminCourseDetails } from "@/types/api/responses/IGetAdminCourseDetails";
import { IGetAdminCoursesList } from "@/types/api/responses/IGetAdminCoursesList";

export async function getAdminCoursesList(): Promise<IGetAdminCoursesList> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return courses;
}

export async function getAdminCoursesDetails(): Promise<IGetAdminCourseDetails> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return courseDetails;
}
