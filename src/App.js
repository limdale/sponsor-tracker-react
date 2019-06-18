import React from "react";
import "./App.css";
import SearchTable from "./components/searchtable";
import CompanyDetails from "./components/companydetails";
import AppHeader from "./components/header";
import About from "./components/about";
import LoginModal from "./components/login";
import { Route } from "react-router-dom";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false
    }

    this.showLoginModal = this.showLoginModal.bind(this);
    this.handleCancelLogin = this.handleCancelLogin.bind(this);
  }

  render() {
    return (
      <div className="App">
        <AppHeader onLoginClick={this.showLoginModal} />
        <Route exact path="/" component={SearchTable} />
        <Route path="/company/:id" component={CompanyDetails} />
        <Route path="/about" component={About} />
        <LoginModal handleCancelLogin={this.handleCancelLogin} showModal={this.state.showLogin} />
      </div>
    );
  }

  showLoginModal() {
    this.setState({
      showLogin: true
    });
  }

  handleCancelLogin() {
    this.setState({
      showLogin: false
    });
  }
}

export default App;
