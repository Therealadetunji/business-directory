import PropTypes from 'prop-types';

const SearchBar = ({ filteredBusinesses, setFilteredBusinesses, business }) => {
  const handleSearch = (e) => {
    const search = e.target.value; // this is the value of the inputted text in search bar
    // make a copy of the filteredBusinesses array
    var copyFilteredBusinesses = [...filteredBusinesses]; //

    // filter the array based on the search text
    const searchFiltered = copyFilteredBusinesses.filter((business) => {
      // if the business name or category includes the search text, return it
      return (
        business.name.toLowerCase().includes(search.toLowerCase()) ||
        business.category.toLowerCase().includes(search.toLowerCase())
      );
    });
    // set the filteredBusinesses state to the filtered array
    setFilteredBusinesses(searchFiltered);

    // clean up the search bar
    if (search === "") {
      business();
    }
  };

  return (
    <>
      <div className="search-bar text-center mt-3 mb-3">
        <div className="input-group mb-3 col-xs-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  filteredBusinesses: PropTypes.array.isRequired,
  setFilteredBusinesses: PropTypes.func.isRequired,
  business: PropTypes.func.isRequired
}

export default SearchBar;
