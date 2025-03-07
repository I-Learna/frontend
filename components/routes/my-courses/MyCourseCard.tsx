"use client";
import ProgressBar from "@/components/ui/ProgressBar";
import { IMyCourse } from "@/types/api/responses/user";
import { encrypt } from "@/utils/Cryptojs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

const MyCourseCard: FC<{ course: IMyCourse }> = ({ course }) => {
  const router = useRouter();
  const pathname = usePathname();
  const URL = `${pathname}/${encrypt(course.id.toString())}`;
  const navigate = () => router.push(URL);

  return (
    <div
      className="drop-shadow-md bg-white rounded-lg overflow-hidden cursor-pointer"
      onClick={navigate}
    >
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
        <h2 className="mb-3 text-primary font-semibold">{course.title}</h2>

        <div className="flex items-center gap-2 mb-3">
          <Image
            src={course.author.image}
            alt={course.author.name}
            width={30}
            height={30}
            className="rounded-full"
          />

          <p className="font-semibold text-customGray">{course.author.name}</p>
        </div>
        <ProgressBar
          rating={(course.progress.current / course.progress.total) * 100}
        />
        <p className="w-max ml-auto text-sm text-gray-500">
          Module {course.progress.current} of {course.progress.total}
        </p>
      </div>
    </div>
  );
};

export default MyCourseCard;
