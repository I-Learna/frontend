import { ICourseModules } from "@/types/api/responses/IGetCourseDetails";
import React, { FC } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { v4 } from "uuid";

const CourseModules: FC<{ modules: ICourseModules }> = ({ modules }) => {
  return (
    <>
      <section className="mt-16 max-w-4xl" id="modules">
        <h2 className="text-2xl font-semibold">
          There are {modules.data.length} modules in this course
        </h2>

        <p className="mt-5">{modules.desc}</p>
      </section>

      <section className="mt-12 border-2 border-gray-400 rounded-lg p-8 max-w-5xl">
        {modules.data.map((module, i) => (
          <div key={v4()}>
            <h2 className="text-lg font-semibold">
              Module {i + 1} : {module.title}
            </h2>

            <p>{module.duration}</p>

            <div className="mt-6 space-y-4">
              <h6 className="flex items-center gap-2 text-lg font-semibold">
                <MdOndemandVideo /> {module.lessonsDesc}
              </h6>

              {module.lessons.map((lesson) => (
                <div key={v4()} className="flex justify-between">
                  <h6>{lesson.title}</h6>
                  <p>{lesson.duration}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h6 className="flex items-center gap-2 text-lg font-semibold">
                <IoNewspaperOutline /> {module.assessmentsDesc}
              </h6>

              {module.assessments.map((assessment) => (
                <div key={v4()} className="flex justify-between">
                  <h6>{assessment.title}</h6>
                  <p>{assessment.duration}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h6 className="flex items-center gap-2 text-lg font-semibold">
                <PiBookOpenText /> {module.readingsDesc}
              </h6>

              {module.readings.map((reading) => (
                <div key={v4()} className="flex justify-between">
                  <h6>{reading.title}</h6>
                  <p>{reading.duration}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CourseModules;
