export interface Instructor {
  id: number;
  name: string;
}

export type AdminCourseStatus = "published" | "pending" | "drafted" | "rejected";

export interface AdminCourse {
  id: number;
  name: string;
  instructor: Instructor;
  status: string;
  createDate: string;
  stageStatus: string;
}

export interface IGetAdminCoursesList {
  allCourses: number;
  published: number;
  pending: number;
  drafted: number;
  rejected: number;
  courses: AdminCourse[];
}
