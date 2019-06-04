import React from 'react';
import SearchBar from '../searchbar';
import CompaniesTable from '../table';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            allCompanies: [],
            filteredCompanies: []
        }

        this.onSearchChange = this.onSearchChange.bind(this);
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

    render() {
        return (
            <div>
                <SearchBar search={this.state.search} onSearchChange={this.onSearchChange} />
                <CompaniesTable companies={this.state.filteredCompanies} />
            </div>
        )
    }
}

export default Main;