import React from 'react';

class EyesOnMe extends React.Component {
  handleBlur() {
    console.log('Hey! Eyes on me!')
  }

  handleFocus() {
    console.log('Good!')
  }

  render() {
    return (
      <button
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}>
      Click
      </button>
    )
  }
}

export default EyesOnMe;
