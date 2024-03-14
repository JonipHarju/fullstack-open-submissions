const Search = ({ onSearchChange, searchParameter }) => {
  return (
    <div>
      <p>Find a country:</p>{" "}
      <input
        placeholder="Pls enter a country"
        value={searchParameter}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Search;
