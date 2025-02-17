import { IItem } from "./Items";

export interface ICourseDetails {
  id: number;
  basicInfo: ICourseBasicInfo;
  overview: ICourseOverview;
  modules: ICourseModules;
  reviews: ICourseReviews;
  author: ICourseAuthor;
}

////////////////////////////////////////////////////////////////////////////

export interface ICourseBasicInfo {
  courseTitle: string;
  desc: string;
  price: ICoursePrice;
  modulesCount: number;
  duration: string;
  likes: string;
  rating: ICourseRating;
  courseLevel: ICourseLevel;
  enrolledCount: number;
}

export interface ICoursePrice {
  activePrice: number;
  oldPrice: number;
}

export interface ICourseRating {
  rate: number;
  reviewsCount: number;
}

export interface ICourseLevel {
  level: string;
  prerequesits: string;
}

////////////////////////////////////////////////////////////////////////////

export interface ICourseOverview {
  video: string;
  desc: string;
  learningPoints: string[];
  prerequesits: string[];
  extraDetails: ICourseExtraInfo[];
}

export interface ICourseExtraInfo {
  icon: string;
  title: string;
  desc: string;
}

////////////////////////////////////////////////////////////////////////////

export interface ICourseModules {
  desc: string;
  data: ICourseModule[];
}

export interface ICourseModule {
  title: string;
  duration: string;
  lessonsDesc: string;
  lessons: ICourseLesson[];
  assessmentsDesc: string;
  assessments: ICourseAssessment[];
  readingsDesc: string;
  readings: ICourseReading[];
}

export interface ICourseLesson {
  id: number;
  title: string;
  duration: string;
  canPreview: boolean;
}

export interface ICourseAssessment {
  id: number;
  title: string;
  duration: string;
}

export interface ICourseReading {
  id: number;
  title: string;
  duration: string;
}

////////////////////////////////////////////////////////////////////////////

export interface ICourseReviews {
  overview: ICourseReviewOverview;
  reviewers: ICourseReviewer[];
}

export interface ICourseReviewOverview {
  rating: number;
  totalReviews: number;
  five: number;
  four: number;
  three: number;
  two: number;
  one: number;
}

export interface ICourseReviewer {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

////////////////////////////////////////////////////////////////////////////

export interface ICourseAuthor {
  id: number;
  name: string;
  pic: string;
  title: string;
  bio: string;
  courses: IItem[];
}
