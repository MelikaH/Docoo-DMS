import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Landing from "./components/landing.component";
import OrganizationInfo from "./components/organizationInfo";
import Terms from "./components/terms";
import Dashboard from "./components/dashboard";
import About from "./components/about";
import Help from "./components/help";
import Me from "./components/me";
import Admin from "./components/adminpage";
import NotAvailable from "./components/not-available";
import OrganizationForm from "./components/organizationForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navShown: true
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <NotAvailable>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/orginfo" component={OrganizationInfo} />
              <Route path="/terms" component={Terms} />
              <Route path="/about" component={About} />
              <Route path="/help" component={Help} />
              <Route path="/me" component={Me} />
              <Route path="/admin" component={Admin} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/organization" component={OrganizationForm} />
            </div>
          </div>
        </NotAvailable>
      </Router>
    );
  }
}
export default App;
