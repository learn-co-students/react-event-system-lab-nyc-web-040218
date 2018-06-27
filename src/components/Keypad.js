import React from 'react'

class Keypad extends React.Component {

  whenType() {
  return console.log('Entering password...')
  }

  render() {
    return(
      <input type="password" onKeyUp={this.whenType} />
    )
  }

}

export default Keypad;
