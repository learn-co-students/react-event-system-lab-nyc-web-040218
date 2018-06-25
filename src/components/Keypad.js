// Code Keypad Component Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pwdHandler = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.pwdHandler} />
    );
  }
}

 Keypad.propTypes = propTypes;
 Keypad.defaultProps = defaultProps;
