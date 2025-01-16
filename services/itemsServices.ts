import recordedCourses from "@/public/data/recordedCourses.json";
import liveCourses from "@/public/data/liveCourses.json";
import books from "@/public/data/books.json";
import { IGetItemsRequest } from "@/types/api/requests/IGetItemsRequest";
import { IGetItemsResponse } from "@/types/api/responses/IGetItemsResponse";

export async function getRecordedCourses(
  request: IGetItemsRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalItems: 50,
    items: recordedCourses,
  };
}

export async function getRecordedCourseDetails() {}

export async function getLiveCourses(
  request: IGetItemsRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalItems: 50,
    items: liveCourses,
  };
}

export async function getLiveCourseDetails() {}

export async function getCourseFilters() {}

export async function getBooks(
  request: IGetItemsRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalItems: 50,
    items: books,
  };
}
