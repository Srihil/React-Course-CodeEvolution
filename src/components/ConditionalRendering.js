import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {

    // 2️⃣ Element Variable Approach
    /*
    let message;
    if (this.state.isLoggedIn) {
      message = <h1>Welcome Sahil</h1>;
    } else {
      message = <h1>Welcome Guest</h1>;
    }
    */

    return (
      <div>

        {/* 3️⃣ Ternary Operator (Recommended) */}
        {
          this.state.isLoggedIn
            ? <h1>Welcome Sahil</h1>
            : <h1>Welcome Guest</h1>
        }

        {/* 4️⃣ Short Circuit Operator (Recommended for simple cases) */}
        {
          this.state.isLoggedIn &&
          <h2>You are logged in</h2>
        }
        {/* 1️⃣ If/Else Approach (Used outside return)

        render() {
          if(this.state.isLoggedIn){
            return <h1>Welcome Sahil</h1>
          } else {
            return <h1>Welcome Guest</h1>
          }
        }

        */}

        {/* 2️⃣ Element Variable Usage Example

        {message}

        */}

      </div>
    );
  }
}

export default ConditionalRendering;