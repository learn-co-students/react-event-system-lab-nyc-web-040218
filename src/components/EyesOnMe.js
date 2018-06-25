// Code EyesOnMe Component Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class EyesOnMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  focusHandler = ()=> {
    console.log('Good!')
  }

  blurHandler() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focusHandler} onBlur={this.blurHandler} />
    );
  }
}

 EyesOnMe.propTypes = propTypes;
 EyesOnMe.defaultProps = defaultProps;
