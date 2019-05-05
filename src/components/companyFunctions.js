import axios from "axios";

export const organization = newCompany => {
  return axios
    .post("company/orginfo", {
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
