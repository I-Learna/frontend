import React from "react";

const ProgressBar = ({ rating }: { rating: number }) => {
  return (
    <div className="w-full bg-gray-200 rounded-lg h-2 overflow-hidden">
      <div
        className="bg-yellow-300 h-full text-white text-xs flex items-center justify-center font-bold transition-all duration-300"
        style={{
          width: `${rating}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
