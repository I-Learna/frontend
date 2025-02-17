import {
  ICourseAuthor,
  ICourseBasicInfo,
} from "@/types/api/responses/IGetCourseDetails";
import Image from "next/image";
import React, { FC } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

interface IProps {
  basicInfo: ICourseBasicInfo;
  author: ICourseAuthor;
}

const CourseHeader: FC<IProps> = ({ basicInfo, author }) => {
  return (
    <section className="bg-primary p-10 text-white flex justify-between gap-10 items-stretch relative">
      <div className="flex flex-col">
        <h1 className="text-5xl font-semibold capitalize mb-3">
          {basicInfo.courseTitle}
        </h1>

        <p>{basicInfo.desc}</p>

        <div className="mt-auto space-y-3">
          <p className="space-x-3 text-xl">
            <span className="text-accent font-semibold">
              ${basicInfo.price.activePrice}
            </span>
            <span className="line-through text-customGray">
              ${basicInfo.price.oldPrice}
            </span>
          </p>

          <div className="flex gap-3">
            <button className="btn btn-accent">Buy this course</button>

            <button className="btn btn-white-trans">Add To Cart</button>

            <button className="btn btn-white-trans">
              <FaRegHeart className="text-2xl m-0 p-0" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 text-center border-2 border-accent-dark rounded-lg max-w-xl">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={author.pic}
            alt={author.name}
            width={70}
            height={70}
            className="rounded-full"
          />

          <p className="font-semibold">{author.name}</p>
        </div>

        <p>{author.title}</p>
        <p>{author.bio}</p>

        <button className="mt-4 btn btn-white-trans text-lg">
          View Profile
        </button>
      </div>

      <div className="absolute left-0 top-[95%] w-full bg-white text-primary shadow-lg rounded-lg p-4">
        <div className="flex justify-between">
          <div className="w-full px-5 border-r border-customGray">
            <h4 className="text-lg font-semibold">Modules</h4>
            <p className="text-sm text-customGray">
              {basicInfo.modulesCount} modules
            </p>
          </div>

          <div className="w-full px-5 border-r border-customGray">
            <h4 className="text-lg font-semibold">Duration</h4>
            <p className="text-sm text-customGray">{basicInfo.duration}</p>
          </div>

          <div className="w-full px-5 border-r border-customGray">
            <h4 className="text-lg font-semibold flex gap-1 items-center">
              <AiFillLike className="text-accent text-2xl" />
              {basicInfo.likes}
            </h4>
            <p className="text-sm text-customGray">Liked this course</p>
          </div>

          <div className="w-full px-5 border-r border-customGray">
            <h4 className="text-lg font-semibold flex gap-1 items-center">
              <IoStar className="text-accent text-2xl" />
              4.7
            </h4>
            <p className="text-sm text-customGray">
              Reviews ({basicInfo.rating.reviewsCount})
            </p>
          </div>

          <div className="w-full px-5 border-r border-customGray">
            <h4 className="text-lg font-semibold">
              {basicInfo.courseLevel.level} level
            </h4>
            <p className="text-sm text-customGray">
              {basicInfo.courseLevel.prerequesits}
            </p>
          </div>

          <div className="w-full px-5">
            <h4 className="text-lg font-semibold">Enrolled People</h4>
            <p className="text-sm text-customGray">
              Enrolled ({basicInfo.enrolledCount})
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeader;
