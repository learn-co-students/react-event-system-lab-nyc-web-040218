import React from 'react'

export default class Keypad extends React.Component{
    constructor(props){
        super(props);

        this.state = {input: ""}
    }

    handlePasswordChange = (event) => {
        console.log('Entering password...')
    }
    
    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.handlePasswordChange}/>
                <button type="submit" />
            </div>
        );
    }
}