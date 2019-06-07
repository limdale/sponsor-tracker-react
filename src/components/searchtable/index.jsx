import React from "react";
import SearchBar from "../searchbar";
import CompaniesTable from "../table";

class SearchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      allCompanies: [],
      filteredCompanies: []
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onCompanyClick = this.onCompanyClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8081/companies/")
      .then(results => results.json())
      .then(data => {
        const { allCompanies } = this.state;
        this.setState({ allCompanies: data, filteredCompanies: data });
        console.log(allCompanies);
      });
  }

  onSearchChange(event) {
    const { allCompanies } = this.state;
    const search = event.target.value;
    const newFilteredCompanies = allCompanies.filter(company =>
      company.name.toUpperCase().includes(search.toUpperCase())
    );
    this.setState({
      search,
      filteredCompanies: newFilteredCompanies
    });
  }

  onCompanyClick(company) {
    console.log(`open ${company.name}`);
  }

  render() {
    const { filteredCompanies, search } = this.state;
    return (
      <div>
        <SearchBar search={search} onSearchChange={this.onSearchChange} />
        <CompaniesTable
          companies={filteredCompanies}
          onCompanyClick={this.onCompanyClick}
        />
      </div>
    );
  }
}

export default SearchTable;
