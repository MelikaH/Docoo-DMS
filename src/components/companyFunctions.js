import axios from "axios";
import jwt_decode from "jwt-decode";

export const organization = newCompany => {
  console.log(newCompany);
  return axios
    .post("/company/stepFour", {
      name: newCompany.name,
      address: newCompany.address,
      email: newCompany.address,
      phone: newCompany.phone,
      city: newCompany.city,
      country: newCompany.country,
      cloudApi: newCompany.cloudApi
    })
    .then(res => {
      console.log("Organization registered!");
    });
};

export const getCompany = () => {
  console.log("geting company");

  return axios.get("/company").then(res => {
    console.log("returning coompany ...");
    return res.data;
  });
};
