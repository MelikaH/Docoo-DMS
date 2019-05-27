import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getFiles } from "./fileFunctions";
import { deleteFile } from "./fileFunctions";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import jwt_decode from "jwt-decode";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import Home from "./home";

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      name: "",
      description: "",
      tags: "",
      created: "",
      creator: "",
      modal14: false,
      files: []
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      creator: decoded.firstName + " " + decoded.lastName,
      files: [],
      modalTitle: ""
    });
    console.log("starting get files");
    this.loadFiles();
  }

  loadFiles = () => {
    this.setState({
      _id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      creator: this.state.creator,
      tags: this.state.tags
    });
    getFiles().then(f => {
      console.log("setting state of files");
      this.setState({ files: f });
      console.log("files all set");
    });
  };

  toggle = (nr, title, fil) => {
    console.log(fil);
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      modalTitle: title,
      modalFile: fil
    });
  };

  render() {
    return (
      <div id="fileDiv" className="my-5 px-1 pb-1 text-center">
        <h2 centered>File Section</h2>
        <hr />
        <MDBBtn
          gradient="aqua"
          id="addemployee"
          onClick={() => this.toggle(14, "Add New File ", {})}
        >
          + ADD NEW FILE{" "}
        </MDBBtn>
        <MDBRow>
          {this.state.files.map((file, key) => (
            <MDBCol key={file._id} lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBBtn
                tag="a"
                size="lg"
                floating
                onClick={() => this.toggle(9, "File info", {})}
              >
                <i className=" far fa-file fa-6x" />
                <br />
                {file.name}
              </MDBBtn>
              <p className="text-uppercase blue-text">{file.creator} </p>
              <p className="grey-text">Description: {file.description}</p>
              <MDBRow>
                <MDBCol>
                  <a
                    className="p-2 fa-lg"
                    onClick={() => {
                      deleteFile(file._id).then(res => {
                        this.loadFiles();
                      });
                    }}
                  >
                    <Delete className="blue-text" />
                  </a>
                  <a
                    onClick={() => this.toggle(14, "Edit File", file)}
                    className="p-2 fa-lg"
                  >
                    <Edit className="blue-text" />
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          ))}
        </MDBRow>
        <div id="modalContainer1">
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
              <Home file={this.state.modalFile} />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => this.toggle(14)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
        <div id="modalContainer2">
          <MDBModal
            className="modalup"
            isOpen={this.state.modal9}
            toggle={this.toggle}
            fullHeight
            position="bottom"
          >
            <MDBModalHeader toggle={() => this.toggle(9)}>
              {this.state.modalTitle}
            </MDBModalHeader>
            <MDBModalBody>nista</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => this.toggle(9)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </div>
    );
  }
}

export default Files;
