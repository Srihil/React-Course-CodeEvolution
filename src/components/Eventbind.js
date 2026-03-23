import React, { Component } from "react";

class EventBind extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { message: "Hello" };
  //   this.changeMessage = this.changeMessage.bind(this);
  // }

  // changeMessage() {
  //   this.setState({ message: "Goodbye!" });
  // }

  // Modern approach (Best)
  state = {
    message: "Hello"
  };

  // Class property arrow function automatically binds "this"
  changeMessage = () => {
    this.setState({
      message: "Goodbye!"
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>

        {/* Best approach */}
        <button onClick={this.changeMessage}>
          Click
        </button>

        {/* 1️⃣ Binding in render 
        <button onClick={this.changeMessage.bind(this)}>
          Click
        </button>
        */}

        {/* 2️⃣ Arrow function in render 
        <button onClick={() => this.changeMessage()}>
          Click
        </button>
        */}

        {/* 3️⃣ Binding in constructor 
        <button onClick={this.changeMessage}>
          Click
        </button>
        */}

      </div>
    );
  }
}

export default EventBind;