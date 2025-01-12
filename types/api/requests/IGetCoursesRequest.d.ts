export interface IGetCoursesRequest {
  search: string;
  sortBy: string;
  paginateFrom: number;
  paginateTo: number;
  filters: IGetCoursesFilter[];
}

export interface IGetCoursesFilter {
  category: string;
  filters: string[];
}
