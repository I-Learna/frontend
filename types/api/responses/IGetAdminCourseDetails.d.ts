export interface LessonDetails {
  id: number;
  title: string;
  duration: string;
  videoURL: string;
}

export interface ModuleDetails {
  id: number;
  title: string;
  desc: string;
  price: number;
  lessons: LessonDetails[];
}

export interface IGetAdminCourseDetails {
  title: string;
  image: string;
  desc: string;
  level: string;
  industry: string;
  descipline: string;
  overviewVideo: string;
  about: string;
  learningBenifits: string;
  preRequirements: string;
  extraDetails: string;
  modules: ModuleDetails[];
}
