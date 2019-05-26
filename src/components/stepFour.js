import React, { Component } from "react";
import { browserHistory } from "history";
import {
  MDBAnimation,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import { organization } from "./companyFunctions";
import { withRouter } from "react-router-dom";

export class StepFour extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  back = e => {
    e.preventDefault();
    this.props.handleBack();
  };

  onSave = e => {
    e.preventDefault();
    console.log(this.props);
    const company = {
      name: this.props.values.name,
      address: this.props.values.address,
      email: this.props.values.email,
      city: this.props.values.city,
      phone: this.props.values.phone,
      country: this.props.values.country,
      cloudApi: this.props.values.cloudApi
    };
    console.log("before call");
    organization(company).then(res => {
      this.props.history.push("/userpage");
      console.log("sto te nema");

      console.log("we made it");
    });
  };

  render() {
    const {
      values: { name, address, email, city, phone, country, cloudApi }
    } = this.props;

    return (
      <MuiThemeProvider>
        <List>
          <ListItem primaryText="Organization name" secondaryText={name} />
          <ListItem
            primaryText="Organization address"
            secondaryText={address}
          />
          <ListItem primaryText="Organization email" secondaryText={email} />
          <ListItem primaryText="Organization city" secondaryText={city} />
          <ListItem primaryText="Organization phone" secondaryText={phone} />
          <ListItem
            primaryText="Organization country"
            secondaryText={country}
          />
          <ListItem
            primaryText="Organization cloudApi"
            secondaryText={cloudApi}
          />
        </List>
        <br />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.back}
        />
        <RaisedButton
          label="Confirm"
          primary={true}
          style={styles.button}
          onClick={this.toggle}
        />
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
          <MDBModalHeader toggle={this.toggle}>
            Welcome to our family!
          </MDBModalHeader>
          <MDBModalBody id="modalbody">
            <strong>Congratulations!</strong> You have successfully set up
            Docoo, and now you can start managing your documents. Feel free to
            ask anything on docoo@hotmail.com.
            <MDBRow>
              <MDBCol md="9" className="ml-auto">
                <MDBAnimation type="shake">
                  <i className="far fa-handshake fa-8x" />{" "}
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn outline color="success" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="success" onClick={this.onSave}>
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default withRouter(StepFour);
