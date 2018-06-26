// Code Keypad Component Here

import React, { Component } from "react";
// import React from "react";

// class Keypad extends React.Component {
class Keypad extends Component {
  // constructor() {
  //   super()
  //   this.state = {}
  // }

  enteringPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.enteringPassword}
        />
      </div>
    )
  }
}

export default Keypad;