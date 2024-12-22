"use client";

import { useEffect } from "react";

type Props = { error: Error & { digest?: string }; reset: () => void };

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-error mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-customGray mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
