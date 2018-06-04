import React from 'react';

class Keypad extends React.Component {
  handleKeyUp() {
    console.log("Entering password...")
  }

  render() {
    return (
      <form onKeyUp={this.handleKeyUp}>
        <input type="password"/>
      </form>
    )
  }
}

export default Keypad;
