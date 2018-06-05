// Code Keypad Component Here
import React, {Component} from 'react';


class Keypad extends Component {
    constructor(props){
        super();

        // this.onKeyUp = this.handleKeyUp
    }

    handleKeyUp = ()=>{
        console.log('Entering password...')
    }

    render() {
        return (
            <React.Fragment>
                <input type="password" onKeyUp={this.handleKeyUp}></input>
            </React.Fragment>
        );
    }
}
export default Keypad;
