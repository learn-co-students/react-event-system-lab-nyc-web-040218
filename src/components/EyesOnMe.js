// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

    soFocused = () => {
        console.log("Good!");
    }
    
    blurred = () => {
        console.log("Hey! Eyes on me!");
    }

    render() {
        return (
            <div>
                <button onFocus={this.soFocused} onBlur={this.blurred} >Click Me</button>
            </div>
        )
    }
}