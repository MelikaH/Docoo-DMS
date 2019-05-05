const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    created: today
  };

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + "registered!" });
            })
            .catch(err => {
              res.send("error:" + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.json({ error: "user doesn't exist." });
        }
      } else {
        res.json({ error: "User doesn't exist" });
      }
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

users.get("/dashboard", (req, res) => {
  var decoded = jwt.verify(req.header["authorization"], process.env.SECRET_KEY);
  User.findOne({
    id: decoded.id
  })
    .then(user => {
      if (user) {
        const payload = {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role
        };
        res.json(user);
      } else {
        res.send("User doesn't exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.get("/admin", (req, res) => {
  var decoded = jwt.verify(req.header["authorization"], process.env.SECRET_KEY);
  User.findOne({
    id: decoded.id
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("User doesn't exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
  User.find({}, function(err, users) {
    if (err) {
      res.send("Something went really wrong...");
      next();
    }
    res.json(users);
  });
});

users.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = users;
