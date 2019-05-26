const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FolderSchema = new Schema({
  name: {
    type: String
  },
  parentId: {
    type: String
  },
  description: {
    type: String
  },
  creator: {
    type: String
  },
  permission: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = Folder = mongoose.model("folders", FolderSchema);
