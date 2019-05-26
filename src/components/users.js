import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import Edit from "@material-ui/icons/Edit";
import Mail from "@material-ui/icons/Mail";
import Delete from "@material-ui/icons/Delete";

import NewEmployee from "./newEmp";
import { getUsers } from "./userFunctions";
import { deleteUser } from "./userFunctions";
import { withRouter } from "react-router-dom";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      employees: [],
      companyId: "",
      modal14: false,
      users: []
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      role: decoded.role,
      companyId: decoded.companyId,
      users: [],
      modalTitle: ""
    });
    console.log("starting get users");
    this.loadUsers();
  }

  loadUsers = () => {
    getUsers().then(x => {
      console.log("setting state");
      this.setState({ users: x });
      console.log("done");
      console.log(this.state.companyId);
    });
  };

  toggle = (nr, title, usr) => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      modalTitle: title,
      modalUser: usr
    });
  };

  render() {
    return (
      <div>
        <MDBCard className="my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold my-5">Employees:</h2>
            <MDBBtn
              gradient="aqua"
              id="addemployee"
              onClick={() => this.toggle(14, "Add New Employee", {})}
            >
              + ADD NEW EMPLOYEE
            </MDBBtn>

            <MDBRow>
              {this.state.users.map((user, key) => (
                <MDBCol key={user._id} lg="3" md="6" className="mb-lg-0 mb-5">
                  <h5 className="font-weight-bold mt-4 mb-3">
                    {user.firstName}
                  </h5>

                  <p className="text-uppercase blue-text">{user.role} </p>
                  <p className="grey-text">Email: {user.email}</p>
                  <ul className="list-unstyled mb-0">
                    <a
                      onClick={() => this.toggle(14, "Edit Employee", user)}
                      className="p-2 fa-lg"
                    >
                      <Edit className="blue-text" />
                    </a>
                    <a href={"mailto:" + user.email} className="p-2 fa-lg">
                      <Mail className="blue-text" />
                    </a>
                    <a
                      className="p-2 fa-lg"
                      onClick={() => {
                        deleteUser(user._id).then(res => {
                          this.loadUsers();
                        });
                      }}
                    >
                      <Delete className="blue-text" />
                    </a>
                  </ul>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        <div id="modalContainer">
          <MDBModal
            className="modalup"
            isOpen={this.state.modal14}
            toggle={this.toggle}
            centered
            size="lg"
          >
            <MDBModalHeader toggle={() => this.toggle(14)}>
              {this.state.modalTitle}
            </MDBModalHeader>
            <MDBModalBody>
              <NewEmployee
                user={this.state.modalUser}
                companyId={this.state.companyId}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => this.toggle(14)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </div>
    );
  }
}

export default withRouter(Users);
