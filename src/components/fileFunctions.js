import axios from "axios";

export const getFiles = () => {
  return axios.get("/files").then(res => {
    console.log("returning files ...");
    return res.data;
  });
};

export const deleteFile = id => {
  return axios.delete("/files/" + id);
};

export const addNew = newFile => {
  return axios
    .post("/files/home", {
      name: newFile.name,
      description: newFile.description,
      tags: newFile.tags,
      creator: newFile.creator,
      _id: newFile._id,
      folder: newFile.folder
    })
    .catch(err => {
      console.log(err);
    });
};
