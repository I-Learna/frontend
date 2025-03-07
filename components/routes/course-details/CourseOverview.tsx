"use client";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { ICourseOverview } from "@/types/api/responses/IGetCourseDetails";
import React, { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { v4 } from "uuid";

interface IProps {
  overview: ICourseOverview;
}

const CourseOverview: FC<IProps> = ({ overview }) => {
  return (
    <section className="mt-28 2xl:mt-16" id="overview">
      <div className="flex flex-col 2xl:flex-row justify-between gap-10">
        <div>
          <h2 className="text-2xl font-semibold">About This Course</h2>
          <p className="mt-8">{overview.desc}</p>
        </div>
        <div className="shrink-0 2xl:w-96 h-52 rounded-xl overflow-hidden">
          <VideoPlayer />
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12">What you'll learn</h3>
      <div className="mt-8 flex flex-col 2xl:flex-row flex-wrap gap-y-6">
        {overview.learningPoints.map((point) => (
          <div key={v4()} className="2xl:w-1/2 flex items-center gap-2">
            <FaCheck /> <p>{point}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-12">Pre-Requirements</h3>
      <div className="mt-8 flex flex-col 2xl:flex-row flex-wrap gap-y-6">
        {overview.prerequesits.map((point) => (
          <div key={v4()} className="2xl:w-1/2 flex items-center gap-2">
            <FaCheck /> <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseOverview;
