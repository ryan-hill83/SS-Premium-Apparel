import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + Math.max(currentPage - 1, 1)
  ).filter((pageNumber) => pageNumber <= totalPages);

  return (
    <div>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button onClick={() => onPageChange("prev")} disabled={currentPage === 1}>
        Previous
      </button>
      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={currentPage === pageNumber}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange("next")}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
