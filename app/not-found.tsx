"use client";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-customGray mb-4">404</h1>
        <p className="text-lg text-customGray mb-6">
          Page not found. The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
