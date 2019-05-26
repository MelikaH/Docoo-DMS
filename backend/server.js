const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
mongoose.set("useFindAndModify", false);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoURI = "mongodb://localhost:27017/docoo";
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));
var Users = require("./routes/Users");
app.use("/users", Users);

var Company = require("./routes/CompanyRoute");
app.use("/company", Company);

var Folder = require("./routes/FolderRoute");
app.use("/folders", Folder);

var File = require("./routes/FileRouter");
app.use("/files", File);

app.listen(port, function() {
  console.log("server is running on port: " + port);
});
