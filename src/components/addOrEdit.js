import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { register } from "./userFunctions";

const AddOrEdit = () => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <form method="POST">
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your first name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              name="firstName"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your last name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              name="lastName"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              name="email"
            />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Role
            </label>
            <input
              type="text"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              name="role"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              name="password"
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddOrEdit;
