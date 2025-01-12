import courses from "@/public/data/recordedCourses.json";
import { IGetCoursesRequest } from "@/types/api/requests/IGetCoursesRequest";
import { IGetCoursesResponse } from "@/types/api/responses/IGetCoursesResponse";

export async function getRecordedCourses(
  request: IGetCoursesRequest
): Promise<IGetCoursesResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalItems: 50,
    courses,
  };
}

export async function getRecordedCourseDetails() {}

export async function getLiveCourses(
  request: IGetCoursesRequest
): Promise<IGetCoursesResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalItems: 50,
    courses,
  };
}

export async function getLiveCourseDetails() {}

export async function getCourseFilters() {}
