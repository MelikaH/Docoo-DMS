import axios from "axios";

export const register = newUser => {
  return axios
    .post("/users/register", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role
    })
    .then(res => {
      console.log("Registered!");
    });
};

export const insertUser = newUser => {
  return axios.post("/users/addoredit", {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    password: newUser.password,
    role: newUser.role
  });
};

export const getUsers = () => {
  console.log("gtting users");
  return axios.get("/users").then(res => {
    console.log("returning users ...");
    return res.data;
  });
};

export const deleteUser = id => {
  return axios.delete("/users/" + id);
};

export const login = user => {
  localStorage.removeItem("usertoken");

  return axios
    .post("users/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      if (typeof res.data.token != "undefined")
        localStorage.setItem("usertoken", res.data.token);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const addNew = newUser => {
  return axios
    .post("/users/newEmp", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
      _id: newUser._id,
      companyId: newUser.companyId
    })
    .catch(err => {
      console.log(err);
    });
};
