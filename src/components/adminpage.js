import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import FolderIcon from "@material-ui/icons/Folder";
import Collapse from "@material-ui/core/Collapse";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import PortraitRounded from "@material-ui/icons/PortraitRounded";
import Notes from "@material-ui/icons/Notes";
import HomeOutlined from "@material-ui/icons/HomeOutlined";

import { MDBBtn, MDBInput, MDBCol } from "mdbreact";
import jwt_decode from "jwt-decode";

import Home from "../components/home";
import Users from "../components/users";
import Organization from "../components/orgInfo";
import Folders from "../components/folders";
import Access from "../components/access";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      firstName: "",
      folder: true,
      main: "home"
    };
  }

  home = () => {
    this.setState(state => ({ main: "home" }));
  };

  users = () => {
    this.setState(state => ({ main: "users" }));
  };

  orgInfo = () => {
    this.setState(state => ({ main: "orgInfo" }));
  };

  access = () => {
    this.setState(state => ({ main: "access" }));
  };

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
    console.log();
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName
    });
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleClick = () => {
    this.setState(state => ({ folder: !state.folder }));
  };
  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="secondary"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open} id="toolbar">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
              Hi, {this.state.firstName}!
            </Typography>
            <MDBCol md="6" style={{ flex: 1 }}>
              <MDBInput hint="Search" type="text" containerClass="mt-0" />
            </MDBCol>

            <i class="fas fa-user fa-2x" id="usericon" />

            <MDBBtn right href="" onClick={this.logOut.bind(this)}>
              LOG OUT
            </MDBBtn>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={this.home}>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={this.users}>
              <ListItemIcon>
                <PortraitRounded />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button onClick={this.access}>
              <ListItemIcon>
                <VerifiedUser />
              </ListItemIcon>
              <ListItemText primary="Access Control" />
            </ListItem>
            <ListItem button onClick={this.orgInfo}>
              <ListItemIcon>
                <Notes />
              </ListItemIcon>
              <ListItemText primary="Organization Information" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText inset primary="Folders" />
              {this.state.folder ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.folder} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.main == "home" ? <Home /> : null}
          {this.state.main == "users" ? <Users /> : null}
          {this.state.main == "access" ? <Access /> : null}
          {this.state.main == "orgInfo" ? <Organization /> : null}
        </main>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Admin);
