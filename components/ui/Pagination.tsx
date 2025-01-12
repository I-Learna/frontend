import React, { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 border rounded-md ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {getPages().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border rounded-md ${
            currentPage === page
              ? "bg-gray-200 text-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-3 py-1 border rounded-md ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
