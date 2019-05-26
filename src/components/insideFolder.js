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
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import Home from "./home";
import NewFolder from "./newFolder";
import { withRouter } from "react-router-dom";

import { MDBBtn } from "mdbreact";
import { getItems } from "./folderFunctions";
import { getFolders } from "./folderFunctions";
import { deleteFolder } from "./folderFunctions";

class InsideFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      parentId: "",
      description: "",
      items: [],
      modal14: false,
      modal15: false,
      permissions: [],
      creator: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      creator: decoded.firstName + " " + decoded.lastName,
      items: [],
      modalTitle: "",
      folder: decoded.folder
    });
    console.log("starting get users");
    this.loadItems();
  }

  loadItems = () => {
    this.setState({
      name: this.state.name,
      parentId: this.state.parentId,
      description: this.state.description,
      persmission: this.state.permissions,
      creator: this.state.creator,
      items: []
    });
    getItems().then(x => {
      console.log("setting state");
      this.setState({ items: x });
      console.log("done");
    });
  };

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
        <h2 centered>Folder inside Section</h2>
        <hr />
        <MDBBtn
          gradient="aqua"
          onClick={() => this.toggle(14, "Add New Folder ", {})}
        >
          + ADD NEW FOLDER
        </MDBBtn>
        <MDBBtn
          gradient="aqua"
          onClick={() => this.toggle(15, "Add New File ", {})}
        >
          + ADD NEW FILE
        </MDBBtn>

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
        <div id="modalContainer">
          <MDBModal
            className="modalup"
            isOpen={this.state.modal15}
            toggle={this.toggle}
            centered
            size="lg"
          >
            <MDBModalHeader toggle={() => this.toggle(15)}>
              {this.state.modalTitle}
            </MDBModalHeader>
            <MDBModalBody>
              <Home />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => this.toggle(15)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </div>
    );
  }
}

export default withRouter(InsideFolder);
