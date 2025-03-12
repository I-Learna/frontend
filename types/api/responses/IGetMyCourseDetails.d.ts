export interface MyCourseAuthor {
  name: string;
  title: string;
  image: string;
}

export interface MyCourseLesson {
  id: number;
  title: string;
  duration: string;
  videoURL: string;
  overview: string;
  isVisited: boolean;
  isCompleted: boolean;
}

export interface MyCourseModule {
  id: number;
  lessons: MyCourseLesson[];
}

export interface MyCourse {
  id: number;
  title: string;
  author: MyCourseAuthor;
  modules: MyCourseModule[];
}
