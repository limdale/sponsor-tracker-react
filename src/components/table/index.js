import React from 'react';

class CompaniesTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let companies = this.props.companies.map(company => <CompaniesTableItem company={company} />)
        return (
            <div>
                {companies}
            </div>
        )
    }
}

function CompaniesTableItem(props) {
    return (
        <p>
            {props.company.name}
        </p>
    );
}

export default CompaniesTable;