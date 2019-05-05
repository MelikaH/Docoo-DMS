import React, { Component } from "react";
import { MDBInput, MDBRow } from "mdbreact";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";

export class StepFour extends Component {
  continue = e => {
    e.preventDefault();
    this.props.handleNext();
  };

  back = e => {
    e.preventDefault();
    this.props.handleBack();
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
          onClick={this.continue}
        />
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default StepFour;
