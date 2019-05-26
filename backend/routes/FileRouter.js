const express = require("express");
const files = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const File = require("../models/File");
files.use(cors());

process.env.SECRET_KEY = "secret";

files.post("/home", (req, res) => {
  insertFile(req, res);
});
/**/

/**/
function insertFile(req, res) {
  const today = new Date();
  var file = new File();
  if (req.body._id != "")
    File.findOne({ _id: req.body._id }).then(u => {
      updateFile(req, res, u);
    });
  else updateFile(req, res, file);
}

function updateFile(req, res, file, today) {
  file.name = req.body.name;
  file.description = req.body.description;
  file.tags = req.body.tags;
  file.creator = req.body.creator;
  file.folder = req.body.folder;
  if (req.body._id == "") file.created = today;

  file.save((err, doc) => {
    if (!err) res.send({ status: "ok" });
    else {
      console.log("Error during record insertion: " + err);
      res.send({ error: err });
    }
  });
}

files.get("/", (req, res) => {
  console.log("back files");
  File.find({ isDeleted: "false" }).then(x => {
    res.json(x);
  });
});

files.delete("/:id", (req, res) => {
  File.findByIdAndRemove({ _id: req.params.id }, function(err, file) {
    if (err) res.json(err);
    else res.json("File Deleted Successfully");
  });
});

module.exports = files;
