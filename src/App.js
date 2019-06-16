import React from "react";
import "./App.css";
import SearchTable from "./components/searchtable";
import CompanyDetails from "./components/companydetails";
import AppHeader from "./components/header"
import About from "./components/about"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Route exact path="/" component={SearchTable} />
      <Route path="/company/:id" component={CompanyDetails} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
