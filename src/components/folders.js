import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { List } from "material-ui/List";

import Folder from "@material-ui/icons/Folder";
import Edit from "@material-ui/icons/Edit";
import Mail from "@material-ui/icons/Mail";
import Delete from "@material-ui/icons/Delete";
import NewFolder from "./newFolder";
import { withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { MDBBtn } from "mdbreact";
import { getUsers } from "./userFunctions";
import { getFolders } from "./folderFunctions";
import { deleteFolder } from "./folderFunctions";

class Folders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      name: "",
      parentId: "",
      description: "",
      folders: [],
      users: [],
      modal14: false,
      permissions: [],
      creator: "",
      id: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      creator: decoded.firstName + " " + decoded.lastName,
      folders: [],
      users: [],
      modalTitle: ""
    });
    console.log("starting getting folders");
    this.loadFolders();
    console.log("starting get users");
    this.loadUsers();
  }

  insideFolder = e => {
    e.preventDefault();
    this.props.insideFolder();
  };

  loadUsers = () => {
    this.setState({
      _id: this.state.id,
      name: this.state.name,
      parentId: this.state.parentId,
      description: this.state.description,
      persmission: this.state.permissions,
      creator: this.state.creator,
      folders: [],
      filter: ""
    });
    getUsers().then(x => {
      console.log("setting state");
      this.setState({ users: x });
      console.log("done");
    });
  };

  loadFolders = () => {
    getFolders().then(f => {
      console.log("setting state of folders");
      this.setState({ folders: f });
      console.log("folders all set");
    });
  };

  handleChange(e) {
    const filter = e.target.value.toString().toLowerCase();
    this.setState({
      filter: filter
    });
  }
  toggle = (nr, title, fldr) => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      modalTitle: title,
      modalFolder: fldr
    });
  };
  render() {
    return (
      <div id="folderDiv" className="my-5 px-1 pb-1 text-center">
        <h2 centered>Folder Section</h2>
        <hr />
        <MDBCol md="6" style={{ flex: 1 }}>
          <MDBInput
            hint="Search"
            type="text"
            containerClass="mt-0"
            className="input"
            onChange={this.handleChange}
          />
        </MDBCol>

        <MDBBtn
          gradient="aqua"
          id="addemployee"
          onClick={() => this.toggle(14, "Add New Folder ", {})}
        >
          + ADD NEW FOLDER{" "}
        </MDBBtn>
        <MDBRow>
          {this.state.folders.map((folder, key) =>
            !folder.name.includes(this.state.filter) ? (
              ""
            ) : (
              <MDBCol key={folder._id} lg="3" md="6" className="mb-lg-0 mb-5">
                <MDBBtn
                  tag="a"
                  size="lg"
                  floating
                  id="addemployee"
                  onClick={this.insideFolder}
                >
                  <i className=" far fa-folder fa-6x" />
                  <br />
                  {folder.name}
                </MDBBtn>
              </MDBCol>
            )
          )}
        </MDBRow>
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
              <NewFolder folder={this.state.modalFolder} />
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

export default withRouter(Folders);
