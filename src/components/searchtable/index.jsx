import React from "react";
import SearchBar from "../searchbar";
import CompaniesTable from "../table";
// import { connect } from "react-redux";
// import { clickCompany } from "../actions";

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
        this.setState({ allCompanies: data, filteredCompanies: data });
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
    this.props.history.push(`/company/${company.id}`);
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
