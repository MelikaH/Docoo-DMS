import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import { storage } from "../firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      isOpen: false,
      selectedFile: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

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
      error => {
        // error function ....
        console.log(error);
      },
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
      <div>
        <MDBCol>
          <MDBCard style={{ width: "100%" }}>
            <MDBCardImage
              className="img-fluid"
              src={this.state.url || "http://via.placeholder.com/792x300"}
              alt="Uploaded image"
              waves
            />

            <MDBCardBody>
              <MDBCardTitle>Uploading Document</MDBCardTitle>
              <progress
                value={this.state.progress}
                max="100"
                active={barprogress}
                style={{ flex: 1 }}
              />
              <MDBCardText>
                Please, choose the file and then click the UPLOAD button to
                upload it.
              </MDBCardText>

              <input type="file" onChange={this.handleChange} />
              <MDBBtn onClick={this.handleUpload} style={{ flex: 1 }}>
                Upload
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}

export default Home;
