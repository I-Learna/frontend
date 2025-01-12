export interface IGetCoursesResponse {
  totalItems: number;
  courses: ICourse[];
}

export interface ICourse {
  id: string;
  title: string;
  duration: string;
  durationDesc: string;
  image: string;
  rating: number;
  price: string;
  oldPrice: string;
  description: string;
}
