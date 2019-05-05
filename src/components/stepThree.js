import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class StepThree extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.handleNext();
  };

  back = e => {
    e.preventDefault();
    this.props.handleBack();
  };

  skip = e => {
    e.preventDefault();
    this.props.handleSkip();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <MDBCol md="12">
          <p>
            If you do skip this step, Docoo will set the automatic form for the
            usage.
          </p>
        </MDBCol>
        <MDBRow>
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
        </MDBRow>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default StepThree;
