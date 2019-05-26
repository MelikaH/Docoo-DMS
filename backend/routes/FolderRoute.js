const express = require("express");
const folders = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Folder = require("../models/Folder");
folders.use(cors());

folders.get("/admin", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  console.log(req.header);
  Folder.findOne({
    id: decoded.id
  })
    .then(folder => {
      if (folder) {
        res.json(folder);
      } else {
        res.send("Folder doesn't exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
  Folder.find((err, docs) => {
    if (!err) {
      res.render("adminpage", {
        list: docs
      });
    }
  });
  res.json("from list");
});

folders.post("/newfolder", (req, res) => {
  createFolder(req, res);
});

function updateFolder(req, res, folder) {
  folder.name = req.body.name;
  folder.parentId = req.body.parentId;
  folder.creator = req.body.creator;
  folder.description = req.body.description;
  folder.permission = [
    req.body.permissionBanker,
    req.body.permissionFundManager,
    req.body.permissionManager
  ];
  folder.date = req.body.date;

  //folder.permission[user.role=='Banker'?0:(user.role=='Manager'?1:(0))]

  folder.save((err, doc) => {
    if (!err) res.send({ status: "ok" });
    else {
      console.log("Error during record insertion: " + err);
      res.send({ error: err });
    }
  });
  console.log("BACKEND DONE");
}

function createFolder(req, res) {
  const today = new Date();
  var folder = new Folder();
  if (req.body._id != "")
    Folder.findOne({ _id: req.body._id }).then(u => {
      updateFolder(req, res, u);
    });
  else updateFolder(req, res, folder);
}

folders.delete("/:id", (req, res) => {
  Folder.findByIdAndRemove({ _id: req.params.id }, function(err, folder) {
    if (err) res.json(err);
    else res.json("Folder Deleted Successfully");
  });
});

folders.get("/", (req, res) => {
  console.log("back folders");
  Folder.find({ isDeleted: "false" }).then(x => {
    res.json(x);
  });
});

folders.get("/:id", (req, res) => {
  Folder.findById(req.params.id, function(err, content) {
    if (!content) {
      return next(new Error("Unable To Find Any Content in This Folder"));
    } else {
      res.json(content);
    }
  });
});

module.exports = folders;
