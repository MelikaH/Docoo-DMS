const express = require("express");
const company = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const Company = require("../models/Company");
company.use(cors());

process.env.SECRET_KEY = "secret";

company.post("/stepFour", (req, res) => {
  var user = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY);
  console.log(user);
  const today = new Date();
  Company.findOne({
    _id: user.companyId
  })
    .then(company => {
      if (company) {
        company.name = req.body.name;
        company.address = req.body.address;
        company.email = req.body.address;
        company.phone = req.body.phone;
        company.city = req.body.city;
        company.country = req.body.country;
        company.cloudApi = req.body.cloudApi;
        company.created = today;

        company.save((err, company) => {
          if (!err) {
            res.json({ status: company.name + "registered!" });
            console.log(res);
          } else {
            res.send("error:" + err);
          }
        });
      } else {
        res.json({ error: "Company doesnt exists" });
      }
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

company.get("/admin", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
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

company.get("", (req, res) => {
  var user = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY);

  console.log(user);

  Company.findOne({
    _id: user.companyId
  })
    .then(company => {
      if (company) {
        res.json(company);
      } else {
        res.send("Company " + user.companyId + " doesn't exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});
module.exports = company;
