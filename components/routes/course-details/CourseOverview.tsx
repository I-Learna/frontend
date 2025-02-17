import { ICourseOverview } from "@/types/api/responses/IGetCourseDetails";
import React, { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { v4 } from "uuid";

interface IProps {
  overview: ICourseOverview;
}

const CourseOverview: FC<IProps> = ({ overview }) => {
  return (
    <section className="mt-16 max-w-4xl" id="overview">
      <h2 className="text-2xl font-semibold">About This Course</h2>
      <p className="mt-8">{overview.desc}</p>

      <h3 className="text-2xl font-semibold mt-12">What you'll learn</h3>
      <div className="mt-8 flex flex-wrap gap-y-6">
        {overview.learningPoints.map((point) => (
          <div key={v4()} className="w-1/2 flex items-center gap-2">
            <FaCheck /> <p>{point}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-12">Pre-Requirements</h3>
      <div className="mt-8 flex flex-wrap gap-y-6">
        {overview.prerequesits.map((point) => (
          <div key={v4()} className="w-1/2 flex items-center gap-2">
            <FaCheck /> <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseOverview;
