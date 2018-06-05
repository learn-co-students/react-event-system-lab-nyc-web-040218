// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {
  constructor(props) {
    super(props)

    this.state = {clicked: false}
  }

  focused = (event) => {
    console.log('Good!')
  }

  blurred = (event) => {
    console.log('Hey! Eyes on me!')
  }



  render  = () => {
    return (
      <button onFocus={this.focused} onBlur={this.blurred} />
    )


  }
}

export default EyesOnMe;
