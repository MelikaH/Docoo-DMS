import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCardTitle,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import { withRouter } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

import { addNew } from "./userFunctions";

class NewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.user.firstName || "",
      lastName: props.user.lastName || "",
      email: props.user.email || "",
      password: "",
      role: props.user.role || "",
      id: props.user._id || "",
      companyId: props.companyId
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    console.log("clicked add new user");
    e.preventDefault();
    const user = {
      _id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      companyId: this.state.companyId
    };
    console.log(user);
    addNew(user).then(res => {
      if (res.data.status == "ok") {
        this.props.history.push("/admin");
      } else alert(res.data.error);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <MDBCard className="mainCard">
          <MDBCardBody>
            <form
              noValidate
              className="needs-validation"
              onSubmit={this.onSubmit}
            >
              <input type="hidden" name="_id" value={this.state._id} />
              <MDBRow className="steponerow">
                <MDBCol>
                  <TextField
                    hintText="Enter the first name"
                    floatingLabelText="First Name"
                    onChange={this.onChange}
                    value={this.state.firstName}
                    className="organizationInput1"
                    name="firstName"
                  />
                  <TextField
                    hintText="Enter the last name"
                    floatingLabelText="Last Name"
                    onChange={this.onChange}
                    value={this.state.lastName}
                    className="organizationInput2"
                    name="lastName"
                  />
                </MDBCol>
                <MDBCol>
                  <TextField
                    hintText="Enter the email"
                    floatingLabelText="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    className="organizationInput1"
                    name="email"
                  />
                  <TextField
                    hintText="Enter employee's role"
                    floatingLabelText="Role"
                    onChange={this.onChange}
                    value={this.state.role}
                    className="organizationInput2"
                    name="role"
                  />
                </MDBCol>
                <MDBCol>
                  <TextField
                    hintText="Enter the password "
                    floatingLabelText="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    className="organizationInput1"
                    name="password"
                  />
                  <label htmlFor="companyId">Company ID</label>

                  <input
                    type="text"
                    className="form-control"
                    name="companyId"
                    value={this.state.companyId}
                    onChange={this.onChange}
                    required
                    disabled
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn gradient="aqua" type="submit">
                SAVE CHANGES
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(NewEmployee);
