import React from "react";
import ReactDOM from "react-dom";

class Keypad extends React.Component {
  constructor(props) {
    super(props)
  }

  myFunc(event) {
    console.log("Entering password...");
  }

  render() {
    return (
      <input onKeyUp={this.myFunc} type="password" />
    );
  }
}

export default Keypad;
