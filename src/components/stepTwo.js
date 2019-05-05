import React from "react";
import { MDBInput, MDBCol } from "mdbreact";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class StepTwo extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.handleNext();
  };

  back = e => {
    e.preventDefault();
    this.props.handleBack();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <MDBCol md="12">
          <p> Please add your cloud API in the provided field:</p>
          <MDBInput
            label="API key"
            name="cloudApi"
            className="mt-4"
            defaultValue={values.cloudApi}
            required
            onChange={handleChange("cloudApi")}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </MDBCol>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default StepTwo;
