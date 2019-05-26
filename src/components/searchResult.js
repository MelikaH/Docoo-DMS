import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Go to the store", "Wash the dishes", "Learn some code"],
      filtered: []
    };
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
  render() {
    return (
      <div classname="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Search;
