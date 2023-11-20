import React from "react";

const Results = ({ results, sorting, onAddToCart, query, total }) => {
  const sortResults = () => {
    if (sorting.field === "relevance") {
      return results;
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
    <div className="results-wrapper">
      {query ? (
        <div className="results-header">
          {total} Results for "{query}"
        </div>
      ) : null}
      <ul className="results-list">
        {sortedResults.map((result) => (
          <li className="result" key={result.id}>
            <div className="card-wrapper">
              <a href={result.url} target="_blank" rel="noreferrer">
                <img
                  className="product-image"
                  src={result.imageUrl}
                  alt={result.name}
                />
              </a>
              <div className="details-wrapper">
                <div className="title-and-price">
                  <span className="product-title">{result.name}</span>
                  {result.msrp && result.msrp > result.price ? (
                    <div className="price-wrapper">
                      <span>${result.price}</span>
                      <span className="strikethrough">${result.msrp}</span>
                    </div>
                  ) : (
                    <span className="price">${result.price}</span>
                  )}
                </div>
                <div className="add-to-cart" onClick={onAddToCart}>
                  Add to Cart
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
