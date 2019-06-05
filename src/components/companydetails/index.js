import React from 'react';
import SearchBar from '../searchbar';
import CompaniesTable from '../table';

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://localhost:8081/companies/${id}`)
        .then(results => results.json())
        .then(data => {
            this.setState({company: data});
        })
    }

    render() {
        if (this.state.company != null) {
            return (<div>
                <p>{this.state.company.name} {this.state.company.address}</p>
            </div>)
        } else {
            return (<div>Loading...</div>)
        }
        
    }
}

export default CompanyDetails;