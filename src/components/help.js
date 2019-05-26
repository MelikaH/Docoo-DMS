import React, { Component } from "react";
import "../index.css";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader
} from "mdbreact";
import Grid from "@material-ui/core/Grid";

class Help extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="helpBack" />
        <Grid container className="muigrid">
          <MDBCard className="aboutCard my-5 px-5 pb-5 ">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold my-5 text-center">
                We are here to help you!
              </h2>
              <p className="grey-text w-responsive mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5" />
              </MDBRow>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="6">
                    <p id="helpparag">
                      Docoo has its team for support and help, created primarily
                      for you! Do not hesitate to ask any question related to
                      our services or Docoo itself. We are here for you. If you
                      do not like this approach, you can call us on number:{" "}
                      <strong>1234-566 </strong>
                      or visit us in our office in Sarajevo, Dzemala Bijedica
                      25F. <br />
                      Happy managing!
                    </p>
                  </MDBCol>
                  <MDBCol md="6">
                    <form
                      action="mailto:docoo@hotmail.com"
                      method="POST"
                      encType="text/plain"
                    >
                      <p className="h5 text-center mb-4">Write to us</p>
                      <div className="grey-text">
                        <MDBInput
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          name="name"
                          onChange={this.handleChange}
                          value={this.state.name}
                        />
                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                          name="email"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                        <MDBInput
                          label="Subject"
                          icon="tag"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          name="subject"
                          onChange={this.handleChange}
                          value={this.state.subject}
                        />
                        <MDBInput
                          type="textarea"
                          rows="2"
                          label="Your message"
                          icon="pencil-alt"
                          name="message"
                          onChange={this.handleChange}
                          value={this.state.message}
                        />
                      </div>
                      <MDBBtn gradient="aqua" style={{ flex: 1 }} type="submit">
                        Send
                      </MDBBtn>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCardBody>
          </MDBCard>
        </Grid>
      </div>
    );
  }
}

export default Help;
