import React from "react";
import PropTypes from "prop-types";

const CompaniesTable = ({ companies, onCompanyClick }) => {
  const companyItems = companies.map(company => (
    <CompaniesTableItem key={company.id} onCompanyClick={onCompanyClick} company={company} />
  ));
  return <div>{companyItems}</div>;
};

const CompaniesTableItem = props => (
  <p
    onClick={() => {
      props.onCompanyClick(props.company);
    }}
  >
    {props.company.name} {props.company.willSponsor}
  </p>
);

CompaniesTable.propTypes = {
  companies: PropTypes.array,
  onCompanyClick: PropTypes.func.isRequired
};

CompaniesTableItem.propTypes = {
  company: PropTypes.object.isRequired,
  onCompanyClick: PropTypes.func.isRequired
};

export default CompaniesTable;
