import React, { Component } from "react";
import { login } from "./userFunctions";
import { getCompany } from "./companyFunctions";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      companyId: "",
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

    const user = {
      email: this.state.email,
      password: this.state.password,
      companyId: this.state.companyId,
      role: this.state.role
    };

    login(user).then(res => {
      if (res.error != undefined) {
        alert(res.error);
        this.props.history.push("/login");
      } else {
        getCompany().then(c => {
          console.log("login company", c);
          if (c.name == "...") this.props.history.push("/orginfo");
          else this.props.history.push("/userpage");
        });
      }
    });
  }
  render() {
    return (
      <div className="animatedBackground">
        <ul className="box-area">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <div className="row">
          <div className="formalogin col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit} id="loginform">
              <h1 className="h3 mb-3 font-weight-normal" id="loginhead">
                Please sign in
              </h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Email password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
