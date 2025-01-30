import { IMyCourse } from "@/types/api/responses/user";
import Image from "next/image";
import React, { FC } from "react";

const MyCourseCard: FC<{ course: IMyCourse }> = ({ course }) => {
  return (
    <div className="drop-shadow-md bg-white rounded-lg max-w-md">
      <div className="relative w-full h-56">
        <Image src={course.image} alt={course.title} fill />

        {course.tags && (
          <div className="absolute top-3 left-3 flex flex-col space-y-3">
            {course.tags.map((tag) => (
              <p className="bg-accent text-white py-1 px-5 rounded-md">{tag}</p>
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <h2>{course.title}</h2>

        <div className="flex items-center gap-2">
          <Image
            src={course.author.image}
            alt={course.author.name}
            width={30}
            height={30}
            className="rounded-full"
          />

          <p className="font-semibold text-customGray">{course.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
