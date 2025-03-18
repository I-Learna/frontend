"use client";
import React, { useState } from "react";
import CourseModule from "./CourseModule";

const AddModule = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="mb-4 space-y-4">
      <button
        onClick={() => setIsAdding((prev) => !prev)}
        className="border-2 border-accent p-3 w-full font-semibold text-accent rounded-lg"
      >
        {isAdding ? "Cancel" : "+ Add Module"}
      </button>

      {isAdding && <CourseModule />}
    </div>
  );
};

export default AddModule;
