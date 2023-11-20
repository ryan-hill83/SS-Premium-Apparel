const Header = ({ value, onChange }) => {
  return (
    <div>
      <div className="title">SS Warehouse</div>
      <label htmlFor="searchInput">Search:</label>
      <input
        id="searchInput"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter search term"
      />
    </div>
  );
};

export default Header;
