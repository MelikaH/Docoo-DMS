import React, { Component } from "react";
import { register } from "./userFunctions";
import { MDBInput, MDBRow } from "mdbreact";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: ""
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
    e.preventDefault();

    e.target.className += " was-validated";
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

    if (
      user.firstName != "" &&
      user.lastName != "" &&
      user.role != "" &&
      user.email != "" &&
      user.password != ""
    ) {
      register(user).then(res => {
        this.props.history.push("/login");
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form
              onSubmit={this.onSubmit}
              className="needs-validation"
              noValidate
            >
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your first name.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your last name.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter valid email.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="role">Profession/Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="Profession/Role"
                  value={this.state.role}
                  onChange={this.onChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your profession/role in th ecompany.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <MDBRow>
                <MDBInput
                  type="checkbox"
                  value="conditions"
                  id="materialInvalidCheck"
                  required
                  label="Agree to terms and conditions"
                >
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </MDBInput>
              </MDBRow>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                id="regbtn"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
