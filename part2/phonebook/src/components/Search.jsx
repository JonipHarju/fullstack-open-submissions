// eslint-disable-next-line react/prop-types
const Search = ({ searchParameter, onSearchChange }) => {
  return (
    <div>
      Search:{" "}
      <input
        value={searchParameter}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
