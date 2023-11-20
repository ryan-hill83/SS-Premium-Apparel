import React from "react";

const Sort = ({ onSelectSorting }) => {
  const sortingOptions = [
    { field: "relevance", direction: "desc", label: "Best Match" },
    { field: "days_since_published", direction: "asc", label: "Newest" },
    { field: "price", direction: "desc", label: "Price ($$$ - $)" },
    { field: "price", direction: "asc", label: "Price ($ - $$$)" },
    { field: "title", direction: "asc", label: "Name (A - Z)" },
    { field: "title", direction: "desc", label: "Name (Z - A)" },
  ];

  const handleSortingChange = (event) => {
    const selectedOption = sortingOptions.find(
      (option) => option.label === event.target.value
    );
    onSelectSorting(selectedOption);
  };

  return (
    <div className="dropdown-container">
      <label className="sort-label" htmlFor="sorting">
        Sort By
      </label>
      <select id="sorting" onChange={handleSortingChange}>
        {sortingOptions.map((option) => (
          <option key={option.label} value={option.label} className="option">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
