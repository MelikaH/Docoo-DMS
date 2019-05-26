import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepFour from "./stepFour";
const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing.unit,
    marginBottom: "100px"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

var h3style = {
  color: "#4020BF",
  marginTop: "20px"
};

function getSteps() {
  return ["Genreal", "Sync place", "Thank You!"];
}

class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    name: "",
    address: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    cloudApi: ""
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  isStepOptional = step => step === 2;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }

    this.setState({
      activeStep: activeStep + 1,
      skipped
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const { name, address, email, phone, city, country, cloudApi } = this.state;
    const values = { name, address, email, phone, city, country, cloudApi };
    switch (activeStep) {
      case 0:
        return (
          <div>
            <h3 style={h3style}>
              Please insert your organization's information in the form provided
              below. Follow the instructions.
            </h3>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};
                if (this.isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (this.isStepSkipped(index)) {
                  props.completed = false;
                }
                return (
                  <Step key={label} {...props} next={this.handleNext}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <StepOne
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              values={values}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <h3 style={h3style}>
              Please insert your organization's information in the form provided
              below. Follow the instructions.
            </h3>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};
                if (this.isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (this.isStepSkipped(index)) {
                  props.completed = false;
                }
                return (
                  <Step key={label} {...props} next={this.handleNext}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <StepTwo
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              values={values}
              handleBack={this.handleBack}
            />
          </div>
        );

      case 2:
        return (
          <div>
            <h3 style={h3style}>
              Please insert your organization's information in the form provided
              below. Follow the instructions.
            </h3>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};
                if (this.isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (this.isStepSkipped(index)) {
                  props.completed = false;
                }
                return (
                  <Step key={label} {...props} next={this.handleNext}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <StepFour
              handleSkip={this.handleSkip}
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              values={values}
              handleBack={this.handleBack}
            />
          </div>
        );
    }
    return <div className={classes.root} />;
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HorizontalLinearStepper);
