import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ search, onSearchChange }) => (
  <div>
    <label>
      Search companies:
      <input
        type="text"
        name="companies_search"
        value={search}
        onChange={onSearchChange}
      />
    </label>
    <input type="submit" value="Submit" />
  </div>
);

SearchBar.defaultProps = {
  search: ""
};

SearchBar.propTypes = {
  search: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired
};

export default SearchBar;
