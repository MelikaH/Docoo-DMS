import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { MDBBtn, MDBNavbarNav, MDBNavItem, MDBRow } from "mdbreact";
import axios from "axios";

class Navbar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
    console.log();
  }
  render() {
    const userLink = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBRow waves className="navright">
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-2 search"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <MDBBtn
              href=""
              onClick={this.logOut.bind(this)}
              className="nav-link logoutbtn"
            >
              Log out
            </MDBBtn>
          </MDBRow>
        </MDBNavItem>
      </MDBNavbarNav>
    );

    return (
      <nav className="navbar navbar.expand-lg navbar-dark bg-dark ">
        <ul className="navbar-nav">
          <li className="dashboard">
            <strong>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </strong>
          </li>
        </ul>
        {userLink}
      </nav>
    );
  }
}

export default withRouter(Navbar);
