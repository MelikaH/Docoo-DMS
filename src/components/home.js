import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBRow,
  MDBCol
} from "mdbreact";
import { storage } from "../firebase";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import jwt_decode from "jwt-decode";
import NotAvailable from "./not-available";
import { withRouter } from "react-router-dom";

import { addNew } from "./fileFunctions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      isOpen: false,
      selectedFile: null,
      name: props.file ? props.file.name : "",
      description: props.file ? props.file.description : "",
      tags: props.file ? props.file.tags : "",
      creator: props.file ? props.file.creator : "",
      date: this.Date,
      id: "",
      files: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log(props);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      creator: decoded.firstName + " " + decoded.lastName
    });
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    console.log("clicked add new file");
    e.preventDefault();
    const file = {
      _id: this.state.id,
      name: this.state.name,
      tags: this.state.tags,
      description: this.state.description,
      creator: this.state.creator
    };

    console.log(file);
    addNew(file).then(res => {
      console.log("pozivam addNew");
      if (res.data.status === "ok") {
        this.props.history.push("/admin");
      } else alert(res.data.error);
    });

    this.handleUpload();
  }

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {},
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const { barprogress } = this.state;

    return (
      <MuiThemeProvider>
        <MDBCol>
          <MDBCard style={{ width: "100%" }}>
            <MDBCardImage
              className="img-fluid"
              src={this.state.url || "http://via.placeholder.com/792x300"}
              alt="Uploaded image"
              waves
            />

            <MDBCardBody>
              <form
                noValidate
                className="needs-validation"
                onSubmit={this.onSubmit}
              >
                <input type="hidden" name="_id" value={this.state._id} />

                <MDBCardTitle>Uploading Document</MDBCardTitle>

                <MDBCardText>
                  Please insert the needed information and choose the file.
                  Click the UPLOAD button to upload it.
                </MDBCardText>
                <TextField
                  hintText="Enter the file name"
                  floatingLabelText="File Name"
                  onChange={this.onChange}
                  value={this.state.name}
                  className="organizationInput1"
                  name="name"
                />
                <TextField
                  hintText="Enter the file tags"
                  floatingLabelText="File Tags"
                  onChange={this.onChange}
                  value={this.state.tags}
                  className="organizationInput1"
                  name="tags"
                />
                <MDBCol md="12">
                  <MDBInput
                    type="textarea"
                    label="Description of the file"
                    rows="3"
                    value={this.state.description}
                    onChange={this.onChange}
                    name="description"
                  />
                </MDBCol>

                <input
                  type="file"
                  onChange={this.handleChange}
                  style={{ flex: 1 }}
                />

                <progress
                  value={this.state.progress}
                  max="100"
                  active={barprogress}
                  style={{ flex: 1 }}
                />
                <p>Creator:{this.state.creator}</p>
                <MDBCol md="3" className="ml-md-auto">
                  <MDBRow>
                    <MDBBtn type="submit" style={{ flex: 1 }}>
                      Upload
                    </MDBBtn>
                  </MDBRow>
                </MDBCol>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Home);
