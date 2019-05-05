const express = require("express");
const company = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const Company = require("../models/Company");
company.use(cors());

process.env.SECRET_KEY = "secret";

company.post("/orginfo", (req, res) => {
  const today = new Date();
  const companyData = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.address,
    phone: req.body.phone,
    city: req.body.city,
    country: req.body.country,
    cloudApi: req.body.cloudApi,
    created: today
  };
  Company.findOne({
    name: req.body.name
  })
    .then(company => {
      if (!company) {
        Company.create(companyData)
          .then(company => {
            res.json({ status: company.name + "registered!" });
          })
          .catch(err => {
            res.send("error:" + err);
          });
      } else {
        res.json({ error: "Company already exists" });
      }
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

company.get("/admin", (req, res) => {
  var decoded = jwt.verify(req.header["authorization"], process.env.SECRET_KEY);
  Company.findOne({
    id: decoded.id
  })
    .then(company => {
      if (company) {
        res.json(company);
      } else {
        res.send("Company doesn't exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = company;
