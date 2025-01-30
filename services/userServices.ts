import MyCourses from "@/public/data/myCourses.json";
import { IMyCourse } from "@/types/api/responses/user";

export async function getMyCourses(): Promise<IMyCourse[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return MyCourses;
}

export async function getRecommendedCourses() {}

export async function getCartInfo() {}

export async function checkout() {}

export async function getWishlist() {}

export async function addToWishlist() {}

export async function deleteFromWishlist() {}
