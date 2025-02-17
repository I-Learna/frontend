"use client";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const CourseTabs = () => {
  return (
    <section className="mt-28">
      <div className="border-b">
        <div className="flex space-x-6">
          <ScrollLink
            to="overview"
            smooth={true}
            duration={1000}
            className="py-2 px-8 cursor-pointer font-semibold text-black bg-gray-100 rounded-lg relative"
          >
            Overview
            <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gray-500"></span>
          </ScrollLink>

          <ScrollLink
            to="modules"
            smooth={true}
            duration={700}
            className="py-2 px-8 text-gray-600 hover:text-black cursor-pointer"
          >
            Modules
          </ScrollLink>

          <ScrollLink
            to="reviews"
            smooth={true}
            duration={1000}
            className="py-2 px-8 text-gray-600 hover:text-black cursor-pointer"
          >
            Reviews
          </ScrollLink>

          <ScrollLink
            to="instructor"
            smooth={true}
            duration={1000}
            className="py-2 px-8 text-gray-600 hover:text-black cursor-pointer"
          >
            Instructor Courses
          </ScrollLink>

          <ScrollLink
            to="topInstructors"
            smooth={true}
            duration={1000}
            className="py-2 px-8 text-gray-600 hover:text-black cursor-pointer"
          >
            Top Instructors
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default CourseTabs;
