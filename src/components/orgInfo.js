import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getCompany } from "./companyFunctions";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      name: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      lastName: "",
      isOpen: false,
      company: {}
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount() {
    getCompany().then(x =>
      this.setState({
        company: x
      })
    );

    console.log("starting get users");
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">ORGANIZATION PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td> Name</td>
                <td>{this.state.company.name}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{this.state.company.address}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.company.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
