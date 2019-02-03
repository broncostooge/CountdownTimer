import React, { Component } from 'react';

class LeftColumnOutputForCountdownView extends Component {
    constructor(props){
        super(props)

        this.returnToHomePage = this.returnToHomePage.bind(this);
    }
    
    returnToHomePage(){
        this.props.onReturnToHomePage();
    }

    render(){
        return(
            <div>
                <button onClick={this.returnToHomePage}>Return to Beginning</button>
            </div>
        )
    }

}

export default LeftColumnOutputForCountdownView;