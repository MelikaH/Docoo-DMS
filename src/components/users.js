import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      role: decoded.role
    });
  }

  render() {
    return (
      <div>
        <MDBCard className="my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold my-5">Employees:</h2>
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <h5 className="font-weight-bold mt-4 mb-3">
                  {this.state.firstName}
                </h5>
                <p className="text-uppercase blue-text">{this.state.role} </p>
                <p className="grey-text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci sed quia non numquam modi tempora
                  eius.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
                <p className="text-uppercase blue-text">Web Developer</p>
                <p className="grey-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  ipsa accusantium doloremque rem laudantium totam aperiam.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
                <p className="text-uppercase blue-text">Backend Developer</p>
                <p className="grey-text">
                  Perspiciatis repellendus ad odit consequuntur, eveniet earum
                  nisi qui consectetur totam officia voluptates perferendis
                  voluptatibus aut.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="github" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Users;
