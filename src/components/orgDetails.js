import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class OrgDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Organization Details" />
          <TextField
            hintText="Enter your organization name"
            floatingLabelText="Organization Name"
            onChange={handleChange("name")}
            defaultValue={values.name}
          />
          <br />
          <TextField
            hintText="Enter your organization address"
            floatingLabelText="Organization Address"
            onChange={handleChange("address")}
            defaultValue={values.address}
          />
          <br />
          <TextField
            hintText="Enter your organization phone"
            floatingLabelText="Organization Phone"
            onChange={handleChange("phone")}
            defaultValue={values.phone}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default OrgDetails;
