import React, { Component } from "react";
import OrgDetails from "./orgDetails";
import CloudApi from "./cloudApi";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

function getSteps() {
  return ["Genreal", "Sync place", "Thank you!"];
}

export class OrganizationForm extends Component {
  state = {
    step: 1,
    name: "",
    address: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    cloudApi: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { name, address, email, phone, city, country, cloudApi } = this.state;
    const values = { name, address, email, phone, city, country, cloudApi };
    const steps = getSteps();

    switch (step) {
      case 1:
        return (
          <div>
            <Stepper step={step}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};

                return (
                  <Step key={label} {...props} next={this.handleNext}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <OrgDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Stepper step={step}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};

                return (
                  <Step key={label} {...props} next={this.handleNext}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <CloudApi
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />{" "}
          </div>
        );
      case 3:
        return <h1>Make document form</h1>;
      case 4:
        return <h1>Success</h1>;
    }
    return <Stepper />;
  }
}

export default OrganizationForm;
