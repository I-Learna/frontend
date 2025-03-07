"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { MyCourseLesson } from "@/types/api/responses/IGetMyCourseDetails";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isVisited: boolean;
  isCompleted: boolean;
}

interface Module {
  id: number;
  lessons: Lesson[];
}

interface ModulesProps {
  modules: Module[];
  selectLesson: (lesson: Partial<MyCourseLesson>) => void;
}

const ModuleList: React.FC<ModulesProps> = ({ modules, selectLesson }) => {
  const [openModules, setOpenModules] = useState<number[]>([modules[0].id]);

  const toggleModule = (id: number) => {
    setOpenModules((prev) =>
      prev.includes(id)
        ? prev.filter((moduleId) => moduleId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-sm">
      {modules.map((module, i) => (
        <div key={module.id} className="mb-4 border-2 rounded-md">
          <button
            className="w-full flex justify-between items-center p-3 font-semibold"
            onClick={() => toggleModule(module.id)}
          >
            <span>Module {i + 1}</span>
            <IoIosArrowDown />
          </button>

          {openModules.includes(module.id) && (
            <div className="p-2 border-t">
              {module.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="p-2 flex justify-between items-center cursor-pointer"
                  onClick={() => selectLesson(lesson)}
                >
                  <span className="flex items-center gap-2">
                    {lesson.isCompleted && (
                      <GoCheckCircleFill className="text-accent" />
                    )}

                    {lesson.isVisited && !lesson.isCompleted && (
                      <FaCircleHalfStroke className="text-accent" />
                    )}

                    {!lesson.isVisited && !lesson.isCompleted && (
                      <FaRegCircle className="text-accent" />
                    )}

                    {lesson.title}
                  </span>

                  <span className="text-sm text-gray-500">
                    ({lesson.duration})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
