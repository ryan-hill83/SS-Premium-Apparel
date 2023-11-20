import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + Math.max(currentPage - 1, 1)
  ).filter((pageNumber) => pageNumber <= totalPages);

  return (
    <div className="pagination-container">
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <div className="pagination">
        <div
          className="previous-or-next"
          onClick={() => onPageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </div>
        {visiblePages.map((pageNumber) => (
          <div
            className="page-number"
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </div>
        ))}
        <div
          className="previous-or-next"
          onClick={() => onPageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
