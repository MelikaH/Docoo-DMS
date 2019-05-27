import React, { Component } from "react";

class NoContent extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-8 mx-auto">
        <h1 className="text-center">Welcome to your dashboard!</h1>
        <br />
        <p className="text-center">
          If you want to add new file, click on the <strong>Files</strong> list
          item on the side navigation bar on the left.
        </p>
        <p className="text-center">Enjoy!</p>
      </div>
    );
  }
}

export default NoContent;
