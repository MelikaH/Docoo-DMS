const express = require("express");
const users = express.Router();
const company = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

const Company = require("../models/Company");
company.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    created: today,
    companyId: null
  };
  const compData = {
    name: "...",
    address: "..",
    email: "...",
    city: "...",
    phone: "...",
    country: "...",
    cloudApi: "..."
  };
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          Company.create(compData).then(comp => {
            userData.companyId = comp._id;
            User.create(userData)
              .then(user => {
                res.json({ status: user.email + " registered!" });
              })
              .catch(err => {
                res.send("error:" + err);
              });
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
            role: user.role,
            companyId: user.companyId
          };
          console.log("login token:", payload);
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 60 * 60 * 24
          });
          console.log(user.role);
          res.json({ token: token });
        } else {
          res.json({ error: "pwd not ok" });
        }
      } else {
        res.json({ error: "user not found" });
      }
    })
    .catch(err => {
      res.json({ error: err });
    });
});

users.post("/newEmp", (req, res) => {
  insertEmployee(req, res);
});

function updateUser(req, res, employee, today) {
  employee.firstName = req.body.firstName;
  employee.lastName = req.body.lastName;
  employee.email = req.body.email;
  employee.role = req.body.role;
  employee.companyId = req.body.companyId;
  created = today;
  if (req.body.password != "") employee.password = req.body.password;
  if (req.body._id == "") employee.created = today;

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    employee.password = hash;
    employee.save((err, doc) => {
      if (!err) res.send({ status: "ok" });
      else {
        console.log("Error during record insertion: " + err);
        res.send({ error: err });
      }
    });
  });
}
function insertEmployee(req, res) {
  const today = new Date();
  var employee = new User();
  if (req.body._id != "")
    User.findOne({ _id: req.body._id }).then(u => {
      updateUser(req, res, u);
    });
  else updateUser(req, res, employee);
}

users.get("/dashboard", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
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
          role: user.role,
          date: user.date,
          companyId: user.companyId
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

users.get("/userpage", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
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
          role: user.role,
          date: user.date
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
  console.log(req.header);
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
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
});
// To Get Employee Details By Employee ID
users.get("/:id", function(req, res) {
  let id = req.params.id;
  User.findById(id, function(err, employee) {
    res.json(employee);
  });
});

users.delete("/:id", (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id }, function(err, employee) {
    if (err) res.json(err);
    else res.json("Employee Deleted Successfully");
  });
});

users.get("/", (req, res) => {
  console.log("back users");
  var user = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY);
  User.find({ isDeleted: "false", companyId: user.companyId }).then(x => {
    res.json(x);
  });
});

// To Update The Employee Details
users.route("/edit/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, employee) {
    if (!employee)
      return next(new Error("Unable To Find Employee With This Id"));
    else {
      employee.firstName = req.body.firstName;
      employee.lastName = req.body.lastName;
      employee.email = req.body.email;
      employee.phone = req.body.phone;

      employee
        .save()
        .then(emp => {
          res.json("Employee Updated Successfully");
        })
        .catch(err => {
          res.status(400).send("Unable To Update Employee");
        });
    }
  });
});

module.exports = users;
