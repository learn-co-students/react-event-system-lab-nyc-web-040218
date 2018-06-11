import React from 'react';

class EyesOnMe extends React.Component {
  focusHandle = () => {
    console.log('Good!');
  }

  blurHandle = () => {
    console.log('Hey! Eyes on me!');
  }

  render(){
    return(
      <button onFocus={this.focusHandle} onBlur={this.blurHandle}>
      </button>
    )
  }
}

export default EyesOnMe;
