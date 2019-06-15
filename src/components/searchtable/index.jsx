import React from "react";
import SearchBar from "../searchbar";
import CompaniesTable from "../table";
import { Row, Col } from "antd";
// import { connect } from "react-redux";
// import { clickCompany } from "../actions";
import "./styles.css";

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
      <div className="search-table">
        <div className="search-bar">
          <Row>
            <Col span={8} offset={8}>
              <SearchBar search={search} onSearchChange={this.onSearchChange} />
            </Col>
          </Row>
        </div>

        <div className="company-table">
          <Row>
            <Col span={12} offset={6}>
              <CompaniesTable
                companies={filteredCompanies}
                onCompanyClick={this.onCompanyClick}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SearchTable;
