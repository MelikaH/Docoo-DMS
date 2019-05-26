import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blueGrey[900]
    }
  }
});

// Add a request interceptor
axios.interceptors.request.use(function(config) {
  config.headers.Authorization = localStorage.usertoken;
  return config;
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
