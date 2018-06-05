// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ""
    }
  }

  inputChange = (event) => {
    console.log('Entering password...')
  }

  render = () => {
    return (
      <input onKeyUp={this.inputChange} type='password'/>
    )
  }

}

export default Keypad;
