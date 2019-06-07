import React from 'react';
import SearchBar from '../searchbar';
import CompaniesTable from '../table';

class SearchTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            allCompanies: [],
            filteredCompanies: []
        }

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onCompanyClick = this.onCompanyClick.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8081/companies/')
        .then(results => results.json())
        .then(data => {
            this.setState({allCompanies: data, filteredCompanies: data});
            console.log(this.state.allCompanies);
        })

    }

    onSearchChange(event) {
        let search = event.target.value;
        let newFilteredCompanies = this.state.allCompanies.filter(company => company.name.toUpperCase().includes(search.toUpperCase()))
        this.setState({
            search: search,
            filteredCompanies: newFilteredCompanies,
        });
    }

    onCompanyClick(company) {
        console.log("open " + company.name);
        
    }

    render() {
        return (
            <div>
                <SearchBar search={this.state.search} onSearchChange={this.onSearchChange} />
                <CompaniesTable companies={this.state.filteredCompanies} onCompanyClick={this.onCompanyClick} />
            </div>
        )
    }
}

export default SearchTable;