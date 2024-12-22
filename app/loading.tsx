"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-accent-light border-solid mb-6"></div>
        <p className="text-lg text-customGray">Loading, please wait...</p>
      </div>
    </div>
  );
}
