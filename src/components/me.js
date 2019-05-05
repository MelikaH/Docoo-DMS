import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email
    });
  }

  render() {
    return (
      <div>
        <h3>It is me, an employee.</h3>
      </div>
    );
  }
}

export default Me;
