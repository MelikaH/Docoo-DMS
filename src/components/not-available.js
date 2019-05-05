import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer, MDBBtn } from "mdbreact";

class NotAvailable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <MDBContainer className="containerError">
          <MDBRow>
            <MDBCol md="12" lg="6">
              <img src="../src/pluto-page-not-found.png" />
            </MDBCol>
            <MDBCol md="12" lg="6">
              <h1 id="errortext">Ooops! Something went wrong...</h1>
              <p>
                Please check your Internet connection or correctness of the web
                adress you are searching for.
              </p>
              <MDBBtn gradient="aqua" id="errorbtn" href="/">
                GO BACK
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
    return this.props.children;
  }
}

export default NotAvailable;
