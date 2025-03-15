import recordedCourses from "@/public/data/recordedCourses.json";
import liveCourses from "@/public/data/liveCourses.json";
import blogs from "@/public/data/blogs.json";

import filters from "@/public/data/filters.json";
import books from "@/public/data/books.json";
import recordedCourse from "@/public/data/RecordedCourseDetails.json";
import { IGetItemsRequest } from "@/types/api/requests/Items";
import {
  IGetItemsResponse,
  IItemsFiltersResponse,
} from "@/types/api/responses/Items";

export async function getRecordedCourses(
  request: IGetItemsRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    totalItems: 50,
    items: recordedCourses,
  };
}

export async function getLiveCourses(
  request: IGetItemsRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    totalItems: 50,
    items: liveCourses,
  };
}

export async function getBooks(
  request: IGetItemsRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    totalItems: 50,
    items: books,
  };
}

export async function getRecordedCoursesFilters(): Promise<IItemsFiltersResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return filters;
}

export async function getLiveCoursesFilters(): Promise<IItemsFiltersResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return filters;
}

export async function getBooksFilters(): Promise<IItemsFiltersResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return filters;
}

export async function getRecordedCourseDetails(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return recordedCourse;
}

export async function getLiveCourseDetails(id: string) { }

export async function getBookDetails(id: string) { }




export async function getBlogs(
  request: IGetItemsRequest
): Promise<IGetItemsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    totalItems: 50,
    items: blogs,
  };
}

export async function getBlogsFilters(): Promise<IItemsFiltersResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return filters;
}