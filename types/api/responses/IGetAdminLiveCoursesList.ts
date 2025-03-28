

export interface AdminLiveCourse {
  id: number;
  name: string;
  instructorNumber: number;
  createDate: string;
}

export interface IGetAdminLiveCoursesList {
  allCourses: number;

  liveCourses: AdminLiveCourse[];
}
