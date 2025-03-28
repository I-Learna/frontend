import courseDetails from "@/public/data/adminCourseDetails.json";
import courses from "@/public/data/adminCourses.json";

import ebookDetails from "@/public/data/adminEbookDetails.json";
import ebooks from "@/public/data/adminEbooks.json";

import liveCourses from "@/public/data/adminLiveCourses.json";
import liveCourseDetails from "@/public/data/adminLiveCourseDetails.json";

import { IGetAdminCourseDetails } from "@/types/api/responses/IGetAdminCourseDetails";
import { IGetAdminCoursesList } from "@/types/api/responses/IGetAdminCoursesList";

import { IGetAdminEbooksList } from "@/types/api/responses/IGetAdminEbooksList";
import { IGetAdminEbookDetails } from "@/types/api/responses/IGetAdminEbookDetails";


import { IGetAdminLiveCoursesList } from "@/types/api/responses/IGetAdminLiveCoursesList";
import { IGetAdminLiveCourseDetails } from "@/types/api/responses/IGetAdminLiveCourseDetails";

export async function getAdminCoursesList(): Promise<IGetAdminCoursesList> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return courses;
}

export async function getAdminCoursesDetails(): Promise<IGetAdminCourseDetails> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return courseDetails;
}

// live course

export async function getAdminLiveCoursesList(): Promise<IGetAdminLiveCoursesList> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return liveCourses;
}

export async function getAdminLiveCoursesDetails(): Promise<IGetAdminLiveCourseDetails> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return liveCourseDetails;
}

// adminEbooks

export async function getAdminEbooksList(): Promise<IGetAdminEbooksList> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return ebooks
}

export async function getAdminEbooksDetails(): Promise<IGetAdminEbookDetails> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return ebookDetails;
}