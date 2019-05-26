import axios from "axios";

export const addNew = newFolder => {
  return axios
    .post("folders/newFolder", {
      name: newFolder.name,
      description: newFolder.description,
      creator: newFolder.creator,
      parentId: newFolder.parentId,
      permission: newFolder.permission,
      _id: newFolder._id
    })
    .catch(err => {
      console.log(err);
    });
};

export const getFolders = () => {
  console.log("getting folders");
  return axios.get("/folders").then(res => {
    console.log("returning folders ...");
    return res.data;
  });
};

export const getItems = id => {
  console.log("getting content");
  return axios.get("/folders/" + id).then(res => {
    console.log("returning folder content");
    return res.data;
  });
};

export const deleteFolder = id => {
  return axios.delete("/folders/" + id);
};
