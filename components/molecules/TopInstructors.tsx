import { getTopInstructors } from "@/services/analysisServices";
import Image from "next/image";
import React from "react";

const TopInstructors = async () => {
  const instructors = await getTopInstructors();

  return (
    <div>
      <h2 className="text-3xl text-accent font-semibold mb-5">
        Top Rated Instructors
      </h2>

      <div className="grid grid-cols-3 gap-4 2xl:grid-cols-6">
        {instructors.map((ins) => (
          <div key={ins.id} className="text-center">
            <Image
              src={ins.avatar}
              alt="instructor pic"
              width={100}
              height={100}
              className="rounded-full m-auto mb-2"
            />

            <h3 className="text-xl font-semibold">{ins.name}</h3>
            <h4 className="text-sm text-customGray">{ins.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
