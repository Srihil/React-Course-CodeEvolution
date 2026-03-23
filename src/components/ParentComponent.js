import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Parent"
    };
  }

  greetParent = (childName) => {
    this.setState({
      message: `Hello from ${childName}`
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>

        {/* Passing method to child */}
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;