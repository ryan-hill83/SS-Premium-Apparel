import React, { useState, useEffect } from "react";

const Header = ({ value, onChange, onSearchButtonClick, cartCount }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showButtonText, setShowButtonText] = useState(true);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const handleButtonClick = (searchQuery) => {
    setShowButtonText(false);
    onSearchButtonClick(searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowButtonText(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearchButtonClick(searchTerm);
  };

  return (
    <div>
      <div className="title">SS Warehouse</div>
      <form onSubmit={handleFormSubmit}>
        <input
          id="searchInput"
          type="text"
          value={showButtonText ? searchTerm : ""}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={() => handleButtonClick("Jackets")}>Jackets</button>
      <button onClick={() => handleButtonClick("Shirts")}>Shirts</button>
      <button onClick={() => handleButtonClick("Pants")}>Pants</button>
      <button onClick={() => handleButtonClick("Shoes")}>Shoes</button>
      <button onClick={() => handleButtonClick("Bags")}>Bags</button>
      <span>Cart: {cartCount}</span>
    </div>
  );
};

export default Header;
