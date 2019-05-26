import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import Login from "./components/login";
import Register from "./components/register";
import Landing from "./components/landing.component";
import OrganizationInfo from "./components/organizationInfo";
import Terms from "./components/terms";
import Users from "./components/users";
import Dashboard from "./components/dashboard";
import About from "./components/about";
import Help from "./components/help";
import Admin from "./components/adminpage";
import NotAvailable from "./components/not-available";
import NewEmployee from "./components/newEmp";
import NewFolder from "./components/newFolder";
import AddOrEdit from "./components/addOrEdit";
import EditEmployee from "./components/editUser";
import Folders from "./components/folders";
import UserPage from "./components/userPage";
import InsideFolder from "./components/insideFolder";
import Files from "./components/files";
import Search from "./components/searchResult";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navShown: true
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <NotAvailable>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/orginfo" component={OrganizationInfo} />
              <Route path="/terms" component={Terms} />
              <Route path="/about" component={About} />
              <Route path="/users" component={Users} />
              <Route path="/help" component={Help} />
              <Route path="/newFolder" component={NewFolder} />
              <Route
                path="/admin/:child"
                render={({ match }) => <Admin child={match.params.child} />}
              />
              <Route exact path="/admin" component={Admin} />
              <Route path="/userpage" component={UserPage} />
              <Route path="/newfolder" component={NewFolder} />
              <Route path="/addoredit" component={AddOrEdit} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/newEmp" component={NewEmployee} />
              <Route path="/folders" component={Folders} />
              <Route path="/insideFolder" component={InsideFolder} />
              <Route path="/files" component={Files} />
              <Route path="/search" component={Search} />
              <Route path="/editEmployee/:id" component={EditEmployee} />
            </div>
          </div>
        </NotAvailable>
      </Router>
    );
  }
}
export default App;
