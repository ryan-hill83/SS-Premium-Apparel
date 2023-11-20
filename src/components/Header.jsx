import React, { useState, useEffect } from "react";
import Sort from "./Sort";
import "../resources/magnifying-glass.png";

const Header = ({
  value,
  onChange,
  onSearchButtonClick,
  onSelectSorting,
  cartCount,
}) => {
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
    <div className="header-wrapper">
      <span className="title">
        <img
          className="ss-icon"
          src={require("../resources/ss.jpg")}
          alt="ss-icon"
          height="40px"
          width="40px"
        />
        Premium Apparel
      </span>
      <form onSubmit={handleFormSubmit}>
        <input
          id="searchInput"
          type="text"
          value={showButtonText ? searchTerm : ""}
          onChange={handleInputChange}
          placeholder=" Search"
        />
        <button type="submit" className="search-icon">
          <img
            src={require("../resources/magnifying-glass.png")}
            alt="search"
            height="17px"
            width="17px"
          />
        </button>
      </form>
      <div
        className="header-category"
        onClick={() => handleButtonClick("Jackets")}
      >
        Jackets
      </div>
      <div
        className="header-category"
        onClick={() => handleButtonClick("Shirts")}
      >
        Shirts
      </div>
      <div
        className="header-category"
        onClick={() => handleButtonClick("Pants")}
      >
        Pants
      </div>
      <div
        className="header-category"
        onClick={() => handleButtonClick("Shoes")}
      >
        Shoes
      </div>
      <div
        className="header-category"
        onClick={() => handleButtonClick("Bags")}
      >
        Bags
      </div>
      <Sort onSelectSorting={onSelectSorting} />
      <span className="cart">
        <img
          className="cart-icon"
          src={require("../resources/cart.png")}
          alt="cart"
          height="25px"
          width="25px"
        />{" "}
        {cartCount}
      </span>
    </div>
  );
};

export default Header;
