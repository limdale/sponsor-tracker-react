import React from "react";
import PropTypes from "prop-types";
import { Table, Tag } from "antd";

const CompaniesTable = ({ companies, onCompanyClick }) => {
  const dataSource = companies.map(company => ({
    key: company.id,
    id: company.id,
    companyName: company.name,
    city: company.city,
    willSponsor: company.willSponsor
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "companyName",
      key: "companyName"
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city"
    },
    {
      title: "Will Sponsor?",
      dataIndex: "willSponsor",
      key: "willSponsor",
      render: text => {
        return (
          <Tag color={getWillSponsorTagColor(text)} key={text}>
            {text.toUpperCase()}
          </Tag>
        );
      }
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            onCompanyClick(companies[rowIndex]);
          }
        };
      }}
    />
  );
};

function getWillSponsorTagColor(willSponsor) {
  switch (willSponsor) {
    case "YES":
      return "green";
    case "NO":
      return "red";
    case "MAYBE":
      return "orange";
    default:
      return "green";
  }
}

CompaniesTable.propTypes = {
  companies: PropTypes.array,
  onCompanyClick: PropTypes.func.isRequired
};

export default CompaniesTable;
