import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
const Search = Input.Search;

const SearchBar = ({ search, onSearchChange }) => (
  <Search
    placeholder="Search Companies"
    value={search}
    onChange={value => onSearchChange(value)}
  />
);

SearchBar.defaultProps = {
  search: ""
};

SearchBar.propTypes = {
  search: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired
};

export default SearchBar;
