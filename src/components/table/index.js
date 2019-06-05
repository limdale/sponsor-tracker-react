import React from 'react';

class CompaniesTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let companies = this.props.companies.map(company => <CompaniesTableItem onCompanyClick={this.props.onCompanyClick} company={company} />)
        return (
            <div>
                {companies}
            </div>
        )
    }
}

function CompaniesTableItem(props) {
    return (
        <p onClick={() => {props.onCompanyClick(props.company)}}>
            {props.company.name} {props.company.willSponsor}
        </p>
    );
}

export default CompaniesTable;