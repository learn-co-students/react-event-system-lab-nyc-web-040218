import React from 'react'

 class EyesOnMe extends React.Component {

   good() {
     return console.log('Good!')
   }

   eyes() {
     return console.log('Hey! Eyes on me!')
   }

   render() {
     return (
       <button onFocus={this.good} onBlur={this.eyes}>Cool button </button>
     )
   }
 }

 export default EyesOnMe;
