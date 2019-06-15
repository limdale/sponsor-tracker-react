import React from "react";
import "./styles.css";
import { Avatar, Typography, Tag } from "antd";
const { Title, Paragraph, Text } = Typography;

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:8081/companies/${id}`)
      .then(results => results.json())
      .then(data => {
        this.setState({ company: data });
      });
  }

  render() {
    let company = this.state.company;
    
    if (this.state.company != null) {
      let willSponsorColor = getWillSponsorTagColor(company.willSponsor);
      return (
        <div>
          <Typography>
            <Avatar
              className="company-image"
              shape="square"
              size={128}
              icon="user"
              src={this.state.company.imageUrl}
            />
            <br />
            <a href="www.google.com">{company.name}</a>
            <br />
            Address: {company.address}, {company.city} {company.stateOrProvince}{" "}
            {company.postalCode}, {company.country}
            <br />
            Will sponsor?{"   "}
            <span>
              <Tag color={willSponsorColor} key={company.id}>
                {company.willSponsor.toUpperCase()}
              </Tag>
            </span>
          </Typography>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

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

export default CompanyDetails;
