"use client";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-error mb-4">401</h1>
        <p className="text-lg text-customGray mb-6">
          Unauthorized. You do not have access to this page.
        </p>
        <a
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
