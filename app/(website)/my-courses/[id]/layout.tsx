"use client";
import LoadingLayer from "@/components/layout/LoadingLayer";
import ProgressBar from "@/components/ui/ProgressBar";
import { getMyCoursesList } from "@/services/userServices";
import { MyCourseDetails } from "@/types/api/responses/IGetMyCourseDetails";
import { IMyCourse } from "@/types/api/responses/user";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { v4 } from "uuid";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

const Layout = ({ children }: { children: ReactNode }) => {
  const [myCourses, setMyCourses] = useState<IMyCourse[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    async function getDetails() {
      setIsLoading(true);
      const data = await getMyCoursesList();

      if (data) {
        setMyCourses(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }

    getDetails();
  }, []);

  if (isLoading) return <LoadingLayer />;

  if (!myCourses) {
    return (
      <section className="p-5">
        <h3 className="text-xl text-red-500">
          Couldn't get the data, please try again later!
        </h3>
      </section>
    );
  }

  return (
    <div className="flex justify-between gap-5 overflow-hidden">
      <section
        className={`transition-transform duration-300 border-r-2  py-5 pr-[2rem] max-w-72 relative 
                ${
                  isOpen
                    ? "shrink-0 translate-x-0"
                    : "-translate-x-[calc(100%-2rem)]"
                }`}
      >
        <span
          className="text-3xl absolute top-6 right-0 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <MdOutlineKeyboardDoubleArrowLeft />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight />
          )}
        </span>

        <h2 className="text-2xl font-semibold mb-5">My Courses</h2>

        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Search courses"
            className="w-full text-sm py-2 px-2 pr-8 border border-customGray rounded-full focus:outline-none font-normal pl-8"
          />

          <CiSearch className="absolute top-2 left-2 text-xl" />
        </div>

        <p className="mb-2 text-gray-500">{myCourses.length} courses</p>

        <ul className="space-y-5">
          {myCourses.map((course) => (
            <li key={v4()} className="flex items-center gap-2">
              <div className="relative w-14 h-16 rounded-lg overflow-hidden">
                <Image src={course.image} alt={course.title} fill />
              </div>

              <div className="space-y-1">
                <h4 className="font-semibold text-primary">{course.title}</h4>
                <ProgressBar
                  rating={
                    (course.progress.current / course.progress.total) * 100
                  }
                />
                <p className="text-xs">{course.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {children}
    </div>
  );
};

export default Layout;
