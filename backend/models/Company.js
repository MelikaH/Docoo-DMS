const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: "Please enter your company's name.",
    required: true
  },
  address: {
    type: String,
    required: "Please enter your company's address.",
    required: true
  },
  email: {
    type: String,
    required: "Please enter your company'semail.",
    required: true
  },
  city: {
    type: String,
    required: "Please enter your company's headquarter city.",
    required: true
  },
  phone: {
    type: String,
    required: "Please enter your company's phone number.",
    required: true
  },
  country: {
    type: String,
    required: "Please enter your company's headquarter country.",
    required: true
  },
  cloudApi: {
    type: String,
    required: "Please enter your cloud api.",
    required: true
  }
});

module.exports = Company = mongoose.model("company", CompanySchema);
