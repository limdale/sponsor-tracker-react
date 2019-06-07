import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    return (
        <div>
            <label>
                Search companies:
                <input type="text" name="companies_search" value={props.search} onChange={props.onSearchChange} />
            </label>
            <input type="submit" value="Submit" />
        </div>
    )
}

SearchBar.propTypes = {
    search: PropTypes.string,
    onSearchChange: PropTypes.func
}

export default SearchBar;