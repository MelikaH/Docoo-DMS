const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  tags: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: String
  },
  folder: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = File = mongoose.model("files", FileSchema);
