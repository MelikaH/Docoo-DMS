import React, { Component } from "react";
import Admin from "./adminpage";
import Dashboard from "./dashboard";
import jwt_decode from "jwt-decode";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      main: ""
    };
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    console.log("hello");
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName,
      role: decoded.role
    });
    console.log(decoded);
    this.setState(state => ({ main: "Admin" }));
    console.log("radil");
  }

  render() {
    return <div>{this.state.role == "Admin" ? <Admin /> : <Dashboard />}</div>;
  }
}

export default UserPage;
