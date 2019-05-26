import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBAnimation } from "mdbreact";

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
              <MDBAnimation type="bounceInLeft">
                <img
                  src="/pluto-sign-up.png"
                  alt="Man in space"
                  id="errorimg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="12" lg="6">
              <MDBAnimation type="zoomIn">
                <h1 id="errortext">Ooops! Something went wrong...</h1>
                <p>
                  Please check your Internet connection or correctness of the
                  web adress you are searching for.
                </p>
                <MDBBtn gradient="aqua" id="errorbtn" href="/">
                  GO BACK
                </MDBBtn>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
    return this.props.children;
  }
}

export default NotAvailable;
