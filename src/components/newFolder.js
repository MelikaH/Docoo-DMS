import React, { Component } from "react";
import { MDBCol, MDBRow, MDBInput, MDBBtn } from "mdbreact";
import InputLabel from "@material-ui/core/InputLabel";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "@material-ui/core/Input";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import jwt_decode from "jwt-decode";

import { addNew } from "./folderFunctions";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});
class NewFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.folder.name || "",
      description: props.folder.description || "",
      creator: props.folder.creator,
      parentId: props.folder.parentId || "",
      id: props.folder._id || "",
      permission: props.folder.permission,
      labelWidth: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      creator: decoded.firstName + " " + decoded.lastName
    });
  }
  onSubmit(e) {
    console.log("clicked add new folder");
    e.preventDefault();
    const folder = {
      _id: this.state.id,
      name: this.state.name,
      parentId: this.state.parentId,
      description: this.state.description,
      creator: this.state.creator,
      permission: this.state.permission
    };

    console.log(folder);
    addNew(folder).then(res => {
      if (res.data.status == "ok") {
        console.log("zavrseno dodavanje");
      } else alert(res.data.error);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider>
        <form
          noValidate
          onSubmit={this.onSubmit}
          className={classes.root}
          autoComplete="off"
        >
          <input type="hidden" name="_id" value={this.state._id} />

          <h3 className="font-weight-bold pl-0 my-4">
            <strong>Create New Folder</strong>
          </h3>
          <MDBRow className="steponerow">
            <MDBCol>
              <TextField
                hintText="Enter folder name"
                floatingLabelText="Folder Name"
                onChange={this.handleChange}
                className="organizationInput1"
                name="name"
                value={this.state.name}
              />
              <div className="invalid-feedback">Please fill it up</div>
              <TextField
                hintText="Enter parent folder"
                floatingLabelText="Parent folder"
                onChange={this.handleChange}
                className="organizationInput2"
                name="parentId"
                value={this.state.parentId}
              />
            </MDBCol>

            <MDBCol>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="role-permission">Banker</InputLabel>
                <NativeSelect
                  defaultValue={2}
                  input={
                    <Input
                      name="permissionBanker"
                      id="role-permission"
                      value={this.state.permission}
                      onChange={this.handleChange}
                    />
                  }
                >
                  <option value={0}>Read</option>
                  <option value={1}>Write</option>
                  <option value={2}>Read/Write</option>
                </NativeSelect>
                <FormHelperText>Permission</FormHelperText>
              </FormControl>
            </MDBCol>
            <MDBCol>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="role-permissiona">Fund Manager</InputLabel>
                <NativeSelect
                  defaultValue={2}
                  input={
                    <Input
                      name="permissionFundManager"
                      id="role-permission"
                      value={this.state.permission}
                      onChange={this.handleChange}
                    />
                  }
                >
                  <option value={0}>Read</option>
                  <option value={1}>Write</option>
                  <option value={2}>Read/Write</option>
                </NativeSelect>
                <FormHelperText>Permission</FormHelperText>
              </FormControl>
            </MDBCol>
            <MDBCol>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="role-permissiona">Assistant</InputLabel>
                <NativeSelect
                  defaultValue={2}
                  input={
                    <Input
                      name="permissionAssistant"
                      id="role-permission"
                      value={this.state.permission}
                      onChange={this.handleChange}
                    />
                  }
                >
                  <option value={0}>Read</option>
                  <option value={1}>Write</option>
                  <option value={2}>Read/Write</option>
                </NativeSelect>
                <FormHelperText>Permission</FormHelperText>
              </FormControl>
            </MDBCol>
          </MDBRow>
          <MDBCol md="12">
            <MDBInput
              type="textarea"
              label="Description of the folder"
              rows="3"
              onChange={this.handleChange}
              name="description"
              value={this.state.description}
            />
            <input
              type="text"
              className="form-control"
              name="parentid"
              placeholder="Parent folder id"
              value={this.state.parentId}
              onChange={this.onChange}
              required
              disabled
            />
          </MDBCol>
          <MDBCol md="3" className="ml-md-auto">
            <MDBBtn type="submit"> SAVE </MDBBtn>
          </MDBCol>
        </form>
      </MuiThemeProvider>
    );
  }
}

NewFolder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewFolder);
