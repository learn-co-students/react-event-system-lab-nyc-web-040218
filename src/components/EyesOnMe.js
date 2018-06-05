// Code EyesOnMe Component Here

import React from 'react'

export default class EyesOnMe extends React.Component{

  fucus = () =>{
    console.log('Good!');
  }

  bluh = () =>{
    console.log('Hey! Eyes on me!');
  }
  render(){

    return(

      <button onFocus={this.fucus} onBlur={this.bluh} />
    )
  }
}
