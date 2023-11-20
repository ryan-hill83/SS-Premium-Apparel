import React from "react";

const Results = ({ results, sorting }) => {
  // Function to sort results based on the selected sorting option
  const sortResults = () => {
    // Assuming that 'relevance' is the default sorting field
    if (sorting.field === "relevance") {
      return results; // No need to sort if it's the default sorting
    }

    return [...results].sort((a, b) => {
      if (a[sorting.field] < b[sorting.field]) {
        return sorting.direction === "asc" ? -1 : 1;
      }
      if (a[sorting.field] > b[sorting.field]) {
        return sorting.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const sortedResults = sortResults();

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {sortedResults.map((result) => (
          <li key={result.id}>
            <img src={result.imageUrl} alt={result.name} />
            <p>{result.name}</p>
            <p>${result.price}</p>
            <p>${result.msrp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
