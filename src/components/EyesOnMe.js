// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
  constructor(props) {
    super(props);
  }

  onFocus = () => {
    console.log("Good!");
  };

  onBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        >Yo!
      </button >
    );
  }
}

export default EyesOnMe;