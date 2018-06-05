import React from "react";
import ReactDOM from "react-dom";

class EyesOnMe extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFocus(event) {
    console.log("Good!");
  }

  handleBlur(event) {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>EyesOnMe</button>
    );
  }
}

export default EyesOnMe;
