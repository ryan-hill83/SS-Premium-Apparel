import React, { useState, useEffect } from "react";
import Header from "./Header";
import Pagination from "./Pagination";
import Results from "./Results";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [sorting, setSorting] = useState({
    field: "relevance",
    direction: "desc",
    label: "Best Match",
  });
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${query}&resultsFormat=native&resultsPerPage=19&page=${page}&sort=${sorting.field}=${sorting.direction}`
        );
        const data = await response.json();
        setResults(data.results);
        setTotalPages(data.pagination.totalPages);
        setTotalResults(data.pagination.totalResults);
      } catch (error) {
        console.error("Error fetching data -", error);
      }
    };

    fetchData();
  }, [query, page, sorting]);

  const handlePageChange = (selectedPage) => {
    if (selectedPage === "prev") {
      setPage((prevPage) => prevPage - 1);
      return;
    } else if (selectedPage === "next") {
      setPage((prevPage) => prevPage + 1);
      return;
    } else {
      setPage(selectedPage);
    }
  };

  const handleSortingChange = (selectedSorting) => {
    setSorting(selectedSorting);
  };

  const handleSearchButtonClick = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="app-wrapper">
      <Header
        value={query}
        // onChange={searchInput}
        onSearchButtonClick={handleSearchButtonClick}
        onSelectSorting={handleSortingChange}
        cartCount={cartCount}
      />
      <Results
        results={results}
        sorting={sorting}
        onAddToCart={handleAddToCart}
        query={query}
        total={totalResults}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
