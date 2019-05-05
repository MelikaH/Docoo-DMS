import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFooter,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBIcon
} from "mdbreact";
import "../index.css";

class Landing extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );

    const away = (
      <MDBNavItem>
        <MDBRow waves>
          <MDBBtn href="/register" className="nav-link">
            Register
          </MDBBtn>
          <MDBBtn href="/login" className="nav-link">
            Login
          </MDBBtn>
        </MDBRow>
      </MDBNavItem>
    );

    const here = (
      <MDBNavItem>
        <MDBRow waves id="whenloggednav">
          <i class="fas fa-user fa-2x" />

          <MDBBtn href="" onClick={this.logOut.bind(this)} className="nav-link">
            Log out
          </MDBBtn>
        </MDBRow>
      </MDBNavItem>
    );
    return (
      <div id="apppage">
        <MDBView>
          <nav class="navbar navbar-expand-lg navbar-dark" id="firstnav">
            <div class="container ">
              <a class="navbar-brand" href="">
                <img src="../../public/favicon.ico" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
                right
              >
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link waves-effect waves-light" href="/about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link waves-effect waves-light" href="/help">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <MDBNavbarNav right>
                {localStorage.usertoken ? here : away}
              </MDBNavbarNav>
            </div>
          </nav>
          <MDBMask className="d-flex justify-content-center align-items-center gradient view-overlay hm-white-light z-depth-1-half">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 ">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Docoo is a manager you have been waiting for
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    <i>
                      "Docoo boosted our working habits, profit is getting
                      bigger and our company is much happier without all those
                      papers around. Now, everything is just one click away!"
                    </i>
                  </h6>
                  <MDBBtn href="/register" color="white">
                    Join Us
                  </MDBBtn>
                  <MDBBtn href="/about" outline color="white">
                    Learn More
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img src="" alt="" className="img-fluid" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">
                  Why is it so great?
                </h2>
                <p className="lead grey-text w-responsive mx-auto mb-5">
                  “Docoo” is the first Bosnian- Herzegovinian DMS that is
                  affordable for small and medium-sized companies, and that is
                  fulfilling all their administrative and managerial needs. It
                  allows its users to have personalized access to all allowed
                  documents as well as their own documents that they created or
                  updated.
                </p>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBIcon
                      icon="folder-open"
                      size="3x"
                      className="deep-purple-text "
                    />
                    <h5 className="font-weight-bold my-4">Document Indexing</h5>
                    <p className="grey-text mb-md-0 mb-5">
                      Documents are easy to find through search engine or in
                      folders using any name/date/keyword related to searched
                      document.
                    </p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBIcon
                      icon="address-card"
                      size="3x"
                      className="indigo-text"
                    />
                    <h5 className="font-weight-bold my-4">Personalized</h5>
                    <p className="grey-text mb-md-0 mb-5">
                      Each user has their own dashboard personalized, with
                      documents of their interest.
                    </p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBIcon icon="lock" size="3x" className="teal-text" />
                    <h5 className="font-weight-bold my-4">Security</h5>
                    <p className="grey-text mb-md-0 mb-5">
                      All your data are secure from unauthorized employees or
                      outside the company. Admin has an access control.
                    </p>
                  </MDBCol>
                </MDBRow>
              </section>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBFooter
          color="unique-color-dark"
          className="page-footer font-small pt-0"
        >
          <div>
            <MDBContainer fluid className="text-center text-md-left gradient">
              <MDBRow className="py-4 d-flex align-items-center">
                <MDBCol
                  md="6"
                  lg="5"
                  className="text-center text-md-left mb-4 mb-md-0"
                >
                  <h6 className="mb-0 white-text">
                    Get connected with us on social networks!
                  </h6>
                </MDBCol>
                <MDBCol md="6" lg="7" className="text-center text-md-right">
                  <a className="fb-ic ml-0">
                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                  </a>
                  <a className="tw-ic">
                    <i className="fab fa-twitter white-text mr-lg-4"> </i>
                  </a>
                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                  </a>
                  <a className="li-ic">
                    <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                  </a>
                  <a className="ins-ic">
                    <i className="fab fa-instagram white-text mr-lg-4"> </i>
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <MDBContainer className="mt-5 mb-4 text-center text-md-left">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Docoo</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  Here you can use rows and columns here to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Useful links</strong>
                </h6>
                <hr
                  className="indigo mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <a href="/about">About Us</a>
                </p>
                <p>
                  <a href="/help">Help</a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Contact</strong>
                </h6>
                <hr
                  className="teal mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <i className="fa fa-home mr-3" /> Sarajevo, 71000, BH
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> melikahodzic@hotmail.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 387 62 852 304
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default withRouter(Landing);
