import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    Search companies:
                    <input type="text" name="companies_search" value={this.props.search} onChange={this.props.onSearchChange} />
                </label>
                <input type="submit" value="Submit" />
            </div>
        )
    }
}

export default SearchBar;