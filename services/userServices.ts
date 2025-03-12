import MyCourses from "@/public/data/myCourses.json";
import myCourseDetails from "@/public/data/MyCourseDetails.json";
import { IMyCourse } from "@/types/api/responses/user";

export async function getMyCoursesList(): Promise<IMyCourse[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return MyCourses;
}

export async function getMyCourseDetails(courseId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return myCourseDetails;
}

export async function getCourseLesson(lessonId: string) {}

export async function getRecommendedCourses() {}

export async function getCartInfo() {}

export async function checkout() {}

export async function getWishlist() {}

export async function addToWishlist() {}

export async function deleteFromWishlist() {}
