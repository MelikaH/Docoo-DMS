import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FolderIcon from "@material-ui/icons/Folder";
import {
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBFormInline
} from "mdbreact";
import jwt_decode from "jwt-decode";
import Profile from "./profile";
import Home from "./home";
import Navbar from "./navbar";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  smaller: {
    fontSize: "1.0em"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      open: true,
      main: "home",
      firstName: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName
    });
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  profile = () => {
    this.setState(state => ({ main: "profile" }));
  };
  home = () => {
    this.setState(state => ({ main: "home" }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <img src="public/favicon.ico" />
        </div>

        <Divider />
        <MDBNavbarNav left>
          <MDBNavItem active className="dashlink" onClick={this.home}>
            <MDBRow>
              <i className="fas fa-home" />
              <MDBNavLink to="/dashboard" className="sidelink">
                Home
              </MDBNavLink>
            </MDBRow>
          </MDBNavItem>
          <MDBNavItem button className="dashlink" onClick={this.profile}>
            <MDBRow>
              <i className="fas fa-user" />
              <MDBNavLink to="/dashboard" className="sidelink">
                Profile
              </MDBNavLink>
            </MDBRow>
          </MDBNavItem>

          <List>
            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText inset primary="Folders" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
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
        </MDBNavbarNav>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Navbar />
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <h2 className="welcome">
            Welcome to your dashboard, {this.state.firstName}!
          </h2>
          {this.state.main == "profile" ? <Profile /> : <Home />}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Dashboard);
