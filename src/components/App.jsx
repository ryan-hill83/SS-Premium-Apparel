import React, { useState, useEffect } from "react";
import Header from "./Header";
import Pagination from "./Pagination";
import Results from "./Results";
import Sort from "./Sort";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [results, setResults] = useState([]);
  const [sorting, setSorting] = useState({
    field: "relevance",
    direction: "desc",
    label: "Best Match",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${query}&resultsFormat=native&page=${page}&sort=${sorting.field}=${sorting.direction}`
        );
        const data = await response.json();
        console.log("data---", data);
        setResults(data.results);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error("Error fetching data -", error);
      }
    };

    fetchData();
  }, [query, page, sorting]);

  const searchInput = (event) => {
    setQuery(event.target.value);
    setPage(1);
  };

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

  return (
    <div>
      <Header value={query} onChange={searchInput} />
      <Sort onSelectSorting={handleSortingChange} />
      <Results results={results} sorting={sorting} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
