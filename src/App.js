import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchTable from './components/searchtable';
import CompanyDetails from './components/companydetails'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SearchTable} />
      <Route path="/company/:id" component={CompanyDetails} />
    </div>
  );
}

export default App;
