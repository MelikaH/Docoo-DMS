import React, { Component } from "react";
import axios from "axios";

const customStyle = {
  width: "300px",
  margin: "0 auto"
};

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      password: ""
    };
  }

  componentDidMount = () => {
    this.getEmployeeById();
  };

  // To get employee based on ID
  getEmployeeById() {
    axios
      .get("http://localhost:3000/editEmployee/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          role: response.data.role,
          password: response.data.password
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To update the record on submit
  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, role, password } = this.state;
    axios
      .post(
        "http://localhost:3000/updateEmployee/" + this.props.match.params.id,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          role: role,
          password: password
        }
      )
      .then(response => {
        console.log(response);
        this.props.history.push("/admin");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Email
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Role
            <input
              name="role"
              type="text"
              value={this.state.role}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Password
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default EditEmployee;
